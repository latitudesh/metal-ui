'use strict';

var require$$0$1 = require('react');
var reactDom = require('react-dom');
var PropTypes = require('prop-types');
var react = require('@emotion/react');
var classNames$1 = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames$1);

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var bind = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */
(function () {

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
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

  if (module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else {
    window.classNames = classNames;
  }
})();
}(bind));

var classNames = bind.exports;

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

const Box = ({
  flex,
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap,
  children,
  className,
  rootCard,
  noPadding,
  backgroundColor,
  ...props
}) => {
  return react.jsx("div", _extends({
    className: classNames__default["default"](className, backgroundColor),
    css: ["overflow:hidden;", Boolean(flex) && {
      "display": "flex"
    }, !Boolean(backgroundColor) && {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))"
    }, alignItems === "start" && {
      "alignItems": "flex-start"
    }, alignItems === "end" && {
      "alignItems": "flex-end"
    }, alignItems === "center" && {
      "alignItems": "center"
    }, alignItems === "baseline" && {
      "alignItems": "baseline"
    }, alignItems === "stretch" && {
      "alignItems": "stretch"
    }, justifyContent === "start" && {
      "justifyContent": "flex-start"
    }, justifyContent === "end" && {
      "justifyContent": "flex-end"
    }, justifyContent === "center" && {
      "justifyContent": "center"
    }, justifyContent === "between" && {
      "justifyContent": "space-between"
    }, justifyContent === "around" && {
      "justifyContent": "space-around"
    }, justifyContent === "evenly" && {
      "justifyContent": "space-evenly"
    }, flexDirection === "row" && {
      "flexDirection": "row"
    }, flexDirection === "row-reverse" && {
      "flexDirection": "row-reverse"
    }, flexDirection === "col" && {
      "flexDirection": "column"
    }, flexDirection === "col-reverse" && {
      "flexDirection": "column-reverse"
    }, Boolean(rootCard) && {
      "marginBottom": "1rem",
      "borderWidth": "1px",
      "--tw-border-opacity": "1",
      "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))",
      "borderRadius": "5px",
      "--tw-shadow": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
    }, !Boolean(noPadding) && {
      "paddingLeft": "1.5rem",
      "paddingRight": "1.5rem",
      "paddingTop": "1rem",
      "paddingBottom": "1rem"
    }, flexWrap === "wrap" && {
      "flexWrap": "wrap"
    }, flexWrap === "wrap-reverse" && {
      "flexWrap": "wrap-reverse"
    }, flexWrap === "nowrap" && {
      "flexWrap": "nowrap"
    }, process.env.NODE_ENV === "production" ? "" : ";label:Box;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5jb25zdCBCb3ggPSAoe1xuICBmbGV4LFxuICBhbGlnbkl0ZW1zLFxuICBqdXN0aWZ5Q29udGVudCxcbiAgZmxleERpcmVjdGlvbixcbiAgZmxleFdyYXAsXG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIHJvb3RDYXJkLFxuICBub1BhZGRpbmcsXG4gIGJhY2tncm91bmRDb2xvcixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBiYWNrZ3JvdW5kQ29sb3IpfVxuICAgICAgY3NzPXtbXG4gICAgICAgIHR3YG92ZXJmbG93LWhpZGRlbmAsXG4gICAgICAgIEJvb2xlYW4oZmxleCkgJiYgdHdgZmxleGAsXG4gICAgICAgICFCb29sZWFuKGJhY2tncm91bmRDb2xvcikgJiYgdHdgYmctd2hpdGVgLFxuXG4gICAgICAgIGFsaWduSXRlbXMgPT09IFwic3RhcnRcIiAmJiB0d2BpdGVtcy1zdGFydGAsXG4gICAgICAgIGFsaWduSXRlbXMgPT09IFwiZW5kXCIgJiYgdHdgaXRlbXMtZW5kYCxcbiAgICAgICAgYWxpZ25JdGVtcyA9PT0gXCJjZW50ZXJcIiAmJiB0d2BpdGVtcy1jZW50ZXJgLFxuICAgICAgICBhbGlnbkl0ZW1zID09PSBcImJhc2VsaW5lXCIgJiYgdHdgaXRlbXMtYmFzZWxpbmVgLFxuICAgICAgICBhbGlnbkl0ZW1zID09PSBcInN0cmV0Y2hcIiAmJiB0d2BpdGVtcy1zdHJldGNoYCxcblxuICAgICAgICBqdXN0aWZ5Q29udGVudCA9PT0gXCJzdGFydFwiICYmIHR3YGp1c3RpZnktc3RhcnRgLFxuICAgICAgICBqdXN0aWZ5Q29udGVudCA9PT0gXCJlbmRcIiAmJiB0d2BqdXN0aWZ5LWVuZGAsXG4gICAgICAgIGp1c3RpZnlDb250ZW50ID09PSBcImNlbnRlclwiICYmIHR3YGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAganVzdGlmeUNvbnRlbnQgPT09IFwiYmV0d2VlblwiICYmIHR3YGp1c3RpZnktYmV0d2VlbmAsXG4gICAgICAgIGp1c3RpZnlDb250ZW50ID09PSBcImFyb3VuZFwiICYmIHR3YGp1c3RpZnktYXJvdW5kYCxcbiAgICAgICAganVzdGlmeUNvbnRlbnQgPT09IFwiZXZlbmx5XCIgJiYgdHdganVzdGlmeS1ldmVubHlgLFxuXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gPT09IFwicm93XCIgJiYgdHdgZmxleC1yb3dgLFxuICAgICAgICBmbGV4RGlyZWN0aW9uID09PSBcInJvdy1yZXZlcnNlXCIgJiYgdHdgZmxleC1yb3ctcmV2ZXJzZWAsXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gPT09IFwiY29sXCIgJiYgdHdgZmxleC1jb2xgLFxuICAgICAgICBmbGV4RGlyZWN0aW9uID09PSBcImNvbC1yZXZlcnNlXCIgJiYgdHdgZmxleC1jb2wtcmV2ZXJzZWAsXG5cbiAgICAgICAgQm9vbGVhbihyb290Q2FyZCkgJiYgdHdgbWItNCBib3JkZXIgYm9yZGVyLWJvcmRlciByb3VuZGVkIHNoYWRvdy1zbWAsXG4gICAgICAgICFCb29sZWFuKG5vUGFkZGluZykgJiYgdHdgcHgtNiBweS00YCxcblxuICAgICAgICBmbGV4V3JhcCA9PT0gXCJ3cmFwXCIgJiYgdHdgZmxleC13cmFwYCxcbiAgICAgICAgZmxleFdyYXAgPT09IFwid3JhcC1yZXZlcnNlXCIgJiYgdHdgZmxleC13cmFwLXJldmVyc2VgLFxuICAgICAgICBmbGV4V3JhcCA9PT0gXCJub3dyYXBcIiAmJiB0d2BmbGV4LW5vd3JhcGAsXG4gICAgICBdfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkJveC5kZWZhdWx0UHJvcHMgPSB7XG4gIGZsZXg6IGZhbHNlLFxuICBhbGlnbkl0ZW1zOiBudWxsLFxuICBqdXN0aWZ5Q29udGVudDogbnVsbCxcbiAgZmxleERpcmVjdGlvbjogbnVsbCxcbiAgcm9vdENhcmQ6IGZhbHNlLFxuICBub1BhZGRpbmc6IGZhbHNlLFxuICBmbGV4V3JhcDogbnVsbCxcbn07XG5cbkJveC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHJlbmRlcnMgdGhlIEJveCB3aXRoIGBkaXNwbGF5OmZsZXhgXG4gICAqL1xuICBmbGV4OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIENvbnRyb2xzIGl0ZW0gYWxpZ25tZW50IHdpdGggYGFsaWduLWl0ZW1zYC4gT25seSB3b3JrcyB3aGVuIGZsZXggaXMgdHJ1ZVxuICAgKi9cbiAgYWxpZ25JdGVtczogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcInN0YXJ0XCIsXG4gICAgXCJlbmRcIixcbiAgICBcImNlbnRlclwiLFxuICAgIFwiYmFzZWxpbmVcIixcbiAgICBcInN0cmV0Y2hcIixcbiAgXSksXG4gIC8qKlxuICAgKiBDb250cm9scyBpdGVtIHBvc2l0aW9uaW5nIHdpdGggYGp1c3RpZnktY29udGVudGAuIE9ubHkgd29ya3Mgd2hlbiBmbGV4IGlzIHRydWVcbiAgICovXG4gIGp1c3RpZnlDb250ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwic3RhcnRcIixcbiAgICBcImVuZFwiLFxuICAgIFwiY2VudGVyXCIsXG4gICAgXCJiZXR3ZWVuXCIsXG4gICAgXCJhcm91bmRcIixcbiAgICBcImV2ZW5seVwiLFxuICBdKSxcbiAgLyoqXG4gICAqIENvbnRyb2xzIHRoZSBkaXJlY3Rpb24gb2YgZmxleCBpdGVtcyB3aXRoIGBmbGV4LWRpcmVjdGlvbmAuIE9ubHkgd29ya3Mgd2hlbiBmbGV4IGlzIHRydWVcbiAgICovXG4gIGZsZXhEaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbXCJyb3dcIiwgXCJyb3ctcmV2ZXJzZVwiLCBcImNvbFwiLCBcImNvbC1yZXZlcnNlXCJdKSxcbiAgLyoqXG4gICAqIENvbnRyb2xzIGhvdyBmbGV4IGl0ZW1zIHdyYXAgd2l0aCBgZmxleC13cmFwYC4gT25seSB3b3JrcyB3aGVuIGZsZXggaXMgdHJ1ZVxuICAgKi9cbiAgZmxleFdyYXA6IFByb3BUeXBlcy5vbmVPZihbXCJ3cmFwXCIsIFwid3JhcC1yZXZlcnNlXCIsIFwibm93cmFwXCJdKSxcbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGNvbnRlbnRcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIEFkZHMgYm9yZGVyIGFuZCBzaGFkb3cgdG8gdGhlIEJveC4gVXNlZnVsIHdoZW4gdXNpbmcgQm94IGFzIHRoZSBwYXJlbnQgZWxlbWVudCBvZiBhIHNlY3Rpb25cbiAgICovXG4gIHJvb3RDYXJkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIHBhZGRpbmcgZnJvbSB0aGUgQm94LiBVc2VmdWwgd2hlbiB1c2luZyBCb3ggYXMgYSBzdGFuZGFyZCBgZGl2YC5cbiAgICovXG4gIG5vUGFkZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFNldHMgYSBiYWNrZ3JvdW5kIGNvbG9yLiBTaG91bGQgYmUgYSB0YWlsd2luZCBjbGFzcy5cbiAgICovXG4gIGJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJveDsiXX0= */", process.env.NODE_ENV === "production" ? "" : ";label:Box;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5jb25zdCBCb3ggPSAoe1xuICBmbGV4LFxuICBhbGlnbkl0ZW1zLFxuICBqdXN0aWZ5Q29udGVudCxcbiAgZmxleERpcmVjdGlvbixcbiAgZmxleFdyYXAsXG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIHJvb3RDYXJkLFxuICBub1BhZGRpbmcsXG4gIGJhY2tncm91bmRDb2xvcixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBiYWNrZ3JvdW5kQ29sb3IpfVxuICAgICAgY3NzPXtbXG4gICAgICAgIHR3YG92ZXJmbG93LWhpZGRlbmAsXG4gICAgICAgIEJvb2xlYW4oZmxleCkgJiYgdHdgZmxleGAsXG4gICAgICAgICFCb29sZWFuKGJhY2tncm91bmRDb2xvcikgJiYgdHdgYmctd2hpdGVgLFxuXG4gICAgICAgIGFsaWduSXRlbXMgPT09IFwic3RhcnRcIiAmJiB0d2BpdGVtcy1zdGFydGAsXG4gICAgICAgIGFsaWduSXRlbXMgPT09IFwiZW5kXCIgJiYgdHdgaXRlbXMtZW5kYCxcbiAgICAgICAgYWxpZ25JdGVtcyA9PT0gXCJjZW50ZXJcIiAmJiB0d2BpdGVtcy1jZW50ZXJgLFxuICAgICAgICBhbGlnbkl0ZW1zID09PSBcImJhc2VsaW5lXCIgJiYgdHdgaXRlbXMtYmFzZWxpbmVgLFxuICAgICAgICBhbGlnbkl0ZW1zID09PSBcInN0cmV0Y2hcIiAmJiB0d2BpdGVtcy1zdHJldGNoYCxcblxuICAgICAgICBqdXN0aWZ5Q29udGVudCA9PT0gXCJzdGFydFwiICYmIHR3YGp1c3RpZnktc3RhcnRgLFxuICAgICAgICBqdXN0aWZ5Q29udGVudCA9PT0gXCJlbmRcIiAmJiB0d2BqdXN0aWZ5LWVuZGAsXG4gICAgICAgIGp1c3RpZnlDb250ZW50ID09PSBcImNlbnRlclwiICYmIHR3YGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAganVzdGlmeUNvbnRlbnQgPT09IFwiYmV0d2VlblwiICYmIHR3YGp1c3RpZnktYmV0d2VlbmAsXG4gICAgICAgIGp1c3RpZnlDb250ZW50ID09PSBcImFyb3VuZFwiICYmIHR3YGp1c3RpZnktYXJvdW5kYCxcbiAgICAgICAganVzdGlmeUNvbnRlbnQgPT09IFwiZXZlbmx5XCIgJiYgdHdganVzdGlmeS1ldmVubHlgLFxuXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gPT09IFwicm93XCIgJiYgdHdgZmxleC1yb3dgLFxuICAgICAgICBmbGV4RGlyZWN0aW9uID09PSBcInJvdy1yZXZlcnNlXCIgJiYgdHdgZmxleC1yb3ctcmV2ZXJzZWAsXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gPT09IFwiY29sXCIgJiYgdHdgZmxleC1jb2xgLFxuICAgICAgICBmbGV4RGlyZWN0aW9uID09PSBcImNvbC1yZXZlcnNlXCIgJiYgdHdgZmxleC1jb2wtcmV2ZXJzZWAsXG5cbiAgICAgICAgQm9vbGVhbihyb290Q2FyZCkgJiYgdHdgbWItNCBib3JkZXIgYm9yZGVyLWJvcmRlciByb3VuZGVkIHNoYWRvdy1zbWAsXG4gICAgICAgICFCb29sZWFuKG5vUGFkZGluZykgJiYgdHdgcHgtNiBweS00YCxcblxuICAgICAgICBmbGV4V3JhcCA9PT0gXCJ3cmFwXCIgJiYgdHdgZmxleC13cmFwYCxcbiAgICAgICAgZmxleFdyYXAgPT09IFwid3JhcC1yZXZlcnNlXCIgJiYgdHdgZmxleC13cmFwLXJldmVyc2VgLFxuICAgICAgICBmbGV4V3JhcCA9PT0gXCJub3dyYXBcIiAmJiB0d2BmbGV4LW5vd3JhcGAsXG4gICAgICBdfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkJveC5kZWZhdWx0UHJvcHMgPSB7XG4gIGZsZXg6IGZhbHNlLFxuICBhbGlnbkl0ZW1zOiBudWxsLFxuICBqdXN0aWZ5Q29udGVudDogbnVsbCxcbiAgZmxleERpcmVjdGlvbjogbnVsbCxcbiAgcm9vdENhcmQ6IGZhbHNlLFxuICBub1BhZGRpbmc6IGZhbHNlLFxuICBmbGV4V3JhcDogbnVsbCxcbn07XG5cbkJveC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHJlbmRlcnMgdGhlIEJveCB3aXRoIGBkaXNwbGF5OmZsZXhgXG4gICAqL1xuICBmbGV4OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIENvbnRyb2xzIGl0ZW0gYWxpZ25tZW50IHdpdGggYGFsaWduLWl0ZW1zYC4gT25seSB3b3JrcyB3aGVuIGZsZXggaXMgdHJ1ZVxuICAgKi9cbiAgYWxpZ25JdGVtczogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcInN0YXJ0XCIsXG4gICAgXCJlbmRcIixcbiAgICBcImNlbnRlclwiLFxuICAgIFwiYmFzZWxpbmVcIixcbiAgICBcInN0cmV0Y2hcIixcbiAgXSksXG4gIC8qKlxuICAgKiBDb250cm9scyBpdGVtIHBvc2l0aW9uaW5nIHdpdGggYGp1c3RpZnktY29udGVudGAuIE9ubHkgd29ya3Mgd2hlbiBmbGV4IGlzIHRydWVcbiAgICovXG4gIGp1c3RpZnlDb250ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwic3RhcnRcIixcbiAgICBcImVuZFwiLFxuICAgIFwiY2VudGVyXCIsXG4gICAgXCJiZXR3ZWVuXCIsXG4gICAgXCJhcm91bmRcIixcbiAgICBcImV2ZW5seVwiLFxuICBdKSxcbiAgLyoqXG4gICAqIENvbnRyb2xzIHRoZSBkaXJlY3Rpb24gb2YgZmxleCBpdGVtcyB3aXRoIGBmbGV4LWRpcmVjdGlvbmAuIE9ubHkgd29ya3Mgd2hlbiBmbGV4IGlzIHRydWVcbiAgICovXG4gIGZsZXhEaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbXCJyb3dcIiwgXCJyb3ctcmV2ZXJzZVwiLCBcImNvbFwiLCBcImNvbC1yZXZlcnNlXCJdKSxcbiAgLyoqXG4gICAqIENvbnRyb2xzIGhvdyBmbGV4IGl0ZW1zIHdyYXAgd2l0aCBgZmxleC13cmFwYC4gT25seSB3b3JrcyB3aGVuIGZsZXggaXMgdHJ1ZVxuICAgKi9cbiAgZmxleFdyYXA6IFByb3BUeXBlcy5vbmVPZihbXCJ3cmFwXCIsIFwid3JhcC1yZXZlcnNlXCIsIFwibm93cmFwXCJdKSxcbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGNvbnRlbnRcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIEFkZHMgYm9yZGVyIGFuZCBzaGFkb3cgdG8gdGhlIEJveC4gVXNlZnVsIHdoZW4gdXNpbmcgQm94IGFzIHRoZSBwYXJlbnQgZWxlbWVudCBvZiBhIHNlY3Rpb25cbiAgICovXG4gIHJvb3RDYXJkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIHBhZGRpbmcgZnJvbSB0aGUgQm94LiBVc2VmdWwgd2hlbiB1c2luZyBCb3ggYXMgYSBzdGFuZGFyZCBgZGl2YC5cbiAgICovXG4gIG5vUGFkZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFNldHMgYSBiYWNrZ3JvdW5kIGNvbG9yLiBTaG91bGQgYmUgYSB0YWlsd2luZCBjbGFzcy5cbiAgICovXG4gIGJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJveDsiXX0= */"]
  }, props), children);
};

