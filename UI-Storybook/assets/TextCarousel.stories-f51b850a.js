var A=Object.defineProperty;var d=(e,r)=>A(e,"name",{value:r,configurable:!0});import{j as t}from"./jsx-runtime-1a1b98e7.js";import{D as N}from"./DarkThemeProvider-f9456186.js";import{u as q}from"./useSimpleSlider-fdab986f.js";import{c as b}from"./index-08c90798.js";import{d as o}from"./styled-components.browser.esm-852d80e5.js";import{a6 as V,c as L}from"./index-3b0e1f90.js";import{I}from"./IconButton-ae2e48c7.js";import{t as m,l as j,d as P}from"./devices-1d39230d.js";import{r as R}from"./index-29d3bc65.js";import"./themes-428ecd68.js";import"./boxShadows-395cc866.js";import"./palette-273fb38f.js";import"./colors-3e41a0f7.js";import"./base-c8d9f963.js";import"./Icon.constants-a768151c.js";import"./breakPoints-89c7d41a.js";import"./fontWeights-1d7bfb43.js";import"./zIndex-c7e1b793.js";import"./_commonjsHelpers-f86d8be3.js";import"./Icon.hoc-5c5e8f19.js";import"./Symbols.hoc-c2fda652.js";import"./index-f7d1b020.js";const H=82,k=60,p=94,B=38,w=88,O=804,D=1053,_=8,y=12,z="carousel-next-button",G="carousel-prev-button",M=o.div.withConfig({componentId:"sc-1yvcr-0"})(["display:flex;position:relative;width:100%;height:","px;box-sizing:border-box;align-items:center;border-right:1px solid ",";background-color:",";color:",";@media ","{height:","px;}"],H,({theme:e})=>e.color.divider.light,({theme:e})=>e.color.canvas.base,({theme:e})=>e.color.ink.base,m,k),U=o.a.withConfig({componentId:"sc-1yvcr-1"})(["display:flex;position:absolute;right:0;bottom:0;z-index:1;width:","px;height:","px;box-sizing:border-box;align-content:center;align-items:center;padding:11px ","px;border-left:1px solid ",";background-color:",";color:",";white-space:nowrap;",";&:hover{background-color:",";color:",";}@media ","{position:static;height:100%;border-right:1px solid ",";}"],p,B,({theme:e})=>e.spacing.x2,({theme:e})=>e.color.divider.light,({theme:e})=>e.color.actionBrand.base,({theme:e})=>e.color.actionSubtleLight.base,({theme:e})=>e.textStyle.voucherTicker.CTA,({theme:e})=>e.color.actionBrand.alt,({theme:e})=>e.color.actionSubtleLight.alt,m,({theme:e})=>e.color.divider.light),W=o.ul.withConfig({componentId:"sc-1yvcr-2"})(["display:flex;overflow:hidden;width:100%;max-width:calc(100% - ","px);align-items:center;padding:0;margin:0 ","px;@media ","{width:100%;max-width:calc( 100% - ","px );margin:0 ","px;}@media ","{width:","px;max-width:fit-content;}@media ","{width:","px;}"],p+_*2,_,m,p+w+y*2,y,j,O,P,D),X=o.li.withConfig({componentId:"sc-1yvcr-3"})(["width:100%;flex:1 0 auto;list-style-type:none;scroll-snap-align:start;"]),Q=o.nav.withConfig({componentId:"sc-1yvcr-4"})(["display:flex;position:absolute;top:0;right:0;width:","px;box-sizing:border-box;justify-content:center;border-left:1px solid ",";@media ","{position:relative;right:0;width:","px;align-items:center;border:0;}"],p,({theme:e})=>e.color.divider.light,m,w),K=o(I).attrs({size:"large",svg:V}).withConfig({componentId:"sc-1yvcr-5"})(["color:",";&:hover,&:active,&:focus-visible{color:",";}&[disabled]{color:",";}"],e=>e.theme.color.actionSubtleLight.base,e=>e.theme.color.actionSubtleLight.alt,({theme:e})=>e.color.semiotic.disabled),$=o(I).attrs({size:"large",svg:L}).withConfig({componentId:"sc-1yvcr-6"})(["color:",";&:hover,&:active,&:focus-visible{color:",";}&[disabled]{color:",";}"],e=>e.theme.color.actionSubtleLight.base,e=>e.theme.color.actionSubtleLight.alt,({theme:e})=>e.color.semiotic.disabled),h=d(({handlePrev:e,handleNext:r,itemCount:l,currentIndex:n,className:a})=>{const s=n===0,i=n===l-1;return t.jsxs(Q,{"aria-label":"slide controls",children:[t.jsx(K,{className:b(a,G),"aria-label":"Previous",isDisabled:s,onClick:e,"data-testid":"prev-button"}),t.jsx($,{className:b(a,z),"aria-label":"Next",isDisabled:i,onClick:r,"data-testid":"next-button"})]})},"Controls");try{h.displayName="Controls",h.__docgenInfo={description:"",displayName:"Controls",props:{itemCount:{defaultValue:null,description:"",name:"itemCount",required:!0,type:{name:"number"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}},contentType:{defaultValue:null,description:"",name:"contentType",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},handlePrev:{defaultValue:null,description:"",name:"handlePrev",required:!0,type:{name:"() => void"}},handleNext:{defaultValue:null,description:"",name:"handleNext",required:!0,type:{name:"() => void"}}}}}catch{}const f=R.forwardRef(d(function({items:r,renderSlide:l,currentIndex:n},a){const s=r[n];return t.jsx(W,{ref:a,children:r.map((i,x)=>{const c=s===i;return t.jsx(X,{"aria-hidden":!c,children:l({item:i})},`item-${x}`)})})},"Slider2"));try{f.displayName="Slider",f.__docgenInfo={description:"",displayName:"Slider",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Item<unknown>[]"}},renderSlide:{defaultValue:null,description:"",name:"renderSlide",required:!0,type:{name:"(props: TextRenderSlideProps) => Element"}},currentIndex:{defaultValue:null,description:"",name:"currentIndex",required:!0,type:{name:"number"}}}}}catch{}const g=d(({className:e,items:r,renderSlide:l,ctaText:n,ctaHref:a,autoPlayInterval:s})=>{const i=r.length||0,{sliderRef:x,currentIndex:c,handlePrev:C,handleNext:E}=q({autoPlayInterval:s});return i===0?null:t.jsx(N,{children:t.jsxs(M,{className:e,children:[t.jsx(U,{href:a,target:"_blank",rel:"noopener noreferrer",children:n}),t.jsx(f,{items:r,currentIndex:c,renderSlide:l,ref:x}),t.jsx(h,{handlePrev:C,handleNext:E,itemCount:i,currentIndex:c})]})})},"TextCarousel");try{g.displayName="TextCarousel",g.__docgenInfo={description:"",displayName:"TextCarousel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Item<unknown>[]"}},renderSlide:{defaultValue:null,description:"",name:"renderSlide",required:!0,type:{name:"(props: TextRenderSlideProps) => Element"}},ctaText:{defaultValue:null,description:"",name:"ctaText",required:!0,type:{name:"string"}},ctaHref:{defaultValue:null,description:"",name:"ctaHref",required:!0,type:{name:"string"}},autoPlayInterval:{defaultValue:null,description:"",name:"autoPlayInterval",required:!1,type:{name:"number"}}}}}catch{}const F=d(({item:e})=>t.jsx("div",{children:e.text}),"Slide"),ye={title:"Components/Simple Carousel/Text Carousel",component:g},u={args:{ctaText:"View all",ctaHref:"https://www.google.com",items:[{text:"Sed fringilla, turpis in fermentum aliquet"},{text:"Neque odio sodales felis, nec sollicitudin tortor purus nec enim"},{text:"Quisque id nisl vel mauris laoreet dapibus et et justo.Vestibulum ante ipsum primis in faucibus orciluctus"}],renderSlide:e=>t.jsx(F,{...e}),autoPlayInterval:8}};var v,T,S;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ctaText: 'View all',
    ctaHref: 'https://www.google.com',
    items: [{
      text: 'Sed fringilla, turpis in fermentum aliquet'
    }, {
      text: 'Neque odio sodales felis, nec sollicitudin tortor purus nec enim'
    }, {
      text: 'Quisque id nisl vel mauris laoreet dapibus et et justo.Vestibulum ante ipsum primis in faucibus orciluctus'
    }],
    renderSlide: (props: TextRenderSlideProps) => <Slide {...props} />,
    autoPlayInterval: 8
  }
}`,...(S=(T=u.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const ve=["Default"];export{u as Default,ve as __namedExportsOrder,ye as default};
