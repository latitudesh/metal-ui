(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["metal-ui"] = factory(require("react"), require("react-dom"));
	else
		root["metal-ui"] = factory(root["React"], root["ReactDOM"]);
})((typeof window !== 'undefined' ? window : this), function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__4__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
  module.exports = __webpack_require__(5)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
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
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
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
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(this && this[key] || key);
					}
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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(6);

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
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(8);
            var content = __webpack_require__(9);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@keyframes skeleton {\n    0% {\n        background-position:200% 0\n    }\n    to {\n        background-position:-200% 0\n    }\n}\n\n.skeleton {\n    display: block;\n    border-radius: 5px;\n    background-image: linear-gradient(270deg,#fafafa,#eaeaea,#eaeaea,#fafafa);\n    background-size: 400% 100%;\n    animation: skeleton 8s ease-in-out infinite;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Table", function() { return /* reexport */ src_Table; });
__webpack_require__.d(__webpack_exports__, "Heading", function() { return /* reexport */ src_Heading; });
__webpack_require__.d(__webpack_exports__, "Content", function() { return /* reexport */ src_Content; });
__webpack_require__.d(__webpack_exports__, "Dropdown", function() { return /* reexport */ src_Dropdown; });
__webpack_require__.d(__webpack_exports__, "Button", function() { return /* reexport */ src_Button; });
__webpack_require__.d(__webpack_exports__, "Box", function() { return /* reexport */ src_Box; });
__webpack_require__.d(__webpack_exports__, "Menu", function() { return /* reexport */ src_Menu; });
__webpack_require__.d(__webpack_exports__, "Skeleton", function() { return /* reexport */ src_Skeleton; });
__webpack_require__.d(__webpack_exports__, "BRFlag", function() { return /* reexport */ Flags_BRFlag; });
__webpack_require__.d(__webpack_exports__, "AUFlag", function() { return /* reexport */ Flags_AUFlag; });
__webpack_require__.d(__webpack_exports__, "USFlag", function() { return /* reexport */ Flags_USFlag; });
__webpack_require__.d(__webpack_exports__, "CentOS", function() { return /* reexport */ OperatingSystems_CentOS; });
__webpack_require__.d(__webpack_exports__, "UbuntuOS", function() { return /* reexport */ OperatingSystems_UbuntuOS; });
__webpack_require__.d(__webpack_exports__, "WindowsOS", function() { return /* reexport */ OperatingSystems_WindowsOS; });
__webpack_require__.d(__webpack_exports__, "DebianOS", function() { return /* reexport */ OperatingSystems_DebianOS; });
__webpack_require__.d(__webpack_exports__, "EsxiOS", function() { return /* reexport */ OperatingSystems_EsxiOS; });

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(0);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(2);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./src/Table/index.js




var Table_Table = function Table(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("table", {
    className: classnames_default()("min-w-full", className)
  }, children);
};

Table_Table.Head = function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("thead", {
    className: className
  }, children);
};

Table_Table.Body = function (_ref3) {
  var children = _ref3.children,
      className = _ref3.className;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("tbody", {
    className: classnames_default()("bg-white", className)
  }, children);
};

Table_Table.HeaderCell = function (_ref4) {
  var children = _ref4.children,
      className = _ref4.className;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("th", {
    className: classnames_default()("px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider", className)
  }, children);
};

Table_Table.Row = function (_ref5) {
  var children = _ref5.children,
      className = _ref5.className,
      onSelect = _ref5.onSelect;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("tr", {
    onSelect: onSelect,
    className: classnames_default()(className)
  }, children);
};

Table_Table.Cell = function (_ref6) {
  var children = _ref6.children,
      className = _ref6.className;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("td", {
    className: classnames_default()("px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500", className)
  }, children);
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
  onSelect: prop_types_default.a.func
};
Table_Table.Cell.propTypes = {
  children: prop_types_default.a.node.isRequired,
  className: prop_types_default.a.string
};
/* harmony default export */ var src_Table = (Table_Table);
// CONCATENATED MODULE: ./src/Heading/index.js



var Heading_Heading = function Heading(_ref) {
  var leftContent = _ref.leftContent,
      centerContent = _ref.centerContent,
      rightContent = _ref.rightContent;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "relative w-full bg-white shadow"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "flex p-4 px-8 flex-no-wrap justify-between items-center relative flex-row flex-grow h-16"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "flex flex-1 flex-grow flex-shrink-0 min-w-0"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "flex items-center flex-grow-0 flex-row"
  }, leftContent)), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "flex flex-shrink p-0 w-auto items-center justify-between"
  }, centerContent), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "flex flex-grow p-0"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "flex flex-grow flex-row items-center justify-end max-w-full"
  }, rightContent))));
};

