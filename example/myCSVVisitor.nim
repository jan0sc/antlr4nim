## antlr4nim visitor example

import  times, antlr4nim, jsffi, jsre, strutils, strformat, algorithm

#let dateFormat = initTimeFormat("yyyy/MM/dd")
#let moneyFormat = newRegExp(r"^\d+\.\d\d$", r"")

type Book = object
  author, isbn: string
#  reviewDate: DateTime
  discountedPrice: float

var library = newSeq[Book](0)

proc addToLibrary( newBooks: seq[Book] ) =
  library &= newBooks
  echo "You added the following books to the library:"
  for b in newBooks.sortedByIt(it.isbn):
    echo &"{b.isbn} ({b.author})"


visitor "CSV":
  visit:
    proc csvFile =
      var books = newSeq[Book](0)
      for x in this.visitChildren(ctx):         # get the result from each child node
        if( x != nil ):                         # exclude any rows that return nil
          books &= x.to(Book)
      addToLibrary( books )
    proc hdr =
      return nil                                # the header row returns nil
    proc row =
      var b = Book(                             # construct a new Book object for this row
        author: $( this.visit(ctx.field(1)) ),  # get the result from a specific node
        isbn: $( this.visit(ctx.field(2)) ),
  #    reviewDate: parse( $( this.visit(ctx.field(0)) ), dateFormat ),
        discountedPrice: this.visit(ctx.field(3)).to(float)
      )
      return b.toJs                         # return the Book
    proc field =
      var x = ctx.txt
      if( ctx.STRING() != nil ):                                # if the node contains a STRING:
        x = x[ 1 .. ^2 ]                                        #   remove outside " "
        x = x.replace("\"\"","\"")                              #   replace "" with "
#      elif( test( moneyFormat, ctx.getText().to(cstring) ) ):   # else if the node text is an amount:
#          return parseFloat(x).toJs                             #   return a float
      return x.toJs                                             # return a string
