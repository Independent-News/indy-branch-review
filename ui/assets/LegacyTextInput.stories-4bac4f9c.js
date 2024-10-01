import{I as c}from"./Input.styles-d7c02014.js";import{L as g}from"./LegacyTextInput-81bcdbdd.js";import"./styled-components.browser.esm-852d80e5.js";import"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";import"./Icon.hoc-5c5e8f19.js";import"./jsx-runtime-1a1b98e7.js";import"./Icon.constants-a768151c.js";import"./Symbols.hoc-c2fda652.js";import"./index-f7d1b020.js";import"./index.esm-13ba97b3.js";import"./LoadingEllipsis-a1f98bbd.js";import"./LegacyInputWrapper-ee0a2bcc.js";import"./useInputButton-c9dd920d.js";const a={id:"name",label:"First name",helpText:"We will use this to address you",required:void 0,type:"text",state:"default",message:"There was an error",controlled:!1,pattern:{value:"^[A-Za-z0-9]+$",message:"Only letters and numbers are allowed"}},_={title:"Modules/Form/Inputs/Legacy Text Input",component:g,argTypes:{controlled:{table:{disable:!0}}}},e={args:a},r={args:{...a,disabled:!0,value:"I'm disabled"}},t={args:{...a,state:c.WAITING}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var i,p,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true,
    value: "I'm disabled"
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,m,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    state: InputState.WAITING
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const F=["Default","Disabled","Waiting"];export{e as Default,r as Disabled,t as Waiting,F as __namedExportsOrder,_ as default};
