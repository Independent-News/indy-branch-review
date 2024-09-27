var q=Object.defineProperty;var o=(e,n)=>q(e,"name",{value:n,configurable:!0});import{j as t}from"./jsx-runtime-1a1b98e7.js";import"./Form-c2b0a4a6.js";import"./TextInput-8156503d.js";import"./LegacyTextInput-81bcdbdd.js";import"./PasswordInputWithValidationHints-b4c52f8f.js";import"./SelectInput-21c39a1e.js";import"./LegacySelectInput-8ee5fe9b.js";import{C as j,a as N}from"./Checkbox-e85ef931.js";import"./CheckboxWithDropdown-b1375836.js";import"./RadioButton-f6ab6ee3.js";import"./ValidationHint-0af7e213.js";import{L as O}from"./LoadingEllipsis-a1f98bbd.js";import{x as P}from"./base-c8d9f963.js";import{d as r}from"./styled-components.browser.esm-852d80e5.js";import{f as g,h as V,c as H,b as U,B as h}from"./Themed-f7694132.js";import{S as D}from"./StarRating-4e14bc09.js";import{t as s,l as c}from"./devices-1d39230d.js";import{c as f}from"./clampLines-a64b3b1f.js";const M=2,Ee=2,Ie="status",ke="Clear All",Le="Compare",Ae="reset-button",Re="compared-button",F=P,W=140,z=156,Y=190,G="Unavailable",X="Buy now",Z=r.article.withConfig({componentId:"sc-54m75q-0"})(["--tile-width:","px;--spacing:","px;--border:1px solid ",";--border-radius:",";--padding-x:","px;width:var(--tile-width);height:100%;box-sizing:border-box;border-radius:var(--border-radius);background-color:",";text-align:center;@media ","{--padding-x:","px;--tile-width:","px;}@media ","{--padding-x:","px;--spacing:","px;--tile-width:","px;}"],W,e=>e.theme.spacing.x1,e=>e.theme.color.divider.dark,e=>e.theme.dimension.outerArea.borderRadius,({theme:e})=>e.spacing.x1,({theme:e})=>e.color.canvas.base,s,({theme:e})=>e.spacing.x2,z,c,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.spacing.x1_5,Y),K=r.div.withConfig({componentId:"sc-54m75q-1"})(["overflow:hidden;border-radius:var(--border-radius) var(--border-radius) 0 0;aspect-ratio:3 / 2;img{display:block;width:100%;height:100%;object-fit:contain;}"]),$=r.div.withConfig({componentId:"sc-54m75q-2"})(["padding-right:var(--padding-x);padding-left:var(--padding-x);"]),J=r.a.withConfig({componentId:"sc-54m75q-3"})(["--height:54px;--line-height:",";display:block;height:var(--height);padding-top:","px;color:",";font:",";transition:",";&:hover,&:focus,&:active{color:",";}@media ","{--height:60px;--line-height:",";font:",";}@media ","{--height:66px;--line-height:",";font:",";}",""],({theme:e})=>e.textStyle.productCarouselCardBestFor.mobile.lineHeight,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.color.actionBlack.base,({theme:e})=>e.textStyle.productCarouselCardBestFor.mobile.font,({theme:e})=>e.transition.link,({theme:e})=>e.color.actionBlack.alt,s,({theme:e})=>e.textStyle.productCarouselCardBestFor.tablet.lineHeight,({theme:e})=>e.textStyle.productCarouselCardBestFor.tablet.font,c,({theme:e})=>e.textStyle.productCarouselCardBestFor.laptop.lineHeight,({theme:e})=>e.textStyle.productCarouselCardBestFor.laptop.font,f(3,"--line-height")),Q=r(D).withConfig({componentId:"sc-54m75q-4"})(["justify-content:center;padding:","px 0;border-bottom:var(--border);"],({theme:e})=>e.spacing.x1),ee=r.span.withConfig({componentId:"sc-54m75q-5"})(["display:block;padding:var(--spacing) var(--padding-x) 0 0;margin:0 calc(var(--padding-x) * -1) var(--spacing) 0;",""],f(3,"--line-height")),te=r.strong.withConfig({componentId:"sc-54m75q-6"})(["--line-height:",";display:block;border-bottom:var(--border);font:",";@media ","{--line-height:",";font:",";}@media ","{--line-height:",";font:",";}"],({theme:e})=>e.textStyle.productCarouselCardTitle.mobile.lineHeight,({theme:e})=>e.textStyle.productCarouselCardTitle.mobile.font,s,({theme:e})=>e.textStyle.productCarouselCardTitle.tablet.lineHeight,({theme:e})=>e.textStyle.productCarouselCardTitle.tablet.font,c,({theme:e})=>e.textStyle.productCarouselCardTitle.laptop.lineHeight,({theme:e})=>e.textStyle.productCarouselCardTitle.laptop.font),re=r(h).attrs({forwardedAs:g,size:V,variant:H}).withConfig({componentId:"sc-54m75q-7"})([""]),oe=r.div.withConfig({componentId:"sc-54m75q-8"})(["display:flex;width:100%;height:38px;min-height:",";flex-flow:row nowrap;align-items:center;justify-content:center;border-top:var(--border);border-bottom:var(--border);font:",";"],({theme:e})=>e.textStyle.productCarouselCardPrice.lineHeight,({theme:e})=>e.textStyle.productCarouselCardPrice.font),ne=r.div.withConfig({componentId:"sc-54m75q-9"})(["display:flex;flex-direction:column;padding:","px 0;"],F),ae=r(h).attrs({forwardedAs:g,variant:U}).withConfig({componentId:"sc-54m75q-10"})(["&:last-child{margin-bottom:0;}"]),le=r.div.withConfig({componentId:"sc-54m75q-11"})(["display:flex;justify-content:center;padding-bottom:","px;"],({theme:e})=>e.spacing.x1_5),ie=r.span.withConfig({componentId:"sc-54m75q-12"})(["color:",";",";"],({theme:e})=>e.color.ink.muted,({theme:e})=>e.textStyle.productCarouselCardPrice.strikeThrough),d=o(({product:{id:e,anchorHref:n,bestForPrefixed:u,image:x,title:a,rating:p,isAvailable:m},isComparison:C,isLoading:v=!1,originalPrice:T,price:l,isExternal:b,vendorLink:y,target:_,rel:w,selectedItemIDs:i,onToggleSelectedProduct:S,onBuyNowClick:B,onReadReviewClick:E})=>{const I=!i.includes(e)&&i.length>=M,k=o(()=>E(e,a,l),"handleReadReviewClick"),L=o(()=>B(e,a,l),"handleBuyNowClick"),A=o(R=>S(e,a,l,R.currentTarget.checked),"handleChange");return t.jsxs(Z,{children:[t.jsx(K,{children:x}),t.jsxs($,{children:[u&&t.jsx(J,{href:n,children:u}),p&&t.jsx(Q,{value:p}),t.jsx(te,{children:t.jsx(ee,{children:a})}),t.jsx(re,{href:n,onClick:k,children:"Read review"}),t.jsx(oe,{children:v?t.jsx(O,{}):t.jsxs("strong",{children:[t.jsx(ie,{children:T})," ",l]})}),t.jsx(ne,{children:t.jsx(ae,{href:y,rel:w,target:_,disabled:!m,isExternal:b,onClick:L,children:m?X:G})}),C&&t.jsx(le,{children:t.jsx(j,{label:"Compare",size:N,id:e,checked:i.includes(e),disabled:I,onChange:A,isCosy:!0,controlled:!1})})]})]})},"ProductCarouselCard"),qe=d;try{d.displayName="ProductCarouselCard",d.__docgenInfo={description:"",displayName:"ProductCarouselCard",props:{isComparison:{defaultValue:null,description:"",name:"isComparison",required:!0,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},originalPrice:{defaultValue:null,description:"",name:"originalPrice",required:!1,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"string"}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"Product"}},selectedItemIDs:{defaultValue:null,description:"",name:"selectedItemIDs",required:!0,type:{name:"string[]"}},isExternal:{defaultValue:null,description:"",name:"isExternal",required:!0,type:{name:"boolean"}},vendorLink:{defaultValue:null,description:"",name:"vendorLink",required:!0,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"enum",value:[{value:'"alternate"'},{value:'"external"'},{value:'"nofollow"'},{value:'"noopener"'},{value:'"noreferrer"'},{value:'"alternate alternate"'},{value:'"alternate external"'},{value:'"alternate nofollow"'},{value:'"alternate noopener"'},{value:'"alternate noreferrer"'},{value:'"external alternate"'},{value:'"external external"'},{value:'"external nofollow"'},{value:'"external noopener"'},{value:'"external noreferrer"'},{value:'"nofollow alternate"'},{value:'"nofollow external"'},{value:'"nofollow nofollow"'},{value:'"nofollow noopener"'},{value:'"nofollow noreferrer"'},{value:'"noopener alternate"'},{value:'"noopener external"'},{value:'"noopener nofollow"'},{value:'"noopener noopener"'},{value:'"noopener noreferrer"'},{value:'"noreferrer alternate"'},{value:'"noreferrer external"'},{value:'"noreferrer nofollow"'},{value:'"noreferrer noopener"'},{value:'"noreferrer noreferrer"'}]}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_blank"'},{value:'"_self"'},{value:'"_parent"'},{value:'"_top"'}]}},onToggleSelectedProduct:{defaultValue:null,description:"",name:"onToggleSelectedProduct",required:!0,type:{name:"(id: string, name: string, price: string, isChecked: boolean) => void"}},onBuyNowClick:{defaultValue:null,description:"",name:"onBuyNowClick",required:!0,type:{name:"BuyNowClickHandler"}},onReadReviewClick:{defaultValue:null,description:"",name:"onReadReviewClick",required:!0,type:{name:"ReadReviewClickHandler"}}}}}catch{}export{Re as C,Ee as M,qe as P,Ae as R,Ie as S,ke as a,Le as b,M as c};
