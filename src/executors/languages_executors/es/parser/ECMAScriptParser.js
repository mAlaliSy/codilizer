// Generated from ECMAScript.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ECMAScriptListener = require('./ECMAScriptListener').ECMAScriptListener;
var ECMAScriptVisitor = require('./ECMAScriptVisitor').ECMAScriptVisitor;

var grammarFileName = "ECMAScript.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003i\u0272\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u00048\t8\u0003\u0002\u0005",
    "\u0002r\n\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0006\u0003w\n\u0003",
    "\r\u0003\u000e\u0003x\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    "~\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "\u0090\n\u0005\u0003\u0006\u0003\u0006\u0005\u0006\u0094\n\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0006\u0007\u0099\n\u0007\r\u0007\u000e",
    "\u0007\u009a\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t",
    "\u0007\t\u00a4\n\t\f\t\u000e\t\u00a7\u000b\t\u0003\n\u0003\n\u0005\n",
    "\u00ab\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0005\u000e\u00bb\n\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00ce\n\u000f",
    "\u0003\u000f\u0003\u000f\u0005\u000f\u00d2\n\u000f\u0003\u000f\u0003",
    "\u000f\u0005\u000f\u00d6\n\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f",
    "\u00e0\n\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00e4\n\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0005\u000f\u00fa\n\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0005\u0010\u00ff\n\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u0106\n\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u010d\n",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0005\u0015\u011f",
    "\n\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0123\n\u0015\u0005\u0015",
    "\u0125\n\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0006\u0016\u012a",
    "\n\u0016\r\u0016\u000e\u0016\u012b\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0005\u0017\u0132\n\u0017\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0005\u0018\u0137\n\u0018\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0005\u001b\u014f\n\u001b\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0005\u001f\u0161\n\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0007 \u016b",
    "\n \f \u000e \u016e\u000b \u0003!\u0005!\u0171\n!\u0003\"\u0003\"\u0005",
    "\"\u0175\n\"\u0003\"\u0005\"\u0178\n\"\u0003\"\u0005\"\u017b\n\"\u0003",
    "\"\u0003\"\u0003#\u0005#\u0180\n#\u0003#\u0003#\u0003#\u0005#\u0185",
    "\n#\u0003#\u0007#\u0188\n#\f#\u000e#\u018b\u000b#\u0003$\u0006$\u018e",
    "\n$\r$\u000e$\u018f\u0003%\u0003%\u0003%\u0003%\u0003%\u0005%\u0197",
    "\n%\u0003%\u0003%\u0005%\u019b\n%\u0003&\u0003&\u0003&\u0007&\u01a0",
    "\n&\f&\u000e&\u01a3\u000b&\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0003\'\u0003\'\u0005\'\u01b8\n\'\u0003(\u0003(\u0003",
    "(\u0005(\u01bd\n(\u0003)\u0003)\u0003*\u0003*\u0005*\u01c3\n*\u0003",
    "*\u0003*\u0003+\u0003+\u0003+\u0007+\u01ca\n+\f+\u000e+\u01cd\u000b",
    "+\u0003,\u0003,\u0003,\u0007,\u01d2\n,\f,\u000e,\u01d5\u000b,\u0003",
    "-\u0003-\u0003-\u0005-\u01da\n-\u0003-\u0003-\u0005-\u01de\n-\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0005-\u01e8\n-\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0005-\u0205\n-\u0003-\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0003-\u0003-\u0007-\u0248\n-\f-\u000e-\u024b\u000b-\u0003",
    ".\u0003.\u0003/\u0003/\u0005/\u0251\n/\u00030\u00030\u00031\u00031\u0005",
    "1\u0257\n1\u00032\u00032\u00032\u00052\u025c\n2\u00033\u00033\u0003",
    "4\u00034\u00035\u00035\u00035\u00035\u00036\u00036\u00036\u00036\u0003",
    "7\u00037\u00037\u00037\u00057\u026e\n7\u00038\u00038\u00038\u0002\u0003",
    "X9\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjln\u0002\r\u0003",
    "\u0002\u0017\u0019\u0003\u0002\u0013\u0014\u0003\u0002\u001a\u001c\u0003",
    "\u0002\u001d \u0003\u0002!$\u0003\u0002*4\u0005\u0002\u0003\u000356",
    "ee\u0003\u000279\u0003\u000256\u0003\u0002:S\u0003\u0002Tc\u0002\u02a7",
    "\u0002q\u0003\u0002\u0002\u0002\u0004v\u0003\u0002\u0002\u0002\u0006",
    "}\u0003\u0002\u0002\u0002\b\u008f\u0003\u0002\u0002\u0002\n\u0091\u0003",
    "\u0002\u0002\u0002\f\u0098\u0003\u0002\u0002\u0002\u000e\u009c\u0003",
    "\u0002\u0002\u0002\u0010\u00a0\u0003\u0002\u0002\u0002\u0012\u00a8\u0003",
    "\u0002\u0002\u0002\u0014\u00ac\u0003\u0002\u0002\u0002\u0016\u00af\u0003",
    "\u0002\u0002\u0002\u0018\u00b1\u0003\u0002\u0002\u0002\u001a\u00b3\u0003",
    "\u0002\u0002\u0002\u001c\u00f9\u0003\u0002\u0002\u0002\u001e\u00fb\u0003",
    "\u0002\u0002\u0002 \u0102\u0003\u0002\u0002\u0002\"\u0109\u0003\u0002",
    "\u0002\u0002$\u0110\u0003\u0002\u0002\u0002&\u0116\u0003\u0002\u0002",
    "\u0002(\u011c\u0003\u0002\u0002\u0002*\u0129\u0003\u0002\u0002\u0002",
    ",\u012d\u0003\u0002\u0002\u0002.\u0133\u0003\u0002\u0002\u00020\u0138",
    "\u0003\u0002\u0002\u00022\u013c\u0003\u0002\u0002\u00024\u014e\u0003",
    "\u0002\u0002\u00026\u0150\u0003\u0002\u0002\u00028\u0156\u0003\u0002",
    "\u0002\u0002:\u0159\u0003\u0002\u0002\u0002<\u015c\u0003\u0002\u0002",
    "\u0002>\u0167\u0003\u0002\u0002\u0002@\u0170\u0003\u0002\u0002\u0002",
    "B\u0172\u0003\u0002\u0002\u0002D\u017f\u0003\u0002\u0002\u0002F\u018d",
    "\u0003\u0002\u0002\u0002H\u019a\u0003\u0002\u0002\u0002J\u019c\u0003",
    "\u0002\u0002\u0002L\u01b7\u0003\u0002\u0002\u0002N\u01bc\u0003\u0002",
    "\u0002\u0002P\u01be\u0003\u0002\u0002\u0002R\u01c0\u0003\u0002\u0002",
    "\u0002T\u01c6\u0003\u0002\u0002\u0002V\u01ce\u0003\u0002\u0002\u0002",
    "X\u0204\u0003\u0002\u0002\u0002Z\u024c\u0003\u0002\u0002\u0002\\\u0250",
    "\u0003\u0002\u0002\u0002^\u0252\u0003\u0002\u0002\u0002`\u0256\u0003",
    "\u0002\u0002\u0002b\u025b\u0003\u0002\u0002\u0002d\u025d\u0003\u0002",
    "\u0002\u0002f\u025f\u0003\u0002\u0002\u0002h\u0261\u0003\u0002\u0002",
    "\u0002j\u0265\u0003\u0002\u0002\u0002l\u026d\u0003\u0002\u0002\u0002",
    "n\u026f\u0003\u0002\u0002\u0002pr\u0005\u0004\u0003\u0002qp\u0003\u0002",
    "\u0002\u0002qr\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002st\u0007",
    "\u0002\u0002\u0003t\u0003\u0003\u0002\u0002\u0002uw\u0005\u0006\u0004",
    "\u0002vu\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002xv\u0003\u0002",
    "\u0002\u0002xy\u0003\u0002\u0002\u0002y\u0005\u0003\u0002\u0002\u0002",
    "z{\u0006\u0004\u0002\u0002{~\u0005\b\u0005\u0002|~\u0005<\u001f\u0002",
    "}z\u0003\u0002\u0002\u0002}|\u0003\u0002\u0002\u0002~\u0007\u0003\u0002",
    "\u0002\u0002\u007f\u0090\u0005\n\u0006\u0002\u0080\u0090\u0005\u000e",
    "\b\u0002\u0081\u0090\u0005\u0016\f\u0002\u0082\u0083\u0006\u0005\u0003",
    "\u0002\u0083\u0090\u0005\u0018\r\u0002\u0084\u0090\u0005\u001a\u000e",
    "\u0002\u0085\u0090\u0005\u001c\u000f\u0002\u0086\u0090\u0005\u001e\u0010",
    "\u0002\u0087\u0090\u0005 \u0011\u0002\u0088\u0090\u0005\"\u0012\u0002",
    "\u0089\u0090\u0005$\u0013\u0002\u008a\u0090\u00050\u0019\u0002\u008b",
    "\u0090\u0005&\u0014\u0002\u008c\u0090\u00052\u001a\u0002\u008d\u0090",
    "\u00054\u001b\u0002\u008e\u0090\u0005:\u001e\u0002\u008f\u007f\u0003",
    "\u0002\u0002\u0002\u008f\u0080\u0003\u0002\u0002\u0002\u008f\u0081\u0003",
    "\u0002\u0002\u0002\u008f\u0082\u0003\u0002\u0002\u0002\u008f\u0084\u0003",
    "\u0002\u0002\u0002\u008f\u0085\u0003\u0002\u0002\u0002\u008f\u0086\u0003",
    "\u0002\u0002\u0002\u008f\u0087\u0003\u0002\u0002\u0002\u008f\u0088\u0003",
    "\u0002\u0002\u0002\u008f\u0089\u0003\u0002\u0002\u0002\u008f\u008a\u0003",
    "\u0002\u0002\u0002\u008f\u008b\u0003\u0002\u0002\u0002\u008f\u008c\u0003",
    "\u0002\u0002\u0002\u008f\u008d\u0003\u0002\u0002\u0002\u008f\u008e\u0003",
    "\u0002\u0002\u0002\u0090\t\u0003\u0002\u0002\u0002\u0091\u0093\u0007",
    "\t\u0002\u0002\u0092\u0094\u0005\f\u0007\u0002\u0093\u0092\u0003\u0002",
    "\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002\u0094\u0095\u0003\u0002",
    "\u0002\u0002\u0095\u0096\u0007\n\u0002\u0002\u0096\u000b\u0003\u0002",
    "\u0002\u0002\u0097\u0099\u0005\b\u0005\u0002\u0098\u0097\u0003\u0002",
    "\u0002\u0002\u0099\u009a\u0003\u0002\u0002\u0002\u009a\u0098\u0003\u0002",
    "\u0002\u0002\u009a\u009b\u0003\u0002\u0002\u0002\u009b\r\u0003\u0002",
    "\u0002\u0002\u009c\u009d\u0007A\u0002\u0002\u009d\u009e\u0005\u0010",
    "\t\u0002\u009e\u009f\u0005l7\u0002\u009f\u000f\u0003\u0002\u0002\u0002",
    "\u00a0\u00a5\u0005\u0012\n\u0002\u00a1\u00a2\u0007\f\u0002\u0002\u00a2",
    "\u00a4\u0005\u0012\n\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a4",
    "\u00a7\u0003\u0002\u0002\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a5",
    "\u00a6\u0003\u0002\u0002\u0002\u00a6\u0011\u0003\u0002\u0002\u0002\u00a7",
    "\u00a5\u0003\u0002\u0002\u0002\u00a8\u00aa\u0007d\u0002\u0002\u00a9",
    "\u00ab\u0005\u0014\u000b\u0002\u00aa\u00a9\u0003\u0002\u0002\u0002\u00aa",
    "\u00ab\u0003\u0002\u0002\u0002\u00ab\u0013\u0003\u0002\u0002\u0002\u00ac",
    "\u00ad\u0007\r\u0002\u0002\u00ad\u00ae\u0005X-\u0002\u00ae\u0015\u0003",
    "\u0002\u0002\u0002\u00af\u00b0\u0007\u000b\u0002\u0002\u00b0\u0017\u0003",
    "\u0002\u0002\u0002\u00b1\u00b2\u0005V,\u0002\u00b2\u0019\u0003\u0002",
    "\u0002\u0002\u00b3\u00b4\u0007O\u0002\u0002\u00b4\u00b5\u0007\u0007",
    "\u0002\u0002\u00b5\u00b6\u0005V,\u0002\u00b6\u00b7\u0007\b\u0002\u0002",
    "\u00b7\u00ba\u0005\b\u0005\u0002\u00b8\u00b9\u0007?\u0002\u0002\u00b9",
    "\u00bb\u0005\b\u0005\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002\u00ba",
    "\u00bb\u0003\u0002\u0002\u0002\u00bb\u001b\u0003\u0002\u0002\u0002\u00bc",
    "\u00bd\u0007;\u0002\u0002\u00bd\u00be\u0005\b\u0005\u0002\u00be\u00bf",
    "\u0007I\u0002\u0002\u00bf\u00c0\u0007\u0007\u0002\u0002\u00c0\u00c1",
    "\u0005V,\u0002\u00c1\u00c2\u0007\b\u0002\u0002\u00c2\u00c3\u0005l7\u0002",
    "\u00c3\u00fa\u0003\u0002\u0002\u0002\u00c4\u00c5\u0007I\u0002\u0002",
    "\u00c5\u00c6\u0007\u0007\u0002\u0002\u00c6\u00c7\u0005V,\u0002\u00c7",
    "\u00c8\u0007\b\u0002\u0002\u00c8\u00c9\u0005\b\u0005\u0002\u00c9\u00fa",
    "\u0003\u0002\u0002\u0002\u00ca\u00cb\u0007G\u0002\u0002\u00cb\u00cd",
    "\u0007\u0007\u0002\u0002\u00cc\u00ce\u0005V,\u0002\u00cd\u00cc\u0003",
    "\u0002\u0002\u0002\u00cd\u00ce\u0003\u0002\u0002\u0002\u00ce\u00cf\u0003",
    "\u0002\u0002\u0002\u00cf\u00d1\u0007\u000b\u0002\u0002\u00d0\u00d2\u0005",
    "V,\u0002\u00d1\u00d0\u0003\u0002\u0002\u0002\u00d1\u00d2\u0003\u0002",
    "\u0002\u0002\u00d2\u00d3\u0003\u0002\u0002\u0002\u00d3\u00d5\u0007\u000b",
    "\u0002\u0002\u00d4\u00d6\u0005V,\u0002\u00d5\u00d4\u0003\u0002\u0002",
    "\u0002\u00d5\u00d6\u0003\u0002\u0002\u0002\u00d6\u00d7\u0003\u0002\u0002",
    "\u0002\u00d7\u00d8\u0007\b\u0002\u0002\u00d8\u00fa\u0005\b\u0005\u0002",
    "\u00d9\u00da\u0007G\u0002\u0002\u00da\u00db\u0007\u0007\u0002\u0002",
    "\u00db\u00dc\u0007A\u0002\u0002\u00dc\u00dd\u0005\u0010\t\u0002\u00dd",
    "\u00df\u0007\u000b\u0002\u0002\u00de\u00e0\u0005V,\u0002\u00df\u00de",
    "\u0003\u0002\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0\u00e1",
    "\u0003\u0002\u0002\u0002\u00e1\u00e3\u0007\u000b\u0002\u0002\u00e2\u00e4",
    "\u0005V,\u0002\u00e3\u00e2\u0003\u0002\u0002\u0002\u00e3\u00e4\u0003",
    "\u0002\u0002\u0002\u00e4\u00e5\u0003\u0002\u0002\u0002\u00e5\u00e6\u0007",
    "\b\u0002\u0002\u00e6\u00e7\u0005\b\u0005\u0002\u00e7\u00fa\u0003\u0002",
    "\u0002\u0002\u00e8\u00e9\u0007G\u0002\u0002\u00e9\u00ea\u0007\u0007",
    "\u0002\u0002\u00ea\u00eb\u0005X-\u0002\u00eb\u00ec\u0007R\u0002\u0002",
    "\u00ec\u00ed\u0005V,\u0002\u00ed\u00ee\u0007\b\u0002\u0002\u00ee\u00ef",
    "\u0005\b\u0005\u0002\u00ef\u00fa\u0003\u0002\u0002\u0002\u00f0\u00f1",
    "\u0007G\u0002\u0002\u00f1\u00f2\u0007\u0007\u0002\u0002\u00f2\u00f3",
    "\u0007A\u0002\u0002\u00f3\u00f4\u0005\u0012\n\u0002\u00f4\u00f5\u0007",
    "R\u0002\u0002\u00f5\u00f6\u0005V,\u0002\u00f6\u00f7\u0007\b\u0002\u0002",
    "\u00f7\u00f8\u0005\b\u0005\u0002\u00f8\u00fa\u0003\u0002\u0002\u0002",
    "\u00f9\u00bc\u0003\u0002\u0002\u0002\u00f9\u00c4\u0003\u0002\u0002\u0002",
    "\u00f9\u00ca\u0003\u0002\u0002\u0002\u00f9\u00d9\u0003\u0002\u0002\u0002",
    "\u00f9\u00e8\u0003\u0002\u0002\u0002\u00f9\u00f0\u0003\u0002\u0002\u0002",
    "\u00fa\u001d\u0003\u0002\u0002\u0002\u00fb\u00fe\u0007F\u0002\u0002",
    "\u00fc\u00fd\u0006\u0010\u0004\u0002\u00fd\u00ff\u0007d\u0002\u0002",
    "\u00fe\u00fc\u0003\u0002\u0002\u0002\u00fe\u00ff\u0003\u0002\u0002\u0002",
    "\u00ff\u0100\u0003\u0002\u0002\u0002\u0100\u0101\u0005l7\u0002\u0101",
    "\u001f\u0003\u0002\u0002\u0002\u0102\u0105\u0007:\u0002\u0002\u0103",
    "\u0104\u0006\u0011\u0005\u0002\u0104\u0106\u0007d\u0002\u0002\u0105",
    "\u0103\u0003\u0002\u0002\u0002\u0105\u0106\u0003\u0002\u0002\u0002\u0106",
    "\u0107\u0003\u0002\u0002\u0002\u0107\u0108\u0005l7\u0002\u0108!\u0003",
    "\u0002\u0002\u0002\u0109\u010c\u0007D\u0002\u0002\u010a\u010b\u0006",
    "\u0012\u0006\u0002\u010b\u010d\u0005V,\u0002\u010c\u010a\u0003\u0002",
    "\u0002\u0002\u010c\u010d\u0003\u0002\u0002\u0002\u010d\u010e\u0003\u0002",
    "\u0002\u0002\u010e\u010f\u0005l7\u0002\u010f#\u0003\u0002\u0002\u0002",
    "\u0110\u0111\u0007M\u0002\u0002\u0111\u0112\u0007\u0007\u0002\u0002",
    "\u0112\u0113\u0005V,\u0002\u0113\u0114\u0007\b\u0002\u0002\u0114\u0115",
    "\u0005\b\u0005\u0002\u0115%\u0003\u0002\u0002\u0002\u0116\u0117\u0007",
    "H\u0002\u0002\u0117\u0118\u0007\u0007\u0002\u0002\u0118\u0119\u0005",
    "V,\u0002\u0119\u011a\u0007\b\u0002\u0002\u011a\u011b\u0005(\u0015\u0002",
    "\u011b\'\u0003\u0002\u0002\u0002\u011c\u011e\u0007\t\u0002\u0002\u011d",
    "\u011f\u0005*\u0016\u0002\u011e\u011d\u0003\u0002\u0002\u0002\u011e",
    "\u011f\u0003\u0002\u0002\u0002\u011f\u0124\u0003\u0002\u0002\u0002\u0120",
    "\u0122\u0005.\u0018\u0002\u0121\u0123\u0005*\u0016\u0002\u0122\u0121",
    "\u0003\u0002\u0002\u0002\u0122\u0123\u0003\u0002\u0002\u0002\u0123\u0125",
    "\u0003\u0002\u0002\u0002\u0124\u0120\u0003\u0002\u0002\u0002\u0124\u0125",
    "\u0003\u0002\u0002\u0002\u0125\u0126\u0003\u0002\u0002\u0002\u0126\u0127",
    "\u0007\n\u0002\u0002\u0127)\u0003\u0002\u0002\u0002\u0128\u012a\u0005",
    ",\u0017\u0002\u0129\u0128\u0003\u0002\u0002\u0002\u012a\u012b\u0003",
    "\u0002\u0002\u0002\u012b\u0129\u0003\u0002\u0002\u0002\u012b\u012c\u0003",
    "\u0002\u0002\u0002\u012c+\u0003\u0002\u0002\u0002\u012d\u012e\u0007",
    ">\u0002\u0002\u012e\u012f\u0005V,\u0002\u012f\u0131\u0007\u000f\u0002",
    "\u0002\u0130\u0132\u0005\f\u0007\u0002\u0131\u0130\u0003\u0002\u0002",
    "\u0002\u0131\u0132\u0003\u0002\u0002\u0002\u0132-\u0003\u0002\u0002",
    "\u0002\u0133\u0134\u0007N\u0002\u0002\u0134\u0136\u0007\u000f\u0002",
    "\u0002\u0135\u0137\u0005\f\u0007\u0002\u0136\u0135\u0003\u0002\u0002",
    "\u0002\u0136\u0137\u0003\u0002\u0002\u0002\u0137/\u0003\u0002\u0002",
    "\u0002\u0138\u0139\u0007d\u0002\u0002\u0139\u013a\u0007\u000f\u0002",
    "\u0002\u013a\u013b\u0005\b\u0005\u0002\u013b1\u0003\u0002\u0002\u0002",
    "\u013c\u013d\u0007P\u0002\u0002\u013d\u013e\u0006\u001a\u0007\u0002",
    "\u013e\u013f\u0005V,\u0002\u013f\u0140\u0005l7\u0002\u01403\u0003\u0002",
    "\u0002\u0002\u0141\u0142\u0007S\u0002\u0002\u0142\u0143\u0005\n\u0006",
    "\u0002\u0143\u0144\u00056\u001c\u0002\u0144\u014f\u0003\u0002\u0002",
    "\u0002\u0145\u0146\u0007S\u0002\u0002\u0146\u0147\u0005\n\u0006\u0002",
    "\u0147\u0148\u00058\u001d\u0002\u0148\u014f\u0003\u0002\u0002\u0002",
    "\u0149\u014a\u0007S\u0002\u0002\u014a\u014b\u0005\n\u0006\u0002\u014b",
    "\u014c\u00056\u001c\u0002\u014c\u014d\u00058\u001d\u0002\u014d\u014f",
    "\u0003\u0002\u0002\u0002\u014e\u0141\u0003\u0002\u0002\u0002\u014e\u0145",
    "\u0003\u0002\u0002\u0002\u014e\u0149\u0003\u0002\u0002\u0002\u014f5",
    "\u0003\u0002\u0002\u0002\u0150\u0151\u0007B\u0002\u0002\u0151\u0152",
    "\u0007\u0007\u0002\u0002\u0152\u0153\u0007d\u0002\u0002\u0153\u0154",
    "\u0007\b\u0002\u0002\u0154\u0155\u0005\n\u0006\u0002\u01557\u0003\u0002",
    "\u0002\u0002\u0156\u0157\u0007C\u0002\u0002\u0157\u0158\u0005\n\u0006",
    "\u0002\u01589\u0003\u0002\u0002\u0002\u0159\u015a\u0007J\u0002\u0002",
    "\u015a\u015b\u0005l7\u0002\u015b;\u0003\u0002\u0002\u0002\u015c\u015d",
    "\u0007K\u0002\u0002\u015d\u015e\u0007d\u0002\u0002\u015e\u0160\u0007",
    "\u0007\u0002\u0002\u015f\u0161\u0005> \u0002\u0160\u015f\u0003\u0002",
    "\u0002\u0002\u0160\u0161\u0003\u0002\u0002\u0002\u0161\u0162\u0003\u0002",
    "\u0002\u0002\u0162\u0163\u0007\b\u0002\u0002\u0163\u0164\u0007\t\u0002",
    "\u0002\u0164\u0165\u0005@!\u0002\u0165\u0166\u0007\n\u0002\u0002\u0166",
    "=\u0003\u0002\u0002\u0002\u0167\u016c\u0007d\u0002\u0002\u0168\u0169",
    "\u0007\f\u0002\u0002\u0169\u016b\u0007d\u0002\u0002\u016a\u0168\u0003",
    "\u0002\u0002\u0002\u016b\u016e\u0003\u0002\u0002\u0002\u016c\u016a\u0003",
    "\u0002\u0002\u0002\u016c\u016d\u0003\u0002\u0002\u0002\u016d?\u0003",
    "\u0002\u0002\u0002\u016e\u016c\u0003\u0002\u0002\u0002\u016f\u0171\u0005",
    "\u0004\u0003\u0002\u0170\u016f\u0003\u0002\u0002\u0002\u0170\u0171\u0003",
    "\u0002\u0002\u0002\u0171A\u0003\u0002\u0002\u0002\u0172\u0174\u0007",
    "\u0005\u0002\u0002\u0173\u0175\u0005D#\u0002\u0174\u0173\u0003\u0002",
    "\u0002\u0002\u0174\u0175\u0003\u0002\u0002\u0002\u0175\u0177\u0003\u0002",
    "\u0002\u0002\u0176\u0178\u0007\f\u0002\u0002\u0177\u0176\u0003\u0002",
    "\u0002\u0002\u0177\u0178\u0003\u0002\u0002\u0002\u0178\u017a\u0003\u0002",
    "\u0002\u0002\u0179\u017b\u0005F$\u0002\u017a\u0179\u0003\u0002\u0002",
    "\u0002\u017a\u017b\u0003\u0002\u0002\u0002\u017b\u017c\u0003\u0002\u0002",
    "\u0002\u017c\u017d\u0007\u0006\u0002\u0002\u017dC\u0003\u0002\u0002",
    "\u0002\u017e\u0180\u0005F$\u0002\u017f\u017e\u0003\u0002\u0002\u0002",
    "\u017f\u0180\u0003\u0002\u0002\u0002\u0180\u0181\u0003\u0002\u0002\u0002",
    "\u0181\u0189\u0005X-\u0002\u0182\u0184\u0007\f\u0002\u0002\u0183\u0185",
    "\u0005F$\u0002\u0184\u0183\u0003\u0002\u0002\u0002\u0184\u0185\u0003",
    "\u0002\u0002\u0002\u0185\u0186\u0003\u0002\u0002\u0002\u0186\u0188\u0005",
    "X-\u0002\u0187\u0182\u0003\u0002\u0002\u0002\u0188\u018b\u0003\u0002",
    "\u0002\u0002\u0189\u0187\u0003\u0002\u0002\u0002\u0189\u018a\u0003\u0002",
    "\u0002\u0002\u018aE\u0003\u0002\u0002\u0002\u018b\u0189\u0003\u0002",
    "\u0002\u0002\u018c\u018e\u0007\f\u0002\u0002\u018d\u018c\u0003\u0002",
    "\u0002\u0002\u018e\u018f\u0003\u0002\u0002\u0002\u018f\u018d\u0003\u0002",
    "\u0002\u0002\u018f\u0190\u0003\u0002\u0002\u0002\u0190G\u0003\u0002",
    "\u0002\u0002\u0191\u0192\u0007\t\u0002\u0002\u0192\u019b\u0007\n\u0002",
    "\u0002\u0193\u0194\u0007\t\u0002\u0002\u0194\u0196\u0005J&\u0002\u0195",
    "\u0197\u0007\f\u0002\u0002\u0196\u0195\u0003\u0002\u0002\u0002\u0196",
    "\u0197\u0003\u0002\u0002\u0002\u0197\u0198\u0003\u0002\u0002\u0002\u0198",
    "\u0199\u0007\n\u0002\u0002\u0199\u019b\u0003\u0002\u0002\u0002\u019a",
    "\u0191\u0003\u0002\u0002\u0002\u019a\u0193\u0003\u0002\u0002\u0002\u019b",
    "I\u0003\u0002\u0002\u0002\u019c\u01a1\u0005L\'\u0002\u019d\u019e\u0007",
    "\f\u0002\u0002\u019e\u01a0\u0005L\'\u0002\u019f\u019d\u0003\u0002\u0002",
    "\u0002\u01a0\u01a3\u0003\u0002\u0002\u0002\u01a1\u019f\u0003\u0002\u0002",
    "\u0002\u01a1\u01a2\u0003\u0002\u0002\u0002\u01a2K\u0003\u0002\u0002",
    "\u0002\u01a3\u01a1\u0003\u0002\u0002\u0002\u01a4\u01a5\u0005N(\u0002",
    "\u01a5\u01a6\u0007\u000f\u0002\u0002\u01a6\u01a7\u0005X-\u0002\u01a7",
    "\u01b8\u0003\u0002\u0002\u0002\u01a8\u01a9\u0005h5\u0002\u01a9\u01aa",
    "\u0007\u0007\u0002\u0002\u01aa\u01ab\u0007\b\u0002\u0002\u01ab\u01ac",
    "\u0007\t\u0002\u0002\u01ac\u01ad\u0005@!\u0002\u01ad\u01ae\u0007\n\u0002",
    "\u0002\u01ae\u01b8\u0003\u0002\u0002\u0002\u01af\u01b0\u0005j6\u0002",
    "\u01b0\u01b1\u0007\u0007\u0002\u0002\u01b1\u01b2\u0005P)\u0002\u01b2",
    "\u01b3\u0007\b\u0002\u0002\u01b3\u01b4\u0007\t\u0002\u0002\u01b4\u01b5",
    "\u0005@!\u0002\u01b5\u01b6\u0007\n\u0002\u0002\u01b6\u01b8\u0003\u0002",
    "\u0002\u0002\u01b7\u01a4\u0003\u0002\u0002\u0002\u01b7\u01a8\u0003\u0002",
    "\u0002\u0002\u01b7\u01af\u0003\u0002\u0002\u0002\u01b8M\u0003\u0002",
    "\u0002\u0002\u01b9\u01bd\u0005`1\u0002\u01ba\u01bd\u0007e\u0002\u0002",
    "\u01bb\u01bd\u0005^0\u0002\u01bc\u01b9\u0003\u0002\u0002\u0002\u01bc",
    "\u01ba\u0003\u0002\u0002\u0002\u01bc\u01bb\u0003\u0002\u0002\u0002\u01bd",
    "O\u0003\u0002\u0002\u0002\u01be\u01bf\u0007d\u0002\u0002\u01bfQ\u0003",
    "\u0002\u0002\u0002\u01c0\u01c2\u0007\u0007\u0002\u0002\u01c1\u01c3\u0005",
    "T+\u0002\u01c2\u01c1\u0003\u0002\u0002\u0002\u01c2\u01c3\u0003\u0002",
    "\u0002\u0002\u01c3\u01c4\u0003\u0002\u0002\u0002\u01c4\u01c5\u0007\b",
    "\u0002\u0002\u01c5S\u0003\u0002\u0002\u0002\u01c6\u01cb\u0005X-\u0002",
    "\u01c7\u01c8\u0007\f\u0002\u0002\u01c8\u01ca\u0005X-\u0002\u01c9\u01c7",
    "\u0003\u0002\u0002\u0002\u01ca\u01cd\u0003\u0002\u0002\u0002\u01cb\u01c9",
    "\u0003\u0002\u0002\u0002\u01cb\u01cc\u0003\u0002\u0002\u0002\u01ccU",
    "\u0003\u0002\u0002\u0002\u01cd\u01cb\u0003\u0002\u0002\u0002\u01ce\u01d3",
    "\u0005X-\u0002\u01cf\u01d0\u0007\f\u0002\u0002\u01d0\u01d2\u0005X-\u0002",
    "\u01d1\u01cf\u0003\u0002\u0002\u0002\u01d2\u01d5\u0003\u0002\u0002\u0002",
    "\u01d3\u01d1\u0003\u0002\u0002\u0002\u01d3\u01d4\u0003\u0002\u0002\u0002",
    "\u01d4W\u0003\u0002\u0002\u0002\u01d5\u01d3\u0003\u0002\u0002\u0002",
    "\u01d6\u01d7\b-\u0001\u0002\u01d7\u01d9\u0007K\u0002\u0002\u01d8\u01da",
    "\u0007d\u0002\u0002\u01d9\u01d8\u0003\u0002\u0002\u0002\u01d9\u01da",
    "\u0003\u0002\u0002\u0002\u01da\u01db\u0003\u0002\u0002\u0002\u01db\u01dd",
    "\u0007\u0007\u0002\u0002\u01dc\u01de\u0005> \u0002\u01dd\u01dc\u0003",
    "\u0002\u0002\u0002\u01dd\u01de\u0003\u0002\u0002\u0002\u01de\u01df\u0003",
    "\u0002\u0002\u0002\u01df\u01e0\u0007\b\u0002\u0002\u01e0\u01e1\u0007",
    "\t\u0002\u0002\u01e1\u01e2\u0005@!\u0002\u01e2\u01e3\u0007\n\u0002\u0002",
    "\u01e3\u0205\u0003\u0002\u0002\u0002\u01e4\u01e5\u0007@\u0002\u0002",
    "\u01e5\u01e7\u0005X-\u0002\u01e6\u01e8\u0005R*\u0002\u01e7\u01e6\u0003",
    "\u0002\u0002\u0002\u01e7\u01e8\u0003\u0002\u0002\u0002\u01e8\u0205\u0003",
    "\u0002\u0002\u0002\u01e9\u01ea\u0007Q\u0002\u0002\u01ea\u0205\u0005",
    "X- \u01eb\u01ec\u0007E\u0002\u0002\u01ec\u0205\u0005X-\u001f\u01ed\u01ee",
    "\u0007=\u0002\u0002\u01ee\u0205\u0005X-\u001e\u01ef\u01f0\u0007\u0011",
    "\u0002\u0002\u01f0\u0205\u0005X-\u001d\u01f1\u01f2\u0007\u0012\u0002",
    "\u0002\u01f2\u0205\u0005X-\u001c\u01f3\u01f4\u0007\u0013\u0002\u0002",
    "\u01f4\u0205\u0005X-\u001b\u01f5\u01f6\u0007\u0014\u0002\u0002\u01f6",
    "\u0205\u0005X-\u001a\u01f7\u01f8\u0007\u0015\u0002\u0002\u01f8\u0205",
    "\u0005X-\u0019\u01f9\u01fa\u0007\u0016\u0002\u0002\u01fa\u0205\u0005",
    "X-\u0018\u01fb\u0205\u0007L\u0002\u0002\u01fc\u0205\u0007d\u0002\u0002",
    "\u01fd\u0205\u0005\\/\u0002\u01fe\u0205\u0005B\"\u0002\u01ff\u0205\u0005",
    "H%\u0002\u0200\u0201\u0007\u0007\u0002\u0002\u0201\u0202\u0005V,\u0002",
    "\u0202\u0203\u0007\b\u0002\u0002\u0203\u0205\u0003\u0002\u0002\u0002",
    "\u0204\u01d6\u0003\u0002\u0002\u0002\u0204\u01e4\u0003\u0002\u0002\u0002",
    "\u0204\u01e9\u0003\u0002\u0002\u0002\u0204\u01eb\u0003\u0002\u0002\u0002",
    "\u0204\u01ed\u0003\u0002\u0002\u0002\u0204\u01ef\u0003\u0002\u0002\u0002",
    "\u0204\u01f1\u0003\u0002\u0002\u0002\u0204\u01f3\u0003\u0002\u0002\u0002",
    "\u0204\u01f5\u0003\u0002\u0002\u0002\u0204\u01f7\u0003\u0002\u0002\u0002",
    "\u0204\u01f9\u0003\u0002\u0002\u0002\u0204\u01fb\u0003\u0002\u0002\u0002",
    "\u0204\u01fc\u0003\u0002\u0002\u0002\u0204\u01fd\u0003\u0002\u0002\u0002",
    "\u0204\u01fe\u0003\u0002\u0002\u0002\u0204\u01ff\u0003\u0002\u0002\u0002",
    "\u0204\u0200\u0003\u0002\u0002\u0002\u0205\u0249\u0003\u0002\u0002\u0002",
    "\u0206\u0207\f\u0017\u0002\u0002\u0207\u0208\t\u0002\u0002\u0002\u0208",
    "\u0248\u0005X-\u0018\u0209\u020a\f\u0016\u0002\u0002\u020a\u020b\t\u0003",
    "\u0002\u0002\u020b\u0248\u0005X-\u0017\u020c\u020d\f\u0015\u0002\u0002",
    "\u020d\u020e\t\u0004\u0002\u0002\u020e\u0248\u0005X-\u0016\u020f\u0210",
    "\f\u0014\u0002\u0002\u0210\u0211\t\u0005\u0002\u0002\u0211\u0248\u0005",
    "X-\u0015\u0212\u0213\f\u0013\u0002\u0002\u0213\u0214\u0007<\u0002\u0002",
    "\u0214\u0248\u0005X-\u0014\u0215\u0216\f\u0012\u0002\u0002\u0216\u0217",
    "\u0007R\u0002\u0002\u0217\u0248\u0005X-\u0013\u0218\u0219\f\u0011\u0002",
    "\u0002\u0219\u021a\t\u0006\u0002\u0002\u021a\u0248\u0005X-\u0012\u021b",
    "\u021c\f\u0010\u0002\u0002\u021c\u021d\u0007%\u0002\u0002\u021d\u0248",
    "\u0005X-\u0011\u021e\u021f\f\u000f\u0002\u0002\u021f\u0220\u0007&\u0002",
    "\u0002\u0220\u0248\u0005X-\u0010\u0221\u0222\f\u000e\u0002\u0002\u0222",
    "\u0223\u0007\'\u0002\u0002\u0223\u0248\u0005X-\u000f\u0224\u0225\f\r",
    "\u0002\u0002\u0225\u0226\u0007(\u0002\u0002\u0226\u0248\u0005X-\u000e",
    "\u0227\u0228\f\f\u0002\u0002\u0228\u0229\u0007)\u0002\u0002\u0229\u0248",
    "\u0005X-\r\u022a\u022b\f\u000b\u0002\u0002\u022b\u022c\u0007\u000e\u0002",
    "\u0002\u022c\u022d\u0005X-\u0002\u022d\u022e\u0007\u000f\u0002\u0002",
    "\u022e\u022f\u0005X-\f\u022f\u0248\u0003\u0002\u0002\u0002\u0230\u0231",
    "\f&\u0002\u0002\u0231\u0232\u0007\u0005\u0002\u0002\u0232\u0233\u0005",
    "V,\u0002\u0233\u0234\u0007\u0006\u0002\u0002\u0234\u0248\u0003\u0002",
    "\u0002\u0002\u0235\u0236\f%\u0002\u0002\u0236\u0237\u0007\u0010\u0002",
    "\u0002\u0237\u0248\u0005`1\u0002\u0238\u0239\f$\u0002\u0002\u0239\u0248",
    "\u0005R*\u0002\u023a\u023b\f\"\u0002\u0002\u023b\u023c\u0006-\u0019",
    "\u0002\u023c\u0248\u0007\u0011\u0002\u0002\u023d\u023e\f!\u0002\u0002",
    "\u023e\u023f\u0006-\u001b\u0002\u023f\u0248\u0007\u0012\u0002\u0002",
    "\u0240\u0241\f\n\u0002\u0002\u0241\u0242\u0007\r\u0002\u0002\u0242\u0248",
    "\u0005V,\u0002\u0243\u0244\f\t\u0002\u0002\u0244\u0245\u0005Z.\u0002",
    "\u0245\u0246\u0005V,\u0002\u0246\u0248\u0003\u0002\u0002\u0002\u0247",
    "\u0206\u0003\u0002\u0002\u0002\u0247\u0209\u0003\u0002\u0002\u0002\u0247",
    "\u020c\u0003\u0002\u0002\u0002\u0247\u020f\u0003\u0002\u0002\u0002\u0247",
    "\u0212\u0003\u0002\u0002\u0002\u0247\u0215\u0003\u0002\u0002\u0002\u0247",
    "\u0218\u0003\u0002\u0002\u0002\u0247\u021b\u0003\u0002\u0002\u0002\u0247",
    "\u021e\u0003\u0002\u0002\u0002\u0247\u0221\u0003\u0002\u0002\u0002\u0247",
    "\u0224\u0003\u0002\u0002\u0002\u0247\u0227\u0003\u0002\u0002\u0002\u0247",
    "\u022a\u0003\u0002\u0002\u0002\u0247\u0230\u0003\u0002\u0002\u0002\u0247",
    "\u0235\u0003\u0002\u0002\u0002\u0247\u0238\u0003\u0002\u0002\u0002\u0247",
    "\u023a\u0003\u0002\u0002\u0002\u0247\u023d\u0003\u0002\u0002\u0002\u0247",
    "\u0240\u0003\u0002\u0002\u0002\u0247\u0243\u0003\u0002\u0002\u0002\u0248",
    "\u024b\u0003\u0002\u0002\u0002\u0249\u0247\u0003\u0002\u0002\u0002\u0249",
    "\u024a\u0003\u0002\u0002\u0002\u024aY\u0003\u0002\u0002\u0002\u024b",
    "\u0249\u0003\u0002\u0002\u0002\u024c\u024d\t\u0007\u0002\u0002\u024d",
    "[\u0003\u0002\u0002\u0002\u024e\u0251\t\b\u0002\u0002\u024f\u0251\u0005",
    "^0\u0002\u0250\u024e\u0003\u0002\u0002\u0002\u0250\u024f\u0003\u0002",
    "\u0002\u0002\u0251]\u0003\u0002\u0002\u0002\u0252\u0253\t\t\u0002\u0002",
    "\u0253_\u0003\u0002\u0002\u0002\u0254\u0257\u0007d\u0002\u0002\u0255",
    "\u0257\u0005b2\u0002\u0256\u0254\u0003\u0002\u0002\u0002\u0256\u0255",
    "\u0003\u0002\u0002\u0002\u0257a\u0003\u0002\u0002\u0002\u0258\u025c",
    "\u0005d3\u0002\u0259\u025c\u0005f4\u0002\u025a\u025c\t\n\u0002\u0002",
    "\u025b\u0258\u0003\u0002\u0002\u0002\u025b\u0259\u0003\u0002\u0002\u0002",
    "\u025b\u025a\u0003\u0002\u0002\u0002\u025cc\u0003\u0002\u0002\u0002",
    "\u025d\u025e\t\u000b\u0002\u0002\u025ee\u0003\u0002\u0002\u0002\u025f",
    "\u0260\t\f\u0002\u0002\u0260g\u0003\u0002\u0002\u0002\u0261\u0262\u0006",
    "5\u001e\u0002\u0262\u0263\u0007d\u0002\u0002\u0263\u0264\u0005N(\u0002",
    "\u0264i\u0003\u0002\u0002\u0002\u0265\u0266\u00066\u001f\u0002\u0266",
    "\u0267\u0007d\u0002\u0002\u0267\u0268\u0005N(\u0002\u0268k\u0003\u0002",
    "\u0002\u0002\u0269\u026e\u0007\u000b\u0002\u0002\u026a\u026e\u0007\u0002",
    "\u0002\u0003\u026b\u026e\u00067 \u0002\u026c\u026e\u00067!\u0002\u026d",
    "\u0269\u0003\u0002\u0002\u0002\u026d\u026a\u0003\u0002\u0002\u0002\u026d",
    "\u026b\u0003\u0002\u0002\u0002\u026d\u026c\u0003\u0002\u0002\u0002\u026e",
    "m\u0003\u0002\u0002\u0002\u026f\u0270\u0007\u0002\u0002\u0003\u0270",
    "o\u0003\u0002\u0002\u00027qx}\u008f\u0093\u009a\u00a5\u00aa\u00ba\u00cd",
    "\u00d1\u00d5\u00df\u00e3\u00f9\u00fe\u0105\u010c\u011e\u0122\u0124\u012b",
    "\u0131\u0136\u014e\u0160\u016c\u0170\u0174\u0177\u017a\u017f\u0184\u0189",
    "\u018f\u0196\u019a\u01a1\u01b7\u01bc\u01c2\u01cb\u01d3\u01d9\u01dd\u01e7",
    "\u0204\u0247\u0249\u0250\u0256\u025b\u026d"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "'['", "']'", "'('", "')'", "'{'", 
                     "'}'", "';'", "','", "'='", "'?'", "':'", "'.'", "'++'", 
                     "'--'", "'+'", "'-'", "'~'", "'!'", "'*'", "'/'", "'%'", 
                     "'>>'", "'<<'", "'>>>'", "'<'", "'>'", "'<='", "'>='", 
                     "'=='", "'!='", "'==='", "'!=='", "'&'", "'^'", "'|'", 
                     "'&&'", "'||'", "'*='", "'/='", "'%='", "'+='", "'-='", 
                     "'<<='", "'>>='", "'>>>='", "'&='", "'^='", "'|='", 
                     "'null'", null, null, null, null, "'break'", "'do'", 
                     "'instanceof'", "'typeof'", "'case'", "'else'", "'new'", 
                     "'var'", "'catch'", "'finally'", "'return'", "'void'", 
                     "'continue'", "'for'", "'switch'", "'while'", "'debugger'", 
                     "'function'", "'this'", "'with'", "'default'", "'if'", 
                     "'throw'", "'delete'", "'in'", "'try'", "'class'", 
                     "'enum'", "'extends'", "'super'", "'const'", "'export'", 
                     "'import'" ];

