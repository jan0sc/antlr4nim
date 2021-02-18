// Generated from Ax.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';
import AxListener from './AxListener.js';
import AxVisitor from './AxVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u001b\u00a8\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0003\u0002",
    "\u0006\u0002 \n\u0002\r\u0002\u000e\u0002!\u0003\u0003\u0003\u0003\u0005",
    "\u0003&\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0007\u0004/\n\u0004\f\u0004\u000e\u0004",
    "2\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0005\u00059\n\u0005\u0003\u0006\u0007\u0006<\n\u0006\f\u0006",
    "\u000e\u0006?\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0005\tf\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007",
    "\tn\n\t\f\t\u000e\tq\u000b\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n",
    "\u0003\n\u0003\n\u0005\nz\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n\u0088",
    "\n\n\f\n\u000e\n\u008b\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0007\f\u0094\n\f\f\f\u000e\f\u0097\u000b",
    "\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0005\r\u009f\n\r",
    "\u0003\u000e\u0003\u000e\u0003\u000f\u0006\u000f\u00a4\n\u000f\r\u000f",
    "\u000e\u000f\u00a5\u0003\u000f\u0002\u0004\u0010\u0012\u0010\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u0002\u0002",
    "\u0002\u00af\u0002\u001f\u0003\u0002\u0002\u0002\u0004#\u0003\u0002",
    "\u0002\u0002\u0006*\u0003\u0002\u0002\u0002\b8\u0003\u0002\u0002\u0002",
    "\n=\u0003\u0002\u0002\u0002\fC\u0003\u0002\u0002\u0002\u000eH\u0003",
    "\u0002\u0002\u0002\u0010e\u0003\u0002\u0002\u0002\u0012y\u0003\u0002",
    "\u0002\u0002\u0014\u008c\u0003\u0002\u0002\u0002\u0016\u008f\u0003\u0002",
    "\u0002\u0002\u0018\u009e\u0003\u0002\u0002\u0002\u001a\u00a0\u0003\u0002",
    "\u0002\u0002\u001c\u00a3\u0003\u0002\u0002\u0002\u001e \u0005\u0004",
    "\u0003\u0002\u001f\u001e\u0003\u0002\u0002\u0002 !\u0003\u0002\u0002",
    "\u0002!\u001f\u0003\u0002\u0002\u0002!\"\u0003\u0002\u0002\u0002\"\u0003",
    "\u0003\u0002\u0002\u0002#%\u0005\u001a\u000e\u0002$&\u0005\u0006\u0004",
    "\u0002%$\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&\'\u0003",
    "\u0002\u0002\u0002\'(\u0007\u0003\u0002\u0002()\u0005\b\u0005\u0002",
    ")\u0005\u0003\u0002\u0002\u0002*0\u0007\u0004\u0002\u0002+,\u0005\u001a",
    "\u000e\u0002,-\u0007\u0005\u0002\u0002-/\u0003\u0002\u0002\u0002.+\u0003",
    "\u0002\u0002\u0002/2\u0003\u0002\u0002\u00020.\u0003\u0002\u0002\u0002",
    "01\u0003\u0002\u0002\u000213\u0003\u0002\u0002\u000220\u0003\u0002\u0002",
    "\u000234\u0005\u001a\u000e\u000245\u0007\u0006\u0002\u00025\u0007\u0003",
    "\u0002\u0002\u000269\u0005\u0012\n\u000279\u0005\n\u0006\u000286\u0003",
    "\u0002\u0002\u000287\u0003\u0002\u0002\u00029\t\u0003\u0002\u0002\u0002",
    ":<\u0005\f\u0007\u0002;:\u0003\u0002\u0002\u0002<?\u0003\u0002\u0002",
    "\u0002=;\u0003\u0002\u0002\u0002=>\u0003\u0002\u0002\u0002>@\u0003\u0002",
    "\u0002\u0002?=\u0003\u0002\u0002\u0002@A\u0005\f\u0007\u0002AB\u0005",
    "\u000e\b\u0002B\u000b\u0003\u0002\u0002\u0002CD\u0007\u0007\u0002\u0002",
    "DE\u0005\u0012\n\u0002EF\u0007\b\u0002\u0002FG\u0005\u0010\t\u0002G",
    "\r\u0003\u0002\u0002\u0002HI\u0007\u0007\u0002\u0002IJ\u0005\u0012\n",
    "\u0002JK\u0007\t\u0002\u0002K\u000f\u0003\u0002\u0002\u0002LM\b\t\u0001",
    "\u0002MN\u0005\u0012\n\u0002NO\u0007\u0003\u0002\u0002OP\u0005\u0012",
    "\n\u0002Pf\u0003\u0002\u0002\u0002QR\u0005\u0012\n\u0002RS\u0007\f\u0002",
    "\u0002ST\u0005\u0012\n\u0002Tf\u0003\u0002\u0002\u0002UV\u0005\u0012",
    "\n\u0002VW\u0007\r\u0002\u0002WX\u0005\u0012\n\u0002Xf\u0003\u0002\u0002",
    "\u0002YZ\u0005\u0012\n\u0002Z[\u0007\u000e\u0002\u0002[\\\u0005\u0012",
    "\n\u0002\\f\u0003\u0002\u0002\u0002]^\u0005\u0012\n\u0002^_\u0007\u000f",
    "\u0002\u0002_`\u0005\u0012\n\u0002`f\u0003\u0002\u0002\u0002ab\u0005",
    "\u0012\n\u0002bc\u0007\u0010\u0002\u0002cd\u0005\u0012\n\u0002df\u0003",
    "\u0002\u0002\u0002eL\u0003\u0002\u0002\u0002eQ\u0003\u0002\u0002\u0002",
    "eU\u0003\u0002\u0002\u0002eY\u0003\u0002\u0002\u0002e]\u0003\u0002\u0002",
    "\u0002ea\u0003\u0002\u0002\u0002fo\u0003\u0002\u0002\u0002gh\f\n\u0002",
    "\u0002hi\u0007\n\u0002\u0002in\u0005\u0010\t\u000bjk\f\t\u0002\u0002",
    "kl\u0007\u000b\u0002\u0002ln\u0005\u0010\t\nmg\u0003\u0002\u0002\u0002",
    "mj\u0003\u0002\u0002\u0002nq\u0003\u0002\u0002\u0002om\u0003\u0002\u0002",
    "\u0002op\u0003\u0002\u0002\u0002p\u0011\u0003\u0002\u0002\u0002qo\u0003",
    "\u0002\u0002\u0002rs\b\n\u0001\u0002sz\u0005\u0018\r\u0002tz\u0005\u0014",
    "\u000b\u0002uv\u0007\u0004\u0002\u0002vw\u0005\u0012\n\u0002wx\u0007",
    "\u0006\u0002\u0002xz\u0003\u0002\u0002\u0002yr\u0003\u0002\u0002\u0002",
    "yt\u0003\u0002\u0002\u0002yu\u0003\u0002\u0002\u0002z\u0089\u0003\u0002",
    "\u0002\u0002{|\f\u0006\u0002\u0002|}\u0007\u0011\u0002\u0002}\u0088",
    "\u0005\u0012\n\u0007~\u007f\f\u0005\u0002\u0002\u007f\u0080\u0007\u0012",
    "\u0002\u0002\u0080\u0088\u0005\u0012\n\u0006\u0081\u0082\f\u0004\u0002",
    "\u0002\u0082\u0083\u0007\u0013\u0002\u0002\u0083\u0088\u0005\u0012\n",
    "\u0005\u0084\u0085\f\u0003\u0002\u0002\u0085\u0086\u0007\u0014\u0002",
    "\u0002\u0086\u0088\u0005\u0012\n\u0004\u0087{\u0003\u0002\u0002\u0002",
    "\u0087~\u0003\u0002\u0002\u0002\u0087\u0081\u0003\u0002\u0002\u0002",
    "\u0087\u0084\u0003\u0002\u0002\u0002\u0088\u008b\u0003\u0002\u0002\u0002",
    "\u0089\u0087\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002",
    "\u008a\u0013\u0003\u0002\u0002\u0002\u008b\u0089\u0003\u0002\u0002\u0002",
    "\u008c\u008d\u0005\u001a\u000e\u0002\u008d\u008e\u0005\u0016\f\u0002",
    "\u008e\u0015\u0003\u0002\u0002\u0002\u008f\u0095\u0007\u0015\u0002\u0002",
    "\u0090\u0091\u0005\u0012\n\u0002\u0091\u0092\u0007\u0005\u0002\u0002",
    "\u0092\u0094\u0003\u0002\u0002\u0002\u0093\u0090\u0003\u0002\u0002\u0002",
    "\u0094\u0097\u0003\u0002\u0002\u0002\u0095\u0093\u0003\u0002\u0002\u0002",
    "\u0095\u0096\u0003\u0002\u0002\u0002\u0096\u0098\u0003\u0002\u0002\u0002",
    "\u0097\u0095\u0003\u0002\u0002\u0002\u0098\u0099\u0005\u0012\n\u0002",
    "\u0099\u009a\u0007\u0016\u0002\u0002\u009a\u0017\u0003\u0002\u0002\u0002",
    "\u009b\u009f\u0005\u001a\u000e\u0002\u009c\u009f\u0005\u001c\u000f\u0002",
    "\u009d\u009f\u0007\u0017\u0002\u0002\u009e\u009b\u0003\u0002\u0002\u0002",
    "\u009e\u009c\u0003\u0002\u0002\u0002\u009e\u009d\u0003\u0002\u0002\u0002",
    "\u009f\u0019\u0003\u0002\u0002\u0002\u00a0\u00a1\u0007\u0018\u0002\u0002",
    "\u00a1\u001b\u0003\u0002\u0002\u0002\u00a2\u00a4\u0007\u0019\u0002\u0002",
    "\u00a3\u00a2\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002",
    "\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003\u0002\u0002\u0002",
    "\u00a6\u001d\u0003\u0002\u0002\u0002\u0010!%08=emoy\u0087\u0089\u0095",
    "\u009e\u00a5"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class AxParser extends antlr4.Parser {

    static grammarFileName = "Ax.g4";
    static literalNames = [ null, "'='", "'('", "','", "')'", "'|'", "'if'", 
                            "'otherwise'", "'or'", "'and'", "'/='", "'<'", 
                            "'<='", "'>'", "'>='", "'*'", "'/'", "'+'", 
                            "'-'", "'['", "']'", "'undefined'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "UNDEFINED", 
                             "WORD", "DIGIT", "WS", "COMMENT" ];
    static ruleNames = [ "axFile", "definition", "params", "result", "ifClause", 
                         "ifx", "otherwise", "cond", "expr", "call", "args", 
                         "value", "sym", "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = AxParser.ruleNames;
        this.literalNames = AxParser.literalNames;
        this.symbolicNames = AxParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 7:
    	    		return this.cond_sempred(localctx, predIndex);
    	case 8:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    cond_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 8);
    		case 1:
    			return this.precpred(this._ctx, 7);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 4);
    		case 3:
    			return this.precpred(this._ctx, 3);
    		case 4:
    			return this.precpred(this._ctx, 2);
    		case 5:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	axFile() {
	    let localctx = new AxFileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, AxParser.RULE_axFile);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 28;
	            this.definition();
	            this.state = 31; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===AxParser.WORD);
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



	definition() {
	    let localctx = new DefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, AxParser.RULE_definition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.sym();
	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===AxParser.T__1) {
	            this.state = 34;
	            this.params();
	        }

	        this.state = 37;
	        this.match(AxParser.T__0);
	        this.state = 38;
	        this.result();
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



	params() {
	    let localctx = new ParamsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, AxParser.RULE_params);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.match(AxParser.T__1);
	        this.state = 46;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 41;
	                this.sym();
	                this.state = 42;
	                this.match(AxParser.T__2); 
	            }
	            this.state = 48;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	        this.state = 49;
	        this.sym();
	        this.state = 50;
	        this.match(AxParser.T__3);
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



	result() {
	    let localctx = new ResultContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, AxParser.RULE_result);
	    try {
	        this.state = 54;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case AxParser.T__1:
	        case AxParser.UNDEFINED:
	        case AxParser.WORD:
	        case AxParser.DIGIT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52;
	            this.expr(0);
	            break;
	        case AxParser.T__4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 53;
	            this.ifClause();
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



	ifClause() {
	    let localctx = new IfClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, AxParser.RULE_ifClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 56;
	                this.ifx(); 
	            }
	            this.state = 61;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	        this.state = 62;
	        this.ifx();
	        this.state = 63;
	        this.otherwise();
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



	ifx() {
	    let localctx = new IfxContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, AxParser.RULE_ifx);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(AxParser.T__4);
	        this.state = 66;
	        this.expr(0);
	        this.state = 67;
	        this.match(AxParser.T__5);
	        this.state = 68;
	        this.cond(0);
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



	otherwise() {
	    let localctx = new OtherwiseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, AxParser.RULE_otherwise);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.match(AxParser.T__4);
	        this.state = 71;
	        this.expr(0);
	        this.state = 72;
	        this.match(AxParser.T__6);
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


	cond(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CondContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, AxParser.RULE_cond, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new CompareContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 75;
	            this.expr(0);
	            this.state = 76;
	            this.match(AxParser.T__0);
	            this.state = 77;
	            this.expr(0);
	            break;

	        case 2:
	            localctx = new CompareContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 79;
	            this.expr(0);
	            this.state = 80;
	            this.match(AxParser.T__9);
	            this.state = 81;
	            this.expr(0);
	            break;

	        case 3:
	            localctx = new CompareContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 83;
	            this.expr(0);
	            this.state = 84;
	            this.match(AxParser.T__10);
	            this.state = 85;
	            this.expr(0);
	            break;

	        case 4:
	            localctx = new CompareContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 87;
	            this.expr(0);
	            this.state = 88;
	            this.match(AxParser.T__11);
	            this.state = 89;
	            this.expr(0);
	            break;

	        case 5:
	            localctx = new CompareContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 91;
	            this.expr(0);
	            this.state = 92;
	            this.match(AxParser.T__12);
	            this.state = 93;
	            this.expr(0);
	            break;

	        case 6:
	            localctx = new CompareContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 95;
	            this.expr(0);
	            this.state = 96;
	            this.match(AxParser.T__13);
	            this.state = 97;
	            this.expr(0);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 109;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 107;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new LogicalContext(this, new CondContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, AxParser.RULE_cond);
	                    this.state = 101;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 102;
	                    this.match(AxParser.T__7);
	                    this.state = 103;
	                    this.cond(9);
	                    break;

	                case 2:
	                    localctx = new LogicalContext(this, new CondContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, AxParser.RULE_cond);
	                    this.state = 104;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 105;
	                    this.match(AxParser.T__8);
	                    this.state = 106;
	                    this.cond(8);
	                    break;

	                } 
	            }
	            this.state = 111;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 16;
	    this.enterRecursionRule(localctx, 16, AxParser.RULE_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new AtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 113;
	            this.value();
	            break;

	        case 2:
	            localctx = new AtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 114;
	            this.call();
	            break;

	        case 3:
	            localctx = new ParenContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 115;
	            this.match(AxParser.T__1);
	            this.state = 116;
	            this.expr(0);
	            this.state = 117;
	            this.match(AxParser.T__3);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 135;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 133;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new BinaryContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, AxParser.RULE_expr);
	                    this.state = 121;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 122;
	                    this.match(AxParser.T__14);
	                    this.state = 123;
	                    this.expr(5);
	                    break;

	                case 2:
	                    localctx = new BinaryContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, AxParser.RULE_expr);
	                    this.state = 124;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 125;
	                    this.match(AxParser.T__15);
	                    this.state = 126;
	                    this.expr(4);
	                    break;

	                case 3:
	                    localctx = new BinaryContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, AxParser.RULE_expr);
	                    this.state = 127;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 128;
	                    this.match(AxParser.T__16);
	                    this.state = 129;
	                    this.expr(3);
	                    break;

	                case 4:
	                    localctx = new BinaryContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, AxParser.RULE_expr);
	                    this.state = 130;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 131;
	                    this.match(AxParser.T__17);
	                    this.state = 132;
	                    this.expr(2);
	                    break;

	                } 
	            }
	            this.state = 137;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	call() {
	    let localctx = new CallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, AxParser.RULE_call);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.sym();
	        this.state = 139;
	        this.args();
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



	args() {
	    let localctx = new ArgsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, AxParser.RULE_args);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this.match(AxParser.T__18);
	        this.state = 147;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 142;
	                this.expr(0);
	                this.state = 143;
	                this.match(AxParser.T__2); 
	            }
	            this.state = 149;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	        this.state = 150;
	        this.expr(0);
	        this.state = 151;
	        this.match(AxParser.T__19);
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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, AxParser.RULE_value);
	    try {
	        this.state = 156;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case AxParser.WORD:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 153;
	            this.sym();
	            break;
	        case AxParser.DIGIT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 154;
	            this.number();
	            break;
	        case AxParser.UNDEFINED:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 155;
	            this.match(AxParser.UNDEFINED);
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



	sym() {
	    let localctx = new SymContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, AxParser.RULE_sym);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.match(AxParser.WORD);
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, AxParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 160;
	        		this.match(AxParser.DIGIT);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 163; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,13, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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

AxParser.EOF = antlr4.Token.EOF;
AxParser.T__0 = 1;
AxParser.T__1 = 2;
AxParser.T__2 = 3;
AxParser.T__3 = 4;
AxParser.T__4 = 5;
AxParser.T__5 = 6;
AxParser.T__6 = 7;
AxParser.T__7 = 8;
AxParser.T__8 = 9;
AxParser.T__9 = 10;
AxParser.T__10 = 11;
AxParser.T__11 = 12;
AxParser.T__12 = 13;
AxParser.T__13 = 14;
AxParser.T__14 = 15;
AxParser.T__15 = 16;
AxParser.T__16 = 17;
AxParser.T__17 = 18;
AxParser.T__18 = 19;
AxParser.T__19 = 20;
AxParser.UNDEFINED = 21;
AxParser.WORD = 22;
AxParser.DIGIT = 23;
AxParser.WS = 24;
AxParser.COMMENT = 25;

AxParser.RULE_axFile = 0;
AxParser.RULE_definition = 1;
AxParser.RULE_params = 2;
AxParser.RULE_result = 3;
AxParser.RULE_ifClause = 4;
AxParser.RULE_ifx = 5;
AxParser.RULE_otherwise = 6;
AxParser.RULE_cond = 7;
AxParser.RULE_expr = 8;
AxParser.RULE_call = 9;
AxParser.RULE_args = 10;
AxParser.RULE_value = 11;
AxParser.RULE_sym = 12;
AxParser.RULE_number = 13;

class AxFileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AxParser.RULE_axFile;
    }

	definition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefinitionContext);
	    } else {
	        return this.getTypedRuleContext(DefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.enterAxFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.exitAxFile(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AxVisitor ) {
	        return visitor.visitAxFile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AxParser.RULE_definition;
    }

	sym() {
	    return this.getTypedRuleContext(SymContext,0);
	};

	result() {
	    return this.getTypedRuleContext(ResultContext,0);
	};

	params() {
	    return this.getTypedRuleContext(ParamsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.enterDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.exitDefinition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AxVisitor ) {
	        return visitor.visitDefinition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParamsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AxParser.RULE_params;
    }

	sym = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SymContext);
	    } else {
	        return this.getTypedRuleContext(SymContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.enterParams(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.exitParams(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AxVisitor ) {
	        return visitor.visitParams(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ResultContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AxParser.RULE_result;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	ifClause() {
	    return this.getTypedRuleContext(IfClauseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.enterResult(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.exitResult(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AxVisitor ) {
	        return visitor.visitResult(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AxParser.RULE_ifClause;
    }

	ifx = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IfxContext);
	    } else {
	        return this.getTypedRuleContext(IfxContext,i);
	    }
	};

	otherwise() {
	    return this.getTypedRuleContext(OtherwiseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.enterIfClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.exitIfClause(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AxVisitor ) {
	        return visitor.visitIfClause(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfxContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AxParser.RULE_ifx;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	cond() {
	    return this.getTypedRuleContext(CondContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.enterIfx(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.exitIfx(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AxVisitor ) {
	        return visitor.visitIfx(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OtherwiseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AxParser.RULE_otherwise;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.enterOtherwise(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.exitOtherwise(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AxVisitor ) {
	        return visitor.visitOtherwise(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AxParser.RULE_cond;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class LogicalContext extends CondContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	cond = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CondContext);
	    } else {
	        return this.getTypedRuleContext(CondContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.enterLogical(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.exitLogical(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AxVisitor ) {
	        return visitor.visitLogical(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

AxParser.LogicalContext = LogicalContext;

class CompareContext extends CondContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.enterCompare(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.exitCompare(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AxVisitor ) {
	        return visitor.visitCompare(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

AxParser.CompareContext = CompareContext;

class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AxParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BinaryContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.enterBinary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.exitBinary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AxVisitor ) {
	        return visitor.visitBinary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

AxParser.BinaryContext = BinaryContext;

class AtomContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	call() {
	    return this.getTypedRuleContext(CallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.exitAtom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AxVisitor ) {
	        return visitor.visitAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

AxParser.AtomContext = AtomContext;

class ParenContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.enterParen(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.exitParen(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AxVisitor ) {
	        return visitor.visitParen(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

AxParser.ParenContext = ParenContext;

class CallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AxParser.RULE_call;
    }

	sym() {
	    return this.getTypedRuleContext(SymContext,0);
	};

	args() {
	    return this.getTypedRuleContext(ArgsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.enterCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.exitCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AxVisitor ) {
	        return visitor.visitCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AxParser.RULE_args;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.enterArgs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.exitArgs(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AxVisitor ) {
	        return visitor.visitArgs(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AxParser.RULE_value;
    }

	sym() {
	    return this.getTypedRuleContext(SymContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	UNDEFINED() {
	    return this.getToken(AxParser.UNDEFINED, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.exitValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AxVisitor ) {
	        return visitor.visitValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SymContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AxParser.RULE_sym;
    }

	WORD() {
	    return this.getToken(AxParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.enterSym(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.exitSym(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AxVisitor ) {
	        return visitor.visitSym(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AxParser.RULE_number;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AxParser.DIGIT);
	    } else {
	        return this.getToken(AxParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AxListener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AxVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




AxParser.AxFileContext = AxFileContext; 
AxParser.DefinitionContext = DefinitionContext; 
AxParser.ParamsContext = ParamsContext; 
AxParser.ResultContext = ResultContext; 
AxParser.IfClauseContext = IfClauseContext; 
AxParser.IfxContext = IfxContext; 
AxParser.OtherwiseContext = OtherwiseContext; 
AxParser.CondContext = CondContext; 
AxParser.ExprContext = ExprContext; 
AxParser.CallContext = CallContext; 
AxParser.ArgsContext = ArgsContext; 
AxParser.ValueContext = ValueContext; 
AxParser.SymContext = SymContext; 
AxParser.NumberContext = NumberContext; 