Heading_Heading.propTypes = {
  leftContent: prop_types_default.a.node,
  centerContent: prop_types_default.a.node,
  rightContent: prop_types_default.a.node
};
/* harmony default export */ var src_Heading = (Heading_Heading);
// CONCATENATED MODULE: ./src/Content/index.js




var Content_Content = function Content(_ref) {
  var children = _ref.children,
      size = _ref.size,
      centered = _ref.centered,
      className = _ref.className;
  var base = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: classnames_default()("mx-auto px-4 sm:px-6 md:px-8", {
      "max-w-lg": size === "small",
      "max-w-full": size === "full",
      "max-w-7xl": size === "default" || !size,
      "flex-auto": centered
    }, className)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "py-8"
  }, children));

  if (centered) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      class: "flex h-full items-center justify-center w-full"
    }, base);
  } else {
    return base;
  }
};

Content_Content.propTypes = {
  children: prop_types_default.a.node,
  size: prop_types_default.a.string,
  centered: prop_types_default.a.bool,
  className: prop_types_default.a.string
};
/* harmony default export */ var src_Content = (Content_Content);
// EXTERNAL MODULE: external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"}
var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_ = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/classnames/bind.js
var bind = __webpack_require__(3);
var bind_default = /*#__PURE__*/__webpack_require__.n(bind);

// CONCATENATED MODULE: ./src/Dropdown/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Dropdown_DropdownContent = function DropdownContent(_ref) {
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
  return Object(external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_["createPortal"])(children, element.current);
};

var Dropdown_Dropdown = function Dropdown(_ref2) {
  var content = _ref2.content,
      position = _ref2.position,
      children = _ref2.children,
      className = _ref2.className;
  var dropdown = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])();
  var portal = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])();

  var _useState = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])({
    top: 0,
    left: 0
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      dropdownPosition = _useState4[0],
      setDropdownPosition = _useState4[1];

  var onOutSideClick = function onOutSideClick(event) {
    if (dropdown.current.contains(event.target) || portal.current && portal.current.contains(event.target)) {
      return;
    } else {
      setOpen(false);
    }
  };

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (open) {
      var button = dropdown.current.getBoundingClientRect();

      var _content = portal.current.getBoundingClientRect();

      var paddingTop = 10;

      if (position === "LeftTop") {
        setDropdownPosition({
          left: button.left,
          top: button.top - (_content.height + paddingTop)
        });
      } else if (position === "RightTop") {
        setDropdownPosition({
          left: button.right - _content.width,
          top: button.top - (_content.height + paddingTop)
        });
      } else if (position === "LeftBottom") {
        setDropdownPosition({
          left: button.left,
          top: button.bottom + paddingTop
        });
      } else {
        setDropdownPosition({
          left: button.right - _content.width,
          top: button.bottom + paddingTop
        });
      }
    }
  }, [open]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    document.addEventListener("mousedown", onOutSideClick);
    return function () {
      document.removeEventListener("mousedown", onOutSideClick);
    };
  }, []);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    ref: dropdown,
    className: bind_default()("relative inline-block text-left z-50", className)
  }, Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(children, {
    onClick: function onClick() {
      return setOpen(!open);
    }
  }), open && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Dropdown_DropdownContent, {
    id: "dropdown-content"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    ref: portal,
    style: _objectSpread({}, dropdownPosition),
    className: "fixed z-50 w-56 min-w-0 shadow-lg"
  }, content)));
};

Dropdown_Dropdown.propTypes = {
  content: prop_types_default.a.element,
  position: prop_types_default.a.string,
  children: prop_types_default.a.element,
  className: prop_types_default.a.string
};
/* harmony default export */ var src_Dropdown = (Dropdown_Dropdown);
// CONCATENATED MODULE: ./src/Button/index.js
function Button_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var buttonTypes = {
  disabled: "opacity-50",
  danger: "border-transparent text-white bg-red-600 hover:bg-red-500 focus:border-red-700 focus:shadow-outline-red active:bg-red-700",
  secondary: "border-gray-300 text-gray-700 bg-white hover:text-gray-500 focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700",
  dark: "border-transparent text-white bg-gray-900 hover:bg-gray-700 focus:shadow-outline-gray active:bg-gray-900",
  default: "border-transparent text-white bg-indigo-600 hover:bg-indigo-500 focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
};
var minimalTypes = {
  disabled: "opacity-50",
  danger: "border-transparent text-red-600 hover:text-red-500 active:text-red-700",
  secondary: "border-transparent text-gray-700 hover:text-gray-500 active:text-gray-700",
  default: "border-transparent text-indigo-600 hover:text-indigo-500 active:text-indigo-700"
};

