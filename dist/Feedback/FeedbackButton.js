"use strict";var _rollupPluginBabelHelpers=require("../_virtual/_rollupPluginBabelHelpers.js"),react=require("@emotion/react"),React=require("react"),index=require("../Button/index.js");function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var React__default=_interopDefaultLegacy(React);const FeedbackButton=React__default.default.forwardRef(({open:t,setOpen:a,...e},r)=>{var e={variant:"secondary",label:"Feedback",...e},l=React.useCallback(e=>{e.preventDefault(),a(!t)},[a]);return react.jsx(index,_rollupPluginBabelHelpers.extends({ref:r,onClick:l},e))});module.exports=FeedbackButton;
