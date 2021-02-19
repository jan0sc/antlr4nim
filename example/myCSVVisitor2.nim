## antlr4nim visitor example

import  antlr4nim, jsffi, jsre, strutils, strformat, algorithm
import times
let dateFormat = initTimeFormat("yyyy/MM/dd")
let moneyFormat = newRegExp(r"^\d+\.\d\d$", r"")

type Book = object
  author, isbn: string
  reviewDate: DateTime
  discountedPrice: float

var library = newSeq[Book](0)

proc addToLibrary( newBooks: seq[Book] ) =
  library &= newBooks
  echo "You added the following books to the library:"
  for b in newBooks.sortedByIt(it.isbn):
    echo &"{b.isbn} ({b.author})"

interpret "CSV":
  visit:
    proc csvFile =
      var books = newSeq[Book](0)
      for x in visitChildren(ctx):               # get the result from each child node
        if( x != nil ):                         # exclude any rows that return nil
          books &= x.Book
      addToLibrary( books )
    proc hdr =
      return nil                                # the header row returns nil
    proc row =
      var b = Book(                             # construct a new Book object for this row
        author: visit( ctx.field(1) ).string,  # get the result from a specific node
        isbn: visit( ctx.field(2) ).string,
        reviewDate: parse( visit( ctx.field(0) ).string, dateFormat ),
        discountedPrice: parseFloat( visit( ctx.field(3) ).string )
      )
      return b                                  # return the Book
    proc field =
      var x = ctx.txt
      if( ctx.STRING != nil ):                                # if the node contains a STRING:
        x = x[ 1 .. ^2 ]                                        #   remove outside " "
        x = x.replace("\"\"","\"")                              #   replace "" with "
      return x                                                  # return a string
