import{j as s}from"./jsx-runtime-1a1b98e7.js";import{d as C}from"./styled-components.browser.esm-852d80e5.js";import{T as f,a as v,G as T,M as S}from"./MultiStepCard-98d97c40.js";import"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";import"./index-08c90798.js";import"./Themed-f7694132.js";import"./themes-5d88a976.js";import"./boxShadows-a8a1f7d6.js";import"./palette-cdb14916.js";import"./colors-3e41a0f7.js";import"./base-c8d9f963.js";import"./Icon.constants-a768151c.js";import"./breakPoints-89c7d41a.js";import"./fontWeights-1d7bfb43.js";import"./devices-1d39230d.js";import"./zIndex-6061405c.js";import"./index-58d5119c.js";import"./Icon.hoc-5c5e8f19.js";import"./Symbols.hoc-c2fda652.js";import"./index-f7d1b020.js";import"./StepCard-c643d39c.js";const k=C(S).withConfig({componentId:"sc-a5edjs-0"})(["",",","{opacity:1;}"],f,v),F={title:"Components/Multi-step Cards/Card",component:k},o={currentStep:"1/3",title:"Test title",description:"Test description",isCardActive:!1,children:"Child card content"},r={args:o},t={args:{...o,isCardActive:!0}},e={args:{...o,currentStep:"2/3",goBackToPreviousStep:s.jsx(T,{children:"Go back to step 1"})},render:g=>s.jsx(S,{...g})};var a,i,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: defaultArs
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,n,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultArs,
    isCardActive: true
  }
}`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var d,u,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...defaultArs,
    currentStep: '2/3',
    goBackToPreviousStep: <GoBackToPreviousStep>Go back to step 1</GoBackToPreviousStep>
  },
  render: (args: MultiStepCardProps) => <MultiStepCard {...args} />
}`,...(l=(u=e.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const H=["Default","Active","WithBackToPreviousStep"];export{t as Active,r as Default,e as WithBackToPreviousStep,H as __namedExportsOrder,F as default};
