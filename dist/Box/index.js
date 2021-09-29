'use strict';

var React = require('react');
var classNames = require('classnames');
var PropTypes = require('prop-types');
var react = require('@emotion/react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

const Box = /*#__PURE__*/React__default['default'].forwardRef(({
  flex,
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap,
  children,
  className,
  rootCard,
  noPadding
}, ref) => {
  return react.jsx("div", {
    ref: ref,
    className: classNames__default['default']("overflow-hidden bg-white", className, {
      flex: Boolean(flex),
      "items-start": alignItems === "start",
      "items-end": alignItems === "end",
      "items-center": alignItems === "center",
      "items-baseline": alignItems === "baseline",
      "items-stretch": alignItems === "stretch",
      "justify-start": justifyContent === "start",
      "justify-end": justifyContent === "end",
      "justify-center": justifyContent === "center",
      "justify-between": justifyContent === "between",
      "justify-around": justifyContent === "around",
      "justify-evenly": justifyContent === "evenly",
      "flex-row": flexDirection === "row",
      "flex-row-reverse": flexDirection === "row-reverse",
      "flex-col": flexDirection === "col",
      "flex-col-reverse": flexDirection === "col-reverse",
      [`mb-4 border border-border rounded shadow-sm`]: Boolean(rootCard),
      [`px-6 py-4`]: !Boolean(noPadding),
      "flex-wrap": flexWrap === "wrap",
      "flex-wrap-reverse": flexWrap === "wrap-reverse",
      "flex-nowrap": flexWrap === "nowrap"
    })
  }, children);
});
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
  className: PropTypes__default['default'].string
};

module.exports = Box;