var symbolicNames = [ null, "RegularExpressionLiteral", "LineTerminator", 
                      "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", 
                      "OpenBrace", "CloseBrace", "SemiColon", "Comma", "Assign", 
                      "QuestionMark", "Colon", "Dot", "PlusPlus", "MinusMinus", 
                      "Plus", "Minus", "BitNot", "Not", "Multiply", "Divide", 
                      "Modulus", "RightShiftArithmetic", "LeftShiftArithmetic", 
                      "RightShiftLogical", "LessThan", "MoreThan", "LessThanEquals", 
                      "GreaterThanEquals", "Equals", "NotEquals", "IdentityEquals", 
                      "IdentityNotEquals", "BitAnd", "BitXOr", "BitOr", 
                      "And", "Or", "MultiplyAssign", "DivideAssign", "ModulusAssign", 
                      "PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", 
                      "RightShiftArithmeticAssign", "RightShiftLogicalAssign", 
                      "BitAndAssign", "BitXorAssign", "BitOrAssign", "NullLiteral", 
                      "BooleanLiteral", "DecimalLiteral", "HexIntegerLiteral", 
                      "OctalIntegerLiteral", "Break", "Do", "Instanceof", 
                      "Typeof", "Case", "Else", "New", "Var", "Catch", "Finally", 
                      "Return", "Void", "Continue", "For", "Switch", "While", 
                      "Debugger", "Function", "This", "With", "Default", 
                      "If", "Throw", "Delete", "In", "Try", "Class", "Enum", 
                      "Extends", "Super", "Const", "Export", "Import", "Implements", 
                      "Let", "Private", "Public", "Interface", "Package", 
                      "Protected", "Static", "Yield", "Identifier", "StringLiteral", 
                      "WhiteSpaces", "MultiLineComment", "SingleLineComment", 
                      "UnexpectedCharacter" ];

