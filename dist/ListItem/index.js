'use strict';

var react = require('react');
var classNames = require('classnames');
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

class Text extends react.PureComponent {
  render() {
    const {
      className,
      bold,
      color,
      small,
      is,
      ...props
    } = this.props;
    const Tag = is;
    return react$1.jsx(Tag, _extends({
      className: classNames__default["default"](className, color, {
        "font-semibold": Boolean(bold),
        "font-normal": !Boolean(bold),
        "text-base": !Boolean(small),
        "text-sm": Boolean(small)
      })
    }, props));
  }

}

_defineProperty(Text, "propTypes", {
  bold: PropTypes__default["default"].bool,
  color: PropTypes__default["default"].string,
  is: PropTypes__default["default"].oneOf(["span", "p", "li"]).isRequired,
  className: PropTypes__default["default"].string
});

_defineProperty(Text, "defaultProps", {
  className: null,
  color: "text-foreground",
  is: "span"
});

class ListItem extends react.PureComponent {
  render() {
    const {
      children,
      ...props
    } = this.props;
    return react$1.jsx(Text, _extends({
      is: "li"
    }, props), children);
  }

}

_defineProperty(ListItem, "propTypes", { ...Text.propTypes
});

module.exports = ListItem;
