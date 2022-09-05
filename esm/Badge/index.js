import{extends as _extends}from"../_virtual/_rollupPluginBabelHelpers.js";import classNames from"classnames";import PropTypes from"prop-types";import{jsx}from"@emotion/react";const Badge=({style:e,children:r,minimal:s,className:o,rounded:t,...a})=>{var n=[{"text-foreground":"default"===e,"text-success":"positive"===e,"text-warning":"warning"===e,"text-error":"danger"===e}];return jsx("div",_extends({className:classNames("inline-flex items-center px-2.5 rounded text-sm font-medium leading-6",!t&&n,!t&&"border border-border",t&&[{"rounded-full text-white":t,"bg-foreground":"default"===e,"bg-success":"positive"==e,"bg-warning":"warning"===e,"bg-error":"danger"===e}],o)},a),!s&&!t&&jsx("svg",{className:classNames("-ml-0.5 mr-1.5 h-2 w-2",n),fill:"currentColor",viewBox:"0 0 8 8"},jsx("circle",{cx:"4",cy:"4",r:"3"})),r)};Badge.defaultProps={style:"default",rounded:!1,minimal:!1},Badge.propTypes={style:PropTypes.oneOf(["default","positive","warning","danger"]),rounded:PropTypes.bool,minimal:PropTypes.bool};export{Badge as default};