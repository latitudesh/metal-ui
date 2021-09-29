'use strict';

var react = require('@emotion/react');
var React = require('react');
var PropTypes = require('prop-types');
var classNames = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

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

class Text extends React.PureComponent {
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
    return react.jsx(Tag, _extends({
      className: classNames__default['default'](className, color, {
        "font-semibold": Boolean(bold),
        "font-normal": !Boolean(bold),
        "text-base": !Boolean(small),
        "text-sm": Boolean(small)
      })
    }, props));
  }

}

_defineProperty(Text, "propTypes", {
  bold: PropTypes__default['default'].bool,
  color: PropTypes__default['default'].string,
  is: PropTypes__default['default'].oneOf(["span", "p", "li"]).isRequired,
  className: PropTypes__default['default'].string
});

_defineProperty(Text, "defaultProps", {
  className: null,
  color: "text-foreground",
  is: "span"
});

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "jk7dkw",
  styles: "width:100%;max-width:100%"
} : {
  name: "1ci8714-Table",
  styles: "width:100%;max-width:100%;label:Table;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

const Table = /*#__PURE__*/React__default['default'].forwardRef(({
  children,
  ...props
}) => react.jsx("table", _extends({
  css: _ref
}, props), children));

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "s6prfl",
  styles: "border-bottom-width:1px;--tw-border-opacity:1;border-color:rgba(234, 234, 234, var(--tw-border-opacity));border-radius:5px"
} : {
  name: "s6prfl",
  styles: "border-bottom-width:1px;--tw-border-opacity:1;border-color:rgba(234, 234, 234, var(--tw-border-opacity));border-radius:5px",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

Table.Head = /*#__PURE__*/React__default['default'].forwardRef(({
  children,
  ...props
}) => react.jsx("thead", _extends({
  css: _ref2
}, props), children));

var _ref3 = process.env.NODE_ENV === "production" ? {
  name: "14tkg57",
  styles: "--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))"
} : {
  name: "14tkg57",
  styles: "--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

Table.Body = /*#__PURE__*/React__default['default'].forwardRef(({
  children,
  ...props
}) => react.jsx("tbody", _extends({
  css: _ref3
}, props), children));

var _ref4 = process.env.NODE_ENV === "production" ? {
  name: "1hyz2mm",
  styles: "padding-left:1.5rem;padding-right:1.5rem;padding-top:0.5rem;padding-bottom:0.5rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));text-align:left;font-size:0.75rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgba(102, 102, 102, var(--tw-text-opacity));text-transform:uppercase;letter-spacing:0.05em"
} : {
  name: "1hyz2mm",
  styles: "padding-left:1.5rem;padding-right:1.5rem;padding-top:0.5rem;padding-bottom:0.5rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));text-align:left;font-size:0.75rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgba(102, 102, 102, var(--tw-text-opacity));text-transform:uppercase;letter-spacing:0.05em",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

Table.HeaderCell = /*#__PURE__*/React__default['default'].forwardRef(({
  children,
  ...props
}) => react.jsx("th", _extends({
  css: _ref4
}, props), children));
Table.Row = /*#__PURE__*/React__default['default'].forwardRef(({
  children,
  onClick,
  isSelectable,
  ...props
}) => react.jsx("tr", _extends({
  onClick: onClick,
  css: [onClick || isSelectable ? {
    ":hover": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(249, 250, 251, var(--tw-bg-opacity))"
    },
    ":focus": {
      "outline": "2px solid transparent",
      "outlineOffset": "2px",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(249, 250, 251, var(--tw-bg-opacity))"
    },
    "cursor": "pointer"
  } : null, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4uL1RleHRcIjtcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xuXG5jb25zdCBUYWJsZSA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgPHRhYmxlIHR3PVwidy1mdWxsIG1heC13LWZ1bGxcIiB7Li4ucHJvcHN9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC90YWJsZT5cbikpO1xuXG5UYWJsZS5IZWFkID0gUmVhY3QuZm9yd2FyZFJlZigoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICA8dGhlYWQgdHc9XCJib3JkZXItYiBib3JkZXItYm9yZGVyIHJvdW5kZWRcIiB7Li4ucHJvcHN9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC90aGVhZD5cbikpO1xuXG5UYWJsZS5Cb2R5ID0gUmVhY3QuZm9yd2FyZFJlZigoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICA8dGJvZHkgdHc9XCJiZy13aGl0ZVwiIHsuLi5wcm9wc30+XG4gICAge2NoaWxkcmVufVxuICA8L3Rib2R5PlxuKSk7XG5cblRhYmxlLkhlYWRlckNlbGwgPSBSZWFjdC5mb3J3YXJkUmVmKCh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDx0aFxuICAgIHR3PVwicHgtNiBweS0yIGJnLXdoaXRlIHRleHQtbGVmdCB0ZXh0LXhzIGxlYWRpbmctNSBmb250LW1lZGl1bSB0ZXh0LWFjY2VudC1maXZlIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXG4gICAgey4uLnByb3BzfVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L3RoPlxuKSk7XG5cblRhYmxlLlJvdyA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIG9uQ2xpY2ssIGlzU2VsZWN0YWJsZSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8dHJcbiAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgIGNzcz17W1xuICAgICAgb25DbGljayB8fCBpc1NlbGVjdGFibGVcbiAgICAgICAgPyB0d2Bob3ZlcjpiZy1hY2NlbnQtdHdvIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy1hY2NlbnQtdHdvIGN1cnNvci1wb2ludGVyYFxuICAgICAgICA6IG51bGwsXG4gICAgXX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvdHI+XG4pKTtcblxuVGFibGUuQ2VsbCA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8dGQgdHc9XCJweC02IHB5LTRcIiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLnByb3BzfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvdGQ+XG4pKTtcblxuVGFibGUuVGV4dENlbGwgPSBSZWFjdC5mb3J3YXJkUmVmKCh7XG4gIHByaW1hcnksXG4gIHByaW1hcnlDbGFzc25hbWUsXG4gIHNlY29uZGFyeSxcbiAgc2Vjb25kYXJ5Q2xhc3NuYW1lLFxufSkgPT4gKFxuICA8PlxuICAgIHtwcmltYXJ5ICYmIChcbiAgICAgIDxUZXh0XG4gICAgICAgIHNtYWxsXG4gICAgICAgIHR3PVwiYmxvY2sgZm9udC1tZWRpdW0gdHJ1bmNhdGVcIlxuICAgICAgICBjc3M9e1tzZWNvbmRhcnkgJiYgdHdgbWItMC41YF19XG4gICAgICAgIGNsYXNzTmFtZT17cHJpbWFyeUNsYXNzbmFtZX1cbiAgICAgID5cbiAgICAgICAge3ByaW1hcnl9XG4gICAgICA8L1RleHQ+XG4gICAgKX1cbiAgICB7c2Vjb25kYXJ5ICYmIChcbiAgICAgIDxUZXh0XG4gICAgICAgIHNtYWxsXG4gICAgICAgIGNvbG9yPVwidGV4dC1hY2NlbnQtZml2ZVwiXG4gICAgICAgIHR3PVwiYmxvY2sgdHJ1bmNhdGVcIlxuICAgICAgICBjbGFzc05hbWU9e3NlY29uZGFyeUNsYXNzbmFtZX1cbiAgICAgID5cbiAgICAgICAge3NlY29uZGFyeX1cbiAgICAgIDwvVGV4dD5cbiAgICApfVxuICA8Lz5cbikpO1xuXG5UYWJsZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5IZWFkLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cblRhYmxlLkJvZHkucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuVGFibGUuSGVhZGVyQ2VsbC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5Sb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cblRhYmxlLkNlbGwucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cblRhYmxlLlRleHRDZWxsLnByb3BUeXBlcyA9IHtcbiAgcHJpbWFyeTogUHJvcFR5cGVzLm5vZGUsXG4gIHByaW1hcnlDbGFzc25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlY29uZGFyeTogUHJvcFR5cGVzLm5vZGUsXG4gIHNlY29uZGFyeUNsYXNzbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlO1xuIl19 */", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4uL1RleHRcIjtcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xuXG5jb25zdCBUYWJsZSA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgPHRhYmxlIHR3PVwidy1mdWxsIG1heC13LWZ1bGxcIiB7Li4ucHJvcHN9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC90YWJsZT5cbikpO1xuXG5UYWJsZS5IZWFkID0gUmVhY3QuZm9yd2FyZFJlZigoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICA8dGhlYWQgdHc9XCJib3JkZXItYiBib3JkZXItYm9yZGVyIHJvdW5kZWRcIiB7Li4ucHJvcHN9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC90aGVhZD5cbikpO1xuXG5UYWJsZS5Cb2R5ID0gUmVhY3QuZm9yd2FyZFJlZigoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICA8dGJvZHkgdHc9XCJiZy13aGl0ZVwiIHsuLi5wcm9wc30+XG4gICAge2NoaWxkcmVufVxuICA8L3Rib2R5PlxuKSk7XG5cblRhYmxlLkhlYWRlckNlbGwgPSBSZWFjdC5mb3J3YXJkUmVmKCh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDx0aFxuICAgIHR3PVwicHgtNiBweS0yIGJnLXdoaXRlIHRleHQtbGVmdCB0ZXh0LXhzIGxlYWRpbmctNSBmb250LW1lZGl1bSB0ZXh0LWFjY2VudC1maXZlIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXG4gICAgey4uLnByb3BzfVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L3RoPlxuKSk7XG5cblRhYmxlLlJvdyA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIG9uQ2xpY2ssIGlzU2VsZWN0YWJsZSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8dHJcbiAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgIGNzcz17W1xuICAgICAgb25DbGljayB8fCBpc1NlbGVjdGFibGVcbiAgICAgICAgPyB0d2Bob3ZlcjpiZy1hY2NlbnQtdHdvIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy1hY2NlbnQtdHdvIGN1cnNvci1wb2ludGVyYFxuICAgICAgICA6IG51bGwsXG4gICAgXX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvdHI+XG4pKTtcblxuVGFibGUuQ2VsbCA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8dGQgdHc9XCJweC02IHB5LTRcIiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLnByb3BzfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvdGQ+XG4pKTtcblxuVGFibGUuVGV4dENlbGwgPSBSZWFjdC5mb3J3YXJkUmVmKCh7XG4gIHByaW1hcnksXG4gIHByaW1hcnlDbGFzc25hbWUsXG4gIHNlY29uZGFyeSxcbiAgc2Vjb25kYXJ5Q2xhc3NuYW1lLFxufSkgPT4gKFxuICA8PlxuICAgIHtwcmltYXJ5ICYmIChcbiAgICAgIDxUZXh0XG4gICAgICAgIHNtYWxsXG4gICAgICAgIHR3PVwiYmxvY2sgZm9udC1tZWRpdW0gdHJ1bmNhdGVcIlxuICAgICAgICBjc3M9e1tzZWNvbmRhcnkgJiYgdHdgbWItMC41YF19XG4gICAgICAgIGNsYXNzTmFtZT17cHJpbWFyeUNsYXNzbmFtZX1cbiAgICAgID5cbiAgICAgICAge3ByaW1hcnl9XG4gICAgICA8L1RleHQ+XG4gICAgKX1cbiAgICB7c2Vjb25kYXJ5ICYmIChcbiAgICAgIDxUZXh0XG4gICAgICAgIHNtYWxsXG4gICAgICAgIGNvbG9yPVwidGV4dC1hY2NlbnQtZml2ZVwiXG4gICAgICAgIHR3PVwiYmxvY2sgdHJ1bmNhdGVcIlxuICAgICAgICBjbGFzc05hbWU9e3NlY29uZGFyeUNsYXNzbmFtZX1cbiAgICAgID5cbiAgICAgICAge3NlY29uZGFyeX1cbiAgICAgIDwvVGV4dD5cbiAgICApfVxuICA8Lz5cbikpO1xuXG5UYWJsZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5IZWFkLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cblRhYmxlLkJvZHkucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuVGFibGUuSGVhZGVyQ2VsbC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5Sb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cblRhYmxlLkNlbGwucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cblRhYmxlLlRleHRDZWxsLnByb3BUeXBlcyA9IHtcbiAgcHJpbWFyeTogUHJvcFR5cGVzLm5vZGUsXG4gIHByaW1hcnlDbGFzc25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlY29uZGFyeTogUHJvcFR5cGVzLm5vZGUsXG4gIHNlY29uZGFyeUNsYXNzbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlO1xuIl19 */"]
}, props), children));

var _ref5 = process.env.NODE_ENV === "production" ? {
  name: "16hw2j3",
  styles: "padding-left:1.5rem;padding-right:1.5rem;padding-top:1rem;padding-bottom:1rem"
} : {
  name: "16hw2j3",
  styles: "padding-left:1.5rem;padding-right:1.5rem;padding-top:1rem;padding-bottom:1rem",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

Table.Cell = /*#__PURE__*/React__default['default'].forwardRef(({
  children,
  className,
  ...props
}) => react.jsx("td", _extends({
  css: _ref5,
  className: className
}, props), children));

var _ref6 = process.env.NODE_ENV === "production" ? {
  name: "hdknak",
  styles: "display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
} : {
  name: "hdknak",
  styles: "display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

Table.TextCell = /*#__PURE__*/React__default['default'].forwardRef(({
  primary,
  primaryClassname,
  secondary,
  secondaryClassname
}) => react.jsx(React__default['default'].Fragment, null, primary && react.jsx(Text, {
  small: true,
  css: ["display:block;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", secondary && {
    "marginBottom": "0.125rem"
  }, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFUSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4uL1RleHRcIjtcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xuXG5jb25zdCBUYWJsZSA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgPHRhYmxlIHR3PVwidy1mdWxsIG1heC13LWZ1bGxcIiB7Li4ucHJvcHN9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC90YWJsZT5cbikpO1xuXG5UYWJsZS5IZWFkID0gUmVhY3QuZm9yd2FyZFJlZigoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICA8dGhlYWQgdHc9XCJib3JkZXItYiBib3JkZXItYm9yZGVyIHJvdW5kZWRcIiB7Li4ucHJvcHN9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC90aGVhZD5cbikpO1xuXG5UYWJsZS5Cb2R5ID0gUmVhY3QuZm9yd2FyZFJlZigoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICA8dGJvZHkgdHc9XCJiZy13aGl0ZVwiIHsuLi5wcm9wc30+XG4gICAge2NoaWxkcmVufVxuICA8L3Rib2R5PlxuKSk7XG5cblRhYmxlLkhlYWRlckNlbGwgPSBSZWFjdC5mb3J3YXJkUmVmKCh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDx0aFxuICAgIHR3PVwicHgtNiBweS0yIGJnLXdoaXRlIHRleHQtbGVmdCB0ZXh0LXhzIGxlYWRpbmctNSBmb250LW1lZGl1bSB0ZXh0LWFjY2VudC1maXZlIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXG4gICAgey4uLnByb3BzfVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L3RoPlxuKSk7XG5cblRhYmxlLlJvdyA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIG9uQ2xpY2ssIGlzU2VsZWN0YWJsZSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8dHJcbiAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgIGNzcz17W1xuICAgICAgb25DbGljayB8fCBpc1NlbGVjdGFibGVcbiAgICAgICAgPyB0d2Bob3ZlcjpiZy1hY2NlbnQtdHdvIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy1hY2NlbnQtdHdvIGN1cnNvci1wb2ludGVyYFxuICAgICAgICA6IG51bGwsXG4gICAgXX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvdHI+XG4pKTtcblxuVGFibGUuQ2VsbCA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8dGQgdHc9XCJweC02IHB5LTRcIiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLnByb3BzfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvdGQ+XG4pKTtcblxuVGFibGUuVGV4dENlbGwgPSBSZWFjdC5mb3J3YXJkUmVmKCh7XG4gIHByaW1hcnksXG4gIHByaW1hcnlDbGFzc25hbWUsXG4gIHNlY29uZGFyeSxcbiAgc2Vjb25kYXJ5Q2xhc3NuYW1lLFxufSkgPT4gKFxuICA8PlxuICAgIHtwcmltYXJ5ICYmIChcbiAgICAgIDxUZXh0XG4gICAgICAgIHNtYWxsXG4gICAgICAgIHR3PVwiYmxvY2sgZm9udC1tZWRpdW0gdHJ1bmNhdGVcIlxuICAgICAgICBjc3M9e1tzZWNvbmRhcnkgJiYgdHdgbWItMC41YF19XG4gICAgICAgIGNsYXNzTmFtZT17cHJpbWFyeUNsYXNzbmFtZX1cbiAgICAgID5cbiAgICAgICAge3ByaW1hcnl9XG4gICAgICA8L1RleHQ+XG4gICAgKX1cbiAgICB7c2Vjb25kYXJ5ICYmIChcbiAgICAgIDxUZXh0XG4gICAgICAgIHNtYWxsXG4gICAgICAgIGNvbG9yPVwidGV4dC1hY2NlbnQtZml2ZVwiXG4gICAgICAgIHR3PVwiYmxvY2sgdHJ1bmNhdGVcIlxuICAgICAgICBjbGFzc05hbWU9e3NlY29uZGFyeUNsYXNzbmFtZX1cbiAgICAgID5cbiAgICAgICAge3NlY29uZGFyeX1cbiAgICAgIDwvVGV4dD5cbiAgICApfVxuICA8Lz5cbikpO1xuXG5UYWJsZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5IZWFkLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cblRhYmxlLkJvZHkucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuVGFibGUuSGVhZGVyQ2VsbC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5Sb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cblRhYmxlLkNlbGwucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cblRhYmxlLlRleHRDZWxsLnByb3BUeXBlcyA9IHtcbiAgcHJpbWFyeTogUHJvcFR5cGVzLm5vZGUsXG4gIHByaW1hcnlDbGFzc25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlY29uZGFyeTogUHJvcFR5cGVzLm5vZGUsXG4gIHNlY29uZGFyeUNsYXNzbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlO1xuIl19 */", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFUSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4uL1RleHRcIjtcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xuXG5jb25zdCBUYWJsZSA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgPHRhYmxlIHR3PVwidy1mdWxsIG1heC13LWZ1bGxcIiB7Li4ucHJvcHN9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC90YWJsZT5cbikpO1xuXG5UYWJsZS5IZWFkID0gUmVhY3QuZm9yd2FyZFJlZigoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICA8dGhlYWQgdHc9XCJib3JkZXItYiBib3JkZXItYm9yZGVyIHJvdW5kZWRcIiB7Li4ucHJvcHN9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC90aGVhZD5cbikpO1xuXG5UYWJsZS5Cb2R5ID0gUmVhY3QuZm9yd2FyZFJlZigoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICA8dGJvZHkgdHc9XCJiZy13aGl0ZVwiIHsuLi5wcm9wc30+XG4gICAge2NoaWxkcmVufVxuICA8L3Rib2R5PlxuKSk7XG5cblRhYmxlLkhlYWRlckNlbGwgPSBSZWFjdC5mb3J3YXJkUmVmKCh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDx0aFxuICAgIHR3PVwicHgtNiBweS0yIGJnLXdoaXRlIHRleHQtbGVmdCB0ZXh0LXhzIGxlYWRpbmctNSBmb250LW1lZGl1bSB0ZXh0LWFjY2VudC1maXZlIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXG4gICAgey4uLnByb3BzfVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L3RoPlxuKSk7XG5cblRhYmxlLlJvdyA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIG9uQ2xpY2ssIGlzU2VsZWN0YWJsZSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8dHJcbiAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgIGNzcz17W1xuICAgICAgb25DbGljayB8fCBpc1NlbGVjdGFibGVcbiAgICAgICAgPyB0d2Bob3ZlcjpiZy1hY2NlbnQtdHdvIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy1hY2NlbnQtdHdvIGN1cnNvci1wb2ludGVyYFxuICAgICAgICA6IG51bGwsXG4gICAgXX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvdHI+XG4pKTtcblxuVGFibGUuQ2VsbCA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8dGQgdHc9XCJweC02IHB5LTRcIiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLnByb3BzfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvdGQ+XG4pKTtcblxuVGFibGUuVGV4dENlbGwgPSBSZWFjdC5mb3J3YXJkUmVmKCh7XG4gIHByaW1hcnksXG4gIHByaW1hcnlDbGFzc25hbWUsXG4gIHNlY29uZGFyeSxcbiAgc2Vjb25kYXJ5Q2xhc3NuYW1lLFxufSkgPT4gKFxuICA8PlxuICAgIHtwcmltYXJ5ICYmIChcbiAgICAgIDxUZXh0XG4gICAgICAgIHNtYWxsXG4gICAgICAgIHR3PVwiYmxvY2sgZm9udC1tZWRpdW0gdHJ1bmNhdGVcIlxuICAgICAgICBjc3M9e1tzZWNvbmRhcnkgJiYgdHdgbWItMC41YF19XG4gICAgICAgIGNsYXNzTmFtZT17cHJpbWFyeUNsYXNzbmFtZX1cbiAgICAgID5cbiAgICAgICAge3ByaW1hcnl9XG4gICAgICA8L1RleHQ+XG4gICAgKX1cbiAgICB7c2Vjb25kYXJ5ICYmIChcbiAgICAgIDxUZXh0XG4gICAgICAgIHNtYWxsXG4gICAgICAgIGNvbG9yPVwidGV4dC1hY2NlbnQtZml2ZVwiXG4gICAgICAgIHR3PVwiYmxvY2sgdHJ1bmNhdGVcIlxuICAgICAgICBjbGFzc05hbWU9e3NlY29uZGFyeUNsYXNzbmFtZX1cbiAgICAgID5cbiAgICAgICAge3NlY29uZGFyeX1cbiAgICAgIDwvVGV4dD5cbiAgICApfVxuICA8Lz5cbikpO1xuXG5UYWJsZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5IZWFkLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cblRhYmxlLkJvZHkucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuVGFibGUuSGVhZGVyQ2VsbC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5Sb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cblRhYmxlLkNlbGwucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cblRhYmxlLlRleHRDZWxsLnByb3BUeXBlcyA9IHtcbiAgcHJpbWFyeTogUHJvcFR5cGVzLm5vZGUsXG4gIHByaW1hcnlDbGFzc25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlY29uZGFyeTogUHJvcFR5cGVzLm5vZGUsXG4gIHNlY29uZGFyeUNsYXNzbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlO1xuIl19 */"],
  className: primaryClassname
}, primary), secondary && react.jsx(Text, {
  small: true,
  color: "text-accent-five",
  css: _ref6,
  className: secondaryClassname
}, secondary)));
Table.propTypes = {
  children: PropTypes__default['default'].node.isRequired,
  className: PropTypes__default['default'].string
};
Table.Head.propTypes = {
  children: PropTypes__default['default'].node.isRequired,
  className: PropTypes__default['default'].string
};
Table.Body.propTypes = {
  children: PropTypes__default['default'].node.isRequired,
  className: PropTypes__default['default'].string
};
Table.HeaderCell.propTypes = {
  children: PropTypes__default['default'].node.isRequired,
  className: PropTypes__default['default'].string
};
Table.Row.propTypes = {
  children: PropTypes__default['default'].node.isRequired,
  className: PropTypes__default['default'].string,
  onClick: PropTypes__default['default'].func
};
Table.Cell.propTypes = {
  children: PropTypes__default['default'].node,
  className: PropTypes__default['default'].string
};
Table.TextCell.propTypes = {
  primary: PropTypes__default['default'].node,
  primaryClassname: PropTypes__default['default'].string,
  secondary: PropTypes__default['default'].node,
  secondaryClassname: PropTypes__default['default'].string
};

module.exports = Table;
