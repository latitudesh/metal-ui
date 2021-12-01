'use strict';

var classNames = require('classnames');
var PropTypes = require('prop-types');
var react = require('@emotion/react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

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
  return react.jsx("div", {
    className: classNames__default['default']("inline-flex items-center px-2.5 rounded text-sm font-medium h-6 leading-6", !rounded && badgeStyle, !rounded && "border border-border", rounded && isRounded, className)
  }, !minimal && !rounded && react.jsx("svg", {
    className: classNames__default['default']("-ml-0.5 mr-1.5 h-2 w-2", badgeStyle),
    fill: "currentColor",
    viewBox: "0 0 8 8"
  }, react.jsx("circle", {
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
  style: PropTypes__default['default'].oneOf(["default", "positive", "warning", "danger"]),

  /**
   * When true, renders a rounded badge with inverted colors.
   */
  rounded: PropTypes__default['default'].bool,

  /**
   * When true, renders a badge without the prepending dot.
   */
  minimal: PropTypes__default['default'].bool
};

module.exports = Badge;
=======
"use strict";var classNames=require("classnames"),PropTypes=require("prop-types"),react=require("@emotion/react");function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var classNames__default=_interopDefaultLegacy(classNames),PropTypes__default=_interopDefaultLegacy(PropTypes);function _extends(){return(_extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t,a=arguments[r];for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}const Badge=({style:e,children:r,minimal:t,className:a,rounded:s,...l})=>{var n=[{"text-foreground":"default"===e,"text-success":"positive"===e,"text-warning":"warning"===e,"text-error":"danger"===e}];return react.jsx("div",_extends({className:classNames__default.default("inline-flex items-center px-2.5 rounded text-sm font-medium leading-6",!s&&n,!s&&"border border-border",s&&[{"rounded-full text-white":s,"bg-foreground":"default"===e,"bg-success":"positive"==e,"bg-warning":"warning"===e,"bg-error":"danger"===e}],a)},l),!t&&!s&&react.jsx("svg",{className:classNames__default.default("-ml-0.5 mr-1.5 h-2 w-2",n),fill:"currentColor",viewBox:"0 0 8 8"},react.jsx("circle",{cx:"4",cy:"4",r:"3"})),r)};Badge.defaultProps={style:"default",rounded:!1,minimal:!1},Badge.propTypes={style:PropTypes__default.default.oneOf(["default","positive","warning","danger"]),rounded:PropTypes__default.default.bool,minimal:PropTypes__default.default.bool},module.exports=Badge;
