var f=Object.defineProperty;var o=(e,g)=>f(e,"name",{value:g,configurable:!0});import{j as i}from"./jsx-runtime-1a1b98e7.js";import{M as s,L as h,c as w,T as d}from"./Modal-35641846.js";import{P as y}from"./Overlay-f3b15a72.js";import{P as u}from"./ProductBuilder-e993ec59.js";import"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";import"./styled-components.browser.esm-852d80e5.js";import"./viewports-741975bd.js";import"./breakPoints-89c7d41a.js";import"./Icon.constants-a768151c.js";import"./StarRating-0c171c05.js";import"./index-aefe2d3f.js";import"./Icon.hoc-5c5e8f19.js";import"./Symbols.hoc-c2fda652.js";import"./index-f7d1b020.js";import"./currency-dffb60c3.js";import"./clampLines-a64b3b1f.js";import"./Image-d40681c5.js";import"./SuccessConfirmationModal-a8989ff6.js";import"./inheritsLoose-289c47e1.js";import"./SellingModalOverlay-420ff2b6.js";import"./SellingModalHeader-f848e5dd.js";import"./IconButton-ae2e48c7.js";import"./devices-1d39230d.js";import"./Tag-8cdcd799.js";import"./mixins-cd1fe61f.js";import"./Themed-8451eb61.js";import"./themes-ead5b4a7.js";import"./boxShadows-649f4f7e.js";import"./palette-cdb14916.js";import"./colors-3e41a0f7.js";import"./base-c8d9f963.js";import"./fontWeights-1d7bfb43.js";import"./zIndex-6061405c.js";import"./index-08c90798.js";const me={title:"Modules/Product Comparison/Modal",component:s,parameters:{layout:"fullscreen"},decorators:[y,h]},P={},F=[{label:"Wireless",value:"Yes"},{label:"Form factor",value:"Closed design"},{label:"banana",value:"Cavendish"},{label:"Noise Cancellation",value:"Yes"},{label:"carrot",value:null},{label:"Weight",value:"53g (case, earbud weight not specified)"},{label:"apple",value:null}],M=[{label:"apple",value:"rosey"},{label:"banana",value:"bent"},{label:"carrot",value:"cake"},{label:"Noise Cancellation",value:null},{label:"Type",value:"Earbuds"},{label:"Wireless",value:"Yes"},{label:"Form factor",value:"Closed design"}],x=new u().id("product-1").bestFor("Full-featured earbuds").prettyPrice("£13.14").title("Very, very, very long title of a Product that spans to many lines").productSpec(F).build(),S=new u().id("product-2").bestFor("budget earbyds").prettyPrice("£23.99").title("Title of Product").productSpec(M).build(),T=[x,S],b=o(()=>{},"hideProductModal"),k=["product-1","product-2"],v=w(k,T),r={...P,args:{hideProductModal:b,isHidden:!1,items:v,returnFocus:"",livePrices:[]},render:e=>i.jsx(s,{...e,items:e.items,children:i.jsx(d,{livePrices:[],items:e.items})})},t={...P,args:{hideProductModal:b,isHidden:!1,items:v,returnFocus:"",livePrices:[{id:"product-1",prices:[{merchant:"Amazon",link:"https://www.amazon.co.uk",originalPrice:"£20.0",price:"£13.14"}],isLoading:!1,isFetched:!0,isError:!1},{id:"product-2",prices:[{merchant:"Walmart",link:"https://www.walmart.com",originalPrice:"£30.0",price:"£23.99"}],isLoading:!1,isFetched:!0,isError:!1}]},render:e=>i.jsx(s,{...e,items:e.items,children:i.jsx(d,{livePrices:e.livePrices,items:e.items})})};var a,n,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...Template,
  args: {
    hideProductModal,
    isHidden: false,
    items: selectedItems,
    returnFocus: '',
    livePrices: []
  },
  render: (props: ModalProps) => {
    return <Modal {...props} items={props.items}>
        <Table livePrices={[]} items={props.items} />
      </Modal>;
  }
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template,
  args: {
    hideProductModal,
    isHidden: false,
    items: selectedItems,
    returnFocus: '',
    livePrices: [{
      id: 'product-1',
      prices: [{
        merchant: 'Amazon',
        link: 'https://www.amazon.co.uk',
        originalPrice: '£20.0',
        price: '£13.14'
      }],
      isLoading: false,
      isFetched: true,
      isError: false
    }, {
      id: 'product-2',
      prices: [{
        merchant: 'Walmart',
        link: 'https://www.walmart.com',
        originalPrice: '£30.0',
        price: '£23.99'
      }],
      isLoading: false,
      isFetched: true,
      isError: false
    }]
  },
  render: (props: ModalProps) => {
    return <Modal {...props} items={props.items}>
        <Table livePrices={props.livePrices} items={props.items} />
      </Modal>;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const pe=["StaticPricing","DynamicPricing"];export{t as DynamicPricing,r as StaticPricing,pe as __namedExportsOrder,me as default};
