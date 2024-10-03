import{j as c}from"./jsx-runtime-1a1b98e7.js";import{P as b,a as g}from"./PasswordInputWithValidationHints-1eb9260d.js";import"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";import"./ValidationHint-789b703d.js";import"./index-91ae8c1a.js";import"./Icon.hoc-5c5e8f19.js";import"./Icon.constants-a768151c.js";import"./styled-components.browser.esm-852d80e5.js";import"./Symbols.hoc-c2fda652.js";import"./index-f7d1b020.js";import"./IconButton-ae2e48c7.js";import"./TextInput-9e45a495.js";import"./index.esm-13ba97b3.js";import"./LoadingEllipsis-745b9517.js";import"./Input.styles-d7c02014.js";import"./InputWrapper-be201918.js";import"./useInputButton-c9dd920d.js";const r={id:"name",label:"Password",helpText:"Make it a good one",required:void 0,state:"default",message:"There was an error",controlled:!1},E={title:"Modules/Form/Inputs/Password Input",component:b,argTypes:{controlled:{table:{disable:!0}}}},a={args:r},s={args:{...r,disabled:!0}},t={args:{...r,validationHints:{hintOne:{passes:!1,hint:"Blah"},hintTwo:{passes:!1,hint:"Blah blah"},hintThree:{passes:!0,hint:"Blah blah blah"},hintFour:{passes:!0,hint:"Blah blah blah blah"}}},render:u=>c.jsx(g,{...u})};var e,n,o;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var i,l,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true
  }
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,h,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    validationHints: {
      hintOne: {
        passes: false,
        hint: 'Blah'
      },
      hintTwo: {
        passes: false,
        hint: 'Blah blah'
      },
      hintThree: {
        passes: true,
        hint: 'Blah blah blah'
      },
      hintFour: {
        passes: true,
        hint: 'Blah blah blah blah'
      }
    }
  },
  render: (args: PasswordInputWithValidationHintsProps) => <PasswordInputWithValidationHints {...args} />
}`,...(m=(h=t.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const M=["Default","Disabled","WithValidationHints"];export{a as Default,s as Disabled,t as WithValidationHints,M as __namedExportsOrder,E as default};
