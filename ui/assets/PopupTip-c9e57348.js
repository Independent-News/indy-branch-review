var j=Object.defineProperty;var e=(o,r)=>j(o,"name",{value:r,configurable:!0});import{j as n}from"./jsx-runtime-1a1b98e7.js";import{r as t}from"./index-29d3bc65.js";import{o as B}from"./index-f40e3ffd.js";import{S as z}from"./Icon.constants-a768151c.js";import{g as p,c as I,W as M,T as O,S as H,B as V,a as W}from"./PopupTip.styles-5beaa8b4.js";const f=e(({children:o,svg:r=B,size:i=z})=>{const[s,a]=t.useState(!1),[l,m]=t.useState({left:0,top:0}),[d,g]=t.useState("below"),c=t.useRef(null),u=t.useRef(null);t.useLayoutEffect(()=>{if(s){const _=p(c),w=p(u),E=document.documentElement.clientWidth,b=document.documentElement.clientHeight,[P,R,T]=I(_,w,E,b);m({left:P,top:R}),g(T)}},[s]);const v=W(s,d);function h(){a(!0)}e(h,"onFocus");function x(){a(!1)}e(x,"onBlur");function y(){a(!0)}e(y,"onMouseOver");function S(){a(!1)}return e(S,"onMouseOut"),n.jsxs(M,{children:[n.jsx(O,{className:v,tabIndex:0,ref:c,$size:i,onFocus:h,onMouseOver:y,onMouseOut:S,onBlur:x,children:n.jsx(H,{svg:r,size:i})}),s&&n.jsx(V,{ref:u,style:{left:l.left,top:l.top},children:o})]})},"PopupTip");try{f.displayName="PopupTip",f.__docgenInfo={description:"",displayName:"PopupTip",props:{svg:{defaultValue:{value:'e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"83b36d60cfea0adf",viewBox:"0 0 20 20",...e},l.createElement("path",{fill:"currentColor",d:"M9 15h2V9H9zm1-15a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8.01 8.01 0 0 1 0-16 8.01 8.01 0 0 1 0 16M9 7h2V5H9z"}))'},description:"",name:"svg",required:!1,type:{name:"SvgrProps"}},size:{defaultValue:{value:"small"},description:"The size of the icon to be used",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"base"'},{value:'"large"'},{value:'"x-small"'}]}}}}}catch{}export{f as P};
