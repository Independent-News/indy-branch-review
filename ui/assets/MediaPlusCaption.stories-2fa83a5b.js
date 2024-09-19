var E=Object.defineProperty;var c=(e,T)=>E(e,"name",{value:T,configurable:!0});import{j as r}from"./jsx-runtime-1a1b98e7.js";import{d as _}from"./styled-components.browser.esm-852d80e5.js";import{I as k}from"./Image-d40681c5.js";import{M as O,a as R,b as q,c as z,d as B}from"./MediaPlusCaption-4dceb0c7.js";import"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";import"./devices-1d39230d.js";import"./breakPoints-89c7d41a.js";const D=c(()=>null,"MediaPlusCaption"),t=_(k).withConfig({componentId:"sc-9pjvcr-0"})(["display:block;aspect-ratio:3 / 2;object-fit:cover;"]),n={caption:"Image caption"},X={title:"Components/Media Plus Caption",component:D},i={args:n,render:e=>r.jsx(O,{...e,children:r.jsx(t,{})})},d={args:n,render:e=>r.jsx(R,{...e,children:r.jsx(t,{})})},a={args:n,render:e=>r.jsx(q,{...e,children:r.jsx(t,{})})},s={args:n,render:e=>r.jsx(z,{...e,children:r.jsx(t,{})})},o={args:n,render:e=>r.jsx(B,{...e,children:r.jsx(t,{})})};var l,p,m;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: defaultArgs,
  render: args => <MediaPlusFlushCaption {...args}>
      <StyledImage />
    </MediaPlusFlushCaption>
}`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,h;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: defaultArgs,
  render: args => <MediaPlusPaddedCaption {...args}>
      <StyledImage />
    </MediaPlusPaddedCaption>
}`,...(h=(g=d.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var P,f,x,F,C;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: defaultArgs,
  render: args => <MediaPlusCaptionForHero {...args}>
      <StyledImage />
    </MediaPlusCaptionForHero>
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:`This variant is for hero caption e.g. in an article header
where video spans the full width of the screen on mobile and tablet devices`,...(C=(F=a.parameters)==null?void 0:F.docs)==null?void 0:C.description}}};var M,S,j,y,I;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: defaultArgs,
  render: args => <MediaPlusCaptionForParallax {...args}>
      <StyledImage />
    </MediaPlusCaptionForParallax>
}`,...(j=(S=s.parameters)==null?void 0:S.docs)==null?void 0:j.source},description:{story:`This variant is for caption e.g. in an article header for signed in subscribers
where the hero image is parallaxed`,...(I=(y=s.parameters)==null?void 0:y.docs)==null?void 0:I.description}}};var b,v,w,A,H;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: defaultArgs,
  render: args => <MediaPlusCaptionForSlider {...args}>
      <StyledImage />
    </MediaPlusCaptionForSlider>
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source},description:{story:`This variant is for use wherever a ref needs attaching to the caption e.g. in
a slider where the height of the caption needs to be controlled`,...(H=(A=o.parameters)==null?void 0:A.docs)==null?void 0:H.description}}};const Y=["Flush","Padded","ForHero","ForParallax","ForSlider"];export{i as Flush,a as ForHero,s as ForParallax,o as ForSlider,d as Padded,Y as __namedExportsOrder,X as default};
