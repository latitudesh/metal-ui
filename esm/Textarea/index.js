import{extends as _extends}from"../_virtual/_rollupPluginBabelHelpers.js";import{jsx}from"@emotion/react";import React__default,{useCallback}from"react";import PropTypes from"prop-types";import Label from"../Label/index.js";const Textarea=React__default.forwardRef(({onChange:g,textareaClassName:I,className:C,value:c,defaultValue:A,label:b,id:l,error:a,disabled:i,rows:t,variant:o,resize:r,...e},m)=>{var Z=useCallback(I=>{g&&g(I.target.value,I)},[g]);return jsx("div",{className:C},b&&jsx(Label,{htmlFor:l,variant:o,disabled:i},b),jsx("textarea",_extends({id:l,ref:m,rows:t,onChange:Z,defaultValue:A,"aria-label":b,"aria-required":!!b,"aria-invalid":!!a,disabled:i,value:c,css:["transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;display:block;width:100%;border-radius:5px;padding:0.5rem;border-width:1px;--tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);}font-family:inherit;@media (min-width: 640px){font-size:0.875rem;line-height:1.5rem;}",I,!a&&!i&&{"--tw-border-opacity":"1",borderColor:"rgba(234, 234, 234, var(--tw-border-opacity))","--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",":hover, :focus":{"--tw-border-opacity":"1",borderColor:"rgba(0, 0, 0, var(--tw-border-opacity))"},"::placeholder":{"--tw-placeholder-opacity":"1",color:"rgba(102, 102, 102, var(--tw-placeholder-opacity))"}},a&&{"--tw-text-opacity":"1",color:"rgba(238, 0, 0, var(--tw-text-opacity))","--tw-border-opacity":"1",borderColor:"rgba(238, 0, 0, var(--tw-border-opacity))",":hover, :focus":{"--tw-border-opacity":"1",borderColor:"rgba(238, 0, 0, var(--tw-border-opacity))"},"::placeholder":{"--tw-placeholder-opacity":"1",color:"rgba(238, 0, 0, var(--tw-placeholder-opacity))"}},i&&{"--tw-border-opacity":"1",borderColor:"rgba(234, 234, 234, var(--tw-border-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgba(244, 245, 247, var(--tw-bg-opacity))",cursor:"not-allowed","::placeholder":{"--tw-placeholder-opacity":"1",color:"rgba(102, 102, 102, var(--tw-placeholder-opacity))"}},"brand"===o&&!i&&{"--tw-border-opacity":"1",borderColor:"rgba(234, 234, 234, var(--tw-border-opacity))","--tw-text-opacity":"1",color:"rgba(99, 89, 249, var(--tw-text-opacity))",":hover, :focus":{"--tw-border-opacity":"1",borderColor:"rgba(99, 89, 249, var(--tw-border-opacity))"},"::placeholder":{"--tw-placeholder-opacity":"1",color:"rgba(136, 136, 136, var(--tw-placeholder-opacity))"}},"brand-dark"===o&&!i&&{borderColor:"rgba(0, 0, 0, 0)","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","--tw-bg-opacity":"0.2",backgroundColor:"rgba(134, 131, 229, var(--tw-bg-opacity))","::placeholder":{"--tw-placeholder-opacity":"1",color:"rgba(134, 131, 229, var(--tw-placeholder-opacity))"},":hover, :focus":{borderColor:"rgba(0, 0, 0, 0)","--tw-bg-opacity":"0.3"}},!r&&{resize:"none"},"production"===process.env.NODE_ENV?"":";label:Textarea;","production"===process.env.NODE_ENV?"":"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vTGFiZWxcIjtcblxuY29uc3QgVGV4dGFyZWEgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICB0ZXh0YXJlYUNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhbHVlLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgbGFiZWwsXG4gICAgICBpZCxcbiAgICAgIGVycm9yLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByb3dzLFxuICAgICAgdmFyaWFudCxcbiAgICAgIHJlc2l6ZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW29uQ2hhbmdlXVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgPExhYmVsIGh0bWxGb3I9e2lkfSB2YXJpYW50PXt2YXJpYW50fSBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICl9XG5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIHJvd3M9e3Jvd3N9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICBhcmlhLXJlcXVpcmVkPXshIWxhYmVsfVxuICAgICAgICAgIGFyaWEtaW52YWxpZD17ISFlcnJvcn1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgdHdgYmxvY2sgdy1mdWxsIHJvdW5kZWQgcC0yIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIGVhc2UtaW4tb3V0IHNtOnRleHQtc20gc206bGVhZGluZy02IGJvcmRlciBzaGFkb3ctc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMCBmb250LWZhbWlseVtpbmhlcml0XWAsXG4gICAgICAgICAgICB0ZXh0YXJlYUNsYXNzTmFtZSAmJiB0ZXh0YXJlYUNsYXNzTmFtZSxcbiAgICAgICAgICAgICFlcnJvciAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWZvcmVncm91bmQgaG9jdXM6Ym9yZGVyLWZvcmVncm91bmQgcGxhY2Vob2xkZXItYWNjZW50LWZpdmVgLFxuICAgICAgICAgICAgZXJyb3IgJiZcbiAgICAgICAgICAgICAgdHdgdGV4dC1lcnJvciBib3JkZXItZXJyb3IgaG9jdXM6Ym9yZGVyLWVycm9yIHBsYWNlaG9sZGVyLWVycm9yYCxcbiAgICAgICAgICAgIGRpc2FibGVkICYmXG4gICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgYmctYmFja2dyb3VuZCBjdXJzb3Itbm90LWFsbG93ZWQgcGxhY2Vob2xkZXItYWNjZW50LWZpdmVgLFxuICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZFwiICYmXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIHRleHQtYnJhbmQtdXYgaG9jdXM6Ym9yZGVyLWJyYW5kLXV2IHBsYWNlaG9sZGVyLWFjY2VudC1mb3VyYCxcbiAgICAgICAgICAgIHZhcmlhbnQgPT09IFwiYnJhbmQtZGFya1wiICYmXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICB0d2Bib3JkZXItdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSBiZy1icmFuZC1tZWxyb3NlIGJnLW9wYWNpdHktMjAgcGxhY2Vob2xkZXItYnJhbmQtbWVscm9zZSBob2N1czooYm9yZGVyLXRyYW5zcGFyZW50IGJnLW9wYWNpdHktMzApYCxcbiAgICAgICAgICAgICFyZXNpemUgJiYgdHdgcmVzaXplLW5vbmVgXG4gICAgICAgICAgXX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cblRleHRhcmVhLmRlZmF1bHRQcm9wcyA9IHtcbiAgcmVzaXplOiBmYWxzZSxcbiAgcm93czogMyxcbn07XG5cblRleHRhcmVhLnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICB0ZXh0YXJlYUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHJvd3M6IFByb3BUeXBlcy5udW1iZXIsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJicmFuZFwiLCBcImJyYW5kLWRhcmtcIl0pLFxuICByZXNpemU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRhcmVhO1xuIl19 */","production"===process.env.NODE_ENV?"":";label:Textarea;","production"===process.env.NODE_ENV?"":"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vTGFiZWxcIjtcblxuY29uc3QgVGV4dGFyZWEgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICB0ZXh0YXJlYUNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhbHVlLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgbGFiZWwsXG4gICAgICBpZCxcbiAgICAgIGVycm9yLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByb3dzLFxuICAgICAgdmFyaWFudCxcbiAgICAgIHJlc2l6ZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW29uQ2hhbmdlXVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgPExhYmVsIGh0bWxGb3I9e2lkfSB2YXJpYW50PXt2YXJpYW50fSBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICl9XG5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIHJvd3M9e3Jvd3N9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICBhcmlhLXJlcXVpcmVkPXshIWxhYmVsfVxuICAgICAgICAgIGFyaWEtaW52YWxpZD17ISFlcnJvcn1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgdHdgYmxvY2sgdy1mdWxsIHJvdW5kZWQgcC0yIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIGVhc2UtaW4tb3V0IHNtOnRleHQtc20gc206bGVhZGluZy02IGJvcmRlciBzaGFkb3ctc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMCBmb250LWZhbWlseVtpbmhlcml0XWAsXG4gICAgICAgICAgICB0ZXh0YXJlYUNsYXNzTmFtZSAmJiB0ZXh0YXJlYUNsYXNzTmFtZSxcbiAgICAgICAgICAgICFlcnJvciAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciB0ZXh0LWZvcmVncm91bmQgaG9jdXM6Ym9yZGVyLWZvcmVncm91bmQgcGxhY2Vob2xkZXItYWNjZW50LWZpdmVgLFxuICAgICAgICAgICAgZXJyb3IgJiZcbiAgICAgICAgICAgICAgdHdgdGV4dC1lcnJvciBib3JkZXItZXJyb3IgaG9jdXM6Ym9yZGVyLWVycm9yIHBsYWNlaG9sZGVyLWVycm9yYCxcbiAgICAgICAgICAgIGRpc2FibGVkICYmXG4gICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgYmctYmFja2dyb3VuZCBjdXJzb3Itbm90LWFsbG93ZWQgcGxhY2Vob2xkZXItYWNjZW50LWZpdmVgLFxuICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZFwiICYmXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIHRleHQtYnJhbmQtdXYgaG9jdXM6Ym9yZGVyLWJyYW5kLXV2IHBsYWNlaG9sZGVyLWFjY2VudC1mb3VyYCxcbiAgICAgICAgICAgIHZhcmlhbnQgPT09IFwiYnJhbmQtZGFya1wiICYmXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICB0d2Bib3JkZXItdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSBiZy1icmFuZC1tZWxyb3NlIGJnLW9wYWNpdHktMjAgcGxhY2Vob2xkZXItYnJhbmQtbWVscm9zZSBob2N1czooYm9yZGVyLXRyYW5zcGFyZW50IGJnLW9wYWNpdHktMzApYCxcbiAgICAgICAgICAgICFyZXNpemUgJiYgdHdgcmVzaXplLW5vbmVgXG4gICAgICAgICAgXX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cblRleHRhcmVhLmRlZmF1bHRQcm9wcyA9IHtcbiAgcmVzaXplOiBmYWxzZSxcbiAgcm93czogMyxcbn07XG5cblRleHRhcmVhLnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICB0ZXh0YXJlYUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHJvd3M6IFByb3BUeXBlcy5udW1iZXIsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJicmFuZFwiLCBcImJyYW5kLWRhcmtcIl0pLFxuICByZXNpemU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRhcmVhO1xuIl19 */"]},e)))});Textarea.defaultProps={resize:!1,rows:3},Textarea.propTypes={onChange:PropTypes.func,textareaClassName:PropTypes.string,className:PropTypes.string,value:PropTypes.string,defaultValue:PropTypes.string,label:PropTypes.string,id:PropTypes.string.isRequired,error:PropTypes.bool,disabled:PropTypes.bool,rows:PropTypes.number,variant:PropTypes.oneOf(["brand","brand-dark"]),resize:PropTypes.bool.isRequired};export{Textarea as default};
