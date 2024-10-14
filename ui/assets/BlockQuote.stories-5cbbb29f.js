var p=Object.defineProperty;var n=(e,a)=>p(e,"name",{value:a,configurable:!0});import{j as t}from"./jsx-runtime-1a1b98e7.js";import{d as r}from"./styled-components.browser.esm-852d80e5.js";import{t as d,l as m}from"./devices-1d39230d.js";import{S as x}from"./quote-b36836e3.js";import"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";import"./breakPoints-89c7d41a.js";const f=r.div.withConfig({componentId:"sc-1j96ul4-0"})(["display:flex;flex-direction:column;gap:","px;text-align:center;"],({theme:e})=>e.spacing.x2),g=r(x).withConfig({componentId:"sc-1j96ul4-1"})(["height:54px;color:",";"],({theme:e})=>e.color.veil.base),h=r.div.withConfig({componentId:"sc-1j96ul4-2"})(["blockquote,p{padding:0;margin:0;",";@media ","{",";}@media ","{",";}}"],({theme:e})=>e.textStyle.blockQuote.quoteText.mobile,d,({theme:e})=>e.textStyle.blockQuote.quoteText.tablet,m,({theme:e})=>e.textStyle.blockQuote.quoteText.laptop),b=r.div.withConfig({componentId:"sc-1j96ul4-3"})(["font:",";"],({theme:e})=>e.textStyle.blockQuote.citation),i=n(({className:e,cite:a,children:u})=>t.jsxs(f,{className:e,children:[t.jsx(g,{}),t.jsx(h,{children:u}),t.jsx(b,{children:a})]}),"BlockQuote");try{i.displayName="BlockQuote",i.__docgenInfo={description:"The `<BlockQuote />` component displays a quote with a citation. Any children\nwill be rendered as the quote.",displayName:"BlockQuote",props:{cite:{defaultValue:null,description:"",name:"cite",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const S={title:"Components/Block Quote",component:i,argTypes:{children:{table:{disable:!0}}}},o={args:{cite:"A famous chap",children:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Cillum aute voluptate irure velit labore laborum laborum est fugiat sint laborum."}),t.jsx("p",{children:"Deserunt exercitation est dolor excepteur culpa occaecat fugiat quis in reprehenderit esse dolor."})]})}};var l,s,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    cite: 'A famous chap',
    children: <>
        <p>
          Cillum aute voluptate irure velit labore laborum laborum est fugiat
          sint laborum.
        </p>
        <p>
          Deserunt exercitation est dolor excepteur culpa occaecat fugiat quis
          in reprehenderit esse dolor.
        </p>
      </>
  }
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const w=["Default"];export{o as Default,w as __namedExportsOrder,S as default};
