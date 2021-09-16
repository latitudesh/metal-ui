"use strict";var classNames=require("classnames"),react=require("react"),PropTypes=require("prop-types"),react$1=require("@emotion/react");function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var classNames__default=_interopDefaultLegacy(classNames),PropTypes__default=_interopDefaultLegacy(PropTypes);function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,a=arguments[t];for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}class Heading extends react.PureComponent{render(){const{className:e,color:t,size:r,...a}=this.props;var s=`h${this.props.size}`;return react$1.jsx(s,_extends({className:classNames__default.default("",e,{"text-4xl font-bold tracking-tighter":1==r,"text-3xl font-semibold tracking-tighter":2==r,"text-2xl font-semibold tracking-tight":3==r,"text-xl font-semibold tracking-tight":4==r,"text-lg font-semibold":5==r,"text-normal font-normal":6==r,"text-foreground":"default"==t,"text-error":"danger"==t})},a))}}_defineProperty(Heading,"propTypes",{size:PropTypes__default.default.oneOf([1,2,3,4,5,6]).isRequired,color:PropTypes__default.default.oneOf(["default","danger"]).isRequired,className:PropTypes__default.default.string}),_defineProperty(Heading,"defaultProps",{size:1,color:"default",className:""}),module.exports=Heading;
