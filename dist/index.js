(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("@emotion/react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "@emotion/react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["metal-ui"] = factory(require("react"), require("@emotion/react"), require("react-dom"));
	else
		root["metal-ui"] = factory(root["React"], root["@emotion/react"], root["ReactDOM"]);
})((typeof window !== 'undefined' ? window : this), function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__5__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
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
  module.exports = __webpack_require__(24)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
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
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var AlgoliaSearchHelper = __webpack_require__(26);

var SearchParameters = __webpack_require__(14);
var SearchResults = __webpack_require__(15);

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
algoliasearchHelper.version = __webpack_require__(20);

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
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(7);
var defaultsPure = __webpack_require__(10);
var intersection = __webpack_require__(27);
var find = __webpack_require__(8);
var valToNumber = __webpack_require__(28);
var omit = __webpack_require__(11);
var objectHasKeys = __webpack_require__(12);
var isValidUserToken = __webpack_require__(29);

var RefinementList = __webpack_require__(30);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(7);
var defaultsPure = __webpack_require__(10);
var orderBy = __webpack_require__(16);
var compact = __webpack_require__(31);
var find = __webpack_require__(8);
var findIndex = __webpack_require__(32);
var formatSort = __webpack_require__(17);

var generateHierarchicalTree = __webpack_require__(33);

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
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = '3.4.4';


/***/ }),
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/*! algoliasearch-lite.umd.js | 4.8.6 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */
!function(e,t){ true?module.exports=t():undefined}(this,(function(){"use strict";function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(r){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){e(r,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e){var t,r="algoliasearch-client-js-".concat(e.key),n=function(){return void 0===t&&(t=e.localStorage||window.localStorage),t},a=function(){return JSON.parse(n().getItem(r)||"{}")};return{get:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then((function(){var r=JSON.stringify(e),n=a()[r];return Promise.all([n||t(),void 0!==n])})).then((function(e){var t=o(e,2),n=t[0],a=t[1];return Promise.all([n,a||r.miss(n)])})).then((function(e){return o(e,1)[0]}))},set:function(e,t){return Promise.resolve().then((function(){var o=a();return o[JSON.stringify(e)]=t,n().setItem(r,JSON.stringify(o)),t}))},delete:function(e){return Promise.resolve().then((function(){var t=a();delete t[JSON.stringify(e)],n().setItem(r,JSON.stringify(t))}))},clear:function(){return Promise.resolve().then((function(){n().removeItem(r)}))}}}function i(e){var t=a(e.caches),r=t.shift();return void 0===r?{get:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},n=t();return n.then((function(e){return Promise.all([e,r.miss(e)])})).then((function(e){return o(e,1)[0]}))},set:function(e,t){return Promise.resolve(t)},delete:function(e){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return r.get(e,n,o).catch((function(){return i({caches:t}).get(e,n,o)}))},set:function(e,n){return r.set(e,n).catch((function(){return i({caches:t}).set(e,n)}))},delete:function(e){return r.delete(e).catch((function(){return i({caches:t}).delete(e)}))},clear:function(){return r.clear().catch((function(){return i({caches:t}).clear()}))}}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{serializable:!0},t={};return{get:function(r,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},a=JSON.stringify(r);if(a in t)return Promise.resolve(e.serializable?JSON.parse(t[a]):t[a]);var u=n(),i=o&&o.miss||function(){return Promise.resolve()};return u.then((function(e){return i(e)})).then((function(){return u}))},set:function(r,n){return t[JSON.stringify(r)]=e.serializable?JSON.stringify(n):n,Promise.resolve(n)},delete:function(e){return delete t[JSON.stringify(e)],Promise.resolve()},clear:function(){return t={},Promise.resolve()}}}function c(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[r],e[r]=n}return e}function l(e,t){return t?(Object.keys(t).forEach((function(r){e[r]=t[r](e)})),e):e}function f(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=0;return e.replace(/%s/g,(function(){return encodeURIComponent(r[o++])}))}var h={WithinQueryParameters:0,WithinHeaders:1};function d(e,t){var r=e||{},n=r.data||{};return Object.keys(r).forEach((function(e){-1===["timeout","headers","queryParameters","data","cacheable"].indexOf(e)&&(n[e]=r[e])})),{data:Object.entries(n).length>0?n:void 0,timeout:r.timeout||t,headers:r.headers||{},queryParameters:r.queryParameters||{},cacheable:r.cacheable}}var m={Read:1,Write:2,Any:3},p=1,v=2,y=3;function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p;return r(r({},e),{},{status:t,lastUpdate:Date.now()})}function b(e){return"string"==typeof e?{protocol:"https",url:e,accept:m.Any}:{protocol:e.protocol||"https",url:e.url,accept:e.accept||m.Any}}var O="GET",P="POST";function q(e,t){return Promise.all(t.map((function(t){return e.get(t,(function(){return Promise.resolve(g(t))}))}))).then((function(e){var r=e.filter((function(e){return function(e){return e.status===p||Date.now()-e.lastUpdate>12e4}(e)})),n=e.filter((function(e){return function(e){return e.status===y&&Date.now()-e.lastUpdate<=12e4}(e)})),o=[].concat(a(r),a(n));return{getTimeout:function(e,t){return(0===n.length&&0===e?1:n.length+3+e)*t},statelessHosts:o.length>0?o.map((function(e){return b(e)})):t}}))}function j(e,t,n,o){var u=[],i=function(e,t){if(e.method===O||void 0===e.data&&void 0===t.data)return;var n=Array.isArray(e.data)?e.data:r(r({},e.data),t.data);return JSON.stringify(n)}(n,o),s=function(e,t){var n=r(r({},e.headers),t.headers),o={};return Object.keys(n).forEach((function(e){var t=n[e];o[e.toLowerCase()]=t})),o}(e,o),c=n.method,l=n.method!==O?{}:r(r({},n.data),o.data),f=r(r(r({"x-algolia-agent":e.userAgent.value},e.queryParameters),l),o.queryParameters),h=0,d=function t(r,a){var l=r.pop();if(void 0===l)throw{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:A(u)};var d={data:i,headers:s,method:c,url:S(l,n.path,f),connectTimeout:a(h,e.timeouts.connect),responseTimeout:a(h,o.timeout)},m=function(e){var t={request:d,response:e,host:l,triesLeft:r.length};return u.push(t),t},p={onSuccess:function(e){return function(e){try{return JSON.parse(e.content)}catch(t){throw function(e,t){return{name:"DeserializationError",message:e,response:t}}(t.message,e)}}(e)},onRetry:function(n){var o=m(n);return n.isTimedOut&&h++,Promise.all([e.logger.info("Retryable failure",x(o)),e.hostsCache.set(l,g(l,n.isTimedOut?y:v))]).then((function(){return t(r,a)}))},onFail:function(e){throw m(e),function(e,t){var r=e.content,n=e.status,o=r;try{o=JSON.parse(r).message}catch(e){}return function(e,t,r){return{name:"ApiError",message:e,status:t,transporterStackTrace:r}}(o,n,t)}(e,A(u))}};return e.requester.send(d).then((function(e){return function(e,t){return function(e){var t=e.status;return e.isTimedOut||function(e){var t=e.isTimedOut,r=e.status;return!t&&0==~~r}(e)||2!=~~(t/100)&&4!=~~(t/100)}(e)?t.onRetry(e):2==~~(e.status/100)?t.onSuccess(e):t.onFail(e)}(e,p)}))};return q(e.hostsCache,t).then((function(e){return d(a(e.statelessHosts).reverse(),e.getTimeout)}))}function w(e){var t={value:"Algolia for JavaScript (".concat(e,")"),add:function(e){var r="; ".concat(e.segment).concat(void 0!==e.version?" (".concat(e.version,")"):"");return-1===t.value.indexOf(r)&&(t.value="".concat(t.value).concat(r)),t}};return t}function S(e,t,r){var n=T(r),o="".concat(e.protocol,"://").concat(e.url,"/").concat("/"===t.charAt(0)?t.substr(1):t);return n.length&&(o+="?".concat(n)),o}function T(e){return Object.keys(e).map((function(t){return f("%s=%s",t,(r=e[t],"[object Object]"===Object.prototype.toString.call(r)||"[object Array]"===Object.prototype.toString.call(r)?JSON.stringify(e[t]):e[t]));var r})).join("&")}function A(e){return e.map((function(e){return x(e)}))}function x(e){var t=e.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return r(r({},e),{},{request:r(r({},e.request),{},{headers:r(r({},e.request.headers),t)})})}var N=function(e){var t=e.appId,n=function(e,t,r){var n={"x-algolia-api-key":r,"x-algolia-application-id":t};return{headers:function(){return e===h.WithinHeaders?n:{}},queryParameters:function(){return e===h.WithinQueryParameters?n:{}}}}(void 0!==e.authMode?e.authMode:h.WithinHeaders,t,e.apiKey),a=function(e){var t=e.hostsCache,r=e.logger,n=e.requester,a=e.requestsCache,u=e.responsesCache,i=e.timeouts,s=e.userAgent,c=e.hosts,l=e.queryParameters,f={hostsCache:t,logger:r,requester:n,requestsCache:a,responsesCache:u,timeouts:i,userAgent:s,headers:e.headers,queryParameters:l,hosts:c.map((function(e){return b(e)})),read:function(e,t){var r=d(t,f.timeouts.read),n=function(){return j(f,f.hosts.filter((function(e){return 0!=(e.accept&m.Read)})),e,r)};if(!0!==(void 0!==r.cacheable?r.cacheable:e.cacheable))return n();var a={request:e,mappedRequestOptions:r,transporter:{queryParameters:f.queryParameters,headers:f.headers}};return f.responsesCache.get(a,(function(){return f.requestsCache.get(a,(function(){return f.requestsCache.set(a,n()).then((function(e){return Promise.all([f.requestsCache.delete(a),e])}),(function(e){return Promise.all([f.requestsCache.delete(a),Promise.reject(e)])})).then((function(e){var t=o(e,2);t[0];return t[1]}))}))}),{miss:function(e){return f.responsesCache.set(a,e)}})},write:function(e,t){return j(f,f.hosts.filter((function(e){return 0!=(e.accept&m.Write)})),e,d(t,f.timeouts.write))}};return f}(r(r({hosts:[{url:"".concat(t,"-dsn.algolia.net"),accept:m.Read},{url:"".concat(t,".algolia.net"),accept:m.Write}].concat(c([{url:"".concat(t,"-1.algolianet.com")},{url:"".concat(t,"-2.algolianet.com")},{url:"".concat(t,"-3.algolianet.com")}]))},e),{},{headers:r(r(r({},n.headers()),{"content-type":"application/x-www-form-urlencoded"}),e.headers),queryParameters:r(r({},n.queryParameters()),e.queryParameters)}));return l({transporter:a,appId:t,addAlgoliaAgent:function(e,t){a.userAgent.add({segment:e,version:t})},clearCache:function(){return Promise.all([a.requestsCache.clear(),a.responsesCache.clear()]).then((function(){}))}},e.methods)},C=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={transporter:e.transporter,appId:e.appId,indexName:t};return l(n,r.methods)}},k=function(e){return function(t,n){var o=t.map((function(e){return r(r({},e),{},{params:T(e.params||{})})}));return e.transporter.read({method:P,path:"1/indexes/*/queries",data:{requests:o},cacheable:!0},n)}},J=function(e){return function(t,o){return Promise.all(t.map((function(t){var a=t.params,u=a.facetName,i=a.facetQuery,s=n(a,["facetName","facetQuery"]);return C(e)(t.indexName,{methods:{searchForFacetValues:F}}).searchForFacetValues(u,i,r(r({},o),s))})))}},E=function(e){return function(t,r,n){return e.transporter.read({method:P,path:f("1/answers/%s/prediction",e.indexName),data:{query:t,queryLanguages:r},cacheable:!0},n)}},I=function(e){return function(t,r){return e.transporter.read({method:P,path:f("1/indexes/%s/query",e.indexName),data:{query:t},cacheable:!0},r)}},F=function(e){return function(t,r,n){return e.transporter.read({method:P,path:f("1/indexes/%s/facets/%s/query",e.indexName,t),data:{facetQuery:r},cacheable:!0},n)}},R=1,D=2,W=3;function H(e,t,n){var o,a={appId:e,apiKey:t,timeouts:{connect:1,read:2,write:30},requester:{send:function(e){return new Promise((function(t){var r=new XMLHttpRequest;r.open(e.method,e.url,!0),Object.keys(e.headers).forEach((function(t){return r.setRequestHeader(t,e.headers[t])}));var n,o=function(e,n){return setTimeout((function(){r.abort(),t({status:0,content:n,isTimedOut:!0})}),1e3*e)},a=o(e.connectTimeout,"Connection timeout");r.onreadystatechange=function(){r.readyState>r.OPENED&&void 0===n&&(clearTimeout(a),n=o(e.responseTimeout,"Socket timeout"))},r.onerror=function(){0===r.status&&(clearTimeout(a),clearTimeout(n),t({content:r.responseText||"Network request failed",status:r.status,isTimedOut:!1}))},r.onload=function(){clearTimeout(a),clearTimeout(n),t({content:r.responseText,status:r.status,isTimedOut:!1})},r.send(e.data)}))}},logger:(o=W,{debug:function(e,t){return R>=o&&console.debug(e,t),Promise.resolve()},info:function(e,t){return D>=o&&console.info(e,t),Promise.resolve()},error:function(e,t){return console.error(e,t),Promise.resolve()}}),responsesCache:s(),requestsCache:s({serializable:!1}),hostsCache:i({caches:[u({key:"".concat("4.8.6","-").concat(e)}),s()]}),userAgent:w("4.8.6").add({segment:"Browser",version:"lite"}),authMode:h.WithinQueryParameters};return N(r(r(r({},a),n),{},{methods:{search:k,searchForFacetValues:J,multipleQueries:k,multipleSearchForFacetValues:J,initIndex:function(e){return function(t){return C(e)(t,{methods:{search:I,searchForFacetValues:F,findAnswers:E}})}}}}))}return H.version="4.8.6",H}));


/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(25);

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
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SearchParameters = __webpack_require__(14);
var SearchResults = __webpack_require__(15);
var DerivedHelper = __webpack_require__(34);
var requestBuilder = __webpack_require__(35);

var events = __webpack_require__(18);
var inherits = __webpack_require__(19);
var objectHasKeys = __webpack_require__(12);
var omit = __webpack_require__(11);
var merge = __webpack_require__(7);

var version = __webpack_require__(20);

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
/* 27 */
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
/* 28 */
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isValidUserToken(userToken) {
  if (userToken === null) {
    return false;
  }
  return /^[a-zA-Z0-9_-]{1,64}$/.test(userToken);
};


/***/ }),
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function compact(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  return array.filter(Boolean);
};


/***/ }),
/* 32 */
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = generateTrees;

var orderBy = __webpack_require__(16);
var find = __webpack_require__(8);
var prepareHierarchicalFacetSortBy = __webpack_require__(17);

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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var events = __webpack_require__(18);
var inherits = __webpack_require__(19);

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
/* 35 */
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
/* 36 */
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
__webpack_require__.d(__webpack_exports__, "Text", function() { return /* reexport */ Typography_Text; });
__webpack_require__.d(__webpack_exports__, "Heading", function() { return /* reexport */ Typography_Heading; });
__webpack_require__.d(__webpack_exports__, "UnorderedList", function() { return /* reexport */ UnorderedList_UnorderedList; });
__webpack_require__.d(__webpack_exports__, "ListItem", function() { return /* reexport */ ListItem_ListItem; });
__webpack_require__.d(__webpack_exports__, "Tabs", function() { return /* reexport */ Tabs_Tabs; });
__webpack_require__.d(__webpack_exports__, "TabsList", function() { return /* reexport */ Tabs_TabsList; });
__webpack_require__.d(__webpack_exports__, "TabsTab", function() { return /* reexport */ Tabs_TabsTab; });
__webpack_require__.d(__webpack_exports__, "TabsPanel", function() { return /* reexport */ Tabs_TabsPanel; });

// EXTERNAL MODULE: external {"root":"@emotion/react","commonjs2":"@emotion/react","commonjs":"@emotion/react","amd":"@emotion/react"}
var react_ = __webpack_require__(2);

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(0);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(3);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./src/Typography/Text.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Text_Text = /*#__PURE__*/function (_PureComponent) {
  _inherits(Text, _PureComponent);

  var _super = _createSuper(Text);

  function Text() {
    _classCallCheck(this, Text);

    return _super.apply(this, arguments);
  }

  _createClass(Text, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          bold = _this$props.bold,
          color = _this$props.color,
          small = _this$props.small,
          is = _this$props.is,
          props = _objectWithoutProperties(_this$props, ["className", "bold", "color", "small", "is"]);

      var Tag = is;
      return Object(react_["jsx"])(Tag, _extends({
        className: classnames_default()(className, color, {
          "font-semibold": Boolean(bold),
          "font-normal": !Boolean(bold),
          "text-base": !Boolean(small),
          "text-sm": Boolean(small)
        })
      }, props));
    }
  }]);

  return Text;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["PureComponent"]);

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
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsxRuntime classic */

/** @jsx jsx */







var Table_ref2 =  true ? {
  name: "jk7dkw",
  styles: "width:100%;max-width:100%"
} : undefined;

var Table_Table = function Table(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return Object(react_["jsx"])("table", {
    css: Table_ref2,
    className: className
  }, children);
};

var Table_ref4 =  true ? {
  name: "s6prfl",
  styles: "border-bottom-width:1px;--tw-border-opacity:1;border-color:rgba(234, 234, 234, var(--tw-border-opacity));border-radius:5px"
} : undefined;

Table_Table.Head = function (_ref3) {
  var children = _ref3.children,
      className = _ref3.className;
  return Object(react_["jsx"])("thead", {
    css: Table_ref4,
    className: className
  }, children);
};

var _ref6 =  true ? {
  name: "14tkg57",
  styles: "--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))"
} : undefined;

Table_Table.Body = function (_ref5) {
  var children = _ref5.children,
      className = _ref5.className;
  return Object(react_["jsx"])("tbody", {
    css: _ref6,
    className: className
  }, children);
};