Box.defaultProps = {
  flex: false,
  alignItems: null,
  justifyContent: null,
  flexDirection: null,
  rootCard: false,
  noPadding: false,
  flexWrap: null
};
Box.propTypes = {
  /**
   * When true, renders the Box with `display:flex`
   */
  flex: PropTypes__default["default"].bool,

  /**
   * Controls item alignment with `align-items`. Only works when flex is true
   */
  alignItems: PropTypes__default["default"].oneOf(["start", "end", "center", "baseline", "stretch"]),

  /**
   * Controls item positioning with `justify-content`. Only works when flex is true
   */
  justifyContent: PropTypes__default["default"].oneOf(["start", "end", "center", "between", "around", "evenly"]),

  /**
   * Controls the direction of flex items with `flex-direction`. Only works when flex is true
   */
  flexDirection: PropTypes__default["default"].oneOf(["row", "row-reverse", "col", "col-reverse"]),

  /**
   * Controls how flex items wrap with `flex-wrap`. Only works when flex is true
   */
  flexWrap: PropTypes__default["default"].oneOf(["wrap", "wrap-reverse", "nowrap"]),

  /**
   * Renders the content
   */
  children: PropTypes__default["default"].node,

  /**
   * Adds border and shadow to the Box. Useful when using Box as the parent element of a section
   */
  rootCard: PropTypes__default["default"].bool,

  /**
   * Removes the padding from the Box. Useful when using Box as a standard `div`.
   */
  noPadding: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string,

  /**
   * Sets a background color. Should be a tailwind class.
   */
  backgroundColor: PropTypes__default["default"].string
};

