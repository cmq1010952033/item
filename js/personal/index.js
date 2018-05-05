webpackJsonp([0,10,14,15,16,17,19,20,25,27,28],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*************
 * 
 * 
 * @ 将所有的url 放在这个js 文件中 ，便于管理
 * 
 * 
 * 
 *************/
//用来存储头部 url 的对象

var headerObj = {
      login: '/view/login/index.html', //登陆地址
      register: 'javascript:;', // 注册地址
      ctiy: 'javascript:;', //切换城市
      order: 'javascript:;', //订单地址
      cart: '/view/cart/index.html', //购物车地址
      personal: '/view/personal/index.html', //个人中心 
      vip: '/view/personal/index.html', //vip 客户中心
      phoneShop: 'javascript:;' //手机商城
};
//用来储存 Nav url 的对象
var navObj = {
      index: '/view/index.html', //首页
      zfcg: 'javascript:void(0)', //政府采购
      qycg: 'javascript:void(0)', //企业采购
      cjcg: 'javascript:void(0)', //场景采购
      wyyx: '/view/wy/index.html', //网易严选
      abuot: '/view/enterprise/index.html', //关于我们
      jmzs: 'javascript:void(0)' //加盟招商
};
// 页面内用到的 url
var indexObj = {
      classlist: '/view/classlist/index.html', //商品列表
      details: '/view/details/index.html' //商品详情

};
sessionStorage.setItem('headerObj', JSON.stringify(headerObj));
sessionStorage.setItem('navObj', JSON.stringify(navObj));
sessionStorage.setItem('indexObj', JSON.stringify(indexObj));

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 *  base64.js
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */
;(function (global, factory) {
     true
        ? module.exports = factory(global)
        : typeof define === 'function' && define.amd
        ? define(factory) : factory(global)
}((
    typeof self !== 'undefined' ? self
        : typeof window !== 'undefined' ? window
        : typeof global !== 'undefined' ? global
: this
), function(global) {
    'use strict';
    // existing version for noConflict()
    var _Base64 = global.Base64;
    var version = "2.4.3";
    // if node.js, we use Buffer
    var buffer;
    if (typeof module !== 'undefined' && module.exports) {
        try {
            buffer = __webpack_require__(4).Buffer;
        } catch (err) {}
    }
    // constants
    var b64chars
        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var b64tab = function(bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
        return t;
    }(b64chars);
    var fromCharCode = String.fromCharCode;
    // encoder stuff
    var cb_utob = function(c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c
                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
                                + fromCharCode(0x80 | (cc & 0x3f)))
                : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
                   + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                   + fromCharCode(0x80 | ( cc         & 0x3f)));
        } else {
            var cc = 0x10000
                + (c.charCodeAt(0) - 0xD800) * 0x400
                + (c.charCodeAt(1) - 0xDC00);
            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
                    + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                    + fromCharCode(0x80 | ( cc         & 0x3f)));
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    var utob = function(u) {
        return u.replace(re_utob, cb_utob);
    };
    var cb_encode = function(ccc) {
        var padlen = [0, 2, 1][ccc.length % 3],
        ord = ccc.charCodeAt(0) << 16
            | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
            | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
        chars = [
            b64chars.charAt( ord >>> 18),
            b64chars.charAt((ord >>> 12) & 63),
            padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
            padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
        ];
        return chars.join('');
    };
    var btoa = global.btoa ? function(b) {
        return global.btoa(b);
    } : function(b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };
    var _encode = buffer ?
        buffer.from && buffer.from !== Uint8Array.from ? function (u) {
            return (u.constructor === buffer.constructor ? u : buffer.from(u))
                .toString('base64')
        }
        :  function (u) {
            return (u.constructor === buffer.constructor ? u : new  buffer(u))
                .toString('base64')
        }
        : function (u) { return btoa(utob(u)) }
    ;
    var encode = function(u, urisafe) {
        return !urisafe
            ? _encode(String(u))
            : _encode(String(u)).replace(/[+\/]/g, function(m0) {
                return m0 == '+' ? '-' : '_';
            }).replace(/=/g, '');
    };
    var encodeURI = function(u) { return encode(u, true) };
    // decoder stuff
    var re_btou = new RegExp([
        '[\xC0-\xDF][\x80-\xBF]',
        '[\xE0-\xEF][\x80-\xBF]{2}',
        '[\xF0-\xF7][\x80-\xBF]{3}'
    ].join('|'), 'g');
    var cb_btou = function(cccc) {
        switch(cccc.length) {
        case 4:
            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                |    ((0x3f & cccc.charCodeAt(1)) << 12)
                |    ((0x3f & cccc.charCodeAt(2)) <<  6)
                |     (0x3f & cccc.charCodeAt(3)),
            offset = cp - 0x10000;
            return (fromCharCode((offset  >>> 10) + 0xD800)
                    + fromCharCode((offset & 0x3FF) + 0xDC00));
        case 3:
            return fromCharCode(
                ((0x0f & cccc.charCodeAt(0)) << 12)
                    | ((0x3f & cccc.charCodeAt(1)) << 6)
                    |  (0x3f & cccc.charCodeAt(2))
            );
        default:
            return  fromCharCode(
                ((0x1f & cccc.charCodeAt(0)) << 6)
                    |  (0x3f & cccc.charCodeAt(1))
            );
        }
    };
    var btou = function(b) {
        return b.replace(re_btou, cb_btou);
    };
    var cb_decode = function(cccc) {
        var len = cccc.length,
        padlen = len % 4,
        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
            | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
            | (len > 2 ? b64tab[cccc.charAt(2)] <<  6 : 0)
            | (len > 3 ? b64tab[cccc.charAt(3)]       : 0),
        chars = [
            fromCharCode( n >>> 16),
            fromCharCode((n >>>  8) & 0xff),
            fromCharCode( n         & 0xff)
        ];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join('');
    };
    var atob = global.atob ? function(a) {
        return global.atob(a);
    } : function(a){
        return a.replace(/[\s\S]{1,4}/g, cb_decode);
    };
    var _decode = buffer ?
        buffer.from && buffer.from !== Uint8Array.from ? function(a) {
            return (a.constructor === buffer.constructor
                    ? a : buffer.from(a, 'base64')).toString();
        }
        : function(a) {
            return (a.constructor === buffer.constructor
                    ? a : new buffer(a, 'base64')).toString();
        }
        : function(a) { return btou(atob(a)) };
    var decode = function(a){
        return _decode(
            String(a).replace(/[-_]/g, function(m0) { return m0 == '-' ? '+' : '/' })
                .replace(/[^A-Za-z0-9\+\/]/g, '')
        );
    };
    var noConflict = function() {
        var Base64 = global.Base64;
        global.Base64 = _Base64;
        return Base64;
    };
    // export Base64
    global.Base64 = {
        VERSION: version,
        atob: atob,
        btoa: btoa,
        fromBase64: decode,
        toBase64: encode,
        utob: utob,
        encode: encode,
        encodeURI: encodeURI,
        btou: btou,
        decode: decode,
        noConflict: noConflict
    };
    // if ES5 is available, make Base64.extendString() available
    if (typeof Object.defineProperty === 'function') {
        var noEnum = function(v){
            return {value:v,enumerable:false,writable:true,configurable:true};
        };
        global.Base64.extendString = function () {
            Object.defineProperty(
                String.prototype, 'fromBase64', noEnum(function () {
                    return decode(this)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64', noEnum(function (urisafe) {
                    return encode(this, urisafe)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64URI', noEnum(function () {
                    return encode(this, true)
                }));
        };
    }
    //
    // export Base64 to the namespace
    //
    if (global['Meteor']) { // Meteor.js
        Base64 = global.Base64;
    }
    // module.exports and AMD are mutually exclusive.
    // module.exports has precedence.
    if (typeof module !== 'undefined' && module.exports) {
        module.exports.Base64 = global.Base64;
    }
    else if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){ return global.Base64 }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    // that's it!
    return {Base64: global.Base64}
}));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(5)
var ieee754 = __webpack_require__(6)
var isArray = __webpack_require__(7)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function (window) {
  var svgSprite = '<svg><symbol id="icon-unie637" viewBox="0 0 1024 1024"><path d="M915.008 326.144l-806.016 0c-17.152 0-31.008 13.856-31.008 31.008l0 279.008c0 17.152 13.856 31.008 31.008 31.008l31.008 0 0 310.016c0 17.152 13.856 31.008 31.008 31.008l682.016 0c17.152 0 31.008-13.856 31.008-31.008l0-310.016 31.008 0c17.152 0 31.008-13.856 31.008-31.008l0-279.008c0-17.152-13.856-31.008-31.008-31.008zM450.016 915.168c0 17.152-13.856 31.008-31.008 31.008l-186.016 0c-17.152 0-31.008-13.856-31.008-31.008l0-248c0-17.152 13.856-31.008 31.008-31.008l186.016 0c17.152 0 31.008 13.856 31.008 31.008l0 248zM450.016 543.168c0 17.152-13.856 31.008-31.008 31.008l-248 0c-17.152 0-31.008-13.856-31.008-31.008l0-124c0-17.152 13.856-31.008 31.008-31.008l248 0c17.152 0 31.008 13.856 31.008 31.008l0 124zM822.016 915.168c0 17.152-13.856 31.008-31.008 31.008l-186.016 0c-17.152 0-31.008-13.856-31.008-31.008l0-248c0-17.152 13.856-31.008 31.008-31.008l186.016 0c17.152 0 31.008 13.856 31.008 31.008l0 248zM884 543.168c0 17.152-13.856 31.008-31.008 31.008l-248 0c-17.152 0-31.008-13.856-31.008-31.008l0-124c0-17.152 13.856-31.008 31.008-31.008l248 0c17.152 0 31.008 13.856 31.008 31.008l0 124zM374.336 326.112l285.184 0c48.896-35.072 95.104-80.704 100.608-130.432 2.656-24.288-2.528-59.84-42.624-91.488-22.24-17.568-44.8-26.464-66.976-26.464-70.752 0-110.752 86.752-132.416 164.224-25.856-98.784-75.776-225.824-161.472-225.824-25.024 0-49.92 10.816-74.112 32.192-47.744 42.208-52.416 86.112-47.968 115.52 10.016 65.696 76.096 122.144 139.776 162.272zM650.496 152.16c6.848 0 15.68 4.096 25.504 11.904 16 12.576 15.104 20.384 14.848 22.976-2.976 27.136-53.856 69.76-113.184 104.928 17.44-75.04 45.984-139.808 72.832-139.808zM327.04 105.6c7.776-6.88 19.264-15.072 29.568-15.072 38.368 0 77.856 100.736 100.832 198.72-72.48-38.624-147.392-93.408-154.112-137.376-0.896-6.08-3.392-22.336 23.68-46.272z"  ></path></symbol><symbol id="icon-saoma" viewBox="0 0 1024 1024"><path d="M928 544 96 544c-17.664 0-32-14.336-32-32s14.336-32 32-32l832 0c17.696 0 32 14.336 32 32S945.696 544 928 544zM832 928l-192 0c-17.696 0-32-14.304-32-32s14.304-32 32-32l192 0c17.664 0 32-14.336 32-32l0-160c0-17.696 14.304-32 32-32s32 14.304 32 32l0 160C928 884.928 884.928 928 832 928zM352 928 192 928c-52.928 0-96-43.072-96-96l0-160c0-17.696 14.336-32 32-32s32 14.304 32 32l0 160c0 17.664 14.368 32 32 32l160 0c17.664 0 32 14.304 32 32S369.664 928 352 928zM128 384c-17.664 0-32-14.336-32-32L96 192c0-52.928 43.072-96 96-96l160 0c17.664 0 32 14.336 32 32s-14.336 32-32 32L192 160C174.368 160 160 174.368 160 192l0 160C160 369.664 145.664 384 128 384zM896 384c-17.696 0-32-14.336-32-32L864 192c0-17.632-14.336-32-32-32l-192 0c-17.696 0-32-14.336-32-32s14.304-32 32-32l192 0c52.928 0 96 43.072 96 96l0 160C928 369.664 913.696 384 896 384z"  ></path></symbol><symbol id="icon-iconset0119" viewBox="0 0 1024 1024"><path d="M541.866667 678.4 290.133333 678.4c-12.8 0-21.333333 8.533333-21.333333 21.333333 0 12.8 8.533333 21.333333 21.333333 21.333333l251.733333 0c12.8 0 21.333333-8.533333 21.333333-21.333333C563.2 686.933333 554.666667 678.4 541.866667 678.4zM460.8 802.133333 290.133333 802.133333c-12.8 0-21.333333 8.533333-21.333333 21.333333 0 12.8 8.533333 21.333333 21.333333 21.333333l166.4 0c12.8 0 21.333333-8.533333 21.333333-21.333333C477.866667 814.933333 469.333333 802.133333 460.8 802.133333zM290.133333 469.333333l85.333333 0c12.8 0 21.333333-8.533333 21.333333-21.333333 0-12.8-8.533333-21.333333-21.333333-21.333333l-85.333333 0c-12.8 0-21.333333 8.533333-21.333333 21.333333C273.066667 460.8 281.6 469.333333 290.133333 469.333333zM750.933333 55.466667l-311.466667 0c-46.933333 0-85.333333 38.4-85.333333 85.333333l0 64c0 12.8 8.533333 21.333333 21.333333 21.333333s21.333333-8.533333 21.333333-21.333333L396.8 136.533333c0-21.333333 17.066667-42.666667 42.666667-42.666667l251.733333 0 0 123.733333c0 21.333333 17.066667 42.666667 42.666667 42.666667L853.333333 260.266667l0 418.133333c0 21.333333-17.066667 42.666667-42.666667 42.666667l-64 0c-12.8 0-21.333333 8.533333-21.333333 21.333333 0 12.8 8.533333 21.333333 21.333333 21.333333L810.666667 763.733333c46.933333 0 85.333333-38.4 85.333333-85.333333L896 221.866667 750.933333 55.466667zM729.6 221.866667 729.6 98.133333l106.666667 123.733333L729.6 221.866667zM230.4 260.266667c-46.933333 0-85.333333 38.4-85.333333 85.333333l0 541.866667c0 46.933333 38.4 85.333333 85.333333 85.333333l375.466667 0c46.933333 0 85.333333-38.4 85.333333-85.333333L691.2 426.666667l-145.066667-166.4L230.4 260.266667zM644.266667 887.466667c0 21.333333-17.066667 42.666667-42.666667 42.666667L230.4 930.133333c-21.333333 0-42.666667-17.066667-42.666667-42.666667L187.733333 345.6c0-21.333333 17.066667-42.666667 42.666667-42.666667l251.733333 0L482.133333 426.666667c0 21.333333 17.066667 42.666667 42.666667 42.666667l123.733333 0L648.533333 887.466667zM520.533333 426.666667 520.533333 307.2l106.666667 123.733333L520.533333 430.933333zM273.066667 576c0 12.8 8.533333 21.333333 21.333333 21.333333l251.733333 0c12.8 0 21.333333-8.533333 21.333333-21.333333 0-12.8-8.533333-21.333333-21.333333-21.333333L290.133333 554.666667C281.6 554.666667 273.066667 563.2 273.066667 576z"  ></path></symbol><symbol id="icon-top" viewBox="0 0 1024 1024"><path d="M528.968975 162.41916c-4.493338-4.493338-10.600429-7.045463-16.969487-7.045463-6.370081 0-12.43317 2.552126-16.97051 7.045463L320.358797 337.024873c-9.335622 9.401114-9.335622 24.559349 0 33.938973 9.422603 9.358135 24.604374 9.358135 33.938973 0l157.700695-157.700695 157.699672 157.700695c4.668323 4.64581 10.818393 6.978948 17.013489 6.978948 6.064113 0 12.258185-2.333138 16.926508-6.978948 9.335622-9.379625 9.335622-24.537859 0-33.938973L528.968975 162.41916 528.968975 162.41916zM528.968975 162.41916"  ></path><path d="M65.290517 606.881974l102.55984 0L167.850357 868.626303l47.89994 0L215.750297 606.881974l102.55984 0 0-47.942919L65.290517 558.939055 65.290517 606.881974zM65.290517 606.881974"  ></path><path d="M582.713017 558.939055l-127.033231 0c-15.311731 0-30.667463 5.866614-42.315758 17.537422-11.778254 11.735275-17.624403 27.047006-17.624403 42.380226l0 189.873442c0 15.312754 5.846148 30.645974 17.624403 42.35976 11.648294 11.691273 27.004027 17.537422 42.315758 17.537422l127.033231 0c15.22475 0 30.624485-5.846148 42.35976-17.537422 11.691273-11.712763 17.536398-27.047006 17.536398-42.35976L642.609175 618.856703c0-15.33322-5.845125-30.644951-17.536398-42.380226C613.337501 564.806693 597.937766 558.939055 582.713017 558.939055L582.713017 558.939055zM594.666256 808.730145c0 2.26867-0.610914 5.54018-3.533476 8.463766-2.835581 2.87856-6.195096 3.489474-8.419763 3.489474l-127.033231 0c-2.26867 0-5.584182-0.610914-8.463766-3.489474-2.87856-2.922563-3.489474-6.195096-3.489474-8.463766L443.726545 618.856703c0-2.26867 0.610914-5.54018 3.489474-8.463766 2.87856-2.921539 6.195096-3.511987 8.463766-3.511987l127.033231 0c2.224668 0 5.584182 0.589424 8.419763 3.511987 2.922563 2.922563 3.533476 6.195096 3.533476 8.463766L594.666256 808.730145 594.666256 808.730145zM594.666256 808.730145"  ></path><path d="M941.21504 576.476477c-11.779278-11.669784-27.091008-17.537422-42.402739-17.537422L734.481605 558.939055 734.481605 868.626303l47.898917 0L782.380522 732.802872l116.432803 0c15.311731 0 30.623461-5.845125 42.402739-17.557888 11.647271-11.691273 17.493419-27.025517 17.493419-42.337247l0-54.05001C958.70846 603.523483 952.862311 588.211752 941.21504 576.476477L941.21504 576.476477zM910.765541 672.906713c0 2.224668-0.610914 5.54018-3.490497 8.463766-2.921539 2.87856-6.238075 3.489474-8.462742 3.489474L782.380522 684.859953l0-77.977979 116.432803 0c2.224668 0 5.54018 0.589424 8.462742 3.511987 2.879584 2.922563 3.490497 6.195096 3.490497 8.463766L910.766564 672.906713 910.765541 672.906713zM910.765541 672.906713"  ></path></symbol><symbol id="icon-geren11" viewBox="0 0 1024 1024"><path d="M959.36 920.96c-15.36-181.76-139.52-332.16-307.84-386.56 70.4-45.44 117.12-124.16 117.12-214.4 0-141.44-115.2-256-256.64-256C369.92 64 255.36 178.56 255.36 320c0 90.24 46.72 168.96 117.12 214.4-168.32 54.4-292.48 204.8-307.84 386.56 0 3.2-0.64 5.76 0 10.24C65.92 947.2 80 960 96 960 113.92 960 128 945.28 128 928 144.64 730.24 310.4 576 512 576s366.72 154.24 384 352c0 17.28 14.08 32 32 32 16 0 30.08-12.8 31.36-28.8C960 926.72 959.36 924.16 959.36 920.96zM319.36 320c0-106.24 86.4-192 192.64-192 106.24 0 192.64 85.76 192.64 192 0 106.24-86.4 192-192.64 192C405.76 512 319.36 426.24 319.36 320z"  ></path></symbol><symbol id="icon-erji" viewBox="0 0 1024 1024"><path d="M893.456828 709.055005"  ></path><path d="M491.889987 337.939709"  ></path><path d="M568.154951 338.993714"  ></path><path d="M973.749526 574.340837c-0.425695-242.50515-198.176548-439.664531-443.663612-439.664531-245.74903 0-448.64609 197.576891-448.64609 440.438151 0 3.202948-0.906649 6.203282-0.906649 8.92016L80.533175 808.913317c0 30.477129 35.526121 46.862307 72.126714 46.862307l57.030901 0c33.196053 0 59.130725-13.405311 59.130725-46.862307L268.821515 587.894528c0-31.408337-24.419156-67.76436-59.130725-67.76436l-67.517743 0c-3.701299 0-7.353478 3.789303-10.915607 4.603855 23.671119-197.62294 194.340173-349.778338 400.824945-349.778338 207.29523 0 378.521986 152.522766 401.124773 351.264179-6.716982-2.273786-13.764492-6.089695-20.913309-6.089695l-67.517743 0c-28.111245 0-61.231573 31.614022-61.231573 59.007929l0 229.773174c0 30.477129 35.117822 46.862307 71.718415 46.862307l57.030901 0c33.196053 0 59.539025-13.405311 59.539025-46.862307L971.832873 587.894528C971.832873 583.307046 975.054241 578.769706 973.749526 574.340837zM142.173047 562.085722l67.517743 0c13.216 0 17.175171 19.827581 17.175171 25.808806l0 221.017766c0 3.942799-2.397606 4.906753-17.175171 4.906753l-57.030901 0c-11.649318 0-30.17116 1.11438-30.17116-4.906753l0-229.762941C122.488729 575.963801 136.561235 562.085722 142.173047 562.085722zM929.877319 808.912293c0 3.942799-2.805906 4.906753-17.58347 4.906753l-57.030901 0c-11.649318 0-29.762861 1.11438-29.762861-4.906753l0-229.762941c0-3.184529 13.664208-17.062608 19.276019-17.062608l67.517743 0c13.216 0 17.58347 19.827581 17.58347 25.808806L929.877319 808.912293 929.877319 808.912293z"  ></path></symbol><symbol id="icon-weibiaoti526" viewBox="0 0 1024 1024"><path d="M243.9475 742.963279c-2.434445 0-5.195326 0-7.954159 0-29.636994 0-59.276035 0.027629-88.912006-0.013303-14.359033-0.020466-19.608593-5.256724-19.61371-19.545148-0.021489-61.5928-0.084934-123.18867 0.017396-184.78147 0.081864-49.595558 37.037545-87.599104 86.7252-89.25379 9.974166-0.330528 19.96982-0.048095 30.797423-0.048095 0-3.817955 0-6.831592 0-9.845229-0.001023-78.346369-0.010233-156.690692 0.00307-235.036038 0.004093-31.232328 17.641799-49.0266 48.705282-49.034786 99.993388-0.024559 199.9878-0.176009 299.980165 0.096191 31.490202 0.085958 58.867736 11.54801 81.412195 33.609469 21.918195 21.447475 43.593867 43.149752 65.065901 65.044412 21.900799 22.327518 33.123398 49.502437 33.58184 80.665181 0.51677 35.040051 0.119727 70.097498 0.119727 105.144712 0 2.786463 0 5.572926 0 9.302877 10.082636 0 19.528775-0.159636 28.968775 0.026606 42.015929 0.827855 76.737732 27.977191 86.005816 67.696822 1.795902 7.689123 2.436492 15.804964 2.462075 23.727401 0.196475 60.822251 0.125867 121.642454 0.099261 182.461635-0.00614 14.368242-5.313006 19.74367-19.529799 19.765159-29.636994 0.048095-59.276035 0.01535-88.912006 0.01535-2.769067 0-5.536087 0-9.097192 0 0 23.845081-0.019443 46.961568 0.010233 70.076008 0.013303 10.812253-2.097778 20.954241-8.857738 29.745465-9.491165 12.340049-22.081924 17.798365-37.548174 17.767666-59.015092-0.115634-118.03223-0.046049-177.047322-0.046049-85.560678 0-171.123402 0.004093-256.68408-0.00307-31.162744-0.002047-48.697095-17.626449-48.741098-48.929386-0.030699-22.162766-0.080841-44.323485-0.151449-66.485227C244.850056 744.639454 244.484735 744.193293 243.9475 742.963279L243.9475 742.963279zM714.799334 331.559395c-3.136433 0-5.898337 0-8.66024 0-20.61962-0.001023-41.238216-0.017396-61.857836 0.004093-15.653515 0.016373-28.582989-5.586229-38.115086-18.302855-6.649444-8.871041-8.55791-19.077497-8.543583-29.861098 0.027629-22.8668 0.008186-45.732577 0.008186-68.940139-98.252745 0-195.764616 0-293.408493 0 0 97.960079 0 195.472973 0 292.957215 137.202848 0 273.881764 0 410.578076 0C714.799334 448.64609 714.799334 390.491599 714.799334 331.559395L714.799334 331.559395zM714.81059 684.736133c-137.278573 0-273.964652 0-410.479839 0 0 39.295981 0 78.041424 0 116.714212 137.122007 0 273.612635 0 410.479839 0C714.81059 762.439866 714.81059 723.876572 714.81059 684.736133L714.81059 684.736133zM803.223223 507.894496c-16.072047 0.004093-29.467125 13.548574-29.328979 29.65746 0.134053 15.796778 13.300934 29.057803 29.02608 29.232788 15.975856 0.179079 29.673833-13.298887 29.77821-29.302373C832.802912 521.401114 819.342342 507.891426 803.223223 507.894496L803.223223 507.894496z"  ></path></symbol><symbol id="icon-bangong" viewBox="0 0 1024 1024"><path d="M551.988 989.634c-92.012 0-166.886-70.028-166.886-156.11l0-524.197c0-67.728 55.103-122.809 122.832-122.809 67.728 0 122.786 55.081 122.786 122.809l0 453.718c0 16.007-12.965 28.994-28.973 28.994-16.006 0-28.972-12.987-28.972-28.994l0-453.718c0-35.759-29.085-64.843-64.843-64.843s-64.844 29.085-64.844 64.843l0 524.198c0 54.11 48.835 98.144 108.898 98.144 83.826 0 126.348-56.23 126.348-167.068l0-505.418c0-92.123-74.942-167.044-167.067-167.044-92.124 0-167.067 74.922-167.067 167.044l0 505.418c0 16.009-12.964 28.994-28.972 28.994-16.031 0-28.994-12.986-28.994-28.994l0-505.418c0-124.07 100.962-225.009 225.034-225.009 124.07 0 225.034 100.939 225.034 225.009l0 505.418c-0.001 143.011-67.166 225.034-184.315 225.034z"  ></path></symbol><symbol id="icon-bangongyongpin" viewBox="0 0 1024 1024"><path d="M872.181356 234.260867h-68.845026v-87.332299c0-46.260163-37.630857-83.892044-83.892044-83.892044H299.987137c-46.260163 0-83.892044 37.630857-83.892044 83.892044v87.332299h-68.845025c-45.332523 0-82.226183 36.89366-82.226183 82.252803v324.916698c0 45.332523 36.89366 82.226183 82.226183 82.226182h68.845025v150.251076c0 46.260163 37.630857 83.892044 83.892044 83.892044h419.458173c46.260163 0 83.892044-37.630857 83.892044-83.892044V723.65655h68.845026c45.332523 0 82.226183-36.89366 82.226182-82.226182V316.514694c-0.001024-45.360168-36.894684-82.253828-82.227206-82.253827z m-600.158575-87.332299c0-15.428928 12.534404-27.964356 27.964356-27.964356h419.458173c15.428928 0 27.964356 12.534404 27.964356 27.964356v87.332299H272.022781v-87.332299z m475.385861 726.979058c0 15.428928-12.534404 27.963332-27.964356 27.963332H299.987137c-15.428928 0-27.964356-12.534404-27.964356-27.963332V588.698226H747.408642v285.2094z m151.071208-232.477258c0 14.501288-11.797207 26.298495-26.298494 26.298494h-68.845026V560.73387c0-15.456573-12.507783-27.963332-27.964356-27.963332H244.059449c-15.456573 0-27.964356 12.506759-27.964356 27.963332v106.994992h-68.845025c-14.501288 0-26.298495-11.797207-26.298495-26.298494V316.514694c0-14.527909 11.797207-26.325116 26.298495-26.325115h724.930264c14.500264 0 26.298495 11.797207 26.298494 26.325115v324.915674z"  ></path><path d="M792.050042 397.757947m-51.887436 0a51.887437 51.887437 0 1 0 103.774873 0 51.887437 51.887437 0 1 0-103.774873 0Z"  ></path></symbol><symbol id="icon-gouwuche" viewBox="0 0 1024 1024"><path d="M919.84384 210.41664H241.17248L229.40672 113.3568c-1.92-15.83616-16.5376-28.79488-32.49664-28.79488H190.464c-2.72384 0-5.30944 0.384-7.7312 1.09056H99.77344c-19.14368 0-34.81088 14.3616-34.81088 31.90784s15.6672 31.90784 34.816 31.90784H169.3184L235.7248 697.344c1.92 15.84128 16.54272 28.8 32.49664 28.8h6.4512c2.69312 0 5.25824-0.37888 7.6544-1.07008h548.82304c19.14368 0 34.80576-14.35648 34.80576-31.90784 0-17.55136-15.66208-31.90784-34.80576-31.90784H295.81824l-8.13056-67.11296h545.1776c15.95392 0 31.89248-12.72832 35.42016-28.288l74.15296-327.14752c3.52768-15.55456-6.64064-28.288-22.59456-28.288zM294.58944 865.72032c0 42.8032 34.70336 77.51168 77.51168 77.51168s77.50656-34.70336 77.50656-77.5168c0-42.8032-34.69824-77.50656-77.50656-77.50656s-77.5168 34.70336-77.5168 77.51168z m384.23552 0c0 42.8032 34.70336 77.51168 77.5168 77.51168s77.50656-34.70336 77.50656-77.5168c0-42.8032-34.70336-77.50656-77.51168-77.50656-42.8032 0-77.51168 34.70336-77.51168 77.51168z"  ></path></symbol><symbol id="icon-icon-test" viewBox="0 0 1024 1024"><path d="M740 173l-3 1.6v2c-44.8 48.2-75 130-75 185.6v180.6c0 42.8 33 77.6 75 81.2v263.2H812V137c-26 0-50.6 14-72 36zM512 361.8h-75V137.6H362V362h-75V137.6H212v262.8c0 41.2 33.6 74.6 75 74.6H362v412h75v-412H512c41.4 0 75-33.4 75-74.6V137.6H512v224.2z"  ></path></symbol><symbol id="icon-icon-test1" viewBox="0 0 1024 1024"><path d="M901.9 151H122.1c-31.8 0-57.8 25.9-57.8 57.8v519.8c0 31.9 25.9 57.8 57.8 57.8h70.6v57.8c0 0.6 0.1 1.1 0.2 1.6 0.1 1.1 0.1 2.2 0.3 3.2 0.1 0.8 0.3 1.5 0.5 2.3 0.3 1.1 0.6 2.2 1 3.3 0.3 0.7 0.6 1.3 0.9 1.9l0.9 2.1c0.2 0.4 0.6 0.7 0.8 1.1 0.3 0.5 0.7 0.9 1 1.4 0.8 1.1 1.6 2.1 2.6 3.1 0.3 0.3 0.7 0.6 1 1 1 0.9 2 1.8 3.1 2.6 0.5 0.4 1.1 0.6 1.6 1 1 0.6 2 1.2 3.1 1.7l2.4 0.9c0.9 0.3 1.9 0.7 2.8 0.9 0.9 0.2 1.8 0.3 2.7 0.5 1 0.1 2 0.3 3 0.3 0.3 0 0.7 0.1 1 0.1 0.6 0 1.1-0.1 1.6-0.2 1.1-0.1 2.1-0.1 3.1-0.3 0.8-0.1 1.7-0.3 2.5-0.6l3-0.9c0.8-0.3 1.5-0.7 2.3-1 0.6-0.3 1.3-0.5 1.9-0.8l143.4-82.8h522.4c31.8 0 57.8-25.9 57.8-57.8v-520c0-31.9-25.9-57.8-57.7-57.8z m0 577.6H370.6v0.2c-4.6 0.2-9.2 1.3-13.4 3.7l-106.7 61.6v-36.6c0-15.9-13-28.9-28.9-28.9h-99.5V208.8h779.7v519.8z"  ></path><path d="M223.2 421.1h577.6c15.9 0 28.9-13 28.9-28.9 0-15.9-13-28.9-28.9-28.9H223.2c-15.9 0-28.9 13-28.9 28.9 0 15.9 13 28.9 28.9 28.9zM223.2 565.5h577.6c15.9 0 28.9-13 28.9-28.9 0-15.9-13-28.9-28.9-28.9H223.2c-15.9 0-28.9 13-28.9 28.9 0 15.9 13 28.9 28.9 28.9z"  ></path></symbol><symbol id="icon-lishijilu" viewBox="0 0 1024 1024"><path d="M960 511.13a32 32 0 0 0-64 0.12v0.75c0 212.08-171.92 384-384 384S128 724.08 128 512s171.92-384 384-384c128.48 0 242.21 63.1 311.92 160H768a32 32 0 0 0 0 64h112a32 32 0 0 0 32-32V176a32 32 0 0 0-64 0v39.69C765.91 122.67 645.81 64 512 64 264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448v-0.87z"  ></path><path d="M720 544a32 32 0 0 0-32-32H512V336a32 32 0 0 0-32-32 32 32 0 0 0-32 32v208a32 32 0 0 0 32 32h208a32 32 0 0 0 32-32z"  ></path></symbol><symbol id="icon-diannao" viewBox="0 0 1024 1024"><path d="M92.409 307.143H756.814V725.8H63.579V307.143h28.83z m566.928 524.578h299.997V174.537H659.337v89.376h274.935V372.48H800.06v24.948h134.212v108.566H800.06v263.051H659.337v62.676zM874.891 545.94h55.499v31.36h-55.499v-31.36z m0 51.86h55.499v31.375h-55.499V597.8z m-74.832-306.536h106.86v53.877h-106.86v-53.877z m0 133.501h106.86v53.877h-106.86v-53.877zM245.628 798.669h50.508v-53.381h222.449v53.381h44.823v33.052h-317.78v-33.052z m434.378-420.191H143.117v276h536.889v-276z"  ></path></symbol><symbol id="icon-kaohejilu" viewBox="0 0 1024 1024"><path d="M726.784 192.032a35.84 35.84 0 0 0-36.256-35.52h-90.56v35.52c0 19.648-16.288 35.552-36.32 35.552H255.584a35.904 35.904 0 0 1-36.224-35.552v-35.52H110.624c-20 0-36.256 15.936-36.256 35.52v675.456c0 19.584 16.224 35.52 36.256 35.52h289.952l72.512 71.104H74.368c-40.032 0-72.48-31.84-72.48-71.104V156.512c0-39.264 32.448-71.104 72.48-71.104h144.992c0-19.648 16.224-35.552 36.224-35.552h308.064c20.032 0 36.32 15.904 36.32 35.552h126.816c40.096 0 72.48 31.84 72.48 71.104v326.208l-72.48 73.824V192.032z"  ></path><path d="M563.648 440.896H237.472a17.92 17.92 0 0 1-18.112-17.792v-17.76a17.92 17.92 0 0 1 18.112-17.76h326.176c10.016 0 18.176 7.968 18.176 17.76v17.76a17.952 17.952 0 0 1-18.176 17.792zM581.856 618.624a17.984 17.984 0 0 1-18.176 17.792H237.472a17.92 17.92 0 0 1-18.112-17.792v-17.76a17.92 17.92 0 0 1 18.112-17.792h326.176c10.016 0 18.176 7.936 18.176 17.792v17.76h0.032zM522.688 820.512v104.064h104.032l306.784-306.88-104.032-104-306.784 306.816z m491.328-283.232a27.84 27.84 0 0 0 0-39.104l-64.96-64.928a27.488 27.488 0 0 0-19.552-8.096 27.456 27.456 0 0 0-19.52 8.096l-50.752 50.752 104 104 50.784-50.72z"  ></path></symbol><symbol id="icon-shoucang" viewBox="0 0 1024 1024"><path d="M486.4 780.8c16-6.4 35.2-6.4 54.4 0l217.6 99.2-28.8-236.8c-3.2-19.2 3.2-38.4 16-51.2l163.2-176-233.6-48c-19.2-3.2-35.2-16-41.6-32l-118.4-208-118.4 208c-9.6 16-25.6 28.8-41.6 32l-233.6 48 163.2 176c12.8 12.8 19.2 32 16 51.2l-28.8 236.8 214.4-99.2z m-192 156.8c-32 16-70.4 0-86.4-32-6.4-9.6-6.4-22.4-6.4-35.2l28.8-236.8-163.2-176c-22.4-25.6-22.4-67.2 3.2-89.6 9.6-6.4 19.2-12.8 32-16l233.6-48 118.4-208c16-32 57.6-41.6 86.4-25.6 9.6 6.4 19.2 12.8 25.6 25.6l118.4 208 233.6 48c35.2 6.4 57.6 41.6 51.2 76.8-3.2 12.8-6.4 22.4-16 32l-163.2 176 28.8 236.8c3.2 35.2-22.4 67.2-57.6 70.4-12.8 0-22.4 0-35.2-6.4l-217.6-99.2-214.4 99.2z"  ></path></symbol><symbol id="icon-icon--" viewBox="0 0 1024 1024"><path d="M512 834.56c20.48 0 38.4-17.92 38.4-38.4s-17.92-38.4-38.4-38.4-38.4 17.92-38.4 38.4 17.92 38.4 38.4 38.4z m192-742.4h-384c-56.32 0-102.4 46.08-102.4 102.4v614.4c0 56.32 46.08 102.4 102.4 102.4h384c56.32 0 102.4-46.08 102.4-102.4v-614.4c0-56.32-46.08-102.4-102.4-102.4z m51.2 716.8c0 28.16-23.04 51.2-51.2 51.2h-384c-28.16 0-51.2-23.04-51.2-51.2v-76.8h486.4v76.8z m0-128h-486.4v-409.6h486.4v409.6z m0-460.8h-486.4v-25.6c0-28.16 23.04-51.2 51.2-51.2h384c28.16 0 51.2 23.04 51.2 51.2v25.6z"  ></path></symbol></svg>';var script = function () {
    var scripts = document.getElementsByTagName("script");return scripts[scripts.length - 1];
  }();var shouldInjectCss = script.getAttribute("data-injectcss");var ready = function ready(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0);
      } else {
        var loadFn = function loadFn() {
          document.removeEventListener("DOMContentLoaded", loadFn, false);fn();
        };document.addEventListener("DOMContentLoaded", loadFn, false);
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn);
    }function IEContentLoaded(w, fn) {
      var d = w.document,
          done = false,
          init = function init() {
        if (!done) {
          done = true;fn();
        }
      };var polling = function polling() {
        try {
          d.documentElement.doScroll("left");
        } catch (e) {
          setTimeout(polling, 50);return;
        }init();
      };polling();d.onreadystatechange = function () {
        if (d.readyState == "complete") {
          d.onreadystatechange = null;init();
        }
      };
    }
  };var before = function before(el, target) {
    target.parentNode.insertBefore(el, target);
  };var prepend = function prepend(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild);
    } else {
      target.appendChild(el);
    }
  };function appendSvg() {
    var div, svg;div = document.createElement("div");div.innerHTML = svgSprite;svgSprite = null;svg = div.getElementsByTagName("svg")[0];if (svg) {
      svg.setAttribute("aria-hidden", "true");svg.style.position = "absolute";svg.style.width = 0;svg.style.height = 0;svg.style.overflow = "hidden";prepend(svg, document.body);
    }
  }if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true;try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e);
    }
  }ready(appendSvg);
})(window);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var a = __webpack_require__(2);
var Base64 = __webpack_require__(3).Base64;
var headerObj = JSON.parse(sessionStorage.getItem('headerObj'));

