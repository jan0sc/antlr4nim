grammar Ax ;

axFile : definition+ ;
definition : exportAnn? sym subscripts? params? '=' result ;
exportAnn : ':' ;

subscripts : '[' symDec (',' symDec)* ']' ;
params : '(' symDec (',' symDec)* ')' ;

symDec : setAnn? sym ( 'in' sym )* ;
setAnn : '&' ;

result : setExpr
       | tupleExpr
       | predExpr
       | ifClause
       ;

setExpr : '{' predExpr '}' ;
tupleExpr : '(' predExpr ')' ;

ifClause : ifx (ifx)* otherwise ;

ifx : '|' predExpr 'if' cond ;
otherwise : '|' predExpr 'otherwise' ;


predExpr : expr ( ':' preds )? ;

preds : cond (',' cond)* ;

cond : cond 'or' cond   # Logical
     | cond 'and' cond  # Logical
     | expr 'in' set    # Member
     | expr '=' expr    # Compare
     | expr '/=' expr   # Compare
     | expr '<' expr    # Compare
     | expr '<=' expr   # Compare
     | expr '>' expr    # Compare
     | expr '>=' expr   # Compare
     ;

set  : sym
     | setExpr
     | range
     | interval
     ;

range : number '..' number ;
interval : '[' number ',' number ']' ;

expr : value         # Atom
     | call          # Atom
     | '(' expr ')'  # Paren
     | expr '*' expr # Binary
     | expr '/' expr # Binary
     | expr '+' expr # Binary
     | expr '-' expr # Binary
     ;



call : sym subArgs? args?  ;

subArgs : '[' expr (',' expr)* ']' ;
args : '(' expr (',' expr)* ')' ;

value : sym | number | UNDEFINED ;

sym : WORD ;
number : DIGIT+ ;

UNDEFINED : 'undefined' ;
fragment CHAR : [A-Za-z] ;

WORD : CHAR+ ;
DIGIT : [0-9] ;

WS : [ \t\r\n] -> skip ;
COMMENT : '#' (~[\n])* -> skip ;