var useKeyPressEvent$1 = {};

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
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
var __createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};
function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
/** @deprecated */

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}
/** @deprecated */

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
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
  return mod && mod.__esModule ? mod : {
    default: mod
  };
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
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}

var tslib_es6 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	__extends: __extends,
	get __assign () { return __assign; },
	__rest: __rest,
	__decorate: __decorate,
	__param: __param,
	__metadata: __metadata,
	__awaiter: __awaiter,
	__generator: __generator,
	__createBinding: __createBinding,
	__exportStar: __exportStar,
	__values: __values,
	__read: __read,
	__spread: __spread,
	__spreadArrays: __spreadArrays,
	__spreadArray: __spreadArray,
	__await: __await,
	__asyncGenerator: __asyncGenerator,
	__asyncDelegator: __asyncDelegator,
	__asyncValues: __asyncValues,
	__makeTemplateObject: __makeTemplateObject,
	__importStar: __importStar,
	__importDefault: __importDefault,
	__classPrivateFieldGet: __classPrivateFieldGet,
	__classPrivateFieldSet: __classPrivateFieldSet
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(tslib_es6);

var useKeyPress$1 = {};

var useKey$1 = {};

var useEvent$1 = {};

var util = {};

Object.defineProperty(util, "__esModule", {
  value: true
});
util.isNavigator = util.isBrowser = util.off = util.on = util.noop = void 0;

