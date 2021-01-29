import antlr4nim, jsffi, jsre, macros

proc doOutput(total: float64) =
  echo total

var money = newRegExp(r"^\d+\.\d\d$", r"")

proc sum( amounts : JsObject ): float64 =
  var total = cfloat(0.0)
  for a in amounts.items:
    if a != nil:
      echo a.repr
      total += a.to(cfloat)
  return total

antlr:
  visit:
    proc csvFile =
      var total = sum(this.visitChildren(ctx))
      doOutput(total)
    proc hdr =
      return cfloat(0.0).toJs
    proc row =
      return sum(this.visitChildren(ctx)).toJs
    proc field =
      var x = ctx.TEXT()
      if( x != nil):
        if test( money, x.getText().to(cstring) ):
          return x.to(cfloat).toJs
      return cfloat(0.0).toJs
