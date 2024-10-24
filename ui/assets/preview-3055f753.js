var U=Object.defineProperty;var r=(o,t)=>U(o,"name",{value:t,configurable:!0});var V=!0,A="Invariant failed";function P(o,t){if(!o){if(V)throw new Error(A);var e=typeof t=="function"?t():t,l=e?"".concat(A,": ").concat(e):A;throw new Error(l)}}r(P,"invariant");const{useEffect:B}=__STORYBOOK_MODULE_PREVIEW_API__,{global:m}=__STORYBOOK_MODULE_GLOBAL__;function C(){let o=m.document.documentElement,t=Math.max(o.scrollHeight,o.offsetHeight);return{width:Math.max(o.scrollWidth,o.offsetWidth),height:t}}r(C,"getDocumentWidthAndHeight");function Z(){let o=m.document.createElement("canvas");o.id="storybook-addon-measure";let t=o.getContext("2d");P(t!=null);let{width:e,height:l}=C();return _(o,t,{width:e,height:l}),o.style.position="absolute",o.style.left="0",o.style.top="0",o.style.zIndex="2147483647",o.style.pointerEvents="none",m.document.body.appendChild(o),{canvas:o,context:t,width:e,height:l}}r(Z,"createCanvas");function _(o,t,{width:e,height:l}){o.style.width=`${e}px`,o.style.height=`${l}px`;let i=m.window.devicePixelRatio;o.width=Math.floor(e*i),o.height=Math.floor(l*i),t.scale(i,i)}r(_,"setCanvasWidthAndHeight");var u={};function G(){u.canvas||(u=Z())}r(G,"init");function X(){u.context&&u.context.clearRect(0,0,u.width??0,u.height??0)}r(X,"clear");function J(o){X(),o(u.context)}r(J,"draw");function Q(){P(u.canvas,"Canvas should exist in the state."),P(u.context,"Context should exist in the state."),_(u.canvas,u.context,{width:0,height:0});let{width:o,height:t}=C();_(u.canvas,u.context,{width:o,height:t}),u.width=o,u.height=t}r(Q,"rescale");function x(){var o;u.canvas&&(X(),(o=u.canvas.parentNode)==null||o.removeChild(u.canvas),u={})}r(x,"destroy");var b={margin:"#f6b26b",border:"#ffe599",padding:"#93c47d",content:"#6fa8dc",text:"#232020"},w=6;function O(o,{x:t,y:e,w:l,h:i,r:n}){t=t-l/2,e=e-i/2,l<2*n&&(n=l/2),i<2*n&&(n=i/2),o.beginPath(),o.moveTo(t+n,e),o.arcTo(t+l,e,t+l,e+i,n),o.arcTo(t+l,e+i,t,e+i,n),o.arcTo(t,e+i,t,e,n),o.arcTo(t,e,t+l,e,n),o.closePath()}r(O,"roundedRect");function tt(o,{padding:t,border:e,width:l,height:i,top:n,left:a}){let f=l-e.left-e.right-t.left-t.right,h=i-t.top-t.bottom-e.top-e.bottom,s=a+e.left+t.left,d=n+e.top+t.top;return o==="top"?s+=f/2:o==="right"?(s+=f,d+=h/2):o==="bottom"?(s+=f/2,d+=h):o==="left"?d+=h/2:o==="center"&&(s+=f/2,d+=h/2),{x:s,y:d}}r(tt,"positionCoordinate");function ot(o,t,{margin:e,border:l,padding:i},n,a){let f=r(c=>0,"shift"),h=0,s=0,d=a?1:.5,g=a?n*2:0;return o==="padding"?f=r(c=>i[c]*d+g,"shift"):o==="border"?f=r(c=>i[c]+l[c]*d+g,"shift"):o==="margin"&&(f=r(c=>i[c]+l[c]+e[c]*d+g,"shift")),t==="top"?s=-f("top"):t==="right"?h=f("right"):t==="bottom"?s=f("bottom"):t==="left"&&(h=-f("left")),{offsetX:h,offsetY:s}}r(ot,"offset");function et(o,t){return Math.abs(o.x-t.x)<Math.abs(o.w+t.w)/2&&Math.abs(o.y-t.y)<Math.abs(o.h+t.h)/2}r(et,"collide");function it(o,t,e){return o==="top"?t.y=e.y-e.h-w:o==="right"?t.x=e.x+e.w/2+w+t.w/2:o==="bottom"?t.y=e.y+e.h+w:o==="left"&&(t.x=e.x-e.w/2-w-t.w/2),{x:t.x,y:t.y}}r(it,"overlapAdjustment");function k(o,t,{x:e,y:l,w:i,h:n},a){return O(o,{x:e,y:l,w:i,h:n,r:3}),o.fillStyle=`${b[t]}dd`,o.fill(),o.strokeStyle=b[t],o.stroke(),o.fillStyle=b.text,o.fillText(a,e,l),O(o,{x:e,y:l,w:i,h:n,r:3}),o.fillStyle=`${b[t]}dd`,o.fill(),o.strokeStyle=b[t],o.stroke(),o.fillStyle=b.text,o.fillText(a,e,l),{x:e,y:l,w:i,h:n}}r(k,"textWithRect");function F(o,t){o.font="600 12px monospace",o.textBaseline="middle",o.textAlign="center";let e=o.measureText(t),l=e.actualBoundingBoxAscent+e.actualBoundingBoxDescent,i=e.width+w*2,n=l+w*2;return{w:i,h:n}}r(F,"configureText");function lt(o,t,{type:e,position:l="center",text:i},n,a=!1){let{x:f,y:h}=tt(l,t),{offsetX:s,offsetY:d}=ot(e,l,t,w+1,a);f+=s,h+=d;let{w:g,h:c}=F(o,i);if(n&&et({x:f,y:h,w:g,h:c},n)){let M=it(l,{x:f,y:h,w:g,h:c},n);f=M.x,h=M.y}return k(o,e,{x:f,y:h,w:g,h:c},i)}r(lt,"drawLabel");function nt(o,{w:t,h:e}){let l=t*.5+w,i=e*.5+w;return{offsetX:(o.x==="left"?-1:1)*l,offsetY:(o.y==="top"?-1:1)*i}}r(nt,"floatingOffset");function rt(o,t,{type:e,text:l}){let{floatingAlignment:i,extremities:n}=t,a=n[i.x],f=n[i.y],{w:h,h:s}=F(o,l),{offsetX:d,offsetY:g}=nt(i,{w:h,h:s});return a+=d,f+=g,k(o,e,{x:a,y:f,w:h,h:s},l)}r(rt,"drawFloatingLabel");function E(o,t,e,l){let i=[];e.forEach((n,a)=>{let f=l&&n.position==="center"?rt(o,t,n):lt(o,t,n,i[a-1],l);i[a]=f})}r(E,"drawStack");function ft(o,t,e,l){let i=e.reduce((n,a)=>{var f;return Object.prototype.hasOwnProperty.call(n,a.position)||(n[a.position]=[]),(f=n[a.position])==null||f.push(a),n},{});i.top&&E(o,t,i.top,l),i.right&&E(o,t,i.right,l),i.bottom&&E(o,t,i.bottom,l),i.left&&E(o,t,i.left,l),i.center&&E(o,t,i.center,l)}r(ft,"labelStacks");var S={margin:"#f6b26ba8",border:"#ffe599a8",padding:"#93c47d8c",content:"#6fa8dca8"},R=30;function p(o){return parseInt(o.replace("px",""),10)}r(p,"pxToNumber");function y(o){return Number.isInteger(o)?o:o.toFixed(2)}r(y,"round");function T(o){return o.filter(t=>t.text!==0&&t.text!=="0")}r(T,"filterZeroValues");function at(o){let t={top:m.window.scrollY,bottom:m.window.scrollY+m.window.innerHeight,left:m.window.scrollX,right:m.window.scrollX+m.window.innerWidth},e={top:Math.abs(t.top-o.top),bottom:Math.abs(t.bottom-o.bottom),left:Math.abs(t.left-o.left),right:Math.abs(t.right-o.right)};return{x:e.left>e.right?"left":"right",y:e.top>e.bottom?"top":"bottom"}}r(at,"floatingAlignment");function ht(o){let t=m.getComputedStyle(o),{top:e,left:l,right:i,bottom:n,width:a,height:f}=o.getBoundingClientRect(),{marginTop:h,marginBottom:s,marginLeft:d,marginRight:g,paddingTop:c,paddingBottom:M,paddingLeft:I,paddingRight:D,borderBottomWidth:$,borderTopWidth:N,borderLeftWidth:q,borderRightWidth:z}=t;e=e+m.window.scrollY,l=l+m.window.scrollX,n=n+m.window.scrollY,i=i+m.window.scrollX;let v={top:p(h),bottom:p(s),left:p(d),right:p(g)},j={top:p(c),bottom:p(M),left:p(I),right:p(D)},K={top:p(N),bottom:p($),left:p(q),right:p(z)},W={top:e-v.top,bottom:n+v.bottom,left:l-v.left,right:i+v.right};return{margin:v,padding:j,border:K,top:e,left:l,bottom:n,right:i,width:a,height:f,extremities:W,floatingAlignment:at(W)}}r(ht,"measureElement");function st(o,{margin:t,width:e,height:l,top:i,left:n,bottom:a,right:f}){let h=l+t.bottom+t.top;o.fillStyle=S.margin,o.fillRect(n,i-t.top,e,t.top),o.fillRect(f,i-t.top,t.right,h),o.fillRect(n,a,e,t.bottom),o.fillRect(n-t.left,i-t.top,t.left,h);let s=[{type:"margin",text:y(t.top),position:"top"},{type:"margin",text:y(t.right),position:"right"},{type:"margin",text:y(t.bottom),position:"bottom"},{type:"margin",text:y(t.left),position:"left"}];return T(s)}r(st,"drawMargin");function ut(o,{padding:t,border:e,width:l,height:i,top:n,left:a,bottom:f,right:h}){let s=l-e.left-e.right,d=i-t.top-t.bottom-e.top-e.bottom;o.fillStyle=S.padding,o.fillRect(a+e.left,n+e.top,s,t.top),o.fillRect(h-t.right-e.right,n+t.top+e.top,t.right,d),o.fillRect(a+e.left,f-t.bottom-e.bottom,s,t.bottom),o.fillRect(a+e.left,n+t.top+e.top,t.left,d);let g=[{type:"padding",text:t.top,position:"top"},{type:"padding",text:t.right,position:"right"},{type:"padding",text:t.bottom,position:"bottom"},{type:"padding",text:t.left,position:"left"}];return T(g)}r(ut,"drawPadding");function dt(o,{border:t,width:e,height:l,top:i,left:n,bottom:a,right:f}){let h=l-t.top-t.bottom;o.fillStyle=S.border,o.fillRect(n,i,e,t.top),o.fillRect(n,a-t.bottom,e,t.bottom),o.fillRect(n,i+t.top,t.left,h),o.fillRect(f-t.right,i+t.top,t.right,h);let s=[{type:"border",text:t.top,position:"top"},{type:"border",text:t.right,position:"right"},{type:"border",text:t.bottom,position:"bottom"},{type:"border",text:t.left,position:"left"}];return T(s)}r(dt,"drawBorder");function mt(o,{padding:t,border:e,width:l,height:i,top:n,left:a}){let f=l-e.left-e.right-t.left-t.right,h=i-t.top-t.bottom-e.top-e.bottom;return o.fillStyle=S.content,o.fillRect(a+e.left+t.left,n+e.top+t.top,f,h),[{type:"content",position:"center",text:`${y(f)} x ${y(h)}`}]}r(mt,"drawContent");function ct(o){return t=>{if(o&&t){let e=ht(o),l=st(t,e),i=ut(t,e),n=dt(t,e),a=mt(t,e),f=e.width<=R*3||e.height<=R;ft(t,e,[...a,...i,...n,...l],f)}}}r(ct,"drawBoxModel");function gt(o){J(ct(o))}r(gt,"drawSelectedElement");var pt=r((o,t)=>{let e=m.document.elementFromPoint(o,t),l=r(i=>{if(i&&i.shadowRoot){let n=i.shadowRoot.elementFromPoint(o,t);return i.isEqualNode(n)?i:n.shadowRoot?l(n):n}return i},"crawlShadows");return l(e)||e},"deepElementFromPoint"),Y,L={x:0,y:0};function H(o,t){Y=pt(o,t),gt(Y)}r(H,"findAndDrawElement");var wt=r((o,t)=>{let{measureEnabled:e}=t.globals;return B(()=>{let l=r(i=>{window.requestAnimationFrame(()=>{i.stopPropagation(),L.x=i.clientX,L.y=i.clientY})},"onPointerMove");return document.addEventListener("pointermove",l),()=>{document.removeEventListener("pointermove",l)}},[]),B(()=>{let l=r(n=>{window.requestAnimationFrame(()=>{n.stopPropagation(),H(n.clientX,n.clientY)})},"onPointerOver"),i=r(()=>{window.requestAnimationFrame(()=>{Q()})},"onResize");return t.viewMode==="story"&&e&&(document.addEventListener("pointerover",l),G(),window.addEventListener("resize",i),H(L.x,L.y)),()=>{window.removeEventListener("resize",i),x()}},[e,t.viewMode]),o()},"withMeasure"),bt="measureEnabled",vt=[wt],Et={[bt]:!1};export{vt as decorators,Et as globals};
