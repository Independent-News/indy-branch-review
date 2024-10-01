var V=Object.defineProperty;var s=(e,o)=>V(e,"name",{value:o,configurable:!0});import{j as n}from"./jsx-runtime-1a1b98e7.js";import{d as t}from"./styled-components.browser.esm-852d80e5.js";import{I as E}from"./Image-d40681c5.js";import{y as T,a0 as D}from"./index-91ae8c1a.js";import{C as R,b as M,D as W}from"./Dropdown-106efe7b.js";import"./DropdownWithChevron-6dfbe29f.js";import"./DropdownForCard-01658928.js";import{I as A}from"./Icon.hoc-5c5e8f19.js";import{a as _,W as j}from"./Icon.constants-a768151c.js";import{I as H,N as z}from"./NavBar-4a78fe9a.js";import{m as f,l as B}from"./breakPoints-89c7d41a.js";import{t as x}from"./mixins-cd1fe61f.js";import{L as G}from"./AnchorsNav.constants-3fd2a829.js";import{r as v}from"./index-29d3bc65.js";import"./index-f7d1b020.js";import"./_commonjsHelpers-f86d8be3.js";import"./DropdownWithChevron.styles-abacdf4f.js";import"./devices-1d39230d.js";import"./Symbols.hoc-c2fda652.js";const X=t(z).withConfig({componentId:"sc-mf990v-0"})(["--width:320px;--height:","px;--dropdown-padding-x:","px;--border:1px solid ",";","{justify-content:space-between;gap:","px;}"],({theme:e})=>e.dimension.anchorNav.height,({theme:e})=>e.spacing.x2,({theme:e})=>e.color.divider.standard,H,({theme:e})=>e.spacing.x1),$=t.div.withConfig({componentId:"sc-mf990v-1"})(["width:100%;@media (min-width:","px){max-width:var(--width);}"],f+1),P=t(W).withConfig({componentId:"sc-mf990v-2"})(["width:100%;height:var(--height);","{background:",";box-shadow:0px 2px 2px ",";&[aria-hidden='false']{","{max-height:calc(100vh - var(--height));overflow-y:auto;}}}@media (min-width:","px){border-right:var(--border);}@media (min-width:","px){border-left:var(--border);}"],R,({theme:e})=>e.color.canvas.secondary,({theme:e})=>e.color.shadow.light,M,f+1,B+2),U=t.ol.withConfig({componentId:"sc-mf990v-3"})(["display:flex;flex-direction:column;padding:","px ","px ","px;margin:0;list-style:none;"],({theme:e})=>e.spacing.x0_5,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.spacing.x1_5),Z=t.li.withConfig({componentId:"sc-mf990v-4"})(["padding:2px ","px;",""],({theme:e})=>e.spacing.x0_5,x),F=t.span.withConfig({componentId:"sc-mf990v-5"})(["display:block;color:",";",";"],({theme:e})=>e.color.ink.light,({theme:e})=>e.textStyle.smallLabel),L=t.span.withConfig({componentId:"sc-mf990v-6"})(["display:flex;align-items:center;justify-content:space-between;gap:","px;"],({theme:e})=>e.spacing.x1_5),J=t.span.withConfig({componentId:"sc-mf990v-7"})(["",""],x),N=t(A).attrs({svg:T,size:_}).withConfig({componentId:"sc-mf990v-8"})(["min-width:","px;transition:transform ",";"],j,({theme:e})=>e.transition.base),K=t.div.withConfig({componentId:"sc-mf990v-9"})(["display:flex;width:100%;height:var(--height);box-sizing:border-box;flex-direction:column;align-items:stretch;justify-content:center;padding:0 var(--dropdown-padding-x);color:",";text-align:left;text-decoration:none;transition:",";",";&:hover,&:active{","{color:",";}}&:active{outline:none;}[aria-expanded='true'] &{","{transform:rotate(-180deg);}}"],({theme:e})=>e.color.actionSubtleDark.base,({theme:e})=>e.transition.button,({theme:e})=>e.textStyle.label,L,({theme:e})=>e.color.actionSubtleDark.alt,N),Q=t.a.withConfig({componentId:"sc-mf990v-10"})(["display:flex;align-items:center;gap:","px;color:",";text-decoration:underline;",";&:hover,&:focus{color:",";}"],({theme:e})=>e.spacing.x0_5,({theme:e})=>e.color.actionSubtleDark.base,({theme:e})=>e.textStyle.label,({theme:e})=>e.color.actionSubtleDark.alt),Y=t.span.withConfig({componentId:"sc-mf990v-11"})(["padding:6px 0;",""],x),ee=t(A).attrs({svg:D,size:_}).withConfig({componentId:"sc-mf990v-12"})(["display:block;min-width:","px;"],j),ne=t.div.withConfig({componentId:"sc-mf990v-13"})(["height:","px;margin-right:","px;margin-left:auto;img{display:block;}@media (max-width:","px){display:none;}"],G,({theme:e})=>e.spacing.x1_5,({$logoWidth:e=0})=>e+f);function te(e){const o=v.useRef(null);return v.useEffect(()=>{const i=s(a=>{var r;(r=o==null?void 0:o.current)!=null&&r.contains(a.target)||e()},"handleClickOutside");return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[e]),o}s(te,"useClickOutside");const h=s(({id:e,trigger:o,anchors:i,selectedId:a,isOpen:r,onInteract:l,onLinkClick:p,onClickOutside:u})=>{const q=te(u);return n.jsx($,{ref:q,children:n.jsx(P,{id:e,trigger:o,isOpen:r,onInteract:l,role:"navigation",children:n.jsx(U,{children:i.map(({id:m,title:S})=>n.jsx(Z,{children:n.jsxs(Q,{href:`#${m}`,onClick:p,children:[a===m&&n.jsx(ee,{}),n.jsx(Y,{children:S})]})},m))})})})},"AnchorsNavContent");try{h.displayName="AnchorsNavContent",h.__docgenInfo={description:"",displayName:"AnchorsNavContent",props:{selectedId:{defaultValue:null,description:"Id of the selected anchor",name:"selectedId",required:!0,type:{name:"string"}},trigger:{defaultValue:null,description:"The dropdown trigger",name:"trigger",required:!0,type:{name:"ReactNode"}},id:{defaultValue:null,description:"The id of the dropdown",name:"id",required:!0,type:{name:"string"}},anchors:{defaultValue:null,description:"An array of anchor objects",name:"anchors",required:!0,type:{name:"Anchor[]"}},isOpen:{defaultValue:null,description:"A boolean indicating if the dropdown menu is currently open",name:"isOpen",required:!0,type:{name:"boolean"}},onInteract:{defaultValue:null,description:"A function that handles dropdown interactions",name:"onInteract",required:!0,type:{name:"(isOpen: boolean) => void"}},onLinkClick:{defaultValue:null,description:"An onClick callback to add to each of the links",name:"onLinkClick",required:!0,type:{name:"(e: MouseEvent<HTMLAnchorElement, MouseEvent>) => void"}},onClickOutside:{defaultValue:null,description:"An onClick callback to add to the dropdown",name:"onClickOutside",required:!0,type:{name:"() => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const g=s(({selectedAnchor:e,logo:o="",logoWidth:i=0,label:a,isOpen:r=!1,className:l,...p})=>{const u=n.jsxs(K,{children:[a&&n.jsx(F,{children:a}),n.jsxs(L,{children:[n.jsx(J,{children:e.title}),n.jsx(N,{})]})]});return n.jsxs(X,{className:l,children:[n.jsx(h,{trigger:u,selectedId:e.id,isOpen:r,...p}),n.jsx(ne,{$logoWidth:i,children:o})]})},"AnchorsNav");try{g.displayName="AnchorsNav",g.__docgenInfo={description:"",displayName:"AnchorsNav",props:{selectedAnchor:{defaultValue:null,description:"The selected anchor",name:"selectedAnchor",required:!0,type:{name:"Anchor"}},logo:{defaultValue:{value:""},description:"An image to display alongside the dropdown",name:"logo",required:!1,type:{name:"ReactNode"}},logoWidth:{defaultValue:{value:"0"},description:"The width of the image",name:"logoWidth",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"An optional label to add to the dropdown trigger",name:"label",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The id of the dropdown",name:"id",required:!0,type:{name:"string"}},anchors:{defaultValue:null,description:"An array of anchor objects",name:"anchors",required:!0,type:{name:"Anchor[]"}},isOpen:{defaultValue:{value:"false"},description:"A boolean indicating if the dropdown menu is currently open",name:"isOpen",required:!1,type:{name:"boolean"}},onInteract:{defaultValue:null,description:"A function that handles dropdown interactions",name:"onInteract",required:!0,type:{name:"(isOpen: boolean) => void"}},onLinkClick:{defaultValue:null,description:"An onClick callback to add to each of the links",name:"onLinkClick",required:!0,type:{name:"(e: MouseEvent<HTMLAnchorElement, MouseEvent>) => void"}},onClickOutside:{defaultValue:null,description:"An onClick callback to add to the dropdown",name:"onClickOutside",required:!0,type:{name:"() => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const oe=t(E).withConfig({componentId:"sc-1otg2hz-0"})(["display:block;width:60px;aspect-ratio:3 / 2;object-fit:cover;"]),ke={title:"Components/Anchors Nav",component:g,parameters:{controls:{exclude:["selectedAnchor","anchors","logo","logoWidth","onInteract","onLinkClick","onClickOutside"]}}},O={anchors:[{id:"climate-science-and-research",title:"Climate Science & Research"},{id:"renewable-energy",title:"Renewable Energy"},{id:"climate-policy-and-advocacy",title:"Climate Policy & Advocacy"},{id:"sustainable-agriculture",title:"Sustainable Agriculture & Crop Rotation"},{id:"ocean-and-marine-conservation",title:"Ocean & Marine Conservation"},{id:"urban-resilience",title:"Urban Resilience"},{id:"carbon-capture-and-storage",title:"Carbon Capture & Storage"},{id:"deforestation-and-reforestation",title:"Deforestation & Reforestation"},{id:"climate-education-and-awareness",title:"Climate Education & Awareness"}],selectedAnchor:{id:"sustainable-agriculture",title:"Sustainable Agriculture & Crop Rotation"},isOpen:!1,logo:n.jsx(oe,{}),logoWidth:60,label:"Section Links"},d={args:O},c={args:{...O,isOpen:!0}};var y,b,w;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(w=(b=d.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var C,I,k;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    isOpen: true
  }
}`,...(k=(I=c.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};const Ae=["Default","Open"];export{d as Default,c as Open,Ae as __namedExportsOrder,ke as default};