var Button_Button = function Button(_ref) {
  var appearance = _ref.appearance,
      disabled = _ref.disabled,
      className = _ref.className,
      iconBefore = _ref.iconBefore,
      iconAfter = _ref.iconAfter,
      onClick = _ref.onClick,
      label = _ref.label,
      type = _ref.type,
      component = _ref.component;
  var minimal = appearance === "minimal";
  var cx = bind_default.a.bind(minimal ? minimalTypes : buttonTypes);
  var ButtonContent = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Fragment, null, iconBefore && Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(iconBefore, {
    className: "mr-3 transition ease-in-out duration-150"
  }), label, iconAfter && Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(iconAfter, {
    className: "ml-3 transition ease-in-out duration-150"
  }));
  var ButtonClasses = cx("inline-flex items-center px-3 py-1.5 border text-sm leading-5 font-medium rounded focus:outline-none transition ease-in-out duration-150", Button_defineProperty({
    disabled: disabled,
    default: !type
  }, type, Boolean(type)));

  var RenderComponent = function RenderComponent() {
    if (component.props.children && typeof component.props.children !== "string") {
      var children = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(component.props.children, {
        className: ButtonClasses
      });
      return Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(component, {}, children);
    } else {
      return Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(component, {
        className: ButtonClasses
      });
    }
  };

  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
    className: bind_default()("inline-flex rounded-sm", className, {
      "shadow-sm": !minimal
    })
  }, component ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(RenderComponent, null) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("button", {
    type: "button",
    onClick: onClick,
    disabled: disabled,
    className: ButtonClasses
  }, ButtonContent));
};

Button_Button.propTypes = {
  appearance: prop_types_default.a.string,
  disabled: prop_types_default.a.bool,
  className: prop_types_default.a.string,
  iconBefore: prop_types_default.a.element,
  iconAfter: prop_types_default.a.element,
  label: prop_types_default.a.string,
  onClick: prop_types_default.a.func,
  type: prop_types_default.a.string,
  component: prop_types_default.a.element
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
      children = _ref.children,
      className = _ref.className,
      rootCard = _ref.rootCard,
      noPadding = _ref.noPadding;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: classnames_default()("overflow-hidden", className, (_classNames = {
      flex: Boolean(flex),
      "bg-white": !Boolean(backgroundColor)
    }, Box_defineProperty(_classNames, "items-".concat(alignItems), Boolean(alignItems)), Box_defineProperty(_classNames, "justify-".concat(justifyContent), Boolean(justifyContent)), Box_defineProperty(_classNames, "bg-".concat(backgroundColor), Boolean(backgroundColor)), Box_defineProperty(_classNames, "flex-".concat(flexDirection), Boolean(flexDirection)), Box_defineProperty(_classNames, "mb-4 shadow rounded-sm", Boolean(rootCard)), Box_defineProperty(_classNames, "px-4 py-5 sm:px-6 sm:py-4", !Boolean(noPadding)), _classNames))
  }, children);
};

Box_Box.propTypes = {
  flex: prop_types_default.a.bool,
  alignItems: prop_types_default.a.string,
  justifyContent: prop_types_default.a.string,
  backgroundColor: prop_types_default.a.string,
  flexDirection: prop_types_default.a.string,
  children: prop_types_default.a.node,
  className: prop_types_default.a.string,
  rootCard: prop_types_default.a.bool,
  noPadding: prop_types_default.a.bool
};
/* harmony default export */ var src_Box = (Box_Box);
// CONCATENATED MODULE: ./src/Menu/index.js
function Menu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var itemType = {
  iconAfter: "justify-between",
  disabled: "opacity-50",
  danger: "text-red-600 hover:text-red-600 focus:text-red-600",
  default: "text-gray-700 hover:text-gray-900 focus:text-gray-900",
  dark: "bg-gray-900 focus:text-white text-white focus:bg-gray-900 hover:bg-gray-700"
};

var Menu_Menu = function Menu(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: bind_default()("rounded-sm bg-white shadow-xs", className)
  }, children);
};