var ruleNames =  [ "program", "sourceElements", "sourceElement", "statement", 
                   "block", "statementList", "variableStatement", "variableDeclarationList", 
                   "variableDeclaration", "initialiser", "emptyStatement", 
                   "expressionStatement", "ifStatement", "iterationStatement", 
                   "continueStatement", "breakStatement", "returnStatement", 
                   "withStatement", "switchStatement", "caseBlock", "caseClauses", 
                   "caseClause", "defaultClause", "labelledStatement", "throwStatement", 
                   "tryStatement", "catchProduction", "finallyProduction", 
                   "debuggerStatement", "functionDeclaration", "formalParameterList", 
                   "functionBody", "arrayLiteral", "elementList", "elision", 
                   "objectLiteral", "propertyNameAndValueList", "propertyAssignment", 
                   "propertyName", "propertySetParameterList", "arguments", 
                   "argumentList", "expressionSequence", "singleExpression", 
                   "assignmentOperator", "literal", "numericLiteral", "identifierName", 
                   "reservedWord", "keyword", "futureReservedWord", "getter", 
                   "setter", "eos", "eof" ];

function ECMAScriptParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;

	/**
	 * Returns true if, on the current index of the parser's token stream,
	 * a token of the given type exists on the HIDDEN channel.
	 * @param type {Number} The type of the token on the HIDDEN channel to check.
	 * @returns {Boolean}
	 */
	ECMAScriptParser.prototype.here = function(type) {
	    var possibleIndexEosToken = antlr4.Parser.prototype.getCurrentToken.call(this).tokenIndex - 1;
	    var ahead = this._input.get(possibleIndexEosToken);
	    return (ahead.channel == antlr4.Lexer.HIDDEN) && (ahead.type == type);
	};

	/**
	 * Returns true if, on the current index of the parser's
	 * token stream, a token exists on the HIDDEN channel which
	 * either is a line terminator, or is a multi line comment that
	 * contains a line terminator.
	 * @returns {Boolean}
	 */
	ECMAScriptParser.prototype.lineTerminatorAhead = function() {
	    var possibleIndexEosToken = antlr4.Parser.prototype.getCurrentToken.call(this).tokenIndex - 1;
	    var ahead = this._input.get(possibleIndexEosToken);

	    if (ahead.channel != antlr4.Lexer.HIDDEN)
	        return false;

	    var text = ahead.text;
	    var type = ahead.type;

	    return (type == ECMAScriptParser.MultiLineComment && text.indexOf("\r") !== -1 || text.indexOf("\n") !== -1) ||
	            (type == ECMAScriptParser.LineTerminator);
	};

    return this;
}

ECMAScriptParser.prototype = Object.create(antlr4.Parser.prototype);
ECMAScriptParser.prototype.constructor = ECMAScriptParser;

Object.defineProperty(ECMAScriptParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ECMAScriptParser.EOF = antlr4.Token.EOF;
ECMAScriptParser.RegularExpressionLiteral = 1;
ECMAScriptParser.LineTerminator = 2;
ECMAScriptParser.OpenBracket = 3;
ECMAScriptParser.CloseBracket = 4;
ECMAScriptParser.OpenParen = 5;
ECMAScriptParser.CloseParen = 6;
ECMAScriptParser.OpenBrace = 7;
ECMAScriptParser.CloseBrace = 8;
ECMAScriptParser.SemiColon = 9;
ECMAScriptParser.Comma = 10;
ECMAScriptParser.Assign = 11;
ECMAScriptParser.QuestionMark = 12;
ECMAScriptParser.Colon = 13;
ECMAScriptParser.Dot = 14;
ECMAScriptParser.PlusPlus = 15;
ECMAScriptParser.MinusMinus = 16;
ECMAScriptParser.Plus = 17;
ECMAScriptParser.Minus = 18;
ECMAScriptParser.BitNot = 19;
ECMAScriptParser.Not = 20;
ECMAScriptParser.Multiply = 21;
ECMAScriptParser.Divide = 22;
ECMAScriptParser.Modulus = 23;
ECMAScriptParser.RightShiftArithmetic = 24;
ECMAScriptParser.LeftShiftArithmetic = 25;
ECMAScriptParser.RightShiftLogical = 26;
ECMAScriptParser.LessThan = 27;
ECMAScriptParser.MoreThan = 28;
ECMAScriptParser.LessThanEquals = 29;
ECMAScriptParser.GreaterThanEquals = 30;
ECMAScriptParser.Equals = 31;
ECMAScriptParser.NotEquals = 32;
ECMAScriptParser.IdentityEquals = 33;
ECMAScriptParser.IdentityNotEquals = 34;
ECMAScriptParser.BitAnd = 35;
ECMAScriptParser.BitXOr = 36;
ECMAScriptParser.BitOr = 37;
ECMAScriptParser.And = 38;
ECMAScriptParser.Or = 39;
ECMAScriptParser.MultiplyAssign = 40;
ECMAScriptParser.DivideAssign = 41;
ECMAScriptParser.ModulusAssign = 42;
ECMAScriptParser.PlusAssign = 43;
ECMAScriptParser.MinusAssign = 44;
ECMAScriptParser.LeftShiftArithmeticAssign = 45;
ECMAScriptParser.RightShiftArithmeticAssign = 46;
ECMAScriptParser.RightShiftLogicalAssign = 47;
ECMAScriptParser.BitAndAssign = 48;
ECMAScriptParser.BitXorAssign = 49;
ECMAScriptParser.BitOrAssign = 50;
ECMAScriptParser.NullLiteral = 51;
ECMAScriptParser.BooleanLiteral = 52;
ECMAScriptParser.DecimalLiteral = 53;
ECMAScriptParser.HexIntegerLiteral = 54;
ECMAScriptParser.OctalIntegerLiteral = 55;
ECMAScriptParser.Break = 56;
ECMAScriptParser.Do = 57;
ECMAScriptParser.Instanceof = 58;
ECMAScriptParser.Typeof = 59;
ECMAScriptParser.Case = 60;
ECMAScriptParser.Else = 61;
ECMAScriptParser.New = 62;
ECMAScriptParser.Var = 63;
ECMAScriptParser.Catch = 64;
ECMAScriptParser.Finally = 65;
ECMAScriptParser.Return = 66;
ECMAScriptParser.Void = 67;
ECMAScriptParser.Continue = 68;
ECMAScriptParser.For = 69;
ECMAScriptParser.Switch = 70;
ECMAScriptParser.While = 71;
ECMAScriptParser.Debugger = 72;
ECMAScriptParser.Function = 73;
ECMAScriptParser.This = 74;
ECMAScriptParser.With = 75;
ECMAScriptParser.Default = 76;
ECMAScriptParser.If = 77;
ECMAScriptParser.Throw = 78;
ECMAScriptParser.Delete = 79;
ECMAScriptParser.In = 80;
ECMAScriptParser.Try = 81;
ECMAScriptParser.Class = 82;
ECMAScriptParser.Enum = 83;
ECMAScriptParser.Extends = 84;
ECMAScriptParser.Super = 85;
ECMAScriptParser.Const = 86;
ECMAScriptParser.Export = 87;
ECMAScriptParser.Import = 88;
ECMAScriptParser.Implements = 89;
ECMAScriptParser.Let = 90;
ECMAScriptParser.Private = 91;
ECMAScriptParser.Public = 92;
ECMAScriptParser.Interface = 93;
ECMAScriptParser.Package = 94;
ECMAScriptParser.Protected = 95;
ECMAScriptParser.Static = 96;
ECMAScriptParser.Yield = 97;
ECMAScriptParser.Identifier = 98;
ECMAScriptParser.StringLiteral = 99;
ECMAScriptParser.WhiteSpaces = 100;
ECMAScriptParser.MultiLineComment = 101;
ECMAScriptParser.SingleLineComment = 102;
ECMAScriptParser.UnexpectedCharacter = 103;

ECMAScriptParser.RULE_program = 0;
ECMAScriptParser.RULE_sourceElements = 1;
ECMAScriptParser.RULE_sourceElement = 2;
ECMAScriptParser.RULE_statement = 3;
ECMAScriptParser.RULE_block = 4;
ECMAScriptParser.RULE_statementList = 5;
ECMAScriptParser.RULE_variableStatement = 6;
ECMAScriptParser.RULE_variableDeclarationList = 7;
ECMAScriptParser.RULE_variableDeclaration = 8;
ECMAScriptParser.RULE_initialiser = 9;
ECMAScriptParser.RULE_emptyStatement = 10;
ECMAScriptParser.RULE_expressionStatement = 11;
ECMAScriptParser.RULE_ifStatement = 12;
ECMAScriptParser.RULE_iterationStatement = 13;
ECMAScriptParser.RULE_continueStatement = 14;
ECMAScriptParser.RULE_breakStatement = 15;
ECMAScriptParser.RULE_returnStatement = 16;
ECMAScriptParser.RULE_withStatement = 17;
ECMAScriptParser.RULE_switchStatement = 18;
ECMAScriptParser.RULE_caseBlock = 19;
ECMAScriptParser.RULE_caseClauses = 20;
ECMAScriptParser.RULE_caseClause = 21;
ECMAScriptParser.RULE_defaultClause = 22;
ECMAScriptParser.RULE_labelledStatement = 23;
ECMAScriptParser.RULE_throwStatement = 24;
ECMAScriptParser.RULE_tryStatement = 25;
ECMAScriptParser.RULE_catchProduction = 26;
ECMAScriptParser.RULE_finallyProduction = 27;
ECMAScriptParser.RULE_debuggerStatement = 28;
ECMAScriptParser.RULE_functionDeclaration = 29;
ECMAScriptParser.RULE_formalParameterList = 30;
ECMAScriptParser.RULE_functionBody = 31;
ECMAScriptParser.RULE_arrayLiteral = 32;
ECMAScriptParser.RULE_elementList = 33;
ECMAScriptParser.RULE_elision = 34;
ECMAScriptParser.RULE_objectLiteral = 35;
ECMAScriptParser.RULE_propertyNameAndValueList = 36;
ECMAScriptParser.RULE_propertyAssignment = 37;
ECMAScriptParser.RULE_propertyName = 38;
ECMAScriptParser.RULE_propertySetParameterList = 39;
ECMAScriptParser.RULE_arguments = 40;
ECMAScriptParser.RULE_argumentList = 41;
ECMAScriptParser.RULE_expressionSequence = 42;
ECMAScriptParser.RULE_singleExpression = 43;
ECMAScriptParser.RULE_assignmentOperator = 44;
ECMAScriptParser.RULE_literal = 45;
ECMAScriptParser.RULE_numericLiteral = 46;
ECMAScriptParser.RULE_identifierName = 47;
ECMAScriptParser.RULE_reservedWord = 48;
ECMAScriptParser.RULE_keyword = 49;
ECMAScriptParser.RULE_futureReservedWord = 50;
ECMAScriptParser.RULE_getter = 51;
ECMAScriptParser.RULE_setter = 52;
ECMAScriptParser.RULE_eos = 53;
ECMAScriptParser.RULE_eof = 54;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.EOF = function() {
    return this.getToken(ECMAScriptParser.EOF, 0);
};

ProgramContext.prototype.sourceElements = function() {
    return this.getTypedRuleContext(SourceElementsContext,0);
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.ProgramContext = ProgramContext;

ECMAScriptParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ECMAScriptParser.RULE_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 111;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        if(la_===1) {
            this.state = 110;
            this.sourceElements();

        }
        this.state = 113;
        this.match(ECMAScriptParser.EOF);
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
};


function SourceElementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_sourceElements;
    return this;
}

SourceElementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceElementsContext.prototype.constructor = SourceElementsContext;

SourceElementsContext.prototype.sourceElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SourceElementContext);
    } else {
        return this.getTypedRuleContext(SourceElementContext,i);
    }
};

SourceElementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterSourceElements(this);
	}
};

SourceElementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitSourceElements(this);
	}
};

SourceElementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitSourceElements(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.SourceElementsContext = SourceElementsContext;

ECMAScriptParser.prototype.sourceElements = function() {

    var localctx = new SourceElementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ECMAScriptParser.RULE_sourceElements);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 116; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 115;
        		this.sourceElement();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 118; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
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
};


function SourceElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_sourceElement;
    return this;
}

SourceElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceElementContext.prototype.constructor = SourceElementContext;

SourceElementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

SourceElementContext.prototype.functionDeclaration = function() {
    return this.getTypedRuleContext(FunctionDeclarationContext,0);
};

SourceElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterSourceElement(this);
	}
};

SourceElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitSourceElement(this);
	}
};

SourceElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitSourceElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.SourceElementContext = SourceElementContext;

ECMAScriptParser.prototype.sourceElement = function() {

    var localctx = new SourceElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ECMAScriptParser.RULE_sourceElement);
    try {
        this.state = 123;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 120;
            if (!( this._input.LA(1).type != ECMAScriptParser.Function)) {
                throw new antlr4.error.FailedPredicateException(this, "this._input.LA(1).type != ECMAScriptParser.Function");
            }
            this.state = 121;
            this.statement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 122;
            this.functionDeclaration();
            break;

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
};


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

StatementContext.prototype.variableStatement = function() {
    return this.getTypedRuleContext(VariableStatementContext,0);
};

StatementContext.prototype.emptyStatement = function() {
    return this.getTypedRuleContext(EmptyStatementContext,0);
};

StatementContext.prototype.expressionStatement = function() {
    return this.getTypedRuleContext(ExpressionStatementContext,0);
};

StatementContext.prototype.ifStatement = function() {
    return this.getTypedRuleContext(IfStatementContext,0);
};

StatementContext.prototype.iterationStatement = function() {
    return this.getTypedRuleContext(IterationStatementContext,0);
};

StatementContext.prototype.continueStatement = function() {
    return this.getTypedRuleContext(ContinueStatementContext,0);
};

StatementContext.prototype.breakStatement = function() {
    return this.getTypedRuleContext(BreakStatementContext,0);
};

StatementContext.prototype.returnStatement = function() {
    return this.getTypedRuleContext(ReturnStatementContext,0);
};

StatementContext.prototype.withStatement = function() {
    return this.getTypedRuleContext(WithStatementContext,0);
};

StatementContext.prototype.labelledStatement = function() {
    return this.getTypedRuleContext(LabelledStatementContext,0);
};

StatementContext.prototype.switchStatement = function() {
    return this.getTypedRuleContext(SwitchStatementContext,0);
};

StatementContext.prototype.throwStatement = function() {
    return this.getTypedRuleContext(ThrowStatementContext,0);
};

StatementContext.prototype.tryStatement = function() {
    return this.getTypedRuleContext(TryStatementContext,0);
};

StatementContext.prototype.debuggerStatement = function() {
    return this.getTypedRuleContext(DebuggerStatementContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.StatementContext = StatementContext;

ECMAScriptParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ECMAScriptParser.RULE_statement);
    try {
        this.state = 141;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 125;
            this.block();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 126;
            this.variableStatement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 127;
            this.emptyStatement();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 128;
            if (!( this._input.LA(1).type != ECMAScriptParser.OpenBrace)) {
                throw new antlr4.error.FailedPredicateException(this, "this._input.LA(1).type != ECMAScriptParser.OpenBrace");
            }
            this.state = 129;
            this.expressionStatement();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 130;
            this.ifStatement();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 131;
            this.iterationStatement();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 132;
            this.continueStatement();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 133;
            this.breakStatement();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 134;
            this.returnStatement();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 135;
            this.withStatement();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 136;
            this.labelledStatement();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 137;
            this.switchStatement();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 138;
            this.throwStatement();
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 139;
            this.tryStatement();
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 140;
            this.debuggerStatement();
            break;

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
};


function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.OpenBrace = function() {
    return this.getToken(ECMAScriptParser.OpenBrace, 0);
};

BlockContext.prototype.CloseBrace = function() {
    return this.getToken(ECMAScriptParser.CloseBrace, 0);
};

BlockContext.prototype.statementList = function() {
    return this.getTypedRuleContext(StatementListContext,0);
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitBlock(this);
	}
};

BlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.BlockContext = BlockContext;

ECMAScriptParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ECMAScriptParser.RULE_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.match(ECMAScriptParser.OpenBrace);
        this.state = 145;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        if(la_===1) {
            this.state = 144;
            this.statementList();

        }
        this.state = 147;
        this.match(ECMAScriptParser.CloseBrace);
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
};


function StatementListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_statementList;
    return this;
}

StatementListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementListContext.prototype.constructor = StatementListContext;

StatementListContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatementListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterStatementList(this);
	}
};

StatementListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitStatementList(this);
	}
};

StatementListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitStatementList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.StatementListContext = StatementListContext;

ECMAScriptParser.prototype.statementList = function() {

    var localctx = new StatementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ECMAScriptParser.RULE_statementList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 150; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 149;
        		this.statement();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 152; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
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
};


function VariableStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_variableStatement;
    return this;
}

VariableStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableStatementContext.prototype.constructor = VariableStatementContext;

VariableStatementContext.prototype.Var = function() {
    return this.getToken(ECMAScriptParser.Var, 0);
};

VariableStatementContext.prototype.variableDeclarationList = function() {
    return this.getTypedRuleContext(VariableDeclarationListContext,0);
};

VariableStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
};

VariableStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterVariableStatement(this);
	}
};

VariableStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitVariableStatement(this);
	}
};

VariableStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitVariableStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.VariableStatementContext = VariableStatementContext;

ECMAScriptParser.prototype.variableStatement = function() {

    var localctx = new VariableStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ECMAScriptParser.RULE_variableStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        this.match(ECMAScriptParser.Var);
        this.state = 155;
        this.variableDeclarationList();
        this.state = 156;
        this.eos();
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
};


function VariableDeclarationListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_variableDeclarationList;
    return this;
}

VariableDeclarationListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclarationListContext.prototype.constructor = VariableDeclarationListContext;

VariableDeclarationListContext.prototype.variableDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableDeclarationContext);
    } else {
        return this.getTypedRuleContext(VariableDeclarationContext,i);
    }
};

VariableDeclarationListContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptParser.Comma);
    } else {
        return this.getToken(ECMAScriptParser.Comma, i);
    }
};


VariableDeclarationListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterVariableDeclarationList(this);
	}
};

VariableDeclarationListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitVariableDeclarationList(this);
	}
};

VariableDeclarationListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitVariableDeclarationList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.VariableDeclarationListContext = VariableDeclarationListContext;

ECMAScriptParser.prototype.variableDeclarationList = function() {

    var localctx = new VariableDeclarationListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ECMAScriptParser.RULE_variableDeclarationList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
        this.variableDeclaration();
        this.state = 163;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 159;
                this.match(ECMAScriptParser.Comma);
                this.state = 160;
                this.variableDeclaration(); 
            }
            this.state = 165;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
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
};


function VariableDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_variableDeclaration;
    return this;
}

VariableDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclarationContext.prototype.constructor = VariableDeclarationContext;

VariableDeclarationContext.prototype.Identifier = function() {
    return this.getToken(ECMAScriptParser.Identifier, 0);
};

VariableDeclarationContext.prototype.initialiser = function() {
    return this.getTypedRuleContext(InitialiserContext,0);
};

VariableDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterVariableDeclaration(this);
	}
};

VariableDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitVariableDeclaration(this);
	}
};

VariableDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitVariableDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.VariableDeclarationContext = VariableDeclarationContext;

ECMAScriptParser.prototype.variableDeclaration = function() {

    var localctx = new VariableDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ECMAScriptParser.RULE_variableDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        this.match(ECMAScriptParser.Identifier);
        this.state = 168;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        if(la_===1) {
            this.state = 167;
            this.initialiser();

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
};


function InitialiserContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_initialiser;
    return this;
}

InitialiserContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InitialiserContext.prototype.constructor = InitialiserContext;

InitialiserContext.prototype.Assign = function() {
    return this.getToken(ECMAScriptParser.Assign, 0);
};

InitialiserContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

InitialiserContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterInitialiser(this);
	}
};

InitialiserContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitInitialiser(this);
	}
};

InitialiserContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitInitialiser(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.InitialiserContext = InitialiserContext;

ECMAScriptParser.prototype.initialiser = function() {

    var localctx = new InitialiserContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ECMAScriptParser.RULE_initialiser);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        this.match(ECMAScriptParser.Assign);
        this.state = 171;
        this.singleExpression(0);
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
};


function EmptyStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_emptyStatement;
    return this;
}

EmptyStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmptyStatementContext.prototype.constructor = EmptyStatementContext;

EmptyStatementContext.prototype.SemiColon = function() {
    return this.getToken(ECMAScriptParser.SemiColon, 0);
};

EmptyStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterEmptyStatement(this);
	}
};

EmptyStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitEmptyStatement(this);
	}
};

EmptyStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitEmptyStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.EmptyStatementContext = EmptyStatementContext;

ECMAScriptParser.prototype.emptyStatement = function() {

    var localctx = new EmptyStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ECMAScriptParser.RULE_emptyStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this.match(ECMAScriptParser.SemiColon);
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
};


function ExpressionStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_expressionStatement;
    return this;
}

ExpressionStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionStatementContext.prototype.constructor = ExpressionStatementContext;

ExpressionStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

ExpressionStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterExpressionStatement(this);
	}
};

ExpressionStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitExpressionStatement(this);
	}
};

ExpressionStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitExpressionStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.ExpressionStatementContext = ExpressionStatementContext;

