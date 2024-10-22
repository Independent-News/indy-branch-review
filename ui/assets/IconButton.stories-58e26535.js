import{j as r}from"./jsx-runtime-1a1b98e7.js";import{Q as h,c as f,j as x}from"./index-9c2b6667.js";import"./Icon.hoc-5c5e8f19.js";import{b as y,S}from"./Icon.constants-a768151c.js";import{I as o}from"./IconButton-ae2e48c7.js";import"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";import"./styled-components.browser.esm-852d80e5.js";import"./Symbols.hoc-c2fda652.js";import"./index-f7d1b020.js";const v={small:h,base:f,large:x},k={title:"Elements/Icon Button",component:o,render:({size:e=y,...g})=>r.jsx(o,{...g,svg:v[e],size:e})},u={size:S,title:"Next"},t={args:u},s={args:{...u,isCosy:!0},decorators:[e=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx("span",{children:"This is some text"}),r.jsx(e,{})]})]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,m,p,l,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    isCosy: true
  },
  decorators: [Story => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }}>
        <span>This is some text</span>
        <Story />
      </div>]
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:`Uses the real-estate of the the icon within while providing the minimum click
area for accessibility.

Be careful when using this as it has negative margins which can cause the
click areas to overlap.

This is best understood with 'outlines' turned on.`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.description}}};const D=["Default","Cosy"];export{s as Cosy,t as Default,D as __namedExportsOrder,k as default};
