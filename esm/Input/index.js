import{extends as _extends}from"../_virtual/_rollupPluginBabelHelpers.js";import{jsx}from"@emotion/react";import React__default,{useCallback}from"react";import PropTypes from"prop-types";import Label from"../Label/index.js";function _EMOTION_STRINGIFIED_CSS_ERROR__(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const ErrorSvgDataURI="data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='nonzero' fill='none'%3E%3Ccircle fill='%236359F9' cx='10' cy='10' r='10'/%3E%3Cpath d='M9 6.848c0-.909.4-1.515 1-1.515s1 .606 1 1.515v3.637c0 .909-.4 1.515-1 1.515s-1-.606-1-1.515V6.848Zm1 7.819c-.583 0-1-.417-1-1 0-.584.417-1 1-1s1 .416 1 1c0 .583-.417 1-1 1Z' fill='%232B223C'/%3E%3C/g%3E%3C/svg%3E%0A",Addon=({children:I,position:g})=>jsx("div",{css:["--tw-bg-opacity:1;background-color:rgba(234, 234, 234, var(--tw-bg-opacity));padding-left:0.75rem;padding-right:0.75rem;display:flex;align-items:center;justify-content:center;--tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgba(102, 102, 102, var(--tw-text-opacity));","left"===g&&{borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"},"right"===g&&{borderTopRightRadius:"5px",borderBottomRightRadius:"5px"},"production"===process.env.NODE_ENV?"":";label:Addon;","production"===process.env.NODE_ENV?"":"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuLi9MYWJlbFwiO1xuY29uc3QgRXJyb3JTdmdEYXRhVVJJID1cbiAgXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPScyMCcgaGVpZ2h0PScyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbC1ydWxlPSdub256ZXJvJyBmaWxsPSdub25lJyUzRSUzQ2NpcmNsZSBmaWxsPSclMjM2MzU5RjknIGN4PScxMCcgY3k9JzEwJyByPScxMCcvJTNFJTNDcGF0aCBkPSdNOSA2Ljg0OGMwLS45MDkuNC0xLjUxNSAxLTEuNTE1czEgLjYwNiAxIDEuNTE1djMuNjM3YzAgLjkwOS0uNCAxLjUxNS0xIDEuNTE1cy0xLS42MDYtMS0xLjUxNVY2Ljg0OFptMSA3LjgxOWMtLjU4MyAwLTEtLjQxNy0xLTEgMC0uNTg0LjQxNy0xIDEtMXMxIC40MTYgMSAxYzAgLjU4My0uNDE3IDEtMSAxWicgZmlsbD0nJTIzMkIyMjNDJy8lM0UlM0MvZyUzRSUzQy9zdmclM0UlMEFcIjtcblxuY29uc3QgQWRkb24gPSAoeyBjaGlsZHJlbiwgcG9zaXRpb24gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17W1xuICAgICAgICB0d2BiZy1ib3JkZXIgcHgtMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzaGFkb3ctc20gdGV4dC1zbSB0ZXh0LWFjY2VudC1maXZlYCxcbiAgICAgICAgcG9zaXRpb24gPT09IFwibGVmdFwiICYmIHR3YHJvdW5kZWQtbGAsXG4gICAgICAgIHBvc2l0aW9uID09PSBcInJpZ2h0XCIgJiYgdHdgcm91bmRlZC1yYFxuICAgICAgXX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuY29uc3QgSW5wdXQgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICBpbnB1dENsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhcmlhbnQsXG4gICAgICB2YWx1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGxhYmVsLFxuICAgICAgaWQsXG4gICAgICBlcnJvcixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgcHJlZml4LFxuICAgICAgc3VmZml4LFxuICAgICAgc2l6ZSxcbiAgICAgIHN0eWxlID0ge30sXG4gICAgICAuLi5yZXN0XG4gICAgfSxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbb25DaGFuZ2VdXG4gICAgKTtcblxuICAgIGNvbnN0IGJyYW5kRGFya1N0eWxlcyA9IHR3YGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIGJnLWJyYW5kLW1lbHJvc2UgYmctb3BhY2l0eS0yMCBwbGFjZWhvbGRlci1icmFuZC1tZWxyb3NlIGhvY3VzOihib3JkZXItdHJhbnNwYXJlbnQgYmctb3BhY2l0eS0zMClgO1xuXG4gICAgY29uc3QgdGV4dEVkaXRhYmxlU3R5bGVzID0ge1xuICAgICAgbGV0dGVyU3BhY2luZzogJ2luaGVyaXQnLFxuICAgICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICB9XG4gICAgY29uc3QgaXNUZXh0RWRpdGFibGUgPSB2YXJpYW50ID09PSAndGV4dC1lZGl0YWJsZSdcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgPExhYmVsIGh0bWxGb3I9e2lkfSB2YXJpYW50PXt2YXJpYW50fSBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgdHc9XCJyZWxhdGl2ZSBmbGV4XCI+XG4gICAgICAgICAge3ByZWZpeCAmJiA8QWRkb24gcG9zaXRpb249e1wibGVmdFwifT57cHJlZml4fTwvQWRkb24+fVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLy8gUmVhY3QgZG9lcyBub3QgcGFzcyBkZWZhdWx0VmFsdWUgY2hhbmdlcyB0byB0aGUgRE9NIGFmdGVyIGluaXRpYWwgcmVuZGVyXG4gICAgICAgICAgICAvLyBodHRwczovL3JlYWN0anMub3JnL2RvY3MvdW5jb250cm9sbGVkLWNvbXBvbmVudHMuaHRtbCNkZWZhdWx0LXZhbHVlc1xuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgIGFyaWEtcmVxdWlyZWQ9eyEhbGFiZWx9XG4gICAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhZXJyb3J9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgICAgICAgLi4uKGlzVGV4dEVkaXRhYmxlICYmIHRleHRFZGl0YWJsZVN0eWxlcylcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgdHdgYmxvY2sgdy1mdWxsIHAtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCBlYXNlLWluLW91dCBzbTpsZWFkaW5nLTUgYm9yZGVyIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZm9udC1mYW1pbHlbaW5oZXJpdF1gLFxuICAgICAgICAgICAgICAhaXNUZXh0RWRpdGFibGUgJiYgdHdgc2hhZG93LXNtYCxcbiAgICAgICAgICAgICAgaXNUZXh0RWRpdGFibGUgJiYgdHdgYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOmJvcmRlci1ib3JkZXIgZm9jdXM6Ym9yZGVyLWFjY2VudC1maXZlIGAsXG4gICAgICAgICAgICAgIHN1ZmZpeCAmJiB0d2Byb3VuZGVkLWxgLFxuICAgICAgICAgICAgICBwcmVmaXggJiYgdHdgcm91bmRlZC1yYCxcbiAgICAgICAgICAgICAgcHJlZml4ICYmIHN1ZmZpeCAmJiB0d2Byb3VuZGVkLW5vbmVgLFxuICAgICAgICAgICAgICAhcHJlZml4ICYmICFzdWZmaXggJiYgdHdgcm91bmRlZGAsXG4gICAgICAgICAgICAgIGlucHV0Q2xhc3NOYW1lICYmIGlucHV0Q2xhc3NOYW1lLFxuICAgICAgICAgICAgICAhZXJyb3IgJiZcbiAgICAgICAgICAgICAgICAhZGlzYWJsZWQgJiYgIWlzVGV4dEVkaXRhYmxlICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWZvcmVncm91bmQgaG9jdXM6Ym9yZGVyLWFjY2VudC1maXZlIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgICAgZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIHRleHQtYWNjZW50LWZpdmUgYmctYmFja2dyb3VuZCBjdXJzb3Itbm90LWFsbG93ZWQgcGxhY2Vob2xkZXItYWNjZW50LWZpdmVgLFxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kXCIgJiZcbiAgICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIHRleHQtYnJhbmQtdXYgaG9jdXM6Ym9yZGVyLWJyYW5kLXV2IHBsYWNlaG9sZGVyLWFjY2VudC1mb3VyYCxcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmIHZhcmlhbnQgPT09IFwiYnJhbmQtZGFya1wiICYmIGJyYW5kRGFya1N0eWxlcyxcbiAgICAgICAgICAgICAgZXJyb3IgJiZcbiAgICAgICAgICAgICAgICB0d2B0ZXh0LWVycm9yIGJvcmRlci1lcnJvciBob2N1czpib3JkZXItZXJyb3IgcGxhY2Vob2xkZXItZXJyb3JgLFxuICAgICAgICAgICAgICBlcnJvciAmJlxuICAgICAgICAgICAgICAgIHZhcmlhbnQgPT09IFwiYnJhbmQtZGFya1wiICYmIFtcbiAgICAgICAgICAgICAgICBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgICAgYGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiR7RXJyb3JTdmdEYXRhVVJJfVwiKTtiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb24teDogY2FsYygxMDAlIC0gMTZweCk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA1MCU7YFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAhaXNUZXh0RWRpdGFibGUgJiYgc2l6ZSA9PT0gXCJzbWFsbFwiICYmIHR3YCBoLTggbGVhZGluZy04IHRleHQteHNgLFxuICAgICAgICAgICAgICAhaXNUZXh0RWRpdGFibGUgJiYgc2l6ZSA9PT0gXCJub3JtYWxcIiAmJiB0d2AgaC05IGxlYWRpbmctOSB0ZXh0LXNtYCxcbiAgICAgICAgICAgICAgIWlzVGV4dEVkaXRhYmxlICYmIHNpemUgPT09IFwibGFyZ2VcIiAmJiB0d2AgaC0xMCBsZWFkaW5nLTEwIHRleHQtYmFzZWBcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtzdWZmaXggJiYgPEFkZG9uIHBvc2l0aW9uPXtcInJpZ2h0XCJ9PntzdWZmaXh9PC9BZGRvbj59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuKTtcblxuSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICBzaXplOiBcIm5vcm1hbFwiXG59O1xuXG5JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgaW5wdXRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3VmZml4OiBQcm9wVHlwZXMubm9kZSxcbiAgcHJlZml4OiBQcm9wVHlwZXMubm9kZSxcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFtcImJyYW5kXCIsIFwiYnJhbmQtZGFya1wiLCBcInRleHQtZWRpdGFibGVcIl0pLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wic21hbGxcIiwgXCJub3JtYWxcIiwgXCJsYXJnZVwiXSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19 */","production"===process.env.NODE_ENV?"":";label:Addon;","production"===process.env.NODE_ENV?"":"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuLi9MYWJlbFwiO1xuY29uc3QgRXJyb3JTdmdEYXRhVVJJID1cbiAgXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPScyMCcgaGVpZ2h0PScyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbC1ydWxlPSdub256ZXJvJyBmaWxsPSdub25lJyUzRSUzQ2NpcmNsZSBmaWxsPSclMjM2MzU5RjknIGN4PScxMCcgY3k9JzEwJyByPScxMCcvJTNFJTNDcGF0aCBkPSdNOSA2Ljg0OGMwLS45MDkuNC0xLjUxNSAxLTEuNTE1czEgLjYwNiAxIDEuNTE1djMuNjM3YzAgLjkwOS0uNCAxLjUxNS0xIDEuNTE1cy0xLS42MDYtMS0xLjUxNVY2Ljg0OFptMSA3LjgxOWMtLjU4MyAwLTEtLjQxNy0xLTEgMC0uNTg0LjQxNy0xIDEtMXMxIC40MTYgMSAxYzAgLjU4My0uNDE3IDEtMSAxWicgZmlsbD0nJTIzMkIyMjNDJy8lM0UlM0MvZyUzRSUzQy9zdmclM0UlMEFcIjtcblxuY29uc3QgQWRkb24gPSAoeyBjaGlsZHJlbiwgcG9zaXRpb24gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17W1xuICAgICAgICB0d2BiZy1ib3JkZXIgcHgtMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzaGFkb3ctc20gdGV4dC1zbSB0ZXh0LWFjY2VudC1maXZlYCxcbiAgICAgICAgcG9zaXRpb24gPT09IFwibGVmdFwiICYmIHR3YHJvdW5kZWQtbGAsXG4gICAgICAgIHBvc2l0aW9uID09PSBcInJpZ2h0XCIgJiYgdHdgcm91bmRlZC1yYFxuICAgICAgXX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuY29uc3QgSW5wdXQgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICBpbnB1dENsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhcmlhbnQsXG4gICAgICB2YWx1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGxhYmVsLFxuICAgICAgaWQsXG4gICAgICBlcnJvcixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgcHJlZml4LFxuICAgICAgc3VmZml4LFxuICAgICAgc2l6ZSxcbiAgICAgIHN0eWxlID0ge30sXG4gICAgICAuLi5yZXN0XG4gICAgfSxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbb25DaGFuZ2VdXG4gICAgKTtcblxuICAgIGNvbnN0IGJyYW5kRGFya1N0eWxlcyA9IHR3YGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIGJnLWJyYW5kLW1lbHJvc2UgYmctb3BhY2l0eS0yMCBwbGFjZWhvbGRlci1icmFuZC1tZWxyb3NlIGhvY3VzOihib3JkZXItdHJhbnNwYXJlbnQgYmctb3BhY2l0eS0zMClgO1xuXG4gICAgY29uc3QgdGV4dEVkaXRhYmxlU3R5bGVzID0ge1xuICAgICAgbGV0dGVyU3BhY2luZzogJ2luaGVyaXQnLFxuICAgICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICB9XG4gICAgY29uc3QgaXNUZXh0RWRpdGFibGUgPSB2YXJpYW50ID09PSAndGV4dC1lZGl0YWJsZSdcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgPExhYmVsIGh0bWxGb3I9e2lkfSB2YXJpYW50PXt2YXJpYW50fSBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgdHc9XCJyZWxhdGl2ZSBmbGV4XCI+XG4gICAgICAgICAge3ByZWZpeCAmJiA8QWRkb24gcG9zaXRpb249e1wibGVmdFwifT57cHJlZml4fTwvQWRkb24+fVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLy8gUmVhY3QgZG9lcyBub3QgcGFzcyBkZWZhdWx0VmFsdWUgY2hhbmdlcyB0byB0aGUgRE9NIGFmdGVyIGluaXRpYWwgcmVuZGVyXG4gICAgICAgICAgICAvLyBodHRwczovL3JlYWN0anMub3JnL2RvY3MvdW5jb250cm9sbGVkLWNvbXBvbmVudHMuaHRtbCNkZWZhdWx0LXZhbHVlc1xuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgIGFyaWEtcmVxdWlyZWQ9eyEhbGFiZWx9XG4gICAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhZXJyb3J9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgICAgICAgLi4uKGlzVGV4dEVkaXRhYmxlICYmIHRleHRFZGl0YWJsZVN0eWxlcylcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgdHdgYmxvY2sgdy1mdWxsIHAtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCBlYXNlLWluLW91dCBzbTpsZWFkaW5nLTUgYm9yZGVyIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZm9udC1mYW1pbHlbaW5oZXJpdF1gLFxuICAgICAgICAgICAgICAhaXNUZXh0RWRpdGFibGUgJiYgdHdgc2hhZG93LXNtYCxcbiAgICAgICAgICAgICAgaXNUZXh0RWRpdGFibGUgJiYgdHdgYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOmJvcmRlci1ib3JkZXIgZm9jdXM6Ym9yZGVyLWFjY2VudC1maXZlIGAsXG4gICAgICAgICAgICAgIHN1ZmZpeCAmJiB0d2Byb3VuZGVkLWxgLFxuICAgICAgICAgICAgICBwcmVmaXggJiYgdHdgcm91bmRlZC1yYCxcbiAgICAgICAgICAgICAgcHJlZml4ICYmIHN1ZmZpeCAmJiB0d2Byb3VuZGVkLW5vbmVgLFxuICAgICAgICAgICAgICAhcHJlZml4ICYmICFzdWZmaXggJiYgdHdgcm91bmRlZGAsXG4gICAgICAgICAgICAgIGlucHV0Q2xhc3NOYW1lICYmIGlucHV0Q2xhc3NOYW1lLFxuICAgICAgICAgICAgICAhZXJyb3IgJiZcbiAgICAgICAgICAgICAgICAhZGlzYWJsZWQgJiYgIWlzVGV4dEVkaXRhYmxlICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWZvcmVncm91bmQgaG9jdXM6Ym9yZGVyLWFjY2VudC1maXZlIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgICAgZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIHRleHQtYWNjZW50LWZpdmUgYmctYmFja2dyb3VuZCBjdXJzb3Itbm90LWFsbG93ZWQgcGxhY2Vob2xkZXItYWNjZW50LWZpdmVgLFxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kXCIgJiZcbiAgICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIHRleHQtYnJhbmQtdXYgaG9jdXM6Ym9yZGVyLWJyYW5kLXV2IHBsYWNlaG9sZGVyLWFjY2VudC1mb3VyYCxcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmIHZhcmlhbnQgPT09IFwiYnJhbmQtZGFya1wiICYmIGJyYW5kRGFya1N0eWxlcyxcbiAgICAgICAgICAgICAgZXJyb3IgJiZcbiAgICAgICAgICAgICAgICB0d2B0ZXh0LWVycm9yIGJvcmRlci1lcnJvciBob2N1czpib3JkZXItZXJyb3IgcGxhY2Vob2xkZXItZXJyb3JgLFxuICAgICAgICAgICAgICBlcnJvciAmJlxuICAgICAgICAgICAgICAgIHZhcmlhbnQgPT09IFwiYnJhbmQtZGFya1wiICYmIFtcbiAgICAgICAgICAgICAgICBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgICAgYGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiR7RXJyb3JTdmdEYXRhVVJJfVwiKTtiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb24teDogY2FsYygxMDAlIC0gMTZweCk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA1MCU7YFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAhaXNUZXh0RWRpdGFibGUgJiYgc2l6ZSA9PT0gXCJzbWFsbFwiICYmIHR3YCBoLTggbGVhZGluZy04IHRleHQteHNgLFxuICAgICAgICAgICAgICAhaXNUZXh0RWRpdGFibGUgJiYgc2l6ZSA9PT0gXCJub3JtYWxcIiAmJiB0d2AgaC05IGxlYWRpbmctOSB0ZXh0LXNtYCxcbiAgICAgICAgICAgICAgIWlzVGV4dEVkaXRhYmxlICYmIHNpemUgPT09IFwibGFyZ2VcIiAmJiB0d2AgaC0xMCBsZWFkaW5nLTEwIHRleHQtYmFzZWBcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtzdWZmaXggJiYgPEFkZG9uIHBvc2l0aW9uPXtcInJpZ2h0XCJ9PntzdWZmaXh9PC9BZGRvbj59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuKTtcblxuSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICBzaXplOiBcIm5vcm1hbFwiXG59O1xuXG5JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgaW5wdXRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3VmZml4OiBQcm9wVHlwZXMubm9kZSxcbiAgcHJlZml4OiBQcm9wVHlwZXMubm9kZSxcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFtcImJyYW5kXCIsIFwiYnJhbmQtZGFya1wiLCBcInRleHQtZWRpdGFibGVcIl0pLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wic21hbGxcIiwgXCJub3JtYWxcIiwgXCJsYXJnZVwiXSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19 */"]},I);var _ref="production"===process.env.NODE_ENV?{name:"8k1832",styles:"position:relative;display:flex"}:{name:"16kijgz-Input",styles:"position:relative;display:flex;label:Input;",toString:_EMOTION_STRINGIFIED_CSS_ERROR__};const Input=React__default.forwardRef(({onChange:g,inputClassName:I,className:C,variant:A,value:c,defaultValue:b,label:l,id:m,error:Z,disabled:G,prefix:i,suffix:d,size:X,style:W={},...t},Y)=>{var a=useCallback(I=>{g&&g(I.target.value,I)},[g]),x={borderColor:"rgba(0, 0, 0, 0)","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","--tw-bg-opacity":"0.2",backgroundColor:"rgba(134, 131, 229, var(--tw-bg-opacity))","::placeholder":{"--tw-placeholder-opacity":"1",color:"rgba(134, 131, 229, var(--tw-placeholder-opacity))"},":hover, :focus":{borderColor:"rgba(0, 0, 0, 0)","--tw-bg-opacity":"0.3"}},u="text-editable"===A;return jsx("div",{className:C},l&&jsx(Label,{htmlFor:m,variant:A,disabled:G},l),jsx("div",{css:_ref},i&&jsx(Addon,{position:"left"},i),jsx("input",_extends({id:m,ref:Y,onChange:a,defaultValue:b,"aria-label":l,"aria-required":!!l,"aria-invalid":!!Z,disabled:G,value:c,style:{...W,...u&&{letterSpacing:"inherit",fontSize:"inherit",fontWeight:"inherit",lineHeight:"inherit"}},css:["transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;display:block;width:100%;padding:0.5rem;border-width:1px;:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);}font-family:inherit;@media (min-width: 640px){line-height:1.25rem;}",!u&&{"--tw-shadow":"0 1px 2px 0 rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},u&&{borderColor:"rgba(0, 0, 0, 0)",":hover":{"--tw-border-opacity":"1",borderColor:"rgba(234, 234, 234, var(--tw-border-opacity))"},":focus":{"--tw-border-opacity":"1",borderColor:"rgba(102, 102, 102, var(--tw-border-opacity))"}},d&&{borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"},i&&{borderTopRightRadius:"5px",borderBottomRightRadius:"5px"},i&&d&&{borderRadius:"0px"},!i&&!d&&{borderRadius:"5px"},I,!Z&&!G&&!u&&{"--tw-border-opacity":"1",borderColor:"rgba(234, 234, 234, var(--tw-border-opacity))","--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",":hover, :focus":{"--tw-border-opacity":"1",borderColor:"rgba(102, 102, 102, var(--tw-border-opacity))"},"::placeholder":{"--tw-placeholder-opacity":"1",color:"rgba(102, 102, 102, var(--tw-placeholder-opacity))"}},G&&{"--tw-border-opacity":"1",borderColor:"rgba(234, 234, 234, var(--tw-border-opacity))","--tw-text-opacity":"1",color:"rgba(102, 102, 102, var(--tw-text-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgba(244, 245, 247, var(--tw-bg-opacity))",cursor:"not-allowed","::placeholder":{"--tw-placeholder-opacity":"1",color:"rgba(102, 102, 102, var(--tw-placeholder-opacity))"}},!G&&"brand"===A&&{"--tw-border-opacity":"1",borderColor:"rgba(234, 234, 234, var(--tw-border-opacity))","--tw-text-opacity":"1",color:"rgba(99, 89, 249, var(--tw-text-opacity))",":hover, :focus":{"--tw-border-opacity":"1",borderColor:"rgba(99, 89, 249, var(--tw-border-opacity))"},"::placeholder":{"--tw-placeholder-opacity":"1",color:"rgba(136, 136, 136, var(--tw-placeholder-opacity))"}},!G&&"brand-dark"===A&&x,Z&&{"--tw-text-opacity":"1",color:"rgba(238, 0, 0, var(--tw-text-opacity))","--tw-border-opacity":"1",borderColor:"rgba(238, 0, 0, var(--tw-border-opacity))",":hover, :focus":{"--tw-border-opacity":"1",borderColor:"rgba(238, 0, 0, var(--tw-border-opacity))"},"::placeholder":{"--tw-placeholder-opacity":"1",color:"rgba(238, 0, 0, var(--tw-placeholder-opacity))"}},Z&&"brand-dark"===A&&[x,`background-image: url("${ErrorSvgDataURI}");background-repeat: no-repeat;background-position-x: calc(100% - 16px);
                background-position-y: 50%;`],!u&&"small"===X&&{height:"2rem",lineHeight:"1rem",fontSize:"0.75rem"},!u&&"normal"===X&&{height:"2.25rem",lineHeight:"1.25rem",fontSize:"0.875rem"},!u&&"large"===X&&{height:"2.5rem",lineHeight:"1.5rem",fontSize:"1rem"},"production"===process.env.NODE_ENV?"":";label:Input;","production"===process.env.NODE_ENV?"":"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVGWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vTGFiZWxcIjtcbmNvbnN0IEVycm9yU3ZnRGF0YVVSSSA9XG4gIFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGwtcnVsZT0nbm9uemVybycgZmlsbD0nbm9uZSclM0UlM0NjaXJjbGUgZmlsbD0nJTIzNjM1OUY5JyBjeD0nMTAnIGN5PScxMCcgcj0nMTAnLyUzRSUzQ3BhdGggZD0nTTkgNi44NDhjMC0uOTA5LjQtMS41MTUgMS0xLjUxNXMxIC42MDYgMSAxLjUxNXYzLjYzN2MwIC45MDktLjQgMS41MTUtMSAxLjUxNXMtMS0uNjA2LTEtMS41MTVWNi44NDhabTEgNy44MTljLS41ODMgMC0xLS40MTctMS0xIDAtLjU4NC40MTctMSAxLTFzMSAuNDE2IDEgMWMwIC41ODMtLjQxNyAxLTEgMVonIGZpbGw9JyUyMzJCMjIzQycvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFJTBBXCI7XG5cbmNvbnN0IEFkZG9uID0gKHsgY2hpbGRyZW4sIHBvc2l0aW9uIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e1tcbiAgICAgICAgdHdgYmctYm9yZGVyIHB4LTMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hhZG93LXNtIHRleHQtc20gdGV4dC1hY2NlbnQtZml2ZWAsXG4gICAgICAgIHBvc2l0aW9uID09PSBcImxlZnRcIiAmJiB0d2Byb3VuZGVkLWxgLFxuICAgICAgICBwb3NpdGlvbiA9PT0gXCJyaWdodFwiICYmIHR3YHJvdW5kZWQtcmBcbiAgICAgIF19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTtcbmNvbnN0IElucHV0ID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgaW5wdXRDbGFzc05hbWUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB2YXJpYW50LFxuICAgICAgdmFsdWUsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBsYWJlbCxcbiAgICAgIGlkLFxuICAgICAgZXJyb3IsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHByZWZpeCxcbiAgICAgIHN1ZmZpeCxcbiAgICAgIHNpemUsXG4gICAgICBzdHlsZSA9IHt9LFxuICAgICAgLi4ucmVzdFxuICAgIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW29uQ2hhbmdlXVxuICAgICk7XG5cbiAgICBjb25zdCBicmFuZERhcmtTdHlsZXMgPSB0d2Bib3JkZXItdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSBiZy1icmFuZC1tZWxyb3NlIGJnLW9wYWNpdHktMjAgcGxhY2Vob2xkZXItYnJhbmQtbWVscm9zZSBob2N1czooYm9yZGVyLXRyYW5zcGFyZW50IGJnLW9wYWNpdHktMzApYDtcblxuICAgIGNvbnN0IHRleHRFZGl0YWJsZVN0eWxlcyA9IHtcbiAgICAgIGxldHRlclNwYWNpbmc6ICdpbmhlcml0JyxcbiAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICBmb250V2VpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgfVxuICAgIGNvbnN0IGlzVGV4dEVkaXRhYmxlID0gdmFyaWFudCA9PT0gJ3RleHQtZWRpdGFibGUnXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPXtpZH0gdmFyaWFudD17dmFyaWFudH0gZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IHR3PVwicmVsYXRpdmUgZmxleFwiPlxuICAgICAgICAgIHtwcmVmaXggJiYgPEFkZG9uIHBvc2l0aW9uPXtcImxlZnRcIn0+e3ByZWZpeH08L0FkZG9uPn1cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8vIFJlYWN0IGRvZXMgbm90IHBhc3MgZGVmYXVsdFZhbHVlIGNoYW5nZXMgdG8gdGhlIERPTSBhZnRlciBpbml0aWFsIHJlbmRlclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3VuY29udHJvbGxlZC1jb21wb25lbnRzLmh0bWwjZGVmYXVsdC12YWx1ZXNcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XG4gICAgICAgICAgICBhcmlhLXJlcXVpcmVkPXshIWxhYmVsfVxuICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXshIWVycm9yfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgICAgICAgIC4uLihpc1RleHRFZGl0YWJsZSAmJiB0ZXh0RWRpdGFibGVTdHlsZXMpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgIHR3YGJsb2NrIHctZnVsbCBwLTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXQgc206bGVhZGluZy01IGJvcmRlciBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvbnQtZmFtaWx5W2luaGVyaXRdYCxcbiAgICAgICAgICAgICAgIWlzVGV4dEVkaXRhYmxlICYmIHR3YHNoYWRvdy1zbWAsXG4gICAgICAgICAgICAgIGlzVGV4dEVkaXRhYmxlICYmIHR3YGJvcmRlci10cmFuc3BhcmVudCBob3Zlcjpib3JkZXItYm9yZGVyIGZvY3VzOmJvcmRlci1hY2NlbnQtZml2ZSBgLFxuICAgICAgICAgICAgICBzdWZmaXggJiYgdHdgcm91bmRlZC1sYCxcbiAgICAgICAgICAgICAgcHJlZml4ICYmIHR3YHJvdW5kZWQtcmAsXG4gICAgICAgICAgICAgIHByZWZpeCAmJiBzdWZmaXggJiYgdHdgcm91bmRlZC1ub25lYCxcbiAgICAgICAgICAgICAgIXByZWZpeCAmJiAhc3VmZml4ICYmIHR3YHJvdW5kZWRgLFxuICAgICAgICAgICAgICBpbnB1dENsYXNzTmFtZSAmJiBpbnB1dENsYXNzTmFtZSxcbiAgICAgICAgICAgICAgIWVycm9yICYmXG4gICAgICAgICAgICAgICAgIWRpc2FibGVkICYmICFpc1RleHRFZGl0YWJsZSAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1mb3JlZ3JvdW5kIGhvY3VzOmJvcmRlci1hY2NlbnQtZml2ZSBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgIGRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWFjY2VudC1maXZlIGJnLWJhY2tncm91bmQgY3Vyc29yLW5vdC1hbGxvd2VkIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZFwiICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJiB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgICAgdHdgdGV4dC1lcnJvciBib3JkZXItZXJyb3IgaG9jdXM6Ym9yZGVyLWVycm9yIHBsYWNlaG9sZGVyLWVycm9yYCxcbiAgICAgICAgICAgICAgZXJyb3IgJiZcbiAgICAgICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBbXG4gICAgICAgICAgICAgICAgYnJhbmREYXJrU3R5bGVzLFxuICAgICAgICAgICAgICAgIGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIke0Vycm9yU3ZnRGF0YVVSSX1cIik7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNTAlO2BcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgIWlzVGV4dEVkaXRhYmxlICYmIHNpemUgPT09IFwic21hbGxcIiAmJiB0d2AgaC04IGxlYWRpbmctOCB0ZXh0LXhzYCxcbiAgICAgICAgICAgICAgIWlzVGV4dEVkaXRhYmxlICYmIHNpemUgPT09IFwibm9ybWFsXCIgJiYgdHdgIGgtOSBsZWFkaW5nLTkgdGV4dC1zbWAsXG4gICAgICAgICAgICAgICFpc1RleHRFZGl0YWJsZSAmJiBzaXplID09PSBcImxhcmdlXCIgJiYgdHdgIGgtMTAgbGVhZGluZy0xMCB0ZXh0LWJhc2VgXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7c3VmZml4ICYmIDxBZGRvbiBwb3NpdGlvbj17XCJyaWdodFwifT57c3VmZml4fTwvQWRkb24+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cbklucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgc2l6ZTogXCJub3JtYWxcIlxufTtcblxuSW5wdXQucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGlucHV0Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHN1ZmZpeDogUHJvcFR5cGVzLm5vZGUsXG4gIHByZWZpeDogUHJvcFR5cGVzLm5vZGUsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJicmFuZFwiLCBcImJyYW5kLWRhcmtcIiwgXCJ0ZXh0LWVkaXRhYmxlXCJdKSxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcInNtYWxsXCIsIFwibm9ybWFsXCIsIFwibGFyZ2VcIl0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ== */","production"===process.env.NODE_ENV?"":";label:Input;","production"===process.env.NODE_ENV?"":"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVGWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vTGFiZWxcIjtcbmNvbnN0IEVycm9yU3ZnRGF0YVVSSSA9XG4gIFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGwtcnVsZT0nbm9uemVybycgZmlsbD0nbm9uZSclM0UlM0NjaXJjbGUgZmlsbD0nJTIzNjM1OUY5JyBjeD0nMTAnIGN5PScxMCcgcj0nMTAnLyUzRSUzQ3BhdGggZD0nTTkgNi44NDhjMC0uOTA5LjQtMS41MTUgMS0xLjUxNXMxIC42MDYgMSAxLjUxNXYzLjYzN2MwIC45MDktLjQgMS41MTUtMSAxLjUxNXMtMS0uNjA2LTEtMS41MTVWNi44NDhabTEgNy44MTljLS41ODMgMC0xLS40MTctMS0xIDAtLjU4NC40MTctMSAxLTFzMSAuNDE2IDEgMWMwIC41ODMtLjQxNyAxLTEgMVonIGZpbGw9JyUyMzJCMjIzQycvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFJTBBXCI7XG5cbmNvbnN0IEFkZG9uID0gKHsgY2hpbGRyZW4sIHBvc2l0aW9uIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e1tcbiAgICAgICAgdHdgYmctYm9yZGVyIHB4LTMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hhZG93LXNtIHRleHQtc20gdGV4dC1hY2NlbnQtZml2ZWAsXG4gICAgICAgIHBvc2l0aW9uID09PSBcImxlZnRcIiAmJiB0d2Byb3VuZGVkLWxgLFxuICAgICAgICBwb3NpdGlvbiA9PT0gXCJyaWdodFwiICYmIHR3YHJvdW5kZWQtcmBcbiAgICAgIF19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTtcbmNvbnN0IElucHV0ID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgaW5wdXRDbGFzc05hbWUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB2YXJpYW50LFxuICAgICAgdmFsdWUsXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBsYWJlbCxcbiAgICAgIGlkLFxuICAgICAgZXJyb3IsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHByZWZpeCxcbiAgICAgIHN1ZmZpeCxcbiAgICAgIHNpemUsXG4gICAgICBzdHlsZSA9IHt9LFxuICAgICAgLi4ucmVzdFxuICAgIH0sXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW29uQ2hhbmdlXVxuICAgICk7XG5cbiAgICBjb25zdCBicmFuZERhcmtTdHlsZXMgPSB0d2Bib3JkZXItdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSBiZy1icmFuZC1tZWxyb3NlIGJnLW9wYWNpdHktMjAgcGxhY2Vob2xkZXItYnJhbmQtbWVscm9zZSBob2N1czooYm9yZGVyLXRyYW5zcGFyZW50IGJnLW9wYWNpdHktMzApYDtcblxuICAgIGNvbnN0IHRleHRFZGl0YWJsZVN0eWxlcyA9IHtcbiAgICAgIGxldHRlclNwYWNpbmc6ICdpbmhlcml0JyxcbiAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICBmb250V2VpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgfVxuICAgIGNvbnN0IGlzVGV4dEVkaXRhYmxlID0gdmFyaWFudCA9PT0gJ3RleHQtZWRpdGFibGUnXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPXtpZH0gdmFyaWFudD17dmFyaWFudH0gZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IHR3PVwicmVsYXRpdmUgZmxleFwiPlxuICAgICAgICAgIHtwcmVmaXggJiYgPEFkZG9uIHBvc2l0aW9uPXtcImxlZnRcIn0+e3ByZWZpeH08L0FkZG9uPn1cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8vIFJlYWN0IGRvZXMgbm90IHBhc3MgZGVmYXVsdFZhbHVlIGNoYW5nZXMgdG8gdGhlIERPTSBhZnRlciBpbml0aWFsIHJlbmRlclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3VuY29udHJvbGxlZC1jb21wb25lbnRzLmh0bWwjZGVmYXVsdC12YWx1ZXNcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XG4gICAgICAgICAgICBhcmlhLXJlcXVpcmVkPXshIWxhYmVsfVxuICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXshIWVycm9yfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgICAgICAgIC4uLihpc1RleHRFZGl0YWJsZSAmJiB0ZXh0RWRpdGFibGVTdHlsZXMpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgIHR3YGJsb2NrIHctZnVsbCBwLTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXQgc206bGVhZGluZy01IGJvcmRlciBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvbnQtZmFtaWx5W2luaGVyaXRdYCxcbiAgICAgICAgICAgICAgIWlzVGV4dEVkaXRhYmxlICYmIHR3YHNoYWRvdy1zbWAsXG4gICAgICAgICAgICAgIGlzVGV4dEVkaXRhYmxlICYmIHR3YGJvcmRlci10cmFuc3BhcmVudCBob3Zlcjpib3JkZXItYm9yZGVyIGZvY3VzOmJvcmRlci1hY2NlbnQtZml2ZSBgLFxuICAgICAgICAgICAgICBzdWZmaXggJiYgdHdgcm91bmRlZC1sYCxcbiAgICAgICAgICAgICAgcHJlZml4ICYmIHR3YHJvdW5kZWQtcmAsXG4gICAgICAgICAgICAgIHByZWZpeCAmJiBzdWZmaXggJiYgdHdgcm91bmRlZC1ub25lYCxcbiAgICAgICAgICAgICAgIXByZWZpeCAmJiAhc3VmZml4ICYmIHR3YHJvdW5kZWRgLFxuICAgICAgICAgICAgICBpbnB1dENsYXNzTmFtZSAmJiBpbnB1dENsYXNzTmFtZSxcbiAgICAgICAgICAgICAgIWVycm9yICYmXG4gICAgICAgICAgICAgICAgIWRpc2FibGVkICYmICFpc1RleHRFZGl0YWJsZSAmJlxuICAgICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1mb3JlZ3JvdW5kIGhvY3VzOmJvcmRlci1hY2NlbnQtZml2ZSBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICAgIGRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWFjY2VudC1maXZlIGJnLWJhY2tncm91bmQgY3Vyc29yLW5vdC1hbGxvd2VkIHBsYWNlaG9sZGVyLWFjY2VudC1maXZlYCxcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZFwiICYmXG4gICAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWJyYW5kLXV2IGhvY3VzOmJvcmRlci1icmFuZC11diBwbGFjZWhvbGRlci1hY2NlbnQtZm91cmAsXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJiB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBicmFuZERhcmtTdHlsZXMsXG4gICAgICAgICAgICAgIGVycm9yICYmXG4gICAgICAgICAgICAgICAgdHdgdGV4dC1lcnJvciBib3JkZXItZXJyb3IgaG9jdXM6Ym9yZGVyLWVycm9yIHBsYWNlaG9sZGVyLWVycm9yYCxcbiAgICAgICAgICAgICAgZXJyb3IgJiZcbiAgICAgICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kLWRhcmtcIiAmJiBbXG4gICAgICAgICAgICAgICAgYnJhbmREYXJrU3R5bGVzLFxuICAgICAgICAgICAgICAgIGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIke0Vycm9yU3ZnRGF0YVVSSX1cIik7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNTAlO2BcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgIWlzVGV4dEVkaXRhYmxlICYmIHNpemUgPT09IFwic21hbGxcIiAmJiB0d2AgaC04IGxlYWRpbmctOCB0ZXh0LXhzYCxcbiAgICAgICAgICAgICAgIWlzVGV4dEVkaXRhYmxlICYmIHNpemUgPT09IFwibm9ybWFsXCIgJiYgdHdgIGgtOSBsZWFkaW5nLTkgdGV4dC1zbWAsXG4gICAgICAgICAgICAgICFpc1RleHRFZGl0YWJsZSAmJiBzaXplID09PSBcImxhcmdlXCIgJiYgdHdgIGgtMTAgbGVhZGluZy0xMCB0ZXh0LWJhc2VgXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7c3VmZml4ICYmIDxBZGRvbiBwb3NpdGlvbj17XCJyaWdodFwifT57c3VmZml4fTwvQWRkb24+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cbklucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgc2l6ZTogXCJub3JtYWxcIlxufTtcblxuSW5wdXQucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGlucHV0Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHN1ZmZpeDogUHJvcFR5cGVzLm5vZGUsXG4gIHByZWZpeDogUHJvcFR5cGVzLm5vZGUsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJicmFuZFwiLCBcImJyYW5kLWRhcmtcIiwgXCJ0ZXh0LWVkaXRhYmxlXCJdKSxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcInNtYWxsXCIsIFwibm9ybWFsXCIsIFwibGFyZ2VcIl0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ== */"]},t)),d&&jsx(Addon,{position:"right"},d)))});Input.defaultProps={size:"normal"},Input.propTypes={onChange:PropTypes.func,inputClassName:PropTypes.string,className:PropTypes.string,value:PropTypes.string,defaultValue:PropTypes.string,label:PropTypes.string,id:PropTypes.string,error:PropTypes.bool,disabled:PropTypes.bool,suffix:PropTypes.node,prefix:PropTypes.node,variant:PropTypes.oneOf(["brand","brand-dark","text-editable"]),size:PropTypes.oneOf(["small","normal","large"])};export{Input as default};
