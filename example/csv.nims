import os, antlr4nim/prepare

var grammar = "CSV"
var compiler = "myCSVListener2.nim"
var start = "csvFile"

var file = commandLineParams()[1]
var dir = getCurrentDir()
var sourcepath = dir / file
var jsonpath = changeFileExt(sourcepath, "json")
var outpath = changeFileExt(sourcepath, ".js")


#exec("antlr -Dlanguage=JavaScript -visitor -listener " & grammar & ".g4")
#prepare( grammar )
exec("node toJson.mjs " & grammar & " " & sourcepath & " " & start)
exec("nim js --run -d:jfile=" & jsonpath & " -o:" & outpath & " " & compiler)
