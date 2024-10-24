var A=Object.defineProperty;var o=(e,r)=>A(e,"name",{value:r,configurable:!0});import{j as t}from"./jsx-runtime-1a1b98e7.js";import{C as w}from"./Content-d0768478.js";import{I as i}from"./Image-d40681c5.js";import{r as S}from"./index-29d3bc65.js";import{a6 as N,c as V}from"./index-f40e3ffd.js";import"./Icon.hoc-5c5e8f19.js";import{c as b}from"./Icon.constants-a768151c.js";import{I as q}from"./IconButton-ae2e48c7.js";import{B as E,R as D}from"./RelatedContent-a2c12cf5.js";import{d as s}from"./styled-components.browser.esm-852d80e5.js";import{S as B,N as h,G as T,C as k}from"./Carousel-341792cc.js";import"./devices-1d39230d.js";import"./breakPoints-89c7d41a.js";import"./_commonjsHelpers-f86d8be3.js";import"./Symbols.hoc-c2fda652.js";import"./index-f7d1b020.js";import"./Tag-8cdcd799.js";import"./base-c8d9f963.js";import"./mixins-cd1fe61f.js";const W=126,F=s.a.withConfig({componentId:"sc-neq4w9-0"})(["display:flex;width:","px;flex-direction:column;row-gap:","px;color:",";&:hover,&:active,&:focus{color:",";}"],W,({theme:e})=>e.spacing.x1,({theme:e})=>e.color.actionBrand.base,({theme:e})=>e.color.actionBrand.alt),L=s.div.withConfig({componentId:"sc-neq4w9-1"})(["img{display:block;object-fit:cover;}"]),G=s.p.withConfig({componentId:"sc-neq4w9-2"})(["margin:0;color:inherit;font:",";"],({theme:e})=>e.textStyle.relatedStoriesHeadline.base),P=s.span.withConfig({componentId:"sc-neq4w9-3"})(["display:block;margin-bottom:","px;",";"],({theme:e})=>e.spacing.x0_25,({theme:e})=>e.textStyle.storyCard.relatedLinks.carousel),z=S.forwardRef(o(function({href:r,title:a,image:d,isSponsored:c=!1,...m},p){return t.jsxs(F,{...m,ref:p,href:r,children:[t.jsx(L,{children:d}),t.jsxs(G,{children:[c&&t.jsx(P,{children:"sponsored"}),a]})]})},"RelatedArticlesCarouselItem2"));try{Item.displayName="Item",Item.__docgenInfo={description:"",displayName:"Item",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"ReactNode"}},isSponsored:{defaultValue:{value:"false"},description:'whether this item is sponsored and will receive a "sponsored" tag',name:"isSponsored",required:!1,type:{name:"boolean"}}}}}catch{}const u=s(k).withConfig({componentId:"sc-lfolxg-0"})(["","{gap:","px;}","{display:flex;position:absolute;top:0;right:0;width:var(--nav-width);height:var(--button-width);}@media ","{margin-inline:calc(var(--bleed) * -1);","{scroll-margin:0 var(--bleed);&:first-child{padding-left:var(--bleed);}&:last-child{padding-right:var(--bleed);}}","{right:var(--bleed);}}"],B,({theme:e})=>e.spacing.x2,h,E,T,h);try{u.displayName="StyledCarousel",u.__docgenInfo={description:"",displayName:"StyledCarousel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const H=o(({disabled:e,onClick:r,...a})=>t.jsx(q,{...a,size:b,svg:N,isDisabled:e,onClick:r}),"ButtonPrev"),O=o(({disabled:e,onClick:r,...a})=>t.jsx(q,{...a,size:b,svg:V,isDisabled:e,onClick:r}),"ButtonNext"),K=o((e,r)=>e[r].scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"}),"navigateCarousel"),f=o(({className:e,items:r,title:a,renderSlide:d,...c})=>{const m=o(({itemIndex:p,ref:j,item:R})=>S.createElement(z,{...R,key:p,ref:j}),"defaultRenderSlide");return t.jsx(D,{className:e,title:a,children:t.jsx(u,{className:"",...c,onNavigate:K,ButtonPrev:H,ButtonNext:O,items:r,renderSlide:d||m})})},"RelatedArticlesCarousel"),M=f;try{f.displayName="RelatedArticlesCarousel",f.__docgenInfo={description:"",displayName:"RelatedArticlesCarousel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ItemProps[]"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},renderSlide:{defaultValue:null,description:"",name:"renderSlide",required:!0,type:{name:"DefaultRenderSlideCallback"}}}}}catch{}const ue={title:"Components/Related Articles Carousel",component:M,tags:["storyshot:vp:all"]},g={title:"Related articles",items:[{title:"Fugiat irure incididunt nulla dolor quis culpa sunt",image:t.jsx(i,{}),href:"#"},{title:"Fugiat occaecat",image:t.jsx(i,{}),href:"#"},{title:"Commodo irure Lorem commodo ad",image:t.jsx(i,{}),href:"#",isSponsored:!0},{title:"Excepteur ex elit non ad quis Lorem sit do. Duis occaecat tempor proident. Sint aliquip sit minim aute",image:t.jsx(i,{}),href:"#"},{title:"Elit veniam",image:t.jsx(i,{}),href:"#"},{title:"Duis occaecat tempor proident.",image:t.jsx(i,{}),href:"#"},{title:"Sint aliquip sit minim aute",image:t.jsx(i,{}),href:"#"}]},l={args:g,decorators:[w]},n={args:{...g,items:g.items.slice(0,3)},decorators:[w]};var x,y,_;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: defaultArgs,
  decorators: [Content]
}`,...(_=(y=l.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var C,I,v;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    items: defaultArgs.items.slice(0, 3)
  },
  decorators: [Content]
}`,...(v=(I=n.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};const fe=["Default","FewItems"];export{l as Default,n as FewItems,fe as __namedExportsOrder,ue as default};
