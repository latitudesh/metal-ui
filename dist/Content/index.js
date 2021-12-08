"use strict";var React=require("react"),PropTypes=require("prop-types"),classNames=require("classnames"),react=require("@emotion/react");function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var React__default=_interopDefaultLegacy(React),PropTypes__default=_interopDefaultLegacy(PropTypes),classNames__default=_interopDefaultLegacy(classNames);const Content=React__default.default.forwardRef(({children:e,size:a,className:t,bg:s},l)=>{return react.jsx("div",{ref:l,className:classNames__default.default("flex-1 relative overflow-y-auto focus:outline-none",{[`bg-${s}`]:s},t)},react.jsx("div",{className:"px-10 py-8"},react.jsx("div",{className:classNames__default.default("mx-auto",{"max-w-xs":"xsmall"===a,"max-w-2xl":"small"===a,"max-w-5xl":"default"===a||!a,"max-w-full":"full"===a})},e)))});Content.defaultProps={bg:"white"},Content.propTypes={children:PropTypes__default.default.node,size:PropTypes__default.default.string,className:PropTypes__default.default.string,bg:PropTypes__default.default.string},module.exports=Content;
