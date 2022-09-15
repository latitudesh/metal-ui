"use strict";var _rollupPluginBabelHelpers=require("../_virtual/_rollupPluginBabelHelpers.js"),React=require("react"),PropTypes=require("prop-types"),getInitials=require("./utils/getInitials.js"),hash=require("./utils/hash.js"),getAvatarProps=require("./utils/getAvatarProps.js"),getInitialsFontSize=require("./utils/getInitialsFontSize.js"),classNames=require("classnames"),react=require("@emotion/react");function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var PropTypes__default=_interopDefaultLegacy(PropTypes),classNames__default=_interopDefaultLegacy(classNames);class Avatar extends React.PureComponent{constructor(e,t){super(e,t),_rollupPluginBabelHelpers.defineProperty(this,"getColorProps",()=>{var{isSolid:e,color:t,hashValue:r,name:a}=this.props;return"automatic"===t?(r=hash(r||a),getAvatarProps({isSolid:e,color:t,hashValue:r})):getAvatarProps({isSolid:e,color:t})})}render(){const{className:e,size:t,name:r,isSolid:a,isDashed:l,hashValue:s,getInitials:i,color:o,sizeLimitOneCharacter:u,...n}=this.props;var p=getInitialsFontSize(t,u)+"px";let d=i(r);t<=u&&(d=d.slice(0,1));var c=this.getColorProps();return react.jsx("div",_rollupPluginBabelHelpers.extends({className:classNames__default.default("overflow-hidden relative inline-flex flex-shrink-0 justify-center",e,{"rounded-full":!Boolean(l),"rounded border-2 border-dashed border-accent-four":Boolean(l)}),style:{backgroundColor:l?"transparent":c.backgroundColor,width:t,height:t},title:r},n),react.jsx("span",{className:classNames__default.default("relative flex justify-center items-center",{"text-accent-four":Boolean(l)}),style:{color:!l&&c.color,fontSize:p,lineHeight:p,width:t,height:l?t-4:t}},d))}}_rollupPluginBabelHelpers.defineProperty(Avatar,"propTypes",{size:PropTypes__default.default.number,name:PropTypes__default.default.string,hashValue:PropTypes__default.default.string,isSolid:PropTypes__default.default.bool,isDashed:PropTypes__default.default.bool,color:PropTypes__default.default.string.isRequired,getInitials:PropTypes__default.default.func,sizeLimitOneCharacter:PropTypes__default.default.number}),_rollupPluginBabelHelpers.defineProperty(Avatar,"defaultProps",{color:"automatic",size:24,isSolid:!1,isDashed:!1,getInitials:getInitials,sizeLimitOneCharacter:20}),module.exports=Avatar;
