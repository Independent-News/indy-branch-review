var f=Object.defineProperty;var o=(e,g)=>f(e,"name",{value:g,configurable:!0});import{j as i}from"./jsx-runtime-1a1b98e7.js";import{M as s,L as k,c as h,T as d}from"./Modal-24af679e.js";import{P as w}from"./Overlay-f3b15a72.js";import{P as u}from"./ProductBuilder-e993ec59.js";import"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";import"./styled-components.browser.esm-852d80e5.js";import"./viewports-741975bd.js";import"./breakPoints-89c7d41a.js";import"./Icon.constants-a768151c.js";import"./StarRating-4e14bc09.js";import"./index-58d5119c.js";import"./Icon.hoc-5c5e8f19.js";import"./Symbols.hoc-c2fda652.js";import"./index-f7d1b020.js";import"./currency-dffb60c3.js";import"./clampLines-a64b3b1f.js";import"./Image-d40681c5.js";import"./SuccessConfirmationModal-a8989ff6.js";import"./inheritsLoose-289c47e1.js";import"./Themed-f7694132.js";import"./themes-5d88a976.js";import"./boxShadows-a8a1f7d6.js";import"./palette-cdb14916.js";import"./colors-3e41a0f7.js";import"./base-c8d9f963.js";import"./fontWeights-1d7bfb43.js";import"./devices-1d39230d.js";import"./zIndex-6061405c.js";import"./index-08c90798.js";import"./IconButton-ae2e48c7.js";import"./mixins-cd1fe61f.js";const ne={title:"Modules/Product Comparison/Modal",component:s,parameters:{layout:"fullscreen"},decorators:[w,k]},P={},b=[{key:"Wireless",value:"Yes"},{key:"Form factor",value:"Closed design"},{key:"banana",value:"Cavendish"},{key:"Noise Cancellation",value:"Yes"},{key:"carrot",value:null},{key:"Weight",value:"53g (case, earbud weight not specified)"},{key:"apple",value:null}],F=[{key:"apple",value:"rosey"},{key:"banana",value:"bent"},{key:"carrot",value:"cake"},{key:"Noise Cancellation",value:null},{key:"Type",value:"Earbuds"},{key:"Wireless",value:"Yes"},{key:"Form factor",value:"Closed design"}],M=new u().id("product-1").bestFor("Full-featured earbuds").prettyPrice("£13.14").title("Very, very, very long title of a Product that spans to many lines").productSpec(b).build(),x=new u().id("product-2").bestFor("budget earbyds").prettyPrice("£23.99").title("Title of Product").productSpec(F).build(),S=[M,x],v=o(()=>{},"hideProductModal"),T=["product-1","product-2"],y=h(T,S),r={...P,args:{hideProductModal:v,isHidden:!1,items:y,returnFocus:"",livePrices:[]},render:e=>i.jsx(s,{...e,items:e.items,children:i.jsx(d,{livePrices:[],items:e.items})})},t={...P,args:{hideProductModal:v,isHidden:!1,items:y,returnFocus:"",livePrices:[{id:"product-1",prices:[{merchant:"Amazon",link:"https://www.amazon.co.uk",originalPrice:"£20.0",price:"£13.14"}],isLoading:!1,isFetched:!0,isError:!1},{id:"product-2",prices:[{merchant:"Walmart",link:"https://www.walmart.com",originalPrice:"£30.0",price:"£23.99"}],isLoading:!1,isFetched:!0,isError:!1}]},render:e=>i.jsx(s,{...e,items:e.items,children:i.jsx(d,{livePrices:e.livePrices,items:e.items})})};var a,n,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var l,m,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ce=["StaticPricing","DynamicPricing"];export{t as DynamicPricing,r as StaticPricing,ce as __namedExportsOrder,ne as default};