Menu_Menu.Group = function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: className
  }, children);
};

Menu_Menu.Divider = function () {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "border-t border-gray-100"
  });
};

Menu_Menu.Item = function (_ref3) {
  var iconBefore = _ref3.iconBefore,
      iconAfter = _ref3.iconAfter,
      disabled = _ref3.disabled,
      onSelect = _ref3.onSelect,
      className = _ref3.className,
      type = _ref3.type,
      children = _ref3.children,
      component = _ref3.component;
  var cx = bind_default.a.bind(itemType);
  var content = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Fragment, null, iconBefore && Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(iconBefore, {
    className: "mr-2 transition ease-in-out duration-150"
  }), children, iconAfter && Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(iconAfter, {
    className: "mr-2 transition ease-in-out duration-150"
  }));
  var classes = cx("flex text-left min-w-full px-4 py-2 text-sm leading-5 focus:outline-none focus:bg-gray-100 hover:bg-gray-100", Menu_defineProperty({
    iconAfter: iconAfter,
    disabled: disabled && onSelect,
    default: !type
  }, type, Boolean(type)), className);

  if (component) {
    if (component.props.children && typeof component.props.children !== "string") {
      var _children = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(component.props.children, {
        className: classes
      });

      return Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(component, {}, _children);
    } else {
      return Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(component, {
        className: classes
      });
    }
  } else {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("button", {
      disabled: disabled,
      onClick: onSelect,
      className: classes
    }, content);
  }
};

/* harmony default export */ var src_Menu = (Menu_Menu);
// EXTERNAL MODULE: ./src/Skeleton/Skeleton.css
var Skeleton_Skeleton = __webpack_require__(7);

// CONCATENATED MODULE: ./src/Skeleton/index.js





var src_Skeleton_Skeleton = function Skeleton(_ref) {
  var width = _ref.width,
      height = _ref.height,
      className = _ref.className;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
    style: {
      width: width,
      minHeight: height
    },
    className: classnames_default()("skeleton", className)
  }));
};

src_Skeleton_Skeleton.propTypes = {
  width: prop_types_default.a.number,
  height: prop_types_default.a.number
};
src_Skeleton_Skeleton.defaultProps = {
  width: 160,
  height: 24
};
/* harmony default export */ var src_Skeleton = (src_Skeleton_Skeleton);
// CONCATENATED MODULE: ./src/Flags/Flag.js



var Flag_Flag = function Flag(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 256 : _ref$size,
      children = _ref.children;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("svg", {
    width: "".concat(size, "px"),
    height: "".concat(size, "px"),
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve"
  }, children);
};

Flag_Flag.propTypes = {
  size: prop_types_default.a.number
};
/* harmony default export */ var Flags_Flag = (Flag_Flag);
// CONCATENATED MODULE: ./src/Flags/BRFlag.js




