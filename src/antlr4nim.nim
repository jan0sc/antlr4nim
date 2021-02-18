## Nim interface to ANTLR4 listener/visitor via jsffi

import macros, strutils, json


const jtree {.strdefine.} = ""
const data = staticRead( jtree )

static:
  echo "DATA:"
  echo parseJson(data)

const start {.strdefine.} = ""

const interpreted = 0
const compiled = 1

var grammar {.compileTime.} : NimNode
var style {.compileTime.} = interpreted
var doneEnter {.compileTime.} = false
var doneExit {.compileTime.} = false
var doneVisit {.compileTime.} = false




macro interpret*( g: string, body: untyped ) =
  grammar = g
  style = interpreted
  result = newStmtList(body)


proc listener(): NimNode =
  ## Declares an ANTLR listener block
  result = newStmtList()


proc visitor(): NimNode =
  ## Declares an ANTLR visitor block
  result = newStmtList()



template antlrBlock( blockName: string, returnType: string, tail: NimNode, body: untyped) =
  var bindings = newStmtList()
  result = newStmtList()
  for node in body.children:
      case node.kind:
      of nnkProcDef:
        var n = ident( blockName & node.name.strVal.capitalizeAscii )
        var sts = newStmtList()
        for s in node.children:
            case s.kind:
            of nnkStmtList:
              for x in s.children:
                sts.add x
            else:
              continue
        var m = newProc(
          n,
          @[ident(returnType),
          newIdentDefs(ident("this"), ident"JsObject"),
          newIdentDefs(ident"ctx", ident"JsObject")],
          sts
        )
        result.add m

        bindings.add nnkAsgn.newTree(
          nnkDotExpr.newTree(
            ident"this",
            n
          ),
          nnkCommand.newTree(
            newIdentNode("bindMethod"),
            n
          )
        )
      else:
        result.add node   ## pass on anything in the block other than a proc
  var procname = "bind" & blockName.capitalizeAscii & "Methods"
  var bindMs = newProc( ident(procname), @[newEmptyNode(),newIdentDefs(ident("this"),ident("JsObject"))], bindings )
  result.add bindMs
  result.add tail
  #echo repr(result)


macro enter*( body: untyped) =
  ## Declares an ANTLR subblock containing "enter" methods
  doneEnter = true
  if doneExit:
    antlrBlock("enter", "void", listener(), body)
  else:
    antlrBlock("enter", "void", newEmptyNode(), body)


macro exit*( body: untyped) =
  ## Declares an ANTLR subblock containing "exit" methods
  doneExit = true
  if doneEnter:
    antlrBlock("exit", "void", listener(), body)
  else:
    antlrBlock("exit", "void", newEmptyNode(), body)

macro visit*( body: untyped) =
  ## Declares an ANTLR subblock containing "visit" methods
  doneVisit = true
  antlrBlock("visit", "JsObject", visitor(), body)
