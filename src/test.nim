import jsffi

# Embed JS code at compile time
const s = staticRead("antlrbridge.js")
{.emit: s.}

# Write corresponding function signatures
proc loadTree(grammar:cstring, href:cstring, start:cstring): JsObject {.importc.}
proc getVisitor(grammar:cstring): JsObject {.importc.}

var tree = loadtree(cstring("CSV"),cstring("example.csv"),cstring("csvFile"))
var visitor = getVisitor(cstring("CSV"))
