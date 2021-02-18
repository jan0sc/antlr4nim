import os, antlr4nim/prepare

var grammar = "Ax"
var compiler = "myAxCompiler.nim"
var start = "axFile"

var file = commandLineParams()[1]
var dir = getCurrentDir()
var sourcepath = dir / file
var jsonpath = changeFileExt(sourcepath, "json")


prepare( grammar )
exec("node toJson.mjs " & grammar & " " & sourcepath & " " & start)
exec("nim c -d:jtree=" & jsonpath & " " & compiler)
