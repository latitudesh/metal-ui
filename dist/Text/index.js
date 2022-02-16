"use strict";var classNames=require("classnames"),react=require("react"),PropTypes=require("prop-types"),react$1=require("@emotion/react");function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var classNames__default=_interopDefaultLegacy(classNames),PropTypes__default=_interopDefaultLegacy(PropTypes);function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,a=arguments[t];for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}class Text extends react.PureComponent{render(){const{className:e,bold:t,color:r,small:a,is:o,...s}=this.props;return react$1.jsx(o,_extends({className:classNames__default.default(e,r,{"font-semibold":Boolean(t),"font-normal":!Boolean(t),"text-base":!Boolean(a),"text-sm":Boolean(a)})},s))}}_defineProperty(Text,"propTypes",{bold:PropTypes__default.default.bool,color:PropTypes__default.default.string,is:PropTypes__default.default.oneOf(["span","p","li"]).isRequired,className:PropTypes__default.default.string}),_defineProperty(Text,"defaultProps",{className:null,color:"text-foreground",is:"span"}),module.exports=Text;