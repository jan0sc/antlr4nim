// antlr4nim js helpers for nim visitor/listener

import fs from 'fs';
import antlr4 from 'antlr4';

import CSVLexer from "./CSVLexer.mjs";
import CSVParser from "./CSVParser.mjs";

function getTree( data, start) {
     var chars = new antlr4.InputStream(data);
     var lexer = new CSVLexer(chars);
     var tokens  = new antlr4.CommonTokenStream(lexer);
     var parser = new CSVParser(tokens);
     parser.buildParseTrees = true;
     console.log("herey")
     return( parser[start]() );
}
