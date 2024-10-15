var v=Object.defineProperty;var c=(t,r)=>v(t,"name",{value:r,configurable:!0});import{j as e}from"./jsx-runtime-1a1b98e7.js";import{e as o,$ as a}from"./index-3b0e1f90.js";import{M as x}from"./MockCopy-ef682cd6.js";import{I as P}from"./Image-d40681c5.js";import{J as j}from"./JumpLink-e8b7f71f.js";import{P as y}from"./ProductTitle-8bcefff0.js";import{P as b}from"./ProductViewLayout-45ffc0ce.js";import{R as h}from"./InlineContainer.hoc-694d618c.js";import{S}from"./SpecsList-c9a0fdd8.js";import{S as V}from"./StarRating-4f1eef21.js";import{d as l}from"./styled-components.browser.esm-852d80e5.js";import"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";import"./Themed-37bc6e61.js";import"./themes-62dd66f0.js";import"./boxShadows-395cc866.js";import"./palette-273fb38f.js";import"./colors-3e41a0f7.js";import"./base-c8d9f963.js";import"./Icon.constants-a768151c.js";import"./breakPoints-89c7d41a.js";import"./fontWeights-1d7bfb43.js";import"./devices-1d39230d.js";import"./zIndex-6061405c.js";import"./index-08c90798.js";import"./Icon.hoc-5c5e8f19.js";import"./Symbols.hoc-c2fda652.js";import"./index-f7d1b020.js";import"./AnchorsNav.constants-3fd2a829.js";const _=l.div.withConfig({componentId:"sc-1f999j5-0"})(["padding:","px;background-color:",";"],({theme:t})=>t.spacing.x4,({theme:t})=>t.color.canvas.secondary),C=l.div.withConfig({componentId:"sc-1f999j5-1"})(["width:100%;height:auto;"]),k=l.div.withConfig({componentId:"sc-1f999j5-2"})(["padding:","px;margin-bottom:auto;border:dotted 1px ",";text-align:center;"],({theme:t})=>t.spacing.x2,({theme:t})=>t.color.divider.light),s=c(({title:t,rating:r,image:n,items:p,description:f,jumpLink:m})=>e.jsx(b,{top:e.jsxs(e.Fragment,{children:[t&&e.jsx(y,{title:t}),r&&e.jsx(V,{value:r})]}),left:e.jsxs(_,{children:[n&&e.jsx(C,{children:n}),p&&e.jsx(S,{items:p})]}),right:e.jsxs(e.Fragment,{children:[e.jsx(h,{children:f}),e.jsx(k,{children:"Price Comparison"}),m&&e.jsx(j,{...m})]})}),"ProductPanel"),I=s;try{s.displayName="ProductPanel",s.__docgenInfo={description:"",displayName:"ProductPanel",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},rating:{defaultValue:null,description:"",name:"rating",required:!1,type:{name:"number"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"any"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"Items[]"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},jumpLink:{defaultValue:null,description:"",name:"jumpLink",required:!1,type:{name:"JumpLinkProps"}}}}}catch{}const se={title:"Components/Product Panel",component:I,tags:["storyshot:vp:all"],argTypes:{title:{control:{type:"text"}},rating:{control:{type:"number"}},image:{control:{disable:!0}},items:{control:{type:"object"}},description:{control:{disable:!0}},jumpLink:{control:{disable:!0}}}},L={title:"Product Title",rating:3.5,image:e.jsx(P,{}),items:[{label:"Best",value:"Best for value"},{label:"Spec1",value:"Value1"},{label:"Spec2",value:"Value2"},{label:"Spec2",value:"Value3"},{label:"Spec2",value:"Value4"},{label:"Why we love it",sublist:[{svg:o,value:"Pros1"},{svg:o,value:"Pros2"},{svg:o,value:"Pros3"},{svg:o,value:"Pros4"},{svg:o,value:"Pros5"}]},{label:"Take note",sublist:[{svg:a,value:"Con1"},{svg:a,value:"Con2"},{svg:a,value:"Con3"},{svg:a,value:"Con4"}]}],description:e.jsx(x,{}),jumpLink:{elementId:"element-id",text:"Back to top"}},i={args:L};var d,u,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const le=["Default"];export{i as Default,le as __namedExportsOrder,se as default};
