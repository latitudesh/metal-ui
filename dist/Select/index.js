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

const Select = /*#__PURE__*/React__default['default'].forwardRef(({
  onChange,
  selectClassName,
  options,
  className,
  value,
  label,
  id,
  disabled,
  error,
  variant,
  ...rest
}, ref) => {
  const [internalValue, setInternalValue] = React.useState("");
  React.useEffect(() => {
    setInternalValue(value);
  }, [value]);
  const handleChange = React.useCallback(event => {
    setInternalValue(event.target.value);

    if (onChange) {
      onChange(event.target.value);
    }
  }, [setInternalValue, onChange]);
  return react.jsx("div", {
    className: className
  }, label && react.jsx("label", {
    css: ["display:block;font-size:0.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgba(68, 68, 68, var(--tw-text-opacity));text-transform:none;margin-bottom:0.25rem;", variant == "brand-dark" && !disabled && {
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
    }, process.env.NODE_ENV === "production" ? "" : ";label:Select;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgU2VsZWN0ID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgc2VsZWN0Q2xhc3NOYW1lLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhbHVlLFxuICAgICAgbGFiZWwsXG4gICAgICBpZCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgZXJyb3IsXG4gICAgICB2YXJpYW50LFxuICAgICAgLi4ucmVzdFxuICAgIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IFtpbnRlcm5hbFZhbHVlLCBzZXRJbnRlcm5hbFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHNldEludGVybmFsVmFsdWUodmFsdWUpO1xuICAgIH0sIFt2YWx1ZV0pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0SW50ZXJuYWxWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW3NldEludGVybmFsVmFsdWUsIG9uQ2hhbmdlXVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICB0dz1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gbGVhZGluZy01IHRleHQtYWNjZW50LXNpeCBub3JtYWwtY2FzZSBtYi0xXCJcbiAgICAgICAgICAgIGNzcz17W3ZhcmlhbnQgPT0gXCJicmFuZC1kYXJrXCIgJiYgIWRpc2FibGVkICYmIHR3YHRleHQtd2hpdGVgXX1cbiAgICAgICAgICAgIGh0bWxGb3I9e2lkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgdmFsdWU9e2ludGVybmFsVmFsdWV9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgdHdgYm9yZGVyIHJvdW5kZWQgc2hhZG93LXNtIGJsb2NrIHctZnVsbCBwbC0zIHByLTEwIHB5LTIgdGV4dC1iYXNlIGxlYWRpbmctNiBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIGVhc2UtaW4tb3V0IGZvbnQtZmFtaWx5W2luaGVyaXRdYCxcbiAgICAgICAgICAgICAgc2VsZWN0Q2xhc3NOYW1lICYmIHNlbGVjdENsYXNzTmFtZSxcbiAgICAgICAgICAgICAgIWVycm9yICYmXG4gICAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWZvcmVncm91bmQgaG9jdXM6Ym9yZGVyLWFjY2VudC1maXZlIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgICAgZXJyb3IgJiZcbiAgICAgICAgICAgICAgICB0d2B0ZXh0LWVycm9yIGJvcmRlci1lcnJvciBob2N1czpib3JkZXItZXJyb3IgcGxhY2Vob2xkZXItZXJyb3JgLFxuICAgICAgICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1hY2NlbnQtZml2ZSBiZy1iYWNrZ3JvdW5kIGN1cnNvci1ub3QtYWxsb3dlZCBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgIHZhcmlhbnQgPT0gXCJicmFuZFwiICYmXG4gICAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICAgIHZhcmlhbnQgPT0gXCJicmFuZC1kYXJrXCIgJiZcbiAgICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgICB0d2Bib3JkZXItdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSBiZy1icmFuZC1tZWxyb3NlIGJnLW9wYWNpdHktMjAgcGxhY2Vob2xkZXItYnJhbmQtbWVscm9zZSBob2N1czooYm9yZGVyLXRyYW5zcGFyZW50IGJnLW9wYWNpdHktMzApYCxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7b3B0aW9ucy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAgICBrZXk9e2Ake2l0ZW0udmFsdWV9LSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXRlbS5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuKTtcblxuU2VsZWN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgb3B0aW9uczogW10sXG59O1xuXG5TZWxlY3QucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJicmFuZFwiLCBcImJyYW5kLWRhcmtcIl0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0O1xuIl19 */", process.env.NODE_ENV === "production" ? "" : ";label:Select;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgU2VsZWN0ID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgc2VsZWN0Q2xhc3NOYW1lLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhbHVlLFxuICAgICAgbGFiZWwsXG4gICAgICBpZCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgZXJyb3IsXG4gICAgICB2YXJpYW50LFxuICAgICAgLi4ucmVzdFxuICAgIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IFtpbnRlcm5hbFZhbHVlLCBzZXRJbnRlcm5hbFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHNldEludGVybmFsVmFsdWUodmFsdWUpO1xuICAgIH0sIFt2YWx1ZV0pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0SW50ZXJuYWxWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW3NldEludGVybmFsVmFsdWUsIG9uQ2hhbmdlXVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICB0dz1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gbGVhZGluZy01IHRleHQtYWNjZW50LXNpeCBub3JtYWwtY2FzZSBtYi0xXCJcbiAgICAgICAgICAgIGNzcz17W3ZhcmlhbnQgPT0gXCJicmFuZC1kYXJrXCIgJiYgIWRpc2FibGVkICYmIHR3YHRleHQtd2hpdGVgXX1cbiAgICAgICAgICAgIGh0bWxGb3I9e2lkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgdmFsdWU9e2ludGVybmFsVmFsdWV9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgdHdgYm9yZGVyIHJvdW5kZWQgc2hhZG93LXNtIGJsb2NrIHctZnVsbCBwbC0zIHByLTEwIHB5LTIgdGV4dC1iYXNlIGxlYWRpbmctNiBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIGVhc2UtaW4tb3V0IGZvbnQtZmFtaWx5W2luaGVyaXRdYCxcbiAgICAgICAgICAgICAgc2VsZWN0Q2xhc3NOYW1lICYmIHNlbGVjdENsYXNzTmFtZSxcbiAgICAgICAgICAgICAgIWVycm9yICYmXG4gICAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWZvcmVncm91bmQgaG9jdXM6Ym9yZGVyLWFjY2VudC1maXZlIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgICAgZXJyb3IgJiZcbiAgICAgICAgICAgICAgICB0d2B0ZXh0LWVycm9yIGJvcmRlci1lcnJvciBob2N1czpib3JkZXItZXJyb3IgcGxhY2Vob2xkZXItZXJyb3JgLFxuICAgICAgICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1hY2NlbnQtZml2ZSBiZy1iYWNrZ3JvdW5kIGN1cnNvci1ub3QtYWxsb3dlZCBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgIHZhcmlhbnQgPT0gXCJicmFuZFwiICYmXG4gICAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICAgIHZhcmlhbnQgPT0gXCJicmFuZC1kYXJrXCIgJiZcbiAgICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgICB0d2Bib3JkZXItdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSBiZy1icmFuZC1tZWxyb3NlIGJnLW9wYWNpdHktMjAgcGxhY2Vob2xkZXItYnJhbmQtbWVscm9zZSBob2N1czooYm9yZGVyLXRyYW5zcGFyZW50IGJnLW9wYWNpdHktMzApYCxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7b3B0aW9ucy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAgICBrZXk9e2Ake2l0ZW0udmFsdWV9LSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXRlbS5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuKTtcblxuU2VsZWN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgb3B0aW9uczogW10sXG59O1xuXG5TZWxlY3QucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJicmFuZFwiLCBcImJyYW5kLWRhcmtcIl0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0O1xuIl19 */"],
    htmlFor: id
  }, label), react.jsx("div", {
    className: "relative"
  }, react.jsx("select", _extends({
    id: id,
    ref: ref,
    onChange: handleChange,
    value: internalValue,
    disabled: disabled,
    css: ["transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;border-width:1px;border-radius:5px;--tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);display:block;width:100%;padding-left:0.75rem;padding-right:2.5rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:1rem;line-height:1.5rem;:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);}font-family:inherit;@media (min-width: 640px){font-size:0.875rem;line-height:1.25rem;}", selectClassName && selectClassName, !error && !disabled && {
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
      "--tw-text-opacity": "1",
      "color": "rgba(102, 102, 102, var(--tw-text-opacity))",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(244, 245, 247, var(--tw-bg-opacity))",
      "cursor": "not-allowed",
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        "color": "rgba(102, 102, 102, var(--tw-placeholder-opacity))"
      }
    }, variant == "brand" && !disabled && {
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
    }, variant == "brand-dark" && !disabled && {
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
    }, process.env.NODE_ENV === "production" ? "" : ";label:Select;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgU2VsZWN0ID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgc2VsZWN0Q2xhc3NOYW1lLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhbHVlLFxuICAgICAgbGFiZWwsXG4gICAgICBpZCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgZXJyb3IsXG4gICAgICB2YXJpYW50LFxuICAgICAgLi4ucmVzdFxuICAgIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IFtpbnRlcm5hbFZhbHVlLCBzZXRJbnRlcm5hbFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHNldEludGVybmFsVmFsdWUodmFsdWUpO1xuICAgIH0sIFt2YWx1ZV0pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0SW50ZXJuYWxWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW3NldEludGVybmFsVmFsdWUsIG9uQ2hhbmdlXVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICB0dz1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gbGVhZGluZy01IHRleHQtYWNjZW50LXNpeCBub3JtYWwtY2FzZSBtYi0xXCJcbiAgICAgICAgICAgIGNzcz17W3ZhcmlhbnQgPT0gXCJicmFuZC1kYXJrXCIgJiYgIWRpc2FibGVkICYmIHR3YHRleHQtd2hpdGVgXX1cbiAgICAgICAgICAgIGh0bWxGb3I9e2lkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgdmFsdWU9e2ludGVybmFsVmFsdWV9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgdHdgYm9yZGVyIHJvdW5kZWQgc2hhZG93LXNtIGJsb2NrIHctZnVsbCBwbC0zIHByLTEwIHB5LTIgdGV4dC1iYXNlIGxlYWRpbmctNiBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIGVhc2UtaW4tb3V0IGZvbnQtZmFtaWx5W2luaGVyaXRdYCxcbiAgICAgICAgICAgICAgc2VsZWN0Q2xhc3NOYW1lICYmIHNlbGVjdENsYXNzTmFtZSxcbiAgICAgICAgICAgICAgIWVycm9yICYmXG4gICAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWZvcmVncm91bmQgaG9jdXM6Ym9yZGVyLWFjY2VudC1maXZlIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgICAgZXJyb3IgJiZcbiAgICAgICAgICAgICAgICB0d2B0ZXh0LWVycm9yIGJvcmRlci1lcnJvciBob2N1czpib3JkZXItZXJyb3IgcGxhY2Vob2xkZXItZXJyb3JgLFxuICAgICAgICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1hY2NlbnQtZml2ZSBiZy1iYWNrZ3JvdW5kIGN1cnNvci1ub3QtYWxsb3dlZCBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgIHZhcmlhbnQgPT0gXCJicmFuZFwiICYmXG4gICAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICAgIHZhcmlhbnQgPT0gXCJicmFuZC1kYXJrXCIgJiZcbiAgICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgICB0d2Bib3JkZXItdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSBiZy1icmFuZC1tZWxyb3NlIGJnLW9wYWNpdHktMjAgcGxhY2Vob2xkZXItYnJhbmQtbWVscm9zZSBob2N1czooYm9yZGVyLXRyYW5zcGFyZW50IGJnLW9wYWNpdHktMzApYCxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7b3B0aW9ucy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAgICBrZXk9e2Ake2l0ZW0udmFsdWV9LSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXRlbS5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuKTtcblxuU2VsZWN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgb3B0aW9uczogW10sXG59O1xuXG5TZWxlY3QucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJicmFuZFwiLCBcImJyYW5kLWRhcmtcIl0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0O1xuIl19 */", process.env.NODE_ENV === "production" ? "" : ";label:Select;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgU2VsZWN0ID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgc2VsZWN0Q2xhc3NOYW1lLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhbHVlLFxuICAgICAgbGFiZWwsXG4gICAgICBpZCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgZXJyb3IsXG4gICAgICB2YXJpYW50LFxuICAgICAgLi4ucmVzdFxuICAgIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IFtpbnRlcm5hbFZhbHVlLCBzZXRJbnRlcm5hbFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHNldEludGVybmFsVmFsdWUodmFsdWUpO1xuICAgIH0sIFt2YWx1ZV0pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0SW50ZXJuYWxWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW3NldEludGVybmFsVmFsdWUsIG9uQ2hhbmdlXVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICB0dz1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gbGVhZGluZy01IHRleHQtYWNjZW50LXNpeCBub3JtYWwtY2FzZSBtYi0xXCJcbiAgICAgICAgICAgIGNzcz17W3ZhcmlhbnQgPT0gXCJicmFuZC1kYXJrXCIgJiYgIWRpc2FibGVkICYmIHR3YHRleHQtd2hpdGVgXX1cbiAgICAgICAgICAgIGh0bWxGb3I9e2lkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgdmFsdWU9e2ludGVybmFsVmFsdWV9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgdHdgYm9yZGVyIHJvdW5kZWQgc2hhZG93LXNtIGJsb2NrIHctZnVsbCBwbC0zIHByLTEwIHB5LTIgdGV4dC1iYXNlIGxlYWRpbmctNiBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIGVhc2UtaW4tb3V0IGZvbnQtZmFtaWx5W2luaGVyaXRdYCxcbiAgICAgICAgICAgICAgc2VsZWN0Q2xhc3NOYW1lICYmIHNlbGVjdENsYXNzTmFtZSxcbiAgICAgICAgICAgICAgIWVycm9yICYmXG4gICAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWZvcmVncm91bmQgaG9jdXM6Ym9yZGVyLWFjY2VudC1maXZlIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgICAgZXJyb3IgJiZcbiAgICAgICAgICAgICAgICB0d2B0ZXh0LWVycm9yIGJvcmRlci1lcnJvciBob2N1czpib3JkZXItZXJyb3IgcGxhY2Vob2xkZXItZXJyb3JgLFxuICAgICAgICAgICAgICBkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1hY2NlbnQtZml2ZSBiZy1iYWNrZ3JvdW5kIGN1cnNvci1ub3QtYWxsb3dlZCBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgIHZhcmlhbnQgPT0gXCJicmFuZFwiICYmXG4gICAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICAgIHZhcmlhbnQgPT0gXCJicmFuZC1kYXJrXCIgJiZcbiAgICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgICB0d2Bib3JkZXItdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSBiZy1icmFuZC1tZWxyb3NlIGJnLW9wYWNpdHktMjAgcGxhY2Vob2xkZXItYnJhbmQtbWVscm9zZSBob2N1czooYm9yZGVyLXRyYW5zcGFyZW50IGJnLW9wYWNpdHktMzApYCxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7b3B0aW9ucy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAgICBrZXk9e2Ake2l0ZW0udmFsdWV9LSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXRlbS5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuKTtcblxuU2VsZWN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgb3B0aW9uczogW10sXG59O1xuXG5TZWxlY3QucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJicmFuZFwiLCBcImJyYW5kLWRhcmtcIl0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0O1xuIl19 */"]
  }, rest), options.map((item, index) => react.jsx("option", {
    key: `${item.value}-${index}`,
    value: item.value,
    disabled: item.disabled
  }, item.name)))));
});
Select.defaultProps = {
  options: []
};
Select.propTypes = {
  onChange: PropTypes__default['default'].func,
  selectClassName: PropTypes__default['default'].string,
  options: PropTypes__default['default'].array,
  className: PropTypes__default['default'].string,
  value: PropTypes__default['default'].string,
  label: PropTypes__default['default'].string,
  id: PropTypes__default['default'].string.isRequired,
  error: PropTypes__default['default'].bool,
  disabled: PropTypes__default['default'].bool,
  variant: PropTypes__default['default'].oneOf(["brand", "brand-dark"])
};

module.exports = Select;