grammar Ax ;

axFile : definition+ ;

definition : sym params? '=' result ;

params : '(' (sym ',')* sym ')' ;

result : expr
       | ifClause
       ;

ifClause : (ifx)* ifx otherwise ;
ifx : '|' expr 'if' cond ;
otherwise : '|' expr 'otherwise' ;

cond : cond 'or' cond   # Logical
     | cond 'and' cond  # Logical
     | expr '=' expr    # Compare
     | expr '/=' expr   # Compare
     | expr '<' expr    # Compare
     | expr '<=' expr   # Compare
     | expr '>' expr    # Compare
     | expr '>=' expr   # Compare
     ;

expr : value         # Atom
     | call          # Atom
     | '(' expr ')'  # Paren
     | expr '*' expr # Binary
     | expr '/' expr # Binary
     | expr '+' expr # Binary
     | expr '-' expr # Binary
     ;

call : sym args ;
args : '[' ( expr ',' )* expr ']' ;

value : sym | number | UNDEFINED ;

sym : WORD ;
number : DIGIT+ ;

UNDEFINED : 'undefined' ;
fragment CHAR : [A-Za-z] ;

WORD : CHAR+ ;
DIGIT : [0-9] ;

WS : [ \t\r\n] -> skip ;
COMMENT : '#' (~[\n])* -> skip ;
