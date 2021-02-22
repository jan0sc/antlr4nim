## Nim listener/visitor for ANTLR4 via json

import macros, strutils, json, tables, sugar

var enterProc = newTable[ string, (JsonNode -> void) ]()
var exitProc = newTable[ string, (JsonNode -> void) ]()
var visitProc = newTable[ string, (JsonNode -> void) ]()

template antlrBlock( blockName: string, body: untyped ) =
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
        case blockName:
          of "enter":
            var m = newProc(
              n,
              @[ident("void"),
              newIdentDefs(ident"ctx", ident"JsonNode")],
              sts
            )
            result.add m
            result.add quote do:
              enterProc.add( `node.name`, `n` )
          of "exit":
            var m = newProc(
              n,
              @[ident("void"),
              newIdentDefs(ident"ctx", ident"JsonNode")],
              sts
            )
            result.add m
            result.add quote do:
              exitProc.add( `node.name`, `n` )
          of "visit":
            var m = newProc(
              n,
              @[ident("object"),
              newIdentDefs(ident"ctx", ident"JsonNode")],
              sts
            )
            result.add m
            result.add quote do:
              visitProc.add( `node.name`, `n` )
          else:
            raise newException( ValueError, "Unknown traversal block type." )
      else:
        raise newException( ValueError, "Only procs allowed in traversal block." )


###


proc enterContext( ctx: JsonNode ): void =
  echo($ctx["csvFile"])
  enterProc["csvFile"](ctx["csvFile"])


const jfile {.strdefine.} = ""
const jdata = staticRead( jfile )
var jtree = parseJson( jdata )

const start {.strdefine.} = ""

const interpreted = 0
const compiled = 1

var grammar {.compileTime.} : string
var style {.compileTime.} = interpreted


macro interpret*( g: string, body: untyped ) =
  grammar = g.strVal
  style = interpreted
  quote do:
    enterContext( jtree )


macro enter*( body: untyped ) =
  ## Declares an ANTLR subblock containing "enter" methods
  antlrBlock("enter", body)

macro exit*( body: untyped ) =
  ## Declares an ANTLR subblock containing "exit" methods
  antlrBlock("exit", body)

macro visit*( body: untyped ) =
  ## Declares an ANTLR subblock containing "visit" methods
  antlrBlock("visit", body)
