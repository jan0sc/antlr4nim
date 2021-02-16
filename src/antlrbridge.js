// antlr4nim js helpers for nim visitor/listener

let fs = require('fs');
let antlr4 = require('antlr4');

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


function jsHelloWorld(x) {
  console.log("Running jsHelloWorld");
  console.log(x);
  return 42;
}

function loadTree(grammar, href, start){
    console.log("hello")
    console.log(grammar);
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

/*
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
*/

function getVisitor(grammar){
  import("./" + grammar + "Visitor.mjs").then((ANTLRVisitor) => {
    return new ANTLRVisitor.default();
  });
}

function getListener(grammar){
  console.log(grammar);
  import("./" + grammar + "Listener.mjs").then((ANTLRListener) => {
    return new ANTLRListener.default();
  });
}

function getWalker(){
  return antlr4.tree.ParseTreeWalker.DEFAULT;
}
