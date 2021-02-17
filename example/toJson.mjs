
// export antlr4 parse tree as json

import fs from 'fs';
import antlr4 from 'antlr4';
//import Denter from './denter.mjs';

var vocab = [];

function tree( grammar, data, start) {
    return new Promise((resolve, reject) => {
       import("./" + grammar + "Lexer.mjs").then((ANTLRLexer) => {
         import("./" + grammar + "Parser.mjs").then((ANTLRParser) => {

             var chars = new antlr4.InputStream(data);
             var lexer = new ANTLRLexer.default(chars);
             var tokens  = new antlr4.CommonTokenStream(lexer);
             var parser = new ANTLRParser.default(tokens);

             for (var x of parser.literalNames){
               vocab.push(x)
             }
             for (var i in parser.symbolicNames){
               var x = parser.symbolicNames[i]
               if( x != null) vocab[i] = x
             }

             parser.buildParseTrees = true;
             resolve( parser[start]() );
         });
       });
   });
}

function loadTree(grammar, href, start){
    return new Promise((resolve, reject) => {
        fs.readFile(href, "utf8", (err,data) => {
          if(err){
            reject(err);
          }
          else{
            //data = Denter.dent(data);
            resolve( tree(grammar, data, start) );
        }
      });
    });
}


function makeJson( tree ){
    var jsonData = {}
    if( tree instanceof antlr4.tree.TerminalNode ){
      var token = tree.getSymbol();
      jsonData["typ"] = vocab[token.type];
      jsonData["txt"] = token.text;
      jsonData["pos"] = [ token.line, token.column ];
    }
    else{
      var children = [];
      for (var i = 0; i < tree.getChildCount(); i++) {
        children.push( makeJson(tree.getChild(i)));
      }
      var name = tree.constructor.name.replaceAll("Context", "");
      jsonData[(name.charAt(0)).toLowerCase() + name.substring(1)] = children;
    }
    return jsonData;
}


if(process.argv.length<5) {
  console.log("Usage: node toJson.mjs <grammar name> <input file> <start node>")
}
else {
  let grammar = process.argv[2]
  let href = process.argv[3];
  let start = process.argv[4];
  var fnamestart = 0;
  if( href.includes("/")){
    fnamestart = href.lastIndexOf("/") + 1;
  }
  let fnameend = href.length;
  if( href.substring(fnamestart).includes(".")){
    fnameend = href.lastIndexOf(".");
  }
  let fname = href.substring(fnamestart,fnameend) + ".json"
  loadTree( grammar, href, start ).then((tree) => {
    fs.writeFile(fname, JSON.stringify(makeJson(tree)), "utf8", (err,data) => {
      if(err){
        console.log(err);
      }
      else{
        console.log("Output written to " + fname);
      }
    });
  });
}
