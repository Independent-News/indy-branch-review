var B=Object.defineProperty;var i=(e,s)=>B(e,"name",{value:s,configurable:!0});import{l as D,J as E,n as T,L as V,q as W,r as q,C as M,X as H,u as J,V as N,A as O,B as U}from"./index-3b0e1f90.js";import{j as r}from"./jsx-runtime-1a1b98e7.js";import{D as z}from"./DarkThemeProvider-155f2453.js";import{d as o}from"./styled-components.browser.esm-852d80e5.js";import{I as R}from"./Icon.hoc-5c5e8f19.js";import{e as g,b as Z}from"./Icon.constants-a768151c.js";import{t as $,l as F}from"./devices-1d39230d.js";import"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";import"./themes-ec33fe04.js";import"./boxShadows-7f4411eb.js";import"./palette-273fb38f.js";import"./colors-3e41a0f7.js";import"./base-c8d9f963.js";import"./breakPoints-89c7d41a.js";import"./fontWeights-1d7bfb43.js";import"./zIndex-6061405c.js";import"./Symbols.hoc-c2fda652.js";import"./index-f7d1b020.js";const G=o.div.withConfig({componentId:"sc-2kkcl-0"})(["padding:","px;background-color:",";"],({theme:e})=>e.spacing.x2,({theme:e})=>e.color.canvas.secondary),K=o.div.withConfig({componentId:"sc-2kkcl-1"})(["margin:","px 0 ","px;font:",";"],({theme:e})=>e.spacing.x0_5,({theme:e})=>e.spacing.x2,({theme:e})=>e.textStyle.priceList.updated),Q=o.ul.withConfig({componentId:"sc-2kkcl-2"})(["--min-column-width:140px;--gap:9px;display:grid;gap:var(--gap);grid-template-columns:repeat(2,1fr);padding:0;margin:0 auto;list-style:none;@media ","{grid-template-columns:repeat(3,1fr);}@media ","{grid-template-columns:repeat( auto-fit,minmax(var(--min-column-width),1fr) );}"],$,F),Y=o.li.withConfig({componentId:"sc-2kkcl-3"})(["display:flex;flex-direction:column;padding:","px;border-radius:6px;background-color:",";"],({theme:e})=>e.spacing.x2,({theme:e})=>e.color.canvas.base),ee=o.div.withConfig({componentId:"sc-2kkcl-4"})(["width:","px;height:","px;padding:","px;margin-bottom:","px;border-radius:50%;background-color:",";"],g,g,({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x1,({theme:e})=>e.color.canvas.brand),re=o(R).attrs({size:Z}).withConfig({componentId:"sc-2kkcl-5"})([""]),te=o.div.withConfig({componentId:"sc-2kkcl-6"})(["flex:1;margin-bottom:","px;color:",";font:",";"],({theme:e})=>e.spacing.x1_5,({theme:e})=>e.color.ink.base,({theme:e})=>e.textStyle.priceList.action),oe=o.div.withConfig({componentId:"sc-2kkcl-7"})(["display:flex;width:fit-content;padding:","px ","px;border-radius:6px;background-color:",";color:",";font:",";text-align:center;white-space:nowrap;"],({theme:e})=>e.spacing.x0_25,({theme:e})=>e.spacing.x0_5,({theme:e})=>e.color.canvas.base,({theme:e})=>e.color.ink.base,({theme:e})=>e.textStyle.priceList.price),se=i(({price:e})=>r.jsx(z,{children:r.jsx(oe,{children:e})}),"PriceItem"),ie=i(()=>r.jsx("strong",{children:"—"}),"Dash"),l=i(({updated:e,items:s})=>!Array.isArray(s)||!(s!=null&&s.length)?null:r.jsxs(G,{children:[e&&r.jsxs(K,{children:["Prices last updated: ",e]}),r.jsx(Q,{children:s.map(({action:C,price:m,icon:P},X)=>r.jsxs(Y,{children:[r.jsx(ee,{children:r.jsx(re,{svg:P})}),r.jsx(te,{children:C}),m?r.jsx(se,{price:m}):r.jsx(ie,{})]},X))})]}),"PriceList"),ae=l;try{l.displayName="PriceList",l.__docgenInfo={description:"",displayName:"PriceList",props:{updated:{defaultValue:null,description:"",name:"updated",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"PriceListItem[]"}}}}}catch{}const t={items:[{icon:D,action:"Taxi (1km)",price:"£1.00"},{icon:E,action:"One-way ticket on local transport",price:"£1.00"},{icon:T,action:"Meal at a restaurant (Medium cost)",price:"£10.00"},{icon:V,action:"Bar - Beer 0.5L",price:"£2.00"},{icon:W,action:"Shop - Bottle of Wine 0.75L",price:"£5.00"},{icon:q,action:"Cafe - Cappuccino",price:"£2.00"},{icon:M,action:"Beach - Sunbed & Umbrella",price:"£5.00"},{icon:H,action:"Shop - Suncream 0.2L",price:"£5.00"},{icon:J,action:"Shop - Water 1L",price:"£1.00"},{icon:N,action:"Petrol 1L",price:"£1.00"},{icon:O,action:"Shop - Loaf of Bread ",price:"£1.00"},{icon:U,action:"Hotel (Mid-range)",price:"£50.00"}]},Ae={title:"Components/Price List",component:ae,tags:["storyshot:vp:all"],argTypes:{items:{description:"Items",control:{type:"object"}}}},a={args:t},c={args:{...t,items:t.items.slice(0,6)}},n={args:{...t,items:t.items.slice(0,5)}},p={args:{...t,items:t.items.slice(0,4)}},d={args:{...t,items:t.items.slice(0,3)}};var u,x,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var h,y,k;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    items: defaultArgs.items.slice(0, 6)
  }
}`,...(k=(y=c.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var S,b,I;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    items: defaultArgs.items.slice(0, 5)
  }
}`,...(I=(b=n.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var L,_,j;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    items: defaultArgs.items.slice(0, 4)
  }
}`,...(j=(_=p.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var w,A,v;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    items: defaultArgs.items.slice(0, 3)
  }
}`,...(v=(A=d.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};const ve=["Default","X6","X5","X4","X3"];export{a as Default,d as X3,p as X4,n as X5,c as X6,ve as __namedExportsOrder,Ae as default};
