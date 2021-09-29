'use strict';

var react = require('@emotion/react');
var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
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

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "bjn8wh",
  styles: "position:relative"
} : {
  name: "65loc0-Input",
  styles: "position:relative;label:Input;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

const Input = /*#__PURE__*/React__default['default'].forwardRef(({
  onChange,
  inputClassName,
  className,
  variant,
  value,
  defaultValue,
  label,
  id,
  error,
  disabled,
  ...rest
}, ref) => {
  const handleChange = React.useCallback(event => {
    if (onChange) {
      onChange(event.target.value, event);
    }
  }, [onChange]);
  const brandDarkStyles = {
    "borderColor": "transparent",
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
    "--tw-bg-opacity": "0.2",
    "backgroundColor": "rgba(134, 131, 229, var(--tw-bg-opacity))",
    "::placeholder": {
      "--tw-placeholder-opacity": "1",
      "color": "rgba(134, 131, 229, var(--tw-placeholder-opacity))"
    },
    ":hover, :focus": {
      "borderColor": "transparent",
      "--tw-bg-opacity": "0.3"
    }
  };
  return react.jsx("div", {
    className: className
  }, label && react.jsx("label", {
    htmlFor: id,
    css: ["display:block;font-size:0.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgba(68, 68, 68, var(--tw-text-opacity));text-transform:none;margin-bottom:0.25rem;", variant === "brand-dark" && !disabled && {
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
    }, process.env.NODE_ENV === "production" ? "" : ";label:Input;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgSW5wdXQgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICBpbnB1dENsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhcmlhbnQsXG4gICAgICB2YWx1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGxhYmVsLFxuICAgICAgaWQsXG4gICAgICBlcnJvcixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgLi4ucmVzdFxuICAgIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbb25DaGFuZ2VdXG4gICAgKTtcblxuICAgIGNvbnN0IGJyYW5kRGFya1N0eWxlcyA9IHR3YGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIGJnLWJyYW5kLW1lbHJvc2UgYmctb3BhY2l0eS0yMCBwbGFjZWhvbGRlci1icmFuZC1tZWxyb3NlIGhvY3VzOihib3JkZXItdHJhbnNwYXJlbnQgYmctb3BhY2l0eS0zMClgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgdHc9XCJibG9jayB0ZXh0LXNtIGxlYWRpbmctNSBmb250LW1lZGl1bSB0ZXh0LWFjY2VudC1zaXggbm9ybWFsLWNhc2UgbWItMVwiXG4gICAgICAgICAgICBodG1sRm9yPXtpZH1cbiAgICAgICAgICAgIGNzcz17W3ZhcmlhbnQgPT09IFwiYnJhbmQtZGFya1wiICYmICFkaXNhYmxlZCAmJiB0d2B0ZXh0LXdoaXRlYF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgdHc9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLy8gUmVhY3QgZG9lcyBub3QgcGFzcyBkZWZhdWx0VmFsdWUgY2hhbmdlcyB0byB0aGUgRE9NIGFmdGVyIGluaXRpYWwgcmVuZGVyXG4gICAgICAgICAgICAvLyBodHRwczovL3JlYWN0anMub3JnL2RvY3MvdW5jb250cm9sbGVkLWNvbXBvbmVudHMuaHRtbCNkZWZhdWx0LXZhbHVlc1xuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgIGFyaWEtcmVxdWlyZWQ9eyEhbGFiZWx9XG4gICAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhZXJyb3J9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgdHdgYmxvY2sgdy1mdWxsIHJvdW5kZWQgcC0yIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIGVhc2UtaW4tb3V0IHNtOnRleHQtc20gc206bGVhZGluZy01IGJvcmRlciBzaGFkb3ctc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMCBmb250LWZhbWlseVtpbmhlcml0XWAsXG4gICAgICAgICAgICAgIGlucHV0Q2xhc3NOYW1lICYmIGlucHV0Q2xhc3NOYW1lLFxuICAgICAgICAgICAgICAhZXJyb3IgJiZcbiAgICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIHRleHQtZm9yZWdyb3VuZCBob2N1czpib3JkZXItYWNjZW50LWZpdmUgcGxhY2Vob2xkZXItYWNjZW50LWZpdmVgLFxuICAgICAgICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1hY2NlbnQtZml2ZSBiZy1iYWNrZ3JvdW5kIGN1cnNvci1ub3QtYWxsb3dlZCBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHZhcmlhbnQgPT09IFwiYnJhbmRcIiAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1icmFuZC11diBob2N1czpib3JkZXItYnJhbmQtdXYgcGxhY2Vob2xkZXItYWNjZW50LWZvdXJgLFxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiYgdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiYgYnJhbmREYXJrU3R5bGVzLFxuICAgICAgICAgICAgICBlcnJvciAmJlxuICAgICAgICAgICAgICAgIHR3YHRleHQtZXJyb3IgYm9yZGVyLWVycm9yIGhvY3VzOmJvcmRlci1lcnJvciBwbGFjZWhvbGRlci1lcnJvcmAsXG4gICAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiYgW1xuICAgICAgICAgICAgICAgICAgYnJhbmREYXJrU3R5bGVzLFxuICAgICAgICAgICAgICAgICAgYGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL21heGlob3N0LWFzc2V0cy5zMy1zYS1lYXN0LTEuYW1hem9uYXdzLmNvbS9tZXRhbC11aS9lcnJvci1pY29uLnN2Zyk7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogOXB4O2AsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cbklucHV0LnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBpbnB1dENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoW1wiYnJhbmRcIiwgXCJicmFuZC1kYXJrXCJdKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19 */", process.env.NODE_ENV === "production" ? "" : ";label:Input;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgSW5wdXQgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICBpbnB1dENsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhcmlhbnQsXG4gICAgICB2YWx1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGxhYmVsLFxuICAgICAgaWQsXG4gICAgICBlcnJvcixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgLi4ucmVzdFxuICAgIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbb25DaGFuZ2VdXG4gICAgKTtcblxuICAgIGNvbnN0IGJyYW5kRGFya1N0eWxlcyA9IHR3YGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIGJnLWJyYW5kLW1lbHJvc2UgYmctb3BhY2l0eS0yMCBwbGFjZWhvbGRlci1icmFuZC1tZWxyb3NlIGhvY3VzOihib3JkZXItdHJhbnNwYXJlbnQgYmctb3BhY2l0eS0zMClgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgdHc9XCJibG9jayB0ZXh0LXNtIGxlYWRpbmctNSBmb250LW1lZGl1bSB0ZXh0LWFjY2VudC1zaXggbm9ybWFsLWNhc2UgbWItMVwiXG4gICAgICAgICAgICBodG1sRm9yPXtpZH1cbiAgICAgICAgICAgIGNzcz17W3ZhcmlhbnQgPT09IFwiYnJhbmQtZGFya1wiICYmICFkaXNhYmxlZCAmJiB0d2B0ZXh0LXdoaXRlYF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgdHc9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLy8gUmVhY3QgZG9lcyBub3QgcGFzcyBkZWZhdWx0VmFsdWUgY2hhbmdlcyB0byB0aGUgRE9NIGFmdGVyIGluaXRpYWwgcmVuZGVyXG4gICAgICAgICAgICAvLyBodHRwczovL3JlYWN0anMub3JnL2RvY3MvdW5jb250cm9sbGVkLWNvbXBvbmVudHMuaHRtbCNkZWZhdWx0LXZhbHVlc1xuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgIGFyaWEtcmVxdWlyZWQ9eyEhbGFiZWx9XG4gICAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhZXJyb3J9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgdHdgYmxvY2sgdy1mdWxsIHJvdW5kZWQgcC0yIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIGVhc2UtaW4tb3V0IHNtOnRleHQtc20gc206bGVhZGluZy01IGJvcmRlciBzaGFkb3ctc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMCBmb250LWZhbWlseVtpbmhlcml0XWAsXG4gICAgICAgICAgICAgIGlucHV0Q2xhc3NOYW1lICYmIGlucHV0Q2xhc3NOYW1lLFxuICAgICAgICAgICAgICAhZXJyb3IgJiZcbiAgICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIHRleHQtZm9yZWdyb3VuZCBob2N1czpib3JkZXItYWNjZW50LWZpdmUgcGxhY2Vob2xkZXItYWNjZW50LWZpdmVgLFxuICAgICAgICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1hY2NlbnQtZml2ZSBiZy1iYWNrZ3JvdW5kIGN1cnNvci1ub3QtYWxsb3dlZCBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHZhcmlhbnQgPT09IFwiYnJhbmRcIiAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1icmFuZC11diBob2N1czpib3JkZXItYnJhbmQtdXYgcGxhY2Vob2xkZXItYWNjZW50LWZvdXJgLFxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiYgdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiYgYnJhbmREYXJrU3R5bGVzLFxuICAgICAgICAgICAgICBlcnJvciAmJlxuICAgICAgICAgICAgICAgIHR3YHRleHQtZXJyb3IgYm9yZGVyLWVycm9yIGhvY3VzOmJvcmRlci1lcnJvciBwbGFjZWhvbGRlci1lcnJvcmAsXG4gICAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiYgW1xuICAgICAgICAgICAgICAgICAgYnJhbmREYXJrU3R5bGVzLFxuICAgICAgICAgICAgICAgICAgYGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL21heGlob3N0LWFzc2V0cy5zMy1zYS1lYXN0LTEuYW1hem9uYXdzLmNvbS9tZXRhbC11aS9lcnJvci1pY29uLnN2Zyk7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogOXB4O2AsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cbklucHV0LnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBpbnB1dENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoW1wiYnJhbmRcIiwgXCJicmFuZC1kYXJrXCJdKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19 */"]
  }, label), react.jsx("div", {
    css: _ref
  }, react.jsx("input", _extends({
    id: id,
    ref: ref,
    onChange: handleChange // React does not pass defaultValue changes to the DOM after initial render
    // https://reactjs.org/docs/uncontrolled-components.html#default-values
    ,
    defaultValue: defaultValue,
    "aria-label": label,
    "aria-required": !!label,
    "aria-invalid": !!error,
    disabled: disabled,
    value: value,
    css: ["transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;display:block;width:100%;border-radius:5px;padding:0.5rem;border-width:1px;--tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);}font-family:inherit;@media (min-width: 640px){font-size:0.875rem;line-height:1.25rem;}", inputClassName && inputClassName, !error && !disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(0, 0, 0, var(--tw-text-opacity))",
      ":hover, :focus": {
        "--tw-border-opacity": "1",
        "borderColor": "rgba(102, 102, 102, var(--tw-border-opacity))"
      },
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(102, 102, 102, var(--tw-placeholder-opacity))"
      }
    }, disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(102, 102, 102, var(--tw-text-opacity))",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(250, 251, 255, var(--tw-bg-opacity))",
      "cursor": "not-allowed",
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(102, 102, 102, var(--tw-placeholder-opacity))"
      }
    }, !disabled && variant === "brand" && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(99, 89, 249, var(--tw-text-opacity))",
      ":hover, :focus": {
        "--tw-border-opacity": "1",
        "borderColor": "rgba(99, 89, 249, var(--tw-border-opacity))"
      },
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(136, 136, 136, var(--tw-placeholder-opacity))"
      }
    }, !disabled && variant === "brand-dark" && brandDarkStyles, error && {
      "--tw-text-opacity": "1",
      "color": "rgba(238, 0, 0, var(--tw-text-opacity))",
      "--tw-border-opacity": "1",
      "borderColor": "rgba(238, 0, 0, var(--tw-border-opacity))",
      ":hover, :focus": {
        "--tw-border-opacity": "1",
        "borderColor": "rgba(238, 0, 0, var(--tw-border-opacity))"
      },
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(238, 0, 0, var(--tw-placeholder-opacity))"
      }
    }, error && variant === "brand-dark" && [brandDarkStyles, `background-image: url(https://maxihost-assets.s3-sa-east-1.amazonaws.com/metal-ui/error-icon.svg);background-repeat: no-repeat;background-position-x: calc(100% - 16px);
                background-position-y: 9px;`], process.env.NODE_ENV === "production" ? "" : ";label:Input;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgSW5wdXQgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICBpbnB1dENsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhcmlhbnQsXG4gICAgICB2YWx1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGxhYmVsLFxuICAgICAgaWQsXG4gICAgICBlcnJvcixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgLi4ucmVzdFxuICAgIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbb25DaGFuZ2VdXG4gICAgKTtcblxuICAgIGNvbnN0IGJyYW5kRGFya1N0eWxlcyA9IHR3YGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIGJnLWJyYW5kLW1lbHJvc2UgYmctb3BhY2l0eS0yMCBwbGFjZWhvbGRlci1icmFuZC1tZWxyb3NlIGhvY3VzOihib3JkZXItdHJhbnNwYXJlbnQgYmctb3BhY2l0eS0zMClgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgdHc9XCJibG9jayB0ZXh0LXNtIGxlYWRpbmctNSBmb250LW1lZGl1bSB0ZXh0LWFjY2VudC1zaXggbm9ybWFsLWNhc2UgbWItMVwiXG4gICAgICAgICAgICBodG1sRm9yPXtpZH1cbiAgICAgICAgICAgIGNzcz17W3ZhcmlhbnQgPT09IFwiYnJhbmQtZGFya1wiICYmICFkaXNhYmxlZCAmJiB0d2B0ZXh0LXdoaXRlYF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgdHc9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLy8gUmVhY3QgZG9lcyBub3QgcGFzcyBkZWZhdWx0VmFsdWUgY2hhbmdlcyB0byB0aGUgRE9NIGFmdGVyIGluaXRpYWwgcmVuZGVyXG4gICAgICAgICAgICAvLyBodHRwczovL3JlYWN0anMub3JnL2RvY3MvdW5jb250cm9sbGVkLWNvbXBvbmVudHMuaHRtbCNkZWZhdWx0LXZhbHVlc1xuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgIGFyaWEtcmVxdWlyZWQ9eyEhbGFiZWx9XG4gICAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhZXJyb3J9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgdHdgYmxvY2sgdy1mdWxsIHJvdW5kZWQgcC0yIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIGVhc2UtaW4tb3V0IHNtOnRleHQtc20gc206bGVhZGluZy01IGJvcmRlciBzaGFkb3ctc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMCBmb250LWZhbWlseVtpbmhlcml0XWAsXG4gICAgICAgICAgICAgIGlucHV0Q2xhc3NOYW1lICYmIGlucHV0Q2xhc3NOYW1lLFxuICAgICAgICAgICAgICAhZXJyb3IgJiZcbiAgICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIHRleHQtZm9yZWdyb3VuZCBob2N1czpib3JkZXItYWNjZW50LWZpdmUgcGxhY2Vob2xkZXItYWNjZW50LWZpdmVgLFxuICAgICAgICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1hY2NlbnQtZml2ZSBiZy1iYWNrZ3JvdW5kIGN1cnNvci1ub3QtYWxsb3dlZCBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHZhcmlhbnQgPT09IFwiYnJhbmRcIiAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1icmFuZC11diBob2N1czpib3JkZXItYnJhbmQtdXYgcGxhY2Vob2xkZXItYWNjZW50LWZvdXJgLFxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiYgdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiYgYnJhbmREYXJrU3R5bGVzLFxuICAgICAgICAgICAgICBlcnJvciAmJlxuICAgICAgICAgICAgICAgIHR3YHRleHQtZXJyb3IgYm9yZGVyLWVycm9yIGhvY3VzOmJvcmRlci1lcnJvciBwbGFjZWhvbGRlci1lcnJvcmAsXG4gICAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiYgW1xuICAgICAgICAgICAgICAgICAgYnJhbmREYXJrU3R5bGVzLFxuICAgICAgICAgICAgICAgICAgYGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL21heGlob3N0LWFzc2V0cy5zMy1zYS1lYXN0LTEuYW1hem9uYXdzLmNvbS9tZXRhbC11aS9lcnJvci1pY29uLnN2Zyk7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogOXB4O2AsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cbklucHV0LnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBpbnB1dENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoW1wiYnJhbmRcIiwgXCJicmFuZC1kYXJrXCJdKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19 */", process.env.NODE_ENV === "production" ? "" : ";label:Input;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgSW5wdXQgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICBpbnB1dENsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhcmlhbnQsXG4gICAgICB2YWx1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGxhYmVsLFxuICAgICAgaWQsXG4gICAgICBlcnJvcixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgLi4ucmVzdFxuICAgIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbb25DaGFuZ2VdXG4gICAgKTtcblxuICAgIGNvbnN0IGJyYW5kRGFya1N0eWxlcyA9IHR3YGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIGJnLWJyYW5kLW1lbHJvc2UgYmctb3BhY2l0eS0yMCBwbGFjZWhvbGRlci1icmFuZC1tZWxyb3NlIGhvY3VzOihib3JkZXItdHJhbnNwYXJlbnQgYmctb3BhY2l0eS0zMClgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgdHc9XCJibG9jayB0ZXh0LXNtIGxlYWRpbmctNSBmb250LW1lZGl1bSB0ZXh0LWFjY2VudC1zaXggbm9ybWFsLWNhc2UgbWItMVwiXG4gICAgICAgICAgICBodG1sRm9yPXtpZH1cbiAgICAgICAgICAgIGNzcz17W3ZhcmlhbnQgPT09IFwiYnJhbmQtZGFya1wiICYmICFkaXNhYmxlZCAmJiB0d2B0ZXh0LXdoaXRlYF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgdHc9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLy8gUmVhY3QgZG9lcyBub3QgcGFzcyBkZWZhdWx0VmFsdWUgY2hhbmdlcyB0byB0aGUgRE9NIGFmdGVyIGluaXRpYWwgcmVuZGVyXG4gICAgICAgICAgICAvLyBodHRwczovL3JlYWN0anMub3JnL2RvY3MvdW5jb250cm9sbGVkLWNvbXBvbmVudHMuaHRtbCNkZWZhdWx0LXZhbHVlc1xuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgIGFyaWEtcmVxdWlyZWQ9eyEhbGFiZWx9XG4gICAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhZXJyb3J9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgdHdgYmxvY2sgdy1mdWxsIHJvdW5kZWQgcC0yIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIGVhc2UtaW4tb3V0IHNtOnRleHQtc20gc206bGVhZGluZy01IGJvcmRlciBzaGFkb3ctc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMCBmb250LWZhbWlseVtpbmhlcml0XWAsXG4gICAgICAgICAgICAgIGlucHV0Q2xhc3NOYW1lICYmIGlucHV0Q2xhc3NOYW1lLFxuICAgICAgICAgICAgICAhZXJyb3IgJiZcbiAgICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIHRleHQtZm9yZWdyb3VuZCBob2N1czpib3JkZXItYWNjZW50LWZpdmUgcGxhY2Vob2xkZXItYWNjZW50LWZpdmVgLFxuICAgICAgICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1hY2NlbnQtZml2ZSBiZy1iYWNrZ3JvdW5kIGN1cnNvci1ub3QtYWxsb3dlZCBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHZhcmlhbnQgPT09IFwiYnJhbmRcIiAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1icmFuZC11diBob2N1czpib3JkZXItYnJhbmQtdXYgcGxhY2Vob2xkZXItYWNjZW50LWZvdXJgLFxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiYgdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiYgYnJhbmREYXJrU3R5bGVzLFxuICAgICAgICAgICAgICBlcnJvciAmJlxuICAgICAgICAgICAgICAgIHR3YHRleHQtZXJyb3IgYm9yZGVyLWVycm9yIGhvY3VzOmJvcmRlci1lcnJvciBwbGFjZWhvbGRlci1lcnJvcmAsXG4gICAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiYgW1xuICAgICAgICAgICAgICAgICAgYnJhbmREYXJrU3R5bGVzLFxuICAgICAgICAgICAgICAgICAgYGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL21heGlob3N0LWFzc2V0cy5zMy1zYS1lYXN0LTEuYW1hem9uYXdzLmNvbS9tZXRhbC11aS9lcnJvci1pY29uLnN2Zyk7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogOXB4O2AsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cbklucHV0LnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBpbnB1dENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoW1wiYnJhbmRcIiwgXCJicmFuZC1kYXJrXCJdKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19 */"]
  }, rest))));
});
Input.propTypes = {
  onChange: PropTypes__default['default'].func,
  inputClassName: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  value: PropTypes__default['default'].string,
  defaultValue: PropTypes__default['default'].string,
  label: PropTypes__default['default'].string,
  id: PropTypes__default['default'].string,
  error: PropTypes__default['default'].bool,
  disabled: PropTypes__default['default'].bool,
  variant: PropTypes__default['default'].oneOf(["brand", "brand-dark"])
};

module.exports = Input;
