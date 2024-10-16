var D=Object.defineProperty;var o=(e,a)=>D(e,"name",{value:a,configurable:!0});import{O as U,E as z,D as H,L as G,F as Y,S as Z,a as J}from"./PriceComparison.constants-fde5db05.js";import{j as r}from"./jsx-runtime-1a1b98e7.js";import{B as h,f as K,h as Q,d as X}from"./Themed-37bc6e61.js";import{g as I}from"./currency-dffb60c3.js";import{d as t}from"./styled-components.browser.esm-852d80e5.js";import{v as ee}from"./mixins-cd1fe61f.js";import{L as re}from"./LoadingEllipsis-dfc77cbe.js";import"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";import"./themes-62dd66f0.js";import"./boxShadows-395cc866.js";import"./palette-273fb38f.js";import"./colors-3e41a0f7.js";import"./base-c8d9f963.js";import"./Icon.constants-a768151c.js";import"./breakPoints-89c7d41a.js";import"./fontWeights-1d7bfb43.js";import"./devices-1d39230d.js";import"./zIndex-6061405c.js";import"./index-08c90798.js";import"./index-3b0e1f90.js";import"./Icon.hoc-5c5e8f19.js";import"./Symbols.hoc-c2fda652.js";import"./index-f7d1b020.js";const d=t.div.withConfig({componentId:"sc-sqsw2v-0"})(["--bottom-margin:","px;--button-height:48px;--height:calc( (var(--button-height) * ",") + (var(--bottom-margin) * 2) );height:var(--height);box-sizing:border-box;"],({theme:e})=>e.spacing.x1_5,U),ae=t.ol.withConfig({componentId:"sc-sqsw2v-1"})(["display:flex;flex-direction:column;gap:","px;padding:0;margin:0;list-style:none;"],({theme:e})=>e.spacing.x1_5),te=t.span.withConfig({componentId:"sc-sqsw2v-2"})(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]),oe=t.span.withConfig({componentId:"sc-sqsw2v-3"})(["",";"],({theme:e})=>e.textStyle.button.xLargeStrikeThrough),ne=t.div.withConfig({componentId:"sc-sqsw2v-4"})(["margin-top:","px;font:",";text-align:right;"],({theme:e})=>e.spacing.x1,({theme:e})=>e.textStyle.priceList.updated),le=t(d).withConfig({componentId:"sc-sqsw2v-5"})(["display:flex;align-items:stretch;"]),ie=t.p.withConfig({componentId:"sc-sqsw2v-6"})(["",""],ee),se=o(({merchant:e,originalPrice:a,price:m,link:f,target:n,rel:l,isExternal:g,onClick:v})=>r.jsx(h,{as:K,href:f,target:n,rel:l,isExternal:g,size:Q,variant:X,onClick:v,children:r.jsxs(te,{children:[a&&r.jsx(oe,{children:I(a)})," ",I(m)," from ",e]})}),"PriceComparisonButton");try{h.displayName="Button",h.__docgenInfo={description:"",displayName:"Button",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},merchant:{defaultValue:null,description:"",name:"merchant",required:!0,type:{name:"string"}},originalPrice:{defaultValue:null,description:"",name:"originalPrice",required:!1,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_blank"'},{value:'"_self"'},{value:'"_parent"'},{value:'"_top"'}]}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"enum",value:[{value:'"alternate"'},{value:'"external"'},{value:'"nofollow"'},{value:'"noopener"'},{value:'"noreferrer"'},{value:'"alternate alternate"'},{value:'"alternate external"'},{value:'"alternate nofollow"'},{value:'"alternate noopener"'},{value:'"alternate noreferrer"'},{value:'"external alternate"'},{value:'"external external"'},{value:'"external nofollow"'},{value:'"external noopener"'},{value:'"external noreferrer"'},{value:'"nofollow alternate"'},{value:'"nofollow external"'},{value:'"nofollow nofollow"'},{value:'"nofollow noopener"'},{value:'"nofollow noreferrer"'},{value:'"noopener alternate"'},{value:'"noopener external"'},{value:'"noopener nofollow"'},{value:'"noopener noopener"'},{value:'"noopener noreferrer"'},{value:'"noreferrer alternate"'},{value:'"noreferrer external"'},{value:'"noreferrer nofollow"'},{value:'"noreferrer noopener"'},{value:'"noreferrer noreferrer"'}]}},isExternal:{defaultValue:null,description:"",name:"isExternal",required:!1,type:{name:"boolean"}}}}}catch{}const x=o(({className:e,children:a})=>r.jsxs(d,{className:e,children:[a,r.jsx(ne,{children:r.jsx("small",{children:z})})]}),"Fallback$1");try{x.displayName="Fallback",x.__docgenInfo={description:"",displayName:"Fallback",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const _=o(({className:e})=>r.jsx(d,{className:e,children:r.jsxs(le,{children:[r.jsx(ie,{children:"Loading..."}),r.jsx(re,{})]})}),"Loading$1");try{_.displayName="Loading",_.__docgenInfo={description:"",displayName:"Loading",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const y=o(({className:e,items:a,isLoading:m,isLive:f,onBuyNowClick:n})=>{const l=r.jsx(ae,{children:a.map(({merchant:g,originalPrice:v,price:w,link:R,target:O,rel:M,isExternal:$},S)=>r.jsx("li",{children:r.jsx(se,{merchant:g,originalPrice:v,price:w,link:R,target:O,rel:M,isExternal:$,onClick:()=>n&&n(S,w)})},S))});return m?r.jsx(_,{className:e}):f?r.jsx(d,{className:e,children:l}):r.jsx(x,{className:e,children:l})},"PriceComparisonAsButtons");try{y.displayName="PriceComparisonAsButtons",y.__docgenInfo={description:"",displayName:"PriceComparisonAsButtons",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LivePriceItem[]"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isLive:{defaultValue:null,description:"",name:"isLive",required:!1,type:{name:"boolean"}},onBuyNowClick:{defaultValue:null,description:"",name:"onBuyNowClick",required:!1,type:{name:"((index: number, price: string | number) => void)"}}}}}catch{}const Be={title:"Components/Price Comparison/Buttons",component:y},i=H,s=G,c=Y,p=Z,u=J;var L,q,b;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:"FooDefault",...(b=(q=i.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};var N,C,j;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:"FooLoading",...(j=(C=s.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var V,k,F;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:"FooFallback",...(F=(k=c.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var T,B,E;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:"FooSuccessWithSingleItem",...(E=(B=p.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var P,W,A;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:"FooSuccessWithMultipleItems",...(A=(W=u.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};const Ee=["Default","Loading","Fallback","SuccessWithSingleItem","SuccessWithMultipleItems"];export{i as Default,c as Fallback,s as Loading,u as SuccessWithMultipleItems,p as SuccessWithSingleItem,Ee as __namedExportsOrder,Be as default};
