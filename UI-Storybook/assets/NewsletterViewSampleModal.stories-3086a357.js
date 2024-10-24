var v=Object.defineProperty;var f=(e,l)=>v(e,"name",{value:l,configurable:!0});import{j as a}from"./jsx-runtime-1a1b98e7.js";import{r as u}from"./index-29d3bc65.js";import{z as y}from"./index-3b0e1f90.js";import"./Icon.hoc-5c5e8f19.js";import{S as k}from"./Icon.constants-a768151c.js";import{d as c}from"./styled-components.browser.esm-852d80e5.js";import{I}from"./IconButton-ae2e48c7.js";import{t as S,l as C}from"./devices-1d39230d.js";import{m as _}from"./zIndex-c7e1b793.js";import"./_commonjsHelpers-f86d8be3.js";import"./Symbols.hoc-c2fda652.js";import"./index-f7d1b020.js";import"./breakPoints-89c7d41a.js";const z=c.div.withConfig({componentId:"sc-1kzn674-0"})(["display:flex;position:fixed;top:0;left:0;z-index:",";width:100vw;height:100vh;align-items:center;justify-content:center;background:",";"],_,({theme:e})=>e.color.veil.base),E=c.div.withConfig({componentId:"sc-1kzn674-1"})(["--tablet-width:500px;--laptop-width:558px;display:flex;position:relative;width:fit-content;box-sizing:border-box;flex-direction:column;padding:","px;border-radius:","px;background-color:",";font:",";"],({theme:e})=>e.spacing.x1_5,({theme:e})=>e.spacing.x1,({theme:e})=>e.color.canvas.card,({theme:e})=>e.textStyle.body),j=c(I).withConfig({componentId:"sc-1kzn674-2"})(["position:absolute;top:","px;right:","px;&:focus,&:focus-visible{outline:-webkit-focus-ring-color auto 1px;outline-offset:4px;}"],({theme:e})=>e.spacing.x1_5,({theme:e})=>e.spacing.x1_5),$=c.div.withConfig({componentId:"sc-1kzn674-3"})(["display:flex;max-height:80vh;flex-direction:column;align-items:center;gap:","px;margin-top:","px;overflow-y:auto;"],({theme:e})=>e.spacing.x2,({theme:e})=>e.spacing.x2),N=c.div.withConfig({componentId:"sc-1kzn674-4"})(["width:100%;max-height:80vh;img{width:100%;height:auto;}"]),V=c.div.withConfig({componentId:"sc-1kzn674-5"})(["--tablet-width:500px;--laptop-width:430px;display:flex;box-sizing:border-box;flex-direction:column;gap:","px;border-radius:8px;background-color:",";@media ","{max-width:var(--tablet-width);}@media ","{min-width:var(--laptop-width);}"],({theme:e})=>e.spacing.x3,({theme:e})=>e.color.canvas.base,S,C),x=f(({onClose:e,imageSrc:l,isOpen:d})=>{const s=u.useRef(null),o=u.useRef([]),p=u.useCallback(n=>{const{key:t}=n,i=o.current[0],r=o.current[o.current.length-1];t==="Tab"&&(n.shiftKey?document.activeElement===i&&(n.preventDefault(),r==null||r.focus()):document.activeElement===r&&(n.preventDefault(),i==null||i.focus())),t==="Escape"&&e()},[e]),m=u.useCallback(n=>{n.target===s.current&&e()},[e]);return u.useEffect(()=>{var i,r;if(!d)return;const n='button, [href], [tabindex]:not([tabindex="-1"]), img[tabindex], a img';o.current=Array.from(((i=s.current)==null?void 0:i.querySelectorAll(n))||[]),o.current.length&&((r=o.current[0])==null||r.focus());const t=s.current;return document.addEventListener("keydown",p),t==null||t.addEventListener("click",m),()=>{document.removeEventListener("keydown",p),t==null||t.removeEventListener("click",m)}},[d,p,m]),d?a.jsx(z,{ref:s,role:"dialog","aria-modal":"true",children:a.jsxs(E,{tabIndex:0,children:[a.jsx(j,{svg:y,size:k,isCosy:!0,onClick:e,tabIndex:0}),a.jsx($,{children:a.jsx(V,{children:a.jsx(N,{children:a.jsx("img",{src:l,alt:"Newsletter content",tabIndex:0})})})})]})}):null},"NewsletterViewSampleModal");try{x.displayName="NewsletterViewSampleModal",x.__docgenInfo={description:"",displayName:"NewsletterViewSampleModal",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}}}}}catch{}const L=f((e=0,l=0,d=0,s=1,[o,p]=[1,1])=>{const m=`<svg xmlns="http://www.w3.org/2000/svg" width="${o}" height="${p}"><rect width="100%" height="100%" fill="rgba(${e},${l},${d},${s})" /></svg>`;return`data:image/svg+xml,${encodeURIComponent(m)}`},"createImage"),D=L,H={title:"Components/Newsletter View Sample Modal",component:x,argTypes:{imageSrc:{control:"text"},onClose:{action:"closed"}}},g={args:{imageSrc:D(211,211,211),isOpen:!0}};var h,w,b;g.parameters={...g.parameters,docs:{...(h=g.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    imageSrc: createImage(211, 211, 211),
    isOpen: true
  }
}`,...(b=(w=g.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const P=["Default"];export{g as Default,P as __namedExportsOrder,H as default};