var _ref8 =  true ? {
  name: "1sn1294",
  styles: "padding-left:1.5rem;padding-right:1.5rem;padding-top:0.5rem;padding-bottom:0.5rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));text-align:left;font-size:0.75rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity));text-transform:uppercase;letter-spacing:0.05em"
} : undefined;

Table_Table.HeaderCell = function (_ref7) {
  var children = _ref7.children,
      className = _ref7.className;
  return Object(react_["jsx"])("th", {
    css: _ref8,
    className: className
  }, children);
};

Table_Table.Row = function (_ref9) {
  var children = _ref9.children,
      className = _ref9.className,
      onClick = _ref9.onClick,
      isSelectable = _ref9.isSelectable;
  return Object(react_["jsx"])("tr", {
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
    } : null,  true ? "" : undefined,  true ? "" : undefined],
    className: className
  }, children);
};

var _ref11 =  true ? {
  name: "16hw2j3",
  styles: "padding-left:1.5rem;padding-right:1.5rem;padding-top:1rem;padding-bottom:1rem"
} : undefined;

Table_Table.Cell = function (_ref10) {
  var children = _ref10.children,
      className = _ref10.className;
  return Object(react_["jsx"])("td", {
    css: _ref11,
    className: className
  }, children);
};

var _ref13 =  true ? {
  name: "hdknak",
  styles: "display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
} : undefined;

Table_Table.TextCell = function (_ref12) {
  var primary = _ref12.primary,
      primaryClassname = _ref12.primaryClassname,
      secondary = _ref12.secondary,
      secondaryClassname = _ref12.secondaryClassname;
  return Object(react_["jsx"])(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Fragment, null, primary && Object(react_["jsx"])(Typography_Text, {
    small: true,
    css: ["display:block;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", secondary && {
      "marginBottom": "0.125rem"
    },  true ? "" : undefined,  true ? "" : undefined],
    className: primaryClassname
  }, primary), secondary && Object(react_["jsx"])(Typography_Text, {
    small: true,
    color: "text-accent-five",
    css: _ref13,
    className: secondaryClassname
  }, secondary));
};

Table_Table.propTypes = {
  children: prop_types_default.a.node.isRequired,
  className: prop_types_default.a.string
};
Table_Table.Head.propTypes = {
  children: prop_types_default.a.node.isRequired,
  className: prop_types_default.a.string
};
Table_Table.Body.propTypes = {
  children: prop_types_default.a.node.isRequired,
  className: prop_types_default.a.string
};
Table_Table.HeaderCell.propTypes = {
  children: prop_types_default.a.node.isRequired,
  className: prop_types_default.a.string
};
Table_Table.Row.propTypes = {
  children: prop_types_default.a.node.isRequired,
  className: prop_types_default.a.string,
  onClick: prop_types_default.a.func
};
Table_Table.Cell.propTypes = {
  children: prop_types_default.a.node.isRequired,
  className: prop_types_default.a.string
};
Table_Table.TextCell.propTypes = {
  primary: prop_types_default.a.node,
  primaryClassname: prop_types_default.a.string,
  secondary: prop_types_default.a.node,
  secondaryClassname: prop_types_default.a.string
};
/* harmony default export */ var src_Table = (Table_Table);
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
function Heading_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Heading_typeof = function _typeof(obj) { return typeof obj; }; } else { Heading_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Heading_typeof(obj); }

function Heading_extends() { Heading_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Heading_extends.apply(this, arguments); }

function Heading_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Heading_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Heading_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Heading_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Heading_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Heading_createClass(Constructor, protoProps, staticProps) { if (protoProps) Heading_defineProperties(Constructor.prototype, protoProps); if (staticProps) Heading_defineProperties(Constructor, staticProps); return Constructor; }

function Heading_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Heading_setPrototypeOf(subClass, superClass); }

function Heading_setPrototypeOf(o, p) { Heading_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Heading_setPrototypeOf(o, p); }

function Heading_createSuper(Derived) { var hasNativeReflectConstruct = Heading_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Heading_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Heading_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Heading_possibleConstructorReturn(this, result); }; }

function Heading_possibleConstructorReturn(self, call) { if (call && (Heading_typeof(call) === "object" || typeof call === "function")) { return call; } return Heading_assertThisInitialized(self); }

function Heading_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Heading_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Heading_getPrototypeOf(o) { Heading_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Heading_getPrototypeOf(o); }

function Heading_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Heading_Heading = /*#__PURE__*/function (_PureComponent) {
  Heading_inherits(Heading, _PureComponent);

  var _super = Heading_createSuper(Heading);

  function Heading() {
    Heading_classCallCheck(this, Heading);

    return _super.apply(this, arguments);
  }

  Heading_createClass(Heading, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          color = _this$props.color,
          size = _this$props.size,
          props = Heading_objectWithoutProperties(_this$props, ["className", "color", "size"]);

      var HTag = "h".concat(this.props.size);
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
  }]);

  return Heading;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["PureComponent"]);

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
  name: "datk8v",
  styles: "[role=\"tablist\"]{padding-left:2.5rem;padding-right:2.5rem;;}"
} : undefined;

var Nav = emotion_styled_base_browser_esm("div",  true ? {
  target: "e5yo00a0"
} : undefined)(function () {
  return [Header_ref];
},  true ? "" : undefined);

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

var Header_Header = function Header(_ref2) {
  var title = _ref2.title,
      actions = _ref2.actions,
      nav = _ref2.nav;
  return Object(react_["jsx"])("div", {
    css: ["position:relative;width:100%;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));", !nav &&
    /*#__PURE__*/

    /*#__PURE__*/

    /*#__PURE__*/

    /*#__PURE__*/
    Object(react_["css"])({
      boxShadow: "0 -1px 0 ".concat("#e5e7eb", " inset")
    },  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined),  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined]
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
};

Header_Header.defaultProps = {
  title: null,
  actions: null,
  nav: null
};
Header_Header.propTypes = {
  title: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]).isRequired,
  actions: prop_types_default.a.node,
  nav: prop_types_default.a.node,
  filters: prop_types_default.a.node
};
/* harmony default export */ var src_Header = (Header_Header);
// CONCATENATED MODULE: ./src/Content/index.js
function Content_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Content_Content = function Content(_ref) {
  var children = _ref.children,
      size = _ref.size,
      className = _ref.className,
      bg = _ref.bg;

  var base = Object(react_["jsx"])("div", {
    className: classnames_default()("flex-1 relative overflow-y-auto focus:outline-none", Content_defineProperty({
      "bg-background": size !== "full" && !bg,
      "bg-white": size === "full" && !bg
    }, "bg-".concat(bg), bg), className)
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

Content_Content.propTypes = {
  children: prop_types_default.a.node,
  size: prop_types_default.a.string,
  className: prop_types_default.a.string,

  /**
   * Overrides the default background color.
   */
  bg: prop_types_default.a.string
};
/* harmony default export */ var src_Content = (Content_Content);
// EXTERNAL MODULE: ./node_modules/classnames/bind.js
var bind = __webpack_require__(4);
var bind_default = /*#__PURE__*/__webpack_require__.n(bind);

// CONCATENATED MODULE: ./src/SpinningDots/index.js
function SpinningDots_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsxRuntime classic */

/** @jsx jsx */







var SpinningDots_ref =  true ? {
  name: "10904xo",
  styles: "border-width:3px"
} : undefined;

var SpinningDots_SpinningDots = function SpinningDots(_ref2) {
  var className = _ref2.className,
      variant = _ref2.variant;
  var i = classnames_default()("animate-pulse h-0 w-0 rounded-full", {
    'text-accent-six': variant === 'default',
    'text-accent-three': variant === 'light',
    'text-accent-eight': variant === 'dark'
  });
  var iCss = SpinningDots_ref;
  return Object(react_["jsx"])("div", {
    className: classnames_default()("spinner inline p-0 h-auto w-full text-center", className)
  }, Object(react_["jsx"])("span", {
    className: "inline-flex relative align-middle h-2 text-center opacity-50 w-10"
  }, Object(react_["jsx"])("div", {
    className: "flex w-full justify-around"
  }, Object(react_["jsx"])("i", {
    className: i,
    css: iCss,
    style: {
      animationDelay: "-.2s"
    }
  }), Object(react_["jsx"])("i", {
    className: i,
    css: iCss,
    style: {
      animationDelay: "-.1s"
    }
  }), Object(react_["jsx"])("i", {
    className: i,
    css: iCss
  }))));
};

SpinningDots_SpinningDots.propTypes = {
  className: prop_types_default.a.string,
  variant: prop_types_default.a.oneOf(["default", "inherit", "light", "dark"])
};
SpinningDots_SpinningDots.defaultProps = {
  variant: "default"
};
/* harmony default export */ var src_SpinningDots = (SpinningDots_SpinningDots);
// CONCATENATED MODULE: ./src/Button/index.js
function Button_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var buttonTypes = {
  "default": "border-transparent hover:border-accent-five text-white hover:text-foreground bg-foreground hover:bg-accent-two active:bg-foreground active:text-white",
  secondary: "border-secondary hover:border-foreground text-secondary hover:text-foreground bg-white hover:bg-accent-two active:bg-foreground active:text-white",
  danger: "border-error-dark hover:border-error-dark text-white hover:text-error-dark bg-error-dark hover:bg-accent-two active:bg-foreground active:text-white",
  disabled: "border-border text-accent-four hover:text-accent-four active:text-accent-four bg-accent-two hover:bg-accent-two active:bg-accent-two cursor-not-allowed",
  minimal: "border-transparent bg-transparent hover:bg-accent-three active:bg-accent-two text-foreground hover:text-accent-seven active:text-accent-five",
  small: "px-4 h-8 leading-8 text-sm",
  normal: "px-6 h-9 leading-9 text-sm",
  large: "px-12 h-10 leading-10 text-base"
};

var Button_Button = function Button(_ref) {
  var _cx;

  var disabled = _ref.disabled,
      iconBefore = _ref.iconBefore,
      iconAfter = _ref.iconAfter,
      onClick = _ref.onClick,
      label = _ref.label,
      type = _ref.type,
      size = _ref.size,
      variant = _ref.variant,
      component = _ref.component,
      block = _ref.block,
      isLoading = _ref.isLoading,
      className = _ref.className;
  var cx = bind_default.a.bind(buttonTypes);

  var ButtonContent = Object(react_["jsx"])("div", {
    className: bind_default()("flex items-center justify-center", {
      "opacity-0": isLoading,
      "opacity-100": !isLoading
    })
  }, iconBefore && Object(react_["jsx"])("span", {
    className: "flex mr-2"
  }, /*#__PURE__*/Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(iconBefore)), Object(react_["jsx"])("span", {
    className: "truncate"
  }, label), iconAfter && Object(react_["jsx"])("span", {
    className: "flex ml-2"
  }, /*#__PURE__*/Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(iconAfter)));

  var ButtonClasses = cx("Button relative border items-center flex font-medium rounded focus:outline-none transition ease-in-out duration-150 justify-center max-w-full cursor-pointer", className, (_cx = {
    disabled: disabled
  }, Button_defineProperty(_cx, variant, Boolean(variant) && !disabled), Button_defineProperty(_cx, size, Boolean(size)), Button_defineProperty(_cx, "block w-full", Boolean(block)), _cx));

  var RenderComponent = function RenderComponent() {
    if (component.props.children && typeof component.props.children !== "string") {
      var children = /*#__PURE__*/Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(component.props.children, {
        className: ButtonClasses
      });
      return /*#__PURE__*/Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(component, {}, children);
    } else {
      return /*#__PURE__*/Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(component, {
        className: ButtonClasses
      });
    }
  };

  return Object(react_["jsx"])(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Fragment, null, component ? Object(react_["jsx"])(RenderComponent, null) : Object(react_["jsx"])("button", {
    type: type,
    onClick: onClick,
    disabled: disabled || isLoading,
    className: ButtonClasses
  }, isLoading && Object(react_["jsx"])(src_SpinningDots, {
    variant: "inherit",
    className: "absolute"
  }), ButtonContent));
};

Button_Button.propTypes = {
  disabled: prop_types_default.a.bool,
  className: prop_types_default.a.string,
  iconBefore: prop_types_default.a.element,
  iconAfter: prop_types_default.a.element,
  label: prop_types_default.a.string,
  onClick: prop_types_default.a.func,
  type: prop_types_default.a.string,
  variant: prop_types_default.a.oneOf(["default", "secondary", "danger", "disabled", "minimal"]),
  size: prop_types_default.a.oneOf(["small", "normal", "large"]),
  isLoading: prop_types_default.a.bool,
  component: prop_types_default.a.element
};
Button_Button.defaultProps = {
  size: "normal",
  variant: "default",
  type: "button",
  isLoading: false,
  disabled: false
};
/* harmony default export */ var src_Button = (Button_Button);
// CONCATENATED MODULE: ./src/Box/index.js
function Box_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Box_Box = function Box(_ref) {
  var _classNames;

  var flex = _ref.flex,
      alignItems = _ref.alignItems,
      justifyContent = _ref.justifyContent,
      backgroundColor = _ref.backgroundColor,
      flexDirection = _ref.flexDirection,
      flexWrap = _ref.flexWrap,
      children = _ref.children,
      className = _ref.className,
      rootCard = _ref.rootCard,
      noPadding = _ref.noPadding;
  return Object(react_["jsx"])("div", {
    className: classnames_default()("overflow-hidden", className, (_classNames = {
      flex: Boolean(flex)
    }, Box_defineProperty(_classNames, "items-".concat(alignItems), Boolean(alignItems)), Box_defineProperty(_classNames, "justify-".concat(justifyContent), Boolean(justifyContent)), Box_defineProperty(_classNames, "bg-".concat(backgroundColor), Boolean(backgroundColor)), Box_defineProperty(_classNames, "flex-".concat(flexDirection), Boolean(flexDirection)), Box_defineProperty(_classNames, "mb-4 border border-border rounded shadow-sm", Boolean(rootCard)), Box_defineProperty(_classNames, "px-6 py-4", !Boolean(noPadding)), Box_defineProperty(_classNames, "flex-".concat(flexWrap), Boolean(flexWrap)), _classNames))
  }, children);
};

Box_Box.defaultProps = {
  flex: false,
  alignItems: null,
  justifyContent: null,
  backgroundColor: "white",
  flexDirection: null,
  rootCard: false,
  noPadding: false,
  flexWrap: null
};
Box_Box.propTypes = {
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
/* harmony default export */ var src_Box = (Box_Box);
// EXTERNAL MODULE: external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"}
var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_ = __webpack_require__(5);
var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_);

// CONCATENATED MODULE: ./src/Sidesheet/index.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








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

var Sidesheet_SidesheetContent = function SidesheetContent(_ref) {
  var id = _ref.id,
      children = _ref.children;
  if (typeof window === "undefined") return null;
  var element = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(document.getElementById(id) || document.createElement("div"));
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (!document.getElementById(id)) {
      element.current.id = id;
      document.body.appendChild(element.current);
    }

    return function () {
      if (element.current.parentElement) {
        element.current.parentElement.removeChild(element.current);
      }
    };
  }, [id]);
  return /*#__PURE__*/Object(external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_["createPortal"])(children, element.current);
};

var Sidesheet_Sidesheet = function Sidesheet(_ref2) {
  var title = _ref2.title,
      children = _ref2.children,
      className = _ref2.className,
      action = _ref2.action,
      content = _ref2.content,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? 400 : _ref2$width,
      onClose = _ref2.onClose,
      _ref2$isShown = _ref2.isShown,
      isShown = _ref2$isShown === void 0 ? false : _ref2$isShown;
  var sideSheet = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])();
  var portal = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])();

  var _useState = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpened = _useState2[0],
      setIsOpened = _useState2[1];

  var _useState3 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      transition = _useState4[0],
      setTransition = _useState4[1];

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (!isShown) {
      setTransition(false);
      setTimeout(function () {
        return setIsOpened(false);
      }, 500);
    } else {
      setIsOpened(true);
      setTimeout(function () {
        return setTransition(true);
      }, 100);
    }
  }, [isShown]);

  var closeTransition = function closeTransition() {
    if (isOpened && transition) {
      onClose();
      setTransition(false);
      setTimeout(function () {
        return setIsOpened(false);
      }, 500);
    }
  };

  return Object(react_["jsx"])("div", {
    ref: sideSheet
  }, children, isOpened && Object(react_["jsx"])(Sidesheet_SidesheetContent, {
    id: "sidesheet"
  }, Object(react_["jsx"])("div", {
    onClick: function onClick() {
      return closeTransition();
    },
    className: bind_default()("fixed z-50 inset-0 opacity-25 duration-300 delay-200 transition", {
      "bg-accent-eight": transition,
      "bg-transparent": !transition
    })
  }), Object(react_["jsx"])("div", {
    ref: portal,
    style: {
      transition: "transform .4s cubic-bezier(.3,0,0,1)",
      transform: transition ? "translateX(calc(100vw - ".concat(width, "px - 20px))") : "translateX(100vw)",
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
    onClick: function onClick() {
      return closeTransition();
    }
  }, Object(react_["jsx"])(XIcon, null)))), Object(react_["jsx"])(src_Box, {
    flex: true,
    flexDirection: "col",
    className: "sidesheet-content relative overflow-y-auto flex-1 rounded"
  }, Object(react_["jsx"])(src_Box, {
    noPadding: true,
    flex: true,
    flexDirection: "col",
    className: "h-full"
  }, content)), action && Object(react_["jsx"])(src_Box, {
    flex: true,
    justifyContent: "evenly",
    alignItems: "center",
    className: "sidesheet-action h-16 border-t border-border relative flex-initial rounded rounded-t-none"
  }, action))));
};

Sidesheet_Sidesheet.propTypes = {
  content: prop_types_default.a.element,
  children: prop_types_default.a.element,
  className: prop_types_default.a.string,
  width: prop_types_default.a.string,
  action: prop_types_default.a.element,
  onClose: prop_types_default.a.func,
  isShown: prop_types_default.a.bool,
  title: prop_types_default.a.string
};
/* harmony default export */ var src_Sidesheet = (Sidesheet_Sidesheet);
// CONCATENATED MODULE: ./src/Skeleton/index.js


