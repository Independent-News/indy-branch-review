import{j as e}from"./jsx-runtime-1a1b98e7.js";import{P as b,a as g}from"./PasswordInputWithValidationHints-345bd1bd.js";import"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";import"./ValidationHint-40c6c1db.js";import"./index-3b0e1f90.js";import"./Icon.hoc-5c5e8f19.js";import"./Icon.constants-a768151c.js";import"./styled-components.browser.esm-852d80e5.js";import"./Symbols.hoc-c2fda652.js";import"./index-f7d1b020.js";import"./IconButton-ae2e48c7.js";import"./TextInput-64e27a40.js";import"./index.esm-13ba97b3.js";import"./LoadingEllipsis-dfc77cbe.js";import"./Input.styles-d7c02014.js";import"./InputWrapper-1f184b9f.js";import"./useInputButton-c9dd920d.js";const n={id:"name",label:"Password",helpText:"Make it a good one",required:void 0,state:"default",message:"There was an error",controlled:!1},_={title:"Modules/Form/Inputs/Password Input",component:b,argTypes:{controlled:{table:{disable:!0}}}},s={args:n},a={args:{...n,disabled:!0}},r={args:{...n,validationHints:{hintOne:{passes:!1,hint:"Blah"},hintTwo:{passes:!1,hint:"Blah blah"},hintThree:{passes:!0,hint:"Blah blah blah"},hintFour:{passes:!0,hint:"Blah blah blah blah"}}},decorators:[t=>e.jsx("div",{children:e.jsx(t,{})})],render:t=>e.jsx(g,{...t})};var o,i,l;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,p,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true
  }
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var m,u,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
  decorators: [(Story: FC) => <div>
        <Story />
      </div>],
  render: (args: PasswordInputWithValidationHintsProps) => <PasswordInputWithValidationHints {...args} />
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const E=["Default","Disabled","WithValidationHints"];export{s as Default,a as Disabled,r as WithValidationHints,E as __namedExportsOrder,_ as default};