var BRFlag_BRFlag = function BRFlag(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 40 : _ref$size;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Flags_Flag, {
    size: size
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("circle", {
    cx: "256",
    cy: "256",
    r: "256",
    fill: "#6DA544"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    fill: "#FFDA44",
    d: "M256 100.174L467.478 256 256 411.826 44.522 256z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("circle", {
    cx: "256",
    cy: "256",
    r: "89.043",
    fill: "#F0F0F0"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("g", {
    fill: "#0052B4"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M211.478 250.435c-15.484 0-30.427 2.355-44.493 6.725.623 48.64 40.227 87.884 89.015 87.884 30.168 0 56.812-15.017 72.919-37.968-27.557-34.497-69.958-56.641-117.441-56.641zM343.393 273.06a89.45 89.45 0 001.651-17.06c0-49.178-39.866-89.043-89.043-89.043-36.694 0-68.194 22.201-81.826 53.899a183.693 183.693 0 0137.305-3.812c51.717-.001 98.503 21.497 131.913 56.016z"
  })));
};

BRFlag_BRFlag.propTypes = {
  size: prop_types_default.a.number
};
/* harmony default export */ var Flags_BRFlag = (BRFlag_BRFlag);
// CONCATENATED MODULE: ./src/Flags/AUFlag.js




var AUFlag_AUFlag = function AUFlag(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 40 : _ref$size;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Flags_Flag, {
    size: size
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    fill: "#0052B4",
    d: "M512 256c0 141.384-114.616 256-256 256S0 397.384 0 256C0 256.06 256 .029 256 0c141.384 0 256 114.616 256 256z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("g", {
    fill: "#F0F0F0"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M256 0l-.043.001L256 0zM255.315 256H256v-.685l-.685.685z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M256 133.566V.001h-.043C114.592.024 0 114.629 0 256h133.565v-75.212L208.777 256h46.539l.685-.685v-46.536l-75.213-75.213H256z"
  })), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("g", {
    fill: "#D80027"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M129.515 33.391a257.222 257.222 0 00-96.124 96.124V256h66.783V100.174H256V33.391H129.515z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M256 224.519l-90.953-90.952h-31.481c0-.001 0 0 0 0L255.999 256H256v-31.481z"
  })), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("g", {
    fill: "#F0F0F0"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M154.395 300.522L168.445 329.9 200.172 322.567 185.964 351.869 211.478 372.102 179.711 379.262 179.8 411.826 154.395 391.453 128.991 411.826 129.08 379.262 97.312 372.102 122.827 351.869 108.617 322.567 140.346 329.9z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M383.284 356.174L390.309 370.863 406.173 367.196 399.068 381.847 411.826 391.964 395.942 395.544 395.986 411.826 383.284 401.639 370.582 411.826 370.626 395.544 354.743 391.964 367.5 381.847 360.396 367.196 376.259 370.863z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M317.933 200.348L324.957 215.038 340.821 211.37 333.717 226.021 346.474 236.138 330.591 239.718 330.634 256 317.933 245.813 305.231 256 305.274 239.718 289.391 236.138 302.148 226.021 295.044 211.37 310.908 215.038z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M383.284 111.304L390.309 125.994 406.173 122.327 399.069 136.978 411.825 147.094 395.942 150.675 395.986 166.957 383.284 156.77 370.582 166.957 370.626 150.675 354.743 147.094 367.499 136.978 360.396 122.327 376.259 125.994z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M440.368 178.087L447.392 192.777 463.256 189.109 456.152 203.76 468.909 213.877 453.025 217.458 453.069 233.739 440.368 223.553 427.666 233.739 427.709 217.458 411.826 213.877 424.583 203.76 417.479 189.109 433.342 192.777z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M399.55 256L405.075 273.006 422.957 273.006 408.49 283.517 414.017 300.522 399.55 290.012 385.084 300.522 390.609 283.517 376.143 273.006 394.024 273.006z"
  })));
};

AUFlag_AUFlag.propTypes = {
  size: prop_types_default.a.number
};
/* harmony default export */ var Flags_AUFlag = (AUFlag_AUFlag);
// CONCATENATED MODULE: ./src/Flags/USFlag.js




var USFlag_USFlag = function USFlag(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 40 : _ref$size;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Flags_Flag, {
    size: size
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("circle", {
    cx: "256",
    cy: "256",
    r: "256",
    fill: "#F0F0F0"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("g", {
    fill: "#D80027"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M244.87 256H512c0-23.106-3.08-45.49-8.819-66.783H244.87V256zM244.87 122.435h229.556a257.35 257.35 0 00-59.07-66.783H244.87v66.783zM256 512c60.249 0 115.626-20.824 159.356-55.652H96.644C140.374 491.176 195.751 512 256 512zM37.574 389.565h436.852a254.474 254.474 0 0028.755-66.783H8.819a254.474 254.474 0 0028.755 66.783z"
  })), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    fill: "#0052B4",
    d: "M118.584 39.978h23.329l-21.7 15.765 8.289 25.509-21.699-15.765-21.699 15.765 7.16-22.037a257.407 257.407 0 00-49.652 55.337h7.475l-13.813 10.035a255.58 255.58 0 00-6.194 10.938l6.596 20.301-12.306-8.941a253.567 253.567 0 00-8.372 19.873l7.267 22.368h26.822l-21.7 15.765 8.289 25.509-21.699-15.765-12.998 9.444A258.468 258.468 0 000 256h256V0c-50.572 0-97.715 14.67-137.416 39.978zm9.918 190.422l-21.699-15.765L85.104 230.4l8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765 8.289 25.509zm-8.289-100.083l8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765zM220.328 230.4l-21.699-15.765L176.93 230.4l8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765 8.289 25.509zm-8.289-100.083l8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765zm0-74.574l8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765z"
  }));
};

USFlag_USFlag.propTypes = {
  size: prop_types_default.a.number
};
/* harmony default export */ var Flags_USFlag = (USFlag_USFlag);
// CONCATENATED MODULE: ./src/Flags/index.js



// CONCATENATED MODULE: ./src/OperatingSystems/OperatingSystem.js



