'use strict';

var react$1 = require('react');
var reactDom = require('react-dom');
var PropTypes = require('prop-types');
var react = require('@emotion/react');
var classNames$1 = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames$1);

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
    className: classNames__default['default'](className, backgroundColor),
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
    }, process.env.NODE_ENV === "production" ? "" : ";label:Box;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5jb25zdCBCb3ggPSAoe1xuICBmbGV4LFxuICBhbGlnbkl0ZW1zLFxuICBqdXN0aWZ5Q29udGVudCxcbiAgZmxleERpcmVjdGlvbixcbiAgZmxleFdyYXAsXG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIHJvb3RDYXJkLFxuICBub1BhZGRpbmcsXG4gIGJhY2tncm91bmRDb2xvcixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBiYWNrZ3JvdW5kQ29sb3IpfVxuICAgICAgY3NzPXtbXG4gICAgICAgIHR3YG92ZXJmbG93LWhpZGRlbmAsXG4gICAgICAgIEJvb2xlYW4oZmxleCkgJiYgdHdgZmxleGAsXG4gICAgICAgICFCb29sZWFuKGJhY2tncm91bmRDb2xvcikgJiYgdHdgYmctd2hpdGVgLFxuXG4gICAgICAgIGFsaWduSXRlbXMgPT09IFwic3RhcnRcIiAmJiB0d2BpdGVtcy1zdGFydGAsXG4gICAgICAgIGFsaWduSXRlbXMgPT09IFwiZW5kXCIgJiYgdHdgaXRlbXMtZW5kYCxcbiAgICAgICAgYWxpZ25JdGVtcyA9PT0gXCJjZW50ZXJcIiAmJiB0d2BpdGVtcy1jZW50ZXJgLFxuICAgICAgICBhbGlnbkl0ZW1zID09PSBcImJhc2VsaW5lXCIgJiYgdHdgaXRlbXMtYmFzZWxpbmVgLFxuICAgICAgICBhbGlnbkl0ZW1zID09PSBcInN0cmV0Y2hcIiAmJiB0d2BpdGVtcy1zdHJldGNoYCxcblxuICAgICAgICBqdXN0aWZ5Q29udGVudCA9PT0gXCJzdGFydFwiICYmIHR3YGp1c3RpZnktc3RhcnRgLFxuICAgICAgICBqdXN0aWZ5Q29udGVudCA9PT0gXCJlbmRcIiAmJiB0d2BqdXN0aWZ5LWVuZGAsXG4gICAgICAgIGp1c3RpZnlDb250ZW50ID09PSBcImNlbnRlclwiICYmIHR3YGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAganVzdGlmeUNvbnRlbnQgPT09IFwiYmV0d2VlblwiICYmIHR3YGp1c3RpZnktYmV0d2VlbmAsXG4gICAgICAgIGp1c3RpZnlDb250ZW50ID09PSBcImFyb3VuZFwiICYmIHR3YGp1c3RpZnktYXJvdW5kYCxcbiAgICAgICAganVzdGlmeUNvbnRlbnQgPT09IFwiZXZlbmx5XCIgJiYgdHdganVzdGlmeS1ldmVubHlgLFxuXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gPT09IFwicm93XCIgJiYgdHdgZmxleC1yb3dgLFxuICAgICAgICBmbGV4RGlyZWN0aW9uID09PSBcInJvdy1yZXZlcnNlXCIgJiYgdHdgZmxleC1yb3ctcmV2ZXJzZWAsXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gPT09IFwiY29sXCIgJiYgdHdgZmxleC1jb2xgLFxuICAgICAgICBmbGV4RGlyZWN0aW9uID09PSBcImNvbC1yZXZlcnNlXCIgJiYgdHdgZmxleC1jb2wtcmV2ZXJzZWAsXG5cbiAgICAgICAgQm9vbGVhbihyb290Q2FyZCkgJiYgdHdgbWItNCBib3JkZXIgYm9yZGVyLWJvcmRlciByb3VuZGVkIHNoYWRvdy1zbWAsXG4gICAgICAgICFCb29sZWFuKG5vUGFkZGluZykgJiYgdHdgcHgtNiBweS00YCxcblxuICAgICAgICBmbGV4V3JhcCA9PT0gXCJ3cmFwXCIgJiYgdHdgZmxleC13cmFwYCxcbiAgICAgICAgZmxleFdyYXAgPT09IFwid3JhcC1yZXZlcnNlXCIgJiYgdHdgZmxleC13cmFwLXJldmVyc2VgLFxuICAgICAgICBmbGV4V3JhcCA9PT0gXCJub3dyYXBcIiAmJiB0d2BmbGV4LW5vd3JhcGAsXG4gICAgICBdfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkJveC5kZWZhdWx0UHJvcHMgPSB7XG4gIGZsZXg6IGZhbHNlLFxuICBhbGlnbkl0ZW1zOiBudWxsLFxuICBqdXN0aWZ5Q29udGVudDogbnVsbCxcbiAgZmxleERpcmVjdGlvbjogbnVsbCxcbiAgcm9vdENhcmQ6IGZhbHNlLFxuICBub1BhZGRpbmc6IGZhbHNlLFxuICBmbGV4V3JhcDogbnVsbCxcbn07XG5cbkJveC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHJlbmRlcnMgdGhlIEJveCB3aXRoIGBkaXNwbGF5OmZsZXhgXG4gICAqL1xuICBmbGV4OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIENvbnRyb2xzIGl0ZW0gYWxpZ25tZW50IHdpdGggYGFsaWduLWl0ZW1zYC4gT25seSB3b3JrcyB3aGVuIGZsZXggaXMgdHJ1ZVxuICAgKi9cbiAgYWxpZ25JdGVtczogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcInN0YXJ0XCIsXG4gICAgXCJlbmRcIixcbiAgICBcImNlbnRlclwiLFxuICAgIFwiYmFzZWxpbmVcIixcbiAgICBcInN0cmV0Y2hcIixcbiAgXSksXG4gIC8qKlxuICAgKiBDb250cm9scyBpdGVtIHBvc2l0aW9uaW5nIHdpdGggYGp1c3RpZnktY29udGVudGAuIE9ubHkgd29ya3Mgd2hlbiBmbGV4IGlzIHRydWVcbiAgICovXG4gIGp1c3RpZnlDb250ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwic3RhcnRcIixcbiAgICBcImVuZFwiLFxuICAgIFwiY2VudGVyXCIsXG4gICAgXCJiZXR3ZWVuXCIsXG4gICAgXCJhcm91bmRcIixcbiAgICBcImV2ZW5seVwiLFxuICBdKSxcbiAgLyoqXG4gICAqIENvbnRyb2xzIHRoZSBkaXJlY3Rpb24gb2YgZmxleCBpdGVtcyB3aXRoIGBmbGV4LWRpcmVjdGlvbmAuIE9ubHkgd29ya3Mgd2hlbiBmbGV4IGlzIHRydWVcbiAgICovXG4gIGZsZXhEaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbXCJyb3dcIiwgXCJyb3ctcmV2ZXJzZVwiLCBcImNvbFwiLCBcImNvbC1yZXZlcnNlXCJdKSxcbiAgLyoqXG4gICAqIENvbnRyb2xzIGhvdyBmbGV4IGl0ZW1zIHdyYXAgd2l0aCBgZmxleC13cmFwYC4gT25seSB3b3JrcyB3aGVuIGZsZXggaXMgdHJ1ZVxuICAgKi9cbiAgZmxleFdyYXA6IFByb3BUeXBlcy5vbmVPZihbXCJ3cmFwXCIsIFwid3JhcC1yZXZlcnNlXCIsIFwibm93cmFwXCJdKSxcbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGNvbnRlbnRcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIEFkZHMgYm9yZGVyIGFuZCBzaGFkb3cgdG8gdGhlIEJveC4gVXNlZnVsIHdoZW4gdXNpbmcgQm94IGFzIHRoZSBwYXJlbnQgZWxlbWVudCBvZiBhIHNlY3Rpb25cbiAgICovXG4gIHJvb3RDYXJkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIHBhZGRpbmcgZnJvbSB0aGUgQm94LiBVc2VmdWwgd2hlbiB1c2luZyBCb3ggYXMgYSBzdGFuZGFyZCBgZGl2YC5cbiAgICovXG4gIG5vUGFkZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFNldHMgYSBiYWNrZ3JvdW5kIGNvbG9yLiBTaG91bGQgYmUgYSB0YWlsd2luZCBjbGFzcy5cbiAgICovXG4gIGJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJveDtcbiJdfQ== */", process.env.NODE_ENV === "production" ? "" : ";label:Box;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5jb25zdCBCb3ggPSAoe1xuICBmbGV4LFxuICBhbGlnbkl0ZW1zLFxuICBqdXN0aWZ5Q29udGVudCxcbiAgZmxleERpcmVjdGlvbixcbiAgZmxleFdyYXAsXG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIHJvb3RDYXJkLFxuICBub1BhZGRpbmcsXG4gIGJhY2tncm91bmRDb2xvcixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBiYWNrZ3JvdW5kQ29sb3IpfVxuICAgICAgY3NzPXtbXG4gICAgICAgIHR3YG92ZXJmbG93LWhpZGRlbmAsXG4gICAgICAgIEJvb2xlYW4oZmxleCkgJiYgdHdgZmxleGAsXG4gICAgICAgICFCb29sZWFuKGJhY2tncm91bmRDb2xvcikgJiYgdHdgYmctd2hpdGVgLFxuXG4gICAgICAgIGFsaWduSXRlbXMgPT09IFwic3RhcnRcIiAmJiB0d2BpdGVtcy1zdGFydGAsXG4gICAgICAgIGFsaWduSXRlbXMgPT09IFwiZW5kXCIgJiYgdHdgaXRlbXMtZW5kYCxcbiAgICAgICAgYWxpZ25JdGVtcyA9PT0gXCJjZW50ZXJcIiAmJiB0d2BpdGVtcy1jZW50ZXJgLFxuICAgICAgICBhbGlnbkl0ZW1zID09PSBcImJhc2VsaW5lXCIgJiYgdHdgaXRlbXMtYmFzZWxpbmVgLFxuICAgICAgICBhbGlnbkl0ZW1zID09PSBcInN0cmV0Y2hcIiAmJiB0d2BpdGVtcy1zdHJldGNoYCxcblxuICAgICAgICBqdXN0aWZ5Q29udGVudCA9PT0gXCJzdGFydFwiICYmIHR3YGp1c3RpZnktc3RhcnRgLFxuICAgICAgICBqdXN0aWZ5Q29udGVudCA9PT0gXCJlbmRcIiAmJiB0d2BqdXN0aWZ5LWVuZGAsXG4gICAgICAgIGp1c3RpZnlDb250ZW50ID09PSBcImNlbnRlclwiICYmIHR3YGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAganVzdGlmeUNvbnRlbnQgPT09IFwiYmV0d2VlblwiICYmIHR3YGp1c3RpZnktYmV0d2VlbmAsXG4gICAgICAgIGp1c3RpZnlDb250ZW50ID09PSBcImFyb3VuZFwiICYmIHR3YGp1c3RpZnktYXJvdW5kYCxcbiAgICAgICAganVzdGlmeUNvbnRlbnQgPT09IFwiZXZlbmx5XCIgJiYgdHdganVzdGlmeS1ldmVubHlgLFxuXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gPT09IFwicm93XCIgJiYgdHdgZmxleC1yb3dgLFxuICAgICAgICBmbGV4RGlyZWN0aW9uID09PSBcInJvdy1yZXZlcnNlXCIgJiYgdHdgZmxleC1yb3ctcmV2ZXJzZWAsXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gPT09IFwiY29sXCIgJiYgdHdgZmxleC1jb2xgLFxuICAgICAgICBmbGV4RGlyZWN0aW9uID09PSBcImNvbC1yZXZlcnNlXCIgJiYgdHdgZmxleC1jb2wtcmV2ZXJzZWAsXG5cbiAgICAgICAgQm9vbGVhbihyb290Q2FyZCkgJiYgdHdgbWItNCBib3JkZXIgYm9yZGVyLWJvcmRlciByb3VuZGVkIHNoYWRvdy1zbWAsXG4gICAgICAgICFCb29sZWFuKG5vUGFkZGluZykgJiYgdHdgcHgtNiBweS00YCxcblxuICAgICAgICBmbGV4V3JhcCA9PT0gXCJ3cmFwXCIgJiYgdHdgZmxleC13cmFwYCxcbiAgICAgICAgZmxleFdyYXAgPT09IFwid3JhcC1yZXZlcnNlXCIgJiYgdHdgZmxleC13cmFwLXJldmVyc2VgLFxuICAgICAgICBmbGV4V3JhcCA9PT0gXCJub3dyYXBcIiAmJiB0d2BmbGV4LW5vd3JhcGAsXG4gICAgICBdfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkJveC5kZWZhdWx0UHJvcHMgPSB7XG4gIGZsZXg6IGZhbHNlLFxuICBhbGlnbkl0ZW1zOiBudWxsLFxuICBqdXN0aWZ5Q29udGVudDogbnVsbCxcbiAgZmxleERpcmVjdGlvbjogbnVsbCxcbiAgcm9vdENhcmQ6IGZhbHNlLFxuICBub1BhZGRpbmc6IGZhbHNlLFxuICBmbGV4V3JhcDogbnVsbCxcbn07XG5cbkJveC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHJlbmRlcnMgdGhlIEJveCB3aXRoIGBkaXNwbGF5OmZsZXhgXG4gICAqL1xuICBmbGV4OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIENvbnRyb2xzIGl0ZW0gYWxpZ25tZW50IHdpdGggYGFsaWduLWl0ZW1zYC4gT25seSB3b3JrcyB3aGVuIGZsZXggaXMgdHJ1ZVxuICAgKi9cbiAgYWxpZ25JdGVtczogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcInN0YXJ0XCIsXG4gICAgXCJlbmRcIixcbiAgICBcImNlbnRlclwiLFxuICAgIFwiYmFzZWxpbmVcIixcbiAgICBcInN0cmV0Y2hcIixcbiAgXSksXG4gIC8qKlxuICAgKiBDb250cm9scyBpdGVtIHBvc2l0aW9uaW5nIHdpdGggYGp1c3RpZnktY29udGVudGAuIE9ubHkgd29ya3Mgd2hlbiBmbGV4IGlzIHRydWVcbiAgICovXG4gIGp1c3RpZnlDb250ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwic3RhcnRcIixcbiAgICBcImVuZFwiLFxuICAgIFwiY2VudGVyXCIsXG4gICAgXCJiZXR3ZWVuXCIsXG4gICAgXCJhcm91bmRcIixcbiAgICBcImV2ZW5seVwiLFxuICBdKSxcbiAgLyoqXG4gICAqIENvbnRyb2xzIHRoZSBkaXJlY3Rpb24gb2YgZmxleCBpdGVtcyB3aXRoIGBmbGV4LWRpcmVjdGlvbmAuIE9ubHkgd29ya3Mgd2hlbiBmbGV4IGlzIHRydWVcbiAgICovXG4gIGZsZXhEaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbXCJyb3dcIiwgXCJyb3ctcmV2ZXJzZVwiLCBcImNvbFwiLCBcImNvbC1yZXZlcnNlXCJdKSxcbiAgLyoqXG4gICAqIENvbnRyb2xzIGhvdyBmbGV4IGl0ZW1zIHdyYXAgd2l0aCBgZmxleC13cmFwYC4gT25seSB3b3JrcyB3aGVuIGZsZXggaXMgdHJ1ZVxuICAgKi9cbiAgZmxleFdyYXA6IFByb3BUeXBlcy5vbmVPZihbXCJ3cmFwXCIsIFwid3JhcC1yZXZlcnNlXCIsIFwibm93cmFwXCJdKSxcbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGNvbnRlbnRcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIEFkZHMgYm9yZGVyIGFuZCBzaGFkb3cgdG8gdGhlIEJveC4gVXNlZnVsIHdoZW4gdXNpbmcgQm94IGFzIHRoZSBwYXJlbnQgZWxlbWVudCBvZiBhIHNlY3Rpb25cbiAgICovXG4gIHJvb3RDYXJkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIHBhZGRpbmcgZnJvbSB0aGUgQm94LiBVc2VmdWwgd2hlbiB1c2luZyBCb3ggYXMgYSBzdGFuZGFyZCBgZGl2YC5cbiAgICovXG4gIG5vUGFkZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFNldHMgYSBiYWNrZ3JvdW5kIGNvbG9yLiBTaG91bGQgYmUgYSB0YWlsd2luZCBjbGFzcy5cbiAgICovXG4gIGJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJveDtcbiJdfQ== */"]
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
  flex: PropTypes__default['default'].bool,

  /**
   * Controls item alignment with `align-items`. Only works when flex is true
   */
  alignItems: PropTypes__default['default'].oneOf(["start", "end", "center", "baseline", "stretch"]),

  /**
   * Controls item positioning with `justify-content`. Only works when flex is true
   */
  justifyContent: PropTypes__default['default'].oneOf(["start", "end", "center", "between", "around", "evenly"]),

  /**
   * Controls the direction of flex items with `flex-direction`. Only works when flex is true
   */
  flexDirection: PropTypes__default['default'].oneOf(["row", "row-reverse", "col", "col-reverse"]),

  /**
   * Controls how flex items wrap with `flex-wrap`. Only works when flex is true
   */
  flexWrap: PropTypes__default['default'].oneOf(["wrap", "wrap-reverse", "nowrap"]),

  /**
   * Renders the content
   */
  children: PropTypes__default['default'].node,

  /**
   * Adds border and shadow to the Box. Useful when using Box as the parent element of a section
   */
  rootCard: PropTypes__default['default'].bool,

  /**
   * Removes the padding from the Box. Useful when using Box as a standard `div`.
   */
  noPadding: PropTypes__default['default'].bool,
  className: PropTypes__default['default'].string,

  /**
   * Sets a background color. Should be a tailwind class.
   */
  backgroundColor: PropTypes__default['default'].string
};

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
  let element = react$1.useRef(document.getElementById(id) || document.createElement("div"));
  react$1.useEffect(() => {
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
  const sideSheet = react$1.useRef();
  const portal = react$1.useRef();
  const [isOpened, setIsOpened] = react$1.useState(false);
  const [transition, setTransition] = react$1.useState(false);
  react$1.useEffect(() => {
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
  content: PropTypes__default['default'].element,
  children: PropTypes__default['default'].element,
  className: PropTypes__default['default'].string,
  width: PropTypes__default['default'].string,
  action: PropTypes__default['default'].element,
  onClose: PropTypes__default['default'].func,
  isShown: PropTypes__default['default'].bool,
  title: PropTypes__default['default'].string
};

module.exports = Sidesheet;
