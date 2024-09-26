import{j as I}from"./jsx-runtime-1a1b98e7.js";import{Q as l}from"./index-58d5119c.js";import{I as g,w as C}from"./Icon.hoc-5c5e8f19.js";import{a as f,S as h,b as O,c as E}from"./Icon.constants-a768151c.js";import"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";import"./styled-components.browser.esm-852d80e5.js";import"./Symbols.hoc-c2fda652.js";import"./index-f7d1b020.js";const u={svg:l},j={title:"Elements/Icon",component:g,argTypes:{size:{control:"radio",options:[f,h,O,E]}}},r={args:u,parameters:{docs:{source:{code:`
          import { SunCreamOutline24 } from '@indy/icons'

          return <Icon svg={SunCreamOutline24} />;
        `}}}},n={args:u,parameters:{docs:{source:{code:`
          import { SunCreamOutline24 } from '@indy/icons'

          const SunCreamIcon = withIcon(SunCreamOutline24);

          return <SunCreamIcon size="large" />;
        `}}},render:({svg:p,size:d})=>{const S=C(p);return I.jsx(S,{size:d})}};var e,o,s;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: defaultArgs,
  parameters: {
    docs: {
      source: {
        code: \`
          import { SunCreamOutline24 } from '@indy/icons'

          return <Icon svg={SunCreamOutline24} />;
        \`
      }
    }
  }
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var t,a,c,i,m;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: defaultArgs,
  parameters: {
    docs: {
      source: {
        code: \`
          import { SunCreamOutline24 } from '@indy/icons'

          const SunCreamIcon = withIcon(SunCreamOutline24);

          return <SunCreamIcon size="large" />;
        \`
      }
    }
  },
  render: ({
    svg,
    size
  }) => {
    const SunCreamIcon = withIcon(svg);
    return <SunCreamIcon size={size} />;
  }
}`,...(c=(a=n.parameters)==null?void 0:a.docs)==null?void 0:c.source},description:{story:"There is also a higher-order component (HOC) for use with the Icon component",...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.description}}};const D=["Default","WithIcon"];export{r as Default,n as WithIcon,D as __namedExportsOrder,j as default};
