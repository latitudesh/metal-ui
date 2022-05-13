'use strict';

var react = require('@emotion/react');

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "1r32arg",
  styles: "@keyframes spin{to{transform:rotate(360deg);}}@keyframes ping{75%,100%{transform:scale(2);opacity:0;}}@keyframes pulse{50%{opacity:.5;}}@keyframes bounce{0%,100%{transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8,0,1,1);}50%{transform:none;animation-timing-function:cubic-bezier(0,0,0.2,1);}}"
} : {
  name: "1nbwame-GlobalStyles",
  styles: "@keyframes spin{to{transform:rotate(360deg);}}@keyframes ping{75%,100%{transform:scale(2);opacity:0;}}@keyframes pulse{50%{opacity:.5;}}@keyframes bounce{0%,100%{transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8,0,1,1);}50%{transform:none;animation-timing-function:cubic-bezier(0,0,0.2,1);}};label:GlobalStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1pQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdsb2JhbCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5cbi8vIFRhaWx3aW5kIGRvZXMgbm90IGluY2x1ZGUgYW5pbWF0aW9uIGtleWZyYW1lcyBpbiBKSVQgbW9kZVxuZnVuY3Rpb24gR2xvYmFsU3R5bGVzKCkge1xuICByZXR1cm4gKFxuICAgIDxHbG9iYWxcbiAgICAgIHN0eWxlcz17Y3NzYFxuICAgICAgICAvKiEgdGFpbHdpbmRjc3MgdjIuMi4xOSB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20gKi9cbiAgICAgICAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAgICAgICB0byB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQGtleWZyYW1lcyBwaW5nIHtcbiAgICAgICAgICA3NSUsIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIHB1bHNlIHtcbiAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgb3BhY2l0eTogLjVcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIGJvdW5jZSB7XG4gICAgICAgICAgMCUsIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNSUpO1xuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuOCwwLDEsMSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsMCwwLjIsMSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGVzO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function GlobalStyles() {
  return react.jsx(react.Global, {
    styles: _ref
  });
}

module.exports = GlobalStyles;
