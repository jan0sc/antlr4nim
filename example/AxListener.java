// Generated from Ax.g4 by ANTLR 4.9.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link AxParser}.
 */
public interface AxListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link AxParser#axFile}.
	 * @param ctx the parse tree
	 */
	void enterAxFile(AxParser.AxFileContext ctx);
	/**
	 * Exit a parse tree produced by {@link AxParser#axFile}.
	 * @param ctx the parse tree
	 */
	void exitAxFile(AxParser.AxFileContext ctx);
	/**
	 * Enter a parse tree produced by {@link AxParser#definition}.
	 * @param ctx the parse tree
	 */
	void enterDefinition(AxParser.DefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link AxParser#definition}.
	 * @param ctx the parse tree
	 */
	void exitDefinition(AxParser.DefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link AxParser#params}.
	 * @param ctx the parse tree
	 */
	void enterParams(AxParser.ParamsContext ctx);
	/**
	 * Exit a parse tree produced by {@link AxParser#params}.
	 * @param ctx the parse tree
	 */
	void exitParams(AxParser.ParamsContext ctx);
	/**
	 * Enter a parse tree produced by {@link AxParser#result}.
	 * @param ctx the parse tree
	 */
	void enterResult(AxParser.ResultContext ctx);
	/**
	 * Exit a parse tree produced by {@link AxParser#result}.
	 * @param ctx the parse tree
	 */
	void exitResult(AxParser.ResultContext ctx);
	/**
	 * Enter a parse tree produced by {@link AxParser#ifClause}.
	 * @param ctx the parse tree
	 */
	void enterIfClause(AxParser.IfClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link AxParser#ifClause}.
	 * @param ctx the parse tree
	 */
	void exitIfClause(AxParser.IfClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link AxParser#ifx}.
	 * @param ctx the parse tree
	 */
	void enterIfx(AxParser.IfxContext ctx);
	/**
	 * Exit a parse tree produced by {@link AxParser#ifx}.
	 * @param ctx the parse tree
	 */
	void exitIfx(AxParser.IfxContext ctx);
	/**
	 * Enter a parse tree produced by {@link AxParser#otherwise}.
	 * @param ctx the parse tree
	 */
	void enterOtherwise(AxParser.OtherwiseContext ctx);
	/**
	 * Exit a parse tree produced by {@link AxParser#otherwise}.
	 * @param ctx the parse tree
	 */
	void exitOtherwise(AxParser.OtherwiseContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Logical}
	 * labeled alternative in {@link AxParser#cond}.
	 * @param ctx the parse tree
	 */
	void enterLogical(AxParser.LogicalContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Logical}
	 * labeled alternative in {@link AxParser#cond}.
	 * @param ctx the parse tree
	 */
	void exitLogical(AxParser.LogicalContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Compare}
	 * labeled alternative in {@link AxParser#cond}.
	 * @param ctx the parse tree
	 */
	void enterCompare(AxParser.CompareContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Compare}
	 * labeled alternative in {@link AxParser#cond}.
	 * @param ctx the parse tree
	 */
	void exitCompare(AxParser.CompareContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Binary}
	 * labeled alternative in {@link AxParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterBinary(AxParser.BinaryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Binary}
	 * labeled alternative in {@link AxParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitBinary(AxParser.BinaryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Atom}
	 * labeled alternative in {@link AxParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterAtom(AxParser.AtomContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Atom}
	 * labeled alternative in {@link AxParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitAtom(AxParser.AtomContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Paren}
	 * labeled alternative in {@link AxParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterParen(AxParser.ParenContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Paren}
	 * labeled alternative in {@link AxParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitParen(AxParser.ParenContext ctx);
	/**
	 * Enter a parse tree produced by {@link AxParser#call}.
	 * @param ctx the parse tree
	 */
	void enterCall(AxParser.CallContext ctx);
	/**
	 * Exit a parse tree produced by {@link AxParser#call}.
	 * @param ctx the parse tree
	 */
	void exitCall(AxParser.CallContext ctx);
	/**
	 * Enter a parse tree produced by {@link AxParser#args}.
	 * @param ctx the parse tree
	 */
	void enterArgs(AxParser.ArgsContext ctx);
	/**
	 * Exit a parse tree produced by {@link AxParser#args}.
	 * @param ctx the parse tree
	 */
	void exitArgs(AxParser.ArgsContext ctx);
	/**
	 * Enter a parse tree produced by {@link AxParser#value}.
	 * @param ctx the parse tree
	 */
	void enterValue(AxParser.ValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link AxParser#value}.
	 * @param ctx the parse tree
	 */
	void exitValue(AxParser.ValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link AxParser#sym}.
	 * @param ctx the parse tree
	 */
	void enterSym(AxParser.SymContext ctx);
	/**
	 * Exit a parse tree produced by {@link AxParser#sym}.
	 * @param ctx the parse tree
	 */
	void exitSym(AxParser.SymContext ctx);
	/**
	 * Enter a parse tree produced by {@link AxParser#number}.
	 * @param ctx the parse tree
	 */
	void enterNumber(AxParser.NumberContext ctx);
	/**
	 * Exit a parse tree produced by {@link AxParser#number}.
	 * @param ctx the parse tree
	 */
	void exitNumber(AxParser.NumberContext ctx);
}