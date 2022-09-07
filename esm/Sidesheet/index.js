import{useRef,useState,useEffect}from"react";import{createPortal}from"react-dom";import PropTypes from"prop-types";import classNames from"classnames";import Box from"../Box/index.js";import{useKeyPressEvent}from"react-use";import{jsx}from"@emotion/react";function XIcon(){return jsx("svg",{fill:"none",className:"text-accent-four",stroke:"currentColor",viewBox:"0 0 24 24",width:"16px",height:"16px"},jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"}))}const SidesheetContent=({id:e,children:t})=>{if("undefined"==typeof window)return null;let r=useRef(document.getElementById(e)||document.createElement("div"));return useEffect(()=>(document.getElementById(e)||(r.current.id=e,document.body.appendChild(r.current)),()=>{r.current.parentElement&&r.current.parentElement.removeChild(r.current)}),[e]),createPortal(t,r.current)},Sidesheet=({title:e,children:t,action:r,content:o,width:n=400,onClose:s,isShown:i=!1})=>{var a=useRef(),l=useRef();const[d,c]=useState(!1),[u,p]=useState(!1),m=(useEffect(()=>{let e;return e=i?(c(!0),setTimeout(()=>p(!0),100)):(p(!1),setTimeout(()=>c(!1),300)),()=>clearTimeout(e)},[i]),()=>{let e;return d&&u&&(s(),p(!1),e=setTimeout(()=>c(!1),500)),()=>clearTimeout(e)});return useKeyPressEvent("Escape",m),jsx("div",{ref:a},t,d&&jsx(SidesheetContent,{id:"sidesheet"},jsx("div",{onClick:()=>m(),className:classNames("fixed z-50 inset-0 opacity-25 duration-200 delay-100 transition",{"bg-accent-eight":u,"bg-transparent":!u})}),jsx("div",{ref:l,style:{transition:"transform .2s cubic-bezier(.3,0,0,1)",transform:u?`translateX(calc(100vw - ${n}px - 20px))`:"translateX(100vw)",top:0,bottom:0,width:n,height:"calc(100% - 20px)"},className:"fixed z-50 min-w-0 bg-white duration-300 delay-200 h-full flex flex-col shadow-xl m-2 rounded"},jsx(Box,{flex:!0,alignItems:"center",className:"relative border-b border-border rounded rounded-b-none"},jsx("div",{className:"text-foreground flex-auto truncate leading-6"},e),jsx(Box,{flex:!0,backgroundColor:"transparent",className:"cursor-pointer bg-transparent",noPadding:!0},jsx("div",{onClick:()=>m()},jsx(XIcon,null)))),jsx(Box,{flex:!0,flexDirection:"col",overflow:"overflow-y-auto",className:"sidesheet-content relative flex-1 rounded px-3 py-3",noPadding:!0},jsx(Box,{noPadding:!0,flex:!0,flexDirection:"col",overflow:"overflow-y-auto",className:"overflow-visible px-3 py-3"},jsx("div",{className:"flex-shrink-0"},o))),r&&jsx(Box,{flex:!0,justifyContent:"evenly",alignItems:"center",className:"sidesheet-action h-16 border-t border-border relative flex-initial rounded rounded-t-none"},r))))};Sidesheet.propTypes={content:PropTypes.element,children:PropTypes.element,className:PropTypes.string,width:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),action:PropTypes.element,onClose:PropTypes.func,isShown:PropTypes.bool,title:PropTypes.string};export{Sidesheet as default};
