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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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
  module.exports = __webpack_require__(6)();
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

module.exports = __webpack_require__(8)


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



var ReactPropTypesSecret = __webpack_require__(7);

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
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(0);

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(9));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(10));

var _stylesheet = _interopRequireDefault(__webpack_require__(11));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "production" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Table", function() { return /* reexport */ src_Table; });
__webpack_require__.d(__webpack_exports__, "Header", function() { return /* reexport */ src_Header; });
__webpack_require__.d(__webpack_exports__, "Content", function() { return /* reexport */ src_Content; });
__webpack_require__.d(__webpack_exports__, "Dropdown", function() { return /* reexport */ src_Dropdown; });
__webpack_require__.d(__webpack_exports__, "Button", function() { return /* reexport */ src_Button; });
__webpack_require__.d(__webpack_exports__, "Box", function() { return /* reexport */ src_Box; });
__webpack_require__.d(__webpack_exports__, "Menu", function() { return /* reexport */ src_Menu; });
__webpack_require__.d(__webpack_exports__, "Sidesheet", function() { return /* reexport */ src_Sidesheet; });
__webpack_require__.d(__webpack_exports__, "Skeleton", function() { return /* reexport */ src_Skeleton; });
__webpack_require__.d(__webpack_exports__, "Avatar", function() { return /* reexport */ src_Avatar; });
__webpack_require__.d(__webpack_exports__, "BRFlag", function() { return /* reexport */ Flags_BRFlag; });
__webpack_require__.d(__webpack_exports__, "AUFlag", function() { return /* reexport */ Flags_AUFlag; });
__webpack_require__.d(__webpack_exports__, "USFlag", function() { return /* reexport */ Flags_USFlag; });
__webpack_require__.d(__webpack_exports__, "CentOS", function() { return /* reexport */ OperatingSystems_CentOS; });
__webpack_require__.d(__webpack_exports__, "UbuntuOS", function() { return /* reexport */ OperatingSystems_UbuntuOS; });
__webpack_require__.d(__webpack_exports__, "WindowsOS", function() { return /* reexport */ OperatingSystems_WindowsOS; });
__webpack_require__.d(__webpack_exports__, "DebianOS", function() { return /* reexport */ OperatingSystems_DebianOS; });
__webpack_require__.d(__webpack_exports__, "EsxiOS", function() { return /* reexport */ OperatingSystems_EsxiOS; });
__webpack_require__.d(__webpack_exports__, "Text", function() { return /* reexport */ Typography_Text; });
__webpack_require__.d(__webpack_exports__, "Heading", function() { return /* reexport */ Typography_Heading; });
__webpack_require__.d(__webpack_exports__, "UnorderedList", function() { return /* reexport */ UnorderedList_UnorderedList; });

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
    className: classnames_default()("px-6 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider", className)
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
// CONCATENATED MODULE: ./src/Header/index.js



var Header_Header = function Header(_ref) {
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

Header_Header.propTypes = {
  leftContent: prop_types_default.a.node,
  centerContent: prop_types_default.a.node,
  rightContent: prop_types_default.a.node
};
/* harmony default export */ var src_Header = (Header_Header);
// CONCATENATED MODULE: ./src/Content/index.js




var Content_Content = function Content(_ref) {
  var children = _ref.children,
      size = _ref.size,
      className = _ref.className;
  var base = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: classnames_default()("mx-auto px-4 sm:px-6 md:px-8", {
      "max-w-xl": size === "small",
      "max-w-5xl": size === "default" || !size,
      "max-w-full": size === "full"
    }, className)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "py-8"
  }, children));
  return base;
};

