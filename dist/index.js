(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["metal-ui"] = factory(require("react"), require("react-dom"));
	else
		root["metal-ui"] = factory(root["React"], root["ReactDOM"]);
})((typeof window !== 'undefined' ? window : this), function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__4__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

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
__webpack_require__.d(__webpack_exports__, "ActivityIcon", function() { return /* reexport */ Icon_ActivityIcon; });
__webpack_require__.d(__webpack_exports__, "BellIcon", function() { return /* reexport */ Icon_BellIcon; });
__webpack_require__.d(__webpack_exports__, "CheveronDownIcon", function() { return /* reexport */ Icon_CheveronDownIcon; });
__webpack_require__.d(__webpack_exports__, "HelpIcon", function() { return /* reexport */ Icon_HelpIcon; });
__webpack_require__.d(__webpack_exports__, "HomeIcon", function() { return /* reexport */ Icon_HomeIcon; });
__webpack_require__.d(__webpack_exports__, "MenuIcon", function() { return /* reexport */ Icon_MenuIcon; });
__webpack_require__.d(__webpack_exports__, "OkIcon", function() { return /* reexport */ Icon_OkIcon; });
__webpack_require__.d(__webpack_exports__, "ServersIcon", function() { return /* reexport */ Icon_ServersIcon; });
__webpack_require__.d(__webpack_exports__, "SettingsIcon", function() { return /* reexport */ Icon_SettingsIcon; });
__webpack_require__.d(__webpack_exports__, "SortingIcon", function() { return /* reexport */ Icon_SortingIcon; });
__webpack_require__.d(__webpack_exports__, "TeamIcon", function() { return /* reexport */ TeamIcon; });

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(1);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(0);
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





var positionType = {
  bottomLeft: "mt-2 left-0",
  bottomRight: "mt-2 right-0",
  topRight: "mb-2 bottom-full right-0",
  topLeft: "mb-2 bottom-full left-0"
};

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
    className: "mr-2 transition ease-in-out duration-150"
  }), label, iconAfter && Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(iconAfter, {
    className: "mr-2 transition ease-in-out duration-150"
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
  default: "text-gray-700 hover:text-gray-900 focus:text-gray-900"
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
  var classes = cx("flex text-left min-w-full px-4 py-2 text-sm leading-5 focus:outline-none", Menu_defineProperty({
    "focus:bg-gray-100 hover:bg-gray-100": !component,
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
// CONCATENATED MODULE: ./src/Icon/Icon.js



var Icon_Icon = function Icon(_ref) {
  var onClick = _ref.onClick,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "#9fa6b2" : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? true : _ref$fill,
      children = _ref.children,
      className = _ref.className,
      strokeWidth = _ref.strokeWidth,
      strokeLinecap = _ref.strokeLinecap,
      strokeLinejoin = _ref.strokeLinejoin;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("svg", {
    width: "".concat(size, "px"),
    height: "".concat(size, "px"),
    onClick: onClick,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: className,
    fill: fill ? color : "none",
    color: !fill ? color : "none",
    stroke: strokeWidth ? color : "none",
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLinecap,
    strokeLinejoin: strokeLinejoin
  }, Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["cloneElement"])(children, {
    color: color
  }));
};

Icon_Icon.propTypes = {
  onClick: prop_types_default.a.func,
  color: prop_types_default.a.string,
  size: prop_types_default.a.number,
  fill: prop_types_default.a.bool,
  children: prop_types_default.a.node,
  className: prop_types_default.a.string,
  strokeWidth: prop_types_default.a.string,
  strokeLinecap: prop_types_default.a.string,
  strokeLinejoin: prop_types_default.a.string
};
/* harmony default export */ var src_Icon_Icon = (Icon_Icon);
// CONCATENATED MODULE: ./src/Icon/ActivityIcon.js




var ActivityIcon_ActivityIcon = function ActivityIcon(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      color = _ref.color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Icon_Icon, {
    className: className,
    onClick: onClick,
    size: size,
    color: color
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    id: "icon-status_svg__a",
    d: "M7.32296704,13 L5,13 C4.44771525,13 4,12.5522847 4,12 C4,11.4477153 4.44771525,11 5,11 L8,11 C8.40890459,11 8.77661334,11.2489509 8.92847669,11.6286093 L10,14.3074176 L13.0715233,6.62860932 C13.4067816,5.79046356 14.5932184,5.79046356 14.9284767,6.62860932 L16.677033,11 L19,11 C19.5522847,11 20,11.4477153 20,12 C20,12.5522847 19.5522847,13 19,13 L16,13 C15.5910954,13 15.2233867,12.7510491 15.0715233,12.3713907 L14,9.6925824 L10.9284767,17.3713907 C10.5932184,18.2095364 9.40678162,18.2095364 9.07152331,17.3713907 L7.32296704,13 Z"
  }));
};

ActivityIcon_ActivityIcon.propTypes = {
  onClick: prop_types_default.a.func,
  size: prop_types_default.a.number,
  color: prop_types_default.a.string,
  className: prop_types_default.a.string
};
/* harmony default export */ var Icon_ActivityIcon = (ActivityIcon_ActivityIcon);
// CONCATENATED MODULE: ./src/Icon/BellIcon.js




var BellIcon_BellIcon = function BellIcon(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      color = _ref.color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Icon_Icon, {
    className: className,
    onClick: onClick,
    size: size,
    color: color
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    id: "icon-notifications-default_svg__a",
    d: "M9,11 L9,15 L15,15 L15,11 C15,9.34314575 13.6568542,8 12,8 C10.3431458,8 9,9.34314575 9,11 Z M17,15 C17.5522847,15 18,15.4477153 18,16 C18,16.5522847 17.5522847,17 17,17 L7,17 C6.44771525,17 6,16.5522847 6,16 C6,15.4477153 6.44771525,15 7,15 L7,11 C7,8.70163744 8.55075381,6.76547284 10.6630137,6.18075397 C10.5587807,5.97645065 10.5,5.74508981 10.5,5.5 C10.5,4.67157288 11.1715729,4 12,4 C12.8284271,4 13.5,4.67157288 13.5,5.5 C13.5,5.74508981 13.4412193,5.97645065 13.3369863,6.18075396 C15.4492462,6.76547284 17,8.70163744 17,11 L17,15 Z M10,18 L14,18 C14,19.1045695 13.1045695,20 12,20 C10.8954305,20 10,19.1045695 10,18 Z"
  }));
};

