## antlr4nim listener example

import antlr4nim, jsffi, strutils

var width = 0
var finishedHeader = false

var output = ""

proc doOutput =
  echo output


listener "CSV":

  enter:
    proc row =
      output &= "|"                         # each row starts with |

  exit:
    proc csvFile =
      doOutput()                            # finished! call output proc
    proc hdr =
      finishedHeader = true
      output &= "|"                         # start the header divider
      for i in 1..width: output &= "---|"   # complete the header divider
      output &= "\n"                        # newline
    proc row =
      output &= '\n'                        # newline on finishing row
    proc field =
      if( ctx.STRING() != nil ):            # if the match is to the STRING alternative:
        var x = ctx.txt
        x = x[ 1 .. ^2 ]                    #   removes outside " "
        x = x.replace("\"\"","\"")          #   replaces "" with "
        output &= x & "|"                   #   cell content + |
      else:                                 # otherwise:
        output &= ctx.txt & "|"             #   cell content + |
      if not finishedHeader: width += 1     # count the columns
