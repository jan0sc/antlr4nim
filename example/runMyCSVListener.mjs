
import fs from 'fs';
import antlr4 from 'antlr4';
import CSVLexer from './CSVLexer.mjs';
import CSVParser from './CSVParser.mjs';
import CSVListener from './CSVListener.mjs';
import myCSVListener from './myCSVListener.js';

function tree( data, start) {
   var chars = new antlr4.InputStream(data);
   var lexer = new CSVLexer(chars);
   var tokens  = new antlr4.CommonTokenStream(lexer);
   var parser = new CSVParser(tokens);
   parser.buildParseTrees = true;
   return parser[start]();
}

function loadTree(href,start){
    return new Promise((resolve, reject) => {
        fs.readFile(href, "utf8", (err,data) => {
          if(err){
            reject(err);
          }
          else{
            resolve( tree(data,start) );
        }
      });
    });
}

function listen( href, start ){
  loadTree( href, start ).then((tree) => {
    var listener = new CSVListener();
    myCSVListener.bindMethods( listener );
    antlr4.tree.ParseTreeWalker.DEFAULT.walk( listener, tree );
  });
}

if(process.argv.length<4) {
  console.log("usage:")
}
else {
  let href = process.argv[2]
  let start = process.argv[3]
  listen( href, start )
}
