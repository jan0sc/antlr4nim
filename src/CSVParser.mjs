// Generated from CSV.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CSVListener from './CSVListener.mjs';
import CSVVisitor from './CSVVisitor.mjs';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0007%\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0006\u0002\r\n",
    "\u0002\r\u0002\u000e\u0002\u000e\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0007\u0004\u0016\n\u0004\f\u0004\u000e\u0004",
    "\u0019\u000b\u0004\u0003\u0004\u0005\u0004\u001c\n\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005#\n\u0005",
    "\u0003\u0005\u0002\u0002\u0006\u0002\u0004\u0006\b\u0002\u0002\u0002",
    "%\u0002\n\u0003\u0002\u0002\u0002\u0004\u0010\u0003\u0002\u0002\u0002",
    "\u0006\u0012\u0003\u0002\u0002\u0002\b\"\u0003\u0002\u0002\u0002\n\f",
    "\u0005\u0004\u0003\u0002\u000b\r\u0005\u0006\u0004\u0002\f\u000b\u0003",
    "\u0002\u0002\u0002\r\u000e\u0003\u0002\u0002\u0002\u000e\f\u0003\u0002",
    "\u0002\u0002\u000e\u000f\u0003\u0002\u0002\u0002\u000f\u0003\u0003\u0002",
    "\u0002\u0002\u0010\u0011\u0005\u0006\u0004\u0002\u0011\u0005\u0003\u0002",
    "\u0002\u0002\u0012\u0017\u0005\b\u0005\u0002\u0013\u0014\u0007\u0003",
    "\u0002\u0002\u0014\u0016\u0005\b\u0005\u0002\u0015\u0013\u0003\u0002",
    "\u0002\u0002\u0016\u0019\u0003\u0002\u0002\u0002\u0017\u0015\u0003\u0002",
    "\u0002\u0002\u0017\u0018\u0003\u0002\u0002\u0002\u0018\u001b\u0003\u0002",
    "\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u001a\u001c\u0007\u0004",
    "\u0002\u0002\u001b\u001a\u0003\u0002\u0002\u0002\u001b\u001c\u0003\u0002",
    "\u0002\u0002\u001c\u001d\u0003\u0002\u0002\u0002\u001d\u001e\u0007\u0005",
    "\u0002\u0002\u001e\u0007\u0003\u0002\u0002\u0002\u001f#\u0007\u0006",
    "\u0002\u0002 #\u0007\u0007\u0002\u0002!#\u0003\u0002\u0002\u0002\"\u001f",
    "\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002\"!\u0003\u0002\u0002",
    "\u0002#\t\u0003\u0002\u0002\u0002\u0006\u000e\u0017\u001b\""].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class CSVParser extends antlr4.Parser {

    static grammarFileName = "CSV.g4";
    static literalNames = [ null, "','", "'\r'", "'\n'" ];
    static symbolicNames = [ null, null, null, null, "TEXT", "STRING" ];
    static ruleNames = [ "csvFile", "hdr", "row", "field" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CSVParser.ruleNames;
        this.literalNames = CSVParser.literalNames;
        this.symbolicNames = CSVParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	csvFile() {
	    let localctx = new CsvFileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CSVParser.RULE_csvFile);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 8;
	        this.hdr();
	        this.state = 10;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 9;
	            this.row();
	            this.state = 12;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CSVParser.T__0) | (1 << CSVParser.T__1) | (1 << CSVParser.T__2) | (1 << CSVParser.TEXT) | (1 << CSVParser.STRING))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hdr() {
	    let localctx = new HdrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CSVParser.RULE_hdr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.row();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	row() {
	    let localctx = new RowContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CSVParser.RULE_row);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.field();
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===CSVParser.T__0) {
	            this.state = 17;
	            this.match(CSVParser.T__0);
	            this.state = 18;
	            this.field();
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===CSVParser.T__1) {
	            this.state = 24;
	            this.match(CSVParser.T__1);
	        }

	        this.state = 27;
	        this.match(CSVParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	field() {
	    let localctx = new FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CSVParser.RULE_field);
	    try {
	        this.state = 32;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CSVParser.TEXT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 29;
	            this.match(CSVParser.TEXT);
	            break;
	        case CSVParser.STRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 30;
	            this.match(CSVParser.STRING);
	            break;
	        case CSVParser.T__0:
	        case CSVParser.T__1:
	        case CSVParser.T__2:
	            this.enterOuterAlt(localctx, 3);

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CSVParser.EOF = antlr4.Token.EOF;
CSVParser.T__0 = 1;
CSVParser.T__1 = 2;
CSVParser.T__2 = 3;
CSVParser.TEXT = 4;
CSVParser.STRING = 5;

CSVParser.RULE_csvFile = 0;
CSVParser.RULE_hdr = 1;
CSVParser.RULE_row = 2;
CSVParser.RULE_field = 3;

class CsvFileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSVParser.RULE_csvFile;
    }

	hdr() {
	    return this.getTypedRuleContext(HdrContext,0);
	};

	row = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RowContext);
	    } else {
	        return this.getTypedRuleContext(RowContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CSVListener ) {
	        listener.enterCsvFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSVListener ) {
	        listener.exitCsvFile(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSVVisitor ) {
	        return visitor.visitCsvFile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HdrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSVParser.RULE_hdr;
    }

	row() {
	    return this.getTypedRuleContext(RowContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CSVListener ) {
	        listener.enterHdr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSVListener ) {
	        listener.exitHdr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSVVisitor ) {
	        return visitor.visitHdr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RowContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSVParser.RULE_row;
    }

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CSVListener ) {
	        listener.enterRow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSVListener ) {
	        listener.exitRow(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSVVisitor ) {
	        return visitor.visitRow(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CSVParser.RULE_field;
    }

	TEXT() {
	    return this.getToken(CSVParser.TEXT, 0);
	};

	STRING() {
	    return this.getToken(CSVParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CSVListener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CSVListener ) {
	        listener.exitField(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CSVVisitor ) {
	        return visitor.visitField(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CSVParser.CsvFileContext = CsvFileContext;
CSVParser.HdrContext = HdrContext;
CSVParser.RowContext = RowContext;
CSVParser.FieldContext = FieldContext;
