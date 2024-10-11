import{j as a}from"./jsx-runtime-1a1b98e7.js";import{d as x}from"./styled-components.browser.esm-852d80e5.js";import{B as P,a as R,b as f,c as O,d as U,e as E,f as V,g as W,h as Y,t as C}from"./Themed-c744395a.js";import"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";import"./themes-ead5b4a7.js";import"./boxShadows-649f4f7e.js";import"./palette-cdb14916.js";import"./colors-3e41a0f7.js";import"./base-c8d9f963.js";import"./Icon.constants-a768151c.js";import"./breakPoints-89c7d41a.js";import"./fontWeights-1d7bfb43.js";import"./devices-1d39230d.js";import"./zIndex-6061405c.js";import"./index-08c90798.js";import"./index-3b0e1f90.js";import"./Icon.hoc-5c5e8f19.js";import"./Symbols.hoc-c2fda652.js";import"./index-f7d1b020.js";const j=x.div.withConfig({componentId:"sc-1iv3lm2-0"})(["display:flex;flex-wrap:wrap;gap:8px;"]),nt={title:"Elements/Button",component:P,argTypes:{props:{table:{disable:!0}},children:{description:"Content of the button",defaultValue:"Button",type:{name:"string",required:!0},control:{type:"text"}},variant:{description:"Style of the button",control:"radio",options:[R,f,O,U]},as:{description:"Base element of the button",control:"inline-radio",options:[E,V]},size:{description:"Whether the width is dictated by the content or full width",control:"inline-radio",options:[W,Y]},disabled:{description:"Whether or not the button is disabled",control:"boolean"},isExternal:{if:{arg:"as",neq:"button"},description:"Whether or not the button links to an external target",control:"boolean"},href:{if:{arg:"as",neq:"button"},description:"Whether or not the button links to an external target",control:"string"},type:{if:{arg:"as",eq:"button"},description:"Whether or not the button links to an external target",control:"radio",options:["button","submit","reset"]}}},r={args:{children:"Primary button",variant:R}},e={args:{children:"Secondary button",variant:f}},o={args:{children:"Tertiary button",variant:O}},n={args:{children:"Uncapitalised button",variant:U}},t={args:{children:"Themed button"},render:I=>a.jsx(j,{children:Object.values(C).map((S,v)=>a.jsx(S,{...I},v))})};var i,s,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Primary button',
    variant: BUTTON_VARIANT_PRIMARY
  }
}`,...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,d,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Secondary button',
    variant: BUTTON_VARIANT_SECONDARY
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,l,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Tertiary button',
    variant: BUTTON_VARIANT_TERTIARY
  }
}`,...(h=(l=o.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var T,b,A;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Uncapitalised button',
    variant: BUTTON_VARIANT_PRIMARY_UNCAP
  }
}`,...(A=(b=n.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var g,_,B,N,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Themed button'
  },
  render: (args: ButtonProps) => <Wrapper>
      {Object.values(themedButtons).map((ThemedButton, i: number) => <ThemedButton key={i} {...args} />)}
    </Wrapper>
}`,...(B=(_=t.parameters)==null?void 0:_.docs)==null?void 0:B.source},description:{story:`Assigns a predefined theme to a button that cannot be modified.
i.g. you may opt to use a premium-themed button within a base theme environment.`,...(y=(N=t.parameters)==null?void 0:N.docs)==null?void 0:y.description}}};const at=["Primary","Secondary","Tertiary","PrimaryUncapitalised","ThemedButton"];export{r as Primary,n as PrimaryUncapitalised,e as Secondary,o as Tertiary,t as ThemedButton,at as __namedExportsOrder,nt as default};
