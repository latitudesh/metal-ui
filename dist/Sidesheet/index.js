'use strict';

var React = require('react');
var reactDom = require('react-dom');
var PropTypes = require('prop-types');
var classNames$1 = require('classnames');
var react = require('@emotion/react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames$1);

var bind = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */
(function () {

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;
      var argType = typeof arg;

      if (argType === 'string' || argType === 'number') {
        classes.push(this && this[arg] || arg);
      } else if (Array.isArray(arg)) {
        classes.push(classNames.apply(this, arg));
      } else if (argType === 'object') {
        if (arg.toString === Object.prototype.toString) {
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(this && this[key] || key);
            }
          }
        } else {
          classes.push(arg.toString());
        }
      }
    }

    return classes.join(' ');
  }

  if (module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else {
    window.classNames = classNames;
  }
})();
}(bind));

var classNames = bind.exports;

const Box = /*#__PURE__*/React__default['default'].forwardRef(({
  flex,
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap,
  children,
  className,
  rootCard,
  noPadding
}, ref) => {
  return react.jsx("div", {
    ref: ref,
    className: classNames__default['default']("overflow-hidden bg-white", className, {
      flex: Boolean(flex),
      "items-start": alignItems === "start",
      "items-end": alignItems === "end",
      "items-center": alignItems === "center",
      "items-baseline": alignItems === "baseline",
      "items-stretch": alignItems === "stretch",
      "justify-start": justifyContent === "start",
      "justify-end": justifyContent === "end",
      "justify-center": justifyContent === "center",
      "justify-between": justifyContent === "between",
      "justify-around": justifyContent === "around",
      "justify-evenly": justifyContent === "evenly",
      "flex-row": flexDirection === "row",
      "flex-row-reverse": flexDirection === "row-reverse",
      "flex-col": flexDirection === "col",
      "flex-col-reverse": flexDirection === "col-reverse",
      [`mb-4 border border-border rounded shadow-sm`]: Boolean(rootCard),
      [`px-6 py-4`]: !Boolean(noPadding),
      "flex-wrap": flexWrap === "wrap",
      "flex-wrap-reverse": flexWrap === "wrap-reverse",
      "flex-nowrap": flexWrap === "nowrap"
    })
  }, children);
});
Box.defaultProps = {
  flex: false,
  alignItems: null,
  justifyContent: null,
  flexDirection: null,
  rootCard: false,
  noPadding: false,
  flexWrap: null
};
Box.propTypes = {
  /**
   * When true, renders the Box with `display:flex`
   */
  flex: PropTypes__default['default'].bool,

  /**
   * Controls item alignment with `align-items`. Only works when flex is true
   */
  alignItems: PropTypes__default['default'].oneOf(["start", "end", "center", "baseline", "stretch"]),

  /**
   * Controls item positioning with `justify-content`. Only works when flex is true
   */
  justifyContent: PropTypes__default['default'].oneOf(["start", "end", "center", "between", "around", "evenly"]),

  /**
   * Controls the direction of flex items with `flex-direction`. Only works when flex is true
   */
  flexDirection: PropTypes__default['default'].oneOf(["row", "row-reverse", "col", "col-reverse"]),

  /**
   * Controls how flex items wrap with `flex-wrap`. Only works when flex is true
   */
  flexWrap: PropTypes__default['default'].oneOf(["wrap", "wrap-reverse", "nowrap"]),

  /**
   * Renders the content
   */
  children: PropTypes__default['default'].node,

  /**
   * Adds border and shadow to the Box. Useful when using Box as the parent element of a section
   */
  rootCard: PropTypes__default['default'].bool,

  /**
   * Removes the padding from the Box. Useful when using Box as a standard `div`.
   */
  noPadding: PropTypes__default['default'].bool,
  className: PropTypes__default['default'].string
};

function XIcon() {
  return react.jsx("svg", {
    fill: "none",
    className: "text-accent-four",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    width: "16px",
    height: "16px"
  }, react.jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M6 18L18 6M6 6l12 12"
  }));
}

const SidesheetContent = ({
  id,
  children
}) => {
  if (typeof window === "undefined") return null;
  let element = React.useRef(document.getElementById(id) || document.createElement("div"));
  React.useEffect(() => {
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

const Sidesheet = ({
  title,
  children,
  className,
  action,
  content,
  width = 400,
  onClose,
  isShown = false
}) => {
  const sideSheet = React.useRef();
  const portal = React.useRef();
  const [isOpened, setIsOpened] = React.useState(false);
  const [transition, setTransition] = React.useState(false);
  React.useEffect(() => {
    let transitionTimeout;

    if (!isShown) {
      setTransition(false);
      transitionTimeout = setTimeout(() => setIsOpened(false), 300);
    } else {
      setIsOpened(true);
      transitionTimeout = setTimeout(() => setTransition(true), 100);
    }

    return () => clearTimeout(transitionTimeout);
  }, [isShown]);

  const closeTransition = () => {
    if (isOpened && transition) {
      onClose();
      setTransition(false);
      setTimeout(() => setIsOpened(false), 500);
    }
  };

  return react.jsx("div", {
    ref: sideSheet
  }, children, isOpened && react.jsx(SidesheetContent, {
    id: "sidesheet"
  }, react.jsx("div", {
    onClick: () => closeTransition(),
    className: classNames("fixed z-50 inset-0 opacity-25 duration-200 delay-100 transition", {
      "bg-accent-eight": transition,
      "bg-transparent": !transition
    })
  }), react.jsx("div", {
    ref: portal,
    style: {
      transition: `transform .2s cubic-bezier(.3,0,0,1)`,
      transform: transition ? `translateX(calc(100vw - ${width}px - 20px))` : `translateX(100vw)`,
      top: 0,
      bottom: 0,
      width: width,
      height: "calc(100% - 20px)"
    },
    className: "fixed z-50 min-w-0 bg-white duration-300 delay-200 h-full flex flex-col shadow-xl m-2 rounded"
  }, react.jsx(Box, {
    flex: true,
    alignItems: "center",
    className: "relative border-b border-border rounded rounded-b-none"
  }, react.jsx("div", {
    className: "text-foreground flex-auto truncate leading-6"
  }, title), react.jsx(Box, {
    flex: true,
    className: "cursor-pointer bg-transparent",
    noPadding: true
  }, react.jsx("div", {
    onClick: () => closeTransition()
  }, react.jsx(XIcon, null)))), react.jsx(Box, {
    flex: true,
    flexDirection: "col",
    className: "sidesheet-content relative overflow-y-auto flex-1 rounded"
  }, react.jsx(Box, {
    noPadding: true,
    flex: true,
    flexDirection: "col",
    className: "overflow-visible"
  }, content)), action && react.jsx(Box, {
    flex: true,
    justifyContent: "evenly",
    alignItems: "center",
    className: "sidesheet-action h-16 border-t border-border relative flex-initial rounded rounded-t-none"
  }, action))));
};

Sidesheet.propTypes = {
  content: PropTypes__default['default'].element,
  children: PropTypes__default['default'].element,
  className: PropTypes__default['default'].string,
  width: PropTypes__default['default'].string,
  action: PropTypes__default['default'].element,
  onClose: PropTypes__default['default'].func,
  isShown: PropTypes__default['default'].bool,
  title: PropTypes__default['default'].string
};

module.exports = Sidesheet;