var noop = function () {};

util.noop = noop;

function on(obj) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  if (obj && obj.addEventListener) {
    obj.addEventListener.apply(obj, args);
  }
}

util.on = on;

function off(obj) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  if (obj && obj.removeEventListener) {
    obj.removeEventListener.apply(obj, args);
  }
}

util.off = off;
util.isBrowser = typeof window !== 'undefined';
util.isNavigator = typeof navigator !== 'undefined';

Object.defineProperty(useEvent$1, "__esModule", {
  value: true
});

var react_1$4 = require$$0__default["default"];

var util_1$1 = util;

var defaultTarget = util_1$1.isBrowser ? window : null;

var isListenerType1 = function (target) {
  return !!target.addEventListener;
};

var isListenerType2 = function (target) {
  return !!target.on;
};

var useEvent = function (name, handler, target, options) {
  if (target === void 0) {
    target = defaultTarget;
  }

  react_1$4.useEffect(function () {
    if (!handler) {
      return;
    }

    if (!target) {
      return;
    }

    if (isListenerType1(target)) {
      util_1$1.on(target, name, handler, options);
    } else if (isListenerType2(target)) {
      target.on(name, handler, options);
    }

    return function () {
      if (isListenerType1(target)) {
        util_1$1.off(target, name, handler, options);
      } else if (isListenerType2(target)) {
        target.off(name, handler, options);
      }
    };
  }, [name, handler, target, JSON.stringify(options)]);
};

