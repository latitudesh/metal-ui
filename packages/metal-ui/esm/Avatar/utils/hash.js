function hashCode(t){const e=String(t);let r=0;var a;if(0===e.trim().length)return r;for(let t=0;t<e.length;t++)a=e.charCodeAt(t),r=(r<<5)-r+a,r&=r;return Math.abs(r)}export{hashCode as default};