var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



/** @jsxRuntime classic */

/** @jsx jsx */





var animation = Object(react_["keyframes"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0% {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }"])));

var StyledSkeleton = emotion_styled_base_browser_esm("span",  true ? {
  target: "e4rzf2q0"
} : undefined)(function (_ref) {
  var width = _ref.width,
      height = _ref.height,
      vertical = _ref.vertical;
  return ["\n  display: flex;\n  border-radius: 5px;\n  background-image: linear-gradient(\n    270deg,\n    #fafafa,\n    #eaeaea,\n    #eaeaea,\n    #fafafa\n  );\n  background-size: 400% 100%;\n  width: ".concat(width, "px;\n  min-height: ").concat(height, "px;\n")];
},  true ? "" : undefined);

var Skeleton_Skeleton = function Skeleton(_ref2) {
  var width = _ref2.width,
      height = _ref2.height,
      className = _ref2.className,
      vertical = _ref2.vertical;
  return Object(react_["jsx"])("div", {
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

    /*#__PURE__*/

    /*#__PURE__*/
    Object(react_["css"])("animation:", animation, " 8s ease-in-out infinite;" + ( true ? "" : undefined),  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined),  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined,  true ? "" : undefined]
  }));
};

Skeleton_Skeleton.propTypes = {
  width: prop_types_default.a.number,
  height: prop_types_default.a.number,
  className: prop_types_default.a.string,
  vertical: prop_types_default.a.bool
};
Skeleton_Skeleton.defaultProps = {
  width: 160,
  height: 24,
  vertical: false
};
/* harmony default export */ var src_Skeleton = (Skeleton_Skeleton);
// CONCATENATED MODULE: ./src/Toast/index.js
function Toast_slicedToArray(arr, i) { return Toast_arrayWithHoles(arr) || Toast_iterableToArrayLimit(arr, i) || Toast_unsupportedIterableToArray(arr, i) || Toast_nonIterableRest(); }

function Toast_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Toast_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Toast_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Toast_arrayLikeToArray(o, minLen); }

function Toast_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Toast_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Toast_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Toast_XIcon() {
  return Object(react_["jsx"])("svg", {
    fill: "none",
    className: "text-accent-6",
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

var Toast_ToastContent = function ToastContent(_ref) {
  var id = _ref.id,
      children = _ref.children;
  if (typeof window === "undefined") return null;
  var element = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(document.getElementById(id) || document.createElement("div"));
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (!document.getElementById(id)) {
      element.current.id = id;
      document.body.appendChild(element.current);
    }

    return function () {
      if (element.current.parentElement) {
        element.current.parentElement.removeChild(element.current);
      }
    };
  }, [id]);
  return /*#__PURE__*/Object(external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_["createPortal"])(children, element.current);
};

var Toast_Toast = function Toast(_ref2) {
  var text = _ref2.text,
      error = _ref2.error,
      success = _ref2.success,
      showCloseIcon = _ref2.showCloseIcon,
      hide = _ref2.hide,
      _ref2$dismissTime = _ref2.dismissTime,
      dismissTime = _ref2$dismissTime === void 0 ? 6000 : _ref2$dismissTime,
      onCloseToast = _ref2.onCloseToast;

  var _useState = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(true),
      _useState2 = Toast_slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(hide),
      _useState4 = Toast_slicedToArray(_useState3, 2),
      showToast = _useState4[0],
      setShowToast = _useState4[1];

  var closeToast = function closeToast() {
    setShowToast(false);
    setOpen(false);

    if (onCloseToast) {
      onCloseToast();
    }
  };

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (dismissTime) {
      var interval = setInterval(function () {
        closeToast();
      }, dismissTime);
      return function () {
        clearInterval(interval);
      };
    }
  }, [dismissTime]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    setTimeout(function () {
      setShowToast(true);
    }, 10);
  }, []);

  if (open) {
    return Object(react_["jsx"])(Toast_ToastContent, {
      id: "toast-content"
    }, Object(react_["jsx"])("div", {
      className: bind_default()("fixed z-50 w-1/4 max-w-full p-5 bg-white bottom-0 rounded-md shadow-xl opacity-0", {
        "text-white bg-error": error,
        "text-white bg-success": success,
        "opacity-100": showToast
      }),
      style: {
        right: 20,
        transition: "all .4s cubic-bezier(.3,0,0,1)",
        transform: showToast && "translate(0, -20px)"
      }
    }, Object(react_["jsx"])("div", {
      className: "flex justify-between items-center"
    }, Object(react_["jsx"])("div", {
      className: "w-11/12"
    }, Object(react_["jsx"])(Typography_Text, {
      small: true,
      color: (success || error) && "text-white"
    }, text)), showCloseIcon && Object(react_["jsx"])("div", {
      onClick: function onClick() {
        return closeToast();
      }
    }, Object(react_["jsx"])(Toast_XIcon, null)))));
  } else {
    return null;
  }
};

Toast_Toast.propTypes = {
  success: prop_types_default.a.bool,
  showCloseIcon: prop_types_default.a.bool,
  hide: prop_types_default.a.bool,
  error: prop_types_default.a.bool,
  text: prop_types_default.a.string,
  dismissTime: prop_types_default.a.number
};
/* harmony default export */ var src_Toast = (Toast_Toast);
// CONCATENATED MODULE: ./src/Input/index.js
function Input_extends() { Input_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Input_extends.apply(this, arguments); }

function Input_slicedToArray(arr, i) { return Input_arrayWithHoles(arr) || Input_iterableToArrayLimit(arr, i) || Input_unsupportedIterableToArray(arr, i) || Input_nonIterableRest(); }

function Input_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Input_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Input_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Input_arrayLikeToArray(o, minLen); }

function Input_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Input_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Input_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Input_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Input_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Input_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Input = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.forwardRef(function (_ref, ref) {
  var onChange = _ref.onChange,
      inputClassName = _ref.inputClassName,
      className = _ref.className,
      value = _ref.value,
      label = _ref.label,
      id = _ref.id,
      error = _ref.error,
      disabled = _ref.disabled,
      rest = Input_objectWithoutProperties(_ref, ["onChange", "inputClassName", "className", "value", "label", "id", "error", "disabled"]);

  var _useState = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(),
      _useState2 = Input_slicedToArray(_useState, 2),
      internalValue = _useState2[0],
      setInternalValue = _useState2[1];

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    setInternalValue(value);
  }, [value]);
  var handleChange = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])(function (event) {
    setInternalValue(event.target.value);

    if (onChange) {
      onChange(event.target.value, event);
    }
  }, [setInternalValue, onChange]);
  return Object(react_["jsx"])("div", {
    className: className
  }, label && Object(react_["jsx"])("label", {
    className: "block text-sm leading-5 font-medium text-accent-six",
    htmlFor: id
  }, label), Object(react_["jsx"])("div", {
    className: "mt-1 relative"
  }, Object(react_["jsx"])("input", Input_extends({
    id: id,
    ref: ref,
    onChange: handleChange,
    defaultValue: internalValue,
    "aria-label": label,
    "aria-required": label ? true : false,
    "aria-invalid": error ? true : false,
    disabled: disabled,
    className: classnames_default()("form-input block w-full rounded-md p-2 transition duration-150 ease-in-out sm:text-sm sm:leading-5 border shadow-sm focus:outline-none focus:ring-0", inputClassName, {
      "border-border text-foreground hover:border-accent-five focus:border-accent-five placeholder-accent-five": !error && !disabled,
      "text-error border-error hover:border-error focus:border-error placeholder-error": error,
      "border-border text-accent-five bg-background cursor-not-allowed placeholder-accent-five": disabled
    })
  }, rest))));
});
Input.propTypes = {
  onChange: prop_types_default.a.func,
  inputClassName: prop_types_default.a.string,
  className: prop_types_default.a.string,
  value: prop_types_default.a.string,
  label: prop_types_default.a.string,
  id: prop_types_default.a.string.isRequired,
  error: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool
};
/* harmony default export */ var src_Input = (Input);
// CONCATENATED MODULE: ./src/Textarea/index.js
function Textarea_extends() { Textarea_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Textarea_extends.apply(this, arguments); }

function Textarea_slicedToArray(arr, i) { return Textarea_arrayWithHoles(arr) || Textarea_iterableToArrayLimit(arr, i) || Textarea_unsupportedIterableToArray(arr, i) || Textarea_nonIterableRest(); }

function Textarea_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Textarea_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Textarea_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Textarea_arrayLikeToArray(o, minLen); }

function Textarea_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Textarea_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Textarea_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Textarea_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Textarea_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Textarea_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Textarea = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.forwardRef(function (_ref, ref) {
  var onChange = _ref.onChange,
      textareaClassName = _ref.textareaClassName,
      className = _ref.className,
      value = _ref.value,
      label = _ref.label,
      id = _ref.id,
      error = _ref.error,
      disabled = _ref.disabled,
      rows = _ref.rows,
      rest = Textarea_objectWithoutProperties(_ref, ["onChange", "textareaClassName", "className", "value", "label", "id", "error", "disabled", "rows"]);

  var _useState = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(),
      _useState2 = Textarea_slicedToArray(_useState, 2),
      internalValue = _useState2[0],
      setInternalValue = _useState2[1];

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    setInternalValue(value);
  }, [value]);
  var handleChange = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])(function (event) {
    setInternalValue(event.target.value);

    if (onChange) {
      onChange(event.target.value);
    }
  }, [setInternalValue, onChange]);
  return Object(react_["jsx"])("div", {
    className: className
  }, label && Object(react_["jsx"])("label", {
    className: "block text-sm leading-5 font-medium text-accent-six mb-1",
    htmlFor: id
  }, label), Object(react_["jsx"])("textarea", Textarea_extends({
    id: id,
    ref: ref,
    rows: rows,
    onChange: handleChange,
    defaultValue: internalValue,
    "aria-label": label,
    "aria-required": label ? true : false,
    "aria-invalid": error ? true : false,
    disabled: disabled,
    className: classnames_default()("form-textarea block w-full rounded-md p-2 transition duration-150 ease-in-out sm:text-sm sm:leading-6 border shadow-sm focus:ring-0", textareaClassName, {
      "border-border text-foreground hover:border-foreground focus:border-foreground placeholder-accent-five": !error && !disabled,
      "text-error border-error hover:border-error focus:border-error placeholder-error": error,
      "border-border bg-background cursor-not-allowed placeholder-accents-five": disabled
    })
  }, rest)));
});
Textarea.defaultProps = {
  rows: 3
};
Textarea.propTypes = {
  onChange: prop_types_default.a.func,
  textareaClassName: prop_types_default.a.string,
  className: prop_types_default.a.string,
  value: prop_types_default.a.string,
  label: prop_types_default.a.string,
  id: prop_types_default.a.string.isRequired,
  error: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  rows: prop_types_default.a.number
};
/* harmony default export */ var src_Textarea = (Textarea);
// CONCATENATED MODULE: ./src/Select/index.js
function Select_extends() { Select_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Select_extends.apply(this, arguments); }

function Select_slicedToArray(arr, i) { return Select_arrayWithHoles(arr) || Select_iterableToArrayLimit(arr, i) || Select_unsupportedIterableToArray(arr, i) || Select_nonIterableRest(); }

function Select_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Select_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Select_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Select_arrayLikeToArray(o, minLen); }

function Select_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Select_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Select_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Select_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Select_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Select_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Select = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.forwardRef(function (_ref, ref) {
  var onChange = _ref.onChange,
      selectClassName = _ref.selectClassName,
      options = _ref.options,
      className = _ref.className,
      value = _ref.value,
      label = _ref.label,
      id = _ref.id,
      disabled = _ref.disabled,
      placeholder = _ref.placeholder,
      error = _ref.error,
      rest = Select_objectWithoutProperties(_ref, ["onChange", "selectClassName", "options", "className", "value", "label", "id", "disabled", "placeholder", "error"]);

  var _useState = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(""),
      _useState2 = Select_slicedToArray(_useState, 2),
      internalValue = _useState2[0],
      setInternalValue = _useState2[1];

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    setInternalValue(value);
  }, [value]);
  var handleChange = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])(function (event) {
    setInternalValue(event.target.value);

    if (onChange) {
      onChange(event.target.value);
    }
  }, [setInternalValue, onChange]);
  return Object(react_["jsx"])("div", {
    className: className
  }, label && Object(react_["jsx"])("label", {
    className: "block text-sm font-medium leading-5 text-accent-seven",
    htmlFor: id
  }, label), Object(react_["jsx"])("div", {
    className: "mt-1 relative"
  }, Object(react_["jsx"])("select", Select_extends({
    id: id,
    ref: ref,
    onChange: handleChange,
    value: internalValue,
    disabled: disabled,
    className: classnames_default()("border rounded-md shadow-sm mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 sm:text-sm sm:leading-5 focus:ring-0 transition duration-150 ease-in-out", selectClassName, {
      "border-border text-foreground hover:border-accent-five focus:border-accent-five placeholder-accent-five": !error && !disabled,
      "text-error border-error hover:border-error focus:border-error placeholder-error": error,
      "border-border text-accent-five bg-background cursor-not-allowed placeholder-accent-five": disabled
    })
  }, rest), Object(react_["jsx"])("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(function (item, index) {
    return Object(react_["jsx"])("option", {
      key: "".concat(item.value, "-").concat(index),
      value: item.value,
      disabled: item.disabled
    }, item.name);
  }))));
});
Select.defaultProps = {
  options: [],
  placeholder: "Chose one"
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
  disabled: prop_types_default.a.bool
};
/* harmony default export */ var src_Select = (Select);
// CONCATENATED MODULE: ./src/Avatar/utils/getInitials.js
function getInitials_getInitials(name) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '?';
  if (!name || typeof name !== 'string') return fallback;
  return name.replace(/\s+/, ' ').split(' ') // Repeated spaces results in empty strings
  .slice(0, 2).map(function (v) {
    return v && v[0].toUpperCase();
  }) // Watch out for empty strings
  .join('');
}
// CONCATENATED MODULE: ./src/Avatar/utils/hash.js
// http://erlycoder.com/49/javascript-hash-functions-to-convert-string-into-integer-hash-
function hashCode(s) {
  var str = String(s);
  var hash = 0;

  var _char;

  if (str.trim().length === 0) return hash;

  for (var i = 0; i < str.length; i++) {
    _char = str.charCodeAt(i);
    hash = (hash << 5) - hash + _char; // Convert to 32bit integer

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
    "default": scales.neutral.N4,
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
    "default": scales.neutral.N9,
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
    "default": scales.neutral.N8,
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

var fills = {};
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
    color: colors.text["default"],
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

var getAvatarProps_getAvatarProps = function getAvatarProps(_ref) {
  var isSolid = _ref.isSolid,
      color = _ref.color,
      hashValue = _ref.hashValue;
  var appearances = styles_fills[isSolid ? 'solid' : 'subtle'];

  if (color === 'automatic') {
    var keys = Object.keys(appearances);
    var key = keys[hashValue % keys.length];
    return appearances[key];
  }

  return appearances[color];
};

/* harmony default export */ var utils_getAvatarProps = (getAvatarProps_getAvatarProps);
// CONCATENATED MODULE: ./src/Avatar/utils/getInitialsFontSize.js
/**
 * @param {number} size
 * @param {number} sizeLimitOneCharacter
 * @return {number} font size
 */
var getAvatarInitialsFontSize = function getAvatarInitialsFontSize(size, sizeLimitOneCharacter) {
  if (size <= sizeLimitOneCharacter) {
    return Math.ceil(size / 2.2);
  }

  return Math.ceil(size / 2.6);
};

/* harmony default export */ var getInitialsFontSize = (getAvatarInitialsFontSize);
// CONCATENATED MODULE: ./src/Avatar/Avatar.js
function Avatar_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Avatar_typeof = function _typeof(obj) { return typeof obj; }; } else { Avatar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Avatar_typeof(obj); }

function Avatar_extends() { Avatar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Avatar_extends.apply(this, arguments); }

function Avatar_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Avatar_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Avatar_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Avatar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Avatar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Avatar_createClass(Constructor, protoProps, staticProps) { if (protoProps) Avatar_defineProperties(Constructor.prototype, protoProps); if (staticProps) Avatar_defineProperties(Constructor, staticProps); return Constructor; }

function Avatar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Avatar_setPrototypeOf(subClass, superClass); }

function Avatar_setPrototypeOf(o, p) { Avatar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Avatar_setPrototypeOf(o, p); }

function Avatar_createSuper(Derived) { var hasNativeReflectConstruct = Avatar_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Avatar_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Avatar_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Avatar_possibleConstructorReturn(this, result); }; }

function Avatar_possibleConstructorReturn(self, call) { if (call && (Avatar_typeof(call) === "object" || typeof call === "function")) { return call; } return Avatar_assertThisInitialized(self); }

function Avatar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Avatar_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Avatar_getPrototypeOf(o) { Avatar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Avatar_getPrototypeOf(o); }

function Avatar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var Avatar_Avatar = /*#__PURE__*/function (_PureComponent) {
  Avatar_inherits(Avatar, _PureComponent);

  var _super = Avatar_createSuper(Avatar);

  function Avatar(props, context) {
    var _this;

    Avatar_classCallCheck(this, Avatar);

    _this = _super.call(this, props, context);

    Avatar_defineProperty(Avatar_assertThisInitialized(_this), "getColorProps", function () {
      var _this$props = _this.props,
          isSolid = _this$props.isSolid,
          color = _this$props.color,
          propsHashValue = _this$props.hashValue,
          name = _this$props.name;

      if (color === "automatic") {
        var hashValue = hashCode(propsHashValue || name);
        return utils_getAvatarProps({
          isSolid: isSolid,
          color: color,
          hashValue: hashValue
        });
      }

      return utils_getAvatarProps({
        isSolid: isSolid,
        color: color
      });
    });

    return _this;
  }

  Avatar_createClass(Avatar, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          size = _this$props2.size,
          name = _this$props2.name,
          isSolid = _this$props2.isSolid,
          isDashed = _this$props2.isDashed,
          propsHashValue = _this$props2.hashValue,
          getInitials = _this$props2.getInitials,
          propsColor = _this$props2.color,
          sizeLimitOneCharacter = _this$props2.sizeLimitOneCharacter,
          props = Avatar_objectWithoutProperties(_this$props2, ["className", "size", "name", "isSolid", "isDashed", "hashValue", "getInitials", "color", "sizeLimitOneCharacter"]);

      var initialsFontSize = "".concat(getInitialsFontSize(size, sizeLimitOneCharacter), "px");
      var initials = getInitials(name);

      if (size <= sizeLimitOneCharacter) {
        initials = initials.slice(0, 1);
      }

      var colorProps = this.getColorProps();
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
  }]);

  return Avatar;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["PureComponent"]);

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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || TabController_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return TabController_arrayLikeToArray(arr); }