BellIcon_BellIcon.propTypes = {
  onClick: prop_types_default.a.func,
  size: prop_types_default.a.number,
  color: prop_types_default.a.string,
  className: prop_types_default.a.string
};
/* harmony default export */ var Icon_BellIcon = (BellIcon_BellIcon);
// CONCATENATED MODULE: ./src/Icon/CheveronDownIcon.js




var CheveronDownIcon_CheveronDownIcon = function CheveronDownIcon(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      color = _ref.color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Icon_Icon, {
    className: className,
    onClick: onClick,
    size: size,
    color: color
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    className: "secondary",
    fillRule: "evenodd",
    d: "M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
  }));
};

CheveronDownIcon_CheveronDownIcon.propTypes = {
  onClick: prop_types_default.a.func,
  size: prop_types_default.a.number,
  color: prop_types_default.a.string,
  className: prop_types_default.a.string
};
/* harmony default export */ var Icon_CheveronDownIcon = (CheveronDownIcon_CheveronDownIcon);
// CONCATENATED MODULE: ./src/Icon/HelpIcon.js




var HelpIcon_HelpIcon = function HelpIcon(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      color = _ref.color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Icon_Icon, {
    className: className,
    onClick: onClick,
    size: size,
    fill: false,
    color: color,
    strokeWidth: "2",
    strokeLinecap: "square",
    strokeLinejoin: "miter"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M12 14C12 12 13.576002 11.6652983 14.1186858 11.1239516 14.663127 10.5808518 15 9.82976635 15 9 15 7.34314575 13.6568542 6 12 6 11.1040834 6 10.2998929 6.39272604 9.75018919 7.01541737 9.49601109 7.30334431 9.29624369 7.64043912 9.16697781 8.01061095"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12",
    y2: "17"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  })));
};

HelpIcon_HelpIcon.propTypes = {
  onClick: prop_types_default.a.func,
  size: prop_types_default.a.number,
  color: prop_types_default.a.string,
  className: prop_types_default.a.string
};
/* harmony default export */ var Icon_HelpIcon = (HelpIcon_HelpIcon);
// CONCATENATED MODULE: ./src/Icon/HomeIcon.js




var HomeIcon_HomeIcon = function HomeIcon(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      color = _ref.color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Icon_Icon, {
    className: className,
    onClick: onClick,
    size: size,
    color: color
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M11,16 L11,12.990778 C11,12.4435864 11.4438648,12 12,12 C12.5522847,12 13,12.4509752 13,12.990778 L13,16 L15,16 L15,10.1065684 L12,7.35656838 L9,10.1065684 L9,16 L11,16 Z M17,16 L17.5,16 C18.0522847,16 18.5,16.4477153 18.5,17 C18.5,17.5522847 18.0522847,18 17.5,18 L6.5,18 C5.94771525,18 5.5,17.5522847 5.5,17 C5.5,16.4477153 5.94771525,16 6.5,16 L7,16 L7,11.9399017 L6.67572463,12.2371541 C6.26860564,12.6103465 5.63603827,12.5828436 5.26284586,12.1757246 C4.88965345,11.7686056 4.91715638,11.1360383 5.32427537,10.7628459 L11.3242754,5.26284586 C11.7065966,4.91238471 12.2934034,4.91238471 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L17,11.9399017 L17,16 Z"
  }));
};

