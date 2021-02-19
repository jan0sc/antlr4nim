import os, antlr4nim/prepare

var grammar = "Makar"
var compiler = "myMakarCompiler.nim"
var start = "makarFile"

var file = commandLineParams()[1]
var dir = getCurrentDir()
var sourcepath = dir / file
var jsonpath = changeFileExt(sourcepath, "json")
var outpath = changeFileExt(sourcepath, "")


#exec("antlr -Dlanguage=JavaScript -visitor -listener " & grammar & ".g4")
#prepare( grammar )
exec("node toJson.mjs " & grammar & " " & sourcepath & " " & start)
exec("nim c -d:jtree=" & jsonpath & " -o:" & outpath & " " & compiler)
