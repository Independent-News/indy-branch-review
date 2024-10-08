var j=Object.defineProperty;var o=(e,s)=>j(e,"name",{value:s,configurable:!0});import{j as a}from"./jsx-runtime-1a1b98e7.js";import{d as r}from"./styled-components.browser.esm-852d80e5.js";import{c as C}from"./index-08c90798.js";import{r as h}from"./index-29d3bc65.js";import{s as w,P}from"./index-aefe2d3f.js";import{I as R}from"./Icon.hoc-5c5e8f19.js";import{t as W,l as z}from"./devices-1d39230d.js";import"./_commonjsHelpers-f86d8be3.js";import"./Icon.constants-a768151c.js";import"./Symbols.hoc-c2fda652.js";import"./index-f7d1b020.js";import"./breakPoints-89c7d41a.js";const T="is-active",u="info",t="success",n="error",L={[u]:void 0,[n]:w,[t]:P},k=r.header.attrs({role:"alert"}).withConfig({componentId:"sc-1strae-0"})(["--transition:300ms ease-in-out;--variant-color:",";display:flex;position:fixed;top:0;left:0;z-index:",";width:100%;min-height:56px;box-sizing:border-box;align-items:center;justify-content:flex-start;gap:10px;padding:","px ","px;border-bottom:4px solid var(--variant-color);background-color:",";box-shadow:0px 4px 4px ",";color:var(--variant-color);font:bold 16px/20px ",";opacity:0;transform:translateY(-100%);transition:transform var(--transition),opacity var(--transition);@media ","{justify-content:center;}@media ","{min-height:72px;font-size:20px;line-height:24px;}&.","{opacity:1;transform:translateY(0%);}"],({theme:e,$variant:s})=>e.color.semiotic[s],({theme:e})=>e.zIndex.header+1,({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.color.canvas.base,({theme:e})=>e.color.shadow.dark,({theme:e})=>e.fontFamily.secondaryFont,W,z,T),D=r(R).attrs(({$variant:e})=>({svg:L[e]})).withConfig({componentId:"sc-1strae-1"})(["flex-shrink:0;color:var(--variant-color);"]),g=o(({children:e,messageTimeout:s=8e3,className:M,variant:p=u,...q})=>{const[v,x]=h.useState(!1);return h.useEffect(()=>{x(!0);const V=setTimeout(()=>x(!1),s);return()=>clearTimeout(V)},[s]),a.jsxs(k,{...q,className:C(M,{[T]:v}),$variant:p,"aria-hidden":!v,children:[[n,t].includes(p)&&a.jsx(D,{$variant:p}),e]})},"MessageBannerBase"),m=o(({children:e,...s})=>a.jsx(g,{variant:n,...s,children:e}),"MessageBannerError"),d=o(({children:e,...s})=>a.jsx(g,{variant:t,...s,children:e}),"MessageBannerSuccess");try{MessageBanner.displayName="MessageBanner",MessageBanner.__docgenInfo={description:"",displayName:"MessageBanner",props:{messageTimeout:{defaultValue:{value:"8000"},description:"",name:"messageTimeout",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"info"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"error"'}]}}}}}catch{}try{m.displayName="MessageBannerError",m.__docgenInfo={description:"",displayName:"MessageBannerError",props:{messageTimeout:{defaultValue:{value:"8000"},description:"",name:"messageTimeout",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"info"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"error"'}]}}}}}catch{}try{d.displayName="MessageBannerSuccess",d.__docgenInfo={description:"",displayName:"MessageBannerSuccess",props:{messageTimeout:{defaultValue:{value:"8000"},description:"",name:"messageTimeout",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"info"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"error"'}]}}}}}catch{}const F=r(g).withConfig({componentId:"sc-1d0bai8-0"})(["position:static;"]),Y=r(d).withConfig({componentId:"sc-1d0bai8-1"})(["position:static;"]),O=r(m).withConfig({componentId:"sc-1d0bai8-2"})(["position:static;"]),oe={title:"Components/Message Banner",component:F,argTypes:{messageTimeout:{description:"Time in milliseconds before the banner disappears",control:{type:"number"}},children:{description:"Content of the banner",options:["Text","Single Element","Multiple Elements"],mapping:{Text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repellat doloremque architecto sit neque? Similique, officia nisi.","Single Element":a.jsx("p",{children:"Single Element"}),"Multiple Elements":[a.jsx("p",{children:"Single Element"},1),a.jsx("p",{children:"Single Element"},2)]}},className:{description:"Additional class names to add to the component",control:{type:"text"}},variant:{description:"Variant of the message banner",options:[t,n,u],control:{type:"select"}}}},f={children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repellat doloremque architecto sit neque? Similique, officia nisi."},U={...f,variant:t},$={...f,variant:n},i={args:f},c={args:U,render:e=>a.jsx(Y,{...e})},l={args:$,render:e=>a.jsx(O,{...e})};var y,_,S;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(S=(_=i.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var E,b,I;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: successArgs,
  render: (args: BaseProps) => <SuccessWithStaticPositioning {...args} />
}`,...(I=(b=c.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var A,B,N;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: errorArgs,
  render: (args: BaseProps) => <ErrorWithStaticPositioning {...args} />
}`,...(N=(B=l.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const ie=["Default","Success","Error"];export{i as Default,l as Error,c as Success,ie as __namedExportsOrder,oe as default};
