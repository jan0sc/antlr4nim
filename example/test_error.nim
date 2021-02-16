import jsffi, times

proc someMethodImpl(that: JsObject): int =
  that.a.to(int) + 42

type Thing = object
  myDate: DateTime

const dateFormat = initTimeFormat("yyyy/MM/dd")

proc someOtherMethodImpl(that: JsObject): JsObject =
  return Thing(
    myDate: parse( "2021/02/15", dateFormat )
  ).toJs


const jscode = """
function getX() {
  return {
    a: 10
  }
}
"""
{.emit:jscode.}


proc getX: JsObject {.importc nodecl.}
var x = getX()
echo x.a.to(int)
x.someMethod = bindMethod someMethodImpl
echo x.someMethod().to(int)
x.someOtherMethod = bindMethod someOtherMethodImpl
echo $( x.someOtherMethod().myDate.to(DateTime) )

let y = JsObject{ a: 10 }
echo y.a.to(int)
y.someMethod = bindMethod someMethodImpl
echo y.someMethod().to(int)
y.someOtherMethod = bindMethod someOtherMethodImpl
echo $( y.someOtherMethod().myDate.to(DateTime) )
