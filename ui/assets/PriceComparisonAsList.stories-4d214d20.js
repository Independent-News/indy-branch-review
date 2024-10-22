var X=Object.defineProperty;var t=(e,o)=>X(e,"name",{value:o,configurable:!0});import{E as Y,O as S,D as ee,L as ne,F as re,S as ae,a as oe}from"./PriceComparison.constants-fde5db05.js";import{j as n}from"./jsx-runtime-1a1b98e7.js";import{r as L}from"./index-29d3bc65.js";import{T as te}from"./index-9c2b6667.js";import{S as ie}from"./Icon.constants-a768151c.js";import{d as a}from"./styled-components.browser.esm-852d80e5.js";import{C as le,D as se}from"./Dropdown-c8bc362d.js";import"./DropdownWithChevron-a97c4672.js";import"./DropdownForCard-92916fa0.js";import{I as ce}from"./Icon.hoc-5c5e8f19.js";import{c as pe}from"./clampLines-a64b3b1f.js";import{h as de}from"./colors-3e41a0f7.js";import{g as ue}from"./currency-dffb60c3.js";import{L as me}from"./LoadingEllipsis-dfc77cbe.js";import"./_commonjsHelpers-f86d8be3.js";import"./mixins-cd1fe61f.js";import"./devices-1d39230d.js";import"./breakPoints-89c7d41a.js";import"./index-f7d1b020.js";import"./Symbols.hoc-c2fda652.js";const R=a.div.withConfig({componentId:"sc-1ds8mbq-0"})(["--line-height:20px;--row-padding-x:","px;--row-bg:",";--row-bg-transparent:",";--main-bg:",";--dropdown-content-initial-height:99px;display:flex;flex-direction:column;gap:",";padding:","px;padding-top:","px;background-color:var(--main-bg);color:",";font:16px / var(--line-height) ",";"],({theme:e})=>e.spacing.x1_5,({theme:e})=>e.color.canvas.base,({theme:e})=>de(e.color.canvas.base,0),({theme:e})=>e.color.canvas.secondary,({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x0_5,({theme:e})=>e.spacing.x1,({theme:e})=>e.color.ink.base,({theme:e})=>e.fontFamily.secondaryFont),B=a.h3.withConfig({componentId:"sc-1ds8mbq-1"})(["padding:0 var(--row-padding-x);margin:0;font:inherit;font-weight:bold;",";"],pe(1,"--line-height",!0)),z=a.span.withConfig({componentId:"sc-1ds8mbq-2"})(["--height:24px;display:flex;position:absolute;bottom:0;left:0;width:100%;height:var(--height);align-items:center;justify-content:center;gap:","px;background:var(--main-bg);font:normal 16px/20px ",";opacity:1;transition:",";&::after{--fade-from:var(--main-bg);--fade-to:var(--row-bg-transparent);display:block;position:absolute;bottom:100%;width:100%;height:100%;background-image:linear-gradient(0deg,var(--fade-from),var(--fade-to));content:'';}"],({theme:e})=>e.dimension.btn.iconSpacing,({theme:e})=>e.fontFamily.secondaryFont,({theme:e})=>e.transition.readMoreTrigger),ge=a(ce).withConfig({componentId:"sc-1ds8mbq-3"})([""]),fe=a(se).withConfig({componentId:"sc-1ds8mbq-4"})(["position:relative;","{min-height:var(--dropdown-content-initial-height);}","{position:absolute;right:0;bottom:0;left:0;opacity:",";pointer-events:",";}"],le,z,({isOpen:e})=>e?0:1,({isOpen:e})=>e?"none":"auto"),G=a.div.withConfig({componentId:"sc-1ds8mbq-5"})(["display:flex;height:var(--dropdown-content-initial-height);flex-direction:column;"]),he=a.ol.withConfig({componentId:"sc-1ds8mbq-6"})(["display:flex;flex-direction:column;gap:3px;padding:0;margin:0;list-style:none;"]),xe=a.li.withConfig({componentId:"sc-1ds8mbq-7"})(["display:flex;flex-flow:row nowrap;align-items:center;gap:",";padding:","px var(--row-padding-x);background-color:var(--row-bg);font:inherit;sup{vertical-align:top;}"],({theme:e})=>e.spacing.x3,({theme:e})=>e.spacing.x1),ve=a.div.withConfig({componentId:"sc-1ds8mbq-8"})(["display:block;overflow:hidden;margin:0;margin-right:auto;font-weight:normal;text-overflow:ellipsis;white-space:nowrap;"]),ye=a.div.withConfig({componentId:"sc-1ds8mbq-9"})(["display:flex;align-items:center;gap:","px;font-weight:bold;white-space:nowrap;"],({theme:e})=>e.spacing.x2),be=a.div.withConfig({componentId:"sc-1ds8mbq-10"})(["sup{line-height:1;}"]),we=a.a.withConfig({componentId:"sc-1ds8mbq-11"})(["text-decoration:underline;"]),_e=a.p.withConfig({componentId:"sc-1ds8mbq-12"})(["margin:auto ","px;text-align:right;&,& small{font:15px/20px ",";}"],({theme:e})=>e.spacing.x1_5,({theme:e})=>e.fontFamily.secondaryFont),u=t(({title:e,children:o})=>n.jsxs(R,{children:[n.jsx(B,{children:e}),n.jsx(G,{children:o})]}),"Wrapper");try{u.displayName="Wrapper",u.__docgenInfo={description:"",displayName:"Wrapper",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}}}catch{}const x=t(({title:e,children:o})=>n.jsxs(u,{title:e,children:[o,n.jsx(_e,{children:n.jsx("small",{children:Y})})]}),"Fallback$1");try{x.displayName="Fallback",x.__docgenInfo={description:"",displayName:"Fallback",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const v=t(({merchant:e,price:o,link:r,target:m,rel:g,onClick:i})=>n.jsxs(xe,{children:[n.jsx(ve,{children:e}),n.jsxs(ye,{children:[n.jsx(be,{children:ue(o)}),n.jsx(we,{href:r,onClick:i,target:m,rel:g,children:"Buy now"})]})]}),"Item");try{v.displayName="Item",v.__docgenInfo={description:"",displayName:"Item",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},merchant:{defaultValue:null,description:"",name:"merchant",required:!0,type:{name:"string"}},originalPrice:{defaultValue:null,description:"",name:"originalPrice",required:!1,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_blank"'},{value:'"_self"'},{value:'"_parent"'},{value:'"_top"'}]}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"enum",value:[{value:'"alternate"'},{value:'"external"'},{value:'"nofollow"'},{value:'"noopener"'},{value:'"noreferrer"'},{value:'"alternate alternate"'},{value:'"alternate external"'},{value:'"alternate nofollow"'},{value:'"alternate noopener"'},{value:'"alternate noreferrer"'},{value:'"external alternate"'},{value:'"external external"'},{value:'"external nofollow"'},{value:'"external noopener"'},{value:'"external noreferrer"'},{value:'"nofollow alternate"'},{value:'"nofollow external"'},{value:'"nofollow nofollow"'},{value:'"nofollow noopener"'},{value:'"nofollow noreferrer"'},{value:'"noopener alternate"'},{value:'"noopener external"'},{value:'"noopener nofollow"'},{value:'"noopener noopener"'},{value:'"noopener noreferrer"'},{value:'"noreferrer alternate"'},{value:'"noreferrer external"'},{value:'"noreferrer nofollow"'},{value:'"noreferrer noopener"'},{value:'"noreferrer noreferrer"'}]}},isExternal:{defaultValue:null,description:"",name:"isExternal",required:!1,type:{name:"boolean"}}}}}catch{}const Ie="Latest deals on",qe="Searching best prices",Se="Show more prices",y=t(({title:e=qe})=>n.jsx(u,{title:e,children:n.jsx(me,{})}),"Loading$1");try{y.displayName="Loading",y.__docgenInfo={description:"",displayName:"Loading",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:{value:"Searching best prices"},description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const b=t(({className:e,productName:o,items:r,isLoading:m,isLive:g,onBuyNowClick:i})=>{const w=`${Ie} ${o}`,[H,_]=L.useState((r==null?void 0:r.length)<S),U=t(()=>_(h=>!h),"onInteract"),Z=(r==null?void 0:r.length)<2,f=n.jsx(he,{children:r.map(({merchant:h,price:I,link:J,target:K,rel:Q},q)=>n.jsx(v,{merchant:h,price:I,link:J,target:K,rel:Q,onClick:()=>i&&i(q,I)},q))});return L.useEffect(()=>{_((r==null?void 0:r.length)<S)},[r]),m?n.jsx(y,{}):g?n.jsxs(R,{className:e,children:[n.jsx(B,{children:w}),Z?n.jsx(G,{children:f}):n.jsx(fe,{isOpen:H,onInteract:U,trigger:n.jsxs(z,{children:[Se,n.jsx(ge,{svg:te,size:ie})]}),children:f})]}):n.jsx(x,{title:w,children:f})},"PriceComparisonAsList");try{b.displayName="PriceComparisonAsList",b.__docgenInfo={description:"",displayName:"PriceComparisonAsList",props:{productName:{defaultValue:null,description:"",name:"productName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LivePriceItem[]"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isLive:{defaultValue:null,description:"",name:"isLive",required:!1,type:{name:"boolean"}},onBuyNowClick:{defaultValue:null,description:"",name:"onBuyNowClick",required:!1,type:{name:"((index: number, price: string | number) => void)"}}}}}catch{}const Ue={title:"Components/Price Comparison/List",component:b},l=ee,s=ne,c=re,p=ae,d=oe;var C,j,N;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:"FooDefault",...(N=(j=l.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var k,F,V;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:"FooLoading",...(V=(F=s.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var E,W,$;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:"FooFallback",...($=(W=c.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var M,P,D;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:"FooSuccessWithSingleItem",...(D=(P=p.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var O,T,A;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:"FooSuccessWithMultipleItems",...(A=(T=d.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};const Ze=["Default","Loading","Fallback","SuccessWithSingleItem","SuccessWithMultipleItems"];export{l as Default,c as Fallback,s as Loading,d as SuccessWithMultipleItems,p as SuccessWithSingleItem,Ze as __namedExportsOrder,Ue as default};
