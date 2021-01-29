import antlr4nim, jsffi, jsre, strutils, math

var money = newRegExp(r"^\d+\.\d\d$", r"")

proc doOutput(total: float) =
  echo round(total,2)

proc sum( amounts : JsObject ): float =
  var total = 0.0
  for a in amounts.items:
    if a != nil:
      total += a.to(float)
  return total

antlr:
  visit:
    proc csvFile =
      var total = sum( this.visitChildren(ctx) )
      doOutput(total)
    proc hdr =
      return 0.0.toJs
    proc row =
      var x = sum( this.visitChildren(ctx) )
      return x.toJs
    proc field =
      var x = ctx.TEXT()
      if( x != nil):
        if test( money, x.getText().to(cstring) ):
          return parseFloat(x.txt).toJs
      return 0.0.toJs