useEvent$1.default = useEvent;

Object.defineProperty(useKey$1, "__esModule", {
  value: true
});

var tslib_1$2 = require$$0;

var react_1$3 = require$$0__default["default"];

var useEvent_1 = tslib_1$2.__importDefault(useEvent$1);

var util_1 = util;

var createKeyPredicate = function (keyFilter) {
  return typeof keyFilter === 'function' ? keyFilter : typeof keyFilter === 'string' ? function (event) {
    return event.key === keyFilter;
  } : keyFilter ? function () {
    return true;
  } : function () {
    return false;
  };
};

var useKey = function (key, fn, opts, deps) {
  if (fn === void 0) {
    fn = util_1.noop;
  }

  if (opts === void 0) {
    opts = {};
  }

  if (deps === void 0) {
    deps = [key];
  }

  var _a = opts.event,
      event = _a === void 0 ? 'keydown' : _a,
      target = opts.target,
      options = opts.options;
  var useMemoHandler = react_1$3.useMemo(function () {
    var predicate = createKeyPredicate(key);

    var handler = function (handlerEvent) {
      if (predicate(handlerEvent)) {
        return fn(handlerEvent);
      }
    };

    return handler;
  }, deps);
  useEvent_1.default(event, useMemoHandler, target, options);
};