var OperatingSystem_OperatingSystem = function OperatingSystem(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 40 : _ref$size,
      _ref$viewBox = _ref.viewBox,
      viewBox = _ref$viewBox === void 0 ? '0 0 60 60' : _ref$viewBox,
      children = _ref.children;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("svg", {
    width: "".concat(size, "px"),
    height: "".concat(size, "px"),
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    x: "0",
    y: "0",
    viewBox: viewBox,
    enableBackground: "accumulate"
  }, children);
};

OperatingSystem_OperatingSystem.propTypes = {
  color: prop_types_default.a.string,
  size: prop_types_default.a.number,
  viewBox: prop_types_default.a.string
};
/* harmony default export */ var OperatingSystems_OperatingSystem = (OperatingSystem_OperatingSystem);
// CONCATENATED MODULE: ./src/OperatingSystems/CentOS.js




var CentOS_CentOS = function CentOS(_ref) {
  var size = _ref.size,
      viewBox = _ref.viewBox,
      enableBackground = _ref.enableBackground;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(OperatingSystems_OperatingSystem, {
    size: size,
    viewBox: viewBox,
    enableBackground: enableBackground
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M51.6 27.1H37.4c3.2-3.2 6.7-6.6 10.1-10.1 1 1 2.4 2.5 4.1 4.4v5.7zM12.9 16.8L23.1 27H8.5v-5.9c1.4-1.4 2.9-2.9 4.4-4.3zm10.3 15.8c-3.6 3.6-7.1 7-10.5 10.5-1.3-1.4-2.6-2.9-4.2-4.6v-5.9h14.7zm4.1 18.6H21l-4.1-4.1c3.5-3.4 7-6.8 10.4-10.2v14.3zm9.8-18.6h14.5v5.6c-1.6 1.5-3.1 3-4.5 4.4-3.3-3.3-6.6-6.7-10-10zm-9.8-9.8C24 19.4 20.5 16 17 12.4c1.2-1.1 2.6-2.4 4.4-3.9h5.9v14.3zm15.3 24.5c-1 .9-2.5 2.3-4.3 3.9h-5.4V37.5c3 3 6.4 6.4 9.7 9.8zM32.8 8.5h5.8c1.6 1.5 3.1 2.9 4.3 4L32.8 22.6V8.5z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M30.5 33.8c.1.7.4 1.3.4 2v17.4h5.6c-2.4 2.3-4.6 4.4-6.7 6.4-1.8-1.9-4.1-4.2-6.2-6.4h5.5c0-.9.1-1.5.1-2.1V35.8c0-.7.2-1.3.3-2h1zm-4.4-3.6c-.7.1-1.3.4-2 .4H6.5v5.8L0 29.9c2-2 4.2-4.1 6.4-6.3V29c.8 0 1.4.1 2 .1h15.7c.6 0 1.3.2 1.9.3 0 .3.1.5.1.8zM47 45.6c1.5-1.3 2.9-2.6 4.5-4.1v9.6h-9.6c1.3-1.4 2.5-2.8 3.8-4.2-.6-.6-1-1.1-1.4-1.5L33.7 34.8c-.5-.5-.8-1.1-1.3-1.7 1.3-.8 1.8 0 2.3.5 3.6 3.6 7.2 7.2 10.9 10.8.5.3.9.7 1.4 1.2zM29.2 6.4h-5.7C25.7 4.2 27.8 2 29.8 0c2 2 4.1 4.2 6.3 6.4h-5.2c0 .9-.1 1.5-.1 2.1v15.2c0 .7-.3 1.5-.4 2.2-1.5-.3-1.2-1.2-1.2-1.9V6.4zM13 13.9c-1.5 1.4-2.9 2.7-4.5 4.3V8.6h9.6c-1.3 1.4-2.5 2.7-3.9 4.1.4.5.8.9 1.2 1.3 3.7 3.7 7.4 7.4 11 11.2.4.5.8 1 1.2 1.6-1.3.8-1.7-.1-2.3-.6L14.2 15.1 13 13.9zm47 15.9c-2 2-4.2 4.2-6.4 6.5v-5.7H36c-.7 0-1.3-.2-2-.3v-.7c.7-.1 1.4-.3 2-.3h17.5v-5.9c2.3 2.1 4.4 4.2 6.5 6.4zm-27-2.5c-.7-1.3.1-1.7.6-2.2L44.7 14c.4-.4.8-.8 1.3-1.4-1.3-1.3-2.5-2.6-3.9-4.1h9.5v9.4c-1.5-1.4-2.9-2.8-4.4-4.2-.6.5-1 .9-1.5 1.4L34.6 26.2c-.4.5-1 .8-1.6 1.1zM12.9 45.9c3.3-3.4 6.6-6.6 9.8-9.8l3-3c.4-.4 1-.5 1.6-.5-.8 2.2-2.6 3.4-4.1 4.9-1.5 1.6-3.1 3.1-4.6 4.6-1.5 1.5-3.1 3.1-4.8 4.7 1.3 1.4 2.6 2.7 4 4.2H8.4v-9.4c1.6 1.5 2.9 2.8 4.5 4.3z"
  }));
};

