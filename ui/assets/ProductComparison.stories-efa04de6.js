var k=Object.defineProperty;var s=(e,o)=>k(e,"name",{value:o,configurable:!0});import{j as t}from"./jsx-runtime-1a1b98e7.js";import{F as T,a as _}from"./FocusReturn-8f91d071.js";import{c as b,M as R,T as E,L as B}from"./Modal-08052004.js";import{a as S,b as j,P as M}from"./ProductCarousel-b7e48553.js";import{P as N}from"./Overlay-f3b15a72.js";import{I as F}from"./Image-d40681c5.js";import{P as f}from"./ProductBuilder-e993ec59.js";import{R as q,a as L,C as O,M as D,b as A,S as V,c as U}from"./ProductCarouselCard-df60a744.js";import{d as i}from"./styled-components.browser.esm-852d80e5.js";import{c as $,j as Y,B as x}from"./Themed-f7694132.js";import{t as y,l as W}from"./devices-1d39230d.js";import"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";import"./viewports-741975bd.js";import"./breakPoints-89c7d41a.js";import"./Icon.constants-a768151c.js";import"./StarRating-4e14bc09.js";import"./index-58d5119c.js";import"./Icon.hoc-5c5e8f19.js";import"./Symbols.hoc-c2fda652.js";import"./index-f7d1b020.js";import"./currency-dffb60c3.js";import"./clampLines-a64b3b1f.js";import"./SuccessConfirmationModal-a8989ff6.js";import"./inheritsLoose-289c47e1.js";import"./IconButton-8b92ad52.js";import"./mixins-cd1fe61f.js";import"./Carousel-341792cc.js";import"./index-08c90798.js";import"./Form-c2b0a4a6.js";import"./TextInput-8156503d.js";import"./index.esm-13ba97b3.js";import"./LoadingEllipsis-a1f98bbd.js";import"./Input.styles-d7c02014.js";import"./InputWrapper-bd29de48.js";import"./useInputButton-c9dd920d.js";import"./LegacyTextInput-81bcdbdd.js";import"./LegacyInputWrapper-ee0a2bcc.js";import"./PasswordInputWithValidationHints-4c7c9c1a.js";import"./ValidationHint-0af7e213.js";import"./SelectInput-21c39a1e.js";import"./SelectInput.styles-bee92c9d.js";import"./LegacySelectInput-8ee5fe9b.js";import"./Checkbox-e85ef931.js";import"./ScreenReaderOnly-bf6dac32.js";import"./CheckboxWithDropdown-b1375836.js";import"./Dropdown-106efe7b.js";import"./DropdownWithChevron-f4f85a33.js";import"./DropdownForCard-fc1d7cf0.js";import"./DropdownWithChevron.styles-abacdf4f.js";import"./RadioButton-f6ab6ee3.js";import"./base-c8d9f963.js";import"./themes-5d88a976.js";import"./boxShadows-a8a1f7d6.js";import"./palette-cdb14916.js";import"./colors-3e41a0f7.js";import"./fontWeights-1d7bfb43.js";import"./zIndex-6061405c.js";const H="product-comparison-reset",K=i.div.withConfig({componentId:"sc-h0xl5q-0"})(["--gap:","px;display:flex;flex-wrap:nowrap;justify-content:space-between;gap:var(--gap);padding:0 ","px ","px;background:",";"],({theme:e})=>e.spacing.x2,({theme:e})=>e.spacing.x2,({theme:e})=>e.spacing.x2,({theme:e})=>e.color.canvas.secondary),X=i.div.withConfig({componentId:"sc-h0xl5q-1"})(["--border-radius:8px;display:none;flex-grow:1;gap:var(--gap);@media ","{display:flex;}"],y),z=i.div.withConfig({componentId:"sc-h0xl5q-2"})(["display:grid;width:calc(50% - (var(--gap) / 2));align-items:center;grid-template-columns:auto 1fr;border-radius:var(--border-radius);background:",";"],({theme:e})=>e.color.canvas.card),G=i.div.withConfig({componentId:"sc-h0xl5q-3"})(["overflow:hidden;height:44px;aspect-ratio:3/2;border-bottom-left-radius:var(--border-radius);border-top-left-radius:var(--border-radius);img{display:block;width:100%;height:100%;object-fit:contain;}"]),J=i.div.withConfig({componentId:"sc-h0xl5q-4"})(["--line-height:16px;display:-webkit-box;overflow:hidden;padding:0 ","px;-webkit-box-orient:vertical;font:normal 14px / var(--line-height) ",";-webkit-line-clamp:2;line-height:var(--line-height);text-overflow:initial;white-space:initial;"],({theme:e})=>e.spacing.x1,({theme:e})=>e.fontFamily.secondaryFont),Q=i.div.withConfig({componentId:"sc-h0xl5q-5"})(["display:flex;align-items:center;"]),Z=i.div.withConfig({componentId:"sc-h0xl5q-6"})(["display:flex;width:100%;flex-wrap:nowrap;justify-content:space-between;gap:var(--gap);@media ","{width:auto;}@media ","{width:auto;}"],y,W),ee=i(x).withConfig({componentId:"sc-h0xl5q-7"})(["gap:2px;"]),te=i(x).attrs({variant:$,type:Y}).withConfig({componentId:"sc-h0xl5q-8"})(["white-space:nowrap;"]),oe=i.var.withConfig({componentId:"sc-h0xl5q-9"})(["width:3em;font-style:inherit;"]),m=s(({clearItems:e,items:o,onCompareClick:r})=>t.jsxs(K,{children:[t.jsx(X,{children:o.map(n=>t.jsxs(z,{children:[t.jsx(G,{children:n.image}),t.jsx(Q,{children:t.jsx(J,{children:n.title})})]},n.id))}),t.jsxs(Z,{children:[t.jsx(te,{id:H,"data-testid":q,disabled:o.length===0,onClick:e,children:L}),t.jsxs(ee,{"data-testid":O,disabled:o.length<D,onClick:r,children:[A,t.jsxs(oe,{"data-testid":V,children:["(",o.length,"/",U,")"]})]})]})]}),"ControlBar");try{m.displayName="ControlBar",m.__docgenInfo={description:"",displayName:"ControlBar",props:{clearItems:{defaultValue:null,description:"",name:"clearItems",required:!0,type:{name:"() => void"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Item[]"}},onCompareClick:{defaultValue:null,description:"",name:"onCompareClick",required:!0,type:{name:"() => void"}}}}}catch{}const d=s(e=>{const{livePrices:o,products:r,returnFocus:n,selectedItemIDs:w,dispatchers:l,showModal:P,onBuyNowClick:v,onReadReviewClick:I}=e,p=b(w,r);return t.jsxs(t.Fragment,{children:[t.jsx(m,{items:p,clearItems:l.clearProductSelection,onCompareClick:l.showProductModal}),t.jsx(R,{livePrices:o,items:p,isHidden:!P,returnFocus:n,hideProductModal:l.hideProductModal,onBuyNowClick:v,onReadReviewClick:I,children:t.jsx(E,{livePrices:o,items:p})})]})},"ProductComparison");try{d.displayName="ProductComparison",d.__docgenInfo={description:"",displayName:"ProductComparison",props:{products:{defaultValue:null,description:"",name:"products",required:!0,type:{name:"Product[]"}},returnFocus:{defaultValue:null,description:"",name:"returnFocus",required:!0,type:{name:"string"}},selectedItemIDs:{defaultValue:null,description:"",name:"selectedItemIDs",required:!0,type:{name:"string[]"}},showModal:{defaultValue:null,description:"",name:"showModal",required:!0,type:{name:"boolean"}},dispatchers:{defaultValue:null,description:"",name:"dispatchers",required:!0,type:{name:"Dispatchers"}},livePrices:{defaultValue:null,description:"",name:"livePrices",required:!0,type:{name:"LivePrice[]"}},onBuyNowClick:{defaultValue:null,description:"",name:"onBuyNowClick",required:!0,type:{name:"(id: string, name: string, price: string) => void"}},onReadReviewClick:{defaultValue:null,description:"",name:"onReadReviewClick",required:!0,type:{name:"(id: string, name: string, price: string) => void"}}}}}catch{}const ut={title:"Modules/Product Comparison",component:d,parameters:{layout:"fullscreen"},decorators:[T,N,B,S]},re=s(({children:e})=>t.jsx(t.Fragment,{children:e}),"ComparisonContainer"),ie={},a=s(e=>new f().anchorHref(`#product-${e}-id`).anchorId(`product-${e}-id`).bestForPrefixed("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ").bestFor("Lorem ipsum dolor").id(`${512345+e}`).image(t.jsx(F,{})).prettyPrice("£123.99").rating(2.5).title("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ").vendorLink("http://foo.com").isExternal(!0).isAvailable(!0).productSpec([{key:"Wireless",value:"Yes"},{key:"Form factor",value:"Closed design"},{key:"Type",value:"Earbuds"},{key:"Noise Cancellation",value:"Yes"},{key:"Weight",value:"53g (case, earbud weight not specified)"}]).build(),"item"),ae=new f().id("product-2").productSpec([{key:"apple",value:"rosey"},{key:"banana",value:"bent"},{key:"carrot",value:"cake"}]).prettyPrice("£44.44").title("lorem ipsum").bestFor("Product 2").bestForPrefixed("Lorem ipsum").rating(4.5).isAvailable(!0).build(),u=[a(1),ae,a(3),a(4),a(5),a(6),a(7),a(8),a(9)],se=s(()=>new Promise(e=>{setTimeout(()=>{e([{merchant:"Merchant",originalPrice:`£${Math.random()*100}`,price:`£${Math.random()*100}`,link:"http://foo.com"}])},Math.random()*3e3)}),"getPrices"),ne=s(e=>async o=>{e.setProductPricesIsLoading(o);try{const r=await se();e.setProductPrices(o,r)}catch{}finally{e.productPriceFetchError(o)}},"fetchPriceFactory"),c={...ie,render:()=>t.jsx(re,{children:t.jsx(j.Consumer,{children:({productComparison:e,productPrices:o,dispatchers:r})=>t.jsxs(t.Fragment,{children:[t.jsx(M,{fetchPrice:ne(r),initialIndex:0,isComparison:!0,livePrices:o,products:u,selectedItemIDs:e.selectedItems,title:"Our top pics",offsetKey:"product-carousel-offset-key",onToggleSelectedProduct:r.toggleSelectedProduct,onBuyNowClick:r.clickProductCarouselBuyNow,onReadReviewClick:r.clickProductCarouselReadReview}),t.jsx(d,{products:u,selectedItemIDs:e.selectedItems,showModal:e.showModal,returnFocus:_,livePrices:o,dispatchers:r,onBuyNowClick:r.clickProductComparisonBuyNow,onReadReviewClick:r.clickProductComparisonReadReview})]})})})};var h,g,C;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template,
  render: () => {
    return <ComparisonContainer>
        <PageContext.Consumer>
          {({
          productComparison,
          productPrices,
          dispatchers
        }) => <>
              <ProductCarousel fetchPrice={fetchPriceFactory(dispatchers)} initialIndex={0} isComparison={true} livePrices={productPrices} products={products} selectedItemIDs={productComparison.selectedItems} title="Our top pics" offsetKey="product-carousel-offset-key" onToggleSelectedProduct={dispatchers.toggleSelectedProduct} onBuyNowClick={dispatchers.clickProductCarouselBuyNow} onReadReviewClick={dispatchers.clickProductCarouselReadReview} />

              <ProductComparison products={products} selectedItemIDs={productComparison.selectedItems} showModal={productComparison.showModal} returnFocus={FOCUS_SELECTOR} livePrices={productPrices} dispatchers={dispatchers} onBuyNowClick={dispatchers.clickProductComparisonBuyNow} onReadReviewClick={dispatchers.clickProductComparisonReadReview} />
            </>}
        </PageContext.Consumer>
      </ComparisonContainer>;
  }
}`,...(C=(g=c.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const ht=["Base"];export{c as Base,ht as __namedExportsOrder,ut as default};