useKey$1.default = useKey;

Object.defineProperty(useKeyPress$1, "__esModule", {
  value: true
});

var tslib_1$1 = require$$0;

var react_1$2 = require$$0__default["default"];

var useKey_1 = tslib_1$1.__importDefault(useKey$1);

var useKeyPress = function (keyFilter) {
  var _a = react_1$2.useState([false, null]),
      state = _a[0],
      set = _a[1];

  useKey_1.default(keyFilter, function (event) {
    return set([true, event]);
  }, {
    event: 'keydown'
  }, [state]);
  useKey_1.default(keyFilter, function (event) {
    return set([false, event]);
  }, {
    event: 'keyup'
  }, [state]);
  return state;
};

useKeyPress$1.default = useKeyPress;

var useUpdateEffect$1 = {};

var useFirstMountState$1 = {};

Object.defineProperty(useFirstMountState$1, "__esModule", {
  value: true
});
useFirstMountState$1.useFirstMountState = void 0;

var react_1$1 = require$$0__default["default"];

function useFirstMountState() {
  var isFirst = react_1$1.useRef(true);

  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }

  return isFirst.current;
}

useFirstMountState$1.useFirstMountState = useFirstMountState;

Object.defineProperty(useUpdateEffect$1, "__esModule", {
  value: true
});

