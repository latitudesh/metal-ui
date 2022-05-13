'use strict';

var react = require('@emotion/react');
var PropTypes = require('prop-types');
var classNames = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

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
  overflow,
  ...props
}) => {
  return react.jsx("div", _extends({
    className: classNames__default["default"](className, backgroundColor),
    css: [overflow === 'overflow-auto' && {
      "overflow": "auto"
    }, overflow === 'overflow-hidden' && {
      "overflow": "hidden"
    }, overflow === 'overflow-clip' && {
      "textOverflow": "clip"
    }, overflow === 'overflow-visible' && {
      "overflow": "visible"
    }, overflow === 'overflow-scroll' && {
      "overflow": "scroll"
    }, Boolean(flex) && {
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
    }, process.env.NODE_ENV === "production" ? "" : ";label:Box;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5jb25zdCBCb3ggPSAoe1xuICBmbGV4LFxuICBhbGlnbkl0ZW1zLFxuICBqdXN0aWZ5Q29udGVudCxcbiAgZmxleERpcmVjdGlvbixcbiAgZmxleFdyYXAsXG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIHJvb3RDYXJkLFxuICBub1BhZGRpbmcsXG4gIGJhY2tncm91bmRDb2xvcixcbiAgb3ZlcmZsb3csXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzTmFtZSwgYmFja2dyb3VuZENvbG9yKX1cbiAgICAgIGNzcz17W1xuICAgICAgICBvdmVyZmxvdyA9PT0gJ292ZXJmbG93LWF1dG8nICYmIHR3YG92ZXJmbG93LWF1dG9gLFxuICAgICAgICBvdmVyZmxvdyA9PT0gJ292ZXJmbG93LWhpZGRlbicgJiYgdHdgb3ZlcmZsb3ctaGlkZGVuYCxcbiAgICAgICAgb3ZlcmZsb3cgPT09ICdvdmVyZmxvdy1jbGlwJyAmJiB0d2BvdmVyZmxvdy1jbGlwYCxcbiAgICAgICAgb3ZlcmZsb3cgPT09ICdvdmVyZmxvdy12aXNpYmxlJyAmJiB0d2BvdmVyZmxvdy12aXNpYmxlYCxcbiAgICAgICAgb3ZlcmZsb3cgPT09ICdvdmVyZmxvdy1zY3JvbGwnICYmIHR3YG92ZXJmbG93LXNjcm9sbGAsXG5cbiAgICAgICAgQm9vbGVhbihmbGV4KSAmJiB0d2BmbGV4YCxcbiAgICAgICAgIUJvb2xlYW4oYmFja2dyb3VuZENvbG9yKSAmJiB0d2BiZy13aGl0ZWAsXG5cbiAgICAgICAgYWxpZ25JdGVtcyA9PT0gXCJzdGFydFwiICYmIHR3YGl0ZW1zLXN0YXJ0YCxcbiAgICAgICAgYWxpZ25JdGVtcyA9PT0gXCJlbmRcIiAmJiB0d2BpdGVtcy1lbmRgLFxuICAgICAgICBhbGlnbkl0ZW1zID09PSBcImNlbnRlclwiICYmIHR3YGl0ZW1zLWNlbnRlcmAsXG4gICAgICAgIGFsaWduSXRlbXMgPT09IFwiYmFzZWxpbmVcIiAmJiB0d2BpdGVtcy1iYXNlbGluZWAsXG4gICAgICAgIGFsaWduSXRlbXMgPT09IFwic3RyZXRjaFwiICYmIHR3YGl0ZW1zLXN0cmV0Y2hgLFxuXG4gICAgICAgIGp1c3RpZnlDb250ZW50ID09PSBcInN0YXJ0XCIgJiYgdHdganVzdGlmeS1zdGFydGAsXG4gICAgICAgIGp1c3RpZnlDb250ZW50ID09PSBcImVuZFwiICYmIHR3YGp1c3RpZnktZW5kYCxcbiAgICAgICAganVzdGlmeUNvbnRlbnQgPT09IFwiY2VudGVyXCIgJiYgdHdganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBqdXN0aWZ5Q29udGVudCA9PT0gXCJiZXR3ZWVuXCIgJiYgdHdganVzdGlmeS1iZXR3ZWVuYCxcbiAgICAgICAganVzdGlmeUNvbnRlbnQgPT09IFwiYXJvdW5kXCIgJiYgdHdganVzdGlmeS1hcm91bmRgLFxuICAgICAgICBqdXN0aWZ5Q29udGVudCA9PT0gXCJldmVubHlcIiAmJiB0d2BqdXN0aWZ5LWV2ZW5seWAsXG5cbiAgICAgICAgZmxleERpcmVjdGlvbiA9PT0gXCJyb3dcIiAmJiB0d2BmbGV4LXJvd2AsXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gPT09IFwicm93LXJldmVyc2VcIiAmJiB0d2BmbGV4LXJvdy1yZXZlcnNlYCxcbiAgICAgICAgZmxleERpcmVjdGlvbiA9PT0gXCJjb2xcIiAmJiB0d2BmbGV4LWNvbGAsXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gPT09IFwiY29sLXJldmVyc2VcIiAmJiB0d2BmbGV4LWNvbC1yZXZlcnNlYCxcblxuICAgICAgICBCb29sZWFuKHJvb3RDYXJkKSAmJiB0d2BtYi00IGJvcmRlciBib3JkZXItYm9yZGVyIHJvdW5kZWQgc2hhZG93LXNtYCxcbiAgICAgICAgIUJvb2xlYW4obm9QYWRkaW5nKSAmJiB0d2BweC02IHB5LTRgLFxuXG4gICAgICAgIGZsZXhXcmFwID09PSBcIndyYXBcIiAmJiB0d2BmbGV4LXdyYXBgLFxuICAgICAgICBmbGV4V3JhcCA9PT0gXCJ3cmFwLXJldmVyc2VcIiAmJiB0d2BmbGV4LXdyYXAtcmV2ZXJzZWAsXG4gICAgICAgIGZsZXhXcmFwID09PSBcIm5vd3JhcFwiICYmIHR3YGZsZXgtbm93cmFwYCxcbiAgICAgIF19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQm94LmRlZmF1bHRQcm9wcyA9IHtcbiAgZmxleDogZmFsc2UsXG4gIGFsaWduSXRlbXM6IG51bGwsXG4gIGp1c3RpZnlDb250ZW50OiBudWxsLFxuICBmbGV4RGlyZWN0aW9uOiBudWxsLFxuICByb290Q2FyZDogZmFsc2UsXG4gIG5vUGFkZGluZzogZmFsc2UsXG4gIGZsZXhXcmFwOiBudWxsLFxuICBvdmVyZmxvdzogJ292ZXJmbG93LWhpZGRlbidcbn07XG5cbkJveC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHJlbmRlcnMgdGhlIEJveCB3aXRoIGBkaXNwbGF5OmZsZXhgXG4gICAqL1xuICBmbGV4OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIENvbnRyb2xzIGl0ZW0gYWxpZ25tZW50IHdpdGggYGFsaWduLWl0ZW1zYC4gT25seSB3b3JrcyB3aGVuIGZsZXggaXMgdHJ1ZVxuICAgKi9cbiAgYWxpZ25JdGVtczogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcInN0YXJ0XCIsXG4gICAgXCJlbmRcIixcbiAgICBcImNlbnRlclwiLFxuICAgIFwiYmFzZWxpbmVcIixcbiAgICBcInN0cmV0Y2hcIixcbiAgXSksXG4gIC8qKlxuICAgKiBDb250cm9scyBpdGVtIHBvc2l0aW9uaW5nIHdpdGggYGp1c3RpZnktY29udGVudGAuIE9ubHkgd29ya3Mgd2hlbiBmbGV4IGlzIHRydWVcbiAgICovXG4gIGp1c3RpZnlDb250ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwic3RhcnRcIixcbiAgICBcImVuZFwiLFxuICAgIFwiY2VudGVyXCIsXG4gICAgXCJiZXR3ZWVuXCIsXG4gICAgXCJhcm91bmRcIixcbiAgICBcImV2ZW5seVwiLFxuICBdKSxcbiAgLyoqXG4gICAqIENvbnRyb2xzIHRoZSBkaXJlY3Rpb24gb2YgZmxleCBpdGVtcyB3aXRoIGBmbGV4LWRpcmVjdGlvbmAuIE9ubHkgd29ya3Mgd2hlbiBmbGV4IGlzIHRydWVcbiAgICovXG4gIGZsZXhEaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbXCJyb3dcIiwgXCJyb3ctcmV2ZXJzZVwiLCBcImNvbFwiLCBcImNvbC1yZXZlcnNlXCJdKSxcbiAgLyoqXG4gICAqIENvbnRyb2xzIGhvdyBmbGV4IGl0ZW1zIHdyYXAgd2l0aCBgZmxleC13cmFwYC4gT25seSB3b3JrcyB3aGVuIGZsZXggaXMgdHJ1ZVxuICAgKi9cbiAgZmxleFdyYXA6IFByb3BUeXBlcy5vbmVPZihbXCJ3cmFwXCIsIFwid3JhcC1yZXZlcnNlXCIsIFwibm93cmFwXCJdKSxcbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGNvbnRlbnRcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIEFkZHMgYm9yZGVyIGFuZCBzaGFkb3cgdG8gdGhlIEJveC4gVXNlZnVsIHdoZW4gdXNpbmcgQm94IGFzIHRoZSBwYXJlbnQgZWxlbWVudCBvZiBhIHNlY3Rpb25cbiAgICovXG4gIHJvb3RDYXJkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIHBhZGRpbmcgZnJvbSB0aGUgQm94LiBVc2VmdWwgd2hlbiB1c2luZyBCb3ggYXMgYSBzdGFuZGFyZCBgZGl2YC5cbiAgICovXG4gIG5vUGFkZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFNldHMgYSBiYWNrZ3JvdW5kIGNvbG9yLiBTaG91bGQgYmUgYSB0YWlsd2luZCBjbGFzcy5cbiAgICovXG4gIGJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFNldHMgdGhlIG92ZXJmbG93IHByb3BlcnR5LiBTaG91bGQgYmUgYSB0YWlsd2luZCBjbGFzcy5cbiAgICovXG4gIG92ZXJmbG93OiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm94O1xuIl19 */", process.env.NODE_ENV === "production" ? "" : ";label:Box;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5jb25zdCBCb3ggPSAoe1xuICBmbGV4LFxuICBhbGlnbkl0ZW1zLFxuICBqdXN0aWZ5Q29udGVudCxcbiAgZmxleERpcmVjdGlvbixcbiAgZmxleFdyYXAsXG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIHJvb3RDYXJkLFxuICBub1BhZGRpbmcsXG4gIGJhY2tncm91bmRDb2xvcixcbiAgb3ZlcmZsb3csXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzTmFtZSwgYmFja2dyb3VuZENvbG9yKX1cbiAgICAgIGNzcz17W1xuICAgICAgICBvdmVyZmxvdyA9PT0gJ292ZXJmbG93LWF1dG8nICYmIHR3YG92ZXJmbG93LWF1dG9gLFxuICAgICAgICBvdmVyZmxvdyA9PT0gJ292ZXJmbG93LWhpZGRlbicgJiYgdHdgb3ZlcmZsb3ctaGlkZGVuYCxcbiAgICAgICAgb3ZlcmZsb3cgPT09ICdvdmVyZmxvdy1jbGlwJyAmJiB0d2BvdmVyZmxvdy1jbGlwYCxcbiAgICAgICAgb3ZlcmZsb3cgPT09ICdvdmVyZmxvdy12aXNpYmxlJyAmJiB0d2BvdmVyZmxvdy12aXNpYmxlYCxcbiAgICAgICAgb3ZlcmZsb3cgPT09ICdvdmVyZmxvdy1zY3JvbGwnICYmIHR3YG92ZXJmbG93LXNjcm9sbGAsXG5cbiAgICAgICAgQm9vbGVhbihmbGV4KSAmJiB0d2BmbGV4YCxcbiAgICAgICAgIUJvb2xlYW4oYmFja2dyb3VuZENvbG9yKSAmJiB0d2BiZy13aGl0ZWAsXG5cbiAgICAgICAgYWxpZ25JdGVtcyA9PT0gXCJzdGFydFwiICYmIHR3YGl0ZW1zLXN0YXJ0YCxcbiAgICAgICAgYWxpZ25JdGVtcyA9PT0gXCJlbmRcIiAmJiB0d2BpdGVtcy1lbmRgLFxuICAgICAgICBhbGlnbkl0ZW1zID09PSBcImNlbnRlclwiICYmIHR3YGl0ZW1zLWNlbnRlcmAsXG4gICAgICAgIGFsaWduSXRlbXMgPT09IFwiYmFzZWxpbmVcIiAmJiB0d2BpdGVtcy1iYXNlbGluZWAsXG4gICAgICAgIGFsaWduSXRlbXMgPT09IFwic3RyZXRjaFwiICYmIHR3YGl0ZW1zLXN0cmV0Y2hgLFxuXG4gICAgICAgIGp1c3RpZnlDb250ZW50ID09PSBcInN0YXJ0XCIgJiYgdHdganVzdGlmeS1zdGFydGAsXG4gICAgICAgIGp1c3RpZnlDb250ZW50ID09PSBcImVuZFwiICYmIHR3YGp1c3RpZnktZW5kYCxcbiAgICAgICAganVzdGlmeUNvbnRlbnQgPT09IFwiY2VudGVyXCIgJiYgdHdganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICBqdXN0aWZ5Q29udGVudCA9PT0gXCJiZXR3ZWVuXCIgJiYgdHdganVzdGlmeS1iZXR3ZWVuYCxcbiAgICAgICAganVzdGlmeUNvbnRlbnQgPT09IFwiYXJvdW5kXCIgJiYgdHdganVzdGlmeS1hcm91bmRgLFxuICAgICAgICBqdXN0aWZ5Q29udGVudCA9PT0gXCJldmVubHlcIiAmJiB0d2BqdXN0aWZ5LWV2ZW5seWAsXG5cbiAgICAgICAgZmxleERpcmVjdGlvbiA9PT0gXCJyb3dcIiAmJiB0d2BmbGV4LXJvd2AsXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gPT09IFwicm93LXJldmVyc2VcIiAmJiB0d2BmbGV4LXJvdy1yZXZlcnNlYCxcbiAgICAgICAgZmxleERpcmVjdGlvbiA9PT0gXCJjb2xcIiAmJiB0d2BmbGV4LWNvbGAsXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gPT09IFwiY29sLXJldmVyc2VcIiAmJiB0d2BmbGV4LWNvbC1yZXZlcnNlYCxcblxuICAgICAgICBCb29sZWFuKHJvb3RDYXJkKSAmJiB0d2BtYi00IGJvcmRlciBib3JkZXItYm9yZGVyIHJvdW5kZWQgc2hhZG93LXNtYCxcbiAgICAgICAgIUJvb2xlYW4obm9QYWRkaW5nKSAmJiB0d2BweC02IHB5LTRgLFxuXG4gICAgICAgIGZsZXhXcmFwID09PSBcIndyYXBcIiAmJiB0d2BmbGV4LXdyYXBgLFxuICAgICAgICBmbGV4V3JhcCA9PT0gXCJ3cmFwLXJldmVyc2VcIiAmJiB0d2BmbGV4LXdyYXAtcmV2ZXJzZWAsXG4gICAgICAgIGZsZXhXcmFwID09PSBcIm5vd3JhcFwiICYmIHR3YGZsZXgtbm93cmFwYCxcbiAgICAgIF19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQm94LmRlZmF1bHRQcm9wcyA9IHtcbiAgZmxleDogZmFsc2UsXG4gIGFsaWduSXRlbXM6IG51bGwsXG4gIGp1c3RpZnlDb250ZW50OiBudWxsLFxuICBmbGV4RGlyZWN0aW9uOiBudWxsLFxuICByb290Q2FyZDogZmFsc2UsXG4gIG5vUGFkZGluZzogZmFsc2UsXG4gIGZsZXhXcmFwOiBudWxsLFxuICBvdmVyZmxvdzogJ292ZXJmbG93LWhpZGRlbidcbn07XG5cbkJveC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHJlbmRlcnMgdGhlIEJveCB3aXRoIGBkaXNwbGF5OmZsZXhgXG4gICAqL1xuICBmbGV4OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIENvbnRyb2xzIGl0ZW0gYWxpZ25tZW50IHdpdGggYGFsaWduLWl0ZW1zYC4gT25seSB3b3JrcyB3aGVuIGZsZXggaXMgdHJ1ZVxuICAgKi9cbiAgYWxpZ25JdGVtczogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcInN0YXJ0XCIsXG4gICAgXCJlbmRcIixcbiAgICBcImNlbnRlclwiLFxuICAgIFwiYmFzZWxpbmVcIixcbiAgICBcInN0cmV0Y2hcIixcbiAgXSksXG4gIC8qKlxuICAgKiBDb250cm9scyBpdGVtIHBvc2l0aW9uaW5nIHdpdGggYGp1c3RpZnktY29udGVudGAuIE9ubHkgd29ya3Mgd2hlbiBmbGV4IGlzIHRydWVcbiAgICovXG4gIGp1c3RpZnlDb250ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwic3RhcnRcIixcbiAgICBcImVuZFwiLFxuICAgIFwiY2VudGVyXCIsXG4gICAgXCJiZXR3ZWVuXCIsXG4gICAgXCJhcm91bmRcIixcbiAgICBcImV2ZW5seVwiLFxuICBdKSxcbiAgLyoqXG4gICAqIENvbnRyb2xzIHRoZSBkaXJlY3Rpb24gb2YgZmxleCBpdGVtcyB3aXRoIGBmbGV4LWRpcmVjdGlvbmAuIE9ubHkgd29ya3Mgd2hlbiBmbGV4IGlzIHRydWVcbiAgICovXG4gIGZsZXhEaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbXCJyb3dcIiwgXCJyb3ctcmV2ZXJzZVwiLCBcImNvbFwiLCBcImNvbC1yZXZlcnNlXCJdKSxcbiAgLyoqXG4gICAqIENvbnRyb2xzIGhvdyBmbGV4IGl0ZW1zIHdyYXAgd2l0aCBgZmxleC13cmFwYC4gT25seSB3b3JrcyB3aGVuIGZsZXggaXMgdHJ1ZVxuICAgKi9cbiAgZmxleFdyYXA6IFByb3BUeXBlcy5vbmVPZihbXCJ3cmFwXCIsIFwid3JhcC1yZXZlcnNlXCIsIFwibm93cmFwXCJdKSxcbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGNvbnRlbnRcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIEFkZHMgYm9yZGVyIGFuZCBzaGFkb3cgdG8gdGhlIEJveC4gVXNlZnVsIHdoZW4gdXNpbmcgQm94IGFzIHRoZSBwYXJlbnQgZWxlbWVudCBvZiBhIHNlY3Rpb25cbiAgICovXG4gIHJvb3RDYXJkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIHBhZGRpbmcgZnJvbSB0aGUgQm94LiBVc2VmdWwgd2hlbiB1c2luZyBCb3ggYXMgYSBzdGFuZGFyZCBgZGl2YC5cbiAgICovXG4gIG5vUGFkZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFNldHMgYSBiYWNrZ3JvdW5kIGNvbG9yLiBTaG91bGQgYmUgYSB0YWlsd2luZCBjbGFzcy5cbiAgICovXG4gIGJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFNldHMgdGhlIG92ZXJmbG93IHByb3BlcnR5LiBTaG91bGQgYmUgYSB0YWlsd2luZCBjbGFzcy5cbiAgICovXG4gIG92ZXJmbG93OiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm94O1xuIl19 */"]
  }, props), children);
};

Box.defaultProps = {
  flex: false,
  alignItems: null,
  justifyContent: null,
  flexDirection: null,
  rootCard: false,
  noPadding: false,
  flexWrap: null,
  overflow: 'overflow-hidden'
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
  backgroundColor: PropTypes__default["default"].string,

  /**
   * Sets the overflow property. Should be a tailwind class.
   */
  overflow: PropTypes__default["default"].string
};

module.exports = Box;
