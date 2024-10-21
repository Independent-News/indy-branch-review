import{j as e}from"./jsx-runtime-1a1b98e7.js";import{F as h}from"./FocusReturn-8f91d071.js";import{P as g}from"./Overlay-f3b15a72.js";import{l as y}from"./loremIpsum-002ec660.js";import{M as E,a as P,S as x}from"./SuccessConfirmationModal-a8989ff6.js";import"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";import"./index-08c90798.js";import"./styled-components.browser.esm-852d80e5.js";import"./inheritsLoose-289c47e1.js";const B={title:"Scaffolding/Modal",component:E,tags:["storyshot:skip"],argTypes:{isHidden:{description:"Whether the overlay is hidden or not",control:{type:"boolean"}},children:{description:"Content of the overlay",options:["Text","Single Element","Multiple Elements"],mapping:{Text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repellat doloremque architecto sit neque? Similique, officia nisi.","Single Element":e.jsx("p",{children:"Single Element"}),"Multiple Elements":[e.jsx("p",{children:"Single Element"},1),e.jsx("p",{children:"Single Element"},2)]}},className:{description:"Additional class names to add to the component",control:{type:"text"}},returnFocus:{description:"Element to return focus to once overlay is hidden",control:{type:"text"}},onBackgroundClick:{description:"Function to run when the background is clicked",control:{type:"function"}}},decorators:[g,h]},f={children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repellat doloremque architecto sit neque? Similique, officia nisi.",isHidden:!1,returnFocus:'[name="returnFocus"]'},S={...f,onEscapeKeyPress:()=>{}},o={args:f},r={args:S,render:t=>e.jsx(P,{...t})},s={args:S,decorators:[g,y(24)],render:t=>e.jsx(x,{...t})};var i,n,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var c,l,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: onEscapeKeyPressArgs,
  render: (args: PageSpecificProps) => <ModalPageSpecific {...args} />
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,m,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: onEscapeKeyPressArgs,
  decorators: [PreventBodyLock, loremIpsum(24)],
  render: (args: SuccessConfirmationModalProps) => <SuccessConfirmationModal {...args} />
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const T=["Default","PageSpecific","SuccessConfirmation"];export{o as Default,r as PageSpecific,s as SuccessConfirmation,T as __namedExportsOrder,B as default};