ECMAScriptParser.prototype.expressionStatement = function() {

    var localctx = new ExpressionStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ECMAScriptParser.RULE_expressionStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 175;
        this.expressionSequence();
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
};


function IfStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_ifStatement;
    return this;
}

IfStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatementContext.prototype.constructor = IfStatementContext;

IfStatementContext.prototype.If = function() {
    return this.getToken(ECMAScriptParser.If, 0);
};

IfStatementContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptParser.OpenParen, 0);
};

IfStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

IfStatementContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptParser.CloseParen, 0);
};

IfStatementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

IfStatementContext.prototype.Else = function() {
    return this.getToken(ECMAScriptParser.Else, 0);
};

IfStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterIfStatement(this);
	}
};

IfStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitIfStatement(this);
	}
};

IfStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitIfStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.IfStatementContext = IfStatementContext;

ECMAScriptParser.prototype.ifStatement = function() {

    var localctx = new IfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ECMAScriptParser.RULE_ifStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177;
        this.match(ECMAScriptParser.If);
        this.state = 178;
        this.match(ECMAScriptParser.OpenParen);
        this.state = 179;
        this.expressionSequence();
        this.state = 180;
        this.match(ECMAScriptParser.CloseParen);
        this.state = 181;
        this.statement();
        this.state = 184;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        if(la_===1) {
            this.state = 182;
            this.match(ECMAScriptParser.Else);
            this.state = 183;
            this.statement();

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
};


function IterationStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_iterationStatement;
    return this;
}

IterationStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IterationStatementContext.prototype.constructor = IterationStatementContext;


 
IterationStatementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function DoStatementContext(parser, ctx) {
	IterationStatementContext.call(this, parser);
    IterationStatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DoStatementContext.prototype = Object.create(IterationStatementContext.prototype);
DoStatementContext.prototype.constructor = DoStatementContext;

ECMAScriptParser.DoStatementContext = DoStatementContext;

DoStatementContext.prototype.Do = function() {
    return this.getToken(ECMAScriptParser.Do, 0);
};

DoStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

DoStatementContext.prototype.While = function() {
    return this.getToken(ECMAScriptParser.While, 0);
};

DoStatementContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptParser.OpenParen, 0);
};

DoStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

DoStatementContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptParser.CloseParen, 0);
};

DoStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
};
DoStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterDoStatement(this);
	}
};

DoStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitDoStatement(this);
	}
};

DoStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitDoStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ForVarStatementContext(parser, ctx) {
	IterationStatementContext.call(this, parser);
    IterationStatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ForVarStatementContext.prototype = Object.create(IterationStatementContext.prototype);
ForVarStatementContext.prototype.constructor = ForVarStatementContext;

ECMAScriptParser.ForVarStatementContext = ForVarStatementContext;

ForVarStatementContext.prototype.For = function() {
    return this.getToken(ECMAScriptParser.For, 0);
};

ForVarStatementContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptParser.OpenParen, 0);
};

ForVarStatementContext.prototype.Var = function() {
    return this.getToken(ECMAScriptParser.Var, 0);
};

ForVarStatementContext.prototype.variableDeclarationList = function() {
    return this.getTypedRuleContext(VariableDeclarationListContext,0);
};

ForVarStatementContext.prototype.SemiColon = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptParser.SemiColon);
    } else {
        return this.getToken(ECMAScriptParser.SemiColon, i);
    }
};


ForVarStatementContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptParser.CloseParen, 0);
};

ForVarStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

ForVarStatementContext.prototype.expressionSequence = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionSequenceContext);
    } else {
        return this.getTypedRuleContext(ExpressionSequenceContext,i);
    }
};
ForVarStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterForVarStatement(this);
	}
};

ForVarStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitForVarStatement(this);
	}
};

ForVarStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitForVarStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ForVarInStatementContext(parser, ctx) {
	IterationStatementContext.call(this, parser);
    IterationStatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ForVarInStatementContext.prototype = Object.create(IterationStatementContext.prototype);
ForVarInStatementContext.prototype.constructor = ForVarInStatementContext;

ECMAScriptParser.ForVarInStatementContext = ForVarInStatementContext;

ForVarInStatementContext.prototype.For = function() {
    return this.getToken(ECMAScriptParser.For, 0);
};

ForVarInStatementContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptParser.OpenParen, 0);
};

ForVarInStatementContext.prototype.Var = function() {
    return this.getToken(ECMAScriptParser.Var, 0);
};

ForVarInStatementContext.prototype.variableDeclaration = function() {
    return this.getTypedRuleContext(VariableDeclarationContext,0);
};

ForVarInStatementContext.prototype.In = function() {
    return this.getToken(ECMAScriptParser.In, 0);
};

ForVarInStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

ForVarInStatementContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptParser.CloseParen, 0);
};

ForVarInStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};
ForVarInStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterForVarInStatement(this);
	}
};

ForVarInStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitForVarInStatement(this);
	}
};

ForVarInStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitForVarInStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function WhileStatementContext(parser, ctx) {
	IterationStatementContext.call(this, parser);
    IterationStatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

WhileStatementContext.prototype = Object.create(IterationStatementContext.prototype);
WhileStatementContext.prototype.constructor = WhileStatementContext;

ECMAScriptParser.WhileStatementContext = WhileStatementContext;

WhileStatementContext.prototype.While = function() {
    return this.getToken(ECMAScriptParser.While, 0);
};

WhileStatementContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptParser.OpenParen, 0);
};

WhileStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

WhileStatementContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptParser.CloseParen, 0);
};

WhileStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};
WhileStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterWhileStatement(this);
	}
};

WhileStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitWhileStatement(this);
	}
};

WhileStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitWhileStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ForStatementContext(parser, ctx) {
	IterationStatementContext.call(this, parser);
    IterationStatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ForStatementContext.prototype = Object.create(IterationStatementContext.prototype);
ForStatementContext.prototype.constructor = ForStatementContext;

ECMAScriptParser.ForStatementContext = ForStatementContext;

ForStatementContext.prototype.For = function() {
    return this.getToken(ECMAScriptParser.For, 0);
};

ForStatementContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptParser.OpenParen, 0);
};

ForStatementContext.prototype.SemiColon = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptParser.SemiColon);
    } else {
        return this.getToken(ECMAScriptParser.SemiColon, i);
    }
};


ForStatementContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptParser.CloseParen, 0);
};

ForStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

ForStatementContext.prototype.expressionSequence = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionSequenceContext);
    } else {
        return this.getTypedRuleContext(ExpressionSequenceContext,i);
    }
};
ForStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterForStatement(this);
	}
};

ForStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitForStatement(this);
	}
};

ForStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitForStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ForInStatementContext(parser, ctx) {
	IterationStatementContext.call(this, parser);
    IterationStatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ForInStatementContext.prototype = Object.create(IterationStatementContext.prototype);
ForInStatementContext.prototype.constructor = ForInStatementContext;

ECMAScriptParser.ForInStatementContext = ForInStatementContext;

ForInStatementContext.prototype.For = function() {
    return this.getToken(ECMAScriptParser.For, 0);
};

ForInStatementContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptParser.OpenParen, 0);
};

ForInStatementContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

ForInStatementContext.prototype.In = function() {
    return this.getToken(ECMAScriptParser.In, 0);
};

ForInStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

ForInStatementContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptParser.CloseParen, 0);
};

ForInStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};
ForInStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterForInStatement(this);
	}
};

ForInStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitForInStatement(this);
	}
};

ForInStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitForInStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ECMAScriptParser.IterationStatementContext = IterationStatementContext;

ECMAScriptParser.prototype.iterationStatement = function() {

    var localctx = new IterationStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ECMAScriptParser.RULE_iterationStatement);
    var _la = 0; // Token type
    try {
        this.state = 247;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            localctx = new DoStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 186;
            this.match(ECMAScriptParser.Do);
            this.state = 187;
            this.statement();
            this.state = 188;
            this.match(ECMAScriptParser.While);
            this.state = 189;
            this.match(ECMAScriptParser.OpenParen);
            this.state = 190;
            this.expressionSequence();
            this.state = 191;
            this.match(ECMAScriptParser.CloseParen);
            this.state = 192;
            this.eos();
            break;

        case 2:
            localctx = new WhileStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 194;
            this.match(ECMAScriptParser.While);
            this.state = 195;
            this.match(ECMAScriptParser.OpenParen);
            this.state = 196;
            this.expressionSequence();
            this.state = 197;
            this.match(ECMAScriptParser.CloseParen);
            this.state = 198;
            this.statement();
            break;

        case 3:
            localctx = new ForStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 200;
            this.match(ECMAScriptParser.For);
            this.state = 201;
            this.match(ECMAScriptParser.OpenParen);
            this.state = 203;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptParser.RegularExpressionLiteral) | (1 << ECMAScriptParser.OpenBracket) | (1 << ECMAScriptParser.OpenParen) | (1 << ECMAScriptParser.OpenBrace) | (1 << ECMAScriptParser.PlusPlus) | (1 << ECMAScriptParser.MinusMinus) | (1 << ECMAScriptParser.Plus) | (1 << ECMAScriptParser.Minus) | (1 << ECMAScriptParser.BitNot) | (1 << ECMAScriptParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptParser.NullLiteral - 51)) | (1 << (ECMAScriptParser.BooleanLiteral - 51)) | (1 << (ECMAScriptParser.DecimalLiteral - 51)) | (1 << (ECMAScriptParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptParser.Typeof - 51)) | (1 << (ECMAScriptParser.New - 51)) | (1 << (ECMAScriptParser.Void - 51)) | (1 << (ECMAScriptParser.Function - 51)) | (1 << (ECMAScriptParser.This - 51)) | (1 << (ECMAScriptParser.Delete - 51)))) !== 0) || _la===ECMAScriptParser.Identifier || _la===ECMAScriptParser.StringLiteral) {
                this.state = 202;
                this.expressionSequence();
            }

            this.state = 205;
            this.match(ECMAScriptParser.SemiColon);
            this.state = 207;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptParser.RegularExpressionLiteral) | (1 << ECMAScriptParser.OpenBracket) | (1 << ECMAScriptParser.OpenParen) | (1 << ECMAScriptParser.OpenBrace) | (1 << ECMAScriptParser.PlusPlus) | (1 << ECMAScriptParser.MinusMinus) | (1 << ECMAScriptParser.Plus) | (1 << ECMAScriptParser.Minus) | (1 << ECMAScriptParser.BitNot) | (1 << ECMAScriptParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptParser.NullLiteral - 51)) | (1 << (ECMAScriptParser.BooleanLiteral - 51)) | (1 << (ECMAScriptParser.DecimalLiteral - 51)) | (1 << (ECMAScriptParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptParser.Typeof - 51)) | (1 << (ECMAScriptParser.New - 51)) | (1 << (ECMAScriptParser.Void - 51)) | (1 << (ECMAScriptParser.Function - 51)) | (1 << (ECMAScriptParser.This - 51)) | (1 << (ECMAScriptParser.Delete - 51)))) !== 0) || _la===ECMAScriptParser.Identifier || _la===ECMAScriptParser.StringLiteral) {
                this.state = 206;
                this.expressionSequence();
            }

            this.state = 209;
            this.match(ECMAScriptParser.SemiColon);
            this.state = 211;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptParser.RegularExpressionLiteral) | (1 << ECMAScriptParser.OpenBracket) | (1 << ECMAScriptParser.OpenParen) | (1 << ECMAScriptParser.OpenBrace) | (1 << ECMAScriptParser.PlusPlus) | (1 << ECMAScriptParser.MinusMinus) | (1 << ECMAScriptParser.Plus) | (1 << ECMAScriptParser.Minus) | (1 << ECMAScriptParser.BitNot) | (1 << ECMAScriptParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptParser.NullLiteral - 51)) | (1 << (ECMAScriptParser.BooleanLiteral - 51)) | (1 << (ECMAScriptParser.DecimalLiteral - 51)) | (1 << (ECMAScriptParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptParser.Typeof - 51)) | (1 << (ECMAScriptParser.New - 51)) | (1 << (ECMAScriptParser.Void - 51)) | (1 << (ECMAScriptParser.Function - 51)) | (1 << (ECMAScriptParser.This - 51)) | (1 << (ECMAScriptParser.Delete - 51)))) !== 0) || _la===ECMAScriptParser.Identifier || _la===ECMAScriptParser.StringLiteral) {
                this.state = 210;
                this.expressionSequence();
            }

            this.state = 213;
            this.match(ECMAScriptParser.CloseParen);
            this.state = 214;
            this.statement();
            break;

        case 4:
            localctx = new ForVarStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 215;
            this.match(ECMAScriptParser.For);
            this.state = 216;
            this.match(ECMAScriptParser.OpenParen);
            this.state = 217;
            this.match(ECMAScriptParser.Var);
            this.state = 218;
            this.variableDeclarationList();
            this.state = 219;
            this.match(ECMAScriptParser.SemiColon);
            this.state = 221;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptParser.RegularExpressionLiteral) | (1 << ECMAScriptParser.OpenBracket) | (1 << ECMAScriptParser.OpenParen) | (1 << ECMAScriptParser.OpenBrace) | (1 << ECMAScriptParser.PlusPlus) | (1 << ECMAScriptParser.MinusMinus) | (1 << ECMAScriptParser.Plus) | (1 << ECMAScriptParser.Minus) | (1 << ECMAScriptParser.BitNot) | (1 << ECMAScriptParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptParser.NullLiteral - 51)) | (1 << (ECMAScriptParser.BooleanLiteral - 51)) | (1 << (ECMAScriptParser.DecimalLiteral - 51)) | (1 << (ECMAScriptParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptParser.Typeof - 51)) | (1 << (ECMAScriptParser.New - 51)) | (1 << (ECMAScriptParser.Void - 51)) | (1 << (ECMAScriptParser.Function - 51)) | (1 << (ECMAScriptParser.This - 51)) | (1 << (ECMAScriptParser.Delete - 51)))) !== 0) || _la===ECMAScriptParser.Identifier || _la===ECMAScriptParser.StringLiteral) {
                this.state = 220;
                this.expressionSequence();
            }

            this.state = 223;
            this.match(ECMAScriptParser.SemiColon);
            this.state = 225;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptParser.RegularExpressionLiteral) | (1 << ECMAScriptParser.OpenBracket) | (1 << ECMAScriptParser.OpenParen) | (1 << ECMAScriptParser.OpenBrace) | (1 << ECMAScriptParser.PlusPlus) | (1 << ECMAScriptParser.MinusMinus) | (1 << ECMAScriptParser.Plus) | (1 << ECMAScriptParser.Minus) | (1 << ECMAScriptParser.BitNot) | (1 << ECMAScriptParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptParser.NullLiteral - 51)) | (1 << (ECMAScriptParser.BooleanLiteral - 51)) | (1 << (ECMAScriptParser.DecimalLiteral - 51)) | (1 << (ECMAScriptParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptParser.Typeof - 51)) | (1 << (ECMAScriptParser.New - 51)) | (1 << (ECMAScriptParser.Void - 51)) | (1 << (ECMAScriptParser.Function - 51)) | (1 << (ECMAScriptParser.This - 51)) | (1 << (ECMAScriptParser.Delete - 51)))) !== 0) || _la===ECMAScriptParser.Identifier || _la===ECMAScriptParser.StringLiteral) {
                this.state = 224;
                this.expressionSequence();
            }

            this.state = 227;
            this.match(ECMAScriptParser.CloseParen);
            this.state = 228;
            this.statement();
            break;

        case 5:
            localctx = new ForInStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 230;
            this.match(ECMAScriptParser.For);
            this.state = 231;
            this.match(ECMAScriptParser.OpenParen);
            this.state = 232;
            this.singleExpression(0);
            this.state = 233;
            this.match(ECMAScriptParser.In);
            this.state = 234;
            this.expressionSequence();
            this.state = 235;
            this.match(ECMAScriptParser.CloseParen);
            this.state = 236;
            this.statement();
            break;

        case 6:
            localctx = new ForVarInStatementContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 238;
            this.match(ECMAScriptParser.For);
            this.state = 239;
            this.match(ECMAScriptParser.OpenParen);
            this.state = 240;
            this.match(ECMAScriptParser.Var);
            this.state = 241;
            this.variableDeclaration();
            this.state = 242;
            this.match(ECMAScriptParser.In);
            this.state = 243;
            this.expressionSequence();
            this.state = 244;
            this.match(ECMAScriptParser.CloseParen);
            this.state = 245;
            this.statement();
            break;

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
};


function ContinueStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_continueStatement;
    return this;
}

ContinueStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContinueStatementContext.prototype.constructor = ContinueStatementContext;

ContinueStatementContext.prototype.Continue = function() {
    return this.getToken(ECMAScriptParser.Continue, 0);
};

ContinueStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
};

ContinueStatementContext.prototype.Identifier = function() {
    return this.getToken(ECMAScriptParser.Identifier, 0);
};

ContinueStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterContinueStatement(this);
	}
};

ContinueStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitContinueStatement(this);
	}
};

ContinueStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitContinueStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.ContinueStatementContext = ContinueStatementContext;

ECMAScriptParser.prototype.continueStatement = function() {

    var localctx = new ContinueStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, ECMAScriptParser.RULE_continueStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
        this.match(ECMAScriptParser.Continue);
        this.state = 252;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        if(la_===1) {
            this.state = 250;
            if (!( !this.here(ECMAScriptParser.LineTerminator))) {
                throw new antlr4.error.FailedPredicateException(this, "!this.here(ECMAScriptParser.LineTerminator)");
            }
            this.state = 251;
            this.match(ECMAScriptParser.Identifier);

        }
        this.state = 254;
        this.eos();
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
};


function BreakStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_breakStatement;
    return this;
}

BreakStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BreakStatementContext.prototype.constructor = BreakStatementContext;

BreakStatementContext.prototype.Break = function() {
    return this.getToken(ECMAScriptParser.Break, 0);
};

BreakStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
};

BreakStatementContext.prototype.Identifier = function() {
    return this.getToken(ECMAScriptParser.Identifier, 0);
};

BreakStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterBreakStatement(this);
	}
};

BreakStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitBreakStatement(this);
	}
};

BreakStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitBreakStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.BreakStatementContext = BreakStatementContext;

ECMAScriptParser.prototype.breakStatement = function() {

    var localctx = new BreakStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, ECMAScriptParser.RULE_breakStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 256;
        this.match(ECMAScriptParser.Break);
        this.state = 259;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        if(la_===1) {
            this.state = 257;
            if (!( !this.here(ECMAScriptParser.LineTerminator))) {
                throw new antlr4.error.FailedPredicateException(this, "!this.here(ECMAScriptParser.LineTerminator)");
            }
            this.state = 258;
            this.match(ECMAScriptParser.Identifier);

        }
        this.state = 261;
        this.eos();
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
};


function ReturnStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_returnStatement;
    return this;
}

ReturnStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnStatementContext.prototype.constructor = ReturnStatementContext;

ReturnStatementContext.prototype.Return = function() {
    return this.getToken(ECMAScriptParser.Return, 0);
};

ReturnStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
};

ReturnStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

ReturnStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterReturnStatement(this);
	}
};

ReturnStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitReturnStatement(this);
	}
};

ReturnStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitReturnStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.ReturnStatementContext = ReturnStatementContext;

ECMAScriptParser.prototype.returnStatement = function() {

    var localctx = new ReturnStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, ECMAScriptParser.RULE_returnStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
        this.match(ECMAScriptParser.Return);
        this.state = 266;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        if(la_===1) {
            this.state = 264;
            if (!( !this.here(ECMAScriptParser.LineTerminator))) {
                throw new antlr4.error.FailedPredicateException(this, "!this.here(ECMAScriptParser.LineTerminator)");
            }
            this.state = 265;
            this.expressionSequence();

        }
        this.state = 268;
        this.eos();
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
};


function WithStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_withStatement;
    return this;
}

WithStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WithStatementContext.prototype.constructor = WithStatementContext;

WithStatementContext.prototype.With = function() {
    return this.getToken(ECMAScriptParser.With, 0);
};

WithStatementContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptParser.OpenParen, 0);
};

WithStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

WithStatementContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptParser.CloseParen, 0);
};

WithStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

WithStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterWithStatement(this);
	}
};

WithStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitWithStatement(this);
	}
};

WithStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitWithStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.WithStatementContext = WithStatementContext;

ECMAScriptParser.prototype.withStatement = function() {

    var localctx = new WithStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, ECMAScriptParser.RULE_withStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 270;
        this.match(ECMAScriptParser.With);
        this.state = 271;
        this.match(ECMAScriptParser.OpenParen);
        this.state = 272;
        this.expressionSequence();
        this.state = 273;
        this.match(ECMAScriptParser.CloseParen);
        this.state = 274;
        this.statement();
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
};


function SwitchStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_switchStatement;
    return this;
}

SwitchStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SwitchStatementContext.prototype.constructor = SwitchStatementContext;

SwitchStatementContext.prototype.Switch = function() {
    return this.getToken(ECMAScriptParser.Switch, 0);
};

SwitchStatementContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptParser.OpenParen, 0);
};

SwitchStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

SwitchStatementContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptParser.CloseParen, 0);
};

SwitchStatementContext.prototype.caseBlock = function() {
    return this.getTypedRuleContext(CaseBlockContext,0);
};

SwitchStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterSwitchStatement(this);
	}
};

SwitchStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitSwitchStatement(this);
	}
};

SwitchStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitSwitchStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.SwitchStatementContext = SwitchStatementContext;

ECMAScriptParser.prototype.switchStatement = function() {

    var localctx = new SwitchStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, ECMAScriptParser.RULE_switchStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 276;
        this.match(ECMAScriptParser.Switch);
        this.state = 277;
        this.match(ECMAScriptParser.OpenParen);
        this.state = 278;
        this.expressionSequence();
        this.state = 279;
        this.match(ECMAScriptParser.CloseParen);
        this.state = 280;
        this.caseBlock();
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
};


function CaseBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_caseBlock;
    return this;
}

CaseBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CaseBlockContext.prototype.constructor = CaseBlockContext;

CaseBlockContext.prototype.OpenBrace = function() {
    return this.getToken(ECMAScriptParser.OpenBrace, 0);
};

CaseBlockContext.prototype.CloseBrace = function() {
    return this.getToken(ECMAScriptParser.CloseBrace, 0);
};

CaseBlockContext.prototype.caseClauses = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CaseClausesContext);
    } else {
        return this.getTypedRuleContext(CaseClausesContext,i);
    }
};

CaseBlockContext.prototype.defaultClause = function() {
    return this.getTypedRuleContext(DefaultClauseContext,0);
};

CaseBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterCaseBlock(this);
	}
};

CaseBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitCaseBlock(this);
	}
};

CaseBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitCaseBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.CaseBlockContext = CaseBlockContext;

ECMAScriptParser.prototype.caseBlock = function() {

    var localctx = new CaseBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, ECMAScriptParser.RULE_caseBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 282;
        this.match(ECMAScriptParser.OpenBrace);
        this.state = 284;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptParser.Case) {
            this.state = 283;
            this.caseClauses();
        }

        this.state = 290;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptParser.Default) {
            this.state = 286;
            this.defaultClause();
            this.state = 288;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptParser.Case) {
                this.state = 287;
                this.caseClauses();
            }

        }

        this.state = 292;
        this.match(ECMAScriptParser.CloseBrace);
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
};


function CaseClausesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_caseClauses;
    return this;
}

CaseClausesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CaseClausesContext.prototype.constructor = CaseClausesContext;

CaseClausesContext.prototype.caseClause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CaseClauseContext);
    } else {
        return this.getTypedRuleContext(CaseClauseContext,i);
    }
};

CaseClausesContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterCaseClauses(this);
	}
};

CaseClausesContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitCaseClauses(this);
	}
};

CaseClausesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitCaseClauses(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.CaseClausesContext = CaseClausesContext;

ECMAScriptParser.prototype.caseClauses = function() {

    var localctx = new CaseClausesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, ECMAScriptParser.RULE_caseClauses);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 295; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 294;
            this.caseClause();
            this.state = 297; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ECMAScriptParser.Case);
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
};


function CaseClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_caseClause;
    return this;
}

CaseClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CaseClauseContext.prototype.constructor = CaseClauseContext;

CaseClauseContext.prototype.Case = function() {
    return this.getToken(ECMAScriptParser.Case, 0);
};

CaseClauseContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

CaseClauseContext.prototype.Colon = function() {
    return this.getToken(ECMAScriptParser.Colon, 0);
};

CaseClauseContext.prototype.statementList = function() {
    return this.getTypedRuleContext(StatementListContext,0);
};

CaseClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterCaseClause(this);
	}
};

CaseClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitCaseClause(this);
	}
};

CaseClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitCaseClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.CaseClauseContext = CaseClauseContext;

ECMAScriptParser.prototype.caseClause = function() {

    var localctx = new CaseClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, ECMAScriptParser.RULE_caseClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 299;
        this.match(ECMAScriptParser.Case);
        this.state = 300;
        this.expressionSequence();
        this.state = 301;
        this.match(ECMAScriptParser.Colon);
        this.state = 303;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        if(la_===1) {
            this.state = 302;
            this.statementList();

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
};


function DefaultClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_defaultClause;
    return this;
}

DefaultClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefaultClauseContext.prototype.constructor = DefaultClauseContext;

DefaultClauseContext.prototype.Default = function() {
    return this.getToken(ECMAScriptParser.Default, 0);
};

DefaultClauseContext.prototype.Colon = function() {
    return this.getToken(ECMAScriptParser.Colon, 0);
};

DefaultClauseContext.prototype.statementList = function() {
    return this.getTypedRuleContext(StatementListContext,0);
};

DefaultClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterDefaultClause(this);
	}
};

DefaultClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitDefaultClause(this);
	}
};

DefaultClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitDefaultClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.DefaultClauseContext = DefaultClauseContext;

ECMAScriptParser.prototype.defaultClause = function() {

    var localctx = new DefaultClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, ECMAScriptParser.RULE_defaultClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 305;
        this.match(ECMAScriptParser.Default);
        this.state = 306;
        this.match(ECMAScriptParser.Colon);
        this.state = 308;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        if(la_===1) {
            this.state = 307;
            this.statementList();

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
};


function LabelledStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_labelledStatement;
    return this;
}

LabelledStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelledStatementContext.prototype.constructor = LabelledStatementContext;

LabelledStatementContext.prototype.Identifier = function() {
    return this.getToken(ECMAScriptParser.Identifier, 0);
};

LabelledStatementContext.prototype.Colon = function() {
    return this.getToken(ECMAScriptParser.Colon, 0);
};

LabelledStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

LabelledStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterLabelledStatement(this);
	}
};

LabelledStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitLabelledStatement(this);
	}
};

LabelledStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitLabelledStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.LabelledStatementContext = LabelledStatementContext;

ECMAScriptParser.prototype.labelledStatement = function() {

    var localctx = new LabelledStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, ECMAScriptParser.RULE_labelledStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 310;
        this.match(ECMAScriptParser.Identifier);
        this.state = 311;
        this.match(ECMAScriptParser.Colon);
        this.state = 312;
        this.statement();
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
};


function ThrowStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_throwStatement;
    return this;
}

ThrowStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ThrowStatementContext.prototype.constructor = ThrowStatementContext;

ThrowStatementContext.prototype.Throw = function() {
    return this.getToken(ECMAScriptParser.Throw, 0);
};

ThrowStatementContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

ThrowStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
};

ThrowStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterThrowStatement(this);
	}
};

ThrowStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitThrowStatement(this);
	}
};

ThrowStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitThrowStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.ThrowStatementContext = ThrowStatementContext;

ECMAScriptParser.prototype.throwStatement = function() {

    var localctx = new ThrowStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, ECMAScriptParser.RULE_throwStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 314;
        this.match(ECMAScriptParser.Throw);
        this.state = 315;
        if (!( !this.here(ECMAScriptParser.LineTerminator))) {
            throw new antlr4.error.FailedPredicateException(this, "!this.here(ECMAScriptParser.LineTerminator)");
        }
        this.state = 316;
        this.expressionSequence();
        this.state = 317;
        this.eos();
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
};


function TryStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_tryStatement;
    return this;
}

TryStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TryStatementContext.prototype.constructor = TryStatementContext;

TryStatementContext.prototype.Try = function() {
    return this.getToken(ECMAScriptParser.Try, 0);
};

TryStatementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

TryStatementContext.prototype.catchProduction = function() {
    return this.getTypedRuleContext(CatchProductionContext,0);
};

TryStatementContext.prototype.finallyProduction = function() {
    return this.getTypedRuleContext(FinallyProductionContext,0);
};

TryStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterTryStatement(this);
	}
};

TryStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitTryStatement(this);
	}
};

TryStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitTryStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.TryStatementContext = TryStatementContext;

ECMAScriptParser.prototype.tryStatement = function() {

    var localctx = new TryStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, ECMAScriptParser.RULE_tryStatement);
    try {
        this.state = 332;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 319;
            this.match(ECMAScriptParser.Try);
            this.state = 320;
            this.block();
            this.state = 321;
            this.catchProduction();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 323;
            this.match(ECMAScriptParser.Try);
            this.state = 324;
            this.block();
            this.state = 325;
            this.finallyProduction();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 327;
            this.match(ECMAScriptParser.Try);
            this.state = 328;
            this.block();
            this.state = 329;
            this.catchProduction();
            this.state = 330;
            this.finallyProduction();
            break;

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
};


function CatchProductionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_catchProduction;
    return this;
}

CatchProductionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CatchProductionContext.prototype.constructor = CatchProductionContext;

CatchProductionContext.prototype.Catch = function() {
    return this.getToken(ECMAScriptParser.Catch, 0);
};

CatchProductionContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptParser.OpenParen, 0);
};

CatchProductionContext.prototype.Identifier = function() {
    return this.getToken(ECMAScriptParser.Identifier, 0);
};

CatchProductionContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptParser.CloseParen, 0);
};

CatchProductionContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

CatchProductionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterCatchProduction(this);
	}
};

CatchProductionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitCatchProduction(this);
	}
};

CatchProductionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitCatchProduction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.CatchProductionContext = CatchProductionContext;

ECMAScriptParser.prototype.catchProduction = function() {

    var localctx = new CatchProductionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, ECMAScriptParser.RULE_catchProduction);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 334;
        this.match(ECMAScriptParser.Catch);
        this.state = 335;
        this.match(ECMAScriptParser.OpenParen);
        this.state = 336;
        this.match(ECMAScriptParser.Identifier);
        this.state = 337;
        this.match(ECMAScriptParser.CloseParen);
        this.state = 338;
        this.block();
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
};


function FinallyProductionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_finallyProduction;
    return this;
}

FinallyProductionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FinallyProductionContext.prototype.constructor = FinallyProductionContext;

FinallyProductionContext.prototype.Finally = function() {
    return this.getToken(ECMAScriptParser.Finally, 0);
};

FinallyProductionContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

FinallyProductionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterFinallyProduction(this);
	}
};

FinallyProductionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitFinallyProduction(this);
	}
};

FinallyProductionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitFinallyProduction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.FinallyProductionContext = FinallyProductionContext;

ECMAScriptParser.prototype.finallyProduction = function() {

    var localctx = new FinallyProductionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, ECMAScriptParser.RULE_finallyProduction);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 340;
        this.match(ECMAScriptParser.Finally);
        this.state = 341;
        this.block();
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
};


function DebuggerStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_debuggerStatement;
    return this;
}

DebuggerStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DebuggerStatementContext.prototype.constructor = DebuggerStatementContext;

DebuggerStatementContext.prototype.Debugger = function() {
    return this.getToken(ECMAScriptParser.Debugger, 0);
};

DebuggerStatementContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
};

DebuggerStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterDebuggerStatement(this);
	}
};

DebuggerStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitDebuggerStatement(this);
	}
};

DebuggerStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitDebuggerStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.DebuggerStatementContext = DebuggerStatementContext;

ECMAScriptParser.prototype.debuggerStatement = function() {

    var localctx = new DebuggerStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, ECMAScriptParser.RULE_debuggerStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 343;
        this.match(ECMAScriptParser.Debugger);
        this.state = 344;
        this.eos();
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
};


function FunctionDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_functionDeclaration;
    return this;
}

FunctionDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDeclarationContext.prototype.constructor = FunctionDeclarationContext;

FunctionDeclarationContext.prototype.Function = function() {
    return this.getToken(ECMAScriptParser.Function, 0);
};

FunctionDeclarationContext.prototype.Identifier = function() {
    return this.getToken(ECMAScriptParser.Identifier, 0);
};

FunctionDeclarationContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptParser.OpenParen, 0);
};

FunctionDeclarationContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptParser.CloseParen, 0);
};

FunctionDeclarationContext.prototype.OpenBrace = function() {
    return this.getToken(ECMAScriptParser.OpenBrace, 0);
};

FunctionDeclarationContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

FunctionDeclarationContext.prototype.CloseBrace = function() {
    return this.getToken(ECMAScriptParser.CloseBrace, 0);
};

FunctionDeclarationContext.prototype.formalParameterList = function() {
    return this.getTypedRuleContext(FormalParameterListContext,0);
};

FunctionDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterFunctionDeclaration(this);
	}
};

FunctionDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitFunctionDeclaration(this);
	}
};

FunctionDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitFunctionDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.FunctionDeclarationContext = FunctionDeclarationContext;

ECMAScriptParser.prototype.functionDeclaration = function() {

    var localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, ECMAScriptParser.RULE_functionDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 346;
        this.match(ECMAScriptParser.Function);
        this.state = 347;
        this.match(ECMAScriptParser.Identifier);
        this.state = 348;
        this.match(ECMAScriptParser.OpenParen);
        this.state = 350;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptParser.Identifier) {
            this.state = 349;
            this.formalParameterList();
        }

        this.state = 352;
        this.match(ECMAScriptParser.CloseParen);
        this.state = 353;
        this.match(ECMAScriptParser.OpenBrace);
        this.state = 354;
        this.functionBody();
        this.state = 355;
        this.match(ECMAScriptParser.CloseBrace);
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
};


function FormalParameterListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_formalParameterList;
    return this;
}

FormalParameterListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParameterListContext.prototype.constructor = FormalParameterListContext;

FormalParameterListContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptParser.Identifier);
    } else {
        return this.getToken(ECMAScriptParser.Identifier, i);
    }
};


FormalParameterListContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptParser.Comma);
    } else {
        return this.getToken(ECMAScriptParser.Comma, i);
    }
};


FormalParameterListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterFormalParameterList(this);
	}
};

FormalParameterListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitFormalParameterList(this);
	}
};

FormalParameterListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitFormalParameterList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.FormalParameterListContext = FormalParameterListContext;

ECMAScriptParser.prototype.formalParameterList = function() {

    var localctx = new FormalParameterListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, ECMAScriptParser.RULE_formalParameterList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 357;
        this.match(ECMAScriptParser.Identifier);
        this.state = 362;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ECMAScriptParser.Comma) {
            this.state = 358;
            this.match(ECMAScriptParser.Comma);
            this.state = 359;
            this.match(ECMAScriptParser.Identifier);
            this.state = 364;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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
};


function FunctionBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_functionBody;
    return this;
}

FunctionBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionBodyContext.prototype.constructor = FunctionBodyContext;

FunctionBodyContext.prototype.sourceElements = function() {
    return this.getTypedRuleContext(SourceElementsContext,0);
};

FunctionBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterFunctionBody(this);
	}
};

FunctionBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitFunctionBody(this);
	}
};

FunctionBodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitFunctionBody(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.FunctionBodyContext = FunctionBodyContext;

ECMAScriptParser.prototype.functionBody = function() {

    var localctx = new FunctionBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, ECMAScriptParser.RULE_functionBody);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 366;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        if(la_===1) {
            this.state = 365;
            this.sourceElements();

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
};


function ArrayLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_arrayLiteral;
    return this;
}

ArrayLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayLiteralContext.prototype.constructor = ArrayLiteralContext;

ArrayLiteralContext.prototype.OpenBracket = function() {
    return this.getToken(ECMAScriptParser.OpenBracket, 0);
};

ArrayLiteralContext.prototype.CloseBracket = function() {
    return this.getToken(ECMAScriptParser.CloseBracket, 0);
};

ArrayLiteralContext.prototype.elementList = function() {
    return this.getTypedRuleContext(ElementListContext,0);
};

ArrayLiteralContext.prototype.Comma = function() {
    return this.getToken(ECMAScriptParser.Comma, 0);
};

ArrayLiteralContext.prototype.elision = function() {
    return this.getTypedRuleContext(ElisionContext,0);
};

ArrayLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterArrayLiteral(this);
	}
};

ArrayLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitArrayLiteral(this);
	}
};

ArrayLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitArrayLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.ArrayLiteralContext = ArrayLiteralContext;

ECMAScriptParser.prototype.arrayLiteral = function() {

    var localctx = new ArrayLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, ECMAScriptParser.RULE_arrayLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 368;
        this.match(ECMAScriptParser.OpenBracket);
        this.state = 370;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        if(la_===1) {
            this.state = 369;
            this.elementList();

        }
        this.state = 373;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        if(la_===1) {
            this.state = 372;
            this.match(ECMAScriptParser.Comma);

        }
        this.state = 376;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptParser.Comma) {
            this.state = 375;
            this.elision();
        }

        this.state = 378;
        this.match(ECMAScriptParser.CloseBracket);
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
};


function ElementListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_elementList;
    return this;
}

ElementListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementListContext.prototype.constructor = ElementListContext;

ElementListContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

ElementListContext.prototype.elision = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElisionContext);
    } else {
        return this.getTypedRuleContext(ElisionContext,i);
    }
};

ElementListContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptParser.Comma);
    } else {
        return this.getToken(ECMAScriptParser.Comma, i);
    }
};


ElementListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterElementList(this);
	}
};

ElementListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitElementList(this);
	}
};

ElementListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitElementList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.ElementListContext = ElementListContext;

ECMAScriptParser.prototype.elementList = function() {

    var localctx = new ElementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, ECMAScriptParser.RULE_elementList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 381;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ECMAScriptParser.Comma) {
            this.state = 380;
            this.elision();
        }

        this.state = 383;
        this.singleExpression(0);
        this.state = 391;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,33,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 384;
                this.match(ECMAScriptParser.Comma);
                this.state = 386;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===ECMAScriptParser.Comma) {
                    this.state = 385;
                    this.elision();
                }

                this.state = 388;
                this.singleExpression(0); 
            }
            this.state = 393;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
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
};


function ElisionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_elision;
    return this;
}

ElisionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElisionContext.prototype.constructor = ElisionContext;

ElisionContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptParser.Comma);
    } else {
        return this.getToken(ECMAScriptParser.Comma, i);
    }
};


ElisionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterElision(this);
	}
};

ElisionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitElision(this);
	}
};

ElisionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitElision(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.ElisionContext = ElisionContext;

ECMAScriptParser.prototype.elision = function() {

    var localctx = new ElisionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, ECMAScriptParser.RULE_elision);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 395; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 394;
            this.match(ECMAScriptParser.Comma);
            this.state = 397; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ECMAScriptParser.Comma);
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
};


function ObjectLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_objectLiteral;
    return this;
}

ObjectLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectLiteralContext.prototype.constructor = ObjectLiteralContext;

ObjectLiteralContext.prototype.OpenBrace = function() {
    return this.getToken(ECMAScriptParser.OpenBrace, 0);
};

ObjectLiteralContext.prototype.CloseBrace = function() {
    return this.getToken(ECMAScriptParser.CloseBrace, 0);
};

ObjectLiteralContext.prototype.propertyNameAndValueList = function() {
    return this.getTypedRuleContext(PropertyNameAndValueListContext,0);
};

ObjectLiteralContext.prototype.Comma = function() {
    return this.getToken(ECMAScriptParser.Comma, 0);
};

ObjectLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterObjectLiteral(this);
	}
};

ObjectLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitObjectLiteral(this);
	}
};

ObjectLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitObjectLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.ObjectLiteralContext = ObjectLiteralContext;

ECMAScriptParser.prototype.objectLiteral = function() {

    var localctx = new ObjectLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, ECMAScriptParser.RULE_objectLiteral);
    var _la = 0; // Token type
    try {
        this.state = 408;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 399;
            this.match(ECMAScriptParser.OpenBrace);
            this.state = 400;
            this.match(ECMAScriptParser.CloseBrace);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 401;
            this.match(ECMAScriptParser.OpenBrace);
            this.state = 402;
            this.propertyNameAndValueList();
            this.state = 404;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptParser.Comma) {
                this.state = 403;
                this.match(ECMAScriptParser.Comma);
            }

            this.state = 406;
            this.match(ECMAScriptParser.CloseBrace);
            break;

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
};


function PropertyNameAndValueListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_propertyNameAndValueList;
    return this;
}

PropertyNameAndValueListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyNameAndValueListContext.prototype.constructor = PropertyNameAndValueListContext;

PropertyNameAndValueListContext.prototype.propertyAssignment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PropertyAssignmentContext);
    } else {
        return this.getTypedRuleContext(PropertyAssignmentContext,i);
    }
};

PropertyNameAndValueListContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptParser.Comma);
    } else {
        return this.getToken(ECMAScriptParser.Comma, i);
    }
};


PropertyNameAndValueListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterPropertyNameAndValueList(this);
	}
};

PropertyNameAndValueListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitPropertyNameAndValueList(this);
	}
};

PropertyNameAndValueListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitPropertyNameAndValueList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.PropertyNameAndValueListContext = PropertyNameAndValueListContext;

ECMAScriptParser.prototype.propertyNameAndValueList = function() {

    var localctx = new PropertyNameAndValueListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, ECMAScriptParser.RULE_propertyNameAndValueList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 410;
        this.propertyAssignment();
        this.state = 415;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,37,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 411;
                this.match(ECMAScriptParser.Comma);
                this.state = 412;
                this.propertyAssignment(); 
            }
            this.state = 417;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,37,this._ctx);
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
};


function PropertyAssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_propertyAssignment;
    return this;
}

PropertyAssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyAssignmentContext.prototype.constructor = PropertyAssignmentContext;


 
PropertyAssignmentContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function PropertyExpressionAssignmentContext(parser, ctx) {
	PropertyAssignmentContext.call(this, parser);
    PropertyAssignmentContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PropertyExpressionAssignmentContext.prototype = Object.create(PropertyAssignmentContext.prototype);
PropertyExpressionAssignmentContext.prototype.constructor = PropertyExpressionAssignmentContext;

ECMAScriptParser.PropertyExpressionAssignmentContext = PropertyExpressionAssignmentContext;

PropertyExpressionAssignmentContext.prototype.propertyName = function() {
    return this.getTypedRuleContext(PropertyNameContext,0);
};

PropertyExpressionAssignmentContext.prototype.Colon = function() {
    return this.getToken(ECMAScriptParser.Colon, 0);
};

PropertyExpressionAssignmentContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
PropertyExpressionAssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterPropertyExpressionAssignment(this);
	}
};

PropertyExpressionAssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitPropertyExpressionAssignment(this);
	}
};

PropertyExpressionAssignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitPropertyExpressionAssignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PropertySetterContext(parser, ctx) {
	PropertyAssignmentContext.call(this, parser);
    PropertyAssignmentContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PropertySetterContext.prototype = Object.create(PropertyAssignmentContext.prototype);
PropertySetterContext.prototype.constructor = PropertySetterContext;

ECMAScriptParser.PropertySetterContext = PropertySetterContext;

PropertySetterContext.prototype.setter = function() {
    return this.getTypedRuleContext(SetterContext,0);
};

PropertySetterContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptParser.OpenParen, 0);
};

PropertySetterContext.prototype.propertySetParameterList = function() {
    return this.getTypedRuleContext(PropertySetParameterListContext,0);
};

PropertySetterContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptParser.CloseParen, 0);
};

PropertySetterContext.prototype.OpenBrace = function() {
    return this.getToken(ECMAScriptParser.OpenBrace, 0);
};

PropertySetterContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

PropertySetterContext.prototype.CloseBrace = function() {
    return this.getToken(ECMAScriptParser.CloseBrace, 0);
};
PropertySetterContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterPropertySetter(this);
	}
};

PropertySetterContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitPropertySetter(this);
	}
};

PropertySetterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitPropertySetter(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PropertyGetterContext(parser, ctx) {
	PropertyAssignmentContext.call(this, parser);
    PropertyAssignmentContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PropertyGetterContext.prototype = Object.create(PropertyAssignmentContext.prototype);
PropertyGetterContext.prototype.constructor = PropertyGetterContext;

ECMAScriptParser.PropertyGetterContext = PropertyGetterContext;

PropertyGetterContext.prototype.getter = function() {
    return this.getTypedRuleContext(GetterContext,0);
};

PropertyGetterContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptParser.OpenParen, 0);
};

PropertyGetterContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptParser.CloseParen, 0);
};

PropertyGetterContext.prototype.OpenBrace = function() {
    return this.getToken(ECMAScriptParser.OpenBrace, 0);
};

PropertyGetterContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

PropertyGetterContext.prototype.CloseBrace = function() {
    return this.getToken(ECMAScriptParser.CloseBrace, 0);
};
PropertyGetterContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterPropertyGetter(this);
	}
};

PropertyGetterContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitPropertyGetter(this);
	}
};

PropertyGetterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitPropertyGetter(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ECMAScriptParser.PropertyAssignmentContext = PropertyAssignmentContext;

ECMAScriptParser.prototype.propertyAssignment = function() {

    var localctx = new PropertyAssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, ECMAScriptParser.RULE_propertyAssignment);
    try {
        this.state = 437;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
        switch(la_) {
        case 1:
            localctx = new PropertyExpressionAssignmentContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 418;
            this.propertyName();
            this.state = 419;
            this.match(ECMAScriptParser.Colon);
            this.state = 420;
            this.singleExpression(0);
            break;

        case 2:
            localctx = new PropertyGetterContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 422;
            this.getter();
            this.state = 423;
            this.match(ECMAScriptParser.OpenParen);
            this.state = 424;
            this.match(ECMAScriptParser.CloseParen);
            this.state = 425;
            this.match(ECMAScriptParser.OpenBrace);
            this.state = 426;
            this.functionBody();
            this.state = 427;
            this.match(ECMAScriptParser.CloseBrace);
            break;

        case 3:
            localctx = new PropertySetterContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 429;
            this.setter();
            this.state = 430;
            this.match(ECMAScriptParser.OpenParen);
            this.state = 431;
            this.propertySetParameterList();
            this.state = 432;
            this.match(ECMAScriptParser.CloseParen);
            this.state = 433;
            this.match(ECMAScriptParser.OpenBrace);
            this.state = 434;
            this.functionBody();
            this.state = 435;
            this.match(ECMAScriptParser.CloseBrace);
            break;

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
};


function PropertyNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_propertyName;
    return this;
}

PropertyNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyNameContext.prototype.constructor = PropertyNameContext;

PropertyNameContext.prototype.identifierName = function() {
    return this.getTypedRuleContext(IdentifierNameContext,0);
};

PropertyNameContext.prototype.StringLiteral = function() {
    return this.getToken(ECMAScriptParser.StringLiteral, 0);
};

PropertyNameContext.prototype.numericLiteral = function() {
    return this.getTypedRuleContext(NumericLiteralContext,0);
};

PropertyNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterPropertyName(this);
	}
};

PropertyNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitPropertyName(this);
	}
};

PropertyNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitPropertyName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.PropertyNameContext = PropertyNameContext;

ECMAScriptParser.prototype.propertyName = function() {

    var localctx = new PropertyNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, ECMAScriptParser.RULE_propertyName);
    try {
        this.state = 442;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptParser.NullLiteral:
        case ECMAScriptParser.BooleanLiteral:
        case ECMAScriptParser.Break:
        case ECMAScriptParser.Do:
        case ECMAScriptParser.Instanceof:
        case ECMAScriptParser.Typeof:
        case ECMAScriptParser.Case:
        case ECMAScriptParser.Else:
        case ECMAScriptParser.New:
        case ECMAScriptParser.Var:
        case ECMAScriptParser.Catch:
        case ECMAScriptParser.Finally:
        case ECMAScriptParser.Return:
        case ECMAScriptParser.Void:
        case ECMAScriptParser.Continue:
        case ECMAScriptParser.For:
        case ECMAScriptParser.Switch:
        case ECMAScriptParser.While:
        case ECMAScriptParser.Debugger:
        case ECMAScriptParser.Function:
        case ECMAScriptParser.This:
        case ECMAScriptParser.With:
        case ECMAScriptParser.Default:
        case ECMAScriptParser.If:
        case ECMAScriptParser.Throw:
        case ECMAScriptParser.Delete:
        case ECMAScriptParser.In:
        case ECMAScriptParser.Try:
        case ECMAScriptParser.Class:
        case ECMAScriptParser.Enum:
        case ECMAScriptParser.Extends:
        case ECMAScriptParser.Super:
        case ECMAScriptParser.Const:
        case ECMAScriptParser.Export:
        case ECMAScriptParser.Import:
        case ECMAScriptParser.Implements:
        case ECMAScriptParser.Let:
        case ECMAScriptParser.Private:
        case ECMAScriptParser.Public:
        case ECMAScriptParser.Interface:
        case ECMAScriptParser.Package:
        case ECMAScriptParser.Protected:
        case ECMAScriptParser.Static:
        case ECMAScriptParser.Yield:
        case ECMAScriptParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 439;
            this.identifierName();
            break;
        case ECMAScriptParser.StringLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 440;
            this.match(ECMAScriptParser.StringLiteral);
            break;
        case ECMAScriptParser.DecimalLiteral:
        case ECMAScriptParser.HexIntegerLiteral:
        case ECMAScriptParser.OctalIntegerLiteral:
            this.enterOuterAlt(localctx, 3);
            this.state = 441;
            this.numericLiteral();
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
};


function PropertySetParameterListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_propertySetParameterList;
    return this;
}

PropertySetParameterListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertySetParameterListContext.prototype.constructor = PropertySetParameterListContext;

PropertySetParameterListContext.prototype.Identifier = function() {
    return this.getToken(ECMAScriptParser.Identifier, 0);
};

PropertySetParameterListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterPropertySetParameterList(this);
	}
};

PropertySetParameterListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitPropertySetParameterList(this);
	}
};

PropertySetParameterListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitPropertySetParameterList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.PropertySetParameterListContext = PropertySetParameterListContext;

ECMAScriptParser.prototype.propertySetParameterList = function() {

    var localctx = new PropertySetParameterListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, ECMAScriptParser.RULE_propertySetParameterList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 444;
        this.match(ECMAScriptParser.Identifier);
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
};


function ArgumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_arguments;
    return this;
}

ArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentsContext.prototype.constructor = ArgumentsContext;

ArgumentsContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptParser.OpenParen, 0);
};

ArgumentsContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptParser.CloseParen, 0);
};

ArgumentsContext.prototype.argumentList = function() {
    return this.getTypedRuleContext(ArgumentListContext,0);
};

ArgumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterArguments(this);
	}
};

ArgumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitArguments(this);
	}
};

ArgumentsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitArguments(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.ArgumentsContext = ArgumentsContext;

ECMAScriptParser.prototype.arguments = function() {

    var localctx = new ArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, ECMAScriptParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 446;
        this.match(ECMAScriptParser.OpenParen);
        this.state = 448;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptParser.RegularExpressionLiteral) | (1 << ECMAScriptParser.OpenBracket) | (1 << ECMAScriptParser.OpenParen) | (1 << ECMAScriptParser.OpenBrace) | (1 << ECMAScriptParser.PlusPlus) | (1 << ECMAScriptParser.MinusMinus) | (1 << ECMAScriptParser.Plus) | (1 << ECMAScriptParser.Minus) | (1 << ECMAScriptParser.BitNot) | (1 << ECMAScriptParser.Not))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (ECMAScriptParser.NullLiteral - 51)) | (1 << (ECMAScriptParser.BooleanLiteral - 51)) | (1 << (ECMAScriptParser.DecimalLiteral - 51)) | (1 << (ECMAScriptParser.HexIntegerLiteral - 51)) | (1 << (ECMAScriptParser.OctalIntegerLiteral - 51)) | (1 << (ECMAScriptParser.Typeof - 51)) | (1 << (ECMAScriptParser.New - 51)) | (1 << (ECMAScriptParser.Void - 51)) | (1 << (ECMAScriptParser.Function - 51)) | (1 << (ECMAScriptParser.This - 51)) | (1 << (ECMAScriptParser.Delete - 51)))) !== 0) || _la===ECMAScriptParser.Identifier || _la===ECMAScriptParser.StringLiteral) {
            this.state = 447;
            this.argumentList();
        }

        this.state = 450;
        this.match(ECMAScriptParser.CloseParen);
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
};


function ArgumentListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_argumentList;
    return this;
}

ArgumentListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentListContext.prototype.constructor = ArgumentListContext;

ArgumentListContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

ArgumentListContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptParser.Comma);
    } else {
        return this.getToken(ECMAScriptParser.Comma, i);
    }
};


ArgumentListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterArgumentList(this);
	}
};

ArgumentListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitArgumentList(this);
	}
};

ArgumentListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitArgumentList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.ArgumentListContext = ArgumentListContext;

ECMAScriptParser.prototype.argumentList = function() {

    var localctx = new ArgumentListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, ECMAScriptParser.RULE_argumentList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 452;
        this.singleExpression(0);
        this.state = 457;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ECMAScriptParser.Comma) {
            this.state = 453;
            this.match(ECMAScriptParser.Comma);
            this.state = 454;
            this.singleExpression(0);
            this.state = 459;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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
};


function ExpressionSequenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_expressionSequence;
    return this;
}

ExpressionSequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionSequenceContext.prototype.constructor = ExpressionSequenceContext;

ExpressionSequenceContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

ExpressionSequenceContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ECMAScriptParser.Comma);
    } else {
        return this.getToken(ECMAScriptParser.Comma, i);
    }
};


ExpressionSequenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterExpressionSequence(this);
	}
};

ExpressionSequenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitExpressionSequence(this);
	}
};

ExpressionSequenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitExpressionSequence(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.ExpressionSequenceContext = ExpressionSequenceContext;

ECMAScriptParser.prototype.expressionSequence = function() {

    var localctx = new ExpressionSequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, ECMAScriptParser.RULE_expressionSequence);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 460;
        this.singleExpression(0);
        this.state = 465;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,42,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 461;
                this.match(ECMAScriptParser.Comma);
                this.state = 462;
                this.singleExpression(0); 
            }
            this.state = 467;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,42,this._ctx);
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
};


function SingleExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_singleExpression;
    return this;
}

SingleExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SingleExpressionContext.prototype.constructor = SingleExpressionContext;


 
SingleExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function TernaryExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TernaryExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
TernaryExpressionContext.prototype.constructor = TernaryExpressionContext;

ECMAScriptParser.TernaryExpressionContext = TernaryExpressionContext;

TernaryExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

TernaryExpressionContext.prototype.QuestionMark = function() {
    return this.getToken(ECMAScriptParser.QuestionMark, 0);
};

TernaryExpressionContext.prototype.Colon = function() {
    return this.getToken(ECMAScriptParser.Colon, 0);
};
TernaryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterTernaryExpression(this);
	}
};

TernaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitTernaryExpression(this);
	}
};

TernaryExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitTernaryExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LogicalAndExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogicalAndExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
LogicalAndExpressionContext.prototype.constructor = LogicalAndExpressionContext;

ECMAScriptParser.LogicalAndExpressionContext = LogicalAndExpressionContext;

LogicalAndExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

LogicalAndExpressionContext.prototype.And = function() {
    return this.getToken(ECMAScriptParser.And, 0);
};
LogicalAndExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterLogicalAndExpression(this);
	}
};

LogicalAndExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitLogicalAndExpression(this);
	}
};

LogicalAndExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitLogicalAndExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PreIncrementExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PreIncrementExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
PreIncrementExpressionContext.prototype.constructor = PreIncrementExpressionContext;

ECMAScriptParser.PreIncrementExpressionContext = PreIncrementExpressionContext;

PreIncrementExpressionContext.prototype.PlusPlus = function() {
    return this.getToken(ECMAScriptParser.PlusPlus, 0);
};

PreIncrementExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
PreIncrementExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterPreIncrementExpression(this);
	}
};

PreIncrementExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitPreIncrementExpression(this);
	}
};

PreIncrementExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitPreIncrementExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ObjectLiteralExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ObjectLiteralExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
ObjectLiteralExpressionContext.prototype.constructor = ObjectLiteralExpressionContext;

ECMAScriptParser.ObjectLiteralExpressionContext = ObjectLiteralExpressionContext;

ObjectLiteralExpressionContext.prototype.objectLiteral = function() {
    return this.getTypedRuleContext(ObjectLiteralContext,0);
};
ObjectLiteralExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterObjectLiteralExpression(this);
	}
};

ObjectLiteralExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitObjectLiteralExpression(this);
	}
};

ObjectLiteralExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitObjectLiteralExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function InExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
InExpressionContext.prototype.constructor = InExpressionContext;

ECMAScriptParser.InExpressionContext = InExpressionContext;

InExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

InExpressionContext.prototype.In = function() {
    return this.getToken(ECMAScriptParser.In, 0);
};
InExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterInExpression(this);
	}
};

InExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitInExpression(this);
	}
};

InExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitInExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LogicalOrExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogicalOrExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
LogicalOrExpressionContext.prototype.constructor = LogicalOrExpressionContext;

ECMAScriptParser.LogicalOrExpressionContext = LogicalOrExpressionContext;

LogicalOrExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

LogicalOrExpressionContext.prototype.Or = function() {
    return this.getToken(ECMAScriptParser.Or, 0);
};
LogicalOrExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterLogicalOrExpression(this);
	}
};

LogicalOrExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitLogicalOrExpression(this);
	}
};

LogicalOrExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitLogicalOrExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NotExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NotExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
NotExpressionContext.prototype.constructor = NotExpressionContext;

ECMAScriptParser.NotExpressionContext = NotExpressionContext;

NotExpressionContext.prototype.Not = function() {
    return this.getToken(ECMAScriptParser.Not, 0);
};

NotExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
NotExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterNotExpression(this);
	}
};

NotExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitNotExpression(this);
	}
};

NotExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitNotExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PreDecreaseExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PreDecreaseExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
PreDecreaseExpressionContext.prototype.constructor = PreDecreaseExpressionContext;

ECMAScriptParser.PreDecreaseExpressionContext = PreDecreaseExpressionContext;

PreDecreaseExpressionContext.prototype.MinusMinus = function() {
    return this.getToken(ECMAScriptParser.MinusMinus, 0);
};

PreDecreaseExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
PreDecreaseExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterPreDecreaseExpression(this);
	}
};

PreDecreaseExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitPreDecreaseExpression(this);
	}
};

PreDecreaseExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitPreDecreaseExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArgumentsExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArgumentsExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
ArgumentsExpressionContext.prototype.constructor = ArgumentsExpressionContext;

ECMAScriptParser.ArgumentsExpressionContext = ArgumentsExpressionContext;

ArgumentsExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

ArgumentsExpressionContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};
ArgumentsExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterArgumentsExpression(this);
	}
};

ArgumentsExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitArgumentsExpression(this);
	}
};

ArgumentsExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitArgumentsExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ThisExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ThisExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
ThisExpressionContext.prototype.constructor = ThisExpressionContext;

ECMAScriptParser.ThisExpressionContext = ThisExpressionContext;

ThisExpressionContext.prototype.This = function() {
    return this.getToken(ECMAScriptParser.This, 0);
};
ThisExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterThisExpression(this);
	}
};

ThisExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitThisExpression(this);
	}
};

ThisExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitThisExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FunctionExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
FunctionExpressionContext.prototype.constructor = FunctionExpressionContext;

ECMAScriptParser.FunctionExpressionContext = FunctionExpressionContext;

FunctionExpressionContext.prototype.Function = function() {
    return this.getToken(ECMAScriptParser.Function, 0);
};

FunctionExpressionContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptParser.OpenParen, 0);
};

FunctionExpressionContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptParser.CloseParen, 0);
};

FunctionExpressionContext.prototype.OpenBrace = function() {
    return this.getToken(ECMAScriptParser.OpenBrace, 0);
};

FunctionExpressionContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

FunctionExpressionContext.prototype.CloseBrace = function() {
    return this.getToken(ECMAScriptParser.CloseBrace, 0);
};

FunctionExpressionContext.prototype.Identifier = function() {
    return this.getToken(ECMAScriptParser.Identifier, 0);
};

FunctionExpressionContext.prototype.formalParameterList = function() {
    return this.getTypedRuleContext(FormalParameterListContext,0);
};
FunctionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterFunctionExpression(this);
	}
};

FunctionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitFunctionExpression(this);
	}
};

FunctionExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitFunctionExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnaryMinusExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryMinusExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
UnaryMinusExpressionContext.prototype.constructor = UnaryMinusExpressionContext;

ECMAScriptParser.UnaryMinusExpressionContext = UnaryMinusExpressionContext;

UnaryMinusExpressionContext.prototype.Minus = function() {
    return this.getToken(ECMAScriptParser.Minus, 0);
};

UnaryMinusExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
UnaryMinusExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterUnaryMinusExpression(this);
	}
};

UnaryMinusExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitUnaryMinusExpression(this);
	}
};

UnaryMinusExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitUnaryMinusExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PostDecreaseExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PostDecreaseExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
PostDecreaseExpressionContext.prototype.constructor = PostDecreaseExpressionContext;

ECMAScriptParser.PostDecreaseExpressionContext = PostDecreaseExpressionContext;

PostDecreaseExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

PostDecreaseExpressionContext.prototype.MinusMinus = function() {
    return this.getToken(ECMAScriptParser.MinusMinus, 0);
};
PostDecreaseExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterPostDecreaseExpression(this);
	}
};

PostDecreaseExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitPostDecreaseExpression(this);
	}
};

PostDecreaseExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitPostDecreaseExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AssignmentExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignmentExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
AssignmentExpressionContext.prototype.constructor = AssignmentExpressionContext;

ECMAScriptParser.AssignmentExpressionContext = AssignmentExpressionContext;

AssignmentExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

AssignmentExpressionContext.prototype.Assign = function() {
    return this.getToken(ECMAScriptParser.Assign, 0);
};

AssignmentExpressionContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};
AssignmentExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterAssignmentExpression(this);
	}
};

AssignmentExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitAssignmentExpression(this);
	}
};

AssignmentExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitAssignmentExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TypeofExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TypeofExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
TypeofExpressionContext.prototype.constructor = TypeofExpressionContext;

ECMAScriptParser.TypeofExpressionContext = TypeofExpressionContext;

TypeofExpressionContext.prototype.Typeof = function() {
    return this.getToken(ECMAScriptParser.Typeof, 0);
};

TypeofExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
TypeofExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterTypeofExpression(this);
	}
};

TypeofExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitTypeofExpression(this);
	}
};

TypeofExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitTypeofExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function InstanceofExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InstanceofExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
InstanceofExpressionContext.prototype.constructor = InstanceofExpressionContext;

ECMAScriptParser.InstanceofExpressionContext = InstanceofExpressionContext;

InstanceofExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

InstanceofExpressionContext.prototype.Instanceof = function() {
    return this.getToken(ECMAScriptParser.Instanceof, 0);
};
InstanceofExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterInstanceofExpression(this);
	}
};

InstanceofExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitInstanceofExpression(this);
	}
};

InstanceofExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitInstanceofExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnaryPlusExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryPlusExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
UnaryPlusExpressionContext.prototype.constructor = UnaryPlusExpressionContext;

ECMAScriptParser.UnaryPlusExpressionContext = UnaryPlusExpressionContext;

UnaryPlusExpressionContext.prototype.Plus = function() {
    return this.getToken(ECMAScriptParser.Plus, 0);
};

UnaryPlusExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
UnaryPlusExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterUnaryPlusExpression(this);
	}
};

UnaryPlusExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitUnaryPlusExpression(this);
	}
};

UnaryPlusExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitUnaryPlusExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DeleteExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DeleteExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
DeleteExpressionContext.prototype.constructor = DeleteExpressionContext;

ECMAScriptParser.DeleteExpressionContext = DeleteExpressionContext;

DeleteExpressionContext.prototype.Delete = function() {
    return this.getToken(ECMAScriptParser.Delete, 0);
};

DeleteExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
DeleteExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterDeleteExpression(this);
	}
};

DeleteExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitDeleteExpression(this);
	}
};

DeleteExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitDeleteExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EqualityExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqualityExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
EqualityExpressionContext.prototype.constructor = EqualityExpressionContext;

ECMAScriptParser.EqualityExpressionContext = EqualityExpressionContext;

EqualityExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

EqualityExpressionContext.prototype.Equals = function() {
    return this.getToken(ECMAScriptParser.Equals, 0);
};

EqualityExpressionContext.prototype.NotEquals = function() {
    return this.getToken(ECMAScriptParser.NotEquals, 0);
};

EqualityExpressionContext.prototype.IdentityEquals = function() {
    return this.getToken(ECMAScriptParser.IdentityEquals, 0);
};

EqualityExpressionContext.prototype.IdentityNotEquals = function() {
    return this.getToken(ECMAScriptParser.IdentityNotEquals, 0);
};
EqualityExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterEqualityExpression(this);
	}
};

EqualityExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitEqualityExpression(this);
	}
};

EqualityExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitEqualityExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BitXOrExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BitXOrExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
BitXOrExpressionContext.prototype.constructor = BitXOrExpressionContext;

ECMAScriptParser.BitXOrExpressionContext = BitXOrExpressionContext;

BitXOrExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

BitXOrExpressionContext.prototype.BitXOr = function() {
    return this.getToken(ECMAScriptParser.BitXOr, 0);
};
BitXOrExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterBitXOrExpression(this);
	}
};

BitXOrExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitBitXOrExpression(this);
	}
};

BitXOrExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitBitXOrExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MultiplicativeExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplicativeExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
MultiplicativeExpressionContext.prototype.constructor = MultiplicativeExpressionContext;

ECMAScriptParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext;

MultiplicativeExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

MultiplicativeExpressionContext.prototype.Multiply = function() {
    return this.getToken(ECMAScriptParser.Multiply, 0);
};

MultiplicativeExpressionContext.prototype.Divide = function() {
    return this.getToken(ECMAScriptParser.Divide, 0);
};

MultiplicativeExpressionContext.prototype.Modulus = function() {
    return this.getToken(ECMAScriptParser.Modulus, 0);
};
MultiplicativeExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterMultiplicativeExpression(this);
	}
};

MultiplicativeExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitMultiplicativeExpression(this);
	}
};

MultiplicativeExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitMultiplicativeExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BitShiftExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BitShiftExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
BitShiftExpressionContext.prototype.constructor = BitShiftExpressionContext;

ECMAScriptParser.BitShiftExpressionContext = BitShiftExpressionContext;

BitShiftExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

BitShiftExpressionContext.prototype.LeftShiftArithmetic = function() {
    return this.getToken(ECMAScriptParser.LeftShiftArithmetic, 0);
};

BitShiftExpressionContext.prototype.RightShiftArithmetic = function() {
    return this.getToken(ECMAScriptParser.RightShiftArithmetic, 0);
};

BitShiftExpressionContext.prototype.RightShiftLogical = function() {
    return this.getToken(ECMAScriptParser.RightShiftLogical, 0);
};
BitShiftExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterBitShiftExpression(this);
	}
};

BitShiftExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitBitShiftExpression(this);
	}
};

BitShiftExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitBitShiftExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParenthesizedExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenthesizedExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
ParenthesizedExpressionContext.prototype.constructor = ParenthesizedExpressionContext;

