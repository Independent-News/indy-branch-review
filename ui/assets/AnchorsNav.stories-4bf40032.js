var S=Object.defineProperty;var r=(e,o)=>S(e,"name",{value:o,configurable:!0});import{j as n}from"./jsx-runtime-1a1b98e7.js";import{d as t}from"./styled-components.browser.esm-852d80e5.js";import{I as M}from"./Image-d40681c5.js";import{y as R,a5 as H}from"./index-3b0e1f90.js";import{C as K,b as W,D as z}from"./Dropdown-c8bc362d.js";import"./DropdownWithChevron-9d6f521c.js";import"./DropdownForCard-6832d1b4.js";import{I as j}from"./Icon.hoc-5c5e8f19.js";import{a as q,W as V}from"./Icon.constants-a768151c.js";import{I as B,N as G}from"./NavBar-4a78fe9a.js";import{m as w,l as X}from"./breakPoints-89c7d41a.js";import{t as y}from"./mixins-cd1fe61f.js";import{L as $}from"./AnchorsNav.constants-3fd2a829.js";import{r as h}from"./index-29d3bc65.js";import"./index-f7d1b020.js";import"./_commonjsHelpers-f86d8be3.js";import"./devices-1d39230d.js";import"./Symbols.hoc-c2fda652.js";const P=t(G).withConfig({componentId:"sc-mf990v-0"})(["--width:320px;--height:","px;--dropdown-padding-x:","px;--border:1px solid ",";","{justify-content:space-between;gap:","px;}"],({theme:e})=>e.dimension.anchorNav.height,({theme:e})=>e.spacing.x2,({theme:e})=>e.color.divider.standard,B,({theme:e})=>e.spacing.x1),U=t.div.withConfig({componentId:"sc-mf990v-1"})(["width:100%;@media (min-width:","px){max-width:var(--width);}"],w+1),Z=t(z).withConfig({componentId:"sc-mf990v-2"})(["width:100%;height:var(--height);","{background:",";box-shadow:0px 2px 2px ",";&[aria-hidden='false']{","{max-height:calc(100vh - var(--height));overflow-y:auto;}}}@media (min-width:","px){border-right:var(--border);}@media (min-width:","px){border-left:var(--border);}"],K,({theme:e})=>e.color.canvas.secondary,({theme:e})=>e.color.shadow.light,W,w+1,X+2),F=t.ol.withConfig({componentId:"sc-mf990v-3"})(["display:flex;flex-direction:column;padding:","px ","px ","px;margin:0;list-style:none;"],({theme:e})=>e.spacing.x0_5,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.spacing.x1_5),J=t.li.withConfig({componentId:"sc-mf990v-4"})(["padding:2px ","px;",""],({theme:e})=>e.spacing.x0_5,y),Q=t.span.withConfig({componentId:"sc-mf990v-5"})(["display:block;color:",";",";"],({theme:e})=>e.color.ink.light,({theme:e})=>e.textStyle.smallLabel),D=t.span.withConfig({componentId:"sc-mf990v-6"})(["display:flex;align-items:center;justify-content:space-between;gap:","px;"],({theme:e})=>e.spacing.x1_5),Y=t.span.withConfig({componentId:"sc-mf990v-7"})(["",""],y),N=t(j).attrs({svg:R,size:q}).withConfig({componentId:"sc-mf990v-8"})(["min-width:","px;transition:transform ",";"],V,({theme:e})=>e.transition.base),ee=t.div.withConfig({componentId:"sc-mf990v-9"})(["display:flex;width:100%;height:var(--height);box-sizing:border-box;flex-direction:column;align-items:stretch;justify-content:center;padding:0 var(--dropdown-padding-x);color:",";text-align:left;text-decoration:none;transition:",";",";&:hover,&:active{","{color:",";}}&:active{outline:none;}[aria-expanded='true'] &{","{transform:rotate(-180deg);}}"],({theme:e})=>e.color.actionSubtleDark.base,({theme:e})=>e.transition.button,({theme:e})=>e.textStyle.label,D,({theme:e})=>e.color.actionSubtleDark.alt,N),ne=t.a.withConfig({componentId:"sc-mf990v-10"})(["display:flex;align-items:center;gap:","px;color:",";text-decoration:underline;",";&:hover,&:focus{color:",";}"],({theme:e})=>e.spacing.x0_5,({theme:e})=>e.color.actionSubtleDark.base,({theme:e})=>e.textStyle.label,({theme:e})=>e.color.actionSubtleDark.alt),te=t.span.withConfig({componentId:"sc-mf990v-11"})(["padding:6px 0;",""],y),oe=t(j).attrs({svg:H,size:q}).withConfig({componentId:"sc-mf990v-12"})(["display:block;min-width:","px;"],V),ae=t.div.withConfig({componentId:"sc-mf990v-13"})(["height:","px;margin-right:","px;margin-left:auto;img{display:block;}@media (max-width:","px){display:none;}"],$,({theme:e})=>e.spacing.x1_5,({$logoWidth:e=0})=>e+w),ie=h.memo(r(function({id:o,title:i,tabIndex:s,selectedId:a,trigger:c,onLinkClick:l,onLinkKeyDown:d}){const f=r(p=>l==null?void 0:l(p),"handleLinkClick"),g=r(p=>d==null?void 0:d(p,c),"handleKeyDown");return n.jsx(J,{children:n.jsxs(ne,{href:`#${o}`,tabIndex:s,onClick:f,onKeyDown:g,children:[a===o&&n.jsx(oe,{}),n.jsx(te,{children:i})]})})},"Item"));function re(e){const o=h.useRef(null);return h.useEffect(()=>{const i=r(s=>{var a;(a=o==null?void 0:o.current)!=null&&a.contains(s.target)||e()},"handleClickOutside");return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[e]),o}r(re,"useClickOutside");const v=r(({id:e,trigger:o,anchors:i,selectedId:s,isOpen:a,onClickOutside:c,onInteract:l,onArrowDown:d,onLinkClick:f,onLinkKeyDown:g})=>{const p=re(c),b=h.useRef(null);return n.jsx(U,{ref:p,children:n.jsx(Z,{id:e,trigger:o,triggerRef:b,isOpen:a,onInteract:l,onArrowDown:d,role:"navigation",children:n.jsx(F,{children:i.map(({id:A,title:O})=>n.jsx(ie,{id:A,title:O,selectedId:s,tabIndex:a?0:-1,trigger:b.current??void 0,onLinkClick:f,onLinkKeyDown:g},A))})})})},"AnchorsNavContent");try{v.displayName="AnchorsNavContent",v.__docgenInfo={description:"",displayName:"AnchorsNavContent",props:{selectedId:{defaultValue:null,description:"Id of the selected anchor",name:"selectedId",required:!0,type:{name:"string"}},trigger:{defaultValue:null,description:"The dropdown trigger",name:"trigger",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The id of the dropdown",name:"id",required:!0,type:{name:"string"}},anchors:{defaultValue:null,description:"An array of anchor objects",name:"anchors",required:!0,type:{name:"Anchor[]"}},isOpen:{defaultValue:null,description:"A boolean indicating if the dropdown menu is currently open",name:"isOpen",required:!0,type:{name:"boolean"}},onClickOutside:{defaultValue:null,description:"An onClick callback to add to the dropdown",name:"onClickOutside",required:!0,type:{name:"() => void"}},onInteract:{defaultValue:null,description:"A function that handles dropdown interactions",name:"onInteract",required:!1,type:{name:"((isOpen: boolean) => void)"}},onArrowDown:{defaultValue:null,description:"A function that handles arrow down interactions",name:"onArrowDown",required:!1,type:{name:"((e: KeyboardEvent<HTMLDivElement>) => void)"}},onLinkClick:{defaultValue:null,description:"An onClick callback to add to each of the links",name:"onLinkClick",required:!1,type:{name:"((e: MouseEvent<HTMLAnchorElement, MouseEvent>) => void)"}},onLinkKeyDown:{defaultValue:null,description:"An onKeyDown callback to add to each of the links",name:"onLinkKeyDown",required:!1,type:{name:"((e: KeyboardEvent<HTMLAnchorElement>, trigger?: HTMLDivElement) => void)"}}}}}catch{}const x=r(({className:e,selectedAnchor:o,logo:i="",logoWidth:s=0,label:a,isOpen:c=!1,...l})=>{const d=n.jsxs(ee,{children:[a&&n.jsx(Q,{children:a}),n.jsxs(D,{children:[n.jsx(Y,{children:o.title}),n.jsx(N,{})]})]});return n.jsxs(P,{className:e,children:[n.jsx(v,{trigger:d,selectedId:o.id,isOpen:c,...l}),n.jsx(ae,{$logoWidth:s,children:i})]})},"AnchorsNav");try{x.displayName="AnchorsNav",x.__docgenInfo={description:"",displayName:"AnchorsNav",props:{selectedAnchor:{defaultValue:null,description:"The selected anchor",name:"selectedAnchor",required:!0,type:{name:"Anchor"}},logo:{defaultValue:{value:""},description:"An image to display alongside the dropdown",name:"logo",required:!1,type:{name:"ReactNode"}},logoWidth:{defaultValue:{value:"0"},description:"The width of the image",name:"logoWidth",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"An optional label to add to the dropdown trigger",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The id of the dropdown",name:"id",required:!0,type:{name:"string"}},anchors:{defaultValue:null,description:"An array of anchor objects",name:"anchors",required:!0,type:{name:"Anchor[]"}},isOpen:{defaultValue:{value:"false"},description:"A boolean indicating if the dropdown menu is currently open",name:"isOpen",required:!1,type:{name:"boolean"}},onClickOutside:{defaultValue:null,description:"An onClick callback to add to the dropdown",name:"onClickOutside",required:!0,type:{name:"() => void"}},onInteract:{defaultValue:null,description:"A function that handles dropdown interactions",name:"onInteract",required:!1,type:{name:"((isOpen: boolean) => void)"}},onArrowDown:{defaultValue:null,description:"A function that handles arrow down interactions",name:"onArrowDown",required:!1,type:{name:"((e: KeyboardEvent<HTMLDivElement>) => void)"}},onLinkClick:{defaultValue:null,description:"An onClick callback to add to each of the links",name:"onLinkClick",required:!1,type:{name:"((e: MouseEvent<HTMLAnchorElement, MouseEvent>) => void)"}},onLinkKeyDown:{defaultValue:null,description:"An onKeyDown callback to add to each of the links",name:"onLinkKeyDown",required:!1,type:{name:"((e: KeyboardEvent<HTMLAnchorElement>, trigger?: HTMLDivElement) => void)"}}}}}catch{}const se=t(M).withConfig({componentId:"sc-1otg2hz-0"})(["display:block;width:60px;aspect-ratio:3 / 2;object-fit:cover;"]),Le={title:"Components/Anchors Nav",component:x,parameters:{controls:{exclude:["selectedAnchor","anchors","logo","logoWidth","onInteract","onLinkClick","onClickOutside"]}}},T={anchors:[{id:"climate-science-and-research",title:"Climate Science & Research"},{id:"renewable-energy",title:"Renewable Energy"},{id:"climate-policy-and-advocacy",title:"Climate Policy & Advocacy"},{id:"sustainable-agriculture",title:"Sustainable Agriculture & Crop Rotation"},{id:"ocean-and-marine-conservation",title:"Ocean & Marine Conservation"},{id:"urban-resilience",title:"Urban Resilience"},{id:"carbon-capture-and-storage",title:"Carbon Capture & Storage"},{id:"deforestation-and-reforestation",title:"Deforestation & Reforestation"},{id:"climate-education-and-awareness",title:"Climate Education & Awareness"}],selectedAnchor:{id:"sustainable-agriculture",title:"Sustainable Agriculture & Crop Rotation"},isOpen:!1,logo:n.jsx(se,{}),logoWidth:60,label:"Section Links"},u={args:T},m={args:{...T,isOpen:!0}};var C,I,k;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(k=(I=u.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var _,L,E;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    isOpen: true
  }
}`,...(E=(L=m.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};const Ee=["Default","Open"];export{u as Default,m as Open,Ee as __namedExportsOrder,Le as default};
