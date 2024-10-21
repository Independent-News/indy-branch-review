import{j as r}from"./jsx-runtime-1a1b98e7.js";import{F as n}from"./Form-c2b0a4a6.js";import{T as d,S as e}from"./TestableForm-41b1427d.js";import{T as l}from"./TextInput-64e27a40.js";import"./LegacyTextInput-118cf206.js";import{P as c}from"./PasswordInputWithValidationHints-345bd1bd.js";import{S as u}from"./SelectInput-1f2b9b63.js";import"./LegacySelectInput-544e388d.js";import{C as h}from"./Checkbox-8d022ad8.js";import{C as b}from"./CheckboxWithDropdown-66eb522f.js";import{H as f,R as a}from"./RadioButton-f6ab6ee3.js";import"./ValidationHint-40c6c1db.js";import"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";import"./Input.styles-d7c02014.js";import"./styled-components.browser.esm-852d80e5.js";import"./Icon.hoc-5c5e8f19.js";import"./Icon.constants-a768151c.js";import"./Symbols.hoc-c2fda652.js";import"./index-f7d1b020.js";import"./Themed-37bc6e61.js";import"./themes-62dd66f0.js";import"./boxShadows-395cc866.js";import"./palette-273fb38f.js";import"./colors-3e41a0f7.js";import"./base-c8d9f963.js";import"./breakPoints-89c7d41a.js";import"./fontWeights-1d7bfb43.js";import"./devices-1d39230d.js";import"./zIndex-6061405c.js";import"./index-08c90798.js";import"./index-3b0e1f90.js";import"./index.esm-13ba97b3.js";import"./LoadingEllipsis-dfc77cbe.js";import"./InputWrapper-1f184b9f.js";import"./useInputButton-c9dd920d.js";import"./LegacyInputWrapper-ee0a2bcc.js";import"./IconButton-ae2e48c7.js";import"./SelectInput.styles-bee92c9d.js";import"./ScreenReaderOnly-bf6dac32.js";import"./mixins-cd1fe61f.js";import"./Dropdown-c8bc362d.js";import"./DropdownWithChevron-8757e554.js";import"./DropdownForCard-6832d1b4.js";const x={onSubmit:o=>alert(`Submitted: ${JSON.stringify(o)}`),schema:new e({email:e.add("Email address").string().isEmail().required(),password:e.add("Password").string().hasMin(1,"digits").hasMin(6,"letters").required(),birthYear:e.add("Birth year").number().required(),fruit:e.add("Fruit").string().required(),terms:e.add("Privacy opt in").boolean().required(),optIn:e.add("Opt in").boolean()})},pr={title:"Modules/Form/The Kitchen Sink",component:n,render:o=>r.jsx(d,{...o,children:({registerControlledInput:t})=>r.jsxs(r.Fragment,{children:[r.jsx(l,{type:"email",label:"Email address",helpText:"Add an email address",...t("email")}),r.jsx(c,{label:"Password",helpText:"Make it a good one",...t("password")}),r.jsxs(f,{children:[r.jsx(a,{label:"Apples",value:"apples",...t("apples","fruit")}),r.jsx(a,{label:"Pears",value:"pears",defaultChecked:!0,...t("pears","fruit")})]}),r.jsx(u,{label:"Birth year",options:[{value:"1970",label:"1970"},{value:"1980",label:"1980"},{value:"1990",label:"1990"}],...t("birthYear")}),r.jsx(h,{label:"I accept the terms and conditions",...t("terms")}),r.jsx(b,{label:"I opt into marketing communications and style tips and gardening advice from this website",dropdownHeader:"Opt-in policy",dropdownContent:"By opting in you agree to receive marketing communications from us. We will never share your data with third parties. You can unsubscribe at any time",...t("optIn")})]})}),parameters:{docs:{description:{component:`This is the 'everything and the kitchen sink' form - every input
type in one form`}}}},i={args:x};var s,m,p;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const nr=["Default"];export{i as Default,nr as __namedExportsOrder,pr as default};
