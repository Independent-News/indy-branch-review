var O=Object.defineProperty;var a=(e,i)=>O(e,"name",{value:i,configurable:!0});import{j as s}from"./jsx-runtime-1a1b98e7.js";import{r as C}from"./index-29d3bc65.js";import{G,N as A,C as W,I as $}from"./Carousel-341792cc.js";import{P as j}from"./ProductCarouselCard-bbee742f.js";import{g as w}from"./currency-dffb60c3.js";import{d as u}from"./styled-components.browser.esm-852d80e5.js";import{a6 as H,c as K}from"./index-3b0e1f90.js";import"./Icon.hoc-5c5e8f19.js";import{c as q}from"./Icon.constants-a768151c.js";import{I as E}from"./IconButton-ae2e48c7.js";import{t as X,l as Z}from"./devices-1d39230d.js";const J=a((e,i)=>e.includes(i)?e.filter(n=>n!==i):[...e,i],"calculateSelectedItems"),B={defaultState:{bookmarkModalOpen:!1,drawerLoginOpen:!1,galleryIndex:0,drawerMenuOpen:!1,galleryOpen:!1,returnFocus:""},productComparison:{selectedItems:[],showModal:!1},productPrices:[]},R={closeBookmarkModal:()=>{},toggleBookmarkModal:()=>{},closeDrawerLogin:()=>{},closeDrawerMenu:()=>{},toggleDrawerLoginOpen:()=>{},toggleDrawerMenuOpen:()=>{},toggleGalleryOpen:()=>{},clickPriceComparisonBuyNow:()=>{},setProductCarouselIsLoaded:()=>{},clickProductCarouselBuyNow:()=>{},clickProductCarouselReadReview:()=>{},clearProductSelection:()=>{},hideProductModal:()=>{},showProductModal:()=>{},toggleSelectedProduct:()=>{},clickProductComparisonBuyNow:()=>{},clickProductComparisonReadReview:()=>{},setProductPrices:()=>{},productPriceFetchError:()=>{},setProductPricesIsLoading:()=>{}},Q=C.createContext({...B,dispatchers:R}),V=a(e=>{const[i,n]=C.useState(B),f={...i,dispatchers:{...R,clearProductSelection:a(()=>{n(r=>({...r,productComparison:{...r.productComparison,selectedItems:[]}}))},"clearProductSelection"),hideProductModal:a(()=>{n(r=>({...r,productComparison:{...r.productComparison,showModal:!1}}))},"hideProductModal"),setProductPrices:a((r,t)=>{n(o=>o.productPrices.find(d=>d.id===r)?{...o,productPrices:o.productPrices.map(d=>d.id===r?{...d,prices:t}:d)}:{...o,productPrices:[...o.productPrices,{id:r,prices:t,isLoading:!1,isFetched:!0,isError:!1}]})},"setProductPrices"),productPriceFetchError:a(r=>{n(t=>t.productPrices.find(o=>o.id===r)?{...t,productPrices:t.productPrices.map(o=>o.id===r?{...o,isLoading:!1,isFetched:!1,isError:!0}:o)}:t)},"productPriceFetchError"),setProductPricesIsLoading:a(r=>{n(t=>t.productPrices.find(o=>o.id===r)?{...t,productPrices:t.productPrices.map(o=>o.id===r?{...o,isLoading:!0}:o)}:{...t,productPrices:[...t.productPrices,{id:r,prices:[],isLoading:!0,isFetched:!1,isError:!1}]})},"setProductPricesIsLoading"),showProductModal:a(()=>{n(r=>({...r,productComparison:{...r.productComparison,showModal:!0}}))},"showProductModal"),toggleSelectedProduct:a(r=>{n(t=>({...t,productComparison:{...t.productComparison,selectedItems:J(t.productComparison.selectedItems,r)}}))},"toggleSelectedProduct")}};return s.jsx("div",{children:s.jsx(Q.Provider,{value:f,children:s.jsx(e,{})})})},"PageContextDecorator");try{V.displayName="PageContextDecorator",V.__docgenInfo={description:"",displayName:"PageContextDecorator",props:{}}}catch{}const k=a(e=>{const{id:i,endpoint:n}=e.product,{fetchPrice:p,livePrice:{prices:h,isLoading:l,isFetched:m,isError:y},isVisible:g,product:c,isComparison:f,selectedItemIDs:r,onToggleSelectedProduct:t,onBuyNowClick:o,onReadReviewClick:d}=e,{originalPrice:x,price:v,link:I}=h.at(0)||{};return C.useEffect(()=>{g&&!l&&!m&&!y&&p(i,n)},[g,n,i,l,m,y,p]),s.jsx(j,{product:c,isComparison:f,isLoading:l,originalPrice:w(x||""),price:w(v||c.prettyPrice),selectedItemIDs:r,isExternal:c.isExternal,vendorLink:I||c.vendorLink,rel:c.rel,target:c.target,onToggleSelectedProduct:t,onBuyNowClick:o,onReadReviewClick:d})},"LazyProductCarouselCard");try{k.displayName="LazyProductCarouselCard",k.__docgenInfo={description:"",displayName:"LazyProductCarouselCard",props:{isVisible:{defaultValue:null,description:"",name:"isVisible",required:!0,type:{name:"boolean"}},livePrice:{defaultValue:null,description:"",name:"livePrice",required:!0,type:{name:"LivePrice"}},isComparison:{defaultValue:null,description:"",name:"isComparison",required:!0,type:{name:"boolean"}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"Product"}},selectedItemIDs:{defaultValue:null,description:"",name:"selectedItemIDs",required:!0,type:{name:"string[]"}},fetchPrice:{defaultValue:null,description:"",name:"fetchPrice",required:!0,type:{name:"(productId: string, endpoint: string) => void"}},onToggleSelectedProduct:{defaultValue:null,description:"",name:"onToggleSelectedProduct",required:!0,type:{name:"(id: string, name: string, price: string, isChecked: boolean) => void"}},onBuyNowClick:{defaultValue:null,description:"",name:"onBuyNowClick",required:!0,type:{name:"BuyNowClickHandler"}},onReadReviewClick:{defaultValue:null,description:"",name:"onReadReviewClick",required:!0,type:{name:"ReadReviewClickHandler"}}}}}catch{}const U=u.div.withConfig({componentId:"sc-1vjryyz-0"})(["--padding:","px;--button-width:","px;--title-bar-height:var(--button-width);position:relative;padding:0 var(--padding) var(--padding);background-color:",";"],({theme:e})=>e.spacing.x2,({theme:e})=>e.dimension.minTouchArea,({theme:e})=>e.color.canvas.secondary),Y=u(W).withConfig({componentId:"sc-1vjryyz-1"})(["margin:0 calc(var(--padding) * -1);","{&:first-child{padding-left:","px;}&:last-child{padding-right:","px;}}","{position:absolute;top:0;right:0;width:calc(var(--button-width) * 2);}"],G,({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x1,A),ee=u.div.withConfig({componentId:"sc-1vjryyz-2"})(["display:flex;width:auto;flex:0 0 auto;padding:0 ","px;scroll-snap-align:start;"],({theme:e})=>e.spacing.x1),re=u(E).attrs({size:q,svg:H}).withConfig({componentId:"sc-1vjryyz-3"})(["position:absolute;top:0;left:0;"]),te=u(E).attrs({size:q,svg:K}).withConfig({componentId:"sc-1vjryyz-4"})(["position:absolute;top:0;right:0;"]),b=C.forwardRef(a(function({children:i},n){return s.jsx(ee,{ref:n,children:i})},"ProductCarouselSlide2"));try{b.displayName="ProductCarouselSlide",b.__docgenInfo={description:"",displayName:"ProductCarouselSlide",props:{}}}catch{}const oe=u.div.withConfig({componentId:"sc-sr2trh-0"})(["display:flex;height:var(--title-bar-height);align-items:center;background:",";"],({theme:e})=>e.color.canvas.secondary),ie=u.div.withConfig({componentId:"sc-sr2trh-1"})(["color:",";"," @media ","{","}@media ","{","}"],({theme:e})=>e.color.ink.base,({theme:e})=>e.textStyle.tag.small.expanded,X,({theme:e})=>e.textStyle.tag.base.expanded,Z,({theme:e})=>e.textStyle.tag.large.expanded),N=a(({children:e})=>s.jsx(oe,{children:s.jsx(ie,{children:e})}),"Title");try{N.displayName="Title",N.__docgenInfo={description:"",displayName:"Title",props:{}}}catch{}const ne=a(({disabled:e,onClick:i})=>s.jsx(re,{isDisabled:e,onClick:i}),"ButtonPrev"),ae=a(({disabled:e,onClick:i})=>s.jsx(te,{isDisabled:e,onClick:i}),"ButtonNext"),S=a(({fetchPrice:e,initialIndex:i=$,isComparison:n,livePrices:p,products:h,selectedItemIDs:l=[],title:m,offsetKey:y,onToggleSelectedProduct:g,onBuyNowClick:c,onReadReviewClick:f})=>{const r=C.useCallback(t=>{const{itemIndex:o,slideIndex:d,item:x,isVisible:v,ref:I}=t,D=a((_,z,F)=>c(_,z,F,o),"handleBuyNowClick"),P=x,M={id:"",prices:[],isLoading:!1,isFetched:!1,isError:!1},T=p.find(_=>_.id===x.id)||M,L={product:P,isComparison:n,selectedItemIDs:l,onToggleSelectedProduct:g,onBuyNowClick:D,onReadReviewClick:f};return s.jsx(b,{ref:I,children:e?s.jsx(k,{...L,fetchPrice:e,isVisible:v,livePrice:T}):s.jsx(j,{...L,isExternal:P.isExternal,vendorLink:P.vendorLink,rel:P.rel,target:P.target,price:w(P.prettyPrice)})},`item-${d}`)},[l,p,e,n,g,c,f]);return s.jsxs(U,{children:[m&&s.jsx(N,{children:m}),s.jsx(Y,{className:"",initialIndex:i,ButtonPrev:ne,ButtonNext:ae,increment:2,offsetKey:y,items:h,renderSlide:r})]})},"ProductCarousel"),he=S;try{S.displayName="ProductCarousel",S.__docgenInfo={description:"",displayName:"ProductCarousel",props:{initialIndex:{defaultValue:{value:"0"},description:"",name:"initialIndex",required:!1,type:{name:"number"}},isComparison:{defaultValue:null,description:"",name:"isComparison",required:!0,type:{name:"boolean"}},livePrices:{defaultValue:null,description:"",name:"livePrices",required:!0,type:{name:"LivePrice[]"}},products:{defaultValue:null,description:"",name:"products",required:!0,type:{name:"Product[]"}},selectedItemIDs:{defaultValue:{value:"[]"},description:"",name:"selectedItemIDs",required:!1,type:{name:"string[]"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},offsetKey:{defaultValue:null,description:"",name:"offsetKey",required:!0,type:{name:"string"}},fetchPrice:{defaultValue:null,description:"",name:"fetchPrice",required:!1,type:{name:"((productId: string, endpoint: string) => void)"}},onToggleSelectedProduct:{defaultValue:null,description:"",name:"onToggleSelectedProduct",required:!0,type:{name:"(id: string, name: string, price: string, isChecked: boolean) => void"}},onBuyNowClick:{defaultValue:null,description:"",name:"onBuyNowClick",required:!0,type:{name:"(id: string, name: string, price: string, index: number) => void"}},onReadReviewClick:{defaultValue:null,description:"",name:"onReadReviewClick",required:!0,type:{name:"(id: string, name: string, price: string) => void"}}}}}catch{}export{he as P,V as a,Q as b};