function TabController_slicedToArray(arr, i) { return TabController_arrayWithHoles(arr) || TabController_iterableToArrayLimit(arr, i) || TabController_unsupportedIterableToArray(arr, i) || TabController_nonIterableRest(); }

function TabController_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function TabController_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TabController_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TabController_arrayLikeToArray(o, minLen); }

function TabController_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function TabController_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function TabController_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var TabControllerContext = /*#__PURE__*/Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["createContext"])({});
var TabController_useTabController = function useTabController() {
  return Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"])(TabControllerContext);
};
var navigationKeyTypes = {
  CURSOR: 'cursor',
  ARROW_DOWN: 'arrowDown',
  ARROW_UP: 'arrowUp',
  ENTER: 'enter'
};

var TabController_TabController = function TabController(props) {
  var children = props.children; // keeps track of the currently focused element in the results panel

  var _useState = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(0),
      _useState2 = TabController_slicedToArray(_useState, 2),
      activeElementIndex = _useState2[0],
      setActiveElementIndex = _useState2[1]; // keeps track of the total number of elements that have been rendered


  var _useState3 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(0),
      _useState4 = TabController_slicedToArray(_useState3, 2),
      totalElementsCount = _useState4[0],
      setTotalElementsCount = _useState4[1]; // an array of integers, the number of results per section


  var _useState5 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])([0]),
      _useState6 = TabController_slicedToArray(_useState5, 2),
      sectionLengthsArray = _useState6[0],
      setSectionLengthsArray = _useState6[1]; // height of the scrollable container


  var _useState7 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(300),
      _useState8 = TabController_slicedToArray(_useState7, 2),
      scrollableWindowHeight = _useState8[0],
      setScrollableWindowHeight = _useState8[1];

  var _useState9 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(null),
      _useState10 = TabController_slicedToArray(_useState9, 2),
      searchInputHeight = _useState10[0],
      setSearchInputHeight = _useState10[1];

  var _useState11 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(null),
      _useState12 = TabController_slicedToArray(_useState11, 2),
      controlsHeight = _useState12[0],
      setControlsHeight = _useState12[1]; // distance to top of the page from the scrollable container


  var _useState13 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(0),
      _useState14 = TabController_slicedToArray(_useState13, 2),
      scrollableWindowTopOffset = _useState14[0],
      setScrollableWindowTopOffset = _useState14[1]; // scroll distance to be set and read from


  var _useState15 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(0),
      _useState16 = TabController_slicedToArray(_useState15, 2),
      scrollDistance = _useState16[0],
      setScrollDistance = _useState16[1]; // boolean to set whether or not the search box has text


  var _useState17 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false),
      _useState18 = TabController_slicedToArray(_useState17, 2),
      isResultsWindowOpen = _useState18[0],
      setIsResultsWindowOpen = _useState18[1];

  var _useState19 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(null),
      _useState20 = TabController_slicedToArray(_useState19, 2),
      scrollWindowRef = _useState20[0],
      setScrollWindowRef = _useState20[1];

  var _useState21 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(true),
      _useState22 = TabController_slicedToArray(_useState21, 2),
      shouldBypassSearch = _useState22[0],
      setShouldBypassSearch = _useState22[1];

  var _useState23 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false),
      _useState24 = TabController_slicedToArray(_useState23, 2),
      enterKeyWasPressed = _useState24[0],
      setEnterKeyWasPressed = _useState24[1]; // allows for manual scroll disabling


  var _useState25 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false),
      _useState26 = TabController_slicedToArray(_useState25, 2),
      isScrollDisabled = _useState26[0],
      setIsScrollDisabled = _useState26[1];

  var handleKeyNavigation = function handleKeyNavigation(key) {
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

  var manuallySetActiveIndex = function manuallySetActiveIndex(index) {
    setIsScrollDisabled(true);
    setActiveElementIndex(index);
  }; // resets the active element to the first one


  var resetActiveElementIndex = function resetActiveElementIndex() {
    setActiveElementIndex(0);
  }; // adds section results length


  var appendNewSectionLength = function appendNewSectionLength(sectionIndex, length) {
    var copyOfSectionLengthsArray = _toConsumableArray(sectionLengthsArray);

    copyOfSectionLengthsArray[sectionIndex] = length;
    setSectionLengthsArray(copyOfSectionLengthsArray);
    setTotalElementsCount(copyOfSectionLengthsArray.reduce(function (a, b) {
      return a + b;
    }, 0));
  }; // increments the active index by 1 or resets to 0 if past total number of elements


  var incrementActiveElementIndex = function incrementActiveElementIndex() {
    var nextIndex = activeElementIndex + 1;
    if (nextIndex >= totalElementsCount) nextIndex = 0;
    setIsScrollDisabled(false);
    setActiveElementIndex(nextIndex);
  }; // decrements the active index by 1 or resets to "totalElementsCount - 1" if index < 0


  var decrementActiveElementIndex = function decrementActiveElementIndex() {
    var prevIndex = activeElementIndex - 1;
    if (prevIndex < 0) prevIndex = totalElementsCount - 1;
    setIsScrollDisabled(false);
    setActiveElementIndex(prevIndex);
  };

  return Object(react_["jsx"])(TabControllerContext.Provider, {
    value: {
      activeElementIndex: activeElementIndex,
      resetActiveElementIndex: resetActiveElementIndex,
      appendNewSectionLength: appendNewSectionLength,
      sectionLengthsArray: sectionLengthsArray,
      manuallySetActiveIndex: manuallySetActiveIndex,
      setActiveElementIndex: setActiveElementIndex,
      totalElementsCount: totalElementsCount,
      scrollableWindowHeight: scrollableWindowHeight,
      setScrollableWindowHeight: setScrollableWindowHeight,
      scrollableWindowTopOffset: scrollableWindowTopOffset,
      setScrollableWindowTopOffset: setScrollableWindowTopOffset,
      scrollDistance: scrollDistance,
      setScrollDistance: setScrollDistance,
      isResultsWindowOpen: isResultsWindowOpen,
      setIsResultsWindowOpen: setIsResultsWindowOpen,
      setScrollWindowRef: setScrollWindowRef,
      scrollWindowRef: scrollWindowRef,
      shouldBypassSearch: shouldBypassSearch,
      setShouldBypassSearch: setShouldBypassSearch,
      setEnterKeyWasPressed: setEnterKeyWasPressed,
      enterKeyWasPressed: enterKeyWasPressed,
      isScrollDisabled: isScrollDisabled,
      handleKeyNavigation: handleKeyNavigation,
      searchInputHeight: searchInputHeight,
      setSearchInputHeight: setSearchInputHeight,
      controlsHeight: controlsHeight,
      setControlsHeight: setControlsHeight
    }
  }, children);
};

/* harmony default export */ var providers_TabController = (TabController_TabController);
// EXTERNAL MODULE: ./node_modules/algoliasearch/dist/algoliasearch-lite.umd.js
var algoliasearch_lite_umd = __webpack_require__(22);
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
function classCallCheck_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(21);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function assertThisInitialized_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function possibleConstructorReturn_possibleConstructorReturn(self, call) {
  if (call && (typeof_default()(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized_assertThisInitialized(self);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function getPrototypeOf_getPrototypeOf(o) {
  getPrototypeOf_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return getPrototypeOf_getPrototypeOf(o);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function createClass_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function createClass_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) createClass_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) createClass_defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function setPrototypeOf_setPrototypeOf(o, p) {
  setPrototypeOf_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return setPrototypeOf_setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

function inherits_inherits(subClass, superClass) {
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
  if (superClass) setPrototypeOf_setPrototypeOf(subClass, superClass);
}
// EXTERNAL MODULE: ./node_modules/react-fast-compare/index.js
var react_fast_compare = __webpack_require__(9);
var react_fast_compare_default = /*#__PURE__*/__webpack_require__.n(react_fast_compare);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(source, excluded) {
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

function objectWithoutProperties_objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(source, excluded);
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
function typeof_typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return typeof_typeof(obj);
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
  return typeof_typeof(value) === 'object' && value !== null && !Array.isArray(value);
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
          partialState = objectWithoutProperties_objectWithoutProperties(currentState, ["resultsFacetValues"]);

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
        partialState = objectWithoutProperties_objectWithoutProperties(currentState, ["resultsFacetValues"]);

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
            partialState = objectWithoutProperties_objectWithoutProperties(_store$getState, ["resultsFacetValues"]);

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














function isControlled(props) {
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
  inherits_inherits(InstantSearch, _Component);

  createClass_createClass(InstantSearch, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var nextIsControlled = isControlled(nextProps);
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

    classCallCheck_classCallCheck(this, InstantSearch);

    _this = possibleConstructorReturn_possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(InstantSearch).call(this, props));

    defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "isUnmounting", false);

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
      onInternalStateUpdate: _this.onWidgetsInternalStateUpdate.bind(assertThisInitialized_assertThisInitialized(_this)),
      createHrefForState: _this.createHrefForState.bind(assertThisInitialized_assertThisInitialized(_this)),
      onSearchForFacetValues: _this.onSearchForFacetValues.bind(assertThisInitialized_assertThisInitialized(_this)),
      onSearchStateChange: _this.onSearchStateChange.bind(assertThisInitialized_assertThisInitialized(_this)),
      onSearchParameters: _this.onSearchParameters.bind(assertThisInitialized_assertThisInitialized(_this))
    };
    _this.state = {
      isControlled: isControlled(_this.props),
      instantSearchManager: instantSearchManager,
      contextValue: contextValue
    };
    return _this;
  }

  createClass_createClass(InstantSearch, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevIsControlled = isControlled(prevProps);

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
  inherits_inherits(Index, _Component);

  createClass_createClass(Index, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      return {
        indexContext: getIndexContext(props)
      };
    }
  }]);

  function Index(props) {
    var _this;

    classCallCheck_classCallCheck(this, Index);

    _this = possibleConstructorReturn_possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Index).call(this, props));

    defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "state", {
      indexContext: getIndexContext(_this.props)
    });

    defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "unregisterWidget", void 0);

    _this.props.contextValue.onSearchParameters(_this.getSearchParameters.bind(assertThisInitialized_assertThisInitialized(_this)), {
      ais: _this.props.contextValue,
      multiIndexContext: _this.state.indexContext
    }, _this.props, undefined);

    return _this;
  }

  createClass_createClass(Index, [{
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
      inherits_inherits(Connector, _Component);

      function Connector(props) {
        var _this;

        classCallCheck_classCallCheck(this, Connector);

        _this = possibleConstructorReturn_possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Connector).call(this, props));

        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "unsubscribe", void 0);

        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "unregisterWidget", void 0);

        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "isUnmounting", false);

        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "state", {
          providedProps: _this.getProvidedProps(_this.props)
        });

        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "refine", function () {
          var _ref;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this.props.contextValue.onInternalStateUpdate( // refine will always be defined here because the prop is only given conditionally
          (_ref = connectorDesc.refine).call.apply(_ref, [assertThisInitialized_assertThisInitialized(_this), _this.props, _this.props.contextValue.store.getState().widgets].concat(args)));
        });

        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "createURL", function () {
          var _ref2;

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return _this.props.contextValue.createHrefForState( // refine will always be defined here because the prop is only given conditionally
          (_ref2 = connectorDesc.refine).call.apply(_ref2, [assertThisInitialized_assertThisInitialized(_this), _this.props, _this.props.contextValue.store.getState().widgets].concat(args)));
        });

        defineProperty_defineProperty(assertThisInitialized_assertThisInitialized(_this), "searchForFacetValues", function () {
          var _ref3;

          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          _this.props.contextValue.onSearchForFacetValues( // searchForFacetValues will always be defined here because the prop is only given conditionally
          (_ref3 = connectorDesc.searchForFacetValues).call.apply(_ref3, [assertThisInitialized_assertThisInitialized(_this), _this.props, _this.props.contextValue.store.getState().widgets].concat(args)));
        });

        if (connectorDesc.getSearchParameters) {
          _this.props.contextValue.onSearchParameters(connectorDesc.getSearchParameters.bind(assertThisInitialized_assertThisInitialized(_this)), {
            ais: _this.props.contextValue,
            multiIndexContext: _this.props.indexContextValue
          }, _this.props, connectorDesc.getMetadata && connectorDesc.getMetadata.bind(assertThisInitialized_assertThisInitialized(_this)));
        }

        return _this;
      }

      createClass_createClass(Connector, [{
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
              props = objectWithoutProperties_objectWithoutProperties(_this$props, ["contextValue"]);

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
        items = objectWithoutProperties_objectWithoutProperties(props, ["children", "contextValue", "indexContextValue"]);

    return searchParameters.setQueryParameters(items);
  },
  transitionState: function transitionState(props, prevSearchState, nextSearchState) {
    var id = getId();

    var children = props.children,
        contextValue = props.contextValue,
        indexContextValue = props.indexContextValue,
        items = objectWithoutProperties_objectWithoutProperties(props, ["children", "contextValue", "indexContextValue"]);

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








var valHasLength = function valHasLength(value) {
  if (value.length >= 1) return true;
  return false;
};

var SearchBox_SearchBox = function SearchBox(props) {
  var currentRefinement = props.currentRefinement,
      refine = props.refine,
      id = props.id,
      placeholder = props.placeholder,
      selectedText = props.selectedText,
      inputProps = props.inputProps,
      onSelect = props.onSelect;

  var _useTabController = TabController_useTabController(),
      resetActiveElementIndex = _useTabController.resetActiveElementIndex,
      isResultsWindowOpen = _useTabController.isResultsWindowOpen,
      setIsResultsWindowOpen = _useTabController.setIsResultsWindowOpen,
      setSearchInputHeight = _useTabController.setSearchInputHeight;

  var inputRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])();
  var searchInputRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(null);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    refine(selectedText);
    inputRef.current.value = selectedText || "";
  }, [selectedText]);

  var handleOnChange = function handleOnChange(value, e) {
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

  var checkIfResultsWindowShouldOpen = function checkIfResultsWindowShouldOpen(e) {
    var value = e.target.value;
    setIsResultsWindowOpen(valHasLength(value));
  };

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
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
    inputClassName: "".concat(isResultsWindowOpen ? "focused" : "", " -mt-1 ais-SearchBox-input w-full"),
    value: currentRefinement,
    onChange: handleOnChange,
    onFocus: checkIfResultsWindowShouldOpen,
    "aria-label": "Search for a resource by typing here",
    placeholder: "".concat(placeholder ? placeholder : "Search..."),
    id: "search-box-".concat(id),
    autoComplete: "off",
    type: "search"
  }, inputProps))));
};

SearchBox_SearchBox.propTypes = {
  currentRefinement: prop_types_default.a.string.isRequired,
  refine: prop_types_default.a.func.isRequired,
  id: prop_types_default.a.string.isRequired,
  selectedText: prop_types_default.a.string
};
/* harmony default export */ var elements_SearchBox = (connectSearchBox(SearchBox_SearchBox));
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
function ResultPill_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ResultPill_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ResultPill_ownKeys(Object(source), true).forEach(function (key) { ResultPill_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ResultPill_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ResultPill_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var ResultPill_ResultPill = function ResultPill(props) {
  var children = props.children,
      elementIndex = props.elementIndex,
      sectionIndex = props.sectionIndex,
      formattedHitURL = props.formattedHitURL,
      noResults = props.noResults,
      onSelect = props.onSelect;

  var _useTabController = TabController_useTabController(),
      activeElementIndex = _useTabController.activeElementIndex,
      sectionLengthsArray = _useTabController.sectionLengthsArray,
      isResultsWindowOpen = _useTabController.isResultsWindowOpen,
      scrollWindowRef = _useTabController.scrollWindowRef,
      scrollableWindowHeight = _useTabController.scrollableWindowHeight,
      scrollableWindowTopOffset = _useTabController.scrollableWindowTopOffset,
      setScrollDistance = _useTabController.setScrollDistance,
      enterKeyWasPressed = _useTabController.enterKeyWasPressed,
      setEnterKeyWasPressed = _useTabController.setEnterKeyWasPressed,
      manuallySetActiveIndex = _useTabController.manuallySetActiveIndex;

  var resultPillRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(null);
  var clickableLink = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(null);
  var currentElementIndex = (sectionLengthsArray[sectionIndex - 1] || 0) + elementIndex;
  var isCurrentElement = activeElementIndex === currentElementIndex && isResultsWindowOpen && !noResults;
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
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
      var activePillBoundingRect = resultPillRef.current.getBoundingClientRect();
      var resultPillOffset = activePillBoundingRect.top + activePillBoundingRect.height;
      var activePillTopOffset = resultPillOffset - scrollableWindowTopOffset + scrollWindowRef.current.scrollTop;
      var distToScroll = 0;

      if (activePillTopOffset > scrollableWindowHeight) {
        distToScroll = activePillTopOffset - scrollableWindowHeight;
      }

      setScrollDistance(distToScroll);
    }
  }, [isCurrentElement, scrollableWindowHeight, scrollableWindowTopOffset, scrollWindowRef, setScrollDistance, setEnterKeyWasPressed, enterKeyWasPressed]);

  var handleHoverSelection = function handleHoverSelection() {
    manuallySetActiveIndex((sectionLengthsArray[sectionIndex - 1] || 0) + elementIndex);
  };

  if (noResults) {
    return Object(react_["jsx"])("li", {
      ref: resultPillRef,
      className: "mb-1",
      style: ResultPill_objectSpread({}, ResultPill_style.resultPill),
      tabIndex: 0,
      role: "option",
      "aria-selected": isCurrentElement,
      onMouseEnter: handleHoverSelection
    }, Object(react_["jsx"])("div", {
      ref: clickableLink,
      className: "px-2 border border-border rounded text-accent-eight",
      style: ResultPill_objectSpread({}, ResultPill_style.resultPillLink)
    }, children));
  }

  return Object(react_["jsx"])("li", {
    className: "mb-1",
    style: ResultPill_objectSpread({}, ResultPill_style.resultPill),
    tabIndex: 0,
    role: "option",
    "aria-selected": isCurrentElement,
    ref: resultPillRef,
    onMouseEnter: handleHoverSelection
  }, Object(react_["jsx"])("a", {
    ref: clickableLink,
    href: !onSelect ? formattedHitURL : null,
    onClick: onSelect,
    className: "px-2 rounded outline-none ".concat(isCurrentElement ? 'bg-accent-two text-foreground' : 'text-accent-eight'),
    style: ResultPill_objectSpread({}, ResultPill_style.resultPillLink)
  }, children));
};

