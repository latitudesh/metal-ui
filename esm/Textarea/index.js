import{extends as _extends}from"../_virtual/_rollupPluginBabelHelpers.js";import{jsx}from"@emotion/react";import React__default,{useCallback}from"react";import PropTypes from"prop-types";import Label from"../Label/index.js";const Textarea=React__default.forwardRef(({onChange:g,textareaClassName:I,className:C,value:c,defaultValue:b,label:A,id:l,error:i,disabled:a,rows:o,variant:r,resize:Z,...t},e)=>{var d=useCallback(I=>{g&&g(I.target.value)},[g]);return jsx("div",{className:C},A&&jsx(Label,{htmlFor:l,variant:r,disabled:a},A),jsx("textarea",_extends({id:l,ref:e,rows:o,onChange:d,defaultValue:b,"aria-label":A,"aria-required":!!A,"aria-invalid":!!i,disabled:a,value:c,css:["transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;display:block;width:100%;border-radius:5px;padding:0.5rem;border-width:1px;--tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);}font-family:inherit;@media (min-width: 640px){font-size:0.875rem;line-height:1.5rem;}",I,!i&&!a&&{"--tw-border-opacity":"1",borderColor:"rgba(234, 234, 234, var(--tw-border-opacity))","--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",":hover, :focus":{"--tw-border-opacity":"1",borderColor:"rgba(0, 0, 0, var(--tw-border-opacity))"},"::placeholder":{"--tw-placeholder-opacity":"1",color:"rgba(102, 102, 102, var(--tw-placeholder-opacity))"}},i&&{"--tw-text-opacity":"1",color:"rgba(238, 0, 0, var(--tw-text-opacity))","--tw-border-opacity":"1",borderColor:"rgba(238, 0, 0, var(--tw-border-opacity))",":hover, :focus":{"--tw-border-opacity":"1",borderColor:"rgba(238, 0, 0, var(--tw-border-opacity))"},"::placeholder":{"--tw-placeholder-opacity":"1",color:"rgba(238, 0, 0, var(--tw-placeholder-opacity))"}},a&&{"--tw-border-opacity":"1",borderColor:"rgba(234, 234, 234, var(--tw-border-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgba(244, 245, 247, var(--tw-bg-opacity))",cursor:"not-allowed","::placeholder":{"--tw-placeholder-opacity":"1",color:"rgba(102, 102, 102, var(--tw-placeholder-opacity))"}},"brand"===r&&!a&&{"--tw-border-opacity":"1",borderColor:"rgba(234, 234, 234, var(--tw-border-opacity))","--tw-text-opacity":"1",color:"rgba(99, 89, 249, var(--tw-text-opacity))",":hover, :focus":{"--tw-border-opacity":"1",borderColor:"rgba(99, 89, 249, var(--tw-border-opacity))"},"::placeholder":{"--tw-placeholder-opacity":"1",color:"rgba(136, 136, 136, var(--tw-placeholder-opacity))"}},"brand-dark"===r&&!a&&{borderColor:"rgba(0, 0, 0, 0)","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","--tw-bg-opacity":"0.2",backgroundColor:"rgba(134, 131, 229, var(--tw-bg-opacity))","::placeholder":{"--tw-placeholder-opacity":"1",color:"rgba(134, 131, 229, var(--tw-placeholder-opacity))"},":hover, :focus":{borderColor:"rgba(0, 0, 0, 0)","--tw-bg-opacity":"0.3"}},Z&&{resize:"none"},"production"===process.env.NODE_ENV?"":";label:Textarea;","production"===process.env.NODE_ENV?"":"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vTGFiZWxcIjtcblxuY29uc3QgVGV4dGFyZWEgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICB0ZXh0YXJlYUNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhbHVlLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgbGFiZWwsXG4gICAgICBpZCxcbiAgICAgIGVycm9yLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByb3dzLFxuICAgICAgdmFyaWFudCxcbiAgICAgIHJlc2l6ZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbb25DaGFuZ2VdXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8TGFiZWwgaHRtbEZvcj17aWR9IHZhcmlhbnQ9e3ZhcmlhbnR9IGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgKX1cblxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgcm93cz17cm93c31cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxuICAgICAgICAgIGFyaWEtbGFiZWw9e2xhYmVsfVxuICAgICAgICAgIGFyaWEtcmVxdWlyZWQ9eyEhbGFiZWx9XG4gICAgICAgICAgYXJpYS1pbnZhbGlkPXshIWVycm9yfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICB0d2BibG9jayB3LWZ1bGwgcm91bmRlZCBwLTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXQgc206dGV4dC1zbSBzbTpsZWFkaW5nLTYgYm9yZGVyIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvbnQtZmFtaWx5W2luaGVyaXRdYCxcbiAgICAgICAgICAgIHRleHRhcmVhQ2xhc3NOYW1lICYmIHRleHRhcmVhQ2xhc3NOYW1lLFxuICAgICAgICAgICAgIWVycm9yICYmXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIHRleHQtZm9yZWdyb3VuZCBob2N1czpib3JkZXItZm9yZWdyb3VuZCBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICBlcnJvciAmJlxuICAgICAgICAgICAgICB0d2B0ZXh0LWVycm9yIGJvcmRlci1lcnJvciBob2N1czpib3JkZXItZXJyb3IgcGxhY2Vob2xkZXItZXJyb3JgLFxuICAgICAgICAgICAgZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciBiZy1iYWNrZ3JvdW5kIGN1cnNvci1ub3QtYWxsb3dlZCBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kXCIgJiZcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1icmFuZC11diBob2N1czpib3JkZXItYnJhbmQtdXYgcGxhY2Vob2xkZXItYWNjZW50LWZvdXJgLFxuICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiZcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgIHR3YGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIGJnLWJyYW5kLW1lbHJvc2UgYmctb3BhY2l0eS0yMCBwbGFjZWhvbGRlci1icmFuZC1tZWxyb3NlIGhvY3VzOihib3JkZXItdHJhbnNwYXJlbnQgYmctb3BhY2l0eS0zMClgLFxuICAgICAgICAgICAgcmVzaXplICYmIHR3YHJlc2l6ZS1ub25lYFxuICAgICAgICAgIF19XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4pO1xuXG5UZXh0YXJlYS5kZWZhdWx0UHJvcHMgPSB7XG4gIHJlc2l6ZTogdHJ1ZSxcbiAgcm93czogMyxcbn07XG5cblRleHRhcmVhLnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICB0ZXh0YXJlYUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHJvd3M6IFByb3BUeXBlcy5udW1iZXIsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJicmFuZFwiLCBcImJyYW5kLWRhcmtcIl0pLFxuICByZXNpemU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRhcmVhO1xuIl19 */","production"===process.env.NODE_ENV?"":";label:Textarea;","production"===process.env.NODE_ENV?"":"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vTGFiZWxcIjtcblxuY29uc3QgVGV4dGFyZWEgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgb25DaGFuZ2UsXG4gICAgICB0ZXh0YXJlYUNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHZhbHVlLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgbGFiZWwsXG4gICAgICBpZCxcbiAgICAgIGVycm9yLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByb3dzLFxuICAgICAgdmFyaWFudCxcbiAgICAgIHJlc2l6ZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbb25DaGFuZ2VdXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8TGFiZWwgaHRtbEZvcj17aWR9IHZhcmlhbnQ9e3ZhcmlhbnR9IGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgKX1cblxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgcm93cz17cm93c31cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxuICAgICAgICAgIGFyaWEtbGFiZWw9e2xhYmVsfVxuICAgICAgICAgIGFyaWEtcmVxdWlyZWQ9eyEhbGFiZWx9XG4gICAgICAgICAgYXJpYS1pbnZhbGlkPXshIWVycm9yfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICB0d2BibG9jayB3LWZ1bGwgcm91bmRlZCBwLTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXQgc206dGV4dC1zbSBzbTpsZWFkaW5nLTYgYm9yZGVyIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvbnQtZmFtaWx5W2luaGVyaXRdYCxcbiAgICAgICAgICAgIHRleHRhcmVhQ2xhc3NOYW1lICYmIHRleHRhcmVhQ2xhc3NOYW1lLFxuICAgICAgICAgICAgIWVycm9yICYmXG4gICAgICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICAgICB0d2Bib3JkZXItYm9yZGVyIHRleHQtZm9yZWdyb3VuZCBob2N1czpib3JkZXItZm9yZWdyb3VuZCBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICBlcnJvciAmJlxuICAgICAgICAgICAgICB0d2B0ZXh0LWVycm9yIGJvcmRlci1lcnJvciBob2N1czpib3JkZXItZXJyb3IgcGxhY2Vob2xkZXItZXJyb3JgLFxuICAgICAgICAgICAgZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgdHdgYm9yZGVyLWJvcmRlciBiZy1iYWNrZ3JvdW5kIGN1cnNvci1ub3QtYWxsb3dlZCBwbGFjZWhvbGRlci1hY2NlbnQtZml2ZWAsXG4gICAgICAgICAgICB2YXJpYW50ID09PSBcImJyYW5kXCIgJiZcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgIHR3YGJvcmRlci1ib3JkZXIgdGV4dC1icmFuZC11diBob2N1czpib3JkZXItYnJhbmQtdXYgcGxhY2Vob2xkZXItYWNjZW50LWZvdXJgLFxuICAgICAgICAgICAgdmFyaWFudCA9PT0gXCJicmFuZC1kYXJrXCIgJiZcbiAgICAgICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgIHR3YGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIGJnLWJyYW5kLW1lbHJvc2UgYmctb3BhY2l0eS0yMCBwbGFjZWhvbGRlci1icmFuZC1tZWxyb3NlIGhvY3VzOihib3JkZXItdHJhbnNwYXJlbnQgYmctb3BhY2l0eS0zMClgLFxuICAgICAgICAgICAgcmVzaXplICYmIHR3YHJlc2l6ZS1ub25lYFxuICAgICAgICAgIF19XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4pO1xuXG5UZXh0YXJlYS5kZWZhdWx0UHJvcHMgPSB7XG4gIHJlc2l6ZTogdHJ1ZSxcbiAgcm93czogMyxcbn07XG5cblRleHRhcmVhLnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICB0ZXh0YXJlYUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHJvd3M6IFByb3BUeXBlcy5udW1iZXIsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJicmFuZFwiLCBcImJyYW5kLWRhcmtcIl0pLFxuICByZXNpemU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRhcmVhO1xuIl19 */"]},t)))});Textarea.defaultProps={resize:!0,rows:3},Textarea.propTypes={onChange:PropTypes.func,textareaClassName:PropTypes.string,className:PropTypes.string,value:PropTypes.string,defaultValue:PropTypes.string,label:PropTypes.string,id:PropTypes.string.isRequired,error:PropTypes.bool,disabled:PropTypes.bool,rows:PropTypes.number,variant:PropTypes.oneOf(["brand","brand-dark"]),resize:PropTypes.bool.isRequired};export{Textarea as default};