var srt = '<ul class="leftUl">' + '<li class="ures"><a href=' + headerObj.login + '>您好，请登录</a></li>' + '<li class="register"><a href=' + headerObj.reqister + '>免费注册</a></li>' + '<li class="noBorder"><a href=' + headerObj.ctiy + '>北京<span class="triangle"></span></a>' + '<div class="noBorMeg">' + '<ul>' + '<li>上海</li><li>北京</li><li>沈阳</li><li>大连</li><li>山西</li>' + '<li>四川</li><li>黑龙江</li><li>广州</li><li>石家庄</li><li>河北</li>' + '</ul>' + '</div>' + '</li>' + '</ul>' + '<ul class="rightUl">' + '<li>' + '<a href=' + headerObj.order + '>我的订单</a>' + '</li>' + '<li>' + '<a href=' + headerObj.cart + '>购物车' + '<span>0</span>件</span>' + '</a>' + '</li>' + '<li>' + '<a href=' + headerObj.personal + '>个人中心</a>' + '</li>' + ' <li>' + '<a href=' + headerObj.vip + '>VIP客户中心</a>' + '</li>' + '<li >' + '<a href=' + headerObj.phoneShop + '>手机商城</a>' + '</li>' + '<li class="Cancellation">' + '<a href="javascript:;">退出登陆<a>' + '</li>' + '</ul>';
$('.menu').html(srt);

// 地区的显示与隐藏
$(document).ready(function () {
    $(".noBorder a").click(function () {
        $(".noBorMeg").toggle();
    });
});
// 切换地区传值
$(document).ready(function () {
    $('.noBorMeg li').on('click', function () {
        var ctry = $(this).text();
        $('.noBorder a').html(ctry + '<span class="triangle"></span>');
    });
});
//地区鼠标离开消失
$(document).ready(function () {
    $('.noBorMeg').mouseleave(function () {
        $(this).css('display', 'none');
    });
});

