(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("@emotion/react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "@emotion/react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["metal-ui"] = factory(require("react"), require("@emotion/react"), require("react-dom"));
	else
		root["metal-ui"] = factory(root["React"], root["@emotion/react"], root["ReactDOM"]);
})((typeof window !== 'undefined' ? window : this), function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(26)();
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __rest; });
/* unused harmony export __decorate */
/* unused harmony export __param */
/* unused harmony export __metadata */
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __createBinding */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __spreadArrays */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __spreadArray; });
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/* unused harmony export __classPrivateFieldGet */
/* unused harmony export __classPrivateFieldSet */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var AlgoliaSearchHelper = __webpack_require__(28);

var SearchParameters = __webpack_require__(15);
var SearchResults = __webpack_require__(16);

/**
 * The algoliasearchHelper module is the function that will let its
 * contains everything needed to use the Algoliasearch
 * Helper. It is a also a function that instanciate the helper.
 * To use the helper, you also need the Algolia JS client v3.
 * @example
 * //using the UMD build
 * var client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
 * var helper = algoliasearchHelper(client, 'bestbuy', {
 *   facets: ['shipping'],
 *   disjunctiveFacets: ['category']
 * });
 * helper.on('result', function(event) {
 *   console.log(event.results);
 * });
 * helper
 *   .toggleFacetRefinement('category', 'Movies & TV Shows')
 *   .toggleFacetRefinement('shipping', 'Free shipping')
 *   .search();
 * @example
 * // The helper is an event emitter using the node API
 * helper.on('result', updateTheResults);
 * helper.once('result', updateTheResults);
 * helper.removeListener('result', updateTheResults);
 * helper.removeAllListeners('result');
 * @module algoliasearchHelper
 * @param  {AlgoliaSearch} client an AlgoliaSearch client
 * @param  {string} index the name of the index to query
 * @param  {SearchParameters|object} opts an object defining the initial config of the search. It doesn't have to be a {SearchParameters}, just an object containing the properties you need from it.
 * @return {AlgoliaSearchHelper}
 */
function algoliasearchHelper(client, index, opts) {
  return new AlgoliaSearchHelper(client, index, opts);
}

/**
 * The version currently used
 * @member module:algoliasearchHelper.version
 * @type {number}
 */
algoliasearchHelper.version = __webpack_require__(21);

/**
 * Constructor for the Helper.
 * @member module:algoliasearchHelper.AlgoliaSearchHelper
 * @type {AlgoliaSearchHelper}
 */
algoliasearchHelper.AlgoliaSearchHelper = AlgoliaSearchHelper;

/**
 * Constructor for the object containing all the parameters of the search.
 * @member module:algoliasearchHelper.SearchParameters
 * @type {SearchParameters}
 */
algoliasearchHelper.SearchParameters = SearchParameters;

/**
 * Constructor for the object containing the results of the search.
 * @member module:algoliasearchHelper.SearchResults
 * @type {SearchResults}
 */
algoliasearchHelper.SearchResults = SearchResults;

module.exports = algoliasearchHelper;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function clone(value) {
  if (typeof value === 'object' && value !== null) {
    return _merge(Array.isArray(value) ? [] : {}, value);
  }
  return value;
}

function isObjectOrArrayOrFunction(value) {
  return (
    typeof value === 'function' ||
    Array.isArray(value) ||
    Object.prototype.toString.call(value) === '[object Object]'
  );
}

function _merge(target, source) {
  if (target === source) {
    return target;
  }

  for (var key in source) {
    if (!Object.prototype.hasOwnProperty.call(source, key)) {
      continue;
    }

    var sourceVal = source[key];
    var targetVal = target[key];

    if (typeof targetVal !== 'undefined' && typeof sourceVal === 'undefined') {
      continue;
    }

    if (isObjectOrArrayOrFunction(targetVal) && isObjectOrArrayOrFunction(sourceVal)) {
      target[key] = _merge(targetVal, sourceVal);
    } else {
      target[key] = clone(sourceVal);
    }
  }
  return target;
}

/**
 * This method is like Object.assign, but recursively merges own and inherited
 * enumerable keyed properties of source objects into the destination object.
 *
 * NOTE: this behaves like lodash/merge, but:
 * - does mutate functions if they are a source
 * - treats non-plain objects as plain
 * - does not work for circular objects
 * - treats sparse arrays as sparse
 * - does not convert Array-like objects (Arguments, NodeLists, etc.) to arrays
 *
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 */

function merge(target) {
  if (!isObjectOrArrayOrFunction(target)) {
    target = {};
  }

  for (var i = 1, l = arguments.length; i < l; i++) {
    var source = arguments[i];

    if (isObjectOrArrayOrFunction(source)) {
      _merge(target, source);
    }
  }
  return target;
}

module.exports = merge;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// @MAJOR can be replaced by native Array#find when we change support
module.exports = function find(array, comparator) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  for (var i = 0; i < array.length; i++) {
    if (comparator(array[i])) {
      return array[i];
    }
  }
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// NOTE: this behaves like lodash/defaults, but doesn't mutate the target
// it also preserve keys order
module.exports = function defaultsPure() {
  var sources = Array.prototype.slice.call(arguments);

  return sources.reduceRight(function(acc, source) {
    Object.keys(Object(source)).forEach(function(key) {
      if (source[key] === undefined) {
        return;
      }
      if (acc[key] !== undefined) {
        // remove if already added, so that we can add it in correct order
        delete acc[key];
      }
      acc[key] = source[key];
    });
    return acc;
  }, {});
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/babel/babel/blob/3aaafae053fa75febb3aa45d45b6f00646e30ba4/packages/babel-helpers/src/helpers.js#L604-L620
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source === null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key;
  var i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

module.exports = _objectWithoutPropertiesLoose;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function objectHasKeys(obj) {
  return obj && Object.keys(obj).length > 0;
}

module.exports = objectHasKeys;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(this && this[arg] || arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(this, arg));
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(this && this[key] || key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(7);
var defaultsPure = __webpack_require__(10);
var intersection = __webpack_require__(29);
var find = __webpack_require__(8);
var valToNumber = __webpack_require__(30);
var omit = __webpack_require__(11);
var objectHasKeys = __webpack_require__(12);
var isValidUserToken = __webpack_require__(31);

var RefinementList = __webpack_require__(32);

/**
 * isEqual, but only for numeric refinement values, possible values:
 * - 5
 * - [5]
 * - [[5]]
 * - [[5,5],[4]]
 */
function isEqualNumericRefinement(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return (
      a.length === b.length &&
      a.every(function(el, i) {
        return isEqualNumericRefinement(b[i], el);
      })
    );
  }
  return a === b;
}

/**
 * like _.find but using deep equality to be able to use it
 * to find arrays.
 * @private
 * @param {any[]} array array to search into (elements are base or array of base)
 * @param {any} searchedValue the value we're looking for (base or array of base)
 * @return {any} the searched value or undefined
 */
function findArray(array, searchedValue) {
  return find(array, function(currentValue) {
    return isEqualNumericRefinement(currentValue, searchedValue);
  });
}

/**
 * The facet list is the structure used to store the list of values used to
 * filter a single attribute.
 * @typedef {string[]} SearchParameters.FacetList
 */

/**
 * Structure to store numeric filters with the operator as the key. The supported operators
 * are `=`, `>`, `<`, `>=`, `<=` and `!=`.
 * @typedef {Object.<string, Array.<number|number[]>>} SearchParameters.OperatorList
 */

/**
 * SearchParameters is the data structure that contains all the information
 * usable for making a search to Algolia API. It doesn't do the search itself,
 * nor does it contains logic about the parameters.
 * It is an immutable object, therefore it has been created in a way that each
 * changes does not change the object itself but returns a copy with the
 * modification.
 * This object should probably not be instantiated outside of the helper. It will
 * be provided when needed. This object is documented for reference as you'll
 * get it from events generated by the {@link AlgoliaSearchHelper}.
 * If need be, instantiate the Helper from the factory function {@link SearchParameters.make}
 * @constructor
 * @classdesc contains all the parameters of a search
 * @param {object|SearchParameters} newParameters existing parameters or partial object
 * for the properties of a new SearchParameters
 * @see SearchParameters.make
 * @example <caption>SearchParameters of the first query in
 *   <a href="http://demos.algolia.com/instant-search-demo/">the instant search demo</a></caption>
{
   "query": "",
   "disjunctiveFacets": [
      "customerReviewCount",
      "category",
      "salePrice_range",
      "manufacturer"
  ],
   "maxValuesPerFacet": 30,
   "page": 0,
   "hitsPerPage": 10,
   "facets": [
      "type",
      "shipping"
  ]
}
 */
function SearchParameters(newParameters) {
  var params = newParameters ? SearchParameters._parseNumbers(newParameters) : {};

  if (params.userToken !== undefined && !isValidUserToken(params.userToken)) {
    console.warn('[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}');
  }
  /**
   * This attribute contains the list of all the conjunctive facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * @member {string[]}
   */
  this.facets = params.facets || [];
  /**
   * This attribute contains the list of all the disjunctive facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * @member {string[]}
   */
  this.disjunctiveFacets = params.disjunctiveFacets || [];
  /**
   * This attribute contains the list of all the hierarchical facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * Hierarchical facets are a sub type of disjunctive facets that
   * let you filter faceted attributes hierarchically.
   * @member {string[]|object[]}
   */
  this.hierarchicalFacets = params.hierarchicalFacets || [];

  // Refinements
  /**
   * This attribute contains all the filters that need to be
   * applied on the conjunctive facets. Each facet must be properly
   * defined in the `facets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */
  this.facetsRefinements = params.facetsRefinements || {};
  /**
   * This attribute contains all the filters that need to be
   * excluded from the conjunctive facets. Each facet must be properly
   * defined in the `facets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters excluded for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */
  this.facetsExcludes = params.facetsExcludes || {};
  /**
   * This attribute contains all the filters that need to be
   * applied on the disjunctive facets. Each facet must be properly
   * defined in the `disjunctiveFacets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */
  this.disjunctiveFacetsRefinements = params.disjunctiveFacetsRefinements || {};
  /**
   * This attribute contains all the filters that need to be
   * applied on the numeric attributes.
   *
   * The key is the name of the attribute, and the value is the
   * filters to apply to this attribute.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `numericFilters` attribute.
   * @member {Object.<string, SearchParameters.OperatorList>}
   */
  this.numericRefinements = params.numericRefinements || {};
  /**
   * This attribute contains all the tags used to refine the query.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `tagFilters` attribute.
   * @member {string[]}
   */
  this.tagRefinements = params.tagRefinements || [];
  /**
   * This attribute contains all the filters that need to be
   * applied on the hierarchical facets. Each facet must be properly
   * defined in the `hierarchicalFacets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name. The FacetList values
   * are structured as a string that contain the values for each level
   * separated by the configured separator.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */
  this.hierarchicalFacetsRefinements = params.hierarchicalFacetsRefinements || {};

  var self = this;
  Object.keys(params).forEach(function(paramName) {
    var isKeyKnown = SearchParameters.PARAMETERS.indexOf(paramName) !== -1;
    var isValueDefined = params[paramName] !== undefined;

    if (!isKeyKnown && isValueDefined) {
      self[paramName] = params[paramName];
    }
  });
}

/**
 * List all the properties in SearchParameters and therefore all the known Algolia properties
 * This doesn't contain any beta/hidden features.
 * @private
 */
SearchParameters.PARAMETERS = Object.keys(new SearchParameters());

/**
 * @private
 * @param {object} partialState full or part of a state
 * @return {object} a new object with the number keys as number
 */
SearchParameters._parseNumbers = function(partialState) {
  // Do not reparse numbers in SearchParameters, they ought to be parsed already
  if (partialState instanceof SearchParameters) return partialState;

  var numbers = {};

  var numberKeys = [
    'aroundPrecision',
    'aroundRadius',
    'getRankingInfo',
    'minWordSizefor2Typos',
    'minWordSizefor1Typo',
    'page',
    'maxValuesPerFacet',
    'distinct',
    'minimumAroundRadius',
    'hitsPerPage',
    'minProximity'
  ];

  numberKeys.forEach(function(k) {
    var value = partialState[k];
    if (typeof value === 'string') {
      var parsedValue = parseFloat(value);
      // global isNaN is ok to use here, value is only number or NaN
      numbers[k] = isNaN(parsedValue) ? value : parsedValue;
    }
  });

  // there's two formats of insideBoundingBox, we need to parse
  // the one which is an array of float geo rectangles
  if (Array.isArray(partialState.insideBoundingBox)) {
    numbers.insideBoundingBox = partialState.insideBoundingBox.map(function(geoRect) {
      if (Array.isArray(geoRect)) {
        return geoRect.map(function(value) {
          return parseFloat(value);
        });
      }
      return geoRect;
    });
  }

  if (partialState.numericRefinements) {
    var numericRefinements = {};
    Object.keys(partialState.numericRefinements).forEach(function(attribute) {
      var operators = partialState.numericRefinements[attribute] || {};
      numericRefinements[attribute] = {};
      Object.keys(operators).forEach(function(operator) {
        var values = operators[operator];
        var parsedValues = values.map(function(v) {
          if (Array.isArray(v)) {
            return v.map(function(vPrime) {
              if (typeof vPrime === 'string') {
                return parseFloat(vPrime);
              }
              return vPrime;
            });
          } else if (typeof v === 'string') {
            return parseFloat(v);
          }
          return v;
        });
        numericRefinements[attribute][operator] = parsedValues;
      });
    });
    numbers.numericRefinements = numericRefinements;
  }

  return merge({}, partialState, numbers);
};

/**
 * Factory for SearchParameters
 * @param {object|SearchParameters} newParameters existing parameters or partial
 * object for the properties of a new SearchParameters
 * @return {SearchParameters} frozen instance of SearchParameters
 */
SearchParameters.make = function makeSearchParameters(newParameters) {
  var instance = new SearchParameters(newParameters);

  var hierarchicalFacets = newParameters.hierarchicalFacets || [];
  hierarchicalFacets.forEach(function(facet) {
    if (facet.rootPath) {
      var currentRefinement = instance.getHierarchicalRefinement(facet.name);

      if (currentRefinement.length > 0 && currentRefinement[0].indexOf(facet.rootPath) !== 0) {
        instance = instance.clearRefinements(facet.name);
      }

      // get it again in case it has been cleared
      currentRefinement = instance.getHierarchicalRefinement(facet.name);
      if (currentRefinement.length === 0) {
        instance = instance.toggleHierarchicalFacetRefinement(facet.name, facet.rootPath);
      }
    }
  });

  return instance;
};

/**
 * Validates the new parameters based on the previous state
 * @param {SearchParameters} currentState the current state
 * @param {object|SearchParameters} parameters the new parameters to set
 * @return {Error|null} Error if the modification is invalid, null otherwise
 */
SearchParameters.validate = function(currentState, parameters) {
  var params = parameters || {};

  if (currentState.tagFilters && params.tagRefinements && params.tagRefinements.length > 0) {
    return new Error(
      '[Tags] Cannot switch from the managed tag API to the advanced API. It is probably ' +
      'an error, if it is really what you want, you should first clear the tags with clearTags method.');
  }

  if (currentState.tagRefinements.length > 0 && params.tagFilters) {
    return new Error(
      '[Tags] Cannot switch from the advanced tag API to the managed API. It is probably ' +
      'an error, if it is not, you should first clear the tags with clearTags method.');
  }

  if (
    currentState.numericFilters &&
    params.numericRefinements &&
    objectHasKeys(params.numericRefinements)
  ) {
    return new Error(
      "[Numeric filters] Can't switch from the advanced to the managed API. It" +
        ' is probably an error, if this is really what you want, you have to first' +
        ' clear the numeric filters.'
    );
  }

  if (objectHasKeys(currentState.numericRefinements) && params.numericFilters) {
    return new Error(
      "[Numeric filters] Can't switch from the managed API to the advanced. It" +
      ' is probably an error, if this is really what you want, you have to first' +
      ' clear the numeric filters.');
  }

  return null;
};

SearchParameters.prototype = {
  constructor: SearchParameters,

  /**
   * Remove all refinements (disjunctive + conjunctive + excludes + numeric filters)
   * @method
   * @param {undefined|string|SearchParameters.clearCallback} [attribute] optional string or function
   * - If not given, means to clear all the filters.
   * - If `string`, means to clear all refinements for the `attribute` named filter.
   * - If `function`, means to clear all the refinements that return truthy values.
   * @return {SearchParameters}
   */
  clearRefinements: function clearRefinements(attribute) {
    var patch = {
      numericRefinements: this._clearNumericRefinements(attribute),
      facetsRefinements: RefinementList.clearRefinement(
        this.facetsRefinements,
        attribute,
        'conjunctiveFacet'
      ),
      facetsExcludes: RefinementList.clearRefinement(
        this.facetsExcludes,
        attribute,
        'exclude'
      ),
      disjunctiveFacetsRefinements: RefinementList.clearRefinement(
        this.disjunctiveFacetsRefinements,
        attribute,
        'disjunctiveFacet'
      ),
      hierarchicalFacetsRefinements: RefinementList.clearRefinement(
        this.hierarchicalFacetsRefinements,
        attribute,
        'hierarchicalFacet'
      )
    };
    if (
      patch.numericRefinements === this.numericRefinements &&
      patch.facetsRefinements === this.facetsRefinements &&
      patch.facetsExcludes === this.facetsExcludes &&
      patch.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements &&
      patch.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements
    ) {
      return this;
    }
    return this.setQueryParameters(patch);
  },
  /**
   * Remove all the refined tags from the SearchParameters
   * @method
   * @return {SearchParameters}
   */
  clearTags: function clearTags() {
    if (this.tagFilters === undefined && this.tagRefinements.length === 0) return this;

    return this.setQueryParameters({
      tagFilters: undefined,
      tagRefinements: []
    });
  },
  /**
   * Set the index.
   * @method
   * @param {string} index the index name
   * @return {SearchParameters}
   */
  setIndex: function setIndex(index) {
    if (index === this.index) return this;

    return this.setQueryParameters({
      index: index
    });
  },
  /**
   * Query setter
   * @method
   * @param {string} newQuery value for the new query
   * @return {SearchParameters}
   */
  setQuery: function setQuery(newQuery) {
    if (newQuery === this.query) return this;

    return this.setQueryParameters({
      query: newQuery
    });
  },
  /**
   * Page setter
   * @method
   * @param {number} newPage new page number
   * @return {SearchParameters}
   */
  setPage: function setPage(newPage) {
    if (newPage === this.page) return this;

    return this.setQueryParameters({
      page: newPage
    });
  },
  /**
   * Facets setter
   * The facets are the simple facets, used for conjunctive (and) faceting.
   * @method
   * @param {string[]} facets all the attributes of the algolia records used for conjunctive faceting
   * @return {SearchParameters}
   */
  setFacets: function setFacets(facets) {
    return this.setQueryParameters({
      facets: facets
    });
  },
  /**
   * Disjunctive facets setter
   * Change the list of disjunctive (or) facets the helper chan handle.
   * @method
   * @param {string[]} facets all the attributes of the algolia records used for disjunctive faceting
   * @return {SearchParameters}
   */
  setDisjunctiveFacets: function setDisjunctiveFacets(facets) {
    return this.setQueryParameters({
      disjunctiveFacets: facets
    });
  },
  /**
   * HitsPerPage setter
   * Hits per page represents the number of hits retrieved for this query
   * @method
   * @param {number} n number of hits retrieved per page of results
   * @return {SearchParameters}
   */
  setHitsPerPage: function setHitsPerPage(n) {
    if (this.hitsPerPage === n) return this;

    return this.setQueryParameters({
      hitsPerPage: n
    });
  },
  /**
   * typoTolerance setter
   * Set the value of typoTolerance
   * @method
   * @param {string} typoTolerance new value of typoTolerance ("true", "false", "min" or "strict")
   * @return {SearchParameters}
   */
  setTypoTolerance: function setTypoTolerance(typoTolerance) {
    if (this.typoTolerance === typoTolerance) return this;

    return this.setQueryParameters({
      typoTolerance: typoTolerance
    });
  },
  /**
   * Add a numeric filter for a given attribute
   * When value is an array, they are combined with OR
   * When value is a single value, it will combined with AND
   * @method
   * @param {string} attribute attribute to set the filter on
   * @param {string} operator operator of the filter (possible values: =, >, >=, <, <=, !=)
   * @param {number | number[]} value value of the filter
   * @return {SearchParameters}
   * @example
   * // for price = 50 or 40
   * searchparameter.addNumericRefinement('price', '=', [50, 40]);
   * @example
   * // for size = 38 and 40
   * searchparameter.addNumericRefinement('size', '=', 38);
   * searchparameter.addNumericRefinement('size', '=', 40);
   */
  addNumericRefinement: function(attribute, operator, v) {
    var value = valToNumber(v);

    if (this.isNumericRefined(attribute, operator, value)) return this;

    var mod = merge({}, this.numericRefinements);

    mod[attribute] = merge({}, mod[attribute]);

    if (mod[attribute][operator]) {
      // Array copy
      mod[attribute][operator] = mod[attribute][operator].slice();
      // Add the element. Concat can't be used here because value can be an array.
      mod[attribute][operator].push(value);
    } else {
      mod[attribute][operator] = [value];
    }

    return this.setQueryParameters({
      numericRefinements: mod
    });
  },
  /**
   * Get the list of conjunctive refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getConjunctiveRefinements: function(facetName) {
    if (!this.isConjunctiveFacet(facetName)) {
      return [];
    }
    return this.facetsRefinements[facetName] || [];
  },
  /**
   * Get the list of disjunctive refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getDisjunctiveRefinements: function(facetName) {
    if (!this.isDisjunctiveFacet(facetName)) {
      return [];
    }
    return this.disjunctiveFacetsRefinements[facetName] || [];
  },
  /**
   * Get the list of hierarchical refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getHierarchicalRefinement: function(facetName) {
    // we send an array but we currently do not support multiple
    // hierarchicalRefinements for a hierarchicalFacet
    return this.hierarchicalFacetsRefinements[facetName] || [];
  },
  /**
   * Get the list of exclude refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */
  getExcludeRefinements: function(facetName) {
    if (!this.isConjunctiveFacet(facetName)) {
      return [];
    }
    return this.facetsExcludes[facetName] || [];
  },

  /**
   * Remove all the numeric filter for a given (attribute, operator)
   * @method
   * @param {string} attribute attribute to set the filter on
   * @param {string} [operator] operator of the filter (possible values: =, >, >=, <, <=, !=)
   * @param {number} [number] the value to be removed
   * @return {SearchParameters}
   */
  removeNumericRefinement: function(attribute, operator, paramValue) {
    if (paramValue !== undefined) {
      if (!this.isNumericRefined(attribute, operator, paramValue)) {
        return this;
      }
      return this.setQueryParameters({
        numericRefinements: this._clearNumericRefinements(function(value, key) {
          return (
            key === attribute &&
            value.op === operator &&
            isEqualNumericRefinement(value.val, valToNumber(paramValue))
          );
        })
      });
    } else if (operator !== undefined) {
      if (!this.isNumericRefined(attribute, operator)) return this;
      return this.setQueryParameters({
        numericRefinements: this._clearNumericRefinements(function(value, key) {
          return key === attribute && value.op === operator;
        })
      });
    }

    if (!this.isNumericRefined(attribute)) return this;
    return this.setQueryParameters({
      numericRefinements: this._clearNumericRefinements(function(value, key) {
        return key === attribute;
      })
    });
  },
  /**
   * Get the list of numeric refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {SearchParameters.OperatorList} list of refinements
   */
  getNumericRefinements: function(facetName) {
    return this.numericRefinements[facetName] || {};
  },
  /**
   * Return the current refinement for the (attribute, operator)
   * @param {string} attribute attribute in the record
   * @param {string} operator operator applied on the refined values
   * @return {Array.<number|number[]>} refined values
   */
  getNumericRefinement: function(attribute, operator) {
    return this.numericRefinements[attribute] && this.numericRefinements[attribute][operator];
  },
  /**
   * Clear numeric filters.
   * @method
   * @private
   * @param {string|SearchParameters.clearCallback} [attribute] optional string or function
   * - If not given, means to clear all the filters.
   * - If `string`, means to clear all refinements for the `attribute` named filter.
   * - If `function`, means to clear all the refinements that return truthy values.
   * @return {Object.<string, OperatorList>}
   */
  _clearNumericRefinements: function _clearNumericRefinements(attribute) {
    if (attribute === undefined) {
      if (!objectHasKeys(this.numericRefinements)) {
        return this.numericRefinements;
      }
      return {};
    } else if (typeof attribute === 'string') {
      return omit(this.numericRefinements, [attribute]);
    } else if (typeof attribute === 'function') {
      var hasChanged = false;
      var numericRefinements = this.numericRefinements;
      var newNumericRefinements = Object.keys(numericRefinements).reduce(function(memo, key) {
        var operators = numericRefinements[key];
        var operatorList = {};

        operators = operators || {};
        Object.keys(operators).forEach(function(operator) {
          var values = operators[operator] || [];
          var outValues = [];
          values.forEach(function(value) {
            var predicateResult = attribute({val: value, op: operator}, key, 'numeric');
            if (!predicateResult) outValues.push(value);
          });
          if (outValues.length !== values.length) {
            hasChanged = true;
          }
          operatorList[operator] = outValues;
        });

        memo[key] = operatorList;

        return memo;
      }, {});

      if (hasChanged) return newNumericRefinements;
      return this.numericRefinements;
    }
  },
  /**
   * Add a facet to the facets attribute of the helper configuration, if it
   * isn't already present.
   * @method
   * @param {string} facet facet name to add
   * @return {SearchParameters}
   */
  addFacet: function addFacet(facet) {
    if (this.isConjunctiveFacet(facet)) {
      return this;
    }

    return this.setQueryParameters({
      facets: this.facets.concat([facet])
    });
  },
  /**
   * Add a disjunctive facet to the disjunctiveFacets attribute of the helper
   * configuration, if it isn't already present.
   * @method
   * @param {string} facet disjunctive facet name to add
   * @return {SearchParameters}
   */
  addDisjunctiveFacet: function addDisjunctiveFacet(facet) {
    if (this.isDisjunctiveFacet(facet)) {
      return this;
    }

    return this.setQueryParameters({
      disjunctiveFacets: this.disjunctiveFacets.concat([facet])
    });
  },
  /**
   * Add a hierarchical facet to the hierarchicalFacets attribute of the helper
   * configuration.
   * @method
   * @param {object} hierarchicalFacet hierarchical facet to add
   * @return {SearchParameters}
   * @throws will throw an error if a hierarchical facet with the same name was already declared
   */
  addHierarchicalFacet: function addHierarchicalFacet(hierarchicalFacet) {
    if (this.isHierarchicalFacet(hierarchicalFacet.name)) {
      throw new Error(
        'Cannot declare two hierarchical facets with the same name: `' + hierarchicalFacet.name + '`');
    }

    return this.setQueryParameters({
      hierarchicalFacets: this.hierarchicalFacets.concat([hierarchicalFacet])
    });
  },
  /**
   * Add a refinement on a "normal" facet
   * @method
   * @param {string} facet attribute to apply the faceting on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */
  addFacetRefinement: function addFacetRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }
    if (RefinementList.isRefined(this.facetsRefinements, facet, value)) return this;

    return this.setQueryParameters({
      facetsRefinements: RefinementList.addRefinement(this.facetsRefinements, facet, value)
    });
  },
  /**
   * Exclude a value from a "normal" facet
   * @method
   * @param {string} facet attribute to apply the exclusion on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */
  addExcludeRefinement: function addExcludeRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }
    if (RefinementList.isRefined(this.facetsExcludes, facet, value)) return this;

    return this.setQueryParameters({
      facetsExcludes: RefinementList.addRefinement(this.facetsExcludes, facet, value)
    });
  },
  /**
   * Adds a refinement on a disjunctive facet.
   * @method
   * @param {string} facet attribute to apply the faceting on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */
  addDisjunctiveFacetRefinement: function addDisjunctiveFacetRefinement(facet, value) {
    if (!this.isDisjunctiveFacet(facet)) {
      throw new Error(
        facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
    }

    if (RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)) return this;

    return this.setQueryParameters({
      disjunctiveFacetsRefinements: RefinementList.addRefinement(
        this.disjunctiveFacetsRefinements, facet, value)
    });
  },
  /**
   * addTagRefinement adds a tag to the list used to filter the results
   * @param {string} tag tag to be added
   * @return {SearchParameters}
   */
  addTagRefinement: function addTagRefinement(tag) {
    if (this.isTagRefined(tag)) return this;

    var modification = {
      tagRefinements: this.tagRefinements.concat(tag)
    };

    return this.setQueryParameters(modification);
  },
  /**
   * Remove a facet from the facets attribute of the helper configuration, if it
   * is present.
   * @method
   * @param {string} facet facet name to remove
   * @return {SearchParameters}
   */
  removeFacet: function removeFacet(facet) {
    if (!this.isConjunctiveFacet(facet)) {
      return this;
    }

    return this.clearRefinements(facet).setQueryParameters({
      facets: this.facets.filter(function(f) {
        return f !== facet;
      })
    });
  },
  /**
   * Remove a disjunctive facet from the disjunctiveFacets attribute of the
   * helper configuration, if it is present.
   * @method
   * @param {string} facet disjunctive facet name to remove
   * @return {SearchParameters}
   */
  removeDisjunctiveFacet: function removeDisjunctiveFacet(facet) {
    if (!this.isDisjunctiveFacet(facet)) {
      return this;
    }

    return this.clearRefinements(facet).setQueryParameters({
      disjunctiveFacets: this.disjunctiveFacets.filter(function(f) {
        return f !== facet;
      })
    });
  },
  /**
   * Remove a hierarchical facet from the hierarchicalFacets attribute of the
   * helper configuration, if it is present.
   * @method
   * @param {string} facet hierarchical facet name to remove
   * @return {SearchParameters}
   */
  removeHierarchicalFacet: function removeHierarchicalFacet(facet) {
    if (!this.isHierarchicalFacet(facet)) {
      return this;
    }

    return this.clearRefinements(facet).setQueryParameters({
      hierarchicalFacets: this.hierarchicalFacets.filter(function(f) {
        return f.name !== facet;
      })
    });
  },
  /**
   * Remove a refinement set on facet. If a value is provided, it will clear the
   * refinement for the given value, otherwise it will clear all the refinement
   * values for the faceted attribute.
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} [value] value used to filter
   * @return {SearchParameters}
   */
  removeFacetRefinement: function removeFacetRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }
    if (!RefinementList.isRefined(this.facetsRefinements, facet, value)) return this;

    return this.setQueryParameters({
      facetsRefinements: RefinementList.removeRefinement(this.facetsRefinements, facet, value)
    });
  },
  /**
   * Remove a negative refinement on a facet
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} value value used to filter
   * @return {SearchParameters}
   */
  removeExcludeRefinement: function removeExcludeRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }
    if (!RefinementList.isRefined(this.facetsExcludes, facet, value)) return this;

    return this.setQueryParameters({
      facetsExcludes: RefinementList.removeRefinement(this.facetsExcludes, facet, value)
    });
  },
  /**
   * Remove a refinement on a disjunctive facet
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} value value used to filter
   * @return {SearchParameters}
   */
  removeDisjunctiveFacetRefinement: function removeDisjunctiveFacetRefinement(facet, value) {
    if (!this.isDisjunctiveFacet(facet)) {
      throw new Error(
        facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
    }
    if (!RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)) return this;

    return this.setQueryParameters({
      disjunctiveFacetsRefinements: RefinementList.removeRefinement(
        this.disjunctiveFacetsRefinements, facet, value)
    });
  },
  /**
   * Remove a tag from the list of tag refinements
   * @method
   * @param {string} tag the tag to remove
   * @return {SearchParameters}
   */
  removeTagRefinement: function removeTagRefinement(tag) {
    if (!this.isTagRefined(tag)) return this;

    var modification = {
      tagRefinements: this.tagRefinements.filter(function(t) {
        return t !== tag;
      })
    };

    return this.setQueryParameters(modification);
  },
  /**
   * Generic toggle refinement method to use with facet, disjunctive facets
   * and hierarchical facets
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {SearchParameters}
   * @throws will throw an error if the facet is not declared in the settings of the helper
   * @deprecated since version 2.19.0, see {@link SearchParameters#toggleFacetRefinement}
   */
  toggleRefinement: function toggleRefinement(facet, value) {
    return this.toggleFacetRefinement(facet, value);
  },
  /**
   * Generic toggle refinement method to use with facet, disjunctive facets
   * and hierarchical facets
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {SearchParameters}
   * @throws will throw an error if the facet is not declared in the settings of the helper
   */
  toggleFacetRefinement: function toggleFacetRefinement(facet, value) {
    if (this.isHierarchicalFacet(facet)) {
      return this.toggleHierarchicalFacetRefinement(facet, value);
    } else if (this.isConjunctiveFacet(facet)) {
      return this.toggleConjunctiveFacetRefinement(facet, value);
    } else if (this.isDisjunctiveFacet(facet)) {
      return this.toggleDisjunctiveFacetRefinement(facet, value);
    }

    throw new Error('Cannot refine the undeclared facet ' + facet +
      '; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets');
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */
  toggleConjunctiveFacetRefinement: function toggleConjunctiveFacetRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }

    return this.setQueryParameters({
      facetsRefinements: RefinementList.toggleRefinement(this.facetsRefinements, facet, value)
    });
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */
  toggleExcludeFacetRefinement: function toggleExcludeFacetRefinement(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');
    }

    return this.setQueryParameters({
      facetsExcludes: RefinementList.toggleRefinement(this.facetsExcludes, facet, value)
    });
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */
  toggleDisjunctiveFacetRefinement: function toggleDisjunctiveFacetRefinement(facet, value) {
    if (!this.isDisjunctiveFacet(facet)) {
      throw new Error(
        facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');
    }

    return this.setQueryParameters({
      disjunctiveFacetsRefinements: RefinementList.toggleRefinement(
        this.disjunctiveFacetsRefinements, facet, value)
    });
  },
  /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */
  toggleHierarchicalFacetRefinement: function toggleHierarchicalFacetRefinement(facet, value) {
    if (!this.isHierarchicalFacet(facet)) {
      throw new Error(
        facet + ' is not defined in the hierarchicalFacets attribute of the helper configuration');
    }

    var separator = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(facet));

    var mod = {};

    var upOneOrMultipleLevel = this.hierarchicalFacetsRefinements[facet] !== undefined &&
      this.hierarchicalFacetsRefinements[facet].length > 0 && (
      // remove current refinement:
      // refinement was 'beer > IPA', call is toggleRefine('beer > IPA'), refinement should be `beer`
      this.hierarchicalFacetsRefinements[facet][0] === value ||
      // remove a parent refinement of the current refinement:
      //  - refinement was 'beer > IPA > Flying dog'
      //  - call is toggleRefine('beer > IPA')
      //  - refinement should be `beer`
      this.hierarchicalFacetsRefinements[facet][0].indexOf(value + separator) === 0
    );

    if (upOneOrMultipleLevel) {
      if (value.indexOf(separator) === -1) {
        // go back to root level
        mod[facet] = [];
      } else {
        mod[facet] = [value.slice(0, value.lastIndexOf(separator))];
      }
    } else {
      mod[facet] = [value];
    }

    return this.setQueryParameters({
      hierarchicalFacetsRefinements: defaultsPure({}, mod, this.hierarchicalFacetsRefinements)
    });
  },

  /**
   * Adds a refinement on a hierarchical facet.
   * @param {string} facet the facet name
   * @param {string} path the hierarchical facet path
   * @return {SearchParameter} the new state
   * @throws Error if the facet is not defined or if the facet is refined
   */
  addHierarchicalFacetRefinement: function(facet, path) {
    if (this.isHierarchicalFacetRefined(facet)) {
      throw new Error(facet + ' is already refined.');
    }
    if (!this.isHierarchicalFacet(facet)) {
      throw new Error(facet + ' is not defined in the hierarchicalFacets attribute of the helper configuration.');
    }
    var mod = {};
    mod[facet] = [path];
    return this.setQueryParameters({
      hierarchicalFacetsRefinements: defaultsPure({}, mod, this.hierarchicalFacetsRefinements)
    });
  },

  /**
   * Removes the refinement set on a hierarchical facet.
   * @param {string} facet the facet name
   * @return {SearchParameter} the new state
   * @throws Error if the facet is not defined or if the facet is not refined
   */
  removeHierarchicalFacetRefinement: function(facet) {
    if (!this.isHierarchicalFacetRefined(facet)) {
      return this;
    }
    var mod = {};
    mod[facet] = [];
    return this.setQueryParameters({
      hierarchicalFacetsRefinements: defaultsPure({}, mod, this.hierarchicalFacetsRefinements)
    });
  },
  /**
   * Switch the tag refinement
   * @method
   * @param {string} tag the tag to remove or add
   * @return {SearchParameters}
   */
  toggleTagRefinement: function toggleTagRefinement(tag) {
    if (this.isTagRefined(tag)) {
      return this.removeTagRefinement(tag);
    }

    return this.addTagRefinement(tag);
  },
  /**
   * Test if the facet name is from one of the disjunctive facets
   * @method
   * @param {string} facet facet name to test
   * @return {boolean}
   */
  isDisjunctiveFacet: function(facet) {
    return this.disjunctiveFacets.indexOf(facet) > -1;
  },
  /**
   * Test if the facet name is from one of the hierarchical facets
   * @method
   * @param {string} facetName facet name to test
   * @return {boolean}
   */
  isHierarchicalFacet: function(facetName) {
    return this.getHierarchicalFacetByName(facetName) !== undefined;
  },
  /**
   * Test if the facet name is from one of the conjunctive/normal facets
   * @method
   * @param {string} facet facet name to test
   * @return {boolean}
   */
  isConjunctiveFacet: function(facet) {
    return this.facets.indexOf(facet) > -1;
  },
  /**
   * Returns true if the facet is refined, either for a specific value or in
   * general.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value, optional value. If passed will test that this value
   * is filtering the given facet.
   * @return {boolean} returns true if refined
   */
  isFacetRefined: function isFacetRefined(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      return false;
    }
    return RefinementList.isRefined(this.facetsRefinements, facet, value);
  },
  /**
   * Returns true if the facet contains exclusions or if a specific value is
   * excluded.
   *
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} [value] optional value. If passed will test that this value
   * is filtering the given facet.
   * @return {boolean} returns true if refined
   */
  isExcludeRefined: function isExcludeRefined(facet, value) {
    if (!this.isConjunctiveFacet(facet)) {
      return false;
    }
    return RefinementList.isRefined(this.facetsExcludes, facet, value);
  },
  /**
   * Returns true if the facet contains a refinement, or if a value passed is a
   * refinement for the facet.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value optional, will test if the value is used for refinement
   * if there is one, otherwise will test if the facet contains any refinement
   * @return {boolean}
   */
  isDisjunctiveFacetRefined: function isDisjunctiveFacetRefined(facet, value) {
    if (!this.isDisjunctiveFacet(facet)) {
      return false;
    }
    return RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value);
  },
  /**
   * Returns true if the facet contains a refinement, or if a value passed is a
   * refinement for the facet.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value optional, will test if the value is used for refinement
   * if there is one, otherwise will test if the facet contains any refinement
   * @return {boolean}
   */
  isHierarchicalFacetRefined: function isHierarchicalFacetRefined(facet, value) {
    if (!this.isHierarchicalFacet(facet)) {
      return false;
    }

    var refinements = this.getHierarchicalRefinement(facet);

    if (!value) {
      return refinements.length > 0;
    }

    return refinements.indexOf(value) !== -1;
  },
  /**
   * Test if the triple (attribute, operator, value) is already refined.
   * If only the attribute and the operator are provided, it tests if the
   * contains any refinement value.
   * @method
   * @param {string} attribute attribute for which the refinement is applied
   * @param {string} [operator] operator of the refinement
   * @param {string} [value] value of the refinement
   * @return {boolean} true if it is refined
   */
  isNumericRefined: function isNumericRefined(attribute, operator, value) {
    if (value === undefined && operator === undefined) {
      return !!this.numericRefinements[attribute];
    }

    var isOperatorDefined =
      this.numericRefinements[attribute] &&
      this.numericRefinements[attribute][operator] !== undefined;

    if (value === undefined || !isOperatorDefined) {
      return isOperatorDefined;
    }

    var parsedValue = valToNumber(value);
    var isAttributeValueDefined =
      findArray(this.numericRefinements[attribute][operator], parsedValue) !==
      undefined;

    return isOperatorDefined && isAttributeValueDefined;
  },
  /**
   * Returns true if the tag refined, false otherwise
   * @method
   * @param {string} tag the tag to check
   * @return {boolean}
   */
  isTagRefined: function isTagRefined(tag) {
    return this.tagRefinements.indexOf(tag) !== -1;
  },
  /**
   * Returns the list of all disjunctive facets refined
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {string[]}
   */
  getRefinedDisjunctiveFacets: function getRefinedDisjunctiveFacets() {
    var self = this;

    // attributes used for numeric filter can also be disjunctive
    var disjunctiveNumericRefinedFacets = intersection(
      Object.keys(this.numericRefinements).filter(function(facet) {
        return Object.keys(self.numericRefinements[facet]).length > 0;
      }),
      this.disjunctiveFacets
    );

    return Object.keys(this.disjunctiveFacetsRefinements).filter(function(facet) {
      return self.disjunctiveFacetsRefinements[facet].length > 0;
    })
      .concat(disjunctiveNumericRefinedFacets)
      .concat(this.getRefinedHierarchicalFacets());
  },
  /**
   * Returns the list of all disjunctive facets refined
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {string[]}
   */
  getRefinedHierarchicalFacets: function getRefinedHierarchicalFacets() {
    var self = this;
    return intersection(
      // enforce the order between the two arrays,
      // so that refinement name index === hierarchical facet index
      this.hierarchicalFacets.map(function(facet) { return facet.name; }),
      Object.keys(this.hierarchicalFacetsRefinements).filter(function(facet) {
        return self.hierarchicalFacetsRefinements[facet].length > 0;
      })
    );
  },
  /**
   * Returned the list of all disjunctive facets not refined
   * @method
   * @return {string[]}
   */
  getUnrefinedDisjunctiveFacets: function() {
    var refinedFacets = this.getRefinedDisjunctiveFacets();

    return this.disjunctiveFacets.filter(function(f) {
      return refinedFacets.indexOf(f) === -1;
    });
  },

  managedParameters: [
    'index',
    'facets', 'disjunctiveFacets', 'facetsRefinements',
    'facetsExcludes', 'disjunctiveFacetsRefinements',
    'numericRefinements', 'tagRefinements', 'hierarchicalFacets', 'hierarchicalFacetsRefinements'
  ],
  getQueryParams: function getQueryParams() {
    var managedParameters = this.managedParameters;

    var queryParams = {};

    var self = this;
    Object.keys(this).forEach(function(paramName) {
      var paramValue = self[paramName];
      if (managedParameters.indexOf(paramName) === -1 && paramValue !== undefined) {
        queryParams[paramName] = paramValue;
      }
    });

    return queryParams;
  },
  /**
   * Let the user set a specific value for a given parameter. Will return the
   * same instance if the parameter is invalid or if the value is the same as the
   * previous one.
   * @method
   * @param {string} parameter the parameter name
   * @param {any} value the value to be set, must be compliant with the definition
   * of the attribute on the object
   * @return {SearchParameters} the updated state
   */
  setQueryParameter: function setParameter(parameter, value) {
    if (this[parameter] === value) return this;

    var modification = {};

    modification[parameter] = value;

    return this.setQueryParameters(modification);
  },
  /**
   * Let the user set any of the parameters with a plain object.
   * @method
   * @param {object} params all the keys and the values to be updated
   * @return {SearchParameters} a new updated instance
   */
  setQueryParameters: function setQueryParameters(params) {
    if (!params) return this;

    var error = SearchParameters.validate(this, params);

    if (error) {
      throw error;
    }

    var self = this;
    var nextWithNumbers = SearchParameters._parseNumbers(params);
    var previousPlainObject = Object.keys(this).reduce(function(acc, key) {
      acc[key] = self[key];
      return acc;
    }, {});

    var nextPlainObject = Object.keys(nextWithNumbers).reduce(
      function(previous, key) {
        var isPreviousValueDefined = previous[key] !== undefined;
        var isNextValueDefined = nextWithNumbers[key] !== undefined;

        if (isPreviousValueDefined && !isNextValueDefined) {
          return omit(previous, [key]);
        }

        if (isNextValueDefined) {
          previous[key] = nextWithNumbers[key];
        }

        return previous;
      },
      previousPlainObject
    );

    return new this.constructor(nextPlainObject);
  },

  /**
   * Returns a new instance with the page reset. Two scenarios possible:
   * the page is omitted -> return the given instance
   * the page is set -> return a new instance with a page of 0
   * @return {SearchParameters} a new updated instance
   */
  resetPage: function() {
    if (this.page === undefined) {
      return this;
    }

    return this.setPage(0);
  },

  /**
   * Helper function to get the hierarchicalFacet separator or the default one (`>`)
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.separator or `>` as default
   */
  _getHierarchicalFacetSortBy: function(hierarchicalFacet) {
    return hierarchicalFacet.sortBy || ['isRefined:desc', 'name:asc'];
  },

  /**
   * Helper function to get the hierarchicalFacet separator or the default one (`>`)
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.separator or `>` as default
   */
  _getHierarchicalFacetSeparator: function(hierarchicalFacet) {
    return hierarchicalFacet.separator || ' > ';
  },

  /**
   * Helper function to get the hierarchicalFacet prefix path or null
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.rootPath or null as default
   */
  _getHierarchicalRootPath: function(hierarchicalFacet) {
    return hierarchicalFacet.rootPath || null;
  },

  /**
   * Helper function to check if we show the parent level of the hierarchicalFacet
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.showParentLevel or true as default
   */
  _getHierarchicalShowParentLevel: function(hierarchicalFacet) {
    if (typeof hierarchicalFacet.showParentLevel === 'boolean') {
      return hierarchicalFacet.showParentLevel;
    }
    return true;
  },

  /**
   * Helper function to get the hierarchicalFacet by it's name
   * @param  {string} hierarchicalFacetName
   * @return {object} a hierarchicalFacet
   */
  getHierarchicalFacetByName: function(hierarchicalFacetName) {
    return find(
      this.hierarchicalFacets,
      function(f) {
        return f.name === hierarchicalFacetName;
      }
    );
  },

  /**
   * Get the current breadcrumb for a hierarchical facet, as an array
   * @param  {string} facetName Hierarchical facet name
   * @return {array.<string>} the path as an array of string
   */
  getHierarchicalFacetBreadcrumb: function(facetName) {
    if (!this.isHierarchicalFacet(facetName)) {
      return [];
    }

    var refinement = this.getHierarchicalRefinement(facetName)[0];
    if (!refinement) return [];

    var separator = this._getHierarchicalFacetSeparator(
      this.getHierarchicalFacetByName(facetName)
    );
    var path = refinement.split(separator);
    return path.map(function(part) {
      return part.trim();
    });
  },

  toString: function() {
    return JSON.stringify(this, null, 2);
  }
};

/**
 * Callback used for clearRefinement method
 * @callback SearchParameters.clearCallback
 * @param {OperatorList|FacetList} value the value of the filter
 * @param {string} key the current attribute name
 * @param {string} type `numeric`, `disjunctiveFacet`, `conjunctiveFacet`, `hierarchicalFacet` or `exclude`
 * depending on the type of facet
 * @return {boolean} `true` if the element should be removed. `false` otherwise.
 */
module.exports = SearchParameters;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(7);
var defaultsPure = __webpack_require__(10);
var orderBy = __webpack_require__(17);
var compact = __webpack_require__(33);
var find = __webpack_require__(8);
var findIndex = __webpack_require__(34);
var formatSort = __webpack_require__(18);

var generateHierarchicalTree = __webpack_require__(35);

/**
 * @typedef SearchResults.Facet
 * @type {object}
 * @property {string} name name of the attribute in the record
 * @property {object} data the faceting data: value, number of entries
 * @property {object} stats undefined unless facet_stats is retrieved from algolia
 */

/**
 * @typedef SearchResults.HierarchicalFacet
 * @type {object}
 * @property {string} name name of the current value given the hierarchical level, trimmed.
 * If root node, you get the facet name
 * @property {number} count number of objects matching this hierarchical value
 * @property {string} path the current hierarchical value full path
 * @property {boolean} isRefined `true` if the current value was refined, `false` otherwise
 * @property {HierarchicalFacet[]} data sub values for the current level
 */

/**
 * @typedef SearchResults.FacetValue
 * @type {object}
 * @property {string} name the facet value itself
 * @property {number} count times this facet appears in the results
 * @property {boolean} isRefined is the facet currently selected
 * @property {boolean} isExcluded is the facet currently excluded (only for conjunctive facets)
 */

/**
 * @typedef Refinement
 * @type {object}
 * @property {string} type the type of filter used:
 * `numeric`, `facet`, `exclude`, `disjunctive`, `hierarchical`
 * @property {string} attributeName name of the attribute used for filtering
 * @property {string} name the value of the filter
 * @property {number} numericValue the value as a number. Only for numeric filters.
 * @property {string} operator the operator used. Only for numeric filters.
 * @property {number} count the number of computed hits for this filter. Only on facets.
 * @property {boolean} exhaustive if the count is exhaustive
 */

/**
 * @param {string[]} attributes
 */
function getIndices(attributes) {
  var indices = {};

  attributes.forEach(function(val, idx) {
    indices[val] = idx;
  });

  return indices;
}

function assignFacetStats(dest, facetStats, key) {
  if (facetStats && facetStats[key]) {
    dest.stats = facetStats[key];
  }
}

/**
 * @typedef {Object} HierarchicalFacet
 * @property {string} name
 * @property {string[]} attributes
 */

/**
 * @param {HierarchicalFacet[]} hierarchicalFacets
 * @param {string} hierarchicalAttributeName
 */
function findMatchingHierarchicalFacetFromAttributeName(
  hierarchicalFacets,
  hierarchicalAttributeName
) {
  return find(hierarchicalFacets, function facetKeyMatchesAttribute(
    hierarchicalFacet
  ) {
    var facetNames = hierarchicalFacet.attributes || [];
    return facetNames.indexOf(hierarchicalAttributeName) > -1;
  });
}

/*eslint-disable */
/**
 * Constructor for SearchResults
 * @class
 * @classdesc SearchResults contains the results of a query to Algolia using the
 * {@link AlgoliaSearchHelper}.
 * @param {SearchParameters} state state that led to the response
 * @param {array.<object>} results the results from algolia client
 * @example <caption>SearchResults of the first query in
 * <a href="http://demos.algolia.com/instant-search-demo">the instant search demo</a></caption>
{
   "hitsPerPage": 10,
   "processingTimeMS": 2,
   "facets": [
      {
         "name": "type",
         "data": {
            "HardGood": 6627,
            "BlackTie": 550,
            "Music": 665,
            "Software": 131,
            "Game": 456,
            "Movie": 1571
         },
         "exhaustive": false
      },
      {
         "exhaustive": false,
         "data": {
            "Free shipping": 5507
         },
         "name": "shipping"
      }
  ],
   "hits": [
      {
         "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_54x108_s.gif",
         "_highlightResult": {
            "shortDescription": {
               "matchLevel": "none",
               "value": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
               "matchedWords": []
            },
            "category": {
               "matchLevel": "none",
               "value": "Computer Security Software",
               "matchedWords": []
            },
            "manufacturer": {
               "matchedWords": [],
               "value": "Webroot",
               "matchLevel": "none"
            },
            "name": {
               "value": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
               "matchedWords": [],
               "matchLevel": "none"
            }
         },
         "image": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_105x210_sc.jpg",
         "shipping": "Free shipping",
         "bestSellingRank": 4,
         "shortDescription": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
         "url": "http://www.bestbuy.com/site/webroot-secureanywhere-internet-security-3-devi…d=1219060687969&skuId=1688832&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
         "name": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
         "category": "Computer Security Software",
         "salePrice_range": "1 - 50",
         "objectID": "1688832",
         "type": "Software",
         "customerReviewCount": 5980,
         "salePrice": 49.99,
         "manufacturer": "Webroot"
      },
      ....
  ],
   "nbHits": 10000,
   "disjunctiveFacets": [
      {
         "exhaustive": false,
         "data": {
            "5": 183,
            "12": 112,
            "7": 149,
            ...
         },
         "name": "customerReviewCount",
         "stats": {
            "max": 7461,
            "avg": 157.939,
            "min": 1
         }
      },
      {
         "data": {
            "Printer Ink": 142,
            "Wireless Speakers": 60,
            "Point & Shoot Cameras": 48,
            ...
         },
         "name": "category",
         "exhaustive": false
      },
      {
         "exhaustive": false,
         "data": {
            "> 5000": 2,
            "1 - 50": 6524,
            "501 - 2000": 566,
            "201 - 500": 1501,
            "101 - 200": 1360,
            "2001 - 5000": 47
         },
         "name": "salePrice_range"
      },
      {
         "data": {
            "Dynex™": 202,
            "Insignia™": 230,
            "PNY": 72,
            ...
         },
         "name": "manufacturer",
         "exhaustive": false
      }
  ],
   "query": "",
   "nbPages": 100,
   "page": 0,
   "index": "bestbuy"
}
 **/
/*eslint-enable */
function SearchResults(state, results) {
  var mainSubResponse = results[0];

  this._rawResults = results;

  var self = this;

  // https://www.algolia.com/doc/api-reference/api-methods/search/#response
  Object.keys(mainSubResponse).forEach(function(key) {
    self[key] = mainSubResponse[key];
  });

  /**
   * query used to generate the results
   * @name query
   * @member {string}
   * @memberof SearchResults
   * @instance
   */
  /**
   * The query as parsed by the engine given all the rules.
   * @name parsedQuery
   * @member {string}
   * @memberof SearchResults
   * @instance
   */
  /**
   * all the records that match the search parameters. Each record is
   * augmented with a new attribute `_highlightResult`
   * which is an object keyed by attribute and with the following properties:
   *  - `value` : the value of the facet highlighted (html)
   *  - `matchLevel`: full, partial or none depending on how the query terms match
   * @name hits
   * @member {object[]}
   * @memberof SearchResults
   * @instance
   */
  /**
   * index where the results come from
   * @name index
   * @member {string}
   * @memberof SearchResults
   * @instance
   */
  /**
   * number of hits per page requested
   * @name hitsPerPage
   * @member {number}
   * @memberof SearchResults
   * @instance
   */
  /**
   * total number of hits of this query on the index
   * @name nbHits
   * @member {number}
   * @memberof SearchResults
   * @instance
   */
  /**
   * total number of pages with respect to the number of hits per page and the total number of hits
   * @name nbPages
   * @member {number}
   * @memberof SearchResults
   * @instance
   */
  /**
   * current page
   * @name page
   * @member {number}
   * @memberof SearchResults
   * @instance
   */
  /**
   * The position if the position was guessed by IP.
   * @name aroundLatLng
   * @member {string}
   * @memberof SearchResults
   * @instance
   * @example "48.8637,2.3615",
   */
  /**
   * The radius computed by Algolia.
   * @name automaticRadius
   * @member {string}
   * @memberof SearchResults
   * @instance
   * @example "126792922",
   */
  /**
   * String identifying the server used to serve this request.
   *
   * getRankingInfo needs to be set to `true` for this to be returned
   *
   * @name serverUsed
   * @member {string}
   * @memberof SearchResults
   * @instance
   * @example "c7-use-2.algolia.net",
   */
  /**
   * Boolean that indicates if the computation of the counts did time out.
   * @deprecated
   * @name timeoutCounts
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */
  /**
   * Boolean that indicates if the computation of the hits did time out.
   * @deprecated
   * @name timeoutHits
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */
  /**
   * True if the counts of the facets is exhaustive
   * @name exhaustiveFacetsCount
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */
  /**
   * True if the number of hits is exhaustive
   * @name exhaustiveNbHits
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */
  /**
   * Contains the userData if they are set by a [query rule](https://www.algolia.com/doc/guides/query-rules/query-rules-overview/).
   * @name userData
   * @member {object[]}
   * @memberof SearchResults
   * @instance
   */
  /**
   * queryID is the unique identifier of the query used to generate the current search results.
   * This value is only available if the `clickAnalytics` search parameter is set to `true`.
   * @name queryID
   * @member {string}
   * @memberof SearchResults
   * @instance
   */

  /**
   * sum of the processing time of all the queries
   * @member {number}
   */
  this.processingTimeMS = results.reduce(function(sum, result) {
    return result.processingTimeMS === undefined
      ? sum
      : sum + result.processingTimeMS;
  }, 0);

  /**
   * disjunctive facets results
   * @member {SearchResults.Facet[]}
   */
  this.disjunctiveFacets = [];
  /**
   * disjunctive facets results
   * @member {SearchResults.HierarchicalFacet[]}
   */
  this.hierarchicalFacets = state.hierarchicalFacets.map(function initFutureTree() {
    return [];
  });
  /**
   * other facets results
   * @member {SearchResults.Facet[]}
   */
  this.facets = [];

  var disjunctiveFacets = state.getRefinedDisjunctiveFacets();

  var facetsIndices = getIndices(state.facets);
  var disjunctiveFacetsIndices = getIndices(state.disjunctiveFacets);
  var nextDisjunctiveResult = 1;

  // Since we send request only for disjunctive facets that have been refined,
  // we get the facets information from the first, general, response.

  var mainFacets = mainSubResponse.facets || {};

  Object.keys(mainFacets).forEach(function(facetKey) {
    var facetValueObject = mainFacets[facetKey];

    var hierarchicalFacet = findMatchingHierarchicalFacetFromAttributeName(
      state.hierarchicalFacets,
      facetKey
    );

    if (hierarchicalFacet) {
      // Place the hierarchicalFacet data at the correct index depending on
      // the attributes order that was defined at the helper initialization
      var facetIndex = hierarchicalFacet.attributes.indexOf(facetKey);
      var idxAttributeName = findIndex(state.hierarchicalFacets, function(f) {
        return f.name === hierarchicalFacet.name;
      });
      self.hierarchicalFacets[idxAttributeName][facetIndex] = {
        attribute: facetKey,
        data: facetValueObject,
        exhaustive: mainSubResponse.exhaustiveFacetsCount
      };
    } else {
      var isFacetDisjunctive = state.disjunctiveFacets.indexOf(facetKey) !== -1;
      var isFacetConjunctive = state.facets.indexOf(facetKey) !== -1;
      var position;

      if (isFacetDisjunctive) {
        position = disjunctiveFacetsIndices[facetKey];
        self.disjunctiveFacets[position] = {
          name: facetKey,
          data: facetValueObject,
          exhaustive: mainSubResponse.exhaustiveFacetsCount
        };
        assignFacetStats(self.disjunctiveFacets[position], mainSubResponse.facets_stats, facetKey);
      }
      if (isFacetConjunctive) {
        position = facetsIndices[facetKey];
        self.facets[position] = {
          name: facetKey,
          data: facetValueObject,
          exhaustive: mainSubResponse.exhaustiveFacetsCount
        };
        assignFacetStats(self.facets[position], mainSubResponse.facets_stats, facetKey);
      }
    }
  });

  // Make sure we do not keep holes within the hierarchical facets
  this.hierarchicalFacets = compact(this.hierarchicalFacets);

  // aggregate the refined disjunctive facets
  disjunctiveFacets.forEach(function(disjunctiveFacet) {
    var result = results[nextDisjunctiveResult];
    var facets = result && result.facets ? result.facets : {};
    var hierarchicalFacet = state.getHierarchicalFacetByName(disjunctiveFacet);

    // There should be only item in facets.
    Object.keys(facets).forEach(function(dfacet) {
      var facetResults = facets[dfacet];

      var position;

      if (hierarchicalFacet) {
        position = findIndex(state.hierarchicalFacets, function(f) {
          return f.name === hierarchicalFacet.name;
        });
        var attributeIndex = findIndex(self.hierarchicalFacets[position], function(f) {
          return f.attribute === dfacet;
        });

        // previous refinements and no results so not able to find it
        if (attributeIndex === -1) {
          return;
        }

        self.hierarchicalFacets[position][attributeIndex].data = merge(
          {},
          self.hierarchicalFacets[position][attributeIndex].data,
          facetResults
        );
      } else {
        position = disjunctiveFacetsIndices[dfacet];

        var dataFromMainRequest = mainSubResponse.facets && mainSubResponse.facets[dfacet] || {};

        self.disjunctiveFacets[position] = {
          name: dfacet,
          data: defaultsPure({}, facetResults, dataFromMainRequest),
          exhaustive: result.exhaustiveFacetsCount
        };
        assignFacetStats(self.disjunctiveFacets[position], result.facets_stats, dfacet);

        if (state.disjunctiveFacetsRefinements[dfacet]) {
          state.disjunctiveFacetsRefinements[dfacet].forEach(function(refinementValue) {
            // add the disjunctive refinements if it is no more retrieved
            if (!self.disjunctiveFacets[position].data[refinementValue] &&
              state.disjunctiveFacetsRefinements[dfacet].indexOf(refinementValue) > -1) {
              self.disjunctiveFacets[position].data[refinementValue] = 0;
            }
          });
        }
      }
    });
    nextDisjunctiveResult++;
  });

  // if we have some root level values for hierarchical facets, merge them
  state.getRefinedHierarchicalFacets().forEach(function(refinedFacet) {
    var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);
    var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);

    var currentRefinement = state.getHierarchicalRefinement(refinedFacet);
    // if we are already at a root refinement (or no refinement at all), there is no
    // root level values request
    if (currentRefinement.length === 0 || currentRefinement[0].split(separator).length < 2) {
      return;
    }

    var result = results[nextDisjunctiveResult];
    var facets = result && result.facets
      ? result.facets
      : {};
    Object.keys(facets).forEach(function(dfacet) {
      var facetResults = facets[dfacet];
      var position = findIndex(state.hierarchicalFacets, function(f) {
        return f.name === hierarchicalFacet.name;
      });
      var attributeIndex = findIndex(self.hierarchicalFacets[position], function(f) {
        return f.attribute === dfacet;
      });

      // previous refinements and no results so not able to find it
      if (attributeIndex === -1) {
        return;
      }

      // when we always get root levels, if the hits refinement is `beers > IPA` (count: 5),
      // then the disjunctive values will be `beers` (count: 100),
      // but we do not want to display
      //   | beers (100)
      //     > IPA (5)
      // We want
      //   | beers (5)
      //     > IPA (5)
      var defaultData = {};

      if (currentRefinement.length > 0) {
        var root = currentRefinement[0].split(separator)[0];
        defaultData[root] = self.hierarchicalFacets[position][attributeIndex].data[root];
      }

      self.hierarchicalFacets[position][attributeIndex].data = defaultsPure(
        defaultData,
        facetResults,
        self.hierarchicalFacets[position][attributeIndex].data
      );
    });

    nextDisjunctiveResult++;
  });

  // add the excludes
  Object.keys(state.facetsExcludes).forEach(function(facetName) {
    var excludes = state.facetsExcludes[facetName];
    var position = facetsIndices[facetName];

    self.facets[position] = {
      name: facetName,
      data: mainSubResponse.facets[facetName],
      exhaustive: mainSubResponse.exhaustiveFacetsCount
    };
    excludes.forEach(function(facetValue) {
      self.facets[position] = self.facets[position] || {name: facetName};
      self.facets[position].data = self.facets[position].data || {};
      self.facets[position].data[facetValue] = 0;
    });
  });

  /**
   * @type {Array}
   */
  this.hierarchicalFacets = this.hierarchicalFacets.map(generateHierarchicalTree(state));

  /**
   * @type {Array}
   */
  this.facets = compact(this.facets);
  /**
   * @type {Array}
   */
  this.disjunctiveFacets = compact(this.disjunctiveFacets);

  this._state = state;
}

/**
 * Get a facet object with its name
 * @deprecated
 * @param {string} name name of the faceted attribute
 * @return {SearchResults.Facet} the facet object
 */
SearchResults.prototype.getFacetByName = function(name) {
  function predicate(facet) {
    return facet.name === name;
  }

  return find(this.facets, predicate) ||
    find(this.disjunctiveFacets, predicate) ||
    find(this.hierarchicalFacets, predicate);
};

/**
 * Get the facet values of a specified attribute from a SearchResults object.
 * @private
 * @param {SearchResults} results the search results to search in
 * @param {string} attribute name of the faceted attribute to search for
 * @return {array|object} facet values. For the hierarchical facets it is an object.
 */
function extractNormalizedFacetValues(results, attribute) {
  function predicate(facet) {
    return facet.name === attribute;
  }

  if (results._state.isConjunctiveFacet(attribute)) {
    var facet = find(results.facets, predicate);
    if (!facet) return [];

    return Object.keys(facet.data).map(function(name) {
      return {
        name: name,
        count: facet.data[name],
        isRefined: results._state.isFacetRefined(attribute, name),
        isExcluded: results._state.isExcludeRefined(attribute, name)
      };
    });
  } else if (results._state.isDisjunctiveFacet(attribute)) {
    var disjunctiveFacet = find(results.disjunctiveFacets, predicate);
    if (!disjunctiveFacet) return [];

    return Object.keys(disjunctiveFacet.data).map(function(name) {
      return {
        name: name,
        count: disjunctiveFacet.data[name],
        isRefined: results._state.isDisjunctiveFacetRefined(attribute, name)
      };
    });
  } else if (results._state.isHierarchicalFacet(attribute)) {
    return find(results.hierarchicalFacets, predicate);
  }
}

/**
 * Sort nodes of a hierarchical facet results
 * @private
 * @param {HierarchicalFacet} node node to upon which we want to apply the sort
 */
function recSort(sortFn, node) {
  if (!node.data || node.data.length === 0) {
    return node;
  }

  var children = node.data.map(function(childNode) {
    return recSort(sortFn, childNode);
  });
  var sortedChildren = sortFn(children);
  var newNode = merge({}, node, {data: sortedChildren});
  return newNode;
}

SearchResults.DEFAULT_SORT = ['isRefined:desc', 'count:desc', 'name:asc'];

function vanillaSortFn(order, data) {
  return data.sort(order);
}

/**
 * Get a the list of values for a given facet attribute. Those values are sorted
 * refinement first, descending count (bigger value on top), and name ascending
 * (alphabetical order). The sort formula can overridden using either string based
 * predicates or a function.
 *
 * This method will return all the values returned by the Algolia engine plus all
 * the values already refined. This means that it can happen that the
 * `maxValuesPerFacet` [configuration](https://www.algolia.com/doc/rest-api/search#param-maxValuesPerFacet)
 * might not be respected if you have facet values that are already refined.
 * @param {string} attribute attribute name
 * @param {object} opts configuration options.
 * @param {Array.<string> | function} opts.sortBy
 * When using strings, it consists of
 * the name of the [FacetValue](#SearchResults.FacetValue) or the
 * [HierarchicalFacet](#SearchResults.HierarchicalFacet) attributes with the
 * order (`asc` or `desc`). For example to order the value by count, the
 * argument would be `['count:asc']`.
 *
 * If only the attribute name is specified, the ordering defaults to the one
 * specified in the default value for this attribute.
 *
 * When not specified, the order is
 * ascending.  This parameter can also be a function which takes two facet
 * values and should return a number, 0 if equal, 1 if the first argument is
 * bigger or -1 otherwise.
 *
 * The default value for this attribute `['isRefined:desc', 'count:desc', 'name:asc']`
 * @return {FacetValue[]|HierarchicalFacet|undefined} depending on the type of facet of
 * the attribute requested (hierarchical, disjunctive or conjunctive)
 * @example
 * helper.on('result', function(event){
 *   //get values ordered only by name ascending using the string predicate
 *   event.results.getFacetValues('city', {sortBy: ['name:asc']});
 *   //get values  ordered only by count ascending using a function
 *   event.results.getFacetValues('city', {
 *     // this is equivalent to ['count:asc']
 *     sortBy: function(a, b) {
 *       if (a.count === b.count) return 0;
 *       if (a.count > b.count)   return 1;
 *       if (b.count > a.count)   return -1;
 *     }
 *   });
 * });
 */
SearchResults.prototype.getFacetValues = function(attribute, opts) {
  var facetValues = extractNormalizedFacetValues(this, attribute);
  if (!facetValues) {
    return undefined;
  }

  var options = defaultsPure({}, opts, {sortBy: SearchResults.DEFAULT_SORT});

  if (Array.isArray(options.sortBy)) {
    var order = formatSort(options.sortBy, SearchResults.DEFAULT_SORT);
    if (Array.isArray(facetValues)) {
      return orderBy(facetValues, order[0], order[1]);
    }
    // If facetValues is not an array, it's an object thus a hierarchical facet object
    return recSort(function(hierarchicalFacetValues) {
      return orderBy(hierarchicalFacetValues, order[0], order[1]);
    }, facetValues);
  } else if (typeof options.sortBy === 'function') {
    if (Array.isArray(facetValues)) {
      return facetValues.sort(options.sortBy);
    }
    // If facetValues is not an array, it's an object thus a hierarchical facet object
    return recSort(function(data) {
      return vanillaSortFn(options.sortBy, data);
    }, facetValues);
  }
  throw new Error(
    'options.sortBy is optional but if defined it must be ' +
    'either an array of string (predicates) or a sorting function'
  );
};

/**
 * Returns the facet stats if attribute is defined and the facet contains some.
 * Otherwise returns undefined.
 * @param {string} attribute name of the faceted attribute
 * @return {object} The stats of the facet
 */
SearchResults.prototype.getFacetStats = function(attribute) {
  if (this._state.isConjunctiveFacet(attribute)) {
    return getFacetStatsIfAvailable(this.facets, attribute);
  } else if (this._state.isDisjunctiveFacet(attribute)) {
    return getFacetStatsIfAvailable(this.disjunctiveFacets, attribute);
  }

  return undefined;
};

/**
 * @typedef {Object} FacetListItem
 * @property {string} name
 */

/**
 * @param {FacetListItem[]} facetList (has more items, but enough for here)
 * @param {string} facetName
 */
function getFacetStatsIfAvailable(facetList, facetName) {
  var data = find(facetList, function(facet) {
    return facet.name === facetName;
  });
  return data && data.stats;
}

/**
 * Returns all refinements for all filters + tags. It also provides
 * additional information: count and exhaustiveness for each filter.
 *
 * See the [refinement type](#Refinement) for an exhaustive view of the available
 * data.
 *
 * Note that for a numeric refinement, results are grouped per operator, this
 * means that it will return responses for operators which are empty.
 *
 * @return {Array.<Refinement>} all the refinements
 */
SearchResults.prototype.getRefinements = function() {
  var state = this._state;
  var results = this;
  var res = [];

  Object.keys(state.facetsRefinements).forEach(function(attributeName) {
    state.facetsRefinements[attributeName].forEach(function(name) {
      res.push(getRefinement(state, 'facet', attributeName, name, results.facets));
    });
  });

  Object.keys(state.facetsExcludes).forEach(function(attributeName) {
    state.facetsExcludes[attributeName].forEach(function(name) {
      res.push(getRefinement(state, 'exclude', attributeName, name, results.facets));
    });
  });

  Object.keys(state.disjunctiveFacetsRefinements).forEach(function(attributeName) {
    state.disjunctiveFacetsRefinements[attributeName].forEach(function(name) {
      res.push(getRefinement(state, 'disjunctive', attributeName, name, results.disjunctiveFacets));
    });
  });

  Object.keys(state.hierarchicalFacetsRefinements).forEach(function(attributeName) {
    state.hierarchicalFacetsRefinements[attributeName].forEach(function(name) {
      res.push(getHierarchicalRefinement(state, attributeName, name, results.hierarchicalFacets));
    });
  });


  Object.keys(state.numericRefinements).forEach(function(attributeName) {
    var operators = state.numericRefinements[attributeName];
    Object.keys(operators).forEach(function(operator) {
      operators[operator].forEach(function(value) {
        res.push({
          type: 'numeric',
          attributeName: attributeName,
          name: value,
          numericValue: value,
          operator: operator
        });
      });
    });
  });

  state.tagRefinements.forEach(function(name) {
    res.push({type: 'tag', attributeName: '_tags', name: name});
  });

  return res;
};

/**
 * @typedef {Object} Facet
 * @property {string} name
 * @property {Object} data
 * @property {boolean} exhaustive
 */

/**
 * @param {*} state
 * @param {*} type
 * @param {string} attributeName
 * @param {*} name
 * @param {Facet[]} resultsFacets
 */
function getRefinement(state, type, attributeName, name, resultsFacets) {
  var facet = find(resultsFacets, function(f) {
    return f.name === attributeName;
  });
  var count = facet && facet.data && facet.data[name] ? facet.data[name] : 0;
  var exhaustive = (facet && facet.exhaustive) || false;

  return {
    type: type,
    attributeName: attributeName,
    name: name,
    count: count,
    exhaustive: exhaustive
  };
}

/**
 * @param {*} state
 * @param {string} attributeName
 * @param {*} name
 * @param {Facet[]} resultsFacets
 */
function getHierarchicalRefinement(state, attributeName, name, resultsFacets) {
  var facetDeclaration = state.getHierarchicalFacetByName(attributeName);
  var separator = state._getHierarchicalFacetSeparator(facetDeclaration);
  var split = name.split(separator);
  var rootFacet = find(resultsFacets, function(facet) {
    return facet.name === attributeName;
  });

  var facet = split.reduce(function(intermediateFacet, part) {
    var newFacet =
      intermediateFacet && find(intermediateFacet.data, function(f) {
        return f.name === part;
      });
    return newFacet !== undefined ? newFacet : intermediateFacet;
  }, rootFacet);

  var count = (facet && facet.count) || 0;
  var exhaustive = (facet && facet.exhaustive) || false;
  var path = (facet && facet.path) || '';

  return {
    type: 'hierarchical',
    attributeName: attributeName,
    name: path,
    count: count,
    exhaustive: exhaustive
  };
}

module.exports = SearchResults;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined;
    var valIsNull = value === null;

    var othIsDefined = other !== undefined;
    var othIsNull = other === null;

    if (
      (!othIsNull && value > other) ||
      (valIsNull && othIsDefined) ||
      !valIsDefined
    ) {
      return 1;
    }
    if (
      (!valIsNull && value < other) ||
      (othIsNull && valIsDefined) ||
      !othIsDefined
    ) {
      return -1;
    }
  }
  return 0;
}

/**
 * @param {Array<object>} collection object with keys in attributes
 * @param {Array<string>} iteratees attributes
 * @param {Array<string>} orders asc | desc
 */
function orderBy(collection, iteratees, orders) {
  if (!Array.isArray(collection)) {
    return [];
  }

  if (!Array.isArray(orders)) {
    orders = [];
  }

  var result = collection.map(function(value, index) {
    return {
      criteria: iteratees.map(function(iteratee) {
        return value[iteratee];
      }),
      index: index,
      value: value
    };
  });

  result.sort(function comparer(object, other) {
    var index = -1;

    while (++index < object.criteria.length) {
      var res = compareAscending(object.criteria[index], other.criteria[index]);
      if (res) {
        if (index >= orders.length) {
          return res;
        }
        if (orders[index] === 'desc') {
          return -res;
        }
        return res;
      }
    }

    // This ensures a stable sort in V8 and other engines.
    // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
    return object.index - other.index;
  });

  return result.map(function(res) {
    return res.value;
  });
}

module.exports = orderBy;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var find = __webpack_require__(8);

/**
 * Transform sort format from user friendly notation to lodash format
 * @param {string[]} sortBy array of predicate of the form "attribute:order"
 * @param {string[]} [defaults] array of predicate of the form "attribute:order"
 * @return {array.<string[]>} array containing 2 elements : attributes, orders
 */
module.exports = function formatSort(sortBy, defaults) {
  var defaultInstructions = (defaults || []).map(function(sort) {
    return sort.split(':');
  });

  return sortBy.reduce(
    function preparePredicate(out, sort) {
      var sortInstruction = sort.split(':');

      var matchingDefault = find(defaultInstructions, function(
        defaultInstruction
      ) {
        return defaultInstruction[0] === sortInstruction[0];
      });

      if (sortInstruction.length > 1 || !matchingDefault) {
        out[0].push(sortInstruction[0]);
        out[1].push(sortInstruction[1]);
        return out;
      }

      out[0].push(matchingDefault[0]);
      out[1].push(matchingDefault[1]);
      return out;
    },
    [[], []]
  );
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function inherits(ctor, superCtor) {
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
}

module.exports = inherits;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = '3.4.4';


/***/ }),
/* 22 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/*! algoliasearch-lite.umd.js | 4.8.6 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */
!function(e,t){ true?module.exports=t():undefined}(this,(function(){"use strict";function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(r){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){e(r,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e){var t,r="algoliasearch-client-js-".concat(e.key),n=function(){return void 0===t&&(t=e.localStorage||window.localStorage),t},a=function(){return JSON.parse(n().getItem(r)||"{}")};return{get:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then((function(){var r=JSON.stringify(e),n=a()[r];return Promise.all([n||t(),void 0!==n])})).then((function(e){var t=o(e,2),n=t[0],a=t[1];return Promise.all([n,a||r.miss(n)])})).then((function(e){return o(e,1)[0]}))},set:function(e,t){return Promise.resolve().then((function(){var o=a();return o[JSON.stringify(e)]=t,n().setItem(r,JSON.stringify(o)),t}))},delete:function(e){return Promise.resolve().then((function(){var t=a();delete t[JSON.stringify(e)],n().setItem(r,JSON.stringify(t))}))},clear:function(){return Promise.resolve().then((function(){n().removeItem(r)}))}}}function i(e){var t=a(e.caches),r=t.shift();return void 0===r?{get:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},n=t();return n.then((function(e){return Promise.all([e,r.miss(e)])})).then((function(e){return o(e,1)[0]}))},set:function(e,t){return Promise.resolve(t)},delete:function(e){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return r.get(e,n,o).catch((function(){return i({caches:t}).get(e,n,o)}))},set:function(e,n){return r.set(e,n).catch((function(){return i({caches:t}).set(e,n)}))},delete:function(e){return r.delete(e).catch((function(){return i({caches:t}).delete(e)}))},clear:function(){return r.clear().catch((function(){return i({caches:t}).clear()}))}}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{serializable:!0},t={};return{get:function(r,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},a=JSON.stringify(r);if(a in t)return Promise.resolve(e.serializable?JSON.parse(t[a]):t[a]);var u=n(),i=o&&o.miss||function(){return Promise.resolve()};return u.then((function(e){return i(e)})).then((function(){return u}))},set:function(r,n){return t[JSON.stringify(r)]=e.serializable?JSON.stringify(n):n,Promise.resolve(n)},delete:function(e){return delete t[JSON.stringify(e)],Promise.resolve()},clear:function(){return t={},Promise.resolve()}}}function c(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[r],e[r]=n}return e}function l(e,t){return t?(Object.keys(t).forEach((function(r){e[r]=t[r](e)})),e):e}function f(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=0;return e.replace(/%s/g,(function(){return encodeURIComponent(r[o++])}))}var h={WithinQueryParameters:0,WithinHeaders:1};function d(e,t){var r=e||{},n=r.data||{};return Object.keys(r).forEach((function(e){-1===["timeout","headers","queryParameters","data","cacheable"].indexOf(e)&&(n[e]=r[e])})),{data:Object.entries(n).length>0?n:void 0,timeout:r.timeout||t,headers:r.headers||{},queryParameters:r.queryParameters||{},cacheable:r.cacheable}}var m={Read:1,Write:2,Any:3},p=1,v=2,y=3;function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p;return r(r({},e),{},{status:t,lastUpdate:Date.now()})}function b(e){return"string"==typeof e?{protocol:"https",url:e,accept:m.Any}:{protocol:e.protocol||"https",url:e.url,accept:e.accept||m.Any}}var O="GET",P="POST";function q(e,t){return Promise.all(t.map((function(t){return e.get(t,(function(){return Promise.resolve(g(t))}))}))).then((function(e){var r=e.filter((function(e){return function(e){return e.status===p||Date.now()-e.lastUpdate>12e4}(e)})),n=e.filter((function(e){return function(e){return e.status===y&&Date.now()-e.lastUpdate<=12e4}(e)})),o=[].concat(a(r),a(n));return{getTimeout:function(e,t){return(0===n.length&&0===e?1:n.length+3+e)*t},statelessHosts:o.length>0?o.map((function(e){return b(e)})):t}}))}function j(e,t,n,o){var u=[],i=function(e,t){if(e.method===O||void 0===e.data&&void 0===t.data)return;var n=Array.isArray(e.data)?e.data:r(r({},e.data),t.data);return JSON.stringify(n)}(n,o),s=function(e,t){var n=r(r({},e.headers),t.headers),o={};return Object.keys(n).forEach((function(e){var t=n[e];o[e.toLowerCase()]=t})),o}(e,o),c=n.method,l=n.method!==O?{}:r(r({},n.data),o.data),f=r(r(r({"x-algolia-agent":e.userAgent.value},e.queryParameters),l),o.queryParameters),h=0,d=function t(r,a){var l=r.pop();if(void 0===l)throw{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:A(u)};var d={data:i,headers:s,method:c,url:S(l,n.path,f),connectTimeout:a(h,e.timeouts.connect),responseTimeout:a(h,o.timeout)},m=function(e){var t={request:d,response:e,host:l,triesLeft:r.length};return u.push(t),t},p={onSuccess:function(e){return function(e){try{return JSON.parse(e.content)}catch(t){throw function(e,t){return{name:"DeserializationError",message:e,response:t}}(t.message,e)}}(e)},onRetry:function(n){var o=m(n);return n.isTimedOut&&h++,Promise.all([e.logger.info("Retryable failure",x(o)),e.hostsCache.set(l,g(l,n.isTimedOut?y:v))]).then((function(){return t(r,a)}))},onFail:function(e){throw m(e),function(e,t){var r=e.content,n=e.status,o=r;try{o=JSON.parse(r).message}catch(e){}return function(e,t,r){return{name:"ApiError",message:e,status:t,transporterStackTrace:r}}(o,n,t)}(e,A(u))}};return e.requester.send(d).then((function(e){return function(e,t){return function(e){var t=e.status;return e.isTimedOut||function(e){var t=e.isTimedOut,r=e.status;return!t&&0==~~r}(e)||2!=~~(t/100)&&4!=~~(t/100)}(e)?t.onRetry(e):2==~~(e.status/100)?t.onSuccess(e):t.onFail(e)}(e,p)}))};return q(e.hostsCache,t).then((function(e){return d(a(e.statelessHosts).reverse(),e.getTimeout)}))}function w(e){var t={value:"Algolia for JavaScript (".concat(e,")"),add:function(e){var r="; ".concat(e.segment).concat(void 0!==e.version?" (".concat(e.version,")"):"");return-1===t.value.indexOf(r)&&(t.value="".concat(t.value).concat(r)),t}};return t}function S(e,t,r){var n=T(r),o="".concat(e.protocol,"://").concat(e.url,"/").concat("/"===t.charAt(0)?t.substr(1):t);return n.length&&(o+="?".concat(n)),o}function T(e){return Object.keys(e).map((function(t){return f("%s=%s",t,(r=e[t],"[object Object]"===Object.prototype.toString.call(r)||"[object Array]"===Object.prototype.toString.call(r)?JSON.stringify(e[t]):e[t]));var r})).join("&")}function A(e){return e.map((function(e){return x(e)}))}function x(e){var t=e.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return r(r({},e),{},{request:r(r({},e.request),{},{headers:r(r({},e.request.headers),t)})})}var N=function(e){var t=e.appId,n=function(e,t,r){var n={"x-algolia-api-key":r,"x-algolia-application-id":t};return{headers:function(){return e===h.WithinHeaders?n:{}},queryParameters:function(){return e===h.WithinQueryParameters?n:{}}}}(void 0!==e.authMode?e.authMode:h.WithinHeaders,t,e.apiKey),a=function(e){var t=e.hostsCache,r=e.logger,n=e.requester,a=e.requestsCache,u=e.responsesCache,i=e.timeouts,s=e.userAgent,c=e.hosts,l=e.queryParameters,f={hostsCache:t,logger:r,requester:n,requestsCache:a,responsesCache:u,timeouts:i,userAgent:s,headers:e.headers,queryParameters:l,hosts:c.map((function(e){return b(e)})),read:function(e,t){var r=d(t,f.timeouts.read),n=function(){return j(f,f.hosts.filter((function(e){return 0!=(e.accept&m.Read)})),e,r)};if(!0!==(void 0!==r.cacheable?r.cacheable:e.cacheable))return n();var a={request:e,mappedRequestOptions:r,transporter:{queryParameters:f.queryParameters,headers:f.headers}};return f.responsesCache.get(a,(function(){return f.requestsCache.get(a,(function(){return f.requestsCache.set(a,n()).then((function(e){return Promise.all([f.requestsCache.delete(a),e])}),(function(e){return Promise.all([f.requestsCache.delete(a),Promise.reject(e)])})).then((function(e){var t=o(e,2);t[0];return t[1]}))}))}),{miss:function(e){return f.responsesCache.set(a,e)}})},write:function(e,t){return j(f,f.hosts.filter((function(e){return 0!=(e.accept&m.Write)})),e,d(t,f.timeouts.write))}};return f}(r(r({hosts:[{url:"".concat(t,"-dsn.algolia.net"),accept:m.Read},{url:"".concat(t,".algolia.net"),accept:m.Write}].concat(c([{url:"".concat(t,"-1.algolianet.com")},{url:"".concat(t,"-2.algolianet.com")},{url:"".concat(t,"-3.algolianet.com")}]))},e),{},{headers:r(r(r({},n.headers()),{"content-type":"application/x-www-form-urlencoded"}),e.headers),queryParameters:r(r({},n.queryParameters()),e.queryParameters)}));return l({transporter:a,appId:t,addAlgoliaAgent:function(e,t){a.userAgent.add({segment:e,version:t})},clearCache:function(){return Promise.all([a.requestsCache.clear(),a.responsesCache.clear()]).then((function(){}))}},e.methods)},C=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={transporter:e.transporter,appId:e.appId,indexName:t};return l(n,r.methods)}},k=function(e){return function(t,n){var o=t.map((function(e){return r(r({},e),{},{params:T(e.params||{})})}));return e.transporter.read({method:P,path:"1/indexes/*/queries",data:{requests:o},cacheable:!0},n)}},J=function(e){return function(t,o){return Promise.all(t.map((function(t){var a=t.params,u=a.facetName,i=a.facetQuery,s=n(a,["facetName","facetQuery"]);return C(e)(t.indexName,{methods:{searchForFacetValues:F}}).searchForFacetValues(u,i,r(r({},o),s))})))}},E=function(e){return function(t,r,n){return e.transporter.read({method:P,path:f("1/answers/%s/prediction",e.indexName),data:{query:t,queryLanguages:r},cacheable:!0},n)}},I=function(e){return function(t,r){return e.transporter.read({method:P,path:f("1/indexes/%s/query",e.indexName),data:{query:t},cacheable:!0},r)}},F=function(e){return function(t,r,n){return e.transporter.read({method:P,path:f("1/indexes/%s/facets/%s/query",e.indexName,t),data:{facetQuery:r},cacheable:!0},n)}},R=1,D=2,W=3;function H(e,t,n){var o,a={appId:e,apiKey:t,timeouts:{connect:1,read:2,write:30},requester:{send:function(e){return new Promise((function(t){var r=new XMLHttpRequest;r.open(e.method,e.url,!0),Object.keys(e.headers).forEach((function(t){return r.setRequestHeader(t,e.headers[t])}));var n,o=function(e,n){return setTimeout((function(){r.abort(),t({status:0,content:n,isTimedOut:!0})}),1e3*e)},a=o(e.connectTimeout,"Connection timeout");r.onreadystatechange=function(){r.readyState>r.OPENED&&void 0===n&&(clearTimeout(a),n=o(e.responseTimeout,"Socket timeout"))},r.onerror=function(){0===r.status&&(clearTimeout(a),clearTimeout(n),t({content:r.responseText||"Network request failed",status:r.status,isTimedOut:!1}))},r.onload=function(){clearTimeout(a),clearTimeout(n),t({content:r.responseText,status:r.status,isTimedOut:!1})},r.send(e.data)}))}},logger:(o=W,{debug:function(e,t){return R>=o&&console.debug(e,t),Promise.resolve()},info:function(e,t){return D>=o&&console.info(e,t),Promise.resolve()},error:function(e,t){return console.error(e,t),Promise.resolve()}}),responsesCache:s(),requestsCache:s({serializable:!1}),hostsCache:i({caches:[u({key:"".concat("4.8.6","-").concat(e)}),s()]}),userAgent:w("4.8.6").add({segment:"Browser",version:"lite"}),authMode:h.WithinQueryParameters};return N(r(r(r({},a),n),{},{methods:{search:k,searchForFacetValues:J,multipleQueries:k,multipleSearchForFacetValues:J,initIndex:function(e){return function(t){return C(e)(t,{methods:{search:I,searchForFacetValues:F,findAnswers:E}})}}}}))}return H.version="4.8.6",H}));


/***/ }),
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(27);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SearchParameters = __webpack_require__(15);
var SearchResults = __webpack_require__(16);
var DerivedHelper = __webpack_require__(36);
var requestBuilder = __webpack_require__(37);

var events = __webpack_require__(19);
var inherits = __webpack_require__(20);
var objectHasKeys = __webpack_require__(12);
var omit = __webpack_require__(11);
var merge = __webpack_require__(7);

var version = __webpack_require__(21);

/**
 * Event triggered when a parameter is set or updated
 * @event AlgoliaSearchHelper#event:change
 * @property {object} event
 * @property {SearchParameters} event.state the current parameters with the latest changes applied
 * @property {SearchResults} event.results the previous results received from Algolia. `null` before the first request
 * @example
 * helper.on('change', function(event) {
 *   console.log('The parameters have changed');
 * });
 */

/**
 * Event triggered when a main search is sent to Algolia
 * @event AlgoliaSearchHelper#event:search
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search
 * @property {SearchResults} event.results the results from the previous search. `null` if it is the first search.
 * @example
 * helper.on('search', function(event) {
 *   console.log('Search sent');
 * });
 */

/**
 * Event triggered when a search using `searchForFacetValues` is sent to Algolia
 * @event AlgoliaSearchHelper#event:searchForFacetValues
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search it is the first search.
 * @property {string} event.facet the facet searched into
 * @property {string} event.query the query used to search in the facets
 * @example
 * helper.on('searchForFacetValues', function(event) {
 *   console.log('searchForFacetValues sent');
 * });
 */

/**
 * Event triggered when a search using `searchOnce` is sent to Algolia
 * @event AlgoliaSearchHelper#event:searchOnce
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search it is the first search.
 * @example
 * helper.on('searchOnce', function(event) {
 *   console.log('searchOnce sent');
 * });
 */

/**
 * Event triggered when the results are retrieved from Algolia
 * @event AlgoliaSearchHelper#event:result
 * @property {object} event
 * @property {SearchResults} event.results the results received from Algolia
 * @property {SearchParameters} event.state the parameters used to query Algolia. Those might be different from the one in the helper instance (for example if the network is unreliable).
 * @example
 * helper.on('result', function(event) {
 *   console.log('Search results received');
 * });
 */

/**
 * Event triggered when Algolia sends back an error. For example, if an unknown parameter is
 * used, the error can be caught using this event.
 * @event AlgoliaSearchHelper#event:error
 * @property {object} event
 * @property {Error} event.error the error returned by the Algolia.
 * @example
 * helper.on('error', function(event) {
 *   console.log('Houston we got a problem.');
 * });
 */

/**
 * Event triggered when the queue of queries have been depleted (with any result or outdated queries)
 * @event AlgoliaSearchHelper#event:searchQueueEmpty
 * @example
 * helper.on('searchQueueEmpty', function() {
 *   console.log('No more search pending');
 *   // This is received before the result event if we're not expecting new results
 * });
 *
 * helper.search();
 */

/**
 * Initialize a new AlgoliaSearchHelper
 * @class
 * @classdesc The AlgoliaSearchHelper is a class that ease the management of the
 * search. It provides an event based interface for search callbacks:
 *  - change: when the internal search state is changed.
 *    This event contains a {@link SearchParameters} object and the
 *    {@link SearchResults} of the last result if any.
 *  - search: when a search is triggered using the `search()` method.
 *  - result: when the response is retrieved from Algolia and is processed.
 *    This event contains a {@link SearchResults} object and the
 *    {@link SearchParameters} corresponding to this answer.
 *  - error: when the response is an error. This event contains the error returned by the server.
 * @param  {AlgoliaSearch} client an AlgoliaSearch client
 * @param  {string} index the index name to query
 * @param  {SearchParameters | object} options an object defining the initial
 * config of the search. It doesn't have to be a {SearchParameters},
 * just an object containing the properties you need from it.
 */
function AlgoliaSearchHelper(client, index, options) {
  if (typeof client.addAlgoliaAgent === 'function') {
    client.addAlgoliaAgent('JS Helper (' + version + ')');
  }

  this.setClient(client);
  var opts = options || {};
  opts.index = index;
  this.state = SearchParameters.make(opts);
  this.lastResults = null;
  this._queryId = 0;
  this._lastQueryIdReceived = -1;
  this.derivedHelpers = [];
  this._currentNbQueries = 0;
}

inherits(AlgoliaSearchHelper, events.EventEmitter);

/**
 * Start the search with the parameters set in the state. When the
 * method is called, it triggers a `search` event. The results will
 * be available through the `result` event. If an error occurs, an
 * `error` will be fired instead.
 * @return {AlgoliaSearchHelper}
 * @fires search
 * @fires result
 * @fires error
 * @chainable
 */
AlgoliaSearchHelper.prototype.search = function() {
  this._search({onlyWithDerivedHelpers: false});
  return this;
};

AlgoliaSearchHelper.prototype.searchOnlyWithDerivedHelpers = function() {
  this._search({onlyWithDerivedHelpers: true});
  return this;
};

/**
 * Gets the search query parameters that would be sent to the Algolia Client
 * for the hits
 * @return {object} Query Parameters
 */
AlgoliaSearchHelper.prototype.getQuery = function() {
  var state = this.state;
  return requestBuilder._getHitsSearchParams(state);
};

/**
 * Start a search using a modified version of the current state. This method does
 * not trigger the helper lifecycle and does not modify the state kept internally
 * by the helper. This second aspect means that the next search call will be the
 * same as a search call before calling searchOnce.
 * @param {object} options can contain all the parameters that can be set to SearchParameters
 * plus the index
 * @param {function} [callback] optional callback executed when the response from the
 * server is back.
 * @return {promise|undefined} if a callback is passed the method returns undefined
 * otherwise it returns a promise containing an object with two keys :
 *  - content with a SearchResults
 *  - state with the state used for the query as a SearchParameters
 * @example
 * // Changing the number of records returned per page to 1
 * // This example uses the callback API
 * var state = helper.searchOnce({hitsPerPage: 1},
 *   function(error, content, state) {
 *     // if an error occurred it will be passed in error, otherwise its value is null
 *     // content contains the results formatted as a SearchResults
 *     // state is the instance of SearchParameters used for this search
 *   });
 * @example
 * // Changing the number of records returned per page to 1
 * // This example uses the promise API
 * var state1 = helper.searchOnce({hitsPerPage: 1})
 *                 .then(promiseHandler);
 *
 * function promiseHandler(res) {
 *   // res contains
 *   // {
 *   //   content : SearchResults
 *   //   state   : SearchParameters (the one used for this specific search)
 *   // }
 * }
 */
AlgoliaSearchHelper.prototype.searchOnce = function(options, cb) {
  var tempState = !options ? this.state : this.state.setQueryParameters(options);
  var queries = requestBuilder._getQueries(tempState.index, tempState);
  var self = this;

  this._currentNbQueries++;

  this.emit('searchOnce', {
    state: tempState
  });

  if (cb) {
    this.client
      .search(queries)
      .then(function(content) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) {
          self.emit('searchQueueEmpty');
        }

        cb(null, new SearchResults(tempState, content.results), tempState);
      })
      .catch(function(err) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) {
          self.emit('searchQueueEmpty');
        }

        cb(err, null, tempState);
      });

    return undefined;
  }

  return this.client.search(queries).then(function(content) {
    self._currentNbQueries--;
    if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
    return {
      content: new SearchResults(tempState, content.results),
      state: tempState,
      _originalResponse: content
    };
  }, function(e) {
    self._currentNbQueries--;
    if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
    throw e;
  });
};

 /**
 * Start the search for answers with the parameters set in the state.
 * This method returns a promise.
 * @param {Object} options - the options for answers API call
 * @param {string[]} options.attributesForPrediction - Attributes to use for predictions. If empty, `searchableAttributes` is used instead.
 * @param {string[]} options.queryLanguages - The languages in the query. Currently only supports ['en'].
 * @param {number} options.nbHits - Maximum number of answers to retrieve from the Answers Engine. Cannot be greater than 1000.
 *
 * @return {promise} the answer results
 */
AlgoliaSearchHelper.prototype.findAnswers = function(options) {
  var state = this.state;
  var derivedHelper = this.derivedHelpers[0];
  if (!derivedHelper) {
    return Promise.resolve([]);
  }
  var derivedState = derivedHelper.getModifiedState(state);
  var data = merge(
    {
      attributesForPrediction: options.attributesForPrediction,
      nbHits: options.nbHits
    },
    {
      params: omit(requestBuilder._getHitsSearchParams(derivedState), [
        'attributesToSnippet',
        'hitsPerPage',
        'restrictSearchableAttributes',
        'snippetEllipsisText' // FIXME remove this line once the engine is fixed.
      ])
    }
  );

  var errorMessage = 'search for answers was called, but this client does not have a function client.initIndex(index).findAnswers';
  if (typeof this.client.initIndex !== 'function') {
    throw new Error(errorMessage);
  }
  var index = this.client.initIndex(derivedState.index);
  if (typeof index.findAnswers !== 'function') {
    throw new Error(errorMessage);
  }
  return index.findAnswers(derivedState.query, options.queryLanguages, data);
};

/**
 * Structure of each result when using
 * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
 * @typedef FacetSearchHit
 * @type {object}
 * @property {string} value the facet value
 * @property {string} highlighted the facet value highlighted with the query string
 * @property {number} count number of occurrence of this facet value
 * @property {boolean} isRefined true if the value is already refined
 */

/**
 * Structure of the data resolved by the
 * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
 * promise.
 * @typedef FacetSearchResult
 * @type {object}
 * @property {FacetSearchHit} facetHits the results for this search for facet values
 * @property {number} processingTimeMS time taken by the query inside the engine
 */

/**
 * Search for facet values based on an query and the name of a faceted attribute. This
 * triggers a search and will return a promise. On top of using the query, it also sends
 * the parameters from the state so that the search is narrowed down to only the possible values.
 *
 * See the description of [FacetSearchResult](reference.html#FacetSearchResult)
 * @param {string} facet the name of the faceted attribute
 * @param {string} query the string query for the search
 * @param {number} [maxFacetHits] the maximum number values returned. Should be > 0 and <= 100
 * @param {object} [userState] the set of custom parameters to use on top of the current state. Setting a property to `undefined` removes
 * it in the generated query.
 * @return {promise.<FacetSearchResult>} the results of the search
 */
AlgoliaSearchHelper.prototype.searchForFacetValues = function(facet, query, maxFacetHits, userState) {
  var clientHasSFFV = typeof this.client.searchForFacetValues === 'function';
  if (
    !clientHasSFFV &&
    typeof this.client.initIndex !== 'function'
  ) {
    throw new Error(
      'search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues'
    );
  }
  var state = this.state.setQueryParameters(userState || {});
  var isDisjunctive = state.isDisjunctiveFacet(facet);
  var algoliaQuery = requestBuilder.getSearchForFacetQuery(facet, query, maxFacetHits, state);

  this._currentNbQueries++;
  var self = this;

  this.emit('searchForFacetValues', {
    state: state,
    facet: facet,
    query: query
  });

  var searchForFacetValuesPromise = clientHasSFFV
    ? this.client.searchForFacetValues([{indexName: state.index, params: algoliaQuery}])
    : this.client.initIndex(state.index).searchForFacetValues(algoliaQuery);

  return searchForFacetValuesPromise.then(function addIsRefined(content) {
    self._currentNbQueries--;
    if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');

    content = Array.isArray(content) ? content[0] : content;

    content.facetHits.forEach(function(f) {
      f.isRefined = isDisjunctive
        ? state.isDisjunctiveFacetRefined(facet, f.value)
        : state.isFacetRefined(facet, f.value);
    });

    return content;
  }, function(e) {
    self._currentNbQueries--;
    if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');
    throw e;
  });
};

/**
 * Sets the text query used for the search.
 *
 * This method resets the current page to 0.
 * @param  {string} q the user query
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.setQuery = function(q) {
  this._change({
    state: this.state.resetPage().setQuery(q),
    isPageReset: true
  });

  return this;
};

/**
 * Remove all the types of refinements except tags. A string can be provided to remove
 * only the refinements of a specific attribute. For more advanced use case, you can
 * provide a function instead. This function should follow the
 * [clearCallback definition](#SearchParameters.clearCallback).
 *
 * This method resets the current page to 0.
 * @param {string} [name] optional name of the facet / attribute on which we want to remove all refinements
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 * @example
 * // Removing all the refinements
 * helper.clearRefinements().search();
 * @example
 * // Removing all the filters on a the category attribute.
 * helper.clearRefinements('category').search();
 * @example
 * // Removing only the exclude filters on the category facet.
 * helper.clearRefinements(function(value, attribute, type) {
 *   return type === 'exclude' && attribute === 'category';
 * }).search();
 */
AlgoliaSearchHelper.prototype.clearRefinements = function(name) {
  this._change({
    state: this.state.resetPage().clearRefinements(name),
    isPageReset: true
  });

  return this;
};

/**
 * Remove all the tag filters.
 *
 * This method resets the current page to 0.
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.clearTags = function() {
  this._change({
    state: this.state.resetPage().clearTags(),
    isPageReset: true
  });

  return this;
};

/**
 * Adds a disjunctive filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addDisjunctiveFacetRefinement = function(facet, value) {
  this._change({
    state: this.state.resetPage().addDisjunctiveFacetRefinement(facet, value),
    isPageReset: true
  });

  return this;
};

/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addDisjunctiveFacetRefinement}
 */
AlgoliaSearchHelper.prototype.addDisjunctiveRefine = function() {
  return this.addDisjunctiveFacetRefinement.apply(this, arguments);
};

/**
 * Adds a refinement on a hierarchical facet. It will throw
 * an exception if the facet is not defined or if the facet
 * is already refined.
 *
 * This method resets the current page to 0.
 * @param {string} facet the facet name
 * @param {string} path the hierarchical facet path
 * @return {AlgoliaSearchHelper}
 * @throws Error if the facet is not defined or if the facet is refined
 * @chainable
 * @fires change
 */
AlgoliaSearchHelper.prototype.addHierarchicalFacetRefinement = function(facet, value) {
  this._change({
    state: this.state.resetPage().addHierarchicalFacetRefinement(facet, value),
    isPageReset: true
  });

  return this;
};

/**
 * Adds a an numeric filter to an attribute with the `operator` and `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} attribute the attribute on which the numeric filter applies
 * @param  {string} operator the operator of the filter
 * @param  {number} value the value of the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addNumericRefinement = function(attribute, operator, value) {
  this._change({
    state: this.state.resetPage().addNumericRefinement(attribute, operator, value),
    isPageReset: true
  });

  return this;
};

/**
 * Adds a filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addFacetRefinement = function(facet, value) {
  this._change({
    state: this.state.resetPage().addFacetRefinement(facet, value),
    isPageReset: true
  });

  return this;
};

/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetRefinement}
 */
AlgoliaSearchHelper.prototype.addRefine = function() {
  return this.addFacetRefinement.apply(this, arguments);
};


/**
 * Adds a an exclusion filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addFacetExclusion = function(facet, value) {
  this._change({
    state: this.state.resetPage().addExcludeRefinement(facet, value),
    isPageReset: true
  });

  return this;
};

/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetExclusion}
 */
AlgoliaSearchHelper.prototype.addExclude = function() {
  return this.addFacetExclusion.apply(this, arguments);
};

/**
 * Adds a tag filter with the `tag` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param {string} tag the tag to add to the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.addTag = function(tag) {
  this._change({
    state: this.state.resetPage().addTagRefinement(tag),
    isPageReset: true
  });

  return this;
};

/**
 * Removes an numeric filter to an attribute with the `operator` and `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * Some parameters are optional, triggering different behavior:
 *  - if the value is not provided, then all the numeric value will be removed for the
 *  specified attribute/operator couple.
 *  - if the operator is not provided either, then all the numeric filter on this attribute
 *  will be removed.
 *
 * This method resets the current page to 0.
 * @param  {string} attribute the attribute on which the numeric filter applies
 * @param  {string} [operator] the operator of the filter
 * @param  {number} [value] the value of the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeNumericRefinement = function(attribute, operator, value) {
  this._change({
    state: this.state.resetPage().removeNumericRefinement(attribute, operator, value),
    isPageReset: true
  });

  return this;
};

/**
 * Removes a disjunctive filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeDisjunctiveFacetRefinement = function(facet, value) {
  this._change({
    state: this.state.resetPage().removeDisjunctiveFacetRefinement(facet, value),
    isPageReset: true
  });

  return this;
};

/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeDisjunctiveFacetRefinement}
 */
AlgoliaSearchHelper.prototype.removeDisjunctiveRefine = function() {
  return this.removeDisjunctiveFacetRefinement.apply(this, arguments);
};

/**
 * Removes the refinement set on a hierarchical facet.
 * @param {string} facet the facet name
 * @return {AlgoliaSearchHelper}
 * @throws Error if the facet is not defined or if the facet is not refined
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeHierarchicalFacetRefinement = function(facet) {
  this._change({
    state: this.state.resetPage().removeHierarchicalFacetRefinement(facet),
    isPageReset: true
  });

  return this;
};

/**
 * Removes a filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeFacetRefinement = function(facet, value) {
  this._change({
    state: this.state.resetPage().removeFacetRefinement(facet, value),
    isPageReset: true
  });

  return this;
};

/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetRefinement}
 */
AlgoliaSearchHelper.prototype.removeRefine = function() {
  return this.removeFacetRefinement.apply(this, arguments);
};

/**
 * Removes an exclusion filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeFacetExclusion = function(facet, value) {
  this._change({
    state: this.state.resetPage().removeExcludeRefinement(facet, value),
    isPageReset: true
  });

  return this;
};

/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetExclusion}
 */
AlgoliaSearchHelper.prototype.removeExclude = function() {
  return this.removeFacetExclusion.apply(this, arguments);
};

/**
 * Removes a tag filter with the `tag` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param {string} tag tag to remove from the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.removeTag = function(tag) {
  this._change({
    state: this.state.resetPage().removeTagRefinement(tag),
    isPageReset: true
  });

  return this;
};

/**
 * Adds or removes an exclusion filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.toggleFacetExclusion = function(facet, value) {
  this._change({
    state: this.state.resetPage().toggleExcludeFacetRefinement(facet, value),
    isPageReset: true
  });

  return this;
};

/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetExclusion}
 */
AlgoliaSearchHelper.prototype.toggleExclude = function() {
  return this.toggleFacetExclusion.apply(this, arguments);
};

/**
 * Adds or removes a filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method can be used for conjunctive, disjunctive and hierarchical filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper}
 * @throws Error will throw an error if the facet is not declared in the settings of the helper
 * @fires change
 * @chainable
 * @deprecated since version 2.19.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
 */
AlgoliaSearchHelper.prototype.toggleRefinement = function(facet, value) {
  return this.toggleFacetRefinement(facet, value);
};

/**
 * Adds or removes a filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method can be used for conjunctive, disjunctive and hierarchical filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper}
 * @throws Error will throw an error if the facet is not declared in the settings of the helper
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.toggleFacetRefinement = function(facet, value) {
  this._change({
    state: this.state.resetPage().toggleFacetRefinement(facet, value),
    isPageReset: true
  });

  return this;
};

/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
 */
AlgoliaSearchHelper.prototype.toggleRefine = function() {
  return this.toggleFacetRefinement.apply(this, arguments);
};

/**
 * Adds or removes a tag filter with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method resets the current page to 0.
 * @param {string} tag tag to remove or add
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.toggleTag = function(tag) {
  this._change({
    state: this.state.resetPage().toggleTagRefinement(tag),
    isPageReset: true
  });

  return this;
};

/**
 * Increments the page number by one.
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 * @example
 * helper.setPage(0).nextPage().getPage();
 * // returns 1
 */
AlgoliaSearchHelper.prototype.nextPage = function() {
  var page = this.state.page || 0;
  return this.setPage(page + 1);
};

/**
 * Decrements the page number by one.
 * @fires change
 * @return {AlgoliaSearchHelper}
 * @chainable
 * @example
 * helper.setPage(1).previousPage().getPage();
 * // returns 0
 */
AlgoliaSearchHelper.prototype.previousPage = function() {
  var page = this.state.page || 0;
  return this.setPage(page - 1);
};

/**
 * @private
 */
function setCurrentPage(page) {
  if (page < 0) throw new Error('Page requested below 0.');

  this._change({
    state: this.state.setPage(page),
    isPageReset: false
  });

  return this;
}

/**
 * Change the current page
 * @deprecated
 * @param  {number} page The page number
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.setCurrentPage = setCurrentPage;

/**
 * Updates the current page.
 * @function
 * @param  {number} page The page number
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.setPage = setCurrentPage;

/**
 * Updates the name of the index that will be targeted by the query.
 *
 * This method resets the current page to 0.
 * @param {string} name the index name
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.setIndex = function(name) {
  this._change({
    state: this.state.resetPage().setIndex(name),
    isPageReset: true
  });

  return this;
};

/**
 * Update a parameter of the search. This method reset the page
 *
 * The complete list of parameters is available on the
 * [Algolia website](https://www.algolia.com/doc/rest#query-an-index).
 * The most commonly used parameters have their own [shortcuts](#query-parameters-shortcuts)
 * or benefit from higher-level APIs (all the kind of filters and facets have their own API)
 *
 * This method resets the current page to 0.
 * @param {string} parameter name of the parameter to update
 * @param {any} value new value of the parameter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 * @example
 * helper.setQueryParameter('hitsPerPage', 20).search();
 */
AlgoliaSearchHelper.prototype.setQueryParameter = function(parameter, value) {
  this._change({
    state: this.state.resetPage().setQueryParameter(parameter, value),
    isPageReset: true
  });

  return this;
};

/**
 * Set the whole state (warning: will erase previous state)
 * @param {SearchParameters} newState the whole new state
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */
AlgoliaSearchHelper.prototype.setState = function(newState) {
  this._change({
    state: SearchParameters.make(newState),
    isPageReset: false
  });

  return this;
};

/**
 * Override the current state without triggering a change event.
 * Do not use this method unless you know what you are doing. (see the example
 * for a legit use case)
 * @param {SearchParameters} newState the whole new state
 * @return {AlgoliaSearchHelper}
 * @example
 *  helper.on('change', function(state){
 *    // In this function you might want to find a way to store the state in the url/history
 *    updateYourURL(state)
 *  })
 *  window.onpopstate = function(event){
 *    // This is naive though as you should check if the state is really defined etc.
 *    helper.overrideStateWithoutTriggeringChangeEvent(event.state).search()
 *  }
 * @chainable
 */
AlgoliaSearchHelper.prototype.overrideStateWithoutTriggeringChangeEvent = function(newState) {
  this.state = new SearchParameters(newState);
  return this;
};

/**
 * Check if an attribute has any numeric, conjunctive, disjunctive or hierarchical filters.
 * @param {string} attribute the name of the attribute
 * @return {boolean} true if the attribute is filtered by at least one value
 * @example
 * // hasRefinements works with numeric, conjunctive, disjunctive and hierarchical filters
 * helper.hasRefinements('price'); // false
 * helper.addNumericRefinement('price', '>', 100);
 * helper.hasRefinements('price'); // true
 *
 * helper.hasRefinements('color'); // false
 * helper.addFacetRefinement('color', 'blue');
 * helper.hasRefinements('color'); // true
 *
 * helper.hasRefinements('material'); // false
 * helper.addDisjunctiveFacetRefinement('material', 'plastic');
 * helper.hasRefinements('material'); // true
 *
 * helper.hasRefinements('categories'); // false
 * helper.toggleFacetRefinement('categories', 'kitchen > knife');
 * helper.hasRefinements('categories'); // true
 *
 */
AlgoliaSearchHelper.prototype.hasRefinements = function(attribute) {
  if (objectHasKeys(this.state.getNumericRefinements(attribute))) {
    return true;
  } else if (this.state.isConjunctiveFacet(attribute)) {
    return this.state.isFacetRefined(attribute);
  } else if (this.state.isDisjunctiveFacet(attribute)) {
    return this.state.isDisjunctiveFacetRefined(attribute);
  } else if (this.state.isHierarchicalFacet(attribute)) {
    return this.state.isHierarchicalFacetRefined(attribute);
  }

  // there's currently no way to know that the user did call `addNumericRefinement` at some point
  // thus we cannot distinguish if there once was a numeric refinement that was cleared
  // so we will return false in every other situations to be consistent
  // while what we should do here is throw because we did not find the attribute in any type
  // of refinement
  return false;
};

/**
 * Check if a value is excluded for a specific faceted attribute. If the value
 * is omitted then the function checks if there is any excluding refinements.
 *
 * @param  {string}  facet name of the attribute for used for faceting
 * @param  {string}  [value] optional value. If passed will test that this value
   * is filtering the given facet.
 * @return {boolean} true if refined
 * @example
 * helper.isExcludeRefined('color'); // false
 * helper.isExcludeRefined('color', 'blue') // false
 * helper.isExcludeRefined('color', 'red') // false
 *
 * helper.addFacetExclusion('color', 'red');
 *
 * helper.isExcludeRefined('color'); // true
 * helper.isExcludeRefined('color', 'blue') // false
 * helper.isExcludeRefined('color', 'red') // true
 */
AlgoliaSearchHelper.prototype.isExcluded = function(facet, value) {
  return this.state.isExcludeRefined(facet, value);
};

/**
 * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasRefinements}
 */
AlgoliaSearchHelper.prototype.isDisjunctiveRefined = function(facet, value) {
  return this.state.isDisjunctiveFacetRefined(facet, value);
};

/**
 * Check if the string is a currently filtering tag.
 * @param {string} tag tag to check
 * @return {boolean}
 */
AlgoliaSearchHelper.prototype.hasTag = function(tag) {
  return this.state.isTagRefined(tag);
};

/**
 * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasTag}
 */
AlgoliaSearchHelper.prototype.isTagRefined = function() {
  return this.hasTagRefinements.apply(this, arguments);
};


/**
 * Get the name of the currently used index.
 * @return {string}
 * @example
 * helper.setIndex('highestPrice_products').getIndex();
 * // returns 'highestPrice_products'
 */
AlgoliaSearchHelper.prototype.getIndex = function() {
  return this.state.index;
};

function getCurrentPage() {
  return this.state.page;
}

/**
 * Get the currently selected page
 * @deprecated
 * @return {number} the current page
 */
AlgoliaSearchHelper.prototype.getCurrentPage = getCurrentPage;
/**
 * Get the currently selected page
 * @function
 * @return {number} the current page
 */
AlgoliaSearchHelper.prototype.getPage = getCurrentPage;

/**
 * Get all the tags currently set to filters the results.
 *
 * @return {string[]} The list of tags currently set.
 */
AlgoliaSearchHelper.prototype.getTags = function() {
  return this.state.tagRefinements;
};

/**
 * Get the list of refinements for a given attribute. This method works with
 * conjunctive, disjunctive, excluding and numerical filters.
 *
 * See also SearchResults#getRefinements
 *
 * @param {string} facetName attribute name used for faceting
 * @return {Array.<FacetRefinement|NumericRefinement>} All Refinement are objects that contain a value, and
 * a type. Numeric also contains an operator.
 * @example
 * helper.addNumericRefinement('price', '>', 100);
 * helper.getRefinements('price');
 * // [
 * //   {
 * //     "value": [
 * //       100
 * //     ],
 * //     "operator": ">",
 * //     "type": "numeric"
 * //   }
 * // ]
 * @example
 * helper.addFacetRefinement('color', 'blue');
 * helper.addFacetExclusion('color', 'red');
 * helper.getRefinements('color');
 * // [
 * //   {
 * //     "value": "blue",
 * //     "type": "conjunctive"
 * //   },
 * //   {
 * //     "value": "red",
 * //     "type": "exclude"
 * //   }
 * // ]
 * @example
 * helper.addDisjunctiveFacetRefinement('material', 'plastic');
 * // [
 * //   {
 * //     "value": "plastic",
 * //     "type": "disjunctive"
 * //   }
 * // ]
 */
AlgoliaSearchHelper.prototype.getRefinements = function(facetName) {
  var refinements = [];

  if (this.state.isConjunctiveFacet(facetName)) {
    var conjRefinements = this.state.getConjunctiveRefinements(facetName);

    conjRefinements.forEach(function(r) {
      refinements.push({
        value: r,
        type: 'conjunctive'
      });
    });

    var excludeRefinements = this.state.getExcludeRefinements(facetName);

    excludeRefinements.forEach(function(r) {
      refinements.push({
        value: r,
        type: 'exclude'
      });
    });
  } else if (this.state.isDisjunctiveFacet(facetName)) {
    var disjRefinements = this.state.getDisjunctiveRefinements(facetName);

    disjRefinements.forEach(function(r) {
      refinements.push({
        value: r,
        type: 'disjunctive'
      });
    });
  }

  var numericRefinements = this.state.getNumericRefinements(facetName);

  Object.keys(numericRefinements).forEach(function(operator) {
    var value = numericRefinements[operator];

    refinements.push({
      value: value,
      operator: operator,
      type: 'numeric'
    });
  });

  return refinements;
};

/**
 * Return the current refinement for the (attribute, operator)
 * @param {string} attribute attribute in the record
 * @param {string} operator operator applied on the refined values
 * @return {Array.<number|number[]>} refined values
 */
AlgoliaSearchHelper.prototype.getNumericRefinement = function(attribute, operator) {
  return this.state.getNumericRefinement(attribute, operator);
};

/**
 * Get the current breadcrumb for a hierarchical facet, as an array
 * @param  {string} facetName Hierarchical facet name
 * @return {array.<string>} the path as an array of string
 */
AlgoliaSearchHelper.prototype.getHierarchicalFacetBreadcrumb = function(facetName) {
  return this.state.getHierarchicalFacetBreadcrumb(facetName);
};

// /////////// PRIVATE

/**
 * Perform the underlying queries
 * @private
 * @return {undefined}
 * @fires search
 * @fires result
 * @fires error
 */
AlgoliaSearchHelper.prototype._search = function(options) {
  var state = this.state;
  var states = [];
  var mainQueries = [];

  if (!options.onlyWithDerivedHelpers) {
    mainQueries = requestBuilder._getQueries(state.index, state);

    states.push({
      state: state,
      queriesCount: mainQueries.length,
      helper: this
    });

    this.emit('search', {
      state: state,
      results: this.lastResults
    });
  }

  var derivedQueries = this.derivedHelpers.map(function(derivedHelper) {
    var derivedState = derivedHelper.getModifiedState(state);
    var derivedStateQueries = requestBuilder._getQueries(derivedState.index, derivedState);

    states.push({
      state: derivedState,
      queriesCount: derivedStateQueries.length,
      helper: derivedHelper
    });

    derivedHelper.emit('search', {
      state: derivedState,
      results: derivedHelper.lastResults
    });

    return derivedStateQueries;
  });

  var queries = Array.prototype.concat.apply(mainQueries, derivedQueries);
  var queryId = this._queryId++;

  this._currentNbQueries++;

  try {
    this.client.search(queries)
      .then(this._dispatchAlgoliaResponse.bind(this, states, queryId))
      .catch(this._dispatchAlgoliaError.bind(this, queryId));
  } catch (error) {
    // If we reach this part, we're in an internal error state
    this.emit('error', {
      error: error
    });
  }
};

/**
 * Transform the responses as sent by the server and transform them into a user
 * usable object that merge the results of all the batch requests. It will dispatch
 * over the different helper + derived helpers (when there are some).
 * @private
 * @param {array.<{SearchParameters, AlgoliaQueries, AlgoliaSearchHelper}>}
 *  state state used for to generate the request
 * @param {number} queryId id of the current request
 * @param {object} content content of the response
 * @return {undefined}
 */
AlgoliaSearchHelper.prototype._dispatchAlgoliaResponse = function(states, queryId, content) {
  // FIXME remove the number of outdated queries discarded instead of just one

  if (queryId < this._lastQueryIdReceived) {
    // Outdated answer
    return;
  }

  this._currentNbQueries -= (queryId - this._lastQueryIdReceived);
  this._lastQueryIdReceived = queryId;

  if (this._currentNbQueries === 0) this.emit('searchQueueEmpty');

  var results = content.results.slice();

  states.forEach(function(s) {
    var state = s.state;
    var queriesCount = s.queriesCount;
    var helper = s.helper;
    var specificResults = results.splice(0, queriesCount);

    var formattedResponse = helper.lastResults = new SearchResults(state, specificResults);

    helper.emit('result', {
      results: formattedResponse,
      state: state
    });
  });
};

AlgoliaSearchHelper.prototype._dispatchAlgoliaError = function(queryId, error) {
  if (queryId < this._lastQueryIdReceived) {
    // Outdated answer
    return;
  }

  this._currentNbQueries -= queryId - this._lastQueryIdReceived;
  this._lastQueryIdReceived = queryId;

  this.emit('error', {
    error: error
  });

  if (this._currentNbQueries === 0) this.emit('searchQueueEmpty');
};

AlgoliaSearchHelper.prototype.containsRefinement = function(query, facetFilters, numericFilters, tagFilters) {
  return query ||
    facetFilters.length !== 0 ||
    numericFilters.length !== 0 ||
    tagFilters.length !== 0;
};

/**
 * Test if there are some disjunctive refinements on the facet
 * @private
 * @param {string} facet the attribute to test
 * @return {boolean}
 */
AlgoliaSearchHelper.prototype._hasDisjunctiveRefinements = function(facet) {
  return this.state.disjunctiveRefinements[facet] &&
    this.state.disjunctiveRefinements[facet].length > 0;
};

AlgoliaSearchHelper.prototype._change = function(event) {
  var state = event.state;
  var isPageReset = event.isPageReset;

  if (state !== this.state) {
    this.state = state;

    this.emit('change', {
      state: this.state,
      results: this.lastResults,
      isPageReset: isPageReset
    });
  }
};

/**
 * Clears the cache of the underlying Algolia client.
 * @return {AlgoliaSearchHelper}
 */
AlgoliaSearchHelper.prototype.clearCache = function() {
  this.client.clearCache && this.client.clearCache();
  return this;
};

/**
 * Updates the internal client instance. If the reference of the clients
 * are equal then no update is actually done.
 * @param  {AlgoliaSearch} newClient an AlgoliaSearch client
 * @return {AlgoliaSearchHelper}
 */
AlgoliaSearchHelper.prototype.setClient = function(newClient) {
  if (this.client === newClient) return this;

  if (typeof newClient.addAlgoliaAgent === 'function') {
    newClient.addAlgoliaAgent('JS Helper (' + version + ')');
  }
  this.client = newClient;

  return this;
};

/**
 * Gets the instance of the currently used client.
 * @return {AlgoliaSearch}
 */
AlgoliaSearchHelper.prototype.getClient = function() {
  return this.client;
};

/**
 * Creates an derived instance of the Helper. A derived helper
 * is a way to request other indices synchronised with the lifecycle
 * of the main Helper. This mechanism uses the multiqueries feature
 * of Algolia to aggregate all the requests in a single network call.
 *
 * This method takes a function that is used to create a new SearchParameter
 * that will be used to create requests to Algolia. Those new requests
 * are created just before the `search` event. The signature of the function
 * is `SearchParameters -> SearchParameters`.
 *
 * This method returns a new DerivedHelper which is an EventEmitter
 * that fires the same `search`, `result` and `error` events. Those
 * events, however, will receive data specific to this DerivedHelper
 * and the SearchParameters that is returned by the call of the
 * parameter function.
 * @param {function} fn SearchParameters -> SearchParameters
 * @return {DerivedHelper}
 */
AlgoliaSearchHelper.prototype.derive = function(fn) {
  var derivedHelper = new DerivedHelper(this, fn);
  this.derivedHelpers.push(derivedHelper);
  return derivedHelper;
};

/**
 * This method detaches a derived Helper from the main one. Prefer using the one from the
 * derived helper itself, to remove the event listeners too.
 * @private
 * @return {undefined}
 * @throws Error
 */
AlgoliaSearchHelper.prototype.detachDerivedHelper = function(derivedHelper) {
  var pos = this.derivedHelpers.indexOf(derivedHelper);
  if (pos === -1) throw new Error('Derived helper already detached');
  this.derivedHelpers.splice(pos, 1);
};

/**
 * This method returns true if there is currently at least one on-going search.
 * @return {boolean} true if there is a search pending
 */
AlgoliaSearchHelper.prototype.hasPendingRequests = function() {
  return this._currentNbQueries > 0;
};

/**
 * @typedef AlgoliaSearchHelper.NumericRefinement
 * @type {object}
 * @property {number[]} value the numbers that are used for filtering this attribute with
 * the operator specified.
 * @property {string} operator the faceting data: value, number of entries
 * @property {string} type will be 'numeric'
 */

/**
 * @typedef AlgoliaSearchHelper.FacetRefinement
 * @type {object}
 * @property {string} value the string use to filter the attribute
 * @property {string} type the type of filter: 'conjunctive', 'disjunctive', 'exclude'
 */

module.exports = AlgoliaSearchHelper;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function intersection(arr1, arr2) {
  return arr1.filter(function(value, index) {
    return (
      arr2.indexOf(value) > -1 &&
      arr1.indexOf(value) === index /* skips duplicates */
    );
  });
}

module.exports = intersection;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function valToNumber(v) {
  if (typeof v === 'number') {
    return v;
  } else if (typeof v === 'string') {
    return parseFloat(v);
  } else if (Array.isArray(v)) {
    return v.map(valToNumber);
  }

  throw new Error('The value should be a number, a parsable string or an array of those.');
}

module.exports = valToNumber;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isValidUserToken(userToken) {
  if (userToken === null) {
    return false;
  }
  return /^[a-zA-Z0-9_-]{1,64}$/.test(userToken);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Functions to manipulate refinement lists
 *
 * The RefinementList is not formally defined through a prototype but is based
 * on a specific structure.
 *
 * @module SearchParameters.refinementList
 *
 * @typedef {string[]} SearchParameters.refinementList.Refinements
 * @typedef {Object.<string, SearchParameters.refinementList.Refinements>} SearchParameters.refinementList.RefinementList
 */

var defaultsPure = __webpack_require__(10);
var omit = __webpack_require__(11);
var objectHasKeys = __webpack_require__(12);

var lib = {
  /**
   * Adds a refinement to a RefinementList
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} value the value of the refinement, if the value is not a string it will be converted
   * @return {RefinementList} a new and updated refinement list
   */
  addRefinement: function addRefinement(refinementList, attribute, value) {
    if (lib.isRefined(refinementList, attribute, value)) {
      return refinementList;
    }

    var valueAsString = '' + value;

    var facetRefinement = !refinementList[attribute] ?
      [valueAsString] :
      refinementList[attribute].concat(valueAsString);

    var mod = {};

    mod[attribute] = facetRefinement;

    return defaultsPure({}, mod, refinementList);
  },
  /**
   * Removes refinement(s) for an attribute:
   *  - if the value is specified removes the refinement for the value on the attribute
   *  - if no value is specified removes all the refinements for this attribute
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} [value] the value of the refinement
   * @return {RefinementList} a new and updated refinement lst
   */
  removeRefinement: function removeRefinement(refinementList, attribute, value) {
    if (value === undefined) {
      // we use the "filter" form of clearRefinement, since it leaves empty values as-is
      // the form with a string will remove the attribute completely
      return lib.clearRefinement(refinementList, function(v, f) {
        return attribute === f;
      });
    }

    var valueAsString = '' + value;

    return lib.clearRefinement(refinementList, function(v, f) {
      return attribute === f && valueAsString === v;
    });
  },
  /**
   * Toggles the refinement value for an attribute.
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} value the value of the refinement
   * @return {RefinementList} a new and updated list
   */
  toggleRefinement: function toggleRefinement(refinementList, attribute, value) {
    if (value === undefined) throw new Error('toggleRefinement should be used with a value');

    if (lib.isRefined(refinementList, attribute, value)) {
      return lib.removeRefinement(refinementList, attribute, value);
    }

    return lib.addRefinement(refinementList, attribute, value);
  },
  /**
   * Clear all or parts of a RefinementList. Depending on the arguments, three
   * kinds of behavior can happen:
   *  - if no attribute is provided: clears the whole list
   *  - if an attribute is provided as a string: clears the list for the specific attribute
   *  - if an attribute is provided as a function: discards the elements for which the function returns true
   * @param {RefinementList} refinementList the initial list
   * @param {string} [attribute] the attribute or function to discard
   * @param {string} [refinementType] optional parameter to give more context to the attribute function
   * @return {RefinementList} a new and updated refinement list
   */
  clearRefinement: function clearRefinement(refinementList, attribute, refinementType) {
    if (attribute === undefined) {
      if (!objectHasKeys(refinementList)) {
        return refinementList;
      }
      return {};
    } else if (typeof attribute === 'string') {
      return omit(refinementList, [attribute]);
    } else if (typeof attribute === 'function') {
      var hasChanged = false;

      var newRefinementList = Object.keys(refinementList).reduce(function(memo, key) {
        var values = refinementList[key] || [];
        var facetList = values.filter(function(value) {
          return !attribute(value, key, refinementType);
        });

        if (facetList.length !== values.length) {
          hasChanged = true;
        }
        memo[key] = facetList;

        return memo;
      }, {});

      if (hasChanged) return newRefinementList;
      return refinementList;
    }
  },
  /**
   * Test if the refinement value is used for the attribute. If no refinement value
   * is provided, test if the refinementList contains any refinement for the
   * given attribute.
   * @param {RefinementList} refinementList the list of refinement
   * @param {string} attribute name of the attribute
   * @param {string} [refinementValue] value of the filter/refinement
   * @return {boolean}
   */
  isRefined: function isRefined(refinementList, attribute, refinementValue) {
    var containsRefinements = !!refinementList[attribute] &&
      refinementList[attribute].length > 0;

    if (refinementValue === undefined || !containsRefinements) {
      return containsRefinements;
    }

    var refinementValueAsString = '' + refinementValue;

    return refinementList[attribute].indexOf(refinementValueAsString) !== -1;
  }
};

module.exports = lib;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function compact(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  return array.filter(Boolean);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// @MAJOR can be replaced by native Array#findIndex when we change support
module.exports = function find(array, comparator) {
  if (!Array.isArray(array)) {
    return -1;
  }

  for (var i = 0; i < array.length; i++) {
    if (comparator(array[i])) {
      return i;
    }
  }
  return -1;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = generateTrees;

var orderBy = __webpack_require__(17);
var find = __webpack_require__(8);
var prepareHierarchicalFacetSortBy = __webpack_require__(18);

function generateTrees(state) {
  return function generate(hierarchicalFacetResult, hierarchicalFacetIndex) {
    var hierarchicalFacet = state.hierarchicalFacets[hierarchicalFacetIndex];
    var hierarchicalFacetRefinement =
      (state.hierarchicalFacetsRefinements[hierarchicalFacet.name] &&
        state.hierarchicalFacetsRefinements[hierarchicalFacet.name][0]) ||
      '';
    var hierarchicalSeparator = state._getHierarchicalFacetSeparator(
      hierarchicalFacet
    );
    var hierarchicalRootPath = state._getHierarchicalRootPath(
      hierarchicalFacet
    );
    var hierarchicalShowParentLevel = state._getHierarchicalShowParentLevel(
      hierarchicalFacet
    );
    var sortBy = prepareHierarchicalFacetSortBy(
      state._getHierarchicalFacetSortBy(hierarchicalFacet)
    );

    var rootExhaustive = hierarchicalFacetResult.every(function(facetResult) {
      return facetResult.exhaustive;
    });

    var generateTreeFn = generateHierarchicalTree(
      sortBy,
      hierarchicalSeparator,
      hierarchicalRootPath,
      hierarchicalShowParentLevel,
      hierarchicalFacetRefinement
    );

    var results = hierarchicalFacetResult;

    if (hierarchicalRootPath) {
      results = hierarchicalFacetResult.slice(
        hierarchicalRootPath.split(hierarchicalSeparator).length
      );
    }

    return results.reduce(generateTreeFn, {
      name: state.hierarchicalFacets[hierarchicalFacetIndex].name,
      count: null, // root level, no count
      isRefined: true, // root level, always refined
      path: null, // root level, no path
      exhaustive: rootExhaustive,
      data: null
    });
  };
}

function generateHierarchicalTree(
  sortBy,
  hierarchicalSeparator,
  hierarchicalRootPath,
  hierarchicalShowParentLevel,
  currentRefinement
) {
  return function generateTree(
    hierarchicalTree,
    hierarchicalFacetResult,
    currentHierarchicalLevel
  ) {
    var parent = hierarchicalTree;

    if (currentHierarchicalLevel > 0) {
      var level = 0;

      parent = hierarchicalTree;

      while (level < currentHierarchicalLevel) {
        /**
         * @type {object[]]} hierarchical data
         */
        var data = parent && Array.isArray(parent.data) ? parent.data : [];
        parent = find(data, function(subtree) {
          return subtree.isRefined;
        });
        level++;
      }
    }

    // we found a refined parent, let's add current level data under it
    if (parent) {
      // filter values in case an object has multiple categories:
      //   {
      //     categories: {
      //       level0: ['beers', 'bières'],
      //       level1: ['beers > IPA', 'bières > Belges']
      //     }
      //   }
      //
      // If parent refinement is `beers`, then we do not want to have `bières > Belges`
      // showing up

      var picked = Object.keys(hierarchicalFacetResult.data)
        .map(function(facetValue) {
          return [facetValue, hierarchicalFacetResult.data[facetValue]];
        })
        .filter(function(tuple) {
          var facetValue = tuple[0];
          return onlyMatchingTree(
            facetValue,
            parent.path || hierarchicalRootPath,
            currentRefinement,
            hierarchicalSeparator,
            hierarchicalRootPath,
            hierarchicalShowParentLevel
          );
        });

      parent.data = orderBy(
        picked.map(function(tuple) {
          var facetValue = tuple[0];
          var facetCount = tuple[1];

          return format(
            facetCount,
            facetValue,
            hierarchicalSeparator,
            currentRefinement,
            hierarchicalFacetResult.exhaustive
          );
        }),
        sortBy[0],
        sortBy[1]
      );
    }

    return hierarchicalTree;
  };
}

function onlyMatchingTree(
  facetValue,
  parentPath,
  currentRefinement,
  hierarchicalSeparator,
  hierarchicalRootPath,
  hierarchicalShowParentLevel
) {
  // we want the facetValue is a child of hierarchicalRootPath
  if (
    hierarchicalRootPath &&
    (facetValue.indexOf(hierarchicalRootPath) !== 0 ||
      hierarchicalRootPath === facetValue)
  ) {
    return false;
  }

  // we always want root levels (only when there is no prefix path)
  return (
    (!hierarchicalRootPath &&
      facetValue.indexOf(hierarchicalSeparator) === -1) ||
    // if there is a rootPath, being root level mean 1 level under rootPath
    (hierarchicalRootPath &&
      facetValue.split(hierarchicalSeparator).length -
        hierarchicalRootPath.split(hierarchicalSeparator).length ===
        1) ||
    // if current refinement is a root level and current facetValue is a root level,
    // keep the facetValue
    (facetValue.indexOf(hierarchicalSeparator) === -1 &&
      currentRefinement.indexOf(hierarchicalSeparator) === -1) ||
    // currentRefinement is a child of the facet value
    currentRefinement.indexOf(facetValue) === 0 ||
    // facetValue is a child of the current parent, add it
    (facetValue.indexOf(parentPath + hierarchicalSeparator) === 0 &&
      (hierarchicalShowParentLevel ||
        facetValue.indexOf(currentRefinement) === 0))
  );
}

function format(
  facetCount,
  facetValue,
  hierarchicalSeparator,
  currentRefinement,
  exhaustive
) {
  var parts = facetValue.split(hierarchicalSeparator);
  return {
    name: parts[parts.length - 1].trim(),
    path: facetValue,
    count: facetCount,
    isRefined:
      currentRefinement === facetValue ||
      currentRefinement.indexOf(facetValue + hierarchicalSeparator) === 0,
    exhaustive: exhaustive,
    data: null
  };
}


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var events = __webpack_require__(19);
var inherits = __webpack_require__(20);

/**
 * A DerivedHelper is a way to create sub requests to
 * Algolia from a main helper.
 * @class
 * @classdesc The DerivedHelper provides an event based interface for search callbacks:
 *  - search: when a search is triggered using the `search()` method.
 *  - result: when the response is retrieved from Algolia and is processed.
 *    This event contains a {@link SearchResults} object and the
 *    {@link SearchParameters} corresponding to this answer.
 */
function DerivedHelper(mainHelper, fn) {
  this.main = mainHelper;
  this.fn = fn;
  this.lastResults = null;
}

inherits(DerivedHelper, events.EventEmitter);

/**
 * Detach this helper from the main helper
 * @return {undefined}
 * @throws Error if the derived helper is already detached
 */
DerivedHelper.prototype.detach = function() {
  this.removeAllListeners();
  this.main.detachDerivedHelper(this);
};

DerivedHelper.prototype.getModifiedState = function(parameters) {
  return this.fn(parameters);
};

module.exports = DerivedHelper;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(7);

var requestBuilder = {
  /**
   * Get all the queries to send to the client, those queries can used directly
   * with the Algolia client.
   * @private
   * @return {object[]} The queries
   */
  _getQueries: function getQueries(index, state) {
    var queries = [];

    // One query for the hits
    queries.push({
      indexName: index,
      params: requestBuilder._getHitsSearchParams(state)
    });

    // One for each disjunctive facets
    state.getRefinedDisjunctiveFacets().forEach(function(refinedFacet) {
      queries.push({
        indexName: index,
        params: requestBuilder._getDisjunctiveFacetSearchParams(state, refinedFacet)
      });
    });

    // maybe more to get the root level of hierarchical facets when activated
    state.getRefinedHierarchicalFacets().forEach(function(refinedFacet) {
      var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);

      var currentRefinement = state.getHierarchicalRefinement(refinedFacet);
      // if we are deeper than level 0 (starting from `beer > IPA`)
      // we want to get the root values
      var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
      if (currentRefinement.length > 0 && currentRefinement[0].split(separator).length > 1) {
        queries.push({
          indexName: index,
          params: requestBuilder._getDisjunctiveFacetSearchParams(state, refinedFacet, true)
        });
      }
    });

    return queries;
  },

  /**
   * Build search parameters used to fetch hits
   * @private
   * @return {object.<string, any>}
   */
  _getHitsSearchParams: function(state) {
    var facets = state.facets
      .concat(state.disjunctiveFacets)
      .concat(requestBuilder._getHitsHierarchicalFacetsAttributes(state));


    var facetFilters = requestBuilder._getFacetFilters(state);
    var numericFilters = requestBuilder._getNumericFilters(state);
    var tagFilters = requestBuilder._getTagFilters(state);
    var additionalParams = {
      facets: facets,
      tagFilters: tagFilters
    };

    if (facetFilters.length > 0) {
      additionalParams.facetFilters = facetFilters;
    }

    if (numericFilters.length > 0) {
      additionalParams.numericFilters = numericFilters;
    }

    return merge({}, state.getQueryParams(), additionalParams);
  },

  /**
   * Build search parameters used to fetch a disjunctive facet
   * @private
   * @param  {string} facet the associated facet name
   * @param  {boolean} hierarchicalRootLevel ?? FIXME
   * @return {object}
   */
  _getDisjunctiveFacetSearchParams: function(state, facet, hierarchicalRootLevel) {
    var facetFilters = requestBuilder._getFacetFilters(state, facet, hierarchicalRootLevel);
    var numericFilters = requestBuilder._getNumericFilters(state, facet);
    var tagFilters = requestBuilder._getTagFilters(state);
    var additionalParams = {
      hitsPerPage: 1,
      page: 0,
      attributesToRetrieve: [],
      attributesToHighlight: [],
      attributesToSnippet: [],
      tagFilters: tagFilters,
      analytics: false,
      clickAnalytics: false
    };

    var hierarchicalFacet = state.getHierarchicalFacetByName(facet);

    if (hierarchicalFacet) {
      additionalParams.facets = requestBuilder._getDisjunctiveHierarchicalFacetAttribute(
        state,
        hierarchicalFacet,
        hierarchicalRootLevel
      );
    } else {
      additionalParams.facets = facet;
    }

    if (numericFilters.length > 0) {
      additionalParams.numericFilters = numericFilters;
    }

    if (facetFilters.length > 0) {
      additionalParams.facetFilters = facetFilters;
    }

    return merge({}, state.getQueryParams(), additionalParams);
  },

  /**
   * Return the numeric filters in an algolia request fashion
   * @private
   * @param {string} [facetName] the name of the attribute for which the filters should be excluded
   * @return {string[]} the numeric filters in the algolia format
   */
  _getNumericFilters: function(state, facetName) {
    if (state.numericFilters) {
      return state.numericFilters;
    }

    var numericFilters = [];

    Object.keys(state.numericRefinements).forEach(function(attribute) {
      var operators = state.numericRefinements[attribute] || {};
      Object.keys(operators).forEach(function(operator) {
        var values = operators[operator] || [];
        if (facetName !== attribute) {
          values.forEach(function(value) {
            if (Array.isArray(value)) {
              var vs = value.map(function(v) {
                return attribute + operator + v;
              });
              numericFilters.push(vs);
            } else {
              numericFilters.push(attribute + operator + value);
            }
          });
        }
      });
    });

    return numericFilters;
  },

  /**
   * Return the tags filters depending
   * @private
   * @return {string}
   */
  _getTagFilters: function(state) {
    if (state.tagFilters) {
      return state.tagFilters;
    }

    return state.tagRefinements.join(',');
  },


  /**
   * Build facetFilters parameter based on current refinements. The array returned
   * contains strings representing the facet filters in the algolia format.
   * @private
   * @param  {string} [facet] if set, the current disjunctive facet
   * @return {array.<string>}
   */
  _getFacetFilters: function(state, facet, hierarchicalRootLevel) {
    var facetFilters = [];

    var facetsRefinements = state.facetsRefinements || {};
    Object.keys(facetsRefinements).forEach(function(facetName) {
      var facetValues = facetsRefinements[facetName] || [];
      facetValues.forEach(function(facetValue) {
        facetFilters.push(facetName + ':' + facetValue);
      });
    });

    var facetsExcludes = state.facetsExcludes || {};
    Object.keys(facetsExcludes).forEach(function(facetName) {
      var facetValues = facetsExcludes[facetName] || [];
      facetValues.forEach(function(facetValue) {
        facetFilters.push(facetName + ':-' + facetValue);
      });
    });

    var disjunctiveFacetsRefinements = state.disjunctiveFacetsRefinements || {};
    Object.keys(disjunctiveFacetsRefinements).forEach(function(facetName) {
      var facetValues = disjunctiveFacetsRefinements[facetName] || [];
      if (facetName === facet || !facetValues || facetValues.length === 0) {
        return;
      }
      var orFilters = [];

      facetValues.forEach(function(facetValue) {
        orFilters.push(facetName + ':' + facetValue);
      });

      facetFilters.push(orFilters);
    });

    var hierarchicalFacetsRefinements = state.hierarchicalFacetsRefinements || {};
    Object.keys(hierarchicalFacetsRefinements).forEach(function(facetName) {
      var facetValues = hierarchicalFacetsRefinements[facetName] || [];
      var facetValue = facetValues[0];

      if (facetValue === undefined) {
        return;
      }

      var hierarchicalFacet = state.getHierarchicalFacetByName(facetName);
      var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
      var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);
      var attributeToRefine;
      var attributesIndex;

      // we ask for parent facet values only when the `facet` is the current hierarchical facet
      if (facet === facetName) {
        // if we are at the root level already, no need to ask for facet values, we get them from
        // the hits query
        if (facetValue.indexOf(separator) === -1 || (!rootPath && hierarchicalRootLevel === true) ||
          (rootPath && rootPath.split(separator).length === facetValue.split(separator).length)) {
          return;
        }

        if (!rootPath) {
          attributesIndex = facetValue.split(separator).length - 2;
          facetValue = facetValue.slice(0, facetValue.lastIndexOf(separator));
        } else {
          attributesIndex = rootPath.split(separator).length - 1;
          facetValue = rootPath;
        }

        attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
      } else {
        attributesIndex = facetValue.split(separator).length - 1;

        attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
      }

      if (attributeToRefine) {
        facetFilters.push([attributeToRefine + ':' + facetValue]);
      }
    });

    return facetFilters;
  },

  _getHitsHierarchicalFacetsAttributes: function(state) {
    var out = [];

    return state.hierarchicalFacets.reduce(
      // ask for as much levels as there's hierarchical refinements
      function getHitsAttributesForHierarchicalFacet(allAttributes, hierarchicalFacet) {
        var hierarchicalRefinement = state.getHierarchicalRefinement(hierarchicalFacet.name)[0];

        // if no refinement, ask for root level
        if (!hierarchicalRefinement) {
          allAttributes.push(hierarchicalFacet.attributes[0]);
          return allAttributes;
        }

        var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
        var level = hierarchicalRefinement.split(separator).length;
        var newAttributes = hierarchicalFacet.attributes.slice(0, level + 1);

        return allAttributes.concat(newAttributes);
      }, out);
  },

  _getDisjunctiveHierarchicalFacetAttribute: function(state, hierarchicalFacet, rootLevel) {
    var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
    if (rootLevel === true) {
      var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);
      var attributeIndex = 0;

      if (rootPath) {
        attributeIndex = rootPath.split(separator).length;
      }
      return [hierarchicalFacet.attributes[attributeIndex]];
    }

    var hierarchicalRefinement = state.getHierarchicalRefinement(hierarchicalFacet.name)[0] || '';
    // if refinement is 'beers > IPA > Flying dog',
    // then we want `facets: ['beers > IPA']` as disjunctive facet (parent level values)

    var parentLevel = hierarchicalRefinement.split(separator).length - 1;
    return hierarchicalFacet.attributes.slice(0, parentLevel + 1);
  },

  getSearchForFacetQuery: function(facetName, query, maxFacetHits, state) {
    var stateForSearchForFacetValues = state.isDisjunctiveFacet(facetName) ?
      state.clearRefinements(facetName) :
      state;
    var searchForFacetSearchParameters = {
      facetQuery: query,
      facetName: facetName
    };
    if (typeof maxFacetHits === 'number') {
      searchForFacetSearchParameters.maxFacetHits = maxFacetHits;
    }
    return merge(
      {},
      requestBuilder._getHitsSearchParams(stateForSearchForFacetValues),
      searchForFacetSearchParameters
    );
  }
};

module.exports = requestBuilder;


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Table", function() { return /* reexport */ src_Table; });
__webpack_require__.d(__webpack_exports__, "Header", function() { return /* reexport */ src_Header; });
__webpack_require__.d(__webpack_exports__, "Content", function() { return /* reexport */ src_Content; });
__webpack_require__.d(__webpack_exports__, "Button", function() { return /* reexport */ src_Button; });
__webpack_require__.d(__webpack_exports__, "Box", function() { return /* reexport */ src_Box; });
__webpack_require__.d(__webpack_exports__, "Sidesheet", function() { return /* reexport */ src_Sidesheet; });
__webpack_require__.d(__webpack_exports__, "Skeleton", function() { return /* reexport */ src_Skeleton; });
__webpack_require__.d(__webpack_exports__, "Toast", function() { return /* reexport */ src_Toast; });
__webpack_require__.d(__webpack_exports__, "Input", function() { return /* reexport */ src_Input; });
__webpack_require__.d(__webpack_exports__, "Textarea", function() { return /* reexport */ src_Textarea; });
__webpack_require__.d(__webpack_exports__, "Select", function() { return /* reexport */ src_Select; });
__webpack_require__.d(__webpack_exports__, "Avatar", function() { return /* reexport */ src_Avatar_Avatar; });
__webpack_require__.d(__webpack_exports__, "AlgoliaSearch", function() { return /* reexport */ src_AlgoliaSearch; });
__webpack_require__.d(__webpack_exports__, "Badge", function() { return /* reexport */ src_Badge; });
__webpack_require__.d(__webpack_exports__, "SpinningDots", function() { return /* reexport */ src_SpinningDots; });
__webpack_require__.d(__webpack_exports__, "Dropdown", function() { return /* reexport */ Dropdown; });
__webpack_require__.d(__webpack_exports__, "DropdownTrigger", function() { return /* reexport */ DropdownTrigger; });
__webpack_require__.d(__webpack_exports__, "DropdownContent", function() { return /* reexport */ DropdownContent; });
__webpack_require__.d(__webpack_exports__, "DropdownLabel", function() { return /* reexport */ DropdownLabel; });
__webpack_require__.d(__webpack_exports__, "DropdownItem", function() { return /* reexport */ DropdownItem; });
__webpack_require__.d(__webpack_exports__, "DropdownSeparator", function() { return /* reexport */ DropdownSeparator; });
__webpack_require__.d(__webpack_exports__, "Feedback", function() { return /* reexport */ src_Feedback; });
__webpack_require__.d(__webpack_exports__, "Text", function() { return /* reexport */ Typography_Text; });
__webpack_require__.d(__webpack_exports__, "Heading", function() { return /* reexport */ Typography_Heading; });
__webpack_require__.d(__webpack_exports__, "UnorderedList", function() { return /* reexport */ UnorderedList_UnorderedList; });
__webpack_require__.d(__webpack_exports__, "ListItem", function() { return /* reexport */ ListItem_ListItem; });
__webpack_require__.d(__webpack_exports__, "Tabs", function() { return /* reexport */ Tabs_Tabs; });
__webpack_require__.d(__webpack_exports__, "TabsList", function() { return /* reexport */ Tabs_TabsList; });
__webpack_require__.d(__webpack_exports__, "TabsTab", function() { return /* reexport */ TabsTab; });
__webpack_require__.d(__webpack_exports__, "TabsPanel", function() { return /* reexport */ TabsPanel; });

// EXTERNAL MODULE: external {"root":"@emotion/react","commonjs2":"@emotion/react","commonjs":"@emotion/react","amd":"@emotion/react"}
var react_ = __webpack_require__(1);

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(0);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./src/Typography/Text.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Text_Text extends external_root_React_commonjs2_react_commonjs_react_amd_react_["PureComponent"] {
  render() {
    const {
      className,
      bold,
      color,
      small,
      is,
      ...props
    } = this.props;
    const Tag = is;
    return Object(react_["jsx"])(Tag, _extends({
      className: classnames_default()(className, color, {
        "font-semibold": Boolean(bold),
        "font-normal": !Boolean(bold),
        "text-base": !Boolean(small),
        "text-sm": Boolean(small)
      })
    }, props));
  }

}

_defineProperty(Text_Text, "propTypes", {
  bold: prop_types_default.a.bool,
  color: prop_types_default.a.string,
  is: prop_types_default.a.oneOf(["span", "p", "li"]).isRequired,
  className: prop_types_default.a.string
});

_defineProperty(Text_Text, "defaultProps", {
  className: null,
  color: "text-foreground",
  is: "span"
});

/* harmony default export */ var Typography_Text = (Text_Text);
// CONCATENATED MODULE: ./src/Table/index.js
function Table_extends() { Table_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Table_extends.apply(this, arguments); }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsxRuntime classic */

/** @jsx jsx */






var Table_ref =  true ? {
  name: "jk7dkw",
  styles: "width:100%;max-width:100%"
} : undefined;

const Table = ({
  children,
  ...props
}) => Object(react_["jsx"])("table", Table_extends({
  css: Table_ref
}, props), children);

var Table_ref2 =  true ? {
  name: "s6prfl",
  styles: "border-bottom-width:1px;--tw-border-opacity:1;border-color:rgba(234, 234, 234, var(--tw-border-opacity));border-radius:5px"
} : undefined;

Table.Head = ({
  children,
  ...props
}) => Object(react_["jsx"])("thead", Table_extends({
  css: Table_ref2
}, props), children);

var Table_ref3 =  true ? {
  name: "14tkg57",
  styles: "--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))"
} : undefined;

Table.Body = ({
  children,
  ...props
}) => Object(react_["jsx"])("tbody", Table_extends({
  css: Table_ref3
}, props), children);

var Table_ref4 =  true ? {
  name: "1sn1294",
  styles: "padding-left:1.5rem;padding-right:1.5rem;padding-top:0.5rem;padding-bottom:0.5rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));text-align:left;font-size:0.75rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity));text-transform:uppercase;letter-spacing:0.05em"
} : undefined;

Table.HeaderCell = ({
  children,
  ...props
}) => Object(react_["jsx"])("th", Table_extends({
  css: Table_ref4
}, props), children);

Table.Row = ({
  children,
  onClick,
  isSelectable,
  ...props
}) => Object(react_["jsx"])("tr", Table_extends({
  onClick: onClick,
  css: [onClick || isSelectable ? {
    ":hover": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(249, 250, 251, var(--tw-bg-opacity))"
    },
    ":focus": {
      "outline": "2px solid transparent",
      "outlineOffset": "2px",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(249, 250, 251, var(--tw-bg-opacity))"
    },
    "cursor": "pointer"
  } : null,  true ? "" : undefined,  true ? "" : undefined]
}, props), children);

var Table_ref5 =  true ? {
  name: "16hw2j3",
  styles: "padding-left:1.5rem;padding-right:1.5rem;padding-top:1rem;padding-bottom:1rem"
} : undefined;

Table.Cell = ({
  children,
  className,
  ...props
}) => Object(react_["jsx"])("td", Table_extends({
  css: Table_ref5,
  className: className
}, props), children);

var _ref6 =  true ? {
  name: "hdknak",
  styles: "display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
} : undefined;

Table.TextCell = ({
  primary,
  primaryClassname,
  secondary,
  secondaryClassname
}) => Object(react_["jsx"])(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Fragment, null, primary && Object(react_["jsx"])(Typography_Text, {
  small: true,
  css: ["display:block;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", secondary && {
    "marginBottom": "0.125rem"
  },  true ? "" : undefined,  true ? "" : undefined],
  className: primaryClassname
}, primary), secondary && Object(react_["jsx"])(Typography_Text, {
  small: true,
  color: "text-accent-five",
  css: _ref6,
  className: secondaryClassname
}, secondary));

Table.propTypes = {
  children: prop_types_default.a.node.isRequired,
  className: prop_types_default.a.string
};
Table.Head.propTypes = {
  children: prop_types_default.a.node.isRequired,
  className: prop_types_default.a.string
};
Table.Body.propTypes = {
  children: prop_types_default.a.node.isRequired,
  className: prop_types_default.a.string
};
Table.HeaderCell.propTypes = {
  children: prop_types_default.a.node.isRequired,
  className: prop_types_default.a.string
};
Table.Row.propTypes = {
  children: prop_types_default.a.node.isRequired,
  className: prop_types_default.a.string,
  onClick: prop_types_default.a.func
};
Table.Cell.propTypes = {
  children: prop_types_default.a.node.isRequired,
  className: prop_types_default.a.string
};
Table.TextCell.propTypes = {
  primary: prop_types_default.a.node,
  primaryClassname: prop_types_default.a.string,
  secondary: prop_types_default.a.node,
  secondaryClassname: prop_types_default.a.string
};
/* harmony default export */ var src_Table = (Table);
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function extends_extends() {
  extends_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return extends_extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ var emotion_memoize_browser_esm = (memoize);

// CONCATENATED MODULE: ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var is_prop_valid_browser_esm_index = emotion_memoize_browser_esm(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ var is_prop_valid_browser_esm = (is_prop_valid_browser_esm_index);

// CONCATENATED MODULE: ./node_modules/@emotion/utils/dist/utils.browser.esm.js
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};



// CONCATENATED MODULE: ./node_modules/@emotion/hash/dist/hash.browser.esm.js
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ var hash_browser_esm = (murmur2);

// CONCATENATED MODULE: ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ var unitless_browser_esm = (unitlessKeys);

// CONCATENATED MODULE: ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = emotion_memoize_browser_esm(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var serialize_browser_esm_processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitless_browser_esm[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (false) { var hyphenatedCache, hyphenPattern, msPattern, oldProcessStyleValue, contentValues, contentValuePattern; }

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (false) {}

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (false) {}

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (false) {}

        break;
      }

    case 'string':
      if (false) { var replaced, matched; }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if (false) {}

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + serialize_browser_esm_processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + serialize_browser_esm_processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (false) {}

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (false) {} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serialize_browser_esm_serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if (false) {}

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if (false) {}

      styles += strings[i];
    }
  }

  var sourceMap;

  if (false) {} // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = hash_browser_esm(styles) + identifierName;

  if (false) {}

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};



// CONCATENATED MODULE: ./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js







var testOmitPropsOnStringTag = is_prop_valid_browser_esm;

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
  var shouldForwardProp;

  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  return shouldForwardProp;
};

var emotion_styled_base_browser_esm_ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";

var emotion_styled_base_browser_esm_createStyled = function createStyled(tag, options) {
  if (false) {}

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
  }

  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if (false) {}

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        if (false) {}

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = Object(react_["withEmotionCache"])(function (props, cache, ref) {
      var finalTag = shouldUseAs && props.as || baseTag;
      var className = '';
      var classInterpolations = [];
      var mergedProps = props;

      if (props.theme == null) {
        mergedProps = {};

        for (var key in props) {
          mergedProps[key] = props[key];
        }

        mergedProps.theme = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"])(react_["ThemeContext"]);
      }

      if (typeof props.className === 'string') {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }

      var serialized = serialize_browser_esm_serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
      var rules = insertStyles(cache, serialized, typeof finalTag === 'string');
      className += cache.key + "-" + serialized.name;

      if (targetClassName !== undefined) {
        className += " " + targetClassName;
      }

      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
      var newProps = {};

      for (var _key in props) {
        if (shouldUseAs && _key === 'as') continue;

        if ( // $FlowFixMe
        finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }

      newProps.className = className;
      newProps.ref = ref;
      var ele = /*#__PURE__*/Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"])(finalTag, newProps);

      return ele;
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "production" !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, extends_extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles);
    };

    return Styled;
  };
};

/* harmony default export */ var emotion_styled_base_browser_esm = (emotion_styled_base_browser_esm_createStyled);

// CONCATENATED MODULE: ./src/Typography/Heading.js
function Heading_extends() { Heading_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Heading_extends.apply(this, arguments); }

function Heading_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Heading_Heading extends external_root_React_commonjs2_react_commonjs_react_amd_react_["PureComponent"] {
  render() {
    const {
      className,
      color,
      size,
      ...props
    } = this.props;
    const HTag = `h${this.props.size}`;
    return Object(react_["jsx"])(HTag, Heading_extends({
      className: classnames_default()("", className, {
        "text-4xl font-bold tracking-tighter": size == 1,
        "text-3xl font-semibold tracking-tighter": size == 2,
        "text-2xl font-semibold tracking-tight": size == 3,
        "text-xl font-semibold tracking-tight": size == 4,
        "text-lg font-semibold": size == 5,
        "text-normal font-normal": size == 6,
        "text-foreground": color == "default",
        "text-error": color == "danger"
      })
    }, props));
  }

}

Heading_defineProperty(Heading_Heading, "propTypes", {
  /**
   * Each size represents its corresponding Heading element.
   */
  size: prop_types_default.a.oneOf([1, 2, 3, 4, 5, 6]).isRequired,

  /**
   * You can set any other available color
   */
  color: prop_types_default.a.oneOf(["default", "danger"]).isRequired,
  className: prop_types_default.a.string
});

Heading_defineProperty(Heading_Heading, "defaultProps", {
  size: 1,
  color: "default",
  className: ""
});

/* harmony default export */ var Typography_Heading = (Heading_Heading);
// CONCATENATED MODULE: ./src/Header/index.js


function Header_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }



/** @jsxRuntime classic */

/** @jsx jsx */





var Header_ref =  true ? {
  name: "1lhdbhi",
  styles: "[role=\"tablist\"]{margin-left:2.5rem;margin-right:2.5rem;;}"
} : undefined;

const Nav = emotion_styled_base_browser_esm("div",  true ? {
  target: "e5yo00a0"
} : undefined)(() => [Header_ref],  true ? "" : undefined);

var Header_ref2 =  true ? {
  name: "g1uvsi",
  styles: "position:relative;width:100%;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))"
} : undefined;

var Header_ref3 =  true ? {
  name: "1ug6i4f",
  styles: "display:flex;flex-direction:row;align-items:center;min-width:0px;padding-top:0.5rem;padding-bottom:0.5rem"
} : undefined;

var Header_ref4 =  true ? {
  name: "1h5hd82",
  styles: "overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-right:0.125rem;font-weight:600"
} : undefined;

var Header_ref5 =  true ? {
  name: "psasdh",
  styles: "display:flex;flex-direction:row;align-items:center;justify-content:flex-end;margin-left:0.5rem"
} : undefined;

var Header_ref6 =  true ? {
  name: "1kjf4md",
  styles: "display:inline-flex;margin-left:0px"
} : undefined;

const Header = ({
  title,
  actions,
  nav
}) => Object(react_["jsx"])("div", {
  css: Header_ref2
}, Object(react_["jsx"])("div", {
  css: ["display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding-left:2.5rem;padding-right:2.5rem;", nav ? {
    "paddingTop": "1rem",
    "paddingBottom": "0.25rem"
  } : {
    "paddingTop": "1rem",
    "paddingBottom": "1rem"
  },  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined]
}, Object(react_["jsx"])("div", {
  css: Header_ref3
}, Object(react_["jsx"])(Typography_Heading, {
  size: 3,
  css: Header_ref4
}, title)), actions && Object(react_["jsx"])("div", {
  css: Header_ref5
}, Object(react_["jsx"])("div", {
  css: Header_ref6
}, actions))), nav && Object(react_["jsx"])(Nav, null, nav));

Header.defaultProps = {
  title: null,
  actions: null,
  nav: null
};
Header.propTypes = {
  title: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]).isRequired,
  actions: prop_types_default.a.node,
  nav: prop_types_default.a.node,
  filters: prop_types_default.a.node
};
/* harmony default export */ var src_Header = (Header);
// CONCATENATED MODULE: ./src/Content/index.js





const Content = ({
  children,
  size,
  className,
  bg
}) => {
  const base = Object(react_["jsx"])("div", {
    className: classnames_default()("flex-1 relative overflow-y-auto focus:outline-none", {
      [`bg-${bg}`]: bg
    }, className)
  }, Object(react_["jsx"])("div", {
    className: "px-10 py-8"
  }, Object(react_["jsx"])("div", {
    className: classnames_default()("mx-auto", {
      "max-w-xs": size === "xsmall",
      "max-w-2xl": size === "small",
      "max-w-5xl": size === "default" || !size,
      "max-w-full": size === "full"
    })
  }, children)));

  return base;
};

Content.defaultProps = {
  bg: "white"
};
Content.propTypes = {
  children: prop_types_default.a.node,
  size: prop_types_default.a.string,
  className: prop_types_default.a.string,

  /**
   * Overrides the default background color.
   */
  bg: prop_types_default.a.string
};
/* harmony default export */ var src_Content = (Content);
// CONCATENATED MODULE: ./src/SpinningDots/index.js


function SpinningDots_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsxRuntime classic */

/** @jsx jsx */





var SpinningDots_ref =  true ? {
  name: "fhgur2",
  styles: "display:inline-flex;position:relative;vertical-align:middle;height:0.5rem;text-align:center;opacity:0.5;width:2.5rem"
} : undefined;

var SpinningDots_ref2 =  true ? {
  name: "1lxykmj",
  styles: "display:flex;width:100%;justify-content:space-around"
} : undefined;

const SpinningDots = ({
  className,
  variant
}) => {
  const StyledIcon = emotion_styled_base_browser_esm("i",  true ? {
    target: "ejico0d0"
  } : undefined)(() => [{
    "animation": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    "height": "0px",
    "width": "0px",
    "borderRadius": "9999px",
    "borderWidth": "3px"
  }, variant == "default" && {
    "--tw-text-opacity": "1",
    "color": "rgba(68, 68, 68, var(--tw-text-opacity))"
  }, variant == "light" && {
    "--tw-text-opacity": "1",
    "color": "rgba(229, 231, 235, var(--tw-text-opacity))"
  }, variant == "dark" && {
    "--tw-text-opacity": "1",
    "color": "rgba(17, 17, 17, var(--tw-text-opacity))"
  }],  true ? "" : undefined);

  return Object(react_["jsx"])("div", {
    css: ["display:inline;padding:0px;height:auto;width:100%;text-align:center;", className && className,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined]
  }, Object(react_["jsx"])("span", {
    css: SpinningDots_ref
  }, Object(react_["jsx"])("div", {
    css: SpinningDots_ref2
  }, Object(react_["jsx"])(StyledIcon, {
    style: {
      animationDelay: "-.3s"
    }
  }), Object(react_["jsx"])(StyledIcon, {
    style: {
      animationDelay: "-.15s"
    }
  }), Object(react_["jsx"])(StyledIcon, null))));
};

SpinningDots.propTypes = {
  className: prop_types_default.a.string,
  variant: prop_types_default.a.oneOf(["default", "inherit", "light", "dark"])
};
SpinningDots.defaultProps = {
  variant: "default"
};
/* harmony default export */ var src_SpinningDots = (SpinningDots);
// CONCATENATED MODULE: ./src/Button/index.js
function Button_extends() { Button_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Button_extends.apply(this, arguments); }

function Button_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsxRuntime classic */

/** @jsx jsx */






var Button_ref =  true ? {
  name: "ro053d",
  styles: "display:flex;margin-right:0.5rem"
} : undefined;

var Button_ref2 =  true ? {
  name: "1h52dri",
  styles: "overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
} : undefined;

var Button_ref3 =  true ? {
  name: "1gj7rap",
  styles: "display:flex;margin-left:0.5rem"
} : undefined;

const Button = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.forwardRef(({
  disabled,
  iconBefore,
  iconAfter,
  onClick,
  label,
  type,
  size,
  variant,
  block,
  isLoading,
  className,
  ...rest
}, ref) => {
  const ButtonContent = Object(react_["jsx"])("div", {
    css: ["display:flex;align-items:center;justify-content:center;", isLoading ? {
      "opacity": "0"
    } : {
      "opacity": "1"
    },  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined]
  }, iconBefore && Object(react_["jsx"])("span", {
    css: Button_ref
  }, /*#__PURE__*/Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(iconBefore)), Object(react_["jsx"])("span", {
    css: Button_ref2
  }, label), iconAfter && Object(react_["jsx"])("span", {
    css: Button_ref3
  }, /*#__PURE__*/Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(iconAfter)));
  return Object(react_["jsx"])("button", Button_extends({
    type: type,
    onClick: onClick,
    disabled: disabled || isLoading,
    className: className,
    ref: ref,
    css: ["transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;position:relative;border-width:1px;align-items:center;display:flex;font-weight:500;border-radius:5px;:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);}justify-content:center;max-width:100%;cursor:pointer;", disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(136, 136, 136, var(--tw-text-opacity))",
      ":hover": {
        "--tw-text-opacity": "1",
        "color": "rgba(136, 136, 136, var(--tw-text-opacity))",
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(249, 250, 251, var(--tw-bg-opacity))"
      },
      ":active": {
        "--tw-text-opacity": "1",
        "color": "rgba(136, 136, 136, var(--tw-text-opacity))",
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(249, 250, 251, var(--tw-bg-opacity))"
      },
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(249, 250, 251, var(--tw-bg-opacity))",
      "cursor": "not-allowed"
    }, variant == "default" && !disabled && {
      "borderColor": "transparent",
      ":hover": {
        "--tw-border-opacity": "1",
        "borderColor": "rgba(102, 102, 102, var(--tw-border-opacity))",
        "--tw-text-opacity": "1",
        "color": "rgba(0, 0, 0, var(--tw-text-opacity))",
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(249, 250, 251, var(--tw-bg-opacity))"
      },
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(0, 0, 0, var(--tw-bg-opacity))",
      ":active": {
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(0, 0, 0, var(--tw-bg-opacity))",
        "--tw-text-opacity": "1",
        "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
      }
    }, variant == "secondary" && !disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(102, 102, 102, var(--tw-border-opacity))",
      ":hover": {
        "--tw-border-opacity": "1",
        "borderColor": "rgba(0, 0, 0, var(--tw-border-opacity))",
        "--tw-text-opacity": "1",
        "color": "rgba(0, 0, 0, var(--tw-text-opacity))",
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(249, 250, 251, var(--tw-bg-opacity))"
      },
      "--tw-text-opacity": "1",
      "color": "rgba(102, 102, 102, var(--tw-text-opacity))",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
      ":active": {
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(0, 0, 0, var(--tw-bg-opacity))",
        "--tw-text-opacity": "1",
        "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
      }
    }, variant == "danger" && !disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(197, 0, 0, var(--tw-border-opacity))",
      ":hover": {
        "--tw-border-opacity": "1",
        "borderColor": "rgba(197, 0, 0, var(--tw-border-opacity))",
        "--tw-text-opacity": "1",
        "color": "rgba(197, 0, 0, var(--tw-text-opacity))",
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(249, 250, 251, var(--tw-bg-opacity))"
      },
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(197, 0, 0, var(--tw-bg-opacity))",
      ":active": {
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(0, 0, 0, var(--tw-bg-opacity))",
        "--tw-text-opacity": "1",
        "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
      }
    }, variant == "minimal" && !disabled && {
      "borderColor": "transparent",
      "backgroundColor": "transparent",
      ":hover": {
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(229, 231, 235, var(--tw-bg-opacity))",
        "--tw-text-opacity": "1",
        "color": "rgba(51, 51, 51, var(--tw-text-opacity))"
      },
      ":active": {
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(249, 250, 251, var(--tw-bg-opacity))",
        "--tw-text-opacity": "1",
        "color": "rgba(102, 102, 102, var(--tw-text-opacity))"
      },
      "--tw-text-opacity": "1",
      "color": "rgba(0, 0, 0, var(--tw-text-opacity))"
    }, variant == "brand-p" && !disabled && {
      "borderColor": "transparent",
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
      ":hover": {
        "--tw-text-opacity": "1",
        "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
        "--tw-bg-opacity": "0.9"
      },
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(99, 89, 249, var(--tw-bg-opacity))",
      ":active": {
        "--tw-bg-opacity": "0.9",
        "--tw-text-opacity": "1",
        "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
      }
    }, variant == "brand-s" && !disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(128, 121, 139, var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
      ":hover": {
        "--tw-text-opacity": "1",
        "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
        "opacity": "0.8"
      },
      "backgroundColor": "transparent",
      ":active": {
        "--tw-text-opacity": "1",
        "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
      }
    }, size == "small" && {
      "paddingLeft": "1rem",
      "paddingRight": "1rem",
      "height": "2rem",
      "lineHeight": "1.25rem",
      "fontSize": "0.875rem"
    }, size == "normal" && {
      "paddingLeft": "1.5rem",
      "paddingRight": "1.5rem",
      "height": "2.25rem",
      "lineHeight": "1.25rem",
      "fontSize": "0.875rem"
    }, size == "large" && {
      "paddingLeft": "3rem",
      "paddingRight": "3rem",
      "height": "2.5rem",
      "lineHeight": "1.5rem",
      "fontSize": "1rem"
    }, block && {
      "width": "100%"
    },  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined]
  }, rest), isLoading && Object(react_["jsx"])(src_SpinningDots, {
    variant: "inherit",
    className: {
      "position": "absolute"
    }
  }), ButtonContent);
});
Button.propTypes = {
  disabled: prop_types_default.a.bool,
  className: prop_types_default.a.string,
  iconBefore: prop_types_default.a.element,
  iconAfter: prop_types_default.a.element,
  label: prop_types_default.a.string,
  onClick: prop_types_default.a.func,
  type: prop_types_default.a.string,
  variant: prop_types_default.a.oneOf(["default", "secondary", "danger", "disabled", "minimal", "brand-p", "brand-s"]),
  size: prop_types_default.a.oneOf(["small", "normal", "large"]),
  isLoading: prop_types_default.a.bool
};
Button.defaultProps = {
  size: "normal",
  variant: "default",
  type: "button",
  isLoading: false,
  disabled: false
};
/* harmony default export */ var src_Button = (Button);
// CONCATENATED MODULE: ./src/Box/index.js





const Box = ({
  flex,
  alignItems,
  justifyContent,
  backgroundColor,
  flexDirection,
  flexWrap,
  children,
  className,
  rootCard,
  noPadding
}) => {
  return Object(react_["jsx"])("div", {
    className: classnames_default()("overflow-hidden", className, {
      flex: Boolean(flex),
      [`items-${alignItems}`]: Boolean(alignItems),
      [`justify-${justifyContent}`]: Boolean(justifyContent),
      [`bg-${backgroundColor}`]: Boolean(backgroundColor),
      [`flex-${flexDirection}`]: Boolean(flexDirection),
      [`mb-4 border border-border rounded shadow-sm`]: Boolean(rootCard),
      [`px-6 py-4`]: !Boolean(noPadding),
      [`flex-${flexWrap}`]: Boolean(flexWrap)
    })
  }, children);
};

Box.defaultProps = {
  flex: false,
  alignItems: null,
  justifyContent: null,
  backgroundColor: "white",
  flexDirection: null,
  rootCard: false,
  noPadding: false,
  flexWrap: null
};
Box.propTypes = {
  /**
   * Sets the background color
   */
  backgroundColor: prop_types_default.a.string,

  /**
   * When true, renders the Box with `display:flex`
   */
  flex: prop_types_default.a.bool,

  /**
   * Controls item alignment with `align-items`. Only works when flex is true
   */
  alignItems: prop_types_default.a.oneOf(["start", "end", "center", "baseline", "stretch"]),

  /**
   * Controls item positioning with `justify-content`. Only works when flex is true
   */
  justifyContent: prop_types_default.a.oneOf(["start", "end", "center", "between", "around", "evenly"]),

  /**
   * Controls the direction of flex items with `flex-direction`. Only works when flex is true
   */
  flexDirection: prop_types_default.a.oneOf(["row", "row-reverse", "col", "col-reverse"]),

  /**
   * Controls how flex items wrap with `flex-wrap`. Only works when flex is true
   */
  flexWrap: prop_types_default.a.oneOf(["wrap", "wrap-reverse", "nowrap"]),

  /**
   * Renders the content
   */
  children: prop_types_default.a.node,

  /**
   * Adds border and shadow to the Box. Useful when using Box as the parent element of a section
   */
  rootCard: prop_types_default.a.bool,

  /**
   * Removes the padding from the Box. Useful when using Box as a standard `div`.
   */
  noPadding: prop_types_default.a.bool,
  className: prop_types_default.a.string
};
/* harmony default export */ var src_Box = (Box);
// EXTERNAL MODULE: external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"}
var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_ = __webpack_require__(5);
var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_);

// EXTERNAL MODULE: ./node_modules/classnames/bind.js
var bind = __webpack_require__(13);
var bind_default = /*#__PURE__*/__webpack_require__.n(bind);

// CONCATENATED MODULE: ./src/Sidesheet/index.js







function XIcon() {
  return Object(react_["jsx"])("svg", {
    fill: "none",
    className: "text-accent-four",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    width: "16px",
    height: "16px"
  }, Object(react_["jsx"])("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M6 18L18 6M6 6l12 12"
  }));
}

const SidesheetContent = ({
  id,
  children
}) => {
  if (typeof window === "undefined") return null;
  let element = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(document.getElementById(id) || document.createElement("div"));
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    if (!document.getElementById(id)) {
      element.current.id = id;
      document.body.appendChild(element.current);
    }

    return () => {
      if (element.current.parentElement) {
        element.current.parentElement.removeChild(element.current);
      }
    };
  }, [id]);
  return /*#__PURE__*/Object(external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_["createPortal"])(children, element.current);
};

const Sidesheet = ({
  title,
  children,
  className,
  action,
  content,
  width = 400,
  onClose,
  isShown = false
}) => {
  const sideSheet = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])();
  const portal = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])();
  const [isOpened, setIsOpened] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false);
  const [transition, setTransition] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    let transitionTimeout;

    if (!isShown) {
      setTransition(false);
      transitionTimeout = setTimeout(() => setIsOpened(false), 300);
    } else {
      setIsOpened(true);
      transitionTimeout = setTimeout(() => setTransition(true), 100);
    }

    return () => clearTimeout(transitionTimeout);
  }, [isShown]);

  const closeTransition = () => {
    if (isOpened && transition) {
      onClose();
      setTransition(false);
      setTimeout(() => setIsOpened(false), 500);
    }
  };

  return Object(react_["jsx"])("div", {
    ref: sideSheet
  }, children, isOpened && Object(react_["jsx"])(SidesheetContent, {
    id: "sidesheet"
  }, Object(react_["jsx"])("div", {
    onClick: () => closeTransition(),
    className: bind_default()("fixed z-50 inset-0 opacity-25 duration-200 delay-100 transition", {
      "bg-accent-eight": transition,
      "bg-transparent": !transition
    })
  }), Object(react_["jsx"])("div", {
    ref: portal,
    style: {
      transition: `transform .2s cubic-bezier(.3,0,0,1)`,
      transform: transition ? `translateX(calc(100vw - ${width}px - 20px))` : `translateX(100vw)`,
      top: 0,
      bottom: 0,
      width: width,
      height: "calc(100% - 20px)"
    },
    className: "fixed z-50 min-w-0 bg-white duration-300 delay-200 h-full flex flex-col shadow-xl m-2 rounded"
  }, Object(react_["jsx"])(src_Box, {
    flex: true,
    alignItems: "center",
    className: "relative border-b border-border rounded rounded-b-none"
  }, Object(react_["jsx"])("div", {
    className: "text-foreground flex-auto truncate leading-6"
  }, title), Object(react_["jsx"])(src_Box, {
    flex: true,
    backgroundColor: "transparent",
    className: "cursor-pointer",
    noPadding: true
  }, Object(react_["jsx"])("div", {
    onClick: () => closeTransition()
  }, Object(react_["jsx"])(XIcon, null)))), Object(react_["jsx"])(src_Box, {
    flex: true,
    flexDirection: "col",
    className: "sidesheet-content relative overflow-y-auto flex-1 rounded"
  }, Object(react_["jsx"])(src_Box, {
    noPadding: true,
    flex: true,
    flexDirection: "col",
    className: "overflow-visible"
  }, content)), action && Object(react_["jsx"])(src_Box, {
    flex: true,
    justifyContent: "evenly",
    alignItems: "center",
    className: "sidesheet-action h-16 border-t border-border relative flex-initial rounded rounded-t-none"
  }, action))));
};

Sidesheet.propTypes = {
  content: prop_types_default.a.element,
  children: prop_types_default.a.element,
  className: prop_types_default.a.string,
  width: prop_types_default.a.string,
  action: prop_types_default.a.element,
  onClose: prop_types_default.a.func,
  isShown: prop_types_default.a.bool,
  title: prop_types_default.a.string
};
/* harmony default export */ var src_Sidesheet = (Sidesheet);
// CONCATENATED MODULE: ./src/Skeleton/index.js



/** @jsxRuntime classic */

/** @jsx jsx */





const animation = react_["keyframes"]`
  0% {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }`;

const StyledSkeleton = emotion_styled_base_browser_esm("span",  true ? {
  target: "e4rzf2q0"
} : undefined)(({
  width,
  height,
  vertical
}) => [`
  display: flex;
  border-radius: 5px;
  background-image: linear-gradient(
    270deg,
    #fafafa,
    #eaeaea,
    #eaeaea,
    #fafafa
  );
  background-size: 400% 100%;
  width: ${width}px;
  min-height: ${height}px;
`],  true ? "" : undefined);

const Skeleton = ({
  width,
  height,
  className,
  vertical
}) => Object(react_["jsx"])("div", {
  className: "skeleton",
  css: [vertical && {
    "display": "inline-flex",
    "alignItems": "flex-end",
    "justifyContent": "space-between",
    "marginRight": "0.5rem"
  },  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined]
}, Object(react_["jsx"])(StyledSkeleton, {
  className: className,
  width: width,
  height: height,
  vertical: vertical,
  css: ["flex-direction:column;",
  /*#__PURE__*/

  /*#__PURE__*/

  /*#__PURE__*/

  /*#__PURE__*/
  Object(react_["css"])("animation:", animation, " 8s ease-in-out infinite;" + ( true ? "" : undefined),  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined),  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined]
}));

Skeleton.propTypes = {
  width: prop_types_default.a.number,
  height: prop_types_default.a.number,
  className: prop_types_default.a.string,
  vertical: prop_types_default.a.bool
};
Skeleton.defaultProps = {
  width: 160,
  height: 24,
  vertical: false
};
/* harmony default export */ var src_Skeleton = (Skeleton);
// CONCATENATED MODULE: ./src/Toast/index.js
function Toast_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsxRuntime classic */

/** @jsx jsx */








var Toast_ref =  true ? {
  name: "1scx0rr",
  styles: "--tw-text-opacity:1;color:rgba(68, 68, 68, var(--tw-text-opacity))"
} : undefined;

function Toast_XIcon() {
  return Object(react_["jsx"])("svg", {
    fill: "none",
    css: Toast_ref,
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    role: "button",
    width: "16px",
    height: "16px"
  }, Object(react_["jsx"])("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M6 18L18 6M6 6l12 12"
  }));
}

const ToastContent = ({
  id,
  children
}) => {
  if (typeof window === "undefined") return null;
  let element = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(document.getElementById(id) || document.createElement("div"));
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    if (!document.getElementById(id)) {
      element.current.id = id;
      document.body.appendChild(element.current);
    }

    return () => {
      if (element.current.parentElement) {
        element.current.parentElement.removeChild(element.current);
      }
    };
  }, [id]);
  return /*#__PURE__*/Object(external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_["createPortal"])(children, element.current);
};

var Toast_ref2 =  true ? {
  name: "1066lcq",
  styles: "display:flex;justify-content:space-between;align-items:center"
} : undefined;

var Toast_ref3 =  true ? {
  name: "1bvnjn9",
  styles: "width:91.666667%"
} : undefined;

const Toast = ({
  text,
  error,
  success,
  showCloseIcon,
  hide,
  dismissTime = 6000,
  onCloseToast
}) => {
  const [open, setOpen] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(true);
  const [showToast, setShowToast] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(hide);

  const closeToast = () => {
    setShowToast(false);
    setOpen(false);

    if (onCloseToast) {
      onCloseToast();
    }
  };

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    if (dismissTime) {
      const interval = setInterval(() => {
        closeToast();
      }, dismissTime);
      return () => {
        clearInterval(interval);
      };
    }
  }, [dismissTime]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    setTimeout(() => {
      setShowToast(true);
    }, 10);
  }, []);

  if (open) {
    return Object(react_["jsx"])(ToastContent, {
      id: "toast-content"
    }, Object(react_["jsx"])("div", {
      css: ["position:fixed;z-index:50;width:25%;max-width:100%;padding:1.25rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));bottom:0px;border-radius:0.375rem;--tw-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);opacity:0;", error && {
        "--tw-text-opacity": "1",
        "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(238, 0, 0, var(--tw-bg-opacity))"
      }, success && {
        "--tw-text-opacity": "1",
        "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(99, 89, 249, var(--tw-bg-opacity))"
      }, showToast && {
        "opacity": "1"
      },  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined],
      style: {
        right: 20,
        transition: `all .4s cubic-bezier(.3,0,0,1)`,
        transform: showToast && `translate(0, -20px)`
      }
    }, Object(react_["jsx"])("div", {
      css: Toast_ref2
    }, Object(react_["jsx"])("div", {
      css: Toast_ref3
    }, Object(react_["jsx"])(Typography_Text, {
      small: true,
      color: (success || error) && {
        "--tw-text-opacity": "1",
        "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
      }
    }, text)), showCloseIcon && Object(react_["jsx"])("div", {
      onClick: () => closeToast()
    }, Object(react_["jsx"])(Toast_XIcon, null)))));
  } else {
    return null;
  }
};

Toast.propTypes = {
  success: prop_types_default.a.bool,
  showCloseIcon: prop_types_default.a.bool,
  hide: prop_types_default.a.bool,
  error: prop_types_default.a.bool,
  text: prop_types_default.a.string,
  dismissTime: prop_types_default.a.number
};
/* harmony default export */ var src_Toast = (Toast);
// CONCATENATED MODULE: ./src/Input/index.js
function Input_extends() { Input_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Input_extends.apply(this, arguments); }

function Input_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsxRuntime classic */

/** @jsx jsx */





var Input_ref =  true ? {
  name: "bjn8wh",
  styles: "position:relative"
} : undefined;

const Input = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.forwardRef(({
  onChange,
  inputClassName,
  className,
  variant,
  value,
  defaultValue,
  label,
  id,
  error,
  disabled,
  ...rest
}, ref) => {
  const handleChange = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])(event => {
    if (onChange) {
      onChange(event.target.value, event);
    }
  }, [onChange]);
  const brandDarkStyles = {
    "borderColor": "transparent",
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
    "--tw-bg-opacity": "0.2",
    "backgroundColor": "rgba(134, 131, 229, var(--tw-bg-opacity))",
    "::placeholder": {
      "--tw-placeholder-opacity": "1",
      "color": "rgba(134, 131, 229, var(--tw-placeholder-opacity))"
    },
    ":hover, :focus": {
      "borderColor": "transparent",
      "--tw-bg-opacity": "0.3"
    }
  };
  return Object(react_["jsx"])("div", {
    className: className
  }, label && Object(react_["jsx"])("label", {
    htmlFor: id,
    css: ["display:block;font-size:0.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgba(68, 68, 68, var(--tw-text-opacity));text-transform:none;margin-bottom:0.25rem;", variant === "brand-dark" && !disabled && {
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
    },  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined]
  }, label), Object(react_["jsx"])("div", {
    css: Input_ref
  }, Object(react_["jsx"])("input", Input_extends({
    id: id,
    ref: ref,
    onChange: handleChange // React does not pass defaultValue changes to the DOM after initial render
    // https://reactjs.org/docs/uncontrolled-components.html#default-values
    ,
    defaultValue: defaultValue,
    "aria-label": label,
    "aria-required": !!label,
    "aria-invalid": !!error,
    disabled: disabled,
    value: value,
    css: ["transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;display:block;width:100%;border-radius:5px;padding:0.5rem;border-width:1px;--tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);}font-family:inherit;@media (min-width: 640px){font-size:0.875rem;line-height:1.25rem;}", inputClassName && inputClassName, !error && !disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(0, 0, 0, var(--tw-text-opacity))",
      ":hover, :focus": {
        "--tw-border-opacity": "1",
        "borderColor": "rgba(102, 102, 102, var(--tw-border-opacity))"
      },
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(102, 102, 102, var(--tw-placeholder-opacity))"
      }
    }, disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(102, 102, 102, var(--tw-text-opacity))",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(244, 245, 247, var(--tw-bg-opacity))",
      "cursor": "not-allowed",
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(102, 102, 102, var(--tw-placeholder-opacity))"
      }
    }, !disabled && variant === "brand" && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(99, 89, 249, var(--tw-text-opacity))",
      ":hover, :focus": {
        "--tw-border-opacity": "1",
        "borderColor": "rgba(99, 89, 249, var(--tw-border-opacity))"
      },
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(136, 136, 136, var(--tw-placeholder-opacity))"
      }
    }, !disabled && variant === "brand-dark" && brandDarkStyles, error && {
      "--tw-text-opacity": "1",
      "color": "rgba(238, 0, 0, var(--tw-text-opacity))",
      "--tw-border-opacity": "1",
      "borderColor": "rgba(238, 0, 0, var(--tw-border-opacity))",
      ":hover, :focus": {
        "--tw-border-opacity": "1",
        "borderColor": "rgba(238, 0, 0, var(--tw-border-opacity))"
      },
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(238, 0, 0, var(--tw-placeholder-opacity))"
      }
    }, error && variant === "brand-dark" && [brandDarkStyles, `background-image: url(https://maxihost-assets.s3-sa-east-1.amazonaws.com/metal-ui/error-icon.svg);background-repeat: no-repeat;background-position-x: calc(100% - 16px);
                background-position-y: 9px;`],  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined]
  }, rest))));
});
Input.propTypes = {
  onChange: prop_types_default.a.func,
  inputClassName: prop_types_default.a.string,
  className: prop_types_default.a.string,
  value: prop_types_default.a.string,
  defaultValue: prop_types_default.a.string,
  label: prop_types_default.a.string,
  id: prop_types_default.a.string.isRequired,
  error: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  variant: prop_types_default.a.oneOf(["brand", "brand-dark"])
};
/* harmony default export */ var src_Input = (Input);
// CONCATENATED MODULE: ./src/Textarea/index.js
function Textarea_extends() { Textarea_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Textarea_extends.apply(this, arguments); }

/** @jsxRuntime classic */

/** @jsx jsx */




const Textarea = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.forwardRef(({
  onChange,
  textareaClassName,
  className,
  value,
  defaultValue,
  label,
  id,
  error,
  disabled,
  rows,
  variant,
  resize,
  ...rest
}, ref) => {
  const handleChange = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])(event => {
    if (onChange) {
      onChange(event.target.value);
    }
  }, [onChange]);
  return Object(react_["jsx"])("div", {
    className: className
  }, label && Object(react_["jsx"])("label", {
    htmlFor: id,
    css: ["display:block;font-size:0.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgba(68, 68, 68, var(--tw-text-opacity));margin-bottom:0.25rem;text-transform:none;", variant === "brand-dark" && !disabled && {
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
    },  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined]
  }, label), Object(react_["jsx"])("textarea", Textarea_extends({
    id: id,
    ref: ref,
    rows: rows,
    onChange: handleChange,
    defaultValue: defaultValue,
    "aria-label": label,
    "aria-required": !!label,
    "aria-invalid": !!error,
    disabled: disabled,
    value: value,
    css: ["transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;display:block;width:100%;border-radius:5px;padding:0.5rem;border-width:1px;--tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);}font-family:inherit;@media (min-width: 640px){font-size:0.875rem;line-height:1.5rem;}", textareaClassName && textareaClassName, !error && !disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(0, 0, 0, var(--tw-text-opacity))",
      ":hover, :focus": {
        "--tw-border-opacity": "1",
        "borderColor": "rgba(0, 0, 0, var(--tw-border-opacity))"
      },
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(102, 102, 102, var(--tw-placeholder-opacity))"
      }
    }, error && {
      "--tw-text-opacity": "1",
      "color": "rgba(238, 0, 0, var(--tw-text-opacity))",
      "--tw-border-opacity": "1",
      "borderColor": "rgba(238, 0, 0, var(--tw-border-opacity))",
      ":hover, :focus": {
        "--tw-border-opacity": "1",
        "borderColor": "rgba(238, 0, 0, var(--tw-border-opacity))"
      },
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(238, 0, 0, var(--tw-placeholder-opacity))"
      }
    }, disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(244, 245, 247, var(--tw-bg-opacity))",
      "cursor": "not-allowed",
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(102, 102, 102, var(--tw-placeholder-opacity))"
      }
    }, variant === "brand" && !disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(99, 89, 249, var(--tw-text-opacity))",
      ":hover, :focus": {
        "--tw-border-opacity": "1",
        "borderColor": "rgba(99, 89, 249, var(--tw-border-opacity))"
      },
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(136, 136, 136, var(--tw-placeholder-opacity))"
      }
    }, variant === "brand-dark" && !disabled && {
      "borderColor": "transparent",
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
      "--tw-bg-opacity": "0.2",
      "backgroundColor": "rgba(134, 131, 229, var(--tw-bg-opacity))",
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(134, 131, 229, var(--tw-placeholder-opacity))"
      },
      ":hover, :focus": {
        "borderColor": "transparent",
        "--tw-bg-opacity": "0.3"
      }
    }, resize && {
      "resize": "none"
    },  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined]
  }, rest)));
});
Textarea.defaultProps = {
  resize: true,
  rows: 3
};
Textarea.propTypes = {
  onChange: prop_types_default.a.func,
  textareaClassName: prop_types_default.a.string,
  className: prop_types_default.a.string,
  value: prop_types_default.a.string,
  defaultValue: prop_types_default.a.string,
  label: prop_types_default.a.string,
  id: prop_types_default.a.string.isRequired,
  error: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  rows: prop_types_default.a.number,
  variant: prop_types_default.a.oneOf(["brand", "brand-dark"]),
  resize: prop_types_default.a.bool.isRequired
};
/* harmony default export */ var src_Textarea = (Textarea);
// CONCATENATED MODULE: ./src/Select/index.js
function Select_extends() { Select_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Select_extends.apply(this, arguments); }

/** @jsxRuntime classic */

/** @jsx jsx */




const Select = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.forwardRef(({
  onChange,
  selectClassName,
  options,
  className,
  value,
  label,
  id,
  disabled,
  error,
  variant,
  ...rest
}, ref) => {
  const [internalValue, setInternalValue] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])("");
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    setInternalValue(value);
  }, [value]);
  const handleChange = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])(event => {
    setInternalValue(event.target.value);

    if (onChange) {
      onChange(event.target.value);
    }
  }, [setInternalValue, onChange]);
  return Object(react_["jsx"])("div", {
    className: className
  }, label && Object(react_["jsx"])("label", {
    css: ["display:block;font-size:0.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgba(68, 68, 68, var(--tw-text-opacity));text-transform:none;margin-bottom:0.25rem;", variant == "brand-dark" && !disabled && {
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
    },  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined],
    htmlFor: id
  }, label), Object(react_["jsx"])("div", {
    className: "relative"
  }, Object(react_["jsx"])("select", Select_extends({
    id: id,
    ref: ref,
    onChange: handleChange,
    value: internalValue,
    disabled: disabled,
    css: ["transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;border-width:1px;border-radius:5px;--tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);display:block;width:100%;padding-left:0.75rem;padding-right:2.5rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:1rem;line-height:1.5rem;:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);}font-family:inherit;@media (min-width: 640px){font-size:0.875rem;line-height:1.25rem;}", selectClassName && selectClassName, !error && !disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(0, 0, 0, var(--tw-text-opacity))",
      ":hover, :focus": {
        "--tw-border-opacity": "1",
        "borderColor": "rgba(102, 102, 102, var(--tw-border-opacity))"
      },
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(102, 102, 102, var(--tw-placeholder-opacity))"
      }
    }, error && {
      "--tw-text-opacity": "1",
      "color": "rgba(238, 0, 0, var(--tw-text-opacity))",
      "--tw-border-opacity": "1",
      "borderColor": "rgba(238, 0, 0, var(--tw-border-opacity))",
      ":hover, :focus": {
        "--tw-border-opacity": "1",
        "borderColor": "rgba(238, 0, 0, var(--tw-border-opacity))"
      },
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(238, 0, 0, var(--tw-placeholder-opacity))"
      }
    }, disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(102, 102, 102, var(--tw-text-opacity))",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(244, 245, 247, var(--tw-bg-opacity))",
      "cursor": "not-allowed",
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(102, 102, 102, var(--tw-placeholder-opacity))"
      }
    }, variant == "brand" && !disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(99, 89, 249, var(--tw-text-opacity))",
      ":hover, :focus": {
        "--tw-border-opacity": "1",
        "borderColor": "rgba(99, 89, 249, var(--tw-border-opacity))"
      },
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(136, 136, 136, var(--tw-placeholder-opacity))"
      }
    }, variant == "brand-dark" && !disabled && {
      "borderColor": "transparent",
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
      "--tw-bg-opacity": "0.2",
      "backgroundColor": "rgba(134, 131, 229, var(--tw-bg-opacity))",
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(134, 131, 229, var(--tw-placeholder-opacity))"
      },
      ":hover, :focus": {
        "borderColor": "transparent",
        "--tw-bg-opacity": "0.3"
      }
    },  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined]
  }, rest), options.map((item, index) => Object(react_["jsx"])("option", {
    key: `${item.value}-${index}`,
    value: item.value,
    disabled: item.disabled
  }, item.name)))));
});
Select.defaultProps = {
  options: []
};
Select.propTypes = {
  onChange: prop_types_default.a.func,
  selectClassName: prop_types_default.a.string,
  options: prop_types_default.a.array,
  className: prop_types_default.a.string,
  value: prop_types_default.a.string,
  label: prop_types_default.a.string,
  id: prop_types_default.a.string.isRequired,
  error: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  variant: prop_types_default.a.oneOf(["brand", "brand-dark"])
};
/* harmony default export */ var src_Select = (Select);
// CONCATENATED MODULE: ./src/Avatar/utils/getInitials.js
function getInitials_getInitials(name, fallback = '?') {
  if (!name || typeof name !== 'string') return fallback;
  return name.replace(/\s+/, ' ').split(' ') // Repeated spaces results in empty strings
  .slice(0, 2).map(v => v && v[0].toUpperCase()) // Watch out for empty strings
  .join('');
}
// CONCATENATED MODULE: ./src/Avatar/utils/hash.js
// http://erlycoder.com/49/javascript-hash-functions-to-convert-string-into-integer-hash-
function hashCode(s) {
  const str = String(s);
  let hash = 0;
  let char;
  if (str.trim().length === 0) return hash;

  for (let i = 0; i < str.length; i++) {
    char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char; // Convert to 32bit integer

    hash &= hash;
  }

  return Math.abs(hash);
}
// CONCATENATED MODULE: ./src/Avatar/styles/scales.js
/**
 * Neutrals and Blue are special.
 * They need more variations to properly express all of our UI.
 */
/* harmony default export */ var scales = ({
  neutral: {
    N1: '#F9F9FB',
    N2: '#F5F6F7',
    N3: '#EDF0F2',
    N4: '#E4E7EB',
    N5: '#C7CED4',
    N6: '#A6B1BB',
    N7: '#7B8B9A',
    // Large Text AA
    N8: '#66788A',
    // Normal Text AA
    N9: '#425A70',
    // Normal Text AAA
    N10: '#234361',
    // Normal Text AAA
    // Transparent variants.
    N1A: 'rgba(67, 90, 111, 0.04)',
    N2A: 'rgba(67, 90, 111, 0.06)',
    N3A: 'rgba(67, 90, 111, 0.09)',
    N4A: 'rgba(67, 90, 111, 0.14)',
    N5A: 'rgba(67, 90, 111, 0.3)',
    N6A: 'rgba(67, 90, 111, 0.47)',
    N7A: 'rgba(67, 90, 111, 0.7)',
    N8A: 'rgba(67, 90, 111, 0.81)'
  },
  blue: {
    B1: '#f7f9fd',
    B2: '#f1f7fc',
    B3: '#e9f2fa',
    B4: '#ddebf7',
    B5: '#b7d4ef',
    B6: '#8fbce6',
    B7: '#579ad9',
    // Large Text AA
    B8: '#3d8bd4',
    // Normal Text AA
    B9: '#1070ca',
    // Normal Text AAA
    B10: '#084b8a',
    // Normal Text AAA
    // Transparent variants.
    B1A: 'rgba(16, 112, 202, 0.04)',
    B2A: 'rgba(16, 112, 202, 0.06)',
    B3A: 'rgba(16, 112, 202, 0.09)',
    B4A: 'rgba(16, 112, 202, 0.14)',
    B5A: 'rgba(16, 112, 202, 0.3)',
    B6A: 'rgba(16, 112, 202, 0.47)',
    B7A: 'rgba(16, 112, 202, 0.7)',
    B8A: 'rgba(16, 112, 202, 0.81)'
  }
});
// CONCATENATED MODULE: ./src/Avatar/styles/palette.js

/* harmony default export */ var palette = ({
  neutral: {
    lightest: scales.neutral.N1,
    light: scales.neutral.N4,
    base: scales.neutral.N9,
    dark: scales.neutral.N10
  },
  blue: {
    lightest: scales.blue.B1,
    light: scales.blue.B4,
    base: scales.blue.B9,
    dark: scales.blue.B10
  },
  red: {
    lightest: '#fef6f6',
    light: '#fae2e2',
    base: '#ec4c47',
    dark: '#bf0e08'
  },
  orange: {
    lightest: '#fdf8f3',
    light: '#fae3cd',
    base: '#d9822b',
    dark: '#95591e'
  },
  yellow: {
    lightest: '#fef8e7',
    light: '#fbe6a2',
    base: '#f7d154',
    dark: '#7e6514'
  },
  green: {
    lightest: '#f1faf5',
    light: '#d4eee2',
    base: '#47b881',
    dark: '#00783e'
  },
  teal: {
    lightest: '#f1fbfc',
    light: '#d2eef3',
    base: '#14b5d0',
    dark: '#007489'
  },
  purple: {
    lightest: '#f8f7fc',
    light: '#eae7f8',
    base: '#735dd0',
    dark: '#37248f'
  }
});
// CONCATENATED MODULE: ./src/Avatar/styles/colors.js


/**
 * This object are functional colors being used the default theme.
 * A required property is required by the default theme NOT by Evergreen itself.
 */

/* harmony default export */ var colors = ({
  /**
   * Available on Pane as `<Pane background="tint1" />`
   * @property {string} background.tint1 - Lightest tinted background color. Required property.
   * @property {string} background.tint2 - Slightly darker tinted background color. Required property.
   * @property {string} background.overlay - color used for the overlay
   */
  background: {
    tint1: scales.neutral.N1,
    tint2: scales.neutral.N2,
    overlay: scales.neutral.N7A,
    // Non required.
    yellowTint: palette.yellow.lightest,
    greenTint: palette.green.lightest,
    orangeTint: palette.orange.lightest,
    redTint: palette.red.lightest,
    blueTint: palette.blue.lightest,
    purpleTint: palette.purple.lightest,
    tealTint: palette.teal.lightest
  },

  /**
   * Available on Pane as `<Pane borderBottom borderRight="muted" />`
   * @property {string} text.default - Required property.
   * @property {string} text.muted - Slightly lighter color than default. Required property.
   */
  border: {
    default: scales.neutral.N4,
    // Was BorderColors.muted in v3 and under.
    muted: scales.neutral.N3 // Was BorderColors.extraMuted in v3 and under

  },

  /**
   * Text colors available on Text as `<Text color="muted" />`.
   * @property {string} text.muted - Required property.
   * @property {string} text.default - Required property. Default for text.
   * @property {string} text.dark - Required property. Default for headings.
   */
  text: {
    muted: scales.neutral.N8,
    default: scales.neutral.N9,
    dark: scales.neutral.N10,
    selected: palette.blue.base,
    // Intent.
    success: palette.green.dark,
    info: palette.blue.dark,
    danger: palette.red.dark,
    warning: palette.orange.dark
  },

  /**
   * Icon colors available on Icon.
   * @property {string} icon.default - Required property.
   * @property {string} icon.muted - Required property.
   * @property {string} icon.selected - Required property.
   */
  icon: {
    default: scales.neutral.N8,
    muted: scales.neutral.N7,
    disabled: scales.neutral.N5A,
    selected: palette.blue.base,
    // Intent.
    success: palette.green.base,
    info: palette.blue.base,
    danger: palette.red.base,
    warning: palette.orange.base
  },

  /**
   * Used for Alerts and other (future) componentes that express intent.
   * @property {string} intent.none - Required property.
   * @property {string} intent.success - Required property.
   * @property {string} intent.danger - Required property.
   * @property {string} intent.warning - Required property.
   */
  intent: {
    none: palette.blue.base,
    success: palette.green.base,
    danger: palette.red.base,
    warning: palette.orange.base
  }
});
// CONCATENATED MODULE: ./src/Avatar/styles/fills.js


/**
 * Fills are used in Avatars and Badges.
 */

const fills = {};
fills.solid = {
  neutral: {
    color: 'white',
    backgroundColor: palette.neutral.base
  },
  blue: {
    color: 'white',
    backgroundColor: palette.blue.base
  },
  red: {
    color: 'white',
    backgroundColor: palette.red.base
  },
  orange: {
    color: 'white',
    backgroundColor: palette.orange.base
  },
  yellow: {
    color: palette.yellow.dark,
    backgroundColor: palette.yellow.base
  },
  green: {
    color: 'white',
    backgroundColor: palette.green.base
  },
  teal: {
    color: 'white',
    backgroundColor: palette.teal.base
  },
  purple: {
    color: 'white',
    backgroundColor: palette.purple.base
  }
};
fills.subtle = {
  neutral: {
    color: colors.text.default,
    backgroundColor: palette.neutral.light
  },
  blue: {
    color: palette.blue.dark,
    backgroundColor: palette.blue.light
  },
  red: {
    color: palette.red.dark,
    backgroundColor: palette.red.light
  },
  orange: {
    color: palette.orange.dark,
    backgroundColor: palette.orange.light
  },
  yellow: {
    color: palette.yellow.dark,
    backgroundColor: palette.yellow.light
  },
  green: {
    color: palette.green.dark,
    backgroundColor: palette.green.light
  },
  teal: {
    color: palette.teal.dark,
    backgroundColor: palette.teal.light
  },
  purple: {
    color: palette.purple.dark,
    backgroundColor: palette.purple.light
  }
};
fills.options = Object.keys(fills.solid);
/* harmony default export */ var styles_fills = (fills);
// CONCATENATED MODULE: ./src/Avatar/utils/getAvatarProps.js

/**
 * @param {boolean} isSolid
 * @param {string} color — automatic or actual color
 * @param {number} hashValue
 * @return {Object} { color, backgroundColor }
 */

const getAvatarProps = ({
  isSolid,
  color,
  hashValue
}) => {
  const appearances = styles_fills[isSolid ? 'solid' : 'subtle'];

  if (color === 'automatic') {
    const keys = Object.keys(appearances);
    const key = keys[hashValue % keys.length];
    return appearances[key];
  }

  return appearances[color];
};

/* harmony default export */ var utils_getAvatarProps = (getAvatarProps);
// CONCATENATED MODULE: ./src/Avatar/utils/getInitialsFontSize.js
/**
 * @param {number} size
 * @param {number} sizeLimitOneCharacter
 * @return {number} font size
 */
const getAvatarInitialsFontSize = (size, sizeLimitOneCharacter) => {
  if (size <= sizeLimitOneCharacter) {
    return Math.ceil(size / 2.2);
  }

  return Math.ceil(size / 2.6);
};

/* harmony default export */ var getInitialsFontSize = (getAvatarInitialsFontSize);
// CONCATENATED MODULE: ./src/Avatar/Avatar.js
function Avatar_extends() { Avatar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Avatar_extends.apply(this, arguments); }

function Avatar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class Avatar_Avatar extends external_root_React_commonjs2_react_commonjs_react_amd_react_["PureComponent"] {
  constructor(props, context) {
    super(props, context);

    Avatar_defineProperty(this, "getColorProps", () => {
      const {
        isSolid,
        color,
        hashValue: propsHashValue,
        name
      } = this.props;

      if (color === "automatic") {
        const hashValue = hashCode(propsHashValue || name);
        return utils_getAvatarProps({
          isSolid,
          color,
          hashValue
        });
      }

      return utils_getAvatarProps({
        isSolid,
        color
      });
    });
  }

  render() {
    const {
      className,
      size,
      name,
      isSolid,
      isDashed,
      hashValue: propsHashValue,
      getInitials,
      color: propsColor,
      sizeLimitOneCharacter,
      ...props
    } = this.props;
    const initialsFontSize = `${getInitialsFontSize(size, sizeLimitOneCharacter)}px`;
    let initials = getInitials(name);

    if (size <= sizeLimitOneCharacter) {
      initials = initials.slice(0, 1);
    }

    const colorProps = this.getColorProps();
    return Object(react_["jsx"])("div", Avatar_extends({
      className: classnames_default()("overflow-hidden relative inline-flex flex-shrink-0 justify-center", className, {
        "rounded-full": !Boolean(isDashed),
        "rounded border-2 border-dashed border-accent-four": Boolean(isDashed)
      }),
      style: {
        backgroundColor: isDashed ? "transparent" : colorProps.backgroundColor,
        width: size,
        height: size
      },
      title: name
    }, props), Object(react_["jsx"])("span", {
      className: classnames_default()("relative flex justify-center items-center", {
        "text-accent-four": Boolean(isDashed)
      }),
      style: {
        color: !isDashed && colorProps.color,
        fontSize: initialsFontSize,
        lineHeight: initialsFontSize,
        width: size,
        height: isDashed ? size - 4 : size
      }
    }, initials));
  }

}

Avatar_defineProperty(Avatar_Avatar, "propTypes", {
  /**
   * The size of the avatar.
   */
  size: prop_types_default.a.number,

  /**
   * The name used for the initials and title attribute.
   */
  name: prop_types_default.a.string,

  /**
   * The value used for the hash function.
   * The name is used as the hashValue by default.
   * When dealing with anonymous users you should use the id instead.
   */
  hashValue: prop_types_default.a.string,

  /**
   * When true, renders a solid avatar.
   */
  isSolid: prop_types_default.a.bool,

  /**
   * When true, renders a square avatar with dashed borders.
   * Overrides isSolid and color.
   */
  isDashed: prop_types_default.a.bool,

  /**
   * The color used for the avatar.
   * When the value is `automatic`, use the hash function to determine the color.
   */
  color: prop_types_default.a.string.isRequired,

  /**
   * Function to get the initials based on the name.
   */
  getInitials: prop_types_default.a.func,

  /**
   * When the size is smaller than this number, use a single initial for the avatar.
   */
  sizeLimitOneCharacter: prop_types_default.a.number
});

Avatar_defineProperty(Avatar_Avatar, "defaultProps", {
  color: "automatic",
  size: 24,
  isSolid: false,
  isDashed: false,
  getInitials: getInitials_getInitials,
  sizeLimitOneCharacter: 20
});

/* harmony default export */ var src_Avatar_Avatar = (Avatar_Avatar);
// CONCATENATED MODULE: ./src/AlgoliaSearch/providers/TabController/index.js


const TabControllerContext = /*#__PURE__*/Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["createContext"])({});
const useTabController = () => Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"])(TabControllerContext);
const navigationKeyTypes = {
  CURSOR: 'cursor',
  ARROW_DOWN: 'arrowDown',
  ARROW_UP: 'arrowUp',
  ENTER: 'enter'
};

const TabController = props => {
  const {
    children
  } = props; // keeps track of the currently focused element in the results panel

  const [activeElementIndex, setActiveElementIndex] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(0); // keeps track of the total number of elements that have been rendered

  const [totalElementsCount, setTotalElementsCount] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(0); // an array of integers, the number of results per section

  const [sectionLengthsArray, setSectionLengthsArray] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])([0]); // height of the scrollable container

  const [scrollableWindowHeight, setScrollableWindowHeight] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(300);
  const [searchInputHeight, setSearchInputHeight] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(null);
  const [controlsHeight, setControlsHeight] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(null); // distance to top of the page from the scrollable container

  const [scrollableWindowTopOffset, setScrollableWindowTopOffset] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(0); // scroll distance to be set and read from

  const [scrollDistance, setScrollDistance] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(0); // boolean to set whether or not the search box has text

  const [isResultsWindowOpen, setIsResultsWindowOpen] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false);
  const [scrollWindowRef, setScrollWindowRef] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(null);
  const [shouldBypassSearch, setShouldBypassSearch] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(true);
  const [enterKeyWasPressed, setEnterKeyWasPressed] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false); // allows for manual scroll disabling

  const [isScrollDisabled, setIsScrollDisabled] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false);

  const handleKeyNavigation = key => {
    switch (key) {
      case navigationKeyTypes.ARROW_UP:
        decrementActiveElementIndex();
        setShouldBypassSearch(true);
        break;

      case navigationKeyTypes.ARROW_DOWN:
        incrementActiveElementIndex();
        setShouldBypassSearch(true);
        break;

      case navigationKeyTypes.ENTER:
        setEnterKeyWasPressed(true);
        setShouldBypassSearch(true);
        break;

      default:
        break;
    }
  };

  const manuallySetActiveIndex = index => {
    setIsScrollDisabled(true);
    setActiveElementIndex(index);
  }; // resets the active element to the first one


  const resetActiveElementIndex = () => {
    setActiveElementIndex(0);
  }; // adds section results length


  const appendNewSectionLength = (sectionIndex, length) => {
    const copyOfSectionLengthsArray = [...sectionLengthsArray];
    copyOfSectionLengthsArray[sectionIndex] = length;
    setSectionLengthsArray(copyOfSectionLengthsArray);
    setTotalElementsCount(copyOfSectionLengthsArray.reduce((a, b) => a + b, 0));
  }; // increments the active index by 1 or resets to 0 if past total number of elements


  const incrementActiveElementIndex = () => {
    let nextIndex = activeElementIndex + 1;
    if (nextIndex >= totalElementsCount) nextIndex = 0;
    setIsScrollDisabled(false);
    setActiveElementIndex(nextIndex);
  }; // decrements the active index by 1 or resets to "totalElementsCount - 1" if index < 0


  const decrementActiveElementIndex = () => {
    let prevIndex = activeElementIndex - 1;
    if (prevIndex < 0) prevIndex = totalElementsCount - 1;
    setIsScrollDisabled(false);
    setActiveElementIndex(prevIndex);
  };

  return Object(react_["jsx"])(TabControllerContext.Provider, {
    value: {
      activeElementIndex,
      resetActiveElementIndex,
      appendNewSectionLength,
      sectionLengthsArray,
      manuallySetActiveIndex,
      setActiveElementIndex,
      totalElementsCount,
      scrollableWindowHeight,
      setScrollableWindowHeight,
      scrollableWindowTopOffset,
      setScrollableWindowTopOffset,
      scrollDistance,
      setScrollDistance,
      isResultsWindowOpen,
      setIsResultsWindowOpen,
      setScrollWindowRef,
      scrollWindowRef,
      shouldBypassSearch,
      setShouldBypassSearch,
      setEnterKeyWasPressed,
      enterKeyWasPressed,
      isScrollDisabled,
      handleKeyNavigation,
      searchInputHeight,
      setSearchInputHeight,
      controlsHeight,
      setControlsHeight
    }
  }, children);
};

/* harmony default export */ var providers_TabController = (TabController);
// EXTERNAL MODULE: ./node_modules/algoliasearch/dist/algoliasearch-lite.umd.js
var algoliasearch_lite_umd = __webpack_require__(23);
var algoliasearch_lite_umd_default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite_umd);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function defineProperty_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread.js

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty_defineProperty(target, key, source[key]);
    });
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(22);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_default()(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// EXTERNAL MODULE: ./node_modules/react-fast-compare/index.js
var react_fast_compare = __webpack_require__(9);
var react_fast_compare_default = /*#__PURE__*/__webpack_require__.n(react_fast_compare);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/algoliasearch-helper/index.js
var algoliasearch_helper = __webpack_require__(6);
var algoliasearch_helper_default = /*#__PURE__*/__webpack_require__.n(algoliasearch_helper);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/core/utils.js


// From https://github.com/reactjs/react-redux/blob/master/src/utils/shallowEqual.js
var shallowEqual = function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  } // Test for A's keys different from B.


  var hasOwn = Object.prototype.hasOwnProperty;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
};
var getDisplayName = function getDisplayName(Component) {
  return Component.displayName || Component.name || 'UnknownComponent';
};
var resolved = Promise.resolve();
var defer = function defer(f) {
  resolved.then(f);
};

var utils_isPlainObject = function isPlainObject(value) {
  return _typeof(value) === 'object' && value !== null && !Array.isArray(value);
};

var removeEmptyKey = function removeEmptyKey(obj) {
  Object.keys(obj).forEach(function (key) {
    var value = obj[key];

    if (!utils_isPlainObject(value)) {
      return;
    }

    if (!objectHasKeys(value)) {
      delete obj[key];
    } else {
      removeEmptyKey(value);
    }
  });
  return obj;
};
var removeEmptyArraysFromObject = function removeEmptyArraysFromObject(obj) {
  Object.keys(obj).forEach(function (key) {
    var value = obj[key];

    if (Array.isArray(value) && value.length === 0) {
      delete obj[key];
    }
  });
  return obj;
};
function addAbsolutePositions(hits, hitsPerPage, page) {
  return hits.map(function (hit, index) {
    return _objectSpread({}, hit, {
      __position: hitsPerPage * page + index + 1
    });
  });
}
function addQueryID(hits, queryID) {
  if (!queryID) {
    return hits;
  }

  return hits.map(function (hit) {
    return _objectSpread({}, hit, {
      __queryID: queryID
    });
  });
}
function find(array, comparator) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  for (var i = 0; i < array.length; i++) {
    if (comparator(array[i])) {
      return array[i];
    }
  }

  return undefined;
}
function objectHasKeys(object) {
  return object && Object.keys(object).length > 0;
} // https://github.com/babel/babel/blob/3aaafae053fa75febb3aa45d45b6f00646e30ba4/packages/babel-helpers/src/helpers.js#L604-L620

function omit(source, excluded) {
  if (source === null || source === undefined) {
    return {};
  }

  var target = {};
  var sourceKeys = Object.keys(source);

  for (var i = 0; i < sourceKeys.length; i++) {
    var _key = sourceKeys[i];

    if (excluded.indexOf(_key) >= 0) {
      // eslint-disable-next-line no-continue
      continue;
    }

    target[_key] = source[_key];
  }

  return target;
}
/**
 * Retrieve the value at a path of the object:
 *
 * @example
 * getPropertyByPath(
 *   { test: { this: { function: [{ now: { everyone: true } }] } } },
 *   'test.this.function[0].now.everyone'
 * ); // true
 *
 * getPropertyByPath(
 *   { test: { this: { function: [{ now: { everyone: true } }] } } },
 *   ['test', 'this', 'function', 0, 'now', 'everyone']
 * ); // true
 *
 * @param object Source object to query
 * @param path either an array of properties, or a string form of the properties, separated by .
 */

var getPropertyByPath = function getPropertyByPath(object, path) {
  return (Array.isArray(path) ? path : path.replace(/\[(\d+)]/g, '.$1').split('.')).reduce(function (current, key) {
    return current ? current[key] : undefined;
  }, object);
};
function getObjectType(object) {
  return Object.prototype.toString.call(object).slice(8, -1);
}
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/core/createWidgetsManager.js

function createWidgetsManager(onWidgetsUpdate) {
  var widgets = []; // Is an update scheduled?

  var scheduled = false; // The state manager's updates need to be batched since more than one
  // component can register or unregister widgets during the same tick.

  function scheduleUpdate() {
    if (scheduled) {
      return;
    }

    scheduled = true;
    defer(function () {
      scheduled = false;
      onWidgetsUpdate();
    });
  }

  return {
    registerWidget: function registerWidget(widget) {
      widgets.push(widget);
      scheduleUpdate();
      return function unregisterWidget() {
        widgets.splice(widgets.indexOf(widget), 1);
        scheduleUpdate();
      };
    },
    update: scheduleUpdate,
    getWidgets: function getWidgets() {
      return widgets;
    }
  };
}
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/core/createStore.js
function createStore(initialState) {
  var state = initialState;
  var listeners = [];
  return {
    getState: function getState() {
      return state;
    },
    setState: function setState(nextState) {
      state = nextState;
      listeners.forEach(function (listener) {
        return listener();
      });
    },
    subscribe: function subscribe(listener) {
      listeners.push(listener);
      return function unsubscribe() {
        listeners.splice(listeners.indexOf(listener), 1);
      };
    }
  };
}
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/core/highlight.js

var HIGHLIGHT_TAGS = {
  highlightPreTag: "<ais-highlight-0000000000>",
  highlightPostTag: "</ais-highlight-0000000000>"
};
/**
 * Parses an highlighted attribute into an array of objects with the string value, and
 * a boolean that indicated if this part is highlighted.
 *
 * @param {string} preTag - string used to identify the start of an highlighted value
 * @param {string} postTag - string used to identify the end of an highlighted value
 * @param {string} highlightedValue - highlighted attribute as returned by Algolia highlight feature
 * @return {object[]} - An array of {value: string, isHighlighted: boolean}.
 */

function parseHighlightedAttribute(_ref) {
  var preTag = _ref.preTag,
      postTag = _ref.postTag,
      _ref$highlightedValue = _ref.highlightedValue,
      highlightedValue = _ref$highlightedValue === void 0 ? '' : _ref$highlightedValue;
  var splitByPreTag = highlightedValue.split(preTag);
  var firstValue = splitByPreTag.shift();
  var elements = firstValue === '' ? [] : [{
    value: firstValue,
    isHighlighted: false
  }];

  if (postTag === preTag) {
    var isHighlighted = true;
    splitByPreTag.forEach(function (split) {
      elements.push({
        value: split,
        isHighlighted: isHighlighted
      });
      isHighlighted = !isHighlighted;
    });
  } else {
    splitByPreTag.forEach(function (split) {
      var splitByPostTag = split.split(postTag);
      elements.push({
        value: splitByPostTag[0],
        isHighlighted: true
      });

      if (splitByPostTag[1] !== '') {
        elements.push({
          value: splitByPostTag[1],
          isHighlighted: false
        });
      }
    });
  }

  return elements;
}
/**
 * Find an highlighted attribute given an `attribute` and an `highlightProperty`, parses it,
 * and provided an array of objects with the string value and a boolean if this
 * value is highlighted.
 *
 * In order to use this feature, highlight must be activated in the configuration of
 * the index. The `preTag` and `postTag` attributes are respectively highlightPreTag and
 * highlightPostTag in Algolia configuration.
 *
 * @param {string} preTag - string used to identify the start of an highlighted value
 * @param {string} postTag - string used to identify the end of an highlighted value
 * @param {string} highlightProperty - the property that contains the highlight structure in the results
 * @param {string} attribute - the highlighted attribute to look for
 * @param {object} hit - the actual hit returned by Algolia.
 * @return {object[]} - An array of {value: string, isHighlighted: boolean}.
 */


function parseAlgoliaHit(_ref2) {
  var _ref2$preTag = _ref2.preTag,
      preTag = _ref2$preTag === void 0 ? '<em>' : _ref2$preTag,
      _ref2$postTag = _ref2.postTag,
      postTag = _ref2$postTag === void 0 ? '</em>' : _ref2$postTag,
      highlightProperty = _ref2.highlightProperty,
      attribute = _ref2.attribute,
      hit = _ref2.hit;
  if (!hit) throw new Error('`hit`, the matching record, must be provided');
  var highlightObject = getPropertyByPath(hit[highlightProperty], attribute) || {};

  if (Array.isArray(highlightObject)) {
    return highlightObject.map(function (item) {
      return parseHighlightedAttribute({
        preTag: preTag,
        postTag: postTag,
        highlightedValue: item.value
      });
    });
  }

  return parseHighlightedAttribute({
    preTag: preTag,
    postTag: postTag,
    highlightedValue: highlightObject.value
  });
}
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/core/indexUtils.js



function getIndexId(context) {
  return hasMultipleIndices(context) ? context.multiIndexContext.targetedIndex : context.ais.mainTargetedIndex;
}
function getResults(searchResults, context) {
  if (searchResults.results) {
    if (searchResults.results.hits) {
      return searchResults.results;
    }

    var indexId = getIndexId(context);

    if (searchResults.results[indexId]) {
      return searchResults.results[indexId];
    }
  }

  return null;
}
function hasMultipleIndices(context) {
  return context && context.multiIndexContext;
} // eslint-disable-next-line max-params

function refineValue(searchState, nextRefinement, context, resetPage, namespace) {
  if (hasMultipleIndices(context)) {
    var indexId = getIndexId(context);
    return namespace ? refineMultiIndexWithNamespace(searchState, nextRefinement, indexId, resetPage, namespace) : refineMultiIndex(searchState, nextRefinement, indexId, resetPage);
  } else {
    // When we have a multi index page with shared widgets we should also
    // reset their page to 1 if the resetPage is provided. Otherwise the
    // indices will always be reset
    // see: https://github.com/algolia/react-instantsearch/issues/310
    // see: https://github.com/algolia/react-instantsearch/issues/637
    if (searchState.indices && resetPage) {
      Object.keys(searchState.indices).forEach(function (targetedIndex) {
        searchState = refineValue(searchState, {
          page: 1
        }, {
          multiIndexContext: {
            targetedIndex: targetedIndex
          }
        }, true, namespace);
      });
    }

    return namespace ? refineSingleIndexWithNamespace(searchState, nextRefinement, resetPage, namespace) : refineSingleIndex(searchState, nextRefinement, resetPage);
  }
}

function refineMultiIndex(searchState, nextRefinement, indexId, resetPage) {
  var page = resetPage ? {
    page: 1
  } : undefined;
  var state = searchState.indices && searchState.indices[indexId] ? _objectSpread({}, searchState.indices, defineProperty_defineProperty({}, indexId, _objectSpread({}, searchState.indices[indexId], nextRefinement, page))) : _objectSpread({}, searchState.indices, defineProperty_defineProperty({}, indexId, _objectSpread({}, nextRefinement, page)));
  return _objectSpread({}, searchState, {
    indices: state
  });
}

function refineSingleIndex(searchState, nextRefinement, resetPage) {
  var page = resetPage ? {
    page: 1
  } : undefined;
  return _objectSpread({}, searchState, nextRefinement, page);
} // eslint-disable-next-line max-params


function refineMultiIndexWithNamespace(searchState, nextRefinement, indexId, resetPage, namespace) {
  var _objectSpread4;

  var page = resetPage ? {
    page: 1
  } : undefined;
  var state = searchState.indices && searchState.indices[indexId] ? _objectSpread({}, searchState.indices, defineProperty_defineProperty({}, indexId, _objectSpread({}, searchState.indices[indexId], (_objectSpread4 = {}, defineProperty_defineProperty(_objectSpread4, namespace, _objectSpread({}, searchState.indices[indexId][namespace], nextRefinement)), defineProperty_defineProperty(_objectSpread4, "page", 1), _objectSpread4)))) : _objectSpread({}, searchState.indices, defineProperty_defineProperty({}, indexId, _objectSpread(defineProperty_defineProperty({}, namespace, nextRefinement), page)));
  return _objectSpread({}, searchState, {
    indices: state
  });
}

function refineSingleIndexWithNamespace(searchState, nextRefinement, resetPage, namespace) {
  var page = resetPage ? {
    page: 1
  } : undefined;
  return _objectSpread({}, searchState, defineProperty_defineProperty({}, namespace, _objectSpread({}, searchState[namespace], nextRefinement)), page);
}

function getNamespaceAndAttributeName(id) {
  var parts = id.match(/^([^.]*)\.(.*)/);
  var namespace = parts && parts[1];
  var attributeName = parts && parts[2];
  return {
    namespace: namespace,
    attributeName: attributeName
  };
}

function hasRefinements(_ref) {
  var multiIndex = _ref.multiIndex,
      indexId = _ref.indexId,
      namespace = _ref.namespace,
      attributeName = _ref.attributeName,
      id = _ref.id,
      searchState = _ref.searchState;

  if (multiIndex && namespace) {
    return searchState.indices && searchState.indices[indexId] && searchState.indices[indexId][namespace] && Object.hasOwnProperty.call(searchState.indices[indexId][namespace], attributeName);
  }

  if (multiIndex) {
    return searchState.indices && searchState.indices[indexId] && Object.hasOwnProperty.call(searchState.indices[indexId], id);
  }

  if (namespace) {
    return searchState[namespace] && Object.hasOwnProperty.call(searchState[namespace], attributeName);
  }

  return Object.hasOwnProperty.call(searchState, id);
}

function getRefinements(_ref2) {
  var multiIndex = _ref2.multiIndex,
      indexId = _ref2.indexId,
      namespace = _ref2.namespace,
      attributeName = _ref2.attributeName,
      id = _ref2.id,
      searchState = _ref2.searchState;

  if (multiIndex && namespace) {
    return searchState.indices[indexId][namespace][attributeName];
  }

  if (multiIndex) {
    return searchState.indices[indexId][id];
  }

  if (namespace) {
    return searchState[namespace][attributeName];
  }

  return searchState[id];
}

function getCurrentRefinementValue(props, searchState, context, id, defaultValue) {
  var indexId = getIndexId(context);

  var _getNamespaceAndAttri = getNamespaceAndAttributeName(id),
      namespace = _getNamespaceAndAttri.namespace,
      attributeName = _getNamespaceAndAttri.attributeName;

  var multiIndex = hasMultipleIndices(context);
  var args = {
    multiIndex: multiIndex,
    indexId: indexId,
    namespace: namespace,
    attributeName: attributeName,
    id: id,
    searchState: searchState
  };
  var hasRefinementsValue = hasRefinements(args);

  if (hasRefinementsValue) {
    return getRefinements(args);
  }

  if (props.defaultRefinement) {
    return props.defaultRefinement;
  }

  return defaultValue;
}
function cleanUpValue(searchState, context, id) {
  var indexId = getIndexId(context);

  var _getNamespaceAndAttri2 = getNamespaceAndAttributeName(id),
      namespace = _getNamespaceAndAttri2.namespace,
      attributeName = _getNamespaceAndAttri2.attributeName;

  if (hasMultipleIndices(context) && Boolean(searchState.indices)) {
    return cleanUpValueWithMultiIndex({
      attribute: attributeName,
      searchState: searchState,
      indexId: indexId,
      id: id,
      namespace: namespace
    });
  }

  return cleanUpValueWithSingleIndex({
    attribute: attributeName,
    searchState: searchState,
    id: id,
    namespace: namespace
  });
}

function cleanUpValueWithSingleIndex(_ref3) {
  var searchState = _ref3.searchState,
      id = _ref3.id,
      namespace = _ref3.namespace,
      attribute = _ref3.attribute;

  if (namespace) {
    return _objectSpread({}, searchState, defineProperty_defineProperty({}, namespace, omit(searchState[namespace], [attribute])));
  }

  return omit(searchState, [id]);
}

function cleanUpValueWithMultiIndex(_ref4) {
  var searchState = _ref4.searchState,
      indexId = _ref4.indexId,
      id = _ref4.id,
      namespace = _ref4.namespace,
      attribute = _ref4.attribute;
  var indexSearchState = searchState.indices[indexId];

  if (namespace && indexSearchState) {
    return _objectSpread({}, searchState, {
      indices: _objectSpread({}, searchState.indices, defineProperty_defineProperty({}, indexId, _objectSpread({}, indexSearchState, defineProperty_defineProperty({}, namespace, omit(indexSearchState[namespace], [attribute])))))
    });
  }

  if (indexSearchState) {
    return _objectSpread({}, searchState, {
      indices: _objectSpread({}, searchState.indices, defineProperty_defineProperty({}, indexId, omit(indexSearchState, [id])))
    });
  }

  return searchState;
}
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/core/version.js
/* harmony default export */ var version = ('6.10.3');
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/core/createInstantSearchManager.js











function addAlgoliaAgents(searchClient) {
  if (typeof searchClient.addAlgoliaAgent === 'function') {
    searchClient.addAlgoliaAgent("react (".concat(external_root_React_commonjs2_react_commonjs_react_amd_react_["version"], ")"));
    searchClient.addAlgoliaAgent("react-instantsearch (".concat(version, ")"));
  }
}

var createInstantSearchManager_isMultiIndexContext = function isMultiIndexContext(widget) {
  return hasMultipleIndices({
    ais: widget.props.contextValue,
    multiIndexContext: widget.props.indexContextValue
  });
};

var isTargetedIndexEqualIndex = function isTargetedIndexEqualIndex(widget, indexId) {
  return widget.props.indexContextValue.targetedIndex === indexId;
}; // Relying on the `indexId` is a bit brittle to detect the `Index` widget.
// Since it's a class we could rely on `instanceof` or similar. We never
// had an issue though. Works for now.


var isIndexWidget = function isIndexWidget(widget) {
  return Boolean(widget.props.indexId);
};

var isIndexWidgetEqualIndex = function isIndexWidgetEqualIndex(widget, indexId) {
  return widget.props.indexId === indexId;
};

var sortIndexWidgetsFirst = function sortIndexWidgetsFirst(firstWidget, secondWidget) {
  var isFirstWidgetIndex = isIndexWidget(firstWidget);
  var isSecondWidgetIndex = isIndexWidget(secondWidget);

  if (isFirstWidgetIndex && !isSecondWidgetIndex) {
    return -1;
  }

  if (!isFirstWidgetIndex && isSecondWidgetIndex) {
    return 1;
  }

  return 0;
}; // This function is copied from the algoliasearch v4 API Client. If modified,
// consider updating it also in `serializeQueryParameters` from `@algolia/transporter`.


function serializeQueryParameters(parameters) {
  var isObjectOrArray = function isObjectOrArray(value) {
    return Object.prototype.toString.call(value) === '[object Object]' || Object.prototype.toString.call(value) === '[object Array]';
  };

  var encode = function encode(format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var i = 0;
    return format.replace(/%s/g, function () {
      return encodeURIComponent(args[i++]);
    });
  };

  return Object.keys(parameters).map(function (key) {
    return encode('%s=%s', key, isObjectOrArray(parameters[key]) ? JSON.stringify(parameters[key]) : parameters[key]);
  }).join('&');
}
/**
 * Creates a new instance of the InstantSearchManager which controls the widgets and
 * trigger the search when the widgets are updated.
 * @param {string} indexName - the main index name
 * @param {object} initialState - initial widget state
 * @param {object} SearchParameters - optional additional parameters to send to the algolia API
 * @param {number} stalledSearchDelay - time (in ms) after the search is stalled
 * @return {InstantSearchManager} a new instance of InstantSearchManager
 */


function createInstantSearchManager(_ref) {
  var indexName = _ref.indexName,
      _ref$initialState = _ref.initialState,
      initialState = _ref$initialState === void 0 ? {} : _ref$initialState,
      searchClient = _ref.searchClient,
      resultsState = _ref.resultsState,
      stalledSearchDelay = _ref.stalledSearchDelay;
  var helper = algoliasearch_helper_default()(searchClient, indexName, _objectSpread({}, HIGHLIGHT_TAGS));
  addAlgoliaAgents(searchClient);
  helper.on('search', handleNewSearch).on('result', handleSearchSuccess({
    indexId: indexName
  })).on('error', handleSearchError);
  var skip = false;
  var stalledSearchTimer = null;
  var initialSearchParameters = helper.state;
  var widgetsManager = createWidgetsManager(onWidgetsUpdate);
  hydrateSearchClient(searchClient, resultsState);
  var store = createStore({
    widgets: initialState,
    metadata: hydrateMetadata(resultsState),
    results: hydrateResultsState(resultsState),
    error: null,
    searching: false,
    isSearchStalled: true,
    searchingForFacetValues: false
  });

  function skipSearch() {
    skip = true;
  }

  function updateClient(client) {
    addAlgoliaAgents(client);
    helper.setClient(client);
    search();
  }

  function clearCache() {
    helper.clearCache();
    search();
  }

  function getMetadata(state) {
    return widgetsManager.getWidgets().filter(function (widget) {
      return Boolean(widget.getMetadata);
    }).map(function (widget) {
      return widget.getMetadata(state);
    });
  }

  function getSearchParameters() {
    var sharedParameters = widgetsManager.getWidgets().filter(function (widget) {
      return Boolean(widget.getSearchParameters);
    }).filter(function (widget) {
      return !createInstantSearchManager_isMultiIndexContext(widget) && !isIndexWidget(widget);
    }).reduce(function (res, widget) {
      return widget.getSearchParameters(res);
    }, initialSearchParameters);
    var mainParameters = widgetsManager.getWidgets().filter(function (widget) {
      return Boolean(widget.getSearchParameters);
    }).filter(function (widget) {
      var targetedIndexEqualMainIndex = createInstantSearchManager_isMultiIndexContext(widget) && isTargetedIndexEqualIndex(widget, indexName);
      var subIndexEqualMainIndex = isIndexWidget(widget) && isIndexWidgetEqualIndex(widget, indexName);
      return targetedIndexEqualMainIndex || subIndexEqualMainIndex;
    }) // We have to sort the `Index` widgets first so the `index` parameter
    // is correctly set in the `reduce` function for the following widgets
    .sort(sortIndexWidgetsFirst).reduce(function (res, widget) {
      return widget.getSearchParameters(res);
    }, sharedParameters);
    var derivedIndices = widgetsManager.getWidgets().filter(function (widget) {
      return Boolean(widget.getSearchParameters);
    }).filter(function (widget) {
      var targetedIndexNotEqualMainIndex = createInstantSearchManager_isMultiIndexContext(widget) && !isTargetedIndexEqualIndex(widget, indexName);
      var subIndexNotEqualMainIndex = isIndexWidget(widget) && !isIndexWidgetEqualIndex(widget, indexName);
      return targetedIndexNotEqualMainIndex || subIndexNotEqualMainIndex;
    }) // We have to sort the `Index` widgets first so the `index` parameter
    // is correctly set in the `reduce` function for the following widgets
    .sort(sortIndexWidgetsFirst).reduce(function (indices, widget) {
      var indexId = createInstantSearchManager_isMultiIndexContext(widget) ? widget.props.indexContextValue.targetedIndex : widget.props.indexId;
      var widgets = indices[indexId] || [];
      return _objectSpread({}, indices, defineProperty_defineProperty({}, indexId, widgets.concat(widget)));
    }, {});
    var derivedParameters = Object.keys(derivedIndices).map(function (indexId) {
      return {
        parameters: derivedIndices[indexId].reduce(function (res, widget) {
          return widget.getSearchParameters(res);
        }, sharedParameters),
        indexId: indexId
      };
    });
    return {
      mainParameters: mainParameters,
      derivedParameters: derivedParameters
    };
  }

  function search() {
    if (!skip) {
      var _getSearchParameters = getSearchParameters(helper.state),
          mainParameters = _getSearchParameters.mainParameters,
          derivedParameters = _getSearchParameters.derivedParameters; // We have to call `slice` because the method `detach` on the derived
      // helpers mutates the value `derivedHelpers`. The `forEach` loop does
      // not iterate on each value and we're not able to correctly clear the
      // previous derived helpers (memory leak + useless requests).


      helper.derivedHelpers.slice().forEach(function (derivedHelper) {
        // Since we detach the derived helpers on **every** new search they
        // won't receive intermediate results in case of a stalled search.
        // Only the last result is dispatched by the derived helper because
        // they are not detached yet:
        //
        // - a -> main helper receives results
        // - ap -> main helper receives results
        // - app -> main helper + derived helpers receive results
        //
        // The quick fix is to avoid to detach them on search but only once they
        // received the results. But it means that in case of a stalled search
        // all the derived helpers not detached yet register a new search inside
        // the helper. The number grows fast in case of a bad network and it's
        // not deterministic.
        derivedHelper.detach();
      });
      derivedParameters.forEach(function (_ref2) {
        var indexId = _ref2.indexId,
            parameters = _ref2.parameters;
        var derivedHelper = helper.derive(function () {
          return parameters;
        });
        derivedHelper.on('result', handleSearchSuccess({
          indexId: indexId
        })).on('error', handleSearchError);
      });
      helper.setState(mainParameters);
      helper.search();
    }
  }

  function handleSearchSuccess(_ref3) {
    var indexId = _ref3.indexId;
    return function (event) {
      var state = store.getState();
      var isDerivedHelpersEmpty = !helper.derivedHelpers.length;
      var results = state.results ? state.results : {}; // Switching from mono index to multi index and vice versa must reset the
      // results to an empty object, otherwise we keep reference of stalled and
      // unused results.

      results = !isDerivedHelpersEmpty && results.getFacetByName ? {} : results;

      if (!isDerivedHelpersEmpty) {
        results = _objectSpread({}, results, defineProperty_defineProperty({}, indexId, event.results));
      } else {
        results = event.results;
      }

      var currentState = store.getState();
      var nextIsSearchStalled = currentState.isSearchStalled;

      if (!helper.hasPendingRequests()) {
        clearTimeout(stalledSearchTimer);
        stalledSearchTimer = null;
        nextIsSearchStalled = false;
      }

      var resultsFacetValues = currentState.resultsFacetValues,
          partialState = _objectWithoutProperties(currentState, ["resultsFacetValues"]);

      store.setState(_objectSpread({}, partialState, {
        results: results,
        isSearchStalled: nextIsSearchStalled,
        searching: false,
        error: null
      }));
    };
  }

  function handleSearchError(_ref4) {
    var error = _ref4.error;
    var currentState = store.getState();
    var nextIsSearchStalled = currentState.isSearchStalled;

    if (!helper.hasPendingRequests()) {
      clearTimeout(stalledSearchTimer);
      nextIsSearchStalled = false;
    }

    var resultsFacetValues = currentState.resultsFacetValues,
        partialState = _objectWithoutProperties(currentState, ["resultsFacetValues"]);

    store.setState(_objectSpread({}, partialState, {
      isSearchStalled: nextIsSearchStalled,
      error: error,
      searching: false
    }));
  }

  function handleNewSearch() {
    if (!stalledSearchTimer) {
      stalledSearchTimer = setTimeout(function () {
        var _store$getState = store.getState(),
            resultsFacetValues = _store$getState.resultsFacetValues,
            partialState = _objectWithoutProperties(_store$getState, ["resultsFacetValues"]);

        store.setState(_objectSpread({}, partialState, {
          isSearchStalled: true
        }));
      }, stalledSearchDelay);
    }
  }

  function hydrateSearchClient(client, results) {
    if (!results) {
      return;
    } // Disable cache hydration on:
    // - Algoliasearch API Client < v4 with cache disabled
    // - Third party clients (detected by the `addAlgoliaAgent` function missing)


    if ((!client.transporter || client._cacheHydrated) && (!client._useCache || typeof client.addAlgoliaAgent !== 'function')) {
      return;
    } // Algoliasearch API Client >= v4
    // To hydrate the client we need to populate the cache with the data from
    // the server (done in `hydrateSearchClientWithMultiIndexRequest` or
    // `hydrateSearchClientWithSingleIndexRequest`). But since there is no way
    // for us to compute the key the same way as `algoliasearch-client` we need
    // to populate it on a custom key and override the `search` method to
    // search on it first.


    if (client.transporter && !client._cacheHydrated) {
      client._cacheHydrated = true;
      var baseMethod = client.search;

      client.search = function (requests) {
        for (var _len2 = arguments.length, methodArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          methodArgs[_key2 - 1] = arguments[_key2];
        }

        var requestsWithSerializedParams = requests.map(function (request) {
          return _objectSpread({}, request, {
            params: serializeQueryParameters(request.params)
          });
        });
        return client.transporter.responsesCache.get({
          method: 'search',
          args: [requestsWithSerializedParams].concat(methodArgs)
        }, function () {
          return baseMethod.apply(void 0, [requests].concat(methodArgs));
        });
      };
    }

    if (Array.isArray(results.results)) {
      hydrateSearchClientWithMultiIndexRequest(client, results.results);
      return;
    }

    hydrateSearchClientWithSingleIndexRequest(client, results);
  }

  function hydrateSearchClientWithMultiIndexRequest(client, results) {
    // Algoliasearch API Client >= v4
    // Populate the cache with the data from the server
    if (client.transporter) {
      client.transporter.responsesCache.set({
        method: 'search',
        args: [results.reduce(function (acc, result) {
          return acc.concat(result.rawResults.map(function (request) {
            return {
              indexName: request.index,
              params: request.params
            };
          }));
        }, [])]
      }, {
        results: results.reduce(function (acc, result) {
          return acc.concat(result.rawResults);
        }, [])
      });
      return;
    } // Algoliasearch API Client < v4
    // Prior to client v4 we didn't have a proper API to hydrate the client
    // cache from the outside. The following code populates the cache with
    // a single-index result. You can find more information about the
    // computation of the key inside the client (see link below).
    // https://github.com/algolia/algoliasearch-client-javascript/blob/c27e89ff92b2a854ae6f40dc524bffe0f0cbc169/src/AlgoliaSearchCore.js#L232-L240


    var key = "/1/indexes/*/queries_body_".concat(JSON.stringify({
      requests: results.reduce(function (acc, result) {
        return acc.concat(result.rawResults.map(function (request) {
          return {
            indexName: request.index,
            params: request.params
          };
        }));
      }, [])
    }));
    client.cache = _objectSpread({}, client.cache, defineProperty_defineProperty({}, key, JSON.stringify({
      results: results.reduce(function (acc, result) {
        return acc.concat(result.rawResults);
      }, [])
    })));
  }

  function hydrateSearchClientWithSingleIndexRequest(client, results) {
    // Algoliasearch API Client >= v4
    // Populate the cache with the data from the server
    if (client.transporter) {
      client.transporter.responsesCache.set({
        method: 'search',
        args: [results.rawResults.map(function (request) {
          return {
            indexName: request.index,
            params: request.params
          };
        })]
      }, {
        results: results.rawResults
      });
      return;
    } // Algoliasearch API Client < v4
    // Prior to client v4 we didn't have a proper API to hydrate the client
    // cache from the outside. The following code populates the cache with
    // a single-index result. You can find more information about the
    // computation of the key inside the client (see link below).
    // https://github.com/algolia/algoliasearch-client-javascript/blob/c27e89ff92b2a854ae6f40dc524bffe0f0cbc169/src/AlgoliaSearchCore.js#L232-L240


    var key = "/1/indexes/*/queries_body_".concat(JSON.stringify({
      requests: results.rawResults.map(function (request) {
        return {
          indexName: request.index,
          params: request.params
        };
      })
    }));
    client.cache = _objectSpread({}, client.cache, defineProperty_defineProperty({}, key, JSON.stringify({
      results: results.rawResults
    })));
  }

  function hydrateResultsState(results) {
    if (!results) {
      return null;
    }

    if (Array.isArray(results.results)) {
      return results.results.reduce(function (acc, result) {
        return _objectSpread({}, acc, defineProperty_defineProperty({}, result._internalIndexId, new algoliasearch_helper_default.a.SearchResults(new algoliasearch_helper_default.a.SearchParameters(result.state), result.rawResults)));
      }, {});
    }

    return new algoliasearch_helper_default.a.SearchResults(new algoliasearch_helper_default.a.SearchParameters(results.state), results.rawResults);
  } // Called whenever a widget has been rendered with new props.


  function onWidgetsUpdate() {
    var metadata = getMetadata(store.getState().widgets);
    store.setState(_objectSpread({}, store.getState(), {
      metadata: metadata,
      searching: true
    })); // Since the `getSearchParameters` method of widgets also depends on props,
    // the result search parameters might have changed.

    search();
  }

  function transitionState(nextSearchState) {
    var searchState = store.getState().widgets;
    return widgetsManager.getWidgets().filter(function (widget) {
      return Boolean(widget.transitionState);
    }).reduce(function (res, widget) {
      return widget.transitionState(searchState, res);
    }, nextSearchState);
  }

  function onExternalStateUpdate(nextSearchState) {
    var metadata = getMetadata(nextSearchState);
    store.setState(_objectSpread({}, store.getState(), {
      widgets: nextSearchState,
      metadata: metadata,
      searching: true
    }));
    search();
  }

  function onSearchForFacetValues(_ref5) {
    var facetName = _ref5.facetName,
        query = _ref5.query,
        _ref5$maxFacetHits = _ref5.maxFacetHits,
        maxFacetHits = _ref5$maxFacetHits === void 0 ? 10 : _ref5$maxFacetHits;
    // The values 1, 100 are the min / max values that the engine accepts.
    // see: https://www.algolia.com/doc/api-reference/api-parameters/maxFacetHits
    var maxFacetHitsWithinRange = Math.max(1, Math.min(maxFacetHits, 100));
    store.setState(_objectSpread({}, store.getState(), {
      searchingForFacetValues: true
    }));
    helper.searchForFacetValues(facetName, query, maxFacetHitsWithinRange).then(function (content) {
      var _objectSpread7;

      store.setState(_objectSpread({}, store.getState(), {
        error: null,
        searchingForFacetValues: false,
        resultsFacetValues: _objectSpread({}, store.getState().resultsFacetValues, (_objectSpread7 = {}, defineProperty_defineProperty(_objectSpread7, facetName, content.facetHits), defineProperty_defineProperty(_objectSpread7, "query", query), _objectSpread7))
      }));
    }, function (error) {
      store.setState(_objectSpread({}, store.getState(), {
        searchingForFacetValues: false,
        error: error
      }));
    }).catch(function (error) {
      // Since setState is synchronous, any error that occurs in the render of a
      // component will be swallowed by this promise.
      // This is a trick to make the error show up correctly in the console.
      // See http://stackoverflow.com/a/30741722/969302
      setTimeout(function () {
        throw error;
      });
    });
  }

  function updateIndex(newIndex) {
    initialSearchParameters = initialSearchParameters.setIndex(newIndex); // No need to trigger a new search here as the widgets will also update and trigger it if needed.
  }

  function getWidgetsIds() {
    return store.getState().metadata.reduce(function (res, meta) {
      return typeof meta.id !== 'undefined' ? res.concat(meta.id) : res;
    }, []);
  }

  return {
    store: store,
    widgetsManager: widgetsManager,
    getWidgetsIds: getWidgetsIds,
    getSearchParameters: getSearchParameters,
    onSearchForFacetValues: onSearchForFacetValues,
    onExternalStateUpdate: onExternalStateUpdate,
    transitionState: transitionState,
    updateClient: updateClient,
    updateIndex: updateIndex,
    clearCache: clearCache,
    skipSearch: skipSearch
  };
}

function hydrateMetadata(resultsState) {
  if (!resultsState) {
    return [];
  } // add a value noop, which gets replaced once the widgets are mounted


  return resultsState.metadata.map(function (datum) {
    return _objectSpread({
      value: function value() {}
    }, datum, {
      items: datum.items && datum.items.map(function (item) {
        return _objectSpread({
          value: function value() {}
        }, item, {
          items: item.items && item.items.map(function (nestedItem) {
            return _objectSpread({
              value: function value() {}
            }, nestedItem);
          })
        });
      })
    });
  });
}
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/core/context.js

var instantSearchContext = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["createContext"])({
  onInternalStateUpdate: function onInternalStateUpdate() {
    return undefined;
  },
  createHrefForState: function createHrefForState() {
    return '#';
  },
  onSearchForFacetValues: function onSearchForFacetValues() {
    return undefined;
  },
  onSearchStateChange: function onSearchStateChange() {
    return undefined;
  },
  onSearchParameters: function onSearchParameters() {
    return undefined;
  },
  store: {},
  widgetsManager: {},
  mainTargetedIndex: ''
});
var InstantSearchConsumer = instantSearchContext.Consumer,
    InstantSearchProvider = instantSearchContext.Provider;


var _createContext = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["createContext"])(undefined),
    IndexConsumer = _createContext.Consumer,
    IndexProvider = _createContext.Provider;


// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/widgets/InstantSearch.js














function InstantSearch_isControlled(props) {
  return Boolean(props.searchState);
}
/**
 * @description
 * `<InstantSearch>` is the root component of all React InstantSearch implementations.
 * It provides all the connected components (aka widgets) a means to interact
 * with the searchState.
 * @kind widget
 * @name <InstantSearch>
 * @requirements You will need to have an Algolia account to be able to use this widget.
 * [Create one now](https://www.algolia.com/users/sign_up).
 * @propType {string} indexName - Main index in which to search.
 * @propType {boolean} [refresh=false] - Flag to activate when the cache needs to be cleared so that the front-end is updated when a change occurs in the index.
 * @propType {object} [searchClient] - Provide a custom search client.
 * @propType {func} [onSearchStateChange] - Function to be called everytime a new search is done. Useful for [URL Routing](guide/Routing.html).
 * @propType {object} [searchState] - Object to inject some search state. Switches the InstantSearch component in controlled mode. Useful for [URL Routing](guide/Routing.html).
 * @propType {func} [createURL] - Function to call when creating links, useful for [URL Routing](guide/Routing.html).
 * @propType {SearchResults|SearchResults[]} [resultsState] - Use this to inject the results that will be used at first rendering. Those results are found by using the `findResultsState` function. Useful for [Server Side Rendering](guide/Server-side_rendering.html).
 * @propType {number} [stalledSearchDelay=200] - The amount of time before considering that the search takes too much time. The time is expressed in milliseconds.
 * @propType {{ Root: string|function, props: object }} [root] - Use this to customize the root element. Default value: `{ Root: 'div' }`
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <SearchBox />
 *     <Hits />
 *   </InstantSearch>
 * );
 */


var InstantSearch_InstantSearch =
/*#__PURE__*/
function (_Component) {
  _inherits(InstantSearch, _Component);

  _createClass(InstantSearch, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var nextIsControlled = InstantSearch_isControlled(nextProps);
      var previousSearchState = prevState.instantSearchManager.store.getState().widgets;
      var nextSearchState = nextProps.searchState;

      if (nextIsControlled && !react_fast_compare_default()(previousSearchState, nextSearchState)) {
        prevState.instantSearchManager.onExternalStateUpdate(nextProps.searchState);
      }

      return {
        isControlled: nextIsControlled,
        contextValue: _objectSpread({}, prevState.contextValue, {
          mainTargetedIndex: nextProps.indexName
        })
      };
    }
  }]);

  function InstantSearch(props) {
    var _this;

    _classCallCheck(this, InstantSearch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InstantSearch).call(this, props));

    defineProperty_defineProperty(_assertThisInitialized(_this), "isUnmounting", false);

    var instantSearchManager = createInstantSearchManager({
      indexName: _this.props.indexName,
      searchClient: _this.props.searchClient,
      initialState: _this.props.searchState || {},
      resultsState: _this.props.resultsState,
      stalledSearchDelay: _this.props.stalledSearchDelay
    });
    var contextValue = {
      store: instantSearchManager.store,
      widgetsManager: instantSearchManager.widgetsManager,
      mainTargetedIndex: _this.props.indexName,
      onInternalStateUpdate: _this.onWidgetsInternalStateUpdate.bind(_assertThisInitialized(_this)),
      createHrefForState: _this.createHrefForState.bind(_assertThisInitialized(_this)),
      onSearchForFacetValues: _this.onSearchForFacetValues.bind(_assertThisInitialized(_this)),
      onSearchStateChange: _this.onSearchStateChange.bind(_assertThisInitialized(_this)),
      onSearchParameters: _this.onSearchParameters.bind(_assertThisInitialized(_this))
    };
    _this.state = {
      isControlled: InstantSearch_isControlled(_this.props),
      instantSearchManager: instantSearchManager,
      contextValue: contextValue
    };
    return _this;
  }

  _createClass(InstantSearch, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevIsControlled = InstantSearch_isControlled(prevProps);

      if (prevIsControlled && !this.state.isControlled) {
        throw new Error("You can't switch <InstantSearch> from being controlled to uncontrolled");
      }

      if (!prevIsControlled && this.state.isControlled) {
        throw new Error("You can't switch <InstantSearch> from being uncontrolled to controlled");
      }

      if (this.props.refresh !== prevProps.refresh && this.props.refresh) {
        this.state.instantSearchManager.clearCache();
      }

      if (prevProps.indexName !== this.props.indexName) {
        this.state.instantSearchManager.updateIndex(this.props.indexName);
      }

      if (prevProps.searchClient !== this.props.searchClient) {
        this.state.instantSearchManager.updateClient(this.props.searchClient);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isUnmounting = true;
      this.state.instantSearchManager.skipSearch();
    }
  }, {
    key: "createHrefForState",
    value: function createHrefForState(searchState) {
      searchState = this.state.instantSearchManager.transitionState(searchState);
      return this.state.isControlled && this.props.createURL ? this.props.createURL(searchState, this.getKnownKeys()) : '#';
    }
  }, {
    key: "onWidgetsInternalStateUpdate",
    value: function onWidgetsInternalStateUpdate(searchState) {
      searchState = this.state.instantSearchManager.transitionState(searchState);
      this.onSearchStateChange(searchState);

      if (!this.state.isControlled) {
        this.state.instantSearchManager.onExternalStateUpdate(searchState);
      }
    }
  }, {
    key: "onSearchStateChange",
    value: function onSearchStateChange(searchState) {
      if (this.props.onSearchStateChange && !this.isUnmounting) {
        this.props.onSearchStateChange(searchState);
      }
    }
  }, {
    key: "onSearchParameters",
    value: function onSearchParameters(getSearchParameters, context, props, getMetadata) {
      if (this.props.onSearchParameters) {
        var _searchState = this.props.searchState ? this.props.searchState : {};

        this.props.onSearchParameters(getSearchParameters, context, props, _searchState);
      }

      if (this.props.widgetsCollector) {
        var _searchState2 = this.props.searchState ? this.props.searchState : {};

        this.props.widgetsCollector({
          getSearchParameters: getSearchParameters,
          getMetadata: getMetadata,
          context: context,
          props: props,
          searchState: _searchState2
        });
      }
    }
  }, {
    key: "onSearchForFacetValues",
    value: function onSearchForFacetValues(searchState) {
      this.state.instantSearchManager.onSearchForFacetValues(searchState);
    }
  }, {
    key: "getKnownKeys",
    value: function getKnownKeys() {
      return this.state.instantSearchManager.getWidgetsIds();
    }
  }, {
    key: "render",
    value: function render() {
      if (external_root_React_commonjs2_react_commonjs_react_amd_react_["Children"].count(this.props.children) === 0) {
        return null;
      }

      return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(InstantSearchProvider, {
        value: this.state.contextValue
      }, this.props.children);
    }
  }]);

  return InstantSearch;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);

defineProperty_defineProperty(InstantSearch_InstantSearch, "defaultProps", {
  stalledSearchDelay: 200,
  refresh: false
});

defineProperty_defineProperty(InstantSearch_InstantSearch, "propTypes", {
  // @TODO: These props are currently constant.
  indexName: prop_types_default.a.string.isRequired,
  searchClient: prop_types_default.a.shape({
    search: prop_types_default.a.func.isRequired,
    searchForFacetValues: prop_types_default.a.func,
    addAlgoliaAgent: prop_types_default.a.func,
    clearCache: prop_types_default.a.func
  }).isRequired,
  createURL: prop_types_default.a.func,
  refresh: prop_types_default.a.bool,
  searchState: prop_types_default.a.object,
  onSearchStateChange: prop_types_default.a.func,
  onSearchParameters: prop_types_default.a.func,
  widgetsCollector: prop_types_default.a.func,
  resultsState: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.array]),
  children: prop_types_default.a.node,
  stalledSearchDelay: prop_types_default.a.number
});

/* harmony default export */ var widgets_InstantSearch = (InstantSearch_InstantSearch);
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/widgets/Index.js












function getIndexContext(props) {
  return {
    targetedIndex: props.indexId
  };
}

/**
 * The component that allows you to apply widgets to a dedicated index. It's
 * useful if you want to build an interface that targets multiple indices.
 *
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, Index, SearchBox, Hits, Configure } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <Configure hitsPerPage={5} />
 *     <SearchBox />
 *     <Index indexName="instant_search">
 *       <Hits />
 *     </Index>
 *     <Index indexName="bestbuy">
 *       <Hits />
 *     </Index>
 *   </InstantSearch>
 * );
 */
var Index_Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  _createClass(Index, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      return {
        indexContext: getIndexContext(props)
      };
    }
  }]);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));

    defineProperty_defineProperty(_assertThisInitialized(_this), "state", {
      indexContext: getIndexContext(_this.props)
    });

    defineProperty_defineProperty(_assertThisInitialized(_this), "unregisterWidget", void 0);

    _this.props.contextValue.onSearchParameters(_this.getSearchParameters.bind(_assertThisInitialized(_this)), {
      ais: _this.props.contextValue,
      multiIndexContext: _this.state.indexContext
    }, _this.props, undefined);

    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.unregisterWidget = this.props.contextValue.widgetsManager.registerWidget(this);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.indexName !== prevProps.indexName) {
        this.props.contextValue.widgetsManager.update();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof this.unregisterWidget === 'function') {
        this.unregisterWidget();
      }
    }
  }, {
    key: "getSearchParameters",
    value: function getSearchParameters(searchParameters, props) {
      return searchParameters.setIndex(this.props ? this.props.indexName : props.indexName);
    }
  }, {
    key: "render",
    value: function render() {
      var childrenCount = external_root_React_commonjs2_react_commonjs_react_amd_react_["Children"].count(this.props.children);

      if (childrenCount === 0) {
        return null;
      }

      return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(IndexProvider, {
        value: this.state.indexContext
      }, this.props.children);
    }
  }]);

  return Index;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);

defineProperty_defineProperty(Index_Index, "propTypes", {
  indexName: prop_types_default.a.string.isRequired,
  indexId: prop_types_default.a.string.isRequired,
  children: prop_types_default.a.node
});

var Index_IndexWrapper = function IndexWrapper(props) {
  var inferredIndexId = props.indexName;
  return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(InstantSearchConsumer, null, function (contextValue) {
    return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Index_Index, extends_extends({
      contextValue: contextValue,
      indexId: inferredIndexId
    }, props));
  });
};

Index_IndexWrapper.propTypes = {
  indexName: prop_types_default.a.string.isRequired,
  indexId: prop_types_default.a.string
};
var IndexComponentWithoutContext = Index_Index;
/* harmony default export */ var widgets_Index = (Index_IndexWrapper);
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/core/createConnector.js















/**
 * Connectors are the HOC used to transform React components
 * into InstantSearch widgets.
 * In order to simplify the construction of such connectors
 * `createConnector` takes a description and transform it into
 * a connector.
 * @param {ConnectorDescription} connectorDesc the description of the connector
 * @return {Connector} a function that wraps a component into
 * an instantsearch connected one.
 */
function createConnectorWithoutContext(connectorDesc) {
  if (!connectorDesc.displayName) {
    throw new Error('`createConnector` requires you to provide a `displayName` property.');
  }

  var isWidget = typeof connectorDesc.getSearchParameters === 'function' || typeof connectorDesc.getMetadata === 'function' || typeof connectorDesc.transitionState === 'function';
  return function (Composed) {
    var Connector =
    /*#__PURE__*/
    function (_Component) {
      _inherits(Connector, _Component);

      function Connector(props) {
        var _this;

        _classCallCheck(this, Connector);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Connector).call(this, props));

        defineProperty_defineProperty(_assertThisInitialized(_this), "unsubscribe", void 0);

        defineProperty_defineProperty(_assertThisInitialized(_this), "unregisterWidget", void 0);

        defineProperty_defineProperty(_assertThisInitialized(_this), "isUnmounting", false);

        defineProperty_defineProperty(_assertThisInitialized(_this), "state", {
          providedProps: _this.getProvidedProps(_this.props)
        });

        defineProperty_defineProperty(_assertThisInitialized(_this), "refine", function () {
          var _ref;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this.props.contextValue.onInternalStateUpdate( // refine will always be defined here because the prop is only given conditionally
          (_ref = connectorDesc.refine).call.apply(_ref, [_assertThisInitialized(_this), _this.props, _this.props.contextValue.store.getState().widgets].concat(args)));
        });

        defineProperty_defineProperty(_assertThisInitialized(_this), "createURL", function () {
          var _ref2;

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return _this.props.contextValue.createHrefForState( // refine will always be defined here because the prop is only given conditionally
          (_ref2 = connectorDesc.refine).call.apply(_ref2, [_assertThisInitialized(_this), _this.props, _this.props.contextValue.store.getState().widgets].concat(args)));
        });

        defineProperty_defineProperty(_assertThisInitialized(_this), "searchForFacetValues", function () {
          var _ref3;

          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          _this.props.contextValue.onSearchForFacetValues( // searchForFacetValues will always be defined here because the prop is only given conditionally
          (_ref3 = connectorDesc.searchForFacetValues).call.apply(_ref3, [_assertThisInitialized(_this), _this.props, _this.props.contextValue.store.getState().widgets].concat(args)));
        });

        if (connectorDesc.getSearchParameters) {
          _this.props.contextValue.onSearchParameters(connectorDesc.getSearchParameters.bind(_assertThisInitialized(_this)), {
            ais: _this.props.contextValue,
            multiIndexContext: _this.props.indexContextValue
          }, _this.props, connectorDesc.getMetadata && connectorDesc.getMetadata.bind(_assertThisInitialized(_this)));
        }

        return _this;
      }

      _createClass(Connector, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          this.unsubscribe = this.props.contextValue.store.subscribe(function () {
            if (!_this2.isUnmounting) {
              _this2.setState({
                providedProps: _this2.getProvidedProps(_this2.props)
              });
            }
          });

          if (isWidget) {
            this.unregisterWidget = this.props.contextValue.widgetsManager.registerWidget(this);
          }
        }
      }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
          if (typeof connectorDesc.shouldComponentUpdate === 'function') {
            return connectorDesc.shouldComponentUpdate.call(this, this.props, nextProps, this.state, nextState);
          }

          var propsEqual = shallowEqual(this.props, nextProps);

          if (this.state.providedProps === null || nextState.providedProps === null) {
            if (this.state.providedProps === nextState.providedProps) {
              return !propsEqual;
            }

            return true;
          }

          return !propsEqual || !shallowEqual(this.state.providedProps, nextState.providedProps);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (!react_fast_compare_default()(prevProps, this.props)) {
            this.setState({
              providedProps: this.getProvidedProps(this.props)
            });

            if (isWidget) {
              this.props.contextValue.widgetsManager.update();

              if (typeof connectorDesc.transitionState === 'function') {
                this.props.contextValue.onSearchStateChange(connectorDesc.transitionState.call(this, this.props, this.props.contextValue.store.getState().widgets, this.props.contextValue.store.getState().widgets));
              }
            }
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.isUnmounting = true;

          if (this.unsubscribe) {
            this.unsubscribe();
          }

          if (this.unregisterWidget) {
            this.unregisterWidget();

            if (typeof connectorDesc.cleanUp === 'function') {
              var nextState = connectorDesc.cleanUp.call(this, this.props, this.props.contextValue.store.getState().widgets);
              this.props.contextValue.store.setState(_objectSpread({}, this.props.contextValue.store.getState(), {
                widgets: nextState
              }));
              this.props.contextValue.onSearchStateChange(removeEmptyKey(nextState));
            }
          }
        }
      }, {
        key: "getProvidedProps",
        value: function getProvidedProps(props) {
          var _this$props$contextVa = this.props.contextValue.store.getState(),
              widgets = _this$props$contextVa.widgets,
              results = _this$props$contextVa.results,
              resultsFacetValues = _this$props$contextVa.resultsFacetValues,
              searching = _this$props$contextVa.searching,
              searchingForFacetValues = _this$props$contextVa.searchingForFacetValues,
              isSearchStalled = _this$props$contextVa.isSearchStalled,
              metadata = _this$props$contextVa.metadata,
              error = _this$props$contextVa.error;

          var searchResults = {
            results: results,
            searching: searching,
            searchingForFacetValues: searchingForFacetValues,
            isSearchStalled: isSearchStalled,
            error: error
          };
          return connectorDesc.getProvidedProps.call(this, props, widgets, searchResults, metadata, // @MAJOR: move this attribute on the `searchResults` it doesn't
          // makes sense to have it into a separate argument. The search
          // flags are on the object why not the results?
          resultsFacetValues);
        }
      }, {
        key: "getSearchParameters",
        value: function getSearchParameters(searchParameters) {
          if (typeof connectorDesc.getSearchParameters === 'function') {
            return connectorDesc.getSearchParameters.call(this, searchParameters, this.props, this.props.contextValue.store.getState().widgets);
          }

          return null;
        }
      }, {
        key: "getMetadata",
        value: function getMetadata(nextWidgetsState) {
          if (typeof connectorDesc.getMetadata === 'function') {
            return connectorDesc.getMetadata.call(this, this.props, nextWidgetsState);
          }

          return {};
        }
      }, {
        key: "transitionState",
        value: function transitionState(prevWidgetsState, nextWidgetsState) {
          if (typeof connectorDesc.transitionState === 'function') {
            return connectorDesc.transitionState.call(this, this.props, prevWidgetsState, nextWidgetsState);
          }

          return nextWidgetsState;
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props,
              contextValue = _this$props.contextValue,
              props = _objectWithoutProperties(_this$props, ["contextValue"]);

          var providedProps = this.state.providedProps;

          if (providedProps === null) {
            return null;
          }

          var refineProps = typeof connectorDesc.refine === 'function' ? {
            refine: this.refine,
            createURL: this.createURL
          } : {};
          var searchForFacetValuesProps = typeof connectorDesc.searchForFacetValues === 'function' ? {
            searchForItems: this.searchForFacetValues
          } : {};
          return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Composed, extends_extends({}, props, providedProps, refineProps, searchForFacetValuesProps));
        }
      }]);

      return Connector;
    }(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);

    defineProperty_defineProperty(Connector, "displayName", "".concat(connectorDesc.displayName, "(").concat(getDisplayName(Composed), ")"));

    defineProperty_defineProperty(Connector, "propTypes", connectorDesc.propTypes);

    defineProperty_defineProperty(Connector, "defaultProps", connectorDesc.defaultProps);

    return Connector;
  };
}

var createConnector_createConnectorWithContext = function createConnectorWithContext(connectorDesc) {
  return function (Composed) {
    var Connector = createConnectorWithoutContext(connectorDesc)(Composed);

    var ConnectorWrapper = function ConnectorWrapper(props) {
      return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(InstantSearchConsumer, null, function (contextValue) {
        return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(IndexConsumer, null, function (indexContextValue) {
          return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Connector, extends_extends({
            contextValue: contextValue,
            indexContextValue: indexContextValue
          }, props));
        });
      });
    };

    return ConnectorWrapper;
  };
};

/* harmony default export */ var createConnector = (createConnector_createConnectorWithContext);
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/connectors/connectConfigure.js







function getId() {
  return 'configure';
}

/* harmony default export */ var connectConfigure = (createConnector({
  displayName: 'AlgoliaConfigure',
  getProvidedProps: function getProvidedProps() {
    return {};
  },
  getSearchParameters: function getSearchParameters(searchParameters, props) {
    var children = props.children,
        contextValue = props.contextValue,
        indexContextValue = props.indexContextValue,
        items = _objectWithoutProperties(props, ["children", "contextValue", "indexContextValue"]);

    return searchParameters.setQueryParameters(items);
  },
  transitionState: function transitionState(props, prevSearchState, nextSearchState) {
    var id = getId();

    var children = props.children,
        contextValue = props.contextValue,
        indexContextValue = props.indexContextValue,
        items = _objectWithoutProperties(props, ["children", "contextValue", "indexContextValue"]);

    var propKeys = Object.keys(props);
    var nonPresentKeys = this._props ? Object.keys(this._props).filter(function (prop) {
      return propKeys.indexOf(prop) === -1;
    }) : [];
    this._props = props;

    var nextValue = defineProperty_defineProperty({}, id, _objectSpread({}, omit(nextSearchState[id], nonPresentKeys), items));

    return refineValue(nextSearchState, nextValue, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  },
  cleanUp: function cleanUp(props, searchState) {
    var id = getId();
    var indexId = getIndexId({
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    var subState = hasMultipleIndices({
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    }) && searchState.indices ? searchState.indices[indexId] : searchState;
    var configureKeys = subState && subState[id] ? Object.keys(subState[id]) : [];
    var configureState = configureKeys.reduce(function (acc, item) {
      if (!props[item]) {
        acc[item] = subState[id][item];
      }

      return acc;
    }, {});

    var nextValue = defineProperty_defineProperty({}, id, configureState);

    return refineValue(searchState, nextValue, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  }
}));
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/widgets/Configure.js

/**
 * Configure is a widget that lets you provide raw search parameters
 * to the Algolia API.
 *
 * Any of the props added to this widget will be forwarded to Algolia. For more information
 * on the different parameters that can be set, have a look at the
 * [reference](https://www.algolia.com/doc/api-client/javascript/search#search-parameters).
 *
 * This widget can be used either with react-dom and react-native. It will not render anything
 * on screen, only configure some parameters.
 *
 * Read more in the [Search parameters](guide/Search_parameters.html) guide.
 * @name Configure
 * @kind widget
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, Configure, Hits } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <Configure hitsPerPage={5} />
 *     <Hits />
 *   </InstantSearch>
 * );
 */

/* harmony default export */ var Configure = (connectConfigure(function Configure() {
  return null;
}));
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/connectors/connectSearchBox.js





function connectSearchBox_getId() {
  return 'query';
}

function getCurrentRefinement(props, searchState, context) {
  var id = connectSearchBox_getId(props);
  var currentRefinement = getCurrentRefinementValue(props, searchState, context, id, '');

  if (currentRefinement) {
    return currentRefinement;
  }

  return '';
}

function _refine(props, searchState, nextRefinement, context) {
  var id = connectSearchBox_getId();

  var nextValue = defineProperty_defineProperty({}, id, nextRefinement);

  var resetPage = true;
  return refineValue(searchState, nextValue, context, resetPage);
}

function _cleanUp(props, searchState, context) {
  return cleanUpValue(searchState, context, connectSearchBox_getId());
}
/**
 * connectSearchBox connector provides the logic to build a widget that will
 * let the user search for a query
 * @name connectSearchBox
 * @kind connector
 * @propType {string} [defaultRefinement] - Provide a default value for the query
 * @providedPropType {function} refine - a function to change the current query
 * @providedPropType {string} currentRefinement - the current query used
 * @providedPropType {boolean} isSearchStalled - a flag that indicates if InstantSearch has detected that searches are stalled
 */


/* harmony default export */ var connectSearchBox = (createConnector({
  displayName: 'AlgoliaSearchBox',
  propTypes: {
    defaultRefinement: prop_types_default.a.string
  },
  getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
    return {
      currentRefinement: getCurrentRefinement(props, searchState, {
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }),
      isSearchStalled: searchResults.isSearchStalled
    };
  },
  refine: function refine(props, searchState, nextRefinement) {
    return _refine(props, searchState, nextRefinement, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  },
  cleanUp: function cleanUp(props, searchState) {
    return _cleanUp(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
  },
  getSearchParameters: function getSearchParameters(searchParameters, props, searchState) {
    return searchParameters.setQuery(getCurrentRefinement(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    }));
  },
  getMetadata: function getMetadata(props, searchState) {
    var id = connectSearchBox_getId(props);
    var currentRefinement = getCurrentRefinement(props, searchState, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });
    return {
      id: id,
      index: getIndexId({
        ais: props.contextValue,
        multiIndexContext: props.indexContextValue
      }),
      items: currentRefinement === null ? [] : [{
        label: "".concat(id, ": ").concat(currentRefinement),
        value: function value(nextState) {
          return _refine(props, nextState, '', {
            ais: props.contextValue,
            multiIndexContext: props.indexContextValue
          });
        },
        currentRefinement: currentRefinement
      }]
    };
  }
}));
// CONCATENATED MODULE: ./src/AlgoliaSearch/elements/SearchBox/index.js
function SearchBox_extends() { SearchBox_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SearchBox_extends.apply(this, arguments); }








const valHasLength = value => {
  if (value.length >= 1) return true;
  return false;
};

const SearchBox = props => {
  const {
    currentRefinement,
    refine,
    id,
    placeholder,
    selectedText,
    inputProps,
    onSelect
  } = props;
  const {
    resetActiveElementIndex,
    isResultsWindowOpen,
    setIsResultsWindowOpen,
    setSearchInputHeight
  } = useTabController();
  const inputRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])();
  const searchInputRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(null);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    refine(selectedText);
    inputRef.current.value = selectedText || "";
  }, [selectedText]);

  const handleOnChange = (value, e) => {
    if (e.keyCode !== 40 && e.keyCode !== 38) {
      resetActiveElementIndex();
      refine(value);
    } else {
      e.preventDefault();
    }

    if (!(value !== null && value !== void 0 && value.length) && onSelect) {
      // Trigger on Select when field clears
      onSelect();
    }

    setIsResultsWindowOpen(valHasLength(value));
  };

  const checkIfResultsWindowShouldOpen = e => {
    const {
      value
    } = e.target;
    setIsResultsWindowOpen(valHasLength(value));
  };

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    if (searchInputRef !== null && searchInputRef !== void 0 && searchInputRef.current) {
      setSearchInputHeight(searchInputRef.current.offsetHeight);
    }
  }, []);
  return Object(react_["jsx"])("div", {
    className: "ais-SearchBox pb-2",
    ref: searchInputRef
  }, Object(react_["jsx"])("form", {
    className: "ais-SearchBox-form m-0",
    noValidate: true,
    role: "search"
  }, Object(react_["jsx"])(src_Input, SearchBox_extends({
    ref: inputRef,
    inputClassName: `${isResultsWindowOpen ? "focused" : ""} -mt-1 ais-SearchBox-input w-full`,
    value: currentRefinement,
    onChange: handleOnChange,
    onFocus: checkIfResultsWindowShouldOpen,
    "aria-label": "Search for a resource by typing here",
    placeholder: `${placeholder ? placeholder : "Search..."}`,
    id: `search-box-${id}`,
    autoComplete: "off",
    type: "search"
  }, inputProps))));
};

SearchBox.propTypes = {
  currentRefinement: prop_types_default.a.string.isRequired,
  refine: prop_types_default.a.func.isRequired,
  id: prop_types_default.a.string.isRequired,
  selectedText: prop_types_default.a.string
};
/* harmony default export */ var elements_SearchBox = (connectSearchBox(SearchBox));
// CONCATENATED MODULE: ./node_modules/react-instantsearch-core/dist/es/connectors/connectHits.js



/**
 * connectHits connector provides the logic to create connected
 * components that will render the results retrieved from
 * Algolia.
 *
 * To configure the number of hits retrieved, use [HitsPerPage widget](widgets/HitsPerPage.html),
 * [connectHitsPerPage connector](connectors/connectHitsPerPage.html) or pass the hitsPerPage
 * prop to a [Configure](guide/Search_parameters.html) widget.
 *
 * **Warning:** you will need to use the **objectID** property available on every hit as a key
 * when iterating over them. This will ensure you have the best possible UI experience
 * especially on slow networks.
 * @name connectHits
 * @kind connector
 * @providedPropType {array.<object>} hits - the records that matched the search state
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, Highlight, connectHits } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 * const CustomHits = connectHits(({ hits }) => (
 *   <div>
 *     {hits.map(hit =>
 *       <p key={hit.objectID}>
 *         <Highlight attribute="name" hit={hit} />
 *       </p>
 *     )}
 *   </div>
 * ));
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <CustomHits />
 *   </InstantSearch>
 * );
 */

/* harmony default export */ var connectHits = (createConnector({
  displayName: 'AlgoliaHits',
  getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
    var results = getResults(searchResults, {
      ais: props.contextValue,
      multiIndexContext: props.indexContextValue
    });

    if (!results) {
      return {
        hits: []
      };
    }

    var hitsWithPositions = addAbsolutePositions(results.hits, results.hitsPerPage, results.page);
    var hitsWithPositionsAndQueryID = addQueryID(hitsWithPositions, results.queryID);
    return {
      hits: hitsWithPositionsAndQueryID
    };
  },

  /**
   * Hits needs to be considered as a widget to trigger a search,
   * even if no other widgets are used.
   *
   * To be considered as a widget you need either:
   * - getSearchParameters
   * - getMetadata
   * - transitionState
   *
   * See: createConnector.tsx
   */
  getSearchParameters: function getSearchParameters(searchParameters) {
    return searchParameters;
  }
}));
// CONCATENATED MODULE: ./src/AlgoliaSearch/elements/ResultsList/ResultPill/style.js
/* harmony default export */ var ResultPill_style = ({
  resultPill: {
    display: 'block',
    cursor: 'pointer'
  },
  resultPillLink: {
    display: 'block'
  }
});
// CONCATENATED MODULE: ./src/AlgoliaSearch/elements/ResultsList/ResultPill/index.js






const ResultPill = props => {
  const {
    children,
    elementIndex,
    sectionIndex,
    formattedHitURL,
    noResults,
    onSelect
  } = props;
  const {
    activeElementIndex,
    sectionLengthsArray,
    isResultsWindowOpen,
    scrollWindowRef,
    scrollableWindowHeight,
    scrollableWindowTopOffset,
    setScrollDistance,
    enterKeyWasPressed,
    setEnterKeyWasPressed,
    manuallySetActiveIndex
  } = useTabController();
  const resultPillRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(null);
  const clickableLink = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(null);
  const currentElementIndex = (sectionLengthsArray[sectionIndex - 1] || 0) + elementIndex;
  const isCurrentElement = activeElementIndex === currentElementIndex && isResultsWindowOpen && !noResults;
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    if (isCurrentElement && enterKeyWasPressed) {
      if (formattedHitURL) {
        clickableLink.current.click();
      } else if (onSelect) {
        onSelect();
      } else {
        alert('The formattedHitURL or onSelect props were not found, it is used to format the url for the pill! Without it, we dont know where to send you :)');
      }

      setEnterKeyWasPressed(false);
    }

    if (isCurrentElement) {
      const activePillBoundingRect = resultPillRef.current.getBoundingClientRect();
      const resultPillOffset = activePillBoundingRect.top + activePillBoundingRect.height;
      const activePillTopOffset = resultPillOffset - scrollableWindowTopOffset + scrollWindowRef.current.scrollTop;
      let distToScroll = 0;

      if (activePillTopOffset > scrollableWindowHeight) {
        distToScroll = activePillTopOffset - scrollableWindowHeight;
      }

      setScrollDistance(distToScroll);
    }
  }, [isCurrentElement, scrollableWindowHeight, scrollableWindowTopOffset, scrollWindowRef, setScrollDistance, setEnterKeyWasPressed, enterKeyWasPressed]);

  const handleHoverSelection = () => {
    manuallySetActiveIndex((sectionLengthsArray[sectionIndex - 1] || 0) + elementIndex);
  };

  if (noResults) {
    return Object(react_["jsx"])("li", {
      ref: resultPillRef,
      className: "mb-1",
      style: { ...ResultPill_style.resultPill
      },
      tabIndex: 0,
      role: "option",
      "aria-selected": isCurrentElement,
      onMouseEnter: handleHoverSelection
    }, Object(react_["jsx"])("div", {
      ref: clickableLink,
      className: "px-2 border border-border rounded text-accent-eight",
      style: { ...ResultPill_style.resultPillLink
      }
    }, children));
  }

  return Object(react_["jsx"])("li", {
    className: "mb-1",
    style: { ...ResultPill_style.resultPill
    },
    tabIndex: 0,
    role: "option",
    "aria-selected": isCurrentElement,
    ref: resultPillRef,
    onMouseEnter: handleHoverSelection
  }, Object(react_["jsx"])("a", {
    ref: clickableLink,
    href: !onSelect ? formattedHitURL : null,
    onClick: onSelect,
    className: `px-2 rounded outline-none ${isCurrentElement ? 'bg-accent-two text-foreground' : 'text-accent-eight'}`,
    style: { ...ResultPill_style.resultPillLink
    }
  }, children));
};

ResultPill.defaultProps = {
  elementIndex: null,
  sectionIndex: null,
  noResults: false,
  onSelect: null
};
ResultPill.propTypes = {
  children: prop_types_default.a.node.isRequired,
  elementIndex: prop_types_default.a.number,
  sectionIndex: prop_types_default.a.number,
  formattedHitURL: prop_types_default.a.string.isRequired,
  noResults: prop_types_default.a.bool,
  onSelect: prop_types_default.a.func
};
/* harmony default export */ var ResultsList_ResultPill = (ResultPill);
// CONCATENATED MODULE: ./src/AlgoliaSearch/elements/ResultsList/SectionTitle/index.js





const SectionTitle = ({
  title
}) => Object(react_["jsx"])("div", {
  className: "py-2 mb-2 top-0 bg-white border-b border-border"
}, Object(react_["jsx"])(Typography_Text, {
  is: "p"
}, title));

SectionTitle.propTypes = {
  title: prop_types_default.a.string.isRequired
};
/* harmony default export */ var ResultsList_SectionTitle = (SectionTitle);
// CONCATENATED MODULE: ./src/AlgoliaSearch/elements/ResultsList/index.js








const ResultsList = props => {
  const {
    hits,
    sectionTitle,
    sectionIndex,
    renderCardInfo,
    formatHitURL,
    onSelect,
    isSelectable
  } = props;
  const {
    appendNewSectionLength,
    shouldHideResults,
    setIsResultsWindowOpen
  } = useTabController();
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    if (hits.length > 0) {
      appendNewSectionLength(sectionIndex, hits.length);
    } else {
      appendNewSectionLength(sectionIndex, 0);
    }
  }, [hits.length]); // eslint-disable-line

  const formattedHitURL = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])(hit => {
    return formatHitURL ? formatHitURL(hit) : null;
  }, [formatHitURL]);

  if (Array.isArray(hits) && hits.length > 0 && !shouldHideResults) {
    return Object(react_["jsx"])(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Fragment, null, Object(react_["jsx"])(ResultsList_SectionTitle, {
      title: sectionTitle
    }), Object(react_["jsx"])("ul", {
      role: "listbox"
    }, typeof renderCardInfo === 'function' && hits.map((hit, index) => {
      return Object(react_["jsx"])(ResultsList_ResultPill, {
        key: index,
        elementIndex: index,
        sectionIndex: sectionIndex,
        formattedHitURL: formattedHitURL(hit),
        onSelect: isSelectable ? () => {
          onSelect(hit);
          setIsResultsWindowOpen(false);
        } : null
      }, renderCardInfo(hit));
    })));
  }

  return null;
};

ResultsList.propTypes = {
  hits: prop_types_default.a.arrayOf(prop_types_default.a.shape({})).isRequired,
  sectionTitle: prop_types_default.a.string.isRequired,
  sectionIndex: prop_types_default.a.number.isRequired,
  renderCardInfo: prop_types_default.a.func.isRequired,
  formatHitURL: prop_types_default.a.func,
  onSelect: prop_types_default.a.func
};
/* harmony default export */ var elements_ResultsList = (connectHits(ResultsList));
// CONCATENATED MODULE: ./src/AlgoliaSearch/assets/ArrowDown/index.js



const ArrowDown = () => {
  return Object(react_["jsx"])("svg", {
    width: "15",
    height: "15"
  }, Object(react_["jsx"])("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.2"
  }, Object(react_["jsx"])("path", {
    d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3"
  })));
};

/* harmony default export */ var assets_ArrowDown = (ArrowDown);
// CONCATENATED MODULE: ./src/AlgoliaSearch/assets/ArrowUp/index.js



const ArrowUp = () => {
  return Object(react_["jsx"])("svg", {
    width: "15",
    height: "15"
  }, Object(react_["jsx"])("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.2"
  }, Object(react_["jsx"])("path", {
    d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3"
  })));
};

/* harmony default export */ var assets_ArrowUp = (ArrowUp);
// CONCATENATED MODULE: ./src/AlgoliaSearch/elements/Controls/style.js
/* harmony default export */ var Controls_style = ({
  controlBar: {
    boxShadow: '0 -1px 0 0 #E2E8F0, 0 -3px 6px 0 #E2E8F0',
    display: 'flex',
    alignItems: 'center'
  },
  controlKey: {
    display: 'inline-block',
    boxShadow: 'inset 0 -2px 0 0 #cdcde6,inset 0 0 1px 1px #fff,0 1px 2px 1px rgba(30,35,90,0.4)',
    background: 'linear-gradient(-225deg,#d5dbe4,#f8f8f8)',
    padding: '.15rem'
  }
});
// CONCATENATED MODULE: ./src/AlgoliaSearch/elements/Controls/index.js







const Controls = () => {
  const controlsRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(null);
  const {
    setControlsHeight
  } = useTabController();
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    if (controlsRef !== null && controlsRef !== void 0 && controlsRef.current) {
      setControlsHeight(controlsRef.current.offsetHeight);
    }
  }, []);
  return Object(react_["jsx"])("div", {
    className: "p-3 bg-white rounded-b-md",
    style: { ...Controls_style.controlBar
    },
    ref: controlsRef
  }, Object(react_["jsx"])("span", {
    className: "mr-2 rounded-sm text-accent-four",
    style: { ...Controls_style.controlKey
    }
  }, Object(react_["jsx"])(assets_ArrowDown, null)), Object(react_["jsx"])("span", {
    className: "mr-2 rounded-sm text-accent-four",
    style: { ...Controls_style.controlKey
    }
  }, Object(react_["jsx"])(assets_ArrowUp, null)), Object(react_["jsx"])("small", {
    className: "text-accent-four"
  }, "to navigate"));
};

/* harmony default export */ var elements_Controls = (Controls);
// CONCATENATED MODULE: ./src/AlgoliaSearch/elements/Loader/index.js



const Loader = () => {
  return Object(react_["jsx"])("svg", {
    className: "animate-spin mt-2 mb-2 ml-auto mr-auto h-8 w-8 text-accent-three",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, Object(react_["jsx"])("circle", {
    className: "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    strokeWidth: "4"
  }), Object(react_["jsx"])("path", {
    className: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  }));
};

/* harmony default export */ var elements_Loader = (Loader);
// CONCATENATED MODULE: ./src/AlgoliaSearch/elements/NoResults/index.js




const NoResults = () => {
  return Object(react_["jsx"])("li", {
    className: "pb-2 pt-2",
    style: {
      display: "block"
    }
  }, Object(react_["jsx"])(Typography_Text, {
    is: "p",
    className: "p-2"
  }, "No results were found..."));
};

/* harmony default export */ var elements_NoResults = (NoResults);
// CONCATENATED MODULE: ./src/AlgoliaSearch/elements/SearchComponent/index.js












const SearchComponent = props => {
  const {
    ALGOLIA_APP_ID,
    ALGOLIA_API_SEARCH_KEY,
    indices,
    searchOperators,
    specialChar,
    scrollWindowHeight,
    customLoader,
    customNoResults,
    indexResultsLimit,
    className,
    placeholder,
    formatSelected,
    onSelect,
    inputProps
  } = props;
  const {
    activeElementIndex,
    scrollableWindowHeight,
    setScrollableWindowTopOffset,
    scrollableWindowTopOffset,
    scrollDistance,
    setScrollWindowRef,
    shouldBypassSearch,
    setShouldBypassSearch,
    setScrollableWindowHeight,
    isScrollDisabled,
    handleKeyNavigation,
    totalElementsCount,
    isResultsWindowOpen,
    setIsResultsWindowOpen,
    controlsHeight,
    searchInputHeight
  } = useTabController();
  const algoliaClient = algoliasearch_lite_umd_default()(ALGOLIA_APP_ID, ALGOLIA_API_SEARCH_KEY);
  const isSelectable = Boolean(onSelect);
  const searchClient = {
    search(requests) {
      if (shouldBypassSearch === true) return null;
      return algoliaClient.search(requests);
    }

  };
  const scrollWindowRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(null);
  const searchComponentRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(null);
  const [filterState, setFilterState] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])("");
  const [conditionalOperands, setConditionalOperands] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(null);
  const [isSearchEmpty, setIsSearchEmpty] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false);
  const [selectedItem, setSelectedItem] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])();

  const handleClickOutside = e => {
    if (searchComponentRef.current.contains(e.target)) {
      return;
    }

    setIsResultsWindowOpen(false);
  };

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    setScrollWindowRef(scrollWindowRef);
  }, [setScrollWindowRef]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    if (controlsHeight && searchInputHeight) {
      setScrollableWindowHeight(scrollWindowHeight - controlsHeight - searchInputHeight);
    } else {
      setScrollableWindowHeight(scrollWindowHeight);
    }
  }, [scrollWindowHeight, controlsHeight, searchInputHeight]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    if (Array.isArray(searchOperators) && searchOperators.length > 0) {
      const sortedSearchOperators = searchOperators.sort((a, b) => a.length - b.length);
      const adjustedSearchOperators = sortedSearchOperators.map(condition => `${specialChar}${condition}`);
      setConditionalOperands(adjustedSearchOperators);
    }
  }, [specialChar, searchOperators]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    const scrollableResultsBoundingRect = scrollWindowRef.current.getBoundingClientRect();

    if (scrollableResultsBoundingRect !== scrollableWindowTopOffset) {
      setScrollableWindowTopOffset(scrollableResultsBoundingRect.top);
    }
  }, [setScrollableWindowTopOffset, activeElementIndex]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    if (typeof scrollDistance === "number" && isResultsWindowOpen && !isScrollDisabled) {
      scrollWindowRef.current.scrollTo(0, scrollDistance);
    }
  }, [scrollDistance, isResultsWindowOpen, isScrollDisabled]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    let interval = null;

    if (totalElementsCount === 0) {
      setTimeout(() => {
        if (totalElementsCount === 0) {
          setIsSearchEmpty(true);
        }
      }, 800);
    } else {
      setIsSearchEmpty(false);
    }

    return clearInterval(interval);
  }, [totalElementsCount]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    if (isResultsWindowOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isResultsWindowOpen]);

  const handleOnSearchStateChange = ({
    query
  }) => {
    let filter = "";
    let operandFound = false;

    if (query) {
      conditionalOperands.forEach(operand => {
        const operandIndex = query.indexOf(operand);

        if (operandIndex !== -1) {
          const [fieldName, compareValue] = query.split(operand);
          filter = `${fieldName} ${operand.substr(specialChar.length)} ${compareValue}`;
          operandFound = true;
        }
      });

      if (!operandFound && query.indexOf(specialChar) !== -1) {
        const [fieldName, compareValue] = query.split(specialChar);
        filter = `${fieldName} = ${compareValue}`;
        operandFound = true;
      }

      setFilterState(operandFound ? filter : "");
    }
  };

  const configureFilterState = (searchConditions = null) => {
    if (Array.isArray(searchConditions) && searchConditions.length > 0) {
      const conditionalFilterState = searchConditions.reduce((acc, condition, index) => {
        const {
          conditionType,
          conditionString
        } = condition;

        if (index === 0) {
          if (filterState) return `${filterState} ${conditionType || "AND"} ${conditionString}`;
          return `${conditionString}`;
        }

        return `${acc} ${conditionType || "AND"} ${conditionString}`;
      }, "");
      return conditionalFilterState;
    }

    return filterState;
  };

  const handleOnKeyDown = e => {
    switch (e.keyCode) {
      case 40:
        handleKeyNavigation(navigationKeyTypes.ARROW_DOWN);
        break;

      case 38:
        handleKeyNavigation(navigationKeyTypes.ARROW_UP);
        break;

      case 13:
        handleKeyNavigation(navigationKeyTypes.ENTER);
        e.stopPropagation();
        e.preventDefault();
        break;

      default:
        setShouldBypassSearch(false);
        break;
    }
  };

  const handleOnSelect = hit => {
    if (isSelectable) {
      setSelectedItem(hit);
      onSelect(hit);
    }
  };

  const LoaderToRender = customLoader ? customLoader : Object(react_["jsx"])(elements_Loader, null);
  const NoResultsToRender = customNoResults ? customNoResults : Object(react_["jsx"])(elements_NoResults, null);
  return Object(react_["jsx"])("div", {
    ref: searchComponentRef,
    className: className
  }, Object(react_["jsx"])(widgets_InstantSearch, {
    searchClient: searchClient,
    indexName: indices[0].indexName,
    onSearchStateChange: handleOnSearchStateChange
  }, Object(react_["jsx"])("div", {
    onKeyDown: handleOnKeyDown,
    role: "listbox",
    className: "relative"
  }, Object(react_["jsx"])(elements_SearchBox, {
    id: ALGOLIA_APP_ID,
    selectedText: selectedItem ? formatSelected(selectedItem) : '',
    inputProps: inputProps,
    placeholder: placeholder,
    onSelect: handleOnSelect
  }), Object(react_["jsx"])("div", {
    className: "shadow-xl rounded absolute w-full bg-white border border-border",
    style: {
      visibility: `${isResultsWindowOpen ? "visible" : "hidden"}`
    }
  }, Object(react_["jsx"])("div", {
    className: "overflow-y-auto pl-2 pr-2",
    style: {
      maxHeight: `${scrollableWindowHeight}px`
    },
    ref: scrollWindowRef
  }, indices.map((algoliaIndice, sectionIndex) => {
    const {
      indexName,
      displayName,
      renderCardInfo,
      formatHitURL,
      searchConditions
    } = algoliaIndice;
    return Object(react_["jsx"])(widgets_Index, {
      key: sectionIndex,
      indexName: indexName,
      limit: 4
    }, Object(react_["jsx"])(Configure, {
      filters: configureFilterState(searchConditions),
      hitsPerPage: indexResultsLimit
    }), Object(react_["jsx"])(elements_ResultsList, {
      sectionTitle: displayName,
      renderCardInfo: renderCardInfo,
      sectionIndex: sectionIndex,
      formatHitURL: formatHitURL,
      onSelect: handleOnSelect,
      isSelectable: isSelectable
    }));
  }), totalElementsCount === 0 && isSearchEmpty && NoResultsToRender, totalElementsCount === 0 && !isSearchEmpty && LoaderToRender), Object(react_["jsx"])(elements_Controls, null)))));
};

SearchComponent.defaultProps = {
  scrollWindowHeight: 400,
  customLoader: null,
  customNoResults: null
};
SearchComponent.propTypes = {
  ALGOLIA_APP_ID: prop_types_default.a.string.isRequired,
  ALGOLIA_API_SEARCH_KEY: prop_types_default.a.string.isRequired,
  specialChar: prop_types_default.a.string.isRequired,
  searchOperators: prop_types_default.a.arrayOf(prop_types_default.a.string).isRequired,
  indices: prop_types_default.a.arrayOf(prop_types_default.a.shape({
    indexName: prop_types_default.a.string,
    displayName: prop_types_default.a.string,
    renderCardInfo: prop_types_default.a.func,
    formatHitURL: prop_types_default.a.func,
    searchConditions: prop_types_default.a.arrayOf(prop_types_default.a.shape({
      conditionType: prop_types_default.a.oneOf(["OR", "AND"]),
      conditionString: prop_types_default.a.string
    }))
  })).isRequired,
  scrollWindowHeight: prop_types_default.a.number,
  customLoader: prop_types_default.a.node,
  customNoResults: prop_types_default.a.node,
  indexResultsLimit: prop_types_default.a.number.isRequired,
  onSelect: prop_types_default.a.func,
  formatSelected: prop_types_default.a.func
};
/* harmony default export */ var elements_SearchComponent = (SearchComponent);
// CONCATENATED MODULE: ./src/AlgoliaSearch/index.js






const AlgoliaSearch = props => {
  const {
    ALGOLIA_APP_ID,
    ALGOLIA_API_SEARCH_KEY
  } = props;

  if (!ALGOLIA_APP_ID || !ALGOLIA_API_SEARCH_KEY) {
    return Object(react_["jsx"])(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Fragment, null, !ALGOLIA_APP_ID && Object(react_["jsx"])("h1", null, "ALGOLIA_APP_ID prop was not found and is required."), !ALGOLIA_API_SEARCH_KEY && Object(react_["jsx"])("h1", null, "ALGOLIA_API_SEARCH_KEY prop was not found and is required."));
  }

  return Object(react_["jsx"])(providers_TabController, null, Object(react_["jsx"])(elements_SearchComponent, props));
};

AlgoliaSearch.defaultProps = {
  indexResultsLimit: 8,
  scrollWindowHeight: 400,
  className: null,
  parentWindowHeight: null
};
AlgoliaSearch.propTypes = {
  /**
   * APP ID from your Algolia project.
   */
  ALGOLIA_APP_ID: prop_types_default.a.string.isRequired,

  /**
   * API Search Key from your Algolia Project.
   */
  ALGOLIA_API_SEARCH_KEY: prop_types_default.a.string.isRequired,
  specialChar: prop_types_default.a.string.isRequired,
  searchOperators: prop_types_default.a.arrayOf(prop_types_default.a.string).isRequired,
  indices: prop_types_default.a.arrayOf(prop_types_default.a.shape({
    indexName: prop_types_default.a.string,
    displayName: prop_types_default.a.string,
    renderCardInfo: prop_types_default.a.func,
    formatHitURL: prop_types_default.a.func,
    searchConditions: prop_types_default.a.arrayOf(prop_types_default.a.shape({
      conditionType: prop_types_default.a.oneOf(["OR", "AND"]),
      conditionString: prop_types_default.a.string
    }))
  })).isRequired,
  indexResultsLimit: prop_types_default.a.number,
  scrollWindowHeight: prop_types_default.a.number,
  customLoader: prop_types_default.a.node,
  customNoResults: prop_types_default.a.node,
  className: prop_types_default.a.string
};
/* harmony default export */ var src_AlgoliaSearch = (AlgoliaSearch);
// CONCATENATED MODULE: ./src/Badge/index.js





const Badge = ({
  style,
  children,
  minimal,
  className,
  rounded
}) => {
  let badgeStyle = [{
    "text-foreground": style === "default",
    "text-success": style === "positive",
    "text-warning": style === "warning",
    "text-error": style === "danger"
  }];
  let isRounded = [{
    "rounded-full text-white": rounded,
    "bg-foreground": style === "default",
    "bg-success": style == "positive",
    "bg-warning": style === "warning",
    "bg-error": style === "danger"
  }];
  return Object(react_["jsx"])("div", {
    className: classnames_default()("inline-flex items-center px-2.5 rounded text-sm font-medium h-6 leading-6", !rounded && badgeStyle, !rounded && "border border-border", rounded && isRounded, className)
  }, !minimal && !rounded && Object(react_["jsx"])("svg", {
    className: classnames_default()("-ml-0.5 mr-1.5 h-2 w-2", badgeStyle),
    fill: "currentColor",
    viewBox: "0 0 8 8"
  }, Object(react_["jsx"])("circle", {
    cx: "4",
    cy: "4",
    r: "3"
  })), children);
};

Badge.defaultProps = {
  style: "default",
  rounded: false,
  minimal: false
};
Badge.propTypes = {
  /**
   * The color of the badge.
   */
  style: prop_types_default.a.oneOf(["default", "positive", "warning", "danger"]),

  /**
   * When true, renders a rounded badge with inverted colors.
   */
  rounded: prop_types_default.a.bool,

  /**
   * When true, renders a badge without the prepending dot.
   */
  minimal: prop_types_default.a.bool
};
/* harmony default export */ var src_Badge = (Badge);
// CONCATENATED MODULE: ./node_modules/@radix-ui/react-id/dist/index.module.js
const index_module_t={prefix:Math.round(1e10*Math.random()),current:0},index_module_n=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createContext"](index_module_t);const IdProvider=o=>{const i=external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"](index_module_n),s=i===index_module_t,a=external_root_React_commonjs2_react_commonjs_react_amd_react_["useMemo"]((()=>({prefix:s?0:++i.prefix,current:0})),[s,i]);/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_n.Provider,extends_extends({value:a},o))};function useId(r){const o=external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"](index_module_n);return Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)||o!==index_module_t||console.warn("When server rendering, you must wrap your application in an <IdProvider> to ensure consistent ids are generated between the client and server."),external_root_React_commonjs2_react_commonjs_react_amd_react_["useMemo"]((()=>r||`radix-id-${o.prefix}-${++o.current}`),[r])}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-focus-guards/dist/index.module.js
let dist_index_module_t=0;function FocusGuards(e){return useFocusGuards(),e.children}function useFocusGuards(){external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{var e,n;const r=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=r[0])&&void 0!==e?e:index_module_o()),document.body.insertAdjacentElement("beforeend",null!==(n=r[1])&&void 0!==n?n:index_module_o()),dist_index_module_t++,()=>{1===dist_index_module_t&&document.querySelectorAll("[data-radix-focus-guard]").forEach((e=>e.remove())),dist_index_module_t--}}),[])}function index_module_o(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}const Root=FocusGuards;
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js
function useCallbackRef(r){const t=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](r);return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{t.current=r})),external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"](((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-use-direction/dist/index.module.js
function useDirection(t,n){const[r,o]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"]("ltr"),[i,u]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](),c=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](0);return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{if(void 0===n&&null!=t&&t.parentElement){const e=getComputedStyle(t.parentElement);u(e)}}),[t,n]),external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>(void 0===n&&function e(){c.current=requestAnimationFrame((()=>{const t=null==i?void 0:i.direction;t&&o(t),e()}))}(),()=>cancelAnimationFrame(c.current))),[i,n,o]),n||r}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-compose-refs/dist/index.module.js
function composeRefs(...o){return e=>o.forEach((o=>function(o,e){"function"==typeof o?o(e):null!=o&&(o.current=e)}(o,e)))}function useComposedRefs(...e){return external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"](composeRefs(...e),e)}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-slot/dist/index.module.js
const Slot=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,o)=>{const{children:l,...c}=e;return 1===external_root_React_commonjs2_react_commonjs_react_amd_react_["Children"].count(l)?/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_r,extends_extends({},c,{ref:o}),l):/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](external_root_React_commonjs2_react_commonjs_react_amd_react_["Fragment"],null,external_root_React_commonjs2_react_commonjs_react_amd_react_["Children"].map(l,(e=>/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["isValidElement"](e)&&e.type===Slottable?/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_r,extends_extends({},c,{ref:o}),e.props.children):e)))}));Slot.displayName="Slot";const index_module_r=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((n,r)=>{const{children:l,...c}=n,i=external_root_React_commonjs2_react_commonjs_react_amd_react_["Children"].only(l);/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["isValidElement"](i)?/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"](i,{...dist_index_module_o(c,i.props),ref:composeRefs(r,i.ref)}):null}));index_module_r.displayName="SlotClone";const Slottable=({children:e})=>e;function dist_index_module_o(e,t){const n={...t};for(const r in t){const o=e[r],c=t[r];/^on[A-Z]/.test(r)?n[r]=index_module_l(c,o):"style"===r&&(n[r]={...o,...c})}return{...e,...n}}function index_module_l(e,t){return function(...n){null==e||e(...n);n[0]instanceof Event&&n[0].defaultPrevented||null==t||t(...n)}}const index_module_Root=Slot;
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js
function useControllableState({prop:o,defaultProp:r,onChange:n=(()=>{})}){const[a,u]=function({defaultProp:o,onChange:r}){const n=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](o),[a]=n,u=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](a),c=useCallbackRef(r);return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{u.current!==a&&(c(a),u.current=a)}),[a,u,c]),n}({defaultProp:r,onChange:n}),c=void 0!==o,f=c?o:a,l=useCallbackRef(n);return[f,external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"]((e=>{if(c){const t=e,r="function"==typeof e?t(o):e;r!==o&&l(r)}else u(e)}),[c,o,u,l])]}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-primitive/dist/index.module.js
const dist_index_module_r="div";const Primitive=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((o,i)=>{const{as:n=dist_index_module_r,...a}=o;/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](n,extends_extends({},a,{ref:i}))}));/*#__PURE__*/const dist_index_module_Root=Primitive;function extendPrimitive(r,o){const i=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((i,n)=>{const a=r,s={...o.defaultProps,...i};/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](a,extends_extends({},s,{ref:n}))}));return i.displayName=o.displayName||"Extended"+r.displayName,i}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-context/dist/index.module.js
function createContext(t){const r=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createContext"](null);function n(t){const{children:n,...o}=t,u=external_root_React_commonjs2_react_commonjs_react_amd_react_["useMemo"]((()=>o),Object.values(o));/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](r.Provider,{value:u},n)}return n.displayName=t+"Provider",[n,function(n){const o=external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"](r);if(null===o)throw new Error(`\`${n}\` must be used within \`${t}\``);return o}]}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-collection/dist/index.module.js
function createCollection(){const n=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createContext({}),o=e=>{const{children:r}=e,o=external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.useRef(null),c=external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.useRef(new Map).current;/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(n.Provider,{value:external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.useMemo((()=>({itemMap:c,collectionRef:o})),[c])},r)},c=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.forwardRef(((o,c)=>{const{children:f}=o,l=external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.useContext(n),u=useComposedRefs(c,l.collectionRef);/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Slot,{ref:u},f)})),f="data-radix-collection-item",l=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.forwardRef(((o,c)=>{const{children:l,...u}=o,i=external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.useRef(null),a=useComposedRefs(c,i),s=external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.useContext(n);return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.useEffect((()=>(s.itemMap.set(i,{ref:i,...u}),()=>{s.itemMap.delete(i)}))),/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Slot,{[f]:"",ref:a},l)}));return[o,c,l,function(){const e=external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.useContext(n);return{getItems(){const r=Array.from(e.collectionRef.current.querySelectorAll(`[${f}]`));return Array.from(e.itemMap.values()).sort(((e,t)=>r.indexOf(e.ref.current)-r.indexOf(t.ref.current)))}}}]}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/primitive/dist/index.module.js
function composeEventHandlers(e,n,{checkForDefaultPrevented:t=!0}={}){return function(r){if(null==e||e(r),!1===t||!r.defaultPrevented)return null==n?void 0:n(r)}}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-roving-focus/dist/index.module.js
const index_module_f={bubbles:!1,cancelable:!0},[dist_index_module_l,index_module_m,index_module_p,index_module_d]=createCollection(),index_module_v="span",[index_module_g,index_module_w]=createContext("RovingFocusGroup");const RovingFocusGroup=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,t)=>/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](dist_index_module_l,null,/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_m,null,/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_b,extends_extends({},e,{ref:t}))))));/*#__PURE__*/const index_module_b=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((o,n)=>{const{as:a=index_module_v,orientation:l,dir:m="ltr",loop:p=!1,currentTabStopId:w,defaultCurrentTabStopId:b,onCurrentTabStopIdChange:x,onEntryFocus:F,...I}=o,R=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](null),h=useComposedRefs(n,R),[T=null,A]=useControllableState({prop:w,defaultProp:b,onChange:x}),[y,D]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](!1),S=useCallbackRef(F),{getItems:C}=index_module_d(),G=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](!1);return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{const e=R.current;if(e)return e.addEventListener("rovingFocusGroup.onEntryFocus",S),()=>e.removeEventListener("rovingFocusGroup.onEntryFocus",S)}),[S]),/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_g,{orientation:l,dir:m,loop:p,currentTabStopId:T,onItemFocus:external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"]((e=>A(e)),[A]),onItemShiftTab:external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"]((()=>D(!0)),[])},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Primitive,extends_extends({tabIndex:y?-1:0,"aria-orientation":l,"data-orientation":l},I,{as:a,ref:h,style:{outline:"none",...o.style},onMouseDown:composeEventHandlers(o.onMouseDown,(()=>{G.current=!0})),onFocus:composeEventHandlers(o.onFocus,(e=>{const t=!G.current;if(e.target===e.currentTarget&&t&&!y){const t=new Event("rovingFocusGroup.onEntryFocus",index_module_f);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){const e=C().filter((e=>e.focusable));index_module_E([e.find((e=>e.active)),e.find((e=>e.id===T)),...e].filter(Boolean).map((e=>e.ref.current)))}}G.current=!1})),onBlur:composeEventHandlers(o.onBlur,(()=>D(!1)))})))})),index_module_x="span";const RovingFocusItem=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,t)=>{const{as:n=index_module_x,focusable:i=!0,active:a=!1,...f}=e,l=useId(),m=index_module_w("RovingFocusItem"),v=m.currentTabStopId===l,{getItems:g}=index_module_d();/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_p,{id:l,focusable:i,active:a},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Primitive,extends_extends({tabIndex:v?0:-1,"data-orientation":m.orientation},f,{as:n,ref:t,onMouseDown:composeEventHandlers(e.onMouseDown,(e=>{i?m.onItemFocus(l):e.preventDefault()})),onFocus:composeEventHandlers(e.onFocus,(()=>m.onItemFocus(l))),onKeyDown:composeEventHandlers(e.onKeyDown,(e=>{if("Tab"===e.key&&e.shiftKey)return void m.onItemShiftTab();if(e.target!==e.currentTarget)return;const t=function(e,t,r){const o=function(e,t){return"rtl"!==t?e:"ArrowLeft"===e?"ArrowRight":"ArrowRight"===e?"ArrowLeft":e}(e.key,r);return"vertical"===t&&["ArrowLeft","ArrowRight"].includes(o)||"horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)?void 0:index_module_F[o]}(e,m.orientation,m.dir);if(void 0!==t){e.preventDefault();let n=g().filter((e=>e.focusable)).map((e=>e.ref.current));if("last"===t)n.reverse();else if("prev"===t||"next"===t){"prev"===t&&n.reverse();const i=n.indexOf(e.currentTarget);n=m.loop?(o=i+1,(r=n).map(((e,t)=>r[(o+t)%r.length]))):n.slice(i+1)}setTimeout((()=>index_module_E(n)))}var r,o}))})))}));/*#__PURE__*/const index_module_F={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function index_module_E(e){const t=document.activeElement;for(const r of e){if(r===t)return;if(r.focus(),document.activeElement!==t)return}}const react_roving_focus_dist_index_module_Root=RovingFocusGroup;const Item=RovingFocusItem;
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js
const useLayoutEffect=Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)?external_root_React_commonjs2_react_commonjs_react_amd_react_["useLayoutEffect"]:()=>{};
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-portal/dist/index.module.js
const Portal=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((a,i)=>{var n,d;const{containerRef:m,style:s,...u}=a,c=null!==(n=null==m?void 0:m.current)&&void 0!==n?n:null===globalThis||void 0===globalThis||null===(d=globalThis.document)||void 0===d?void 0:d.body,[,f]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"]({});return useLayoutEffect((()=>{f({})}),[]),c?/*#__PURE__*/external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default.a.createPortal(/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Primitive,extends_extends({"data-radix-portal":""},u,{ref:i,style:c===document.body?{position:"absolute",top:0,left:0,zIndex:2147483647,...s}:void 0})),c):null}));/*#__PURE__*/const react_portal_dist_index_module_Root=Portal;
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-arrow/dist/index.module.js
const Arrow=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((i,n)=>{const{as:s=react_arrow_dist_index_module_o,...a}=i;/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Primitive,extends_extends({},a,{as:s,ref:n}))}));const react_arrow_dist_index_module_o=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,o)=>{const{width:i=10,height:n=5,...s}=e;/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("svg",extends_extends({},s,{ref:o,width:i,height:n,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("polygon",{points:"0,0 30,0 15,10"}))}));/*#__PURE__*/const react_arrow_dist_index_module_Root=Arrow;
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-use-size/dist/index.module.js
function useSize(r){const[i,t]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](void 0);return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{if(r){const e=new ResizeObserver((e=>{if(!Array.isArray(e))return;if(!e.length)return;const i=e[0];let o,n;if("borderBoxSize"in i){const e=i.borderBoxSize,r=Array.isArray(e)?e[0]:e;o=r.inlineSize,n=r.blockSize}else{const e=r.getBoundingClientRect();o=e.width,n=e.height}t({width:o,height:n})}));return e.observe(r,{box:"border-box"}),()=>{t(void 0),e.unobserve(r)}}}),[r]),i}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/rect/dist/index.module.js
function observeElementRect(n,o){const a=index_module_e.get(n);return void 0===a?(index_module_e.set(n,{rect:{},callbacks:[o]}),1===index_module_e.size&&(rect_dist_index_module_t=requestAnimationFrame(index_module_c))):a.callbacks.push(o),()=>{const c=index_module_e.get(n);if(void 0===c)return;const a=c.callbacks.indexOf(o);a>-1&&c.callbacks.splice(a,1),0===c.callbacks.length&&(index_module_e.delete(n),0===index_module_e.size&&cancelAnimationFrame(rect_dist_index_module_t))}}let rect_dist_index_module_t;const index_module_e=new Map;function index_module_c(){const n=[];index_module_e.forEach(((t,e)=>{const c=e.getBoundingClientRect();var o,a;o=t.rect,a=c,(o.width!==a.width||o.height!==a.height||o.top!==a.top||o.right!==a.right||o.bottom!==a.bottom||o.left!==a.left)&&(t.rect=c,n.push(t))})),n.forEach((t=>{t.callbacks.forEach((e=>e(t.rect)))})),rect_dist_index_module_t=requestAnimationFrame(index_module_c)}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-use-rect/dist/index.module.js
function useRect(e){const[o,c]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"]();return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{if(e){const r=observeElementRect(e,c);return()=>{c(void 0),r()}}}),[e]),o}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/popper/dist/index.module.js
const SIDE_OPTIONS=["top","right","bottom","left"];const ALIGN_OPTIONS=["start","center","end"];function getPlacementData({anchorRect:p,popperSize:c,arrowSize:f,arrowOffset:l=0,side:d,sideOffset:h=0,align:x,alignOffset:g=0,shouldAvoidCollisions:u=!0,collisionBoundariesRect:w,collisionTolerance:m=0}){if(!p||!c||!w)return{popperStyles:popper_dist_index_module_o,arrowStyles:dist_index_module_n};const y=function(e,r,o=0,n=0,i){const p=i?i.height:0,a=popper_dist_index_module_t(r,e,"x"),s=popper_dist_index_module_t(r,e,"y"),c=s.before-o-p,f=s.after+o+p,l=a.before-o-p,d=a.after+o+p;return{top:{start:{x:a.start+n,y:c},center:{x:a.center,y:c},end:{x:a.end-n,y:c}},right:{start:{x:d,y:s.start+n},center:{x:d,y:s.center},end:{x:d,y:s.end-n}},bottom:{start:{x:a.start+n,y:f},center:{x:a.center,y:f},end:{x:a.end-n,y:f}},left:{start:{x:l,y:s.start+n},center:{x:l,y:s.center},end:{x:l,y:s.end-n}}}}(c,p,h,g,f),b=y[d][x];if(!1===u){const t=dist_index_module_e(b);let o=dist_index_module_n;f&&(o=index_module_i({popperSize:c,arrowSize:f,arrowOffset:l,side:d,align:x}));return{popperStyles:{...t,"--radix-popper-transform-origin":popper_dist_index_module_r(c,d,x,l,f)},arrowStyles:o,placedSide:d,placedAlign:x}}const S=DOMRect.fromRect({...c,...b}),$=(O=w,z=m,DOMRect.fromRect({width:O.width-2*z,height:O.height-2*z,x:O.left+z,y:O.top+z}));var O,z;const R=index_module_s(S,$),M=y[index_module_a(d)][x],D=function(t,e,r){const o=index_module_a(t);return e[t]&&!r[o]?o:t}(d,R,index_module_s(DOMRect.fromRect({...c,...M}),$)),A=function(t,e,r,o,n){const i="top"===r||"bottom"===r,p=i?"left":"top",a=i?"right":"bottom",s=i?"width":"height",c=e[s]>t[s];if(("start"===o||"center"===o)&&(n[p]&&c||n[a]&&!c))return"end";if(("end"===o||"center"===o)&&(n[a]&&c||n[p]&&!c))return"start";return o}(c,p,d,x,R),I=dist_index_module_e(y[D][A]);let C=dist_index_module_n;f&&(C=index_module_i({popperSize:c,arrowSize:f,arrowOffset:l,side:D,align:A}));return{popperStyles:{...I,"--radix-popper-transform-origin":popper_dist_index_module_r(c,D,A,l,f)},arrowStyles:C,placedSide:D,placedAlign:A}}function popper_dist_index_module_t(t,e,r){const o=t["x"===r?"left":"top"],n="x"===r?"width":"height",i=t[n],p=e[n];return{before:o-p,start:o,center:o+(i-p)/2,end:o+i-p,after:o+i}}function dist_index_module_e(t){return{position:"absolute",top:0,left:0,minWidth:"max-content",willChange:"transform",transform:`translate3d(${Math.round(t.x+window.scrollX)}px, ${Math.round(t.y+window.scrollY)}px, 0)`}}function popper_dist_index_module_r(t,e,r,o,n){const i="top"===e||"bottom"===e,p=n?n.width:0,a=n?n.height:0,s=p/2+o;let c="",f="";return i?(c={start:`${s}px`,center:"center",end:t.width-s+"px"}[r],f="top"===e?`${t.height+a}px`:-a+"px"):(c="left"===e?`${t.width+a}px`:-a+"px",f={start:`${s}px`,center:"center",end:t.height-s+"px"}[r]),`${c} ${f}`}const popper_dist_index_module_o={position:"fixed",top:0,left:0,opacity:0,transform:"translate3d(0, -200%, 0)"},dist_index_module_n={position:"absolute",opacity:0};function index_module_i({popperSize:t,arrowSize:e,arrowOffset:r,side:o,align:n}){const i=(t.width-e.width)/2,a=(t.height-e.width)/2,s={top:0,right:90,bottom:180,left:-90}[o],c=Math.max(e.width,e.height),f={width:`${c}px`,height:`${c}px`,transform:`rotate(${s}deg)`,willChange:"transform",position:"absolute",[o]:"100%",direction:dist_index_module_p(o,n)};return"top"!==o&&"bottom"!==o||("start"===n&&(f.left=`${r}px`),"center"===n&&(f.left=`${i}px`),"end"===n&&(f.right=`${r}px`)),"left"!==o&&"right"!==o||("start"===n&&(f.top=`${r}px`),"center"===n&&(f.top=`${a}px`),"end"===n&&(f.bottom=`${r}px`)),f}function dist_index_module_p(t,e){return("top"!==t&&"right"!==t||"end"!==e)&&("bottom"!==t&&"left"!==t||"end"===e)?"ltr":"rtl"}function index_module_a(t){return{top:"bottom",right:"left",bottom:"top",left:"right"}[t]}function index_module_s(t,e){return{top:t.top<e.top,right:t.right>e.right,bottom:t.bottom>e.bottom,left:t.left<e.left}}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-popper/dist/index.module.js
const[react_popper_dist_index_module_p,react_popper_dist_index_module_l]=createContext("Popper");const Popper=({children:e})=>{const[r,o]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](null);/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](react_popper_dist_index_module_p,{anchor:r,onAnchorChange:o},e)};/*#__PURE__*/const PopperAnchor=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,o)=>{const{virtualRef:t,children:n,...a}=e,p=react_popper_dist_index_module_l("PopperAnchor"),f=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](null),d=useComposedRefs(o,f);return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{p.onAnchorChange((null==t?void 0:t.current)||f.current)})),t?null:/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Primitive,extends_extends({},a,{ref:d}),n)}));/*#__PURE__*/const[dist_index_module_f,dist_index_module_d]=createContext("PopperContent");const PopperContent=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,n)=>{const{side:p="bottom",sideOffset:d,align:u="center",alignOffset:m,collisionTolerance:w,avoidCollisions:h=!0,...x}=e,A=react_popper_dist_index_module_l("PopperContent"),[v,g]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](),E=useRect(A.anchor),[y,C]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](null),P=useSize(y),[S,R]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](null),O=useSize(S),b=useComposedRefs(n,(e=>C(e))),z=function(){const[e,r]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](void 0);return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{let e;function o(){r({width:window.innerWidth,height:window.innerHeight})}function t(){window.clearTimeout(e),e=window.setTimeout(o,100)}return o(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)}),[]),e}(),T=z?DOMRect.fromRect({...z,x:0,y:0}):void 0,{popperStyles:k,arrowStyles:L,placedSide:B,placedAlign:D}=getPlacementData({anchorRect:E,popperSize:P,arrowSize:O,arrowOffset:v,side:p,sideOffset:d,align:u,alignOffset:m,shouldAvoidCollisions:h,collisionBoundariesRect:T,collisionTolerance:w}),H=void 0!==B;/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("div",{style:k,"data-radix-popper-content-wrapper":""},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](dist_index_module_f,{arrowStyles:L,onArrowChange:R,onArrowOffsetChange:g},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Primitive,extends_extends({"data-side":B,"data-align":D},x,{style:{...x.style,animation:H?void 0:"none"},ref:b}))))}));/*#__PURE__*/const PopperArrow=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"]((function(r,o){const{offset:t,...n}=r,i=dist_index_module_d("PopperArrow"),{onArrowOffsetChange:a}=i;return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>a(t)),[a,t]),/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("span",{style:{...i.arrowStyles,pointerEvents:"none"}},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("span",{ref:i.onArrowChange,style:{display:"inline-block",verticalAlign:"top",pointerEvents:"auto"}},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](react_arrow_dist_index_module_Root,extends_extends({},n,{ref:o,style:{...n.style,display:"block"}}))))}));/*#__PURE__*/const react_popper_dist_index_module_Root=Popper;const Anchor=PopperAnchor;const index_module_Content=PopperContent;const index_module_Arrow=PopperArrow;
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-presence/dist/index.module.js
const Presence=u=>{const{present:o,children:i}=u,s=function(n){const[u,o]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](),i=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"]({}),s=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](n),a=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](),c=n?"mounted":"unmounted",[d,m]=function(e,n){return external_root_React_commonjs2_react_commonjs_react_amd_react_["useReducer"](((e,t)=>{const r=n[e][t];return null!=r?r:e}),e)}(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return useLayoutEffect((()=>{const e=i.current,t=s.current;if(t!==n){const u=a.current,o=react_presence_dist_index_module_r(e);if(n)m("MOUNT");else if("none"===o||"none"===(null==e?void 0:e.display))m("UNMOUNT");else{const e=u!==o;m(t&&e?"ANIMATION_OUT":"UNMOUNT")}s.current=n}}),[n,m]),useLayoutEffect((()=>{if(u){const e=e=>{const n=react_presence_dist_index_module_r(i.current).includes(e.animationName);e.target===u&&n&&m("ANIMATION_END")},n=e=>{e.target===u&&(a.current=react_presence_dist_index_module_r(i.current))};return u.addEventListener("animationstart",n),u.addEventListener("animationcancel",e),u.addEventListener("animationend",e),()=>{u.removeEventListener("animationstart",n),u.removeEventListener("animationcancel",e),u.removeEventListener("animationend",e)}}}),[u,m]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"]((e=>{e&&(i.current=getComputedStyle(e),o(e))}),[])}}(o),a="function"==typeof i?i({present:s.isPresent}):external_root_React_commonjs2_react_commonjs_react_amd_react_["Children"].only(i),c=useComposedRefs(s.ref,a.ref);return"function"==typeof i||s.isPresent?/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"](a,{ref:c}):null};function react_presence_dist_index_module_r(e){return(null==e?void 0:e.animationName)||"none"}Presence.displayName="Presence";
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-focus-scope/dist/index.module.js
const dist_index_module_c={bubbles:!1,cancelable:!0};const FocusScope=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((i,f)=>{const{loop:l=!1,trapped:m=!1,onMountAutoFocus:p,onUnmountAutoFocus:v,...E}=i,[F,S]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](null),b=useCallbackRef(p),T=useCallbackRef(v),y=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](null),L=useComposedRefs(f,(e=>S(e))),h=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"]({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{if(m){function e(e){if(h.paused||!F)return;const t=e.target;F.contains(t)?y.current=t:dist_index_module_a(y.current,{select:!0})}function t(e){!h.paused&&F&&(F.contains(e.relatedTarget)||dist_index_module_a(y.current,{select:!0}))}return document.addEventListener("focusin",e),document.addEventListener("focusout",t),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t)}}}),[m,F,h.paused]),external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{if(F){react_focus_scope_dist_index_module_d.add(h);const e=document.activeElement;if(!F.contains(e)){const t=new Event("focusScope.autoFocusOnMount",dist_index_module_c);F.addEventListener("focusScope.autoFocusOnMount",b),F.dispatchEvent(t),t.defaultPrevented||(!function(e,{select:t=!1}={}){const n=document.activeElement;for(const o of e)if(dist_index_module_a(o,{select:t}),document.activeElement!==n)return}(react_focus_scope_dist_index_module_r(F),{select:!0}),document.activeElement===e&&dist_index_module_a(F))}return()=>{F.removeEventListener("focusScope.autoFocusOnMount",b),setTimeout((()=>{const t=new Event("focusScope.autoFocusOnUnmount",dist_index_module_c);F.addEventListener("focusScope.autoFocusOnUnmount",T),F.dispatchEvent(t),t.defaultPrevented||dist_index_module_a(null!=e?e:document.body,{select:!0}),F.removeEventListener("focusScope.autoFocusOnUnmount",T),react_focus_scope_dist_index_module_d.remove(h)}),0)}}}),[F,b,T,h]);const x=external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"]((e=>{if(!l&&!m)return;if(h.paused)return;const t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,n=document.activeElement;if(t&&n){const t=e.currentTarget,[o,u]=function(e){const t=react_focus_scope_dist_index_module_r(e),n=dist_index_module_s(t,e),o=dist_index_module_s(t.reverse(),e);return[n,o]}(t);o&&u?e.shiftKey||n!==u?e.shiftKey&&n===o&&(e.preventDefault(),l&&dist_index_module_a(u,{select:!0})):(e.preventDefault(),l&&dist_index_module_a(o,{select:!0})):n===t&&e.preventDefault()}}),[l,m,h.paused]);/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Primitive,extends_extends({tabIndex:-1},E,{ref:L,onKeyDown:x}))}));/*#__PURE__*/function react_focus_scope_dist_index_module_r(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{const t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function dist_index_module_s(e,t){for(const n of e)if(!dist_index_module_i(n,{upTo:t}))return n}function dist_index_module_i(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e;){if(void 0!==t&&e===t)return!1;if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}function dist_index_module_a(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&function(e){return e instanceof HTMLInputElement&&"select"in e}(e)&&t&&e.select()}}const react_focus_scope_dist_index_module_d=function(){let e=[];return{add(t){const n=e[0];t!==n&&(null==n||n.pause()),e=react_focus_scope_dist_index_module_f(e,t),e.unshift(t)},remove(t){var n;e=react_focus_scope_dist_index_module_f(e,t),null===(n=e[0])||void 0===n||n.resume()}}}();function react_focus_scope_dist_index_module_f(e,t){const n=[...e],o=n.indexOf(t);return-1!==o&&n.splice(o,1),n}const react_focus_scope_dist_index_module_Root=FocusScope;
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-use-escape-keydown/dist/index.module.js
function useEscapeKeydown(n){const o=useCallbackRef(n);external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{const e=e=>{"Escape"===e.key&&o(e)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}),[o])}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-use-body-pointer-events/dist/index.module.js
let react_use_body_pointer_events_dist_index_module_n,react_use_body_pointer_events_dist_index_module_o=0;function useBodyPointerEvents({disabled:r}){const u=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](!1),c=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](!1);external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{const e=e=>{const t="mouse"===e.pointerType;u.current=!t,c.current=t&&0===e.button},t=()=>{u.current=!1,c.current=!1};return document.addEventListener("pointerdown",e),document.addEventListener("pointerup",t),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("pointerup",t)}}),[]),useLayoutEffect((()=>{if(r){function e(){0===react_use_body_pointer_events_dist_index_module_o&&(document.body.style.pointerEvents=react_use_body_pointer_events_dist_index_module_n)}return 0===react_use_body_pointer_events_dist_index_module_o&&(react_use_body_pointer_events_dist_index_module_n=document.body.style.pointerEvents),document.body.style.pointerEvents="none",react_use_body_pointer_events_dist_index_module_o++,()=>{react_use_body_pointer_events_dist_index_module_o--,u.current?document.addEventListener("click",e,{once:!0}):c.current?document.addEventListener("pointerup",e,{once:!0}):e()}}}),[r])}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-dismissable-layer/dist/index.module.js
const[react_dismissable_layer_dist_index_module_s,react_dismissable_layer_dist_index_module_a]=dist_index_module_E(),[react_dismissable_layer_dist_index_module_c,react_dismissable_layer_dist_index_module_l]=index_module_C(),[react_dismissable_layer_dist_index_module_d,dist_index_module_m]=dist_index_module_E("TotalLayerCountWithDisabledOutsidePointerEventsProvider"),[react_dismissable_layer_dist_index_module_f,react_dismissable_layer_dist_index_module_p]=index_module_C("RunningLayerCountWithDisabledOutsidePointerEventsProvider");const DismissableLayer=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,t)=>{const n=0===react_dismissable_layer_dist_index_module_l(),r=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](dist_index_module_v,extends_extends({},e,{ref:t}));return n?/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](react_dismissable_layer_dist_index_module_s,null,/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](react_dismissable_layer_dist_index_module_d,null,r)):r}));/*#__PURE__*/const dist_index_module_v=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((s,d)=>{const{disableOutsidePointerEvents:v=!1,onEscapeKeyDown:E,onPointerDownOutside:C,onFocusOutside:b,onInteractOutside:w,onDismiss:L,...P}=s,y=react_dismissable_layer_dist_index_module_a(),D=react_dismissable_layer_dist_index_module_l()+1,x=D===y,O=dist_index_module_m(v),g=react_dismissable_layer_dist_index_module_p()+(v?1:0),h=g<O;useBodyPointerEvents({disabled:v}),useEscapeKeydown((e=>{x&&(null==E||E(e),e.defaultPrevented||null==L||L())}));const{onPointerDownCapture:R}=function(e){const n=useCallbackRef(e),r=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](!1);return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{const e=e=>{const t=e.target;if(t&&!r.current){const r=new CustomEvent("dismissableLayer.pointerDownOutside",{bubbles:!1,cancelable:!0,detail:{originalEvent:e}});t.addEventListener("dismissableLayer.pointerDownOutside",n,{once:!0}),t.dispatchEvent(r)}r.current=!1},t=window.setTimeout((()=>{document.addEventListener("pointerdown",e)}),0);return()=>{window.clearTimeout(t),document.removeEventListener("pointerdown",e)}}),[n]),{onPointerDownCapture:()=>r.current=!0}}((e=>{h||(null==C||C(e),null==w||w(e),e.defaultPrevented||null==L||L())})),{onBlurCapture:T,onFocusCapture:F}=function(e){const n=useCallbackRef(e),r=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](!1);return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{const e=e=>{const t=e.target;if(t&&!r.current){const r=new CustomEvent("dismissableLayer.focusOutside",{bubbles:!1,cancelable:!0,detail:{originalEvent:e}});t.addEventListener("dismissableLayer.focusOutside",n,{once:!0}),t.dispatchEvent(r)}};return document.addEventListener("focusin",e),()=>document.removeEventListener("focusin",e)}),[n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}((e=>{null==b||b(e),null==w||w(e),e.defaultPrevented||null==L||L()})),B=O>0&&!h;/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](react_dismissable_layer_dist_index_module_c,{runningCount:D},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](react_dismissable_layer_dist_index_module_f,{runningCount:g},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Primitive,extends_extends({},P,{ref:d,style:{pointerEvents:B?"auto":void 0,...P.style},onPointerDownCapture:composeEventHandlers(s.onPointerDownCapture,R),onBlurCapture:composeEventHandlers(s.onBlurCapture,T),onFocusCapture:composeEventHandlers(s.onFocusCapture,F)}))))}));function dist_index_module_E(e){const t=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createContext"]({total:0,setTotal:()=>{}}),n=({children:e})=>{const[n,r]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](0),o=external_root_React_commonjs2_react_commonjs_react_amd_react_["useMemo"]((()=>({total:n,setTotal:r})),[n,r]);/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](t.Provider,{value:o},e)};return[n,function(e=!0){const{total:n,setTotal:r}=external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"](t);return external_root_React_commonjs2_react_commonjs_react_amd_react_["useLayoutEffect"]((()=>{if(e)return r((e=>e+1)),()=>r((e=>e-1))}),[e,r]),n}]}function index_module_C(e){const t=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createContext"](0),n=e=>{const{children:n,runningCount:r}=e;/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](t.Provider,{value:r},n)};return[n,function(){return external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"](t)||0}]}const react_dismissable_layer_dist_index_module_Root=DismissableLayer;
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function (originalTarget) {
    if (typeof document === 'undefined') {
        return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
};
var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
var hideOthers = function (originalTarget, parentNode, markerName) {
    if (parentNode === void 0) { parentNode = getDefaultParent(originalTarget); }
    if (markerName === void 0) { markerName = "data-aria-hidden"; }
    var targets = Array.isArray(originalTarget) ? originalTarget : [originalTarget];
    if (!markerMap[markerName]) {
        markerMap[markerName] = new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var deep = function (parent) {
        if (!parent || targets.indexOf(parent) >= 0) {
            return;
        }
        Array.prototype.forEach.call(parent.children, function (node) {
            if (targets.some(function (target) { return node.contains(target); })) {
                deep(node);
            }
            else {
                var attr = node.getAttribute('aria-hidden');
                var alreadyHidden = attr !== null && attr !== 'false';
                var counterValue = (counterMap.get(node) || 0) + 1;
                var markerValue = (markerCounter.get(node) || 0) + 1;
                counterMap.set(node, counterValue);
                markerCounter.set(node, markerValue);
                hiddenNodes.push(node);
                if (counterValue === 1 && alreadyHidden) {
                    uncontrolledNodes.set(node, true);
                }
                if (markerValue === 1) {
                    node.setAttribute(markerName, 'true');
                }
                if (!alreadyHidden) {
                    node.setAttribute('aria-hidden', 'true');
                }
            }
        });
    };
    deep(parentNode);
    lockCount++;
    return function () {
        hiddenNodes.forEach(function (node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
                if (!uncontrolledNodes.has(node)) {
                    node.removeAttribute('aria-hidden');
                }
                uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
                node.removeAttribute(markerName);
            }
        });
        lockCount--;
        if (!lockCount) {
            counterMap = new WeakMap();
            counterMap = new WeakMap();
            uncontrolledNodes = new WeakMap();
            markerMap = {};
        }
    };
};

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';
var removedBarSizeVariable = '--removed-body-scroll-bar-size';

// CONCATENATED MODULE: ./node_modules/use-sidecar/dist/es2015/medium.js

function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function () {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function (data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function () {
                buffer = buffer.filter(function (x) { return x !== item; });
            };
        },
        assignSyncMedium: function (cb) {
            assigned = true;
            while (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function (x) { return cb(x); },
                filter: function () { return buffer; },
            };
        },
        assignMedium: function (cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function () {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function () { return Promise.resolve().then(executeQueue); };
            cycle();
            buffer = {
                push: function (x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function (filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                },
            };
        },
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
    if (options === void 0) { options = {}; }
    var medium = innerCreateMedium(null);
    medium.options = tslib_es6["a" /* __assign */]({ async: true, ssr: false }, options);
    return medium;
}

// CONCATENATED MODULE: ./node_modules/react-remove-scroll/dist/es2015/medium.js

var effectCar = createSidecarMedium();

// CONCATENATED MODULE: ./node_modules/use-callback-ref/dist/es2015/useRef.js

/**
 * creates a MutableRef with ref change callback
 * @param initialValue - initial ref value
 * @param {Function} callback - a callback to run when value changes
 *
 * @example
 * const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
 * ref.current = 1;
 * // prints 0 -> 1
 *
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 * @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
 * @returns {MutableRefObject}
 */
function useRef_useCallbackRef(initialValue, callback) {
    var ref = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(function () { return ({
        // value
        value: initialValue,
        // last callback
        callback: callback,
        // "memoized" public interface
        facade: {
            get current() {
                return ref.value;
            },
            set current(value) {
                var last = ref.value;
                if (last !== value) {
                    ref.value = value;
                    ref.callback(value, last);
                }
            }
        }
    }); })[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}

// CONCATENATED MODULE: ./node_modules/use-callback-ref/dist/es2015/assignRef.js
/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
    return ref;
}

// CONCATENATED MODULE: ./node_modules/use-callback-ref/dist/es2015/useMergeRef.js


/**
 * Merges two or more refs together providing a single interface to set their value
 * @param {RefObject|Ref} refs
 * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
 *
 * @see {@link mergeRefs} a version without buit-in memoization
 * @see https://github.com/theKashey/use-callback-ref#usemergerefs
 * @example
 * const Component = React.forwardRef((props, ref) => {
 *   const ownRef = useRef();
 *   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
 *   return <div ref={domRef}>...</div>
 * }
 */
function useMergeRefs(refs, defaultValue) {
    return useRef_useCallbackRef(defaultValue, function (newValue) {
        return refs.forEach(function (ref) { return assignRef(ref, newValue); });
    });
}

// CONCATENATED MODULE: ./node_modules/react-remove-scroll/dist/es2015/UI.js





var nothing = function () {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */
var RemoveScroll = external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](function (props, parentRef) {
    var ref = external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](null);
    var _a = external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"]({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, rest = tslib_es6["c" /* __rest */](props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
    var SideCar = sideCar;
    var containerRef = useMergeRefs([
        ref,
        parentRef
    ]);
    var containerProps = tslib_es6["a" /* __assign */]({}, rest, callbacks);
    return (external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](external_root_React_commonjs2_react_commonjs_react_amd_react_["Fragment"], null,
        enabled && (external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](SideCar, { sideCar: effectCar, removeScrollBar: removeScrollBar, shards: shards, noIsolation: noIsolation, inert: inert, setCallbacks: setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref })),
        forwardProps ? (external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"](external_root_React_commonjs2_react_commonjs_react_amd_react_["Children"].only(children), tslib_es6["a" /* __assign */]({}, containerProps, { ref: containerRef }))) : (external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Container, tslib_es6["a" /* __assign */]({}, containerProps, { className: className, ref: containerRef }), children))));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
};
RemoveScroll.classNames = {
    fullWidth: fullWidthClassName,
    zeroRight: zeroRightClassName
};


// CONCATENATED MODULE: ./node_modules/use-sidecar/dist/es2015/exports.js


var exports_SideCar = function (_a) {
    var sideCar = _a.sideCar, rest = tslib_es6["c" /* __rest */](_a, ["sideCar"]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Target, tslib_es6["a" /* __assign */]({}, rest));
};
exports_SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return exports_SideCar;
}

// CONCATENATED MODULE: ./node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var setNonce = function (nonce) {
    currentNonce = nonce;
};
var getNonce = function () {
    if (currentNonce) {
        return currentNonce;
    }
    if (true) {
        return __webpack_require__.nc;
    }
    return undefined;
};

// CONCATENATED MODULE: ./node_modules/react-style-singleton/dist/es2015/singleton.js

function makeStyleTag() {
    if (!document)
        return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = getNonce();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    if (tag.styleSheet) {
        tag.styleSheet.cssText = css;
    }
    else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function () {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function (style) {
            if (counter == 0) {
                if (stylesheet = makeStyleTag()) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function () {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        }
    };
};

// CONCATENATED MODULE: ./node_modules/react-style-singleton/dist/es2015/hook.js


var styleHookSingleton = function () {
    var sheet = stylesheetSingleton();
    return function (styles) {
        external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"](function () {
            sheet.add(styles);
            return function () {
                sheet.remove();
            };
        }, []);
    };
};

// CONCATENATED MODULE: ./node_modules/react-style-singleton/dist/es2015/component.js

var styleSingleton = function () {
    var useStyle = styleHookSingleton();
    var Sheet = function (_a) {
        var styles = _a.styles;
        useStyle(styles);
        return null;
    };
    return Sheet;
};

// CONCATENATED MODULE: ./node_modules/react-style-singleton/dist/es2015/index.js




// CONCATENATED MODULE: ./node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0,
};
var parse = function (x) { return parseInt(x || '', 10) || 0; };
var getOffset = function (gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [
        parse(left),
        parse(top),
        parse(right),
    ];
};
var getGapWidth = function (gapMode) {
    if (gapMode === void 0) { gapMode = 'margin'; }
    if (typeof window === 'undefined') {
        return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0]),
    };
};

// CONCATENATED MODULE: ./node_modules/react-remove-scroll-bar/dist/es2015/component.js




var component_Style = styleSingleton();
var getStyles = function (_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) { gapMode = 'margin'; }
    return "\n  ." + noScrollbarsClassName + " {\n   overflow: hidden " + important + ";\n   padding-right: " + gap + "px " + important + ";\n  }\n  body {\n    overflow: hidden " + important + ";\n    " + [
        allowRelative && "position: relative " + important + ";",
        gapMode === 'margin' && "\n    padding-left: " + left + "px;\n    padding-top: " + top + "px;\n    padding-right: " + right + "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: " + gap + "px " + important + ";\n    ",
        gapMode === 'padding' && "padding-right: " + gap + "px " + important + ";",
    ].filter(Boolean).join('') + "\n  }\n  \n  ." + zeroRightClassName + " {\n    right: " + gap + "px " + important + ";\n  }\n  \n  ." + fullWidthClassName + " {\n    margin-right: " + gap + "px " + important + ";\n  }\n  \n  ." + zeroRightClassName + " ." + zeroRightClassName + " {\n    right: 0 " + important + ";\n  }\n  \n  ." + fullWidthClassName + " ." + fullWidthClassName + " {\n    margin-right: 0 " + important + ";\n  }\n  \n  body {\n    " + removedBarSizeVariable + ": " + gap + "px;\n  }\n";
};
var RemoveScrollBar = function (props) {
    var _a = external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](getGapWidth(props.gapMode)), gap = _a[0], setGap = _a[1];
    external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"](function () {
        setGap(getGapWidth(props.gapMode));
    }, [props.gapMode]);
    var noRelative = props.noRelative, noImportant = props.noImportant, _b = props.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](component_Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : '') });
};

// CONCATENATED MODULE: ./node_modules/react-remove-scroll-bar/dist/es2015/index.js





// CONCATENATED MODULE: ./node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var elementCouldBeVScrolled = function (node) {
    var styles = window.getComputedStyle(node);
    return (styles.overflowY !== 'hidden' && // not-not-scrollable
        !(styles.overflowY === styles.overflowX && styles.overflowY === 'visible') // scrollable
    );
};
var elementCouldBeHScrolled = function (node) {
    var styles = window.getComputedStyle(node);
    return (styles.overflowX !== 'hidden' && // not-not-scrollable
        !(styles.overflowY === styles.overflowX && styles.overflowX === 'visible') // scrollable
    );
};
var locationCouldBeScrolled = function (axis, node) {
    var current = node;
    do {
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
            if (s > d) {
                return true;
            }
        }
        current = current.parentNode;
    } while (current && current !== document.body);
    return false;
};
var getVScrollVariables = function (_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [scrollTop, scrollHeight, clientHeight];
};
var getHScrollVariables = function (_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [scrollLeft, scrollWidth, clientWidth];
};
var elementCouldBeScrolled = function (axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function (axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var handleScroll = function (axis, endTarget, event, sourceDelta, noOverscroll) {
    var delta = sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        target = target.parentNode;
    } while (
    // portaled content
    (!targetInLock && target !== document.body) ||
        // self content
        (targetInLock && (endTarget.contains(target) || endTarget === target)));
    if (isDeltaPositive &&
        ((noOverscroll && availableScroll === 0) ||
            (!noOverscroll && delta > availableScroll))) {
        shouldCancelScroll = true;
    }
    else if (!isDeltaPositive &&
        ((noOverscroll && availableScrollTop === 0) ||
            (!noOverscroll && -delta > availableScrollTop))) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};

// CONCATENATED MODULE: ./node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var aggresiveCapture_options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
                return true;
            }
        });
        window.addEventListener('test', aggresiveCapture_options, aggresiveCapture_options);
        window.removeEventListener('test', aggresiveCapture_options, aggresiveCapture_options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
var nonPassive = passiveSupported ? { passive: false } : false;

// CONCATENATED MODULE: ./node_modules/react-remove-scroll/dist/es2015/SideEffect.js





var getTouchXY = function (event) {
    return 'changedTouches' in event
        ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY]
        : [0, 0];
};
var getDeltaXY = function (event) { return [event.deltaX, event.deltaY]; };
var extractRef = function (ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function (x, y) {
    return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function (id) { return "\n  .block-interactivity-" + id + " {pointer-events: none;}\n  .allow-interactivity-" + id + " {pointer-events: all;}\n"; };
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"]([]);
    var touchStartRef = external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"]([0, 0]);
    var activeAxis = external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"]();
    var id = external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](idCounter++)[0];
    var Style = external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](function () { return styleSingleton(); })[0];
    var lastProps = external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](props);
    external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"](function () {
        lastProps.current = props;
    }, [props]);
    external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"](function () {
        if (props.inert) {
            document.body.classList.add("block-interactivity-" + id);
            var allow_1 = [
                props.lockRef.current
            ].concat((props.shards || []).map(extractRef)).filter(Boolean);
            allow_1.forEach(function (el) { return el.classList.add("allow-interactivity-" + id); });
            return function () {
                document.body.classList.remove("block-interactivity-" + id);
                allow_1.forEach(function (el) {
                    return el.classList.remove("allow-interactivity-" + id);
                });
            };
        }
        return;
    }, [props.inert, props.lockRef.current, props.shards]);
    var shouldCancelEvent = external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"](function (event, parent) {
        if ('touches' in event && event.touches.length === 2) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = getTouchXY(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        }
        else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
            // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current &&
            'changedTouches' in event &&
            (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return handleScroll(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"](function (_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
        var sourceEvent = shouldPreventQueue.current.filter(function (e) {
            return e.name === event.type &&
                e.target === event.target &&
                deltaCompare(e.delta, delta);
        })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            event.preventDefault();
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || [])
                .map(extractRef)
                .filter(Boolean)
                .filter(function (node) { return node.contains(event.target); });
            var shouldStop = shardNodes.length > 0
                ? shouldCancelEvent(event, shardNodes[0])
                : !lastProps.current.noIsolation;
            if (shouldStop) {
                event.preventDefault();
            }
        }
    }, []);
    var shouldCancel = external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"](function (name, delta, target, should) {
        var event = { name: name, delta: delta, target: target, should: should };
        shouldPreventQueue.current.push(event);
        setTimeout(function () {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function (e) { return e !== event; });
        }, 1);
    }, []);
    var scrollTouchStart = external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"](function (event) {
        touchStartRef.current = getTouchXY(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"](function (event) {
        shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"](function (event) {
        shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"](function () {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove
        });
        document.addEventListener('wheel', shouldPrevent, nonPassive);
        document.addEventListener('touchmove', shouldPrevent, nonPassive);
        document.addEventListener('touchstart', scrollTouchStart, nonPassive);
        return function () {
            lockStack = lockStack.filter(function (inst) { return inst !== Style; });
            document.removeEventListener('wheel', shouldPrevent, nonPassive);
            document.removeEventListener('touchmove', shouldPrevent, nonPassive);
            document.removeEventListener('touchstart', scrollTouchStart, nonPassive);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return (external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](external_root_React_commonjs2_react_commonjs_react_amd_react_["Fragment"], null,
        inert ? external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](RemoveScrollBar, { gapMode: "margin" }) : null));
}

// CONCATENATED MODULE: ./node_modules/react-remove-scroll/dist/es2015/sidecar.js



/* harmony default export */ var sidecar = (exportSidecar(effectCar, RemoveScrollSideCar));

// CONCATENATED MODULE: ./node_modules/react-remove-scroll/dist/es2015/Combination.js




var ReactRemoveScroll = external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](function (props, ref) { return (external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](RemoveScroll, tslib_es6["a" /* __assign */]({}, props, { ref: ref, sideCar: sidecar }))); });
ReactRemoveScroll.classNames = RemoveScroll.classNames;
/* harmony default export */ var Combination = (ReactRemoveScroll);

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-menu/dist/index.module.js
const index_module_M=["Enter"," "],index_module_y=["ArrowUp","PageDown","End"],index_module_R=["ArrowDown","PageUp","Home",...index_module_y],index_module_I={ltr:[...index_module_M,"ArrowRight"],rtl:[...index_module_M,"ArrowLeft"]},index_module_P={ltr:["ArrowLeft"],rtl:["ArrowRight"]},[index_module_S,index_module_k]=createContext("Menu");const Menu=e=>{const{open:t=!1,children:o,onOpenChange:u,modal:a=!0}=e,[i,l]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](null),s=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](!1),d=useCallbackRef(u),m=useDirection(i,e.dir);return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{const e=()=>s.current=!0,t=()=>s.current=!1;return document.addEventListener("keydown",e,{capture:!0}),document.addEventListener("pointerdown",t,{capture:!0}),document.addEventListener("pointermove",t,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",t,{capture:!0}),document.removeEventListener("pointermove",t,{capture:!0})}}),[]),/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](react_popper_dist_index_module_Root,null,/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_S,{isSubmenu:!1,isUsingKeyboardRef:s,dir:m,open:t,onOpenChange:d,content:i,onContentChange:l,onRootClose:external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"]((()=>d(!1)),[d]),modal:a},o))};/*#__PURE__*/const MenuSub=t=>{const{children:r,open:o=!1,onOpenChange:u}=t,a=index_module_k("MenuSub"),[i,l]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](null),[s,d]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](null),m=useCallbackRef(u);return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>(!1===a.open&&m(!1),()=>m(!1))),[a.open,m]),/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](react_popper_dist_index_module_Root,null,/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_S,{isSubmenu:!0,isUsingKeyboardRef:a.isUsingKeyboardRef,dir:a.dir,open:o,onOpenChange:m,content:s,onContentChange:d,onRootClose:a.onRootClose,contentId:useId(),trigger:i,onTriggerChange:l,triggerId:useId(),modal:!1},r))};/*#__PURE__*/const[index_module_D,index_module_O,index_module_T,index_module_A]=createCollection(),[index_module_L,dist_index_module_F]=createContext("MenuContent");const MenuContent=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,t)=>{const{forceMount:n,...r}=e,o=index_module_k("MenuContent");/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_D,null,/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Presence,{present:n||o.open},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_O,null,o.isSubmenu?/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_V,extends_extends({},r,{ref:t})):/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_K,extends_extends({},r,{ref:t})))))}));const index_module_K=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,t)=>index_module_k("MenuContent").modal?/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_G,extends_extends({},e,{ref:t})):/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_U,extends_extends({},e,{ref:t})))),index_module_G=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,t)=>{const n=index_module_k("MenuContent"),r=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](null),o=useComposedRefs(t,r);return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{const e=r.current;if(e)return hideOthers(e)}),[]),/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_N,extends_extends({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:composeEventHandlers(e.onFocusOutside,(e=>e.preventDefault()),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)}))})),index_module_U=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,t)=>{const n=index_module_k("MenuContent");/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_N,extends_extends({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)}))})),index_module_V=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,t)=>{const n=index_module_k("MenuContent"),r=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](null),o=useComposedRefs(t,r);return n.isSubmenu?/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_N,extends_extends({id:n.contentId,"aria-labelledby":n.triggerId},e,{ref:o,align:"start",side:"rtl"===n.dir?"left":"right",portalled:!0,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:e=>{var t;n.isUsingKeyboardRef.current&&(null===(t=r.current)||void 0===t||t.focus()),e.preventDefault()},onCloseAutoFocus:e=>e.preventDefault(),onFocusOutside:composeEventHandlers(e.onFocusOutside,(e=>{e.target!==n.trigger&&n.onOpenChange(!1)})),onEscapeKeyDown:composeEventHandlers(e.onEscapeKeyDown,n.onRootClose),onKeyDown:composeEventHandlers(e.onKeyDown,(e=>{const t=e.currentTarget.contains(e.target),r=index_module_P[n.dir].includes(e.key);var o;t&&r&&(n.onOpenChange(!1),null===(o=n.trigger)||void 0===o||o.focus())}))})):null})),index_module_N=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,n)=>{const{loop:r=!1,trapFocus:a,onOpenAutoFocus:l,onCloseAutoFocus:s,disableOutsidePointerEvents:d,onEscapeKeyDown:p,onPointerDownOutside:g,onFocusOutside:h,onInteractOutside:b,onDismiss:M,disableOutsideScroll:I,portalled:P,...S}=e,D=index_module_k("MenuContent"),{getItems:O}=index_module_A(),[T,F]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](null),K=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](null),G=useComposedRefs(n,K,D.onContentChange),U=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](0),V=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](""),N=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](0),X=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](null),B=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"]("right"),Y=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](0),z=P?Portal:external_root_React_commonjs2_react_commonjs_react_amd_react_["Fragment"],H=I?Combination:external_root_React_commonjs2_react_commonjs_react_amd_react_["Fragment"],j=e=>{var t,n;const r=V.current+e,o=O().filter((e=>!e.disabled)),u=document.activeElement,a=null===(t=o.find((e=>e.ref.current===u)))||void 0===t?void 0:t.textValue,i=function(e,t,n){const r=t.length>1&&Array.from(t).every((e=>e===t[0]))?t[0]:t,o=n?e.indexOf(n):-1;let u=(a=e,i=Math.max(o,0),a.map(((e,t)=>a[(i+t)%a.length])));var a,i;1===r.length&&(u=u.filter((e=>e!==n)));const c=u.find((e=>e.toLowerCase().startsWith(r.toLowerCase())));return c!==n?c:void 0}(o.map((e=>e.textValue)),r,a),c=null===(n=o.find((e=>e.textValue===i)))||void 0===n?void 0:n.ref.current;!function e(t){V.current=t,window.clearTimeout(U.current),""!==t&&(U.current=window.setTimeout((()=>e("")),1e3))}(r),c&&setTimeout((()=>c.focus()))};external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>()=>window.clearTimeout(U.current)),[]),useFocusGuards();const J=external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"]((e=>{var t,n;return B.current===(null===(t=X.current)||void 0===t?void 0:t.side)&&function(e,t){if(!t)return!1;return function(e,t){const{x:n,y:r}=e;let o=!1;for(let e=0,u=t.length-1;e<t.length;u=e++){const a=t[e].x,i=t[e].y,c=t[u].x,l=t[u].y;i>r!=l>r&&n<(c-a)*(r-i)/(l-i)+a&&(o=!o)}return o}({x:e.clientX,y:e.clientY},t)}(e,null===(n=X.current)||void 0===n?void 0:n.area)}),[]);/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](z,null,/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](H,null,/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_L,{searchRef:V,onItemEnter:external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"]((e=>{J(e)&&e.preventDefault()}),[J]),onItemLeave:external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"]((e=>{var t;J(e)||(null===(t=K.current)||void 0===t||t.focus(),F(null))}),[J]),onTriggerLeave:external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"]((e=>{J(e)&&e.preventDefault()}),[J]),pointerGraceTimerRef:N,onPointerGraceIntentChange:external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"]((e=>{X.current=e}),[])},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](FocusScope,{as:Slot,trapped:a,onMountAutoFocus:composeEventHandlers(l,(e=>{var t;e.preventDefault(),null===(t=K.current)||void 0===t||t.focus()})),onUnmountAutoFocus:s},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](DismissableLayer,{as:Slot,disableOutsidePointerEvents:d,onEscapeKeyDown:p,onPointerDownOutside:g,onFocusOutside:h,onInteractOutside:b,onDismiss:M},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](RovingFocusGroup,{as:Slot,dir:D.dir,orientation:"vertical",loop:r,currentTabStopId:T,onCurrentTabStopIdChange:F,onEntryFocus:e=>{D.isUsingKeyboardRef.current||e.preventDefault()}},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_Content,extends_extends({role:"menu",dir:D.dir,"data-state":W(D.open)},S,{ref:G,style:{outline:"none",...S.style},onKeyDown:composeEventHandlers(S.onKeyDown,(e=>{const t=e.target,n=e.currentTarget.contains(t),r=e.ctrlKey||e.altKey||e.metaKey;n&&!r&&1===e.key.length&&j(e.key),"Tab"===e.key&&e.preventDefault();const o=K.current;if(e.target!==o)return;if(!index_module_R.includes(e.key))return;e.preventDefault();const u=O().filter((e=>!e.disabled)).map((e=>e.ref.current));index_module_y.includes(e.key)&&u.reverse(),function(e){const t=document.activeElement;for(const n of e){if(n===t)return;if(n.focus(),document.activeElement!==t)return}}(u)})),onBlur:composeEventHandlers(e.onBlur,(e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(U.current),V.current="")})),onPointerMove:composeEventHandlers(e.onPointerMove,q((e=>{const t=e.target,n=Y.current!==e.clientX;if(e.currentTarget.contains(t)&&n){const t=e.clientX>Y.current?"right":"left";B.current=t,Y.current=e.clientX}})))}))))))))})),index_module_X="div";const MenuItem=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,t)=>{const{disabled:n=!1,onSelect:r,...o}=e,u=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](null),a=index_module_k("MenuItem"),i=dist_index_module_F("MenuItem"),c=useComposedRefs(t,u),l=()=>{const e=u.current;if(!n&&e){const t=new Event("menu.itemSelect",{bubbles:!0,cancelable:!0});if(e.addEventListener("menu.itemSelect",(e=>null==r?void 0:r(e)),{once:!0}),e.dispatchEvent(t),t.defaultPrevented)return;a.onRootClose()}};/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_B,extends_extends({},o,{ref:c,disabled:n,onPointerUp:composeEventHandlers(e.onPointerUp,l),onKeyDown:composeEventHandlers(e.onKeyDown,(e=>{const t=""!==i.searchRef.current;n||t&&" "===e.key||index_module_M.includes(e.key)&&(" "===e.key&&e.preventDefault(),l())}))}))}));/*#__PURE__*/const MenuSubTrigger=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,t)=>{const n=index_module_k("MenuSubTrigger"),r=dist_index_module_F("MenuSubTrigger"),u=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](null),{pointerGraceTimerRef:a,onPointerGraceIntentChange:i}=r,c=external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"]((()=>{u.current&&window.clearTimeout(u.current),u.current=null}),[]);return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>c),[c]),external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{const e=a.current;return()=>{window.clearTimeout(e),i(null)}}),[a,i]),n.isSubmenu?/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](MenuAnchor,{as:Slot},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_B,extends_extends({id:n.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":n.contentId,"data-state":W(n.open)},e,{ref:composeRefs(t,n.onTriggerChange),onPointerUp:composeEventHandlers(e.onPointerUp,(l=t=>{r.onItemEnter(t),t.defaultPrevented||e.disabled||n.open||n.onOpenChange(!0)},e=>"mouse"!==e.pointerType?l(e):void 0)),onPointerMove:composeEventHandlers(e.onPointerMove,q((t=>{r.onItemEnter(t),t.defaultPrevented||e.disabled||n.open||u.current||(r.onPointerGraceIntentChange(null),u.current=window.setTimeout((()=>{n.onOpenChange(!0),c()}),100))}))),onPointerLeave:composeEventHandlers(e.onPointerLeave,q((e=>{var t;c();const o=null===(t=n.content)||void 0===t?void 0:t.getBoundingClientRect();if(o){var u;const t=null===(u=n.content)||void 0===u?void 0:u.dataset.side,i="right"===t,c=i?-5:5,l=o[i?"left":"right"],s=o[i?"right":"left"];r.onPointerGraceIntentChange({area:[{x:e.clientX+c,y:e.clientY},{x:l,y:o.top},{x:s,y:o.top},{x:s,y:o.bottom},{x:l,y:o.bottom}],side:t}),window.clearTimeout(a.current),a.current=window.setTimeout((()=>r.onPointerGraceIntentChange(null)),300)}else{if(r.onTriggerLeave(e),e.defaultPrevented)return;r.onPointerGraceIntentChange(null)}}))),onKeyDown:composeEventHandlers(e.onKeyDown,(t=>{const o=""!==r.searchRef.current;var u;e.disabled||o&&" "===t.key||index_module_I[n.dir].includes(t.key)&&(n.onOpenChange(!0),null===(u=n.content)||void 0===u||u.focus())}))}))):null;var l}));/*#__PURE__*/const index_module_B=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,t)=>{const{as:n=index_module_X,disabled:r=!1,textValue:o,...u}=e,i=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](null),c=useComposedRefs(t,i),l=dist_index_module_F("MenuItem"),[s,d]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"]("");return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{const e=i.current;var t;e&&d((null!==(t=e.textContent)&&void 0!==t?t:"").trim())}),[u.children]),/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_T,{disabled:r,textValue:null!=o?o:s},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](RovingFocusItem,extends_extends({role:"menuitem","aria-disabled":r||void 0,"data-disabled":r?"":void 0,focusable:!r},u,{as:n,ref:c,onPointerMove:composeEventHandlers(e.onPointerMove,q((e=>{if(r)l.onItemLeave(e);else if(l.onItemEnter(e),!e.defaultPrevented){e.currentTarget.focus()}}))),onPointerLeave:composeEventHandlers(e.onPointerLeave,q((e=>l.onItemLeave(e))))})))}));const MenuCheckboxItem=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,t)=>{const{checked:n=!1,onCheckedChange:r,...o}=e;/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_H.Provider,{value:n},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](MenuItem,extends_extends({role:"menuitemcheckbox","aria-checked":n},o,{ref:t,"data-state":index_module_j(n),onSelect:composeEventHandlers(o.onSelect,(()=>null==r?void 0:r(!n)),{checkForDefaultPrevented:!1})})))}));/*#__PURE__*/const index_module_Y=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createContext"]({});const MenuRadioGroup=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,t)=>{const{value:r,onValueChange:o,...u}=e,a=useCallbackRef(o),i=external_root_React_commonjs2_react_commonjs_react_amd_react_["useMemo"]((()=>({value:r,onValueChange:a})),[r,a]);/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_Y.Provider,{value:i},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](MenuGroup,extends_extends({},u,{ref:t})))}));/*#__PURE__*/const MenuRadioItem=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,t)=>{const{value:n,...r}=e,o=external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"](index_module_Y),u=n===o.value;/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_H.Provider,{value:u},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](MenuItem,extends_extends({role:"menuitemradio","aria-checked":u},r,{ref:t,"data-state":index_module_j(u),onSelect:composeEventHandlers(r.onSelect,(()=>{var e;return null===(e=o.onValueChange)||void 0===e?void 0:e.call(o,n)}),{checkForDefaultPrevented:!1})})))}));/*#__PURE__*/const index_module_z="span",index_module_H=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createContext"](!1);const MenuItemIndicator=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,t)=>{const{as:n=index_module_z,forceMount:r,...o}=e,u=external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"](index_module_H);/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Presence,{present:r||u},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Primitive,extends_extends({},o,{as:n,ref:t,"data-state":index_module_j(u)})))}));/*#__PURE__*/const MenuAnchor=extendPrimitive(Anchor,{displayName:"MenuAnchor"});const MenuGroup=extendPrimitive(Primitive,{defaultProps:{role:"group"},displayName:"MenuGroup"});const MenuLabel=extendPrimitive(Primitive,{displayName:"MenuLabel"});const MenuSeparator=extendPrimitive(Primitive,{defaultProps:{role:"separator","aria-orientation":"horizontal"},displayName:"MenuSeparator "});const MenuArrow=extendPrimitive(index_module_Arrow,{displayName:"MenuArrow"});function W(e){return e?"open":"closed"}function index_module_j(e){return e?"checked":"unchecked"}function q(e){return t=>"mouse"===t.pointerType?e(t):void 0}const react_menu_dist_index_module_Root=Menu;const Sub=MenuSub;const index_module_Anchor=MenuAnchor;const SubTrigger=MenuSubTrigger;const dist_index_module_Content=MenuContent;const Group=MenuGroup;const Label=MenuLabel;const index_module_Item=MenuItem;const CheckboxItem=MenuCheckboxItem;const RadioGroup=MenuRadioGroup;const RadioItem=MenuRadioItem;const ItemIndicator=MenuItemIndicator;const Separator=MenuSeparator;const dist_index_module_Arrow=MenuArrow;
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-dropdown-menu/dist/index.module.js
const[index_module_u,react_dropdown_menu_dist_index_module_c]=createContext("DropdownMenu");const DropdownMenu=e=>{const{children:n,open:t,defaultOpen:p,onOpenChange:a,dir:i,modal:c=!0}=e,s=external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"](react_dropdown_menu_dist_index_module_m),[g=!1,w]=useControllableState({prop:t,defaultProp:p,onChange:a}),D=external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"]((()=>w((e=>!e))),[w]);return s?/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_u,{isRootMenu:!1,open:g,onOpenChange:w,onOpenToggle:D},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Sub,{open:g,onOpenChange:w},n)):/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](react_dropdown_menu_dist_index_module_l,{dir:i,open:g,onOpenChange:w,onOpenToggle:D,modal:c},n)};/*#__PURE__*/const react_dropdown_menu_dist_index_module_l=n=>{const{children:r,dir:t,open:p,onOpenChange:a,onOpenToggle:i,modal:c=!0}=n,l=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](null);/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_u,{isRootMenu:!0,triggerId:useId(),triggerRef:l,contentId:useId(),open:p,onOpenChange:a,onOpenToggle:i,modal:c},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](react_menu_dist_index_module_Root,{open:p,onOpenChange:a,dir:t,modal:c},r))},react_dropdown_menu_dist_index_module_s="button";const DropdownMenuTrigger=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,n)=>{const{as:r=react_dropdown_menu_dist_index_module_s,...t}=e,u=react_dropdown_menu_dist_index_module_c("DropdownMenuTrigger");return u.isRootMenu?/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_Anchor,extends_extends({type:"button",id:u.triggerId,"aria-haspopup":"menu","aria-expanded":!!u.open||void 0,"aria-controls":u.open?u.contentId:void 0,"data-state":u.open?"open":"closed"},t,{as:r,ref:composeRefs(n,u.triggerRef),onPointerDown:composeEventHandlers(e.onPointerDown,(e=>{0===e.button&&!1===e.ctrlKey&&(u.open||e.preventDefault(),u.onOpenToggle())})),onKeyDown:composeEventHandlers(e.onKeyDown,(e=>{[" ","Enter","ArrowDown"].includes(e.key)&&(e.preventDefault(),u.onOpenChange(!0))}))})):null}));/*#__PURE__*/const react_dropdown_menu_dist_index_module_m=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createContext"](!1);const DropdownMenuContent=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,n)=>{const r=react_dropdown_menu_dist_index_module_c("DropdownMenuContent"),t={...e,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)"}};/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](react_dropdown_menu_dist_index_module_m.Provider,{value:!0},r.isRootMenu?/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](dist_index_module_g,extends_extends({},t,{ref:n})):/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](dist_index_module_Content,extends_extends({},t,{ref:n})))}));/*#__PURE__*/const dist_index_module_g=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,n)=>{const{portalled:r=!0,...t}=e,p=react_dropdown_menu_dist_index_module_c("DropdownMenuContent"),a=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](!1);return p.isRootMenu?/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](dist_index_module_Content,extends_extends({id:p.contentId,"aria-labelledby":p.triggerId},t,{ref:n,portalled:r,onCloseAutoFocus:o=>{var n,r;(null===(n=e.onCloseAutoFocus)||void 0===n||n.call(e,o),o.defaultPrevented)||(a.current||null===(r=p.triggerRef.current)||void 0===r||r.focus(),o.preventDefault());a.current=!1},onInteractOutside:o=>{var n,r;if(null===(n=e.onInteractOutside)||void 0===n||n.call(e,o),!o.defaultPrevented){const e=o.detail.originalEvent,n=0===e.button&&!0===e.ctrlKey,r=2===e.button||n;p.modal&&!r||(a.current=!0)}const t=o.target;(null===(r=p.triggerRef.current)||void 0===r?void 0:r.contains(t))&&o.preventDefault()}})):null}));const DropdownMenuGroup=extendPrimitive(Group,{displayName:"DropdownMenuGroup"});const DropdownMenuLabel=extendPrimitive(Label,{displayName:"DropdownMenuLabel"});const DropdownMenuTriggerItem=extendPrimitive(SubTrigger,{displayName:"DropdownMenuTriggerItem"});const DropdownMenuItem=extendPrimitive(index_module_Item,{displayName:"DropdownMenuItem"});const DropdownMenuCheckboxItem=extendPrimitive(CheckboxItem,{displayName:"DropdownMenuCheckboxItem"});const DropdownMenuRadioGroup=extendPrimitive(RadioGroup,{displayName:"DropdownMenuRadioGroup"});const DropdownMenuRadioItem=extendPrimitive(RadioItem,{displayName:"DropdownMenuRadioItem"});const DropdownMenuItemIndicator=extendPrimitive(ItemIndicator,{displayName:"DropdownMenuItemIndicator"});const DropdownMenuSeparator=extendPrimitive(Separator,{displayName:"DropdownMenuSeparator"});const DropdownMenuArrow=extendPrimitive(dist_index_module_Arrow,{displayName:"DropdownMenuArrow"});const react_dropdown_menu_dist_index_module_Root=DropdownMenu;const Trigger=DropdownMenuTrigger;const react_dropdown_menu_dist_index_module_Content=DropdownMenuContent;const index_module_Group=DropdownMenuGroup;const index_module_Label=DropdownMenuLabel;const dist_index_module_Item=DropdownMenuItem;const TriggerItem=DropdownMenuTriggerItem;const index_module_CheckboxItem=DropdownMenuCheckboxItem;const index_module_RadioGroup=DropdownMenuRadioGroup;const index_module_RadioItem=DropdownMenuRadioItem;const index_module_ItemIndicator=DropdownMenuItemIndicator;const index_module_Separator=DropdownMenuSeparator;const react_dropdown_menu_dist_index_module_Arrow=DropdownMenuArrow;
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./src/DropdownMenu/index.js


function DropdownMenu_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }



const Dropdown = react_dropdown_menu_dist_index_module_Root;
const DropdownTrigger = Trigger;

var DropdownMenu_ref2 =  true ? {
  name: "1fmgkpl",
  styles: "min-width:150px"
} : undefined;

const DropdownContent = /*#__PURE__*/emotion_styled_base_browser_esm(react_dropdown_menu_dist_index_module_Content,  true ? {
  target: "etal6nb3"
} : undefined)(() => [{
  "marginTop": "0.5rem",
  "--tw-shadow": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
  "borderRadius": "5px"
}, DropdownMenu_ref2],  true ? "" : undefined);

const DropdownLabel = /*#__PURE__*/emotion_styled_base_browser_esm(index_module_Label,  true ? {
  target: "etal6nb2"
} : undefined)(() => [{
  "paddingLeft": "1rem",
  "paddingRight": "1rem",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "fontSize": "0.75rem",
  "lineHeight": "1rem",
  "--tw-text-opacity": "1",
  "color": "rgba(68, 68, 68, var(--tw-text-opacity))",
  "textTransform": "uppercase"
}],  true ? "" : undefined);

var DropdownMenu_ref =  true ? {
  name: "1eql9ny",
  styles: "&[data-disabled]{--tw-text-opacity:1;color:rgba(229, 231, 235, var(--tw-text-opacity));cursor:default;;}"
} : undefined;

const DropdownItem = /*#__PURE__*/emotion_styled_base_browser_esm(dist_index_module_Item,  true ? {
  target: "etal6nb1"
} : undefined)(() => [{
  "borderRadius": "5px",
  "display": "block",
  "paddingLeft": "1rem",
  "paddingRight": "1rem",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "--tw-text-opacity": "1",
  "color": "rgba(68, 68, 68, var(--tw-text-opacity))",
  "fontSize": "0.875rem",
  "lineHeight": "1.25rem",
  "cursor": "pointer"
}, {
  ":focus": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(249, 250, 251, var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(17, 17, 17, var(--tw-text-opacity))",
    "outline": "2px solid transparent",
    "outlineOffset": "2px"
  }
}, DropdownMenu_ref],  true ? "" : undefined);

const DropdownSeparator = /*#__PURE__*/emotion_styled_base_browser_esm(index_module_Separator,  true ? {
  target: "etal6nb0"
} : undefined)(() => [{
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(249, 250, 251, var(--tw-bg-opacity))",
  "borderBottomWidth": "1px",
  "--tw-border-opacity": "1",
  "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))"
}],  true ? "" : undefined);

DropdownContent.defaultProps = {
  onCloseAutoFocus: e => e.preventDefault(),
  disableOutsidePointerEvents: false
};

// CONCATENATED MODULE: ./src/Feedback/svgs/f929.js
function f929_extends() { f929_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return f929_extends.apply(this, arguments); }




function f929_SvgComponent(props) {
  return Object(react_["jsx"])("svg", f929_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36"
  }, props), Object(react_["jsx"])("path", {
    fill: "#FFCC4D",
    d: "M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18"
  }), Object(react_["jsx"])("path", {
    fill: "#664500",
    d: "M18 21c-3.623 0-6.027-.422-9-1-.679-.131-2 0-2 2 0 4 4.595 9 11 9 6.404 0 11-5 11-9 0-2-1.321-2.132-2-2-2.973.578-5.377 1-9 1z"
  }), Object(react_["jsx"])("path", {
    fill: "#FFF",
    d: "M9 22s3 1 9 1 9-1 9-1-2 4-9 4-9-4-9-4z"
  }), Object(react_["jsx"])("path", {
    fill: "#E95F28",
    d: "M15.682 4.413l-4.542.801L8.8.961a1.252 1.252 0 00-2.331.411l-.745 4.797-4.542.801a1.25 1.25 0 00-.318 2.361l4.07 1.932-.748 4.812a1.253 1.253 0 001.235 1.442c.327 0 .65-.128.891-.372l3.512-3.561 4.518 2.145a1.25 1.25 0 001.631-1.731L13.625 9.73l3.165-3.208a1.252 1.252 0 00-1.108-2.109zm4.636 0l4.542.801L27.2.961a1.251 1.251 0 012.33.411l.745 4.797 4.542.801c.536.094.949.524 1.021 1.063s-.211 1.063-.703 1.297l-4.07 1.932.748 4.812a1.253 1.253 0 01-1.235 1.442c-.327 0-.65-.128-.891-.372l-3.512-3.561-4.518 2.145a1.25 1.25 0 01-1.631-1.731l2.348-4.267-3.165-3.208a1.252 1.252 0 01-.217-1.459 1.259 1.259 0 011.326-.65z"
  }));
}

/* harmony default export */ var f929 = (f929_SvgComponent);
// CONCATENATED MODULE: ./src/Feedback/svgs/f600.js
function f600_extends() { f600_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return f600_extends.apply(this, arguments); }




function f600_SvgComponent(props) {
  return Object(react_["jsx"])("svg", f600_extends({
    viewBox: "0 0 43 43",
    width: 43,
    height: 43,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Object(react_["jsx"])("g", {
    fill: "none"
  }, Object(react_["jsx"])("path", {
    d: "M43 21.75C43 33.486 33.486 43 21.75 43S.5 33.486.5 21.75 10.014.5 21.75.5 43 10.014 43 21.75",
    fill: "#FFCC4D"
  }), Object(react_["jsx"])("path", {
    d: "M21.75 25.5c-4.529 0-7.534-.527-11.25-1.25-.849-.164-2.5 0-2.5 2.5C8 31.75 13.744 38 21.75 38c8.005 0 13.75-6.25 13.75-11.25 0-2.5-1.651-2.665-2.5-2.5-3.716.723-6.721 1.25-11.25 1.25m-10-10s0-2.5 2.5-2.5 2.5 2.5 2.5 2.5V18s0 2.5-2.5 2.5-2.5-2.5-2.5-2.5v-2.5zm15 0s0-2.5 2.5-2.5 2.5 2.5 2.5 2.5V18s0 2.5-2.5 2.5-2.5-2.5-2.5-2.5v-2.5z",
    fill: "#664500"
  }), Object(react_["jsx"])("path", {
    d: "M10.5 26.75S14.25 28 21.75 28 33 26.75 33 26.75s-2.5 5-11.25 5-11.25-5-11.25-5",
    fill: "#FFF"
  })));
}

/* harmony default export */ var f600 = (f600_SvgComponent);
// CONCATENATED MODULE: ./src/Feedback/svgs/f615.js
function f615_extends() { f615_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return f615_extends.apply(this, arguments); }




function f615_SvgComponent(props) {
  return Object(react_["jsx"])("svg", f615_extends({
    viewBox: "0 0 48 48",
    width: 48,
    height: 48,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Object(react_["jsx"])("g", {
    fill: "none"
  }, Object(react_["jsx"])("path", {
    d: "M47.5 24.25C47.5 37.367 36.867 48 23.75 48 10.634 48 0 37.367 0 24.25 0 11.134 10.634.5 23.75.5 36.867.5 47.5 11.134 47.5 24.25",
    fill: "#FFCC4D"
  }), Object(react_["jsx"])("path", {
    d: "M18.162 22.154c0 2.702-1.564 4.89-3.493 4.89-1.93 0-3.493-2.188-3.493-4.89 0-2.7 1.564-4.89 3.493-4.89 1.93 0 3.493 2.19 3.493 4.89m18.162 0c0 2.702-1.564 4.89-3.493 4.89-1.93 0-3.493-2.188-3.493-4.89 0-2.7 1.564-4.89 3.493-4.89 1.93 0 3.493 2.19 3.493 4.89M15.368 38.22c2.794-6.985 18.161-6.985 18.161-4.19 0 1.396-11.176-1.398-18.161 4.19",
    fill: "#664500"
  })));
}

/* harmony default export */ var f615 = (f615_SvgComponent);
// CONCATENATED MODULE: ./src/Feedback/svgs/f62d.js
function f62d_extends() { f62d_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return f62d_extends.apply(this, arguments); }




function f62d_SvgComponent(props) {
  return Object(react_["jsx"])("svg", f62d_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36"
  }, props), Object(react_["jsx"])("path", {
    fill: "#FFCC4D",
    d: "M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18"
  }), Object(react_["jsx"])("path", {
    fill: "#664500",
    d: "M22 27c0 2.763-1.791 3-4 3-2.21 0-4-.237-4-3 0-2.761 1.79-6 4-6 2.209 0 4 3.239 4 6zm8-12a.987.987 0 01-.371-.072c-5.229-2.091-7.372-5.241-7.461-5.374a1 1 0 011.662-1.113c.019.027 1.93 2.785 6.541 4.629A1 1 0 0130 15zM6 15a1.001 1.001 0 01-.372-1.929c4.612-1.844 6.523-4.602 6.542-4.629a1.002 1.002 0 011.387-.27.998.998 0 01.275 1.383c-.089.133-2.232 3.283-7.46 5.374A1.015 1.015 0 016 15z"
  }), Object(react_["jsx"])("path", {
    fill: "#5DADEC",
    d: "M24 16h4v19l-4-.046V16zM8 35l4-.046V16H8v19z"
  }), Object(react_["jsx"])("path", {
    fill: "#664500",
    d: "M14.999 18c-.15 0-.303-.034-.446-.105-3.512-1.756-7.07-.018-7.105 0a1 1 0 11-.895-1.789c.182-.09 4.498-2.197 8.895 0A1 1 0 0114.999 18zm14 0c-.15 0-.303-.034-.446-.105-3.513-1.756-7.07-.018-7.105 0a1 1 0 11-.895-1.789c.182-.09 4.501-2.196 8.895 0A1 1 0 0128.999 18z"
  }), Object(react_["jsx"])("ellipse", {
    fill: "#5DADEC",
    cx: 18,
    cy: 34,
    rx: 18,
    ry: 2
  }), Object(react_["jsx"])("ellipse", {
    fill: "#E75A70",
    cx: 18,
    cy: 27,
    rx: 3,
    ry: 2
  }));
}

/* harmony default export */ var f62d = (f62d_SvgComponent);
// CONCATENATED MODULE: ./node_modules/@react-stately/utils/dist/module.js

function useControlledState(value, defaultValue, onChange) {
  let [stateValue, setStateValue] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(value || defaultValue);
  let ref = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(value !== undefined);
  let wasControlled = ref.current;
  let isControlled = value !== undefined; // Internal state reference for useCallback

  let stateRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(stateValue);

  if (wasControlled !== isControlled) {
    console.warn("WARN: A component changed from " + (wasControlled ? 'controlled' : 'uncontrolled') + " to " + (isControlled ? 'controlled' : 'uncontrolled') + ".");
  }

  ref.current = isControlled;
  let setValue = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])(function (value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    let onChangeCaller = function onChangeCaller(value) {
      if (onChange) {
        if (!Object.is(stateRef.current, value)) {
          for (var _len2 = arguments.length, onChangeArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            onChangeArgs[_key2 - 1] = arguments[_key2];
          }

          onChange(value, ...onChangeArgs);
        }
      }

      if (!isControlled) {
        stateRef.current = value;
      }
    };

    if (typeof value === 'function') {
      // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
      // when someone using useControlledState calls setControlledState(myFunc)
      // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
      // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
      // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
      let updateFunction = function updateFunction(oldValue) {
        for (var _len3 = arguments.length, functionArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          functionArgs[_key3 - 1] = arguments[_key3];
        }

        let interceptedValue = value(isControlled ? stateRef.current : oldValue, ...functionArgs);
        onChangeCaller(interceptedValue, ...args);

        if (!isControlled) {
          return interceptedValue;
        }

        return oldValue;
      };

      setStateValue(updateFunction);
    } else {
      if (!isControlled) {
        setStateValue(value);
      }

      onChangeCaller(value, ...args);
    }
  }, [isControlled, onChange]); // If a controlled component's value prop changes, we need to update stateRef

  if (isControlled) {
    stateRef.current = value;
  } else {
    value = stateValue;
  }

  return [value, setValue];
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/**
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */
function clamp(value, min, max) {
  if (min === void 0) {
    min = -Infinity;
  }

  if (max === void 0) {
    max = Infinity;
  }

  let newValue = Math.min(Math.max(value, min), max);
  return newValue;
}
function snapValueToStep(value, min, max, step) {
  let remainder = (value - (isNaN(min) ? 0 : min)) % step;
  let snappedValue = Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder;

  if (!isNaN(min)) {
    if (snappedValue < min) {
      snappedValue = min;
    } else if (!isNaN(max) && snappedValue > max) {
      snappedValue = min + Math.floor((max - min) / step) * step;
    }
  } else if (!isNaN(max) && snappedValue > max) {
    snappedValue = Math.floor(max / step) * step;
  } // correct floating point behavior by rounding to step precision


  let string = step.toString();
  let index = string.indexOf('.');
  let precision = index >= 0 ? string.length - index : 0;

  if (precision > 0) {
    let pow = Math.pow(10, precision);
    snappedValue = Math.round(snappedValue * pow) / pow;
  }

  return snappedValue;
}
//# sourceMappingURL=module.js.map

// CONCATENATED MODULE: ./node_modules/@react-stately/radio/dist/module.js


let $eaf77ba5e143129c6bb329a6e66020d3$var$instance = Math.round(Math.random() * 10000000000);
let $eaf77ba5e143129c6bb329a6e66020d3$var$i = 0;
/**
 * Provides state management for a radio group component. Provides a name for the group,
 * and manages selection and focus state.
 */

function useRadioGroupState(props) {
  // Preserved here for backward compatibility. React Aria now generates the name instead of stately.
  let name = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useMemo"])(() => props.name || "radio-group-" + $eaf77ba5e143129c6bb329a6e66020d3$var$instance + "-" + ++$eaf77ba5e143129c6bb329a6e66020d3$var$i, [props.name]);
  let [selectedValue, setSelected] = useControlledState(props.value, props.defaultValue, props.onChange);
  let [lastFocusedValue, setLastFocusedValue] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(null);

  let setSelectedValue = value => {
    if (!props.isReadOnly && !props.isDisabled) {
      setSelected(value);
    }
  };

  return {
    name,
    selectedValue,
    setSelectedValue,
    lastFocusedValue,
    setLastFocusedValue,
    isDisabled: props.isDisabled || false,
    isReadOnly: props.isReadOnly || false
  };
}
//# sourceMappingURL=module.js.map

// CONCATENATED MODULE: ./node_modules/@internationalized/number/dist/module.js


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
let $fe87f22deac4debf3eab2ca6a89602ab$var$formatterCache = new Map();
let $fe87f22deac4debf3eab2ca6a89602ab$var$supportsSignDisplay = false;

try {
  // @ts-ignore
  $fe87f22deac4debf3eab2ca6a89602ab$var$supportsSignDisplay = new Intl.NumberFormat('de-DE', {
    signDisplay: 'exceptZero'
  }).resolvedOptions().signDisplay === 'exceptZero'; // eslint-disable-next-line no-empty
} catch (e) {}

let $fe87f22deac4debf3eab2ca6a89602ab$var$supportsUnit = false;

try {
  // @ts-ignore
  $fe87f22deac4debf3eab2ca6a89602ab$var$supportsUnit = new Intl.NumberFormat('de-DE', {
    style: 'unit',
    unit: 'degree'
  }).resolvedOptions().style === 'unit'; // eslint-disable-next-line no-empty
} catch (e) {} // Polyfill for units since Safari doesn't support them yet. See https://bugs.webkit.org/show_bug.cgi?id=215438.
// Currently only polyfilling the unit degree in narrow format for ColorSlider in our supported locales.
// Values were determined by switching to each locale manually in Chrome.


const $fe87f22deac4debf3eab2ca6a89602ab$var$UNITS = {
  degree: {
    narrow: {
      default: '°',
      'ja-JP': ' 度',
      'zh-TW': '度',
      'sl-SI': ' °' // Arabic?? But Safari already doesn't use Arabic digits so might be ok...
      // https://bugs.webkit.org/show_bug.cgi?id=218139

    }
  }
};

/**
 * A wrapper around Intl.NumberFormat providing additional options, polyfills, and caching for performance.
 */
class module_NumberFormatter {
  constructor(locale, options) {
    if (options === void 0) {
      options = {};
    }

    this.numberFormatter = void 0;
    this.options = void 0;
    this.numberFormatter = $fe87f22deac4debf3eab2ca6a89602ab$var$getCachedNumberFormatter(locale, options);
    this.options = options;
  }

  format(value) {
    let res = '';

    if (!$fe87f22deac4debf3eab2ca6a89602ab$var$supportsSignDisplay && this.options.signDisplay != null) {
      res = $fe87f22deac4debf3eab2ca6a89602ab$export$numberFormatSignDisplayPolyfill(this.numberFormatter, this.options.signDisplay, value);
    } else {
      res = this.numberFormatter.format(value);
    }

    if (this.options.style === 'unit' && !$fe87f22deac4debf3eab2ca6a89602ab$var$supportsUnit) {
      var _UNITS$unit;

      let {
        unit,
        unitDisplay = 'short',
        locale
      } = this.resolvedOptions();
      let values = (_UNITS$unit = $fe87f22deac4debf3eab2ca6a89602ab$var$UNITS[unit]) == null ? void 0 : _UNITS$unit[unitDisplay];
      res += values[locale] || values.default;
    }

    return res;
  }

  formatToParts(value) {
    // TODO: implement signDisplay for formatToParts
    // @ts-ignore
    return this.numberFormatter.formatToParts(value);
  }

  resolvedOptions() {
    let options = this.numberFormatter.resolvedOptions();

    if (!$fe87f22deac4debf3eab2ca6a89602ab$var$supportsSignDisplay && this.options.signDisplay != null) {
      options = extends_extends({}, options, {
        signDisplay: this.options.signDisplay
      });
    }

    if (!$fe87f22deac4debf3eab2ca6a89602ab$var$supportsUnit && this.options.style === 'unit') {
      options = extends_extends({}, options, {
        style: 'unit',
        unit: this.options.unit,
        unitDisplay: this.options.unitDisplay
      });
    }

    return options;
  }

}

function $fe87f22deac4debf3eab2ca6a89602ab$var$getCachedNumberFormatter(locale, options) {
  if (options === void 0) {
    options = {};
  }

  let {
    numberingSystem
  } = options;

  if (numberingSystem && locale.indexOf('-u-nu-') === -1) {
    locale = locale + "-u-nu-" + numberingSystem;
  }

  if (options.style === 'unit' && !$fe87f22deac4debf3eab2ca6a89602ab$var$supportsUnit) {
    var _UNITS$unit2;

    let {
      unit,
      unitDisplay = 'short'
    } = options;

    if (!unit) {
      throw new Error('unit option must be provided with style: "unit"');
    }

    if (!((_UNITS$unit2 = $fe87f22deac4debf3eab2ca6a89602ab$var$UNITS[unit]) != null && _UNITS$unit2[unitDisplay])) {
      throw new Error("Unsupported unit " + unit + " with unitDisplay = " + unitDisplay);
    }

    options = extends_extends({}, options, {
      style: 'decimal'
    });
  }

  let cacheKey = locale + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : '');

  if ($fe87f22deac4debf3eab2ca6a89602ab$var$formatterCache.has(cacheKey)) {
    return $fe87f22deac4debf3eab2ca6a89602ab$var$formatterCache.get(cacheKey);
  }

  let numberFormatter = new Intl.NumberFormat(locale, options);
  $fe87f22deac4debf3eab2ca6a89602ab$var$formatterCache.set(cacheKey, numberFormatter);
  return numberFormatter;
}
/** @private - exported for tests */


function $fe87f22deac4debf3eab2ca6a89602ab$export$numberFormatSignDisplayPolyfill(numberFormat, signDisplay, num) {
  if (signDisplay === 'auto') {
    return numberFormat.format(num);
  } else if (signDisplay === 'never') {
    return numberFormat.format(Math.abs(num));
  } else {
    let needsPositiveSign = false;

    if (signDisplay === 'always') {
      needsPositiveSign = num > 0 || Object.is(num, 0);
    } else if (signDisplay === 'exceptZero') {
      if (Object.is(num, -0) || Object.is(num, 0)) {
        num = Math.abs(num);
      } else {
        needsPositiveSign = num > 0;
      }
    }

    if (needsPositiveSign) {
      let negative = numberFormat.format(-num);
      let noSign = numberFormat.format(num); // ignore RTL/LTR marker character

      let minus = negative.replace(noSign, '').replace(/\u200e|\u061C/, '');

      if ([...minus].length !== 1) {
        console.warn('@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case');
      }

      let positive = negative.replace(noSign, '!!!').replace(minus, '+').replace('!!!', noSign);
      return positive;
    } else {
      return numberFormat.format(num);
    }
  }
}

const $e1a22841ad5113a054c8ebe55b24e1a$var$CURRENCY_SIGN_REGEX = new RegExp('^.*\\(.*\\).*$');
const $e1a22841ad5113a054c8ebe55b24e1a$var$NUMBERING_SYSTEMS = ['latn', 'arab', 'hanidec'];
/**
 * A NumberParser can be used perform locale aware parsing of numbers from Unicode strings,
 * as well as validation of partial user input. Automatically detects the numbering system
 * used in the input, and supports parsing decimals, percentages, currency values, and units
 * according to the locale.
 */

class NumberParser {
  constructor(locale, options) {
    if (options === void 0) {
      options = {};
    }

    this.locale = void 0;
    this.options = void 0;
    this.locale = locale;
    this.options = options;
  }
  /**
   * Parses the given string to a number. Returns NaN if a valid number could not be parsed.
   */


  parse(value) {
    return $e1a22841ad5113a054c8ebe55b24e1a$var$getNumberParserImpl(this.locale, this.options, value).parse(value);
  }
  /**
   * Returns whether the given string could potentially be a valid number. This should be used to
   * validate user input as the user types. If a `minValue` or `maxValue` is provided, the validity
   * of the minus/plus sign characters can be checked.
   */


  isValidPartialNumber(value, minValue, maxValue) {
    return $e1a22841ad5113a054c8ebe55b24e1a$var$getNumberParserImpl(this.locale, this.options, value).isValidPartialNumber(value, minValue, maxValue);
  }
  /**
   * Returns a numbering system for which the given string is valid in the current locale.
   * If no numbering system could be detected, the default numbering system for the current
   * locale is returned.
   */


  getNumberingSystem(value) {
    return $e1a22841ad5113a054c8ebe55b24e1a$var$getNumberParserImpl(this.locale, this.options, value).options.numberingSystem;
  }

}
const $e1a22841ad5113a054c8ebe55b24e1a$var$numberParserCache = new Map();

function $e1a22841ad5113a054c8ebe55b24e1a$var$getNumberParserImpl(locale, options, value) {
  // First try the default numbering system for the provided locale
  let defaultParser = $e1a22841ad5113a054c8ebe55b24e1a$var$getCachedNumberParser(locale, options); // If that doesn't match, and the locale doesn't include a hard coded numbering system,
  // try each of the other supported numbering systems until we find one that matches.

  if (!locale.includes('-u-nu-') && !defaultParser.isValidPartialNumber(value)) {
    for (let numberingSystem of $e1a22841ad5113a054c8ebe55b24e1a$var$NUMBERING_SYSTEMS) {
      if (numberingSystem !== defaultParser.options.numberingSystem) {
        let parser = $e1a22841ad5113a054c8ebe55b24e1a$var$getCachedNumberParser(locale + '-u-nu-' + numberingSystem, options);

        if (parser.isValidPartialNumber(value)) {
          return parser;
        }
      }
    }
  }

  return defaultParser;
}

function $e1a22841ad5113a054c8ebe55b24e1a$var$getCachedNumberParser(locale, options) {
  let cacheKey = locale + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : '');
  let parser = $e1a22841ad5113a054c8ebe55b24e1a$var$numberParserCache.get(cacheKey);

  if (!parser) {
    parser = new $e1a22841ad5113a054c8ebe55b24e1a$var$NumberParserImpl(locale, options);
    $e1a22841ad5113a054c8ebe55b24e1a$var$numberParserCache.set(cacheKey, parser);
  }

  return parser;
} // The actual number parser implementation. Instances of this class are cached
// based on the locale, options, and detected numbering system.


class $e1a22841ad5113a054c8ebe55b24e1a$var$NumberParserImpl {
  constructor(locale, options) {
    if (options === void 0) {
      options = {};
    }

    this.formatter = void 0;
    this.options = void 0;
    this.symbols = void 0;
    this.formatter = new Intl.NumberFormat(locale, options);
    this.options = this.formatter.resolvedOptions();
    this.symbols = $e1a22841ad5113a054c8ebe55b24e1a$var$getSymbols(this.formatter, this.options, options);
  }

  parse(value) {
    // to parse the number, we need to remove anything that isn't actually part of the number, for example we want '-10.40' not '-10.40 USD'
    let fullySanitizedValue = this.sanitize(value); // Remove group characters, and replace decimal points and numerals with ASCII values.

    fullySanitizedValue = $e1a22841ad5113a054c8ebe55b24e1a$var$replaceAll(fullySanitizedValue, this.symbols.group, '').replace(this.symbols.decimal, '.').replace(this.symbols.minusSign, '-').replace(this.symbols.numeral, this.symbols.index);
    let newValue = fullySanitizedValue ? +fullySanitizedValue : NaN;

    if (isNaN(newValue)) {
      return NaN;
    } // accounting will always be stripped to a positive number, so if it's accounting and has a () around everything, then we need to make it negative again


    if (this.options.currencySign === 'accounting' && $e1a22841ad5113a054c8ebe55b24e1a$var$CURRENCY_SIGN_REGEX.test(value)) {
      newValue = -1 * newValue;
    } // when reading the number, if it's a percent, then it should be interpreted as being divided by 100


    if (this.options.style === 'percent') {
      var _this$options$maximum;

      newValue /= 100; // after dividing to get the percent value, javascript may get .0210999999 instead of .0211, so fix the number of fraction digits

      newValue = +newValue.toFixed(((_this$options$maximum = this.options.maximumFractionDigits) != null ? _this$options$maximum : 0) + 2);
    }

    return newValue;
  }

  sanitize(value) {
    // Remove literals and whitespace, which are allowed anywhere in the string
    value = value.replace(this.symbols.literals, ''); // Replace the ASCII minus sign with the minus sign used in the current locale
    // so that both are allowed in case the user's keyboard doesn't have the locale's minus sign.

    value = value.replace('-', this.symbols.minusSign); // In arab numeral system, their decimal character is 1643, but most keyboards don't type that
    // instead they use the , (44) character or apparently the (1548) character.

    if (this.options.numberingSystem === 'arab') {
      value = value.replace(',', this.symbols.decimal);
      value = value.replace(String.fromCharCode(1548), this.symbols.decimal);
      value = $e1a22841ad5113a054c8ebe55b24e1a$var$replaceAll(value, '.', this.symbols.group);
    } // fr-FR group character is char code 8239, but that's not a key on the french keyboard,
    // so allow 'period' as a group char and replace it with a space


    if (this.options.locale === 'fr-FR') {
      value = $e1a22841ad5113a054c8ebe55b24e1a$var$replaceAll(value, '.', String.fromCharCode(8239));
    }

    return value;
  }

  isValidPartialNumber(value, minValue, maxValue) {
    if (minValue === void 0) {
      minValue = -Infinity;
    }

    if (maxValue === void 0) {
      maxValue = Infinity;
    }

    value = this.sanitize(value); // Remove minus or plus sign, which must be at the start of the string.

    if (value.startsWith(this.symbols.minusSign) && minValue < 0) {
      value = value.slice(this.symbols.minusSign.length);
    } else if (this.symbols.plusSign && value.startsWith(this.symbols.plusSign) && maxValue > 0) {
      value = value.slice(this.symbols.plusSign.length);
    } // Numbers cannot start with a group separator


    if (value.startsWith(this.symbols.group)) {
      return false;
    } // Remove numerals, groups, and decimals


    value = $e1a22841ad5113a054c8ebe55b24e1a$var$replaceAll(value, this.symbols.group, '').replace(this.symbols.numeral, '').replace(this.symbols.decimal, ''); // The number is valid if there are no remaining characters

    return value.length === 0;
  }

}

const $e1a22841ad5113a054c8ebe55b24e1a$var$nonLiteralParts = new Set(['decimal', 'fraction', 'integer', 'minusSign', 'plusSign', 'group']);

function $e1a22841ad5113a054c8ebe55b24e1a$var$getSymbols(formatter, intlOptions, originalOptions) {
  var _allParts$find$value, _allParts$find, _posAllParts$find, _allParts$find2, _allParts$find3;

  // Note: some locale's don't add a group symbol until there is a ten thousands place
  let allParts = formatter.formatToParts(-10000.1);
  let posAllParts = formatter.formatToParts(10000.1);
  let singularParts = formatter.formatToParts(1);
  let minusSign = (_allParts$find$value = (_allParts$find = allParts.find(p => p.type === 'minusSign')) == null ? void 0 : _allParts$find.value) != null ? _allParts$find$value : '-';
  let plusSign = (_posAllParts$find = posAllParts.find(p => p.type === 'plusSign')) == null ? void 0 : _posAllParts$find.value; // Safari does not support the signDisplay option, but our number parser polyfills it.
  // If no plus sign was returned, but the original options contained signDisplay, default to the '+' character.
  // @ts-ignore

  if (!plusSign && ((originalOptions == null ? void 0 : originalOptions.signDisplay) === 'exceptZero' || (originalOptions == null ? void 0 : originalOptions.signDisplay) === 'always')) {
    plusSign = '+';
  }

  let decimal = (_allParts$find2 = allParts.find(p => p.type === 'decimal')) == null ? void 0 : _allParts$find2.value;
  let group = (_allParts$find3 = allParts.find(p => p.type === 'group')) == null ? void 0 : _allParts$find3.value; // this set is also for a regex, it's all literals that might be in the string we want to eventually parse that
  // don't contribute to the numerical value

  let pluralLiterals = allParts.filter(p => !$e1a22841ad5113a054c8ebe55b24e1a$var$nonLiteralParts.has(p.type)).map(p => $e1a22841ad5113a054c8ebe55b24e1a$var$escapeRegex(p.value));
  let singularLiterals = singularParts.filter(p => !$e1a22841ad5113a054c8ebe55b24e1a$var$nonLiteralParts.has(p.type)).map(p => $e1a22841ad5113a054c8ebe55b24e1a$var$escapeRegex(p.value));
  let sortedLiterals = [...new Set([...singularLiterals, ...pluralLiterals])].sort((a, b) => b.length - a.length);
  let literals = new RegExp(sortedLiterals.join('|') + "|[\\p{White_Space}]", 'gu'); // These are for replacing non-latn characters with the latn equivalent

  let numerals = [...new Intl.NumberFormat(intlOptions.locale, {
    useGrouping: false
  }).format(9876543210)].reverse();
  let indexes = new Map(numerals.map((d, i) => [d, i]));
  let numeral = new RegExp("[" + numerals.join('') + "]", 'g');

  let index = d => String(indexes.get(d));

  return {
    minusSign,
    plusSign,
    decimal,
    group,
    literals,
    numeral,
    index
  };
}

function $e1a22841ad5113a054c8ebe55b24e1a$var$replaceAll(str, find, replace) {
  // @ts-ignore
  if (str.replaceAll) {
    // @ts-ignore
    return str.replaceAll(find, replace);
  }

  return str.split(find).join(replace);
}

function $e1a22841ad5113a054c8ebe55b24e1a$var$escapeRegex(string) {
  return string.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}
//# sourceMappingURL=module.js.map

// CONCATENATED MODULE: ./node_modules/@formatjs/icu-messageformat-parser/lib/error.js
var ErrorKind;
(function (ErrorKind) {
    /** Argument is unclosed (e.g. `{0`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
    /** Argument is empty (e.g. `{}`). */
    ErrorKind[ErrorKind["EMPTY_ARGUMENT"] = 2] = "EMPTY_ARGUMENT";
    /** Argument is malformed (e.g. `{foo!}``) */
    ErrorKind[ErrorKind["MALFORMED_ARGUMENT"] = 3] = "MALFORMED_ARGUMENT";
    /** Expect an argument type (e.g. `{foo,}`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_TYPE"] = 4] = "EXPECT_ARGUMENT_TYPE";
    /** Unsupported argument type (e.g. `{foo,foo}`) */
    ErrorKind[ErrorKind["INVALID_ARGUMENT_TYPE"] = 5] = "INVALID_ARGUMENT_TYPE";
    /** Expect an argument style (e.g. `{foo, number, }`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_STYLE"] = 6] = "EXPECT_ARGUMENT_STYLE";
    /** The number skeleton is invalid. */
    ErrorKind[ErrorKind["INVALID_NUMBER_SKELETON"] = 7] = "INVALID_NUMBER_SKELETON";
    /** The date time skeleton is invalid. */
    ErrorKind[ErrorKind["INVALID_DATE_TIME_SKELETON"] = 8] = "INVALID_DATE_TIME_SKELETON";
    /** Exepct a number skeleton following the `::` (e.g. `{foo, number, ::}`) */
    ErrorKind[ErrorKind["EXPECT_NUMBER_SKELETON"] = 9] = "EXPECT_NUMBER_SKELETON";
    /** Exepct a date time skeleton following the `::` (e.g. `{foo, date, ::}`) */
    ErrorKind[ErrorKind["EXPECT_DATE_TIME_SKELETON"] = 10] = "EXPECT_DATE_TIME_SKELETON";
    /** Unmatched apostrophes in the argument style (e.g. `{foo, number, 'test`) */
    ErrorKind[ErrorKind["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
    /** Missing select argument options (e.g. `{foo, select}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
    /** Expecting an offset value in `plural` or `selectordinal` argument (e.g `{foo, plural, offset}`) */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
    /** Offset value in `plural` or `selectordinal` is invalid (e.g. `{foo, plural, offset: x}`) */
    ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
    /** Expecting a selector in `select` argument (e.g `{foo, select}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
    /** Expecting a selector in `plural` or `selectordinal` argument (e.g `{foo, plural}`) */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
    /** Expecting a message fragment after the `select` selector (e.g. `{foo, select, apple}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
    /**
     * Expecting a message fragment after the `plural` or `selectordinal` selector
     * (e.g. `{foo, plural, one}`)
     */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
    /** Selector in `plural` or `selectordinal` is malformed (e.g. `{foo, plural, =x {#}}`) */
    ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
    /**
     * Duplicate selectors in `plural` or `selectordinal` argument.
     * (e.g. {foo, plural, one {#} one {#}})
     */
    ErrorKind[ErrorKind["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
    /** Duplicate selectors in `select` argument.
     * (e.g. {foo, select, apple {apple} apple {apple}})
     */
    ErrorKind[ErrorKind["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
    /** Plural or select argument option must have `other` clause. */
    ErrorKind[ErrorKind["MISSING_OTHER_CLAUSE"] = 22] = "MISSING_OTHER_CLAUSE";
    /** The tag is malformed. (e.g. `<bold!>foo</bold!>) */
    ErrorKind[ErrorKind["INVALID_TAG"] = 23] = "INVALID_TAG";
    /** The tag name is invalid. (e.g. `<123>foo</123>`) */
    ErrorKind[ErrorKind["INVALID_TAG_NAME"] = 25] = "INVALID_TAG_NAME";
    /** The closing tag does not match the opening tag. (e.g. `<bold>foo</italic>`) */
    ErrorKind[ErrorKind["UNMATCHED_CLOSING_TAG"] = 26] = "UNMATCHED_CLOSING_TAG";
    /** The opening tag has unmatched closing tag. (e.g. `<bold>foo`) */
    ErrorKind[ErrorKind["UNCLOSED_TAG"] = 27] = "UNCLOSED_TAG";
})(ErrorKind || (ErrorKind = {}));

// CONCATENATED MODULE: ./node_modules/@formatjs/icu-messageformat-parser/lib/types.js
var TYPE;
(function (TYPE) {
    /**
     * Raw text
     */
    TYPE[TYPE["literal"] = 0] = "literal";
    /**
     * Variable w/o any format, e.g `var` in `this is a {var}`
     */
    TYPE[TYPE["argument"] = 1] = "argument";
    /**
     * Variable w/ number format
     */
    TYPE[TYPE["number"] = 2] = "number";
    /**
     * Variable w/ date format
     */
    TYPE[TYPE["date"] = 3] = "date";
    /**
     * Variable w/ time format
     */
    TYPE[TYPE["time"] = 4] = "time";
    /**
     * Variable w/ select format
     */
    TYPE[TYPE["select"] = 5] = "select";
    /**
     * Variable w/ plural format
     */
    TYPE[TYPE["plural"] = 6] = "plural";
    /**
     * Only possible within plural argument.
     * This is the `#` symbol that will be substituted with the count.
     */
    TYPE[TYPE["pound"] = 7] = "pound";
    /**
     * XML-like tag
     */
    TYPE[TYPE["tag"] = 8] = "tag";
})(TYPE || (TYPE = {}));
var SKELETON_TYPE;
(function (SKELETON_TYPE) {
    SKELETON_TYPE[SKELETON_TYPE["number"] = 0] = "number";
    SKELETON_TYPE[SKELETON_TYPE["dateTime"] = 1] = "dateTime";
})(SKELETON_TYPE || (SKELETON_TYPE = {}));
/**
 * Type Guards
 */
function isLiteralElement(el) {
    return el.type === TYPE.literal;
}
function isArgumentElement(el) {
    return el.type === TYPE.argument;
}
function isNumberElement(el) {
    return el.type === TYPE.number;
}
function isDateElement(el) {
    return el.type === TYPE.date;
}
function isTimeElement(el) {
    return el.type === TYPE.time;
}
function isSelectElement(el) {
    return el.type === TYPE.select;
}
function isPluralElement(el) {
    return el.type === TYPE.plural;
}
function isPoundElement(el) {
    return el.type === TYPE.pound;
}
function isTagElement(el) {
    return el.type === TYPE.tag;
}
function isNumberSkeleton(el) {
    return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.number);
}
function isDateTimeSkeleton(el) {
    return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.dateTime);
}
function createLiteralElement(value) {
    return {
        type: TYPE.literal,
        value: value,
    };
}
function createNumberElement(value, style) {
    return {
        type: TYPE.number,
        value: value,
        style: style,
    };
}

// CONCATENATED MODULE: ./node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js
// @generated from regex-gen.ts
var SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/;

// CONCATENATED MODULE: ./node_modules/@formatjs/icu-skeleton-parser/lib/date-time.js
/**
 * https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * Credit: https://github.com/caridy/intl-datetimeformat-pattern/blob/master/index.js
 * with some tweaks
 */
var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
/**
 * Parse Date time skeleton into Intl.DateTimeFormatOptions
 * Ref: https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * @public
 * @param skeleton skeleton string
 */
function parseDateTimeSkeleton(skeleton) {
    var result = {};
    skeleton.replace(DATE_TIME_REGEX, function (match) {
        var len = match.length;
        switch (match[0]) {
            // Era
            case 'G':
                result.era = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
                break;
            // Year
            case 'y':
                result.year = len === 2 ? '2-digit' : 'numeric';
                break;
            case 'Y':
            case 'u':
            case 'U':
            case 'r':
                throw new RangeError('`Y/u/U/r` (year) patterns are not supported, use `y` instead');
            // Quarter
            case 'q':
            case 'Q':
                throw new RangeError('`q/Q` (quarter) patterns are not supported');
            // Month
            case 'M':
            case 'L':
                result.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][len - 1];
                break;
            // Week
            case 'w':
            case 'W':
                throw new RangeError('`w/W` (week) patterns are not supported');
            case 'd':
                result.day = ['numeric', '2-digit'][len - 1];
                break;
            case 'D':
            case 'F':
            case 'g':
                throw new RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
            // Weekday
            case 'E':
                result.weekday = len === 4 ? 'short' : len === 5 ? 'narrow' : 'short';
                break;
            case 'e':
                if (len < 4) {
                    throw new RangeError('`e..eee` (weekday) patterns are not supported');
                }
                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                break;
            case 'c':
                if (len < 4) {
                    throw new RangeError('`c..ccc` (weekday) patterns are not supported');
                }
                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                break;
            // Period
            case 'a': // AM, PM
                result.hour12 = true;
                break;
            case 'b': // am, pm, noon, midnight
            case 'B': // flexible day periods
                throw new RangeError('`b/B` (period) patterns are not supported, use `a` instead');
            // Hour
            case 'h':
                result.hourCycle = 'h12';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'H':
                result.hourCycle = 'h23';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'K':
                result.hourCycle = 'h11';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'k':
                result.hourCycle = 'h24';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'j':
            case 'J':
            case 'C':
                throw new RangeError('`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead');
            // Minute
            case 'm':
                result.minute = ['numeric', '2-digit'][len - 1];
                break;
            // Second
            case 's':
                result.second = ['numeric', '2-digit'][len - 1];
                break;
            case 'S':
            case 'A':
                throw new RangeError('`S/A` (second) patterns are not supported, use `s` instead');
            // Zone
            case 'z': // 1..3, 4: specific non-location format
                result.timeZoneName = len < 4 ? 'short' : 'long';
                break;
            case 'Z': // 1..3, 4, 5: The ISO8601 varios formats
            case 'O': // 1, 4: miliseconds in day short, long
            case 'v': // 1, 4: generic non-location format
            case 'V': // 1, 2, 3, 4: time zone ID or city
            case 'X': // 1, 2, 3, 4: The ISO8601 varios formats
            case 'x': // 1, 2, 3, 4: The ISO8601 varios formats
                throw new RangeError('`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead');
        }
        return '';
    });
    return result;
}

// CONCATENATED MODULE: ./node_modules/@formatjs/icu-skeleton-parser/lib/regex.generated.js
// @generated from regex-gen.ts
var regex_generated_WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

// CONCATENATED MODULE: ./node_modules/@formatjs/icu-skeleton-parser/lib/number.js


function parseNumberSkeletonFromString(skeleton) {
    if (skeleton.length === 0) {
        throw new Error('Number skeleton cannot be empty');
    }
    // Parse the skeleton
    var stringTokens = skeleton
        .split(regex_generated_WHITE_SPACE_REGEX)
        .filter(function (x) { return x.length > 0; });
    var tokens = [];
    for (var _i = 0, stringTokens_1 = stringTokens; _i < stringTokens_1.length; _i++) {
        var stringToken = stringTokens_1[_i];
        var stemAndOptions = stringToken.split('/');
        if (stemAndOptions.length === 0) {
            throw new Error('Invalid number skeleton');
        }
        var stem = stemAndOptions[0], options = stemAndOptions.slice(1);
        for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
            var option = options_1[_a];
            if (option.length === 0) {
                throw new Error('Invalid number skeleton');
            }
        }
        tokens.push({ stem: stem, options: options });
    }
    return tokens;
}
function icuUnitToEcma(unit) {
    return unit.replace(/^(.*?)-/, '');
}
var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?$/g;
var INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
var CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
function parseSignificantPrecision(str) {
    var result = {};
    str.replace(SIGNIFICANT_PRECISION_REGEX, function (_, g1, g2) {
        // @@@ case
        if (typeof g2 !== 'string') {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits = g1.length;
        }
        // @@@+ case
        else if (g2 === '+') {
            result.minimumSignificantDigits = g1.length;
        }
        // .### case
        else if (g1[0] === '#') {
            result.maximumSignificantDigits = g1.length;
        }
        // .@@## or .@@@ case
        else {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits =
                g1.length + (typeof g2 === 'string' ? g2.length : 0);
        }
        return '';
    });
    return result;
}
function parseSign(str) {
    switch (str) {
        case 'sign-auto':
            return {
                signDisplay: 'auto',
            };
        case 'sign-accounting':
        case '()':
            return {
                currencySign: 'accounting',
            };
        case 'sign-always':
        case '+!':
            return {
                signDisplay: 'always',
            };
        case 'sign-accounting-always':
        case '()!':
            return {
                signDisplay: 'always',
                currencySign: 'accounting',
            };
        case 'sign-except-zero':
        case '+?':
            return {
                signDisplay: 'exceptZero',
            };
        case 'sign-accounting-except-zero':
        case '()?':
            return {
                signDisplay: 'exceptZero',
                currencySign: 'accounting',
            };
        case 'sign-never':
        case '+_':
            return {
                signDisplay: 'never',
            };
    }
}
function parseConciseScientificAndEngineeringStem(stem) {
    // Engineering
    var result;
    if (stem[0] === 'E' && stem[1] === 'E') {
        result = {
            notation: 'engineering',
        };
        stem = stem.slice(2);
    }
    else if (stem[0] === 'E') {
        result = {
            notation: 'scientific',
        };
        stem = stem.slice(1);
    }
    if (result) {
        var signDisplay = stem.slice(0, 2);
        if (signDisplay === '+!') {
            result.signDisplay = 'always';
            stem = stem.slice(2);
        }
        else if (signDisplay === '+?') {
            result.signDisplay = 'exceptZero';
            stem = stem.slice(2);
        }
        if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) {
            throw new Error('Malformed concise eng/scientific notation');
        }
        result.minimumIntegerDigits = stem.length;
    }
    return result;
}
function parseNotationOptions(opt) {
    var result = {};
    var signOpts = parseSign(opt);
    if (signOpts) {
        return signOpts;
    }
    return result;
}
/**
 * https://github.com/unicode-org/icu/blob/master/docs/userguide/format_parse/numbers/skeletons.md#skeleton-stems-and-options
 */
function parseNumberSkeleton(tokens) {
    var result = {};
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        switch (token.stem) {
            case 'percent':
            case '%':
                result.style = 'percent';
                continue;
            case '%x100':
                result.style = 'percent';
                result.scale = 100;
                continue;
            case 'currency':
                result.style = 'currency';
                result.currency = token.options[0];
                continue;
            case 'group-off':
            case ',_':
                result.useGrouping = false;
                continue;
            case 'precision-integer':
            case '.':
                result.maximumFractionDigits = 0;
                continue;
            case 'measure-unit':
            case 'unit':
                result.style = 'unit';
                result.unit = icuUnitToEcma(token.options[0]);
                continue;
            case 'compact-short':
            case 'K':
                result.notation = 'compact';
                result.compactDisplay = 'short';
                continue;
            case 'compact-long':
            case 'KK':
                result.notation = 'compact';
                result.compactDisplay = 'long';
                continue;
            case 'scientific':
                result = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, result), { notation: 'scientific' }), token.options.reduce(function (all, opt) { return (Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, all), parseNotationOptions(opt))); }, {}));
                continue;
            case 'engineering':
                result = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, result), { notation: 'engineering' }), token.options.reduce(function (all, opt) { return (Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, all), parseNotationOptions(opt))); }, {}));
                continue;
            case 'notation-simple':
                result.notation = 'standard';
                continue;
            // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
            case 'unit-width-narrow':
                result.currencyDisplay = 'narrowSymbol';
                result.unitDisplay = 'narrow';
                continue;
            case 'unit-width-short':
                result.currencyDisplay = 'code';
                result.unitDisplay = 'short';
                continue;
            case 'unit-width-full-name':
                result.currencyDisplay = 'name';
                result.unitDisplay = 'long';
                continue;
            case 'unit-width-iso-code':
                result.currencyDisplay = 'symbol';
                continue;
            case 'scale':
                result.scale = parseFloat(token.options[0]);
                continue;
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
            case 'integer-width':
                if (token.options.length > 1) {
                    throw new RangeError('integer-width stems only accept a single optional option');
                }
                token.options[0].replace(INTEGER_WIDTH_REGEX, function (_, g1, g2, g3, g4, g5) {
                    if (g1) {
                        result.minimumIntegerDigits = g2.length;
                    }
                    else if (g3 && g4) {
                        throw new Error('We currently do not support maximum integer digits');
                    }
                    else if (g5) {
                        throw new Error('We currently do not support exact integer digits');
                    }
                    return '';
                });
                continue;
        }
        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
        if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
            result.minimumIntegerDigits = token.stem.length;
            continue;
        }
        if (FRACTION_PRECISION_REGEX.test(token.stem)) {
            // Precision
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#fraction-precision
            // precision-integer case
            if (token.options.length > 1) {
                throw new RangeError('Fraction-precision stems only accept a single optional option');
            }
            token.stem.replace(FRACTION_PRECISION_REGEX, function (_, g1, g2, g3, g4, g5) {
                // .000* case (before ICU67 it was .000+)
                if (g2 === '*') {
                    result.minimumFractionDigits = g1.length;
                }
                // .### case
                else if (g3 && g3[0] === '#') {
                    result.maximumFractionDigits = g3.length;
                }
                // .00## case
                else if (g4 && g5) {
                    result.minimumFractionDigits = g4.length;
                    result.maximumFractionDigits = g4.length + g5.length;
                }
                else {
                    result.minimumFractionDigits = g1.length;
                    result.maximumFractionDigits = g1.length;
                }
                return '';
            });
            if (token.options.length) {
                result = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, result), parseSignificantPrecision(token.options[0]));
            }
            continue;
        }
        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#significant-digits-precision
        if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
            result = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, result), parseSignificantPrecision(token.stem));
            continue;
        }
        var signOpts = parseSign(token.stem);
        if (signOpts) {
            result = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, result), signOpts);
        }
        var conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);
        if (conciseScientificAndEngineeringOpts) {
            result = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, result), conciseScientificAndEngineeringOpts);
        }
    }
    return result;
}

// CONCATENATED MODULE: ./node_modules/@formatjs/icu-skeleton-parser/lib/index.js



// CONCATENATED MODULE: ./node_modules/@formatjs/icu-messageformat-parser/lib/parser.js
var parser_a;





var SPACE_SEPARATOR_START_REGEX = new RegExp("^" + SPACE_SEPARATOR_REGEX.source + "*");
var SPACE_SEPARATOR_END_REGEX = new RegExp(SPACE_SEPARATOR_REGEX.source + "*$");
function createLocation(start, end) {
    return { start: start, end: end };
}
// #region Ponyfills
// Consolidate these variables up top for easier toggling during debugging
var hasNativeStartsWith = !!String.prototype.startsWith;
var hasNativeFromCodePoint = !!String.fromCodePoint;
var hasNativeFromEntries = !!Object.fromEntries;
var hasNativeCodePointAt = !!String.prototype.codePointAt;
var hasTrimStart = !!String.prototype.trimStart;
var hasTrimEnd = !!String.prototype.trimEnd;
var hasNativeIsSafeInteger = !!Number.isSafeInteger;
var isSafeInteger = hasNativeIsSafeInteger
    ? Number.isSafeInteger
    : function (n) {
        return (typeof n === 'number' &&
            isFinite(n) &&
            Math.floor(n) === n &&
            Math.abs(n) <= 0x1fffffffffffff);
    };
// IE11 does not support y and u.
var REGEX_SUPPORTS_U_AND_Y = true;
try {
    var re = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    /**
     * legacy Edge or Xbox One browser
     * Unicode flag support: supported
     * Pattern_Syntax support: not supported
     * See https://github.com/formatjs/formatjs/issues/2822
     */
    REGEX_SUPPORTS_U_AND_Y = ((parser_a = re.exec('a')) === null || parser_a === void 0 ? void 0 : parser_a[0]) === 'a';
}
catch (_) {
    REGEX_SUPPORTS_U_AND_Y = false;
}
var startsWith = hasNativeStartsWith
    ? // Native
        function startsWith(s, search, position) {
            return s.startsWith(search, position);
        }
    : // For IE11
        function startsWith(s, search, position) {
            return s.slice(position, position + search.length) === search;
        };
var fromCodePoint = hasNativeFromCodePoint
    ? String.fromCodePoint
    : // IE11
        function fromCodePoint() {
            var codePoints = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                codePoints[_i] = arguments[_i];
            }
            var elements = '';
            var length = codePoints.length;
            var i = 0;
            var code;
            while (length > i) {
                code = codePoints[i++];
                if (code > 0x10ffff)
                    throw RangeError(code + ' is not a valid code point');
                elements +=
                    code < 0x10000
                        ? String.fromCharCode(code)
                        : String.fromCharCode(((code -= 0x10000) >> 10) + 0xd800, (code % 0x400) + 0xdc00);
            }
            return elements;
        };
var fromEntries = 
// native
hasNativeFromEntries
    ? Object.fromEntries
    : // Ponyfill
        function fromEntries(entries) {
            var obj = {};
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var _a = entries_1[_i], k = _a[0], v = _a[1];
                obj[k] = v;
            }
            return obj;
        };
var codePointAt = hasNativeCodePointAt
    ? // Native
        function codePointAt(s, index) {
            return s.codePointAt(index);
        }
    : // IE 11
        function codePointAt(s, index) {
            var size = s.length;
            if (index < 0 || index >= size) {
                return undefined;
            }
            var first = s.charCodeAt(index);
            var second;
            return first < 0xd800 ||
                first > 0xdbff ||
                index + 1 === size ||
                (second = s.charCodeAt(index + 1)) < 0xdc00 ||
                second > 0xdfff
                ? first
                : ((first - 0xd800) << 10) + (second - 0xdc00) + 0x10000;
        };
var trimStart = hasTrimStart
    ? // Native
        function trimStart(s) {
            return s.trimStart();
        }
    : // Ponyfill
        function trimStart(s) {
            return s.replace(SPACE_SEPARATOR_START_REGEX, '');
        };
var trimEnd = hasTrimEnd
    ? // Native
        function trimEnd(s) {
            return s.trimEnd();
        }
    : // Ponyfill
        function trimEnd(s) {
            return s.replace(SPACE_SEPARATOR_END_REGEX, '');
        };
// Prevent minifier to translate new RegExp to literal form that might cause syntax error on IE11.
function RE(s, flag) {
    return new RegExp(s, flag);
}
// #endregion
var matchIdentifierAtIndex;
if (REGEX_SUPPORTS_U_AND_Y) {
    // Native
    var IDENTIFIER_PREFIX_RE_1 = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
        var _a;
        IDENTIFIER_PREFIX_RE_1.lastIndex = index;
        var match = IDENTIFIER_PREFIX_RE_1.exec(s);
        return (_a = match[1]) !== null && _a !== void 0 ? _a : '';
    };
}
else {
    // IE11
    matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
        var match = [];
        while (true) {
            var c = codePointAt(s, index);
            if (c === undefined || _isWhiteSpace(c) || _isPatternSyntax(c)) {
                break;
            }
            match.push(c);
            index += c >= 0x10000 ? 2 : 1;
        }
        return fromCodePoint.apply(void 0, match);
    };
}
var parser_Parser = /** @class */ (function () {
    function Parser(message, options) {
        if (options === void 0) { options = {}; }
        this.message = message;
        this.position = { offset: 0, line: 1, column: 1 };
        this.ignoreTag = !!options.ignoreTag;
        this.requiresOtherClause = !!options.requiresOtherClause;
        this.shouldParseSkeletons = !!options.shouldParseSkeletons;
    }
    Parser.prototype.parse = function () {
        if (this.offset() !== 0) {
            throw Error('parser can only be used once');
        }
        return this.parseMessage(0, '', false);
    };
    Parser.prototype.parseMessage = function (nestingLevel, parentArgType, expectingCloseTag) {
        var elements = [];
        while (!this.isEOF()) {
            var char = this.char();
            if (char === 123 /* `{` */) {
                var result = this.parseArgument(nestingLevel, expectingCloseTag);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
            else if (char === 125 /* `}` */ && nestingLevel > 0) {
                break;
            }
            else if (char === 35 /* `#` */ &&
                (parentArgType === 'plural' || parentArgType === 'selectordinal')) {
                var position = this.clonePosition();
                this.bump();
                elements.push({
                    type: TYPE.pound,
                    location: createLocation(position, this.clonePosition()),
                });
            }
            else if (char === 60 /* `<` */ &&
                !this.ignoreTag &&
                this.peek() === 47 // char code for '/'
            ) {
                if (expectingCloseTag) {
                    break;
                }
                else {
                    return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(this.clonePosition(), this.clonePosition()));
                }
            }
            else if (char === 60 /* `<` */ &&
                !this.ignoreTag &&
                _isAlpha(this.peek() || 0)) {
                var result = this.parseTag(nestingLevel, parentArgType);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
            else {
                var result = this.parseLiteral(nestingLevel, parentArgType);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
        }
        return { val: elements, err: null };
    };
    /**
     * A tag name must start with an ASCII lower/upper case letter. The grammar is based on the
     * [custom element name][] except that a dash is NOT always mandatory and uppercase letters
     * are accepted:
     *
     * ```
     * tag ::= "<" tagName (whitespace)* "/>" | "<" tagName (whitespace)* ">" message "</" tagName (whitespace)* ">"
     * tagName ::= [a-z] (PENChar)*
     * PENChar ::=
     *     "-" | "." | [0-9] | "_" | [a-z] | [A-Z] | #xB7 | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x37D] |
     *     [#x37F-#x1FFF] | [#x200C-#x200D] | [#x203F-#x2040] | [#x2070-#x218F] | [#x2C00-#x2FEF] |
     *     [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
     * ```
     *
     * [custom element name]: https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
     * NOTE: We're a bit more lax here since HTML technically does not allow uppercase HTML element but we do
     * since other tag-based engines like React allow it
     */
    Parser.prototype.parseTag = function (nestingLevel, parentArgType) {
        var startPosition = this.clonePosition();
        this.bump(); // `<`
        var tagName = this.parseTagName();
        this.bumpSpace();
        if (this.bumpIf('/>')) {
            // Self closing tag
            return {
                val: {
                    type: TYPE.literal,
                    value: "<" + tagName + "/>",
                    location: createLocation(startPosition, this.clonePosition()),
                },
                err: null,
            };
        }
        else if (this.bumpIf('>')) {
            var childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, true);
            if (childrenResult.err) {
                return childrenResult;
            }
            var children = childrenResult.val;
            // Expecting a close tag
            var endTagStartPosition = this.clonePosition();
            if (this.bumpIf('</')) {
                if (this.isEOF() || !_isAlpha(this.char())) {
                    return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
                }
                var closingTagNameStartPosition = this.clonePosition();
                var closingTagName = this.parseTagName();
                if (tagName !== closingTagName) {
                    return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(closingTagNameStartPosition, this.clonePosition()));
                }
                this.bumpSpace();
                if (!this.bumpIf('>')) {
                    return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
                }
                return {
                    val: {
                        type: TYPE.tag,
                        value: tagName,
                        children: children,
                        location: createLocation(startPosition, this.clonePosition()),
                    },
                    err: null,
                };
            }
            else {
                return this.error(ErrorKind.UNCLOSED_TAG, createLocation(startPosition, this.clonePosition()));
            }
        }
        else {
            return this.error(ErrorKind.INVALID_TAG, createLocation(startPosition, this.clonePosition()));
        }
    };
    /**
     * This method assumes that the caller has peeked ahead for the first tag character.
     */
    Parser.prototype.parseTagName = function () {
        var startOffset = this.offset();
        this.bump(); // the first tag name character
        while (!this.isEOF() && _isPotentialElementNameChar(this.char())) {
            this.bump();
        }
        return this.message.slice(startOffset, this.offset());
    };
    Parser.prototype.parseLiteral = function (nestingLevel, parentArgType) {
        var start = this.clonePosition();
        var value = '';
        while (true) {
            var parseQuoteResult = this.tryParseQuote(parentArgType);
            if (parseQuoteResult) {
                value += parseQuoteResult;
                continue;
            }
            var parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);
            if (parseUnquotedResult) {
                value += parseUnquotedResult;
                continue;
            }
            var parseLeftAngleResult = this.tryParseLeftAngleBracket();
            if (parseLeftAngleResult) {
                value += parseLeftAngleResult;
                continue;
            }
            break;
        }
        var location = createLocation(start, this.clonePosition());
        return {
            val: { type: TYPE.literal, value: value, location: location },
            err: null,
        };
    };
    Parser.prototype.tryParseLeftAngleBracket = function () {
        if (!this.isEOF() &&
            this.char() === 60 /* `<` */ &&
            (this.ignoreTag ||
                // If at the opening tag or closing tag position, bail.
                !_isAlphaOrSlash(this.peek() || 0))) {
            this.bump(); // `<`
            return '<';
        }
        return null;
    };
    /**
     * Starting with ICU 4.8, an ASCII apostrophe only starts quoted text if it immediately precedes
     * a character that requires quoting (that is, "only where needed"), and works the same in
     * nested messages as on the top level of the pattern. The new behavior is otherwise compatible.
     */
    Parser.prototype.tryParseQuote = function (parentArgType) {
        if (this.isEOF() || this.char() !== 39 /* `'` */) {
            return null;
        }
        // Parse escaped char following the apostrophe, or early return if there is no escaped char.
        // Check if is valid escaped character
        switch (this.peek()) {
            case 39 /* `'` */:
                // double quote, should return as a single quote.
                this.bump();
                this.bump();
                return "'";
            // '{', '<', '>', '}'
            case 123:
            case 60:
            case 62:
            case 125:
                break;
            case 35: // '#'
                if (parentArgType === 'plural' || parentArgType === 'selectordinal') {
                    break;
                }
                return null;
            default:
                return null;
        }
        this.bump(); // apostrophe
        var codePoints = [this.char()]; // escaped char
        this.bump();
        // read chars until the optional closing apostrophe is found
        while (!this.isEOF()) {
            var ch = this.char();
            if (ch === 39 /* `'` */) {
                if (this.peek() === 39 /* `'` */) {
                    codePoints.push(39);
                    // Bump one more time because we need to skip 2 characters.
                    this.bump();
                }
                else {
                    // Optional closing apostrophe.
                    this.bump();
                    break;
                }
            }
            else {
                codePoints.push(ch);
            }
            this.bump();
        }
        return fromCodePoint.apply(void 0, codePoints);
    };
    Parser.prototype.tryParseUnquoted = function (nestingLevel, parentArgType) {
        if (this.isEOF()) {
            return null;
        }
        var ch = this.char();
        if (ch === 60 /* `<` */ ||
            ch === 123 /* `{` */ ||
            (ch === 35 /* `#` */ &&
                (parentArgType === 'plural' || parentArgType === 'selectordinal')) ||
            (ch === 125 /* `}` */ && nestingLevel > 0)) {
            return null;
        }
        else {
            this.bump();
            return fromCodePoint(ch);
        }
    };
    Parser.prototype.parseArgument = function (nestingLevel, expectingCloseTag) {
        var openingBracePosition = this.clonePosition();
        this.bump(); // `{`
        this.bumpSpace();
        if (this.isEOF()) {
            return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        if (this.char() === 125 /* `}` */) {
            this.bump();
            return this.error(ErrorKind.EMPTY_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
        // argument name
        var value = this.parseIdentifierIfPossible().value;
        if (!value) {
            return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
        this.bumpSpace();
        if (this.isEOF()) {
            return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        switch (this.char()) {
            // Simple argument: `{name}`
            case 125 /* `}` */: {
                this.bump(); // `}`
                return {
                    val: {
                        type: TYPE.argument,
                        // value does not include the opening and closing braces.
                        value: value,
                        location: createLocation(openingBracePosition, this.clonePosition()),
                    },
                    err: null,
                };
            }
            // Argument with options: `{name, format, ...}`
            case 44 /* `,` */: {
                this.bump(); // `,`
                this.bumpSpace();
                if (this.isEOF()) {
                    return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
                }
                return this.parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition);
            }
            default:
                return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
    };
    /**
     * Advance the parser until the end of the identifier, if it is currently on
     * an identifier character. Return an empty string otherwise.
     */
    Parser.prototype.parseIdentifierIfPossible = function () {
        var startingPosition = this.clonePosition();
        var startOffset = this.offset();
        var value = matchIdentifierAtIndex(this.message, startOffset);
        var endOffset = startOffset + value.length;
        this.bumpTo(endOffset);
        var endPosition = this.clonePosition();
        var location = createLocation(startingPosition, endPosition);
        return { value: value, location: location };
    };
    Parser.prototype.parseArgumentOptions = function (nestingLevel, expectingCloseTag, value, openingBracePosition) {
        var _a;
        // Parse this range:
        // {name, type, style}
        //        ^---^
        var typeStartPosition = this.clonePosition();
        var argType = this.parseIdentifierIfPossible().value;
        var typeEndPosition = this.clonePosition();
        switch (argType) {
            case '':
                // Expecting a style string number, date, time, plural, selectordinal, or select.
                return this.error(ErrorKind.EXPECT_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
            case 'number':
            case 'date':
            case 'time': {
                // Parse this range:
                // {name, number, style}
                //              ^-------^
                this.bumpSpace();
                var styleAndLocation = null;
                if (this.bumpIf(',')) {
                    this.bumpSpace();
                    var styleStartPosition = this.clonePosition();
                    var result = this.parseSimpleArgStyleIfPossible();
                    if (result.err) {
                        return result;
                    }
                    var style = trimEnd(result.val);
                    if (style.length === 0) {
                        return this.error(ErrorKind.EXPECT_ARGUMENT_STYLE, createLocation(this.clonePosition(), this.clonePosition()));
                    }
                    var styleLocation = createLocation(styleStartPosition, this.clonePosition());
                    styleAndLocation = { style: style, styleLocation: styleLocation };
                }
                var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                if (argCloseResult.err) {
                    return argCloseResult;
                }
                var location_1 = createLocation(openingBracePosition, this.clonePosition());
                // Extract style or skeleton
                if (styleAndLocation && startsWith(styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style, '::', 0)) {
                    // Skeleton starts with `::`.
                    var skeleton = trimStart(styleAndLocation.style.slice(2));
                    if (argType === 'number') {
                        var result = this.parseNumberSkeletonFromString(skeleton, styleAndLocation.styleLocation);
                        if (result.err) {
                            return result;
                        }
                        return {
                            val: { type: TYPE.number, value: value, location: location_1, style: result.val },
                            err: null,
                        };
                    }
                    else {
                        if (skeleton.length === 0) {
                            return this.error(ErrorKind.EXPECT_DATE_TIME_SKELETON, location_1);
                        }
                        var style = {
                            type: SKELETON_TYPE.dateTime,
                            pattern: skeleton,
                            location: styleAndLocation.styleLocation,
                            parsedOptions: this.shouldParseSkeletons
                                ? parseDateTimeSkeleton(skeleton)
                                : {},
                        };
                        var type = argType === 'date' ? TYPE.date : TYPE.time;
                        return {
                            val: { type: type, value: value, location: location_1, style: style },
                            err: null,
                        };
                    }
                }
                // Regular style or no style.
                return {
                    val: {
                        type: argType === 'number'
                            ? TYPE.number
                            : argType === 'date'
                                ? TYPE.date
                                : TYPE.time,
                        value: value,
                        location: location_1,
                        style: (_a = styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style) !== null && _a !== void 0 ? _a : null,
                    },
                    err: null,
                };
            }
            case 'plural':
            case 'selectordinal':
            case 'select': {
                // Parse this range:
                // {name, plural, options}
                //              ^---------^
                var typeEndPosition_1 = this.clonePosition();
                this.bumpSpace();
                if (!this.bumpIf(',')) {
                    return this.error(ErrorKind.EXPECT_SELECT_ARGUMENT_OPTIONS, createLocation(typeEndPosition_1, Object(tslib_es6["a" /* __assign */])({}, typeEndPosition_1)));
                }
                this.bumpSpace();
                // Parse offset:
                // {name, plural, offset:1, options}
                //                ^-----^
                //
                // or the first option:
                //
                // {name, plural, one {...} other {...}}
                //                ^--^
                var identifierAndLocation = this.parseIdentifierIfPossible();
                var pluralOffset = 0;
                if (argType !== 'select' && identifierAndLocation.value === 'offset') {
                    if (!this.bumpIf(':')) {
                        return this.error(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, createLocation(this.clonePosition(), this.clonePosition()));
                    }
                    this.bumpSpace();
                    var result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ErrorKind.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                    if (result.err) {
                        return result;
                    }
                    // Parse another identifier for option parsing
                    this.bumpSpace();
                    identifierAndLocation = this.parseIdentifierIfPossible();
                    pluralOffset = result.val;
                }
                var optionsResult = this.tryParsePluralOrSelectOptions(nestingLevel, argType, expectingCloseTag, identifierAndLocation);
                if (optionsResult.err) {
                    return optionsResult;
                }
                var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                if (argCloseResult.err) {
                    return argCloseResult;
                }
                var location_2 = createLocation(openingBracePosition, this.clonePosition());
                if (argType === 'select') {
                    return {
                        val: {
                            type: TYPE.select,
                            value: value,
                            options: fromEntries(optionsResult.val),
                            location: location_2,
                        },
                        err: null,
                    };
                }
                else {
                    return {
                        val: {
                            type: TYPE.plural,
                            value: value,
                            options: fromEntries(optionsResult.val),
                            offset: pluralOffset,
                            pluralType: argType === 'plural' ? 'cardinal' : 'ordinal',
                            location: location_2,
                        },
                        err: null,
                    };
                }
            }
            default:
                return this.error(ErrorKind.INVALID_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
        }
    };
    Parser.prototype.tryParseArgumentClose = function (openingBracePosition) {
        // Parse: {value, number, ::currency/GBP }
        //
        if (this.isEOF() || this.char() !== 125 /* `}` */) {
            return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        this.bump(); // `}`
        return { val: true, err: null };
    };
    /**
     * See: https://github.com/unicode-org/icu/blob/af7ed1f6d2298013dc303628438ec4abe1f16479/icu4c/source/common/messagepattern.cpp#L659
     */
    Parser.prototype.parseSimpleArgStyleIfPossible = function () {
        var nestedBraces = 0;
        var startPosition = this.clonePosition();
        while (!this.isEOF()) {
            var ch = this.char();
            switch (ch) {
                case 39 /* `'` */: {
                    // Treat apostrophe as quoting but include it in the style part.
                    // Find the end of the quoted literal text.
                    this.bump();
                    var apostrophePosition = this.clonePosition();
                    if (!this.bumpUntil("'")) {
                        return this.error(ErrorKind.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, createLocation(apostrophePosition, this.clonePosition()));
                    }
                    this.bump();
                    break;
                }
                case 123 /* `{` */: {
                    nestedBraces += 1;
                    this.bump();
                    break;
                }
                case 125 /* `}` */: {
                    if (nestedBraces > 0) {
                        nestedBraces -= 1;
                    }
                    else {
                        return {
                            val: this.message.slice(startPosition.offset, this.offset()),
                            err: null,
                        };
                    }
                    break;
                }
                default:
                    this.bump();
                    break;
            }
        }
        return {
            val: this.message.slice(startPosition.offset, this.offset()),
            err: null,
        };
    };
    Parser.prototype.parseNumberSkeletonFromString = function (skeleton, location) {
        var tokens = [];
        try {
            tokens = parseNumberSkeletonFromString(skeleton);
        }
        catch (e) {
            return this.error(ErrorKind.INVALID_NUMBER_SKELETON, location);
        }
        return {
            val: {
                type: SKELETON_TYPE.number,
                tokens: tokens,
                location: location,
                parsedOptions: this.shouldParseSkeletons
                    ? parseNumberSkeleton(tokens)
                    : {},
            },
            err: null,
        };
    };
    /**
     * @param nesting_level The current nesting level of messages.
     *     This can be positive when parsing message fragment in select or plural argument options.
     * @param parent_arg_type The parent argument's type.
     * @param parsed_first_identifier If provided, this is the first identifier-like selector of
     *     the argument. It is a by-product of a previous parsing attempt.
     * @param expecting_close_tag If true, this message is directly or indirectly nested inside
     *     between a pair of opening and closing tags. The nested message will not parse beyond
     *     the closing tag boundary.
     */
    Parser.prototype.tryParsePluralOrSelectOptions = function (nestingLevel, parentArgType, expectCloseTag, parsedFirstIdentifier) {
        var _a;
        var hasOtherClause = false;
        var options = [];
        var parsedSelectors = new Set();
        var selector = parsedFirstIdentifier.value, selectorLocation = parsedFirstIdentifier.location;
        // Parse:
        // one {one apple}
        // ^--^
        while (true) {
            if (selector.length === 0) {
                var startPosition = this.clonePosition();
                if (parentArgType !== 'select' && this.bumpIf('=')) {
                    // Try parse `={number}` selector
                    var result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, ErrorKind.INVALID_PLURAL_ARGUMENT_SELECTOR);
                    if (result.err) {
                        return result;
                    }
                    selectorLocation = createLocation(startPosition, this.clonePosition());
                    selector = this.message.slice(startPosition.offset, this.offset());
                }
                else {
                    break;
                }
            }
            // Duplicate selector clauses
            if (parsedSelectors.has(selector)) {
                return this.error(parentArgType === 'select'
                    ? ErrorKind.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : ErrorKind.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, selectorLocation);
            }
            if (selector === 'other') {
                hasOtherClause = true;
            }
            // Parse:
            // one {one apple}
            //     ^----------^
            this.bumpSpace();
            var openingBracePosition = this.clonePosition();
            if (!this.bumpIf('{')) {
                return this.error(parentArgType === 'select'
                    ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, createLocation(this.clonePosition(), this.clonePosition()));
            }
            var fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);
            if (fragmentResult.err) {
                return fragmentResult;
            }
            var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
            if (argCloseResult.err) {
                return argCloseResult;
            }
            options.push([
                selector,
                {
                    value: fragmentResult.val,
                    location: createLocation(openingBracePosition, this.clonePosition()),
                },
            ]);
            // Keep track of the existing selectors
            parsedSelectors.add(selector);
            // Prep next selector clause.
            this.bumpSpace();
            (_a = this.parseIdentifierIfPossible(), selector = _a.value, selectorLocation = _a.location);
        }
        if (options.length === 0) {
            return this.error(parentArgType === 'select'
                ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR
                : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, createLocation(this.clonePosition(), this.clonePosition()));
        }
        if (this.requiresOtherClause && !hasOtherClause) {
            return this.error(ErrorKind.MISSING_OTHER_CLAUSE, createLocation(this.clonePosition(), this.clonePosition()));
        }
        return { val: options, err: null };
    };
    Parser.prototype.tryParseDecimalInteger = function (expectNumberError, invalidNumberError) {
        var sign = 1;
        var startingPosition = this.clonePosition();
        if (this.bumpIf('+')) {
        }
        else if (this.bumpIf('-')) {
            sign = -1;
        }
        var hasDigits = false;
        var decimal = 0;
        while (!this.isEOF()) {
            var ch = this.char();
            if (ch >= 48 /* `0` */ && ch <= 57 /* `9` */) {
                hasDigits = true;
                decimal = decimal * 10 + (ch - 48);
                this.bump();
            }
            else {
                break;
            }
        }
        var location = createLocation(startingPosition, this.clonePosition());
        if (!hasDigits) {
            return this.error(expectNumberError, location);
        }
        decimal *= sign;
        if (!isSafeInteger(decimal)) {
            return this.error(invalidNumberError, location);
        }
        return { val: decimal, err: null };
    };
    Parser.prototype.offset = function () {
        return this.position.offset;
    };
    Parser.prototype.isEOF = function () {
        return this.offset() === this.message.length;
    };
    Parser.prototype.clonePosition = function () {
        // This is much faster than `Object.assign` or spread.
        return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column,
        };
    };
    /**
     * Return the code point at the current position of the parser.
     * Throws if the index is out of bound.
     */
    Parser.prototype.char = function () {
        var offset = this.position.offset;
        if (offset >= this.message.length) {
            throw Error('out of bound');
        }
        var code = codePointAt(this.message, offset);
        if (code === undefined) {
            throw Error("Offset " + offset + " is at invalid UTF-16 code unit boundary");
        }
        return code;
    };
    Parser.prototype.error = function (kind, location) {
        return {
            val: null,
            err: {
                kind: kind,
                message: this.message,
                location: location,
            },
        };
    };
    /** Bump the parser to the next UTF-16 code unit. */
    Parser.prototype.bump = function () {
        if (this.isEOF()) {
            return;
        }
        var code = this.char();
        if (code === 10 /* '\n' */) {
            this.position.line += 1;
            this.position.column = 1;
            this.position.offset += 1;
        }
        else {
            this.position.column += 1;
            // 0 ~ 0x10000 -> unicode BMP, otherwise skip the surrogate pair.
            this.position.offset += code < 0x10000 ? 1 : 2;
        }
    };
    /**
     * If the substring starting at the current position of the parser has
     * the given prefix, then bump the parser to the character immediately
     * following the prefix and return true. Otherwise, don't bump the parser
     * and return false.
     */
    Parser.prototype.bumpIf = function (prefix) {
        if (startsWith(this.message, prefix, this.offset())) {
            for (var i = 0; i < prefix.length; i++) {
                this.bump();
            }
            return true;
        }
        return false;
    };
    /**
     * Bump the parser until the pattern character is found and return `true`.
     * Otherwise bump to the end of the file and return `false`.
     */
    Parser.prototype.bumpUntil = function (pattern) {
        var currentOffset = this.offset();
        var index = this.message.indexOf(pattern, currentOffset);
        if (index >= 0) {
            this.bumpTo(index);
            return true;
        }
        else {
            this.bumpTo(this.message.length);
            return false;
        }
    };
    /**
     * Bump the parser to the target offset.
     * If target offset is beyond the end of the input, bump the parser to the end of the input.
     */
    Parser.prototype.bumpTo = function (targetOffset) {
        if (this.offset() > targetOffset) {
            throw Error("targetOffset " + targetOffset + " must be greater than or equal to the current offset " + this.offset());
        }
        targetOffset = Math.min(targetOffset, this.message.length);
        while (true) {
            var offset = this.offset();
            if (offset === targetOffset) {
                break;
            }
            if (offset > targetOffset) {
                throw Error("targetOffset " + targetOffset + " is at invalid UTF-16 code unit boundary");
            }
            this.bump();
            if (this.isEOF()) {
                break;
            }
        }
    };
    /** advance the parser through all whitespace to the next non-whitespace code unit. */
    Parser.prototype.bumpSpace = function () {
        while (!this.isEOF() && _isWhiteSpace(this.char())) {
            this.bump();
        }
    };
    /**
     * Peek at the *next* Unicode codepoint in the input without advancing the parser.
     * If the input has been exhausted, then this returns null.
     */
    Parser.prototype.peek = function () {
        if (this.isEOF()) {
            return null;
        }
        var code = this.char();
        var offset = this.offset();
        var nextCode = this.message.charCodeAt(offset + (code >= 0x10000 ? 2 : 1));
        return nextCode !== null && nextCode !== void 0 ? nextCode : null;
    };
    return Parser;
}());

/**
 * This check if codepoint is alphabet (lower & uppercase)
 * @param codepoint
 * @returns
 */
function _isAlpha(codepoint) {
    return ((codepoint >= 97 && codepoint <= 122) ||
        (codepoint >= 65 && codepoint <= 90));
}
function _isAlphaOrSlash(codepoint) {
    return _isAlpha(codepoint) || codepoint === 47; /* '/' */
}
/** See `parseTag` function docs. */
function _isPotentialElementNameChar(c) {
    return (c === 45 /* '-' */ ||
        c === 46 /* '.' */ ||
        (c >= 48 && c <= 57) /* 0..9 */ ||
        c === 95 /* '_' */ ||
        (c >= 97 && c <= 122) /** a..z */ ||
        (c >= 65 && c <= 90) /* A..Z */ ||
        c == 0xb7 ||
        (c >= 0xc0 && c <= 0xd6) ||
        (c >= 0xd8 && c <= 0xf6) ||
        (c >= 0xf8 && c <= 0x37d) ||
        (c >= 0x37f && c <= 0x1fff) ||
        (c >= 0x200c && c <= 0x200d) ||
        (c >= 0x203f && c <= 0x2040) ||
        (c >= 0x2070 && c <= 0x218f) ||
        (c >= 0x2c00 && c <= 0x2fef) ||
        (c >= 0x3001 && c <= 0xd7ff) ||
        (c >= 0xf900 && c <= 0xfdcf) ||
        (c >= 0xfdf0 && c <= 0xfffd) ||
        (c >= 0x10000 && c <= 0xeffff));
}
/**
 * Code point equivalent of regex `\p{White_Space}`.
 * From: https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */
function _isWhiteSpace(c) {
    return ((c >= 0x0009 && c <= 0x000d) ||
        c === 0x0020 ||
        c === 0x0085 ||
        (c >= 0x200e && c <= 0x200f) ||
        c === 0x2028 ||
        c === 0x2029);
}
/**
 * Code point equivalent of regex `\p{Pattern_Syntax}`.
 * See https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */
function _isPatternSyntax(c) {
    return ((c >= 0x0021 && c <= 0x0023) ||
        c === 0x0024 ||
        (c >= 0x0025 && c <= 0x0027) ||
        c === 0x0028 ||
        c === 0x0029 ||
        c === 0x002a ||
        c === 0x002b ||
        c === 0x002c ||
        c === 0x002d ||
        (c >= 0x002e && c <= 0x002f) ||
        (c >= 0x003a && c <= 0x003b) ||
        (c >= 0x003c && c <= 0x003e) ||
        (c >= 0x003f && c <= 0x0040) ||
        c === 0x005b ||
        c === 0x005c ||
        c === 0x005d ||
        c === 0x005e ||
        c === 0x0060 ||
        c === 0x007b ||
        c === 0x007c ||
        c === 0x007d ||
        c === 0x007e ||
        c === 0x00a1 ||
        (c >= 0x00a2 && c <= 0x00a5) ||
        c === 0x00a6 ||
        c === 0x00a7 ||
        c === 0x00a9 ||
        c === 0x00ab ||
        c === 0x00ac ||
        c === 0x00ae ||
        c === 0x00b0 ||
        c === 0x00b1 ||
        c === 0x00b6 ||
        c === 0x00bb ||
        c === 0x00bf ||
        c === 0x00d7 ||
        c === 0x00f7 ||
        (c >= 0x2010 && c <= 0x2015) ||
        (c >= 0x2016 && c <= 0x2017) ||
        c === 0x2018 ||
        c === 0x2019 ||
        c === 0x201a ||
        (c >= 0x201b && c <= 0x201c) ||
        c === 0x201d ||
        c === 0x201e ||
        c === 0x201f ||
        (c >= 0x2020 && c <= 0x2027) ||
        (c >= 0x2030 && c <= 0x2038) ||
        c === 0x2039 ||
        c === 0x203a ||
        (c >= 0x203b && c <= 0x203e) ||
        (c >= 0x2041 && c <= 0x2043) ||
        c === 0x2044 ||
        c === 0x2045 ||
        c === 0x2046 ||
        (c >= 0x2047 && c <= 0x2051) ||
        c === 0x2052 ||
        c === 0x2053 ||
        (c >= 0x2055 && c <= 0x205e) ||
        (c >= 0x2190 && c <= 0x2194) ||
        (c >= 0x2195 && c <= 0x2199) ||
        (c >= 0x219a && c <= 0x219b) ||
        (c >= 0x219c && c <= 0x219f) ||
        c === 0x21a0 ||
        (c >= 0x21a1 && c <= 0x21a2) ||
        c === 0x21a3 ||
        (c >= 0x21a4 && c <= 0x21a5) ||
        c === 0x21a6 ||
        (c >= 0x21a7 && c <= 0x21ad) ||
        c === 0x21ae ||
        (c >= 0x21af && c <= 0x21cd) ||
        (c >= 0x21ce && c <= 0x21cf) ||
        (c >= 0x21d0 && c <= 0x21d1) ||
        c === 0x21d2 ||
        c === 0x21d3 ||
        c === 0x21d4 ||
        (c >= 0x21d5 && c <= 0x21f3) ||
        (c >= 0x21f4 && c <= 0x22ff) ||
        (c >= 0x2300 && c <= 0x2307) ||
        c === 0x2308 ||
        c === 0x2309 ||
        c === 0x230a ||
        c === 0x230b ||
        (c >= 0x230c && c <= 0x231f) ||
        (c >= 0x2320 && c <= 0x2321) ||
        (c >= 0x2322 && c <= 0x2328) ||
        c === 0x2329 ||
        c === 0x232a ||
        (c >= 0x232b && c <= 0x237b) ||
        c === 0x237c ||
        (c >= 0x237d && c <= 0x239a) ||
        (c >= 0x239b && c <= 0x23b3) ||
        (c >= 0x23b4 && c <= 0x23db) ||
        (c >= 0x23dc && c <= 0x23e1) ||
        (c >= 0x23e2 && c <= 0x2426) ||
        (c >= 0x2427 && c <= 0x243f) ||
        (c >= 0x2440 && c <= 0x244a) ||
        (c >= 0x244b && c <= 0x245f) ||
        (c >= 0x2500 && c <= 0x25b6) ||
        c === 0x25b7 ||
        (c >= 0x25b8 && c <= 0x25c0) ||
        c === 0x25c1 ||
        (c >= 0x25c2 && c <= 0x25f7) ||
        (c >= 0x25f8 && c <= 0x25ff) ||
        (c >= 0x2600 && c <= 0x266e) ||
        c === 0x266f ||
        (c >= 0x2670 && c <= 0x2767) ||
        c === 0x2768 ||
        c === 0x2769 ||
        c === 0x276a ||
        c === 0x276b ||
        c === 0x276c ||
        c === 0x276d ||
        c === 0x276e ||
        c === 0x276f ||
        c === 0x2770 ||
        c === 0x2771 ||
        c === 0x2772 ||
        c === 0x2773 ||
        c === 0x2774 ||
        c === 0x2775 ||
        (c >= 0x2794 && c <= 0x27bf) ||
        (c >= 0x27c0 && c <= 0x27c4) ||
        c === 0x27c5 ||
        c === 0x27c6 ||
        (c >= 0x27c7 && c <= 0x27e5) ||
        c === 0x27e6 ||
        c === 0x27e7 ||
        c === 0x27e8 ||
        c === 0x27e9 ||
        c === 0x27ea ||
        c === 0x27eb ||
        c === 0x27ec ||
        c === 0x27ed ||
        c === 0x27ee ||
        c === 0x27ef ||
        (c >= 0x27f0 && c <= 0x27ff) ||
        (c >= 0x2800 && c <= 0x28ff) ||
        (c >= 0x2900 && c <= 0x2982) ||
        c === 0x2983 ||
        c === 0x2984 ||
        c === 0x2985 ||
        c === 0x2986 ||
        c === 0x2987 ||
        c === 0x2988 ||
        c === 0x2989 ||
        c === 0x298a ||
        c === 0x298b ||
        c === 0x298c ||
        c === 0x298d ||
        c === 0x298e ||
        c === 0x298f ||
        c === 0x2990 ||
        c === 0x2991 ||
        c === 0x2992 ||
        c === 0x2993 ||
        c === 0x2994 ||
        c === 0x2995 ||
        c === 0x2996 ||
        c === 0x2997 ||
        c === 0x2998 ||
        (c >= 0x2999 && c <= 0x29d7) ||
        c === 0x29d8 ||
        c === 0x29d9 ||
        c === 0x29da ||
        c === 0x29db ||
        (c >= 0x29dc && c <= 0x29fb) ||
        c === 0x29fc ||
        c === 0x29fd ||
        (c >= 0x29fe && c <= 0x2aff) ||
        (c >= 0x2b00 && c <= 0x2b2f) ||
        (c >= 0x2b30 && c <= 0x2b44) ||
        (c >= 0x2b45 && c <= 0x2b46) ||
        (c >= 0x2b47 && c <= 0x2b4c) ||
        (c >= 0x2b4d && c <= 0x2b73) ||
        (c >= 0x2b74 && c <= 0x2b75) ||
        (c >= 0x2b76 && c <= 0x2b95) ||
        c === 0x2b96 ||
        (c >= 0x2b97 && c <= 0x2bff) ||
        (c >= 0x2e00 && c <= 0x2e01) ||
        c === 0x2e02 ||
        c === 0x2e03 ||
        c === 0x2e04 ||
        c === 0x2e05 ||
        (c >= 0x2e06 && c <= 0x2e08) ||
        c === 0x2e09 ||
        c === 0x2e0a ||
        c === 0x2e0b ||
        c === 0x2e0c ||
        c === 0x2e0d ||
        (c >= 0x2e0e && c <= 0x2e16) ||
        c === 0x2e17 ||
        (c >= 0x2e18 && c <= 0x2e19) ||
        c === 0x2e1a ||
        c === 0x2e1b ||
        c === 0x2e1c ||
        c === 0x2e1d ||
        (c >= 0x2e1e && c <= 0x2e1f) ||
        c === 0x2e20 ||
        c === 0x2e21 ||
        c === 0x2e22 ||
        c === 0x2e23 ||
        c === 0x2e24 ||
        c === 0x2e25 ||
        c === 0x2e26 ||
        c === 0x2e27 ||
        c === 0x2e28 ||
        c === 0x2e29 ||
        (c >= 0x2e2a && c <= 0x2e2e) ||
        c === 0x2e2f ||
        (c >= 0x2e30 && c <= 0x2e39) ||
        (c >= 0x2e3a && c <= 0x2e3b) ||
        (c >= 0x2e3c && c <= 0x2e3f) ||
        c === 0x2e40 ||
        c === 0x2e41 ||
        c === 0x2e42 ||
        (c >= 0x2e43 && c <= 0x2e4f) ||
        (c >= 0x2e50 && c <= 0x2e51) ||
        c === 0x2e52 ||
        (c >= 0x2e53 && c <= 0x2e7f) ||
        (c >= 0x3001 && c <= 0x3003) ||
        c === 0x3008 ||
        c === 0x3009 ||
        c === 0x300a ||
        c === 0x300b ||
        c === 0x300c ||
        c === 0x300d ||
        c === 0x300e ||
        c === 0x300f ||
        c === 0x3010 ||
        c === 0x3011 ||
        (c >= 0x3012 && c <= 0x3013) ||
        c === 0x3014 ||
        c === 0x3015 ||
        c === 0x3016 ||
        c === 0x3017 ||
        c === 0x3018 ||
        c === 0x3019 ||
        c === 0x301a ||
        c === 0x301b ||
        c === 0x301c ||
        c === 0x301d ||
        (c >= 0x301e && c <= 0x301f) ||
        c === 0x3020 ||
        c === 0x3030 ||
        c === 0xfd3e ||
        c === 0xfd3f ||
        (c >= 0xfe45 && c <= 0xfe46));
}

// CONCATENATED MODULE: ./node_modules/@formatjs/icu-messageformat-parser/lib/index.js




function pruneLocation(els) {
    els.forEach(function (el) {
        delete el.location;
        if (isSelectElement(el) || isPluralElement(el)) {
            for (var k in el.options) {
                delete el.options[k].location;
                pruneLocation(el.options[k].value);
            }
        }
        else if (isNumberElement(el) && isNumberSkeleton(el.style)) {
            delete el.style.location;
        }
        else if ((isDateElement(el) || isTimeElement(el)) &&
            isDateTimeSkeleton(el.style)) {
            delete el.style.location;
        }
        else if (isTagElement(el)) {
            pruneLocation(el.children);
        }
    });
}
function lib_parse(message, opts) {
    if (opts === void 0) { opts = {}; }
    opts = Object(tslib_es6["a" /* __assign */])({ shouldParseSkeletons: true, requiresOtherClause: true }, opts);
    var result = new parser_Parser(message, opts).parse();
    if (result.err) {
        var error = SyntaxError(ErrorKind[result.err.kind]);
        // @ts-expect-error Assign to error object
        error.location = result.err.location;
        // @ts-expect-error Assign to error object
        error.originalMessage = result.err.message;
        throw error;
    }
    if (!(opts === null || opts === void 0 ? void 0 : opts.captureLocation)) {
        pruneLocation(result.val);
    }
    return result.val;
}


// CONCATENATED MODULE: ./node_modules/@formatjs/fast-memoize/lib/index.js
//
// Main
//
function lib_memoize(fn, options) {
    var cache = options && options.cache ? options.cache : cacheDefault;
    var serializer = options && options.serializer ? options.serializer : serializerDefault;
    var strategy = options && options.strategy ? options.strategy : strategyDefault;
    return strategy(fn, {
        cache: cache,
        serializer: serializer,
    });
}
//
// Strategy
//
function isPrimitive(value) {
    return (value == null || typeof value === 'number' || typeof value === 'boolean'); // || typeof value === "string" 'unsafe' primitive for our needs
}
function monadic(fn, cache, serializer, arg) {
    var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.call(this, arg);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function variadic(fn, cache, serializer) {
    var args = Array.prototype.slice.call(arguments, 3);
    var cacheKey = serializer(args);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.apply(this, args);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function assemble(fn, context, strategy, cache, serialize) {
    return strategy.bind(context, fn, cache, serialize);
}
function strategyDefault(fn, options) {
    var strategy = fn.length === 1 ? monadic : variadic;
    return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
function strategyVariadic(fn, options) {
    return assemble(fn, this, variadic, options.cache.create(), options.serializer);
}
function strategyMonadic(fn, options) {
    return assemble(fn, this, monadic, options.cache.create(), options.serializer);
}
//
// Serializer
//
var serializerDefault = function () {
    return JSON.stringify(arguments);
};
//
// Cache
//
function ObjectWithoutPrototypeCache() {
    this.cache = Object.create(null);
}
ObjectWithoutPrototypeCache.prototype.has = function (key) {
    return key in this.cache;
};
ObjectWithoutPrototypeCache.prototype.get = function (key) {
    return this.cache[key];
};
ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
    this.cache[key] = value;
};
var cacheDefault = {
    create: function create() {
        // @ts-ignore
        return new ObjectWithoutPrototypeCache();
    },
};
var strategies = {
    variadic: strategyVariadic,
    monadic: strategyMonadic,
};

// CONCATENATED MODULE: ./node_modules/intl-messageformat/lib/src/error.js

var ErrorCode;
(function (ErrorCode) {
    // When we have a placeholder but no value to format
    ErrorCode["MISSING_VALUE"] = "MISSING_VALUE";
    // When value supplied is invalid
    ErrorCode["INVALID_VALUE"] = "INVALID_VALUE";
    // When we need specific Intl API but it's not available
    ErrorCode["MISSING_INTL_API"] = "MISSING_INTL_API";
})(ErrorCode || (ErrorCode = {}));
var error_FormatError = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(FormatError, _super);
    function FormatError(msg, code, originalMessage) {
        var _this = _super.call(this, msg) || this;
        _this.code = code;
        _this.originalMessage = originalMessage;
        return _this;
    }
    FormatError.prototype.toString = function () {
        return "[formatjs Error: " + this.code + "] " + this.message;
    };
    return FormatError;
}(Error));

var error_InvalidValueError = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(InvalidValueError, _super);
    function InvalidValueError(variableId, value, options, originalMessage) {
        return _super.call(this, "Invalid values for \"" + variableId + "\": \"" + value + "\". Options are \"" + Object.keys(options).join('", "') + "\"", ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueError;
}(error_FormatError));

var error_InvalidValueTypeError = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(InvalidValueTypeError, _super);
    function InvalidValueTypeError(value, type, originalMessage) {
        return _super.call(this, "Value for \"" + value + "\" must be of type " + type, ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueTypeError;
}(error_FormatError));

var error_MissingValueError = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(MissingValueError, _super);
    function MissingValueError(variableId, originalMessage) {
        return _super.call(this, "The intl string context variable \"" + variableId + "\" was not provided to the string \"" + originalMessage + "\"", ErrorCode.MISSING_VALUE, originalMessage) || this;
    }
    return MissingValueError;
}(error_FormatError));


// CONCATENATED MODULE: ./node_modules/intl-messageformat/lib/src/formatters.js


var PART_TYPE;
(function (PART_TYPE) {
    PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
    PART_TYPE[PART_TYPE["object"] = 1] = "object";
})(PART_TYPE || (PART_TYPE = {}));
function mergeLiteral(parts) {
    if (parts.length < 2) {
        return parts;
    }
    return parts.reduce(function (all, part) {
        var lastPart = all[all.length - 1];
        if (!lastPart ||
            lastPart.type !== PART_TYPE.literal ||
            part.type !== PART_TYPE.literal) {
            all.push(part);
        }
        else {
            lastPart.value += part.value;
        }
        return all;
    }, []);
}
function isFormatXMLElementFn(el) {
    return typeof el === 'function';
}
// TODO(skeleton): add skeleton support
function formatToParts(els, locales, formatters, formats, values, currentPluralValue, 
// For debugging
originalMessage) {
    // Hot path for straight simple msg translations
    if (els.length === 1 && isLiteralElement(els[0])) {
        return [
            {
                type: PART_TYPE.literal,
                value: els[0].value,
            },
        ];
    }
    var result = [];
    for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
        var el = els_1[_i];
        // Exit early for string parts.
        if (isLiteralElement(el)) {
            result.push({
                type: PART_TYPE.literal,
                value: el.value,
            });
            continue;
        }
        // TODO: should this part be literal type?
        // Replace `#` in plural rules with the actual numeric value.
        if (isPoundElement(el)) {
            if (typeof currentPluralValue === 'number') {
                result.push({
                    type: PART_TYPE.literal,
                    value: formatters.getNumberFormat(locales).format(currentPluralValue),
                });
            }
            continue;
        }
        var varName = el.value;
        // Enforce that all required values are provided by the caller.
        if (!(values && varName in values)) {
            throw new error_MissingValueError(varName, originalMessage);
        }
        var value = values[varName];
        if (isArgumentElement(el)) {
            if (!value || typeof value === 'string' || typeof value === 'number') {
                value =
                    typeof value === 'string' || typeof value === 'number'
                        ? String(value)
                        : '';
            }
            result.push({
                type: typeof value === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                value: value,
            });
            continue;
        }
        // Recursively format plural and select parts' option — which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.
        if (isDateElement(el)) {
            var style = typeof el.style === 'string'
                ? formats.date[el.style]
                : isDateTimeSkeleton(el.style)
                    ? el.style.parsedOptions
                    : undefined;
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getDateTimeFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (isTimeElement(el)) {
            var style = typeof el.style === 'string'
                ? formats.time[el.style]
                : isDateTimeSkeleton(el.style)
                    ? el.style.parsedOptions
                    : undefined;
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getDateTimeFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (isNumberElement(el)) {
            var style = typeof el.style === 'string'
                ? formats.number[el.style]
                : isNumberSkeleton(el.style)
                    ? el.style.parsedOptions
                    : undefined;
            if (style && style.scale) {
                value =
                    value *
                        (style.scale || 1);
            }
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getNumberFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (isTagElement(el)) {
            var children = el.children, value_1 = el.value;
            var formatFn = values[value_1];
            if (!isFormatXMLElementFn(formatFn)) {
                throw new error_InvalidValueTypeError(value_1, 'function', originalMessage);
            }
            var parts = formatToParts(children, locales, formatters, formats, values, currentPluralValue);
            var chunks = formatFn(parts.map(function (p) { return p.value; }));
            if (!Array.isArray(chunks)) {
                chunks = [chunks];
            }
            result.push.apply(result, chunks.map(function (c) {
                return {
                    type: typeof c === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                    value: c,
                };
            }));
        }
        if (isSelectElement(el)) {
            var opt = el.options[value] || el.options.other;
            if (!opt) {
                throw new error_InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
            continue;
        }
        if (isPluralElement(el)) {
            var opt = el.options["=" + value];
            if (!opt) {
                if (!Intl.PluralRules) {
                    throw new error_FormatError("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", ErrorCode.MISSING_INTL_API, originalMessage);
                }
                var rule = formatters
                    .getPluralRules(locales, { type: el.pluralType })
                    .select(value - (el.offset || 0));
                opt = el.options[rule] || el.options.other;
            }
            if (!opt) {
                throw new error_InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
            continue;
        }
    }
    return mergeLiteral(result);
}

// CONCATENATED MODULE: ./node_modules/intl-messageformat/lib/src/core.js
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/




// -- MessageFormat --------------------------------------------------------
function mergeConfig(c1, c2) {
    if (!c2) {
        return c1;
    }
    return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, (c1 || {})), (c2 || {})), Object.keys(c1).reduce(function (all, k) {
        all[k] = Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, c1[k]), (c2[k] || {}));
        return all;
    }, {}));
}
function mergeConfigs(defaultConfig, configs) {
    if (!configs) {
        return defaultConfig;
    }
    return Object.keys(defaultConfig).reduce(function (all, k) {
        all[k] = mergeConfig(defaultConfig[k], configs[k]);
        return all;
    }, Object(tslib_es6["a" /* __assign */])({}, defaultConfig));
}
function createFastMemoizeCache(store) {
    return {
        create: function () {
            return {
                has: function (key) {
                    return key in store;
                },
                get: function (key) {
                    return store[key];
                },
                set: function (key, value) {
                    store[key] = value;
                },
            };
        },
    };
}
function createDefaultFormatters(cache) {
    if (cache === void 0) { cache = {
        number: {},
        dateTime: {},
        pluralRules: {},
    }; }
    return {
        getNumberFormat: lib_memoize(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.NumberFormat).bind.apply(_a, Object(tslib_es6["d" /* __spreadArray */])([void 0], args)))();
        }, {
            cache: createFastMemoizeCache(cache.number),
            strategy: strategies.variadic,
        }),
        getDateTimeFormat: lib_memoize(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.DateTimeFormat).bind.apply(_a, Object(tslib_es6["d" /* __spreadArray */])([void 0], args)))();
        }, {
            cache: createFastMemoizeCache(cache.dateTime),
            strategy: strategies.variadic,
        }),
        getPluralRules: lib_memoize(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.PluralRules).bind.apply(_a, Object(tslib_es6["d" /* __spreadArray */])([void 0], args)))();
        }, {
            cache: createFastMemoizeCache(cache.pluralRules),
            strategy: strategies.variadic,
        }),
    };
}
var core_IntlMessageFormat = /** @class */ (function () {
    function IntlMessageFormat(message, locales, overrideFormats, opts) {
        var _this = this;
        if (locales === void 0) { locales = IntlMessageFormat.defaultLocale; }
        this.formatterCache = {
            number: {},
            dateTime: {},
            pluralRules: {},
        };
        this.format = function (values) {
            var parts = _this.formatToParts(values);
            // Hot path for straight simple msg translations
            if (parts.length === 1) {
                return parts[0].value;
            }
            var result = parts.reduce(function (all, part) {
                if (!all.length ||
                    part.type !== PART_TYPE.literal ||
                    typeof all[all.length - 1] !== 'string') {
                    all.push(part.value);
                }
                else {
                    all[all.length - 1] += part.value;
                }
                return all;
            }, []);
            if (result.length <= 1) {
                return result[0] || '';
            }
            return result;
        };
        this.formatToParts = function (values) {
            return formatToParts(_this.ast, _this.locales, _this.formatters, _this.formats, values, undefined, _this.message);
        };
        this.resolvedOptions = function () { return ({
            locale: Intl.NumberFormat.supportedLocalesOf(_this.locales)[0],
        }); };
        this.getAst = function () { return _this.ast; };
        if (typeof message === 'string') {
            this.message = message;
            if (!IntlMessageFormat.__parse) {
                throw new TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
            }
            // Parse string messages into an AST.
            this.ast = IntlMessageFormat.__parse(message, {
                ignoreTag: opts === null || opts === void 0 ? void 0 : opts.ignoreTag,
            });
        }
        else {
            this.ast = message;
        }
        if (!Array.isArray(this.ast)) {
            throw new TypeError('A message must be provided as a String or AST.');
        }
        // Creates a new object with the specified `formats` merged with the default
        // formats.
        this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats);
        // Defined first because it's used to build the format pattern.
        this.locales = locales;
        this.formatters =
            (opts && opts.formatters) || createDefaultFormatters(this.formatterCache);
    }
    Object.defineProperty(IntlMessageFormat, "defaultLocale", {
        get: function () {
            if (!IntlMessageFormat.memoizedDefaultLocale) {
                IntlMessageFormat.memoizedDefaultLocale =
                    new Intl.NumberFormat().resolvedOptions().locale;
            }
            return IntlMessageFormat.memoizedDefaultLocale;
        },
        enumerable: false,
        configurable: true
    });
    IntlMessageFormat.memoizedDefaultLocale = null;
    IntlMessageFormat.__parse = lib_parse;
    // Default format options used as the prototype of the `formats` provided to the
    // constructor. These are used when constructing the internal Intl.NumberFormat
    // and Intl.DateTimeFormat instances.
    IntlMessageFormat.formats = {
        number: {
            integer: {
                maximumFractionDigits: 0,
            },
            currency: {
                style: 'currency',
            },
            percent: {
                style: 'percent',
            },
        },
        date: {
            short: {
                month: 'numeric',
                day: 'numeric',
                year: '2-digit',
            },
            medium: {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
            },
            long: {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            },
            full: {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            },
        },
        time: {
            short: {
                hour: 'numeric',
                minute: 'numeric',
            },
            medium: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
            },
            long: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
            },
            full: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
            },
        },
    };
    return IntlMessageFormat;
}());


// CONCATENATED MODULE: ./node_modules/intl-messageformat/lib/index.js
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/




/* harmony default export */ var lib = (core_IntlMessageFormat);

// CONCATENATED MODULE: ./node_modules/@internationalized/message/dist/module.js



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/**
 * Stores a mapping of localized strings. Can be used to find the
 * closest available string for a given locale.
 */
class module_MessageDictionary {
  constructor(messages, defaultLocale) {
    if (defaultLocale === void 0) {
      defaultLocale = 'en-US';
    }

    this.messages = void 0;
    this.defaultLocale = void 0;
    // Clone messages so we don't modify the original object.
    this.messages = extends_extends({}, messages);
    this.defaultLocale = defaultLocale;
  }

  getStringForLocale(key, locale) {
    let strings = this.messages[locale];

    if (!strings) {
      strings = $e73469445899f72bd9d935bbafe76d4$var$getStringsForLocale(locale, this.messages, this.defaultLocale);
      this.messages[locale] = strings;
    }

    let string = strings[key];

    if (!string) {
      throw new Error("Could not find intl message " + key + " in " + locale + " locale");
    }

    return string;
  }

}

function $e73469445899f72bd9d935bbafe76d4$var$getStringsForLocale(locale, strings, defaultLocale) {
  if (defaultLocale === void 0) {
    defaultLocale = 'en-US';
  }

  // If there is an exact match, use it.
  if (strings[locale]) {
    return strings[locale];
  } // Attempt to find the closest match by language.
  // For example, if the locale is fr-CA (French Canadian), but there is only
  // an fr-FR (France) set of strings, use that.
  // This could be replaced with Intl.LocaleMatcher once it is supported.
  // https://github.com/tc39/proposal-intl-localematcher


  let language = $e73469445899f72bd9d935bbafe76d4$var$getLanguage(locale);

  for (let key in strings) {
    if (key.startsWith(language + '-')) {
      return strings[key];
    }
  } // Nothing close, use english.


  return strings[defaultLocale];
}

function $e73469445899f72bd9d935bbafe76d4$var$getLanguage(locale) {
  // @ts-ignore
  if (Intl.Locale) {
    // @ts-ignore
    return new Intl.Locale(locale).language;
  }

  return locale.split('-')[0];
}

/**
 * Formats ICU Message strings to create localized strings from a MessageDictionary.
 */
class module_MessageFormatter {
  constructor(locale, messages) {
    this.locale = void 0;
    this.messages = void 0;
    this.cache = void 0;
    this.locale = locale;
    this.messages = messages;
    this.cache = {};
  }

  format(key, variables) {
    let message = this.cache[key];

    if (!message) {
      let msg = this.messages.getStringForLocale(key, this.locale);

      if (!msg) {
        throw new Error("Could not find intl message " + key + " in " + this.locale + " locale");
      }

      message = new lib(msg, this.locale);
      this.cache[key] = message;
    }

    return message.format(variables);
  }

}
//# sourceMappingURL=module.js.map

// CONCATENATED MODULE: ./node_modules/@react-aria/ssr/dist/module.js

// Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.
const $f01a183cc7bdff77849e49ad26eb904$var$defaultContext = {
  prefix: Math.round(Math.random() * 10000000000),
  current: 0
};

const $f01a183cc7bdff77849e49ad26eb904$var$SSRContext = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createContext($f01a183cc7bdff77849e49ad26eb904$var$defaultContext);

/**
 * When using SSR with React Aria, applications must be wrapped in an SSRProvider.
 * This ensures that auto generated ids are consistent between the client and server.
 */
function SSRProvider(props) {
  let cur = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"])($f01a183cc7bdff77849e49ad26eb904$var$SSRContext);
  let value = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useMemo"])(() => ({
    // If this is the first SSRProvider, set to zero, otherwise increment.
    prefix: cur === $f01a183cc7bdff77849e49ad26eb904$var$defaultContext ? 0 : ++cur.prefix,
    current: 0
  }), [cur]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement($f01a183cc7bdff77849e49ad26eb904$var$SSRContext.Provider, {
    value: value
  }, props.children);
}
let $f01a183cc7bdff77849e49ad26eb904$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
/** @private */

function useSSRSafeId(defaultId) {
  let ctx = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"])($f01a183cc7bdff77849e49ad26eb904$var$SSRContext); // If we are rendering in a non-DOM environment, and there's no SSRProvider,
  // provide a warning to hint to the developer to add one.

  if (ctx === $f01a183cc7bdff77849e49ad26eb904$var$defaultContext && !$f01a183cc7bdff77849e49ad26eb904$var$canUseDOM) {
    console.warn('When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.');
  }

  return Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useMemo"])(() => defaultId || "react-aria-" + ctx.prefix + "-" + ++ctx.current, [defaultId]);
}
/**
 * Returns whether the component is currently being server side rendered or
 * hydrated on the client. Can be used to delay browser-specific rendering
 * until after hydration.
 */

function useIsSSR() {
  let cur = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"])($f01a183cc7bdff77849e49ad26eb904$var$SSRContext);
  let isInSSRContext = cur !== $f01a183cc7bdff77849e49ad26eb904$var$defaultContext;
  let [isSSR, setIsSSR] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(isInSSRContext); // If on the client, and the component was initially server rendered,
  // then schedule a layout effect to update the component after hydration.

  if (typeof window !== 'undefined' && isInSSRContext) {
    // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useLayoutEffect"])(() => {
      setIsSSR(false);
    }, []);
  }

  return isSSR;
}
//# sourceMappingURL=module.js.map

// CONCATENATED MODULE: ./node_modules/@react-aria/i18n/dist/module.js






/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
// https://en.wikipedia.org/wiki/Right-to-left
const $d26e725ad56fbcb2c25f52b7de27$var$RTL_SCRIPTS = new Set(['Arab', 'Syrc', 'Samr', 'Mand', 'Thaa', 'Mend', 'Nkoo', 'Adlm', 'Rohg', 'Hebr']);
const $d26e725ad56fbcb2c25f52b7de27$var$RTL_LANGS = new Set(['ae', 'ar', 'arc', 'bcc', 'bqi', 'ckb', 'dv', 'fa', 'glk', 'he', 'ku', 'mzn', 'nqo', 'pnb', 'ps', 'sd', 'ug', 'ur', 'yi']);
/**
 * Determines if a locale is read right to left using [Intl.Locale]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale}.
 */

function $d26e725ad56fbcb2c25f52b7de27$export$isRTL(locale) {
  // If the Intl.Locale API is available, use it to get the script for the locale.
  // This is more accurate than guessing by language, since languages can be written in multiple scripts.
  // @ts-ignore
  if (Intl.Locale) {
    // @ts-ignore
    let script = new Intl.Locale(locale).maximize().script;
    return $d26e725ad56fbcb2c25f52b7de27$var$RTL_SCRIPTS.has(script);
  } // If not, just guess by the language (first part of the locale)


  let lang = locale.split('-')[0];
  return $d26e725ad56fbcb2c25f52b7de27$var$RTL_LANGS.has(lang);
}

/**
 * Gets the locale setting of the browser.
 */
function $e851d0b81d46abd5f971c8e95c27f1$export$getDefaultLocale() {
  // @ts-ignore
  let locale = typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage) || 'en-US';
  return {
    locale,
    direction: $d26e725ad56fbcb2c25f52b7de27$export$isRTL(locale) ? 'rtl' : 'ltr'
  };
}

let $e851d0b81d46abd5f971c8e95c27f1$var$currentLocale = $e851d0b81d46abd5f971c8e95c27f1$export$getDefaultLocale();
let $e851d0b81d46abd5f971c8e95c27f1$var$listeners = new Set();

function $e851d0b81d46abd5f971c8e95c27f1$var$updateLocale() {
  $e851d0b81d46abd5f971c8e95c27f1$var$currentLocale = $e851d0b81d46abd5f971c8e95c27f1$export$getDefaultLocale();

  for (let listener of $e851d0b81d46abd5f971c8e95c27f1$var$listeners) {
    listener($e851d0b81d46abd5f971c8e95c27f1$var$currentLocale);
  }
}
/**
 * Returns the current browser/system language, and updates when it changes.
 */


function $e851d0b81d46abd5f971c8e95c27f1$export$useDefaultLocale() {
  let isSSR = useIsSSR();
  let [defaultLocale, setDefaultLocale] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])($e851d0b81d46abd5f971c8e95c27f1$var$currentLocale);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    if ($e851d0b81d46abd5f971c8e95c27f1$var$listeners.size === 0) {
      window.addEventListener('languagechange', $e851d0b81d46abd5f971c8e95c27f1$var$updateLocale);
    }

    $e851d0b81d46abd5f971c8e95c27f1$var$listeners.add(setDefaultLocale);
    return () => {
      $e851d0b81d46abd5f971c8e95c27f1$var$listeners.delete(setDefaultLocale);

      if ($e851d0b81d46abd5f971c8e95c27f1$var$listeners.size === 0) {
        window.removeEventListener('languagechange', $e851d0b81d46abd5f971c8e95c27f1$var$updateLocale);
      }
    };
  }, []); // We cannot determine the browser's language on the server, so default to
  // en-US. This will be updated after hydration on the client to the correct value.

  if (isSSR) {
    return {
      locale: 'en-US',
      direction: 'ltr'
    };
  }

  return defaultLocale;
}

const $cff8541df3b5c83067b2ab3ee0d20$var$I18nContext = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createContext(null);

function I18nProvider(props) {
  let {
    locale,
    children
  } = props;
  let defaultLocale = $e851d0b81d46abd5f971c8e95c27f1$export$useDefaultLocale();
  let value = locale ? {
    locale,
    direction: $d26e725ad56fbcb2c25f52b7de27$export$isRTL(locale) ? 'rtl' : 'ltr'
  } : defaultLocale;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement($cff8541df3b5c83067b2ab3ee0d20$var$I18nContext.Provider, {
    value: value
  }, children);
}
/**
 * Returns the current locale and layout direction.
 */

function useLocale() {
  let defaultLocale = $e851d0b81d46abd5f971c8e95c27f1$export$useDefaultLocale();
  let context = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"])($cff8541df3b5c83067b2ab3ee0d20$var$I18nContext);
  return context || defaultLocale;
}
const $f58d206cee90f9c2bf3c03e4522c35$var$cache = new WeakMap();

function $f58d206cee90f9c2bf3c03e4522c35$var$getCachedDictionary(strings) {
  let dictionary = $f58d206cee90f9c2bf3c03e4522c35$var$cache.get(strings);

  if (!dictionary) {
    dictionary = new module_MessageDictionary(strings);
    $f58d206cee90f9c2bf3c03e4522c35$var$cache.set(strings, dictionary);
  }

  return dictionary;
}
/**
 * Handles formatting ICU Message strings to create localized strings for the current locale.
 * Automatically updates when the locale changes, and handles caching of messages for performance.
 * @param strings - A mapping of languages to strings by key.
 */


function useMessageFormatter(strings) {
  let {
    locale
  } = useLocale();
  let dictionary = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useMemo"])(() => $f58d206cee90f9c2bf3c03e4522c35$var$getCachedDictionary(strings), [strings]);
  let formatter = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useMemo"])(() => new module_MessageFormatter(locale, dictionary), [locale, dictionary]);
  return Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])((key, variables) => formatter.format(key, variables), [formatter]);
}
let $b0007c63a64054c318efb8b6cd0053f$var$formatterCache = new Map();
/**
 * Provides localized date formatting for the current locale. Automatically updates when the locale changes,
 * and handles caching of the date formatter for performance.
 * @param options - Formatting options.
 */

function useDateFormatter(options) {
  let {
    locale
  } = useLocale();
  let cacheKey = locale + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : '');

  if ($b0007c63a64054c318efb8b6cd0053f$var$formatterCache.has(cacheKey)) {
    return $b0007c63a64054c318efb8b6cd0053f$var$formatterCache.get(cacheKey);
  }

  let formatter = new Intl.DateTimeFormat(locale, options);
  $b0007c63a64054c318efb8b6cd0053f$var$formatterCache.set(cacheKey, formatter);
  return formatter;
}

/**
 * Provides localized number formatting for the current locale. Automatically updates when the locale changes,
 * and handles caching of the number formatter for performance.
 * @param options - Formatting options.
 */
function useNumberFormatter(options) {
  if (options === void 0) {
    options = {};
  }

  let {
    locale
  } = useLocale();
  return Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useMemo"])(() => new module_NumberFormatter(locale, options), [locale, options]);
}
let $a4045a18d7252bf6de9312e613c4e$var$cache = new Map();
/**
 * Provides localized string collation for the current locale. Automatically updates when the locale changes,
 * and handles caching of the collator for performance.
 * @param options - Collator options.
 */

function useCollator(options) {
  let {
    locale
  } = useLocale();
  let cacheKey = locale + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : '');

  if ($a4045a18d7252bf6de9312e613c4e$var$cache.has(cacheKey)) {
    return $a4045a18d7252bf6de9312e613c4e$var$cache.get(cacheKey);
  }

  let formatter = new Intl.Collator(locale, options);
  $a4045a18d7252bf6de9312e613c4e$var$cache.set(cacheKey, formatter);
  return formatter;
}

/**
 * Provides localized string search functionality that is useful for filtering or matching items
 * in a list. Options can be provided to adjust the sensitivity to case, diacritics, and other parameters.
 */
function useFilter(options) {
  let collator = useCollator(extends_extends({
    usage: 'search'
  }, options)); // TODO(later): these methods don't currently support the ignorePunctuation option.

  return {
    startsWith(string, substring) {
      if (substring.length === 0) {
        return true;
      } // Normalize both strings so we can slice safely
      // TODO: take into account the ignorePunctuation option as well...


      string = string.normalize('NFC');
      substring = substring.normalize('NFC');
      return collator.compare(string.slice(0, substring.length), substring) === 0;
    },

    endsWith(string, substring) {
      if (substring.length === 0) {
        return true;
      }

      string = string.normalize('NFC');
      substring = substring.normalize('NFC');
      return collator.compare(string.slice(-substring.length), substring) === 0;
    },

    contains(string, substring) {
      if (substring.length === 0) {
        return true;
      }

      string = string.normalize('NFC');
      substring = substring.normalize('NFC');
      let scan = 0;
      let sliceLen = substring.length;

      for (; scan + sliceLen <= string.length; scan++) {
        let slice = string.slice(scan, scan + sliceLen);

        if (collator.compare(substring, slice) === 0) {
          return true;
        }
      }

      return false;
    }

  };
}
//# sourceMappingURL=module.js.map

// CONCATENATED MODULE: ./node_modules/clsx/dist/clsx.m.js
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ var clsx_m = (function () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
});

// CONCATENATED MODULE: ./node_modules/@react-aria/utils/dist/module.js





// During SSR, React emits a warning when calling useLayoutEffect.
// Since neither useLayoutEffect nor useEffect run on the server,
// we can suppress this by replace it with a noop on the server.
const module_useLayoutEffect = typeof window !== 'undefined' ? external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.useLayoutEffect : () => {};
let $f8b5fdd96fb429d7102983f777c41307$var$idsUpdaterMap = new Map();
/**
 * If a default is not provided, generate an id.
 * @param defaultId - Default component id.
 */

function module_useId(defaultId) {
  let isRendering = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(true);
  isRendering.current = true;
  let [value, setValue] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(defaultId);
  let nextId = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(null); // don't memo this, we want it new each render so that the Effects always run

  let updateValue = val => {
    if (!isRendering.current) {
      setValue(val);
    } else {
      nextId.current = val;
    }
  };

  module_useLayoutEffect(() => {
    isRendering.current = false;
  }, [updateValue]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    let newId = nextId.current;

    if (newId) {
      setValue(newId);
      nextId.current = null;
    }
  }, [setValue, updateValue]);
  let res = useSSRSafeId(value);
  $f8b5fdd96fb429d7102983f777c41307$var$idsUpdaterMap.set(res, updateValue);
  return res;
}
/**
 * Merges two ids.
 * Different ids will trigger a side-effect and re-render components hooked up with `useId`.
 */

function mergeIds(idA, idB) {
  if (idA === idB) {
    return idA;
  }

  let setIdA = $f8b5fdd96fb429d7102983f777c41307$var$idsUpdaterMap.get(idA);

  if (setIdA) {
    setIdA(idB);
    return idB;
  }

  let setIdB = $f8b5fdd96fb429d7102983f777c41307$var$idsUpdaterMap.get(idB);

  if (setIdB) {
    setIdB(idA);
    return idA;
  }

  return idB;
}
/**
 * Used to generate an id, and after render, check if that id is rendered so we know
 * if we can use it in places such as labelledby.
 */

function useSlotId() {
  let [id, setId] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(module_useId());
  module_useLayoutEffect(() => {
    let setCurr = $f8b5fdd96fb429d7102983f777c41307$var$idsUpdaterMap.get(id);

    if (setCurr && !document.getElementById(id)) {
      setId(null);
    }
  }, [id]);
  return id;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/**
 * Calls all functions in the order they were chained with the same arguments.
 */
function chain() {
  for (var _len = arguments.length, callbacks = new Array(_len), _key = 0; _key < _len; _key++) {
    callbacks[_key] = arguments[_key];
  }

  return function () {
    for (let callback of callbacks) {
      if (typeof callback === 'function') {
        callback(...arguments);
      }
    }
  };
}

/**
 * Merges multiple props objects together. Event handlers are chained,
 * classNames are combined, and ids are deduplicated - different ids
 * will trigger a side-effect and re-render components hooked up with `useId`.
 * For all other props, the last prop object overrides all previous ones.
 * @param args - Multiple sets of props to merge together.
 */
function mergeProps() {
  let result = {};

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  for (let props of args) {
    for (let key in result) {
      // Chain events
      if (/^on[A-Z]/.test(key) && typeof result[key] === 'function' && typeof props[key] === 'function') {
        result[key] = chain(result[key], props[key]); // Merge classnames, sometimes classNames are empty string which eval to false, so we just need to do a type check
      } else if (key === 'className' && typeof result.className === 'string' && typeof props.className === 'string') {
        result[key] = clsx_m(result.className, props.className);
      } else if (key === 'UNSAFE_className' && typeof result.UNSAFE_className === 'string' && typeof props.UNSAFE_className === 'string') {
        result[key] = clsx_m(result.UNSAFE_className, props.UNSAFE_className);
      } else if (key === 'id' && result.id && props.id) {
        result.id = mergeIds(result.id, props.id); // Override others
      } else {
        result[key] = props[key] !== undefined ? props[key] : result[key];
      }
    } // Add props from b that are not in a


    for (let key in props) {
      if (result[key] === undefined) {
        result[key] = props[key];
      }
    }
  }

  return result;
}
const $f6a965352cabf1a7c37e8c1337e5eab$var$DOMPropNames = new Set(['id']);
const $f6a965352cabf1a7c37e8c1337e5eab$var$labelablePropNames = new Set(['aria-label', 'aria-labelledby', 'aria-describedby', 'aria-details']);
const $f6a965352cabf1a7c37e8c1337e5eab$var$propRe = /^(data-.*)$/;
/**
 * Filters out all props that aren't valid DOM props or defined via override prop obj.
 * @param props - The component props to be filtered.
 * @param opts - Props to override.
 */

function filterDOMProps(props, opts) {
  if (opts === void 0) {
    opts = {};
  }

  let {
    labelable,
    propNames
  } = opts;
  let filteredProps = {};

  for (const prop in props) {
    if (Object.prototype.hasOwnProperty.call(props, prop) && ($f6a965352cabf1a7c37e8c1337e5eab$var$DOMPropNames.has(prop) || labelable && $f6a965352cabf1a7c37e8c1337e5eab$var$labelablePropNames.has(prop) || propNames != null && propNames.has(prop) || $f6a965352cabf1a7c37e8c1337e5eab$var$propRe.test(prop))) {
      filteredProps[prop] = props[prop];
    }
  }

  return filteredProps;
}
// Currently necessary for Safari and old Edge:
// https://caniuse.com/#feat=mdn-api_htmlelement_focus_preventscroll_option
// See https://bugs.webkit.org/show_bug.cgi?id=178583
//
// Original licensing for the following methods can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/calvellido/focus-options-polyfill
function focusWithoutScrolling(element) {
  if ($bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScroll()) {
    element.focus({
      preventScroll: true
    });
  } else {
    let scrollableElements = $bc7c9c3af78f5218ff72cecce15730$var$getScrollableElements(element);
    element.focus();
    $bc7c9c3af78f5218ff72cecce15730$var$restoreScrollPosition(scrollableElements);
  }
}
let $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScrollCached = null;

function $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScroll() {
  if ($bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScrollCached == null) {
    $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScrollCached = false;

    try {
      var focusElem = document.createElement('div');
      focusElem.focus({
        get preventScroll() {
          $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScrollCached = true;
          return true;
        }

      });
    } catch (e) {// Ignore
    }
  }

  return $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScrollCached;
}

function $bc7c9c3af78f5218ff72cecce15730$var$getScrollableElements(element) {
  var parent = element.parentNode;
  var scrollableElements = [];
  var rootScrollingElement = document.scrollingElement || document.documentElement;

  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) {
      scrollableElements.push({
        element: parent,
        scrollTop: parent.scrollTop,
        scrollLeft: parent.scrollLeft
      });
    }

    parent = parent.parentNode;
  }

  if (rootScrollingElement instanceof HTMLElement) {
    scrollableElements.push({
      element: rootScrollingElement,
      scrollTop: rootScrollingElement.scrollTop,
      scrollLeft: rootScrollingElement.scrollLeft
    });
  }

  return scrollableElements;
}

function $bc7c9c3af78f5218ff72cecce15730$var$restoreScrollPosition(scrollableElements) {
  for (let {
    element,
    scrollTop,
    scrollLeft
  } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}

function module_getOffset(element, reverse, orientation) {
  if (orientation === void 0) {
    orientation = 'horizontal';
  }

  let rect = element.getBoundingClientRect();

  if (reverse) {
    return orientation === 'horizontal' ? rect.right : rect.bottom;
  }

  return orientation === 'horizontal' ? rect.left : rect.top;
}
// mapped to a set of CSS properties that are transitioning for that element.
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.
let $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement = new Map(); // A list of callbacks to call once there are no transitioning elements.

let $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionCallbacks = new Set();

function $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$setupGlobalEvents() {
  if (typeof window === 'undefined') {
    return;
  }

  let onTransitionStart = e => {
    // Add the transitioning property to the list for this element.
    let transitions = $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.get(e.target);

    if (!transitions) {
      transitions = new Set();
      $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.set(e.target, transitions); // The transitioncancel event must be registered on the element itself, rather than as a global
      // event. This enables us to handle when the node is deleted from the document while it is transitioning.
      // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.

      e.target.addEventListener('transitioncancel', onTransitionEnd);
    }

    transitions.add(e.propertyName);
  };

  let onTransitionEnd = e => {
    // Remove property from list of transitioning properties.
    let properties = $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.get(e.target);

    if (!properties) {
      return;
    }

    properties.delete(e.propertyName); // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.

    if (properties.size === 0) {
      e.target.removeEventListener('transitioncancel', onTransitionEnd);
      $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.delete(e.target);
    } // If no transitioning elements, call all of the queued callbacks.


    if ($b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.size === 0) {
      for (let cb of $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionCallbacks) {
        cb();
      }

      $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionCallbacks.clear();
    }
  };

  document.body.addEventListener('transitionrun', onTransitionStart);
  document.body.addEventListener('transitionend', onTransitionEnd);
}

if (typeof document !== 'undefined') {
  if (document.readyState !== 'loading') {
    $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$setupGlobalEvents();
  } else {
    document.addEventListener('DOMContentLoaded', $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$setupGlobalEvents);
  }
}

function runAfterTransition(fn) {
  // Wait one frame to see if an animation starts, e.g. a transition on mount.
  requestAnimationFrame(() => {
    // If no transitions are running, call the function immediately.
    // Otherwise, add it to a list of callbacks to run at the end of the animation.
    if ($b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.size === 0) {
      fn();
    } else {
      $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionCallbacks.add(fn);
    }
  });
}
// Keep track of elements that we are currently handling dragging for via useDrag1D.
// If there's an ancestor and a descendant both using useDrag1D(), and the user starts
// dragging the descendant, we don't want useDrag1D events to fire for the ancestor.
const $be9622dfd8e876c0943b0b4e429554f3$var$draggingElements = []; // created for splitview, this should be reusable for things like sliders/dials
// It also handles keyboard events on the target allowing for increment/decrement by a given stepsize as well as minifying/maximizing and toggling between minified and previous size
// It can also take a 'reverse' param to say if we should measure from the right/bottom instead of the top/left
// It can also handle either a vertical or horizontal movement, but not both at the same time

function useDrag1D(props) {
  console.warn('useDrag1D is deprecated, please use `useMove` instead https://react-spectrum.adobe.com/react-aria/useMove.html');
  let {
    containerRef,
    reverse,
    orientation,
    onHover,
    onDrag,
    onPositionChange,
    onIncrement,
    onDecrement,
    onIncrementToMax,
    onDecrementToMin,
    onCollapseToggle
  } = props;

  let getPosition = e => orientation === 'horizontal' ? e.clientX : e.clientY;

  let getNextOffset = e => {
    let containerOffset = module_getOffset(containerRef.current, reverse, orientation);
    let mouseOffset = getPosition(e);
    let nextOffset = reverse ? containerOffset - mouseOffset : mouseOffset - containerOffset;
    return nextOffset;
  };

  let dragging = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(false);
  let prevPosition = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(0); // Keep track of the current handlers in a ref so that the events can access them.

  let handlers = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])({
    onPositionChange,
    onDrag
  });
  handlers.current.onDrag = onDrag;
  handlers.current.onPositionChange = onPositionChange;

  let onMouseDragged = e => {
    e.preventDefault();
    let nextOffset = getNextOffset(e);

    if (!dragging.current) {
      dragging.current = true;

      if (handlers.current.onDrag) {
        handlers.current.onDrag(true);
      }

      if (handlers.current.onPositionChange) {
        handlers.current.onPositionChange(nextOffset);
      }
    }

    if (prevPosition.current === nextOffset) {
      return;
    }

    prevPosition.current = nextOffset;

    if (onPositionChange) {
      onPositionChange(nextOffset);
    }
  };

  let onMouseUp = e => {
    const target = e.target;
    dragging.current = false;
    let nextOffset = getNextOffset(e);

    if (handlers.current.onDrag) {
      handlers.current.onDrag(false);
    }

    if (handlers.current.onPositionChange) {
      handlers.current.onPositionChange(nextOffset);
    }

    $be9622dfd8e876c0943b0b4e429554f3$var$draggingElements.splice($be9622dfd8e876c0943b0b4e429554f3$var$draggingElements.indexOf(target), 1);
    window.removeEventListener('mouseup', onMouseUp, false);
    window.removeEventListener('mousemove', onMouseDragged, false);
  };

  let onMouseDown = e => {
    const target = e.currentTarget; // If we're already handling dragging on a descendant with useDrag1D, then
    // we don't want to handle the drag motion on this target as well.

    if ($be9622dfd8e876c0943b0b4e429554f3$var$draggingElements.some(elt => target.contains(elt))) {
      return;
    }

    $be9622dfd8e876c0943b0b4e429554f3$var$draggingElements.push(target);
    window.addEventListener('mousemove', onMouseDragged, false);
    window.addEventListener('mouseup', onMouseUp, false);
  };

  let onMouseEnter = () => {
    if (onHover) {
      onHover(true);
    }
  };

  let onMouseOut = () => {
    if (onHover) {
      onHover(false);
    }
  };

  let onKeyDown = e => {
    switch (e.key) {
      case 'Left':
      case 'ArrowLeft':
        if (orientation === 'horizontal') {
          e.preventDefault();

          if (onDecrement && !reverse) {
            onDecrement();
          } else if (onIncrement && reverse) {
            onIncrement();
          }
        }

        break;

      case 'Up':
      case 'ArrowUp':
        if (orientation === 'vertical') {
          e.preventDefault();

          if (onDecrement && !reverse) {
            onDecrement();
          } else if (onIncrement && reverse) {
            onIncrement();
          }
        }

        break;

      case 'Right':
      case 'ArrowRight':
        if (orientation === 'horizontal') {
          e.preventDefault();

          if (onIncrement && !reverse) {
            onIncrement();
          } else if (onDecrement && reverse) {
            onDecrement();
          }
        }

        break;

      case 'Down':
      case 'ArrowDown':
        if (orientation === 'vertical') {
          e.preventDefault();

          if (onIncrement && !reverse) {
            onIncrement();
          } else if (onDecrement && reverse) {
            onDecrement();
          }
        }

        break;

      case 'Home':
        e.preventDefault();

        if (onDecrementToMin) {
          onDecrementToMin();
        }

        break;

      case 'End':
        e.preventDefault();

        if (onIncrementToMax) {
          onIncrementToMax();
        }

        break;

      case 'Enter':
        e.preventDefault();

        if (onCollapseToggle) {
          onCollapseToggle();
        }

        break;
    }
  };

  return {
    onMouseDown,
    onMouseEnter,
    onMouseOut,
    onKeyDown
  };
}
function useGlobalListeners() {
  let globalListeners = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(new Map());
  let addGlobalListener = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])((eventTarget, type, listener, options) => {
    globalListeners.current.set(listener, {
      type,
      eventTarget,
      options
    });
    eventTarget.addEventListener(type, listener, options);
  }, []);
  let removeGlobalListener = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])((eventTarget, type, listener, options) => {
    eventTarget.removeEventListener(type, listener, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [removeGlobalListener]); // eslint-disable-next-line arrow-body-style

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    return removeAllGlobalListeners;
  }, [removeAllGlobalListeners]);
  return {
    addGlobalListener,
    removeGlobalListener,
    removeAllGlobalListeners
  };
}

/**
 * Merges aria-label and aria-labelledby into aria-labelledby when both exist.
 * @param props - Aria label props.
 * @param defaultLabel - Default value for aria-label when not present.
 */
function useLabels(props, defaultLabel) {
  let {
    id,
    'aria-label': label,
    'aria-labelledby': labelledBy
  } = props; // If there is both an aria-label and aria-labelledby,
  // combine them by pointing to the element itself.

  id = module_useId(id);

  if (labelledBy && label) {
    let ids = new Set([...labelledBy.trim().split(/\s+/), id]);
    labelledBy = [...ids].join(' ');
  } else if (labelledBy) {
    labelledBy = labelledBy.trim().split(/\s+/).join(' ');
  } // If no labels are provided, use the default


  if (!label && !labelledBy && defaultLabel) {
    label = defaultLabel;
  }

  return {
    id,
    'aria-label': label,
    'aria-labelledby': labelledBy
  };
}
// Like useEffect, but only called for updates after the initial render.
function useUpdateEffect(effect, dependencies) {
  const isInitialMount = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(true);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      effect();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, dependencies);
}

function $d642970c01dc21e3fe2261c17768$var$hasResizeObserver() {
  return typeof window.ResizeObserver !== 'undefined';
}

function useResizeObserver(options) {
  const {
    ref,
    onResize
  } = options;
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    let element = ref == null ? void 0 : ref.current;

    if (!element) {
      return;
    }

    if (!$d642970c01dc21e3fe2261c17768$var$hasResizeObserver()) {
      window.addEventListener('resize', onResize, false);
      return () => {
        window.removeEventListener('resize', onResize, false);
      };
    } else {
      const resizeObserverInstance = new window.ResizeObserver(entries => {
        if (!entries.length) {
          return;
        }

        onResize();
      });
      resizeObserverInstance.observe(element);
      return () => {
        if (element) {
          resizeObserverInstance.unobserve(element);
        }
      };
    }
  }, [onResize, ref]);
}
// Syncs ref from context with ref passed to hook
function useSyncRef(context, ref) {
  module_useLayoutEffect(() => {
    if (context && context.ref && ref) {
      context.ref.current = ref.current;
      return () => {
        context.ref.current = null;
      };
    }
  }, [context, ref]);
}
function getScrollParent(node) {
  while (node && !$a164c39662575b65a0b01a73e313e5$var$isScrollable(node)) {
    node = node.parentElement;
  }

  return node || document.scrollingElement || document.documentElement;
}

function $a164c39662575b65a0b01a73e313e5$var$isScrollable(node) {
  let style = window.getComputedStyle(node);
  return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
}

// @ts-ignore
let $d662329747d896105af008c761523$var$visualViewport = typeof window !== 'undefined' && window.visualViewport;
function useViewportSize() {
  let [size, setSize] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(() => $d662329747d896105af008c761523$var$getViewportSize());
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    // Use visualViewport api to track available height even on iOS virtual keyboard opening
    let onResize = () => {
      setSize(size => {
        let newSize = $d662329747d896105af008c761523$var$getViewportSize();

        if (newSize.width === size.width && newSize.height === size.height) {
          return size;
        }

        return newSize;
      });
    };

    if (!$d662329747d896105af008c761523$var$visualViewport) {
      window.addEventListener('resize', onResize);
    } else {
      $d662329747d896105af008c761523$var$visualViewport.addEventListener('resize', onResize);
    }

    return () => {
      if (!$d662329747d896105af008c761523$var$visualViewport) {
        window.removeEventListener('resize', onResize);
      } else {
        $d662329747d896105af008c761523$var$visualViewport.removeEventListener('resize', onResize);
      }
    };
  }, []);
  return size;
}

function $d662329747d896105af008c761523$var$getViewportSize() {
  return {
    width: ($d662329747d896105af008c761523$var$visualViewport == null ? void 0 : $d662329747d896105af008c761523$var$visualViewport.width) || window.innerWidth,
    height: ($d662329747d896105af008c761523$var$visualViewport == null ? void 0 : $d662329747d896105af008c761523$var$visualViewport.height) || window.innerHeight
  };
}

let $c8aa524f123a75a64d51e06d16b9568$var$descriptionId = 0;
const $c8aa524f123a75a64d51e06d16b9568$var$descriptionNodes = new Map();
function useDescription(description) {
  let [id, setId] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(null);

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useLayoutEffect"])(() => {
    if (!description) {
      return;
    }

    let desc = $c8aa524f123a75a64d51e06d16b9568$var$descriptionNodes.get(description);

    if (!desc) {
      let id = "react-aria-description-" + $c8aa524f123a75a64d51e06d16b9568$var$descriptionId++;
      setId(id);
      let node = document.createElement('div');
      node.id = id;
      node.style.display = 'none';
      node.textContent = description;
      document.body.appendChild(node);
      desc = {
        refCount: 0,
        element: node
      };
      $c8aa524f123a75a64d51e06d16b9568$var$descriptionNodes.set(description, desc);
    } else {
      setId(desc.element.id);
    }

    desc.refCount++;
    return () => {
      if (--desc.refCount === 0) {
        desc.element.remove();
        $c8aa524f123a75a64d51e06d16b9568$var$descriptionNodes.delete(description);
      }
    };
  }, [description]);

  return {
    'aria-describedby': description ? id : undefined
  };
}

function $b0986c1243f71db8e992f67117a1ed9$var$testUserAgent(re) {
  return typeof window !== 'undefined' && window.navigator != null ? re.test(window.navigator.userAgent) : false;
}

function $b0986c1243f71db8e992f67117a1ed9$var$testPlatform(re) {
  return typeof window !== 'undefined' && window.navigator != null ? re.test(window.navigator.platform) : false;
}

function isMac() {
  return $b0986c1243f71db8e992f67117a1ed9$var$testPlatform(/^Mac/);
}
function isIPhone() {
  return $b0986c1243f71db8e992f67117a1ed9$var$testPlatform(/^iPhone/);
}
function isIPad() {
  return $b0986c1243f71db8e992f67117a1ed9$var$testPlatform(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  isMac() && navigator.maxTouchPoints > 1;
}
function isIOS() {
  return isIPhone() || isIPad();
}
function isAppleDevice() {
  return isMac() || isIOS();
}
function isWebKit() {
  return $b0986c1243f71db8e992f67117a1ed9$var$testUserAgent(/AppleWebKit/) && !isChrome();
}
function isChrome() {
  return $b0986c1243f71db8e992f67117a1ed9$var$testUserAgent(/Chrome/);
}
function isAndroid() {
  return $b0986c1243f71db8e992f67117a1ed9$var$testUserAgent(/Android/);
}
//# sourceMappingURL=module.js.map

// CONCATENATED MODULE: ./node_modules/@react-aria/label/dist/module.js


/**
 * Provides the accessibility implementation for labels and their associated elements.
 * Labels provide context for user inputs.
 * @param props - The props for labels and fields.
 */
function useLabel(props) {
  let {
    id,
    label,
    'aria-labelledby': ariaLabelledby,
    'aria-label': ariaLabel,
    labelElementType = 'label'
  } = props;
  id = module_useId(id);
  let labelId = module_useId();
  let labelProps = {};

  if (label) {
    ariaLabelledby = ariaLabelledby ? ariaLabelledby + " " + labelId : labelId;
    labelProps = {
      id: labelId,
      htmlFor: labelElementType === 'label' ? id : undefined
    };
  } else if (!ariaLabelledby && !ariaLabel) {
    console.warn('If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility');
  }

  let fieldProps = useLabels({
    id,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby
  });
  return {
    labelProps,
    fieldProps
  };
}
//# sourceMappingURL=module.js.map

// CONCATENATED MODULE: ./node_modules/@react-aria/interactions/dist/module.js




let $e17c9db826984f8ab8e5d837bf0b8$var$state = 'default';
let $e17c9db826984f8ab8e5d837bf0b8$var$savedUserSelect = '';

function $e17c9db826984f8ab8e5d837bf0b8$export$disableTextSelection() {
  if ($e17c9db826984f8ab8e5d837bf0b8$var$state === 'default') {
    $e17c9db826984f8ab8e5d837bf0b8$var$savedUserSelect = document.documentElement.style.webkitUserSelect;
    document.documentElement.style.webkitUserSelect = 'none';
  }

  $e17c9db826984f8ab8e5d837bf0b8$var$state = 'disabled';
}

function $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection() {
  // If the state is already default, there's nothing to do.
  // If it is restoring, then there's no need to queue a second restore.
  if ($e17c9db826984f8ab8e5d837bf0b8$var$state !== 'disabled') {
    return;
  }

  $e17c9db826984f8ab8e5d837bf0b8$var$state = 'restoring'; // There appears to be a delay on iOS where selection still might occur
  // after pointer up, so wait a bit before removing user-select.

  setTimeout(() => {
    // Wait for any CSS transitions to complete so we don't recompute style
    // for the whole page in the middle of the animation and cause jank.
    runAfterTransition(() => {
      // Avoid race conditions
      if ($e17c9db826984f8ab8e5d837bf0b8$var$state === 'restoring') {
        if (document.documentElement.style.webkitUserSelect === 'none') {
          document.documentElement.style.webkitUserSelect = $e17c9db826984f8ab8e5d837bf0b8$var$savedUserSelect || '';
        }

        $e17c9db826984f8ab8e5d837bf0b8$var$savedUserSelect = '';
        $e17c9db826984f8ab8e5d837bf0b8$var$state = 'default';
      }
    });
  }, 300);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
// Original licensing for the following method can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/blob/3c713d513195a53788b3f8bb4b70279d68b15bcc/packages/react-interactions/events/src/dom/shared/index.js#L74-L87
// Keyboards, Assistive Technologies, and element.click() all produce a "virtual"
// click event. This is a method of inferring such clicks. Every browser except
// IE 11 only sets a zero value of "detail" for click events that are "virtual".
// However, IE 11 uses a zero value for all click events. For IE 11 we rely on
// the quirk that it produces click events that are of type PointerEvent, and
// where only the "virtual" click lacks a pointerType field.
function $f67ef9f1b8ed09b4b00fd0840cd8b94b$export$isVirtualClick(event) {
  // JAWS/NVDA with Firefox.
  if (event.mozInputSource === 0 && event.isTrusted) {
    return true;
  }

  return event.detail === 0 && !event.pointerType;
}

const $a3ff51240de6f955c79cf17a88e349$export$PressResponderContext = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createContext(null);

$a3ff51240de6f955c79cf17a88e349$export$PressResponderContext.displayName = 'PressResponderContext';

function $ffc54430b1dbeee65879852feaaff07d$var$usePressResponderContext(props) {
  // Consume context from <PressResponder> and merge with props.
  let context = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"])($a3ff51240de6f955c79cf17a88e349$export$PressResponderContext);

  if (context) {
    let {
      register
    } = context,
        contextProps = _objectWithoutPropertiesLoose(context, ["register"]);

    props = mergeProps(contextProps, props);
    register();
  }

  useSyncRef(context, props.ref);
  return props;
}
/**
 * Handles press interactions across mouse, touch, keyboard, and screen readers.
 * It normalizes behavior across browsers and platforms, and handles many nuances
 * of dealing with pointer and keyboard events.
 */


function usePress(props) {
  let _usePressResponderCon = $ffc54430b1dbeee65879852feaaff07d$var$usePressResponderContext(props),
      {
    onPress,
    onPressChange,
    onPressStart,
    onPressEnd,
    onPressUp,
    isDisabled,
    isPressed: isPressedProp,
    preventFocusOnPress
  } = _usePressResponderCon,
      domProps = _objectWithoutPropertiesLoose(_usePressResponderCon, ["onPress", "onPressChange", "onPressStart", "onPressEnd", "onPressUp", "isDisabled", "isPressed", "preventFocusOnPress", "ref"]);

  let propsRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(null);
  propsRef.current = {
    onPress,
    onPressChange,
    onPressStart,
    onPressEnd,
    onPressUp,
    isDisabled
  };
  let [isPressed, setPressed] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false);
  let ref = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])({
    isPressed: false,
    ignoreEmulatedMouseEvents: false,
    ignoreClickAfterPress: false,
    didFirePressStart: false,
    activePointerId: null,
    target: null,
    isOverTarget: false,
    pointerType: null
  });
  let {
    addGlobalListener,
    removeAllGlobalListeners
  } = useGlobalListeners();
  let pressProps = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useMemo"])(() => {
    let state = ref.current;

    let triggerPressStart = (originalEvent, pointerType) => {
      let {
        onPressStart,
        onPressChange,
        isDisabled
      } = propsRef.current;

      if (isDisabled || state.didFirePressStart) {
        return;
      }

      if (onPressStart) {
        onPressStart({
          type: 'pressstart',
          pointerType,
          target: originalEvent.currentTarget,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey
        });
      }

      if (onPressChange) {
        onPressChange(true);
      }

      state.didFirePressStart = true;
      setPressed(true);
    };

    let triggerPressEnd = function triggerPressEnd(originalEvent, pointerType, wasPressed) {
      if (wasPressed === void 0) {
        wasPressed = true;
      }

      let {
        onPressEnd,
        onPressChange,
        onPress,
        isDisabled
      } = propsRef.current;

      if (!state.didFirePressStart) {
        return;
      }

      state.ignoreClickAfterPress = true;
      state.didFirePressStart = false;

      if (onPressEnd) {
        onPressEnd({
          type: 'pressend',
          pointerType,
          target: originalEvent.currentTarget,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey
        });
      }

      if (onPressChange) {
        onPressChange(false);
      }

      setPressed(false);

      if (onPress && wasPressed && !isDisabled) {
        onPress({
          type: 'press',
          pointerType,
          target: originalEvent.currentTarget,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey
        });
      }
    };

    let triggerPressUp = (originalEvent, pointerType) => {
      let {
        onPressUp,
        isDisabled
      } = propsRef.current;

      if (isDisabled) {
        return;
      }

      if (onPressUp) {
        onPressUp({
          type: 'pressup',
          pointerType,
          target: originalEvent.currentTarget,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey
        });
      }
    };

    let cancel = e => {
      if (state.isPressed) {
        if (state.isOverTarget) {
          triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType, false);
        }

        state.isPressed = false;
        state.isOverTarget = false;
        state.activePointerId = null;
        state.pointerType = null;
        removeAllGlobalListeners();
        $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection();
      }
    };

    let pressProps = {
      onKeyDown(e) {
        if ($ffc54430b1dbeee65879852feaaff07d$var$isValidKeyboardEvent(e.nativeEvent) && e.currentTarget.contains(e.target)) {
          e.preventDefault();
          e.stopPropagation(); // If the event is repeating, it may have started on a different element
          // after which focus moved to the current element. Ignore these events and
          // only handle the first key down event.

          if (!state.isPressed && !e.repeat) {
            state.target = e.currentTarget;
            state.isPressed = true;
            triggerPressStart(e, 'keyboard'); // Focus may move before the key up event, so register the event on the document
            // instead of the same element where the key down event occurred.

            addGlobalListener(document, 'keyup', onKeyUp, false);
          }
        }
      },

      onKeyUp(e) {
        if ($ffc54430b1dbeee65879852feaaff07d$var$isValidKeyboardEvent(e.nativeEvent) && !e.repeat && e.currentTarget.contains(e.target)) {
          triggerPressUp($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), 'keyboard');
        }
      },

      onClick(e) {
        if (e && !e.currentTarget.contains(e.target)) {
          return;
        }

        if (e && e.button === 0) {
          e.stopPropagation();

          if (isDisabled) {
            e.preventDefault();
          } // If triggered from a screen reader or by using element.click(),
          // trigger as if it were a keyboard click.


          if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && $f67ef9f1b8ed09b4b00fd0840cd8b94b$export$isVirtualClick(e.nativeEvent)) {
            // Ensure the element receives focus (VoiceOver on iOS does not do this)
            if (!isDisabled && !preventFocusOnPress) {
              focusWithoutScrolling(e.currentTarget);
            }

            triggerPressStart(e, 'virtual');
            triggerPressUp(e, 'virtual');
            triggerPressEnd(e, 'virtual');
          }

          state.ignoreEmulatedMouseEvents = false;
          state.ignoreClickAfterPress = false;
        }
      }

    };

    let onKeyUp = e => {
      if (state.isPressed && $ffc54430b1dbeee65879852feaaff07d$var$isValidKeyboardEvent(e)) {
        e.preventDefault();
        e.stopPropagation();
        state.isPressed = false;
        triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), 'keyboard', e.target === state.target);
        removeAllGlobalListeners(); // If the target is a link, trigger the click method to open the URL,
        // but defer triggering pressEnd until onClick event handler.

        if (e.target === state.target && $ffc54430b1dbeee65879852feaaff07d$var$isHTMLAnchorLink(state.target) || state.target.getAttribute('role') === 'link') {
          state.target.click();
        }
      }
    };

    if (typeof PointerEvent !== 'undefined') {
      pressProps.onPointerDown = e => {
        // Only handle left clicks, and ignore events that bubbled through portals.
        if (e.button !== 0 || !e.currentTarget.contains(e.target)) {
          return;
        } // Due to browser inconsistencies, especially on mobile browsers, we prevent
        // default on pointer down and handle focusing the pressable element ourselves.


        if ($ffc54430b1dbeee65879852feaaff07d$var$shouldPreventDefault(e.target)) {
          e.preventDefault();
        } // iOS safari fires pointer events from VoiceOver (but only when outside an iframe...)
        // https://bugs.webkit.org/show_bug.cgi?id=222627


        state.pointerType = $ffc54430b1dbeee65879852feaaff07d$var$isVirtualPointerEvent(e.nativeEvent) ? 'virtual' : e.pointerType;
        e.stopPropagation();

        if (!state.isPressed) {
          state.isPressed = true;
          state.isOverTarget = true;
          state.activePointerId = e.pointerId;
          state.target = e.currentTarget;

          if (!isDisabled && !preventFocusOnPress) {
            focusWithoutScrolling(e.currentTarget);
          }

          $e17c9db826984f8ab8e5d837bf0b8$export$disableTextSelection();
          triggerPressStart(e, state.pointerType);
          addGlobalListener(document, 'pointermove', onPointerMove, false);
          addGlobalListener(document, 'pointerup', onPointerUp, false);
          addGlobalListener(document, 'pointercancel', onPointerCancel, false);
        }
      };

      pressProps.onMouseDown = e => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }

        if (e.button === 0) {
          // Chrome and Firefox on touch Windows devices require mouse down events
          // to be canceled in addition to pointer events, or an extra asynchronous
          // focus event will be fired.
          if ($ffc54430b1dbeee65879852feaaff07d$var$shouldPreventDefault(e.target)) {
            e.preventDefault();
          }

          e.stopPropagation();
        }
      };

      pressProps.onPointerUp = e => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        } // Only handle left clicks
        // Safari on iOS sometimes fires pointerup events, even
        // when the touch isn't over the target, so double check.


        if (e.button === 0 && $ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(e, e.currentTarget)) {
          triggerPressUp(e, state.pointerType);
        }
      }; // Safari on iOS < 13.2 does not implement pointerenter/pointerleave events correctly.
      // Use pointer move events instead to implement our own hit testing.
      // See https://bugs.webkit.org/show_bug.cgi?id=199803


      let onPointerMove = e => {
        if (e.pointerId !== state.activePointerId) {
          return;
        }

        if ($ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(e, state.target)) {
          if (!state.isOverTarget) {
            state.isOverTarget = true;
            triggerPressStart($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType);
          }
        } else if (state.isOverTarget) {
          state.isOverTarget = false;
          triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType, false);
        }
      };

      let onPointerUp = e => {
        if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0) {
          if ($ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(e, state.target)) {
            triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType);
          } else if (state.isOverTarget) {
            triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType, false);
          }

          state.isPressed = false;
          state.isOverTarget = false;
          state.activePointerId = null;
          state.pointerType = null;
          removeAllGlobalListeners();
          $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection();
        }
      };

      let onPointerCancel = e => {
        cancel(e);
      };

      pressProps.onDragStart = e => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        } // Safari does not call onPointerCancel when a drag starts, whereas Chrome and Firefox do.


        cancel(e);
      };
    } else {
      pressProps.onMouseDown = e => {
        // Only handle left clicks
        if (e.button !== 0 || !e.currentTarget.contains(e.target)) {
          return;
        } // Due to browser inconsistencies, especially on mobile browsers, we prevent
        // default on mouse down and handle focusing the pressable element ourselves.


        if ($ffc54430b1dbeee65879852feaaff07d$var$shouldPreventDefault(e.target)) {
          e.preventDefault();
        }

        e.stopPropagation();

        if (state.ignoreEmulatedMouseEvents) {
          return;
        }

        state.isPressed = true;
        state.isOverTarget = true;
        state.target = e.currentTarget;
        state.pointerType = $f67ef9f1b8ed09b4b00fd0840cd8b94b$export$isVirtualClick(e.nativeEvent) ? 'virtual' : 'mouse';

        if (!isDisabled && !preventFocusOnPress) {
          focusWithoutScrolling(e.currentTarget);
        }

        triggerPressStart(e, state.pointerType);
        addGlobalListener(document, 'mouseup', onMouseUp, false);
      };

      pressProps.onMouseEnter = e => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }

        e.stopPropagation();

        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = true;
          triggerPressStart(e, state.pointerType);
        }
      };

      pressProps.onMouseLeave = e => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }

        e.stopPropagation();

        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = false;
          triggerPressEnd(e, state.pointerType, false);
        }
      };

      pressProps.onMouseUp = e => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }

        if (!state.ignoreEmulatedMouseEvents && e.button === 0) {
          triggerPressUp(e, state.pointerType);
        }
      };

      let onMouseUp = e => {
        // Only handle left clicks
        if (e.button !== 0) {
          return;
        }

        state.isPressed = false;
        removeAllGlobalListeners();

        if (state.ignoreEmulatedMouseEvents) {
          state.ignoreEmulatedMouseEvents = false;
          return;
        }

        if ($ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(e, state.target)) {
          triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType);
        } else if (state.isOverTarget) {
          triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType, false);
        }

        state.isOverTarget = false;
      };

      pressProps.onTouchStart = e => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }

        e.stopPropagation();
        let touch = $ffc54430b1dbeee65879852feaaff07d$var$getTouchFromEvent(e.nativeEvent);

        if (!touch) {
          return;
        }

        state.activePointerId = touch.identifier;
        state.ignoreEmulatedMouseEvents = true;
        state.isOverTarget = true;
        state.isPressed = true;
        state.target = e.currentTarget;
        state.pointerType = 'touch'; // Due to browser inconsistencies, especially on mobile browsers, we prevent default
        // on the emulated mouse event and handle focusing the pressable element ourselves.

        if (!isDisabled && !preventFocusOnPress) {
          focusWithoutScrolling(e.currentTarget);
        }

        $e17c9db826984f8ab8e5d837bf0b8$export$disableTextSelection();
        triggerPressStart(e, state.pointerType);
        addGlobalListener(window, 'scroll', onScroll, true);
      };

      pressProps.onTouchMove = e => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }

        e.stopPropagation();

        if (!state.isPressed) {
          return;
        }

        let touch = $ffc54430b1dbeee65879852feaaff07d$var$getTouchById(e.nativeEvent, state.activePointerId);

        if (touch && $ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(touch, e.currentTarget)) {
          if (!state.isOverTarget) {
            state.isOverTarget = true;
            triggerPressStart(e, state.pointerType);
          }
        } else if (state.isOverTarget) {
          state.isOverTarget = false;
          triggerPressEnd(e, state.pointerType, false);
        }
      };

      pressProps.onTouchEnd = e => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }

        e.stopPropagation();

        if (!state.isPressed) {
          return;
        }

        let touch = $ffc54430b1dbeee65879852feaaff07d$var$getTouchById(e.nativeEvent, state.activePointerId);

        if (touch && $ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(touch, e.currentTarget)) {
          triggerPressUp(e, state.pointerType);
          triggerPressEnd(e, state.pointerType);
        } else if (state.isOverTarget) {
          triggerPressEnd(e, state.pointerType, false);
        }

        state.isPressed = false;
        state.activePointerId = null;
        state.isOverTarget = false;
        state.ignoreEmulatedMouseEvents = true;
        $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection();
        removeAllGlobalListeners();
      };

      pressProps.onTouchCancel = e => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }

        e.stopPropagation();

        if (state.isPressed) {
          cancel(e);
        }
      };

      let onScroll = e => {
        if (state.isPressed && e.target.contains(state.target)) {
          cancel({
            currentTarget: state.target,
            shiftKey: false,
            ctrlKey: false,
            metaKey: false
          });
        }
      };

      pressProps.onDragStart = e => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }

        cancel(e);
      };
    }

    return pressProps;
  }, [addGlobalListener, isDisabled, preventFocusOnPress, removeAllGlobalListeners]); // Remove user-select: none in case component unmounts immediately after pressStart
  // eslint-disable-next-line arrow-body-style

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    return () => $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection();
  }, []);
  return {
    isPressed: isPressedProp || isPressed,
    pressProps: mergeProps(domProps, pressProps)
  };
}

function $ffc54430b1dbeee65879852feaaff07d$var$isHTMLAnchorLink(target) {
  return target.tagName === 'A' && target.hasAttribute('href');
}

function $ffc54430b1dbeee65879852feaaff07d$var$isValidKeyboardEvent(event) {
  const {
    key,
    target
  } = event;
  const element = target;
  const {
    tagName,
    isContentEditable
  } = element;
  const role = element.getAttribute('role'); // Accessibility for keyboards. Space and Enter only.
  // "Spacebar" is for IE 11

  return (key === 'Enter' || key === ' ' || key === 'Spacebar') && tagName !== 'INPUT' && tagName !== 'TEXTAREA' && isContentEditable !== true && ( // A link with a valid href should be handled natively,
  // unless it also has role='button' and was triggered using Space.
  !$ffc54430b1dbeee65879852feaaff07d$var$isHTMLAnchorLink(element) || role === 'button' && key !== 'Enter') && // An element with role='link' should only trigger with Enter key
  !(role === 'link' && key !== 'Enter');
}

function $ffc54430b1dbeee65879852feaaff07d$var$getTouchFromEvent(event) {
  const {
    targetTouches
  } = event;

  if (targetTouches.length > 0) {
    return targetTouches[0];
  }

  return null;
}

function $ffc54430b1dbeee65879852feaaff07d$var$getTouchById(event, pointerId) {
  const changedTouches = event.changedTouches;

  for (let i = 0; i < changedTouches.length; i++) {
    const touch = changedTouches[i];

    if (touch.identifier === pointerId) {
      return touch;
    }
  }

  return null;
}

function $ffc54430b1dbeee65879852feaaff07d$var$createEvent(target, e) {
  return {
    currentTarget: target,
    shiftKey: e.shiftKey,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey
  };
}

function $ffc54430b1dbeee65879852feaaff07d$var$getPointClientRect(point) {
  let offsetX = point.width / 2 || point.radiusX || 0;
  let offsetY = point.height / 2 || point.radiusY || 0;
  return {
    top: point.clientY - offsetY,
    right: point.clientX + offsetX,
    bottom: point.clientY + offsetY,
    left: point.clientX - offsetX
  };
}

function $ffc54430b1dbeee65879852feaaff07d$var$areRectanglesOverlapping(a, b) {
  // check if they cannot overlap on x axis
  if (a.left > b.right || b.left > a.right) {
    return false;
  } // check if they cannot overlap on y axis


  if (a.top > b.bottom || b.top > a.bottom) {
    return false;
  }

  return true;
}

function $ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(point, target) {
  let rect = target.getBoundingClientRect();
  let pointRect = $ffc54430b1dbeee65879852feaaff07d$var$getPointClientRect(point);
  return $ffc54430b1dbeee65879852feaaff07d$var$areRectanglesOverlapping(rect, pointRect);
}

function $ffc54430b1dbeee65879852feaaff07d$var$shouldPreventDefault(target) {
  // We cannot prevent default if the target is inside a draggable element.
  return !target.closest('[draggable="true"]');
}

function $ffc54430b1dbeee65879852feaaff07d$var$isVirtualPointerEvent(event) {
  // If the pointer size is zero, then we assume it's from a screen reader.
  return event.width === 0 && event.height === 0;
}

const Pressable = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.forwardRef((_ref, ref) => {
  var _ref2;

  let {
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  let newRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])();
  ref = (_ref2 = ref) != null ? _ref2 : newRef;
  let {
    pressProps
  } = usePress(extends_extends({}, props, {
    ref
  }));

  let child = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children.only(children);

  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.cloneElement(child, // @ts-ignore
  extends_extends({
    ref
  }, mergeProps(child.props, pressProps)));
});
const PressResponder = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.forwardRef((_ref, ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  let isRegistered = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(false);
  let prevContext = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"])($a3ff51240de6f955c79cf17a88e349$export$PressResponderContext);
  let context = mergeProps(prevContext || {}, extends_extends({}, props, {
    ref: ref || (prevContext == null ? void 0 : prevContext.ref),

    register() {
      isRegistered.current = true;

      if (prevContext) {
        prevContext.register();
      }
    }

  }));
  useSyncRef(prevContext, ref);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    if (!isRegistered.current) {
      console.warn('A PressResponder was rendered without a pressable child. ' + 'Either call the usePress hook, or wrap your DOM node with <Pressable> component.');
    }
  }, []);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement($a3ff51240de6f955c79cf17a88e349$export$PressResponderContext.Provider, {
    value: context
  }, children);
});
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions

/**
 * Handles focus events for the immediate target.
 * Focus events on child elements will be ignored.
 */
function useFocus(props) {
  if (props.isDisabled) {
    return {
      focusProps: {}
    };
  }

  let onFocus, onBlur;

  if (props.onFocus || props.onFocusChange) {
    onFocus = e => {
      if (e.target === e.currentTarget) {
        if (props.onFocus) {
          props.onFocus(e);
        }

        if (props.onFocusChange) {
          props.onFocusChange(true);
        }
      }
    };
  }

  if (props.onBlur || props.onFocusChange) {
    onBlur = e => {
      if (e.target === e.currentTarget) {
        if (props.onBlur) {
          props.onBlur(e);
        }

        if (props.onFocusChange) {
          props.onFocusChange(false);
        }
      }
    };
  }

  return {
    focusProps: {
      onFocus,
      onBlur
    }
  };
}
let $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality = null;
let $d01f69bb2ab5f70dfd0005370a2a2cbc$var$changeHandlers = new Set();
let $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasSetupGlobalListeners = false;
let $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = false;
let $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasBlurredWindowRecently = false; // Only Tab or Esc keys will make focus visible on text input elements

const $d01f69bb2ab5f70dfd0005370a2a2cbc$var$FOCUS_VISIBLE_INPUT_KEYS = {
  Tab: true,
  Escape: true
};

function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$triggerChangeHandlers(modality, e) {
  for (let handler of $d01f69bb2ab5f70dfd0005370a2a2cbc$var$changeHandlers) {
    handler(modality, e);
  }
}
/**
 * Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus styles visible.
 */


function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$isValidKey(e) {
  // Control and Shift keys trigger when navigating back to the tab with keyboard.
  return !(e.metaKey || !isMac() && e.altKey || e.ctrlKey || e.type === 'keyup' && (e.key === 'Control' || e.key === 'Shift'));
}

function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleKeyboardEvent(e) {
  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = true;

  if ($d01f69bb2ab5f70dfd0005370a2a2cbc$var$isValidKey(e)) {
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality = 'keyboard';
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$triggerChangeHandlers('keyboard', e);
  }
}

function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent(e) {
  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality = 'pointer';

  if (e.type === 'mousedown' || e.type === 'pointerdown') {
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = true;
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$triggerChangeHandlers('pointer', e);
  }
}

function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleClickEvent(e) {
  if ($f67ef9f1b8ed09b4b00fd0840cd8b94b$export$isVirtualClick(e)) {
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = true;
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality = 'virtual';
  }
}

function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleFocusEvent(e) {
  // Firefox fires two extra focus events when the user first clicks into an iframe:
  // first on the window, then on the document. We ignore these events so they don't
  // cause keyboard focus rings to appear.
  if (e.target === window || e.target === document) {
    return;
  } // If a focus event occurs without a preceding keyboard or pointer event, switch to virtual modality.
  // This occurs, for example, when navigating a form with the next/previous buttons on iOS.


  if (!$d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus && !$d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasBlurredWindowRecently) {
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality = 'virtual';
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$triggerChangeHandlers('virtual', e);
  }

  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = false;
  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasBlurredWindowRecently = false;
}

function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleWindowBlur() {
  // When the window is blurred, reset state. This is necessary when tabbing out of the window,
  // for example, since a subsequent focus event won't be fired.
  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = false;
  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasBlurredWindowRecently = true;
}
/**
 * Setup global event listeners to control when keyboard focus style should be visible.
 */


function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$setupGlobalFocusEvents() {
  if (typeof window === 'undefined' || $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasSetupGlobalListeners) {
    return;
  } // Programmatic focus() calls shouldn't affect the current input modality.
  // However, we need to detect other cases when a focus event occurs without
  // a preceding user event (e.g. screen reader focus). Overriding the focus
  // method on HTMLElement.prototype is a bit hacky, but works.


  let focus = HTMLElement.prototype.focus;

  HTMLElement.prototype.focus = function () {
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };

  document.addEventListener('keydown', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleKeyboardEvent, true);
  document.addEventListener('keyup', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleKeyboardEvent, true);
  document.addEventListener('click', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleClickEvent, true); // Register focus events on the window so they are sure to happen
  // before React's event listeners (registered on the document).

  window.addEventListener('focus', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleFocusEvent, true);
  window.addEventListener('blur', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleWindowBlur, false);

  if (typeof PointerEvent !== 'undefined') {
    document.addEventListener('pointerdown', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
    document.addEventListener('pointermove', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
    document.addEventListener('pointerup', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
  } else {
    document.addEventListener('mousedown', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
    document.addEventListener('mousemove', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
    document.addEventListener('mouseup', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
  }

  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasSetupGlobalListeners = true;
}

if (typeof document !== 'undefined') {
  if (document.readyState !== 'loading') {
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$setupGlobalFocusEvents();
  } else {
    document.addEventListener('DOMContentLoaded', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$setupGlobalFocusEvents);
  }
}
/**
 * If true, keyboard focus is visible.
 */


function module_isFocusVisible() {
  return $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality !== 'pointer';
}
function getInteractionModality() {
  return $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality;
}
function setInteractionModality(modality) {
  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality = modality;
  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$triggerChangeHandlers(modality, null);
}
/**
 * Keeps state of the current modality.
 */

function useInteractionModality() {
  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$setupGlobalFocusEvents();
  let [modality, setModality] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])($d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    let handler = () => {
      setModality($d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality);
    };

    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$changeHandlers.add(handler);
    return () => {
      $d01f69bb2ab5f70dfd0005370a2a2cbc$var$changeHandlers.delete(handler);
    };
  }, []);
  return modality;
}
/**
 * If this is attached to text input component, return if the event is a focus event (Tab/Escape keys pressed) so that
 * focus visible style can be properly set.
 */

function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$isKeyboardFocusEvent(isTextInput, modality, e) {
  return !(isTextInput && modality === 'keyboard' && e instanceof KeyboardEvent && !$d01f69bb2ab5f70dfd0005370a2a2cbc$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}
/**
 * Manages focus visible state for the page, and subscribes individual components for updates.
 */


function useFocusVisible(props) {
  if (props === void 0) {
    props = {};
  }

  let {
    isTextInput,
    autoFocus
  } = props;
  let [isFocusVisibleState, setFocusVisible] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(autoFocus || module_isFocusVisible());
  useFocusVisibleListener(isFocusVisible => {
    setFocusVisible(isFocusVisible);
  }, [isTextInput], {
    isTextInput
  });
  return {
    isFocusVisible: isFocusVisibleState
  };
}
/**
 * Listens for trigger change and reports if focus is visible (i.e., modality is not pointer).
 */

function useFocusVisibleListener(fn, deps, opts) {
  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$setupGlobalFocusEvents();
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    let handler = (modality, e) => {
      if (!$d01f69bb2ab5f70dfd0005370a2a2cbc$var$isKeyboardFocusEvent(opts == null ? void 0 : opts.isTextInput, modality, e)) {
        return;
      }

      fn(module_isFocusVisible());
    };

    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$changeHandlers.add(handler);
    return () => $d01f69bb2ab5f70dfd0005370a2a2cbc$var$changeHandlers.delete(handler);
  }, deps);
}

/**
 * Handles focus events for the target and its descendants.
 */
function useFocusWithin(props) {
  let state = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])({
    isFocusWithin: false
  }).current;

  if (props.isDisabled) {
    return {
      focusWithinProps: {}
    };
  }

  let onFocus = e => {
    if (!state.isFocusWithin) {
      if (props.onFocusWithin) {
        props.onFocusWithin(e);
      }

      if (props.onFocusWithinChange) {
        props.onFocusWithinChange(true);
      }

      state.isFocusWithin = true;
    }
  };

  let onBlur = e => {
    // We don't want to trigger onBlurWithin and then immediately onFocusWithin again
    // when moving focus inside the element. Only trigger if the currentTarget doesn't
    // include the relatedTarget (where focus is moving).
    if (state.isFocusWithin && !e.currentTarget.contains(e.relatedTarget)) {
      if (props.onBlurWithin) {
        props.onBlurWithin(e);
      }

      if (props.onFocusWithinChange) {
        props.onFocusWithinChange(false);
      }

      state.isFocusWithin = false;
    }
  };

  return {
    focusWithinProps: {
      onFocus: onFocus,
      onBlur: onBlur
    }
  };
}
// iOS fires onPointerEnter twice: once with pointerType="touch" and again with pointerType="mouse".
// We want to ignore these emulated events so they do not trigger hover behavior.
// See https://bugs.webkit.org/show_bug.cgi?id=214609.
let $b1a784c66b81d90efa4f74e05b$var$globalIgnoreEmulatedMouseEvents = false;
let $b1a784c66b81d90efa4f74e05b$var$hoverCount = 0;

function $b1a784c66b81d90efa4f74e05b$var$setGlobalIgnoreEmulatedMouseEvents() {
  $b1a784c66b81d90efa4f74e05b$var$globalIgnoreEmulatedMouseEvents = true; // Clear globalIgnoreEmulatedMouseEvents after a short timeout. iOS fires onPointerEnter
  // with pointerType="mouse" immediately after onPointerUp and before onFocus. On other
  // devices that don't have this quirk, we don't want to ignore a mouse hover sometime in
  // the distant future because a user previously touched the element.

  setTimeout(() => {
    $b1a784c66b81d90efa4f74e05b$var$globalIgnoreEmulatedMouseEvents = false;
  }, 50);
}

function $b1a784c66b81d90efa4f74e05b$var$handleGlobalPointerEvent(e) {
  if (e.pointerType === 'touch') {
    $b1a784c66b81d90efa4f74e05b$var$setGlobalIgnoreEmulatedMouseEvents();
  }
}

function $b1a784c66b81d90efa4f74e05b$var$setupGlobalTouchEvents() {
  if (typeof document === 'undefined') {
    return;
  }

  if (typeof PointerEvent !== 'undefined') {
    document.addEventListener('pointerup', $b1a784c66b81d90efa4f74e05b$var$handleGlobalPointerEvent);
  } else {
    document.addEventListener('touchend', $b1a784c66b81d90efa4f74e05b$var$setGlobalIgnoreEmulatedMouseEvents);
  }

  $b1a784c66b81d90efa4f74e05b$var$hoverCount++;
  return () => {
    $b1a784c66b81d90efa4f74e05b$var$hoverCount--;

    if ($b1a784c66b81d90efa4f74e05b$var$hoverCount > 0) {
      return;
    }

    if (typeof PointerEvent !== 'undefined') {
      document.removeEventListener('pointerup', $b1a784c66b81d90efa4f74e05b$var$handleGlobalPointerEvent);
    } else {
      document.removeEventListener('touchend', $b1a784c66b81d90efa4f74e05b$var$setGlobalIgnoreEmulatedMouseEvents);
    }
  };
}
/**
 * Handles pointer hover interactions for an element. Normalizes behavior
 * across browsers and platforms, and ignores emulated mouse events on touch devices.
 */


function useHover(props) {
  let {
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    isDisabled
  } = props;
  let [isHovered, setHovered] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false);
  let state = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: '',
    target: null
  }).current;
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])($b1a784c66b81d90efa4f74e05b$var$setupGlobalTouchEvents, []);
  let {
    hoverProps,
    triggerHoverEnd
  } = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useMemo"])(() => {
    let triggerHoverStart = (event, pointerType) => {
      state.pointerType = pointerType;

      if (isDisabled || pointerType === 'touch' || state.isHovered || !event.currentTarget.contains(event.target)) {
        return;
      }

      state.isHovered = true;
      let target = event.target;
      state.target = target;

      if (onHoverStart) {
        onHoverStart({
          type: 'hoverstart',
          target,
          pointerType
        });
      }

      if (onHoverChange) {
        onHoverChange(true);
      }

      setHovered(true);
    };

    let triggerHoverEnd = (event, pointerType) => {
      state.pointerType = '';
      state.target = null;

      if (pointerType === 'touch' || !state.isHovered) {
        return;
      }

      state.isHovered = false;
      let target = event.target;

      if (onHoverEnd) {
        onHoverEnd({
          type: 'hoverend',
          target,
          pointerType
        });
      }

      if (onHoverChange) {
        onHoverChange(false);
      }

      setHovered(false);
    };

    let hoverProps = {};

    if (typeof PointerEvent !== 'undefined') {
      hoverProps.onPointerEnter = e => {
        if ($b1a784c66b81d90efa4f74e05b$var$globalIgnoreEmulatedMouseEvents && e.pointerType === 'mouse') {
          return;
        }

        triggerHoverStart(e, e.pointerType);
      };

      hoverProps.onPointerLeave = e => {
        if (!isDisabled && e.currentTarget.contains(e.target)) {
          triggerHoverEnd(e, e.pointerType);
        }
      };
    } else {
      hoverProps.onTouchStart = () => {
        state.ignoreEmulatedMouseEvents = true;
      };

      hoverProps.onMouseEnter = e => {
        if (!state.ignoreEmulatedMouseEvents && !$b1a784c66b81d90efa4f74e05b$var$globalIgnoreEmulatedMouseEvents) {
          triggerHoverStart(e, 'mouse');
        }

        state.ignoreEmulatedMouseEvents = false;
      };

      hoverProps.onMouseLeave = e => {
        if (!isDisabled && e.currentTarget.contains(e.target)) {
          triggerHoverEnd(e, 'mouse');
        }
      };
    }

    return {
      hoverProps,
      triggerHoverEnd
    };
  }, [onHoverStart, onHoverChange, onHoverEnd, isDisabled, state]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    // Call the triggerHoverEnd as soon as isDisabled changes to true
    // Safe to call triggerHoverEnd, it will early return if we aren't currently hovering
    if (isDisabled) {
      triggerHoverEnd({
        target: state.target
      }, state.pointerType);
    }
  }, [isDisabled]);
  return {
    hoverProps,
    isHovered
  };
}

/**
 * Example, used in components like Dialogs and Popovers so they can close
 * when a user clicks outside them.
 */
function useInteractOutside(props) {
  let {
    ref,
    onInteractOutside,
    isDisabled,
    onInteractOutsideStart
  } = props;
  let stateRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false
  });
  let state = stateRef.current;
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    let onPointerDown = e => {
      if (isDisabled) {
        return;
      }

      if ($e415bb64ab27cb8fbfac2f417412022f$var$isValidEvent(e, ref) && onInteractOutside) {
        if (onInteractOutsideStart) {
          onInteractOutsideStart(e);
        }

        state.isPointerDown = true;
      }
    }; // Use pointer events if available. Otherwise, fall back to mouse and touch events.


    if (typeof PointerEvent !== 'undefined') {
      let onPointerUp = e => {
        if (isDisabled) {
          return;
        }

        if (state.isPointerDown && onInteractOutside && $e415bb64ab27cb8fbfac2f417412022f$var$isValidEvent(e, ref)) {
          state.isPointerDown = false;
          onInteractOutside(e);
        }
      }; // changing these to capture phase fixed combobox


      document.addEventListener('pointerdown', onPointerDown, true);
      document.addEventListener('pointerup', onPointerUp, true);
      return () => {
        document.removeEventListener('pointerdown', onPointerDown, true);
        document.removeEventListener('pointerup', onPointerUp, true);
      };
    } else {
      let onMouseUp = e => {
        if (isDisabled) {
          return;
        }

        if (state.ignoreEmulatedMouseEvents) {
          state.ignoreEmulatedMouseEvents = false;
        } else if (state.isPointerDown && onInteractOutside && $e415bb64ab27cb8fbfac2f417412022f$var$isValidEvent(e, ref)) {
          state.isPointerDown = false;
          onInteractOutside(e);
        }
      };

      let onTouchEnd = e => {
        if (isDisabled) {
          return;
        }

        state.ignoreEmulatedMouseEvents = true;

        if (onInteractOutside && state.isPointerDown && $e415bb64ab27cb8fbfac2f417412022f$var$isValidEvent(e, ref)) {
          state.isPointerDown = false;
          onInteractOutside(e);
        }
      };

      document.addEventListener('mousedown', onPointerDown, true);
      document.addEventListener('mouseup', onMouseUp, true);
      document.addEventListener('touchstart', onPointerDown, true);
      document.addEventListener('touchend', onTouchEnd, true);
      return () => {
        document.removeEventListener('mousedown', onPointerDown, true);
        document.removeEventListener('mouseup', onMouseUp, true);
        document.removeEventListener('touchstart', onPointerDown, true);
        document.removeEventListener('touchend', onTouchEnd, true);
      };
    }
  }, [onInteractOutside, ref, state.ignoreEmulatedMouseEvents, state.isPointerDown, isDisabled]);
}

function $e415bb64ab27cb8fbfac2f417412022f$var$isValidEvent(event, ref) {
  if (event.button > 0) {
    return false;
  } // if the event target is no longer in the document


  if (event.target) {
    const ownerDocument = event.target.ownerDocument;

    if (!ownerDocument || !ownerDocument.documentElement.contains(event.target)) {
      return false;
    }
  }

  return ref.current && !ref.current.contains(event.target);
}

/**
 * This function wraps a React event handler to make stopPropagation the default, and support continuePropagation instead.
 */
function $dc0d75166de722fbf58eb6c3552$export$createEventHandler(handler) {
  if (!handler) {
    return;
  }

  let shouldStopPropagation = true;
  return e => {
    let event = extends_extends({}, e, {
      preventDefault() {
        e.preventDefault();
      },

      isDefaultPrevented() {
        return e.isDefaultPrevented();
      },

      stopPropagation() {
        console.error('stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.');
      },

      continuePropagation() {
        shouldStopPropagation = false;
      }

    });

    handler(event);

    if (shouldStopPropagation) {
      e.stopPropagation();
    }
  };
}

/**
 * Handles keyboard interactions for a focusable element.
 */
function useKeyboard(props) {
  return {
    keyboardProps: props.isDisabled ? {} : {
      onKeyDown: $dc0d75166de722fbf58eb6c3552$export$createEventHandler(props.onKeyDown),
      onKeyUp: $dc0d75166de722fbf58eb6c3552$export$createEventHandler(props.onKeyUp)
    }
  };
}

/**
 * Handles move interactions across mouse, touch, and keyboard, including dragging with
 * the mouse or touch, and using the arrow keys. Normalizes behavior across browsers and
 * platforms, and ignores emulated mouse events on touch devices.
 */
function useMove(props) {
  let {
    onMoveStart,
    onMove,
    onMoveEnd
  } = props;
  let state = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])({
    didMove: false,
    lastPosition: null,
    id: null
  });
  let {
    addGlobalListener,
    removeGlobalListener
  } = useGlobalListeners();
  let moveProps = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useMemo"])(() => {
    let moveProps = {};

    let start = () => {
      $e17c9db826984f8ab8e5d837bf0b8$export$disableTextSelection();
      state.current.didMove = false;
    };

    let move = (pointerType, deltaX, deltaY) => {
      if (deltaX === 0 && deltaY === 0) {
        return;
      }

      if (!state.current.didMove) {
        state.current.didMove = true;
        onMoveStart == null ? void 0 : onMoveStart({
          type: 'movestart',
          pointerType
        });
      }

      onMove({
        type: 'move',
        pointerType,
        deltaX: deltaX,
        deltaY: deltaY
      });
    };

    let end = pointerType => {
      $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection();

      if (state.current.didMove) {
        onMoveEnd == null ? void 0 : onMoveEnd({
          type: 'moveend',
          pointerType
        });
      }
    };

    if (typeof PointerEvent === 'undefined') {
      let onMouseMove = e => {
        if (e.button === 0) {
          move('mouse', e.pageX - state.current.lastPosition.pageX, e.pageY - state.current.lastPosition.pageY);
          state.current.lastPosition = {
            pageX: e.pageX,
            pageY: e.pageY
          };
        }
      };

      let onMouseUp = e => {
        if (e.button === 0) {
          end('mouse');
          removeGlobalListener(window, 'mousemove', onMouseMove, false);
          removeGlobalListener(window, 'mouseup', onMouseUp, false);
        }
      };

      moveProps.onMouseDown = e => {
        if (e.button === 0) {
          start();
          e.stopPropagation();
          e.preventDefault();
          state.current.lastPosition = {
            pageX: e.pageX,
            pageY: e.pageY
          };
          addGlobalListener(window, 'mousemove', onMouseMove, false);
          addGlobalListener(window, 'mouseup', onMouseUp, false);
        }
      };

      let onTouchMove = e => {
        // @ts-ignore
        let touch = [...e.changedTouches].findIndex((_ref) => {
          let {
            identifier
          } = _ref;
          return identifier === state.current.id;
        });

        if (touch >= 0) {
          let {
            pageX,
            pageY
          } = e.changedTouches[touch];
          move('touch', pageX - state.current.lastPosition.pageX, pageY - state.current.lastPosition.pageY);
          state.current.lastPosition = {
            pageX,
            pageY
          };
        }
      };

      let onTouchEnd = e => {
        // @ts-ignore
        let touch = [...e.changedTouches].findIndex((_ref2) => {
          let {
            identifier
          } = _ref2;
          return identifier === state.current.id;
        });

        if (touch >= 0) {
          end('touch');
          state.current.id = null;
          removeGlobalListener(window, 'touchmove', onTouchMove);
          removeGlobalListener(window, 'touchend', onTouchEnd);
          removeGlobalListener(window, 'touchcancel', onTouchEnd);
        }
      };

      moveProps.onTouchStart = e => {
        if (e.changedTouches.length === 0 || state.current.id != null) {
          return;
        }

        let {
          pageX,
          pageY,
          identifier
        } = e.changedTouches[0];
        start();
        e.stopPropagation();
        e.preventDefault();
        state.current.lastPosition = {
          pageX,
          pageY
        };
        state.current.id = identifier;
        addGlobalListener(window, 'touchmove', onTouchMove, false);
        addGlobalListener(window, 'touchend', onTouchEnd, false);
        addGlobalListener(window, 'touchcancel', onTouchEnd, false);
      };
    } else {
      let onPointerMove = e => {
        if (e.pointerId === state.current.id) {
          // @ts-ignore
          let pointerType = e.pointerType || 'mouse'; // Problems with PointerEvent#movementX/movementY:
          // 1. it is always 0 on macOS Safari.
          // 2. On Chrome Android, it's scaled by devicePixelRatio, but not on Chrome macOS

          move(pointerType, e.pageX - state.current.lastPosition.pageX, e.pageY - state.current.lastPosition.pageY);
          state.current.lastPosition = {
            pageX: e.pageX,
            pageY: e.pageY
          };
        }
      };

      let onPointerUp = e => {
        if (e.pointerId === state.current.id) {
          // @ts-ignore
          let pointerType = e.pointerType || 'mouse';
          end(pointerType);
          state.current.id = null;
          removeGlobalListener(window, 'pointermove', onPointerMove, false);
          removeGlobalListener(window, 'pointerup', onPointerUp, false);
          removeGlobalListener(window, 'pointercancel', onPointerUp, false);
        }
      };

      moveProps.onPointerDown = e => {
        if (e.button === 0 && state.current.id == null) {
          start();
          e.stopPropagation();
          e.preventDefault();
          state.current.lastPosition = {
            pageX: e.pageX,
            pageY: e.pageY
          };
          state.current.id = e.pointerId;
          addGlobalListener(window, 'pointermove', onPointerMove, false);
          addGlobalListener(window, 'pointerup', onPointerUp, false);
          addGlobalListener(window, 'pointercancel', onPointerUp, false);
        }
      };
    }

    let triggerKeyboardMove = (deltaX, deltaY) => {
      start();
      move('keyboard', deltaX, deltaY);
      end('keyboard');
    };

    moveProps.onKeyDown = e => {
      switch (e.key) {
        case 'Left':
        case 'ArrowLeft':
          e.preventDefault();
          e.stopPropagation();
          triggerKeyboardMove(-1, 0);
          break;

        case 'Right':
        case 'ArrowRight':
          e.preventDefault();
          e.stopPropagation();
          triggerKeyboardMove(1, 0);
          break;

        case 'Up':
        case 'ArrowUp':
          e.preventDefault();
          e.stopPropagation();
          triggerKeyboardMove(0, -1);
          break;

        case 'Down':
        case 'ArrowDown':
          e.preventDefault();
          e.stopPropagation();
          triggerKeyboardMove(0, 1);
          break;
      }
    };

    return moveProps;
  }, [state, onMoveStart, onMove, onMoveEnd, addGlobalListener, removeGlobalListener]);
  return {
    moveProps
  };
}
// scroll wheel needs to be added not passively so it's cancelable, small helper hook to remember that
function useScrollWheel(props, ref) {
  let {
    onScroll,
    isDisabled
  } = props;
  let onScrollHandler = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])(e => {
    // If the ctrlKey is pressed, this is a zoom event, do nothing.
    if (e.ctrlKey) {
      return;
    } // stop scrolling the page


    e.preventDefault();
    e.stopPropagation();

    if (onScroll) {
      onScroll({
        deltaX: e.deltaX,
        deltaY: e.deltaY
      });
    }
  }, [onScroll]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    let elem = ref.current;

    if (isDisabled) {
      return;
    }

    elem.addEventListener('wheel', onScrollHandler);
    return () => {
      elem.removeEventListener('wheel', onScrollHandler);
    };
  }, [onScrollHandler, ref, isDisabled]);
}
//# sourceMappingURL=module.js.map

// CONCATENATED MODULE: ./node_modules/@react-aria/focus/dist/module.js







/**
 * A utility function that focuses an element while avoiding undesired side effects such
 * as page scrolling and screen reader issues with CSS transitions.
 */
function focusSafely(element) {
  // If the user is interacting with a virtual cursor, e.g. screen reader, then
  // wait until after any animated transitions that are currently occurring on
  // the page before shifting focus. This avoids issues with VoiceOver on iOS
  // causing the page to scroll when moving focus if the element is transitioning
  // from off the screen.
  if (getInteractionModality() === 'virtual') {
    let lastFocusedElement = document.activeElement;
    runAfterTransition(() => {
      // If focus did not move and the element is still in the document, focus it.
      if (document.activeElement === lastFocusedElement && document.contains(element)) {
        focusWithoutScrolling(element);
      }
    });
  } else {
    focusWithoutScrolling(element);
  }
}

/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
function $ee5e90cbb4a22466973155c14222fa1$var$isStyleVisible(element) {
  if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) {
    return false;
  }

  let {
    display,
    visibility
  } = element.style;
  let isVisible = display !== 'none' && visibility !== 'hidden' && visibility !== 'collapse';

  if (isVisible) {
    const {
      getComputedStyle
    } = element.ownerDocument.defaultView;
    let {
      display: computedDisplay,
      visibility: computedVisibility
    } = getComputedStyle(element);
    isVisible = computedDisplay !== 'none' && computedVisibility !== 'hidden' && computedVisibility !== 'collapse';
  }

  return isVisible;
}

function $ee5e90cbb4a22466973155c14222fa1$var$isAttributeVisible(element, childElement) {
  return !element.hasAttribute('hidden') && (element.nodeName === 'DETAILS' && childElement && childElement.nodeName !== 'SUMMARY' ? element.hasAttribute('open') : true);
}
/**
 * Adapted from https://github.com/testing-library/jest-dom and 
 * https://github.com/vuejs/vue-test-utils-next/.
 * Licensed under the MIT License.
 * @param element - Element to evaluate for display or visibility.
 */


function $ee5e90cbb4a22466973155c14222fa1$export$isElementVisible(element, childElement) {
  return element.nodeName !== '#comment' && $ee5e90cbb4a22466973155c14222fa1$var$isStyleVisible(element) && $ee5e90cbb4a22466973155c14222fa1$var$isAttributeVisible(element, childElement) && (!element.parentElement || $ee5e90cbb4a22466973155c14222fa1$export$isElementVisible(element.parentElement, element));
}

const $c9e8f80f5bb1841844f54e4ad30b$var$FocusContext = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createContext(null);

let $c9e8f80f5bb1841844f54e4ad30b$var$activeScope = null;
let $c9e8f80f5bb1841844f54e4ad30b$var$scopes = new Set(); // This is a hacky DOM-based implementation of a FocusScope until this RFC lands in React:
// https://github.com/reactjs/rfcs/pull/109
// For now, it relies on the DOM tree order rather than the React tree order, and is probably
// less optimized for performance.

/**
 * A FocusScope manages focus for its descendants. It supports containing focus inside
 * the scope, restoring focus to the previously focused element on unmount, and auto
 * focusing children on mount. It also acts as a container for a programmatic focus
 * management interface that can be used to move focus forward and back in response
 * to user events.
 */

function module_FocusScope(props) {
  let {
    children,
    contain,
    restoreFocus,
    autoFocus
  } = props;
  let startRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])();
  let endRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])();
  let scopeRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])([]);
  module_useLayoutEffect(() => {
    // Find all rendered nodes between the sentinels and add them to the scope.
    let node = startRef.current.nextSibling;
    let nodes = [];

    while (node && node !== endRef.current) {
      nodes.push(node);
      node = node.nextSibling;
    }

    scopeRef.current = nodes;
    $c9e8f80f5bb1841844f54e4ad30b$var$scopes.add(scopeRef);
    return () => {
      $c9e8f80f5bb1841844f54e4ad30b$var$scopes.delete(scopeRef);
    };
  }, [children]);
  $c9e8f80f5bb1841844f54e4ad30b$var$useFocusContainment(scopeRef, contain);
  $c9e8f80f5bb1841844f54e4ad30b$var$useRestoreFocus(scopeRef, restoreFocus, contain);
  $c9e8f80f5bb1841844f54e4ad30b$var$useAutoFocus(scopeRef, autoFocus);
  let focusManager = $c9e8f80f5bb1841844f54e4ad30b$var$createFocusManagerForScope(scopeRef);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement($c9e8f80f5bb1841844f54e4ad30b$var$FocusContext.Provider, {
    value: focusManager
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
    hidden: true,
    ref: startRef
  }), children, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
    hidden: true,
    ref: endRef
  }));
}
/**
 * Returns a FocusManager interface for the parent FocusScope.
 * A FocusManager can be used to programmatically move focus within
 * a FocusScope, e.g. in response to user events like keyboard navigation.
 */

function useFocusManager() {
  return Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"])($c9e8f80f5bb1841844f54e4ad30b$var$FocusContext);
}

function $c9e8f80f5bb1841844f54e4ad30b$var$createFocusManagerForScope(scopeRef) {
  return {
    focusNext(opts) {
      if (opts === void 0) {
        opts = {};
      }

      let scope = scopeRef.current;
      let {
        from,
        tabbable,
        wrap
      } = opts;
      let node = from || document.activeElement;
      let sentinel = scope[0].previousElementSibling;
      let walker = getFocusableTreeWalker($c9e8f80f5bb1841844f54e4ad30b$var$getScopeRoot(scope), {
        tabbable
      }, scope);
      walker.currentNode = $c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(node, scope) ? node : sentinel;
      let nextNode = walker.nextNode();

      if (!nextNode && wrap) {
        walker.currentNode = sentinel;
        nextNode = walker.nextNode();
      }

      if (nextNode) {
        $c9e8f80f5bb1841844f54e4ad30b$var$focusElement(nextNode, true);
      }

      return nextNode;
    },

    focusPrevious(opts) {
      if (opts === void 0) {
        opts = {};
      }

      let scope = scopeRef.current;
      let {
        from,
        tabbable,
        wrap
      } = opts;
      let node = from || document.activeElement;
      let sentinel = scope[scope.length - 1].nextElementSibling;
      let walker = getFocusableTreeWalker($c9e8f80f5bb1841844f54e4ad30b$var$getScopeRoot(scope), {
        tabbable
      }, scope);
      walker.currentNode = $c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(node, scope) ? node : sentinel;
      let previousNode = walker.previousNode();

      if (!previousNode && wrap) {
        walker.currentNode = sentinel;
        previousNode = walker.previousNode();
      }

      if (previousNode) {
        $c9e8f80f5bb1841844f54e4ad30b$var$focusElement(previousNode, true);
      }

      return previousNode;
    }

  };
}

const $c9e8f80f5bb1841844f54e4ad30b$var$focusableElements = ['input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'a[href]', 'area[href]', 'summary', 'iframe', 'object', 'embed', 'audio[controls]', 'video[controls]', '[contenteditable]'];
const $c9e8f80f5bb1841844f54e4ad30b$var$FOCUSABLE_ELEMENT_SELECTOR = $c9e8f80f5bb1841844f54e4ad30b$var$focusableElements.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
$c9e8f80f5bb1841844f54e4ad30b$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const $c9e8f80f5bb1841844f54e4ad30b$var$TABBABLE_ELEMENT_SELECTOR = $c9e8f80f5bb1841844f54e4ad30b$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');

function $c9e8f80f5bb1841844f54e4ad30b$var$getScopeRoot(scope) {
  return scope[0].parentElement;
}

function $c9e8f80f5bb1841844f54e4ad30b$var$useFocusContainment(scopeRef, contain) {
  let focusedNode = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])();
  let raf = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(null);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    let scope = scopeRef.current;

    if (!contain) {
      return;
    } // Handle the Tab key to contain focus within the scope


    let onKeyDown = e => {
      if (e.key !== 'Tab' || e.altKey || e.ctrlKey || e.metaKey) {
        return;
      }

      let focusedElement = document.activeElement;

      if (!$c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(focusedElement, scope)) {
        return;
      }

      let walker = getFocusableTreeWalker($c9e8f80f5bb1841844f54e4ad30b$var$getScopeRoot(scope), {
        tabbable: true
      }, scope);
      walker.currentNode = focusedElement;
      let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();

      if (!nextElement) {
        walker.currentNode = e.shiftKey ? scope[scope.length - 1].nextElementSibling : scope[0].previousElementSibling;
        nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
      }

      e.preventDefault();

      if (nextElement) {
        $c9e8f80f5bb1841844f54e4ad30b$var$focusElement(nextElement, true);
      }
    };

    let onFocus = e => {
      // If a focus event occurs outside the active scope (e.g. user tabs from browser location bar),
      // restore focus to the previously focused node or the first tabbable element in the active scope.
      let isInAnyScope = $c9e8f80f5bb1841844f54e4ad30b$var$isElementInAnyScope(e.target, $c9e8f80f5bb1841844f54e4ad30b$var$scopes);

      if (!isInAnyScope) {
        if (focusedNode.current) {
          focusedNode.current.focus();
        } else if ($c9e8f80f5bb1841844f54e4ad30b$var$activeScope) {
          $c9e8f80f5bb1841844f54e4ad30b$var$focusFirstInScope($c9e8f80f5bb1841844f54e4ad30b$var$activeScope.current);
        }
      } else {
        $c9e8f80f5bb1841844f54e4ad30b$var$activeScope = scopeRef;
        focusedNode.current = e.target;
      }
    };

    let onBlur = e => {
      // Firefox doesn't shift focus back to the Dialog properly without this
      raf.current = requestAnimationFrame(() => {
        // Use document.activeElement instead of e.relatedTarget so we can tell if user clicked into iframe
        let isInAnyScope = $c9e8f80f5bb1841844f54e4ad30b$var$isElementInAnyScope(document.activeElement, $c9e8f80f5bb1841844f54e4ad30b$var$scopes);

        if (!isInAnyScope) {
          $c9e8f80f5bb1841844f54e4ad30b$var$activeScope = scopeRef;
          focusedNode.current = e.target;
          focusedNode.current.focus();
        }
      });
    };

    document.addEventListener('keydown', onKeyDown, false);
    document.addEventListener('focusin', onFocus, false);
    scope.forEach(element => element.addEventListener('focusin', onFocus, false));
    scope.forEach(element => element.addEventListener('focusout', onBlur, false));
    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
      document.removeEventListener('focusin', onFocus, false);
      scope.forEach(element => element.removeEventListener('focusin', onFocus, false));
      scope.forEach(element => element.removeEventListener('focusout', onBlur, false));
    };
  }, [scopeRef, contain]); // eslint-disable-next-line arrow-body-style

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    return () => cancelAnimationFrame(raf.current);
  }, [raf]);
}

function $c9e8f80f5bb1841844f54e4ad30b$var$isElementInAnyScope(element, scopes) {
  for (let scope of scopes.values()) {
    if ($c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(element, scope.current)) {
      return true;
    }
  }

  return false;
}

function $c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(element, scope) {
  return scope.some(node => node.contains(element));
}

function $c9e8f80f5bb1841844f54e4ad30b$var$focusElement(element, scroll) {
  if (scroll === void 0) {
    scroll = false;
  }

  if (element != null && !scroll) {
    try {
      focusSafely(element);
    } catch (err) {// ignore
    }
  } else if (element != null) {
    try {
      element.focus();
    } catch (err) {// ignore
    }
  }
}

function $c9e8f80f5bb1841844f54e4ad30b$var$focusFirstInScope(scope) {
  let sentinel = scope[0].previousElementSibling;
  let walker = getFocusableTreeWalker($c9e8f80f5bb1841844f54e4ad30b$var$getScopeRoot(scope), {
    tabbable: true
  }, scope);
  walker.currentNode = sentinel;
  $c9e8f80f5bb1841844f54e4ad30b$var$focusElement(walker.nextNode());
}

function $c9e8f80f5bb1841844f54e4ad30b$var$useAutoFocus(scopeRef, autoFocus) {
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    if (autoFocus) {
      $c9e8f80f5bb1841844f54e4ad30b$var$activeScope = scopeRef;

      if (!$c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(document.activeElement, $c9e8f80f5bb1841844f54e4ad30b$var$activeScope.current)) {
        $c9e8f80f5bb1841844f54e4ad30b$var$focusFirstInScope(scopeRef.current);
      }
    }
  }, [scopeRef, autoFocus]);
}

function $c9e8f80f5bb1841844f54e4ad30b$var$useRestoreFocus(scopeRef, restoreFocus, contain) {
  // useLayoutEffect instead of useEffect so the active element is saved synchronously instead of asynchronously.
  module_useLayoutEffect(() => {
    let scope = scopeRef.current;
    let nodeToRestore = document.activeElement; // Handle the Tab key so that tabbing out of the scope goes to the next element
    // after the node that had focus when the scope mounted. This is important when
    // using portals for overlays, so that focus goes to the expected element when
    // tabbing out of the overlay.

    let onKeyDown = e => {
      if (e.key !== 'Tab' || e.altKey || e.ctrlKey || e.metaKey) {
        return;
      }

      let focusedElement = document.activeElement;

      if (!$c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(focusedElement, scope)) {
        return;
      } // Create a DOM tree walker that matches all tabbable elements


      let walker = getFocusableTreeWalker(document.body, {
        tabbable: true
      }); // Find the next tabbable element after the currently focused element

      walker.currentNode = focusedElement;
      let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();

      if (!document.body.contains(nodeToRestore) || nodeToRestore === document.body) {
        nodeToRestore = null;
      } // If there is no next element, or it is outside the current scope, move focus to the
      // next element after the node to restore to instead.


      if ((!nextElement || !$c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(nextElement, scope)) && nodeToRestore) {
        walker.currentNode = nodeToRestore; // Skip over elements within the scope, in case the scope immediately follows the node to restore.

        do {
          nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
        } while ($c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(nextElement, scope));

        e.preventDefault();
        e.stopPropagation();

        if (nextElement) {
          $c9e8f80f5bb1841844f54e4ad30b$var$focusElement(nextElement, true);
        } else {
          // If there is no next element, blur the focused element to move focus to the body.
          focusedElement.blur();
        }
      }
    };

    if (!contain) {
      document.addEventListener('keydown', onKeyDown, true);
    }

    return () => {
      if (!contain) {
        document.removeEventListener('keydown', onKeyDown, true);
      }

      if (restoreFocus && nodeToRestore && $c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(document.activeElement, scope)) {
        requestAnimationFrame(() => {
          if (document.body.contains(nodeToRestore)) {
            $c9e8f80f5bb1841844f54e4ad30b$var$focusElement(nodeToRestore);
          }
        });
      }
    };
  }, [scopeRef, restoreFocus, contain]);
}
/**
 * Create a [TreeWalker]{@link https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker}
 * that matches all focusable/tabbable elements.
 */


function getFocusableTreeWalker(root, opts, scope) {
  let selector = opts != null && opts.tabbable ? $c9e8f80f5bb1841844f54e4ad30b$var$TABBABLE_ELEMENT_SELECTOR : $c9e8f80f5bb1841844f54e4ad30b$var$FOCUSABLE_ELEMENT_SELECTOR;
  let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
    acceptNode(node) {
      var _opts$from;

      // Skip nodes inside the starting node.
      if (opts != null && (_opts$from = opts.from) != null && _opts$from.contains(node)) {
        return NodeFilter.FILTER_REJECT;
      }

      if (node.matches(selector) && $ee5e90cbb4a22466973155c14222fa1$export$isElementVisible(node) && (!scope || $c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(node, scope))) {
        return NodeFilter.FILTER_ACCEPT;
      }

      return NodeFilter.FILTER_SKIP;
    }

  });

  if (opts != null && opts.from) {
    walker.currentNode = opts.from;
  }

  return walker;
}
/**
 * Creates a FocusManager object that can be used to move focus within an element.
 */

function createFocusManager(ref) {
  return {
    focusNext(opts) {
      if (opts === void 0) {
        opts = {};
      }

      let root = ref.current;
      let {
        from,
        tabbable,
        wrap
      } = opts;
      let node = from || document.activeElement;
      let walker = getFocusableTreeWalker(root, {
        tabbable
      });

      if (root.contains(node)) {
        walker.currentNode = node;
      }

      let nextNode = walker.nextNode();

      if (!nextNode && wrap) {
        walker.currentNode = root;
        nextNode = walker.nextNode();
      }

      if (nextNode) {
        $c9e8f80f5bb1841844f54e4ad30b$var$focusElement(nextNode, true);
      }

      return nextNode;
    },

    focusPrevious(opts) {
      if (opts === void 0) {
        opts = {};
      }

      let root = ref.current;
      let {
        from,
        tabbable,
        wrap
      } = opts;
      let node = from || document.activeElement;
      let walker = getFocusableTreeWalker(root, {
        tabbable
      });

      if (root.contains(node)) {
        walker.currentNode = node;
      } else {
        let next = $c9e8f80f5bb1841844f54e4ad30b$var$last(walker);

        if (next) {
          $c9e8f80f5bb1841844f54e4ad30b$var$focusElement(next, true);
        }

        return next;
      }

      let previousNode = walker.previousNode();

      if (!previousNode && wrap) {
        walker.currentNode = root;
        previousNode = $c9e8f80f5bb1841844f54e4ad30b$var$last(walker);
      }

      if (previousNode) {
        $c9e8f80f5bb1841844f54e4ad30b$var$focusElement(previousNode, true);
      }

      return previousNode;
    }

  };
}

function $c9e8f80f5bb1841844f54e4ad30b$var$last(walker) {
  let next;
  let last;

  do {
    last = walker.lastChild();

    if (last) {
      next = last;
    }
  } while (last);

  return next;
}

/**
 * Determines whether a focus ring should be shown to indicate keyboard focus.
 * Focus rings are visible only when the user is interacting with a keyboard,
 * not with a mouse, touch, or other input methods.
 */
function useFocusRing(props) {
  if (props === void 0) {
    props = {};
  }

  let {
    autoFocus = false,
    isTextInput,
    within
  } = props;
  let state = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])({
    isFocused: false,
    isFocusVisible: autoFocus || module_isFocusVisible()
  }).current;
  let [isFocusVisibleState, setFocusVisible] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(() => state.isFocused && state.isFocusVisible);

  let updateState = () => setFocusVisible(state.isFocused && state.isFocusVisible);

  let onFocusChange = isFocused => {
    state.isFocused = isFocused;
    updateState();
  };

  useFocusVisibleListener(isFocusVisible => {
    state.isFocusVisible = isFocusVisible;
    updateState();
  }, [], {
    isTextInput
  });
  let {
    focusProps
  } = useFocus({
    isDisabled: within,
    onFocusChange
  });
  let {
    focusWithinProps
  } = useFocusWithin({
    isDisabled: !within,
    onFocusWithinChange: onFocusChange
  });
  return {
    isFocused: state.isFocused,
    isFocusVisible: state.isFocused && isFocusVisibleState,
    focusProps: within ? focusWithinProps : focusProps
  };
}

/**
 * A utility component that applies a CSS class when an element has keyboard focus.
 * Focus rings are visible only when the user is interacting with a keyboard,
 * not with a mouse, touch, or other input methods.
 */
function FocusRing(props) {
  let {
    children,
    focusClass,
    focusRingClass
  } = props;
  let {
    isFocused,
    isFocusVisible,
    focusProps
  } = useFocusRing(props);

  let child = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children.only(children);

  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.cloneElement(child, mergeProps(child.props, extends_extends({}, focusProps, {
    className: clsx_m({
      [focusClass || '']: isFocused,
      [focusRingClass || '']: isFocusVisible
    })
  })));
}

let $e11539c8317b2d21639df611cb5658f$var$FocusableContext = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createContext(null);

function $e11539c8317b2d21639df611cb5658f$var$useFocusableContext(ref) {
  let context = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"])($e11539c8317b2d21639df611cb5658f$var$FocusableContext) || {};
  useSyncRef(context, ref);
  return context;
}
/**
 * Provides DOM props to the nearest focusable child.
 */


function $e11539c8317b2d21639df611cb5658f$var$FocusableProvider(props, ref) {
  let {
    children
  } = props,
      otherProps = _objectWithoutPropertiesLoose(props, ["children"]);

  let context = extends_extends({}, otherProps, {
    ref
  });

  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement($e11539c8317b2d21639df611cb5658f$var$FocusableContext.Provider, {
    value: context
  }, children);
}

let FocusableProvider = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.forwardRef($e11539c8317b2d21639df611cb5658f$var$FocusableProvider);

/**
 * Used to make an element focusable and capable of auto focus.
 */
function useFocusable(props, domRef) {
  let {
    focusProps
  } = useFocus(props);
  let {
    keyboardProps
  } = useKeyboard(props);
  let interactions = mergeProps(focusProps, keyboardProps);
  let domProps = $e11539c8317b2d21639df611cb5658f$var$useFocusableContext(domRef);
  let interactionProps = props.isDisabled ? {} : domProps;
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    if (props.autoFocus && domRef.current) {
      domRef.current.focus();
    }
  }, [props.autoFocus, domRef]);
  return {
    focusableProps: mergeProps(extends_extends({}, interactions, {
      tabIndex: props.excludeFromTabOrder && !props.isDisabled ? -1 : undefined
    }), interactionProps)
  };
}
//# sourceMappingURL=module.js.map

// CONCATENATED MODULE: ./node_modules/@react-aria/radio/dist/module.js







/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
const $a7d0e5df3871fb1bfdb437cffdabab2a$export$radioGroupNames = new WeakMap();

/**
 * Provides the behavior and accessibility implementation for an individual
 * radio button in a radio group.
 * @param props - Props for the radio.
 * @param state - State for the radio group, as returned by `useRadioGroupState`.
 * @param ref - Ref to the HTML input element.
 */
function useRadio(props, state, ref) {
  let {
    value,
    isRequired,
    children,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby
  } = props;
  const isDisabled = props.isDisabled || state.isDisabled; // Individual radios cannot be readonly

  const isReadOnly = state.isReadOnly;
  let hasChildren = children != null;
  let hasAriaLabel = ariaLabel != null || ariaLabelledby != null;

  if (!hasChildren && !hasAriaLabel) {
    console.warn('If you do not provide children, you must specify an aria-label for accessibility');
  }

  let checked = state.selectedValue === value;

  let onChange = e => {
    e.stopPropagation();
    state.setSelectedValue(value);
  };

  let {
    pressProps
  } = usePress({
    isDisabled
  });
  let {
    focusableProps
  } = useFocusable(mergeProps(props, {
    onFocus: () => state.setLastFocusedValue(value)
  }), ref);
  let interactions = mergeProps(pressProps, focusableProps);
  let domProps = filterDOMProps(props, {
    labelable: true
  });
  let tabIndex = state.lastFocusedValue === value || state.lastFocusedValue == null ? 0 : -1;

  if (isDisabled) {
    tabIndex = undefined;
  }

  return {
    inputProps: mergeProps(domProps, extends_extends({}, interactions, {
      type: 'radio',
      name: $a7d0e5df3871fb1bfdb437cffdabab2a$export$radioGroupNames.get(state),
      tabIndex,
      disabled: isDisabled,
      'aria-readonly': isReadOnly || undefined,
      required: isRequired,
      checked,
      value,
      onChange
    }))
  };
}

/**
 * Provides the behavior and accessibility implementation for a radio group component.
 * Radio groups allow users to select a single item from a list of mutually exclusive options.
 * @param props - Props for the radio group.
 * @param state - State for the radio group, as returned by `useRadioGroupState`.
 */
function useRadioGroup(props, state) {
  let {
    name,
    validationState,
    isReadOnly,
    isRequired,
    isDisabled,
    orientation = 'vertical'
  } = props;
  let {
    direction
  } = useLocale();
  let {
    labelProps,
    fieldProps
  } = useLabel(extends_extends({}, props, {
    // Radio group is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: 'span'
  }));
  let domProps = filterDOMProps(props, {
    labelable: true
  }); // When the radio group loses focus, reset the focusable radio to null if
  // there is no selection. This allows tabbing into the group from either
  // direction to go to the first or last radio.

  let {
    focusWithinProps
  } = useFocusWithin({
    onBlurWithin() {
      if (!state.selectedValue) {
        state.setLastFocusedValue(null);
      }
    }

  });

  let onKeyDown = e => {
    let nextDir;

    switch (e.key) {
      case 'ArrowRight':
        if (direction === 'rtl' && orientation !== 'vertical') {
          nextDir = 'prev';
        } else {
          nextDir = 'next';
        }

        break;

      case 'ArrowLeft':
        if (direction === 'rtl' && orientation !== 'vertical') {
          nextDir = 'next';
        } else {
          nextDir = 'prev';
        }

        break;

      case 'ArrowDown':
        nextDir = 'next';
        break;

      case 'ArrowUp':
        nextDir = 'prev';
        break;

      default:
        return;
    }

    e.preventDefault();
    let walker = getFocusableTreeWalker(e.currentTarget, {
      from: e.target
    });
    let nextElem;

    if (nextDir === 'next') {
      nextElem = walker.nextNode();

      if (!nextElem) {
        walker.currentNode = e.currentTarget;
        nextElem = walker.firstChild();
      }
    } else {
      nextElem = walker.previousNode();

      if (!nextElem) {
        walker.currentNode = e.currentTarget;
        nextElem = walker.lastChild();
      }
    }

    if (nextElem) {
      // Call focus on nextElem so that keyboard navigation scrolls the radio into view
      nextElem.focus();
      state.setSelectedValue(nextElem.value);
    }
  };

  let groupName = module_useId(name);
  $a7d0e5df3871fb1bfdb437cffdabab2a$export$radioGroupNames.set(state, groupName);
  return {
    radioGroupProps: mergeProps(domProps, extends_extends({
      // https://www.w3.org/TR/wai-aria-1.2/#radiogroup
      role: 'radiogroup',
      onKeyDown,
      'aria-invalid': validationState === 'invalid' || undefined,
      'aria-errormessage': props['aria-errormessage'],
      'aria-readonly': isReadOnly || undefined,
      'aria-required': isRequired || undefined,
      'aria-disabled': isDisabled || undefined,
      'aria-orientation': orientation
    }, fieldProps, focusWithinProps)),
    labelProps
  };
}
//# sourceMappingURL=module.js.map

// CONCATENATED MODULE: ./node_modules/@react-aria/visually-hidden/dist/module.js





const $f431c2c11cc559fa3c5864caafbcfd19$var$styles = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  margin: '0 -1px -1px 0',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  width: 1,
  whiteSpace: 'nowrap'
};

/**
 * Provides props for an element that hides its children visually
 * but keeps content visible to assistive technology.
 */
function useVisuallyHidden(props) {
  if (props === void 0) {
    props = {};
  }

  let {
    style,
    isFocusable
  } = props;
  let [isFocused, setFocused] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false);
  let {
    focusProps
  } = useFocus({
    isDisabled: !isFocusable,
    onFocusChange: setFocused
  }); // If focused, don't hide the element.

  let combinedStyles = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useMemo"])(() => {
    if (isFocused) {
      return style;
    } else if (style) {
      return extends_extends({}, $f431c2c11cc559fa3c5864caafbcfd19$var$styles, style);
    } else {
      return $f431c2c11cc559fa3c5864caafbcfd19$var$styles;
    }
  }, [isFocused]);
  return {
    visuallyHiddenProps: extends_extends({}, focusProps, {
      style: combinedStyles
    })
  };
}
/**
 * VisuallyHidden hides its children visually, while keeping content visible
 * to screen readers.
 */

function VisuallyHidden(props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let {
    children,
    elementType: Element = 'div'
  } = props,
      otherProps = _objectWithoutPropertiesLoose(props, ["children", "elementType", "isFocusable", "style"]);

  let {
    visuallyHiddenProps
  } = useVisuallyHidden(props);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Element, mergeProps(otherProps, visuallyHiddenProps), children);
}
//# sourceMappingURL=module.js.map

// CONCATENATED MODULE: ./src/Feedback/FeedbackButton.js
function FeedbackButton_extends() { FeedbackButton_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return FeedbackButton_extends.apply(this, arguments); }

function FeedbackButton_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsxRuntime classic */

/** @jsx jsx */





var FeedbackButton_ref =  true ? {
  name: "1fo56k",
  styles: "display:flex;position:absolute;width:6rem"
} : undefined;

const FeedbackButton = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.forwardRef(({
  open,
  setOpen,
  ...props
}, ref) => {
  const combinedProps = {
    variant: "secondary",
    label: "Feedback",
    ...props
  };
  const onClick = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])(e => {
    e.preventDefault();
    setOpen(!open);
  }, [setOpen]);
  return Object(react_["jsx"])(src_Button, FeedbackButton_extends({
    ref: ref,
    css: FeedbackButton_ref,
    onClick: onClick
  }, combinedProps));
});
/* harmony default export */ var Feedback_FeedbackButton = (FeedbackButton);
// CONCATENATED MODULE: ./node_modules/@radix-ui/react-popover/dist/index.module.js
const[dist_index_module_P,dist_index_module_x]=createContext("Popover");const Popover=e=>{const{children:o,open:t,defaultOpen:n,onOpenChange:a,modal:s=!1}=e,c=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](null),[u,i]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](!1),[l=!1,m]=useControllableState({prop:t,defaultProp:n,onChange:a});/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](react_popper_dist_index_module_Root,null,/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](dist_index_module_P,{contentId:useId(),triggerRef:c,open:l,onOpenChange:m,onOpenToggle:external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"]((()=>m((e=>!e))),[m]),hasCustomAnchor:u,onCustomAnchorAdd:external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"]((()=>i(!0)),[]),onCustomAnchorRemove:external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"]((()=>i(!1)),[]),modal:s},o))};/*#__PURE__*/const PopoverAnchor=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,o)=>{const r=dist_index_module_x("PopoverAnchor"),{onCustomAnchorAdd:t,onCustomAnchorRemove:n}=r;return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>(t(),()=>n())),[t,n]),/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Anchor,extends_extends({},e,{ref:o}))}));/*#__PURE__*/const dist_index_module_A="button";const PopoverTrigger=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,o)=>{const{as:r=dist_index_module_A,...a}=e,s=dist_index_module_x("PopoverTrigger"),c=useComposedRefs(o,s.triggerRef),u=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Primitive,extends_extends({type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":react_popover_dist_index_module_F(s.open)},a,{as:r,ref:c,onClick:composeEventHandlers(e.onClick,s.onOpenToggle)}));return s.hasCustomAnchor?u:/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Anchor,{as:Slot},u)}));/*#__PURE__*/const PopoverContent=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,o)=>{const{forceMount:r,...t}=e,n=dist_index_module_x("PopoverContent");/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Presence,{present:r||n.open},n.modal?/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](react_popover_dist_index_module_E,extends_extends({},t,{ref:o})):/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_h,extends_extends({},t,{ref:o})))}));/*#__PURE__*/const react_popover_dist_index_module_E=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((r,t)=>{const{portalled:n=!0,...a}=r,s=dist_index_module_x("PopoverContent"),c=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](null),i=useComposedRefs(t,c),l=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](!1);external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{const o=c.current;if(o)return hideOthers(o)}),[]);const p=n?Portal:external_root_React_commonjs2_react_commonjs_react_amd_react_["Fragment"];/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](p,null,/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Combination,null,/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](dist_index_module_O,extends_extends({},a,{ref:i,trapFocus:s.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:composeEventHandlers(r.onCloseAutoFocus,(e=>{var o;e.preventDefault(),l.current||null===(o=s.triggerRef.current)||void 0===o||o.focus()})),onPointerDownOutside:composeEventHandlers(r.onPointerDownOutside,(e=>{const o=e.detail.originalEvent,r=0===o.button&&!0===o.ctrlKey,t=2===o.button||r;l.current=t}),{checkForDefaultPrevented:!1}),onFocusOutside:composeEventHandlers(r.onFocusOutside,(e=>e.preventDefault()),{checkForDefaultPrevented:!1})}))))})),index_module_h=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,o)=>{const{portalled:r=!0,...t}=e,n=dist_index_module_x("PopoverContent"),a=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](!1),s=r?Portal:external_root_React_commonjs2_react_commonjs_react_amd_react_["Fragment"];/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](s,null,/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](dist_index_module_O,extends_extends({},t,{ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var r,t;(null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,o),o.defaultPrevented)||(a.current||null===(t=n.triggerRef.current)||void 0===t||t.focus(),o.preventDefault());a.current=!1},onInteractOutside:o=>{var r,t;null===(r=e.onInteractOutside)||void 0===r||r.call(e,o),o.defaultPrevented||(a.current=!0);const s=o.target;(null===(t=n.triggerRef.current)||void 0===t?void 0:t.contains(s))&&o.preventDefault()}})))})),dist_index_module_O=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,o)=>{const{trapFocus:r,onOpenAutoFocus:n,onCloseAutoFocus:a,disableOutsidePointerEvents:s,onEscapeKeyDown:u,onPointerDownOutside:d,onFocusOutside:m,onInteractOutside:f,...v}=e,P=dist_index_module_x("PopoverContent");return useFocusGuards(),/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](FocusScope,{as:Slot,loop:!0,trapped:r,onMountAutoFocus:n,onUnmountAutoFocus:a},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](DismissableLayer,{as:Slot,disableOutsidePointerEvents:s,onInteractOutside:f,onEscapeKeyDown:u,onPointerDownOutside:d,onFocusOutside:m,onDismiss:()=>P.onOpenChange(!1)},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_Content,extends_extends({"data-state":react_popover_dist_index_module_F(P.open),role:"dialog",id:P.contentId},v,{ref:o,style:{...v.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)"}}))))})),dist_index_module_R="button";const PopoverClose=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,o)=>{const{as:r=dist_index_module_R,...t}=e,a=dist_index_module_x("PopoverClose");/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Primitive,extends_extends({type:"button"},t,{as:r,ref:o,onClick:composeEventHandlers(e.onClick,(()=>a.onOpenChange(!1)))}))}));/*#__PURE__*/const PopoverArrow=extendPrimitive(index_module_Arrow,{displayName:"PopoverArrow"});function react_popover_dist_index_module_F(e){return e?"open":"closed"}const react_popover_dist_index_module_Root=Popover;const dist_index_module_Anchor=PopoverAnchor;const index_module_Trigger=PopoverTrigger;const react_popover_dist_index_module_Content=PopoverContent;const Close=PopoverClose;const react_popover_dist_index_module_Arrow=PopoverArrow;
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/react-use/esm/misc/util.js
var noop = function () { };
function on(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.addEventListener) {
        obj.addEventListener.apply(obj, args);
    }
}
function off(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.removeEventListener) {
        obj.removeEventListener.apply(obj, args);
    }
}
var util_isBrowser = typeof window !== 'undefined';
var isNavigator = typeof navigator !== 'undefined';

// CONCATENATED MODULE: ./node_modules/react-use/esm/useClickAway.js


var defaultEvents = ['mousedown', 'touchstart'];
var useClickAway = function (ref, onClickAway, events) {
    if (events === void 0) { events = defaultEvents; }
    var savedCallback = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(onClickAway);
    Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
        savedCallback.current = onClickAway;
    }, [onClickAway]);
    Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
        var handler = function (event) {
            var el = ref.current;
            el && !el.contains(event.target) && savedCallback.current(event);
        };
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var eventName = events_1[_i];
            on(document, eventName, handler);
        }
        return function () {
            for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {
                var eventName = events_2[_i];
                off(document, eventName, handler);
            }
        };
    }, [events, ref]);
};
/* harmony default export */ var esm_useClickAway = (useClickAway);

// CONCATENATED MODULE: ./src/Feedback/index.js
function Feedback_extends() { Feedback_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Feedback_extends.apply(this, arguments); }

function Feedback_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsxRuntime classic */

/** @jsx jsx */




















const EMOJIS = [{
  code: "f929",
  char: "🤩",
  svg: f929,
  label: "very-happy"
}, {
  code: "f600",
  char: "🙂",
  svg: f600,
  label: "happy"
}, {
  code: "f615",
  char: "😕",
  svg: f615,
  label: "meh"
}, {
  code: "f62d",
  char: "😭",
  svg: f62d,
  label: "unhappy"
}];
let RadioContext = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createContext(null); // https://react-spectrum.adobe.com/react-aria/useRadioGroup.html#example

var Feedback_ref =  true ? {
  name: "34i93t",
  styles: "display:flex;> :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.5rem * var(--tw-space-x-reverse));margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));}"
} : undefined;

function EmojiRadioGroup(props) {
  let {
    children,
    label
  } = props;
  let state = props.emojiState;
  let {
    radioGroupProps,
    labelProps
  } = useRadioGroup(props, state);
  return Object(react_["jsx"])("div", Feedback_extends({}, radioGroupProps, {
    css: Feedback_ref
  }), Object(react_["jsx"])(RadioContext.Provider, {
    value: state
  }, children));
}

var Feedback_ref2 =  true ? {
  name: "1vcob1d",
  styles: "display:flex;justify-content:center;align-items:center"
} : undefined;

function EmojiRadio(props) {
  let {
    children
  } = props;
  let state = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.useContext(RadioContext);
  let ref = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.useRef(null);
  let {
    inputProps
  } = useRadio(props, state, ref);
  let {
    isFocusVisible,
    focusProps
  } = useFocusRing();
  const selected = state.selectedValue === props.value;
  return Object(react_["jsx"])("label", {
    onFocus: props.onFocus,
    css: ["--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));display:inline-flex;background-color:transparent;padding:0px;margin:0px;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:100ms;border-width:1px;--tw-border-opacity:1;border-color:rgba(234, 234, 234, var(--tw-border-opacity));cursor:pointer;text-align:center;border-radius:9999px;:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));}:active{--tw-scale-x:1.05;--tw-scale-y:1.05;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));}outline:2px solid transparent;outline-offset:2px;:focus{outline:2px solid transparent;outline-offset:2px;}", selected && {
      "--tw-scale-x": "1.1",
      "--tw-scale-y": "1.1",
      "borderWidth": "1px",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
      "--tw-border-opacity": "1",
      "borderColor": "rgba(247, 185, 85, var(--tw-border-opacity))"
    }, isFocusVisible && {
      "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
      "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
      "boxShadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)"
    },  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined]
  }, Object(react_["jsx"])(VisuallyHidden, null, Object(react_["jsx"])("input", Feedback_extends({}, inputProps, focusProps, {
    ref: ref
  }))), Object(react_["jsx"])("div", null, Object(react_["jsx"])("span", {
    css: Feedback_ref2,
    style: {
      width: 32,
      height: 32,
      borderRadius: "50%"
    }
  }, children)));
}

var Feedback_ref3 =  true ? {
  name: "zhlx2k",
  styles: "height:auto;--tw-border-opacity:1;border-color:rgba(255, 255, 255, var(--tw-border-opacity));appearance:none;border-width:0px;display:flex;line-height:1.25rem;font-size:0.875rem;border-radius:5px;--tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));resize:none;z-index:50;--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity));flex-direction:column;justify-content:flex-start;position:relative;:hover{--tw-border-opacity:1;border-color:rgba(0, 0, 0, var(--tw-border-opacity));}:focus{--tw-border-opacity:1;border-color:rgba(0, 0, 0, var(--tw-border-opacity));}:active{--tw-border-opacity:1;border-color:rgba(0, 0, 0, var(--tw-border-opacity));}"
} : undefined;

var Feedback_ref4 =  true ? {
  name: "dweznn",
  styles: "padding:1rem;position:relative"
} : undefined;

var Feedback_ref5 =  true ? {
  name: "1gok8e8",
  styles: "margin-bottom:0.5rem"
} : undefined;

var Feedback_ref6 =  true ? {
  name: "1iasts7",
  styles: "display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1rem;text-align:center;z-index:50"
} : undefined;

var _ref7 =  true ? {
  name: "1iasts7",
  styles: "display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1rem;text-align:center;z-index:50"
} : undefined;

var _ref8 =  true ? {
  name: "1jscwas",
  styles: "width:100%;height:4rem;padding:1rem;display:flex;justify-content:flex-end;align-items:center;gap:1rem;--tw-bg-opacity:1;background-color:rgba(244, 245, 247, var(--tw-bg-opacity));border-top-width:1px;--tw-border-opacity:1;border-color:rgba(234, 234, 234, var(--tw-border-opacity));pointer-events:auto"
} : undefined;

var _ref9 =  true ? {
  name: "1h7ldow",
  styles: "width:1.25rem;height:1.25rem"
} : undefined;

var _ref10 =  true ? {
  name: "1o3nkn",
  styles: "margin-left:auto"
} : undefined;

const Feedback = ({
  url,
  email,
  enableFeedbackText = true,
  enableEmoji = true,
  side = "bottom",
  sideOffset = 5,
  align = "start",
  emailProps,
  feedbackTextProps,
  submitButtonProps,
  dryRun = false,
  children,
  ...props
}) => {
  const [loading, setLoading] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false);
  const [open, setOpen] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false);
  const [success, setSuccess] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false);
  const [errorMessage, setErrorMessage] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])("");
  const enableEmail = !email;
  const emailInitialValue = email ? email : "";
  const [emailValue, setEmailValue] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(emailInitialValue);
  const [feedbackText, setFeedbackText] = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])("");
  const emojiState = useRadioGroupState(props);
  const formRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])();
  const combinedEmailProps = {
    required: true,
    label: "Email",
    autoFocus: true,
    placeholder: "Your email address...",
    ...emailProps
  };
  const combinedFeedbackTextProps = {
    label: "Feedback",
    placeholder: "Your feedback...",
    required: true,
    rows: 3,
    "aria-label": "Feedback input",
    // Disable the Grammarly extension on this textarea
    "data-gramm-editor": false,
    ...feedbackTextProps
  };
  const combinedSubmitButtonProps = {
    label: "Send",
    variant: "brand-p",
    ...submitButtonProps
  };
  const onErrorDismiss = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])(() => {
    setErrorMessage("");
  }, []);
  const onSuccessDismiss = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])(() => {
    setSuccess(false);
  }, []);
  const closeFeedbackForm = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])(() => {
    setOpen(false);
    onErrorDismiss();
    onSuccessDismiss();
  }, [onErrorDismiss, onSuccessDismiss]);

  const onSubmit = event => {
    event.preventDefault();

    if (feedbackText.trim() === "") {
      setErrorMessage("Your feedback can't be empty");
      return;
    }

    setLoading(true);
    const body = {
      url: url,
      note: feedbackText,
      email: emailValue,
      emotion: emojiState.selectedValue
    };
    Promise.resolve().then(() => {
      if (dryRun) {
        return;
      }

      return fetch(url, {
        method: "POST",
        body: JSON.stringify(body)
      });
    }).then(response => {
      if (!response.ok) {
        throw new Error(`Sorry, we couldn't send your feedback. Status: ${response.status}`);
      }

      return response.json();
    }).then(() => {
      // Reset the textarea feedbackText on success
      setLoading(false);
      setSuccess(true);
      setEmailValue(emailInitialValue);
      setFeedbackText("");
    }).catch(err => {
      setLoading(false);
      setErrorMessage(err.message);
    });
  };

  const onKeyDown = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])(e => {
    if (e.key === "Escape") {
      closeFeedbackForm();
    } else if (e.key === "Enter" && e.metaKey) {
      onSubmit(e);
    }
  }, [closeFeedbackForm, onSubmit]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);
  esm_useClickAway(formRef, closeFeedbackForm);
  const disableInputs = Boolean(loading || errorMessage);

  const handleTriggerButton = tooglePopover => {
    //if user have errorMessage or a success and are closing the popover on buttonTrigger clear error and success
    if ((errorMessage || success) && !tooglePopover) {
      closeFeedbackForm();
    }

    setOpen(tooglePopover);
  };

  const TriggerButton = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.forwardRef((_, ref) => children ? children({
    open,
    setOpen: handleTriggerButton,
    ref: ref
  }) : Object(react_["jsx"])(Feedback_FeedbackButton, {
    open: open,
    setOpen: handleTriggerButton,
    ref: ref
  }));
  return Object(react_["jsx"])("div", Feedback_extends({
    title: "Share any feedback about our products and services",
    css: ["padding:0px;width:6rem;position:relative;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;:focus{outline:2px solid transparent;outline-offset:2px;}:active{outline:2px solid transparent;outline-offset:2px;}", errorMessage && {
      "color": "transparent"
    },  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined],
    "aria-expanded": open,
    "data-testid": "container-popover"
  }, props), Object(react_["jsx"])(react_popover_dist_index_module_Root, {
    onOpenChange: closeFeedbackForm,
    open: open
  }, Object(react_["jsx"])(index_module_Trigger, {
    as: TriggerButton
  }), Object(react_["jsx"])(react_popover_dist_index_module_Content, {
    sideOffset: sideOffset,
    side: side,
    align: align
  }, Object(react_["jsx"])("form", {
    ref: formRef,
    css: Feedback_ref3,
    style: {
      width: '22rem'
    },
    onSubmit: onSubmit,
    "data-testid": "form"
  }, !errorMessage && !success && Object(react_["jsx"])("div", {
    css: Feedback_ref4
  }, enableEmail && Object(react_["jsx"])("div", {
    css: Feedback_ref5
  }, Object(react_["jsx"])(src_Input, Feedback_extends({
    id: "feedback-email",
    type: "email",
    disabled: disableInputs,
    onChange: setEmailValue,
    value: emailValue
  }, combinedEmailProps))), enableFeedbackText && Object(react_["jsx"])("div", {
    className: "input"
  }, Object(react_["jsx"])(src_Textarea, Feedback_extends({
    id: "feedback-text",
    value: feedbackText,
    onChange: e => setFeedbackText(e),
    disabled: disableInputs // Disable the Grammarly extension on this textarea
    ,
    textareaClassName: classnames_default()("feedback-input", {
      "text-brand-gray": loading
    })
  }, combinedFeedbackTextProps)))), errorMessage && Object(react_["jsx"])("div", {
    css: Feedback_ref6
  }, Object(react_["jsx"])(Typography_Text, {
    is: "p",
    small: true,
    color: "text-red-600",
    style: {
      marginBottom: "8px"
    }
  }, errorMessage), Object(react_["jsx"])(src_Button, {
    type: "minimal",
    onClick: e => {
      e.preventDefault();
      onErrorDismiss();
    },
    autoFocus: true,
    label: "Go back"
  })), success && Object(react_["jsx"])("div", {
    css: _ref7
  }, Object(react_["jsx"])(Typography_Text, {
    small: true,
    is: "p"
  }, "Your feedback has been received!"), Object(react_["jsx"])(Typography_Text, {
    small: true,
    is: "p"
  }, "Thank you for your help.")), !success && !errorMessage && Object(react_["jsx"])("div", {
    css: _ref8
  }, enableEmoji && Object(react_["jsx"])("span", {
    className: "emojis"
  }, Object(react_["jsx"])(EmojiRadioGroup, {
    label: "Select an emoji",
    emojiState: emojiState
  }, EMOJIS.map(emoji => {
    const SvgComponent = emoji.svg;
    return Object(react_["jsx"])(EmojiRadio, {
      key: emoji.char,
      value: emoji.char,
      label: emoji.label
    }, Object(react_["jsx"])(SvgComponent, {
      css: _ref9
    }));
  }))), Object(react_["jsx"])("span", {
    css: _ref10
  }, Object(react_["jsx"])(src_Button, Feedback_extends({
    disabled: loading,
    "data-testid": "submit-button",
    type: "submit"
  }, combinedSubmitButtonProps))))))));
};

Feedback.propTypes = {
  /**
   Show text area to collect feedback text
   */
  enableFeedbackText: prop_types_default.a.bool,

  /**
   Show emoji selection buttons
   */
  enableEmoji: prop_types_default.a.bool,

  /**
   Don't make the http request
   */
  dryRun: prop_types_default.a.bool,

  /**
   URL to make the POST request
   */
  url: prop_types_default.a.string,

  /**
   Don't show the email input field and use the specified email instead
   */
  email: prop_types_default.a.string,

  /**
   Props to pass on to the email input field
   */
  emailProps: prop_types_default.a.any,

  /**
   Props to pass on to the feedback text area
   */
  feedbackTextProps: prop_types_default.a.any,

  /**
   Props to pass on to the submit button
   */
  submitButtonProps: prop_types_default.a.any,

  /**
   The preferred side of the anchor to render against when open.
  */
  side: prop_types_default.a.oneOf(["top", "right", "bottom", "left"]),

  /**
   The distance in pixels from the anchor.
  */
  sideOffset: prop_types_default.a.number,

  /**
    The preferred alignment against the anchor. May change when collisions occur.
  */
  align: prop_types_default.a.oneOf(["start", "center", "end"])
};
/* harmony default export */ var src_Feedback = (Feedback);
// CONCATENATED MODULE: ./src/Typography/UnorderedList.js
function UnorderedList_extends() { UnorderedList_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return UnorderedList_extends.apply(this, arguments); }




class UnorderedList_UnorderedList extends external_root_React_commonjs2_react_commonjs_react_amd_react_["PureComponent"] {
  render() {
    const {
      children,
      ...props
    } = this.props;
    const finalChildren = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children.map(children, child => {
      if (! /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(child)) {
        return child;
      }

      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.cloneElement(child, { ...child.props
      });
    });
    return Object(react_["jsx"])("ul", UnorderedList_extends({
      className: classnames_default()("leading-normal list-disc p-0 m-0 ml-4", {})
    }, props), finalChildren);
  }

}
// CONCATENATED MODULE: ./src/Typography/ListItem.js
function ListItem_extends() { ListItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ListItem_extends.apply(this, arguments); }

function ListItem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class ListItem_ListItem extends external_root_React_commonjs2_react_commonjs_react_amd_react_["PureComponent"] {
  render() {
    const {
      children,
      ...props
    } = this.props;
    return Object(react_["jsx"])(Typography_Text, ListItem_extends({
      is: "li"
    }, props), children);
  }

}

ListItem_defineProperty(ListItem_ListItem, "propTypes", { ...Typography_Text.propTypes
});
// CONCATENATED MODULE: ./node_modules/@radix-ui/react-tabs/dist/index.module.js
const[react_tabs_dist_index_module_l,dist_index_module_u]=createContext("Tabs");const Tabs=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((t,a)=>{const{value:i,onValueChange:n,defaultValue:s,orientation:u="horizontal",dir:b="ltr",activationMode:m="automatic",...f}=t,[p,v]=useControllableState({prop:i,onChange:n,defaultProp:s});/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](react_tabs_dist_index_module_l,{baseId:useId(),value:p,onValueChange:v,orientation:u,dir:b,activationMode:m},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Primitive,extends_extends({"data-orientation":u},f,{ref:a})))}));/*#__PURE__*/const dist_index_module_b="div";const TabsList=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,a)=>{const{as:o=dist_index_module_b,loop:r=!0,...i}=e,n=dist_index_module_u("TabsList");/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](RovingFocusGroup,extends_extends({role:"tablist",orientation:n.orientation,dir:n.dir,loop:r},i,{as:o,ref:a}))}));/*#__PURE__*/const react_tabs_dist_index_module_m="div";const TabsTrigger=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,t)=>{const{as:o=react_tabs_dist_index_module_m,value:r,disabled:n=!1,...l}=e,b=dist_index_module_u("TabsTrigger"),v=react_tabs_dist_index_module_f(b.baseId,r),x=react_tabs_dist_index_module_p(b.baseId,r),T=r===b.value,g=useCallbackRef((()=>b.onValueChange(r)));/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](RovingFocusItem,extends_extends({role:"tab","aria-selected":T,"aria-controls":x,"aria-disabled":n||void 0,"data-state":T?"active":"inactive","data-disabled":n?"":void 0,id:v},l,{focusable:!n,active:T,as:o,ref:t,onKeyDown:composeEventHandlers(e.onKeyDown,(e=>{n||" "!==e.key&&"Enter"!==e.key||g()})),onMouseDown:composeEventHandlers(e.onMouseDown,(e=>{n||0!==e.button||!1!==e.ctrlKey||g()})),onFocus:composeEventHandlers(e.onFocus,(()=>{const e="manual"!==b.activationMode;T||n||!e||g()}))}))}));/*#__PURE__*/const TabsContent=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,t)=>{const{value:a,...r}=e,i=dist_index_module_u("TabsContent"),n=react_tabs_dist_index_module_f(i.baseId,a),s=react_tabs_dist_index_module_p(i.baseId,a),l=a===i.value;/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Primitive,extends_extends({"data-state":l?"active":"inactive","data-orientation":i.orientation,role:"tabpanel","aria-labelledby":n,hidden:!l,id:s,tabIndex:0},r,{ref:t}))}));/*#__PURE__*/function react_tabs_dist_index_module_f(e,t){return`${e}-trigger-${t}`}function react_tabs_dist_index_module_p(e,t){return`${e}-content-${t}`}const react_tabs_dist_index_module_Root=Tabs;const List=TabsList;const dist_index_module_Trigger=TabsTrigger;const react_tabs_dist_index_module_Content=TabsContent;
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./src/Tabs/index.js


function Tabs_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }



/** @jsxRuntime classic */

/** @jsx jsx */




const Tabs_Tabs = /*#__PURE__*/emotion_styled_base_browser_esm(react_tabs_dist_index_module_Root,  true ? {
  target: "e1klorew3"
} : undefined)(() => [{
  "display": "flex",
  "flexDirection": "column"
}],  true ? "" : undefined);

const Tabs_TabsList = /*#__PURE__*/emotion_styled_base_browser_esm(List,  true ? {
  target: "e1klorew2"
} : undefined)(() => [{
  "display": "flex",
  "flexShrink": "0",
  "borderBottomWidth": "1px",
  "--tw-border-opacity": "1",
  "borderColor": "rgba(229, 231, 235, var(--tw-border-opacity))"
}],  true ? "" : undefined);

var Tabs_ref =  true ? {
  name: "11ymp0m",
  styles: "&[role=\"tab\"]:first-of-type{padding-left:0;}&[data-state=\"active\"]{--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity));--tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); box-shadow:inset 0 -1px 0 0 currentColor,0 1px 0 0 currentColor;}"
} : undefined;

const TabsTab = /*#__PURE__*/emotion_styled_base_browser_esm(dist_index_module_Trigger,  true ? {
  target: "e1klorew1"
} : undefined)(() => [{
  "transitionProperty": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
  "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
  "transitionDuration": "150ms",
  "flexShrink": "0",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "paddingLeft": "0.25rem",
  "paddingRight": "0.25rem",
  "marginRight": "1rem",
  "--tw-text-opacity": "1",
  "color": "rgba(102, 102, 102, var(--tw-text-opacity))",
  "userSelect": "none",
  "outline": "2px solid transparent",
  "outlineOffset": "2px",
  "cursor": "pointer",
  "fontWeight": "400",
  "fontSize": "0.875rem",
  "lineHeight": "1.25rem"
}, {
  ":hover": {
    "--tw-text-opacity": "1",
    "color": "rgba(0, 0, 0, var(--tw-text-opacity))"
  }
}, Tabs_ref],  true ? "" : undefined);

const TabsPanel = /*#__PURE__*/emotion_styled_base_browser_esm(react_tabs_dist_index_module_Content,  true ? {
  target: "e1klorew0"
} : undefined)(() => [{
  "flexGrow": "1",
  "padding": "1.5rem"
}],  true ? "" : undefined);


// CONCATENATED MODULE: ./src/index.js























/***/ })
/******/ ]);
});