import{extends as _extends}from"../_virtual/_rollupPluginBabelHelpers.js";import createStyled from"../node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js";import{keyframes,css,jsx}from"@emotion/react";import PropTypes from"prop-types";import*as HoverCard from"@radix-ui/react-hover-card";function _EMOTION_STRINGIFIED_CSS_ERROR__(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const fadeIn=keyframes`
  0% {
    opacity: 0
  }
  to {
    opacity: 1
  }`,fadeOut=keyframes`
  0% {
    opacity: 1
  }
  to {
    opacity: 0
  }`,HoverCardContent=createStyled(HoverCard.Content,"production"===process.env.NODE_ENV?{target:"egsvb0g1"}:{target:"egsvb0g1",label:"HoverCardContent"})(()=>[{paddingTop:"0.75rem",paddingBottom:"0.75rem",paddingLeft:"1rem",paddingRight:"1rem","--tw-bg-opacity":"1",backgroundColor:"rgba(0, 0, 0, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",fontSize:"0.875rem",lineHeight:"1.25rem",borderRadius:"5px"}],css("max-width:24em;&[data-state='open']{animation:",fadeIn," .2s ease-out forwards;}&[data-state='closed']{animation:",fadeOut," .1s ease-out forwards;}&[data-align='end']{transform:translateX(8px);}"+("production"===process.env.NODE_ENV?"":";label:HoverCardContent;"),"production"===process.env.NODE_ENV?"":"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCOEQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcsIHsgc3R5bGVkLCBjc3MgfSBmcm9tIFwidHdpbi5tYWNyb1wiO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgKiBhcyBIb3ZlckNhcmQgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1ob3Zlci1jYXJkXCI7XG5cbmNvbnN0IGZhZGVJbiA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIG9wYWNpdHk6IDBcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMVxuICB9YDtcbmNvbnN0IGZhZGVPdXQgPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDBcbiAgfWA7XG5cblxuY29uc3QgSG92ZXJDYXJkQ29udGVudCA9IHN0eWxlZChIb3ZlckNhcmQuQ29udGVudCkoKCkgPT4gW1xuICB0d2BweS0zIHB4LTQgYmctZm9yZWdyb3VuZCB0ZXh0LXdoaXRlIHRleHQtc20gcm91bmRlZGBdLCBjc3NgXG4gIG1heC13aWR0aDogMjRlbTtcbiAgJltkYXRhLXN0YXRlPSdvcGVuJ10ge1xuICAgIGFuaW1hdGlvbjogJHtmYWRlSW59IC4ycyBlYXNlLW91dCBmb3J3YXJkcztcbiAgfVxuICAmW2RhdGEtc3RhdGU9J2Nsb3NlZCddIHtcbiAgICBhbmltYXRpb246ICR7ZmFkZU91dH0gLjFzIGVhc2Utb3V0IGZvcndhcmRzO1xuICB9XG4gICZbZGF0YS1hbGlnbj0nZW5kJ10ge1xuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDhweClcbiAgfVxuICBgXG4pO1xuY29uc3QgSG92ZXJDYXJkVHJpZ2dlciA9IHN0eWxlZChIb3ZlckNhcmQuVHJpZ2dlcikoKCkgPT4gW1xuICB0d2BpbmxpbmUtYmxvY2tgXSwgY3NzYHdpZHRoOiAtd2Via2l0LW1heC1jb250ZW50O1xuICB3aWR0aDogLW1vei1tYXgtY29udGVudDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7YFxuKTtcblxuY29uc3QgVG9vbHRpcCA9ICh7IGNoaWxkcmVuLCB0ZXh0LCBwbGFjZW1lbnQsIGNsYXNzTmFtZSwgc2hvd0Fycm93LCBzdHlsZSwgYXNDaGlsZCwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxIb3ZlckNhcmQuUm9vdCBvcGVuRGVsYXk9ezB9IGNsb3NlRGVsYXk9ezIwMH0gey4uLnByb3BzfT5cbiAgICAgIDxIb3ZlckNhcmRUcmlnZ2VyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBhc0NoaWxkPXthc0NoaWxkfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Ib3ZlckNhcmRUcmlnZ2VyPlxuXG4gICAgICA8SG92ZXJDYXJkQ29udGVudFxuICAgICAgICBzaWRlPXtwbGFjZW1lbnR9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgICB7c2hvd0Fycm93ICYmIDxIb3ZlckNhcmQuQXJyb3cgb2Zmc2V0PXsxMH0gLz59XG4gICAgICA8L0hvdmVyQ2FyZENvbnRlbnQ+XG4gICAgPC9Ib3ZlckNhcmQuUm9vdD5cbiAgKTtcbn07XG5cblRvb2x0aXAuZGVmYXVsdFByb3BzID0ge1xuICBwbGFjZW1lbnQ6IFwidG9wXCIsXG4gIHNob3dBcnJvdzogdHJ1ZSxcbn07XG5cblRvb2x0aXAucHJvcFR5cGVzID0ge1xuICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIl0pLFxuICBzaG93QXJyb3c6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXA7XG4iXX0= */","production"===process.env.NODE_ENV?"":";label:HoverCardContent;","production"===process.env.NODE_ENV?"":";label:HoverCardContent;","production"===process.env.NODE_ENV?"":";label:HoverCardContent;"),"production"===process.env.NODE_ENV?"":"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCeUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcsIHsgc3R5bGVkLCBjc3MgfSBmcm9tIFwidHdpbi5tYWNyb1wiO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgKiBhcyBIb3ZlckNhcmQgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1ob3Zlci1jYXJkXCI7XG5cbmNvbnN0IGZhZGVJbiA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIG9wYWNpdHk6IDBcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMVxuICB9YDtcbmNvbnN0IGZhZGVPdXQgPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDBcbiAgfWA7XG5cblxuY29uc3QgSG92ZXJDYXJkQ29udGVudCA9IHN0eWxlZChIb3ZlckNhcmQuQ29udGVudCkoKCkgPT4gW1xuICB0d2BweS0zIHB4LTQgYmctZm9yZWdyb3VuZCB0ZXh0LXdoaXRlIHRleHQtc20gcm91bmRlZGBdLCBjc3NgXG4gIG1heC13aWR0aDogMjRlbTtcbiAgJltkYXRhLXN0YXRlPSdvcGVuJ10ge1xuICAgIGFuaW1hdGlvbjogJHtmYWRlSW59IC4ycyBlYXNlLW91dCBmb3J3YXJkcztcbiAgfVxuICAmW2RhdGEtc3RhdGU9J2Nsb3NlZCddIHtcbiAgICBhbmltYXRpb246ICR7ZmFkZU91dH0gLjFzIGVhc2Utb3V0IGZvcndhcmRzO1xuICB9XG4gICZbZGF0YS1hbGlnbj0nZW5kJ10ge1xuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDhweClcbiAgfVxuICBgXG4pO1xuY29uc3QgSG92ZXJDYXJkVHJpZ2dlciA9IHN0eWxlZChIb3ZlckNhcmQuVHJpZ2dlcikoKCkgPT4gW1xuICB0d2BpbmxpbmUtYmxvY2tgXSwgY3NzYHdpZHRoOiAtd2Via2l0LW1heC1jb250ZW50O1xuICB3aWR0aDogLW1vei1tYXgtY29udGVudDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7YFxuKTtcblxuY29uc3QgVG9vbHRpcCA9ICh7IGNoaWxkcmVuLCB0ZXh0LCBwbGFjZW1lbnQsIGNsYXNzTmFtZSwgc2hvd0Fycm93LCBzdHlsZSwgYXNDaGlsZCwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxIb3ZlckNhcmQuUm9vdCBvcGVuRGVsYXk9ezB9IGNsb3NlRGVsYXk9ezIwMH0gey4uLnByb3BzfT5cbiAgICAgIDxIb3ZlckNhcmRUcmlnZ2VyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBhc0NoaWxkPXthc0NoaWxkfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Ib3ZlckNhcmRUcmlnZ2VyPlxuXG4gICAgICA8SG92ZXJDYXJkQ29udGVudFxuICAgICAgICBzaWRlPXtwbGFjZW1lbnR9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgICB7c2hvd0Fycm93ICYmIDxIb3ZlckNhcmQuQXJyb3cgb2Zmc2V0PXsxMH0gLz59XG4gICAgICA8L0hvdmVyQ2FyZENvbnRlbnQ+XG4gICAgPC9Ib3ZlckNhcmQuUm9vdD5cbiAgKTtcbn07XG5cblRvb2x0aXAuZGVmYXVsdFByb3BzID0ge1xuICBwbGFjZW1lbnQ6IFwidG9wXCIsXG4gIHNob3dBcnJvdzogdHJ1ZSxcbn07XG5cblRvb2x0aXAucHJvcFR5cGVzID0ge1xuICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIl0pLFxuICBzaG93QXJyb3c6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXA7XG4iXX0= */"),HoverCardTrigger=createStyled(HoverCard.Trigger,"production"===process.env.NODE_ENV?{target:"egsvb0g0"}:{target:"egsvb0g0",label:"HoverCardTrigger"})(()=>[{display:"inline-block"}],"production"===process.env.NODE_ENV?{name:"108ufy5",styles:"width:-webkit-max-content;width:-moz-max-content;width:max-content;display:inline-block"}:{name:"1r8foa1-HoverCardTrigger",styles:"width:-webkit-max-content;width:-moz-max-content;width:max-content;display:inline-block;label:HoverCardTrigger;",map:"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Dd0IiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcsIHsgc3R5bGVkLCBjc3MgfSBmcm9tIFwidHdpbi5tYWNyb1wiO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgKiBhcyBIb3ZlckNhcmQgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1ob3Zlci1jYXJkXCI7XG5cbmNvbnN0IGZhZGVJbiA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIG9wYWNpdHk6IDBcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMVxuICB9YDtcbmNvbnN0IGZhZGVPdXQgPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDBcbiAgfWA7XG5cblxuY29uc3QgSG92ZXJDYXJkQ29udGVudCA9IHN0eWxlZChIb3ZlckNhcmQuQ29udGVudCkoKCkgPT4gW1xuICB0d2BweS0zIHB4LTQgYmctZm9yZWdyb3VuZCB0ZXh0LXdoaXRlIHRleHQtc20gcm91bmRlZGBdLCBjc3NgXG4gIG1heC13aWR0aDogMjRlbTtcbiAgJltkYXRhLXN0YXRlPSdvcGVuJ10ge1xuICAgIGFuaW1hdGlvbjogJHtmYWRlSW59IC4ycyBlYXNlLW91dCBmb3J3YXJkcztcbiAgfVxuICAmW2RhdGEtc3RhdGU9J2Nsb3NlZCddIHtcbiAgICBhbmltYXRpb246ICR7ZmFkZU91dH0gLjFzIGVhc2Utb3V0IGZvcndhcmRzO1xuICB9XG4gICZbZGF0YS1hbGlnbj0nZW5kJ10ge1xuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDhweClcbiAgfVxuICBgXG4pO1xuY29uc3QgSG92ZXJDYXJkVHJpZ2dlciA9IHN0eWxlZChIb3ZlckNhcmQuVHJpZ2dlcikoKCkgPT4gW1xuICB0d2BpbmxpbmUtYmxvY2tgXSwgY3NzYHdpZHRoOiAtd2Via2l0LW1heC1jb250ZW50O1xuICB3aWR0aDogLW1vei1tYXgtY29udGVudDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7YFxuKTtcblxuY29uc3QgVG9vbHRpcCA9ICh7IGNoaWxkcmVuLCB0ZXh0LCBwbGFjZW1lbnQsIGNsYXNzTmFtZSwgc2hvd0Fycm93LCBzdHlsZSwgYXNDaGlsZCwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxIb3ZlckNhcmQuUm9vdCBvcGVuRGVsYXk9ezB9IGNsb3NlRGVsYXk9ezIwMH0gey4uLnByb3BzfT5cbiAgICAgIDxIb3ZlckNhcmRUcmlnZ2VyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBhc0NoaWxkPXthc0NoaWxkfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Ib3ZlckNhcmRUcmlnZ2VyPlxuXG4gICAgICA8SG92ZXJDYXJkQ29udGVudFxuICAgICAgICBzaWRlPXtwbGFjZW1lbnR9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgICB7c2hvd0Fycm93ICYmIDxIb3ZlckNhcmQuQXJyb3cgb2Zmc2V0PXsxMH0gLz59XG4gICAgICA8L0hvdmVyQ2FyZENvbnRlbnQ+XG4gICAgPC9Ib3ZlckNhcmQuUm9vdD5cbiAgKTtcbn07XG5cblRvb2x0aXAuZGVmYXVsdFByb3BzID0ge1xuICBwbGFjZW1lbnQ6IFwidG9wXCIsXG4gIHNob3dBcnJvdzogdHJ1ZSxcbn07XG5cblRvb2x0aXAucHJvcFR5cGVzID0ge1xuICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIl0pLFxuICBzaG93QXJyb3c6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXA7XG4iXX0= */",toString:_EMOTION_STRINGIFIED_CSS_ERROR__},"production"===process.env.NODE_ENV?"":"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DeUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcsIHsgc3R5bGVkLCBjc3MgfSBmcm9tIFwidHdpbi5tYWNyb1wiO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgKiBhcyBIb3ZlckNhcmQgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1ob3Zlci1jYXJkXCI7XG5cbmNvbnN0IGZhZGVJbiA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIG9wYWNpdHk6IDBcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMVxuICB9YDtcbmNvbnN0IGZhZGVPdXQgPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDBcbiAgfWA7XG5cblxuY29uc3QgSG92ZXJDYXJkQ29udGVudCA9IHN0eWxlZChIb3ZlckNhcmQuQ29udGVudCkoKCkgPT4gW1xuICB0d2BweS0zIHB4LTQgYmctZm9yZWdyb3VuZCB0ZXh0LXdoaXRlIHRleHQtc20gcm91bmRlZGBdLCBjc3NgXG4gIG1heC13aWR0aDogMjRlbTtcbiAgJltkYXRhLXN0YXRlPSdvcGVuJ10ge1xuICAgIGFuaW1hdGlvbjogJHtmYWRlSW59IC4ycyBlYXNlLW91dCBmb3J3YXJkcztcbiAgfVxuICAmW2RhdGEtc3RhdGU9J2Nsb3NlZCddIHtcbiAgICBhbmltYXRpb246ICR7ZmFkZU91dH0gLjFzIGVhc2Utb3V0IGZvcndhcmRzO1xuICB9XG4gICZbZGF0YS1hbGlnbj0nZW5kJ10ge1xuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDhweClcbiAgfVxuICBgXG4pO1xuY29uc3QgSG92ZXJDYXJkVHJpZ2dlciA9IHN0eWxlZChIb3ZlckNhcmQuVHJpZ2dlcikoKCkgPT4gW1xuICB0d2BpbmxpbmUtYmxvY2tgXSwgY3NzYHdpZHRoOiAtd2Via2l0LW1heC1jb250ZW50O1xuICB3aWR0aDogLW1vei1tYXgtY29udGVudDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7YFxuKTtcblxuY29uc3QgVG9vbHRpcCA9ICh7IGNoaWxkcmVuLCB0ZXh0LCBwbGFjZW1lbnQsIGNsYXNzTmFtZSwgc2hvd0Fycm93LCBzdHlsZSwgYXNDaGlsZCwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxIb3ZlckNhcmQuUm9vdCBvcGVuRGVsYXk9ezB9IGNsb3NlRGVsYXk9ezIwMH0gey4uLnByb3BzfT5cbiAgICAgIDxIb3ZlckNhcmRUcmlnZ2VyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBhc0NoaWxkPXthc0NoaWxkfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Ib3ZlckNhcmRUcmlnZ2VyPlxuXG4gICAgICA8SG92ZXJDYXJkQ29udGVudFxuICAgICAgICBzaWRlPXtwbGFjZW1lbnR9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgICB7c2hvd0Fycm93ICYmIDxIb3ZlckNhcmQuQXJyb3cgb2Zmc2V0PXsxMH0gLz59XG4gICAgICA8L0hvdmVyQ2FyZENvbnRlbnQ+XG4gICAgPC9Ib3ZlckNhcmQuUm9vdD5cbiAgKTtcbn07XG5cblRvb2x0aXAuZGVmYXVsdFByb3BzID0ge1xuICBwbGFjZW1lbnQ6IFwidG9wXCIsXG4gIHNob3dBcnJvdzogdHJ1ZSxcbn07XG5cblRvb2x0aXAucHJvcFR5cGVzID0ge1xuICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIl0pLFxuICBzaG93QXJyb3c6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXA7XG4iXX0= */"),Tooltip=({children:c,text:I,placement:b,className:g,showArrow:C,style:l,asChild:X,...d})=>jsx(HoverCard.Root,_extends({openDelay:0,closeDelay:200},d),jsx(HoverCardTrigger,{className:g,asChild:X},c),jsx(HoverCardContent,{side:b,style:l,onClick:c=>c.stopPropagation()},I,C&&jsx(HoverCard.Arrow,{offset:10})));Tooltip.defaultProps={placement:"top",showArrow:!0},Tooltip.propTypes={placement:PropTypes.oneOf(["top","right","bottom","left"]),showArrow:PropTypes.bool,className:PropTypes.string};export{Tooltip as default};