ResultPill_ResultPill.defaultProps = {
  elementIndex: null,
  sectionIndex: null,
  noResults: false,
  onSelect: null
};
ResultPill_ResultPill.propTypes = {
  children: prop_types_default.a.node.isRequired,
  elementIndex: prop_types_default.a.number,
  sectionIndex: prop_types_default.a.number,
  formattedHitURL: prop_types_default.a.string.isRequired,
  noResults: prop_types_default.a.bool,
  onSelect: prop_types_default.a.func
};
/* harmony default export */ var ResultsList_ResultPill = (ResultPill_ResultPill);
// CONCATENATED MODULE: ./src/AlgoliaSearch/elements/ResultsList/SectionTitle/index.js





var SectionTitle_SectionTitle = function SectionTitle(_ref) {
  var title = _ref.title;
  return Object(react_["jsx"])("div", {
    className: "py-2 mb-2 top-0 bg-white border-b border-border"
  }, Object(react_["jsx"])(Typography_Text, {
    is: "p"
  }, title));
};

SectionTitle_SectionTitle.propTypes = {
  title: prop_types_default.a.string.isRequired
};
/* harmony default export */ var ResultsList_SectionTitle = (SectionTitle_SectionTitle);
// CONCATENATED MODULE: ./src/AlgoliaSearch/elements/ResultsList/index.js








var ResultsList_ResultsList = function ResultsList(props) {
  var hits = props.hits,
      sectionTitle = props.sectionTitle,
      sectionIndex = props.sectionIndex,
      renderCardInfo = props.renderCardInfo,
      formatHitURL = props.formatHitURL,
      onSelect = props.onSelect,
      isSelectable = props.isSelectable;

  var _useTabController = TabController_useTabController(),
      appendNewSectionLength = _useTabController.appendNewSectionLength,
      shouldHideResults = _useTabController.shouldHideResults,
      setIsResultsWindowOpen = _useTabController.setIsResultsWindowOpen;

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (hits.length > 0) {
      appendNewSectionLength(sectionIndex, hits.length);
    } else {
      appendNewSectionLength(sectionIndex, 0);
    }
  }, [hits.length]); // eslint-disable-line

  var formattedHitURL = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])(function (hit) {
    return formatHitURL ? formatHitURL(hit) : null;
  }, [formatHitURL]);

  if (Array.isArray(hits) && hits.length > 0 && !shouldHideResults) {
    return Object(react_["jsx"])(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Fragment, null, Object(react_["jsx"])(ResultsList_SectionTitle, {
      title: sectionTitle
    }), Object(react_["jsx"])("ul", {
      role: "listbox"
    }, typeof renderCardInfo === 'function' && hits.map(function (hit, index) {
      return Object(react_["jsx"])(ResultsList_ResultPill, {
        key: index,
        elementIndex: index,
        sectionIndex: sectionIndex,
        formattedHitURL: formattedHitURL(hit),
        onSelect: isSelectable ? function () {
          onSelect(hit);
          setIsResultsWindowOpen(false);
        } : null
      }, renderCardInfo(hit));
    })));
  }

  return null;
};

ResultsList_ResultsList.propTypes = {
  hits: prop_types_default.a.arrayOf(prop_types_default.a.shape({})).isRequired,
  sectionTitle: prop_types_default.a.string.isRequired,
  sectionIndex: prop_types_default.a.number.isRequired,
  renderCardInfo: prop_types_default.a.func.isRequired,
  formatHitURL: prop_types_default.a.func,
  onSelect: prop_types_default.a.func
};
/* harmony default export */ var elements_ResultsList = (connectHits(ResultsList_ResultsList));
// CONCATENATED MODULE: ./src/AlgoliaSearch/assets/ArrowDown/index.js



