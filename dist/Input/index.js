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
const ErrorSvgDataURI = "data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='nonzero' fill='none'%3E%3Ccircle fill='%236359F9' cx='10' cy='10' r='10'/%3E%3Cpath d='M9 6.848c0-.909.4-1.515 1-1.515s1 .606 1 1.515v3.637c0 .909-.4 1.515-1 1.515s-1-.606-1-1.515V6.848Zm1 7.819c-.583 0-1-.417-1-1 0-.584.417-1 1-1s1 .416 1 1c0 .583-.417 1-1 1Z' fill='%232B223C'/%3E%3C/g%3E%3C/svg%3E%0A";

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
    }, process.env.NODE_ENV === "production" ? "" : ";label:Input;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmNvbnN0IEVycm9yU3ZnRGF0YVVSSSA9XG4gIFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGwtcnVsZT0nbm9uemVybycgZmlsbD0nbm9uZSclM0UlM0NjaXJjbGUgZmlsbD0nJTIzNjM1OUY5JyBjeD0nMTAnIGN5PScxMCcgcj0nMTAnLyUzRSUzQ3BhdGggZD0nTTkgNi44NDhjMC0uOTA5LjQtMS41MTUgMS0xLjUxNXMxIC42MDYgMSAxLjUxNXYzLjYzN2MwIC45MDktLjQgMS41MTUtMSAxLjUxNXMtMS0uNjA2LTEtMS41MTVWNi44NDhabTEgNy44MTljLS41ODMgMC0xLS40MTctMS0xIDAtLjU4NC40MTctMSAxLTFzMSAuNDE2IDEgMWMwIC41ODMtLjQxNyAxLTEgMVonIGZpbGw9JyUyMzJCMjIzQycvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFJTBBXCI7XG5cbmNvbnN0IElucHV0ID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgaW5wdXRDbGFzc05hbWUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB2YXJpYW50LFxuICAgICAgdmFsdWUsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBsYWJlbCxcbiAgICAgIGlkLFxuICAgICAgZXJyb3IsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAgIChldmVudCkgPT4ge1xuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtvbkNoYW5nZV1cbiAgICApO1xuXG4gICAgY29uc3QgYnJhbmREYXJrU3R5bGVzID0gdHdgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgYmctYnJhbmQtbWVscm9zZSBiZy1vcGFjaXR5LTIwIHBsYWNlaG9sZGVyLWJyYW5kLW1lbHJvc2UgaG9jdXM6KGJvcmRlci10cmFuc3BhcmVudCBiZy1vcGFjaXR5LTMwKWA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICB0dz1cImJsb2NrIHRleHQtc20gbGVhZGluZy01IGZvbnQtbWVkaXVtIHRleHQtYWNjZW50LXNpeCBub3JtYWwtY2FzZSBtYi0xXCJcbiAgICAgICAgICAgIGh0bWxGb3I9e2lkfVxuICAgICAgICAgICAgY3NzPXtbdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiYgIWRpc2FibGVkICYmIHR3YHRleHQtd2hpdGVgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiB0dz1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvLyBSZWFjdCBkb2VzIG5vdCBwYXNzIGRlZmF1bHRWYWx1ZSBjaGFuZ2VzIHRvIHRoZSBET00gYWZ0ZXIgaW5pdGlhbCByZW5kZXJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy91bmNvbnRyb2xsZWQtY29tcG9uZW50cy5odG1sI2RlZmF1bHQtdmFsdWVzXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgYXJpYS1yZXF1aXJlZD17ISFsYWJlbH1cbiAgICAgICAgICAgIGFyaWEtaW52YWxpZD17ISFlcnJvcn1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICB0d2BibG9jayB3LWZ1bGwgcm91bmRlZCBwLTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXQgc206dGV4dC1zbSBzbTpsZWFkaW5nLTUgYm9yZGVyIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvbnQtZmFtaWx5W2luaGVyaXRdYCxcbiAgICAgICAgICAgICAgaW5wdXRDbGFzc05hbWUgJiYgaW5wdXRDbGFzc05hbWUsXG4gICAgICAgICAgICAgICFlcnJvciAmJlxuICAgICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1mb3JlZ3JvdW5kIGhvY3VzOmJvcmRlci1hY2NlbnQtZml2ZSBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgIGRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWFjY2VudC1maXZlIGJnLWJhY2tncm91bmQgY3Vyc29yLW5vdC1hbGxvd2VkIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZFwiICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJiB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgICAgdHdgdGV4dC1lcnJvciBib3JkZXItZXJyb3IgaG9jdXM6Ym9yZGVyLWVycm9yIHBsYWNlaG9sZGVyLWVycm9yYCxcbiAgICAgICAgICAgICAgZXJyb3IgJiZcbiAgICAgICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBbXG4gICAgICAgICAgICAgICAgICBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgICAgICBgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtFcnJvclN2Z0RhdGFVUkl9XCIpO2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbi14OiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDUwJTtgLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4pO1xuXG5JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgaW5wdXRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFtcImJyYW5kXCIsIFwiYnJhbmQtZGFya1wiXSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ== */", process.env.NODE_ENV === "production" ? "" : ";label:Input;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmNvbnN0IEVycm9yU3ZnRGF0YVVSSSA9XG4gIFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGwtcnVsZT0nbm9uemVybycgZmlsbD0nbm9uZSclM0UlM0NjaXJjbGUgZmlsbD0nJTIzNjM1OUY5JyBjeD0nMTAnIGN5PScxMCcgcj0nMTAnLyUzRSUzQ3BhdGggZD0nTTkgNi44NDhjMC0uOTA5LjQtMS41MTUgMS0xLjUxNXMxIC42MDYgMSAxLjUxNXYzLjYzN2MwIC45MDktLjQgMS41MTUtMSAxLjUxNXMtMS0uNjA2LTEtMS41MTVWNi44NDhabTEgNy44MTljLS41ODMgMC0xLS40MTctMS0xIDAtLjU4NC40MTctMSAxLTFzMSAuNDE2IDEgMWMwIC41ODMtLjQxNyAxLTEgMVonIGZpbGw9JyUyMzJCMjIzQycvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFJTBBXCI7XG5cbmNvbnN0IElucHV0ID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgaW5wdXRDbGFzc05hbWUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB2YXJpYW50LFxuICAgICAgdmFsdWUsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBsYWJlbCxcbiAgICAgIGlkLFxuICAgICAgZXJyb3IsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAgIChldmVudCkgPT4ge1xuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtvbkNoYW5nZV1cbiAgICApO1xuXG4gICAgY29uc3QgYnJhbmREYXJrU3R5bGVzID0gdHdgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgYmctYnJhbmQtbWVscm9zZSBiZy1vcGFjaXR5LTIwIHBsYWNlaG9sZGVyLWJyYW5kLW1lbHJvc2UgaG9jdXM6KGJvcmRlci10cmFuc3BhcmVudCBiZy1vcGFjaXR5LTMwKWA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICB0dz1cImJsb2NrIHRleHQtc20gbGVhZGluZy01IGZvbnQtbWVkaXVtIHRleHQtYWNjZW50LXNpeCBub3JtYWwtY2FzZSBtYi0xXCJcbiAgICAgICAgICAgIGh0bWxGb3I9e2lkfVxuICAgICAgICAgICAgY3NzPXtbdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiYgIWRpc2FibGVkICYmIHR3YHRleHQtd2hpdGVgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiB0dz1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvLyBSZWFjdCBkb2VzIG5vdCBwYXNzIGRlZmF1bHRWYWx1ZSBjaGFuZ2VzIHRvIHRoZSBET00gYWZ0ZXIgaW5pdGlhbCByZW5kZXJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy91bmNvbnRyb2xsZWQtY29tcG9uZW50cy5odG1sI2RlZmF1bHQtdmFsdWVzXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgYXJpYS1yZXF1aXJlZD17ISFsYWJlbH1cbiAgICAgICAgICAgIGFyaWEtaW52YWxpZD17ISFlcnJvcn1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICB0d2BibG9jayB3LWZ1bGwgcm91bmRlZCBwLTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXQgc206dGV4dC1zbSBzbTpsZWFkaW5nLTUgYm9yZGVyIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvbnQtZmFtaWx5W2luaGVyaXRdYCxcbiAgICAgICAgICAgICAgaW5wdXRDbGFzc05hbWUgJiYgaW5wdXRDbGFzc05hbWUsXG4gICAgICAgICAgICAgICFlcnJvciAmJlxuICAgICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1mb3JlZ3JvdW5kIGhvY3VzOmJvcmRlci1hY2NlbnQtZml2ZSBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgIGRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWFjY2VudC1maXZlIGJnLWJhY2tncm91bmQgY3Vyc29yLW5vdC1hbGxvd2VkIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZFwiICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJiB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgICAgdHdgdGV4dC1lcnJvciBib3JkZXItZXJyb3IgaG9jdXM6Ym9yZGVyLWVycm9yIHBsYWNlaG9sZGVyLWVycm9yYCxcbiAgICAgICAgICAgICAgZXJyb3IgJiZcbiAgICAgICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBbXG4gICAgICAgICAgICAgICAgICBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgICAgICBgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtFcnJvclN2Z0RhdGFVUkl9XCIpO2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbi14OiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDUwJTtgLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4pO1xuXG5JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgaW5wdXRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFtcImJyYW5kXCIsIFwiYnJhbmQtZGFya1wiXSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ== */"]
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
      "backgroundColor": "rgba(244, 245, 247, var(--tw-bg-opacity))",
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
    }, error && variant === "brand-dark" && [brandDarkStyles, `background-image: url("${ErrorSvgDataURI}");background-repeat: no-repeat;background-position-x: calc(100% - 16px);
                background-position-y: 50%;`], process.env.NODE_ENV === "production" ? "" : ";label:Input;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmNvbnN0IEVycm9yU3ZnRGF0YVVSSSA9XG4gIFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGwtcnVsZT0nbm9uemVybycgZmlsbD0nbm9uZSclM0UlM0NjaXJjbGUgZmlsbD0nJTIzNjM1OUY5JyBjeD0nMTAnIGN5PScxMCcgcj0nMTAnLyUzRSUzQ3BhdGggZD0nTTkgNi44NDhjMC0uOTA5LjQtMS41MTUgMS0xLjUxNXMxIC42MDYgMSAxLjUxNXYzLjYzN2MwIC45MDktLjQgMS41MTUtMSAxLjUxNXMtMS0uNjA2LTEtMS41MTVWNi44NDhabTEgNy44MTljLS41ODMgMC0xLS40MTctMS0xIDAtLjU4NC40MTctMSAxLTFzMSAuNDE2IDEgMWMwIC41ODMtLjQxNyAxLTEgMVonIGZpbGw9JyUyMzJCMjIzQycvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFJTBBXCI7XG5cbmNvbnN0IElucHV0ID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgaW5wdXRDbGFzc05hbWUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB2YXJpYW50LFxuICAgICAgdmFsdWUsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBsYWJlbCxcbiAgICAgIGlkLFxuICAgICAgZXJyb3IsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAgIChldmVudCkgPT4ge1xuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtvbkNoYW5nZV1cbiAgICApO1xuXG4gICAgY29uc3QgYnJhbmREYXJrU3R5bGVzID0gdHdgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgYmctYnJhbmQtbWVscm9zZSBiZy1vcGFjaXR5LTIwIHBsYWNlaG9sZGVyLWJyYW5kLW1lbHJvc2UgaG9jdXM6KGJvcmRlci10cmFuc3BhcmVudCBiZy1vcGFjaXR5LTMwKWA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICB0dz1cImJsb2NrIHRleHQtc20gbGVhZGluZy01IGZvbnQtbWVkaXVtIHRleHQtYWNjZW50LXNpeCBub3JtYWwtY2FzZSBtYi0xXCJcbiAgICAgICAgICAgIGh0bWxGb3I9e2lkfVxuICAgICAgICAgICAgY3NzPXtbdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiYgIWRpc2FibGVkICYmIHR3YHRleHQtd2hpdGVgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiB0dz1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvLyBSZWFjdCBkb2VzIG5vdCBwYXNzIGRlZmF1bHRWYWx1ZSBjaGFuZ2VzIHRvIHRoZSBET00gYWZ0ZXIgaW5pdGlhbCByZW5kZXJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy91bmNvbnRyb2xsZWQtY29tcG9uZW50cy5odG1sI2RlZmF1bHQtdmFsdWVzXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgYXJpYS1yZXF1aXJlZD17ISFsYWJlbH1cbiAgICAgICAgICAgIGFyaWEtaW52YWxpZD17ISFlcnJvcn1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICB0d2BibG9jayB3LWZ1bGwgcm91bmRlZCBwLTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXQgc206dGV4dC1zbSBzbTpsZWFkaW5nLTUgYm9yZGVyIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvbnQtZmFtaWx5W2luaGVyaXRdYCxcbiAgICAgICAgICAgICAgaW5wdXRDbGFzc05hbWUgJiYgaW5wdXRDbGFzc05hbWUsXG4gICAgICAgICAgICAgICFlcnJvciAmJlxuICAgICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1mb3JlZ3JvdW5kIGhvY3VzOmJvcmRlci1hY2NlbnQtZml2ZSBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgIGRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWFjY2VudC1maXZlIGJnLWJhY2tncm91bmQgY3Vyc29yLW5vdC1hbGxvd2VkIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZFwiICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJiB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgICAgdHdgdGV4dC1lcnJvciBib3JkZXItZXJyb3IgaG9jdXM6Ym9yZGVyLWVycm9yIHBsYWNlaG9sZGVyLWVycm9yYCxcbiAgICAgICAgICAgICAgZXJyb3IgJiZcbiAgICAgICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBbXG4gICAgICAgICAgICAgICAgICBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgICAgICBgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtFcnJvclN2Z0RhdGFVUkl9XCIpO2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbi14OiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDUwJTtgLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4pO1xuXG5JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgaW5wdXRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFtcImJyYW5kXCIsIFwiYnJhbmQtZGFya1wiXSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ== */", process.env.NODE_ENV === "production" ? "" : ";label:Input;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmNvbnN0IEVycm9yU3ZnRGF0YVVSSSA9XG4gIFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGwtcnVsZT0nbm9uemVybycgZmlsbD0nbm9uZSclM0UlM0NjaXJjbGUgZmlsbD0nJTIzNjM1OUY5JyBjeD0nMTAnIGN5PScxMCcgcj0nMTAnLyUzRSUzQ3BhdGggZD0nTTkgNi44NDhjMC0uOTA5LjQtMS41MTUgMS0xLjUxNXMxIC42MDYgMSAxLjUxNXYzLjYzN2MwIC45MDktLjQgMS41MTUtMSAxLjUxNXMtMS0uNjA2LTEtMS41MTVWNi44NDhabTEgNy44MTljLS41ODMgMC0xLS40MTctMS0xIDAtLjU4NC40MTctMSAxLTFzMSAuNDE2IDEgMWMwIC41ODMtLjQxNyAxLTEgMVonIGZpbGw9JyUyMzJCMjIzQycvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFJTBBXCI7XG5cbmNvbnN0IElucHV0ID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgaW5wdXRDbGFzc05hbWUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB2YXJpYW50LFxuICAgICAgdmFsdWUsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBsYWJlbCxcbiAgICAgIGlkLFxuICAgICAgZXJyb3IsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAgIChldmVudCkgPT4ge1xuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtvbkNoYW5nZV1cbiAgICApO1xuXG4gICAgY29uc3QgYnJhbmREYXJrU3R5bGVzID0gdHdgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgYmctYnJhbmQtbWVscm9zZSBiZy1vcGFjaXR5LTIwIHBsYWNlaG9sZGVyLWJyYW5kLW1lbHJvc2UgaG9jdXM6KGJvcmRlci10cmFuc3BhcmVudCBiZy1vcGFjaXR5LTMwKWA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICB0dz1cImJsb2NrIHRleHQtc20gbGVhZGluZy01IGZvbnQtbWVkaXVtIHRleHQtYWNjZW50LXNpeCBub3JtYWwtY2FzZSBtYi0xXCJcbiAgICAgICAgICAgIGh0bWxGb3I9e2lkfVxuICAgICAgICAgICAgY3NzPXtbdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiYgIWRpc2FibGVkICYmIHR3YHRleHQtd2hpdGVgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiB0dz1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvLyBSZWFjdCBkb2VzIG5vdCBwYXNzIGRlZmF1bHRWYWx1ZSBjaGFuZ2VzIHRvIHRoZSBET00gYWZ0ZXIgaW5pdGlhbCByZW5kZXJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy91bmNvbnRyb2xsZWQtY29tcG9uZW50cy5odG1sI2RlZmF1bHQtdmFsdWVzXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgYXJpYS1yZXF1aXJlZD17ISFsYWJlbH1cbiAgICAgICAgICAgIGFyaWEtaW52YWxpZD17ISFlcnJvcn1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICB0d2BibG9jayB3LWZ1bGwgcm91bmRlZCBwLTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXQgc206dGV4dC1zbSBzbTpsZWFkaW5nLTUgYm9yZGVyIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvbnQtZmFtaWx5W2luaGVyaXRdYCxcbiAgICAgICAgICAgICAgaW5wdXRDbGFzc05hbWUgJiYgaW5wdXRDbGFzc05hbWUsXG4gICAgICAgICAgICAgICFlcnJvciAmJlxuICAgICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1mb3JlZ3JvdW5kIGhvY3VzOmJvcmRlci1hY2NlbnQtZml2ZSBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgIGRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWFjY2VudC1maXZlIGJnLWJhY2tncm91bmQgY3Vyc29yLW5vdC1hbGxvd2VkIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZFwiICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJiB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgICAgdHdgdGV4dC1lcnJvciBib3JkZXItZXJyb3IgaG9jdXM6Ym9yZGVyLWVycm9yIHBsYWNlaG9sZGVyLWVycm9yYCxcbiAgICAgICAgICAgICAgZXJyb3IgJiZcbiAgICAgICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBbXG4gICAgICAgICAgICAgICAgICBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgICAgICBgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtFcnJvclN2Z0RhdGFVUkl9XCIpO2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbi14OiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDUwJTtgLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4pO1xuXG5JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgaW5wdXRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFtcImJyYW5kXCIsIFwiYnJhbmQtZGFya1wiXSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ== */"]
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
