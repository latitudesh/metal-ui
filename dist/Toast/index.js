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
      }, process.env.NODE_ENV === "production" ? "" : ";label:Toast;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStGVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi4vVGV4dFwiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5cbmZ1bmN0aW9uIFhJY29uKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHR3PVwidGV4dC1hY2NlbnQtc2l4XCJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgd2lkdGg9XCIxNnB4XCJcbiAgICAgIGhlaWdodD1cIjE2cHhcIlxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICBkPVwiTTYgMThMMTggNk02IDZsMTIgMTJcIlxuICAgICAgPjwvcGF0aD5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuY29uc3QgVG9hc3RDb250ZW50ID0gKHsgaWQsIGNoaWxkcmVuIH0pID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBudWxsO1xuXG4gIGxldCBlbGVtZW50ID0gdXNlUmVmKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkge1xuICAgICAgZWxlbWVudC5jdXJyZW50LmlkID0gaWQ7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQuY3VycmVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmN1cnJlbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmN1cnJlbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmN1cnJlbnQpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtpZF0pO1xuXG4gIHJldHVybiBjcmVhdGVQb3J0YWwoY2hpbGRyZW4sIGVsZW1lbnQuY3VycmVudCk7XG59O1xuXG5jb25zdCBUb2FzdCA9ICh7XG4gIHRleHQsXG4gIGVycm9yLFxuICBzdWNjZXNzLFxuICBzaG93Q2xvc2VJY29uLFxuICBoaWRlLFxuICBkaXNtaXNzVGltZSA9IDYwMDAsXG4gIG9uQ2xvc2VUb2FzdCxcbn0pID0+IHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzaG93VG9hc3QsIHNldFNob3dUb2FzdF0gPSB1c2VTdGF0ZShoaWRlKTtcblxuICBjb25zdCBjbG9zZVRvYXN0ID0gKCkgPT4ge1xuICAgIHNldFNob3dUb2FzdChmYWxzZSk7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gICAgaWYgKG9uQ2xvc2VUb2FzdCkge1xuICAgICAgb25DbG9zZVRvYXN0KCk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRpc21pc3NUaW1lKSB7XG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgY2xvc2VUb2FzdCgpO1xuICAgICAgfSwgZGlzbWlzc1RpbWUpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbZGlzbWlzc1RpbWVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U2hvd1RvYXN0KHRydWUpO1xuICAgIH0sIDEwKTtcbiAgfSwgW10pO1xuXG4gIGlmIChvcGVuKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUb2FzdENvbnRlbnQgaWQ9XCJ0b2FzdC1jb250ZW50XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgIHR3YGZpeGVkIHotNTAgdy0xLzQgbWF4LXctZnVsbCBwLTUgYmctd2hpdGUgYm90dG9tLTAgcm91bmRlZC1tZCBzaGFkb3cteGwgb3BhY2l0eS0wYCxcbiAgICAgICAgICAgIGVycm9yICYmIHR3YHRleHQtd2hpdGUgYmctZXJyb3JgLFxuICAgICAgICAgICAgc3VjY2VzcyAmJiB0d2B0ZXh0LXdoaXRlIGJnLXN1Y2Nlc3NgLFxuICAgICAgICAgICAgc2hvd1RvYXN0ICYmIHR3YG9wYWNpdHktMTAwYCxcbiAgICAgICAgICBdfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICByaWdodDogMjAsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAuNHMgY3ViaWMtYmV6aWVyKC4zLDAsMCwxKVwiLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzaG93VG9hc3QgJiYgXCJ0cmFuc2xhdGUoMCwgLTIwcHgpXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgdHc9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgdHc9XCJ3LTExLzEyXCI+XG4gICAgICAgICAgICAgIDxUZXh0IHNtYWxsIGNvbG9yPXsoc3VjY2VzcyB8fCBlcnJvcikgJiYgXCJ0ZXh0LXdoaXRlXCJ9PlxuICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtzaG93Q2xvc2VJY29uICYmIChcbiAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBjbG9zZVRvYXN0KCl9PlxuICAgICAgICAgICAgICAgIDxYSWNvbiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Ub2FzdENvbnRlbnQ+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuVG9hc3QucHJvcFR5cGVzID0ge1xuICBzdWNjZXNzOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd0Nsb3NlSWNvbjogUHJvcFR5cGVzLmJvb2wsXG4gIGhpZGU6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpc21pc3NUaW1lOiBQcm9wVHlwZXMubnVtYmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9hc3Q7XG4iXX0= */", process.env.NODE_ENV === "production" ? "" : ";label:Toast;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStGVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi4vVGV4dFwiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5cbmZ1bmN0aW9uIFhJY29uKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHR3PVwidGV4dC1hY2NlbnQtc2l4XCJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgd2lkdGg9XCIxNnB4XCJcbiAgICAgIGhlaWdodD1cIjE2cHhcIlxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICBkPVwiTTYgMThMMTggNk02IDZsMTIgMTJcIlxuICAgICAgPjwvcGF0aD5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuY29uc3QgVG9hc3RDb250ZW50ID0gKHsgaWQsIGNoaWxkcmVuIH0pID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBudWxsO1xuXG4gIGxldCBlbGVtZW50ID0gdXNlUmVmKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkge1xuICAgICAgZWxlbWVudC5jdXJyZW50LmlkID0gaWQ7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQuY3VycmVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmN1cnJlbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmN1cnJlbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmN1cnJlbnQpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtpZF0pO1xuXG4gIHJldHVybiBjcmVhdGVQb3J0YWwoY2hpbGRyZW4sIGVsZW1lbnQuY3VycmVudCk7XG59O1xuXG5jb25zdCBUb2FzdCA9ICh7XG4gIHRleHQsXG4gIGVycm9yLFxuICBzdWNjZXNzLFxuICBzaG93Q2xvc2VJY29uLFxuICBoaWRlLFxuICBkaXNtaXNzVGltZSA9IDYwMDAsXG4gIG9uQ2xvc2VUb2FzdCxcbn0pID0+IHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzaG93VG9hc3QsIHNldFNob3dUb2FzdF0gPSB1c2VTdGF0ZShoaWRlKTtcblxuICBjb25zdCBjbG9zZVRvYXN0ID0gKCkgPT4ge1xuICAgIHNldFNob3dUb2FzdChmYWxzZSk7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gICAgaWYgKG9uQ2xvc2VUb2FzdCkge1xuICAgICAgb25DbG9zZVRvYXN0KCk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRpc21pc3NUaW1lKSB7XG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgY2xvc2VUb2FzdCgpO1xuICAgICAgfSwgZGlzbWlzc1RpbWUpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbZGlzbWlzc1RpbWVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U2hvd1RvYXN0KHRydWUpO1xuICAgIH0sIDEwKTtcbiAgfSwgW10pO1xuXG4gIGlmIChvcGVuKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUb2FzdENvbnRlbnQgaWQ9XCJ0b2FzdC1jb250ZW50XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgIHR3YGZpeGVkIHotNTAgdy0xLzQgbWF4LXctZnVsbCBwLTUgYmctd2hpdGUgYm90dG9tLTAgcm91bmRlZC1tZCBzaGFkb3cteGwgb3BhY2l0eS0wYCxcbiAgICAgICAgICAgIGVycm9yICYmIHR3YHRleHQtd2hpdGUgYmctZXJyb3JgLFxuICAgICAgICAgICAgc3VjY2VzcyAmJiB0d2B0ZXh0LXdoaXRlIGJnLXN1Y2Nlc3NgLFxuICAgICAgICAgICAgc2hvd1RvYXN0ICYmIHR3YG9wYWNpdHktMTAwYCxcbiAgICAgICAgICBdfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICByaWdodDogMjAsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAuNHMgY3ViaWMtYmV6aWVyKC4zLDAsMCwxKVwiLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzaG93VG9hc3QgJiYgXCJ0cmFuc2xhdGUoMCwgLTIwcHgpXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgdHc9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgdHc9XCJ3LTExLzEyXCI+XG4gICAgICAgICAgICAgIDxUZXh0IHNtYWxsIGNvbG9yPXsoc3VjY2VzcyB8fCBlcnJvcikgJiYgXCJ0ZXh0LXdoaXRlXCJ9PlxuICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtzaG93Q2xvc2VJY29uICYmIChcbiAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBjbG9zZVRvYXN0KCl9PlxuICAgICAgICAgICAgICAgIDxYSWNvbiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Ub2FzdENvbnRlbnQ+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuVG9hc3QucHJvcFR5cGVzID0ge1xuICBzdWNjZXNzOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd0Nsb3NlSWNvbjogUHJvcFR5cGVzLmJvb2wsXG4gIGhpZGU6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpc21pc3NUaW1lOiBQcm9wVHlwZXMubnVtYmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9hc3Q7XG4iXX0= */"],
      style: {
        right: 20,
        transition: "all .4s cubic-bezier(.3,0,0,1)",
        transform: showToast && "translate(0, -20px)"
      }
    }, react$1.jsx("div", {
      css: _ref2
    }, react$1.jsx("div", {
      css: _ref3
    }, react$1.jsx(Text, {
      small: true,
      color: (success || error) && "text-white"
    }, text)), showCloseIcon && react$1.jsx("div", {
      onClick: () => closeToast()
    }, react$1.jsx(XIcon, null)))));
  } else {
    return null;
  }
};

Toast.propTypes = {
  success: PropTypes__default["default"].bool,
  showCloseIcon: PropTypes__default["default"].bool,
  hide: PropTypes__default["default"].bool,
  error: PropTypes__default["default"].bool,
  text: PropTypes__default["default"].string,
  dismissTime: PropTypes__default["default"].number
};

module.exports = Toast;
