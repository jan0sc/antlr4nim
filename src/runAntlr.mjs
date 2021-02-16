
// antlr4nim basic Node.js entry point

import fs from 'fs';
import antlr4 from 'antlr4';

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

function listen( grammar, nimListener, href, start ){
  loadTree( grammar, href, start ).then((tree) => {
    import("./" + grammar + "Listener.mjs").then((ANTLRListener) => {
      var listener = new ANTLRListener.default();
      nimListener.bindMethods( listener );
      antlr4.tree.ParseTreeWalker.DEFAULT.walk( listener, tree );
    });
  });
}

function visit( grammar, nimVisitor, href, start ){
  loadTree( grammar, href, start ).then((tree) => {
    import("./" + grammar + "Visitor.mjs").then((ANTLRVisitor) => {
      var visitor = new ANTLRVisitor.default();
      nimVisitor.bindMethods( visitor );
      let result = tree.accept( visitor )
    });
  });
}


if(process.argv.length<5) {
  console.log("Usage: node runAntlr.mjs <myParser>.js <inputFile> <startNode>")
}
else {
  let fname = process.argv[2]
  import("./" + fname).then((nimVisitor) => {
    let grammar = nimVisitor.grammar;
    let type = nimVisitor.type;
    let href = process.argv[3];
    let start = process.argv[4];
    if( type == "listener"){
      listen( grammar, nimVisitor, href, start );
    }
    else if( type == "visitor"){
      visit( grammar, nimVisitor, href, start );
    }
  });
}
