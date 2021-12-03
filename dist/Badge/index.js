'use strict';

var classNames = require('classnames');
var PropTypes = require('prop-types');
var react = require('@emotion/react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

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

const Badge = ({
  style,
  children,
  minimal,
  className,
  rounded,
  ...rest
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
  return react.jsx("div", _extends({
    className: classNames__default['default']("inline-flex items-center px-2.5 rounded text-sm font-medium leading-6", !rounded && badgeStyle, !rounded && "border border-border", rounded && isRounded, className)
  }, rest), !minimal && !rounded && react.jsx("svg", {
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
