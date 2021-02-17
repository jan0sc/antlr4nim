# antlr4nim
 Nim interface to ANTLR4 listener/visitor via jsffi.
 
 Current version supports interpreter generation - compiler functionality is in the pipeline.
 
 [API](https://jan0sc.github.io/antlr4nim.html)

## Who is this for?
You have an idea for an amazing new DSL that you're itching to implement.

You know that the [ANTLR4](https://www.antlr.org/) parser generator makes it possible to 

* specify your language formally as a grammar.
* autogenerate a lexer and parser for that grammar in several target languages.
* repeat the process as much as you like, knowing that any changes you make to the grammar are dealt with seamlessly.



You also know that [Nim](https://nim-lang.org/) is an expressive general-purpose language that

* compiles to efficient C, C++ or JavaScript code.
* has powerful metaprogramming tools that should *(see FAQ below)* make it much easier to write a compiler for your new language.

You want to use both together? Of course you do. But ANTLR4 has no Nim target :(

Fortunately, Nim has good interops with JavaScript. **antlr4nim** is a module to support an ANTLR4/Nim workflow, using Nim's [JavaScript FFI](https://nim-lang.org/docs/jsffi.html). 

*A similar approach should be possible for the C++ ANTLR4 target, but unfortuately [c2nim](https://github.com/nim-lang/c2nim) doesn't like the header files that ANTLR4 generates. My C++ experience is zero so I would welcome a PR on this issue if someone wants to work on it :)*

## How does it work?
Parsing is executed on the JavaScript side, using the default listener/visitor code that ANTLR4 generates for you. 

You override the default behaviour with custom methods in Nim that will be bound to your listener/visitor object.

A basic JavaScript entry point is provided, which you can modify to your own needs.

The **antlr4nim** module provides macros and procs that help to reduce boilerplate in your Nim code. 




## Instructions
(commands in parentheses are how I do each step on MacOS)

### You will need:
* Nim (`brew install nim`)
* Node.js (`brew install node`)
* The ANTLR4 tool (`brew install antlr@4`)
* The ANTLR4 JavaScript runtime (`npm install antlr4`)
* Your grammar file, `<grammar>.g4`

For the example, I will use the [CSV grammar](https://github.com/antlr/grammars-v4/tree/master/csv) from the ANTLR repo.
(`wget https://raw.githubusercontent.com/antlr/grammars-v4/master/csv/CSV.g4`)

### 1. Clone the *antlr4nim* package
```
nimble develop antlr4nim
```

### 2. Copy your grammar into the *antlr4nim* directory and build the ANTLR4 JS target
For the purposes of the example, we will build both the visitor and the listener. Probably you only want one of them.

```
antlr -Dlanguage=JavaScript -visitor -listener <grammar>.g4
```
Where our `<grammar>` is `CSV`. The following files (and others) will be created:

* `CSVLexer.js`
* `CSVParser.js`
* `CSVListener.js`
* `CSVVisitor.js`

### 3. Convert the ANTLR4 files to .mjs
```
nimble prepare <grammar>
```
In our example, running `nimble prepare CSV` creates the following files:

* `CSVLexer.mjs`  (a copy of `CSVLexer.js`)
* `CSVParser.mjs` (a copy of `CSVParser.js`, edited to import the .mjs files)
* `CSVListener.mjs` (a copy of `CSVListener.js`, if present)
* `CSVVisitor.mjs` (a copy of `CSVVisitor.js` if present)


The .mjs files are needed for Node.js to import everything correctly. 

Note that `nimble prepare` won't clobber any `.mjs` files that already exist, so you will need to remove them if you want to start again or make changes to your grammar.

### 4. Prepare your Nim parser code
Your Nim parser (`<myParser>.nim`) should be structured following one of these skeletons:

`myListener.nim`:

```{nim}
## antlr4nim listener skeleton

import antlr4nim, jsffi


listener "<grammar>":

  enter:
    # insert 'enter' procs here

  exit:
    # insert 'exit' procs here

```

`myVisitor.nim`:

```{nim}
## antlr4nim visitor skeleton

import antlr4nim, jsffi


visitor "<grammar>":

  visit:
    # insert 'visit' procs here


```
The [**jsffi**](https://nim-lang.org/docs/jsffi.html) module is needed for your code to interact with JS.

Insert procs within the macro blocks to associate them with the parsing events *enter*, *exit* or *visit* for the specified parse tree nodes. See below for simple examples of a listener and a visitor pattern.

The ANTLR4 context object will be passed to your proc as `ctx`, and you have access to its methods and attributes in the same way as you would have on the JS side. All JS objects within Nim have type `JsObject`, so need conversions before they can be used.



### 5. Compile and run
```
nim js <myParser>.nim
```
compiles your code to `<myParser>.js`, then

```
node runAntlr.mjs <myParser>.js <inputFile> <startNode>
```
will run it on the input file `<inputFile>`, starting from the first node in the tree of type `<startNode>`.

`runAntlr.mjs` is just a basic JS entry point, which you can adapt to your needs. It handles both the listener and visitor cases.

## Example 1: Listener
We will make a listener to convert a CSV file to a Markdown table.

Here's our example input:

```
"REVIEW_DATE","AUTHOR","ISBN","DISCOUNTED_PRICE"
"1985/01/21","Douglas Adams",0345391802,5.95
"1990/01/12","Douglas Hofstadter",0465026567,9.95
"1998/07/15","Timothy ""The Parser"" Campbell",0968411304,18.99
"1999/12/03","Richard Friedman",0060630353,5.95
"2001/09/19","Karen Armstrong",0345384563,9.95
"2002/06/23","David Jones",0198504691,9.95
"2002/06/23","Julian Jaynes",0618057072,12.50
"2003/09/30","Scott Adams",0740721909,4.95
"2004/10/04","Benjamin Radcliff",0804818088,4.95
"2004/10/04","Randel Helms",0879755725,4.50
```

Here is `CSV.g4`:

```{g4}
grammar CSV;

csvFile: hdr row+ ;
hdr : row ;

row : field (',' field)* '\r'? '\n' ;

field
    : TEXT
    | STRING
    |
    ;

TEXT   : ~[,\n\r"]+ ;
STRING : '"' ('""'|~'"')* '"' ; // quote-quote is an escaped quote
```

Here is my parser code, `myCSVListener.nim`:

```{nim}
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
```
The procs for parse tree nodes need to be named with the identifiers taken from the .g4 file. It's fine to have both an *enter* and an *exit* proc with the same name: the macros are going to rename everything.

The proc `txt` provides a shorthand for the text content of a node, as a Nim string. `x.txt` means `$(x.getText().to(cstring))`.

Note that the Nim listener is responsible for creating its own output. It won't be able to return anything to the JS side.

When I run `nim js myCSVListener.nim`, the macros convert it to

```
import antlr4nim, jsffi, strutils

var width = 0
var finishedHeader = false

var output = ""

proc doOutput =
  echo output



proc enterRow(this: JsObject; ctx: JsObject): void =
  output &= "|"
  
proc bindEnterMethods(this: JsObject) =
  this.enterRow = bindMethod enterRow



proc exitCsvFile(this: JsObject; ctx: JsObject): void =
  doOutput()

proc exitHdr(this: JsObject; ctx: JsObject): void =
  finishedHeader = true
  output &= "|"
  for i in 1 .. width:
    output &= "---|"
  output &= "\n"

proc exitRow(this: JsObject; ctx: JsObject): void =
  output &= '\n'

proc exitField(this: JsObject; ctx: JsObject): void =
  if (ctx.STRING() != nil):
    var x = ctx.txt
    x = x[1 .. ^2]
    x = x.replace("\"\"", "\"")
    output &= x & "|"
  else:
    output &= ctx.txt & "|"
  if not finishedHeader:
    width += 1

proc bindExitMethods(this: JsObject) =
  this.exitCsvFile = bindMethod exitCsvFile
  this.exitHdr = bindMethod exitHdr
  this.exitRow = bindMethod exitRow
  this.exitField = bindMethod exitField



proc bindMethods(this: JsObject) =
  when declared(bindEnterMethods):
    bindEnterMethods(this)
  when declared(bindExitMethods):
    bindExitMethods(this)

module.exports.bindMethods = bindMethods
module.exports.grammar = "CSV".toJs
module.exports.type = "listener".toJs
```
which is then compiled directly to JS and output as `myCSVListener.js`.

Note that the automatically generated `bindMethods` proc will be used to override the empty default JS listener methods with the ones defined in Nim.


Finally, we run the listener with `node runMyCSVListener.mjs example.csv csvFile` to produce

```
|REVIEW_DATE|AUTHOR|ISBN|DISCOUNTED_PRICE|
|---|---|---|---|
|1985/01/21|Douglas Adams|0345391802|5.95|
|1990/01/12|Douglas Hofstadter|0465026567|9.95|
|1998/07/15|Timothy "The Parser" Campbell|0968411304|18.99|
|1999/12/03|Richard Friedman|0060630353|5.95|
|2001/09/19|Karen Armstrong|0345384563|9.95|
|2002/06/23|David Jones|0198504691|9.95|
|2002/06/23|Julian Jaynes|0618057072|12.50|
|2003/09/30|Scott Adams|0740721909|4.95|
|2004/10/04|Benjamin Radcliff|0804818088|4.95|
|2004/10/04|Randel Helms|0879755725|4.50|
```
 which renders as
 
|REVIEW_DATE|AUTHOR|ISBN|DISCOUNTED_PRICE|
|---|---|---|---|
|1985/01/21|Douglas Adams|0345391802|5.95|
|1990/01/12|Douglas Hofstadter|0465026567|9.95|
|1998/07/15|Timothy "The Parser" Campbell|0968411304|18.99|
|1999/12/03|Richard Friedman|0060630353|5.95|
|2001/09/19|Karen Armstrong|0345384563|9.95|
|2002/06/23|David Jones|0198504691|9.95|
|2002/06/23|Julian Jaynes|0618057072|12.50|
|2003/09/30|Scott Adams|0740721909|4.95|
|2004/10/04|Benjamin Radcliff|0804818088|4.95|
|2004/10/04|Randel Helms|0879755725|4.50|

## Example 2: Visitor
An ANTLR visitor is more complicated than a listener, but also more powerful:

* The `visit` method can return something.
* The order of visits isn't fixed, but needs to be handled by the visitor.

Visitors can be useful for constructing an AST from the parse tree, because the visitor can define a `visit` method for each different node type, which will construct and return the node's representation.

For our visitor example, we will construct a `Book` object for each row of the table.

Here is `myCSVVisitor.nim`:

```
## antlr4nim visitor example

import antlr4nim, jsffi, jsre, strutils, times, strformat, algorithm

var dateFormat = initTimeFormat("yyyy/MM/dd")
var moneyFormat = newRegExp(r"^\d+\.\d\d$", r"")

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
        reviewDate: parse( $( this.visit(ctx.field(0)) ), dateFormat ),
        discountedPrice: this.visit(ctx.field(3)).to(float)
      )
      return b.toJs                         # return the Book
    proc field =
      var x = ctx.txt
      if( ctx.STRING() != nil ):                                # if the node contains a STRING:
        x = x[ 1 .. ^2 ]                                        #   remove outside " "
        x = x.replace("\"\"","\"")                              #   replace "" with "
      elif( test( moneyFormat, ctx.getText().to(cstring) ) ):   # else if the node text is an amount:
          return parseFloat(x).toJs                             #   return a float
      return x.toJs                                             # return a string

```

The variable `this` refers to the visitor itself.
The variable `ctx` is the ANTLR context object, as in the listener example.

The default *visit* method provided by `CSVVisitor.mjs` for every node is `return( this.visitChildren(ctx) )`. 
If we override a *visit* method for a node then we have the choice whether or not to call its children. Use `this.visitChildren(ctx)` to call all of them, or call them individually with `this.visit(child)`.

We need to be careful with type handling, because all of the *visit* methods will return a `JsObject`:

* To wrap a Nim object to a JsObject, use `x.toJs`.
* To unwrap a JsObject, use `x.to(type)`.
* To unwrap a JsObject to a `cstring` (i.e. a JS String), use `x.to(cstring)` - in the example code, we need this to match to a jsre regex.
* To unwrap a JsObject to a `cstring` and then convert it to a `string` (i.e. a Nim String), use the shorthand `$(x)`

`this.visitChildren(ctx)` returns a collection wrapped as a single JsObject - you can iterate this directly as in the example, or convert to a `seq[JsObject]` using `toSeq` from `sequtils`.

We compile the example visitor with `nim js myCSVVisitor.nim`. The macros translate the Nim code into

```
import antlr4nim, jsffi, jsre, strutils, times, strformat, algorithm

var dateFormat = initTimeFormat("yyyy/MM/dd")
var moneyFormat = newRegExp(r"^\d+\.\d\d$", r"")

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
    
    

proc visitCsvFile(this: JsObject; ctx: JsObject): JsObject =
  var books = newSeq[Book](0)
  for x in this.visitChildren(ctx):
    if (x != nil):
      books &= x.to(Book)
  addToLibrary(books)

proc visitHdr(this: JsObject; ctx: JsObject): JsObject =
  return nil

proc visitRow(this: JsObject; ctx: JsObject): JsObject =
  var b = Book(author: $(this.visit(ctx.field(1))),
               isbn: $(this.visit(ctx.field(2))),
               reviewDate: parse($(this.visit(ctx.field(0))), dateFormat),
               discountedPrice: this.visit(ctx.field(3)).to(float))
  return b.toJs

proc visitField(this: JsObject; ctx: JsObject): JsObject =
  var x = ctx.txt
  if (ctx.STRING() != nil):
    x = x[1 .. ^2]
    x = x.replace("\"\"", "\"")
  elif (test(moneyFormat, ctx.getText().to(cstring))):
    return parseFloat(x).toJs
  return x.toJs

proc bindVisitMethods(this: JsObject) =
  this.visitCsvFile = bindMethod visitCsvFile
  this.visitHdr = bindMethod visitHdr
  this.visitRow = bindMethod visitRow
  this.visitField = bindMethod visitField



proc bindMethods(this: JsObject) =
  when declared(bindVisitMethods):
    bindVisitMethods(this)

module.exports.bindMethods = bindMethods
module.exports.grammar = "CSV".toJs
module.exports.type = "visitor".toJs

```
which is then compiled directly to JS and output as `myCSVVisitor.js`.

Running with `node runAntlr.mjs MyCSVVisitor.js example.csv csvFile` then produces:

```
You added the following books to the library:
0060630353 (Richard Friedman)
0198504691 (David Jones)
0345384563 (Karen Armstrong)
0345391802 (Douglas Adams)
0465026567 (Douglas Hofstadter)
0618057072 (Julian Jaynes)
0740721909 (Scott Adams)
0804818088 (Benjamin Radcliff)
0879755725 (Randel Helms)
0968411304 (Timothy "The Parser" Campbell)
```




## Wait, I still don't understand!
Here's some further reading that might help:

### ANTLR4
* You can learn all the necessary parts of ANTLR4 from the [mega-tutorial](https://tomassetti.me/antlr-mega-tutorial/).
* There is also [the documentation](https://github.com/antlr/antlr4/blob/master/doc/index.md).
* The [ANTLR4 Runtime API](https://www.antlr.org/api/Java/index.html) can be helpful in understanding what you can do with the [context object](https://www.antlr.org/api/Java/org/antlr/v4/runtime/ParserRuleContext.html). 
* Remember that you can [label alternatives](https://github.com/antlr/antlr4/blob/master/doc/parser-rules.md#alternative-labels) in your grammar to get more specific enter/exit/visit events.
* [This blogpost](https://saumitra.me/blog/antlr4-visitor-vs-listener-pattern/) might help you to decide between the listener and the visitor pattern.

### Nim
* If you're new to Nim, [Nim basics](https://narimiran.github.io/nim-basics/) is a great beginners' tutorial.
* The [official tutorial](https://nim-lang.org/docs/tut1.html) has extensions that explain [OOP](https://nim-lang.org/docs/tut2.html#object-oriented-programming), [templates](https://nim-lang.org/docs/tut2.html#templates) and [macros](https://nim-lang.org/docs/tut3.html).
* There is documentation for the [jsffi](https://nim-lang.org/docs/jsffi.html) and [macros](https://nim-lang.org/docs/macros.html) packages.
* Metaprogramming in Nim consists of constructing an AST, which you can then execute or output as Nim code. You will probably want to work with the `dumpTree` and `dumpAstGen` macros to construct code that correctly builds your AST, and the `repr` proc to check it. Here are a few examples:
	* [Building a brainfuck interpreter and compiler](https://howistart.org/posts/nim/1/) (very helpful)
	* [Nim by Example](https://nim-by-example.github.io/macros/)
	* [Introduction to Metaprogramming in Nim](https://hookrace.net/blog/introduction-to-metaprogramming-in-nim/)
	* [Demystification of Macros in Nim](https://dev.to/beef331/demystification-of-macros-in-nim-13n8)


## FAQ

### Can I get my parser working in the browser?
Probably, but... you will need to make a big bundle of JS including the ANTLR4 runtime - the ANTLR team suggest to use [webpack](https://webpack.js.org/). I haven't attempted this yet. Suggestions welcome.

### What about compilation?
The ultimate goal for this project is to create a simple platform for compiler production based on any ANTLR4 grammar. 

At the moment antlr4nim can be used to make JS-hosted interpreters, but all the nice AST tools that Nim provides remain off-limits because they can't be used at runtime. I am working on an update that will cleanly separate the parse tree generation from traversal, so that compilation to any Nim target will be possible... soon.


## Credits

The code to export a symbol from Nim to JS is taken from an answer on [Stack Overflow](https://stackoverflow.com/a/62728515).

