import breeze, macros

proc newIdent*(i: string): NimNode =
  ## Creates an identifier node from `i`.

  result = newNimNode(nnkIdent)
  result.ident = toNimIdent(i)

var e = newIdent("f")
var result = buildMacro:
  call:
    e

echo result
