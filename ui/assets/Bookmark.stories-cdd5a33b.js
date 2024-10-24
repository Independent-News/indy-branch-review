var S=Object.defineProperty;var t=(o,a)=>S(o,"name",{value:a,configurable:!0});import{P as O}from"./Overlay-f3b15a72.js";import{l as z}from"./loremIpsum-002ec660.js";import{j as r}from"./jsx-runtime-1a1b98e7.js";import{z as j,ac as P,ad as D}from"./index-3b0e1f90.js";import{D as E}from"./DarkThemeProvider-4b4898d0.js";import{d as e}from"./styled-components.browser.esm-852d80e5.js";import{I as k}from"./Icon.hoc-5c5e8f19.js";import{t as u,l as V}from"./devices-1d39230d.js";import{c as R}from"./Icon.constants-a768151c.js";import{a as K}from"./SuccessConfirmationModal-a8989ff6.js";import"./SellingModalOverlay-ebbaa10f.js";import"./SellingModalHeader-bba02b45.js";import"./index-08c90798.js";import"./_commonjsHelpers-f86d8be3.js";import"./index-29d3bc65.js";import"./themes-2bc8cc20.js";import"./boxShadows-395cc866.js";import"./palette-273fb38f.js";import"./colors-3e41a0f7.js";import"./base-c8d9f963.js";import"./breakPoints-89c7d41a.js";import"./fontWeights-1d7bfb43.js";import"./zIndex-6061405c.js";import"./Symbols.hoc-c2fda652.js";import"./index-f7d1b020.js";import"./inheritsLoose-289c47e1.js";import"./IconButton-307a52dd.js";import"./Tag-8cdcd799.js";import"./mixins-cd1fe61f.js";const L=e.div.attrs({role:"alert"}).withConfig({componentId:"sc-wqlfdh-0"})(["--padding:","px;--alert-width:100%;display:flex;position:fixed;top:0;right:0;z-index:",";width:var(--alert-width);box-sizing:border-box;align-items:flex-start;justify-content:space-between;padding:6px 6px var(--padding) var(--padding);background-color:",";box-shadow:0 4px 4px ",";color:",";@media ","{--alert-width:400px;top:24px;right:22px;left:auto;}"],({theme:o})=>o.spacing.x1_5,({theme:o})=>o.zIndex.header,({theme:o})=>o.color.veil.base,({theme:o})=>o.color.shadow.dark,({theme:o})=>o.color.ink.base,u),T=e.button.withConfig({componentId:"sc-wqlfdh-1"})([""]),$=e(k).withConfig({componentId:"sc-wqlfdh-2"})(["max-width:14px;padding:0 6px;color:",";"],({theme:o})=>o.color.ink.base),l=t(({closeAlert:o,children:a})=>r.jsx(E,{children:r.jsxs(L,{children:[a,r.jsx(T,{"aria-label":"Close",onClick:o,children:r.jsx($,{svg:j})})]})}),"BookmarkAlert");try{l.displayName="BookmarkAlert",l.__docgenInfo={description:"",displayName:"BookmarkAlert",props:{closeAlert:{defaultValue:null,description:"",name:"closeAlert",required:!0,type:{name:"() => unknown"}}}}}catch{}const g="bookmark-button",A=e.button.withConfig({componentId:"sc-17yxc4y-0"})(["color:",";"],({theme:o})=>o.color.primary.base),q=e(k).attrs({size:R}).withConfig({componentId:"sc-17yxc4y-1"})([""]),c=t(({handleClick:o})=>r.jsx(A,{id:g,onClick:o,"aria-label":"Bookmark this page",children:r.jsx(q,{svg:P})}),"BookmarkButton");try{c.displayName="BookmarkButton",c.__docgenInfo={description:"",displayName:"BookmarkButton",props:{handleClick:{defaultValue:null,description:"",name:"handleClick",required:!0,type:{name:"() => unknown"}}}}}catch{}const F=e(K).withConfig({componentId:"sc-1a3iv5w-0"})([""]),G=e.div.withConfig({componentId:"sc-1a3iv5w-1"})(["--margin-x:","px;--modal-width:calc(100% - (var(--margin-x) * 2));--modal-max-width:351px;--padding:60px 16px 42px;--line-height:1.25;position:fixed;top:50%;left:50%;overflow:auto;width:var(--modal-width);max-width:var(--modal-max-width);max-height:100vh;box-sizing:border-box;padding:var(--padding);background-color:",";box-shadow:0 1px 1px ",";line-height:var(--line-height);text-align:center;transform:translate(-50%,-50%);@media ","{--modal-width:600px;--modal-max-width:none;--padding:72px 80px 64px;--line-height:1.2;}@media ","{--modal-width:635px;}"],({theme:o})=>o.spacing.x1_5,({theme:o})=>o.color.canvas.brand,({theme:o})=>o.color.veil.base,u,V),H=e.button.withConfig({componentId:"sc-1a3iv5w-2"})(["--close-button-margin:15px;position:absolute;top:var(--close-button-margin);right:var(--close-button-margin);padding:10px;@media ","{--close-button-margin:24px;}"],u),J=e(k).withConfig({componentId:"sc-1a3iv5w-3"})([""]),p=t(({isModalOpen:o,closeModal:a,children:N})=>r.jsx(F,{isHidden:!o,returnFocus:`#${g}`,onEscapeKeyPress:a,children:r.jsxs(G,{children:[r.jsx(H,{"aria-label":"Close",onClick:a,children:r.jsx(J,{svg:j})}),N]})}),"BookmarkModal");try{p.displayName="BookmarkModal",p.__docgenInfo={description:"",displayName:"BookmarkModal",props:{isModalOpen:{defaultValue:null,description:"",name:"isModalOpen",required:!0,type:{name:"boolean"}},closeModal:{defaultValue:null,description:"",name:"closeModal",required:!0,type:{name:"() => unknown"}}}}}catch{}const m=t(({handleClick:o})=>r.jsx(A,{id:g,onClick:o,"aria-label":"Remove bookmark from this page",children:r.jsx(q,{svg:D})}),"BookmarkedButton");try{m.displayName="BookmarkedButton",m.__docgenInfo={description:"",displayName:"BookmarkedButton",props:{handleClick:{defaultValue:null,description:"",name:"handleClick",required:!0,type:{name:"() => unknown"}}}}}catch{}const Co={title:"Components/Bookmark"},n={render:c,args:{}},i={render:m,args:{}},s={render:p,args:{isModalOpen:!0,children:"Modal content"},decorators:[O,z(23)]},d={render:l,args:{children:"Bookmark alert"}};var h,x,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: BookmarkButton,
  args: {}
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var B,_,w;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: BookmarkedButton,
  args: {}
}`,...(w=(_=i.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var b,y,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: BookmarkModal,
  args: {
    isModalOpen: true,
    children: 'Modal content'
  },
  decorators: [PreventBodyLock, loremIpsum(23)]
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var C,I,M;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: BookmarkAlert,
  args: {
    children: 'Bookmark alert'
  }
}`,...(M=(I=d.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const Io=["Default","Bookmarked","Modal","Alert"];export{d as Alert,i as Bookmarked,n as Default,s as Modal,Io as __namedExportsOrder,Co as default};
