var I=Object.defineProperty;var F=(e,n,t)=>n in e?I(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var i=(e,n)=>I(e,"name",{value:n,configurable:!0});var u=(e,n,t)=>(F(e,typeof n!="symbol"?n+"":n,t),t);import{j as r}from"./jsx-runtime-1a1b98e7.js";import{r as M}from"./index-29d3bc65.js";import{W as S,a0 as G,a1 as Y,a2 as $,a3 as z,U as X}from"./index-58d5119c.js";import{c as Z,B as U,f as _,h as J}from"./Themed-e5fe58ad.js";import{D as K}from"./Dropdown-106efe7b.js";import{I as Q}from"./Icon.hoc-1e1a8943.js";import{I as ee}from"./IconButton-d3562fb3.js";import"./ControlledPopupTip-d6a1e942.js";import{P as ne}from"./PopupTip-4d664d5c.js";import{d as o}from"./styled-components.browser.esm-852d80e5.js";import{t as p}from"./devices-1d39230d.js";import"./_commonjsHelpers-f86d8be3.js";import"./themes-5d88a976.js";import"./boxShadows-a8a1f7d6.js";import"./palette-cdb14916.js";import"./colors-3e41a0f7.js";import"./base-c8d9f963.js";import"./Icon.constants-a768151c.js";import"./breakPoints-89c7d41a.js";import"./fontWeights-1d7bfb43.js";import"./zIndex-6061405c.js";import"./index-08c90798.js";import"./mixins-cd1fe61f.js";import"./index-f7d1b020.js";import"./Symbols.hoc-c2fda652.js";import"./PopupTip.styles-be24222a.js";const re="Hotel Amenities",oe="Check availability for dates and prices",te="Rooms available from",ae="per night",ie="Check availability",le="Rates provided by Booking.com",se=i(e=>`Read our full review of ${e} here`,"readReviewButtonLabel"),pe={internet:S,services:G,foodDrink:Y,parking:$,health:z},v=class v{constructor(){u(this,"amenity",{ref:"",name:"",items:[],showTooltip:!1})}name(n){return this.amenity.name=n,this}items(n){return this.amenity.items=n,this}showTooltip(n){return this.amenity.showTooltip=n,this}ref(n){return this.amenity.ref=n,this}build(){return this.amenity}};i(v,"AmenityBuilder");let l=v;const x=class x{constructor(){u(this,"booking",{id:"",name:"",price:"",amenities:[],url:"",target:"_blank",rel:"noreferrer nofollow",reviewUrl:""})}id(n){return this.booking.id=n,this}name(n){return this.booking.name=n,this}price(n){return this.booking.price=n,this}amenities(n){return this.booking.amenities=n,this}url(n){return this.booking.url=n,this}target(n){return this.booking.target=n,this}rel(n){return this.booking.rel=n,this}reviewUrl(n){return this.booking.reviewUrl=n,this}build(){return this.booking}};i(x,"BookingBuilder");let s=x;const ce=o.div.withConfig({componentId:"sc-1dl239n-0"})(["--border:1px solid ",";--spacing-y:","x;--spacing-x:","x;--light-color:",";--primary-font:",";--secondary-font:",";font-family:var(--secondary-font);font-weight:normal;"],({theme:e})=>e.color.divider.light,({theme:e})=>e.spacing.x3,({theme:e})=>e.spacing.x4,e=>e.theme.color.ink.muted,e=>e.theme.fontFamily.primaryFont,e=>e.theme.fontFamily.secondaryFont),de=o.div.withConfig({componentId:"sc-1dl239n-1"})(["padding:","px 0;border-top:var(--border);border-bottom:var(--border);@media ","{display:grid;grid-template-columns:1fr 40%;padding:","px 0;grid-gap:","px;}"],({theme:e})=>e.spacing.x3,p,({theme:e})=>e.spacing.x2,({theme:e})=>e.spacing.x4),me=o.p.withConfig({componentId:"sc-1dl239n-2"})(["margin-top:0;margin-bottom:","px;@media ","{margin:0;}"],({theme:e})=>e.spacing.x3,p),ue=o.div.withConfig({componentId:"sc-1dl239n-3"})(["transform:rotate(",");transition:transform 0.2s linear;"],({$isOpen:e})=>e?"180deg":"0deg"),fe=o.span.withConfig({componentId:"sc-1dl239n-4"})(["display:block;margin-bottom:","px;color:var(--light-color);font:18px/22px var(--secondary-font);@media ","{margin-bottom:","px;}"],({theme:e})=>e.spacing.x0_5,p,({theme:e})=>e.spacing.x1),ge=o.span.withConfig({componentId:"sc-1dl239n-5"})(["font:bold 32px/36px var(--primary-font);letter-spacing:-0.5px;"]),ve=o.span.withConfig({componentId:"sc-1dl239n-6"})(["display:inline-block;margin-left:","px;font:16px/22px var(--secondary-font);"],({theme:e})=>e.spacing.x0_5),xe=o.span.withConfig({componentId:"sc-1dl239n-7"})(["font:bold 18px/20px var(--primary-font);letter-spacing:-0.5px;"]),he=o.p.withConfig({componentId:"sc-1dl239n-8"})(["margin:","px 0 0;color:var(--light-color);font:16px/22px var(--secondary-font);text-align:center;"],({theme:e})=>e.spacing.x1),we=o.div.withConfig({componentId:"sc-1dl239n-9"})(["display:flex;flex-wrap:nowrap;align-items:center;gap:","px;padding:","px 0;border-bottom:var(--border);color:",";font:18px/22px var(--secondary-font);"],({theme:e})=>e.spacing.x0_5,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.color.ink.base),be=o.div.withConfig({componentId:"sc-1dl239n-10"})(["--spacing-v:","px;padding:var(--spacing-v) 0;@media ","{--spacing-v:","px;}"],({theme:e})=>e.spacing.x3,p,({theme:e})=>e.spacing.x4),ye=o.ul.withConfig({componentId:"sc-1dl239n-11"})(["display:grid;row-gap:","px;padding:0;margin:0;list-style:none;@media ","{grid-template-columns:1fr 1fr;}"],({theme:e})=>e.spacing.x4,p),Ie=o.li.withConfig({componentId:"sc-1dl239n-12"})([""]),_e=o.h2.withConfig({componentId:"sc-1dl239n-13"})(["display:flex;align-items:center;gap:","px;padding:10px 0;margin:0;margin-bottom:","px;font:bold 24px/28px var(--secondary-font);"],({theme:e})=>e.spacing.x1_5,({theme:e})=>e.spacing.x1_5),ke=o.ul.withConfig({componentId:"sc-1dl239n-14"})(["padding:0;padding-left:36px;margin:0;list-style:none;"]),Ce=o.li.withConfig({componentId:"sc-1dl239n-15"})(["margin-bottom:","px;color:",";font:18px/22px var(--secondary-font);"],({theme:e})=>e.spacing.x1,({theme:e})=>e.color.ink.base),Ae=o.div.withConfig({componentId:"sc-1dl239n-16"})(["padding:","px;border-bottom:var(--border);text-align:center;"],({theme:e})=>e.spacing.x1_5),je=o(U).attrs({variant:Z}).withConfig({componentId:"sc-1dl239n-17"})(["white-space:normal;svg{flex-shrink:0;}"]),Te="Please check hotel for more information on amenities",f=i(({id:e,name:n,url:t,target:P,rel:V,reviewUrl:h,reviewUrlTarget:D,reviewUrlRel:q,price:w,amenities:W})=>{const[b,H]=M.useState(!1);function N(){H(a=>!a)}return i(N,"onDropdownInteract"),r.jsxs(ce,{children:[r.jsxs(de,{children:[r.jsxs(me,{children:[r.jsx(fe,{children:te}),w?r.jsxs(r.Fragment,{children:[r.jsx(ge,{"data-testid":"price",children:w}),r.jsx(ve,{children:ae})]}):r.jsx(xe,{"data-testid":"price-availability",children:oe})]}),r.jsxs("div",{children:[r.jsx(U,{as:_,href:t,target:P,rel:V,size:J,children:ie}),r.jsx(he,{children:le})]})]}),h&&r.jsx(Ae,{children:r.jsx(je,{"data-testid":"read-more-button",forwardedAs:_,href:h,target:D,rel:q,children:se(n)})}),r.jsx(K,{id:e,isOpen:b,onInteract:N,trigger:r.jsxs(we,{children:[re,r.jsx(ue,{$isOpen:b,children:r.jsx(ee,{isCosy:!0,svg:X,isDisabled:!1})})]}),children:r.jsx(be,{children:r.jsx(ye,{children:W.map(a=>r.jsxs(Ie,{children:[r.jsxs(_e,{children:[r.jsx(Q,{svg:pe[a.ref]||S}),a.name,a.showTooltip&&r.jsx(ne,{size:"base",children:Te})]}),r.jsx(ke,{children:a.items.map(y=>r.jsx(Ce,{children:y},y))})]},a.name))})})})]})},"Booking"),O=f;try{f.displayName="Booking",f.__docgenInfo={description:"",displayName:"Booking",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"string"}},amenities:{defaultValue:null,description:"",name:"amenities",required:!0,type:{name:"Amenity[]"}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!0,type:{name:"enum",value:[{value:'"_blank"'},{value:'"_self"'},{value:'"_parent"'},{value:'"_top"'}]}},rel:{defaultValue:null,description:"",name:"rel",required:!0,type:{name:"enum",value:[{value:'"alternate"'},{value:'"external"'},{value:'"nofollow"'},{value:'"noopener"'},{value:'"noreferrer"'},{value:'"alternate alternate"'},{value:'"alternate external"'},{value:'"alternate nofollow"'},{value:'"alternate noopener"'},{value:'"alternate noreferrer"'},{value:'"external alternate"'},{value:'"external external"'},{value:'"external nofollow"'},{value:'"external noopener"'},{value:'"external noreferrer"'},{value:'"nofollow alternate"'},{value:'"nofollow external"'},{value:'"nofollow nofollow"'},{value:'"nofollow noopener"'},{value:'"nofollow noreferrer"'},{value:'"noopener alternate"'},{value:'"noopener external"'},{value:'"noopener nofollow"'},{value:'"noopener noopener"'},{value:'"noopener noreferrer"'},{value:'"noreferrer alternate"'},{value:'"noreferrer external"'},{value:'"noreferrer nofollow"'},{value:'"noreferrer noopener"'},{value:'"noreferrer noreferrer"'}]}},reviewUrl:{defaultValue:null,description:"",name:"reviewUrl",required:!1,type:{name:"string"}},reviewUrlTarget:{defaultValue:null,description:"",name:"reviewUrlTarget",required:!1,type:{name:"enum",value:[{value:'"_blank"'},{value:'"_self"'},{value:'"_parent"'},{value:'"_top"'}]}},reviewUrlRel:{defaultValue:null,description:"",name:"reviewUrlRel",required:!1,type:{name:"enum",value:[{value:'"alternate"'},{value:'"external"'},{value:'"nofollow"'},{value:'"noopener"'},{value:'"noreferrer"'},{value:'"alternate alternate"'},{value:'"alternate external"'},{value:'"alternate nofollow"'},{value:'"alternate noopener"'},{value:'"alternate noreferrer"'},{value:'"external alternate"'},{value:'"external external"'},{value:'"external nofollow"'},{value:'"external noopener"'},{value:'"external noreferrer"'},{value:'"nofollow alternate"'},{value:'"nofollow external"'},{value:'"nofollow nofollow"'},{value:'"nofollow noopener"'},{value:'"nofollow noreferrer"'},{value:'"noopener alternate"'},{value:'"noopener external"'},{value:'"noopener nofollow"'},{value:'"noopener noopener"'},{value:'"noopener noreferrer"'},{value:'"noreferrer alternate"'},{value:'"noreferrer external"'},{value:'"noreferrer nofollow"'},{value:'"noreferrer noopener"'},{value:'"noreferrer noreferrer"'}]}}}}}catch{}const an={title:"Components/Booking",component:O},g=[new l().name("Internet").ref("internet").items(["alpha","beta","gamma"]).build(),new l().name("Health & Wellbeing").ref("health").showTooltip(!0).items(["apple","banana","carrot"]).build(),new l().name("Parking").ref("parking").items(["a","b"]).build()],Le=new s().name("Star Hotel").price("£13.14").url("url").amenities(g).build(),c={render:O,args:Le},Re=new s().name("Star Hotel").price("£13.14").url("url").reviewUrl("review-url").amenities(g).build(),d={args:Re},Be=new s().name("Star Hotel").url("url").amenities(g).build(),m={args:Be};var k,C,A;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: Booking,
  args: data
}`,...(A=(C=c.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var j,T,L;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: withReviewData
}`,...(L=(T=d.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var R,B,E;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: withoutPriceData
}`,...(E=(B=m.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};const ln=["BookingWidget","WithReview","WithoutPrice"];export{c as BookingWidget,d as WithReview,m as WithoutPrice,ln as __namedExportsOrder,an as default};