CentOS_CentOS.propTypes = {
  size: prop_types_default.a.number,
  viewBox: prop_types_default.a.string,
  enableBackground: prop_types_default.a.string
};
/* harmony default export */ var OperatingSystems_CentOS = (CentOS_CentOS);
// CONCATENATED MODULE: ./src/OperatingSystems/UbuntuOS.js




var UbuntuOS_UbuntuOS = function UbuntuOS(_ref) {
  var size = _ref.size,
      viewBox = _ref.viewBox,
      enableBackground = _ref.enableBackground;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(OperatingSystems_OperatingSystem, {
    size: size,
    viewBox: viewBox,
    enableBackground: enableBackground
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("g", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M7.565 24.556c3.092 0 5.565 2.573 5.565 5.59 0 3.104-2.562 5.588-5.565 5.588C4.473 35.734 2 33.16 2 30.145c0-3.105 2.562-5.589 5.565-5.589zm25.44-16.5c1.325 0 2.738.09 3.975.355v.71c0 4.258 3.445 7.718 7.685 7.718 1.59 0 3.268-.533 4.505-1.42 3.003 3.371 4.77 7.275 5.212 11.976l-8.834.266c-.706-6.387-6.183-10.911-12.72-10.911-1.855 0-3.621.355-5.123 1.065l-4.328-7.54a21.94 21.94 0 019.628-2.219z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M45.548 46.468c3.092 0 5.565 2.572 5.565 5.588 0 3.105-2.561 5.59-5.565 5.59-3.091 0-5.565-2.573-5.565-5.59 0-3.104 2.562-5.588 5.565-5.588zm-24.821.976c-3.71-2.662-6.625-6.388-8.127-10.823 2.12-1.33 3.357-3.726 3.357-6.476S14.543 25 12.335 23.581a21.327 21.327 0 018.127-11.444l4.593 7.452a12.85 12.85 0 00-4.858 10.113c0 4.08 1.943 7.629 4.77 10.024l-4.24 7.718z"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M54.47 31.21c-.353 5.145-2.562 9.846-5.918 13.395-1.06-.532-2.297-.887-3.534-.887-4.063 0-7.42 3.193-7.685 7.185-1.325.266-2.826.444-4.24.444-3.356 0-6.536-.799-9.451-2.218L27.97 41.5c1.502.621 3.268.976 5.035.976 6.625 0 12.013-4.968 12.72-11.444l8.745.178zM45.107 3c3.091 0 5.565 2.573 5.565 5.589 0 3.105-2.562 5.588-5.565 5.588-3.092 0-5.565-2.572-5.565-5.588S42.015 3 45.107 3z"
  })));
};

UbuntuOS_UbuntuOS.propTypes = {
  size: prop_types_default.a.number,
  viewBox: prop_types_default.a.string,
  enableBackground: prop_types_default.a.string
};
/* harmony default export */ var OperatingSystems_UbuntuOS = (UbuntuOS_UbuntuOS);
// CONCATENATED MODULE: ./src/OperatingSystems/WindowsOS.js




var WindowsOS_WindowsOS = function WindowsOS(_ref) {
  var size = _ref.size,
      viewBox = _ref.viewBox,
      enableBackground = _ref.enableBackground;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(OperatingSystems_OperatingSystem, {
    size: size,
    viewBox: "0 0 480 480",
    enableBackground: enableBackground
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("g", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M.176 224L.001 67.963l192-26.072V224H.176zM224.001 37.241L479.937 0v224H224.001V37.241zM479.999 256l-.062 224-255.936-36.008V256h255.998zM192.001 439.918L.157 413.621.147 256h191.854v183.918z"
  })));
};