var ArrowDown_ArrowDown = function ArrowDown() {
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

/* harmony default export */ var assets_ArrowDown = (ArrowDown_ArrowDown);
// CONCATENATED MODULE: ./src/AlgoliaSearch/assets/ArrowUp/index.js



var ArrowUp_ArrowUp = function ArrowUp() {
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

/* harmony default export */ var assets_ArrowUp = (ArrowUp_ArrowUp);
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
function Controls_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Controls_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Controls_ownKeys(Object(source), true).forEach(function (key) { Controls_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Controls_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Controls_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Controls_Controls = function Controls() {
  var controlsRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(null);

  var _useTabController = TabController_useTabController(),
      setControlsHeight = _useTabController.setControlsHeight;

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (controlsRef !== null && controlsRef !== void 0 && controlsRef.current) {
      setControlsHeight(controlsRef.current.offsetHeight);
    }
  }, []);
  return Object(react_["jsx"])("div", {
    className: "p-3 bg-white rounded-b-md",
    style: Controls_objectSpread({}, Controls_style.controlBar),
    ref: controlsRef
  }, Object(react_["jsx"])("span", {
    className: "mr-2 rounded-sm text-accent-four",
    style: Controls_objectSpread({}, Controls_style.controlKey)
  }, Object(react_["jsx"])(assets_ArrowDown, null)), Object(react_["jsx"])("span", {
    className: "mr-2 rounded-sm text-accent-four",
    style: Controls_objectSpread({}, Controls_style.controlKey)
  }, Object(react_["jsx"])(assets_ArrowUp, null)), Object(react_["jsx"])("small", {
    className: "text-accent-four"
  }, "to navigate"));
};

/* harmony default export */ var elements_Controls = (Controls_Controls);
// CONCATENATED MODULE: ./src/AlgoliaSearch/elements/Loader/index.js



var Loader_Loader = function Loader() {
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

/* harmony default export */ var elements_Loader = (Loader_Loader);
// CONCATENATED MODULE: ./src/AlgoliaSearch/elements/NoResults/index.js




var NoResults_NoResults = function NoResults() {
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

/* harmony default export */ var elements_NoResults = (NoResults_NoResults);
// CONCATENATED MODULE: ./src/AlgoliaSearch/elements/SearchComponent/index.js
function SearchComponent_slicedToArray(arr, i) { return SearchComponent_arrayWithHoles(arr) || SearchComponent_iterableToArrayLimit(arr, i) || SearchComponent_unsupportedIterableToArray(arr, i) || SearchComponent_nonIterableRest(); }

function SearchComponent_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function SearchComponent_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SearchComponent_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SearchComponent_arrayLikeToArray(o, minLen); }

function SearchComponent_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SearchComponent_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function SearchComponent_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var SearchComponent_SearchComponent = function SearchComponent(props) {
  var ALGOLIA_APP_ID = props.ALGOLIA_APP_ID,
      ALGOLIA_API_SEARCH_KEY = props.ALGOLIA_API_SEARCH_KEY,
      indices = props.indices,
      searchOperators = props.searchOperators,
      specialChar = props.specialChar,
      scrollWindowHeight = props.scrollWindowHeight,
      customLoader = props.customLoader,
      customNoResults = props.customNoResults,
      indexResultsLimit = props.indexResultsLimit,
      className = props.className,
      placeholder = props.placeholder,
      formatSelected = props.formatSelected,
      onSelect = props.onSelect,
      inputProps = props.inputProps;

  var _useTabController = TabController_useTabController(),
      activeElementIndex = _useTabController.activeElementIndex,
      scrollableWindowHeight = _useTabController.scrollableWindowHeight,
      setScrollableWindowTopOffset = _useTabController.setScrollableWindowTopOffset,
      scrollableWindowTopOffset = _useTabController.scrollableWindowTopOffset,
      scrollDistance = _useTabController.scrollDistance,
      setScrollWindowRef = _useTabController.setScrollWindowRef,
      shouldBypassSearch = _useTabController.shouldBypassSearch,
      setShouldBypassSearch = _useTabController.setShouldBypassSearch,
      setScrollableWindowHeight = _useTabController.setScrollableWindowHeight,
      isScrollDisabled = _useTabController.isScrollDisabled,
      handleKeyNavigation = _useTabController.handleKeyNavigation,
      totalElementsCount = _useTabController.totalElementsCount,
      isResultsWindowOpen = _useTabController.isResultsWindowOpen,
      setIsResultsWindowOpen = _useTabController.setIsResultsWindowOpen,
      controlsHeight = _useTabController.controlsHeight,
      searchInputHeight = _useTabController.searchInputHeight;

  var algoliaClient = algoliasearch_lite_umd_default()(ALGOLIA_APP_ID, ALGOLIA_API_SEARCH_KEY);
  var isSelectable = Boolean(onSelect);
  var searchClient = {
    search: function search(requests) {
      if (shouldBypassSearch === true) return null;
      return algoliaClient.search(requests);
    }
  };
  var scrollWindowRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(null);
  var searchComponentRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(null);

  var _useState = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(""),
      _useState2 = SearchComponent_slicedToArray(_useState, 2),
      filterState = _useState2[0],
      setFilterState = _useState2[1];

  var _useState3 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(null),
      _useState4 = SearchComponent_slicedToArray(_useState3, 2),
      conditionalOperands = _useState4[0],
      setConditionalOperands = _useState4[1];

  var _useState5 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false),
      _useState6 = SearchComponent_slicedToArray(_useState5, 2),
      isSearchEmpty = _useState6[0],
      setIsSearchEmpty = _useState6[1];

  var _useState7 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(),
      _useState8 = SearchComponent_slicedToArray(_useState7, 2),
      selectedItem = _useState8[0],
      setSelectedItem = _useState8[1];

  var handleClickOutside = function handleClickOutside(e) {
    if (searchComponentRef.current.contains(e.target)) {
      return;
    }

    setIsResultsWindowOpen(false);
  };

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    setScrollWindowRef(scrollWindowRef);
  }, [setScrollWindowRef]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (controlsHeight && searchInputHeight) {
      setScrollableWindowHeight(scrollWindowHeight - controlsHeight - searchInputHeight);
    } else {
      setScrollableWindowHeight(scrollWindowHeight);
    }
  }, [scrollWindowHeight, controlsHeight, searchInputHeight]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (Array.isArray(searchOperators) && searchOperators.length > 0) {
      var sortedSearchOperators = searchOperators.sort(function (a, b) {
        return a.length - b.length;
      });
      var adjustedSearchOperators = sortedSearchOperators.map(function (condition) {
        return "".concat(specialChar).concat(condition);
      });
      setConditionalOperands(adjustedSearchOperators);
    }
  }, [specialChar, searchOperators]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    var scrollableResultsBoundingRect = scrollWindowRef.current.getBoundingClientRect();

    if (scrollableResultsBoundingRect !== scrollableWindowTopOffset) {
      setScrollableWindowTopOffset(scrollableResultsBoundingRect.top);
    }
  }, [setScrollableWindowTopOffset, activeElementIndex]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (typeof scrollDistance === "number" && isResultsWindowOpen && !isScrollDisabled) {
      scrollWindowRef.current.scrollTo(0, scrollDistance);
    }
  }, [scrollDistance, isResultsWindowOpen, isScrollDisabled]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    var interval = null;

    if (totalElementsCount === 0) {
      setTimeout(function () {
        if (totalElementsCount === 0) {
          setIsSearchEmpty(true);
        }
      }, 800);
    } else {
      setIsSearchEmpty(false);
    }

    return clearInterval(interval);
  }, [totalElementsCount]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (isResultsWindowOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isResultsWindowOpen]);

  var handleOnSearchStateChange = function handleOnSearchStateChange(_ref) {
    var query = _ref.query;
    var filter = "";
    var operandFound = false;

    if (query) {
      conditionalOperands.forEach(function (operand) {
        var operandIndex = query.indexOf(operand);

        if (operandIndex !== -1) {
          var _query$split = query.split(operand),
              _query$split2 = SearchComponent_slicedToArray(_query$split, 2),
              fieldName = _query$split2[0],
              compareValue = _query$split2[1];

          filter = "".concat(fieldName, " ").concat(operand.substr(specialChar.length), " ").concat(compareValue);
          operandFound = true;
        }
      });

      if (!operandFound && query.indexOf(specialChar) !== -1) {
        var _query$split3 = query.split(specialChar),
            _query$split4 = SearchComponent_slicedToArray(_query$split3, 2),
            fieldName = _query$split4[0],
            compareValue = _query$split4[1];

        filter = "".concat(fieldName, " = ").concat(compareValue);
        operandFound = true;
      }

      setFilterState(operandFound ? filter : "");
    }
  };

  var configureFilterState = function configureFilterState() {
    var searchConditions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (Array.isArray(searchConditions) && searchConditions.length > 0) {
      var conditionalFilterState = searchConditions.reduce(function (acc, condition, index) {
        var conditionType = condition.conditionType,
            conditionString = condition.conditionString;

        if (index === 0) {
          if (filterState) return "".concat(filterState, " ").concat(conditionType || "AND", " ").concat(conditionString);
          return "".concat(conditionString);
        }

        return "".concat(acc, " ").concat(conditionType || "AND", " ").concat(conditionString);
      }, "");
      return conditionalFilterState;
    }

    return filterState;
  };

  var handleOnKeyDown = function handleOnKeyDown(e) {
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

  var handleOnSelect = function handleOnSelect(hit) {
    if (isSelectable) {
      setSelectedItem(hit);
      onSelect(hit);
    }
  };

  var LoaderToRender = customLoader ? customLoader : Object(react_["jsx"])(elements_Loader, null);
  var NoResultsToRender = customNoResults ? customNoResults : Object(react_["jsx"])(elements_NoResults, null);
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
      visibility: "".concat(isResultsWindowOpen ? "visible" : "hidden")
    }
  }, Object(react_["jsx"])("div", {
    className: "overflow-y-auto pl-2 pr-2",
    style: {
      maxHeight: "".concat(scrollableWindowHeight, "px")
    },
    ref: scrollWindowRef
  }, indices.map(function (algoliaIndice, sectionIndex) {
    var indexName = algoliaIndice.indexName,
        displayName = algoliaIndice.displayName,
        renderCardInfo = algoliaIndice.renderCardInfo,
        formatHitURL = algoliaIndice.formatHitURL,
        searchConditions = algoliaIndice.searchConditions;
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

SearchComponent_SearchComponent.defaultProps = {
  scrollWindowHeight: 400,
  customLoader: null,
  customNoResults: null
};
SearchComponent_SearchComponent.propTypes = {
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
/* harmony default export */ var elements_SearchComponent = (SearchComponent_SearchComponent);
// CONCATENATED MODULE: ./src/AlgoliaSearch/index.js






var AlgoliaSearch_AlgoliaSearch = function AlgoliaSearch(props) {
  var ALGOLIA_APP_ID = props.ALGOLIA_APP_ID,
      ALGOLIA_API_SEARCH_KEY = props.ALGOLIA_API_SEARCH_KEY;

  if (!ALGOLIA_APP_ID || !ALGOLIA_API_SEARCH_KEY) {
    return Object(react_["jsx"])(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Fragment, null, !ALGOLIA_APP_ID && Object(react_["jsx"])("h1", null, "ALGOLIA_APP_ID prop was not found and is required."), !ALGOLIA_API_SEARCH_KEY && Object(react_["jsx"])("h1", null, "ALGOLIA_API_SEARCH_KEY prop was not found and is required."));
  }

  return Object(react_["jsx"])(providers_TabController, null, Object(react_["jsx"])(elements_SearchComponent, props));
};

AlgoliaSearch_AlgoliaSearch.defaultProps = {
  indexResultsLimit: 8,
  scrollWindowHeight: 400,
  className: null,
  parentWindowHeight: null
};
AlgoliaSearch_AlgoliaSearch.propTypes = {
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
/* harmony default export */ var src_AlgoliaSearch = (AlgoliaSearch_AlgoliaSearch);
// CONCATENATED MODULE: ./src/Badge/index.js





var Badge_Badge = function Badge(_ref) {
  var style = _ref.style,
      children = _ref.children,
      minimal = _ref.minimal,
      className = _ref.className,
      rounded = _ref.rounded;
  var badgeStyle = [{
    "text-foreground": style === "default",
    "text-success": style === "positive",
    "text-warning": style === "warning",
    "text-error": style === "danger"
  }];
  var isRounded = [{
    "rounded-full text-white": rounded,
    "bg-foreground": style === "default",
    "bg-success": style == "positive",
    "bg-warning": style === "warning",
    "bg-error": style === "danger"
  }];
  return Object(react_["jsx"])("div", {
    className: classnames_default()("inline-flex items-center px-2.5 rounded-md text-sm font-medium h-6 leading-6", !rounded && badgeStyle, !rounded && "border border-border", rounded && isRounded, className)
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

Badge_Badge.defaultProps = {
  style: "default",
  rounded: false,
  minimal: false
};
Badge_Badge.propTypes = {
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
/* harmony default export */ var src_Badge = (Badge_Badge);
// CONCATENATED MODULE: ./node_modules/@radix-ui/react-id/dist/index.module.js
function index_module_r(){return(index_module_r=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const index_module_t={prefix:Math.round(1e10*Math.random()),current:0},index_module_n=external_root_React_commonjs2_react_commonjs_react_amd_react_["createContext"](index_module_t);const IdProvider=o=>{const a=external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"](index_module_n),i=a===index_module_t,c=external_root_React_commonjs2_react_commonjs_react_amd_react_["useMemo"]((()=>({prefix:i?0:++a.prefix,current:0})),[i,a]);return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_n.Provider,index_module_r({value:c},o))};function useId(r){const o=external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"](index_module_n);return Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)||o!==index_module_t||console.warn("When server rendering, you must wrap your application in an <IdProvider> to ensure consistent ids are generated between the client and server."),external_root_React_commonjs2_react_commonjs_react_amd_react_["useMemo"]((()=>r||"radix-id-".concat(o.prefix,"-").concat(++o.current)),[r])}
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

// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
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
    medium.options = __assign({ async: true, ssr: false }, options);
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
function useCallbackRef(initialValue, callback) {
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
    return useCallbackRef(defaultValue, function (newValue) {
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
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
    var SideCar = sideCar;
    var containerRef = useMergeRefs([
        ref,
        parentRef
    ]);
    var containerProps = __assign({}, rest, callbacks);
    return (external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](external_root_React_commonjs2_react_commonjs_react_amd_react_["Fragment"], null,
        enabled && (external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](SideCar, { sideCar: effectCar, removeScrollBar: removeScrollBar, shards: shards, noIsolation: noIsolation, inert: inert, setCallbacks: setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref })),
        forwardProps ? (external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"](external_root_React_commonjs2_react_commonjs_react_amd_react_["Children"].only(children), __assign({}, containerProps, { ref: containerRef }))) : (external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Container, __assign({}, containerProps, { className: className, ref: containerRef }), children))));
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
    var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Target, __assign({}, rest));
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




var ReactRemoveScroll = external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](function (props, ref) { return (external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](RemoveScroll, __assign({}, props, { ref: ref, sideCar: sidecar }))); });
ReactRemoveScroll.classNames = RemoveScroll.classNames;
/* harmony default export */ var Combination = (ReactRemoveScroll);

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-focus-guards/dist/index.module.js
let dist_index_module_t=0;function FocusGuards(e){return useFocusGuards(),e.children}function useFocusGuards(){external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{var e,n;const r=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=r[0])&&void 0!==e?e:index_module_o()),document.body.insertAdjacentElement("beforeend",null!==(n=r[1])&&void 0!==n?n:index_module_o()),dist_index_module_t++,()=>{1===dist_index_module_t&&document.querySelectorAll("[data-radix-focus-guard]").forEach((e=>e.remove())),dist_index_module_t--}}),[])}function index_module_o(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}const Root=FocusGuards;
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-primitive/dist/index.module.js
const dist_index_module_r="div";const Primitive=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((o,i)=>{const{as:n=dist_index_module_r,...a}=o;/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](n,extends_extends({},a,{ref:i}))}));/*#__PURE__*/const index_module_Root=Primitive;function extendPrimitive(r,o){const i=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((i,n)=>{const a=r,s={...o.defaultProps,...i};/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](a,extends_extends({},s,{ref:n}))}));return i.displayName=o.displayName||"Extended"+r.displayName,i}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js
const useLayoutEffect=Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)?external_root_React_commonjs2_react_commonjs_react_amd_react_["useLayoutEffect"]:()=>{};
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-portal/dist/index.module.js
function index_module_a(){return(index_module_a=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t}).apply(this,arguments)}const Portal=external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((l,i)=>{var n,c;const{containerRef:u,style:d,...s}=l,p=null!==(n=null==u?void 0:u.current)&&void 0!==n?n:null===globalThis||void 0===globalThis||null===(c=globalThis.document)||void 0===c?void 0:c.body,[,f]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"]({});return useLayoutEffect((()=>{f({})}),[]),p?external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default.a.createPortal(external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Primitive,index_module_a({"data-radix-portal":""},s,{ref:i,style:p===document.body?{position:"absolute",top:0,left:0,zIndex:2147483647,...d}:void 0})),p):null}));Portal.displayName="Portal";const dist_index_module_Root=Portal;
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js
function index_module_useCallbackRef(r){const t=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](r);return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{t.current=r})),external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"](((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-focus-scope/dist/index.module.js
function dist_index_module_n(e){const t=document.activeElement;function n(t){if(c.paused)return;const n="focusout"===t.type?t.relatedTarget:t.target;e.contains(n)||dist_index_module_o(e,n)}const c={paused:!1,pause:()=>c.paused=!0,resume:()=>c.paused=!1,trap:function(){document.addEventListener("focusout",n,{capture:!0}),document.addEventListener("focusin",n,{capture:!0})},untrap:function(){document.removeEventListener("focusout",n,{capture:!0}),document.removeEventListener("focusin",n,{capture:!0})},destroy:()=>{!function(e){e.removeAttribute("tabIndex")}(e),c.untrap(),function(){const n=new Event("focusScope.autoFocusOnDestroy",{bubbles:!1,cancelable:!0});e.dispatchEvent(n),n.defaultPrevented||index_module_u(t)}(),react_focus_scope_dist_index_module_r.remove(c)}};return react_focus_scope_dist_index_module_r.add(c),function(e){if(e.tabIndex>-1)return;e.tabIndex=-1}(e),function(){const t=new Event("focusScope.autoFocusOnCreate",{bubbles:!1,cancelable:!0});e.dispatchEvent(t),t.defaultPrevented||dist_index_module_o(e,null)}(),c}function dist_index_module_o(e,t){const n=function(e){return document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e.tabIndex>=0&&!e.disabled?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP})}(e),o=t?t.compareDocumentPosition(e):Node.DOCUMENT_POSITION_PRECEDING;var r;if(o&Node.DOCUMENT_POSITION_PRECEDING)index_module_u(null!==(r=n.firstChild())&&void 0!==r?r:e);else if(o&Node.DOCUMENT_POSITION_FOLLOWING){var c;index_module_u(null!==(c=n.lastChild())&&void 0!==c?c:e)}}function index_module_u(e){e&&e.focus&&(e.focus({preventScroll:!0}),function(e){return e instanceof HTMLInputElement&&"select"in e}(e)&&e.select())}const react_focus_scope_dist_index_module_r=function(){let e=[];return{add(t){const n=e[0];t!==n&&(null==n||n.pause()),e=index_module_c(e,t),e.unshift(t)},remove(t){var n;e=index_module_c(e,t),null===(n=e[0])||void 0===n||n.resume()},size:()=>e.length}}();function index_module_c(e,t){const n=[...e],o=n.indexOf(t);return-1!==o&&n.splice(o,1),n}function FocusScope(o){const{children:u,trapped:r=!1}=o,c=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](null),s=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](),a=index_module_useCallbackRef(o.onMountAutoFocus),i=index_module_useCallbackRef(o.onUnmountAutoFocus);return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{const e=c.current;if(e)return e.addEventListener("focusScope.autoFocusOnCreate",a),e.addEventListener("focusScope.autoFocusOnDestroy",i),s.current=dist_index_module_n(e),()=>{e.removeEventListener("focusScope.autoFocusOnCreate",a),setTimeout((()=>{var t;null===(t=s.current)||void 0===t||t.destroy(),e.removeEventListener("focusScope.autoFocusOnDestroy",i)}),0)}}),[c,a,i]),external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{var e;if(r)return null===(e=s.current)||void 0===e||e.trap(),()=>{var e;return null===(e=s.current)||void 0===e?void 0:e.untrap()}}),[r]),u({ref:c})}const react_focus_scope_dist_index_module_Root=FocusScope;
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-use-body-pointer-events/dist/index.module.js
let react_use_body_pointer_events_dist_index_module_t,react_use_body_pointer_events_dist_index_module_o=0;function useBodyPointerEvents({disabled:n}){useLayoutEffect((()=>{if(n)return 0===react_use_body_pointer_events_dist_index_module_o&&(react_use_body_pointer_events_dist_index_module_t=document.body.style.pointerEvents),document.body.style.pointerEvents="none",react_use_body_pointer_events_dist_index_module_o++,()=>{react_use_body_pointer_events_dist_index_module_o--,0===react_use_body_pointer_events_dist_index_module_o&&(document.body.style.pointerEvents=react_use_body_pointer_events_dist_index_module_t)}}),[n])}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-dismissable-layer/dist/index.module.js
const[react_dismissable_layer_dist_index_module_r,react_dismissable_layer_dist_index_module_o]=index_module_m(),[dist_index_module_u,index_module_s]=index_module_f(),[dist_index_module_c,index_module_i]=index_module_m("TotalLayerCountWithDisabledOutsidePointerEventsProvider"),[dist_index_module_a,index_module_l]=index_module_f("RunningLayerCountWithDisabledOutsidePointerEventsProvider");function DismissableLayer(e){const t=0===index_module_s(),o=external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_d,e);return t?external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](react_dismissable_layer_dist_index_module_r,null,external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](dist_index_module_c,null,o)):o}function index_module_d(r){const{children:c,disableOutsidePointerEvents:d=!1,onEscapeKeyDown:m,onPointerDownOutside:f,onFocusOutside:v,onInteractOutside:E,onDismiss:p}=r,y=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](null),C=react_dismissable_layer_dist_index_module_o(),w=index_module_s()+1,L=w===C,P=index_module_i(d),b=index_module_l()+(d?1:0),h=b<P;useBodyPointerEvents({disabled:d}),function(t){const r=index_module_useCallbackRef(t);external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{const e=e=>{"Escape"===e.key&&r(e)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}),[r])}((e=>{L&&(null==m||m(e),e.defaultPrevented||null==p||p())}));const x=function(t){const r=index_module_useCallbackRef(t),o=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](!1);external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{const e=e=>{o.current||r(e),o.current=!1};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[r]);const u=()=>{o.current=!0};return{onMouseDownCapture:u,onTouchStartCapture:u}}((e=>{h||(null==f||f(e),null==E||E(e),e.defaultPrevented||null==p||p())})),D=function(e){const t=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](0);return{onBlurCapture:n=>{n.persist(),t.current=window.setTimeout((()=>{null==e||e(n)}),0)},onFocusCapture:()=>{window.clearTimeout(t.current)}}}((e=>{null==v||v(e),null==E||E(e),e.defaultPrevented||null==p||p()})),T=P>0&&!h;return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](dist_index_module_u,{runningCount:w},external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](dist_index_module_a,{runningCount:b},c({ref:y,style:T?{pointerEvents:"auto"}:{},...x,...D})))}function index_module_m(e){const t=external_root_React_commonjs2_react_commonjs_react_amd_react_["createContext"]({total:0,setTotal:()=>{}}),r=({children:e})=>{const[r,o]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](0),u=external_root_React_commonjs2_react_commonjs_react_amd_react_["useMemo"]((()=>({total:r,setTotal:o})),[r,o]);return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](t.Provider,{value:u},e)};return e&&(r.displayName=e),[r,function(e=!0){const{total:r,setTotal:o}=external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"](t);return external_root_React_commonjs2_react_commonjs_react_amd_react_["useLayoutEffect"]((()=>{if(e)return o((e=>e+1)),()=>o((e=>e-1))}),[e,o]),r}]}function index_module_f(e){const t=external_root_React_commonjs2_react_commonjs_react_amd_react_["createContext"](0),r=e=>{const{children:r,runningCount:o}=e;return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](t.Provider,{value:o},r)};return e&&(r.displayName=e),[r,function(){return external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"](t)||0}]}const react_dismissable_layer_dist_index_module_Root=DismissableLayer;
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-arrow/dist/index.module.js
function react_arrow_dist_index_module_t(){return(react_arrow_dist_index_module_t=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r}).apply(this,arguments)}const Arrow=external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((n,a)=>{const{as:i=react_arrow_dist_index_module_o,...s}=n;return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Primitive,react_arrow_dist_index_module_t({},s,{as:i,ref:a}))}));const react_arrow_dist_index_module_o=external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((r,o)=>{const{width:n=10,height:a=5,...i}=r;return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("svg",react_arrow_dist_index_module_t({},i,{ref:o,width:n,height:a,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("polygon",{points:"0,0 30,0 15,10"}))}));Arrow.displayName="Arrow";const react_arrow_dist_index_module_Root=Arrow;
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-use-size/dist/index.module.js
function useSize(r){const[t,i]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](void 0);return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{if(r.current){const e=r.current,t=new ResizeObserver((r=>{if(!Array.isArray(r))return;if(!r.length)return;const t=r[0];let n,o;if("borderBoxSize"in t){const e=t.borderBoxSize,r=Array.isArray(e)?e[0]:e;n=r.inlineSize,o=r.blockSize}else{const r=e.getBoundingClientRect();n=r.width,o=r.height}i({width:n,height:o})}));return t.observe(e,{box:"border-box"}),()=>{i(void 0),t.unobserve(e)}}}),[r]),t}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/rect/dist/index.module.js
function observeElementRect(n,o){const a=index_module_e.get(n);return void 0===a?(index_module_e.set(n,{rect:{},callbacks:[o]}),1===index_module_e.size&&(rect_dist_index_module_t=requestAnimationFrame(rect_dist_index_module_c))):a.callbacks.push(o),()=>{const c=index_module_e.get(n);if(void 0===c)return;const a=c.callbacks.indexOf(o);a>-1&&c.callbacks.splice(a,1),0===c.callbacks.length&&(index_module_e.delete(n),0===index_module_e.size&&cancelAnimationFrame(rect_dist_index_module_t))}}let rect_dist_index_module_t;const index_module_e=new Map;function rect_dist_index_module_c(){const n=[];index_module_e.forEach(((t,e)=>{const c=e.getBoundingClientRect();var o,a;o=t.rect,a=c,(o.width!==a.width||o.height!==a.height||o.top!==a.top||o.right!==a.right||o.bottom!==a.bottom||o.left!==a.left)&&(t.rect=c,n.push(t))})),n.forEach((t=>{t.callbacks.forEach((e=>e(t.rect)))})),rect_dist_index_module_t=requestAnimationFrame(rect_dist_index_module_c)}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-use-rect/dist/index.module.js
function useRect(o){const[u,c]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"]();return useLayoutEffect((()=>{if(o.current){const r=observeElementRect(o.current,c);return()=>{c(void 0),r()}}}),[o]),u}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-context/dist/index.module.js
function createContext(t){const n=external_root_React_commonjs2_react_commonjs_react_amd_react_["createContext"](null);function r(t){const{children:r,...o}=t,c=external_root_React_commonjs2_react_commonjs_react_amd_react_["useMemo"]((()=>o),Object.values(o));return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](n.Provider,{value:c},r)}return r.displayName=t+"Provider",[r,function(r){const o=external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"](n);if(null===o)throw new Error("`".concat(r,"` must be used within `").concat(t,"`"));return o}]}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-compose-refs/dist/index.module.js
function composeRefs(...o){return e=>o.forEach((o=>function(o,e){"function"==typeof o?o(e):null!=o&&(o.current=e)}(o,e)))}function useComposedRefs(...e){return external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"](composeRefs(...e),e)}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/popper/dist/index.module.js
const SIDE_OPTIONS=["top","right","bottom","left"];const ALIGN_OPTIONS=["start","center","end"];function getPlacementData({anchorRect:c,popperSize:s,arrowSize:f,arrowOffset:l=0,side:d,sideOffset:h=0,align:x,alignOffset:g=0,shouldAvoidCollisions:u=!0,collisionBoundariesRect:w,collisionTolerance:m=0}){if(!c||!s||!w)return{popperStyles:popper_dist_index_module_r,arrowStyles:popper_dist_index_module_n};const y=function(e,o,r=0,n=0,i){const c=i?i.height:0,a=popper_dist_index_module_t(o,e,"x"),p=popper_dist_index_module_t(o,e,"y"),s=p.before-r-c,f=p.after+r+c,l=a.before-r-c,d=a.after+r+c;return{top:{start:{x:a.start+n,y:s},center:{x:a.center,y:s},end:{x:a.end-n,y:s}},right:{start:{x:d,y:p.start+n},center:{x:d,y:p.center},end:{x:d,y:p.end-n}},bottom:{start:{x:a.start+n,y:f},center:{x:a.center,y:f},end:{x:a.end-n,y:f}},left:{start:{x:l,y:p.start+n},center:{x:l,y:p.center},end:{x:l,y:p.end-n}}}}(s,c,h,g,f),b=y[d][x];if(!1===u){const t=dist_index_module_e(b);let r=popper_dist_index_module_n;f&&(r=dist_index_module_i({popperSize:s,arrowSize:f,arrowOffset:l,side:d,align:x}));return{popperStyles:{...t,"--radix-popper-transform-origin":popper_dist_index_module_o(s,d,x,l,f)},arrowStyles:r,placedSide:d,placedAlign:x}}const S=DOMRect.fromRect({...s,...b}),O=(z=w,R=m,DOMRect.fromRect({width:z.width-2*R,height:z.height-2*R,x:z.left+R,y:z.top+R}));var z,R;const M=index_module_p(S,O),D=y[popper_dist_index_module_a(d)][x],A=function(t,e,o){const r=popper_dist_index_module_a(t);return e[t]&&!o[r]?r:t}(d,M,index_module_p(DOMRect.fromRect({...s,...D}),O)),I=function(t,e,o,r,n){const i="top"===o||"bottom"===o,c=i?"left":"top",a=i?"right":"bottom",p=i?"width":"height",s=e[p]>t[p];if(("start"===r||"center"===r)&&(n[c]&&s||n[a]&&!s))return"end";if(("end"===r||"center"===r)&&(n[a]&&s||n[c]&&!s))return"start";return r}(s,c,d,x,M),v=dist_index_module_e(y[A][I]);let C=popper_dist_index_module_n;f&&(C=dist_index_module_i({popperSize:s,arrowSize:f,arrowOffset:l,side:A,align:I}));return{popperStyles:{...v,"--radix-popper-transform-origin":popper_dist_index_module_o(s,A,I,l,f)},arrowStyles:C,placedSide:A,placedAlign:I}}function popper_dist_index_module_t(t,e,o){const r=t["x"===o?"left":"top"],n="x"===o?"width":"height",i=t[n],c=e[n];return{before:r-c,start:r,center:r+(i-c)/2,end:r+i-c,after:r+i}}function dist_index_module_e(t){const e=Math.round(t.x+window.scrollX),o=Math.round(t.y+window.scrollY);return{position:"absolute",top:0,left:0,minWidth:"max-content",willChange:"transform",transform:"translate3d(".concat(e,"px, ").concat(o,"px, 0)")}}function popper_dist_index_module_o(t,e,o,r,n){const i="top"===e||"bottom"===e,c=n?n.width:0,a=n?n.height:0,p=c/2+r;let s="",f="";return i?(s={start:"".concat(p,"px"),center:"center",end:"".concat(t.width-p,"px")}[o],f="".concat("top"===e?t.height+a:-a,"px")):(s="".concat("left"===e?t.width+a:-a,"px"),f={start:"".concat(p,"px"),center:"center",end:"".concat(t.height-p,"px")}[o]),"".concat(s," ").concat(f)}const popper_dist_index_module_r={position:"fixed",top:0,left:0,opacity:0,pointerEvents:"none"},popper_dist_index_module_n={position:"absolute",opacity:0};function dist_index_module_i({popperSize:t,arrowSize:e,arrowOffset:o,side:r,align:n}){const i=(t.width-e.width)/2,a=(t.height-e.width)/2,p={top:0,right:90,bottom:180,left:-90}[r],s=Math.max(e.width,e.height),f={width:"".concat(s,"px"),height:"".concat(s,"px"),transform:"rotate(".concat(p,"deg)"),willChange:"transform",position:"absolute",[r]:"100%",direction:popper_dist_index_module_c(r,n)};return"top"!==r&&"bottom"!==r||("start"===n&&(f.left="".concat(o,"px")),"center"===n&&(f.left="".concat(i,"px")),"end"===n&&(f.right="".concat(o,"px"))),"left"!==r&&"right"!==r||("start"===n&&(f.top="".concat(o,"px")),"center"===n&&(f.top="".concat(a,"px")),"end"===n&&(f.bottom="".concat(o,"px"))),f}function popper_dist_index_module_c(t,e){return("top"!==t&&"right"!==t||"end"!==e)&&("bottom"!==t&&"left"!==t||"end"===e)?"ltr":"rtl"}function popper_dist_index_module_a(t){return{top:"bottom",right:"left",bottom:"top",left:"right"}[t]}function index_module_p(t,e){return{top:t.top<e.top,right:t.right>e.right,bottom:t.bottom>e.bottom,left:t.left<e.left}}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-popper/dist/index.module.js
function dist_index_module_p(){return(dist_index_module_p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}const[dist_index_module_l,react_popper_dist_index_module_c]=createContext("Popper");const Popper=external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,i)=>{const{anchorRef:c,side:f="bottom",sideOffset:d,align:u="center",alignOffset:w,collisionTolerance:m,avoidCollisions:y=!0,...v}=e,[x,g]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](),h=useRect(c),R=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](null),E=useSize(R),A=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](null),O=useSize(A),P=useComposedRefs(i,R),S=function(){const[e,r]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](void 0);return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{let e;function o(){r({width:window.innerWidth,height:window.innerHeight})}function t(){window.clearTimeout(e),e=window.setTimeout(o,100)}return o(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)}),[]),e}(),b=S?DOMRect.fromRect({...S,x:0,y:0}):void 0,{popperStyles:z,arrowStyles:C,placedSide:T,placedAlign:j}=getPlacementData({anchorRect:h,popperSize:E,arrowSize:O,arrowOffset:x,side:f,sideOffset:d,align:u,alignOffset:w,shouldAvoidCollisions:y,collisionBoundariesRect:b,collisionTolerance:m}),k=void 0!==T;return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("div",{style:z,"data-radix-popper-wrapper":""},external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](dist_index_module_l,{arrowRef:A,arrowStyles:C,onArrowOffsetChange:g},external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Primitive,dist_index_module_p({"data-side":T,"data-align":j},v,{style:{...v.style,animation:k?void 0:"none"},ref:P}))))}));Popper.displayName="Popper";const PopperArrow=external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"]((function(r,o){const{offset:t,...i}=r,n=react_popper_dist_index_module_c("PopperArrow"),{onArrowOffsetChange:a}=n;return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>a(t)),[a,t]),external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("span",{style:{...n.arrowStyles,pointerEvents:"none"}},external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("span",{ref:n.arrowRef,style:{display:"inline-block",verticalAlign:"top",pointerEvents:"auto"}},external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](react_arrow_dist_index_module_Root,dist_index_module_p({},i,{ref:o,style:{...i.style,display:"block"}}))))}));PopperArrow.displayName="PopperArrow";const react_popper_dist_index_module_Root=Popper;const index_module_Arrow=PopperArrow;
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js
function useControllableState({prop:o,defaultProp:r,onChange:n=(()=>{})}){const[a,u]=function({defaultProp:o,onChange:r}){const n=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](o),[a]=n,u=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](a),c=index_module_useCallbackRef(r);return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{u.current!==a&&(c(a),u.current=a)}),[a,u,c]),n}({defaultProp:r,onChange:n}),c=void 0!==o,f=c?o:a,l=index_module_useCallbackRef(n);return[f,external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"]((e=>{if(c){const t=e,r="function"==typeof e?t(o):e;r!==o&&l(r)}else u(e)}),[c,o,u,l])]}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/number/dist/index.module.js
function clamp(t,[n,r]){return Math.min(r,Math.max(n,t))}function wrap(t,n){return(n+t)%n}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-roving-focus/dist/index.module.js
const[react_roving_focus_dist_index_module_i,react_roving_focus_dist_index_module_c]=createContext("RovingFocusGroup");function RovingFocusGroup(t){const{children:r,orientation:n,loop:c,dir:u}=t,[l=!0,s]=useControllableState({prop:t.reachable,defaultProp:t.defaultReachable,onChange:t.onReachableChange}),[p,d]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](null),f=external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"](((o,e)=>{d((t=>l?e||!t?o:t:null))}),[l]);/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](react_roving_focus_dist_index_module_i,{groupId:useId(),orientation:n,dir:u,loop:c,tabStopId:p,onTabStopIdChange:f,reachable:l,onReachableChange:s},r)}/*#__PURE__*/function useRovingFocus({disabled:e,active:t}){const i=useId(),p=react_roving_focus_dist_index_module_c("RovingFocusItem"),d=i===p.tabStopId,{onTabStopIdChange:f}=p;return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{f(i,t)}),[t,i,f]),e?{tabIndex:-1,onMouseDown:o=>o.preventDefault()}:{[dist_index_module_s]:p.groupId,tabIndex:d?0:-1,onFocus:()=>{p.onReachableChange(!0),p.onTabStopIdChange(i)},onKeyDown:o=>{const e=function(o,e,t){const r=function(o,e){return"rtl"!==e?o:"ArrowLeft"===o?"ArrowRight":"ArrowRight"===o?"ArrowLeft":o}(o.key,t);return"vertical"===e&&["ArrowLeft","ArrowRight"].includes(r)||"horizontal"===e&&["ArrowUp","ArrowDown"].includes(r)?void 0:react_roving_focus_dist_index_module_u[r]}(o,p.orientation,p.dir);if(react_roving_focus_dist_index_module_l.includes(o.key)&&o.stopPropagation(),void 0!==e){o.preventDefault();const a=(t=p.groupId,Array.from(document.querySelectorAll(`[${dist_index_module_s}="${t}"]`))),i=a.length,c=document.activeElement,u=c?a.indexOf(c):-1;let l={first:0,last:i-1,prev:u-1,next:u+1}[e];l=p.loop?wrap(l,i):clamp(l,[0,i-1]);const d=a[l];d&&setTimeout((()=>d.focus()))}var t}}}const react_roving_focus_dist_index_module_u={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},react_roving_focus_dist_index_module_l=Object.keys(react_roving_focus_dist_index_module_u);const dist_index_module_s="data-radix-roving-focus-group-id";const react_roving_focus_dist_index_module_Root=RovingFocusGroup;
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-presence/dist/index.module.js
const Presence=u=>{const{present:r,children:o}=u,s=function(e){const[u,r]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](),[o,s]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](),i=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](e),c=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](),d=e?"mounted":"unmounted",[m,a]=function(e,t){return external_root_React_commonjs2_react_commonjs_react_amd_react_["useReducer"](((e,n)=>{const u=t[e][n];return null!=u?u:e}),e)}(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{if(u){const e=getComputedStyle(u);c.current=react_presence_dist_index_module_t(e),s(e)}}),[u]),external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{const n=i.current;if(n!==e){const u=c.current,r=react_presence_dist_index_module_t(o);if(c.current=r,e)a("MOUNT");else if("none"===(null==o?void 0:o.display))a("UNMOUNT");else{const e=u!==r;a(n&&e?"ANIMATION_OUT":"UNMOUNT")}i.current=e}}),[e,o,a]),external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{if(u){const e=e=>{const n=react_presence_dist_index_module_t(o),r=e.animationName===n;e.target===u&&r&&a("ANIMATION_END")};return u.addEventListener("animationcancel",e),u.addEventListener("animationend",e),()=>{u.removeEventListener("animationcancel",e),u.removeEventListener("animationend",e)}}}),[u,e,o,a]),{ref:e=>r(e),isPresent:["mounted","unmountSuspended"].includes(m)}}(r),i="function"==typeof o?o({present:s.isPresent}):external_root_React_commonjs2_react_commonjs_react_amd_react_["Children"].only(o),c=useComposedRefs(s.ref,i.ref);return"function"==typeof o||s.isPresent?external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"](i,{ref:c}):null};function react_presence_dist_index_module_t(e){return(null==e?void 0:e.animationName)||"none"}Presence.displayName="Presence";
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/primitive/dist/index.module.js
function composeEventHandlers(e,n,{checkForDefaultPrevented:t=!0}={}){return function(r){if(null==e||e(r),!1===t||!r.defaultPrevented)return null==n?void 0:n(r)}}
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-menu/dist/index.module.js
function index_module_x(){const e=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](0),t=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](""),o=external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"]((r=>{t.current=r,window.clearTimeout(e.current),e.current=window.setTimeout((()=>o("")),1e3)}),[]);return{onKeyDownCapture:e=>{if(1===e.key.length&&!(e.ctrlKey||e.altKey||e.metaKey)){const r=e.currentTarget;o(t.current+e.key)," "!==e.key||t.current.startsWith(" ")||e.stopPropagation();const n=document.activeElement,a=n?index_module_y(n):void 0,u=function(e,t,o){const r=t.length>1&&Array.from(t).every((e=>e===t[0]))?t[0]:t,n=o?e.indexOf(o):-1;let a=(u=e,c=Math.max(n,0),u.map(((e,t)=>u[(c+t)%u.length])));var u,c;1===r.length&&(a=a.filter((e=>e!==o)));const s=a.find((e=>e.toLowerCase().startsWith(r.toLowerCase())));return s!==o?s:void 0}(Array.from(r.querySelectorAll("[".concat(index_module_w,"]"))).map(index_module_y),t.current,a),c=r.querySelector("[".concat(index_module_w,'="').concat(u,'"]'));c&&setTimeout((()=>c.focus()))}}}}const index_module_y=e=>{var t;return null!==(t=e.getAttribute(index_module_w))&&void 0!==t?t:""},index_module_w="data-radix-menu-typeahead-item";function index_module_C(){return(index_module_C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}const index_module_b=["ArrowDown","PageUp","Home"],index_module_D=[...index_module_b,"ArrowUp","PageDown","End"],[index_module_E,index_module_I]=createContext("Menu");const Menu=external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,t)=>{const{forceMount:o,open:r=!1,...n}=e;return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Presence,{present:o||r},external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_R,index_module_C({"data-state":index_module_S(r)},n,{ref:t,open:r})))}));const index_module_R=external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((s,i)=>{const{open:l,onOpenChange:d,anchorRef:p,loop:v,trapFocus:y,onOpenAutoFocus:w,onCloseAutoFocus:I,disableOutsidePointerEvents:R,onEscapeKeyDown:g,onPointerDownOutside:F,onFocusOutside:P,onInteractOutside:S,onDismiss:A,disableOutsideScroll:O,portalled:K,...G}=s,L=index_module_useCallbackRef(d),N=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](null),[T,V]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](0),[B,U]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](!1),q=index_module_x();external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{V(B?-1:0)}),[B]);const[j,W]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"](!1),z=K?Portal:external_root_React_commonjs2_react_commonjs_react_amd_react_["Fragment"],H=O?Combination:external_root_React_commonjs2_react_commonjs_react_amd_react_["Fragment"];return useFocusGuards(),external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{const t=N.current;if(t)return hideOthers(t)}),[]),external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](z,null,external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](H,null,external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_E,{menuRef:N,onItemsReachableChange:U,onOpenChange:L},external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](RovingFocusGroup,{reachable:B,onReachableChange:U,orientation:"vertical",loop:v},external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](FocusScope,{trapped:!j&&(y&&l),onMountAutoFocus:w,onUnmountAutoFocus:e=>{j?e.preventDefault():null==I||I(e)}},(e=>external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](DismissableLayer,{disableOutsidePointerEvents:R,onEscapeKeyDown:g,onPointerDownOutside:composeEventHandlers(F,(e=>{const t=0===e.button&&!1===e.ctrlKey;W(!R&&t),e.defaultPrevented&&W(!1)}),{checkForDefaultPrevented:!1}),onFocusOutside:composeEventHandlers(P,(e=>{y&&e.preventDefault()}),{checkForDefaultPrevented:!1}),onInteractOutside:S,onDismiss:A},(t=>external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](react_popper_dist_index_module_Root,index_module_C({role:"menu"},G,{ref:composeRefs(i,N,e.ref,t.ref),anchorRef:p,tabIndex:T,style:{...t.style,outline:"none",...G.style},onBlurCapture:composeEventHandlers(G.onBlurCapture,t.onBlurCapture,{checkForDefaultPrevented:!1}),onFocusCapture:composeEventHandlers(G.onFocusCapture,t.onFocusCapture,{checkForDefaultPrevented:!1}),onMouseDownCapture:composeEventHandlers(G.onMouseDownCapture,t.onMouseDownCapture,{checkForDefaultPrevented:!1}),onTouchStartCapture:composeEventHandlers(G.onTouchStartCapture,t.onTouchStartCapture,{checkForDefaultPrevented:!1}),onKeyDownCapture:composeEventHandlers(G.onKeyDownCapture,q.onKeyDownCapture),onKeyDown:composeEventHandlers(G.onKeyDown,(e=>{const t=N.current;if(e.target===t&&index_module_D.includes(e.key)){e.preventDefault();const o=Array.from(t.querySelectorAll(index_module_k)),r=index_module_b.includes(e.key)?o[0]:o.reverse()[0];null==r||r.focus()}}))}))))))))))}));Menu.displayName="Menu";const index_module_k="[".concat("data-radix-menu-item","]:not([data-disabled])");const MenuItem=external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,t)=>{const{disabled:o,textValue:r,onSelect:n,...a}=e,u=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](null),c=useComposedRefs(t,u),l=index_module_I("MenuItem"),d=useRovingFocus({disabled:o}),[m,p]=external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"]("");external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{const e=u.current;var t;e&&p((null!==(t=e.textContent)&&void 0!==t?t:"").trim())}),[a.children]);const f=function({textValue:e,disabled:t}){return{[index_module_w]:t?void 0:e}}({textValue:null!=r?r:m,disabled:o}),x=()=>{const e=u.current;if(!o&&e){var t;const o=new Event("menu.itemSelect",{bubbles:!0,cancelable:!0});if(e.dispatchEvent(o),o.defaultPrevented)return;null===(t=l.onOpenChange)||void 0===t||t.call(l,!1)}};return external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"]((()=>{const e=u.current;if(e){const t=e=>null==n?void 0:n(e);return e.addEventListener("menu.itemSelect",t),()=>e.removeEventListener("menu.itemSelect",t)}}),[n]),external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Primitive,index_module_C({role:"menuitem","aria-disabled":o||void 0},a,d,f,{"data-radix-menu-item":"",ref:c,"data-disabled":o?"":void 0,onFocus:composeEventHandlers(a.onFocus,d.onFocus),onKeyDown:composeEventHandlers(a.onKeyDown,composeEventHandlers(d.onKeyDown,(e=>{o||"Enter"!==e.key&&" "!==e.key||x()}))),onMouseDown:composeEventHandlers(a.onMouseDown,d.onMouseDown),onMouseUp:composeEventHandlers(a.onMouseUp,x),onMouseMove:composeEventHandlers(a.onMouseMove,(e=>{if(!o){e.currentTarget.focus()}})),onBlur:composeEventHandlers(a.onBlur,(e=>{l.onItemsReachableChange(!1)})),onMouseLeave:composeEventHandlers(a.onMouseLeave,(e=>{var t;null===(t=l.menuRef.current)||void 0===t||t.focus()}))}))}));MenuItem.displayName="MenuItem";const MenuCheckboxItem=external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,t)=>{const{checked:o=!1,onCheckedChange:r,...n}=e;return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_P.Provider,{value:o},external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](MenuItem,index_module_C({role:"menuitemcheckbox","aria-checked":o},n,{ref:t,"data-state":index_module_A(o),onSelect:composeEventHandlers(n.onSelect,(()=>null==r?void 0:r(!o)),{checkForDefaultPrevented:!1})})))}));MenuCheckboxItem.displayName="MenuCheckboxItem";const index_module_g=external_root_React_commonjs2_react_commonjs_react_amd_react_["createContext"]({});const MenuRadioGroup=external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,t)=>{const{value:o,onValueChange:r,...n}=e,a=index_module_useCallbackRef(r),u=external_root_React_commonjs2_react_commonjs_react_amd_react_["useMemo"]((()=>({value:o,onValueChange:a})),[o,a]);return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_g.Provider,{value:u},external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](MenuGroup,index_module_C({},n,{ref:t})))}));MenuRadioGroup.displayName="MenuRadioGroup";const MenuRadioItem=external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,t)=>{const{value:o,...r}=e,n=external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"](index_module_g),a=o===n.value;return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](index_module_P.Provider,{value:a},external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](MenuItem,index_module_C({role:"menuitemradio","aria-checked":a},r,{ref:t,"data-state":index_module_A(a),onSelect:composeEventHandlers(r.onSelect,(()=>{var e;return null===(e=n.onValueChange)||void 0===e?void 0:e.call(n,o)}),{checkForDefaultPrevented:!1})})))}));MenuRadioItem.displayName="MenuRadioItem";const index_module_F="span",index_module_P=external_root_React_commonjs2_react_commonjs_react_amd_react_["createContext"](!1);const MenuItemIndicator=external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,t)=>{const{as:o=index_module_F,forceMount:r,...n}=e,a=external_root_React_commonjs2_react_commonjs_react_amd_react_["useContext"](index_module_P);return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Presence,{present:r||a},external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Primitive,index_module_C({},n,{as:o,ref:t,"data-state":index_module_A(a)})))}));MenuItemIndicator.displayName="MenuItemIndicator";const MenuGroup=extendPrimitive(Primitive,{defaultProps:{role:"group"},displayName:"MenuGroup"});const MenuLabel=extendPrimitive(Primitive,{displayName:"MenuLabel"});const MenuSeparator=extendPrimitive(Primitive,{defaultProps:{role:"separator","aria-orientation":"horizontal"},displayName:"MenuSeparator "});const MenuArrow=extendPrimitive(index_module_Arrow,{displayName:"MenuArrow"});function index_module_S(e){return e?"open":"closed"}function index_module_A(e){return e?"checked":"unchecked"}const react_menu_dist_index_module_Root=Menu;const Group=MenuGroup;const Label=MenuLabel;const Item=MenuItem;const CheckboxItem=MenuCheckboxItem;const RadioGroup=MenuRadioGroup;const RadioItem=MenuRadioItem;const ItemIndicator=MenuItemIndicator;const Separator=MenuSeparator;const dist_index_module_Arrow=MenuArrow;
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./node_modules/@radix-ui/react-dropdown-menu/dist/index.module.js
function react_dropdown_menu_dist_index_module_u(){return(react_dropdown_menu_dist_index_module_u=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(o[r]=n[r])}return o}).apply(this,arguments)}const[react_dropdown_menu_dist_index_module_s,react_dropdown_menu_dist_index_module_c]=createContext("DropdownMenu");const DropdownMenu=e=>{const{children:n,open:r,defaultOpen:p,onOpenChange:a}=e,d=external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"](null),[u=!1,c]=useControllableState({prop:r,defaultProp:p,onChange:a});return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](react_dropdown_menu_dist_index_module_s,{triggerRef:d,contentId:useId(),open:u,onOpenChange:c,onOpenToggle:external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"]((()=>c((o=>!o))),[c])},n)};DropdownMenu.displayName="DropdownMenu";const react_dropdown_menu_dist_index_module_l="button";const DropdownMenuTrigger=external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((o,e)=>{const{as:r=react_dropdown_menu_dist_index_module_l,...t}=o,p=react_dropdown_menu_dist_index_module_c("DropdownMenuTrigger"),s=useComposedRefs(e,p.triggerRef);return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Primitive,react_dropdown_menu_dist_index_module_u({type:"button","aria-haspopup":"menu","aria-expanded":!!p.open||void 0,"aria-controls":p.open?p.contentId:void 0,"data-state":p.open?"open":"closed"},t,{as:r,ref:s,onMouseDown:composeEventHandlers(o.onMouseDown,(o=>{0===o.button&&!1===o.ctrlKey&&p.onOpenToggle()})),onKeyDown:composeEventHandlers(o.onKeyDown,(o=>{[" ","Enter","ArrowUp","ArrowDown"].includes(o.key)&&(o.preventDefault(),p.onOpenChange(!0))}))}))}));DropdownMenuTrigger.displayName="DropdownMenuTrigger";const DropdownMenuContent=external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((o,n)=>{const{onCloseAutoFocus:r,disableOutsidePointerEvents:t=!0,disableOutsideScroll:p=!0,portalled:a=!0,...s}=o,l=react_dropdown_menu_dist_index_module_c("DropdownMenuContent");return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](react_menu_dist_index_module_Root,react_dropdown_menu_dist_index_module_u({id:l.contentId},s,{ref:n,disableOutsidePointerEvents:t,disableOutsideScroll:p,portalled:a,style:{...o.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)"},open:l.open,onOpenChange:l.onOpenChange,anchorRef:o.anchorRef||l.triggerRef,trapFocus:!0,onCloseAutoFocus:composeEventHandlers(r,(o=>{var e;o.preventDefault(),null===(e=l.triggerRef.current)||void 0===e||e.focus()})),onPointerDownOutside:composeEventHandlers(o.onPointerDownOutside,(o=>{var e;(null===(e=l.triggerRef.current)||void 0===e?void 0:e.contains(o.target))&&o.preventDefault()}),{checkForDefaultPrevented:!1}),onDismiss:()=>l.onOpenChange(!1)}))}));DropdownMenuContent.displayName="DropdownMenuContent";const DropdownMenuGroup=extendPrimitive(Group,{displayName:"DropdownMenuGroup"});const DropdownMenuLabel=extendPrimitive(Label,{displayName:"DropdownMenuLabel"});const DropdownMenuItem=extendPrimitive(Item,{displayName:"DropdownMenuItem"});const DropdownMenuCheckboxItem=extendPrimitive(CheckboxItem,{displayName:"DropdownMenuCheckboxItem"});const DropdownMenuRadioGroup=extendPrimitive(RadioGroup,{displayName:"DropdownMenuRadioGroup"});const DropdownMenuRadioItem=extendPrimitive(RadioItem,{displayName:"DropdownMenuRadioItem"});const DropdownMenuItemIndicator=extendPrimitive(ItemIndicator,{displayName:"DropdownMenuItemIndicator"});const DropdownMenuSeparator=extendPrimitive(Separator,{displayName:"DropdownMenuSeparator"});const DropdownMenuArrow=extendPrimitive(dist_index_module_Arrow,{displayName:"DropdownMenuArrow"});const react_dropdown_menu_dist_index_module_Root=DropdownMenu;const Trigger=DropdownMenuTrigger;const index_module_Content=DropdownMenuContent;const index_module_Group=DropdownMenuGroup;const index_module_Label=DropdownMenuLabel;const index_module_Item=DropdownMenuItem;const index_module_CheckboxItem=DropdownMenuCheckboxItem;const index_module_RadioGroup=DropdownMenuRadioGroup;const index_module_RadioItem=DropdownMenuRadioItem;const index_module_ItemIndicator=DropdownMenuItemIndicator;const index_module_Separator=DropdownMenuSeparator;const react_dropdown_menu_dist_index_module_Arrow=DropdownMenuArrow;
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./src/DropdownMenu/index.js


function DropdownMenu_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }



var Dropdown = react_dropdown_menu_dist_index_module_Root;
var DropdownTrigger = Trigger;

var DropdownMenu_ref2 =  true ? {
  name: "1fmgkpl",
  styles: "min-width:150px"
} : undefined;

var DropdownContent = /*#__PURE__*/emotion_styled_base_browser_esm(index_module_Content,  true ? {
  target: "etal6nb3"
} : undefined)(function () {
  return [{
    "marginTop": "0.5rem",
    "--tw-shadow": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
    "borderRadius": "5px"
  }, DropdownMenu_ref2];
},  true ? "" : undefined);

var DropdownLabel = /*#__PURE__*/emotion_styled_base_browser_esm(index_module_Label,  true ? {
  target: "etal6nb2"
} : undefined)(function () {
  return [{
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "paddingTop": "0.5rem",
    "paddingBottom": "0.5rem",
    "fontSize": "0.75rem",
    "lineHeight": "1rem",
    "--tw-text-opacity": "1",
    "color": "rgba(68, 68, 68, var(--tw-text-opacity))",
    "textTransform": "uppercase"
  }];
},  true ? "" : undefined);

var DropdownMenu_ref =  true ? {
  name: "1eql9ny",
  styles: "&[data-disabled]{--tw-text-opacity:1;color:rgba(229, 231, 235, var(--tw-text-opacity));cursor:default;;}"
} : undefined;

var DropdownItem = /*#__PURE__*/emotion_styled_base_browser_esm(index_module_Item,  true ? {
  target: "etal6nb1"
} : undefined)(function () {
  return [{
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
  }, DropdownMenu_ref];
},  true ? "" : undefined);

var DropdownSeparator = /*#__PURE__*/emotion_styled_base_browser_esm(index_module_Separator,  true ? {
  target: "etal6nb0"
} : undefined)(function () {
  return [{
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(249, 250, 251, var(--tw-bg-opacity))",
    "borderBottomWidth": "1px",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))"
  }];
},  true ? "" : undefined);

DropdownContent.defaultProps = {
  onCloseAutoFocus: function onCloseAutoFocus(e) {
    return e.preventDefault();
  },
  disableOutsidePointerEvents: false
};

// CONCATENATED MODULE: ./src/Typography/UnorderedList.js
function UnorderedList_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { UnorderedList_typeof = function _typeof(obj) { return typeof obj; }; } else { UnorderedList_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return UnorderedList_typeof(obj); }

function UnorderedList_extends() { UnorderedList_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return UnorderedList_extends.apply(this, arguments); }

function UnorderedList_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function UnorderedList_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { UnorderedList_ownKeys(Object(source), true).forEach(function (key) { UnorderedList_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { UnorderedList_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function UnorderedList_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function UnorderedList_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = UnorderedList_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function UnorderedList_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function UnorderedList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UnorderedList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UnorderedList_createClass(Constructor, protoProps, staticProps) { if (protoProps) UnorderedList_defineProperties(Constructor.prototype, protoProps); if (staticProps) UnorderedList_defineProperties(Constructor, staticProps); return Constructor; }

function UnorderedList_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) UnorderedList_setPrototypeOf(subClass, superClass); }

function UnorderedList_setPrototypeOf(o, p) { UnorderedList_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return UnorderedList_setPrototypeOf(o, p); }

function UnorderedList_createSuper(Derived) { var hasNativeReflectConstruct = UnorderedList_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = UnorderedList_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = UnorderedList_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return UnorderedList_possibleConstructorReturn(this, result); }; }

function UnorderedList_possibleConstructorReturn(self, call) { if (call && (UnorderedList_typeof(call) === "object" || typeof call === "function")) { return call; } return UnorderedList_assertThisInitialized(self); }

function UnorderedList_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function UnorderedList_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function UnorderedList_getPrototypeOf(o) { UnorderedList_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return UnorderedList_getPrototypeOf(o); }





var UnorderedList_UnorderedList = /*#__PURE__*/function (_PureComponent) {
  UnorderedList_inherits(UnorderedList, _PureComponent);

  var _super = UnorderedList_createSuper(UnorderedList);

  function UnorderedList() {
    UnorderedList_classCallCheck(this, UnorderedList);

    return _super.apply(this, arguments);
  }

  UnorderedList_createClass(UnorderedList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = UnorderedList_objectWithoutProperties(_this$props, ["children"]);

      var finalChildren = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children.map(children, function (child) {
        if (! /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(child)) {
          return child;
        }

        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.cloneElement(child, UnorderedList_objectSpread({}, child.props));
      });
      return Object(react_["jsx"])("ul", UnorderedList_extends({
        className: classnames_default()("leading-normal list-disc p-0 m-0 ml-4", {})
      }, props), finalChildren);
    }
  }]);

  return UnorderedList;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["PureComponent"]);