var react_1 = require$$0__default["default"];

var useFirstMountState_1 = useFirstMountState$1;

var useUpdateEffect = function (effect, deps) {
  var isFirstMount = useFirstMountState_1.useFirstMountState();
  react_1.useEffect(function () {
    if (!isFirstMount) {
      return effect();
    }
  }, deps);
};

useUpdateEffect$1.default = useUpdateEffect;

Object.defineProperty(useKeyPressEvent$1, "__esModule", {
  value: true
});

var tslib_1 = require$$0;

var useKeyPress_1 = tslib_1.__importDefault(useKeyPress$1);

var useUpdateEffect_1 = tslib_1.__importDefault(useUpdateEffect$1);

var useKeyPressEvent = function (key, keydown, keyup, useKeyPress) {
  if (useKeyPress === void 0) {
    useKeyPress = useKeyPress_1.default;
  }

  var _a = useKeyPress(key),
      pressed = _a[0],
      event = _a[1];

  useUpdateEffect_1.default(function () {
    if (!pressed && keyup) {
      keyup(event);
    } else if (pressed && keydown) {
      keydown(event);
    }
  }, [pressed]);
};

var _default = useKeyPressEvent$1.default = useKeyPressEvent;

function XIcon() {
  return react.jsx("svg", {
    fill: "none",
    className: "text-accent-four",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    width: "16px",
    height: "16px"
  }, react.jsx("path", {
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
  let element = require$$0$1.useRef(document.getElementById(id) || document.createElement("div"));
  require$$0$1.useEffect(() => {
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
  return /*#__PURE__*/reactDom.createPortal(children, element.current);
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
  const sideSheet = require$$0$1.useRef();
  const portal = require$$0$1.useRef();
  const [isOpened, setIsOpened] = require$$0$1.useState(false);
  const [transition, setTransition] = require$$0$1.useState(false);
  require$$0$1.useEffect(() => {
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

  _default('Escape', closeTransition);
  return react.jsx("div", {
    ref: sideSheet
  }, children, isOpened && react.jsx(SidesheetContent, {
    id: "sidesheet"
  }, react.jsx("div", {
    onClick: () => closeTransition(),
    className: classNames("fixed z-50 inset-0 opacity-25 duration-200 delay-100 transition", {
      "bg-accent-eight": transition,
      "bg-transparent": !transition
    })
  }), react.jsx("div", {
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
  }, react.jsx(Box, {
    flex: true,
    alignItems: "center",
    className: "relative border-b border-border rounded rounded-b-none"
  }, react.jsx("div", {
    className: "text-foreground flex-auto truncate leading-6"
  }, title), react.jsx(Box, {
    flex: true,
    backgroundColor: "transparent",
    className: "cursor-pointer bg-transparent",
    noPadding: true
  }, react.jsx("div", {
    onClick: () => closeTransition()
  }, react.jsx(XIcon, null)))), react.jsx(Box, {
    flex: true,
    flexDirection: "col",
    className: "sidesheet-content relative overflow-y-auto flex-1 rounded"
  }, react.jsx(Box, {
    noPadding: true,
    flex: true,
    flexDirection: "col",
    className: "overflow-visible"
  }, content)), action && react.jsx(Box, {
    flex: true,
    justifyContent: "evenly",
    alignItems: "center",
    className: "sidesheet-action h-16 border-t border-border relative flex-initial rounded rounded-t-none"
  }, action))));
};

Sidesheet.propTypes = {
  content: PropTypes__default["default"].element,
  children: PropTypes__default["default"].element,
  className: PropTypes__default["default"].string,
  width: PropTypes__default["default"].string,
  action: PropTypes__default["default"].element,
  onClose: PropTypes__default["default"].func,
  isShown: PropTypes__default["default"].bool,
  title: PropTypes__default["default"].string
};

module.exports = Sidesheet;
