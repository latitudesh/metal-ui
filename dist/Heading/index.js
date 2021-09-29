'use strict';

var classNames = require('classnames');
var react = require('react');
var PropTypes = require('prop-types');
var react$1 = require('@emotion/react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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

class Heading extends react.PureComponent {
  render() {
    const {
      className,
      color,
      size,
      ...props
    } = this.props;
    const HTag = `h${this.props.size}`;
    return react$1.jsx(HTag, _extends({
      className: classNames__default['default']("", className, {
        "text-4xl font-bold tracking-tighter": size == 1,
        "text-3xl font-semibold tracking-tighter": size == 2,
        "text-2xl font-semibold tracking-tight": size == 3,
        "text-xl font-semibold tracking-tight": size == 4,
        "text-lg font-semibold": size == 5,
        "text-normal font-normal": size == 6,
        "text-foreground": color == "default",
        "text-error": color == "danger"
      })
    }, props));
  }

}

_defineProperty(Heading, "propTypes", {
  /**
   * Each size represents its corresponding Heading element.
   */
  size: PropTypes__default['default'].oneOf([1, 2, 3, 4, 5, 6]).isRequired,

  /**
   * You can set any other available color
   */
  color: PropTypes__default['default'].oneOf(["default", "danger"]).isRequired,
  className: PropTypes__default['default'].string
});

_defineProperty(Heading, "defaultProps", {
  size: 1,
  color: "default",
  className: ""
});

module.exports = Heading;