// CONCATENATED MODULE: ./src/Typography/ListItem.js
function ListItem_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ListItem_typeof = function _typeof(obj) { return typeof obj; }; } else { ListItem_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ListItem_typeof(obj); }

function ListItem_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ListItem_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ListItem_ownKeys(Object(source), true).forEach(function (key) { ListItem_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ListItem_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ListItem_extends() { ListItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ListItem_extends.apply(this, arguments); }

function ListItem_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ListItem_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ListItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ListItem_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ListItem_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ListItem_createClass(Constructor, protoProps, staticProps) { if (protoProps) ListItem_defineProperties(Constructor.prototype, protoProps); if (staticProps) ListItem_defineProperties(Constructor, staticProps); return Constructor; }

function ListItem_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ListItem_setPrototypeOf(subClass, superClass); }

function ListItem_setPrototypeOf(o, p) { ListItem_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ListItem_setPrototypeOf(o, p); }

function ListItem_createSuper(Derived) { var hasNativeReflectConstruct = ListItem_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ListItem_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ListItem_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ListItem_possibleConstructorReturn(this, result); }; }

function ListItem_possibleConstructorReturn(self, call) { if (call && (ListItem_typeof(call) === "object" || typeof call === "function")) { return call; } return ListItem_assertThisInitialized(self); }