WindowsOS_WindowsOS.propTypes = {
  size: prop_types_default.a.number,
  viewBox: prop_types_default.a.string,
  enableBackground: prop_types_default.a.string
};
/* harmony default export */ var OperatingSystems_WindowsOS = (WindowsOS_WindowsOS);
// CONCATENATED MODULE: ./src/OperatingSystems/DebianOS.js




var DebianOS_DebianOS = function DebianOS(_ref) {
  var size = _ref.size,
      viewBox = _ref.viewBox,
      enableBackground = _ref.enableBackground;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(OperatingSystems_OperatingSystem, {
    size: size,
    viewBox: viewBox,
    enableBackground: enableBackground
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M33.508 59.115c-9.049-3.246-14.36-7.18-20.262-16.131-1.476-2.46-4.131-7.87-4.033-15.05-.197-7.082 3.344-15.245 10.033-19.672 6.492-4.623 14.852-4.721 19.77-2.852 6 2.36 10.033 7.377 11.312 12.688 1.475 5.115 0 13.574-7.082 17.017-3.246 1.77-7.476 2.065-10.721.787-3.345-1.377-5.705-4.23-6.492-7.279-1.77-6.787 3.344-10.426 5.606-10.82 9.148-3.049 13.87 11.312 3.05 12.492 4.918 1.672 9.934-3.344 8.95-8.459 0-5.016-6.196-10.131-13.082-8.066-1.77.492-4.524 1.771-6.59 4.525-2.164 2.754-3.147 7.18-2.065 11.41 1.082 4.328 4.426 8.36 9.049 10.23 4.721 1.77 9.934 1.278 14.262-.984 9.246-4.525 11.115-15.64 9.246-21.836-1.574-6.59-5.213-9.541-5.016-9.64-.099.197-2.656-3.737-8.951-6.098C34.295-.885 24.557-.689 16.885 4.721 9.016 9.934 4.69 19.87 4.984 27.934c-.099 8.164 2.95 14.46 4.623 17.214 6.688 10.229 14.36 13.475 23.901 13.967"
  }));
};

DebianOS_DebianOS.propTypes = {
  size: prop_types_default.a.number,
  viewBox: prop_types_default.a.string,
  enableBackground: prop_types_default.a.string
};
/* harmony default export */ var OperatingSystems_DebianOS = (DebianOS_DebianOS);
// CONCATENATED MODULE: ./src/OperatingSystems/EsxiOS.js




var EsxiOS_EsxiOS = function EsxiOS(_ref) {
  var size = _ref.size,
      viewBox = _ref.viewBox,
      enableBackground = _ref.enableBackground;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(OperatingSystems_OperatingSystem, {
    size: size,
    viewBox: "0 0 24 10",
    enableBackground: enableBackground
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("g", {
    fillRule: "nonzero",
    transform: "translate(-1 -1)"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M2.016.988a1.007 1.007 0 00-.871.469c-.188.3-.2.676-.04.988l4 8.004a1 1 0 001.766.043l3.75-6.625c.004-.004.004-.008.004-.015 0 .003.484-.852 1.375-.852h.016s.289.008.543.133c.254.129.441.18.441.867v6c-.004.36.184.695.496.879.313.18.695.18 1.008 0 .312-.184.5-.52.496-.879V4.5a1.5 1.5 0 013 0V10c-.008.523.395.965.918 1.012.031 0 .062.004.098.004.55-.012.992-.465.984-1.016V4.5a1.5 1.5 0 013 0V10c-.004.36.184.695.496.879.313.18.695.18 1.008 0 .312-.184.5-.52.496-.879V4.5c0-1.793-1.395-3.238-3.14-3.43A1.015 1.015 0 0021.5 1 3.49 3.49 0 0019 2.063 3.49 3.49 0 0016.5 1a1.018 1.018 0 00-.36.074 3.555 3.555 0 00-1.937.856 2.642 2.642 0 00-.762-.586C12.7.977 12 1 11.992 1c-2.105.008-3.117 1.898-3.117 1.898l.004-.015-2.824 4.992-3.16-6.32a1 1 0 00-.88-.567h.001z"
  })));
};

EsxiOS_EsxiOS.propTypes = {
  size: prop_types_default.a.number,
  viewBox: prop_types_default.a.string,
  enableBackground: prop_types_default.a.string
};
/* harmony default export */ var OperatingSystems_EsxiOS = (EsxiOS_EsxiOS);
// CONCATENATED MODULE: ./src/OperatingSystems/index.js





// CONCATENATED MODULE: ./src/index.js











/***/ })
/******/ ]);
});