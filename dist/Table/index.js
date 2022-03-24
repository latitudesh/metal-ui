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

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "jk7dkw",
  styles: "width:100%;max-width:100%"
} : {
  name: "1ci8714-Table",
  styles: "width:100%;max-width:100%;label:Table;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

const Table = /*#__PURE__*/React__default["default"].forwardRef(({
  children,
  ...props
}, ref) => react.jsx("table", _extends({
  css: _ref
}, props, {
  ref: ref
}), children));
Table.displayName = "Table";

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "s6prfl",
  styles: "border-bottom-width:1px;--tw-border-opacity:1;border-color:rgba(234, 234, 234, var(--tw-border-opacity));border-radius:5px"
} : {
  name: "1t9oxpc-Table-Head",
  styles: "border-bottom-width:1px;--tw-border-opacity:1;border-color:rgba(234, 234, 234, var(--tw-border-opacity));border-radius:5px;label:Table-Head;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

Table.Head = /*#__PURE__*/React__default["default"].forwardRef(({
  children,
  ...props
}, ref) => react.jsx("thead", _extends({
  css: _ref2
}, props, {
  ref: ref
}), children));
Table.Head.displayName = "TableHead";

var _ref3 = process.env.NODE_ENV === "production" ? {
  name: "14tkg57",
  styles: "--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))"
} : {
  name: "73poz-Table-Body",
  styles: "--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));label:Table-Body;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

Table.Body = /*#__PURE__*/React__default["default"].forwardRef(({
  children,
  ...props
}, ref) => react.jsx("tbody", _extends({
  css: _ref3
}, props, {
  ref: ref
}), children));
Table.Body.displayName = "TableBody";

var _ref4 = process.env.NODE_ENV === "production" ? {
  name: "1hyz2mm",
  styles: "padding-left:1.5rem;padding-right:1.5rem;padding-top:0.5rem;padding-bottom:0.5rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));text-align:left;font-size:0.75rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgba(102, 102, 102, var(--tw-text-opacity));text-transform:uppercase;letter-spacing:0.05em"
} : {
  name: "1x1k0s-Table-HeaderCell",
  styles: "padding-left:1.5rem;padding-right:1.5rem;padding-top:0.5rem;padding-bottom:0.5rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));text-align:left;font-size:0.75rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgba(102, 102, 102, var(--tw-text-opacity));text-transform:uppercase;letter-spacing:0.05em;label:Table-HeaderCell;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

Table.HeaderCell = /*#__PURE__*/React__default["default"].forwardRef(({
  children,
  ...props
}, ref) => react.jsx("th", _extends({
  css: _ref4
}, props, {
  ref: ref
}), children));
Table.HeaderCell.displayName = "TableHeaderCell";
Table.Row = /*#__PURE__*/React__default["default"].forwardRef(({
  children,
  onClick,
  isSelectable,
  ...props
}, ref) => react.jsx("tr", _extends({
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
  } : null, process.env.NODE_ENV === "production" ? "" : ";label:Table-Row;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4uL1RleHRcIjtcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xuXG5jb25zdCBUYWJsZSA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8dGFibGUgdHc9XCJ3LWZ1bGwgbWF4LXctZnVsbFwiIHsuLi5wcm9wc30gcmVmPXtyZWZ9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC90YWJsZT5cbikpO1xuXG5UYWJsZS5kaXNwbGF5TmFtZSA9IFwiVGFibGVcIjtcblxuVGFibGUuSGVhZCA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8dGhlYWQgdHc9XCJib3JkZXItYiBib3JkZXItYm9yZGVyIHJvdW5kZWRcIiB7Li4ucHJvcHN9IHJlZj17cmVmfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvdGhlYWQ+XG4pKTtcblRhYmxlLkhlYWQuZGlzcGxheU5hbWUgPSBcIlRhYmxlSGVhZFwiO1xuXG5UYWJsZS5Cb2R5ID0gUmVhY3QuZm9yd2FyZFJlZigoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDx0Ym9keSB0dz1cImJnLXdoaXRlXCIgey4uLnByb3BzfSByZWY9e3JlZn0+XG4gICAge2NoaWxkcmVufVxuICA8L3Rib2R5PlxuKSk7XG5UYWJsZS5Cb2R5LmRpc3BsYXlOYW1lID0gXCJUYWJsZUJvZHlcIjtcblxuVGFibGUuSGVhZGVyQ2VsbCA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8dGhcbiAgICB0dz1cInB4LTYgcHktMiBiZy13aGl0ZSB0ZXh0LWxlZnQgdGV4dC14cyBsZWFkaW5nLTUgZm9udC1tZWRpdW0gdGV4dC1hY2NlbnQtZml2ZSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxuICAgIHsuLi5wcm9wc31cbiAgICByZWY9e3JlZn1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC90aD5cbikpO1xuVGFibGUuSGVhZGVyQ2VsbC5kaXNwbGF5TmFtZSA9IFwiVGFibGVIZWFkZXJDZWxsXCI7XG5cblRhYmxlLlJvdyA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIG9uQ2xpY2ssIGlzU2VsZWN0YWJsZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDx0clxuICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgY3NzPXtbXG4gICAgICBvbkNsaWNrIHx8IGlzU2VsZWN0YWJsZVxuICAgICAgICA/IHR3YGhvdmVyOmJnLWFjY2VudC10d28gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLWFjY2VudC10d28gY3Vyc29yLXBvaW50ZXJgXG4gICAgICAgIDogbnVsbCxcbiAgICBdfVxuICAgIHsuLi5wcm9wc31cbiAgICByZWY9e3JlZn1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC90cj5cbikpO1xuVGFibGUuUm93LmRpc3BsYXlOYW1lID0gXCJUYWJsZVJvd1wiO1xuXG5UYWJsZS5DZWxsID0gUmVhY3QuZm9yd2FyZFJlZigoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPHRkIHR3PVwicHgtNiBweS00XCIgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5wcm9wc30gcmVmPXtyZWZ9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC90ZD5cbikpO1xuVGFibGUuQ2VsbC5kaXNwbGF5TmFtZSA9IFwiVGFibGVDZWxsXCI7XG5cblRhYmxlLlRleHRDZWxsID0gUmVhY3QuZm9yd2FyZFJlZigoe1xuICBwcmltYXJ5LFxuICBwcmltYXJ5Q2xhc3NuYW1lLFxuICBzZWNvbmRhcnksXG4gIHNlY29uZGFyeUNsYXNzbmFtZSxcbn0sIHJlZikgPT4gKFxuICA8PlxuICAgIHtwcmltYXJ5ICYmIChcbiAgICAgIDxUZXh0XG4gICAgICAgIHNtYWxsXG4gICAgICAgIHR3PVwiYmxvY2sgZm9udC1tZWRpdW0gdHJ1bmNhdGVcIlxuICAgICAgICBjc3M9e1tzZWNvbmRhcnkgJiYgdHdgbWItMC41YF19XG4gICAgICAgIGNsYXNzTmFtZT17cHJpbWFyeUNsYXNzbmFtZX1cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICA+XG4gICAgICAgIHtwcmltYXJ5fVxuICAgICAgPC9UZXh0PlxuICAgICl9XG4gICAge3NlY29uZGFyeSAmJiAoXG4gICAgICA8VGV4dFxuICAgICAgICBzbWFsbFxuICAgICAgICBjb2xvcj1cInRleHQtYWNjZW50LWZpdmVcIlxuICAgICAgICB0dz1cImJsb2NrIHRydW5jYXRlXCJcbiAgICAgICAgY2xhc3NOYW1lPXtzZWNvbmRhcnlDbGFzc25hbWV9XG4gICAgICA+XG4gICAgICAgIHtzZWNvbmRhcnl9XG4gICAgICA8L1RleHQ+XG4gICAgKX1cbiAgPC8+XG4pKTtcblRhYmxlLlRleHRDZWxsLmRpc3BsYXlOYW1lID0gXCJUYWJsZVRleHRDZWxsXCI7XG5cblRhYmxlLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5IZWFkLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5Cb2R5LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5IZWFkZXJDZWxsLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5Sb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5UYWJsZS5DZWxsLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5UZXh0Q2VsbC5wcm9wVHlwZXMgPSB7XG4gIHByaW1hcnk6IFByb3BUeXBlcy5ub2RlLFxuICBwcmltYXJ5Q2xhc3NuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWNvbmRhcnk6IFByb3BUeXBlcy5ub2RlLFxuICBzZWNvbmRhcnlDbGFzc25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcbiJdfQ== */", process.env.NODE_ENV === "production" ? "" : ";label:Table-Row;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4uL1RleHRcIjtcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xuXG5jb25zdCBUYWJsZSA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8dGFibGUgdHc9XCJ3LWZ1bGwgbWF4LXctZnVsbFwiIHsuLi5wcm9wc30gcmVmPXtyZWZ9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC90YWJsZT5cbikpO1xuXG5UYWJsZS5kaXNwbGF5TmFtZSA9IFwiVGFibGVcIjtcblxuVGFibGUuSGVhZCA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8dGhlYWQgdHc9XCJib3JkZXItYiBib3JkZXItYm9yZGVyIHJvdW5kZWRcIiB7Li4ucHJvcHN9IHJlZj17cmVmfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvdGhlYWQ+XG4pKTtcblRhYmxlLkhlYWQuZGlzcGxheU5hbWUgPSBcIlRhYmxlSGVhZFwiO1xuXG5UYWJsZS5Cb2R5ID0gUmVhY3QuZm9yd2FyZFJlZigoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDx0Ym9keSB0dz1cImJnLXdoaXRlXCIgey4uLnByb3BzfSByZWY9e3JlZn0+XG4gICAge2NoaWxkcmVufVxuICA8L3Rib2R5PlxuKSk7XG5UYWJsZS5Cb2R5LmRpc3BsYXlOYW1lID0gXCJUYWJsZUJvZHlcIjtcblxuVGFibGUuSGVhZGVyQ2VsbCA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8dGhcbiAgICB0dz1cInB4LTYgcHktMiBiZy13aGl0ZSB0ZXh0LWxlZnQgdGV4dC14cyBsZWFkaW5nLTUgZm9udC1tZWRpdW0gdGV4dC1hY2NlbnQtZml2ZSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxuICAgIHsuLi5wcm9wc31cbiAgICByZWY9e3JlZn1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC90aD5cbikpO1xuVGFibGUuSGVhZGVyQ2VsbC5kaXNwbGF5TmFtZSA9IFwiVGFibGVIZWFkZXJDZWxsXCI7XG5cblRhYmxlLlJvdyA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIG9uQ2xpY2ssIGlzU2VsZWN0YWJsZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDx0clxuICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgY3NzPXtbXG4gICAgICBvbkNsaWNrIHx8IGlzU2VsZWN0YWJsZVxuICAgICAgICA/IHR3YGhvdmVyOmJnLWFjY2VudC10d28gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLWFjY2VudC10d28gY3Vyc29yLXBvaW50ZXJgXG4gICAgICAgIDogbnVsbCxcbiAgICBdfVxuICAgIHsuLi5wcm9wc31cbiAgICByZWY9e3JlZn1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC90cj5cbikpO1xuVGFibGUuUm93LmRpc3BsYXlOYW1lID0gXCJUYWJsZVJvd1wiO1xuXG5UYWJsZS5DZWxsID0gUmVhY3QuZm9yd2FyZFJlZigoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPHRkIHR3PVwicHgtNiBweS00XCIgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5wcm9wc30gcmVmPXtyZWZ9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC90ZD5cbikpO1xuVGFibGUuQ2VsbC5kaXNwbGF5TmFtZSA9IFwiVGFibGVDZWxsXCI7XG5cblRhYmxlLlRleHRDZWxsID0gUmVhY3QuZm9yd2FyZFJlZigoe1xuICBwcmltYXJ5LFxuICBwcmltYXJ5Q2xhc3NuYW1lLFxuICBzZWNvbmRhcnksXG4gIHNlY29uZGFyeUNsYXNzbmFtZSxcbn0sIHJlZikgPT4gKFxuICA8PlxuICAgIHtwcmltYXJ5ICYmIChcbiAgICAgIDxUZXh0XG4gICAgICAgIHNtYWxsXG4gICAgICAgIHR3PVwiYmxvY2sgZm9udC1tZWRpdW0gdHJ1bmNhdGVcIlxuICAgICAgICBjc3M9e1tzZWNvbmRhcnkgJiYgdHdgbWItMC41YF19XG4gICAgICAgIGNsYXNzTmFtZT17cHJpbWFyeUNsYXNzbmFtZX1cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICA+XG4gICAgICAgIHtwcmltYXJ5fVxuICAgICAgPC9UZXh0PlxuICAgICl9XG4gICAge3NlY29uZGFyeSAmJiAoXG4gICAgICA8VGV4dFxuICAgICAgICBzbWFsbFxuICAgICAgICBjb2xvcj1cInRleHQtYWNjZW50LWZpdmVcIlxuICAgICAgICB0dz1cImJsb2NrIHRydW5jYXRlXCJcbiAgICAgICAgY2xhc3NOYW1lPXtzZWNvbmRhcnlDbGFzc25hbWV9XG4gICAgICA+XG4gICAgICAgIHtzZWNvbmRhcnl9XG4gICAgICA8L1RleHQ+XG4gICAgKX1cbiAgPC8+XG4pKTtcblRhYmxlLlRleHRDZWxsLmRpc3BsYXlOYW1lID0gXCJUYWJsZVRleHRDZWxsXCI7XG5cblRhYmxlLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5IZWFkLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5Cb2R5LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5IZWFkZXJDZWxsLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5Sb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5UYWJsZS5DZWxsLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5UZXh0Q2VsbC5wcm9wVHlwZXMgPSB7XG4gIHByaW1hcnk6IFByb3BUeXBlcy5ub2RlLFxuICBwcmltYXJ5Q2xhc3NuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWNvbmRhcnk6IFByb3BUeXBlcy5ub2RlLFxuICBzZWNvbmRhcnlDbGFzc25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcbiJdfQ== */"]
}, props, {
  ref: ref
}), children));
Table.Row.displayName = "TableRow";

var _ref5 = process.env.NODE_ENV === "production" ? {
  name: "16hw2j3",
  styles: "padding-left:1.5rem;padding-right:1.5rem;padding-top:1rem;padding-bottom:1rem"
} : {
  name: "1wnfwu8-Table-Cell",
  styles: "padding-left:1.5rem;padding-right:1.5rem;padding-top:1rem;padding-bottom:1rem;label:Table-Cell;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

Table.Cell = /*#__PURE__*/React__default["default"].forwardRef(({
  children,
  className,
  ...props
}, ref) => react.jsx("td", _extends({
  css: _ref5,
  className: className
}, props, {
  ref: ref
}), children));
Table.Cell.displayName = "TableCell";

var _ref6 = process.env.NODE_ENV === "production" ? {
  name: "hdknak",
  styles: "display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
} : {
  name: "1gnzylj-Table-TextCell",
  styles: "display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;label:Table-TextCell;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

Table.TextCell = /*#__PURE__*/React__default["default"].forwardRef(({
  primary,
  primaryClassname,
  secondary,
  secondaryClassname
}, ref) => react.jsx(React__default["default"].Fragment, null, primary && react.jsx(Text, {
  small: true,
  css: ["display:block;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", secondary && {
    "marginBottom": "0.125rem"
  }, process.env.NODE_ENV === "production" ? "" : ";label:Table-TextCell;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFUSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4uL1RleHRcIjtcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xuXG5jb25zdCBUYWJsZSA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8dGFibGUgdHc9XCJ3LWZ1bGwgbWF4LXctZnVsbFwiIHsuLi5wcm9wc30gcmVmPXtyZWZ9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC90YWJsZT5cbikpO1xuXG5UYWJsZS5kaXNwbGF5TmFtZSA9IFwiVGFibGVcIjtcblxuVGFibGUuSGVhZCA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8dGhlYWQgdHc9XCJib3JkZXItYiBib3JkZXItYm9yZGVyIHJvdW5kZWRcIiB7Li4ucHJvcHN9IHJlZj17cmVmfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvdGhlYWQ+XG4pKTtcblRhYmxlLkhlYWQuZGlzcGxheU5hbWUgPSBcIlRhYmxlSGVhZFwiO1xuXG5UYWJsZS5Cb2R5ID0gUmVhY3QuZm9yd2FyZFJlZigoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDx0Ym9keSB0dz1cImJnLXdoaXRlXCIgey4uLnByb3BzfSByZWY9e3JlZn0+XG4gICAge2NoaWxkcmVufVxuICA8L3Rib2R5PlxuKSk7XG5UYWJsZS5Cb2R5LmRpc3BsYXlOYW1lID0gXCJUYWJsZUJvZHlcIjtcblxuVGFibGUuSGVhZGVyQ2VsbCA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8dGhcbiAgICB0dz1cInB4LTYgcHktMiBiZy13aGl0ZSB0ZXh0LWxlZnQgdGV4dC14cyBsZWFkaW5nLTUgZm9udC1tZWRpdW0gdGV4dC1hY2NlbnQtZml2ZSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxuICAgIHsuLi5wcm9wc31cbiAgICByZWY9e3JlZn1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC90aD5cbikpO1xuVGFibGUuSGVhZGVyQ2VsbC5kaXNwbGF5TmFtZSA9IFwiVGFibGVIZWFkZXJDZWxsXCI7XG5cblRhYmxlLlJvdyA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIG9uQ2xpY2ssIGlzU2VsZWN0YWJsZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDx0clxuICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgY3NzPXtbXG4gICAgICBvbkNsaWNrIHx8IGlzU2VsZWN0YWJsZVxuICAgICAgICA/IHR3YGhvdmVyOmJnLWFjY2VudC10d28gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLWFjY2VudC10d28gY3Vyc29yLXBvaW50ZXJgXG4gICAgICAgIDogbnVsbCxcbiAgICBdfVxuICAgIHsuLi5wcm9wc31cbiAgICByZWY9e3JlZn1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC90cj5cbikpO1xuVGFibGUuUm93LmRpc3BsYXlOYW1lID0gXCJUYWJsZVJvd1wiO1xuXG5UYWJsZS5DZWxsID0gUmVhY3QuZm9yd2FyZFJlZigoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPHRkIHR3PVwicHgtNiBweS00XCIgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5wcm9wc30gcmVmPXtyZWZ9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC90ZD5cbikpO1xuVGFibGUuQ2VsbC5kaXNwbGF5TmFtZSA9IFwiVGFibGVDZWxsXCI7XG5cblRhYmxlLlRleHRDZWxsID0gUmVhY3QuZm9yd2FyZFJlZigoe1xuICBwcmltYXJ5LFxuICBwcmltYXJ5Q2xhc3NuYW1lLFxuICBzZWNvbmRhcnksXG4gIHNlY29uZGFyeUNsYXNzbmFtZSxcbn0sIHJlZikgPT4gKFxuICA8PlxuICAgIHtwcmltYXJ5ICYmIChcbiAgICAgIDxUZXh0XG4gICAgICAgIHNtYWxsXG4gICAgICAgIHR3PVwiYmxvY2sgZm9udC1tZWRpdW0gdHJ1bmNhdGVcIlxuICAgICAgICBjc3M9e1tzZWNvbmRhcnkgJiYgdHdgbWItMC41YF19XG4gICAgICAgIGNsYXNzTmFtZT17cHJpbWFyeUNsYXNzbmFtZX1cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICA+XG4gICAgICAgIHtwcmltYXJ5fVxuICAgICAgPC9UZXh0PlxuICAgICl9XG4gICAge3NlY29uZGFyeSAmJiAoXG4gICAgICA8VGV4dFxuICAgICAgICBzbWFsbFxuICAgICAgICBjb2xvcj1cInRleHQtYWNjZW50LWZpdmVcIlxuICAgICAgICB0dz1cImJsb2NrIHRydW5jYXRlXCJcbiAgICAgICAgY2xhc3NOYW1lPXtzZWNvbmRhcnlDbGFzc25hbWV9XG4gICAgICA+XG4gICAgICAgIHtzZWNvbmRhcnl9XG4gICAgICA8L1RleHQ+XG4gICAgKX1cbiAgPC8+XG4pKTtcblRhYmxlLlRleHRDZWxsLmRpc3BsYXlOYW1lID0gXCJUYWJsZVRleHRDZWxsXCI7XG5cblRhYmxlLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5IZWFkLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5Cb2R5LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5IZWFkZXJDZWxsLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5Sb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5UYWJsZS5DZWxsLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5UZXh0Q2VsbC5wcm9wVHlwZXMgPSB7XG4gIHByaW1hcnk6IFByb3BUeXBlcy5ub2RlLFxuICBwcmltYXJ5Q2xhc3NuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWNvbmRhcnk6IFByb3BUeXBlcy5ub2RlLFxuICBzZWNvbmRhcnlDbGFzc25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcbiJdfQ== */", process.env.NODE_ENV === "production" ? "" : ";label:Table-TextCell;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFUSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4uL1RleHRcIjtcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xuXG5jb25zdCBUYWJsZSA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8dGFibGUgdHc9XCJ3LWZ1bGwgbWF4LXctZnVsbFwiIHsuLi5wcm9wc30gcmVmPXtyZWZ9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC90YWJsZT5cbikpO1xuXG5UYWJsZS5kaXNwbGF5TmFtZSA9IFwiVGFibGVcIjtcblxuVGFibGUuSGVhZCA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8dGhlYWQgdHc9XCJib3JkZXItYiBib3JkZXItYm9yZGVyIHJvdW5kZWRcIiB7Li4ucHJvcHN9IHJlZj17cmVmfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvdGhlYWQ+XG4pKTtcblRhYmxlLkhlYWQuZGlzcGxheU5hbWUgPSBcIlRhYmxlSGVhZFwiO1xuXG5UYWJsZS5Cb2R5ID0gUmVhY3QuZm9yd2FyZFJlZigoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDx0Ym9keSB0dz1cImJnLXdoaXRlXCIgey4uLnByb3BzfSByZWY9e3JlZn0+XG4gICAge2NoaWxkcmVufVxuICA8L3Rib2R5PlxuKSk7XG5UYWJsZS5Cb2R5LmRpc3BsYXlOYW1lID0gXCJUYWJsZUJvZHlcIjtcblxuVGFibGUuSGVhZGVyQ2VsbCA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8dGhcbiAgICB0dz1cInB4LTYgcHktMiBiZy13aGl0ZSB0ZXh0LWxlZnQgdGV4dC14cyBsZWFkaW5nLTUgZm9udC1tZWRpdW0gdGV4dC1hY2NlbnQtZml2ZSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIlxuICAgIHsuLi5wcm9wc31cbiAgICByZWY9e3JlZn1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC90aD5cbikpO1xuVGFibGUuSGVhZGVyQ2VsbC5kaXNwbGF5TmFtZSA9IFwiVGFibGVIZWFkZXJDZWxsXCI7XG5cblRhYmxlLlJvdyA9IFJlYWN0LmZvcndhcmRSZWYoKHsgY2hpbGRyZW4sIG9uQ2xpY2ssIGlzU2VsZWN0YWJsZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDx0clxuICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgY3NzPXtbXG4gICAgICBvbkNsaWNrIHx8IGlzU2VsZWN0YWJsZVxuICAgICAgICA/IHR3YGhvdmVyOmJnLWFjY2VudC10d28gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLWFjY2VudC10d28gY3Vyc29yLXBvaW50ZXJgXG4gICAgICAgIDogbnVsbCxcbiAgICBdfVxuICAgIHsuLi5wcm9wc31cbiAgICByZWY9e3JlZn1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC90cj5cbikpO1xuVGFibGUuUm93LmRpc3BsYXlOYW1lID0gXCJUYWJsZVJvd1wiO1xuXG5UYWJsZS5DZWxsID0gUmVhY3QuZm9yd2FyZFJlZigoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPHRkIHR3PVwicHgtNiBweS00XCIgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5wcm9wc30gcmVmPXtyZWZ9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC90ZD5cbikpO1xuVGFibGUuQ2VsbC5kaXNwbGF5TmFtZSA9IFwiVGFibGVDZWxsXCI7XG5cblRhYmxlLlRleHRDZWxsID0gUmVhY3QuZm9yd2FyZFJlZigoe1xuICBwcmltYXJ5LFxuICBwcmltYXJ5Q2xhc3NuYW1lLFxuICBzZWNvbmRhcnksXG4gIHNlY29uZGFyeUNsYXNzbmFtZSxcbn0sIHJlZikgPT4gKFxuICA8PlxuICAgIHtwcmltYXJ5ICYmIChcbiAgICAgIDxUZXh0XG4gICAgICAgIHNtYWxsXG4gICAgICAgIHR3PVwiYmxvY2sgZm9udC1tZWRpdW0gdHJ1bmNhdGVcIlxuICAgICAgICBjc3M9e1tzZWNvbmRhcnkgJiYgdHdgbWItMC41YF19XG4gICAgICAgIGNsYXNzTmFtZT17cHJpbWFyeUNsYXNzbmFtZX1cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICA+XG4gICAgICAgIHtwcmltYXJ5fVxuICAgICAgPC9UZXh0PlxuICAgICl9XG4gICAge3NlY29uZGFyeSAmJiAoXG4gICAgICA8VGV4dFxuICAgICAgICBzbWFsbFxuICAgICAgICBjb2xvcj1cInRleHQtYWNjZW50LWZpdmVcIlxuICAgICAgICB0dz1cImJsb2NrIHRydW5jYXRlXCJcbiAgICAgICAgY2xhc3NOYW1lPXtzZWNvbmRhcnlDbGFzc25hbWV9XG4gICAgICA+XG4gICAgICAgIHtzZWNvbmRhcnl9XG4gICAgICA8L1RleHQ+XG4gICAgKX1cbiAgPC8+XG4pKTtcblRhYmxlLlRleHRDZWxsLmRpc3BsYXlOYW1lID0gXCJUYWJsZVRleHRDZWxsXCI7XG5cblRhYmxlLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5IZWFkLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5Cb2R5LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5IZWFkZXJDZWxsLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5Sb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5UYWJsZS5DZWxsLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UYWJsZS5UZXh0Q2VsbC5wcm9wVHlwZXMgPSB7XG4gIHByaW1hcnk6IFByb3BUeXBlcy5ub2RlLFxuICBwcmltYXJ5Q2xhc3NuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWNvbmRhcnk6IFByb3BUeXBlcy5ub2RlLFxuICBzZWNvbmRhcnlDbGFzc25hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcbiJdfQ== */"],
  className: primaryClassname,
  ref: ref
}, primary), secondary && react.jsx(Text, {
  small: true,
  color: "text-accent-five",
  css: _ref6,
  className: secondaryClassname
}, secondary)));
Table.TextCell.displayName = "TableTextCell";
Table.propTypes = {
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string
};
Table.Head.propTypes = {
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string
};
Table.Body.propTypes = {
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string
};
Table.HeaderCell.propTypes = {
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string
};
Table.Row.propTypes = {
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  onClick: PropTypes__default["default"].func
};
Table.Cell.propTypes = {
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string
};
Table.TextCell.propTypes = {
  primary: PropTypes__default["default"].node,
  primaryClassname: PropTypes__default["default"].string,
  secondary: PropTypes__default["default"].node,
  secondaryClassname: PropTypes__default["default"].string
};

module.exports = Table;