$(function () {
    if (localStorage.getItem('token') != null) {
        var result = localStorage.getItem('token');
        var a = result.split('.');
        var base64Str = Base64.decode(a[1]);
        var base64Obj = JSON.parse(base64Str);
        console.log(base64Obj);
        $('.ures').html('<a href=' + headerObj.personal + '>' + base64Obj.username + '</a>');
        $('.register').remove();
        $('.Cancellation').show();
    } else {}
});
//点击退出登陆
$('.menu').on('click', '.Cancellation', function () {
    localStorage.removeItem('token');
    //退出刷新页面
    location.reload();
    $('.Cancellation').hide();
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

// top 置顶
$('.top').click(function () {
    $('html,body').animate({ scrollTop: '0px' }, 400);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

(function ($) {
    /**
     * ajax封装
     * url 发送请求的地址
     * data 发送到服务器的数据，数组存储，如：{"username": "张三", "password": 123456}
     * succCallback 成功回调函数
     * errorCallback 失败回调函数
     * type 请求方式("POST" 或 "GET")， 默认已经设置为 "POST"
     * dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
     */
    jQuery.ax = function (url, data, type, dataType, successfn, errorfn) {
        var baseURL = 'http://shx-admin-api.shenhexin.com';
        type = type == null || type == "" || typeof type == "undefined" ? "post" : type;
        dataType = dataType == null || dataType == "" || typeof dataType == "undefined" ? "json" : dataType;
        data = data == null || data == "" || typeof data == "undefined" ? '' : data;
        $.ajax({
            type: type,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            async: 'true',
            data: data,
            url: baseURL + url,
            dataType: dataType,
            success: function success(d) {
                successfn(d);
            },
            error: function error(e) {
                errorfn(e);
            }
        });
    };
})(jQuery);

// 使用方法 （参数对应）
// $.ax(
//     "/shop-index-floor",   （只需要传公共部分后面的路径）
//     null,                  （上送参数 不传为null）
//     'get',                 （方法 传null为post）
//     null,                  （接受格式 null为json）
//     function(data){        （成功函数）
//         console.log(data);
//     }, 
//     function(data){        （失败函数）
//         console.log(data);
//     }
// );
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var navObj = JSON.parse(sessionStorage.getItem('navObj'));

var navStr = '<li>' + '<a href="' + navObj.index + '">首页</a>' + '</li>' + '<li>' + '<a href="' + navObj.zfcg + '">政府采购</a>' + '</li>' + '<li>' + '<a href="' + navObj.qycg + '">企业购</a>' + '</li>' + '<li>' + '<a href="' + navObj.cjcg + '">场景采购</a>' + '</li>' + '<li>' + '<a href="' + navObj.wyyx + '">网易严选</a>' + '</li>' + '<li>' + '<a href="' + navObj.abuot + '">关于我们</a>' + '</li>' + '<li>' + '<a href="' + navObj.jmzs + '">招商加盟</a>' + '</li>';
$('.NavList').html(navStr);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

$.fn.selectDate = function () {
	var minYear = 1900;
	var maxYear = new Date().getFullYear();
	var yearSel = document.getElementById('year');
	var monthSel = document.getElementById('month');
	var daySel = document.getElementById('days');

	for (var y = maxYear; y >= minYear; y--) {
		var yearOpt = document.createElement('option');
		yearOpt.value = y;
		yearOpt.innerHTML = y;
		yearSel.appendChild(yearOpt);
	}

	$("#year").click(function (event) {
		if (!$("#year option:selected").val()) return;
		removeOption(monthSel);
		addOption(12, '', monthSel);
		removeOption(daySel);
	});

	$("#month").click(function () {
		removeOption(daySel);
		var year = $("#year option:selected").val();
		var month = $("#month option:selected").val();
		if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
			addOption(31, '', daySel);
		} else if (month == 4 || month == 6 || month == 9 || month == 11) {
			addOption(30, '', daySel);
		} else if (month == 2) {
			if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
				addOption(29, '', daySel);
			} else {
				addOption(28, '', daySel);
			}
		}
	});

	function addOption(num, unit, parent) {
		//num：选项个数
		//unit：单位（年/月/日）
		//parent：父对象
		for (var index = 1; index <= num; index++) {
			var opt = document.createElement('option');
			$(opt).attr('value', index);
			if (index < 10) {
				index = '0' + index;
			}
			$(opt).html(index + unit);
			$(parent).append(opt);
		}
	}

	function removeOption(parent) {
		//parent：父对象
		var options = $(parent).find('option');
		for (var index = 1; index < options.length; index++) {
			parent.removeChild(options[index]);
		}
	}
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

(function ($) {
    /**
     * ajax封装
     * url 发送请求的地址
     * data 发送到服务器的数据，数组存储，如：{"username": "张三", "password": 123456}
     * succCallback 成功回调函数
     * errorCallback 失败回调函数
     * type 请求方式("POST" 或 "GET")， 默认已经设置为 "POST"
     * dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
     */
    jQuery.ax = function (url, data, type, dataType, successfn, errorfn) {
        var baseURL = 'http://shx-admin-api.shenhexin.com';
        type = type == null || type == "" || typeof type == "undefined" ? "post" : type;
        dataType = dataType == null || dataType == "" || typeof dataType == "undefined" ? "json" : dataType;
        data = data == null || data == "" || typeof data == "undefined" ? '' : data;
        $.ajax({
            type: type,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            async: 'true',
            data: data,
            url: baseURL + url,
            dataType: dataType,
            success: function success(d) {
                successfn(d);
            },
            error: function error(e) {
                errorfn(e);
            }
        });
    };
})(jQuery);

// 使用方法 （参数对应）
// $.ax(
//     "/shop-index-floor",   （只需要传公共部分后面的路径）
//     null,                  （上送参数 不传为null）
//     'get',                 （方法 传null为post）
//     null,                  （接受格式 null为json）
//     function(data){        （成功函数）
//         console.log(data);
//     }, 
//     function(data){        （失败函数）
//         console.log(data);
//     }
// );
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * JQuery zTree core v3.5.35
 * http://treejs.cn/
 *
 * Copyright (c) 2010 Hunter.z
 *
 * Licensed same as jquery - MIT License
 * http://www.opensource.org/licenses/mit-license.php
 *
 * email: hunter.z@263.net
 * Date: 2018-03-30
 */
(function (q) {
  var H,
      I,
      J,
      K,
      L,
      M,
      u,
      s = {},
      v = {},
      w = {},
      N = { treeId: "", treeObj: null, view: { addDiyDom: null, autoCancelSelected: !0, dblClickExpand: !0, expandSpeed: "fast", fontCss: {}, nameIsHTML: !1, selectedMulti: !0, showIcon: !0, showLine: !0, showTitle: !0, txtSelectedEnable: !1 }, data: { key: { isParent: "isParent", children: "children", name: "name", title: "", url: "url", icon: "icon" }, simpleData: { enable: !1, idKey: "id", pIdKey: "pId", rootPId: null }, keep: { parent: !1, leaf: !1 } }, async: { enable: !1, contentType: "application/x-www-form-urlencoded", type: "post",
      dataType: "text", url: "", autoParam: [], otherParam: [], dataFilter: null }, callback: { beforeAsync: null, beforeClick: null, beforeDblClick: null, beforeRightClick: null, beforeMouseDown: null, beforeMouseUp: null, beforeExpand: null, beforeCollapse: null, beforeRemove: null, onAsyncError: null, onAsyncSuccess: null, onNodeCreated: null, onClick: null, onDblClick: null, onRightClick: null, onMouseDown: null, onMouseUp: null, onExpand: null, onCollapse: null, onRemove: null } },
      x = [function (a) {
    var b = a.treeObj,
        c = f.event;b.bind(c.NODECREATED, function (b, c, h) {
      j.apply(a.callback.onNodeCreated, [b, c, h]);
    });b.bind(c.CLICK, function (b, c, h, e, m) {
      j.apply(a.callback.onClick, [c, h, e, m]);
    });b.bind(c.EXPAND, function (b, c, h) {
      j.apply(a.callback.onExpand, [b, c, h]);
    });b.bind(c.COLLAPSE, function (b, c, h) {
      j.apply(a.callback.onCollapse, [b, c, h]);
    });b.bind(c.ASYNC_SUCCESS, function (b, c, h, e) {
      j.apply(a.callback.onAsyncSuccess, [b, c, h, e]);
    });b.bind(c.ASYNC_ERROR, function (b, c, h, e, m, f) {
      j.apply(a.callback.onAsyncError, [b, c, h, e, m, f]);
    });b.bind(c.REMOVE, function (b, c, h) {
      j.apply(a.callback.onRemove, [b, c, h]);
    });b.bind(c.SELECTED, function (b, c, h) {
      j.apply(a.callback.onSelected, [c, h]);
    });b.bind(c.UNSELECTED, function (b, c, h) {
      j.apply(a.callback.onUnSelected, [c, h]);
    });
  }],
      y = [function (a) {
    var b = f.event;a.treeObj.unbind(b.NODECREATED).unbind(b.CLICK).unbind(b.EXPAND).unbind(b.COLLAPSE).unbind(b.ASYNC_SUCCESS).unbind(b.ASYNC_ERROR).unbind(b.REMOVE).unbind(b.SELECTED).unbind(b.UNSELECTED);
  }],
      z = [function (a) {
    var b = e.getCache(a);b || (b = {}, e.setCache(a, b));b.nodes = [];b.doms = [];
  }],
      A = [function (a, b, c, d, g, h) {
    if (c) {
      var k = e.getRoot(a),
          m = e.nodeChildren(a, c);c.level = b;c.tId = a.treeId + "_" + ++k.zId;c.parentTId = d ? d.tId : null;c.open = typeof c.open == "string" ? j.eqs(c.open, "true") : !!c.open;b = e.nodeIsParent(a, c);j.isArray(m) && !(b === !1 || typeof b == "string" && j.eqs(b, "false")) ? (e.nodeIsParent(a, c, !0), c.zAsync = !0) : (b = e.nodeIsParent(a, c, b), c.open = b && !a.async.enable ? c.open : !1, c.zAsync = !b);c.isFirstNode = g;c.isLastNode = h;c.getParentNode = function () {
        return e.getNodeCache(a, c.parentTId);
      };c.getPreNode = function () {
        return e.getPreNode(a, c);
      };c.getNextNode = function () {
        return e.getNextNode(a, c);
      };c.getIndex = function () {
        return e.getNodeIndex(a, c);
      };c.getPath = function () {
        return e.getNodePath(a, c);
      };c.isAjaxing = !1;e.fixPIdKeyValue(a, c);
    }
  }],
      t = [function (a) {
    var b = a.target,
        c = e.getSetting(a.data.treeId),
        d = "",
        g = null,
        h = "",
        k = "",
        m = null,
        i = null,
        o = null;if (j.eqs(a.type, "mousedown")) k = "mousedown";else if (j.eqs(a.type, "mouseup")) k = "mouseup";else if (j.eqs(a.type, "contextmenu")) k = "contextmenu";else if (j.eqs(a.type, "click")) {
      if (j.eqs(b.tagName, "span") && b.getAttribute("treeNode" + f.id.SWITCH) !== null) d = j.getNodeMainDom(b).id, h = "switchNode";else {
        if (o = j.getMDom(c, b, [{ tagName: "a", attrName: "treeNode" + f.id.A }])) d = j.getNodeMainDom(o).id, h = "clickNode";
      }
    } else if (j.eqs(a.type, "dblclick") && (k = "dblclick", o = j.getMDom(c, b, [{ tagName: "a", attrName: "treeNode" + f.id.A }]))) d = j.getNodeMainDom(o).id, h = "switchNode";if (k.length > 0 && d.length == 0 && (o = j.getMDom(c, b, [{ tagName: "a", attrName: "treeNode" + f.id.A }]))) d = j.getNodeMainDom(o).id;if (d.length > 0) switch (g = e.getNodeCache(c, d), h) {case "switchNode":
        e.nodeIsParent(c, g) ? j.eqs(a.type, "click") || j.eqs(a.type, "dblclick") && j.apply(c.view.dblClickExpand, [c.treeId, g], c.view.dblClickExpand) ? m = H : h = "" : h = "";break;case "clickNode":
        m = I;}switch (k) {case "mousedown":
        i = J;break;case "mouseup":
        i = K;break;case "dblclick":
        i = L;break;case "contextmenu":
        i = M;}return { stop: !1, node: g, nodeEventType: h, nodeEventCallback: m, treeEventType: k, treeEventCallback: i };
  }],
      B = [function (a) {
    var b = e.getRoot(a);b || (b = {}, e.setRoot(a, b));e.nodeChildren(a, b, []);b.expandTriggerFlag = !1;b.curSelectedList = [];b.noSelection = !0;b.createdNodes = [];b.zId = 0;b._ver = new Date().getTime();
  }],
      C = [],
      D = [],
      E = [],
      F = [],
      G = [],
      e = { addNodeCache: function addNodeCache(a, b) {
      e.getCache(a).nodes[e.getNodeCacheId(b.tId)] = b;
    }, getNodeCacheId: function getNodeCacheId(a) {
      return a.substring(a.lastIndexOf("_") + 1);
    }, addAfterA: function addAfterA(a) {
      D.push(a);
    }, addBeforeA: function addBeforeA(a) {
      C.push(a);
    }, addInnerAfterA: function addInnerAfterA(a) {
      F.push(a);
    }, addInnerBeforeA: function addInnerBeforeA(a) {
      E.push(a);
    }, addInitBind: function addInitBind(a) {
      x.push(a);
    }, addInitUnBind: function addInitUnBind(a) {
      y.push(a);
    }, addInitCache: function addInitCache(a) {
      z.push(a);
    }, addInitNode: function addInitNode(a) {
      A.push(a);
    },
    addInitProxy: function addInitProxy(a, b) {
      b ? t.splice(0, 0, a) : t.push(a);
    }, addInitRoot: function addInitRoot(a) {
      B.push(a);
    }, addNodesData: function addNodesData(a, b, c, d) {
      var g = e.nodeChildren(a, b);g ? c >= g.length && (c = -1) : (g = e.nodeChildren(a, b, []), c = -1);if (g.length > 0 && c === 0) g[0].isFirstNode = !1, i.setNodeLineIcos(a, g[0]);else if (g.length > 0 && c < 0) g[g.length - 1].isLastNode = !1, i.setNodeLineIcos(a, g[g.length - 1]);e.nodeIsParent(a, b, !0);c < 0 ? e.nodeChildren(a, b, g.concat(d)) : (a = [c, 0].concat(d), g.splice.apply(g, a));
    }, addSelectedNode: function addSelectedNode(a, b) {
      var c = e.getRoot(a);
      e.isSelectedNode(a, b) || c.curSelectedList.push(b);
    }, addCreatedNode: function addCreatedNode(a, b) {
      (a.callback.onNodeCreated || a.view.addDiyDom) && e.getRoot(a).createdNodes.push(b);
    }, addZTreeTools: function addZTreeTools(a) {
      G.push(a);
    }, exSetting: function exSetting(a) {
      q.extend(!0, N, a);
    }, fixPIdKeyValue: function fixPIdKeyValue(a, b) {
      a.data.simpleData.enable && (b[a.data.simpleData.pIdKey] = b.parentTId ? b.getParentNode()[a.data.simpleData.idKey] : a.data.simpleData.rootPId);
    }, getAfterA: function getAfterA(a, b, c) {
      for (var d = 0, e = D.length; d < e; d++) {
        D[d].apply(this, arguments);
      }
    }, getBeforeA: function getBeforeA(a, b, c) {
      for (var d = 0, e = C.length; d < e; d++) {
        C[d].apply(this, arguments);
      }
    }, getInnerAfterA: function getInnerAfterA(a, b, c) {
      for (var d = 0, e = F.length; d < e; d++) {
        F[d].apply(this, arguments);
      }
    }, getInnerBeforeA: function getInnerBeforeA(a, b, c) {
      for (var d = 0, e = E.length; d < e; d++) {
        E[d].apply(this, arguments);
      }
    }, getCache: function getCache(a) {
      return w[a.treeId];
    }, getNodeIndex: function getNodeIndex(a, b) {
      if (!b) return null;for (var c = b.parentTId ? b.getParentNode() : e.getRoot(a), c = e.nodeChildren(a, c), d = 0, g = c.length - 1; d <= g; d++) {
        if (c[d] === b) return d;
      }return -1;
    }, getNextNode: function getNextNode(a, b) {
      if (!b) return null;
      for (var c = b.parentTId ? b.getParentNode() : e.getRoot(a), c = e.nodeChildren(a, c), d = 0, g = c.length - 1; d <= g; d++) {
        if (c[d] === b) return d == g ? null : c[d + 1];
      }return null;
    }, getNodeByParam: function getNodeByParam(a, b, c, d) {
      if (!b || !c) return null;for (var g = 0, h = b.length; g < h; g++) {
        var k = b[g];if (k[c] == d) return b[g];k = e.nodeChildren(a, k);if (k = e.getNodeByParam(a, k, c, d)) return k;
      }return null;
    }, getNodeCache: function getNodeCache(a, b) {
      if (!b) return null;var c = w[a.treeId].nodes[e.getNodeCacheId(b)];return c ? c : null;
    }, getNodePath: function getNodePath(a, b) {
      if (!b) return null;var c;
      (c = b.parentTId ? b.getParentNode().getPath() : []) && c.push(b);return c;
    }, getNodes: function getNodes(a) {
      return e.nodeChildren(a, e.getRoot(a));
    }, getNodesByParam: function getNodesByParam(a, b, c, d) {
      if (!b || !c) return [];for (var g = [], h = 0, k = b.length; h < k; h++) {
        var m = b[h];m[c] == d && g.push(m);m = e.nodeChildren(a, m);g = g.concat(e.getNodesByParam(a, m, c, d));
      }return g;
    }, getNodesByParamFuzzy: function getNodesByParamFuzzy(a, b, c, d) {
      if (!b || !c) return [];for (var g = [], d = d.toLowerCase(), h = 0, k = b.length; h < k; h++) {
        var m = b[h];typeof m[c] == "string" && b[h][c].toLowerCase().indexOf(d) > -1 && g.push(m);m = e.nodeChildren(a, m);g = g.concat(e.getNodesByParamFuzzy(a, m, c, d));
      }return g;
    }, getNodesByFilter: function getNodesByFilter(a, b, c, d, g) {
      if (!b) return d ? null : [];for (var h = d ? null : [], k = 0, m = b.length; k < m; k++) {
        var f = b[k];if (j.apply(c, [f, g], !1)) {
          if (d) return f;h.push(f);
        }f = e.nodeChildren(a, f);f = e.getNodesByFilter(a, f, c, d, g);if (d && f) return f;h = d ? f : h.concat(f);
      }return h;
    }, getPreNode: function getPreNode(a, b) {
      if (!b) return null;for (var c = b.parentTId ? b.getParentNode() : e.getRoot(a), c = e.nodeChildren(a, c), d = 0, g = c.length; d < g; d++) {
        if (c[d] === b) return d == 0 ? null : c[d - 1];
      }return null;
    }, getRoot: function getRoot(a) {
      return a ? v[a.treeId] : null;
    }, getRoots: function getRoots() {
      return v;
    }, getSetting: function getSetting(a) {
      return s[a];
    }, getSettings: function getSettings() {
      return s;
    }, getZTreeTools: function getZTreeTools(a) {
      return (a = this.getRoot(this.getSetting(a))) ? a.treeTools : null;
    }, initCache: function initCache(a) {
      for (var b = 0, c = z.length; b < c; b++) {
        z[b].apply(this, arguments);
      }
    }, initNode: function initNode(a, b, c, d, e, h) {
      for (var k = 0, f = A.length; k < f; k++) {
        A[k].apply(this, arguments);
      }
    }, initRoot: function initRoot(a) {
      for (var b = 0, c = B.length; b < c; b++) {
        B[b].apply(this, arguments);
      }
    },
    isSelectedNode: function isSelectedNode(a, b) {
      for (var c = e.getRoot(a), d = 0, g = c.curSelectedList.length; d < g; d++) {
        if (b === c.curSelectedList[d]) return !0;
      }return !1;
    }, nodeChildren: function nodeChildren(a, b, c) {
      if (!b) return null;a = a.data.key.children;typeof c !== "undefined" && (b[a] = c);return b[a];
    }, nodeIsParent: function nodeIsParent(a, b, c) {
      if (!b) return !1;a = a.data.key.isParent;typeof c !== "undefined" && (typeof c === "string" && (c = j.eqs(c, "true")), b[a] = !!c);return b[a];
    }, nodeName: function nodeName(a, b, c) {
      a = a.data.key.name;typeof c !== "undefined" && (b[a] = c);return "" + b[a];
    }, nodeTitle: function nodeTitle(a, b) {
      return "" + b[a.data.key.title === "" ? a.data.key.name : a.data.key.title];
    }, removeNodeCache: function removeNodeCache(a, b) {
      var c = e.nodeChildren(a, b);if (c) for (var d = 0, g = c.length; d < g; d++) {
        e.removeNodeCache(a, c[d]);
      }e.getCache(a).nodes[e.getNodeCacheId(b.tId)] = null;
    }, removeSelectedNode: function removeSelectedNode(a, b) {
      for (var c = e.getRoot(a), d = 0, g = c.curSelectedList.length; d < g; d++) {
        if (b === c.curSelectedList[d] || !e.getNodeCache(a, c.curSelectedList[d].tId)) c.curSelectedList.splice(d, 1), a.treeObj.trigger(f.event.UNSELECTED, [a.treeId, b]), d--, g--;
      }
    }, setCache: function setCache(a, b) {
      w[a.treeId] = b;
    }, setRoot: function setRoot(a, b) {
      v[a.treeId] = b;
    }, setZTreeTools: function setZTreeTools(a, b) {
      for (var c = 0, d = G.length; c < d; c++) {
        G[c].apply(this, arguments);
      }
    }, transformToArrayFormat: function transformToArrayFormat(a, b) {
      function c(b) {
        d.push(b);(b = e.nodeChildren(a, b)) && (d = d.concat(e.transformToArrayFormat(a, b)));
      }if (!b) return [];var d = [];if (j.isArray(b)) for (var g = 0, h = b.length; g < h; g++) {
        c(b[g]);
      } else c(b);return d;
    }, transformTozTreeFormat: function transformTozTreeFormat(a, b) {
      var c,
          d,
          g = a.data.simpleData.idKey,
          h = a.data.simpleData.pIdKey;if (!g || g == "" || !b) return [];if (j.isArray(b)) {
        var k = [],
            f = {};for (c = 0, d = b.length; c < d; c++) {
          f[b[c][g]] = b[c];
        }for (c = 0, d = b.length; c < d; c++) {
          var i = f[b[c][h]];if (i && b[c][g] != b[c][h]) {
            var o = e.nodeChildren(a, i);o || (o = e.nodeChildren(a, i, []));o.push(b[c]);
          } else k.push(b[c]);
        }return k;
      } else return [b];
    } },
      n = { bindEvent: function bindEvent(a) {
      for (var b = 0, c = x.length; b < c; b++) {
        x[b].apply(this, arguments);
      }
    }, unbindEvent: function unbindEvent(a) {
      for (var b = 0, c = y.length; b < c; b++) {
        y[b].apply(this, arguments);
      }
    }, bindTree: function bindTree(a) {
      var b = { treeId: a.treeId },
          c = a.treeObj;a.view.txtSelectedEnable || c.bind("selectstart", u).css({ "-moz-user-select": "-moz-none" });c.bind("click", b, n.proxy);c.bind("dblclick", b, n.proxy);c.bind("mouseover", b, n.proxy);c.bind("mouseout", b, n.proxy);c.bind("mousedown", b, n.proxy);c.bind("mouseup", b, n.proxy);c.bind("contextmenu", b, n.proxy);
    }, unbindTree: function unbindTree(a) {
      a.treeObj.unbind("selectstart", u).unbind("click", n.proxy).unbind("dblclick", n.proxy).unbind("mouseover", n.proxy).unbind("mouseout", n.proxy).unbind("mousedown", n.proxy).unbind("mouseup", n.proxy).unbind("contextmenu", n.proxy);
    }, doProxy: function doProxy(a) {
      for (var b = [], c = 0, d = t.length; c < d; c++) {
        var e = t[c].apply(this, arguments);b.push(e);if (e.stop) break;
      }return b;
    }, proxy: function proxy(a) {
      var b = e.getSetting(a.data.treeId);if (!j.uCanDo(b, a)) return !0;for (var b = n.doProxy(a), c = !0, d = 0, g = b.length; d < g; d++) {
        var h = b[d];h.nodeEventCallback && (c = h.nodeEventCallback.apply(h, [a, h.node]) && c);h.treeEventCallback && (c = h.treeEventCallback.apply(h, [a, h.node]) && c);
      }return c;
    } };H = function H(a, b) {
    var c = e.getSetting(a.data.treeId);if (b.open) {
      if (j.apply(c.callback.beforeCollapse, [c.treeId, b], !0) == !1) return !0;
    } else if (j.apply(c.callback.beforeExpand, [c.treeId, b], !0) == !1) return !0;e.getRoot(c).expandTriggerFlag = !0;i.switchNode(c, b);return !0;
  };I = function I(a, b) {
    var c = e.getSetting(a.data.treeId),
        d = c.view.autoCancelSelected && (a.ctrlKey || a.metaKey) && e.isSelectedNode(c, b) ? 0 : c.view.autoCancelSelected && (a.ctrlKey || a.metaKey) && c.view.selectedMulti ? 2 : 1;if (j.apply(c.callback.beforeClick, [c.treeId, b, d], !0) == !1) return !0;d === 0 ? i.cancelPreSelectedNode(c, b) : i.selectNode(c, b, d === 2);c.treeObj.trigger(f.event.CLICK, [a, c.treeId, b, d]);return !0;
  };J = function J(a, b) {
    var c = e.getSetting(a.data.treeId);j.apply(c.callback.beforeMouseDown, [c.treeId, b], !0) && j.apply(c.callback.onMouseDown, [a, c.treeId, b]);return !0;
  };K = function K(a, b) {
    var c = e.getSetting(a.data.treeId);j.apply(c.callback.beforeMouseUp, [c.treeId, b], !0) && j.apply(c.callback.onMouseUp, [a, c.treeId, b]);return !0;
  };L = function L(a, b) {
    var c = e.getSetting(a.data.treeId);j.apply(c.callback.beforeDblClick, [c.treeId, b], !0) && j.apply(c.callback.onDblClick, [a, c.treeId, b]);return !0;
  };
  M = function M(a, b) {
    var c = e.getSetting(a.data.treeId);j.apply(c.callback.beforeRightClick, [c.treeId, b], !0) && j.apply(c.callback.onRightClick, [a, c.treeId, b]);return typeof c.callback.onRightClick != "function";
  };u = function u(a) {
    a = a.originalEvent.srcElement.nodeName.toLowerCase();return a === "input" || a === "textarea";
  };var j = { apply: function apply(a, b, c) {
      return typeof a == "function" ? a.apply(O, b ? b : []) : c;
    }, canAsync: function canAsync(a, b) {
      var c = e.nodeChildren(a, b),
          d = e.nodeIsParent(a, b);return a.async.enable && b && d && !(b.zAsync || c && c.length > 0);
    }, clone: function clone(a) {
      if (a === null) return null;var b = j.isArray(a) ? [] : {},
          c;for (c in a) {
        b[c] = a[c] instanceof Date ? new Date(a[c].getTime()) : _typeof(a[c]) === "object" ? j.clone(a[c]) : a[c];
      }return b;
    }, eqs: function eqs(a, b) {
      return a.toLowerCase() === b.toLowerCase();
    }, isArray: function isArray(a) {
      return Object.prototype.toString.apply(a) === "[object Array]";
    }, isElement: function isElement(a) {
      return (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === "object" ? a instanceof HTMLElement : a && (typeof a === "undefined" ? "undefined" : _typeof(a)) === "object" && a !== null && a.nodeType === 1 && typeof a.nodeName === "string";
    }, $: function $(a, b, c) {
      b && typeof b != "string" && (c = b, b = "");return typeof a == "string" ? q(a, c ? c.treeObj.get(0).ownerDocument : null) : q("#" + a.tId + b, c ? c.treeObj : null);
    }, getMDom: function getMDom(a, b, c) {
      if (!b) return null;for (; b && b.id !== a.treeId;) {
        for (var d = 0, e = c.length; b.tagName && d < e; d++) {
          if (j.eqs(b.tagName, c[d].tagName) && b.getAttribute(c[d].attrName) !== null) return b;
        }b = b.parentNode;
      }return null;
    }, getNodeMainDom: function getNodeMainDom(a) {
      return q(a).parent("li").get(0) || q(a).parentsUntil("li").parent().get(0);
    }, isChildOrSelf: function isChildOrSelf(a, b) {
      return q(a).closest("#" + b).length > 0;
    }, uCanDo: function uCanDo() {
      return !0;
    } },
      i = { addNodes: function addNodes(a, b, c, d, g) {
      var h = e.nodeIsParent(a, b);if (!a.data.keep.leaf || !b || h) if (j.isArray(d) || (d = [d]), a.data.simpleData.enable && (d = e.transformTozTreeFormat(a, d)), b) {
        var h = l(b, f.id.SWITCH, a),
            k = l(b, f.id.ICON, a),
            m = l(b, f.id.UL, a);if (!b.open) i.replaceSwitchClass(b, h, f.folder.CLOSE), i.replaceIcoClass(b, k, f.folder.CLOSE), b.open = !1, m.css({ display: "none" });e.addNodesData(a, b, c, d);i.createNodes(a, b.level + 1, d, b, c);g || i.expandCollapseParentNode(a, b, !0);
      } else e.addNodesData(a, e.getRoot(a), c, d), i.createNodes(a, 0, d, null, c);
    }, appendNodes: function appendNodes(a, b, c, d, g, h, k) {
      if (!c) return [];var f = [],
          j = d ? d : e.getRoot(a),
          j = e.nodeChildren(a, j),
          o,
          l;if (!j || g >= j.length - c.length) g = -1;for (var n = 0, Q = c.length; n < Q; n++) {
        var p = c[n];h && (o = (g === 0 || j.length == c.length) && n == 0, l = g < 0 && n == c.length - 1, e.initNode(a, b, p, d, o, l, k), e.addNodeCache(a, p));o = e.nodeIsParent(a, p);l = [];var q = e.nodeChildren(a, p);q && q.length > 0 && (l = i.appendNodes(a, b + 1, q, p, -1, h, k && p.open));k && (i.makeDOMNodeMainBefore(f, a, p), i.makeDOMNodeLine(f, a, p), e.getBeforeA(a, p, f), i.makeDOMNodeNameBefore(f, a, p), e.getInnerBeforeA(a, p, f), i.makeDOMNodeIcon(f, a, p), e.getInnerAfterA(a, p, f), i.makeDOMNodeNameAfter(f, a, p), e.getAfterA(a, p, f), o && p.open && i.makeUlHtml(a, p, f, l.join("")), i.makeDOMNodeMainAfter(f, a, p), e.addCreatedNode(a, p));
      }return f;
    }, appendParentULDom: function appendParentULDom(a, b) {
      var c = [],
          d = l(b, a);!d.get(0) && b.parentTId && (i.appendParentULDom(a, b.getParentNode()), d = l(b, a));var g = l(b, f.id.UL, a);g.get(0) && g.remove();g = e.nodeChildren(a, b);g = i.appendNodes(a, b.level + 1, g, b, -1, !1, !0);i.makeUlHtml(a, b, c, g.join(""));d.append(c.join(""));
    }, asyncNode: function asyncNode(a, b, c, d) {
      var g, h;g = e.nodeIsParent(a, b);if (b && !g) return j.apply(d), !1;else if (b && b.isAjaxing) return !1;else if (j.apply(a.callback.beforeAsync, [a.treeId, b], !0) == !1) return j.apply(d), !1;if (b) b.isAjaxing = !0, l(b, f.id.ICON, a).attr({ style: "", "class": f.className.BUTTON + " " + f.className.ICO_LOADING });var k = {},
          m = j.apply(a.async.autoParam, [a.treeId, b], a.async.autoParam);for (g = 0, h = m.length; b && g < h; g++) {
        var r = m[g].split("="),
            o = r;r.length > 1 && (o = r[1], r = r[0]);k[o] = b[r];
      }m = j.apply(a.async.otherParam, [a.treeId, b], a.async.otherParam);if (j.isArray(m)) for (g = 0, h = m.length; g < h; g += 2) {
        k[m[g]] = m[g + 1];
      } else for (var n in m) {
        k[n] = m[n];
      }var P = e.getRoot(a)._ver;q.ajax({ contentType: a.async.contentType, cache: !1, type: a.async.type, url: j.apply(a.async.url, [a.treeId, b], a.async.url), data: a.async.contentType.indexOf("application/json") > -1 ? JSON.stringify(k) : k, dataType: a.async.dataType, success: function success(h) {
          if (P == e.getRoot(a)._ver) {
            var k = [];try {
              k = !h || h.length == 0 ? [] : typeof h == "string" ? eval("(" + h + ")") : h;
            } catch (g) {
              k = h;
            }if (b) b.isAjaxing = null, b.zAsync = !0;i.setNodeLineIcos(a, b);k && k !== "" ? (k = j.apply(a.async.dataFilter, [a.treeId, b, k], k), i.addNodes(a, b, -1, k ? j.clone(k) : [], !!c)) : i.addNodes(a, b, -1, [], !!c);a.treeObj.trigger(f.event.ASYNC_SUCCESS, [a.treeId, b, h]);j.apply(d);
          }
        }, error: function error(c, d, h) {
          if (P == e.getRoot(a)._ver) {
            if (b) b.isAjaxing = null;i.setNodeLineIcos(a, b);a.treeObj.trigger(f.event.ASYNC_ERROR, [a.treeId, b, c, d, h]);
          }
        } });return !0;
    }, cancelPreSelectedNode: function cancelPreSelectedNode(a, b, c) {
      var d = e.getRoot(a).curSelectedList,
          g,
          h;for (g = d.length - 1; g >= 0; g--) {
        if (h = d[g], b === h || !b && (!c || c !== h)) if (l(h, f.id.A, a).removeClass(f.node.CURSELECTED), b) {
          e.removeSelectedNode(a, b);break;
        } else d.splice(g, 1), a.treeObj.trigger(f.event.UNSELECTED, [a.treeId, h]);
      }
    }, createNodeCallback: function createNodeCallback(a) {
      if (a.callback.onNodeCreated || a.view.addDiyDom) for (var b = e.getRoot(a); b.createdNodes.length > 0;) {
        var c = b.createdNodes.shift();j.apply(a.view.addDiyDom, [a.treeId, c]);a.callback.onNodeCreated && a.treeObj.trigger(f.event.NODECREATED, [a.treeId, c]);
      }
    }, createNodes: function createNodes(a, b, c, d, g) {
      if (c && c.length != 0) {
        var h = e.getRoot(a),
            k = !d || d.open || !!l(e.nodeChildren(a, d)[0], a).get(0);h.createdNodes = [];var b = i.appendNodes(a, b, c, d, g, !0, k),
            m,
            j;d ? (d = l(d, f.id.UL, a), d.get(0) && (m = d)) : m = a.treeObj;m && (g >= 0 && (j = m.children()[g]), g >= 0 && j ? q(j).before(b.join("")) : m.append(b.join("")));i.createNodeCallback(a);
      }
    }, destroy: function destroy(a) {
      a && (e.initCache(a), e.initRoot(a), n.unbindTree(a), n.unbindEvent(a), a.treeObj.empty(), delete s[a.treeId]);
    }, expandCollapseNode: function expandCollapseNode(a, b, c, d, g) {
      var h = e.getRoot(a),
          k;if (b) {
        var m = e.nodeChildren(a, b),
            r = e.nodeIsParent(a, b);if (h.expandTriggerFlag) k = g, g = function g() {
          k && k();b.open ? a.treeObj.trigger(f.event.EXPAND, [a.treeId, b]) : a.treeObj.trigger(f.event.COLLAPSE, [a.treeId, b]);
        }, h.expandTriggerFlag = !1;if (!b.open && r && (!l(b, f.id.UL, a).get(0) || m && m.length > 0 && !l(m[0], a).get(0))) i.appendParentULDom(a, b), i.createNodeCallback(a);if (b.open == c) j.apply(g, []);else {
          var c = l(b, f.id.UL, a),
              h = l(b, f.id.SWITCH, a),
              o = l(b, f.id.ICON, a);r ? (b.open = !b.open, b.iconOpen && b.iconClose && o.attr("style", i.makeNodeIcoStyle(a, b)), b.open ? (i.replaceSwitchClass(b, h, f.folder.OPEN), i.replaceIcoClass(b, o, f.folder.OPEN), d == !1 || a.view.expandSpeed == "" ? (c.show(), j.apply(g, [])) : m && m.length > 0 ? c.slideDown(a.view.expandSpeed, g) : (c.show(), j.apply(g, []))) : (i.replaceSwitchClass(b, h, f.folder.CLOSE), i.replaceIcoClass(b, o, f.folder.CLOSE), d == !1 || a.view.expandSpeed == "" || !(m && m.length > 0) ? (c.hide(), j.apply(g, [])) : c.slideUp(a.view.expandSpeed, g))) : j.apply(g, []);
        }
      } else j.apply(g, []);
    }, expandCollapseParentNode: function expandCollapseParentNode(a, b, c, d, e) {
      b && (b.parentTId ? (i.expandCollapseNode(a, b, c, d), b.parentTId && i.expandCollapseParentNode(a, b.getParentNode(), c, d, e)) : i.expandCollapseNode(a, b, c, d, e));
    }, expandCollapseSonNode: function expandCollapseSonNode(a, b, c, d, g) {
      var h = e.getRoot(a),
          h = b ? e.nodeChildren(a, b) : e.nodeChildren(a, h),
          k = b ? !1 : d,
          f = e.getRoot(a).expandTriggerFlag;e.getRoot(a).expandTriggerFlag = !1;if (h) for (var j = 0, l = h.length; j < l; j++) {
        h[j] && i.expandCollapseSonNode(a, h[j], c, k);
      }e.getRoot(a).expandTriggerFlag = f;i.expandCollapseNode(a, b, c, d, g);
    }, isSelectedNode: function isSelectedNode(a, b) {
      if (!b) return !1;var c = e.getRoot(a).curSelectedList,
          d;for (d = c.length - 1; d >= 0; d--) {
        if (b === c[d]) return !0;
      }return !1;
    }, makeDOMNodeIcon: function makeDOMNodeIcon(a, b, c) {
      var d = e.nodeName(b, c),
          d = b.view.nameIsHTML ? d : d.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");a.push("<span id='", c.tId, f.id.ICON, "' title='' treeNode", f.id.ICON, " class='", i.makeNodeIcoClass(b, c), "' style='", i.makeNodeIcoStyle(b, c), "'></span><span id='", c.tId, f.id.SPAN, "' class='", f.className.NAME, "'>", d, "</span>");
    }, makeDOMNodeLine: function makeDOMNodeLine(a, b, c) {
      a.push("<span id='", c.tId, f.id.SWITCH, "' title='' class='", i.makeNodeLineClass(b, c), "' treeNode", f.id.SWITCH, "></span>");
    }, makeDOMNodeMainAfter: function makeDOMNodeMainAfter(a) {
      a.push("</li>");
    }, makeDOMNodeMainBefore: function makeDOMNodeMainBefore(a, b, c) {
      a.push("<li id='", c.tId, "' class='", f.className.LEVEL, c.level, "' tabindex='0' hidefocus='true' treenode>");
    }, makeDOMNodeNameAfter: function makeDOMNodeNameAfter(a) {
      a.push("</a>");
    }, makeDOMNodeNameBefore: function makeDOMNodeNameBefore(a, b, c) {
      var d = e.nodeTitle(b, c),
          g = i.makeNodeUrl(b, c),
          h = i.makeNodeFontCss(b, c),
          k = [],
          m;for (m in h) {
        k.push(m, ":", h[m], ";");
      }a.push("<a id='", c.tId, f.id.A, "' class='", f.className.LEVEL, c.level, "' treeNode", f.id.A, ' onclick="', c.click || "", '" ', g != null && g.length > 0 ? "href='" + g + "'" : "", " target='", i.makeNodeTarget(c), "' style='", k.join(""), "'");j.apply(b.view.showTitle, [b.treeId, c], b.view.showTitle) && d && a.push("title='", d.replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), "'");a.push(">");
    }, makeNodeFontCss: function makeNodeFontCss(a, b) {
      var c = j.apply(a.view.fontCss, [a.treeId, b], a.view.fontCss);return c && typeof c != "function" ? c : {};
    }, makeNodeIcoClass: function makeNodeIcoClass(a, b) {
      var c = ["ico"];if (!b.isAjaxing) {
        var d = e.nodeIsParent(a, b);c[0] = (b.iconSkin ? b.iconSkin + "_" : "") + c[0];d ? c.push(b.open ? f.folder.OPEN : f.folder.CLOSE) : c.push(f.folder.DOCU);
      }return f.className.BUTTON + " " + c.join("_");
    }, makeNodeIcoStyle: function makeNodeIcoStyle(a, b) {
      var c = [];if (!b.isAjaxing) {
        var d = e.nodeIsParent(a, b) && b.iconOpen && b.iconClose ? b.open ? b.iconOpen : b.iconClose : b[a.data.key.icon];d && c.push("background:url(", d, ") 0 0 no-repeat;");(a.view.showIcon == !1 || !j.apply(a.view.showIcon, [a.treeId, b], !0)) && c.push("width:0px;height:0px;");
      }return c.join("");
    }, makeNodeLineClass: function makeNodeLineClass(a, b) {
      var c = [];a.view.showLine ? b.level == 0 && b.isFirstNode && b.isLastNode ? c.push(f.line.ROOT) : b.level == 0 && b.isFirstNode ? c.push(f.line.ROOTS) : b.isLastNode ? c.push(f.line.BOTTOM) : c.push(f.line.CENTER) : c.push(f.line.NOLINE);e.nodeIsParent(a, b) ? c.push(b.open ? f.folder.OPEN : f.folder.CLOSE) : c.push(f.folder.DOCU);return i.makeNodeLineClassEx(b) + c.join("_");
    }, makeNodeLineClassEx: function makeNodeLineClassEx(a) {
      return f.className.BUTTON + " " + f.className.LEVEL + a.level + " " + f.className.SWITCH + " ";
    }, makeNodeTarget: function makeNodeTarget(a) {
      return a.target || "_blank";
    }, makeNodeUrl: function makeNodeUrl(a, b) {
      var c = a.data.key.url;return b[c] ? b[c] : null;
    }, makeUlHtml: function makeUlHtml(a, b, c, d) {
      c.push("<ul id='", b.tId, f.id.UL, "' class='", f.className.LEVEL, b.level, " ", i.makeUlLineClass(a, b), "' style='display:", b.open ? "block" : "none", "'>");c.push(d);c.push("</ul>");
    }, makeUlLineClass: function makeUlLineClass(a, b) {
      return a.view.showLine && !b.isLastNode ? f.line.LINE : "";
    }, removeChildNodes: function removeChildNodes(a, b) {
      if (b) {
        var c = e.nodeChildren(a, b);if (c) {
          for (var d = 0, g = c.length; d < g; d++) {
            e.removeNodeCache(a, c[d]);
          }e.removeSelectedNode(a);delete b[a.data.key.children];a.data.keep.parent ? l(b, f.id.UL, a).empty() : (e.nodeIsParent(a, b, !1), b.open = !1, c = l(b, f.id.SWITCH, a), d = l(b, f.id.ICON, a), i.replaceSwitchClass(b, c, f.folder.DOCU), i.replaceIcoClass(b, d, f.folder.DOCU), l(b, f.id.UL, a).remove());
        }
      }
    }, scrollIntoView: function scrollIntoView(a, b) {
      if (b) if (typeof Element === "undefined") {
        var c = a.treeObj.get(0).getBoundingClientRect(),
            d = b.getBoundingClientRect();(d.top < c.top || d.bottom > c.bottom || d.right > c.right || d.left < c.left) && b.scrollIntoView();
      } else {
        if (!Element.prototype.scrollIntoViewIfNeeded) Element.prototype.scrollIntoViewIfNeeded = function (a) {
          function b(a, c, d, f) {
            return { left: a, top: c, width: d, height: f, right: a + d, bottom: c + f, translate: function translate(e, g) {
                return b(e + a, g + c, d, f);
              }, relativeFromTo: function relativeFromTo(g, k) {
                var i = a,
                    j = c,
                    g = g.offsetParent,
                    k = k.offsetParent;if (g === k) return e;for (; g; g = g.offsetParent) {
                  i += g.offsetLeft + g.clientLeft, j += g.offsetTop + g.clientTop;
                }for (; k; k = k.offsetParent) {
                  i -= k.offsetLeft + k.clientLeft, j -= k.offsetTop + k.clientTop;
                }return b(i, j, d, f);
              } };
          }for (var c, d = this, e = b(this.offsetLeft, this.offsetTop, this.offsetWidth, this.offsetHeight); j.isElement(c = d.parentNode);) {
            var f = c.offsetLeft + c.clientLeft,
                i = c.offsetTop + c.clientTop,
                e = e.relativeFromTo(d, c).translate(-f, -i);c.scrollLeft = !1 === a || e.left <= c.scrollLeft + c.clientWidth && c.scrollLeft <= e.right - c.clientWidth + c.clientWidth ? Math.min(e.left, Math.max(e.right - c.clientWidth, c.scrollLeft)) : (e.right - c.clientWidth + e.left) / 2;c.scrollTop = !1 === a || e.top <= c.scrollTop + c.clientHeight && c.scrollTop <= e.bottom - c.clientHeight + c.clientHeight ? Math.min(e.top, Math.max(e.bottom - c.clientHeight, c.scrollTop)) : (e.bottom - c.clientHeight + e.top) / 2;e = e.translate(f - c.scrollLeft, i - c.scrollTop);d = c;
          }
        };b.scrollIntoViewIfNeeded();
      }
    }, setFirstNode: function setFirstNode(a, b) {
      var c = e.nodeChildren(a, b);if (c.length > 0) c[0].isFirstNode = !0;
    }, setLastNode: function setLastNode(a, b) {
      var c = e.nodeChildren(a, b);if (c.length > 0) c[c.length - 1].isLastNode = !0;
    }, removeNode: function removeNode(a, b) {
      var c = e.getRoot(a),
          d = b.parentTId ? b.getParentNode() : c;b.isFirstNode = !1;b.isLastNode = !1;b.getPreNode = function () {
        return null;
      };b.getNextNode = function () {
        return null;
      };if (e.getNodeCache(a, b.tId)) {
        l(b, a).remove();e.removeNodeCache(a, b);e.removeSelectedNode(a, b);for (var g = e.nodeChildren(a, d), h = 0, k = g.length; h < k; h++) {
          if (g[h].tId == b.tId) {
            g.splice(h, 1);break;
          }
        }i.setFirstNode(a, d);i.setLastNode(a, d);var j,
            h = g.length;if (!a.data.keep.parent && h == 0) e.nodeIsParent(a, d, !1), d.open = !1, delete d[a.data.key.children], h = l(d, f.id.UL, a), k = l(d, f.id.SWITCH, a), j = l(d, f.id.ICON, a), i.replaceSwitchClass(d, k, f.folder.DOCU), i.replaceIcoClass(d, j, f.folder.DOCU), h.css("display", "none");else if (a.view.showLine && h > 0) {
          var r = g[h - 1],
              h = l(r, f.id.UL, a),
              k = l(r, f.id.SWITCH, a);j = l(r, f.id.ICON, a);d == c ? g.length == 1 ? i.replaceSwitchClass(r, k, f.line.ROOT) : (c = l(g[0], f.id.SWITCH, a), i.replaceSwitchClass(g[0], c, f.line.ROOTS), i.replaceSwitchClass(r, k, f.line.BOTTOM)) : i.replaceSwitchClass(r, k, f.line.BOTTOM);h.removeClass(f.line.LINE);
        }
      }
    }, replaceIcoClass: function replaceIcoClass(a, b, c) {
      if (b && !a.isAjaxing && (a = b.attr("class"), a != void 0)) {
        a = a.split("_");switch (c) {case f.folder.OPEN:case f.folder.CLOSE:case f.folder.DOCU:
            a[a.length - 1] = c;}b.attr("class", a.join("_"));
      }
    }, replaceSwitchClass: function replaceSwitchClass(a, b, c) {
      if (b) {
        var d = b.attr("class");if (d != void 0) {
          d = d.split("_");switch (c) {case f.line.ROOT:case f.line.ROOTS:case f.line.CENTER:case f.line.BOTTOM:case f.line.NOLINE:
              d[0] = i.makeNodeLineClassEx(a) + c;break;case f.folder.OPEN:case f.folder.CLOSE:case f.folder.DOCU:
              d[1] = c;}b.attr("class", d.join("_"));c !== f.folder.DOCU ? b.removeAttr("disabled") : b.attr("disabled", "disabled");
        }
      }
    }, selectNode: function selectNode(a, b, c) {
      c || i.cancelPreSelectedNode(a, null, b);l(b, f.id.A, a).addClass(f.node.CURSELECTED);e.addSelectedNode(a, b);a.treeObj.trigger(f.event.SELECTED, [a.treeId, b]);
    }, setNodeFontCss: function setNodeFontCss(a, b) {
      var c = l(b, f.id.A, a),
          d = i.makeNodeFontCss(a, b);d && c.css(d);
    }, setNodeLineIcos: function setNodeLineIcos(a, b) {
      if (b) {
        var c = l(b, f.id.SWITCH, a),
            d = l(b, f.id.UL, a),
            g = l(b, f.id.ICON, a),
            h = i.makeUlLineClass(a, b);h.length == 0 ? d.removeClass(f.line.LINE) : d.addClass(h);c.attr("class", i.makeNodeLineClass(a, b));e.nodeIsParent(a, b) ? c.removeAttr("disabled") : c.attr("disabled", "disabled");g.removeAttr("style");g.attr("style", i.makeNodeIcoStyle(a, b));g.attr("class", i.makeNodeIcoClass(a, b));
      }
    }, setNodeName: function setNodeName(a, b) {
      var c = e.nodeTitle(a, b),
          d = l(b, f.id.SPAN, a);d.empty();a.view.nameIsHTML ? d.html(e.nodeName(a, b)) : d.text(e.nodeName(a, b));j.apply(a.view.showTitle, [a.treeId, b], a.view.showTitle) && l(b, f.id.A, a).attr("title", !c ? "" : c);
    }, setNodeTarget: function setNodeTarget(a, b) {
      l(b, f.id.A, a).attr("target", i.makeNodeTarget(b));
    }, setNodeUrl: function setNodeUrl(a, b) {
      var c = l(b, f.id.A, a),
          d = i.makeNodeUrl(a, b);d == null || d.length == 0 ? c.removeAttr("href") : c.attr("href", d);
    }, switchNode: function switchNode(a, b) {
      b.open || !j.canAsync(a, b) ? i.expandCollapseNode(a, b, !b.open) : a.async.enable ? i.asyncNode(a, b) || i.expandCollapseNode(a, b, !b.open) : b && i.expandCollapseNode(a, b, !b.open);
    } };q.fn.zTree = { consts: { className: { BUTTON: "button", LEVEL: "level", ICO_LOADING: "ico_loading", SWITCH: "switch", NAME: "node_name" }, event: { NODECREATED: "ztree_nodeCreated", CLICK: "ztree_click", EXPAND: "ztree_expand", COLLAPSE: "ztree_collapse",
        ASYNC_SUCCESS: "ztree_async_success", ASYNC_ERROR: "ztree_async_error", REMOVE: "ztree_remove", SELECTED: "ztree_selected", UNSELECTED: "ztree_unselected" }, id: { A: "_a", ICON: "_ico", SPAN: "_span", SWITCH: "_switch", UL: "_ul" }, line: { ROOT: "root", ROOTS: "roots", CENTER: "center", BOTTOM: "bottom", NOLINE: "noline", LINE: "line" }, folder: { OPEN: "open", CLOSE: "close", DOCU: "docu" }, node: { CURSELECTED: "curSelectedNode" } }, _z: { tools: j, view: i, event: n, data: e }, getZTreeObj: function getZTreeObj(a) {
      return (a = e.getZTreeTools(a)) ? a : null;
    }, destroy: function destroy(a) {
      if (a && a.length > 0) i.destroy(e.getSetting(a));else for (var b in s) {
        i.destroy(s[b]);
      }
    }, init: function init(a, b, c) {
      var d = j.clone(N);q.extend(!0, d, b);d.treeId = a.attr("id");d.treeObj = a;d.treeObj.empty();s[d.treeId] = d;if (typeof document.body.style.maxHeight === "undefined") d.view.expandSpeed = "";e.initRoot(d);a = e.getRoot(d);c = c ? j.clone(j.isArray(c) ? c : [c]) : [];d.data.simpleData.enable ? e.nodeChildren(d, a, e.transformTozTreeFormat(d, c)) : e.nodeChildren(d, a, c);e.initCache(d);n.unbindTree(d);n.bindTree(d);n.unbindEvent(d);n.bindEvent(d);
      var g = { setting: d, addNodes: function addNodes(a, b, c, g) {
          function f() {
            i.addNodes(d, a, b, n, g == !0);
          }a || (a = null);var l = e.nodeIsParent(d, a);if (a && !l && d.data.keep.leaf) return null;l = parseInt(b, 10);isNaN(l) ? (g = !!c, c = b, b = -1) : b = l;if (!c) return null;var n = j.clone(j.isArray(c) ? c : [c]);j.canAsync(d, a) ? i.asyncNode(d, a, g, f) : f();return n;
        }, cancelSelectedNode: function cancelSelectedNode(a) {
          i.cancelPreSelectedNode(d, a);
        }, destroy: function destroy() {
          i.destroy(d);
        }, expandAll: function expandAll(a) {
          a = !!a;i.expandCollapseSonNode(d, null, a, !0);return a;
        }, expandNode: function expandNode(a, b, c, g, f) {
          function n() {
            var b = l(a, d).get(0);b && g !== !1 && i.scrollIntoView(d, b);
          }if (!a || !e.nodeIsParent(d, a)) return null;b !== !0 && b !== !1 && (b = !a.open);if ((f = !!f) && b && j.apply(d.callback.beforeExpand, [d.treeId, a], !0) == !1) return null;else if (f && !b && j.apply(d.callback.beforeCollapse, [d.treeId, a], !0) == !1) return null;b && a.parentTId && i.expandCollapseParentNode(d, a.getParentNode(), b, !1);if (b === a.open && !c) return null;e.getRoot(d).expandTriggerFlag = f;!j.canAsync(d, a) && c ? i.expandCollapseSonNode(d, a, b, !0, n) : (a.open = !b, i.switchNode(this.setting, a), n());return b;
        }, getNodes: function getNodes() {
          return e.getNodes(d);
        }, getNodeByParam: function getNodeByParam(a, b, c) {
          return !a ? null : e.getNodeByParam(d, c ? e.nodeChildren(d, c) : e.getNodes(d), a, b);
        }, getNodeByTId: function getNodeByTId(a) {
          return e.getNodeCache(d, a);
        }, getNodesByParam: function getNodesByParam(a, b, c) {
          return !a ? null : e.getNodesByParam(d, c ? e.nodeChildren(d, c) : e.getNodes(d), a, b);
        }, getNodesByParamFuzzy: function getNodesByParamFuzzy(a, b, c) {
          return !a ? null : e.getNodesByParamFuzzy(d, c ? e.nodeChildren(d, c) : e.getNodes(d), a, b);
        }, getNodesByFilter: function getNodesByFilter(a, b, c, f) {
          b = !!b;return !a || typeof a != "function" ? b ? null : [] : e.getNodesByFilter(d, c ? e.nodeChildren(d, c) : e.getNodes(d), a, b, f);
        }, getNodeIndex: function getNodeIndex(a) {
          if (!a) return null;for (var b = a.parentTId ? a.getParentNode() : e.getRoot(d), b = e.nodeChildren(d, b), c = 0, f = b.length; c < f; c++) {
            if (b[c] == a) return c;
          }return -1;
        }, getSelectedNodes: function getSelectedNodes() {
          for (var a = [], b = e.getRoot(d).curSelectedList, c = 0, f = b.length; c < f; c++) {
            a.push(b[c]);
          }return a;
        }, isSelectedNode: function isSelectedNode(a) {
          return e.isSelectedNode(d, a);
        }, reAsyncChildNodesPromise: function reAsyncChildNodesPromise(a, b, c) {
          return new Promise(function (d, e) {
            try {
              g.reAsyncChildNodes(a, b, c, function () {
                d(a);
              });
            } catch (f) {
              e(f);
            }
          });
        }, reAsyncChildNodes: function reAsyncChildNodes(a, b, c, g) {
          if (this.setting.async.enable) {
            var j = !a;j && (a = e.getRoot(d));if (b == "refresh") {
              for (var b = e.nodeChildren(d, a), n = 0, q = b ? b.length : 0; n < q; n++) {
                e.removeNodeCache(d, b[n]);
              }e.removeSelectedNode(d);e.nodeChildren(d, a, []);j ? this.setting.treeObj.empty() : l(a, f.id.UL, d).empty();
            }i.asyncNode(this.setting, j ? null : a, !!c, g);
          }
        }, refresh: function refresh() {
          this.setting.treeObj.empty();var a = e.getRoot(d),
              b = e.nodeChildren(d, a);e.initRoot(d);e.nodeChildren(d, a, b);e.initCache(d);i.createNodes(d, 0, e.nodeChildren(d, a), null, -1);
        }, removeChildNodes: function removeChildNodes(a) {
          if (!a) return null;var b = e.nodeChildren(d, a);i.removeChildNodes(d, a);return b ? b : null;
        }, removeNode: function removeNode(a, b) {
          a && (b = !!b, b && j.apply(d.callback.beforeRemove, [d.treeId, a], !0) == !1 || (i.removeNode(d, a), b && this.setting.treeObj.trigger(f.event.REMOVE, [d.treeId, a])));
        }, selectNode: function selectNode(a, b, c) {
          function e() {
            if (!c) {
              var b = l(a, d).get(0);i.scrollIntoView(d, b);
            }
          }if (a && j.uCanDo(d)) {
            b = d.view.selectedMulti && b;if (a.parentTId) i.expandCollapseParentNode(d, a.getParentNode(), !0, !1, e);else if (!c) try {
              l(a, d).focus().blur();
            } catch (f) {}i.selectNode(d, a, b);
          }
        }, transformTozTreeNodes: function transformTozTreeNodes(a) {
          return e.transformTozTreeFormat(d, a);
        }, transformToArray: function transformToArray(a) {
          return e.transformToArrayFormat(d, a);
        }, updateNode: function updateNode(a) {
          a && l(a, d).get(0) && j.uCanDo(d) && (i.setNodeName(d, a), i.setNodeTarget(d, a), i.setNodeUrl(d, a), i.setNodeLineIcos(d, a), i.setNodeFontCss(d, a));
        } };a.treeTools = g;e.setZTreeTools(d, g);(c = e.nodeChildren(d, a)) && c.length > 0 ? i.createNodes(d, 0, c, null, -1) : d.async.enable && d.async.url && d.async.url !== "" && i.asyncNode(d);return g;
    } };var O = q.fn.zTree,
      l = j.$,
      f = O.consts;
})(jQuery);

/*
 * JQuery zTree excheck v3.5.35
 * http://treejs.cn/
 *
 * Copyright (c) 2010 Hunter.z
 *
 * Licensed same as jquery - MIT License
 * http://www.opensource.org/licenses/mit-license.php
 *
 * email: hunter.z@263.net
 * Date: 2018-03-30
 */
(function (n) {
  var q,
      r,
      s,
      p = { event: { CHECK: "ztree_check" }, id: { CHECK: "_check" }, checkbox: { STYLE: "checkbox", DEFAULT: "chk", DISABLED: "disable", FALSE: "false", TRUE: "true", FULL: "full", PART: "part", FOCUS: "focus" }, radio: { STYLE: "radio", TYPE_ALL: "all", TYPE_LEVEL: "level" } },
      w = { check: { enable: !1, autoCheckTrigger: !1, chkStyle: p.checkbox.STYLE, nocheckInherit: !1, chkDisabledInherit: !1, radioType: p.radio.TYPE_LEVEL, chkboxType: { Y: "ps", N: "ps" } }, data: { key: { checked: "checked" } }, callback: { beforeCheck: null, onCheck: null } };q = function q(c, a) {
    if (a.chkDisabled === !0) return !1;var b = e.getSetting(c.data.treeId);if (i.apply(b.callback.beforeCheck, [b.treeId, a], !0) == !1) return !0;var d = e.nodeChecked(b, a);e.nodeChecked(b, a, !d);f.checkNodeRelation(b, a);d = m(a, h.id.CHECK, b);f.setChkClass(b, d, a);f.repairParentChkClassWithSelf(b, a);b.treeObj.trigger(h.event.CHECK, [c, b.treeId, a]);return !0;
  };r = function r(c, a) {
    if (a.chkDisabled === !0) return !1;var b = e.getSetting(c.data.treeId),
        d = m(a, h.id.CHECK, b);a.check_Focus = !0;f.setChkClass(b, d, a);return !0;
  };s = function s(c, a) {
    if (a.chkDisabled === !0) return !1;var b = e.getSetting(c.data.treeId),
        d = m(a, h.id.CHECK, b);a.check_Focus = !1;f.setChkClass(b, d, a);return !0;
  };n.extend(!0, n.fn.zTree.consts, p);n.extend(!0, n.fn.zTree._z, { tools: {}, view: { checkNodeRelation: function checkNodeRelation(c, a) {
        var b, d, j;d = h.radio;b = e.nodeChecked(c, a);if (c.check.chkStyle == d.STYLE) {
          var g = e.getRadioCheckedList(c);if (b) {
            if (c.check.radioType == d.TYPE_ALL) {
              for (d = g.length - 1; d >= 0; d--) {
                b = g[d];var k = e.nodeChecked(c, b);k && b != a && (e.nodeChecked(c, b, !1), g.splice(d, 1), f.setChkClass(c, m(b, h.id.CHECK, c), b), b.parentTId != a.parentTId && f.repairParentChkClassWithSelf(c, b));
              }g.push(a);
            } else {
              g = a.parentTId ? a.getParentNode() : e.getRoot(c);g = e.nodeChildren(c, g);for (d = 0, j = g.length; d < j; d++) {
                if (b = g[d], (k = e.nodeChecked(c, b)) && b != a) e.nodeChecked(c, b, !1), f.setChkClass(c, m(b, h.id.CHECK, c), b);
              }
            }
          } else if (c.check.radioType == d.TYPE_ALL) for (d = 0, j = g.length; d < j; d++) {
            if (a == g[d]) {
              g.splice(d, 1);break;
            }
          }
        } else g = e.nodeChildren(c, a), b && (!g || g.length == 0 || c.check.chkboxType.Y.indexOf("s") > -1) && f.setSonNodeCheckBox(c, a, !0), !b && (!g || g.length == 0 || c.check.chkboxType.N.indexOf("s") > -1) && f.setSonNodeCheckBox(c, a, !1), b && c.check.chkboxType.Y.indexOf("p") > -1 && f.setParentNodeCheckBox(c, a, !0), !b && c.check.chkboxType.N.indexOf("p") > -1 && f.setParentNodeCheckBox(c, a, !1);
      }, makeChkClass: function makeChkClass(c, a) {
        var b = h.checkbox,
            d = h.radio,
            j = "",
            g = e.nodeChecked(c, a),
            j = a.chkDisabled === !0 ? b.DISABLED : a.halfCheck ? b.PART : c.check.chkStyle == d.STYLE ? a.check_Child_State < 1 ? b.FULL : b.PART : g ? a.check_Child_State === 2 || a.check_Child_State === -1 ? b.FULL : b.PART : a.check_Child_State < 1 ? b.FULL : b.PART,
            d = c.check.chkStyle + "_" + (g ? b.TRUE : b.FALSE) + "_" + j,
            d = a.check_Focus && a.chkDisabled !== !0 ? d + "_" + b.FOCUS : d;return h.className.BUTTON + " " + b.DEFAULT + " " + d;
      }, repairAllChk: function repairAllChk(c, a) {
        if (c.check.enable && c.check.chkStyle === h.checkbox.STYLE) for (var b = e.getRoot(c), b = e.nodeChildren(c, b), d = 0, j = b.length; d < j; d++) {
          var g = b[d];g.nocheck !== !0 && g.chkDisabled !== !0 && e.nodeChecked(c, g, a);f.setSonNodeCheckBox(c, g, a);
        }
      }, repairChkClass: function repairChkClass(c, a) {
        if (a && (e.makeChkFlag(c, a), a.nocheck !== !0)) {
          var b = m(a, h.id.CHECK, c);f.setChkClass(c, b, a);
        }
      }, repairParentChkClass: function repairParentChkClass(c, a) {
        if (a && a.parentTId) {
          var b = a.getParentNode();f.repairChkClass(c, b);f.repairParentChkClass(c, b);
        }
      }, repairParentChkClassWithSelf: function repairParentChkClassWithSelf(c, a) {
        if (a) {
          var b = e.nodeChildren(c, a);b && b.length > 0 ? f.repairParentChkClass(c, b[0]) : f.repairParentChkClass(c, a);
        }
      }, repairSonChkDisabled: function repairSonChkDisabled(c, a, b, d) {
        if (a) {
          if (a.chkDisabled != b) a.chkDisabled = b;f.repairChkClass(c, a);if ((a = e.nodeChildren(c, a)) && d) for (var j = 0, g = a.length; j < g; j++) {
            f.repairSonChkDisabled(c, a[j], b, d);
          }
        }
      }, repairParentChkDisabled: function repairParentChkDisabled(c, a, b, d) {
        if (a) {
          if (a.chkDisabled != b && d) a.chkDisabled = b;f.repairChkClass(c, a);f.repairParentChkDisabled(c, a.getParentNode(), b, d);
        }
      }, setChkClass: function setChkClass(c, a, b) {
        a && (b.nocheck === !0 ? a.hide() : a.show(), a.attr("class", f.makeChkClass(c, b)));
      }, setParentNodeCheckBox: function setParentNodeCheckBox(c, a, b, d) {
        var j = m(a, h.id.CHECK, c);d || (d = a);e.makeChkFlag(c, a);a.nocheck !== !0 && a.chkDisabled !== !0 && (e.nodeChecked(c, a, b), f.setChkClass(c, j, a), c.check.autoCheckTrigger && a != d && c.treeObj.trigger(h.event.CHECK, [null, c.treeId, a]));if (a.parentTId) {
          j = !0;if (!b) for (var g = e.nodeChildren(c, a.getParentNode()), k = 0, o = g.length; k < o; k++) {
            var l = g[k],
                i = e.nodeChecked(c, l);if (l.nocheck !== !0 && l.chkDisabled !== !0 && i || (l.nocheck === !0 || l.chkDisabled === !0) && l.check_Child_State > 0) {
              j = !1;break;
            }
          }j && f.setParentNodeCheckBox(c, a.getParentNode(), b, d);
        }
      }, setSonNodeCheckBox: function setSonNodeCheckBox(c, a, b, d) {
        if (a) {
          var j = m(a, h.id.CHECK, c);d || (d = a);var g = !1,
              k = e.nodeChildren(c, a);if (k) for (var o = 0, l = k.length; o < l; o++) {
            var i = k[o];f.setSonNodeCheckBox(c, i, b, d);
            i.chkDisabled === !0 && (g = !0);
          }if (a != e.getRoot(c) && a.chkDisabled !== !0) {
            g && a.nocheck !== !0 && e.makeChkFlag(c, a);if (a.nocheck !== !0 && a.chkDisabled !== !0) {
              if (e.nodeChecked(c, a, b), !g) a.check_Child_State = k && k.length > 0 ? b ? 2 : 0 : -1;
            } else a.check_Child_State = -1;f.setChkClass(c, j, a);c.check.autoCheckTrigger && a != d && a.nocheck !== !0 && a.chkDisabled !== !0 && c.treeObj.trigger(h.event.CHECK, [null, c.treeId, a]);
          }
        }
      } }, event: {}, data: { getRadioCheckedList: function getRadioCheckedList(c) {
        for (var a = e.getRoot(c).radioCheckedList, b = 0, d = a.length; b < d; b++) {
          e.getNodeCache(c, a[b].tId) || (a.splice(b, 1), b--, d--);
        }return a;
      }, getCheckStatus: function getCheckStatus(c, a) {
        if (!c.check.enable || a.nocheck || a.chkDisabled) return null;var b = e.nodeChecked(c, a);return { checked: b, half: a.halfCheck ? a.halfCheck : c.check.chkStyle == h.radio.STYLE ? a.check_Child_State === 2 : b ? a.check_Child_State > -1 && a.check_Child_State < 2 : a.check_Child_State > 0 };
      }, getTreeCheckedNodes: function getTreeCheckedNodes(c, a, b, d) {
        if (!a) return [];for (var j = b && c.check.chkStyle == h.radio.STYLE && c.check.radioType == h.radio.TYPE_ALL, d = !d ? [] : d, g = 0, f = a.length; g < f; g++) {
          var i = a[g],
              l = e.nodeChildren(c, i),
              m = e.nodeChecked(c, i);if (i.nocheck !== !0 && i.chkDisabled !== !0 && m == b && (d.push(i), j)) break;e.getTreeCheckedNodes(c, l, b, d);if (j && d.length > 0) break;
        }return d;
      }, getTreeChangeCheckedNodes: function getTreeChangeCheckedNodes(c, a, b) {
        if (!a) return [];for (var b = !b ? [] : b, d = 0, j = a.length; d < j; d++) {
          var g = a[d],
              f = e.nodeChildren(c, g),
              h = e.nodeChecked(c, g);g.nocheck !== !0 && g.chkDisabled !== !0 && h != g.checkedOld && b.push(g);e.getTreeChangeCheckedNodes(c, f, b);
        }return b;
      }, makeChkFlag: function makeChkFlag(c, a) {
        if (a) {
          var b = -1,
              d = e.nodeChildren(c, a);
          if (d) for (var j = 0, g = d.length; j < g; j++) {
            var f = d[j],
                i = e.nodeChecked(c, f),
                l = -1;if (c.check.chkStyle == h.radio.STYLE) {
              if (l = f.nocheck === !0 || f.chkDisabled === !0 ? f.check_Child_State : f.halfCheck === !0 ? 2 : i ? 2 : f.check_Child_State > 0 ? 2 : 0, l == 2) {
                b = 2;break;
              } else l == 0 && (b = 0);
            } else if (c.check.chkStyle == h.checkbox.STYLE) if (l = f.nocheck === !0 || f.chkDisabled === !0 ? f.check_Child_State : f.halfCheck === !0 ? 1 : i ? f.check_Child_State === -1 || f.check_Child_State === 2 ? 2 : 1 : f.check_Child_State > 0 ? 1 : 0, l === 1) {
              b = 1;break;
            } else if (l === 2 && b > -1 && j > 0 && l !== b) {
              b = 1;break;
            } else if (b === 2 && l > -1 && l < 2) {
              b = 1;break;
            } else l > -1 && (b = l);
          }a.check_Child_State = b;
        }
      } } });var n = n.fn.zTree,
      i = n._z.tools,
      h = n.consts,
      f = n._z.view,
      e = n._z.data,
      m = i.$;e.nodeChecked = function (c, a, b) {
    if (!a) return !1;c = c.data.key.checked;typeof b !== "undefined" && (typeof b === "string" && (b = i.eqs(b, "true")), a[c] = !!b);return a[c];
  };e.exSetting(w);e.addInitBind(function (c) {
    c.treeObj.bind(h.event.CHECK, function (a, b, d, e) {
      a.srcEvent = b;i.apply(c.callback.onCheck, [a, d, e]);
    });
  });e.addInitUnBind(function (c) {
    c.treeObj.unbind(h.event.CHECK);
  });
  e.addInitCache(function () {});e.addInitNode(function (c, a, b, d) {
    if (b) {
      a = e.nodeChecked(c, b);a = e.nodeChecked(c, b, a);b.checkedOld = a;if (typeof b.nocheck == "string") b.nocheck = i.eqs(b.nocheck, "true");b.nocheck = !!b.nocheck || c.check.nocheckInherit && d && !!d.nocheck;if (typeof b.chkDisabled == "string") b.chkDisabled = i.eqs(b.chkDisabled, "true");b.chkDisabled = !!b.chkDisabled || c.check.chkDisabledInherit && d && !!d.chkDisabled;if (typeof b.halfCheck == "string") b.halfCheck = i.eqs(b.halfCheck, "true");b.halfCheck = !!b.halfCheck;
      b.check_Child_State = -1;b.check_Focus = !1;b.getCheckStatus = function () {
        return e.getCheckStatus(c, b);
      };c.check.chkStyle == h.radio.STYLE && c.check.radioType == h.radio.TYPE_ALL && a && e.getRoot(c).radioCheckedList.push(b);
    }
  });e.addInitProxy(function (c) {
    var a = c.target,
        b = e.getSetting(c.data.treeId),
        d = "",
        f = null,
        g = "",
        k = null;if (i.eqs(c.type, "mouseover")) {
      if (b.check.enable && i.eqs(a.tagName, "span") && a.getAttribute("treeNode" + h.id.CHECK) !== null) d = i.getNodeMainDom(a).id, g = "mouseoverCheck";
    } else if (i.eqs(c.type, "mouseout")) {
      if (b.check.enable && i.eqs(a.tagName, "span") && a.getAttribute("treeNode" + h.id.CHECK) !== null) d = i.getNodeMainDom(a).id, g = "mouseoutCheck";
    } else if (i.eqs(c.type, "click") && b.check.enable && i.eqs(a.tagName, "span") && a.getAttribute("treeNode" + h.id.CHECK) !== null) d = i.getNodeMainDom(a).id, g = "checkNode";if (d.length > 0) switch (f = e.getNodeCache(b, d), g) {case "checkNode":
        k = q;break;case "mouseoverCheck":
        k = r;break;case "mouseoutCheck":
        k = s;}return { stop: g === "checkNode", node: f, nodeEventType: g, nodeEventCallback: k, treeEventType: "", treeEventCallback: null };
  }, !0);e.addInitRoot(function (c) {
    e.getRoot(c).radioCheckedList = [];
  });e.addBeforeA(function (c, a, b) {
    c.check.enable && (e.makeChkFlag(c, a), b.push("<span ID='", a.tId, h.id.CHECK, "' class='", f.makeChkClass(c, a), "' treeNode", h.id.CHECK, a.nocheck === !0 ? " style='display:none;'" : "", "></span>"));
  });e.addZTreeTools(function (c, a) {
    a.checkNode = function (a, b, g, k) {
      var o = e.nodeChecked(c, a);if (a.chkDisabled !== !0 && (b !== !0 && b !== !1 && (b = !o), k = !!k, (o !== b || g) && !(k && i.apply(this.setting.callback.beforeCheck, [this.setting.treeId, a], !0) == !1) && i.uCanDo(this.setting) && this.setting.check.enable && a.nocheck !== !0)) e.nodeChecked(c, a, b), b = m(a, h.id.CHECK, this.setting), (g || this.setting.check.chkStyle === h.radio.STYLE) && f.checkNodeRelation(this.setting, a), f.setChkClass(this.setting, b, a), f.repairParentChkClassWithSelf(this.setting, a), k && this.setting.treeObj.trigger(h.event.CHECK, [null, this.setting.treeId, a]);
    };a.checkAllNodes = function (a) {
      f.repairAllChk(this.setting, !!a);
    };a.getCheckedNodes = function (a) {
      var a = a !== !1,
          b = e.nodeChildren(c, e.getRoot(this.setting));
      return e.getTreeCheckedNodes(this.setting, b, a);
    };a.getChangeCheckedNodes = function () {
      var a = e.nodeChildren(c, e.getRoot(this.setting));return e.getTreeChangeCheckedNodes(this.setting, a);
    };a.setChkDisabled = function (a, b, c, e) {
      b = !!b;c = !!c;f.repairSonChkDisabled(this.setting, a, b, !!e);f.repairParentChkDisabled(this.setting, a.getParentNode(), b, c);
    };var b = a.updateNode;a.updateNode = function (c, e) {
      b && b.apply(a, arguments);if (c && this.setting.check.enable && m(c, this.setting).get(0) && i.uCanDo(this.setting)) {
        var g = m(c, h.id.CHECK, this.setting);(e == !0 || this.setting.check.chkStyle === h.radio.STYLE) && f.checkNodeRelation(this.setting, c);f.setChkClass(this.setting, g, c);f.repairParentChkClassWithSelf(this.setting, c);
      }
    };
  });var t = f.createNodes;f.createNodes = function (c, a, b, d, e) {
    t && t.apply(f, arguments);b && f.repairParentChkClassWithSelf(c, d);
  };var u = f.removeNode;f.removeNode = function (c, a) {
    var b = a.getParentNode();u && u.apply(f, arguments);a && b && (f.repairChkClass(c, b), f.repairParentChkClass(c, b));
  };var v = f.appendNodes;f.appendNodes = function (c, a, b, d, h, g, i) {
    var m = "";v && (m = v.apply(f, arguments));d && e.makeChkFlag(c, d);return m;
  };
})(jQuery);

/*
 * JQuery zTree exedit v3.5.35
 * http://treejs.cn/
 *
 * Copyright (c) 2010 Hunter.z
 *
 * Licensed same as jquery - MIT License
 * http://www.opensource.org/licenses/mit-license.php
 *
 * email: hunter.z@263.net
 * Date: 2018-03-30
 */
(function (B) {
  var I = { event: { DRAG: "ztree_drag", DROP: "ztree_drop", RENAME: "ztree_rename", DRAGMOVE: "ztree_dragmove" }, id: { EDIT: "_edit", INPUT: "_input", REMOVE: "_remove" }, move: { TYPE_INNER: "inner", TYPE_PREV: "prev", TYPE_NEXT: "next" }, node: { CURSELECTED_EDIT: "curSelectedNode_Edit", TMPTARGET_TREE: "tmpTargetzTree", TMPTARGET_NODE: "tmpTargetNode" } },
      v = { onHoverOverNode: function onHoverOverNode(a, b) {
      var c = i.getSetting(a.data.treeId),
          d = i.getRoot(c);if (d.curHoverNode != b) v.onHoverOutNode(a);d.curHoverNode = b;e.addHoverDom(c, b);
    }, onHoverOutNode: function onHoverOutNode(a) {
      var a = i.getSetting(a.data.treeId),
          b = i.getRoot(a);if (b.curHoverNode && !i.isSelectedNode(a, b.curHoverNode)) e.removeTreeDom(a, b.curHoverNode), b.curHoverNode = null;
    }, onMousedownNode: function onMousedownNode(a, b) {
      function c(a) {
        if (m.dragFlag == 0 && Math.abs(N - a.clientX) < f.edit.drag.minMoveSize && Math.abs(O - a.clientY) < f.edit.drag.minMoveSize) return !0;var b, c, g, j;L.css("cursor", "pointer");if (m.dragFlag == 0) {
          if (k.apply(f.callback.beforeDrag, [f.treeId, n], !0) == !1) return l(a), !0;for (b = 0, c = n.length; b < c; b++) {
            if (b == 0) m.dragNodeShowBefore = [];
            g = n[b];i.nodeIsParent(f, g) && g.open ? (e.expandCollapseNode(f, g, !g.open), m.dragNodeShowBefore[g.tId] = !0) : m.dragNodeShowBefore[g.tId] = !1;
          }m.dragFlag = 1;y.showHoverDom = !1;k.showIfameMask(f, !0);j = !0;var p = -1;if (n.length > 1) {
            var o = n[0].parentTId ? i.nodeChildren(f, n[0].getParentNode()) : i.getNodes(f);g = [];for (b = 0, c = o.length; b < c; b++) {
              if (m.dragNodeShowBefore[o[b].tId] !== void 0 && (j && p > -1 && p + 1 !== b && (j = !1), g.push(o[b]), p = b), n.length === g.length) {
                n = g;break;
              }
            }
          }j && (H = n[0].getPreNode(), Q = n[n.length - 1].getNextNode());C = q("<ul class='zTreeDragUL'></ul>", f);for (b = 0, c = n.length; b < c; b++) {
            g = n[b], g.editNameFlag = !1, e.selectNode(f, g, b > 0), e.removeTreeDom(f, g), b > f.edit.drag.maxShowNodeNum - 1 || (j = q("<li id='" + g.tId + "_tmp'></li>", f), j.append(q(g, d.id.A, f).clone()), j.css("padding", "0"), j.children("#" + g.tId + d.id.A).removeClass(d.node.CURSELECTED), C.append(j), b == f.edit.drag.maxShowNodeNum - 1 && (j = q("<li id='" + g.tId + "_moretmp'><a>  ...  </a></li>", f), C.append(j)));
          }C.attr("id", n[0].tId + d.id.UL + "_tmp");C.addClass(f.treeObj.attr("class"));C.appendTo(L);u = q("<span class='tmpzTreeMove_arrow'></span>", f);u.attr("id", "zTreeMove_arrow_tmp");u.appendTo(L);f.treeObj.trigger(d.event.DRAG, [a, f.treeId, n]);
        }if (m.dragFlag == 1) {
          t && u.attr("id") == a.target.id && w && a.clientX + G.scrollLeft() + 2 > B("#" + w + d.id.A, t).offset().left ? (g = B("#" + w + d.id.A, t), a.target = g.length > 0 ? g.get(0) : a.target) : t && (t.removeClass(d.node.TMPTARGET_TREE), w && B("#" + w + d.id.A, t).removeClass(d.node.TMPTARGET_NODE + "_" + d.move.TYPE_PREV).removeClass(d.node.TMPTARGET_NODE + "_" + I.move.TYPE_NEXT).removeClass(d.node.TMPTARGET_NODE + "_" + I.move.TYPE_INNER));
          w = t = null;J = !1;h = f;g = i.getSettings();for (var z in g) {
            if (g[z].treeId && g[z].edit.enable && g[z].treeId != f.treeId && (a.target.id == g[z].treeId || B(a.target).parents("#" + g[z].treeId).length > 0)) J = !0, h = g[z];
          }z = G.scrollTop();j = G.scrollLeft();p = h.treeObj.offset();b = h.treeObj.get(0).scrollHeight;g = h.treeObj.get(0).scrollWidth;c = a.clientY + z - p.top;var E = h.treeObj.height() + p.top - a.clientY - z,
              r = a.clientX + j - p.left,
              s = h.treeObj.width() + p.left - a.clientX - j,
              p = c < f.edit.drag.borderMax && c > f.edit.drag.borderMin,
              o = E < f.edit.drag.borderMax && E > f.edit.drag.borderMin,
              F = r < f.edit.drag.borderMax && r > f.edit.drag.borderMin,
              v = s < f.edit.drag.borderMax && s > f.edit.drag.borderMin,
              E = c > f.edit.drag.borderMin && E > f.edit.drag.borderMin && r > f.edit.drag.borderMin && s > f.edit.drag.borderMin,
              r = p && h.treeObj.scrollTop() <= 0,
              s = o && h.treeObj.scrollTop() + h.treeObj.height() + 10 >= b,
              M = F && h.treeObj.scrollLeft() <= 0,
              P = v && h.treeObj.scrollLeft() + h.treeObj.width() + 10 >= g;if (a.target && k.isChildOrSelf(a.target, h.treeId)) {
            for (var D = a.target; D && D.tagName && !k.eqs(D.tagName, "li") && D.id != h.treeId;) {
              D = D.parentNode;
            }var R = !0;for (b = 0, c = n.length; b < c; b++) {
              if (g = n[b], D.id === g.tId) {
                R = !1;break;
              } else if (q(g, f).find("#" + D.id).length > 0) {
                R = !1;break;
              }
            }if (R && a.target && k.isChildOrSelf(a.target, D.id + d.id.A)) t = B(D), w = D.id;
          }g = n[0];if (E && k.isChildOrSelf(a.target, h.treeId)) {
            if (!t && (a.target.id == h.treeId || r || s || M || P) && (J || !J && g.parentTId)) t = h.treeObj;p ? h.treeObj.scrollTop(h.treeObj.scrollTop() - 10) : o && h.treeObj.scrollTop(h.treeObj.scrollTop() + 10);F ? h.treeObj.scrollLeft(h.treeObj.scrollLeft() - 10) : v && h.treeObj.scrollLeft(h.treeObj.scrollLeft() + 10);t && t != h.treeObj && t.offset().left < h.treeObj.offset().left && h.treeObj.scrollLeft(h.treeObj.scrollLeft() + t.offset().left - h.treeObj.offset().left);
          }C.css({ top: a.clientY + z + 3 + "px", left: a.clientX + j + 3 + "px" });b = j = 0;if (t && t.attr("id") != h.treeId) {
            var A = w == null ? null : i.getNodeCache(h, w),
                p = (a.ctrlKey || a.metaKey) && f.edit.drag.isMove && f.edit.drag.isCopy || !f.edit.drag.isMove && f.edit.drag.isCopy;c = !!(H && w === H.tId);F = !!(Q && w === Q.tId);o = g.parentTId && g.parentTId == w;g = (p || !F) && k.apply(h.edit.drag.prev, [h.treeId, n, A], !!h.edit.drag.prev);c = (p || !c) && k.apply(h.edit.drag.next, [h.treeId, n, A], !!h.edit.drag.next);p = (p || !o) && !(h.data.keep.leaf && !i.nodeIsParent(f, A)) && k.apply(h.edit.drag.inner, [h.treeId, n, A], !!h.edit.drag.inner);o = function o() {
              t = null;w = "";x = d.move.TYPE_INNER;u.css({ display: "none" });if (window.zTreeMoveTimer) clearTimeout(window.zTreeMoveTimer), window.zTreeMoveTargetNodeTId = null;
            };if (!g && !c && !p) o();else if (F = B("#" + w + d.id.A, t), v = A.isLastNode ? null : B("#" + A.getNextNode().tId + d.id.A, t.next()), E = F.offset().top, r = F.offset().left, s = g ? p ? 0.25 : c ? 0.5 : 1 : -1, M = c ? p ? 0.75 : g ? 0.5 : 0 : -1, z = (a.clientY + z - E) / F.height(), (s == 1 || z <= s && z >= -0.2) && g ? (j = 1 - u.width(), b = E - u.height() / 2, x = d.move.TYPE_PREV) : (M == 0 || z >= M && z <= 1.2) && c ? (j = 1 - u.width(), b = v == null || i.nodeIsParent(f, A) && A.open ? E + F.height() - u.height() / 2 : v.offset().top - u.height() / 2, x = d.move.TYPE_NEXT) : p ? (j = 5 - u.width(), b = E, x = d.move.TYPE_INNER) : o(), t) {
              u.css({ display: "block", top: b + "px", left: r + j + "px" });F.addClass(d.node.TMPTARGET_NODE + "_" + x);if (S != w || T != x) K = new Date().getTime();if (A && i.nodeIsParent(f, A) && x == d.move.TYPE_INNER && (z = !0, window.zTreeMoveTimer && window.zTreeMoveTargetNodeTId !== A.tId ? (clearTimeout(window.zTreeMoveTimer), window.zTreeMoveTargetNodeTId = null) : window.zTreeMoveTimer && window.zTreeMoveTargetNodeTId === A.tId && (z = !1), z)) window.zTreeMoveTimer = setTimeout(function () {
                x == d.move.TYPE_INNER && A && i.nodeIsParent(f, A) && !A.open && new Date().getTime() - K > h.edit.drag.autoOpenTime && k.apply(h.callback.beforeDragOpen, [h.treeId, A], !0) && (e.switchNode(h, A), h.edit.drag.autoExpandTrigger && h.treeObj.trigger(d.event.EXPAND, [h.treeId, A]));
              }, h.edit.drag.autoOpenTime + 50), window.zTreeMoveTargetNodeTId = A.tId;
            }
          } else if (x = d.move.TYPE_INNER, t && k.apply(h.edit.drag.inner, [h.treeId, n, null], !!h.edit.drag.inner) ? t.addClass(d.node.TMPTARGET_TREE) : t = null, u.css({ display: "none" }), window.zTreeMoveTimer) clearTimeout(window.zTreeMoveTimer), window.zTreeMoveTargetNodeTId = null;S = w;T = x;f.treeObj.trigger(d.event.DRAGMOVE, [a, f.treeId, n]);
        }return !1;
      }function l(a) {
        if (window.zTreeMoveTimer) clearTimeout(window.zTreeMoveTimer), window.zTreeMoveTargetNodeTId = null;T = S = null;G.unbind("mousemove", c);G.unbind("mouseup", l);G.unbind("selectstart", g);L.css("cursor", "");t && (t.removeClass(d.node.TMPTARGET_TREE), w && B("#" + w + d.id.A, t).removeClass(d.node.TMPTARGET_NODE + "_" + d.move.TYPE_PREV).removeClass(d.node.TMPTARGET_NODE + "_" + I.move.TYPE_NEXT).removeClass(d.node.TMPTARGET_NODE + "_" + I.move.TYPE_INNER));k.showIfameMask(f, !1);y.showHoverDom = !0;if (m.dragFlag != 0) {
          m.dragFlag = 0;var b, j, o;for (b = 0, j = n.length; b < j; b++) {
            o = n[b], i.nodeIsParent(f, o) && m.dragNodeShowBefore[o.tId] && !o.open && (e.expandCollapseNode(f, o, !o.open), delete m.dragNodeShowBefore[o.tId]);
          }C && C.remove();u && u.remove();var r = (a.ctrlKey || a.metaKey) && f.edit.drag.isMove && f.edit.drag.isCopy || !f.edit.drag.isMove && f.edit.drag.isCopy;!r && t && w && n[0].parentTId && w == n[0].parentTId && x == d.move.TYPE_INNER && (t = null);if (t) {
            var p = w == null ? null : i.getNodeCache(h, w);if (k.apply(f.callback.beforeDrop, [h.treeId, n, p, x, r], !0) == !1) e.selectNodes(v, n);else {
              var s = r ? k.clone(n) : n;b = function b() {
                if (J) {
                  if (!r) for (var b = 0, c = n.length; b < c; b++) {
                    e.removeNode(f, n[b]);
                  }x == d.move.TYPE_INNER ? e.addNodes(h, p, -1, s) : e.addNodes(h, p.getParentNode(), x == d.move.TYPE_PREV ? p.getIndex() : p.getIndex() + 1, s);
                } else if (r && x == d.move.TYPE_INNER) e.addNodes(h, p, -1, s);else if (r) e.addNodes(h, p.getParentNode(), x == d.move.TYPE_PREV ? p.getIndex() : p.getIndex() + 1, s);else if (x != d.move.TYPE_NEXT) for (b = 0, c = s.length; b < c; b++) {
                  e.moveNode(h, p, s[b], x, !1);
                } else for (b = -1, c = s.length - 1; b < c; c--) {
                  e.moveNode(h, p, s[c], x, !1);
                }e.selectNodes(h, s);b = q(s[0], f).get(0);e.scrollIntoView(f, b);f.treeObj.trigger(d.event.DROP, [a, h.treeId, s, p, x, r]);
              };x == d.move.TYPE_INNER && k.canAsync(h, p) ? e.asyncNode(h, p, !1, b) : b();
            }
          } else e.selectNodes(v, n), f.treeObj.trigger(d.event.DROP, [a, f.treeId, n, null, null, null]);
        }
      }function g() {
        return !1;
      }var o,
          j,
          f = i.getSetting(a.data.treeId),
          m = i.getRoot(f),
          y = i.getRoots();if (a.button == 2 || !f.edit.enable || !f.edit.drag.isCopy && !f.edit.drag.isMove) return !0;var r = a.target,
          s = i.getRoot(f).curSelectedList,
          n = [];if (i.isSelectedNode(f, b)) for (o = 0, j = s.length; o < j; o++) {
        if (s[o].editNameFlag && k.eqs(r.tagName, "input") && r.getAttribute("treeNode" + d.id.INPUT) !== null) return !0;n.push(s[o]);if (n[0].parentTId !== s[o].parentTId) {
          n = [b];break;
        }
      } else n = [b];e.editNodeBlur = !0;e.cancelCurEditNode(f);var G = B(f.treeObj.get(0).ownerDocument),
          L = B(f.treeObj.get(0).ownerDocument.body),
          C,
          u,
          t,
          J = !1,
          h = f,
          v = f,
          H,
          Q,
          S = null,
          T = null,
          w = null,
          x = d.move.TYPE_INNER,
          N = a.clientX,
          O = a.clientY,
          K = new Date().getTime();k.uCanDo(f) && G.bind("mousemove", c);G.bind("mouseup", l);G.bind("selectstart", g);return !0;
    } };B.extend(!0, B.fn.zTree.consts, I);B.extend(!0, B.fn.zTree._z, { tools: { getAbs: function getAbs(a) {
        a = a.getBoundingClientRect();return [a.left + (document.body.scrollLeft + document.documentElement.scrollLeft), a.top + (document.body.scrollTop + document.documentElement.scrollTop)];
      }, inputFocus: function inputFocus(a) {
        a.get(0) && (a.focus(), k.setCursorPosition(a.get(0), a.val().length));
      }, inputSelect: function inputSelect(a) {
        a.get(0) && (a.focus(), a.select());
      }, setCursorPosition: function setCursorPosition(a, b) {
        if (a.setSelectionRange) a.focus(), a.setSelectionRange(b, b);else if (a.createTextRange) {
          var c = a.createTextRange();c.collapse(!0);c.moveEnd("character", b);c.moveStart("character", b);c.select();
        }
      }, showIfameMask: function showIfameMask(a, b) {
        for (var c = i.getRoot(a); c.dragMaskList.length > 0;) {
          c.dragMaskList[0].remove(), c.dragMaskList.shift();
        }if (b) for (var d = q("iframe", a), g = 0, e = d.length; g < e; g++) {
          var j = d.get(g),
              f = k.getAbs(j),
              j = q("<div id='zTreeMask_" + g + "' class='zTreeMask' style='top:" + f[1] + "px; left:" + f[0] + "px; width:" + j.offsetWidth + "px; height:" + j.offsetHeight + "px;'></div>", a);j.appendTo(q("body", a));c.dragMaskList.push(j);
        }
      } }, view: { addEditBtn: function addEditBtn(a, b) {
        if (!(b.editNameFlag || q(b, d.id.EDIT, a).length > 0) && k.apply(a.edit.showRenameBtn, [a.treeId, b], a.edit.showRenameBtn)) {
          var c = q(b, d.id.A, a),
              l = "<span class='" + d.className.BUTTON + " edit' id='" + b.tId + d.id.EDIT + "' title='" + k.apply(a.edit.renameTitle, [a.treeId, b], a.edit.renameTitle) + "' treeNode" + d.id.EDIT + " style='display:none;'></span>";c.append(l);q(b, d.id.EDIT, a).bind("click", function () {
            if (!k.uCanDo(a) || k.apply(a.callback.beforeEditName, [a.treeId, b], !0) == !1) return !1;e.editNode(a, b);return !1;
          }).show();
        }
      }, addRemoveBtn: function addRemoveBtn(a, b) {
        if (!(b.editNameFlag || q(b, d.id.REMOVE, a).length > 0) && k.apply(a.edit.showRemoveBtn, [a.treeId, b], a.edit.showRemoveBtn)) {
          var c = q(b, d.id.A, a),
              l = "<span class='" + d.className.BUTTON + " remove' id='" + b.tId + d.id.REMOVE + "' title='" + k.apply(a.edit.removeTitle, [a.treeId, b], a.edit.removeTitle) + "' treeNode" + d.id.REMOVE + " style='display:none;'></span>";c.append(l);q(b, d.id.REMOVE, a).bind("click", function () {
            if (!k.uCanDo(a) || k.apply(a.callback.beforeRemove, [a.treeId, b], !0) == !1) return !1;e.removeNode(a, b);a.treeObj.trigger(d.event.REMOVE, [a.treeId, b]);return !1;
          }).bind("mousedown", function () {
            return !0;
          }).show();
        }
      }, addHoverDom: function addHoverDom(a, b) {
        if (i.getRoots().showHoverDom) b.isHover = !0, a.edit.enable && (e.addEditBtn(a, b), e.addRemoveBtn(a, b)), k.apply(a.view.addHoverDom, [a.treeId, b]);
      }, cancelCurEditNode: function cancelCurEditNode(a, b, c) {
        var l = i.getRoot(a),
            g = l.curEditNode;if (g) {
          var o = l.curEditInput,
              b = b ? b : c ? i.nodeName(a, g) : o.val();if (k.apply(a.callback.beforeRename, [a.treeId, g, b, c], !0) === !1) return !1;i.nodeName(a, g, b);q(g, d.id.A, a).removeClass(d.node.CURSELECTED_EDIT);
          o.unbind();e.setNodeName(a, g);g.editNameFlag = !1;l.curEditNode = null;l.curEditInput = null;e.selectNode(a, g, !1);a.treeObj.trigger(d.event.RENAME, [a.treeId, g, c]);
        }return l.noSelection = !0;
      }, editNode: function editNode(a, b) {
        var c = i.getRoot(a);e.editNodeBlur = !1;if (i.isSelectedNode(a, b) && c.curEditNode == b && b.editNameFlag) setTimeout(function () {
          k.inputFocus(c.curEditInput);
        }, 0);else {
          b.editNameFlag = !0;e.removeTreeDom(a, b);e.cancelCurEditNode(a);e.selectNode(a, b, !1);q(b, d.id.SPAN, a).html("<input type=text class='rename' id='" + b.tId + d.id.INPUT + "' treeNode" + d.id.INPUT + " >");var l = q(b, d.id.INPUT, a);l.attr("value", i.nodeName(a, b));a.edit.editNameSelectAll ? k.inputSelect(l) : k.inputFocus(l);l.bind("blur", function () {
            e.editNodeBlur || e.cancelCurEditNode(a);
          }).bind("keydown", function (b) {
            b.keyCode == "13" ? (e.editNodeBlur = !0, e.cancelCurEditNode(a)) : b.keyCode == "27" && e.cancelCurEditNode(a, null, !0);
          }).bind("click", function () {
            return !1;
          }).bind("dblclick", function () {
            return !1;
          });q(b, d.id.A, a).addClass(d.node.CURSELECTED_EDIT);c.curEditInput = l;
          c.noSelection = !1;c.curEditNode = b;
        }
      }, moveNode: function moveNode(a, b, c, l, g, k) {
        var j = i.getRoot(a);if (b != c && (!a.data.keep.leaf || !b || i.nodeIsParent(a, b) || l != d.move.TYPE_INNER)) {
          var f = c.parentTId ? c.getParentNode() : j,
              m = b === null || b == j;m && b === null && (b = j);if (m) l = d.move.TYPE_INNER;j = b.parentTId ? b.getParentNode() : j;if (l != d.move.TYPE_PREV && l != d.move.TYPE_NEXT) l = d.move.TYPE_INNER;if (l == d.move.TYPE_INNER) if (m) c.parentTId = null;else {
            if (!i.nodeIsParent(a, b)) i.nodeIsParent(a, b, !0), b.open = !!b.open, e.setNodeLineIcos(a, b);c.parentTId = b.tId;
          }var y;m ? y = m = a.treeObj : (!k && l == d.move.TYPE_INNER ? e.expandCollapseNode(a, b, !0, !1) : k || e.expandCollapseNode(a, b.getParentNode(), !0, !1), m = q(b, a), y = q(b, d.id.UL, a), m.get(0) && !y.get(0) && (y = [], e.makeUlHtml(a, b, y, ""), m.append(y.join(""))), y = q(b, d.id.UL, a));var r = q(c, a);r.get(0) ? m.get(0) || r.remove() : r = e.appendNodes(a, c.level, [c], null, -1, !1, !0).join("");y.get(0) && l == d.move.TYPE_INNER ? y.append(r) : m.get(0) && l == d.move.TYPE_PREV ? m.before(r) : m.get(0) && l == d.move.TYPE_NEXT && m.after(r);var s;y = -1;var r = 0,
              n = null,
              m = null,
              B = c.level,
              v = i.nodeChildren(a, f),
              C = i.nodeChildren(a, j),
              u = i.nodeChildren(a, b);if (c.isFirstNode) {
            if (y = 0, v.length > 1) n = v[1], n.isFirstNode = !0;
          } else if (c.isLastNode) y = v.length - 1, n = v[y - 1], n.isLastNode = !0;else for (j = 0, s = v.length; j < s; j++) {
            if (v[j].tId == c.tId) {
              y = j;break;
            }
          }y >= 0 && v.splice(y, 1);if (l != d.move.TYPE_INNER) for (j = 0, s = C.length; j < s; j++) {
            C[j].tId == b.tId && (r = j);
          }if (l == d.move.TYPE_INNER) {
            u || (u = i.nodeChildren(a, b, []));if (u.length > 0) m = u[u.length - 1], m.isLastNode = !1;u.splice(u.length, 0, c);c.isLastNode = !0;c.isFirstNode = u.length == 1;
          } else b.isFirstNode && l == d.move.TYPE_PREV ? (C.splice(r, 0, c), m = b, m.isFirstNode = !1, c.parentTId = b.parentTId, c.isFirstNode = !0, c.isLastNode = !1) : b.isLastNode && l == d.move.TYPE_NEXT ? (C.splice(r + 1, 0, c), m = b, m.isLastNode = !1, c.parentTId = b.parentTId, c.isFirstNode = !1, c.isLastNode = !0) : (l == d.move.TYPE_PREV ? C.splice(r, 0, c) : C.splice(r + 1, 0, c), c.parentTId = b.parentTId, c.isFirstNode = !1, c.isLastNode = !1);i.fixPIdKeyValue(a, c);i.setSonNodeLevel(a, c.getParentNode(), c);e.setNodeLineIcos(a, c);e.repairNodeLevelClass(a, c, B);!a.data.keep.parent && v.length < 1 ? (i.nodeIsParent(a, f, !1), f.open = !1, b = q(f, d.id.UL, a), l = q(f, d.id.SWITCH, a), j = q(f, d.id.ICON, a), e.replaceSwitchClass(f, l, d.folder.DOCU), e.replaceIcoClass(f, j, d.folder.DOCU), b.css("display", "none")) : n && e.setNodeLineIcos(a, n);m && e.setNodeLineIcos(a, m);a.check && a.check.enable && e.repairChkClass && (e.repairChkClass(a, f), e.repairParentChkClassWithSelf(a, f), f != c.parent && e.repairParentChkClassWithSelf(a, c));k || e.expandCollapseParentNode(a, c.getParentNode(), !0, g);
        }
      }, removeEditBtn: function removeEditBtn(a, b) {
        q(b, d.id.EDIT, a).unbind().remove();
      }, removeRemoveBtn: function removeRemoveBtn(a, b) {
        q(b, d.id.REMOVE, a).unbind().remove();
      }, removeTreeDom: function removeTreeDom(a, b) {
        b.isHover = !1;e.removeEditBtn(a, b);e.removeRemoveBtn(a, b);k.apply(a.view.removeHoverDom, [a.treeId, b]);
      }, repairNodeLevelClass: function repairNodeLevelClass(a, b, c) {
        if (c !== b.level) {
          var e = q(b, a),
              g = q(b, d.id.A, a),
              a = q(b, d.id.UL, a),
              c = d.className.LEVEL + c,
              b = d.className.LEVEL + b.level;e.removeClass(c);e.addClass(b);g.removeClass(c);g.addClass(b);a.removeClass(c);a.addClass(b);
        }
      }, selectNodes: function selectNodes(a, b) {
        for (var c = 0, d = b.length; c < d; c++) {
          e.selectNode(a, b[c], c > 0);
        }
      } }, event: {}, data: { setSonNodeLevel: function setSonNodeLevel(a, b, c) {
        if (c) {
          var d = i.nodeChildren(a, c);c.level = b ? b.level + 1 : 0;if (d) for (var b = 0, g = d.length; b < g; b++) {
            d[b] && i.setSonNodeLevel(a, c, d[b]);
          }
        }
      } } });var H = B.fn.zTree,
      k = H._z.tools,
      d = H.consts,
      e = H._z.view,
      i = H._z.data,
      q = k.$;i.exSetting({ edit: { enable: !1, editNameSelectAll: !1, showRemoveBtn: !0, showRenameBtn: !0, removeTitle: "remove", renameTitle: "rename", drag: { autoExpandTrigger: !1, isCopy: !0, isMove: !0, prev: !0, next: !0, inner: !0,
        minMoveSize: 5, borderMax: 10, borderMin: -5, maxShowNodeNum: 5, autoOpenTime: 500 } }, view: { addHoverDom: null, removeHoverDom: null }, callback: { beforeDrag: null, beforeDragOpen: null, beforeDrop: null, beforeEditName: null, beforeRename: null, onDrag: null, onDragMove: null, onDrop: null, onRename: null } });i.addInitBind(function (a) {
    var b = a.treeObj,
        c = d.event;b.bind(c.RENAME, function (b, c, d, e) {
      k.apply(a.callback.onRename, [b, c, d, e]);
    });b.bind(c.DRAG, function (b, c, d, e) {
      k.apply(a.callback.onDrag, [c, d, e]);
    });b.bind(c.DRAGMOVE, function (b, c, d, e) {
      k.apply(a.callback.onDragMove, [c, d, e]);
    });b.bind(c.DROP, function (b, c, d, e, f, i, q) {
      k.apply(a.callback.onDrop, [c, d, e, f, i, q]);
    });
  });i.addInitUnBind(function (a) {
    var a = a.treeObj,
        b = d.event;a.unbind(b.RENAME);a.unbind(b.DRAG);a.unbind(b.DRAGMOVE);a.unbind(b.DROP);
  });i.addInitCache(function () {});i.addInitNode(function (a, b, c) {
    if (c) c.isHover = !1, c.editNameFlag = !1;
  });i.addInitProxy(function (a) {
    var b = a.target,
        c = i.getSetting(a.data.treeId),
        e = a.relatedTarget,
        g = "",
        o = null,
        j = "",
        f = null,
        m = null;if (k.eqs(a.type, "mouseover")) {
      if (m = k.getMDom(c, b, [{ tagName: "a", attrName: "treeNode" + d.id.A }])) g = k.getNodeMainDom(m).id, j = "hoverOverNode";
    } else if (k.eqs(a.type, "mouseout")) m = k.getMDom(c, e, [{ tagName: "a", attrName: "treeNode" + d.id.A }]), m || (g = "remove", j = "hoverOutNode");else if (k.eqs(a.type, "mousedown") && (m = k.getMDom(c, b, [{ tagName: "a", attrName: "treeNode" + d.id.A }]))) g = k.getNodeMainDom(m).id, j = "mousedownNode";if (g.length > 0) switch (o = i.getNodeCache(c, g), j) {case "mousedownNode":
        f = v.onMousedownNode;break;case "hoverOverNode":
        f = v.onHoverOverNode;
        break;case "hoverOutNode":
        f = v.onHoverOutNode;}return { stop: !1, node: o, nodeEventType: j, nodeEventCallback: f, treeEventType: "", treeEventCallback: null };
  });i.addInitRoot(function (a) {
    var a = i.getRoot(a),
        b = i.getRoots();a.curEditNode = null;a.curEditInput = null;a.curHoverNode = null;a.dragFlag = 0;a.dragNodeShowBefore = [];a.dragMaskList = [];b.showHoverDom = !0;
  });i.addZTreeTools(function (a, b) {
    b.cancelEditName = function (a) {
      i.getRoot(this.setting).curEditNode && e.cancelCurEditNode(this.setting, a ? a : null, !0);
    };b.copyNode = function (b, l, g, o) {
      if (!l) return null;var j = i.nodeIsParent(a, b);if (b && !j && this.setting.data.keep.leaf && g === d.move.TYPE_INNER) return null;var f = this,
          m = k.clone(l);if (!b) b = null, g = d.move.TYPE_INNER;g == d.move.TYPE_INNER ? (l = function l() {
        e.addNodes(f.setting, b, -1, [m], o);
      }, k.canAsync(this.setting, b) ? e.asyncNode(this.setting, b, o, l) : l()) : (e.addNodes(this.setting, b.parentNode, -1, [m], o), e.moveNode(this.setting, b, m, g, !1, o));return m;
    };b.editName = function (a) {
      a && a.tId && a === i.getNodeCache(this.setting, a.tId) && (a.parentTId && e.expandCollapseParentNode(this.setting, a.getParentNode(), !0), e.editNode(this.setting, a));
    };b.moveNode = function (b, l, g, o) {
      function j() {
        e.moveNode(m.setting, b, l, g, !1, o);
      }if (!l) return l;var f = i.nodeIsParent(a, b);if (b && !f && this.setting.data.keep.leaf && g === d.move.TYPE_INNER) return null;else if (b && (l.parentTId == b.tId && g == d.move.TYPE_INNER || q(l, this.setting).find("#" + b.tId).length > 0)) return null;else b || (b = null);var m = this;k.canAsync(this.setting, b) && g === d.move.TYPE_INNER ? e.asyncNode(this.setting, b, o, j) : j();return l;
    };b.setEditable = function (a) {
      this.setting.edit.enable = a;return this.refresh();
    };
  });var N = e.cancelPreSelectedNode;e.cancelPreSelectedNode = function (a, b) {
    for (var c = i.getRoot(a).curSelectedList, d = 0, g = c.length; d < g; d++) {
      if (!b || b === c[d]) if (e.removeTreeDom(a, c[d]), b) break;
    }N && N.apply(e, arguments);
  };var O = e.createNodes;e.createNodes = function (a, b, c, d, g) {
    O && O.apply(e, arguments);c && e.repairParentChkClassWithSelf && e.repairParentChkClassWithSelf(a, d);
  };var V = e.makeNodeUrl;e.makeNodeUrl = function (a, b) {
    return a.edit.enable ? null : V.apply(e, arguments);
  };var K = e.removeNode;e.removeNode = function (a, b) {
    var c = i.getRoot(a);if (c.curEditNode === b) c.curEditNode = null;K && K.apply(e, arguments);
  };var P = e.selectNode;e.selectNode = function (a, b, c) {
    var d = i.getRoot(a);if (i.isSelectedNode(a, b) && d.curEditNode == b && b.editNameFlag) return !1;P && P.apply(e, arguments);e.addHoverDom(a, b);return !0;
  };var U = k.uCanDo;k.uCanDo = function (a, b) {
    var c = i.getRoot(a);if (b && (k.eqs(b.type, "mouseover") || k.eqs(b.type, "mouseout") || k.eqs(b.type, "mousedown") || k.eqs(b.type, "mouseup"))) return !0;if (c.curEditNode) e.editNodeBlur = !1, c.curEditInput.focus();
    return !c.curEditNode && (U ? U.apply(e, arguments) : !0);
  };
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * jQuery cxSelect
 * @name jquery.cxselect.js
 * @version 1.3.4
 * #date 2013-12-18
 * @author ciaoca
 * @email ciaoca@gmail.com
 * @site https://github.com/ciaoca/cxSelect
 * @license Released under the MIT license
 */
(function (factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		factory(jQuery);
	};
})(function ($) {
	$.cxSelect = function (settings) {
		var obj;
		var settings;
		var cxSelect = {
			dom: {},
			api: {}
		};

		// 检测是否为 DOM 元素
		var isElement = function isElement(o) {
			if (o && (typeof HTMLElement === 'function' || (typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object') && o instanceof HTMLElement) {
				return true;
			} else {
				return o && o.nodeType && o.nodeType === 1 ? true : false;
			};
		};

		// 检测是否为 jQuery 对象
		var isJquery = function isJquery(o) {
			return o && o.length && (typeof jQuery === 'function' || (typeof jQuery === 'undefined' ? 'undefined' : _typeof(jQuery)) === 'object') && o instanceof jQuery ? true : false;
		};

		// 检测是否为数组
		var isArray = function isArray(o) {
			if (!Array.isArray) {
				return Object.prototype.toString.call(o) === "[object Array]";
			} else {
				return Array.isArray(o);
			};
		};

		// 分配参数
		for (var i = 0, l = arguments.length; i < l; i++) {
			if (isJquery(arguments[i])) {
				obj = arguments[i];
			} else if (isElement(arguments[i])) {
				obj = $(arguments[i]);
			} else if (_typeof(arguments[i]) === 'object') {
				settings = arguments[i];
			};
		};

		if (obj.length < 1) {
			return;
		};

		cxSelect.init = function () {
			var _this = this;

			_this.dom.box = obj;

			_this.settings = $.extend({}, $.cxSelect.defaults, settings, {
				url: _this.dom.box.data('url'),
				nodata: _this.dom.box.data('nodata'),
				required: _this.dom.box.data('required'),
				firstTitle: _this.dom.box.data('firstTitle'),
				firstValue: _this.dom.box.data('firstValue')
			});

			// 未设置选择器组
			if (!_this.settings.selects.length) {
				return;
			};

			_this.selectArray = [];
			_this.selectSum = _this.settings.selects.length;

			for (var i = 0; i < _this.selectSum; i++) {
				if (!_this.dom.box.find('select.' + _this.settings.selects[i])) {
					break;
				};

				_this.selectArray.push(_this.dom.box.find('select.' + _this.settings.selects[i]));
			};

			_this.selectSum = _this.selectArray.length;

			// 设置的选择器组不存在
			if (!_this.selectSum) {
				return;
			};

			// 设置 URL，通过 Ajax 获取数据
			if (typeof _this.settings.url === 'string') {
				$.getJSON(_this.settings.url, function (json) {
					_this.dataJson = json;
					_this.buildContent();
				});

				// 设置自定义数据
			} else if (_typeof(_this.settings.url) === 'object') {
				_this.dataJson = _this.settings.url;
				_this.buildContent();
			};
		};

		cxSelect.getIndex = function (n) {
			return this.settings.required ? n : n - 1;
		};

		// 获取下拉框内容
		cxSelect.getNewOptions = function (elemJquery, data) {
			if (!elemJquery) {
				return;
			};

			var _title = this.settings.firstTitle;
			var _value = this.settings.firstValue;
			var _dataTitle = elemJquery.data('firstTitle');
			var _dataValue = elemJquery.data('firstValue');
			var _html = '';

			if (typeof _dataTitle === 'string' || typeof _dataTitle === 'number' || typeof _dataTitle === 'boolean') {
				_title = _dataTitle.toString();
			};

			if (typeof _dataValue === 'string' || typeof _dataValue === 'number' || typeof _dataValue === 'boolean') {
				_value = _dataValue.toString();
			};

			if (!this.settings.required) {
				_html = '<option value="' + _value + '">' + _title + '</option>';
			};

			$.each(data, function (i, v) {
				if (typeof v.v === 'string' || typeof v.v === 'number' || typeof v.v === 'boolean') {
					_html += '<option value="' + v.v + '">' + v.n + '</option>';
				} else {
					_html += '<option value="' + v.n + '">' + v.n + '</option>';
				};
			});

			return _html;
		};

		// 构建选框内容
		cxSelect.buildContent = function () {
			var _this = this;

			_this.dom.box.on('change', 'select', function () {
				_this.selectChange(this.className);
			});

			var _html = _this.getNewOptions(_this.selectArray[0], _this.dataJson);
			_this.selectArray[0].html(_html).prop('disabled', false).trigger('change');

			_this.setDefaultValue();
		};

		// 设置默认值
		cxSelect.setDefaultValue = function (n) {
			n = n || 0;

			var _this = this;
			var _value;

			if (n >= _this.selectSum || !_this.selectArray[n]) {
				return;
			};

			_value = _this.selectArray[n].data('value');

			if (typeof _value === 'string' || typeof _value === 'number' || typeof _value === 'boolean') {
				_value = _value.toString();

				setTimeout(function () {
					_this.selectArray[n].val(_value).trigger('change');
					n++;
					_this.setDefaultValue(n);
				}, 1);
			};
		};

		// 改变选择时的处理
		cxSelect.selectChange = function (name) {
			name = name.replace(/ /g, ',');
			name = ',' + name + ',';

			var selectValues = [];
			var selectIndex;
			var selectNext;
			var selectData;
			var _html;

			// 获取当前 select 位置、选择值，并清空后面的 select
			for (var i = 0; i < this.selectSum; i++) {
				selectValues.push(this.getIndex(this.selectArray[i].get(0).selectedIndex));

				if (typeof selectIndex === 'number' && i > selectIndex) {
					this.selectArray[i].empty().prop('disabled', true);

					if (this.settings.nodata === 'none') {
						this.selectArray[i].css('display', 'none');
					} else if (this.settings.nodata === 'hidden') {
						this.selectArray[i].css('visibility', 'hidden');
					};
				};

				if (name.indexOf(',' + this.settings.selects[i] + ',') > -1) {
					selectIndex = i;
				};
			};

			// 获取下级的列表数据
			selectNext = selectIndex + 1;
			selectData = this.dataJson;

			for (var i = 0; i < selectNext; i++) {
				if (typeof selectData[selectValues[i]] === 'undefined' || isArray(selectData[selectValues[i]].s) === false || !selectData[selectValues[i]].s.length) {
					return;
				};
				selectData = selectData[selectValues[i]].s;
			};

			// 遍历数据写入下拉选框
			if (this.selectArray[selectNext]) {
				_html = this.getNewOptions(this.selectArray[selectNext], selectData);
				this.selectArray[selectNext].html(_html).prop('disabled', false).css({ 'display': '', 'visibility': '' }).trigger('change');
			};
		};

		cxSelect.init();

		return this;
	};

	// 默认值
	$.cxSelect.defaults = {
		selects: [], // 下拉选框组
		url: null, // 列表数据文件路径，或设为对象
		nodata: null, // 无数据状态
		required: false, // 是否为必选
		firstTitle: '请选择', // 第一个选项选项的标题
		firstValue: '0' // 第一个选项的值
	};

	$.fn.cxSelect = function (settings, callback) {
		this.each(function (i) {
			$.cxSelect(this, settings, callback);
		});
		return this;
	};
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(8);
__webpack_require__(51);
__webpack_require__(0);
__webpack_require__(9);
__webpack_require__(25);
__webpack_require__(12);
__webpack_require__(13);
__webpack_require__(10);
__webpack_require__(14);
__webpack_require__(11);
__webpack_require__(30);
__webpack_require__(24);
__webpack_require__(16);
__webpack_require__(2);
__webpack_require__(20);
__webpack_require__(15);
__webpack_require__(52);
__webpack_require__(28);
var pid = 0,
    cid = 0,
    aid = 0,
    pname = '',
    cname = '',
    aname = '';
// 格式化时间戳
function timestampToTime2(timestamp) {
    var date = new Date(timestamp * 1000);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
    var H = date.getHours() + ':';
    var M2 = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var S = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return Y + M + D + H + M2 + S;
}
// 订单类型
function orderType(obj) {
    if (obj == 1) {
        return '销售开单';
    } else if (obj == 2) {
        return '销售退单';
    }
}

var indexObj = sessionStorage.getItem('indexObj');
//弹窗控件
var simpleAlert = function simpleAlert(opts) {
    //设置默认参数
    var opt = {
        "closeAll": false,
        "content": "",
        "buttons": {}
        //合并参数
    };var option = $.extend(opt, opts);
    //事件
    var dialog = {};
    var $simpleAlert = $('<div class="simpleAlert">');
    var $shelter = $('<div class="simpleAlertShelter">');
    var $simpleAlertBody = $('<div class="simpleAlertBody">');
    var $simpleAlertBodyClose = $('');
    var $simpleAlertBodyContent = $('<p class="simpleAlertBodyContent">' + option.content + '</p>');
    dialog.init = function () {
        $simpleAlertBody.append($simpleAlertBodyClose).append($simpleAlertBodyContent);
        var num = 0;
        var only = false;
        var onlyArr = [];
        for (var i = 0; i < 2; i++) {
            for (var key in option.buttons) {
                switch (i) {
                    case 0:
                        onlyArr.push(key);
                        break;
                    case 1:
                        if (onlyArr.length <= 1) {
                            only = true;
                        } else {
                            only = false;
                        }
                        num++;
                        var $btn = $('<button class="simpleAlertBtn simpleAlertBtn' + num + '">' + key + '</button>');
                        $btn.bind("click", option.buttons[key]);
                        if (only) {
                            $btn.addClass("onlyOne");
                        }
                        $simpleAlertBody.append($btn);
                        break;
                }
            }
        }
        $simpleAlert.append($shelter).append($simpleAlertBody);
        $("body").append($simpleAlert);
        $simpleAlertBody.show().animate({ "marginTop": "-128px", "opacity": "1" }, 300);
    };
    //右上角关闭按键事件
    $simpleAlertBodyClose.bind("click", function () {
        option.closeAll = false;
        dialog.close();
    });
    dialog.close = function () {
        if (option.closeAll) {
            $(".simpleAlert").remove();
        } else {
            $simpleAlertBody.animate({ "marginTop": "-188px", "opacity": "0" }, 200, function () {
                $(".simpleAlert").last().remove();
            });
        }
    };
    dialog.init();
    return dialog;
};

// 切换个人中心选项
$(".leftMenu").find("dd").on("click", function () {
    $(".leftMenu").find("dd").removeClass("active");
    $(this).addClass("active");
    $(".leftMenu").find(".hideDiv").hide();
    $(this).find(".hideDiv").show();
});

// 切换采购报表分类
$(".purchaseList").find('li').on('click', function () {
    $(".purchaseList").find("li").removeClass("active2");
    $(this).addClass("active2");
    $(".purchaseList").find(".hideDiv2").hide();
    $(this).find(".hideDiv2").show();
});

// 切换财务对账分类
$(".financeList").find('li').on('click', function () {
    $(".financeList").find("li").removeClass("active2");
    $(this).addClass("active2");
    $(".financeList").find(".hideDiv2").hide();
    $(this).find(".hideDiv2").show();
});

// 切换申请单分类
$(".applyList").find('li').on('click', function () {
    $(".applyList").find("li").removeClass("active2");
    $(this).addClass("active2");
    $(".applyList").find(".hideDiv2").hide();
    $(this).find(".hideDiv2").show();
});

// 切换订单审核分类
$(".orderList").find('li').on('click', function () {
    $(".orderList").find("li").removeClass("active2");
    $(this).addClass("active2");
    $(".orderList").find(".hideDiv2").hide();
    $(this).find(".hideDiv2").show();
});

// 切换我的审核分类
$(".myReview").find('li').on('click', function () {
    $(".myReview").find("li").removeClass("active2");
    $(this).addClass("active2");
    $(".myReview").find(".hideDiv2").hide();
    $(this).find(".hideDiv2").show();
});

// 正则实时监听用户输入是否正确
//名字监控
$('#name').on('input propertychange', function () {
    var name = $('#name').val();
    var retName = /^[\u4e00-\u9fa5]{0,}$/;
    if (name != '') {
        if (retName.test(name)) {
            console.log('ok');
            $('#nameMeg').text('');
            $('#nameMeg').css({ 'background': 'url(../../img/ok.png) no-repeat center', 'background-size': '18px' });
        } else {
            // console.log('请输入正确的名字')
            $('#nameMeg').css('background', 'none');
            $('#nameMeg').text('请输入正确的名字');
        }
    } else {
        $('#nameMeg').css('background', 'none');
        $('#nameMeg').text('名字不能为空');
    }
});
//详细地址监控
$('#megDz').on('input propertychange', function () {
    var megDz = $('#megDz').val();
    var retmegDz = /^(?=.*?[\u4E00-\u9FA5])[\d\u4E00-\u9FA5]+/;
    if (megDz != '') {
        if (retmegDz.test(megDz)) {
            $('#megDZMeg').text('');
            $('#megDZMeg').css({ 'background': 'url(../../img/ok.png) no-repeat center', 'background-size': '18px' });
        } else {

            $('#megDZMeg').css('background', 'none');
            $('#megDZMeg').text('请输入正确详细地址');
        }
    } else {
        $('#megDZMeg').css('background', 'none');
        $('#megDZMeg').text('详细地址不能为空');
    }
});
//手机号码监控
$('#phone').on('input propertychange', function () {
    var phone = $('#phone').val();
    var retphone = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (phone != '') {
        if (retphone.test(phone)) {
            $('#phoneMeg').text('');
            $('#phoneMeg').css({ 'background': 'url(../../img/ok.png) no-repeat center', 'background-size': '18px' });
        } else {
            // console.log('请输入正确的名字')
            $('#phoneMeg').css('background', 'none');
            $('#phoneMeg').text('请输入正确的手机号码');
        }
    } else {
        $('#phoneMeg').css('background', 'none');
        $('#phoneMeg').text('手机号码不能为空');
    }
});
//固定电话监控
$('#gphone').on('input propertychange', function () {
    var gphone = $('#gphone').val();
    var retgphone = /0\d{2}-\d{7,8}/;
    if (gphone != '') {
        if (retgphone.test(gphone)) {
            $('#gphoneMeg').text('');
            $('#gphoneMeg').css({ 'background': 'url(../../img/ok.png) no-repeat center', 'background-size': '18px' });
        } else {
            $('#gphoneMeg').css('background', 'none');
            $('#gphoneMeg').text('请输入正确的电话号码 例如 010-5338****');
        }
    } else {
        $('#gphoneMeg').css('background', 'none');
        $('#gphoneMeg').text('固定电话可以为空');
    }
});
//邮编监控
$('#yb').on('input propertychange', function () {
    var yb = $('#yb').val();
    var retyb = /^[1-9][0-9]{5}$/;
    if (yb != '') {
        if (retyb.test(yb)) {
            $('#ybMeg').text('');
            $('#ybMeg').css({ 'background': 'url(../../img/ok.png) no-repeat center', 'background-size': '18px' });
        } else {
            $('#ybMeg').css('background', 'none');
            $('#ybMeg').text('请输入正确的邮编');
        }
    } else {
        $('#ybMeg').css('background', 'none');
        $('#ybMeg').text('邮编可以为空');
    }
});
// 地址保存
$('.keepDz').click(function () {
    //获取区级名称
    // 用户名正则匹配
    var name = $('#name').val();
    var retName = /^[\u4e00-\u9fa5]{0,}$/;
    if (name != '') {
        if (retName.test(name)) {} else {
            return false;
        }
    } else {
        return false;
    }
    //详细地址正则匹配
    var megDz = $('#megDz').val();
    var retmegDz = /^(?=.*?[\u4E00-\u9FA5])[\d\u4E00-\u9FA5]+/;
    if (megDz != '') {
        if (retmegDz.test(megDz)) {} else {
            // console.log('请输入正确的名字')
            return false;
        }
    } else {
        return false;
    }
    //手机号码正则匹配
    var phone = $('#phone').val();
    var retphone = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (phone != '') {
        if (retphone.test(phone)) {} else {
            // console.log('请输入正确的名字')
            return false;
        }
    } else {
        return false;
    }
    // 电话号码正则匹配
    var gphone = $('#gphone').val();
    var retgphone = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
    if (gphone != '') {
        if (retgphone.test(gphone)) {} else {
            return false;
        }
    } else {}

    //邮编正则匹配
    var yb = $('#yb').val();
    var retyb = /^[1-9][0-9]{5}$/;
    if (yb != '') {
        if (retyb.test(yb)) {} else {
            return false;
        }
    } else {}
    console.log($('.province').val()); //获取省名称
    console.log($('.city').val()); //获取城级名称
    console.log($('.area').val());
});
//地址清除
$('.removeDz').click(function () {
    // title改为新增
    $(this).parents('div').find('.title').find('.onespan').html('新增收货地址');
    $('.tdRight input').val('');
    $('#megDz').val('');
    $('.tdRight span').text('');
    $('.tdRight span').css('background', 'none');
    $('.province').val(0);
    $('.city').val(0);
    $('.area').val(0);
});

//地址管理
//删除地址
$('.delete').on('click', function () {
    var _this = this;

    var dblChoseAlert = simpleAlert({
        "content": "您是否删除此地址",
        "buttons": {
            "确定": function _() {
                $(_this).parent().parent().remove();
                dblChoseAlert.close();
            },
            "取消": function _() {
                dblChoseAlert.close();
            }
        }
    });
});
// 生日时间 

//日期 实例化
$(function () {
    $("#date").selectDate();

    $("#days").focusout(function () {
        var year = $("#year option:selected").html();
        var month = $("#month option:selected").html();
        var day = $("#days option:selected").html();
        console.log(year + month + day);
    });
});
// 商品专柜 分页*************************************************


//判断是否是会员*************************************************
var result = localStorage.getItem('token');
var a = result.split('.');
var base64Str = Base64.decode(a[1]);
var base64Obj = JSON.parse(base64Str);
console.log(base64Obj);

$(function () {
    if (base64Obj.outline_order == 1) {
        console.log('你是会员');
        $('.shopVip').css('display', 'block');
        $('.Financial').css('display', 'block');
        $('.Report').css('display', 'block');
        $('.Application').css('display', 'block');
    } else {
        console.log('你不是会员');
        $('.shopVip').css('display', 'none');
        $('.Financial').css('display', 'none');
        $('.Report').css('display', 'none');
        $('.Application').css('display', 'none');
    }
    // 部门管理 总公司渲染
    $('.bjShx').html(base64Obj.full_name);
    $('.bjShx').attr('data-id', base64Obj.company_id);
});
/*********************************************商品专柜******************************************************************************************************/
//商品专柜 列表效果
$('.shopList').on('click', '.classOnebox', function () {

    $(this).next().toggle();

    console.log($(this).index());
});
$('.shopList').on('click', '.classTwobox', function () {
    $(this).next().toggle();

    console.log($(this).index());
});
$('.shopVip').click(function () {
    $.ax('/shop-shoppe-goods/' + base64Obj.employee_id + '/' + base64Obj.outline_order, //（只需要传公共部分后面的路径）
    null, //（上送参数 不传为null）
    'get', //（方法 传null为post）
    null, //（接受格式 null为json）
    function (data) {
        //（成功函数）
        console.log(data);
        for (var i in data.result.cate) {

            var shopList = ' <div class="zgClassOne" >' + '<div class="classOnebox" data-cate_id=' + data.result.cate[i].cate_id + ' data-level=' + data.result.cate[i].level + '>' + data.result.cate[i].cate_name + '</div>' + '</div>';
            $('.shopList').append(shopList);
            //  console.log(i)
            for (var j in data.result.cate[i].children) {
                console.log(data.result.cate[i].children[j].cate_id);
                var twoShopList = '<div class="zgClassTwo">' + '<ul>' + '<li>' + '<div class="classTwobox" data-cate_id=' + data.result.cate[i].children[j].cate_id + ' data-level=' + data.result.cate[i].children[j].level + '>' + data.result.cate[i].children[j].cate_name + '</div>' + '<div class="zgClassThree">' + '</div>' + '</li>' + '</ul>' + '</div>';
                $('.zgClassOne').append(twoShopList);
                for (var g in data.result.cate[i].children[j].children) {
                    var threeShopList = '<ul><li data-cate_id=' + data.result.cate[i].children[j].children[g].cate_id + ' data-level=' + data.result.cate[i].children[j].children[g].level + '>' + data.result.cate[i].children[j].children[g].cate_name + '</li></ul>';
                    $('.zgClassThree').append(threeShopList);
                }
            }
        }
        //商柜信息列表
        // var DataArry = [];
        // var dataObj = [];
        for (var _i in data.result.goods) {
            var shopMsg = '<div class="good" data-cate_id=' + data.result.goods[_i].cate_id + ' data-level=' + data.result.goods[_i].goods_id + '>' + '<div class="img">' + '<img src="../../img/A4.jpg">' + '</div>' + '<p class="name">' + data.result.goods[_i].goods_name + '</p>' + '<p class="price">价格:￥<span>' + data.result.goods[_i].price + '</span>/<label>' + data.result.goods[_i].unit + '</label></p>' +
            // '<input type="button" value="－"><input type="number"><input type="button" value="＋">'+
            // '<button>加入购物车</button>'+
            '</div>';
            $('.goodList').append(shopMsg);
        }
    }, function (data) {
        //（失败函数）
        console.log(data);
    });
});

// 点击分类获取分类下的专柜商品
//一级导航

$('.shopList').on('click', '.classOnebox', function (event) {
    console.log($(this).data('cate_id'));
    console.log($(this).data('level'));
    event.stopPropagation();
    $.ax('/shop-shoppe-goods-list/' + $(this).data('level') + '/' + $(this).data('cate_id') + '/' + base64Obj.employee_id, //（只需要传公共部分后面的路径）
    null, //（上送参数 不传为null）
    'get', //（方法 传null为post）
    null, //（接受格式 null为json）
    function (data) {
        //（成功函数）
        $('.goodList').children().remove();
        for (var i in data.result) {
            var shopMsgOne = '<div class="good" data-cate_id=' + data.result[i].cate_id + ' data-level=' + data.result[i].goods_id + '>' + '<div class="img">' + '<img src="../../img/A4.jpg">' + '</div>' + '<p class="name">1' + data.result[i].goods_name + '</p>' + '<p class="price">价格:￥<span>' + data.result[i].price + '</span>/<label>' + data.result[i].unit + '</label></p>' +
            // '<input type="button" value="－"><input type="number"><input type="button" value="＋">'+
            // '<button>加入购物车</button>'+
            '</div>';
            $('.goodList').append(shopMsgOne);
        }
        console.log(data);
    }, function (data) {
        //（失败函数）
        console.log(data);
    });
});
//三级导航
$('.shopList').on('click', '.zgClassThree li', function () {
    console.log($(this).data('cate_id'));
    console.log($(this).data('level'));

    $('.goodList').children().remove();
    $.ax('/shop-shoppe-goods-list/' + $(this).data('level') + '/' + $(this).data('cate_id') + '/' + base64Obj.employee_id, //（只需要传公共部分后面的路径）
    null, //（上送参数 不传为null）
    'get', //（方法 传null为post）
    null, //（接受格式 null为json）
    function (data) {
        //（成功函数）
        for (var i in data.result) {
            var shopMsgOne = '<div class="good" data-cate_id=' + data.result[i].cate_id + ' data-level=' + data.result[i].goods_id + '>' + '<div class="img">' + '<img src="../../img/A4.jpg">' + '</div>' + '<p class="name">3' + data.result[i].goods_name + '</p>' + '<p class="price">价格:￥<span>' + data.result[i].price + '</span>/<label>' + data.result[i].unit + '</label></p>' +
            // '<input type="button" value="－"><input type="number"><input type="button" value="＋">'+
            // '<button>加入购物车</button>'+
            '</div>';
            $('.goodList').append(shopMsgOne);
        }
        console.log(data);
    }, function (data) {
        //（失败函数）
        console.log(data);
    });
});

/***************************************************************** 订单查询*********************************************************************************************/
$('.orderQuery').click(function () {
    $('.Orderuery table tbody').children('tr').remove();
    $.ax("/shop-order-list-query", null, 'get', null, function (data) {
        console.log(data);
        var Ordtype = [];
        var picktype = [];
        if (data.success != 'false') {
            for (var i in data.result) {
                switch (data.result[i].order_type) {
                    case 1:
                        Ordtype[i] = '销售开单';
                        switch (data.result[i].pick_status_allocation) {
                            case -1:
                                picktype[i] = '未分配';
                                break;
                            case 0:
                                picktype[i] = '已分配';
                                break;
                            case 1:
                                picktype[i] = '开始拣货';
                                break;
                            case 2:
                                picktype[i] = '暂停拣货';
                                break;
                            case 3:
                                picktype[i] = '已拣';
                                break;
                            case 4:
                                picktype[i] = '部分打印';
                                break;
                            default:
                                picktype[i] = '已打印 ';
                        }
                        break;
                    case 2:
                        Ordtype[i] = '销售退单';
                        switch (data.result[i].pick_status_allocation) {
                            case -1:
                                picktype[i] = '未分配';
                                break;
                            case 0:
                                picktype[i] = '已分配';
                                break;
                            case 1:
                                picktype[i] = '收货中';
                                break;
                            case 2:
                                picktype[i] = '已收货';
                                break;
                            case 3:
                                picktype[i] = '入库中';
                                break;
                            default:
                                picktype[i] = '已入库 ';
                        }
                        break;
                    case 3:
                        Ordtype[i] = '供应商直发';
                        break;
                    default:
                        Ordtype[i] = '总部分配';
                }
                var str = '<tr>' + '<td>' + i + '</td>' + '<td>' + data.result[i].order_id + '</td>' + '<td class="Orderuery_type"></td>' + '<td>' + data.result[i].user_order_num + '</td>' + '<td>' + timestampToTime2(data.result[i].add_date) + '</td>' + '<td class="orderuery_zt"></td>' + '<td>' + timestampToTime2(data.result[i].delivery_time) + '</td>' + '<td >' + data.result[i].amount + '</td>' + '<td>' + data.result[i].name + '</td>' + '<td>' + data.result[i].username + '</td>' + '<td>' + data.result[i].username + '</td>' + '<td>' + data.result[i].phone + '</td>' + '<td>' + data.result[i].address + '</td>' + '</tr>';

                $('.Orderuery tbody').append(str);
            }
            for (var _i2 = 0; _i2 < Ordtype.length; _i2++) {
                $('.Orderuery_type').eq(_i2).text(Ordtype[_i2]);
            }
            for (var _i3 = 0; _i3 < picktype.length; _i3++) {
                $('.orderuery_zt').eq(_i3).text(picktype[_i3]);
            }
        } else {
            $('.Orderuery table').parent().children('.msg').remove();
            $('.Orderuery table ').after('<h3 class="msg">没有找到匹配的记录</h3>');
        }
    }, function (data) {
        console.log(data);
    });
});
/*******************************************************查询未对账的对账单******************************************************************************/
$('.financialReconciliation').click(function () {
    $('.Unpaidbill tbody').children('tr').remove();
    $.ax("/shop-checkings-for-order-list-query", null, 'POST', null, function (data) {
        console.log('未对账的对账单' + data);
        var zfzt = [];
        if (data.success != 'false') {
            for (var i in data.result) {
                switch (data.result[i].pay_status) {
                    case 0:
                        // $('.pay_status').text('未支付')
                        zfzt[i] = '未支付';
                        break;
                    default:
                        // $('.pay_status').text('已支付')
                        zfzt[i] = '已经支付';
                }
                var zbSrt = '<tr>' + '<th>' + i + '</th>' + '<th>' + data.result[i].checking_num + '</th>' + '<th>' + data.result[i].amount + '</th>' + '<th class="pay_status"></th>' + '<th>' + data.result[i].non_payment + '</th>' + '<th>' + data.result[i].invoiced + '</th>' + '<th>' + timestampToTime2(data.result[i].add_date) + '</th>' + '<th>' + data.result[i].remark + '</th>';
                '<tr>';
                $('.Unpaidbill tbody').append(zbSrt);
            }
            for (var _i4 = 0; _i4 < zfzt.length; _i4++) {
                $('.pay_status').eq(_i4).text(zfzt[_i4]);
            }
        } else {
            $('.Unpaidbill table ').parent().children('.msg').remove();
            $('.Unpaidbill table ').after('<h3 class="msg">没有找到匹配的记录</h3>');
        }
    }, function (data) {});
});
$('.financeListdzzd').click(function () {
    $('.Unpaidbill tbody').children('tr').remove();
    $.ax("/shop-checkings-for-order-list-query", null, 'POST', null, function (data) {
        console.log('未对账的对账单' + data);
        var zfzt = [];
        if (data.success != 'false') {
            for (var i in data.result) {
                switch (data.result[i].pay_status) {
                    case 0:
                        // $('.pay_status').text('未支付')
                        zfzt[i] = '未支付';
                        break;
                    default:
                        // $('.pay_status').text('已支付')
                        zfzt[i] = '已经支付';
                }
                var zbSrt = '<tr>' + '<th>' + i + '</th>' + '<th>' + data.result[i].checking_num + '</th>' + '<th>' + data.result[i].amount + '</th>' + '<th class="pay_status"></th>' + '<th>' + data.result[i].non_payment + '</th>' + '<th>' + data.result[i].invoiced + '</th>' + '<th>' + data.result[i].add_date + '</th>' + '<th>' + data.result[i].remark + '</th>';
                '<tr>';
                $('.Unpaidbill tbody').append(zbSrt);
            }
            for (var _i5 = 0; _i5 < zfzt.length; _i5++) {
                $('.pay_status').eq(_i5).text(zfzt[_i5]);
            }
        } else {
            $('.Unpaidbill table ').parent().children('.msg').remove();
            $('.Unpaidbill table ').after('<h3 class="msg">没有找到匹配的记录</h3>');
        }
    }, function (data) {});
});

/*********************************************************财务对账----订单明细*******************************************************************************************/
$('.financeListmx').click(function () {
    $.ax("/shop-order-detail-list-query", { type: 1 }, 'POST', null, function (data) {
        console.log(data);
        var zfzt = [];
        var zfztTwo = [];
        if (data.success != 'false') {
            for (var i in data.result) {
                switch (data.result[i].order_type) {
                    case 1:
                        zfzt[i] = '销售开单';
                        break;
                    case 2:
                        zfzt[i] = '销售退单';
                        break;
                    case 3:
                        zfzt[i] = '供应商直发';
                        break;
                    default:
                        zfzt[i] = '总部分配';
                }

                switch (data.result[i].delivery_status) {
                    case 0:
                        zfztTwo[i] = '未处理 ';
                        break;
                    case 1:
                        zfztTwo[i] = '装车中';
                        break;
                    case 2:
                        zfztTwo[i] = '配送站';
                        break;
                    default:
                        zfztTwo[i] = '送达';
                }
            }
            for (var _i6 in data.result) {
                var bar = '<tr>' + '<td>' + data.result[_i6].user_order_num + '</td>' + '<td>' + data.result[_i6].username + '</td>' + '<td>' + data.result[_i6].depart_name + '</td>' + '<td>' + data.result[_i6].name + '</td>' + '<td>' + data.result[_i6].unit + '</td>' + '<td>' + data.result[_i6].count + '</td>' + '<td>' + data.result[_i6].price + '</td>' + '<td>' + data.result[_i6].detail_amount + '</td>' + '<td>' + data.result[_i6].basic_amount + '</td>' + '<td class="Unpaidbill_type"></td>' + '<td class="Unpaidbill_status"></td>' + '<td>' + timestampToTime2(data.result[_i6].add_date) + '</td>' + '<td>' + timestampToTime2(data.result[_i6].warehouse_time) + '</td>' + '<td>' + timestampToTime2(data.result[_i6].delivery_time) + '</td>' + '</tr>' + $('.orderdetails tbody').append(bar);
            }
            for (var _i7 = 0; _i7 < zfzt.length; _i7++) {
                $('.Unpaidbill_type').eq(_i7).text(zfzt[_i7]);
            }
            for (var _i8 = 0; _i8 < zfztTwo.length; _i8++) {

                $('.Unpaidbill_status').eq(_i8).text(zfztTwo[_i8]);
            }
            console.log(zfztTwo);
            console.log(zfzt);
        } else {
            $('.orderdetails table ').parent().children('.msg').remove();
            $('.orderdetails table ').after('<h3 class="msg">没有找到匹配的记录</h3>');
        }
    }, function (data) {
        console.log(data);
    });
});

/*********************************************************部门管理***********************************************************************************************/
var pass = '';
// 获取部门列表
$('.departmentManage').click(function () {
    // 部门列表
    $.ax('/shop-customer-section-list/' + base64Obj.customer_id, null, 'get', null, function (data) {
        var res = data.result.department_list;
        console.log(res);
        var zTreeObj;
        // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
        var setting = {
            data: {
                key: {
                    name: 'name',
                    children: 'children',
                    title: 'c_department_id'
                },
                simpleData: {
                    enable: true,
                    idKey: 'c_department_id'
                }
            },
            callback: {
                onClick: zTreeOnClick
            }
        };
        // zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
        var zNodes = res;
        zTreeObj = $.fn.zTree.init($("#treeDemo"), setting, zNodes);
        var departId = 0;
        var employeeId = '';
        // 点击部门 获取id 渲染员工
        function zTreeOnClick(event, treeId, treeNode) {
            console.log(treeNode);
            $('.departmentName').html(treeNode.name);
            departId = treeNode.c_department_id;
            // 渲染员工列表
            $.ax('/shop-customer-staff-list/department_id/' + departId, null, 'get', null, function (data) {
                console.log(data);
                var html = '',
                    res = data.result;
                for (var i = 0; i < res.length; i++) {
                    html += '<tr data-id="' + res[i].c_employee_id + '" class="staff">' + '<td>' + res[i].employee_num + '</td>' + '<td>' + res[i].username + '</td>' + '<td>' + res[i].mobile_phone + '</td>' + '<td>' + res[i].tel_phone + '</td>' + '<td>' + res[i].area[0] + '</td>' + '<td>' + res[i].area[1] + '</td>' + '<td>' + res[i].area[2] + '</td>' + '<td>' + res[i].address + '</td>' + '<td>' + '<input type="checkbox" name="" id="">' + '</td>' + '<td>' + '<input type="checkbox" name="" id="">' + '</td>' + '<td>' + '<input type="checkbox" name="" id="">' + '</td>' + '</tr>';
                }
                $('.staffList').html(html);

                // 选中员工信息
                $('.staff').click(function () {
                    employeeId = $(this).attr('data-id');
                    $('.staff').attr('class', 'staff');
                    $(this).addClass("active");
                });
            }, function (data) {
                alert(data.message);
            });
        };

        $('.departXg').click(function () {
            // 部门更名
            var section = {
                customer_id: base64Obj.customer_id,
                c_department_id: departId,
                name: $('#departMod').val()
            };
            $.ax('/shop-customer-section-update', section, 'patch', null, function (data) {
                alert(data.message);
            }, function (data) {
                alert(data.message);
            });
        });

        $('.departBc').click(function () {
            // 添加子部门
            var create = {
                customer_id: base64Obj.customer_id,
                pid: departId,
                name: $('#departAdd').val()
            };
            $.ax('/shop-customer-section-create', create, 'post', null, function (data) {
                alert(data.message);
            }, function (data) {
                alert(data.message);
            });
        });
        // 点击新建员工
        $('.build').click(function () {
            $('.darkBox').show();
            $('.areas').find('h3').find('label').html('新建');

            $.ax("/shop-city-list-query", null, 'get', null, function (data) {
                console.log(data);
                var html = '<option value="">请选择</option>',
                    res = data.result;
                for (var i = 0; i < res.length; i++) {
                    html += '<option value="' + res[i].address_id + '">' + res[i].name + '</option>';
                }
                $('#city_chinathree').find('.province').html(html);

                // 改变省
                $('#city_chinathree').find('.province').on('change', function () {
                    pid = $(this).val();
                    $('#city_chinathree').find('.area').val('');
                    $('#city_chinathree').find('.area').html('');
                    for (var i = 0; i < res.length; i++) {
                        if (res[i].address_id == $(this).val()) {
                            pname = res[i].name;
                            if (res[i].children == null) {} else {
                                var citys = res[i].children,
                                    htmls = '<option value="">请选择</option>';

                                for (var i = 0; i < citys.length; i++) {
                                    htmls += '<option value="' + citys[i].address_id + '">' + citys[i].name + '</option>';
                                }
                                $('#city_chinathree').find('.city').html(htmls);

                                // 改变市
                                $('#city_chinathree').find('.city').on('change', function () {
                                    cid = $(this).val();
                                    for (var i = 0; i < citys.length; i++) {
                                        if (citys[i].address_id == $(this).val()) {
                                            cname = citys[i].name;
                                            if (citys[i].children == null) {} else {
                                                var areas = citys[i].children,
                                                    htmlss = '<option value="">请选择</option>';

                                                for (var i = 0; i < areas.length; i++) {
                                                    htmlss += '<option value="' + areas[i].address_id + '">' + areas[i].name + '</option>';
                                                }
                                                $('#city_chinathree').find('.area').html(htmlss);

                                                $('#city_chinathree').find('.area').on('change', function () {
                                                    aid = $(this).val();
                                                    for (var i = 0; i < areas.length; i++) {
                                                        if (areas[i].address_id == $(this).val()) {
                                                            aname = areas[i].name;
                                                        }
                                                    }
                                                });
                                            }
                                        }
                                    }
                                });
                            }
                        }
                    }
                });
            }, function (data) {
                alert(data);
            });
        });

        // 点击编辑员工
        $('.editLink').click(function () {
            $('.darkBox').show();
            $('.areas').find('h3').find('label').html('编辑');
            console.log(employeeId);

            $.ax("/shop-city-list-query", null, 'get', null, function (data) {
                console.log(data);
                var html = '<option value="">请选择</option>',
                    res = data.result;
                for (var i = 0; i < res.length; i++) {
                    html += '<option value="' + res[i].address_id + '">' + res[i].name + '</option>';
                }
                $('#city_chinathree').find('.province').html(html);

                console.log(base64Obj);
                // 获取用户信息
                $.ax("/shop-customer-staff-query/" + employeeId, null, 'get', null, function (data) {
                    console.log(data);
                    var res2 = data.result;
                    $('.staffDepart').html(res2.name);
                    $('.staffName').val(res2.username);
                    $('.staffTel').val(res2.mobile_phone);
                    $('.staffPhone').val(res2.tel_phone);
                    $('.staffAddress').val(res2.street);
                    $('.staffMain').attr('checked', res2.main_contact == 1 ? true : false);
                    $('.staffDisabled').attr('checked', res2.disabled == 'false' ? false : true);
                    $('.staffBuy').attr('checked', res2.no_check == 0 ? false : true);
                    $('#city_chinathree').find('.province').val(res2.area_id[0]);
                    pass = res2.password;
                    pid = res2.area_id[0];
                    for (var i = 0; i < res.length; i++) {
                        if (res[i].address_id == res2.area_id[0]) {
                            pname = res[i].name;
                            if (res[i].children == null) {} else {
                                var citys = res[i].children,
                                    htmls = '<option value="">请选择</option>';
                                console.log();
                                for (var i = 0; i < citys.length; i++) {
                                    htmls += '<option value="' + citys[i].address_id + '">' + citys[i].name + '</option>';
                                }
                                $('#city_chinathree').find('.city').html(htmls);
                                setTimeout(function () {
                                    $('#city_chinathree').find('.city').val(res2.area_id[1]);
                                    cid = res2.area_id[1];
                                    for (var i = 0; i < citys.length; i++) {
                                        if (citys[i].address_id == res2.area_id[1]) {
                                            cname = citys[i].name;
                                            if (citys[i].children == null) {} else {
                                                var areas = citys[i].children,
                                                    htmlss = '<option value="">请选择</option>';
                                                for (var i = 0; i < areas.length; i++) {
                                                    htmlss += '<option value="' + areas[i].address_id + '">' + areas[i].name + '</option>';
                                                }
                                                $('#city_chinathree').find('.area').html(htmlss);
                                                setTimeout(function () {
                                                    $('#city_chinathree').find('.area').val(res2.area_id[2]);
                                                    aid = res2.area_id[2];
                                                    for (var i = 0; i < areas.length; i++) {
                                                        if (areas[i].address_id == res2.area_id[2]) {
                                                            aname = areas[i].name;
                                                        }
                                                    }
                                                }, 10);
                                            }
                                        }
                                    }
                                }, 10);
                            }
                        }
                    }
                }, function (data) {
                    alert(data);
                });

                // 改变省
                $('#city_chinathree').find('.province').on('change', function () {
                    console.log($(this).val());
                    $('#city_chinathree').find('.area').val('');
                    $('#city_chinathree').find('.area').html('');
                    pid = $(this).val();
                    for (var i = 0; i < res.length; i++) {
                        if (res[i].address_id == $(this).val()) {
                            pname = res[i].name;
                            if (res[i].children == null) {} else {
                                var citys = res[i].children,
                                    htmls = '<option value="">请选择</option>';
                                console.log(citys);

                                for (var i = 0; i < citys.length; i++) {
                                    htmls += '<option value="' + citys[i].address_id + '">' + citys[i].name + '</option>';
                                }
                                $('#city_chinathree').find('.city').html(htmls);

                                // 改变市
                                $('#city_chinathree').find('.city').on('change', function () {
                                    cid = $(this).val();
                                    for (var i = 0; i < citys.length; i++) {
                                        if (citys[i].address_id == $(this).val()) {
                                            cname = citys[i].name;
                                            if (citys[i].children == null) {} else {
                                                var areas = citys[i].children,
                                                    htmlss = '<option value="">请选择</option>';
                                                console.log(areas);

                                                for (var i = 0; i < areas.length; i++) {
                                                    htmlss += '<option value="' + areas[i].address_id + '">' + areas[i].name + '</option>';
                                                }
                                                $('#city_chinathree').find('.area').html(htmlss);

                                                $('#city_chinathree').find('.area').on('change', function () {
                                                    aid = $(this).val();
                                                    for (var i = 0; i < areas.length; i++) {
                                                        if (areas[i].address_id == $(this).val()) {
                                                            aname = areas[i].name;
                                                        }
                                                    }
                                                });
                                            }
                                        }
                                    }
                                });
                            }
                        }
                    }
                });
            }, function (data) {
                alert(data);
            });
        });
        // 修改密码
        $('.modPass').click(function () {
            console.log(pass);
            $.ax("/shop-admin-password-update", {
                c_employee_id: employeeId,
                old_password: pass,
                new_password: $('.staffPass').val()
            }, 'post', null, function (data) {
                console.log(data);
            }, function (data) {
                console.log(data);
            });
        });

        // 点击使用公司地址
        $('.comAddress').click(function () {
            $.ax("/shop-customer-staff-company-query/" + base64Obj.customer_id, null, 'get', null, function (data) {
                console.log(data);
                $('.staffAddress').val(data.result.street);
                $('#city_chinathree').find('.province').val(data.result.area_id[0]);
            }, function (data) {
                console.log(data);
            });

            $.ax("/shop-city-list-query", null, 'get', null, function (data) {
                console.log(data);
                var html = '<option value="">请选择</option>',
                    res = data.result;
                for (var i = 0; i < res.length; i++) {
                    html += '<option value="' + res[i].address_id + '">' + res[i].name + '</option>';
                }
                $('#city_chinathree').find('.province').html(html);

                console.log(base64Obj);
                // 获取用户信息
                $.ax("/shop-customer-staff-company-query/" + base64Obj.customer_id, null, 'get', null, function (data) {
                    console.log(data);
                    $('.staffAddress').val(data.result.street);
                    $('#city_chinathree').find('.province').val(data.result.area_id[0]);
                    pid = data.result.area_id[0];
                    for (var i = 0; i < res.length; i++) {
                        if (res[i].address_id == data.result.area_id[0]) {
                            pname = res[i].name;
                            if (res[i].children == null) {} else {
                                var citys = res[i].children,
                                    htmls = '<option value="">请选择</option>';
                                console.log();
                                for (var i = 0; i < citys.length; i++) {
                                    htmls += '<option value="' + citys[i].address_id + '">' + citys[i].name + '</option>';
                                }
                                $('#city_chinathree').find('.city').html(htmls);
                                setTimeout(function () {
                                    $('#city_chinathree').find('.city').val(data.result.area_id[1]);
                                    cid = data.result.area_id[1];
                                    for (var i = 0; i < citys.length; i++) {
                                        if (citys[i].address_id == data.result.area_id[1]) {
                                            cname = citys[i].name;
                                            if (citys[i].children == null) {} else {
                                                var areas = citys[i].children,
                                                    htmlss = '<option value="">请选择</option>';
                                                for (var i = 0; i < areas.length; i++) {
                                                    htmlss += '<option value="' + areas[i].address_id + '">' + areas[i].name + '</option>';
                                                }
                                                $('#city_chinathree').find('.area').html(htmlss);
                                                setTimeout(function () {
                                                    $('#city_chinathree').find('.area').val(data.result.area_id[2]);
                                                    aid = data.result.area_id[2];
                                                    for (var i = 0; i < areas.length; i++) {
                                                        if (areas[i].address_id == data.result.area_id[2]) {
                                                            aname = areas[i].name;
                                                        }
                                                    }
                                                }, 10);
                                            }
                                        }
                                    }
                                }, 10);
                            }
                        }
                    }
                }, function (data) {
                    alert(data);
                });

                // 改变省
                $('#city_chinathree').find('.province').on('change', function () {
                    console.log($(this).val());
                    $('#city_chinathree').find('.area').val('');
                    $('#city_chinathree').find('.area').html('');
                    pid = $(this).val();
                    for (var i = 0; i < res.length; i++) {
                        if (res[i].address_id == $(this).val()) {
                            pname = res[i].name;
                            if (res[i].children == null) {} else {
                                var citys = res[i].children,
                                    htmls = '<option value="">请选择</option>';
                                console.log(citys);

                                for (var i = 0; i < citys.length; i++) {
                                    htmls += '<option value="' + citys[i].address_id + '">' + citys[i].name + '</option>';
                                }
                                $('#city_chinathree').find('.city').html(htmls);

                                // 改变市
                                $('#city_chinathree').find('.city').on('change', function () {
                                    cid = $(this).val();
                                    for (var i = 0; i < citys.length; i++) {
                                        if (citys[i].address_id == $(this).val()) {
                                            cname = citys[i].name;
                                            if (citys[i].children == null) {} else {
                                                var areas = citys[i].children,
                                                    htmlss = '<option value="">请选择</option>';
                                                console.log(areas);

                                                for (var i = 0; i < areas.length; i++) {
                                                    htmlss += '<option value="' + areas[i].address_id + '">' + areas[i].name + '</option>';
                                                }
                                                $('#city_chinathree').find('.area').html(htmlss);

                                                $('#city_chinathree').find('.area').on('change', function () {
                                                    aid = $(this).val();
                                                    for (var i = 0; i < areas.length; i++) {
                                                        if (areas[i].address_id == $(this).val()) {
                                                            aname = areas[i].name;
                                                        }
                                                    }
                                                });
                                            }
                                        }
                                    }
                                });
                            }
                        }
                    }
                });
            }, function (data) {
                alert(data);
            });
        });
        // 点击取消
        $('.pause').click(function () {
            $('.darkBox').hide();
        });

        // 点击确认
        $('#sure').click(function () {
            // 新建员工
            if ($('.areas').find('h3').find('label').html() == '新建') {
                console.log('新建');
                $.ax("/shop-customer-staff-create", {
                    customer_id: base64Obj.customer_id,
                    department_id: departId,
                    username: $('.staffName').val(),
                    mobile_phone: $('.staffTel').val(),
                    area_id: pid + '/' + cid + '/' + aid,
                    area_name: pname + '/' + cname + '/' + aname,
                    address: pname + cname + aname + $('.staffAddress').val(),
                    password: '',
                    disabled: $('.staffDisabled').prop('checked') == true ? 1 : 0,
                    outline_order: $('.staffWeb').prop('checked') == true ? 1 : 0,
                    main_contact: $('.staffMain').prop('checked') == true ? 1 : 0,
                    no_check: $('.staffBuy').prop('checked') == true ? 1 : 0,
                    tel_phone: $('.staffPhone').val(),
                    street: $('.staffAddress').val()
                }, 'post', null, function (data) {
                    alert(data.message);
                }, function (data) {
                    alert(data.message);
                });
            } else {
                // 编辑员工
                console.log('编辑');
                $.ax("/shop-customer-staff-update", {
                    c_employee_id: employeeId,
                    customer_id: base64Obj.customer_id,
                    department_id: departId,
                    username: $('.staffName').val(),
                    mobile_phone: $('.staffTel').val(),
                    area_id: pid + '/' + cid + '/' + aid,
                    area_name: pname + '/' + cname + '/' + aname,
                    address: pname + cname + aname + $('.staffAddress').val(),
                    password: '',
                    disabled: $('.staffDisabled').prop('checked') == true ? 1 : 0,
                    outline_order: $('.staffWeb').prop('checked') == true ? 1 : 0,
                    main_contact: $('.staffMain').prop('checked') == true ? 1 : 0,
                    no_check: $('.staffBuy').prop('checked') == true ? 1 : 0,
                    tel_phone: $('.staffPhone').val(),
                    street: $('.staffAddress').val()
                }, 'patch', null, function (data) {
                    alert(data.message);
                }, function (data) {
                    alert(data.message);
                });
            }
        });
    }, function (data) {
        alert(data.message);
    });
});
/*********************************************************订单查询***********************************************************************************************/
$('.orderQuery').click(function () {
    console.log('订单查询');
});

/*********************************************************个人信息***********************************************************************************************/
$('.personalInformation').click(function () {
    console.log(base64Obj);
    // 获取用户信息
});
/*********************************************************财务对账***********************************************************************************************/
$('.financialReconciliation').click(function () {
    console.log('财务对账');
    //查询未对账的订单
    $.ax("/shop-orders-list-query", null, 'get', null, function (data) {
        console.log(data);
        var res = data.result,
            html = '';
        for (var i = 0; i < res.length; i++) {
            html += '<tr>' + '<td>' + i + '</td>' + '<td><button class="noOrder" data-id="' + res[i].order_id + '">' + res[i].admin_order_num + '</button></td>' + '<td>' + orderType(res[i].order_type) + '</td>' + '<td>' + res[i].amount + '</td>' + '<td>' + res[i].name + '</td>' + '<td>' + res[i].username + '</td>' + '<td>0</td>' + '<td>' + timestampToTime2(res[i].add_date) + '</td>' + '</tr>';
        }
        $('.notReconciled').html(html);
        // 点击订单号
        $('.noOrder').click(function () {
            console.log($(this).attr('data-id'));
            console.log($(this).html());
            $('.orderItem').show();
            $('.orderId').html($(this).html());
            $.ax("/shop-order-details-list-query", {
                order_id: $(this).attr('data-id')
            }, 'post', null, function (data) {
                console.log(data);
                var res = data.result;
                var html = '<td>' + res.order_type + '</td>' + '<td>' + timestampToTime2(res.add_date) + '</td>' + '<td>' + timestampToTime2(res.delivery_time) + '</td>' + '<td>' + orderType(res.order_type) + '</td>' + '<td>' + res.amount + '</td>' + '<td>' + res.name + '</td>' + '<td>' + res.username + '</td>' + '<td>' + res.username + '</td>' + '<td>' + res.phone + '</td>' + '<td>' + res.address + '</td>' + '<td>' + res.remark + '</td>';
                $('.orderMain').html(html);
                var res2 = data.result.items_info,
                    htmls = '';
                for (var i = 0; i < res2.length; i++) {
                    htmls += '<tr>' + '<td>' + (i + 1) + '</td>' + '<td>' + res2[i].sku + '</td>' + '<td>' + res2[i].name + '</td>' + '<td></td>' + '<td>' + res2[i].unit + '</td>' + '<td>' + res2[i].count + '</td>' + '<td>' + res2[i].price + '</td>' + '<td>' + res2[i].amount + '</td>' + '<td><button class="applyAfter">申请售后</button></td>';
                    '</tr>';
                }
                $('.goodMain').html(htmls);

                // 点击申请售后
                $('.applyAfter').click(function () {
                    console.log(111);
                    $(window).attr('location', '../../view/Aftersale/index.html');
                });
            }, function (data) {
                console.log(data);
            });

            // 点击返回
            $('.orderItem').find('span').click(function () {
                $('.orderItem').hide();
            });
        });
    }, function (data) {
        console.log(data);
    });
});

/*********************************************************个人信息***********************************************************************************************/
$('.personalInformation').click(function () {
    // 省市区数据
    $.ax("/shop-city-list-query", null, 'get', null, function (data) {
        console.log(data);
        var html = '<option value="">请选择</option>',
            res = data.result;
        for (var i = 0; i < res.length; i++) {
            html += '<option value="' + res[i].address_id + '">' + res[i].name + '</option>';
        }
        $('#city_chinatwo').find('.province').html(html);

        console.log(base64Obj);
        // 获取用户信息
        $.ax("/shop-admin-info/" + base64Obj.employee_id, null, 'get', null, function (data) {
            console.log(data);
            var res2 = data.result;
            $('#tel').val(res2.mobile_phone);
            $('#name1').val(res2.username);
            $('#dz').val(res2.address);
            $('#city_chinatwo').find('.province').val(res2.ares[0]);
            pid = res2.ares[0];
            for (var i = 0; i < res.length; i++) {
                if (res[i].address_id == res2.ares[0]) {
                    pname = res[i].name;
                    if (res[i].children == null) {} else {
                        var citys = res[i].children,
                            htmls = '<option value="">请选择</option>';
                        for (var i = 0; i < citys.length; i++) {
                            htmls += '<option value="' + citys[i].address_id + '">' + citys[i].name + '</option>';
                        }
                        $('#city_chinatwo').find('.city').html(htmls);
                        setTimeout(function () {
                            $('#city_chinatwo').find('.city').val(res2.ares[1]);
                            cid = res2.ares[1];
                            for (var i = 0; i < citys.length; i++) {
                                if (citys[i].address_id == res2.ares[1]) {
                                    cname = citys[i].name;
                                    if (citys[i].children == null) {} else {
                                        var areas = citys[i].children,
                                            htmlss = '<option value="">请选择</option>';
                                        for (var i = 0; i < areas.length; i++) {
                                            htmlss += '<option value="' + areas[i].address_id + '">' + areas[i].name + '</option>';
                                        }
                                        $('#city_chinatwo').find('.area').html(htmls);
                                        setTimeout(function () {
                                            $('#city_chinatwo').find('.area').val(res2.ares[2]);
                                            aid = res2.ares[2];
                                            for (var i = 0; i < areas.length; i++) {
                                                if (areas[i].address_id == res2.ares[2]) {
                                                    aname = areas[i].name;
                                                }
                                            }
                                        }, 10);
                                    }
                                }
                            }
                        }, 10);
                    }
                }
            }
        }, function (data) {
            alert(data);
        });

        // 改变省
        $('#city_chinatwo').find('.province').on('change', function () {
            console.log($(this).val());
            $('#city_chinatwo').find('.area').val('');
            $('#city_chinatwo').find('.area').html('');
            pid = $(this).val();
            for (var i = 0; i < res.length; i++) {
                if (res[i].address_id == $(this).val()) {
                    pname = res[i].name;
                    if (res[i].children == null) {} else {
                        var citys = res[i].children,
                            htmls = '<option value="">请选择</option>';
                        console.log(citys);

                        for (var i = 0; i < citys.length; i++) {
                            htmls += '<option value="' + citys[i].address_id + '">' + citys[i].name + '</option>';
                        }
                        $('#city_chinatwo').find('.city').html(htmls);

                        // 改变市
                        $('#city_chinatwo').find('.city').on('change', function () {
                            cid = $(this).val();
                            for (var i = 0; i < citys.length; i++) {
                                if (citys[i].address_id == $(this).val()) {
                                    cname = citys[i].name;
                                    if (citys[i].children == null) {} else {
                                        var areas = citys[i].children,
                                            htmlss = '<option value="">请选择</option>';
                                        console.log(areas);

                                        for (var i = 0; i < areas.length; i++) {
                                            htmlss += '<option value="' + areas[i].address_id + '">' + areas[i].name + '</option>';
                                        }
                                        $('#city_chinatwo').find('.area').html(htmlss);

                                        $('#city_chinatwo').find('.area').on('change', function () {
                                            aid = $(this).val();
                                            for (var i = 0; i < areas.length; i++) {
                                                if (areas[i].address_id == $(this).val()) {
                                                    aname = areas[i].name;
                                                }
                                            }
                                        });
                                    }
                                }
                            }
                        });
                    }
                }
            }
        });
    }, function (data) {
        alert(data);
    });
});
// 点击保存 修改个人信息
$('.tjModify').click(function () {
    // console.log(pid)
    // console.log(cid)
    // console.log(aid)
    // console.log(pname)
    // console.log(cname)
    // console.log(aname)

    $.ax("/shop-admin-info-update", {
        c_employee_id: base64Obj.employee_id,
        username: $('#name1').val(),
        mobile_phone: $('#tel').val(),
        area_id: pid + '/' + cid + '/' + aid,
        area_name: pname + '/' + cname + '/' + aname,
        address: pname + cname + aname + $('#dz').val(),
        tel_phone: '',
        street: $('#dz').val()
    }, 'patch', null, function (data) {
        alert(data.message);
    }, function (data) {
        alert(data.message);
    });
});
/*****************************************************我的申请单****************************************************************************************************/
//默认获取待审核列表
$('.Application').click(function () {
    //默认查看未通过类型申请单
    $('.tableHeader0').nextAll('tr').remove();
    $.ax('/shop-no-check-apply-list-query', {
        type: 'no'
    }, 'POST', 'json', function (data) {
        console.log(data);
        if (data.result == '') {
            $('.tableHeader0').parent().parent().parent().children('.msg').remove();
            $('.tableHeader0 ').parent().parent().after('<h3 class="msg">没有匹配的数据</h3>');
        } else {

            for (var i in data.result) {

                var str = '<tr>' + '<th>' + '<input type="checkbox">' + '</th>' + '<th>' + data.result[i].order_apply_id + '</th>' + '<th>' + data.result[i].name + '</th>' + '<th>' + data.result[i].username + '</th>' + '<th>' + data.result[i].amount + '</th>' + '<th>' + data.result[i].add_date + '</th>' + '<th>' + data.result[i].user_name + '</th>' + '<th>' + data.result[i].address + '</th>' + '<th>删除</th>' + '</tr>';
                $('.tableHeader0').after(str);
            }
        }
    });
});

$('.applyList li').click(function (e) {
    var _this2 = this;

    e.stopPropagation();

    $.ax('/shop-no-check-apply-list-query', {
        type: $(this).data('type')
    }, 'POST', 'json', function (data) {
        console.log(data);
        console.log($(_this2).data('type'));
        if ($(_this2).data('type') == 'no') {
            console.log('aaaaa');
            if (data.result == '') {
                $('.tableHeader0').parent().parent().parent().children('.msg').remove();
                $('.tableHeader0').parent().parent().after('<h3 class="msg">没有匹配的数据</h3>');
            } else {

                for (var i in data.result) {

                    var str = '<tr>' + '<th>' + '<input type="checkbox">' + '</th>' + '<th>' + data.result[i].order_apply_id + '</th>' + '<th>' + data.result[i].name + '</th>' + '<th>' + data.result[i].username + '</th>' + '<th>' + data.result[i].amount + '</th>' + '<th>' + data.result[i].add_date + '</th>' + '<th>' + data.result[i].user_name + '</th>' + '<th>' + data.result[i].address + '</th>' + '<th>删除</th>' + '</tr>';
                    $('.tableHeader0').after(str);
                }
            }
        } else if ($(_this2).data('type') == 'yes') {

            if (data.result == '') {
                $('.tableHeader1').parent().parent().parent().children('.msg').remove();
                $('.tableHeader1').parent().parent().after('<h3 class="msg">没有匹配的数据</h3>');
            } else {
                $('.tableHeader1').nextAll('tr').remove();
                for (var _i9 in data.result) {
                    var _str = '<tr>' + '<th>' + '<input type="checkbox">' + '</th>' + '<th>' + data.result[_i9].order_apply_id + '</th>' + '<th>' + data.result[_i9].name + '</th>' + '<th>' + data.result[_i9].username + '</th>' + '<th>' + data.result[_i9].amount + '</th>' + '<th>' + data.result[_i9].add_date + '</th>' + '<th>' + data.result[_i9].user_name + '</th>' + '<th>' + data.result[_i9].address + '</th>' + '<th>删除</th>' + '</tr>';
                    $('.tableHeader1').after(_str);
                }
            }
        } else {

            if (data.result == '') {

                $('.tableHeader2').parent().parent().parent().children('.msg').remove();
                $('.tableHeader2').parent().parent().after('<h3 class="msg">没有匹配的数据</h3>');
            } else {
                $('.tableHeader2').nextAll('tr').remove();
                for (var _i10 in data.result) {
                    var _str2 = '<tr>' + '<th>' + '<input type="checkbox">' + '</th>' + '<th>' + data.result[_i10].order_apply_id + '</th>' + '<th>' + data.result[_i10].name + '</th>' + '<th>' + data.result[_i10].username + '</th>' + '<th>' + data.result[_i10].amount + '</th>' + '<th>' + data.result[_i10].add_date + '</th>' + '<th>' + data.result[_i10].user_name + '</th>' + '<th>' + data.result[_i10].address + '</th>' + '<th>删除</th>' + '</tr>';
                    $('.tableHeader2').after(_str2);
                }
            }
        }
    });
});
/**********************************************************订单审核**************************************************************************************************/
//默认显示
// $('.OrderauditBox').click(function(event){
//     $.ax(
//         '/shop-check-apply-list-query',
//         {
//             type: 'no',
//         },
//         'POST',
//         'json',
//         function (data) {
//             console.log(data)
//             if (data.result == '') {
//                 $('.tableHeader0').parent().parent().parent().children('.msg').remove()
//                 $('.tableHeader0 ').parent().parent().after('<h3 class="msg">没有匹配的数据</h3>')
//             } else {

//                 for (let i in data.result) {

//                     let str = '<tr class="tableHeader0">' +
//                         '<th>' +
//                         '<input type="checkbox">' +
//                         '</th>' +
//                         '<th>' + data.result[i].order_apply_id + '</th>' +
//                         '<th>' + data.result[i].name + '</th>' +
//                         '<th>' + data.result[i].username + '</th>' +
//                         '<th>' + data.result[i].amount + '</th>' +
//                         '<th>' + data.result[i].add_date + '</th>' +
//                         '<th>' + data.result[i].user_name + '</th>' +
//                         '<th>' + data.result[i].address + '</th>' +
//                         '<th>删除</th>' +
//                         '</tr>'
//                     $('.tableHeader0').after(str);
//                 }
//             }

//         }
//     )
//     $('.applyList li span').click(function () {


//         $.ax(
//             '/shop-no-check-apply-list-query',
//             {
//                 type: $(this).data('type'),
//             },
//             'POST',
//             'json',
//              (data)=> {
//                 console.log(data)
//                 console.log($(this).data('type'))
//                 if ($(this).data('type') == 'no') {
//                     console.log('aaaaa')
//                     if (data.result =='') {
//                         $('.tableHeader0').parent().parent().parent().children('.msg').remove()
//                         $('.tableHeader0').parent().parent().after('<h3 class="msg">没有匹配的数据</h3>')

//                     } else {

//                         for (let i in data.result) {

//                             let str = '<tr>' +
//                                 '<th>' +
//                                 '<input type="checkbox">' +
//                                 '</th>' +
//                                 '<th>' + data.result[i].order_apply_id + '</th>' +
//                                 '<th>' + data.result[i].name + '</th>' +
//                                 '<th>' + data.result[i].username + '</th>' +
//                                 '<th>' + data.result[i].amount + '</th>' +
//                                 '<th>' + data.result[i].add_date + '</th>' +
//                                 '<th>' + data.result[i].user_name + '</th>' +
//                                 '<th>' + data.result[i].address + '</th>' +
//                                 '<th>删除</th>' +
//                                 '</tr>'
//                             $('.tableHeader0').after(str);
//                         }
//                     }

//                 } else if ($(this).data('type') == 'yes') {

//                     if (data.result == '') {
//                         $('.tableHeader1').parent().parent().parent().children('.msg').remove()
//                         $('.tableHeader1').parent().parent().after('<h3 class="msg">没有匹配的数据</h3>')

//                     } else {
//                         for (let i in data.result) {
//                             let str = '<tr>' +
//                                 '<th>' +
//                                 '<input type="checkbox">' +
//                                 '</th>' +
//                                 '<th>' + data.result[i].order_apply_id + '</th>' +
//                                 '<th>' + data.result[i].name + '</th>' +
//                                 '<th>' + data.result[i].username + '</th>' +
//                                 '<th>' + data.result[i].amount + '</th>' +
//                                 '<th>' + data.result[i].add_date + '</th>' +
//                                 '<th>' + data.result[i].user_name + '</th>' +
//                                 '<th>' + data.result[i].address + '</th>' +
//                                 '<th>删除</th>' +
//                                 '</tr>'
//                             $('.tableHeader1').after(str);
//                         }
//                     }

//                 } else {

//                     if (data.result == '') {

//                         $('.tableHeader2').parent().parent().parent().children('.msg').remove()
//                         $('.tableHeader2').parent().parent().after('<h3 class="msg">没有匹配的数据</h3>')

//                     } else {
//                         for (let i in data.result) {
//                             let str = '<tr>' +
//                                 '<th>' +
//                                 '<input type="checkbox">' +
//                                 '</th>' +
//                                 '<th>' + data.result[i].order_apply_id + '</th>' +
//                                 '<th>' + data.result[i].name + '</th>' +
//                                 '<th>' + data.result[i].username + '</th>' +
//                                 '<th>' + data.result[i].amount + '</th>' +
//                                 '<th>' + data.result[i].add_date + '</th>' +
//                                 '<th>' + data.result[i].user_name + '</th>' +
//                                 '<th>' + data.result[i].address + '</th>' +
//                                 '<th>删除</th>' +
//                                 '</tr>'
//                             $('.tableHeader2').after(str);
//                         }
//                     }

//                 }
//             }
//         )
//     })
// })
/*****************************************************收货地址管理****************************************************************************************************/
var dataId = 0;
// 获取收货地址列表
$('.receiveAddress').click(function () {
    $.ax("/shop-admin-address-list/" + base64Obj.employee_id, null, 'get', null, function (data) {
        console.log(data);
        var res = data.result,
            html = '';
        for (var i = 0; i < res.length; i++) {
            html += '<tr class="dzGl">' + '<td>' + res[i].user_name + '</td>' + '<td>' + res[i].area_name[0] + res[i].area_name[1] + res[i].area_name[2] + '</td>' + '<td>' + res[i].street + '</td>' + '<td>' + res[i].phone + '</td>' + '<td>' + res[i].tel + '</td>' + '<td>' + isDefault(res[i].default) + '<span class="edit" data-id="' + res[i].address_id + '">编辑</span>' + '<span class="delete" data-id="' + res[i].address_id + '">删除</span>' + '</td>' + '</tr>';
        }
        $('.addressList').html(html);

        // 点击删除
        $('.delete').click(function () {
            console.log($(this).attr('data-id'));
            $.ax("/shop-admin-address-delete/" + $(this).attr('data-id'), null, 'delete', null, function (data) {
                console.log(data);
            }, function (data) {
                alert(data);
            });
        });

        // 点击编辑
        $('.edit').click(function () {
            dataId = $(this).attr('data-id');
            $('.addressBox').find('.title').find('.onespan').html('编辑收货地址');
            $.ax("/shop-city-list-query", null, 'get', null, function (data) {
                console.log(data);
                var html = '<option value="">请选择</option>',
                    res = data.result;
                for (var i = 0; i < res.length; i++) {
                    html += '<option value="' + res[i].address_id + '">' + res[i].name + '</option>';
                }
                $('#city_china').find('.province').html(html);

                console.log(base64Obj);
                // 获取用户信息
                $.ax("/shop-admin-address-query/" + dataId, null, 'get', null, function (data) {
                    console.log(data);
                    var res2 = data.result;
                    $('#city_china').find('.province').val(res2.area_id[0]);
                    $('#name').val(res2.user_name);
                    $('#phone').val(res2.phone);
                    $('#megDz').val(res2.street);
                    $('.defaultFlag').attr('checked', res2.default == 1 ? true : false);
                    $('#gphone').val(res2.tel);
                    pid = res2.area_id[0];
                    for (var i = 0; i < res.length; i++) {
                        if (res[i].address_id == res2.area_id[0]) {
                            pname = res[i].name;
                            if (res[i].children == null) {} else {
                                var citys = res[i].children,
                                    htmls = '<option value="">请选择</option>';
                                for (var i = 0; i < citys.length; i++) {
                                    htmls += '<option value="' + citys[i].address_id + '">' + citys[i].name + '</option>';
                                }
                                $('#city_china').find('.city').html(htmls);
                                setTimeout(function () {
                                    $('#city_china').find('.city').val(res2.area_id[1]);
                                    cid = res2.area_id[1];
                                    for (var i = 0; i < citys.length; i++) {
                                        if (citys[i].address_id == res2.area_id[1]) {
                                            cname = citys[i].name;
                                            if (citys[i].children == null) {} else {
                                                var areas = citys[i].children,
                                                    htmlss = '<option value="">请选择</option>';
                                                for (var i = 0; i < areas.length; i++) {
                                                    htmlss += '<option value="' + areas[i].address_id + '">' + areas[i].name + '</option>';
                                                }
                                                $('#city_china').find('.area').html(htmlss);
                                                setTimeout(function () {
                                                    $('#city_china').find('.area').val(res2.area_id[2]);
                                                    aid = res2.area_id[2];
                                                    for (var i = 0; i < areas.length; i++) {
                                                        if (areas[i].address_id == res2.area_id[2]) {
                                                            aname = areas[i].name;
                                                        }
                                                    }
                                                }, 10);
                                            }
                                        }
                                    }
                                }, 10);
                            }
                        }
                    }
                }, function (data) {
                    alert(data);
                });

                // 改变省
                $('#city_china').find('.province').on('change', function () {
                    console.log($(this).val());
                    pid = $(this).val();
                    $('#city_china').find('.area').val('');
                    $('#city_china').find('.area').html('');
                    for (var i = 0; i < res.length; i++) {
                        if (res[i].address_id == $(this).val()) {
                            pname = res[i].name;
                            if (res[i].children == null) {} else {
                                var citys = res[i].children,
                                    htmls = '<option value="">请选择</option>';
                                console.log(citys);

                                for (var i = 0; i < citys.length; i++) {
                                    htmls += '<option value="' + citys[i].address_id + '">' + citys[i].name + '</option>';
                                }
                                $('#city_china').find('.city').html(htmls);

                                // 改变市
                                $('#city_china').find('.city').on('change', function () {
                                    cid = $(this).val();
                                    for (var i = 0; i < citys.length; i++) {
                                        if (citys[i].address_id == $(this).val()) {
                                            cname = citys[i].name;
                                            if (citys[i].children == null) {} else {
                                                var areas = citys[i].children,
                                                    htmlss = '<option value="">请选择</option>';
                                                console.log(areas);

                                                for (var i = 0; i < areas.length; i++) {
                                                    htmlss += '<option value="' + areas[i].address_id + '">' + areas[i].name + '</option>';
                                                }
                                                $('#city_china').find('.area').html(htmlss);

                                                $('#city_china').find('.area').on('change', function () {
                                                    aid = $(this).val();
                                                    for (var i = 0; i < areas.length; i++) {
                                                        if (areas[i].address_id == $(this).val()) {
                                                            aname = areas[i].name;
                                                        }
                                                    }
                                                });
                                            }
                                        }
                                    }
                                });
                            }
                        }
                    }
                });
            }, function (data) {
                alert(data);
            });
        });

        // 是否默认地址
        function isDefault(obj) {
            if (obj == 1) {
                return '<span class="default" >默认地址</span>';
            } else {
                return '<span class="addressSpan">设置为默认地址</span>';
            }
        }
    }, function (data) {
        alert(data);
    });

    $.ax("/shop-city-list-query", null, 'get', null, function (data) {
        console.log(data);
        var html = '<option value="">请选择</option>',
            res = data.result;
        for (var i = 0; i < res.length; i++) {
            html += '<option value="' + res[i].address_id + '">' + res[i].name + '</option>';
        }
        $('#city_china').find('.province').html(html);

        // 改变省
        $('#city_china').find('.province').on('change', function () {
            console.log($(this).val());
            $('#city_china').find('.area').val('');
            $('#city_china').find('.area').html('');
            pid = $(this).val();
            for (var i = 0; i < res.length; i++) {
                if (res[i].address_id == $(this).val()) {
                    pname = res[i].name;
                    if (res[i].children == null) {} else {
                        var citys = res[i].children,
                            htmls = '<option value="">请选择</option>';
                        console.log(citys);

                        for (var i = 0; i < citys.length; i++) {
                            htmls += '<option value="' + citys[i].address_id + '">' + citys[i].name + '</option>';
                        }
                        $('#city_china').find('.city').html(htmls);

                        // 改变市
                        $('#city_china').find('.city').on('change', function () {
                            cid = $(this).val();
                            for (var i = 0; i < citys.length; i++) {
                                if (citys[i].address_id == $(this).val()) {
                                    cname = citys[i].name;
                                    if (citys[i].children == null) {} else {
                                        var areas = citys[i].children,
                                            htmlss = '<option value="">请选择</option>';
                                        console.log(areas);

                                        for (var i = 0; i < areas.length; i++) {
                                            htmlss += '<option value="' + areas[i].address_id + '">' + areas[i].name + '</option>';
                                        }
                                        $('#city_china').find('.area').html(htmlss);

                                        $('#city_china').find('.area').on('change', function () {
                                            aid = $(this).val();
                                            for (var i = 0; i < areas.length; i++) {
                                                if (areas[i].address_id == $(this).val()) {
                                                    aname = areas[i].name;
                                                }
                                            }
                                        });
                                    }
                                }
                            }
                        });
                    }
                }
            }
        });
    }, function (data) {
        alert(data);
    });
});
// 保存地址
$('.keepDz').click(function () {
    console.log($(this).parents('div').find('.title').find('.onespan').html());
    if ($(this).parents('div').find('.title').find('.onespan').html() == '新增收货地址') {
        $.ax("/shop-admin-address-create", {
            customer_id: base64Obj.customer_id,
            contact_id: base64Obj.employee_id,
            user_name: $('#name').val(),
            phone: $('#phone').val(),
            area_id: pid + '/' + cid + '/' + aid,
            area_name: pname + '/' + cname + '/' + aname,
            street: $('#megDz').val(),
            default: $('.defaultFlag').prop('checked') == false ? 0 : 1,
            tel: $('#gphone').val()
        }, 'post', null, function (data) {
            alert(data.message);
            // 清楚数据
            $('#name').val('');
            $('#phone').val('');
            $('#megDz').val('');
            $('.defaultFlag').prop('checked', false);
            $('#gphone').val();
        }, function (data) {
            alert(data.message);
        });
    } else {
        console.log(dataId);
        $.ax("/shop-admin-address-update", {
            address_id: dataId,
            customer_id: base64Obj.customer_id,
            contact_id: base64Obj.employee_id,
            user_name: $('#name').val(),
            phone: $('#phone').val(),
            area_id: pid + '/' + cid + '/' + aid,
            area_name: pname + '/' + cname + '/' + aname,
            street: $('#megDz').val(),
            default: $('.defaultFlag').prop('checked') == false ? 0 : 1,
            tel: $('#gphone').val()
        }, 'patch', null, function (data) {
            alert(data.message);
        }, function (data) {
            alert(data.message);
        });
    }
});

/*****************************************************我的审核****************************************************************************************************/
$('.myReviews').click(function () {
    // 未审核
    no();
    function no() {
        $.ax("/shop-check-apply-list-query", {
            type: 'no'
        }, 'post', null, function (data) {
            if (data.success == 'true') {
                var res = data.result,
                    html = '';
                for (var i = 0; i < res.length; i++) {
                    html += '<tr>' + '<td>' + '<input type="checkbox">' + '</td>' + '<td>单号</td>' + '<td>' + res[i].name + '</td>' + '<td>' + res[i].username + '</td>' + '<td>' + res[i].amount + '</td>' + '<td>' + res[i].add_date + '</td>' + '<td>' + res[i].user_name + '</td>' + '<td>' + res[i].address + '</td>' + '<td><button data-id="' + res[i].order_apply_id + '" class="pass">通过</button><button data-id="' + res[i].order_apply_id + '" class="reject">驳回</button></td>' + '</tr>';
                }
                $('.noMyReview').html(html);

                // 点击审核
                $('.pass').click(function () {
                    $.ax("/shop-check-apply-update", {
                        order_apply_id: $(this).attr('data-id')
                    }, 'post', null, function (data) {
                        alert(data.message);
                        if (data.success == 'true') {
                            no();
                            alert(data.message);
                        } else {
                            alert(data.message);
                        }
                    }, function (data) {
                        alert(data);
                    });
                });
                // 点击驳回
                $('.reject').click(function () {
                    $.ax("/shop-check-apply-refuse-update", {
                        order_apply_id: $(this).attr('data-id')
                    }, 'post', null, function (data) {
                        if (data.success == 'true') {
                            no();
                            alert(data.message);
                        } else {
                            alert(data.message);
                        }
                    }, function (data) {
                        alert(data);
                    });
                });
            }
        }, function (data) {
            alert(data);
        });
    }

    // 已审核
    yes();
    function yes() {
        $.ax("/shop-check-apply-list-query", {
            type: 'yes'
        }, 'post', null, function (data) {
            if (data.success == 'true') {
                var res = data.result,
                    html = '';
                for (var i = 0; i < res.length; i++) {
                    html += '<tr>' + '<td>单号</td>' + '<td>' + res[i].name + '</td>' + '<td>' + res[i].username + '</td>' + '<td>' + res[i].amount + '</td>' + '<td>' + res[i].add_date + '</td>' + '<td>' + res[i].user_name + '</td>' + '<td>' + res[i].address + '</td>' + '</tr>';
                }
                $('.yesMyReview').html(html);
            }
        }, function (data) {
            alert(data);
        });
    }

    // 驳回审核
    refuse();
    function refuse() {
        $.ax("/shop-check-apply-list-query", {
            type: 'refuse'
        }, 'post', null, function (data) {
            if (data.success == 'true') {
                var res = data.result,
                    html = '';
                for (var i = 0; i < res.length; i++) {
                    html += '<tr>' + '<td>单号</td>' + '<td>' + res[i].name + '</td>' + '<td>' + res[i].username + '</td>' + '<td>' + res[i].amount + '</td>' + '<td>' + res[i].add_date + '</td>' + '<td>' + res[i].user_name + '</td>' + '<td>' + res[i].address + '</td>' + '<td><button>取消</button></td>' + '</tr>';
                }
                $('.refuseMyReview').html(html);
            }
        }, function (data) {
            alert(data);
        });
    }
    // 点击未审核
    $('.noReview').click(function () {
        no();
    });
    // 点击已审核
    $('.yesReview').click(function () {
        yes();
    });
    // 点击驳回审核
    $('.refuseReview').click(function () {
        refuse();
    });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[50]);