Content_Content.propTypes = {
  children: prop_types_default.a.node,
  size: prop_types_default.a.string,
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

      var paddingTop = 8;

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
    onClick: function onClick(e) {
      e.stopPropagation();
      setOpen(!open);
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
  "default": "border-transparent text-white bg-indigo-600 hover:bg-indigo-500 focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
};
var minimalTypes = {
  disabled: "opacity-50",
  danger: "border-transparent text-red-600 hover:text-red-500 active:text-red-700",
  secondary: "border-transparent text-gray-700 hover:text-gray-500 active:text-gray-700",
  "default": "border-transparent text-indigo-600 hover:text-indigo-500 active:text-indigo-700"
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
    className: "mr-2 transition ease-in-out duration-150"
  }), label, iconAfter && Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(iconAfter, {
    className: "ml-2 transition ease-in-out duration-150"
  }));
  var ButtonClasses = cx("inline-flex items-center px-8 h-10 leading-10 border text-sm font-medium rounded focus:outline-none transition ease-in-out duration-150", Button_defineProperty({
    disabled: disabled,
    "default": !type
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
      flexWrap = _ref.flexWrap,
      children = _ref.children,
      className = _ref.className,
      rootCard = _ref.rootCard,
      noPadding = _ref.noPadding;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: classnames_default()("overflow-hidden", className, (_classNames = {
      flex: Boolean(flex),
      "bg-white": !Boolean(backgroundColor)
    }, Box_defineProperty(_classNames, "items-".concat(alignItems), Boolean(alignItems)), Box_defineProperty(_classNames, "justify-".concat(justifyContent), Boolean(justifyContent)), Box_defineProperty(_classNames, "bg-".concat(backgroundColor), Boolean(backgroundColor)), Box_defineProperty(_classNames, "flex-".concat(flexDirection), Boolean(flexDirection)), Box_defineProperty(_classNames, "mb-4 shadow rounded", Boolean(rootCard)), Box_defineProperty(_classNames, "px-6 py-4", !Boolean(noPadding)), Box_defineProperty(_classNames, "flex-".concat(flexWrap), Boolean(flexWrap)), _classNames))
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
  noPadding: prop_types_default.a.bool,
  flexWrap: prop_types_default.a.string
};
/* harmony default export */ var src_Box = (Box_Box);
// CONCATENATED MODULE: ./src/Menu/index.js
function Menu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var itemType = {
  iconAfter: "justify-between",
  disabled: "opacity-50",
  danger: "text-red-600 hover:text-red-600 focus:text-red-600",
  "default": "text-gray-700 hover:text-gray-900 focus:text-gray-900",
  dark: "bg-gray-900 focus:text-white text-white focus:bg-gray-900 hover:bg-gray-700"
};

var Menu_Menu = function Menu(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: bind_default()("rounded bg-white shadow-xs overflow-hidden", className)
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
    className: "ml-2 transition ease-in-out duration-150"
  }));
  var classes = cx("flex text-left min-w-full px-4 py-2 text-sm leading-5 focus:outline-none focus:bg-gray-100 hover:bg-gray-100", Menu_defineProperty({
    iconAfter: iconAfter,
    disabled: disabled && onSelect,
    "default": !type
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
// CONCATENATED MODULE: ./src/Sidesheet/index.js
function Sidesheet_slicedToArray(arr, i) { return Sidesheet_arrayWithHoles(arr) || Sidesheet_iterableToArrayLimit(arr, i) || Sidesheet_unsupportedIterableToArray(arr, i) || Sidesheet_nonIterableRest(); }

function Sidesheet_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Sidesheet_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Sidesheet_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Sidesheet_arrayLikeToArray(o, minLen); }

function Sidesheet_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Sidesheet_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Sidesheet_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function XIcon() {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("svg", {
    fill: "none",
    className: "text-gray-600",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    width: "16px",
    height: "16px"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
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
  return Object(external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_["createPortal"])(children, element.current);
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
      _useState2 = Sidesheet_slicedToArray(_useState, 2),
      isOpened = _useState2[0],
      setIsOpened = _useState2[1];

  var _useState3 = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(false),
      _useState4 = Sidesheet_slicedToArray(_useState3, 2),
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
    if (isOpened) {
      onClose();
      setTransition(false);
      setTimeout(function () {
        return setIsOpened(false);
      }, 500);
    }
  };

  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    ref: sideSheet,
    className: bind_default()("relative inline-block text-left", className)
  }, children, isOpened && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Sidesheet_SidesheetContent, {
    id: "sidesheet"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    onClick: function onClick() {
      return closeTransition();
    },
    className: bind_default()("fixed z-50 inset-0 opacity-25 duration-300 delay-200 transition", {
      "bg-gray-800": transition,
      "bg-transparent": !transition
    })
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
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
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Box, {
    flex: true,
    alignItems: "center",
    className: "relative border-b border-gray-200 rounded rounded-b-none"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "text-gray-600 flex-auto truncate leading-6"
  }, title), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Box, {
    flex: true,
    backgroundColor: "transparent",
    className: "cursor-pointer",
    noPadding: true
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    onClick: function onClick() {
      return closeTransition();
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(XIcon, null)))), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Box, {
    flex: true,
    flexDirection: "col",
    className: "sidesheet-content relative overflow-y-auto flex-1 rounded"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Box, {
    noPadding: true,
    flex: true,
    flexDirection: "col",
    className: "h-full"
  }, content)), action && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Box, {
    flex: true,
    justifyContent: "center",
    alignItems: "center",
    className: "sidesheet-action h-16 border-t border-gray-200 relative flex-initial rounded rounded-t-none"
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
// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__(5);
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: ./src/Skeleton/styles.js
var _defaultExport = new String("@-webkit-keyframes skeleton-jsx-309491756{0%{background-position:200% 0;}to{background-position:-200% 0;}}@keyframes skeleton-jsx-309491756{0%{background-position:200% 0;}to{background-position:-200% 0;}}.skeleton.jsx-309491756{display:block;border-radius:5px;background-image:linear-gradient( 270deg, #fafafa, #eaeaea, #eaeaea, #fafafa );background-size:400% 100%;-webkit-animation:skeleton-jsx-309491756 8s ease-in-out infinite;animation:skeleton-jsx-309491756 8s ease-in-out infinite;}");

_defaultExport.__hash = "309491756";
/* harmony default export */ var styles = (_defaultExport);
// CONCATENATED MODULE: ./src/Skeleton/index.js






var Skeleton_Skeleton = function Skeleton(_ref) {
  var width = _ref.width,
      height = _ref.height,
      className = _ref.className;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
    style: {
      width: width,
      minHeight: height
    },
    className: "jsx-".concat(styles.__hash) + " " + (classnames_default()("skeleton", className) || "")
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(style_default.a, {
    id: styles.__hash
  }, styles)));
};

