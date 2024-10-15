var l=Object.defineProperty;var n=(e,i)=>l(e,"name",{value:i,configurable:!0});import{j as r}from"./jsx-runtime-1a1b98e7.js";import{r as d}from"./index-29d3bc65.js";import{d as o}from"./styled-components.browser.esm-852d80e5.js";import{B as f}from"./Themed-8898d0ee.js";import{S as p}from"./ScreenReaderOnly-bf6dac32.js";import"./_commonjsHelpers-f86d8be3.js";import"./themes-ec33fe04.js";import"./boxShadows-7f4411eb.js";import"./palette-273fb38f.js";import"./colors-3e41a0f7.js";import"./base-c8d9f963.js";import"./Icon.constants-a768151c.js";import"./breakPoints-89c7d41a.js";import"./fontWeights-1d7bfb43.js";import"./devices-1d39230d.js";import"./zIndex-6061405c.js";import"./index-08c90798.js";import"./index-3b0e1f90.js";import"./Icon.hoc-5c5e8f19.js";import"./Symbols.hoc-c2fda652.js";import"./index-f7d1b020.js";import"./mixins-cd1fe61f.js";const x=o.div.withConfig({componentId:"sc-vzcfca-0"})(["display:flex;flex-direction:column;align-items:center;"]),u=o(f).attrs({size:"large"}).withConfig({componentId:"sc-vzcfca-1"})(["margin-bottom:20px;"]),g=o.p.withConfig({componentId:"sc-vzcfca-2"})([""]),V=o(p).attrs({as:"p"}).withConfig({componentId:"sc-vzcfca-3"})([""]),G={title:"Elements/Screen Reader Only",component:p},t=n(()=>{const[e,i]=d.useState(!1),m=e?g:V;return r.jsxs(x,{children:[r.jsx(u,{onClick:()=>i(!e),children:e?"Hide content":"Show content"}),r.jsx(m,{children:"Visually hidden content"})]})},"Default");var s,c,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [isVisible, setIsVisible] = useState(false);
  const Text = isVisible ? VisibleText : ScreenReaderOnlyText;
  return <Wrapper>
      <Toggle onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide content' : 'Show content'}
      </Toggle>
      <Text>Visually hidden content</Text>
    </Wrapper>;
}`,...(a=(c=t.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const J=["Default"];export{t as Default,J as __namedExportsOrder,G as default};
