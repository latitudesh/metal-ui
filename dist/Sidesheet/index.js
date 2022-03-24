"use strict";var require$$0$1=require("react"),reactDom=require("react-dom"),PropTypes=require("prop-types"),react=require("@emotion/react"),classNames$1=require("classnames");function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var require$$0__default=_interopDefaultLegacy(require$$0$1),PropTypes__default=_interopDefaultLegacy(PropTypes),classNames__default=_interopDefaultLegacy(classNames$1);function getAugmentedNamespace(r){if(r.__esModule)return r;var n=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach(function(e){var t=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(n,e,t.get?t:{enumerable:!0,get:function(){return r[e]}})}),n}var bind={exports:{}},classNames=(!function(e){function c(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"==n||"number"==n)e.push(this&&this[r]||r);else if(Array.isArray(r))e.push(c.apply(this,r));else if("object"==n)if(r.toString===Object.prototype.toString)for(var i in r)a.call(r,i)&&r[i]&&e.push(this&&this[i]||i);else e.push(r.toString())}}return e.join(" ")}var a;a={}.hasOwnProperty,e.exports?e.exports=c.default=c:window.classNames=c}(bind),bind.exports);function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Box=({flex:e,alignItems:t,justifyContent:r,flexDirection:n,flexWrap:i,children:c,className:a,rootCard:o,noPadding:l,backgroundColor:u,...s})=>react.jsx("div",_extends({className:classNames__default.default(a,u),css:["overflow:hidden;",Boolean(e)&&{display:"flex"},!Boolean(u)&&{"--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))"},"start"===t&&{alignItems:"flex-start"},"end"===t&&{alignItems:"flex-end"},"center"===t&&{alignItems:"center"},"baseline"===t&&{alignItems:"baseline"},"stretch"===t&&{alignItems:"stretch"},"start"===r&&{justifyContent:"flex-start"},"end"===r&&{justifyContent:"flex-end"},"center"===r&&{justifyContent:"center"},"between"===r&&{justifyContent:"space-between"},"around"===r&&{justifyContent:"space-around"},"evenly"===r&&{justifyContent:"space-evenly"},"row"===n&&{flexDirection:"row"},"row-reverse"===n&&{flexDirection:"row-reverse"},"col"===n&&{flexDirection:"column"},"col-reverse"===n&&{flexDirection:"column-reverse"},Boolean(o)&&{marginBottom:"1rem",borderWidth:"1px","--tw-border-opacity":"1",borderColor:"rgba(234, 234, 234, var(--tw-border-opacity))",borderRadius:"5px","--tw-shadow":"0 1px 2px 0 rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},!Boolean(l)&&{paddingLeft:"1.5rem",paddingRight:"1.5rem",paddingTop:"1rem",paddingBottom:"1rem"},"wrap"===i&&{flexWrap:"wrap"},"wrap-reverse"===i&&{flexWrap:"wrap-reverse"},"nowrap"===i&&{flexWrap:"nowrap"},"production"===process.env.NODE_ENV?"":";label:Box;","production"===process.env.NODE_ENV?"":"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5jb25zdCBCb3ggPSAoe1xuICBmbGV4LFxuICBhbGlnbkl0ZW1zLFxuICBqdXN0aWZ5Q29udGVudCxcbiAgZmxleERpcmVjdGlvbixcbiAgZmxleFdyYXAsXG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIHJvb3RDYXJkLFxuICBub1BhZGRpbmcsXG4gIGJhY2tncm91bmRDb2xvcixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBiYWNrZ3JvdW5kQ29sb3IpfVxuICAgICAgY3NzPXtbXG4gICAgICAgIHR3YG92ZXJmbG93LWhpZGRlbmAsXG4gICAgICAgIEJvb2xlYW4oZmxleCkgJiYgdHdgZmxleGAsXG4gICAgICAgICFCb29sZWFuKGJhY2tncm91bmRDb2xvcikgJiYgdHdgYmctd2hpdGVgLFxuXG4gICAgICAgIGFsaWduSXRlbXMgPT09IFwic3RhcnRcIiAmJiB0d2BpdGVtcy1zdGFydGAsXG4gICAgICAgIGFsaWduSXRlbXMgPT09IFwiZW5kXCIgJiYgdHdgaXRlbXMtZW5kYCxcbiAgICAgICAgYWxpZ25JdGVtcyA9PT0gXCJjZW50ZXJcIiAmJiB0d2BpdGVtcy1jZW50ZXJgLFxuICAgICAgICBhbGlnbkl0ZW1zID09PSBcImJhc2VsaW5lXCIgJiYgdHdgaXRlbXMtYmFzZWxpbmVgLFxuICAgICAgICBhbGlnbkl0ZW1zID09PSBcInN0cmV0Y2hcIiAmJiB0d2BpdGVtcy1zdHJldGNoYCxcblxuICAgICAgICBqdXN0aWZ5Q29udGVudCA9PT0gXCJzdGFydFwiICYmIHR3YGp1c3RpZnktc3RhcnRgLFxuICAgICAgICBqdXN0aWZ5Q29udGVudCA9PT0gXCJlbmRcIiAmJiB0d2BqdXN0aWZ5LWVuZGAsXG4gICAgICAgIGp1c3RpZnlDb250ZW50ID09PSBcImNlbnRlclwiICYmIHR3YGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAganVzdGlmeUNvbnRlbnQgPT09IFwiYmV0d2VlblwiICYmIHR3YGp1c3RpZnktYmV0d2VlbmAsXG4gICAgICAgIGp1c3RpZnlDb250ZW50ID09PSBcImFyb3VuZFwiICYmIHR3YGp1c3RpZnktYXJvdW5kYCxcbiAgICAgICAganVzdGlmeUNvbnRlbnQgPT09IFwiZXZlbmx5XCIgJiYgdHdganVzdGlmeS1ldmVubHlgLFxuXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gPT09IFwicm93XCIgJiYgdHdgZmxleC1yb3dgLFxuICAgICAgICBmbGV4RGlyZWN0aW9uID09PSBcInJvdy1yZXZlcnNlXCIgJiYgdHdgZmxleC1yb3ctcmV2ZXJzZWAsXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gPT09IFwiY29sXCIgJiYgdHdgZmxleC1jb2xgLFxuICAgICAgICBmbGV4RGlyZWN0aW9uID09PSBcImNvbC1yZXZlcnNlXCIgJiYgdHdgZmxleC1jb2wtcmV2ZXJzZWAsXG5cbiAgICAgICAgQm9vbGVhbihyb290Q2FyZCkgJiYgdHdgbWItNCBib3JkZXIgYm9yZGVyLWJvcmRlciByb3VuZGVkIHNoYWRvdy1zbWAsXG4gICAgICAgICFCb29sZWFuKG5vUGFkZGluZykgJiYgdHdgcHgtNiBweS00YCxcblxuICAgICAgICBmbGV4V3JhcCA9PT0gXCJ3cmFwXCIgJiYgdHdgZmxleC13cmFwYCxcbiAgICAgICAgZmxleFdyYXAgPT09IFwid3JhcC1yZXZlcnNlXCIgJiYgdHdgZmxleC13cmFwLXJldmVyc2VgLFxuICAgICAgICBmbGV4V3JhcCA9PT0gXCJub3dyYXBcIiAmJiB0d2BmbGV4LW5vd3JhcGAsXG4gICAgICBdfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkJveC5kZWZhdWx0UHJvcHMgPSB7XG4gIGZsZXg6IGZhbHNlLFxuICBhbGlnbkl0ZW1zOiBudWxsLFxuICBqdXN0aWZ5Q29udGVudDogbnVsbCxcbiAgZmxleERpcmVjdGlvbjogbnVsbCxcbiAgcm9vdENhcmQ6IGZhbHNlLFxuICBub1BhZGRpbmc6IGZhbHNlLFxuICBmbGV4V3JhcDogbnVsbCxcbn07XG5cbkJveC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHJlbmRlcnMgdGhlIEJveCB3aXRoIGBkaXNwbGF5OmZsZXhgXG4gICAqL1xuICBmbGV4OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIENvbnRyb2xzIGl0ZW0gYWxpZ25tZW50IHdpdGggYGFsaWduLWl0ZW1zYC4gT25seSB3b3JrcyB3aGVuIGZsZXggaXMgdHJ1ZVxuICAgKi9cbiAgYWxpZ25JdGVtczogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcInN0YXJ0XCIsXG4gICAgXCJlbmRcIixcbiAgICBcImNlbnRlclwiLFxuICAgIFwiYmFzZWxpbmVcIixcbiAgICBcInN0cmV0Y2hcIixcbiAgXSksXG4gIC8qKlxuICAgKiBDb250cm9scyBpdGVtIHBvc2l0aW9uaW5nIHdpdGggYGp1c3RpZnktY29udGVudGAuIE9ubHkgd29ya3Mgd2hlbiBmbGV4IGlzIHRydWVcbiAgICovXG4gIGp1c3RpZnlDb250ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwic3RhcnRcIixcbiAgICBcImVuZFwiLFxuICAgIFwiY2VudGVyXCIsXG4gICAgXCJiZXR3ZWVuXCIsXG4gICAgXCJhcm91bmRcIixcbiAgICBcImV2ZW5seVwiLFxuICBdKSxcbiAgLyoqXG4gICAqIENvbnRyb2xzIHRoZSBkaXJlY3Rpb24gb2YgZmxleCBpdGVtcyB3aXRoIGBmbGV4LWRpcmVjdGlvbmAuIE9ubHkgd29ya3Mgd2hlbiBmbGV4IGlzIHRydWVcbiAgICovXG4gIGZsZXhEaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbXCJyb3dcIiwgXCJyb3ctcmV2ZXJzZVwiLCBcImNvbFwiLCBcImNvbC1yZXZlcnNlXCJdKSxcbiAgLyoqXG4gICAqIENvbnRyb2xzIGhvdyBmbGV4IGl0ZW1zIHdyYXAgd2l0aCBgZmxleC13cmFwYC4gT25seSB3b3JrcyB3aGVuIGZsZXggaXMgdHJ1ZVxuICAgKi9cbiAgZmxleFdyYXA6IFByb3BUeXBlcy5vbmVPZihbXCJ3cmFwXCIsIFwid3JhcC1yZXZlcnNlXCIsIFwibm93cmFwXCJdKSxcbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGNvbnRlbnRcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIEFkZHMgYm9yZGVyIGFuZCBzaGFkb3cgdG8gdGhlIEJveC4gVXNlZnVsIHdoZW4gdXNpbmcgQm94IGFzIHRoZSBwYXJlbnQgZWxlbWVudCBvZiBhIHNlY3Rpb25cbiAgICovXG4gIHJvb3RDYXJkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIHBhZGRpbmcgZnJvbSB0aGUgQm94LiBVc2VmdWwgd2hlbiB1c2luZyBCb3ggYXMgYSBzdGFuZGFyZCBgZGl2YC5cbiAgICovXG4gIG5vUGFkZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFNldHMgYSBiYWNrZ3JvdW5kIGNvbG9yLiBTaG91bGQgYmUgYSB0YWlsd2luZCBjbGFzcy5cbiAgICovXG4gIGJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJveDsiXX0= */","production"===process.env.NODE_ENV?"":";label:Box;","production"===process.env.NODE_ENV?"":"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5jb25zdCBCb3ggPSAoe1xuICBmbGV4LFxuICBhbGlnbkl0ZW1zLFxuICBqdXN0aWZ5Q29udGVudCxcbiAgZmxleERpcmVjdGlvbixcbiAgZmxleFdyYXAsXG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIHJvb3RDYXJkLFxuICBub1BhZGRpbmcsXG4gIGJhY2tncm91bmRDb2xvcixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBiYWNrZ3JvdW5kQ29sb3IpfVxuICAgICAgY3NzPXtbXG4gICAgICAgIHR3YG92ZXJmbG93LWhpZGRlbmAsXG4gICAgICAgIEJvb2xlYW4oZmxleCkgJiYgdHdgZmxleGAsXG4gICAgICAgICFCb29sZWFuKGJhY2tncm91bmRDb2xvcikgJiYgdHdgYmctd2hpdGVgLFxuXG4gICAgICAgIGFsaWduSXRlbXMgPT09IFwic3RhcnRcIiAmJiB0d2BpdGVtcy1zdGFydGAsXG4gICAgICAgIGFsaWduSXRlbXMgPT09IFwiZW5kXCIgJiYgdHdgaXRlbXMtZW5kYCxcbiAgICAgICAgYWxpZ25JdGVtcyA9PT0gXCJjZW50ZXJcIiAmJiB0d2BpdGVtcy1jZW50ZXJgLFxuICAgICAgICBhbGlnbkl0ZW1zID09PSBcImJhc2VsaW5lXCIgJiYgdHdgaXRlbXMtYmFzZWxpbmVgLFxuICAgICAgICBhbGlnbkl0ZW1zID09PSBcInN0cmV0Y2hcIiAmJiB0d2BpdGVtcy1zdHJldGNoYCxcblxuICAgICAgICBqdXN0aWZ5Q29udGVudCA9PT0gXCJzdGFydFwiICYmIHR3YGp1c3RpZnktc3RhcnRgLFxuICAgICAgICBqdXN0aWZ5Q29udGVudCA9PT0gXCJlbmRcIiAmJiB0d2BqdXN0aWZ5LWVuZGAsXG4gICAgICAgIGp1c3RpZnlDb250ZW50ID09PSBcImNlbnRlclwiICYmIHR3YGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAganVzdGlmeUNvbnRlbnQgPT09IFwiYmV0d2VlblwiICYmIHR3YGp1c3RpZnktYmV0d2VlbmAsXG4gICAgICAgIGp1c3RpZnlDb250ZW50ID09PSBcImFyb3VuZFwiICYmIHR3YGp1c3RpZnktYXJvdW5kYCxcbiAgICAgICAganVzdGlmeUNvbnRlbnQgPT09IFwiZXZlbmx5XCIgJiYgdHdganVzdGlmeS1ldmVubHlgLFxuXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gPT09IFwicm93XCIgJiYgdHdgZmxleC1yb3dgLFxuICAgICAgICBmbGV4RGlyZWN0aW9uID09PSBcInJvdy1yZXZlcnNlXCIgJiYgdHdgZmxleC1yb3ctcmV2ZXJzZWAsXG4gICAgICAgIGZsZXhEaXJlY3Rpb24gPT09IFwiY29sXCIgJiYgdHdgZmxleC1jb2xgLFxuICAgICAgICBmbGV4RGlyZWN0aW9uID09PSBcImNvbC1yZXZlcnNlXCIgJiYgdHdgZmxleC1jb2wtcmV2ZXJzZWAsXG5cbiAgICAgICAgQm9vbGVhbihyb290Q2FyZCkgJiYgdHdgbWItNCBib3JkZXIgYm9yZGVyLWJvcmRlciByb3VuZGVkIHNoYWRvdy1zbWAsXG4gICAgICAgICFCb29sZWFuKG5vUGFkZGluZykgJiYgdHdgcHgtNiBweS00YCxcblxuICAgICAgICBmbGV4V3JhcCA9PT0gXCJ3cmFwXCIgJiYgdHdgZmxleC13cmFwYCxcbiAgICAgICAgZmxleFdyYXAgPT09IFwid3JhcC1yZXZlcnNlXCIgJiYgdHdgZmxleC13cmFwLXJldmVyc2VgLFxuICAgICAgICBmbGV4V3JhcCA9PT0gXCJub3dyYXBcIiAmJiB0d2BmbGV4LW5vd3JhcGAsXG4gICAgICBdfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkJveC5kZWZhdWx0UHJvcHMgPSB7XG4gIGZsZXg6IGZhbHNlLFxuICBhbGlnbkl0ZW1zOiBudWxsLFxuICBqdXN0aWZ5Q29udGVudDogbnVsbCxcbiAgZmxleERpcmVjdGlvbjogbnVsbCxcbiAgcm9vdENhcmQ6IGZhbHNlLFxuICBub1BhZGRpbmc6IGZhbHNlLFxuICBmbGV4V3JhcDogbnVsbCxcbn07XG5cbkJveC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHJlbmRlcnMgdGhlIEJveCB3aXRoIGBkaXNwbGF5OmZsZXhgXG4gICAqL1xuICBmbGV4OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIENvbnRyb2xzIGl0ZW0gYWxpZ25tZW50IHdpdGggYGFsaWduLWl0ZW1zYC4gT25seSB3b3JrcyB3aGVuIGZsZXggaXMgdHJ1ZVxuICAgKi9cbiAgYWxpZ25JdGVtczogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcInN0YXJ0XCIsXG4gICAgXCJlbmRcIixcbiAgICBcImNlbnRlclwiLFxuICAgIFwiYmFzZWxpbmVcIixcbiAgICBcInN0cmV0Y2hcIixcbiAgXSksXG4gIC8qKlxuICAgKiBDb250cm9scyBpdGVtIHBvc2l0aW9uaW5nIHdpdGggYGp1c3RpZnktY29udGVudGAuIE9ubHkgd29ya3Mgd2hlbiBmbGV4IGlzIHRydWVcbiAgICovXG4gIGp1c3RpZnlDb250ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwic3RhcnRcIixcbiAgICBcImVuZFwiLFxuICAgIFwiY2VudGVyXCIsXG4gICAgXCJiZXR3ZWVuXCIsXG4gICAgXCJhcm91bmRcIixcbiAgICBcImV2ZW5seVwiLFxuICBdKSxcbiAgLyoqXG4gICAqIENvbnRyb2xzIHRoZSBkaXJlY3Rpb24gb2YgZmxleCBpdGVtcyB3aXRoIGBmbGV4LWRpcmVjdGlvbmAuIE9ubHkgd29ya3Mgd2hlbiBmbGV4IGlzIHRydWVcbiAgICovXG4gIGZsZXhEaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbXCJyb3dcIiwgXCJyb3ctcmV2ZXJzZVwiLCBcImNvbFwiLCBcImNvbC1yZXZlcnNlXCJdKSxcbiAgLyoqXG4gICAqIENvbnRyb2xzIGhvdyBmbGV4IGl0ZW1zIHdyYXAgd2l0aCBgZmxleC13cmFwYC4gT25seSB3b3JrcyB3aGVuIGZsZXggaXMgdHJ1ZVxuICAgKi9cbiAgZmxleFdyYXA6IFByb3BUeXBlcy5vbmVPZihbXCJ3cmFwXCIsIFwid3JhcC1yZXZlcnNlXCIsIFwibm93cmFwXCJdKSxcbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGNvbnRlbnRcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIEFkZHMgYm9yZGVyIGFuZCBzaGFkb3cgdG8gdGhlIEJveC4gVXNlZnVsIHdoZW4gdXNpbmcgQm94IGFzIHRoZSBwYXJlbnQgZWxlbWVudCBvZiBhIHNlY3Rpb25cbiAgICovXG4gIHJvb3RDYXJkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIHBhZGRpbmcgZnJvbSB0aGUgQm94LiBVc2VmdWwgd2hlbiB1c2luZyBCb3ggYXMgYSBzdGFuZGFyZCBgZGl2YC5cbiAgICovXG4gIG5vUGFkZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFNldHMgYSBiYWNrZ3JvdW5kIGNvbG9yLiBTaG91bGQgYmUgYSB0YWlsd2luZCBjbGFzcy5cbiAgICovXG4gIGJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJveDsiXX0= */"]},s),c);Box.defaultProps={flex:!1,alignItems:null,justifyContent:null,flexDirection:null,rootCard:!1,noPadding:!1,flexWrap:null},Box.propTypes={flex:PropTypes__default.default.bool,alignItems:PropTypes__default.default.oneOf(["start","end","center","baseline","stretch"]),justifyContent:PropTypes__default.default.oneOf(["start","end","center","between","around","evenly"]),flexDirection:PropTypes__default.default.oneOf(["row","row-reverse","col","col-reverse"]),flexWrap:PropTypes__default.default.oneOf(["wrap","wrap-reverse","nowrap"]),children:PropTypes__default.default.node,rootCard:PropTypes__default.default.bool,noPadding:PropTypes__default.default.bool,className:PropTypes__default.default.string,backgroundColor:PropTypes__default.default.string};var useKeyPressEvent$1={},extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function __extends(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function __rest(e,t){var r={};for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]]);return r}function __decorate(e,t,r,n){var i,c=arguments.length,a=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var o=e.length-1;0<=o;o--)(i=e[o])&&(a=(c<3?i(a):3<c?i(t,r,a):i(t,r))||a);return 3<c&&a&&Object.defineProperty(t,r,a),a}function __param(r,n){return function(e,t){n(e,t,r)}}function __metadata(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function __awaiter(e,a,o,l){return new(o=o||Promise)(function(r,t){function n(e){try{c(l.next(e))}catch(e){t(e)}}function i(e){try{c(l.throw(e))}catch(e){t(e)}}function c(e){var t;e.done?r(e.value):((t=e.value)instanceof o?t:new o(function(e){e(t)})).then(n,i)}c((l=l.apply(e,a||[])).next())})}function __generator(n,i){var c,a,o,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(r){return function(e){var t=[r,e];if(c)throw new TypeError("Generator is already executing.");for(;l;)try{if(c=1,a&&(o=2&t[0]?a.return:t[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,t[1])).done)return o;switch(a=0,(t=o?[2&t[0],o.value]:t)[0]){case 0:case 1:o=t;break;case 4:return l.label++,{value:t[1],done:!1};case 5:l.label++,a=t[1],t=[0];continue;case 7:t=l.ops.pop(),l.trys.pop();continue;default:if(!(o=0<(o=l.trys).length&&o[o.length-1])&&(6===t[0]||2===t[0])){l=0;continue}if(3===t[0]&&(!o||t[1]>o[0]&&t[1]<o[3])){l.label=t[1];break}if(6===t[0]&&l.label<o[1]){l.label=o[1],o=t;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(t);break}o[2]&&l.ops.pop(),l.trys.pop();continue}t=i.call(n,l)}catch(e){t=[6,e],a=0}finally{c=o=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}}var __createBinding=Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]};function __exportStar(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||__createBinding(t,e,r)}function __values(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return{value:(e=e&&n>=e.length?void 0:e)&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,c=r.call(e),a=[];try{for(;(void 0===t||0<t--)&&!(n=c.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=c.return)&&r.call(c)}finally{if(i)throw i.error}}return a}function __spread(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(__read(arguments[t]));return e}function __spreadArrays(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),i=0,t=0;t<r;t++)for(var c=arguments[t],a=0,o=c.length;a<o;a++,i++)n[i]=c[a];return n}function __spreadArray(e,t,r){if(r||2===arguments.length)for(var n,i=0,c=t.length;i<c;i++)!n&&i in t||((n=n||Array.prototype.slice.call(t,0,i))[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}function __await(e){return this instanceof __await?(this.v=e,this):new __await(e)}function __asyncGenerator(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=r.apply(e,t||[]),c=[],a={};return n("next"),n("throw"),n("return"),a[Symbol.asyncIterator]=function(){return this},a;function n(n){i[n]&&(a[n]=function(r){return new Promise(function(e,t){1<c.push([n,r,e,t])||o(n,r)})})}function o(e,t){try{(r=i[e](t)).value instanceof __await?Promise.resolve(r.value.v).then(l,u):s(c[0][2],r)}catch(e){s(c[0][3],e)}var r}function l(e){o("next",e)}function u(e){o("throw",e)}function s(e,t){e(t),c.shift(),c.length&&o(c[0][0],c[0][1])}}function __asyncDelegator(n){var i,e={};return t("next"),t("throw",function(e){throw e}),t("return"),e[Symbol.iterator]=function(){return this},e;function t(t,r){e[t]=n[t]?function(e){return(i=!i)?{value:__await(n[t](e)),done:"return"===t}:r?r(e):e}:r}}function __asyncValues(a){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,t=a[Symbol.asyncIterator];return t?t.call(a):(a="function"==typeof __values?__values(a):a[Symbol.iterator](),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(c){e[c]=a[c]&&function(i){return new Promise(function(e,t){var r,n;i=a[c](i),r=e,e=t,n=i.done,t=i.value,Promise.resolve(t).then(function(e){r({value:e,done:n})},e)})}}}function __makeTemplateObject(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var __setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function __importStar(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t}function __importDefault(e){return e&&e.__esModule?e:{default:e}}function __classPrivateFieldGet(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e===t&&n:t.has(e))return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e);throw new TypeError("Cannot read private member from an object whose class did not declare it")}function __classPrivateFieldSet(e,t,r,n,i){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e===t&&i:t.has(e))return"a"===n?i.call(e,r):i?i.value=r:t.set(e,r),r;throw new TypeError("Cannot write private member to an object whose class did not declare it")}var tslib_es6=Object.freeze({__proto__:null,__extends:__extends,get __assign(){return __assign},__rest:__rest,__decorate:__decorate,__param:__param,__metadata:__metadata,__awaiter:__awaiter,__generator:__generator,__createBinding:__createBinding,__exportStar:__exportStar,__values:__values,__read:__read,__spread:__spread,__spreadArrays:__spreadArrays,__spreadArray:__spreadArray,__await:__await,__asyncGenerator:__asyncGenerator,__asyncDelegator:__asyncDelegator,__asyncValues:__asyncValues,__makeTemplateObject:__makeTemplateObject,__importStar:__importStar,__importDefault:__importDefault,__classPrivateFieldGet:__classPrivateFieldGet,__classPrivateFieldSet:__classPrivateFieldSet}),require$$0=getAugmentedNamespace(tslib_es6),useKeyPress$1={},useKey$1={},useEvent$1={},util={},noop=(Object.defineProperty(util,"__esModule",{value:!0}),util.isNavigator=util.isBrowser=util.off=util.on=util.noop=void 0,function(){});function on(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];e&&e.addEventListener&&e.addEventListener.apply(e,t)}function off(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}util.noop=noop,util.on=on,util.off=off,util.isBrowser="undefined"!=typeof window,util.isNavigator="undefined"!=typeof navigator,Object.defineProperty(useEvent$1,"__esModule",{value:!0});var react_1$4=require$$0__default.default,util_1$1=util,defaultTarget=util_1$1.isBrowser?window:null,isListenerType1=function(e){return!!e.addEventListener},isListenerType2=function(e){return!!e.on},useEvent=function(e,t,r,n){void 0===r&&(r=defaultTarget),react_1$4.useEffect(function(){if(t&&r)return isListenerType1(r)?util_1$1.on(r,e,t,n):isListenerType2(r)&&r.on(e,t,n),function(){isListenerType1(r)?util_1$1.off(r,e,t,n):isListenerType2(r)&&r.off(e,t,n)}},[e,t,r,JSON.stringify(n)])},tslib_1$2=(useEvent$1.default=useEvent,Object.defineProperty(useKey$1,"__esModule",{value:!0}),require$$0),react_1$3=require$$0__default.default,useEvent_1=tslib_1$2.__importDefault(useEvent$1),util_1=util,createKeyPredicate=function(t){return"function"==typeof t?t:"string"==typeof t?function(e){return e.key===t}:t?function(){return!0}:function(){return!1}},useKey=function(e,r,t,n){void 0===r&&(r=util_1.noop);var i=(t=void 0===t?{}:t).event,i=void 0===i?"keydown":i,c=t.target,t=t.options,n=react_1$3.useMemo(function(){var t=createKeyPredicate(e);return function(e){if(t(e))return r(e)}},n=void 0===n?[e]:n);useEvent_1.default(i,n,c,t)},tslib_1$1=(useKey$1.default=useKey,Object.defineProperty(useKeyPress$1,"__esModule",{value:!0}),require$$0),react_1$2=require$$0__default.default,useKey_1=tslib_1$1.__importDefault(useKey$1),useKeyPress=function(e){var t=react_1$2.useState([!1,null]),r=t[0],n=t[1];return useKey_1.default(e,function(e){return n([!0,e])},{event:"keydown"},[r]),useKey_1.default(e,function(e){return n([!1,e])},{event:"keyup"},[r]),r},useUpdateEffect$1=(useKeyPress$1.default=useKeyPress,{}),useFirstMountState$1={},react_1$1=(Object.defineProperty(useFirstMountState$1,"__esModule",{value:!0}),useFirstMountState$1.useFirstMountState=void 0,require$$0__default.default);function useFirstMountState(){var e=react_1$1.useRef(!0);return e.current&&!(e.current=!1)}useFirstMountState$1.useFirstMountState=useFirstMountState,Object.defineProperty(useUpdateEffect$1,"__esModule",{value:!0});var react_1=require$$0__default.default,useFirstMountState_1=useFirstMountState$1,useUpdateEffect=function(e,t){var r=useFirstMountState_1.useFirstMountState();react_1.useEffect(function(){if(!r)return e()},t)},tslib_1=(useUpdateEffect$1.default=useUpdateEffect,Object.defineProperty(useKeyPressEvent$1,"__esModule",{value:!0}),require$$0),useKeyPress_1=tslib_1.__importDefault(useKeyPress$1),useUpdateEffect_1=tslib_1.__importDefault(useUpdateEffect$1),useKeyPressEvent=function(e,t,r,n){var n=(n=void 0===n?useKeyPress_1.default:n)(e),i=n[0],c=n[1];useUpdateEffect_1.default(function(){!i&&r?r(c):i&&t&&t(c)},[i])},_default=useKeyPressEvent$1.default=useKeyPressEvent;function XIcon(){return react.jsx("svg",{fill:"none",className:"text-accent-four",stroke:"currentColor",viewBox:"0 0 24 24",width:"16px",height:"16px"},react.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"}))}const SidesheetContent=({id:e,children:t})=>{if("undefined"==typeof window)return null;let r=require$$0$1.useRef(document.getElementById(e)||document.createElement("div"));return require$$0$1.useEffect(()=>(document.getElementById(e)||(r.current.id=e,document.body.appendChild(r.current)),()=>{r.current.parentElement&&r.current.parentElement.removeChild(r.current)}),[e]),reactDom.createPortal(t,r.current)},Sidesheet=({title:e,children:t,action:r,content:n,width:i=400,onClose:c,isShown:a=!1})=>{var o=require$$0$1.useRef(),l=require$$0$1.useRef();const[u,s]=require$$0$1.useState(!1),[g,d]=require$$0$1.useState(!1),b=(require$$0$1.useEffect(()=>{let e;return e=a?(s(!0),setTimeout(()=>d(!0),100)):(d(!1),setTimeout(()=>s(!1),300)),()=>clearTimeout(e)},[a]),()=>{u&&g&&(c(),d(!1),setTimeout(()=>s(!1),500))});return _default("Escape",b),react.jsx("div",{ref:o},t,u&&react.jsx(SidesheetContent,{id:"sidesheet"},react.jsx("div",{onClick:()=>b(),className:classNames("fixed z-50 inset-0 opacity-25 duration-200 delay-100 transition",{"bg-accent-eight":g,"bg-transparent":!g})}),react.jsx("div",{ref:l,style:{transition:"transform .2s cubic-bezier(.3,0,0,1)",transform:g?`translateX(calc(100vw - ${i}px - 20px))`:"translateX(100vw)",top:0,bottom:0,width:i,height:"calc(100% - 20px)"},className:"fixed z-50 min-w-0 bg-white duration-300 delay-200 h-full flex flex-col shadow-xl m-2 rounded"},react.jsx(Box,{flex:!0,alignItems:"center",className:"relative border-b border-border rounded rounded-b-none"},react.jsx("div",{className:"text-foreground flex-auto truncate leading-6"},e),react.jsx(Box,{flex:!0,backgroundColor:"transparent",className:"cursor-pointer bg-transparent",noPadding:!0},react.jsx("div",{onClick:()=>b()},react.jsx(XIcon,null)))),react.jsx(Box,{flex:!0,flexDirection:"col",className:"sidesheet-content relative overflow-y-auto flex-1 rounded"},react.jsx(Box,{noPadding:!0,flex:!0,flexDirection:"col",className:"overflow-visible"},n)),r&&react.jsx(Box,{flex:!0,justifyContent:"evenly",alignItems:"center",className:"sidesheet-action h-16 border-t border-border relative flex-initial rounded rounded-t-none"},r))))};Sidesheet.propTypes={content:PropTypes__default.default.element,children:PropTypes__default.default.element,className:PropTypes__default.default.string,width:PropTypes__default.default.string,action:PropTypes__default.default.element,onClose:PropTypes__default.default.func,isShown:PropTypes__default.default.bool,title:PropTypes__default.default.string},module.exports=Sidesheet;
