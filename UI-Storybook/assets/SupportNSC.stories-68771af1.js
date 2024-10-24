var X=Object.defineProperty;var s=(e,r)=>X(e,"name",{value:r,configurable:!0});import{j as t}from"./jsx-runtime-1a1b98e7.js";import{y as Z,a4 as _}from"./index-3b0e1f90.js";import{I as y}from"./Icon.hoc-5c5e8f19.js";import{a as K,S as C}from"./Icon.constants-a768151c.js";import{r as c}from"./index-29d3bc65.js";import{B as G,h as J,f as Q}from"./Themed-14176c04.js";import"./ButtonGroup-3b1d1fdf.js";import"./WithDetailsAndRadioButton-3a8416f2.js";import{d as o}from"./styled-components.browser.esm-852d80e5.js";import{h as Y,D as k}from"./Dropdown-c8bc362d.js";import{C as B}from"./DropdownWithChevron-8757e554.js";import"./DropdownForCard-6832d1b4.js";import{t as i,d as ee,m as te}from"./devices-1d39230d.js";import{h as ae}from"./colors-3e41a0f7.js";import"./Symbols.hoc-c2fda652.js";import"./index-f7d1b020.js";import"./_commonjsHelpers-f86d8be3.js";import"./themes-428ecd68.js";import"./boxShadows-395cc866.js";import"./palette-273fb38f.js";import"./base-c8d9f963.js";import"./breakPoints-89c7d41a.js";import"./fontWeights-1d7bfb43.js";import"./zIndex-c7e1b793.js";import"./index-08c90798.js";import"./Capsule-a3c39844.js";import"./mixins-cd1fe61f.js";const re="support-nsc-title",oe="support-nsc-link",ne="support-nsc-collapsed-content",ie="support-nsc-dropdown-tablet",pe="support-nsc-dropdown-mobile-open",se="support-nsc-dropdown-mobile-closed",R="Close",P="Read more",de=s(e=>r=>Y({onInteract:e,event:r}),"dropdownTriggerHandler"),h=o.div.withConfig({componentId:"sc-hez36s-0"})(["overflow:hidden;width:100%;box-sizing:border-box;margin-bottom:","px;@media ","{max-width:634px;}@media ","{max-width:622px;}"],({theme:e})=>e.spacing.x2,i,ee),S=o.div.withConfig({componentId:"sc-hez36s-1"})(["width:100%;box-sizing:border-box;padding:","px ","px ","px;border-top:8px solid ",";background-color:",";@media ","{padding-top:","px;padding-bottom:","px;}"],({theme:e,$isOpen:r})=>r?e.spacing.x2:e.spacing.x1,({theme:e})=>e.spacing.x1_5,({theme:e,$isOpen:r})=>r?e.spacing.x2:e.spacing.x1_5,({theme:e})=>e.color.actionBrand.base,({theme:e})=>e.color.canvas.brand,i,({theme:e})=>e.spacing.x0_5,({theme:e})=>e.spacing.x1_5),x=o.h3.withConfig({componentId:"sc-hez36s-2"})(["",";margin:0 0 ","px;text-align:center;@media ","{",";margin-bottom:","px;text-align:left;}"],({theme:e})=>e.textStyle.supportNSC.titleMobile,({theme:e,$isOpen:r})=>r?e.spacing.x1:e.spacing.x1_5,i,({theme:e})=>e.textStyle.supportNSC.titleTablet,({theme:e})=>e.spacing.x1_5),T=o(k).withConfig({componentId:"sc-hez36s-3"})(["display:block;margin-bottom:","px;@media ","{display:none;}"],({theme:e,isOpen:r})=>r?e.spacing.x1_5:0,i),N=o.button.withConfig({componentId:"sc-hez36s-4"})(["display:flex;width:100%;box-sizing:border-box;align-items:center;justify-content:center;gap:","px;background-color:",";color:",";@media ","{width:auto;justify-content:flex-start;}"],({theme:e})=>e.spacing.x0_5,({theme:e})=>e.color.canvas.brand,({theme:e})=>e.color.actionBrand.base,i),m=o.span.withConfig({componentId:"sc-hez36s-5"})(["display:block;",";margin-block:0;text-align:center;"],({theme:e})=>e.textStyle.supportNSC.dropdown),b=o.span.withConfig({componentId:"sc-hez36s-6"})(["display:inline-flex;align-items:center;justify-content:center;gap:","px;&:hover ",",&:hover ","{color:",";}"],({theme:e})=>e.spacing.x0_5,m,B,({theme:e})=>e.color.actionBrand.alt),w=o.p.withConfig({componentId:"sc-hez36s-7"})(["",";margin-block:0;"],({theme:e})=>e.textStyle.supportNSC.copy.font),v=o.div.withConfig({componentId:"sc-hez36s-8"})(["display:flex;width:100%;flex-direction:column;@media ","{display:flow-root;gap:","px;transition:margin-bottom 0.3s ease-in-out;}"],i,({theme:e})=>e.spacing.x3),I=o.div.withConfig({componentId:"sc-hez36s-9"})(["display:flex;width:100%;flex-direction:column;align-items:center;justify-content:center;@media ","{width:212px;flex-shrink:0;justify-content:flex-start;margin-left:","px;float:right;}"],i,({theme:e})=>e.spacing.x3),D=o.div.withConfig({componentId:"sc-hez36s-10"})(["display:none;flex-direction:row;align-items:center;justify-content:center;gap:","px;margin-top:","px;@media ","{display:flex;margin-top:","px;}"],({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x1,i,({theme:e})=>e.spacing.x1_5),q=o.div.withConfig({componentId:"sc-hez36s-11"})(["display:flex;width:100%;align-items:center;justify-content:center;gap:","px;margin-top:","px;margin-bottom:","px;@media ","{display:none;}"],({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x1_5,i),V=o.div.withConfig({componentId:"sc-hez36s-12"})(["display:flex;overflow:hidden;height:","px;flex-direction:column;gap:","px;opacity:",";transition:all 0.3s ease-in-out;@media ","{display:",";position:relative;width:auto;height:","px;order:-1;opacity:1;transition-behavior:allow-discrete;&::after{--fade-from:",";--fade-to:",";position:absolute;bottom:0;left:0;z-index:1;width:100%;height:","px;background-image:linear-gradient( to bottom,var(--fade-from),var(--fade-to) );content:'';opacity:",";transition:opacity ",";}}"],({$isOpen:e,$height:r})=>e?r:0,({theme:e})=>e.spacing.x1,({$isOpen:e})=>e?1:0,i,({$isOpen:e})=>e?"inline":"flex",({$isOpen:e,$height:r,theme:a})=>e?r:a.textStyle.supportNSC.copy.lineHeight*2,({theme:e})=>ae(e.color.canvas.brand,0),({theme:e})=>e.color.canvas.brand,({theme:e})=>e.textStyle.supportNSC.copy.lineHeight*2,({$isOpen:e})=>e?0:1,({theme:e})=>e.transition.base),A=o.div.withConfig({componentId:"sc-hez36s-13"})(["@media ","{order:-1;}"],i),d=s(({isOpen:e,copy:r,className:a,testId:p,onInteract:n})=>t.jsx(N,{className:a,onKeyDown:de(n),children:t.jsxs(b,{"data-testid":p,onClick:n,children:[t.jsx(m,{children:r}),t.jsx(B,{svg:Z,size:K,$isOpen:e})]})}),"DropdownTrigger"),W=o(d).withConfig({componentId:"sc-hez36s-14"})(["display:none;padding-top:","px;margin-top:","px;border-top:1px solid ",";@media ","{display:flex;}"],({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x2,({theme:e})=>e.color.divider.dark,te),O=o(d).withConfig({componentId:"sc-hez36s-15"})(["display:none;@media ","{display:flex;position:relative;align-items:flex-start;margin-top:","px;}"],i,({theme:e})=>e.spacing.x1_5);try{W.displayName="CloseDropdownTriggerMobile",W.__docgenInfo={description:"",displayName:"CloseDropdownTriggerMobile",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{d.displayName="DropdownTrigger",d.__docgenInfo={description:"",displayName:"DropdownTrigger",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},copy:{defaultValue:null,description:"",name:"copy",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},onInteract:{defaultValue:null,description:"",name:"onInteract",required:!0,type:{name:"() => void"}}}}}catch{}try{I.displayName="SupportNSCCTAContainer",I.__docgenInfo={description:"",displayName:"SupportNSCCTAContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{q.displayName="SupportNSCCTAIconsContainerMobile",q.__docgenInfo={description:"",displayName:"SupportNSCCTAIconsContainerMobile",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{D.displayName="SupportNSCCTAIconsContainerTablet",D.__docgenInfo={description:"",displayName:"SupportNSCCTAIconsContainerTablet",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{V.displayName="SupportNSCCollapsibleContentContainer",V.__docgenInfo={description:"",displayName:"SupportNSCCollapsibleContentContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{A.displayName="SupportNSCCollapsibleContentWithTrigger",A.__docgenInfo={description:"",displayName:"SupportNSCCollapsibleContentWithTrigger",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{h.displayName="SupportNSCContainer",h.__docgenInfo={description:"",displayName:"SupportNSCContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{v.displayName="SupportNSCContentFlexContainer",v.__docgenInfo={description:"",displayName:"SupportNSCContentFlexContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{w.displayName="SupportNSCCopy",w.__docgenInfo={description:"",displayName:"SupportNSCCopy",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{N.displayName="SupportNSCDropdownContainer",N.__docgenInfo={description:"",displayName:"SupportNSCDropdownContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{b.displayName="SupportNSCDropdownContainerContent",b.__docgenInfo={description:"",displayName:"SupportNSCDropdownContainerContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{m.displayName="SupportNSCDropdownCopy",m.__docgenInfo={description:"",displayName:"SupportNSCDropdownCopy",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{S.displayName="SupportNSCMainContentContainer",S.__docgenInfo={description:"",displayName:"SupportNSCMainContentContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{T.displayName="SupportNSCReadMoreDropdown",T.__docgenInfo={description:"",displayName:"SupportNSCReadMoreDropdown",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{x.displayName="SupportNSCTitle",x.__docgenInfo={description:"",displayName:"SupportNSCTitle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{O.displayName="TabletDropdownTrigger",O.__docgenInfo={description:"",displayName:"TabletDropdownTrigger",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const j=s(({title:e,collapsedContent:r,link:a,icons:p})=>{const[n,f]=c.useState(!1),[$,F]=c.useState(0),E=c.useRef(null),g=s(()=>{var l;F(((l=E.current)==null?void 0:l.clientHeight)??0)},"updateCollapsibleContentHeight");return c.useEffect(()=>(g(),window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g)}),[]),t.jsx(h,{children:t.jsxs(S,{$isOpen:n,children:[e&&t.jsx(x,{"data-testid":re,$isOpen:n,children:e}),t.jsxs(v,{children:[t.jsx(T,{isOpen:!n,children:t.jsx(d,{isOpen:n,onInteract:()=>f(!0),copy:P,testId:se})}),a&&t.jsxs(I,{children:[t.jsx(G,{size:J,as:Q,href:a==null?void 0:a.url,"data-testid":oe,onClick:a!=null&&a.trackingCallback?l=>{var z;return(z=a==null?void 0:a.trackingCallback)==null?void 0:z.call(a,l,{url:a==null?void 0:a.url,copy:a==null?void 0:a.copy})}:void 0,children:a==null?void 0:a.copy}),p&&t.jsx(D,{children:p})]}),t.jsxs(A,{children:[t.jsx(V,{$isOpen:n,$height:$,children:t.jsxs("div",{ref:E,children:[p&&t.jsx(q,{children:p}),r&&t.jsx(w,{"data-testid":ne,children:r}),t.jsx(W,{isOpen:n,onInteract:()=>f(!1),copy:R,testId:pe})]})}),t.jsx(O,{isOpen:n,copy:n?R:P,testId:ie,onInteract:()=>f(!n)})]})]})]})})},"SupportNSC"),H=j;try{j.displayName="SupportNSC",j.__docgenInfo={description:"",displayName:"SupportNSC",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},collapsedContent:{defaultValue:null,description:"",name:"collapsedContent",required:!1,type:{name:"ReactNode"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"{ url: string; copy: string; trackingCallback?: ((evt: MouseEvent<HTMLAnchorElement, MouseEvent>, trackingData: { url: string; copy: string; }) => void); }"}},icons:{defaultValue:null,description:"",name:"icons",required:!1,type:{name:"ReactNode"}}}}}catch{}const le=`
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`,ce={title:"Support NSC",collapsedContent:le,link:{url:"#",copy:"Support CTA"},author:{name:"Author Name",copy:"Author Copy",imageUrl:""},icons:t.jsxs(t.Fragment,{children:[t.jsx(y,{svg:_,size:C}),t.jsx(y,{svg:_,size:C}),t.jsx(y,{svg:_,size:C})]})},Le={title:"Components/Support NSC",component:H,argTypes:{title:{description:"The title to display",control:{type:"text"}},collapsedContent:{description:"The content to display when the component is opened",control:{type:"text"}},link:{description:"The link to display",control:{type:"object"}},author:{description:"The author to display",control:{type:"object"}},icons:{description:"The icons to display",control:!1}}},u={args:ce,render:e=>t.jsx(H,{...e})};var M,L,U;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: defaultArgs,
  render: (args: SupportNSCProps) => <SupportNSC {...args} />
}`,...(U=(L=u.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};const Ue=["Default"];export{u as Default,Ue as __namedExportsOrder,Le as default};
