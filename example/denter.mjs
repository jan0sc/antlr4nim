// insert INDENT and DEDENT tokens ready for antlr4

export default class Denter{

  static INDENT = "INDENT "
  static DEDENT = "DEDENT "

  static dent(data){
    var output = ""
    var lines = data.split('\n')
    var pos = [0]
    for(var x of lines){
      var match = /\S/.exec(x);
      if (match) {
          var p = match.index;
          var last = pos[pos.length - 1]
          if(p != last){
            if(p > last){
              output += Denter.INDENT + x.substring(match.index) + '\n'
              pos.push(p)
            }
            else if(p in pos){
              while( pos[pos.length - 1] > p ){
                output += Denter.DEDENT
                pos.pop()
              }
              output += x + '\n'
            }
            else{
              console.log("indent error")
            }
          }
          else{
            output += x + '\n'
          }
      }
      else{
        output += '\n'
      }
    }
    while( pos[pos.length - 1] > 0 ){
      output += Denter.DEDENT
      pos.pop()
    }
    return output
  }

}
