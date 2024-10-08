var T=Object.defineProperty;var r=(e,n)=>T(e,"name",{value:n,configurable:!0});import{j as t}from"./jsx-runtime-1a1b98e7.js";import{c as A}from"./index-08c90798.js";import{r as u}from"./index-29d3bc65.js";import{d as V}from"./styled-components.browser.esm-852d80e5.js";import{D as h}from"./Dropdown-14837262.js";import"./_commonjsHelpers-f86d8be3.js";import"./mixins-cd1fe61f.js";import"./devices-1d39230d.js";import"./breakPoints-89c7d41a.js";import"./index-f7d1b020.js";const j="accordion-wrapper",D="drawer-menu-section",E=V.div.withConfig({componentId:"sc-bgh9ft-0"})([""]),d=r(({children:e,className:n,...s})=>t.jsx(h,{className:A(D,n),...s,children:e}),"AccordionSection");try{d.displayName="AccordionSection",d.__docgenInfo={description:"",displayName:"AccordionSection",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onInteract:{defaultValue:null,description:"",name:"onInteract",required:!1,type:{name:"((index: number) => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"string"}}}}}catch{}const l=r(({name:e,className:n,sections:s,initialOpenIndex:I=null})=>{const[a,N]=u.useState(I),O=u.useCallback(o=>N(a===o?null:o),[a]);return t.jsx(E,{className:A(j,n),children:s.map(({content:o,trigger:C,id:p},m)=>{const q=r(()=>O(m),"onInteract");return t.jsx(d,{id:p,isOpen:a===m,onInteract:q,trigger:C,children:o},`accordion-section-${e}-${p}`)})})},"Accordion");try{l.displayName="Accordion",l.__docgenInfo={description:"",displayName:"Accordion",props:{sections:{defaultValue:null,description:"",name:"sections",required:!0,type:{name:"section[]"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},initialOpenIndex:{defaultValue:{value:"null"},description:"",name:"initialOpenIndex",required:!1,type:{name:"number | null"}}}}}catch{}const z={title:"Components/Accordion",component:l},i={args:{sections:[{trigger:"Section 1 Title",content:"Section 1 content",id:"first-section"},{trigger:"Section 2 Title",content:"Section 2 content",id:"second-section"}]},decorators:[e=>t.jsx(e,{})]},c={args:{initialOpenIndex:0,sections:[{trigger:"Section 1 Title",content:"Section 1 content",id:"first-section"},{trigger:"Section 2 Title",content:"Section 2 content",id:"second-section"}]},decorators:[e=>t.jsx(e,{})]};var g,S,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    sections: [{
      trigger: 'Section 1 Title',
      content: 'Section 1 content',
      id: 'first-section'
    }, {
      trigger: 'Section 2 Title',
      content: 'Section 2 content',
      id: 'second-section'
    }]
  },
  decorators: [(Story: FC) => <Story />]
}`,...(f=(S=i.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var _,y,x;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    initialOpenIndex: 0,
    sections: [{
      trigger: 'Section 1 Title',
      content: 'Section 1 content',
      id: 'first-section'
    }, {
      trigger: 'Section 2 Title',
      content: 'Section 2 content',
      id: 'second-section'
    }]
  },
  decorators: [(Story: FC) => <Story />]
}`,...(x=(y=c.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const B=["Default","StartOpen"];export{i as Default,c as StartOpen,B as __namedExportsOrder,z as default};
