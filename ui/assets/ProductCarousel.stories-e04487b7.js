var u=Object.defineProperty;var s=(o,r)=>u(o,"name",{value:r,configurable:!0});import{j as p}from"./jsx-runtime-1a1b98e7.js";import{P as d,a as l,b as P}from"./ProductCarousel-ab5607b7.js";import{P as f}from"./ProductBuilder-e993ec59.js";import"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";import"./Carousel-341792cc.js";import"./styled-components.browser.esm-852d80e5.js";import"./mixins-cd1fe61f.js";import"./devices-1d39230d.js";import"./breakPoints-89c7d41a.js";import"./index-f7d1b020.js";import"./ProductCarouselCard-d38ca056.js";import"./Form-c2b0a4a6.js";import"./TextInput-5cdea809.js";import"./index.esm-13ba97b3.js";import"./LoadingEllipsis-dfc77cbe.js";import"./Input.styles-d7c02014.js";import"./Icon.hoc-5c5e8f19.js";import"./Icon.constants-a768151c.js";import"./Symbols.hoc-c2fda652.js";import"./InputWrapper-a9c8f8fa.js";import"./index-f40e3ffd.js";import"./useInputButton-c9dd920d.js";import"./LegacyTextInput-118cf206.js";import"./LegacyInputWrapper-ee0a2bcc.js";import"./PasswordInputWithValidationHints-d338ffda.js";import"./ValidationHint-48cdb6e1.js";import"./IconButton-ae2e48c7.js";import"./SelectInput-fa3c034f.js";import"./SelectInput.styles-bee92c9d.js";import"./LegacySelectInput-a3d72b0f.js";import"./Checkbox-27903e3c.js";import"./ScreenReaderOnly-bf6dac32.js";import"./CheckboxWithDropdown-bf5adc12.js";import"./Dropdown-c8bc362d.js";import"./DropdownWithChevron-566277a8.js";import"./DropdownForCard-e89f010e.js";import"./RadioButton-f6ab6ee3.js";import"./base-c8d9f963.js";import"./Themed-51b9a89d.js";import"./themes-2bc8cc20.js";import"./boxShadows-395cc866.js";import"./palette-273fb38f.js";import"./colors-3e41a0f7.js";import"./fontWeights-1d7bfb43.js";import"./zIndex-6061405c.js";import"./index-08c90798.js";import"./StarRating-3bd7fb1e.js";import"./clampLines-a64b3b1f.js";import"./currency-dffb60c3.js";import"./Image-d40681c5.js";const yt={title:"Modules/Product Carousel",component:d,tags:["storyshot:skip"],decorators:[l],parameters:{docs:{description:{component:`@todo fix storyshotting of Product Carousel. It is currently being skipped
due to async behaviour.`}}}},t=s(o=>new f().bestForPrefixed("Lorem ipsum dolor sit amet, consectetur").id(`12345${o}`).prettyPrice("£123.99").rating(2.4).title("Lorem ipsum dolor sit amet, consectetur adipiscing elit").vendorLink("http://foo.com").build(),"createProduct"),C=[t(1),t(2),t(3),t(4),t(5),t(6),t(7),t(8),t(9),t(10),t(11),t(12),t(13),t(14),t(15),t(16)],g=s(()=>new Promise(o=>{setTimeout(()=>{o([{merchant:"Merchant",originalPrice:`£${Math.random()*100}`,price:`£${Math.random()*100}`,link:"http://foo.com"}])},Math.random()*3e3)}),"getPrices"),y=s(o=>async r=>{o.setProductPricesIsLoading(r);try{const e=await g();o.setProductPrices(r,e)}catch{}finally{o.productPriceFetchError(r)}},"fetchPriceFactory"),h={initialIndex:0,isComparison:!1,products:C,title:"Our top picks",offsetKey:"product-carousel-offset-key"},c={args:h,render:o=>p.jsx(P.Consumer,{children:({productComparison:r,productPrices:e,dispatchers:i})=>p.jsx(d,{fetchPrice:y(i),initialIndex:o.initialIndex,isComparison:o.isComparison,livePrices:e,products:o.products,selectedItemIDs:r.selectedItems,title:o.title,offsetKey:o.offsetKey,onToggleSelectedProduct:i.toggleSelectedProduct,onBuyNowClick:i.clickProductCarouselBuyNow,onReadReviewClick:i.clickProductCarouselReadReview})})};var m,n,a;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: defaultArgs,
  render: (props: ProductCarouselProps) => {
    return <PageContext.Consumer>
        {({
        productComparison,
        productPrices,
        dispatchers
      }) => <ProductCarousel fetchPrice={fetchPriceFactory(dispatchers)} initialIndex={props.initialIndex} isComparison={props.isComparison} livePrices={productPrices} products={props.products} selectedItemIDs={productComparison.selectedItems} title={props.title} offsetKey={props.offsetKey} onToggleSelectedProduct={dispatchers.toggleSelectedProduct} onBuyNowClick={dispatchers.clickProductCarouselBuyNow} onReadReviewClick={dispatchers.clickProductCarouselReadReview} />}
      </PageContext.Consumer>;
  }
}`,...(a=(n=c.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const ht=["Default"];export{c as Default,ht as __namedExportsOrder,yt as default};
