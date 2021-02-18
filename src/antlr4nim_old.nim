## Nim interface to ANTLR4 listener/visitor via jsffi

import macros, jsffi, strutils

var module* {.importc, nodecl.}: JsObject


const source {.strdefine.} = ""
const data = staticRead( source )

static:
  echo "DATA:"
  echo data

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
  result.add quote do:
    proc bindMethods( this: JsObject ) =
      when declared( bindEnterMethods ):
        bindEnterMethods( this )
      when declared( bindExitMethods ):
        bindExitMethods( this )
  result.add quote do:
    const jantlr = """
    import """ & `grammar` & """Lexer from "./""" & `grammar` & """Lexer.mjs";
    import """ & `grammar` & """Parser from "./""" & `grammar` & """Parser.mjs";
    import antlr4 from 'antlr4';
    function getTree(data,start) {
         var chars = new antlr4.InputStream(data);
         var lexer = new """ & `grammar` & """Lexer(chars);
         var tokens  = new antlr4.CommonTokenStream(lexer);
         var parser = new """ & `grammar` & """Parser(tokens);
         parser.buildParseTrees = true;
         return( parser[start]() );
    }
    import """ & `grammar` & """Listener from "./""" & `grammar` & """Listener.mjs"
    function getListener(){
      return new """ & `grammar` & """Listener();
    }
    function getWalker(){
      return antlr4.tree.ParseTreeWalker.DEFAULT;
    }
    """
    {.emit: jantlr.}
    proc getTree(data:cstring,start:cstring): JsObject {.importc, nodecl.}
    proc getListener(): JsObject {.importc, nodecl.}
    proc getWalker(): JsObject {.importc, nodecl.}
    var tree = getTree(cstring(data),cstring(start))
    var listener = getListener()
    var walker = getWalker()
    bindMethods( listener )
    walker.walk( listener, tree )


proc visitor(): NimNode =
  ## Declares an ANTLR visitor block
  result = newStmtList()
  result.add quote do:
    proc bindMethods( this: JsObject ) =
      when declared( bindVisitMethods ):
        bindVisitMethods( this )
  result.add quote do:
    const jantlr = """
    import """ & `grammar` & """Lexer from "./""" & `grammar` & """Lexer.mjs";
    import """ & `grammar` & """Parser from "./""" & `grammar` & """Parser.mjs";
    import antlr4 from 'antlr4';
    function getTree(data,start) {
         var chars = new antlr4.InputStream(data);
         var lexer = new """ & `grammar` & """Lexer(chars);
         var tokens  = new antlr4.CommonTokenStream(lexer);
         var parser = new """ & `grammar` & """Parser(tokens);
         parser.buildParseTrees = true;
         return( parser[start]() );
    }
    import """ & `grammar` & """Visitor from "./""" & `grammar` & """Visitor.mjs"
    function getVisitor(){
      return new """ & `grammar` & """Visitor();
    }
    """
    {.emit: jantlr.}
    proc getTree(data:cstring,start:cstring): JsObject {.importc, nodecl.}
    proc getVisitor(): JsObject {.importc, nodecl.}
    var tree = getTree(data,start)
    var visitor = getVisitor()
    bindMethods( visitor )
    tree.accept( visitor )


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


proc txt*( x: JsObject ): string =
  ## Alias for $(x.getText().to(cstring))
  return $( x.getText().to(cstring) )

proc `$`*( x: JsObject ): string =
  ## Alias for $(x.to(cstring))
  return $( x.to(cstring) )
