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

const Textarea = /*#__PURE__*/React__default["default"].forwardRef(({
  onChange,
  textareaClassName,
  className,
  value,
  defaultValue,
  label,
  id,
  error,
  disabled,
  rows,
  variant,
  resize,
  ...rest
}, ref) => {
  const handleChange = React.useCallback(event => {
    if (onChange) {
      onChange(event.target.value);
    }
  }, [onChange]);
  return react.jsx("div", {
    className: className
  }, label && react.jsx("label", {
    htmlFor: id,
    css: ["display:block;font-size:0.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgba(68, 68, 68, var(--tw-text-opacity));margin-bottom:0.25rem;text-transform:none;", variant === "brand-dark" && !disabled && {
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
    }, process.env.NODE_ENV === "production" ? "" : ";label:Textarea;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgVGV4dGFyZWEgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICB0ZXh0YXJlYUNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhbHVlLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgbGFiZWwsXG4gICAgICBpZCxcbiAgICAgIGVycm9yLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByb3dzLFxuICAgICAgdmFyaWFudCxcbiAgICAgIHJlc2l6ZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbb25DaGFuZ2VdXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIHR3PVwiYmxvY2sgdGV4dC1zbSBsZWFkaW5nLTUgZm9udC1tZWRpdW0gdGV4dC1hY2NlbnQtc2l4IG1iLTEgbm9ybWFsLWNhc2VcIlxuICAgICAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgICAgICBjc3M9e1t2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiAhZGlzYWJsZWQgJiYgdHdgdGV4dC13aGl0ZWBdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICApfVxuXG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICByb3dzPXtyb3dzfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XG4gICAgICAgICAgYXJpYS1yZXF1aXJlZD17ISFsYWJlbH1cbiAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhZXJyb3J9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgIHR3YGJsb2NrIHctZnVsbCByb3VuZGVkIHAtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCBlYXNlLWluLW91dCBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNiBib3JkZXIgc2hhZG93LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZm9udC1mYW1pbHlbaW5oZXJpdF1gLFxuICAgICAgICAgICAgdGV4dGFyZWFDbGFzc05hbWUgJiYgdGV4dGFyZWFDbGFzc05hbWUsXG4gICAgICAgICAgICAhZXJyb3IgJiZcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1mb3JlZ3JvdW5kIGhvY3VzOmJvcmRlci1mb3JlZ3JvdW5kIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgIHR3YHRleHQtZXJyb3IgYm9yZGVyLWVycm9yIGhvY3VzOmJvcmRlci1lcnJvciBwbGFjZWhvbGRlci1lcnJvcmAsXG4gICAgICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIGJnLWJhY2tncm91bmQgY3Vyc29yLW5vdC1hbGxvd2VkIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgIHZhcmlhbnQgPT09IFwiYnJhbmRcIiAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgdHdgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgYmctYnJhbmQtbWVscm9zZSBiZy1vcGFjaXR5LTIwIHBsYWNlaG9sZGVyLWJyYW5kLW1lbHJvc2UgaG9jdXM6KGJvcmRlci10cmFuc3BhcmVudCBiZy1vcGFjaXR5LTMwKWAsXG4gICAgICAgICAgICByZXNpemUgJiYgdHdgcmVzaXplLW5vbmVgXG4gICAgICAgICAgXX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cblRleHRhcmVhLmRlZmF1bHRQcm9wcyA9IHtcbiAgcmVzaXplOiB0cnVlLFxuICByb3dzOiAzLFxufTtcblxuVGV4dGFyZWEucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRleHRhcmVhQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgcm93czogUHJvcFR5cGVzLm51bWJlcixcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFtcImJyYW5kXCIsIFwiYnJhbmQtZGFya1wiXSksXG4gIHJlc2l6ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWE7XG4iXX0= */", process.env.NODE_ENV === "production" ? "" : ";label:Textarea;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgVGV4dGFyZWEgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICB0ZXh0YXJlYUNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhbHVlLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgbGFiZWwsXG4gICAgICBpZCxcbiAgICAgIGVycm9yLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByb3dzLFxuICAgICAgdmFyaWFudCxcbiAgICAgIHJlc2l6ZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbb25DaGFuZ2VdXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIHR3PVwiYmxvY2sgdGV4dC1zbSBsZWFkaW5nLTUgZm9udC1tZWRpdW0gdGV4dC1hY2NlbnQtc2l4IG1iLTEgbm9ybWFsLWNhc2VcIlxuICAgICAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgICAgICBjc3M9e1t2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiAhZGlzYWJsZWQgJiYgdHdgdGV4dC13aGl0ZWBdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICApfVxuXG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICByb3dzPXtyb3dzfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XG4gICAgICAgICAgYXJpYS1yZXF1aXJlZD17ISFsYWJlbH1cbiAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhZXJyb3J9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgIHR3YGJsb2NrIHctZnVsbCByb3VuZGVkIHAtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCBlYXNlLWluLW91dCBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNiBib3JkZXIgc2hhZG93LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZm9udC1mYW1pbHlbaW5oZXJpdF1gLFxuICAgICAgICAgICAgdGV4dGFyZWFDbGFzc05hbWUgJiYgdGV4dGFyZWFDbGFzc05hbWUsXG4gICAgICAgICAgICAhZXJyb3IgJiZcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1mb3JlZ3JvdW5kIGhvY3VzOmJvcmRlci1mb3JlZ3JvdW5kIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgIHR3YHRleHQtZXJyb3IgYm9yZGVyLWVycm9yIGhvY3VzOmJvcmRlci1lcnJvciBwbGFjZWhvbGRlci1lcnJvcmAsXG4gICAgICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIGJnLWJhY2tncm91bmQgY3Vyc29yLW5vdC1hbGxvd2VkIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgIHZhcmlhbnQgPT09IFwiYnJhbmRcIiAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgdHdgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgYmctYnJhbmQtbWVscm9zZSBiZy1vcGFjaXR5LTIwIHBsYWNlaG9sZGVyLWJyYW5kLW1lbHJvc2UgaG9jdXM6KGJvcmRlci10cmFuc3BhcmVudCBiZy1vcGFjaXR5LTMwKWAsXG4gICAgICAgICAgICByZXNpemUgJiYgdHdgcmVzaXplLW5vbmVgXG4gICAgICAgICAgXX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cblRleHRhcmVhLmRlZmF1bHRQcm9wcyA9IHtcbiAgcmVzaXplOiB0cnVlLFxuICByb3dzOiAzLFxufTtcblxuVGV4dGFyZWEucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRleHRhcmVhQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgcm93czogUHJvcFR5cGVzLm51bWJlcixcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFtcImJyYW5kXCIsIFwiYnJhbmQtZGFya1wiXSksXG4gIHJlc2l6ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWE7XG4iXX0= */"]
  }, label), react.jsx("textarea", _extends({
    id: id,
    ref: ref,
    rows: rows,
    onChange: handleChange,
    defaultValue: defaultValue,
    "aria-label": label,
    "aria-required": !!label,
    "aria-invalid": !!error,
    disabled: disabled,
    value: value,
    css: ["transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;display:block;width:100%;border-radius:5px;padding:0.5rem;border-width:1px;--tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);}font-family:inherit;@media (min-width: 640px){font-size:0.875rem;line-height:1.5rem;}", textareaClassName && textareaClassName, !error && !disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(0, 0, 0, var(--tw-text-opacity))",
      ":hover, :focus": {
        "--tw-border-opacity": "1",
        "borderColor": "rgba(0, 0, 0, var(--tw-border-opacity))"
      },
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(102, 102, 102, var(--tw-placeholder-opacity))"
      }
    }, error && {
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
    }, disabled && {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(234, 234, 234, var(--tw-border-opacity))",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(244, 245, 247, var(--tw-bg-opacity))",
      "cursor": "not-allowed",
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(102, 102, 102, var(--tw-placeholder-opacity))"
      }
    }, variant === "brand" && !disabled && {
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
    }, variant === "brand-dark" && !disabled && {
      "borderColor": "rgba(0, 0, 0, 0)",
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
      "--tw-bg-opacity": "0.2",
      "backgroundColor": "rgba(134, 131, 229, var(--tw-bg-opacity))",
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(134, 131, 229, var(--tw-placeholder-opacity))"
      },
      ":hover, :focus": {
        "borderColor": "rgba(0, 0, 0, 0)",
        "--tw-bg-opacity": "0.3"
      }
    }, resize && {
      "resize": "none"
    }, process.env.NODE_ENV === "production" ? "" : ";label:Textarea;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgVGV4dGFyZWEgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICB0ZXh0YXJlYUNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhbHVlLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgbGFiZWwsXG4gICAgICBpZCxcbiAgICAgIGVycm9yLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByb3dzLFxuICAgICAgdmFyaWFudCxcbiAgICAgIHJlc2l6ZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbb25DaGFuZ2VdXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIHR3PVwiYmxvY2sgdGV4dC1zbSBsZWFkaW5nLTUgZm9udC1tZWRpdW0gdGV4dC1hY2NlbnQtc2l4IG1iLTEgbm9ybWFsLWNhc2VcIlxuICAgICAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgICAgICBjc3M9e1t2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiAhZGlzYWJsZWQgJiYgdHdgdGV4dC13aGl0ZWBdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICApfVxuXG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICByb3dzPXtyb3dzfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XG4gICAgICAgICAgYXJpYS1yZXF1aXJlZD17ISFsYWJlbH1cbiAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhZXJyb3J9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgIHR3YGJsb2NrIHctZnVsbCByb3VuZGVkIHAtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCBlYXNlLWluLW91dCBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNiBib3JkZXIgc2hhZG93LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZm9udC1mYW1pbHlbaW5oZXJpdF1gLFxuICAgICAgICAgICAgdGV4dGFyZWFDbGFzc05hbWUgJiYgdGV4dGFyZWFDbGFzc05hbWUsXG4gICAgICAgICAgICAhZXJyb3IgJiZcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1mb3JlZ3JvdW5kIGhvY3VzOmJvcmRlci1mb3JlZ3JvdW5kIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgIHR3YHRleHQtZXJyb3IgYm9yZGVyLWVycm9yIGhvY3VzOmJvcmRlci1lcnJvciBwbGFjZWhvbGRlci1lcnJvcmAsXG4gICAgICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIGJnLWJhY2tncm91bmQgY3Vyc29yLW5vdC1hbGxvd2VkIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgIHZhcmlhbnQgPT09IFwiYnJhbmRcIiAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgdHdgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgYmctYnJhbmQtbWVscm9zZSBiZy1vcGFjaXR5LTIwIHBsYWNlaG9sZGVyLWJyYW5kLW1lbHJvc2UgaG9jdXM6KGJvcmRlci10cmFuc3BhcmVudCBiZy1vcGFjaXR5LTMwKWAsXG4gICAgICAgICAgICByZXNpemUgJiYgdHdgcmVzaXplLW5vbmVgXG4gICAgICAgICAgXX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cblRleHRhcmVhLmRlZmF1bHRQcm9wcyA9IHtcbiAgcmVzaXplOiB0cnVlLFxuICByb3dzOiAzLFxufTtcblxuVGV4dGFyZWEucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRleHRhcmVhQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgcm93czogUHJvcFR5cGVzLm51bWJlcixcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFtcImJyYW5kXCIsIFwiYnJhbmQtZGFya1wiXSksXG4gIHJlc2l6ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWE7XG4iXX0= */", process.env.NODE_ENV === "production" ? "" : ";label:Textarea;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgVGV4dGFyZWEgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICB0ZXh0YXJlYUNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhbHVlLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgbGFiZWwsXG4gICAgICBpZCxcbiAgICAgIGVycm9yLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByb3dzLFxuICAgICAgdmFyaWFudCxcbiAgICAgIHJlc2l6ZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbb25DaGFuZ2VdXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIHR3PVwiYmxvY2sgdGV4dC1zbSBsZWFkaW5nLTUgZm9udC1tZWRpdW0gdGV4dC1hY2NlbnQtc2l4IG1iLTEgbm9ybWFsLWNhc2VcIlxuICAgICAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgICAgICBjc3M9e1t2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiAhZGlzYWJsZWQgJiYgdHdgdGV4dC13aGl0ZWBdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICApfVxuXG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICByb3dzPXtyb3dzfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XG4gICAgICAgICAgYXJpYS1yZXF1aXJlZD17ISFsYWJlbH1cbiAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhZXJyb3J9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgIHR3YGJsb2NrIHctZnVsbCByb3VuZGVkIHAtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCBlYXNlLWluLW91dCBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNiBib3JkZXIgc2hhZG93LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZm9udC1mYW1pbHlbaW5oZXJpdF1gLFxuICAgICAgICAgICAgdGV4dGFyZWFDbGFzc05hbWUgJiYgdGV4dGFyZWFDbGFzc05hbWUsXG4gICAgICAgICAgICAhZXJyb3IgJiZcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1mb3JlZ3JvdW5kIGhvY3VzOmJvcmRlci1mb3JlZ3JvdW5kIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgIHR3YHRleHQtZXJyb3IgYm9yZGVyLWVycm9yIGhvY3VzOmJvcmRlci1lcnJvciBwbGFjZWhvbGRlci1lcnJvcmAsXG4gICAgICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIGJnLWJhY2tncm91bmQgY3Vyc29yLW5vdC1hbGxvd2VkIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgIHZhcmlhbnQgPT09IFwiYnJhbmRcIiAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgdHdgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgYmctYnJhbmQtbWVscm9zZSBiZy1vcGFjaXR5LTIwIHBsYWNlaG9sZGVyLWJyYW5kLW1lbHJvc2UgaG9jdXM6KGJvcmRlci10cmFuc3BhcmVudCBiZy1vcGFjaXR5LTMwKWAsXG4gICAgICAgICAgICByZXNpemUgJiYgdHdgcmVzaXplLW5vbmVgXG4gICAgICAgICAgXX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cblRleHRhcmVhLmRlZmF1bHRQcm9wcyA9IHtcbiAgcmVzaXplOiB0cnVlLFxuICByb3dzOiAzLFxufTtcblxuVGV4dGFyZWEucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRleHRhcmVhQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgcm93czogUHJvcFR5cGVzLm51bWJlcixcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFtcImJyYW5kXCIsIFwiYnJhbmQtZGFya1wiXSksXG4gIHJlc2l6ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWE7XG4iXX0= */"]
  }, rest)));
});
Textarea.defaultProps = {
  resize: true,
  rows: 3
};
Textarea.propTypes = {
  onChange: PropTypes__default["default"].func,
  textareaClassName: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  value: PropTypes__default["default"].string,
  defaultValue: PropTypes__default["default"].string,
  label: PropTypes__default["default"].string,
  id: PropTypes__default["default"].string.isRequired,
  error: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  rows: PropTypes__default["default"].number,
  variant: PropTypes__default["default"].oneOf(["brand", "brand-dark"]),
  resize: PropTypes__default["default"].bool.isRequired
};

module.exports = Textarea;