function ListItem_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ListItem_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ListItem_getPrototypeOf(o) { ListItem_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ListItem_getPrototypeOf(o); }

function ListItem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var ListItem_ListItem = /*#__PURE__*/function (_PureComponent) {
  ListItem_inherits(ListItem, _PureComponent);

  var _super = ListItem_createSuper(ListItem);

  function ListItem() {
    ListItem_classCallCheck(this, ListItem);

    return _super.apply(this, arguments);
  }

  ListItem_createClass(ListItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = ListItem_objectWithoutProperties(_this$props, ["children"]);

      return Object(react_["jsx"])(Typography_Text, ListItem_extends({
        is: "li"
      }, props), children);
    }
  }]);

  return ListItem;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["PureComponent"]);

ListItem_defineProperty(ListItem_ListItem, "propTypes", ListItem_objectSpread({}, Typography_Text.propTypes));


// CONCATENATED MODULE: ./node_modules/@radix-ui/react-tabs/dist/index.module.js
const[react_tabs_dist_index_module_c,react_tabs_dist_index_module_u]=createContext("Tabs");const Tabs=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((a,t)=>{const{value:n,onValueChange:i,defaultValue:s,orientation:u="horizontal",dir:b="ltr",activationMode:m="automatic",...f}=a,p=useId(),[v,x]=useControllableState({prop:n,onChange:i,defaultProp:s});/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](react_tabs_dist_index_module_c,{baseId:p,value:v,onValueChange:x,orientation:u,dir:b,activationMode:m},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Primitive,extends_extends({"data-orientation":u},f,{ref:t})))}));/*#__PURE__*/const TabsList=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,t)=>{const{loop:r=!0,...n}=e,i=react_tabs_dist_index_module_u("TabsList");/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](RovingFocusGroup,{orientation:i.orientation,loop:r,dir:i.dir},/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Primitive,extends_extends({role:"tablist","aria-orientation":i.orientation,"data-orientation":i.orientation},n,{ref:t})))}));/*#__PURE__*/const TabsTab=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,a)=>{const{value:r,disabled:i,...c}=e,f=react_tabs_dist_index_module_u("TabsTab"),p=dist_index_module_b(f.baseId,r),v=dist_index_module_m(f.baseId,r),x=r===f.value,T=useRovingFocus({disabled:i,active:x}),w=index_module_useCallbackRef((()=>f.onValueChange(r))),h=composeEventHandlers(c.onKeyDown,composeEventHandlers(T.onKeyDown,(e=>{i||" "!==e.key&&"Enter"!==e.key||w()}))),y=composeEventHandlers(c.onMouseDown,composeEventHandlers(T.onMouseDown,(e=>{i||0!==e.button||!1!==e.ctrlKey||w()}))),E=composeEventHandlers(c.onFocus,composeEventHandlers(T.onFocus,(()=>{const e="manual"!==f.activationMode;x||i||!e||w()})));/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Primitive,extends_extends({role:"tab","aria-selected":x,"aria-controls":v,"aria-disabled":i||void 0,"data-state":x?"active":"inactive","data-disabled":i?"":void 0,"data-orientation":f.orientation,id:p},c,T,{ref:a,onKeyDown:h,onMouseDown:y,onFocus:E}))}));/*#__PURE__*/const TabsPanel=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"](((e,a)=>{const{value:t,...r}=e,n=react_tabs_dist_index_module_u("TabsPanel"),i=dist_index_module_b(n.baseId,t),s=dist_index_module_m(n.baseId,t),c=t===n.value;/*#__PURE__*/return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](Primitive,extends_extends({"data-state":c?"active":"inactive","data-orientation":n.orientation,role:"tabpanel","aria-labelledby":i,hidden:!c,id:s,tabIndex:0},r,{ref:a}))}));/*#__PURE__*/function dist_index_module_b(e,a){return`${e}-tab-${a}`}function dist_index_module_m(e,a){return`${e}-panel-${a}`}const react_tabs_dist_index_module_Root=Tabs;const List=TabsList;const Tab=TabsTab;const Panel=TabsPanel;
//# sourceMappingURL=index.module.js.map

// CONCATENATED MODULE: ./src/Tabs/index.js


function Tabs_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }



/** @jsxRuntime classic */

/** @jsx jsx */




var Tabs_Tabs = /*#__PURE__*/emotion_styled_base_browser_esm(react_tabs_dist_index_module_Root,  true ? {
  target: "e1klorew3"
} : undefined)(function () {
  return [{
    "display": "flex",
    "flexDirection": "column"
  }];
},  true ? "" : undefined);

var Tabs_TabsList = /*#__PURE__*/emotion_styled_base_browser_esm(List,  true ? {
  target: "e1klorew2"
} : undefined)(function () {
  return [{
    "display": "flex",
    "flexShrink": "0",
    "borderBottomWidth": "1px",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(229, 231, 235, var(--tw-border-opacity))"
  }];
},  true ? "" : undefined);

var Tabs_ref =  true ? {
  name: "11ymp0m",
  styles: "&[role=\"tab\"]:first-of-type{padding-left:0;}&[data-state=\"active\"]{--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity));--tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); box-shadow:inset 0 -1px 0 0 currentColor,0 1px 0 0 currentColor;}"
} : undefined;

var Tabs_TabsTab = /*#__PURE__*/emotion_styled_base_browser_esm(Tab,  true ? {
  target: "e1klorew1"
} : undefined)(function () {
  return [{
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
  }, Tabs_ref];
},  true ? "" : undefined);

var Tabs_TabsPanel = /*#__PURE__*/emotion_styled_base_browser_esm(Panel,  true ? {
  target: "e1klorew0"
} : undefined)(function () {
  return [{
    "flexGrow": "1",
    "padding": "1.5rem"
  }];
},  true ? "" : undefined);


// CONCATENATED MODULE: ./src/index.js






















/***/ })
/******/ ]);
});