HomeIcon_HomeIcon.propTypes = {
  onClick: prop_types_default.a.func,
  size: prop_types_default.a.number,
  color: prop_types_default.a.string,
  className: prop_types_default.a.string
};
/* harmony default export */ var Icon_HomeIcon = (HomeIcon_HomeIcon);
// CONCATENATED MODULE: ./src/Icon/MenuIcon.js




var MenuIcon_MenuIcon = function MenuIcon(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      color = _ref.color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Icon_Icon, {
    className: className,
    onClick: onClick,
    size: size,
    color: color,
    withStroke: true
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("svg", {
    className: "h-6 w-6",
    stroke: color,
    fill: "none",
    viewBox: "0 0 ".concat(size, " ").concat(size)
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    className: "inline-flex",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6h16M4 12h16M4 18h16"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    className: "hidden",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M6 18L18 6M6 6l12 12"
  })));
};

MenuIcon_MenuIcon.propTypes = {
  onClick: prop_types_default.a.func,
  size: prop_types_default.a.number,
  color: prop_types_default.a.string,
  className: prop_types_default.a.string
};
/* harmony default export */ var Icon_MenuIcon = (MenuIcon_MenuIcon);
// CONCATENATED MODULE: ./src/Icon/OkIcon.js




var OkIcon_OkIcon = function OkIcon(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      color = _ref.color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Icon_Icon, {
    className: className,
    onClick: onClick,
    size: size,
    color: color,
    fill: false,
    strokeWidth: "2",
    strokeLinecap: "square",
    strokeLinejoin: "miter"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("polyline", {
    points: "4 13 9 18 20 7"
  }));
};

OkIcon_OkIcon.propTypes = {
  onClick: prop_types_default.a.func,
  size: prop_types_default.a.number,
  color: prop_types_default.a.string,
  className: prop_types_default.a.string
};
/* harmony default export */ var Icon_OkIcon = (OkIcon_OkIcon);
// CONCATENATED MODULE: ./src/Icon/ServersIcon.js




var ServersIcon_ServersIcon = function ServersIcon(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      color = _ref.color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Icon_Icon, {
    className: className,
    onClick: onClick,
    size: size,
    color: color
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    id: "icon-collection_svg__a",
    d: "M6,18.0046024 C5.99955961,18.0013018 8.66776042,17.9997677 14.0046024,18 C14.0013018,18.0004404 13.9997677,15.3322396 14,9.99539757 C14.0004404,9.9986982 11.3322396,10.0002323 5.99539757,10 C5.9986982,9.99955961 6.00023234,12.6677604 6,18.0046024 Z M4,9.99539757 C4,8.89524768 4.90146618,8 5.99539757,8 L14.0046024,8 C15.1047523,8 16,8.90146618 16,9.99539757 L16,18.0046024 C16,19.1047523 15.0985338,20 14.0046024,20 L5.99539757,20 C4.89524768,20 4,19.0985338 4,18.0046024 L4,9.99539757 Z M9.99539757,6 C9.99698987,6 9.99852401,6.33333333 10,7 L8,7 L8,6 C8,4.89836205 8.90043881,4 9.99539757,4 L18.0046024,4 C19.1047523,4 20,4.90146618 20,5.99539757 L20,14.0046024 C20,15.1083943 19.1066541,16 18,16 L17,16 L17,14 L18,14 L18,5.99539757 C18.0004404,5.9986982 15.3322396,6.00023234 9.99539757,6 Z"
  }));
};

ServersIcon_ServersIcon.propTypes = {
  onClick: prop_types_default.a.func,
  size: prop_types_default.a.number,
  color: prop_types_default.a.string,
  className: prop_types_default.a.string
};
/* harmony default export */ var Icon_ServersIcon = (ServersIcon_ServersIcon);
// CONCATENATED MODULE: ./src/Icon/SettingsIcon.js




