var _=Object.defineProperty;var m=(e,t)=>_(e,"name",{value:t,configurable:!0});import{j as o}from"./jsx-runtime-1a1b98e7.js";import{C as T}from"./Content-d0768478.js";import{M as j}from"./MockCopy-ef682cd6.js";import{r as i}from"./index-29d3bc65.js";import{d as c}from"./styled-components.browser.esm-852d80e5.js";import{B as H,T as q,C as E,a as B}from"./Dropdown-c8bc362d.js";import"./DropdownWithChevron-8757e554.js";import"./DropdownForCard-6832d1b4.js";import{t as s,m as h}from"./devices-1d39230d.js";import"./_commonjsHelpers-f86d8be3.js";import"./mixins-cd1fe61f.js";import"./index-f7d1b020.js";import"./index-3b0e1f90.js";import"./Icon.constants-a768151c.js";import"./Icon.hoc-5c5e8f19.js";import"./Symbols.hoc-c2fda652.js";import"./breakPoints-89c7d41a.js";const D=c.div.withConfig({componentId:"sc-t0411a-0"})(["--line-height:1.44em;--trigger-line-height:var(--line-height);--dropdown-content-initial-height:calc( var(--line-height) * "," + var(--trigger-line-height) );--dropdown-trigger-color:",";@media ","{--dropdown-content-initial-height:auto;}","{display:flex;flex-direction:column;}","{order:2;margin:","px 0 var(--line-height);text-decoration:underline;",";&:focus,&:hover{color:",";}&[aria-expanded='true']{display:none;}@media ","{display:none;}}","{@media ","{p,ul,ol{margin:0 0 var(--line-height);}}@media ","{grid-template-rows:1fr;}}"],({$lines:e})=>e,({theme:e})=>e.color.actionBrand.base,s,H,q,({theme:e})=>e.spacing.x1,({theme:e})=>e.textStyle.continueReading,({theme:e})=>e.color.actionBrand.alt,s,E,h,s),I=c.div.withConfig({componentId:"sc-t0411a-1"})(["@media ","{margin-top:var(--line-height);}"],h),N=c(B).withConfig({componentId:"sc-t0411a-2"})([""]),l=m(({id:e,lines:t=6,prompt:x="Continue reading...",children:n,className:C})=>{const a=i.useRef(null),[y,v]=i.useState(!1);return i.useLayoutEffect(()=>{if(a.current){const p=a.current,d=p.querySelector("p");if(d){const w=getComputedStyle(d),b=parseFloat(w.lineHeight)*t,S=p.scrollHeight;v(S>b)}}},[n,t]),o.jsx(D,{$lines:t,className:C,children:o.jsx(I,{ref:a,children:y?o.jsx(N,{id:e,trigger:x,children:n}):n})})},"CollapsibleText");try{l.displayName="CollapsibleText",l.__docgenInfo={description:"A component that collapses text content after a certain number of lines.",displayName:"CollapsibleText",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},lines:{defaultValue:{value:"6"},description:"",name:"lines",required:!1,type:{name:"number"}},prompt:{defaultValue:{value:"Continue reading..."},description:"",name:"prompt",required:!1,type:{name:"string"}}}}}catch{}const ee={title:"Components/Collapsible Text",component:l,parameters:{controls:{exclude:["children"]}}},R={id:"collapsible",lines:9,children:o.jsx(j,{})},r={args:R,decorators:[T]};var u,g,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: defaultArgs,
  decorators: [Content]
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const te=["Default"];export{r as Default,te as __namedExportsOrder,ee as default};