Skeleton_Skeleton.propTypes = {
  width: prop_types_default.a.number,
  height: prop_types_default.a.number
};
Skeleton_Skeleton.defaultProps = {
  width: 160,
  height: 24
};
/* harmony default export */ var src_Skeleton = (Skeleton_Skeleton);
// CONCATENATED MODULE: ./src/Avatar/src/utils/getInitials.js
function getInitials_getInitials(name) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '?';
  if (!name || typeof name !== 'string') return fallback;
  return name.replace(/\s+/, ' ').split(' ') // Repeated spaces results in empty strings
  .slice(0, 2).map(function (v) {
    return v && v[0].toUpperCase();
  }) // Watch out for empty strings
  .join('');
}
// CONCATENATED MODULE: ./src/Avatar/src/utils/hash.js
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
// CONCATENATED MODULE: ./src/Avatar/src/styles/scales.js
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
// CONCATENATED MODULE: ./src/Avatar/src/styles/palette.js

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
// CONCATENATED MODULE: ./src/Avatar/src/styles/colors.js


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
// CONCATENATED MODULE: ./src/Avatar/src/styles/fills.js


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
// CONCATENATED MODULE: ./src/Avatar/src/utils/getAvatarProps.js

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
// CONCATENATED MODULE: ./src/Avatar/src/utils/getInitialsFontSize.js
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
// CONCATENATED MODULE: ./src/Avatar/src/Avatar.js
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function Avatar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Avatar_Avatar = /*#__PURE__*/function (_PureComponent) {
  _inherits(Avatar, _PureComponent);

  var _super = _createSuper(Avatar);

  function Avatar(props, context) {
    var _this;

    _classCallCheck(this, Avatar);

    _this = _super.call(this, props, context);

    Avatar_defineProperty(_assertThisInitialized(_this), "getColorProps", function () {
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

  _createClass(Avatar, [{
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
          props = _objectWithoutProperties(_this$props2, ["className", "size", "name", "isSolid", "isDashed", "hashValue", "getInitials", "color", "sizeLimitOneCharacter"]);

      var initialsFontSize = "".concat(getInitialsFontSize(size, sizeLimitOneCharacter), "px");
      var initials = getInitials(name);

      if (size <= sizeLimitOneCharacter) {
        initials = initials.slice(0, 1);
      }

      var colorProps = this.getColorProps();
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({
        className: classnames_default()("overflow-hidden relative inline-flex flex-shrink-0 justify-center", className, {
          "rounded-full": !Boolean(isDashed),
          "rounded border-2 border-dashed border-gray-300": Boolean(isDashed)
        }),
        style: {
          backgroundColor: isDashed ? 'transparent' : colorProps.backgroundColor,
          width: size,
          height: size
        },
        title: name
      }, props), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
        className: classnames_default()("relative flex justify-center items-center", {
          "text-gray-300": Boolean(isDashed)
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
   * When true, render a solid avatar.
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

/* harmony default export */ var src_Avatar = (Avatar_Avatar);
// CONCATENATED MODULE: ./src/Flags/Flag.js



var Flag_Flag = function Flag(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 40 : _ref$size,
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





// CONCATENATED MODULE: ./src/Typography/Text.js
function Text_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Text_typeof = function _typeof(obj) { return typeof obj; }; } else { Text_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Text_typeof(obj); }

function Text_extends() { Text_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Text_extends.apply(this, arguments); }

function Text_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Text_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Text_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Text_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Text_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Text_createClass(Constructor, protoProps, staticProps) { if (protoProps) Text_defineProperties(Constructor.prototype, protoProps); if (staticProps) Text_defineProperties(Constructor, staticProps); return Constructor; }

function Text_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Text_setPrototypeOf(subClass, superClass); }

function Text_setPrototypeOf(o, p) { Text_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Text_setPrototypeOf(o, p); }

function Text_createSuper(Derived) { var hasNativeReflectConstruct = Text_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Text_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Text_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Text_possibleConstructorReturn(this, result); }; }

function Text_possibleConstructorReturn(self, call) { if (call && (Text_typeof(call) === "object" || typeof call === "function")) { return call; } return Text_assertThisInitialized(self); }

function Text_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Text_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Text_getPrototypeOf(o) { Text_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Text_getPrototypeOf(o); }

function Text_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Text_Text = /*#__PURE__*/function (_PureComponent) {
  Text_inherits(Text, _PureComponent);

  var _super = Text_createSuper(Text);

  function Text() {
    Text_classCallCheck(this, Text);

    return _super.apply(this, arguments);
  }

  Text_createClass(Text, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          bold = _this$props.bold,
          color = _this$props.color,
          small = _this$props.small,
          is = _this$props.is,
          props = Text_objectWithoutProperties(_this$props, ["className", "bold", "color", "small", "is"]);

      var Tag = is;
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Tag, Text_extends({
        className: classnames_default()("leading-normal", color, {
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

Text_defineProperty(Text_Text, "propTypes", {
  /**
   * When true, makes Text semi-bold.
   */
  bold: prop_types_default.a.bool,
  color: prop_types_default.a.string,
  is: prop_types_default.a.oneOf(['span', 'p', 'li']).isRequired
});

Text_defineProperty(Text_Text, "defaultProps", {
  color: "text-gray-800",
  is: "span"
});

/* harmony default export */ var Typography_Text = (Text_Text);
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

function Heading_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(HTag, Heading_extends({
        className: classnames_default()("font-medium leading-normal", className, {
          "text-4xl tracking-tighter": size == 1,
          "text-3xl tracking-tighter": size == 2,
          "text-xl tracking-tight": size == 3,
          "text-lg": size == 4,
          "text-base": size == 5,
          "text-sm": size == 6,
          "text-gray-800": color == "default",
          "text-red-700": color == "danger"
        })
      }, props));
    }
  }]);

  return Heading;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["PureComponent"]);

Heading_defineProperty(Heading_Heading, "propTypes", {
  /**
   * Can be: 1, 2, 3, 4, 5, 6
   */
  size: prop_types_default.a.oneOf([1, 2, 3, 4, 5, 6]).isRequired,

  /**
   * The only options are default and danger.
   */
  color: prop_types_default.a.oneOf(["default", "danger"]).isRequired
});

Heading_defineProperty(Heading_Heading, "defaultProps", {
  size: 1,
  color: "default"
});

/* harmony default export */ var Typography_Heading = (Heading_Heading);
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

function UnorderedList_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
        if (!external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(child)) {
          return child;
        }

        return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.cloneElement(child, UnorderedList_objectSpread({}, child.props));
      });
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("ul", UnorderedList_extends({
        className: classnames_default()("leading-normal list-disc p-0 m-0 ml-4", {})
      }, props), finalChildren);
    }
  }]);

  return UnorderedList;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["PureComponent"]);


// CONCATENATED MODULE: ./src/index.js
















/***/ })
/******/ ]);
});