var SettingsIcon_SettingsIcon = function SettingsIcon(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      color = _ref.color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Icon_Icon, {
    className: className,
    onClick: onClick,
    size: size,
    color: color
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    id: "icon-slider_svg__a",
    d: "M11.1710628,14 C11.5836671,12.8348076 12.6964391,12 14,12 C15.3057213,12 16.4166114,12.8362657 16.8288234,14 L17.9906311,14 C18.5480902,14 19,14.4438648 19,15 C19,15.5522847 18.5566468,16 17.9906311,16 L16.8289372,16 C16.4163329,17.1651924 15.3035609,18 14,18 C12.6942787,18 11.5833886,17.1637343 11.1711766,16 L5.99703014,16 C5.4463856,16 5,15.5561352 5,15 C5,14.4477153 5.45303631,14 5.99703014,14 L11.1710628,14 Z M13,15 C13,15.550425 13.4492263,16 14,16 C14.550425,16 15,15.5507737 15,15 C15,14.449575 14.5507737,14 14,14 C13.449575,14 13,14.4492263 13,15 Z M12.8288234,8 L18.0029699,8 C18.5536144,8 19,8.44386482 19,9 C19,9.55228475 18.5469637,10 18.0029699,10 L12.8289372,10 C12.4163329,11.1651924 11.3035609,12 10,12 C8.69427867,12 7.58338862,11.1637343 7.17117658,10 L6.0093689,10 C5.45190985,10 5,9.55613518 5,9 C5,8.44771525 5.44335318,8 6.0093689,8 L7.17106282,8 C7.58366708,6.83480763 8.69643907,6 10,6 C11.3057213,6 12.4166114,6.83626566 12.8288234,8 Z M9,9 C9,9.55042501 9.44922627,10 10,10 C10.550425,10 11,9.55077373 11,9 C11,8.44957499 10.5507737,8 10,8 C9.44957499,8 9,8.44922627 9,9 Z"
  }));
};

SettingsIcon_SettingsIcon.propTypes = {
  onClick: prop_types_default.a.func,
  size: prop_types_default.a.number,
  color: prop_types_default.a.string,
  className: prop_types_default.a.string
};
/* harmony default export */ var Icon_SettingsIcon = (SettingsIcon_SettingsIcon);
// CONCATENATED MODULE: ./src/Icon/SortingIcon.js




var SortingIcon_SortingIcon = function SortingIcon(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      color = _ref.color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Icon_Icon, {
    className: className,
    onClick: onClick,
    size: size,
    color: color,
    fill: false,
    strokeWidth: "2",
    strokeLinecap: "square",
    strokeLinejoin: "miter"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Fragment, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("polyline", {
    points: "8 8.333 12 4.333 16 8.333 16 8.333"
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("polyline", {
    points: "16 15.667 12 19.667 8 15.667 8 15.667"
  })));
};

SortingIcon_SortingIcon.propTypes = {
  onClick: prop_types_default.a.func,
  size: prop_types_default.a.number,
  color: prop_types_default.a.string,
  className: prop_types_default.a.string
};
/* harmony default export */ var Icon_SortingIcon = (SortingIcon_SortingIcon);
// CONCATENATED MODULE: ./src/Icon/TeamIcon.js




var TeamIcon_ServersIcon = function ServersIcon(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      color = _ref.color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Icon_Icon, {
    className: className,
    onClick: onClick,
    size: size,
    color: color
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    id: "icon-user_svg__a",
    d: "M8.66245729,12.7230724 C7.64198532,11.8076578 7,10.4788007 7,9 C7,6.23857625 9.23857625,4 12,4 C14.7614237,4 17,6.23857625 17,9 C17,10.4788007 16.3580147,11.8076578 15.3375427,12.7230724 C17.5093449,13.731343 19,15.6972696 19,18 C19,18.5522847 18.5522847,19 18,19 C17.4477153,19 17,18.5522847 17,18 C17,15.8352984 14.7976419,14 12,14 C9.20235808,14 7,15.8352984 7,18 C7,18.5522847 6.55228475,19 6,19 C5.44771525,19 5,18.5522847 5,18 C5,15.6972696 6.49065506,13.731343 8.66245729,12.7230724 Z M12,12 C13.6568542,12 15,10.6568542 15,9 C15,7.34314575 13.6568542,6 12,6 C10.3431458,6 9,7.34314575 9,9 C9,10.6568542 10.3431458,12 12,12 Z"
  }));
};

TeamIcon_ServersIcon.propTypes = {
  onClick: prop_types_default.a.func,
  size: prop_types_default.a.number,
  color: prop_types_default.a.string,
  className: prop_types_default.a.string
};
/* harmony default export */ var TeamIcon = (TeamIcon_ServersIcon);
// CONCATENATED MODULE: ./src/Icon/index.js











// CONCATENATED MODULE: ./src/index.js









/***/ })
/******/ ]);
});