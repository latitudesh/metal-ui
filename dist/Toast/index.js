'use strict';

var react$1 = require('@emotion/react');
var react = require('react');
var reactDom = require('react-dom');
var PropTypes = require('prop-types');
var classNames = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

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
  name: "1scx0rr",
  styles: "--tw-text-opacity:1;color:rgba(68, 68, 68, var(--tw-text-opacity))"
} : {
  name: "zpfb4-XIcon",
  styles: "--tw-text-opacity:1;color:rgba(68, 68, 68, var(--tw-text-opacity));label:XIcon;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function XIcon() {
  return react$1.jsx("svg", {
    fill: "none",
    css: _ref,
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    role: "button",
    width: "16px",
    height: "16px"
  }, react$1.jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M6 18L18 6M6 6l12 12"
  }));
}

const ToastContent = ({
  id,
  children
}) => {
  if (typeof window === "undefined") return null;
  let element = react.useRef(document.getElementById(id) || document.createElement("div"));
  react.useEffect(() => {
    if (!document.getElementById(id)) {
      element.current.id = id;
      document.body.appendChild(element.current);
    }

    return () => {
      if (element.current.parentElement) {
        element.current.parentElement.removeChild(element.current);
      }
    };
  }, [id]);
  return /*#__PURE__*/reactDom.createPortal(children, element.current);
};

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "1066lcq",
  styles: "display:flex;justify-content:space-between;align-items:center"
} : {
  name: "1inv719-Toast",
  styles: "display:flex;justify-content:space-between;align-items:center;label:Toast;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref3 = process.env.NODE_ENV === "production" ? {
  name: "1bvnjn9",
  styles: "width:91.666667%"
} : {
  name: "mz3lik-Toast",
  styles: "width:91.666667%;label:Toast;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

const Toast = ({
  text,
  error,
  success,
  showCloseIcon,
  hide,
  dismissTime = 6000,
  onCloseToast
}) => {
  const [open, setOpen] = react.useState(true);
  const [showToast, setShowToast] = react.useState(hide);

  const closeToast = () => {
    setShowToast(false);
    setOpen(false);

    if (onCloseToast) {
      onCloseToast();
    }
  };

  react.useEffect(() => {
    if (dismissTime) {
      const interval = setInterval(() => {
        closeToast();
      }, dismissTime);
      return () => {
        clearInterval(interval);
      };
    }
  }, [dismissTime]);
  react.useEffect(() => {
    setTimeout(() => {
      setShowToast(true);
    }, 10);
  }, []);

  if (open) {
    return react$1.jsx(ToastContent, {
      id: "toast-content"
    }, react$1.jsx("div", {
      css: ["position:fixed;z-index:50;width:25%;max-width:100%;padding:1.25rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));bottom:0px;border-radius:0.375rem;--tw-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);opacity:0;", error && {
        "--tw-text-opacity": "1",
        "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(238, 0, 0, var(--tw-bg-opacity))"
      }, success && {
        "--tw-text-opacity": "1",
        "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(99, 89, 249, var(--tw-bg-opacity))"
      }, showToast && {
        "opacity": "1"
      }, process.env.NODE_ENV === "production" ? "" : ";label:Toast;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStGVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi4vVHlwb2dyYXBoeS9UZXh0XCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuZnVuY3Rpb24gWEljb24oKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgdHc9XCJ0ZXh0LWFjY2VudC1zaXhcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICB3aWR0aD1cIjE2cHhcIlxuICAgICAgaGVpZ2h0PVwiMTZweFwiXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiXG4gICAgICA+PC9wYXRoPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5jb25zdCBUb2FzdENvbnRlbnQgPSAoeyBpZCwgY2hpbGRyZW4gfSkgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIG51bGw7XG5cbiAgbGV0IGVsZW1lbnQgPSB1c2VSZWYoXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7XG4gICAgICBlbGVtZW50LmN1cnJlbnQuaWQgPSBpZDtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudC5jdXJyZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuY3VycmVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY3VycmVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuY3VycmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW2lkXSk7XG5cbiAgcmV0dXJuIGNyZWF0ZVBvcnRhbChjaGlsZHJlbiwgZWxlbWVudC5jdXJyZW50KTtcbn07XG5cbmNvbnN0IFRvYXN0ID0gKHtcbiAgdGV4dCxcbiAgZXJyb3IsXG4gIHN1Y2Nlc3MsXG4gIHNob3dDbG9zZUljb24sXG4gIGhpZGUsXG4gIGRpc21pc3NUaW1lID0gNjAwMCxcbiAgb25DbG9zZVRvYXN0LFxufSkgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3Nob3dUb2FzdCwgc2V0U2hvd1RvYXN0XSA9IHVzZVN0YXRlKGhpZGUpO1xuXG4gIGNvbnN0IGNsb3NlVG9hc3QgPSAoKSA9PiB7XG4gICAgc2V0U2hvd1RvYXN0KGZhbHNlKTtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICBpZiAob25DbG9zZVRvYXN0KSB7XG4gICAgICBvbkNsb3NlVG9hc3QoKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGlzbWlzc1RpbWUpIHtcbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBjbG9zZVRvYXN0KCk7XG4gICAgICB9LCBkaXNtaXNzVGltZSk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFtkaXNtaXNzVGltZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTaG93VG9hc3QodHJ1ZSk7XG4gICAgfSwgMTApO1xuICB9LCBbXSk7XG5cbiAgaWYgKG9wZW4pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRvYXN0Q29udGVudCBpZD1cInRvYXN0LWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgdHdgZml4ZWQgei01MCB3LTEvNCBtYXgtdy1mdWxsIHAtNSBiZy13aGl0ZSBib3R0b20tMCByb3VuZGVkLW1kIHNoYWRvdy14bCBvcGFjaXR5LTBgLFxuICAgICAgICAgICAgZXJyb3IgJiYgdHdgdGV4dC13aGl0ZSBiZy1lcnJvcmAsXG4gICAgICAgICAgICBzdWNjZXNzICYmIHR3YHRleHQtd2hpdGUgYmctc3VjY2Vzc2AsXG4gICAgICAgICAgICBzaG93VG9hc3QgJiYgdHdgb3BhY2l0eS0xMDBgLFxuICAgICAgICAgIF19XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHJpZ2h0OiAyMCxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGBhbGwgLjRzIGN1YmljLWJlemllciguMywwLDAsMSlgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzaG93VG9hc3QgJiYgYHRyYW5zbGF0ZSgwLCAtMjBweClgLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHR3PVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IHR3PVwidy0xMS8xMlwiPlxuICAgICAgICAgICAgICA8VGV4dCBzbWFsbCBjb2xvcj17KHN1Y2Nlc3MgfHwgZXJyb3IpICYmIHR3YHRleHQtd2hpdGVgfT5cbiAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7c2hvd0Nsb3NlSWNvbiAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gY2xvc2VUb2FzdCgpfT5cbiAgICAgICAgICAgICAgICA8WEljb24gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVG9hc3RDb250ZW50PlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cblRvYXN0LnByb3BUeXBlcyA9IHtcbiAgc3VjY2VzczogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dDbG9zZUljb246IFByb3BUeXBlcy5ib29sLFxuICBoaWRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaXNtaXNzVGltZTogUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0O1xuIl19 */", process.env.NODE_ENV === "production" ? "" : ";label:Toast;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStGVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi4vVHlwb2dyYXBoeS9UZXh0XCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuZnVuY3Rpb24gWEljb24oKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgdHc9XCJ0ZXh0LWFjY2VudC1zaXhcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICB3aWR0aD1cIjE2cHhcIlxuICAgICAgaGVpZ2h0PVwiMTZweFwiXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiXG4gICAgICA+PC9wYXRoPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5jb25zdCBUb2FzdENvbnRlbnQgPSAoeyBpZCwgY2hpbGRyZW4gfSkgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIG51bGw7XG5cbiAgbGV0IGVsZW1lbnQgPSB1c2VSZWYoXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7XG4gICAgICBlbGVtZW50LmN1cnJlbnQuaWQgPSBpZDtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudC5jdXJyZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuY3VycmVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY3VycmVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuY3VycmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW2lkXSk7XG5cbiAgcmV0dXJuIGNyZWF0ZVBvcnRhbChjaGlsZHJlbiwgZWxlbWVudC5jdXJyZW50KTtcbn07XG5cbmNvbnN0IFRvYXN0ID0gKHtcbiAgdGV4dCxcbiAgZXJyb3IsXG4gIHN1Y2Nlc3MsXG4gIHNob3dDbG9zZUljb24sXG4gIGhpZGUsXG4gIGRpc21pc3NUaW1lID0gNjAwMCxcbiAgb25DbG9zZVRvYXN0LFxufSkgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3Nob3dUb2FzdCwgc2V0U2hvd1RvYXN0XSA9IHVzZVN0YXRlKGhpZGUpO1xuXG4gIGNvbnN0IGNsb3NlVG9hc3QgPSAoKSA9PiB7XG4gICAgc2V0U2hvd1RvYXN0KGZhbHNlKTtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICBpZiAob25DbG9zZVRvYXN0KSB7XG4gICAgICBvbkNsb3NlVG9hc3QoKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGlzbWlzc1RpbWUpIHtcbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBjbG9zZVRvYXN0KCk7XG4gICAgICB9LCBkaXNtaXNzVGltZSk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFtkaXNtaXNzVGltZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTaG93VG9hc3QodHJ1ZSk7XG4gICAgfSwgMTApO1xuICB9LCBbXSk7XG5cbiAgaWYgKG9wZW4pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRvYXN0Q29udGVudCBpZD1cInRvYXN0LWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgdHdgZml4ZWQgei01MCB3LTEvNCBtYXgtdy1mdWxsIHAtNSBiZy13aGl0ZSBib3R0b20tMCByb3VuZGVkLW1kIHNoYWRvdy14bCBvcGFjaXR5LTBgLFxuICAgICAgICAgICAgZXJyb3IgJiYgdHdgdGV4dC13aGl0ZSBiZy1lcnJvcmAsXG4gICAgICAgICAgICBzdWNjZXNzICYmIHR3YHRleHQtd2hpdGUgYmctc3VjY2Vzc2AsXG4gICAgICAgICAgICBzaG93VG9hc3QgJiYgdHdgb3BhY2l0eS0xMDBgLFxuICAgICAgICAgIF19XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHJpZ2h0OiAyMCxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGBhbGwgLjRzIGN1YmljLWJlemllciguMywwLDAsMSlgLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzaG93VG9hc3QgJiYgYHRyYW5zbGF0ZSgwLCAtMjBweClgLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHR3PVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IHR3PVwidy0xMS8xMlwiPlxuICAgICAgICAgICAgICA8VGV4dCBzbWFsbCBjb2xvcj17KHN1Y2Nlc3MgfHwgZXJyb3IpICYmIHR3YHRleHQtd2hpdGVgfT5cbiAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7c2hvd0Nsb3NlSWNvbiAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gY2xvc2VUb2FzdCgpfT5cbiAgICAgICAgICAgICAgICA8WEljb24gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVG9hc3RDb250ZW50PlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cblRvYXN0LnByb3BUeXBlcyA9IHtcbiAgc3VjY2VzczogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dDbG9zZUljb246IFByb3BUeXBlcy5ib29sLFxuICBoaWRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaXNtaXNzVGltZTogUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0O1xuIl19 */"],
      style: {
        right: 20,
        transition: `all .4s cubic-bezier(.3,0,0,1)`,
        transform: showToast && `translate(0, -20px)`
      }
    }, react$1.jsx("div", {
      css: _ref2
    }, react$1.jsx("div", {
      css: _ref3
    }, react$1.jsx(Text, {
      small: true,
      color: (success || error) && {
        "--tw-text-opacity": "1",
        "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
      }
    }, text)), showCloseIcon && react$1.jsx("div", {
      onClick: () => closeToast()
    }, react$1.jsx(XIcon, null)))));
  } else {
    return null;
  }
};

Toast.propTypes = {
  success: PropTypes__default['default'].bool,
  showCloseIcon: PropTypes__default['default'].bool,
  hide: PropTypes__default['default'].bool,
  error: PropTypes__default['default'].bool,
  text: PropTypes__default['default'].string,
  dismissTime: PropTypes__default['default'].number
};

module.exports = Toast;
