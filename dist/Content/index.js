'use strict';

var PropTypes = require('prop-types');
var classNames = require('classnames');
var react = require('@emotion/react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

const Content = ({
  children,
  size,
  className,
  bg
}) => {
  const base = react.jsx("div", {
    className: classNames__default['default']("flex-1 relative overflow-y-auto focus:outline-none", {
      [`bg-${bg}`]: bg
    }, className)
  }, react.jsx("div", {
    className: "px-10 py-8"
  }, react.jsx("div", {
    className: classNames__default['default']("mx-auto", {
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
  children: PropTypes__default['default'].node,
  size: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,

  /**
   * Overrides the default background color.
   */
  bg: PropTypes__default['default'].string
};

module.exports = Content;
