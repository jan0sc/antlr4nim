// antlr4nim js helpers for nim visitor/listener

let fs = require('fs');
let antlr4 = require('antlr4');

let ANTLRLexer = import("./CSVLexer.mjs")
let ANTLRParser = import("./CSVParser.mjs")

function tree( data, start) {
     var chars = new antlr4.InputStream(data);
     var lexer = new ANTLRLexer.default(chars);
     var tokens  = new antlr4.CommonTokenStream(lexer);
     var parser = new ANTLRParser.default(tokens);
     parser.buildParseTrees = true;
     console.log("herey")
     return( parser[start]() );
}


function loadTree(grammar, href, start){
    return new Promise((resolve, reject) => {
        fs.readFile(href, "utf8", (err,data) => {
          if(err){
            reject(err);
          }
          else{
            resolve( tree(grammar, data,start) );
        }
      });
    });
}
