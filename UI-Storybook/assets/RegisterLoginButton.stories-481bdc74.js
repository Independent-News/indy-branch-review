import{j as e}from"./jsx-runtime-1a1b98e7.js";import{R as B,C as a}from"./RegisterLoginButton-c5cfa879.js";import"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";import"./styled-components.browser.esm-852d80e5.js";import"./themes-ebe3f0f9.js";import"./boxShadows-205bfb10.js";import"./palette-ce42e738.js";import"./colors-3e41a0f7.js";import"./base-c8d9f963.js";import"./Icon.constants-a768151c.js";import"./breakPoints-89c7d41a.js";import"./fontWeights-1d7bfb43.js";import"./devices-1d39230d.js";import"./zIndex-6061405c.js";import"./index-3b0e1f90.js";import"./Icon.hoc-5c5e8f19.js";import"./Symbols.hoc-c2fda652.js";import"./index-f7d1b020.js";import"./mixins-cd1fe61f.js";const Z={title:"Modules/Header/Register Login Button",component:B,argTypes:{cta:{control:!1}},decorators:[o=>e.jsx("div",{style:{maxWidth:"280px"},children:e.jsx(o,{})})]},n={args:{children:"Login / Register",href:"https://independent.co.uk/login"}},r={args:{children:"A. Taylor",status:"Registered Account",href:"https://independent.co.uk/login",isRegistered:!0,cta:e.jsx(a,{href:"#",children:"Subscribe"})}},t={args:{children:"A. Taylor",status:"Registered Account",href:"https://independent.co.uk/login",isRegistered:!0,cta:e.jsx(a,{href:"#",children:"Subscribe"})}},s={args:{children:"A. Taylor",status:"Subscriber",href:"https://independent.co.uk/login",isSubscriber:!0,cta:e.jsx(a,{href:"#",children:"Premium"})}},i={args:{children:"A. Taylor",status:"Registered Account",href:"https://independent.co.uk/login",isRegistered:!0},decorators:[o=>e.jsx("div",{style:{height:"100px",width:"100px"},children:e.jsx(o,{})})]};var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Login / Register',
    href: 'https://independent.co.uk/login'
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,h,l,g,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'A. Taylor',
    status: 'Registered Account',
    href: 'https://independent.co.uk/login',
    isRegistered: true,
    cta: <CTA href="#">Subscribe</CTA>
  }
}`,...(l=(h=r.parameters)==null?void 0:h.docs)==null?void 0:l.source},description:{story:'When a user is "registered" or a "subscriber" then an optional `<CTA />` can\nbe displayed.',...(m=(g=r.parameters)==null?void 0:g.docs)==null?void 0:m.description}}};var b,f,A,y,R;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'A. Taylor',
    status: 'Registered Account',
    href: 'https://independent.co.uk/login',
    isRegistered: true,
    cta: <CTA href="#">Subscribe</CTA>
  }
}`,...(A=(f=t.parameters)==null?void 0:f.docs)==null?void 0:A.source},description:{story:`When a user is "registered", their status can be displayed alongside their
name.`,...(R=(y=t.parameters)==null?void 0:y.docs)==null?void 0:R.description}}};var T,x,S,C,k;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'A. Taylor',
    status: 'Subscriber',
    href: 'https://independent.co.uk/login',
    isSubscriber: true,
    cta: <CTA href="#">Premium</CTA>
  }
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source},description:{story:'When a user is a "subscriber", the button will be styled differently.',...(k=(C=s.parameters)==null?void 0:C.docs)==null?void 0:k.description}}};var j,w,v,W,L;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'A. Taylor',
    status: 'Registered Account',
    href: 'https://independent.co.uk/login',
    isRegistered: true
  },
  decorators: [(Story: FC) => <div style={{
    height: '100px',
    width: '100px'
  }}>
        <Story />
      </div>]
}`,...(v=(w=i.parameters)==null?void 0:w.docs)==null?void 0:v.source},description:{story:`The button will grow to fit the height of whatever it is that it is placed
in. Copy within the button will be truncated when there is not enough space.`,...(L=(W=i.parameters)==null?void 0:W.docs)==null?void 0:L.description}}};const $=["Default","WithCTA","RegisteredUser","Subscriber","Responsive"];export{n as Default,t as RegisteredUser,i as Responsive,s as Subscriber,r as WithCTA,$ as __namedExportsOrder,Z as default};
