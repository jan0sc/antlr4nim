import os

var quiet = " --hints:off "

var compiler = "myCSVVisitor.nim"
var outfile = "myCSVVisitor.mjs"
var start = "csvFile"

var n = paramCount()
var file = paramStr( n )
var dir = getCurrentDir()
var path = dir / file

exec("nim js --run -o:" & outfile & quiet & " -d:source=" & path & " -d:start=" & start & " -d:nodejs " & compiler)
