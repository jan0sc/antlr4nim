import strformat

proc prepare*(grammar:string) =
  ## Convert ANTLR4 .js modules to .mjs for use with antlr4nim.

  var allOK = true

  # Lexer
  if fileExists(fmt"{grammar}Lexer.js"):
      exec fmt"cp {grammar}Lexer.js {grammar}Lexer.mjs"
      echo fmt"Copied {grammar}Lexer.js to {grammar}Lexer.mjs"
  else:
    echo fmt"ERROR: {grammar}Lexer.js not found."
    allOK = false

  #Parser
  if fileExists(fmt"{grammar}Parser.js"):
      exec fmt"cat {grammar}Parser.js | sed 's/{grammar}Listener.js/{grammar}Listener.mjs/' | sed 's/{grammar}Visitor.js/{grammar}Visitor.mjs/' > {grammar}Parser.mjs"
      echo fmt"Copied {grammar}Parser.js to {grammar}Parser.mjs and updated imports"
  else:
    echo fmt"ERROR: {grammar}Parser.js not found."
    allOK = false

  # Listener and Visitor
  var foundOne = false
  if fileExists(fmt"{grammar}Listener.js"):
    foundOne = true
    exec fmt"cp {grammar}Listener.js {grammar}Listener.mjs"
    echo fmt"Copied {grammar}Listener.js to {grammar}Listener.mjs"

  if fileExists(fmt"{grammar}Visitor.js"):
    foundOne = true
    exec fmt"cp {grammar}Visitor.js {grammar}Visitor.mjs"
    echo fmt"Copied {grammar}Visitor.js to {grammar}Visitor.mjs"

  if not foundOne:
    echo fmt"ERROR: Neither {grammar}Listener.js nor {grammar}Visitor.js found."
    allOK = false

  # Success?
  if allOK:
    echo "OK: ANTLR4 files are now ready for antlr4nim."
  else:
    echo "FAIL: Some ANTLR4 files could not be processed."


#[
  # Lexer
  if fileExists(fmt"{grammar}Lexer.js"):
    if fileExists(fmt"{grammar}Lexer.mjs"):
      echo fmt"ERROR: {grammar}Lexer.mjs is already present."
      allOK = false
    else:
      exec fmt"cp {grammar}Lexer.js {grammar}Lexer.mjs"
      echo fmt"Copied {grammar}Lexer.js to {grammar}Lexer.mjs"
  else:
    echo fmt"ERROR: {grammar}Lexer.js not found."
    allOK = false

  #Parser
  if fileExists(fmt"{grammar}Parser.js"):
    if fileExists(fmt"{grammar}Parser.mjs"):
      echo fmt"ERROR: {grammar}Parser.mjs is already present."
      allOK = false
    else:
      exec fmt"cat {grammar}Parser.js | sed 's/{grammar}Listener.js/{grammar}Listener.mjs/' | sed 's/{grammar}Visitor.js/{grammar}Visitor.mjs/' > {grammar}Parser.mjs"
      echo fmt"Copied {grammar}Parser.js to {grammar}Parser.mjs and updated imports"
  else:
    echo fmt"ERROR: {grammar}Parser.js not found."
    allOK = false

  # Listener and Visitor
  var foundOne = false
  if fileExists(fmt"{grammar}Listener.js"):
    foundOne = true
    if fileExists(fmt"{grammar}Listener.mjs"):
      echo fmt"ERROR: {grammar}Listener.mjs is already present."
      allOK = false
    else:
      exec fmt"cp {grammar}Listener.js {grammar}Listener.mjs"
      echo fmt"Copied {grammar}Listener.js to {grammar}Listener.mjs"

  if fileExists(fmt"{grammar}Visitor.js"):
    foundOne = true
    if fileExists(fmt"{grammar}Visitor.mjs"):
      echo fmt"ERROR: {grammar}Visitor.mjs is already present."
      allOK = false
    else:
      exec fmt"cp {grammar}Visitor.js {grammar}Visitor.mjs"
      echo fmt"Copied {grammar}Visitor.js to {grammar}Visitor.mjs"

  if not foundOne:
    echo fmt"ERROR: Neither {grammar}Listener.js nor {grammar}Visitor.js found."
    allOK = false
]#
