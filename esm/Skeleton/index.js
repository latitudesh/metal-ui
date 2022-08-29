import createStyled from"../node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js";import{keyframes,jsx,css}from"@emotion/react";import PropTypes from"prop-types";const animation=keyframes`
  0% {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }`,StyledSkeleton=createStyled("span","production"===process.env.NODE_ENV?{target:"e4rzf2q0"}:{target:"e4rzf2q0",label:"StyledSkeleton"})(({width:I,height:g})=>[`
  display: flex;
  border-radius: 5px;
  background-image: linear-gradient(
    270deg,
    #fafafa,
    #eaeaea,
    #eaeaea,
    #fafafa
  );
  background-size: 400% 100%;
  width: ${Number(I)?I+"px":I};
  min-height: ${Number(g)?g+"px":g};
`],"production"===process.env.NODE_ENV?"":"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWV1QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHR3LCB7IGNzcywgc3R5bGVkIH0gZnJvbSBcInR3aW4ubWFjcm9cIjtcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuXG5jb25zdCBhbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDA7XG4gIH1cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDAlIDA7XG4gIH1gO1xuXG5jb25zdCBTdHlsZWRTa2VsZXRvbiA9IHN0eWxlZC5zcGFuKCh7IHdpZHRoLCBoZWlnaHQsIHZlcnRpY2FsIH0pID0+IFtcbiAgYFxuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAyNzBkZWcsXG4gICAgI2ZhZmFmYSxcbiAgICAjZWFlYWVhLFxuICAgICNlYWVhZWEsXG4gICAgI2ZhZmFmYVxuICApO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgMTAwJTtcbiAgd2lkdGg6ICR7TnVtYmVyKHdpZHRoKSA/IHdpZHRoICsgXCJweFwiIDogd2lkdGh9O1xuICBtaW4taGVpZ2h0OiAke051bWJlcihoZWlnaHQpID8gaGVpZ2h0ICsgXCJweFwiIDogaGVpZ2h0fTtcbmAsXG5dKTtcblxuY29uc3QgU2tlbGV0b24gPSAoeyB3aWR0aCwgaGVpZ2h0LCBjbGFzc05hbWUsIHZlcnRpY2FsIH0pID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT1cInNrZWxldG9uXCJcbiAgICBjc3M9e1t2ZXJ0aWNhbCAmJiB0d2BpbmxpbmUtZmxleCBpdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuIG1yLTJgXX1cbiAgPlxuICAgIDxTdHlsZWRTa2VsZXRvblxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHZlcnRpY2FsPXt2ZXJ0aWNhbH1cbiAgICAgIGNzcz17W1xuICAgICAgICB0d2BmbGV4LWNvbGAsXG4gICAgICAgIGNzc2BcbiAgICAgICAgICBhbmltYXRpb246ICR7YW5pbWF0aW9ufSA4cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgICAgYCxcbiAgICAgIF19XG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5Ta2VsZXRvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBOdW1iZXJzIHdpbGwgYmUgdHJlYXRlZCBhcyBweCB3aGlsZSBhbnkgb3RoZXIgY3NzIHVuaXRzIG5lZWQgdG8gYmUgcHJvdmlkZWQgYXMgc3RyaW5ncy5cbiAgICovXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIC8qKlxuICAgKiBOdW1iZXJzIHdpbGwgYmUgdHJlYXRlZCBhcyBweCB3aGlsZSBhbnkgb3RoZXIgY3NzIHVuaXRzIG5lZWQgdG8gYmUgcHJvdmlkZWQgYXMgc3RyaW5ncy5cbiAgICovXG4gIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBWZXJ0aWNhbCB3b24ndCB3b3JrIHdpdGggcGVyY2VudGFnZSB3aWR0aHNcbiAgICovXG4gIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cblNrZWxldG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgd2lkdGg6IDE2MCxcbiAgaGVpZ2h0OiAyNCxcbiAgdmVydGljYWw6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2tlbGV0b247XG4iXX0= */"),Skeleton=({width:I,height:g,className:c,vertical:b})=>jsx("div",{className:"skeleton",css:[b&&{display:"inline-flex",alignItems:"flex-end",justifyContent:"space-between",marginRight:"0.5rem"},"production"===process.env.NODE_ENV?"":";label:Skeleton;","production"===process.env.NODE_ENV?"":"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHR3LCB7IGNzcywgc3R5bGVkIH0gZnJvbSBcInR3aW4ubWFjcm9cIjtcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuXG5jb25zdCBhbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDA7XG4gIH1cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDAlIDA7XG4gIH1gO1xuXG5jb25zdCBTdHlsZWRTa2VsZXRvbiA9IHN0eWxlZC5zcGFuKCh7IHdpZHRoLCBoZWlnaHQsIHZlcnRpY2FsIH0pID0+IFtcbiAgYFxuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAyNzBkZWcsXG4gICAgI2ZhZmFmYSxcbiAgICAjZWFlYWVhLFxuICAgICNlYWVhZWEsXG4gICAgI2ZhZmFmYVxuICApO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgMTAwJTtcbiAgd2lkdGg6ICR7TnVtYmVyKHdpZHRoKSA/IHdpZHRoICsgXCJweFwiIDogd2lkdGh9O1xuICBtaW4taGVpZ2h0OiAke051bWJlcihoZWlnaHQpID8gaGVpZ2h0ICsgXCJweFwiIDogaGVpZ2h0fTtcbmAsXG5dKTtcblxuY29uc3QgU2tlbGV0b24gPSAoeyB3aWR0aCwgaGVpZ2h0LCBjbGFzc05hbWUsIHZlcnRpY2FsIH0pID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT1cInNrZWxldG9uXCJcbiAgICBjc3M9e1t2ZXJ0aWNhbCAmJiB0d2BpbmxpbmUtZmxleCBpdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuIG1yLTJgXX1cbiAgPlxuICAgIDxTdHlsZWRTa2VsZXRvblxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHZlcnRpY2FsPXt2ZXJ0aWNhbH1cbiAgICAgIGNzcz17W1xuICAgICAgICB0d2BmbGV4LWNvbGAsXG4gICAgICAgIGNzc2BcbiAgICAgICAgICBhbmltYXRpb246ICR7YW5pbWF0aW9ufSA4cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgICAgYCxcbiAgICAgIF19XG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5Ta2VsZXRvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBOdW1iZXJzIHdpbGwgYmUgdHJlYXRlZCBhcyBweCB3aGlsZSBhbnkgb3RoZXIgY3NzIHVuaXRzIG5lZWQgdG8gYmUgcHJvdmlkZWQgYXMgc3RyaW5ncy5cbiAgICovXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIC8qKlxuICAgKiBOdW1iZXJzIHdpbGwgYmUgdHJlYXRlZCBhcyBweCB3aGlsZSBhbnkgb3RoZXIgY3NzIHVuaXRzIG5lZWQgdG8gYmUgcHJvdmlkZWQgYXMgc3RyaW5ncy5cbiAgICovXG4gIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBWZXJ0aWNhbCB3b24ndCB3b3JrIHdpdGggcGVyY2VudGFnZSB3aWR0aHNcbiAgICovXG4gIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cblNrZWxldG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgd2lkdGg6IDE2MCxcbiAgaGVpZ2h0OiAyNCxcbiAgdmVydGljYWw6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2tlbGV0b247XG4iXX0= */","production"===process.env.NODE_ENV?"":";label:Skeleton;","production"===process.env.NODE_ENV?"":"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHR3LCB7IGNzcywgc3R5bGVkIH0gZnJvbSBcInR3aW4ubWFjcm9cIjtcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuXG5jb25zdCBhbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDA7XG4gIH1cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDAlIDA7XG4gIH1gO1xuXG5jb25zdCBTdHlsZWRTa2VsZXRvbiA9IHN0eWxlZC5zcGFuKCh7IHdpZHRoLCBoZWlnaHQsIHZlcnRpY2FsIH0pID0+IFtcbiAgYFxuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAyNzBkZWcsXG4gICAgI2ZhZmFmYSxcbiAgICAjZWFlYWVhLFxuICAgICNlYWVhZWEsXG4gICAgI2ZhZmFmYVxuICApO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgMTAwJTtcbiAgd2lkdGg6ICR7TnVtYmVyKHdpZHRoKSA/IHdpZHRoICsgXCJweFwiIDogd2lkdGh9O1xuICBtaW4taGVpZ2h0OiAke051bWJlcihoZWlnaHQpID8gaGVpZ2h0ICsgXCJweFwiIDogaGVpZ2h0fTtcbmAsXG5dKTtcblxuY29uc3QgU2tlbGV0b24gPSAoeyB3aWR0aCwgaGVpZ2h0LCBjbGFzc05hbWUsIHZlcnRpY2FsIH0pID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT1cInNrZWxldG9uXCJcbiAgICBjc3M9e1t2ZXJ0aWNhbCAmJiB0d2BpbmxpbmUtZmxleCBpdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuIG1yLTJgXX1cbiAgPlxuICAgIDxTdHlsZWRTa2VsZXRvblxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHZlcnRpY2FsPXt2ZXJ0aWNhbH1cbiAgICAgIGNzcz17W1xuICAgICAgICB0d2BmbGV4LWNvbGAsXG4gICAgICAgIGNzc2BcbiAgICAgICAgICBhbmltYXRpb246ICR7YW5pbWF0aW9ufSA4cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgICAgYCxcbiAgICAgIF19XG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5Ta2VsZXRvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBOdW1iZXJzIHdpbGwgYmUgdHJlYXRlZCBhcyBweCB3aGlsZSBhbnkgb3RoZXIgY3NzIHVuaXRzIG5lZWQgdG8gYmUgcHJvdmlkZWQgYXMgc3RyaW5ncy5cbiAgICovXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIC8qKlxuICAgKiBOdW1iZXJzIHdpbGwgYmUgdHJlYXRlZCBhcyBweCB3aGlsZSBhbnkgb3RoZXIgY3NzIHVuaXRzIG5lZWQgdG8gYmUgcHJvdmlkZWQgYXMgc3RyaW5ncy5cbiAgICovXG4gIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBWZXJ0aWNhbCB3b24ndCB3b3JrIHdpdGggcGVyY2VudGFnZSB3aWR0aHNcbiAgICovXG4gIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cblNrZWxldG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgd2lkdGg6IDE2MCxcbiAgaGVpZ2h0OiAyNCxcbiAgdmVydGljYWw6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2tlbGV0b247XG4iXX0= */"]},jsx(StyledSkeleton,{className:c,width:I,height:g,vertical:b,css:["flex-direction:column;",css("animation:",animation," 8s ease-in-out infinite;"+("production"===process.env.NODE_ENV?"":";label:Skeleton;"),"production"===process.env.NODE_ENV?"":"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDVyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHR3LCB7IGNzcywgc3R5bGVkIH0gZnJvbSBcInR3aW4ubWFjcm9cIjtcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuXG5jb25zdCBhbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDA7XG4gIH1cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDAlIDA7XG4gIH1gO1xuXG5jb25zdCBTdHlsZWRTa2VsZXRvbiA9IHN0eWxlZC5zcGFuKCh7IHdpZHRoLCBoZWlnaHQsIHZlcnRpY2FsIH0pID0+IFtcbiAgYFxuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAyNzBkZWcsXG4gICAgI2ZhZmFmYSxcbiAgICAjZWFlYWVhLFxuICAgICNlYWVhZWEsXG4gICAgI2ZhZmFmYVxuICApO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgMTAwJTtcbiAgd2lkdGg6ICR7TnVtYmVyKHdpZHRoKSA/IHdpZHRoICsgXCJweFwiIDogd2lkdGh9O1xuICBtaW4taGVpZ2h0OiAke051bWJlcihoZWlnaHQpID8gaGVpZ2h0ICsgXCJweFwiIDogaGVpZ2h0fTtcbmAsXG5dKTtcblxuY29uc3QgU2tlbGV0b24gPSAoeyB3aWR0aCwgaGVpZ2h0LCBjbGFzc05hbWUsIHZlcnRpY2FsIH0pID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT1cInNrZWxldG9uXCJcbiAgICBjc3M9e1t2ZXJ0aWNhbCAmJiB0d2BpbmxpbmUtZmxleCBpdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuIG1yLTJgXX1cbiAgPlxuICAgIDxTdHlsZWRTa2VsZXRvblxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHZlcnRpY2FsPXt2ZXJ0aWNhbH1cbiAgICAgIGNzcz17W1xuICAgICAgICB0d2BmbGV4LWNvbGAsXG4gICAgICAgIGNzc2BcbiAgICAgICAgICBhbmltYXRpb246ICR7YW5pbWF0aW9ufSA4cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgICAgYCxcbiAgICAgIF19XG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5Ta2VsZXRvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBOdW1iZXJzIHdpbGwgYmUgdHJlYXRlZCBhcyBweCB3aGlsZSBhbnkgb3RoZXIgY3NzIHVuaXRzIG5lZWQgdG8gYmUgcHJvdmlkZWQgYXMgc3RyaW5ncy5cbiAgICovXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIC8qKlxuICAgKiBOdW1iZXJzIHdpbGwgYmUgdHJlYXRlZCBhcyBweCB3aGlsZSBhbnkgb3RoZXIgY3NzIHVuaXRzIG5lZWQgdG8gYmUgcHJvdmlkZWQgYXMgc3RyaW5ncy5cbiAgICovXG4gIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBWZXJ0aWNhbCB3b24ndCB3b3JrIHdpdGggcGVyY2VudGFnZSB3aWR0aHNcbiAgICovXG4gIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cblNrZWxldG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgd2lkdGg6IDE2MCxcbiAgaGVpZ2h0OiAyNCxcbiAgdmVydGljYWw6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2tlbGV0b247XG4iXX0= */","production"===process.env.NODE_ENV?"":";label:Skeleton;","production"===process.env.NODE_ENV?"":";label:Skeleton;","production"===process.env.NODE_ENV?"":";label:Skeleton;"),"production"===process.env.NODE_ENV?"":";label:Skeleton;","production"===process.env.NODE_ENV?"":"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHR3LCB7IGNzcywgc3R5bGVkIH0gZnJvbSBcInR3aW4ubWFjcm9cIjtcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuXG5jb25zdCBhbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDA7XG4gIH1cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDAlIDA7XG4gIH1gO1xuXG5jb25zdCBTdHlsZWRTa2VsZXRvbiA9IHN0eWxlZC5zcGFuKCh7IHdpZHRoLCBoZWlnaHQsIHZlcnRpY2FsIH0pID0+IFtcbiAgYFxuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAyNzBkZWcsXG4gICAgI2ZhZmFmYSxcbiAgICAjZWFlYWVhLFxuICAgICNlYWVhZWEsXG4gICAgI2ZhZmFmYVxuICApO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgMTAwJTtcbiAgd2lkdGg6ICR7TnVtYmVyKHdpZHRoKSA/IHdpZHRoICsgXCJweFwiIDogd2lkdGh9O1xuICBtaW4taGVpZ2h0OiAke051bWJlcihoZWlnaHQpID8gaGVpZ2h0ICsgXCJweFwiIDogaGVpZ2h0fTtcbmAsXG5dKTtcblxuY29uc3QgU2tlbGV0b24gPSAoeyB3aWR0aCwgaGVpZ2h0LCBjbGFzc05hbWUsIHZlcnRpY2FsIH0pID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT1cInNrZWxldG9uXCJcbiAgICBjc3M9e1t2ZXJ0aWNhbCAmJiB0d2BpbmxpbmUtZmxleCBpdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuIG1yLTJgXX1cbiAgPlxuICAgIDxTdHlsZWRTa2VsZXRvblxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHZlcnRpY2FsPXt2ZXJ0aWNhbH1cbiAgICAgIGNzcz17W1xuICAgICAgICB0d2BmbGV4LWNvbGAsXG4gICAgICAgIGNzc2BcbiAgICAgICAgICBhbmltYXRpb246ICR7YW5pbWF0aW9ufSA4cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgICAgYCxcbiAgICAgIF19XG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5Ta2VsZXRvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBOdW1iZXJzIHdpbGwgYmUgdHJlYXRlZCBhcyBweCB3aGlsZSBhbnkgb3RoZXIgY3NzIHVuaXRzIG5lZWQgdG8gYmUgcHJvdmlkZWQgYXMgc3RyaW5ncy5cbiAgICovXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIC8qKlxuICAgKiBOdW1iZXJzIHdpbGwgYmUgdHJlYXRlZCBhcyBweCB3aGlsZSBhbnkgb3RoZXIgY3NzIHVuaXRzIG5lZWQgdG8gYmUgcHJvdmlkZWQgYXMgc3RyaW5ncy5cbiAgICovXG4gIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBWZXJ0aWNhbCB3b24ndCB3b3JrIHdpdGggcGVyY2VudGFnZSB3aWR0aHNcbiAgICovXG4gIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cblNrZWxldG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgd2lkdGg6IDE2MCxcbiAgaGVpZ2h0OiAyNCxcbiAgdmVydGljYWw6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2tlbGV0b247XG4iXX0= */","production"===process.env.NODE_ENV?"":";label:Skeleton;","production"===process.env.NODE_ENV?"":"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHR3LCB7IGNzcywgc3R5bGVkIH0gZnJvbSBcInR3aW4ubWFjcm9cIjtcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuXG5jb25zdCBhbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDA7XG4gIH1cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDAlIDA7XG4gIH1gO1xuXG5jb25zdCBTdHlsZWRTa2VsZXRvbiA9IHN0eWxlZC5zcGFuKCh7IHdpZHRoLCBoZWlnaHQsIHZlcnRpY2FsIH0pID0+IFtcbiAgYFxuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAyNzBkZWcsXG4gICAgI2ZhZmFmYSxcbiAgICAjZWFlYWVhLFxuICAgICNlYWVhZWEsXG4gICAgI2ZhZmFmYVxuICApO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgMTAwJTtcbiAgd2lkdGg6ICR7TnVtYmVyKHdpZHRoKSA/IHdpZHRoICsgXCJweFwiIDogd2lkdGh9O1xuICBtaW4taGVpZ2h0OiAke051bWJlcihoZWlnaHQpID8gaGVpZ2h0ICsgXCJweFwiIDogaGVpZ2h0fTtcbmAsXG5dKTtcblxuY29uc3QgU2tlbGV0b24gPSAoeyB3aWR0aCwgaGVpZ2h0LCBjbGFzc05hbWUsIHZlcnRpY2FsIH0pID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT1cInNrZWxldG9uXCJcbiAgICBjc3M9e1t2ZXJ0aWNhbCAmJiB0d2BpbmxpbmUtZmxleCBpdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuIG1yLTJgXX1cbiAgPlxuICAgIDxTdHlsZWRTa2VsZXRvblxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHZlcnRpY2FsPXt2ZXJ0aWNhbH1cbiAgICAgIGNzcz17W1xuICAgICAgICB0d2BmbGV4LWNvbGAsXG4gICAgICAgIGNzc2BcbiAgICAgICAgICBhbmltYXRpb246ICR7YW5pbWF0aW9ufSA4cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgICAgYCxcbiAgICAgIF19XG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5Ta2VsZXRvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBOdW1iZXJzIHdpbGwgYmUgdHJlYXRlZCBhcyBweCB3aGlsZSBhbnkgb3RoZXIgY3NzIHVuaXRzIG5lZWQgdG8gYmUgcHJvdmlkZWQgYXMgc3RyaW5ncy5cbiAgICovXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIC8qKlxuICAgKiBOdW1iZXJzIHdpbGwgYmUgdHJlYXRlZCBhcyBweCB3aGlsZSBhbnkgb3RoZXIgY3NzIHVuaXRzIG5lZWQgdG8gYmUgcHJvdmlkZWQgYXMgc3RyaW5ncy5cbiAgICovXG4gIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBWZXJ0aWNhbCB3b24ndCB3b3JrIHdpdGggcGVyY2VudGFnZSB3aWR0aHNcbiAgICovXG4gIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cblNrZWxldG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgd2lkdGg6IDE2MCxcbiAgaGVpZ2h0OiAyNCxcbiAgdmVydGljYWw6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2tlbGV0b247XG4iXX0= */"]}));Skeleton.propTypes={width:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),height:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),className:PropTypes.string,vertical:PropTypes.bool},Skeleton.defaultProps={width:160,height:24,vertical:!1};export{Skeleton as default};
