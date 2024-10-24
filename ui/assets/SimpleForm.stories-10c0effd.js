import{j as r}from"./jsx-runtime-1a1b98e7.js";import{F as p}from"./Form-c2b0a4a6.js";import{T as d,S as o}from"./TestableForm-9940f73f.js";import{T as n}from"./TextInput-64e27a40.js";import"./LegacyTextInput-118cf206.js";import{P as l}from"./PasswordInputWithValidationHints-345bd1bd.js";import{S as c}from"./SelectInput-1f2b9b63.js";import"./LegacySelectInput-544e388d.js";import{C as u}from"./Checkbox-dae4ec21.js";import"./CheckboxWithDropdown-dfc52f45.js";import"./RadioButton-f6ab6ee3.js";import"./ValidationHint-40c6c1db.js";import"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";import"./Input.styles-d7c02014.js";import"./styled-components.browser.esm-852d80e5.js";import"./Icon.hoc-5c5e8f19.js";import"./Icon.constants-a768151c.js";import"./Symbols.hoc-c2fda652.js";import"./index-f7d1b020.js";import"./Themed-b2849280.js";import"./themes-2bc8cc20.js";import"./boxShadows-395cc866.js";import"./palette-273fb38f.js";import"./colors-3e41a0f7.js";import"./base-c8d9f963.js";import"./breakPoints-89c7d41a.js";import"./fontWeights-1d7bfb43.js";import"./devices-1d39230d.js";import"./zIndex-6061405c.js";import"./index-08c90798.js";import"./index-3b0e1f90.js";import"./index.esm-13ba97b3.js";import"./LoadingEllipsis-dfc77cbe.js";import"./InputWrapper-1f184b9f.js";import"./useInputButton-c9dd920d.js";import"./LegacyInputWrapper-ee0a2bcc.js";import"./IconButton-ae2e48c7.js";import"./SelectInput.styles-bee92c9d.js";import"./ScreenReaderOnly-bf6dac32.js";import"./mixins-cd1fe61f.js";import"./Dropdown-c8bc362d.js";import"./DropdownWithChevron-8757e554.js";import"./DropdownForCard-6832d1b4.js";const h={onSubmit:i=>alert(`Submitted: ${JSON.stringify(i)}`),schema:new o({email:o.add("Email address").string().isEmail().required(),password:o.add("Password").string().hasMin(1,"digits").hasMin(6,"letters").required(),birthYear:o.add("Birth year").number().required(),terms:o.add("Privacy opt in").boolean().required()})},mr={title:"Modules/Form",component:p,render:i=>r.jsx(d,{...i,children:({registerControlledInput:t})=>r.jsxs(r.Fragment,{children:[r.jsx(n,{type:"email",label:"Email address",helpText:"Add an email address",...t("email")}),r.jsx(l,{label:"Password",helpText:"Make it a good one",...t("password")}),r.jsx(c,{label:"Birth year",options:[{value:"1970",label:"1970"},{value:"1980",label:"1980"},{value:"1990",label:"1990"}],...t("birthYear")}),r.jsx(u,{label:"I accept the terms and conditions",...t("terms")})]})}),parameters:{docs:{description:{component:`This is a simple form, composed of the following components
and making use of the useIndyForm hook:
FormProvider, Form, TextInput, PasswordInput, SelectInput, Checkbox`}}}},e={args:h};var m,a,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const ar=["Default"];export{e as Default,ar as __namedExportsOrder,mr as default};
