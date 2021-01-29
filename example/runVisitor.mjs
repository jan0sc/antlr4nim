
import fs from 'fs';
import antlr4 from 'antlr4';
//import CSVLexer from './CSVLexer.mjs';
//import CSVParser from './CSVParser.mjs';
//import CSVVisitor from './CSVVisitor.mjs';

var grammar = "";

function tree( grammar, data, start) {
    return new Promise((resolve, reject) => {
       import("./" + grammar + "Lexer.mjs").then((ANTLRLexer) => {
         import("./" + grammar + "Parser.mjs").then((ANTLRParser) => {
             var chars = new antlr4.InputStream(data);
             var lexer = new ANTLRLexer.default(chars);
             var tokens  = new antlr4.CommonTokenStream(lexer);
             var parser = new ANTLRParser.default(tokens);
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
            resolve( tree(grammar, data,start) );
        }
      });
    });
}

function visit( grammar, nimVisitor, href, start ){
  loadTree( grammar, href, start ).then((tree) => {
    import("./" + grammar + "Visitor.mjs").then((ANTLRVisitor) => {
      var visitor = new ANTLRVisitor.default();
      nimVisitor.bindMethods( visitor );
      tree.accept( visitor );
    });
  });
}

if(process.argv.length<5) {
  console.log("usage:")
}
else {
  import("./"+process.argv[2]).then((nimVisitor) => {
    console.log( nimVisitor.grammar )
    let grammar = nimVisitor.grammar;
    let href = process.argv[3];
    let start = process.argv[4];
    visit( grammar, nimVisitor, href, start );
  });
}
