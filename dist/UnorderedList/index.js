'use strict';

var React = require('react');
var classNames = require('classnames');
var react = require('@emotion/react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
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

class UnorderedList extends React.PureComponent {
  render() {
    const {
      children,
      ...props
    } = this.props;
    const finalChildren = React__default['default'].Children.map(children, child => {
      if (! /*#__PURE__*/React__default['default'].isValidElement(child)) {
        return child;
      }

      return /*#__PURE__*/React__default['default'].cloneElement(child, { ...child.props
      });
    });
    return react.jsx("ul", _extends({
      className: classNames__default['default']("leading-normal list-disc p-0 m-0 ml-4", {})
    }, props), finalChildren);
  }

}

module.exports = UnorderedList;