ECMAScriptParser.ParenthesizedExpressionContext = ParenthesizedExpressionContext;

ParenthesizedExpressionContext.prototype.OpenParen = function() {
    return this.getToken(ECMAScriptParser.OpenParen, 0);
};

ParenthesizedExpressionContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

ParenthesizedExpressionContext.prototype.CloseParen = function() {
    return this.getToken(ECMAScriptParser.CloseParen, 0);
};
ParenthesizedExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterParenthesizedExpression(this);
	}
};

ParenthesizedExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitParenthesizedExpression(this);
	}
};

ParenthesizedExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitParenthesizedExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AdditiveExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AdditiveExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
AdditiveExpressionContext.prototype.constructor = AdditiveExpressionContext;

ECMAScriptParser.AdditiveExpressionContext = AdditiveExpressionContext;

AdditiveExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

AdditiveExpressionContext.prototype.Plus = function() {
    return this.getToken(ECMAScriptParser.Plus, 0);
};

AdditiveExpressionContext.prototype.Minus = function() {
    return this.getToken(ECMAScriptParser.Minus, 0);
};
AdditiveExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterAdditiveExpression(this);
	}
};

AdditiveExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitAdditiveExpression(this);
	}
};

AdditiveExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitAdditiveExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RelationalExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelationalExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
RelationalExpressionContext.prototype.constructor = RelationalExpressionContext;

ECMAScriptParser.RelationalExpressionContext = RelationalExpressionContext;

RelationalExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

RelationalExpressionContext.prototype.LessThan = function() {
    return this.getToken(ECMAScriptParser.LessThan, 0);
};

RelationalExpressionContext.prototype.MoreThan = function() {
    return this.getToken(ECMAScriptParser.MoreThan, 0);
};

RelationalExpressionContext.prototype.LessThanEquals = function() {
    return this.getToken(ECMAScriptParser.LessThanEquals, 0);
};

RelationalExpressionContext.prototype.GreaterThanEquals = function() {
    return this.getToken(ECMAScriptParser.GreaterThanEquals, 0);
};
RelationalExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterRelationalExpression(this);
	}
};

RelationalExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitRelationalExpression(this);
	}
};

RelationalExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitRelationalExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PostIncrementExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PostIncrementExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
PostIncrementExpressionContext.prototype.constructor = PostIncrementExpressionContext;

ECMAScriptParser.PostIncrementExpressionContext = PostIncrementExpressionContext;

PostIncrementExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

PostIncrementExpressionContext.prototype.PlusPlus = function() {
    return this.getToken(ECMAScriptParser.PlusPlus, 0);
};
PostIncrementExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterPostIncrementExpression(this);
	}
};

PostIncrementExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitPostIncrementExpression(this);
	}
};

PostIncrementExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitPostIncrementExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BitNotExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BitNotExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
BitNotExpressionContext.prototype.constructor = BitNotExpressionContext;

ECMAScriptParser.BitNotExpressionContext = BitNotExpressionContext;

BitNotExpressionContext.prototype.BitNot = function() {
    return this.getToken(ECMAScriptParser.BitNot, 0);
};

BitNotExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
BitNotExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterBitNotExpression(this);
	}
};

BitNotExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitBitNotExpression(this);
	}
};

BitNotExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitBitNotExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NewExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NewExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
NewExpressionContext.prototype.constructor = NewExpressionContext;

ECMAScriptParser.NewExpressionContext = NewExpressionContext;

NewExpressionContext.prototype.New = function() {
    return this.getToken(ECMAScriptParser.New, 0);
};

NewExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

NewExpressionContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};
NewExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterNewExpression(this);
	}
};

NewExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitNewExpression(this);
	}
};

NewExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitNewExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LiteralExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LiteralExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
LiteralExpressionContext.prototype.constructor = LiteralExpressionContext;

ECMAScriptParser.LiteralExpressionContext = LiteralExpressionContext;

LiteralExpressionContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};
LiteralExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterLiteralExpression(this);
	}
};

LiteralExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitLiteralExpression(this);
	}
};

LiteralExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitLiteralExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArrayLiteralExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrayLiteralExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
ArrayLiteralExpressionContext.prototype.constructor = ArrayLiteralExpressionContext;

ECMAScriptParser.ArrayLiteralExpressionContext = ArrayLiteralExpressionContext;

ArrayLiteralExpressionContext.prototype.arrayLiteral = function() {
    return this.getTypedRuleContext(ArrayLiteralContext,0);
};
ArrayLiteralExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterArrayLiteralExpression(this);
	}
};

ArrayLiteralExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitArrayLiteralExpression(this);
	}
};

ArrayLiteralExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitArrayLiteralExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MemberDotExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MemberDotExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
MemberDotExpressionContext.prototype.constructor = MemberDotExpressionContext;

ECMAScriptParser.MemberDotExpressionContext = MemberDotExpressionContext;

MemberDotExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

MemberDotExpressionContext.prototype.Dot = function() {
    return this.getToken(ECMAScriptParser.Dot, 0);
};

MemberDotExpressionContext.prototype.identifierName = function() {
    return this.getTypedRuleContext(IdentifierNameContext,0);
};
MemberDotExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterMemberDotExpression(this);
	}
};

MemberDotExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitMemberDotExpression(this);
	}
};

MemberDotExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitMemberDotExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MemberIndexExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MemberIndexExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
MemberIndexExpressionContext.prototype.constructor = MemberIndexExpressionContext;

ECMAScriptParser.MemberIndexExpressionContext = MemberIndexExpressionContext;

MemberIndexExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

MemberIndexExpressionContext.prototype.OpenBracket = function() {
    return this.getToken(ECMAScriptParser.OpenBracket, 0);
};

MemberIndexExpressionContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

MemberIndexExpressionContext.prototype.CloseBracket = function() {
    return this.getToken(ECMAScriptParser.CloseBracket, 0);
};
MemberIndexExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterMemberIndexExpression(this);
	}
};

MemberIndexExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitMemberIndexExpression(this);
	}
};

MemberIndexExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitMemberIndexExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdentifierExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
IdentifierExpressionContext.prototype.constructor = IdentifierExpressionContext;

ECMAScriptParser.IdentifierExpressionContext = IdentifierExpressionContext;

IdentifierExpressionContext.prototype.Identifier = function() {
    return this.getToken(ECMAScriptParser.Identifier, 0);
};
IdentifierExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterIdentifierExpression(this);
	}
};

IdentifierExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitIdentifierExpression(this);
	}
};

IdentifierExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitIdentifierExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BitAndExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BitAndExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
BitAndExpressionContext.prototype.constructor = BitAndExpressionContext;

ECMAScriptParser.BitAndExpressionContext = BitAndExpressionContext;

BitAndExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

BitAndExpressionContext.prototype.BitAnd = function() {
    return this.getToken(ECMAScriptParser.BitAnd, 0);
};
BitAndExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterBitAndExpression(this);
	}
};

BitAndExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitBitAndExpression(this);
	}
};

BitAndExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitBitAndExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BitOrExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BitOrExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
BitOrExpressionContext.prototype.constructor = BitOrExpressionContext;

ECMAScriptParser.BitOrExpressionContext = BitOrExpressionContext;

BitOrExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

BitOrExpressionContext.prototype.BitOr = function() {
    return this.getToken(ECMAScriptParser.BitOr, 0);
};
BitOrExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterBitOrExpression(this);
	}
};

BitOrExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitBitOrExpression(this);
	}
};

BitOrExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitBitOrExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AssignmentOperatorExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignmentOperatorExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
AssignmentOperatorExpressionContext.prototype.constructor = AssignmentOperatorExpressionContext;

ECMAScriptParser.AssignmentOperatorExpressionContext = AssignmentOperatorExpressionContext;

AssignmentOperatorExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

AssignmentOperatorExpressionContext.prototype.assignmentOperator = function() {
    return this.getTypedRuleContext(AssignmentOperatorContext,0);
};

AssignmentOperatorExpressionContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};
AssignmentOperatorExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterAssignmentOperatorExpression(this);
	}
};

AssignmentOperatorExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitAssignmentOperatorExpression(this);
	}
};

AssignmentOperatorExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitAssignmentOperatorExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function VoidExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VoidExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
VoidExpressionContext.prototype.constructor = VoidExpressionContext;

ECMAScriptParser.VoidExpressionContext = VoidExpressionContext;

VoidExpressionContext.prototype.Void = function() {
    return this.getToken(ECMAScriptParser.Void, 0);
};

VoidExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};
VoidExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterVoidExpression(this);
	}
};

VoidExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitVoidExpression(this);
	}
};

VoidExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitVoidExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ECMAScriptParser.prototype.singleExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new SingleExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 86;
    this.enterRecursionRule(localctx, 86, ECMAScriptParser.RULE_singleExpression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 514;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptParser.Function:
            localctx = new FunctionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 469;
            this.match(ECMAScriptParser.Function);
            this.state = 471;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptParser.Identifier) {
                this.state = 470;
                this.match(ECMAScriptParser.Identifier);
            }

            this.state = 473;
            this.match(ECMAScriptParser.OpenParen);
            this.state = 475;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ECMAScriptParser.Identifier) {
                this.state = 474;
                this.formalParameterList();
            }

            this.state = 477;
            this.match(ECMAScriptParser.CloseParen);
            this.state = 478;
            this.match(ECMAScriptParser.OpenBrace);
            this.state = 479;
            this.functionBody();
            this.state = 480;
            this.match(ECMAScriptParser.CloseBrace);
            break;
        case ECMAScriptParser.New:
            localctx = new NewExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 482;
            this.match(ECMAScriptParser.New);
            this.state = 483;
            this.singleExpression(0);
            this.state = 485;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
            if(la_===1) {
                this.state = 484;
                this.arguments();

            }
            break;
        case ECMAScriptParser.Delete:
            localctx = new DeleteExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 487;
            this.match(ECMAScriptParser.Delete);
            this.state = 488;
            this.singleExpression(30);
            break;
        case ECMAScriptParser.Void:
            localctx = new VoidExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 489;
            this.match(ECMAScriptParser.Void);
            this.state = 490;
            this.singleExpression(29);
            break;
        case ECMAScriptParser.Typeof:
            localctx = new TypeofExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 491;
            this.match(ECMAScriptParser.Typeof);
            this.state = 492;
            this.singleExpression(28);
            break;
        case ECMAScriptParser.PlusPlus:
            localctx = new PreIncrementExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 493;
            this.match(ECMAScriptParser.PlusPlus);
            this.state = 494;
            this.singleExpression(27);
            break;
        case ECMAScriptParser.MinusMinus:
            localctx = new PreDecreaseExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 495;
            this.match(ECMAScriptParser.MinusMinus);
            this.state = 496;
            this.singleExpression(26);
            break;
        case ECMAScriptParser.Plus:
            localctx = new UnaryPlusExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 497;
            this.match(ECMAScriptParser.Plus);
            this.state = 498;
            this.singleExpression(25);
            break;
        case ECMAScriptParser.Minus:
            localctx = new UnaryMinusExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 499;
            this.match(ECMAScriptParser.Minus);
            this.state = 500;
            this.singleExpression(24);
            break;
        case ECMAScriptParser.BitNot:
            localctx = new BitNotExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 501;
            this.match(ECMAScriptParser.BitNot);
            this.state = 502;
            this.singleExpression(23);
            break;
        case ECMAScriptParser.Not:
            localctx = new NotExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 503;
            this.match(ECMAScriptParser.Not);
            this.state = 504;
            this.singleExpression(22);
            break;
        case ECMAScriptParser.This:
            localctx = new ThisExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 505;
            this.match(ECMAScriptParser.This);
            break;
        case ECMAScriptParser.Identifier:
            localctx = new IdentifierExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 506;
            this.match(ECMAScriptParser.Identifier);
            break;
        case ECMAScriptParser.RegularExpressionLiteral:
        case ECMAScriptParser.NullLiteral:
        case ECMAScriptParser.BooleanLiteral:
        case ECMAScriptParser.DecimalLiteral:
        case ECMAScriptParser.HexIntegerLiteral:
        case ECMAScriptParser.OctalIntegerLiteral:
        case ECMAScriptParser.StringLiteral:
            localctx = new LiteralExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 507;
            this.literal();
            break;
        case ECMAScriptParser.OpenBracket:
            localctx = new ArrayLiteralExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 508;
            this.arrayLiteral();
            break;
        case ECMAScriptParser.OpenBrace:
            localctx = new ObjectLiteralExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 509;
            this.objectLiteral();
            break;
        case ECMAScriptParser.OpenParen:
            localctx = new ParenthesizedExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 510;
            this.match(ECMAScriptParser.OpenParen);
            this.state = 511;
            this.expressionSequence();
            this.state = 512;
            this.match(ECMAScriptParser.CloseParen);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 583;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,48,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 581;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplicativeExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                    this.state = 516;
                    if (!( this.precpred(this._ctx, 21))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
                    }
                    this.state = 517;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptParser.Multiply) | (1 << ECMAScriptParser.Divide) | (1 << ECMAScriptParser.Modulus))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 518;
                    this.singleExpression(22);
                    break;

                case 2:
                    localctx = new AdditiveExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                    this.state = 519;
                    if (!( this.precpred(this._ctx, 20))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                    }
                    this.state = 520;
                    _la = this._input.LA(1);
                    if(!(_la===ECMAScriptParser.Plus || _la===ECMAScriptParser.Minus)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 521;
                    this.singleExpression(21);
                    break;

                case 3:
                    localctx = new BitShiftExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                    this.state = 522;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 523;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptParser.RightShiftArithmetic) | (1 << ECMAScriptParser.LeftShiftArithmetic) | (1 << ECMAScriptParser.RightShiftLogical))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 524;
                    this.singleExpression(20);
                    break;

                case 4:
                    localctx = new RelationalExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                    this.state = 525;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 526;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ECMAScriptParser.LessThan) | (1 << ECMAScriptParser.MoreThan) | (1 << ECMAScriptParser.LessThanEquals) | (1 << ECMAScriptParser.GreaterThanEquals))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 527;
                    this.singleExpression(19);
                    break;

                case 5:
                    localctx = new InstanceofExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                    this.state = 528;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 529;
                    this.match(ECMAScriptParser.Instanceof);
                    this.state = 530;
                    this.singleExpression(18);
                    break;

                case 6:
                    localctx = new InExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                    this.state = 531;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 532;
                    this.match(ECMAScriptParser.In);
                    this.state = 533;
                    this.singleExpression(17);
                    break;

                case 7:
                    localctx = new EqualityExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                    this.state = 534;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 535;
                    _la = this._input.LA(1);
                    if(!(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (ECMAScriptParser.Equals - 31)) | (1 << (ECMAScriptParser.NotEquals - 31)) | (1 << (ECMAScriptParser.IdentityEquals - 31)) | (1 << (ECMAScriptParser.IdentityNotEquals - 31)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 536;
                    this.singleExpression(16);
                    break;

                case 8:
                    localctx = new BitAndExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                    this.state = 537;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 538;
                    this.match(ECMAScriptParser.BitAnd);
                    this.state = 539;
                    this.singleExpression(15);
                    break;

                case 9:
                    localctx = new BitXOrExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                    this.state = 540;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 541;
                    this.match(ECMAScriptParser.BitXOr);
                    this.state = 542;
                    this.singleExpression(14);
                    break;

                case 10:
                    localctx = new BitOrExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                    this.state = 543;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 544;
                    this.match(ECMAScriptParser.BitOr);
                    this.state = 545;
                    this.singleExpression(13);
                    break;

                case 11:
                    localctx = new LogicalAndExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                    this.state = 546;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 547;
                    this.match(ECMAScriptParser.And);
                    this.state = 548;
                    this.singleExpression(12);
                    break;

                case 12:
                    localctx = new LogicalOrExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                    this.state = 549;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 550;
                    this.match(ECMAScriptParser.Or);
                    this.state = 551;
                    this.singleExpression(11);
                    break;

                case 13:
                    localctx = new TernaryExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                    this.state = 552;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 553;
                    this.match(ECMAScriptParser.QuestionMark);
                    this.state = 554;
                    this.singleExpression(0);
                    this.state = 555;
                    this.match(ECMAScriptParser.Colon);
                    this.state = 556;
                    this.singleExpression(10);
                    break;

                case 14:
                    localctx = new MemberIndexExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                    this.state = 558;
                    if (!( this.precpred(this._ctx, 36))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 36)");
                    }
                    this.state = 559;
                    this.match(ECMAScriptParser.OpenBracket);
                    this.state = 560;
                    this.expressionSequence();
                    this.state = 561;
                    this.match(ECMAScriptParser.CloseBracket);
                    break;

                case 15:
                    localctx = new MemberDotExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                    this.state = 563;
                    if (!( this.precpred(this._ctx, 35))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 35)");
                    }
                    this.state = 564;
                    this.match(ECMAScriptParser.Dot);
                    this.state = 565;
                    this.identifierName();
                    break;

                case 16:
                    localctx = new ArgumentsExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                    this.state = 566;
                    if (!( this.precpred(this._ctx, 34))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 34)");
                    }
                    this.state = 567;
                    this.arguments();
                    break;

                case 17:
                    localctx = new PostIncrementExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                    this.state = 568;
                    if (!( this.precpred(this._ctx, 32))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 32)");
                    }
                    this.state = 569;
                    if (!( !this.here(ECMAScriptParser.LineTerminator))) {
                        throw new antlr4.error.FailedPredicateException(this, "!this.here(ECMAScriptParser.LineTerminator)");
                    }
                    this.state = 570;
                    this.match(ECMAScriptParser.PlusPlus);
                    break;

                case 18:
                    localctx = new PostDecreaseExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                    this.state = 571;
                    if (!( this.precpred(this._ctx, 31))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 31)");
                    }
                    this.state = 572;
                    if (!( !this.here(ECMAScriptParser.LineTerminator))) {
                        throw new antlr4.error.FailedPredicateException(this, "!this.here(ECMAScriptParser.LineTerminator)");
                    }
                    this.state = 573;
                    this.match(ECMAScriptParser.MinusMinus);
                    break;

                case 19:
                    localctx = new AssignmentExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                    this.state = 574;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 575;
                    this.match(ECMAScriptParser.Assign);
                    this.state = 576;
                    this.expressionSequence();
                    break;

                case 20:
                    localctx = new AssignmentOperatorExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                    this.state = 577;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 578;
                    this.assignmentOperator();
                    this.state = 579;
                    this.expressionSequence();
                    break;

                } 
            }
            this.state = 585;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,48,this._ctx);
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
};


function AssignmentOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_assignmentOperator;
    return this;
}

AssignmentOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentOperatorContext.prototype.constructor = AssignmentOperatorContext;

AssignmentOperatorContext.prototype.MultiplyAssign = function() {
    return this.getToken(ECMAScriptParser.MultiplyAssign, 0);
};

AssignmentOperatorContext.prototype.DivideAssign = function() {
    return this.getToken(ECMAScriptParser.DivideAssign, 0);
};

AssignmentOperatorContext.prototype.ModulusAssign = function() {
    return this.getToken(ECMAScriptParser.ModulusAssign, 0);
};

AssignmentOperatorContext.prototype.PlusAssign = function() {
    return this.getToken(ECMAScriptParser.PlusAssign, 0);
};

AssignmentOperatorContext.prototype.MinusAssign = function() {
    return this.getToken(ECMAScriptParser.MinusAssign, 0);
};

AssignmentOperatorContext.prototype.LeftShiftArithmeticAssign = function() {
    return this.getToken(ECMAScriptParser.LeftShiftArithmeticAssign, 0);
};

AssignmentOperatorContext.prototype.RightShiftArithmeticAssign = function() {
    return this.getToken(ECMAScriptParser.RightShiftArithmeticAssign, 0);
};

AssignmentOperatorContext.prototype.RightShiftLogicalAssign = function() {
    return this.getToken(ECMAScriptParser.RightShiftLogicalAssign, 0);
};

AssignmentOperatorContext.prototype.BitAndAssign = function() {
    return this.getToken(ECMAScriptParser.BitAndAssign, 0);
};

AssignmentOperatorContext.prototype.BitXorAssign = function() {
    return this.getToken(ECMAScriptParser.BitXorAssign, 0);
};

AssignmentOperatorContext.prototype.BitOrAssign = function() {
    return this.getToken(ECMAScriptParser.BitOrAssign, 0);
};

AssignmentOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterAssignmentOperator(this);
	}
};

AssignmentOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitAssignmentOperator(this);
	}
};

AssignmentOperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitAssignmentOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.AssignmentOperatorContext = AssignmentOperatorContext;

ECMAScriptParser.prototype.assignmentOperator = function() {

    var localctx = new AssignmentOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, ECMAScriptParser.RULE_assignmentOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 586;
        _la = this._input.LA(1);
        if(!(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (ECMAScriptParser.MultiplyAssign - 40)) | (1 << (ECMAScriptParser.DivideAssign - 40)) | (1 << (ECMAScriptParser.ModulusAssign - 40)) | (1 << (ECMAScriptParser.PlusAssign - 40)) | (1 << (ECMAScriptParser.MinusAssign - 40)) | (1 << (ECMAScriptParser.LeftShiftArithmeticAssign - 40)) | (1 << (ECMAScriptParser.RightShiftArithmeticAssign - 40)) | (1 << (ECMAScriptParser.RightShiftLogicalAssign - 40)) | (1 << (ECMAScriptParser.BitAndAssign - 40)) | (1 << (ECMAScriptParser.BitXorAssign - 40)) | (1 << (ECMAScriptParser.BitOrAssign - 40)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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
};


function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.NullLiteral = function() {
    return this.getToken(ECMAScriptParser.NullLiteral, 0);
};

LiteralContext.prototype.BooleanLiteral = function() {
    return this.getToken(ECMAScriptParser.BooleanLiteral, 0);
};

LiteralContext.prototype.StringLiteral = function() {
    return this.getToken(ECMAScriptParser.StringLiteral, 0);
};

LiteralContext.prototype.RegularExpressionLiteral = function() {
    return this.getToken(ECMAScriptParser.RegularExpressionLiteral, 0);
};

LiteralContext.prototype.numericLiteral = function() {
    return this.getTypedRuleContext(NumericLiteralContext,0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitLiteral(this);
	}
};

LiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.LiteralContext = LiteralContext;

ECMAScriptParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, ECMAScriptParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.state = 590;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptParser.RegularExpressionLiteral:
        case ECMAScriptParser.NullLiteral:
        case ECMAScriptParser.BooleanLiteral:
        case ECMAScriptParser.StringLiteral:
            this.enterOuterAlt(localctx, 1);
            this.state = 588;
            _la = this._input.LA(1);
            if(!(_la===ECMAScriptParser.RegularExpressionLiteral || _la===ECMAScriptParser.NullLiteral || _la===ECMAScriptParser.BooleanLiteral || _la===ECMAScriptParser.StringLiteral)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        case ECMAScriptParser.DecimalLiteral:
        case ECMAScriptParser.HexIntegerLiteral:
        case ECMAScriptParser.OctalIntegerLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 589;
            this.numericLiteral();
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
};


function NumericLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_numericLiteral;
    return this;
}

NumericLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumericLiteralContext.prototype.constructor = NumericLiteralContext;

NumericLiteralContext.prototype.DecimalLiteral = function() {
    return this.getToken(ECMAScriptParser.DecimalLiteral, 0);
};

NumericLiteralContext.prototype.HexIntegerLiteral = function() {
    return this.getToken(ECMAScriptParser.HexIntegerLiteral, 0);
};

NumericLiteralContext.prototype.OctalIntegerLiteral = function() {
    return this.getToken(ECMAScriptParser.OctalIntegerLiteral, 0);
};

NumericLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterNumericLiteral(this);
	}
};

NumericLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitNumericLiteral(this);
	}
};

NumericLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitNumericLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.NumericLiteralContext = NumericLiteralContext;

ECMAScriptParser.prototype.numericLiteral = function() {

    var localctx = new NumericLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, ECMAScriptParser.RULE_numericLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 592;
        _la = this._input.LA(1);
        if(!(((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (ECMAScriptParser.DecimalLiteral - 53)) | (1 << (ECMAScriptParser.HexIntegerLiteral - 53)) | (1 << (ECMAScriptParser.OctalIntegerLiteral - 53)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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
};


function IdentifierNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_identifierName;
    return this;
}

IdentifierNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierNameContext.prototype.constructor = IdentifierNameContext;

IdentifierNameContext.prototype.Identifier = function() {
    return this.getToken(ECMAScriptParser.Identifier, 0);
};

IdentifierNameContext.prototype.reservedWord = function() {
    return this.getTypedRuleContext(ReservedWordContext,0);
};

IdentifierNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterIdentifierName(this);
	}
};

IdentifierNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitIdentifierName(this);
	}
};

IdentifierNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitIdentifierName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.IdentifierNameContext = IdentifierNameContext;

ECMAScriptParser.prototype.identifierName = function() {

    var localctx = new IdentifierNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, ECMAScriptParser.RULE_identifierName);
    try {
        this.state = 596;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 594;
            this.match(ECMAScriptParser.Identifier);
            break;
        case ECMAScriptParser.NullLiteral:
        case ECMAScriptParser.BooleanLiteral:
        case ECMAScriptParser.Break:
        case ECMAScriptParser.Do:
        case ECMAScriptParser.Instanceof:
        case ECMAScriptParser.Typeof:
        case ECMAScriptParser.Case:
        case ECMAScriptParser.Else:
        case ECMAScriptParser.New:
        case ECMAScriptParser.Var:
        case ECMAScriptParser.Catch:
        case ECMAScriptParser.Finally:
        case ECMAScriptParser.Return:
        case ECMAScriptParser.Void:
        case ECMAScriptParser.Continue:
        case ECMAScriptParser.For:
        case ECMAScriptParser.Switch:
        case ECMAScriptParser.While:
        case ECMAScriptParser.Debugger:
        case ECMAScriptParser.Function:
        case ECMAScriptParser.This:
        case ECMAScriptParser.With:
        case ECMAScriptParser.Default:
        case ECMAScriptParser.If:
        case ECMAScriptParser.Throw:
        case ECMAScriptParser.Delete:
        case ECMAScriptParser.In:
        case ECMAScriptParser.Try:
        case ECMAScriptParser.Class:
        case ECMAScriptParser.Enum:
        case ECMAScriptParser.Extends:
        case ECMAScriptParser.Super:
        case ECMAScriptParser.Const:
        case ECMAScriptParser.Export:
        case ECMAScriptParser.Import:
        case ECMAScriptParser.Implements:
        case ECMAScriptParser.Let:
        case ECMAScriptParser.Private:
        case ECMAScriptParser.Public:
        case ECMAScriptParser.Interface:
        case ECMAScriptParser.Package:
        case ECMAScriptParser.Protected:
        case ECMAScriptParser.Static:
        case ECMAScriptParser.Yield:
            this.enterOuterAlt(localctx, 2);
            this.state = 595;
            this.reservedWord();
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
};


function ReservedWordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_reservedWord;
    return this;
}

ReservedWordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReservedWordContext.prototype.constructor = ReservedWordContext;

ReservedWordContext.prototype.keyword = function() {
    return this.getTypedRuleContext(KeywordContext,0);
};

ReservedWordContext.prototype.futureReservedWord = function() {
    return this.getTypedRuleContext(FutureReservedWordContext,0);
};

ReservedWordContext.prototype.NullLiteral = function() {
    return this.getToken(ECMAScriptParser.NullLiteral, 0);
};

ReservedWordContext.prototype.BooleanLiteral = function() {
    return this.getToken(ECMAScriptParser.BooleanLiteral, 0);
};

ReservedWordContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterReservedWord(this);
	}
};

ReservedWordContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitReservedWord(this);
	}
};

ReservedWordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitReservedWord(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.ReservedWordContext = ReservedWordContext;

ECMAScriptParser.prototype.reservedWord = function() {

    var localctx = new ReservedWordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, ECMAScriptParser.RULE_reservedWord);
    var _la = 0; // Token type
    try {
        this.state = 601;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ECMAScriptParser.Break:
        case ECMAScriptParser.Do:
        case ECMAScriptParser.Instanceof:
        case ECMAScriptParser.Typeof:
        case ECMAScriptParser.Case:
        case ECMAScriptParser.Else:
        case ECMAScriptParser.New:
        case ECMAScriptParser.Var:
        case ECMAScriptParser.Catch:
        case ECMAScriptParser.Finally:
        case ECMAScriptParser.Return:
        case ECMAScriptParser.Void:
        case ECMAScriptParser.Continue:
        case ECMAScriptParser.For:
        case ECMAScriptParser.Switch:
        case ECMAScriptParser.While:
        case ECMAScriptParser.Debugger:
        case ECMAScriptParser.Function:
        case ECMAScriptParser.This:
        case ECMAScriptParser.With:
        case ECMAScriptParser.Default:
        case ECMAScriptParser.If:
        case ECMAScriptParser.Throw:
        case ECMAScriptParser.Delete:
        case ECMAScriptParser.In:
        case ECMAScriptParser.Try:
            this.enterOuterAlt(localctx, 1);
            this.state = 598;
            this.keyword();
            break;
        case ECMAScriptParser.Class:
        case ECMAScriptParser.Enum:
        case ECMAScriptParser.Extends:
        case ECMAScriptParser.Super:
        case ECMAScriptParser.Const:
        case ECMAScriptParser.Export:
        case ECMAScriptParser.Import:
        case ECMAScriptParser.Implements:
        case ECMAScriptParser.Let:
        case ECMAScriptParser.Private:
        case ECMAScriptParser.Public:
        case ECMAScriptParser.Interface:
        case ECMAScriptParser.Package:
        case ECMAScriptParser.Protected:
        case ECMAScriptParser.Static:
        case ECMAScriptParser.Yield:
            this.enterOuterAlt(localctx, 2);
            this.state = 599;
            this.futureReservedWord();
            break;
        case ECMAScriptParser.NullLiteral:
        case ECMAScriptParser.BooleanLiteral:
            this.enterOuterAlt(localctx, 3);
            this.state = 600;
            _la = this._input.LA(1);
            if(!(_la===ECMAScriptParser.NullLiteral || _la===ECMAScriptParser.BooleanLiteral)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
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
};


function KeywordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_keyword;
    return this;
}

KeywordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeywordContext.prototype.constructor = KeywordContext;

KeywordContext.prototype.Break = function() {
    return this.getToken(ECMAScriptParser.Break, 0);
};

KeywordContext.prototype.Do = function() {
    return this.getToken(ECMAScriptParser.Do, 0);
};

KeywordContext.prototype.Instanceof = function() {
    return this.getToken(ECMAScriptParser.Instanceof, 0);
};

KeywordContext.prototype.Typeof = function() {
    return this.getToken(ECMAScriptParser.Typeof, 0);
};

KeywordContext.prototype.Case = function() {
    return this.getToken(ECMAScriptParser.Case, 0);
};

KeywordContext.prototype.Else = function() {
    return this.getToken(ECMAScriptParser.Else, 0);
};

KeywordContext.prototype.New = function() {
    return this.getToken(ECMAScriptParser.New, 0);
};

KeywordContext.prototype.Var = function() {
    return this.getToken(ECMAScriptParser.Var, 0);
};

KeywordContext.prototype.Catch = function() {
    return this.getToken(ECMAScriptParser.Catch, 0);
};

KeywordContext.prototype.Finally = function() {
    return this.getToken(ECMAScriptParser.Finally, 0);
};

KeywordContext.prototype.Return = function() {
    return this.getToken(ECMAScriptParser.Return, 0);
};

KeywordContext.prototype.Void = function() {
    return this.getToken(ECMAScriptParser.Void, 0);
};

KeywordContext.prototype.Continue = function() {
    return this.getToken(ECMAScriptParser.Continue, 0);
};

KeywordContext.prototype.For = function() {
    return this.getToken(ECMAScriptParser.For, 0);
};

KeywordContext.prototype.Switch = function() {
    return this.getToken(ECMAScriptParser.Switch, 0);
};

KeywordContext.prototype.While = function() {
    return this.getToken(ECMAScriptParser.While, 0);
};

KeywordContext.prototype.Debugger = function() {
    return this.getToken(ECMAScriptParser.Debugger, 0);
};

KeywordContext.prototype.Function = function() {
    return this.getToken(ECMAScriptParser.Function, 0);
};

KeywordContext.prototype.This = function() {
    return this.getToken(ECMAScriptParser.This, 0);
};

KeywordContext.prototype.With = function() {
    return this.getToken(ECMAScriptParser.With, 0);
};

KeywordContext.prototype.Default = function() {
    return this.getToken(ECMAScriptParser.Default, 0);
};

KeywordContext.prototype.If = function() {
    return this.getToken(ECMAScriptParser.If, 0);
};

KeywordContext.prototype.Throw = function() {
    return this.getToken(ECMAScriptParser.Throw, 0);
};

KeywordContext.prototype.Delete = function() {
    return this.getToken(ECMAScriptParser.Delete, 0);
};

KeywordContext.prototype.In = function() {
    return this.getToken(ECMAScriptParser.In, 0);
};

KeywordContext.prototype.Try = function() {
    return this.getToken(ECMAScriptParser.Try, 0);
};

KeywordContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterKeyword(this);
	}
};

KeywordContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitKeyword(this);
	}
};

KeywordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitKeyword(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.KeywordContext = KeywordContext;

ECMAScriptParser.prototype.keyword = function() {

    var localctx = new KeywordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, ECMAScriptParser.RULE_keyword);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 603;
        _la = this._input.LA(1);
        if(!(((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (ECMAScriptParser.Break - 56)) | (1 << (ECMAScriptParser.Do - 56)) | (1 << (ECMAScriptParser.Instanceof - 56)) | (1 << (ECMAScriptParser.Typeof - 56)) | (1 << (ECMAScriptParser.Case - 56)) | (1 << (ECMAScriptParser.Else - 56)) | (1 << (ECMAScriptParser.New - 56)) | (1 << (ECMAScriptParser.Var - 56)) | (1 << (ECMAScriptParser.Catch - 56)) | (1 << (ECMAScriptParser.Finally - 56)) | (1 << (ECMAScriptParser.Return - 56)) | (1 << (ECMAScriptParser.Void - 56)) | (1 << (ECMAScriptParser.Continue - 56)) | (1 << (ECMAScriptParser.For - 56)) | (1 << (ECMAScriptParser.Switch - 56)) | (1 << (ECMAScriptParser.While - 56)) | (1 << (ECMAScriptParser.Debugger - 56)) | (1 << (ECMAScriptParser.Function - 56)) | (1 << (ECMAScriptParser.This - 56)) | (1 << (ECMAScriptParser.With - 56)) | (1 << (ECMAScriptParser.Default - 56)) | (1 << (ECMAScriptParser.If - 56)) | (1 << (ECMAScriptParser.Throw - 56)) | (1 << (ECMAScriptParser.Delete - 56)) | (1 << (ECMAScriptParser.In - 56)) | (1 << (ECMAScriptParser.Try - 56)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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
};


function FutureReservedWordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_futureReservedWord;
    return this;
}

FutureReservedWordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FutureReservedWordContext.prototype.constructor = FutureReservedWordContext;

FutureReservedWordContext.prototype.Class = function() {
    return this.getToken(ECMAScriptParser.Class, 0);
};

FutureReservedWordContext.prototype.Enum = function() {
    return this.getToken(ECMAScriptParser.Enum, 0);
};

FutureReservedWordContext.prototype.Extends = function() {
    return this.getToken(ECMAScriptParser.Extends, 0);
};

FutureReservedWordContext.prototype.Super = function() {
    return this.getToken(ECMAScriptParser.Super, 0);
};

FutureReservedWordContext.prototype.Const = function() {
    return this.getToken(ECMAScriptParser.Const, 0);
};

FutureReservedWordContext.prototype.Export = function() {
    return this.getToken(ECMAScriptParser.Export, 0);
};

FutureReservedWordContext.prototype.Import = function() {
    return this.getToken(ECMAScriptParser.Import, 0);
};

FutureReservedWordContext.prototype.Implements = function() {
    return this.getToken(ECMAScriptParser.Implements, 0);
};

FutureReservedWordContext.prototype.Let = function() {
    return this.getToken(ECMAScriptParser.Let, 0);
};

FutureReservedWordContext.prototype.Private = function() {
    return this.getToken(ECMAScriptParser.Private, 0);
};

FutureReservedWordContext.prototype.Public = function() {
    return this.getToken(ECMAScriptParser.Public, 0);
};

FutureReservedWordContext.prototype.Interface = function() {
    return this.getToken(ECMAScriptParser.Interface, 0);
};

FutureReservedWordContext.prototype.Package = function() {
    return this.getToken(ECMAScriptParser.Package, 0);
};

FutureReservedWordContext.prototype.Protected = function() {
    return this.getToken(ECMAScriptParser.Protected, 0);
};

FutureReservedWordContext.prototype.Static = function() {
    return this.getToken(ECMAScriptParser.Static, 0);
};

FutureReservedWordContext.prototype.Yield = function() {
    return this.getToken(ECMAScriptParser.Yield, 0);
};

FutureReservedWordContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterFutureReservedWord(this);
	}
};

FutureReservedWordContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitFutureReservedWord(this);
	}
};

FutureReservedWordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitFutureReservedWord(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.FutureReservedWordContext = FutureReservedWordContext;

ECMAScriptParser.prototype.futureReservedWord = function() {

    var localctx = new FutureReservedWordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, ECMAScriptParser.RULE_futureReservedWord);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 605;
        _la = this._input.LA(1);
        if(!(((((_la - 82)) & ~0x1f) == 0 && ((1 << (_la - 82)) & ((1 << (ECMAScriptParser.Class - 82)) | (1 << (ECMAScriptParser.Enum - 82)) | (1 << (ECMAScriptParser.Extends - 82)) | (1 << (ECMAScriptParser.Super - 82)) | (1 << (ECMAScriptParser.Const - 82)) | (1 << (ECMAScriptParser.Export - 82)) | (1 << (ECMAScriptParser.Import - 82)) | (1 << (ECMAScriptParser.Implements - 82)) | (1 << (ECMAScriptParser.Let - 82)) | (1 << (ECMAScriptParser.Private - 82)) | (1 << (ECMAScriptParser.Public - 82)) | (1 << (ECMAScriptParser.Interface - 82)) | (1 << (ECMAScriptParser.Package - 82)) | (1 << (ECMAScriptParser.Protected - 82)) | (1 << (ECMAScriptParser.Static - 82)) | (1 << (ECMAScriptParser.Yield - 82)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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
};


function GetterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_getter;
    return this;
}

GetterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GetterContext.prototype.constructor = GetterContext;

GetterContext.prototype.Identifier = function() {
    return this.getToken(ECMAScriptParser.Identifier, 0);
};

GetterContext.prototype.propertyName = function() {
    return this.getTypedRuleContext(PropertyNameContext,0);
};

GetterContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterGetter(this);
	}
};

GetterContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitGetter(this);
	}
};

GetterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitGetter(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.GetterContext = GetterContext;

ECMAScriptParser.prototype.getter = function() {

    var localctx = new GetterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, ECMAScriptParser.RULE_getter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 607;
        if (!( this._input.LT(1).text.startsWith("get"))) {
            throw new antlr4.error.FailedPredicateException(this, "this._input.LT(1).text.startsWith(\"get\")");
        }
        this.state = 608;
        this.match(ECMAScriptParser.Identifier);
        this.state = 609;
        this.propertyName();
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
};


function SetterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_setter;
    return this;
}

SetterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetterContext.prototype.constructor = SetterContext;

SetterContext.prototype.Identifier = function() {
    return this.getToken(ECMAScriptParser.Identifier, 0);
};

SetterContext.prototype.propertyName = function() {
    return this.getTypedRuleContext(PropertyNameContext,0);
};

SetterContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterSetter(this);
	}
};

SetterContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitSetter(this);
	}
};

SetterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitSetter(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.SetterContext = SetterContext;

ECMAScriptParser.prototype.setter = function() {

    var localctx = new SetterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, ECMAScriptParser.RULE_setter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 611;
        if (!( this._input.LT(1).text.startsWith("set"))) {
            throw new antlr4.error.FailedPredicateException(this, "this._input.LT(1).text.startsWith(\"set\")");
        }
        this.state = 612;
        this.match(ECMAScriptParser.Identifier);
        this.state = 613;
        this.propertyName();
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
};


function EosContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_eos;
    return this;
}

EosContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EosContext.prototype.constructor = EosContext;

EosContext.prototype.SemiColon = function() {
    return this.getToken(ECMAScriptParser.SemiColon, 0);
};

EosContext.prototype.EOF = function() {
    return this.getToken(ECMAScriptParser.EOF, 0);
};

EosContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterEos(this);
	}
};

EosContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitEos(this);
	}
};

EosContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitEos(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.EosContext = EosContext;

ECMAScriptParser.prototype.eos = function() {

    var localctx = new EosContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, ECMAScriptParser.RULE_eos);
    try {
        this.state = 619;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 615;
            this.match(ECMAScriptParser.SemiColon);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 616;
            this.match(ECMAScriptParser.EOF);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 617;
            if (!( this.lineTerminatorAhead())) {
                throw new antlr4.error.FailedPredicateException(this, "this.lineTerminatorAhead()");
            }
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 618;
            if (!( this._input.LT(1).type == ECMAScriptParser.CloseBrace)) {
                throw new antlr4.error.FailedPredicateException(this, "this._input.LT(1).type == ECMAScriptParser.CloseBrace");
            }
            break;

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
};


function EofContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ECMAScriptParser.RULE_eof;
    return this;
}

EofContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EofContext.prototype.constructor = EofContext;

EofContext.prototype.EOF = function() {
    return this.getToken(ECMAScriptParser.EOF, 0);
};

EofContext.prototype.enterRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.enterEof(this);
	}
};

EofContext.prototype.exitRule = function(listener) {
    if(listener instanceof ECMAScriptListener ) {
        listener.exitEof(this);
	}
};

EofContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ECMAScriptVisitor ) {
        return visitor.visitEof(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ECMAScriptParser.EofContext = EofContext;

ECMAScriptParser.prototype.eof = function() {

    var localctx = new EofContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, ECMAScriptParser.RULE_eof);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 621;
        this.match(ECMAScriptParser.EOF);
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
};


ECMAScriptParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 2:
			return this.sourceElement_sempred(localctx, predIndex);
	case 3:
			return this.statement_sempred(localctx, predIndex);
	case 14:
			return this.continueStatement_sempred(localctx, predIndex);
	case 15:
			return this.breakStatement_sempred(localctx, predIndex);
	case 16:
			return this.returnStatement_sempred(localctx, predIndex);
	case 24:
			return this.throwStatement_sempred(localctx, predIndex);
	case 43:
			return this.singleExpression_sempred(localctx, predIndex);
	case 51:
			return this.getter_sempred(localctx, predIndex);
	case 52:
			return this.setter_sempred(localctx, predIndex);
	case 53:
			return this.eos_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ECMAScriptParser.prototype.sourceElement_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this._input.LA(1).type != ECMAScriptParser.Function;
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScriptParser.prototype.statement_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this._input.LA(1).type != ECMAScriptParser.OpenBrace;
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScriptParser.prototype.continueStatement_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return !this.here(ECMAScriptParser.LineTerminator);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScriptParser.prototype.breakStatement_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 3:
			return !this.here(ECMAScriptParser.LineTerminator);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScriptParser.prototype.returnStatement_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 4:
			return !this.here(ECMAScriptParser.LineTerminator);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScriptParser.prototype.throwStatement_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 5:
			return !this.here(ECMAScriptParser.LineTerminator);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScriptParser.prototype.singleExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 6:
			return this.precpred(this._ctx, 21);
		case 7:
			return this.precpred(this._ctx, 20);
		case 8:
			return this.precpred(this._ctx, 19);
		case 9:
			return this.precpred(this._ctx, 18);
		case 10:
			return this.precpred(this._ctx, 17);
		case 11:
			return this.precpred(this._ctx, 16);
		case 12:
			return this.precpred(this._ctx, 15);
		case 13:
			return this.precpred(this._ctx, 14);
		case 14:
			return this.precpred(this._ctx, 13);
		case 15:
			return this.precpred(this._ctx, 12);
		case 16:
			return this.precpred(this._ctx, 11);
		case 17:
			return this.precpred(this._ctx, 10);
		case 18:
			return this.precpred(this._ctx, 9);
		case 19:
			return this.precpred(this._ctx, 36);
		case 20:
			return this.precpred(this._ctx, 35);
		case 21:
			return this.precpred(this._ctx, 34);
		case 22:
			return this.precpred(this._ctx, 32);
		case 23:
			return !this.here(ECMAScriptParser.LineTerminator);
		case 24:
			return this.precpred(this._ctx, 31);
		case 25:
			return !this.here(ECMAScriptParser.LineTerminator);
		case 26:
			return this.precpred(this._ctx, 8);
		case 27:
			return this.precpred(this._ctx, 7);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScriptParser.prototype.getter_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 28:
			return this._input.LT(1).text.startsWith("get");
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScriptParser.prototype.setter_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 29:
			return this._input.LT(1).text.startsWith("set");
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ECMAScriptParser.prototype.eos_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 30:
			return this.lineTerminatorAhead();
		case 31:
			return this._input.LT(1).type == ECMAScriptParser.CloseBrace;
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ECMAScriptParser = ECMAScriptParser;
