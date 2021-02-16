// antlr4nim js helpers for nim visitor/listener



function getVisitor(grammar){
  import("./" + grammar + "Visitor.mjs").then((ANTLRVisitor) => {
    resolve( new ANTLRVisitor.default() );
  });
}
