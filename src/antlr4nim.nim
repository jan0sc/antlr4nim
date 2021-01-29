## antlr4nim
## Nim interface to ANTLR4 listener/visitor via jsffi

import macros, jsffi, strutils, sequtils

var module* {.importc.}: JsObject


## Core ANTLR4 macros

macro listener*( grammar: string, body: untyped) =
  ## Declares an ANTLR block containing bindable methods
  result = newStmtList(body)
  result.add quote do:
    proc bindMethods( this: JsObject ) =
      when declared( bindEnterMethods ):
        bindEnterMethods( this )
      when declared( bindExitMethods ):
        bindExitMethods( this )
      when declared( bindVisitMethods ):
        bindVisitMethods( this )
    module.exports.bindMethods = bindMethods
    module.exports.grammar = `grammar`.toJs
    module.exports.type = "listener".toJs
  echo result.repr


macro visitor*( grammar: string, body: untyped) =
  ## Declares an ANTLR block containing bindable methods
  result = newStmtList(body)
  result.add quote do:
    proc bindMethods( this: JsObject ) =
      when declared( bindEnterMethods ):
        bindEnterMethods( this )
      when declared( bindExitMethods ):
        bindExitMethods( this )
      when declared( bindVisitMethods ):
        bindVisitMethods( this )
    module.exports.bindMethods = bindMethods
    module.exports.grammar = `grammar`.toJs
    module.exports.type = "visitor".toJs
  echo result.repr


template antlrBlock*( blockName: string, returnType: string, body: untyped) =
#  echo(body.repr)
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
#  echo result.repr


macro enter*( body: untyped) =
  ## Declares an ANTLR subblock containing "enter" methods
  antlrBlock("enter", "void", body)
  echo(result.repr)

macro exit*( body: untyped) =
  ## Declares an ANTLR subblock containing "exit" methods
  antlrBlock("exit", "void", body)
  echo(result.repr)

macro visit*( body: untyped) =
  ## Declares an ANTLR subblock containing "visit" methods
  antlrBlock("visit", "JsObject", body)
  echo(result.repr)


proc txt*( x: JsObject ): string =
  ## Alias for $(x.getText().to(cstring))
  return $( x.getText().to(cstring) )

proc `$`*( x: JsObject ): string =
  ## Alias for $(x.to(cstring))
  return $( x.to(cstring) )
