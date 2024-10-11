var D=Object.defineProperty;var r=(e,o)=>D(e,"name",{value:o,configurable:!0});import{d as h,G as M,f as l,h as x,i as c,j as v,c as A,D as G,M as $}from"./Grid.constants-81b9ad1f.js";import{b as d,t as N}from"./themes-ebe3f0f9.js";import{m as U,t as z,l as H,d as L}from"./viewports-741975bd.js";import{j as t}from"./jsx-runtime-1a1b98e7.js";import{f as u,l as S,d as p,o as T}from"./styled-components.browser.esm-852d80e5.js";import{a as B}from"./Symbols.hoc-c2fda652.js";import{e as V,U as K}from"./chunk-HLWAVYOI-df0284dd.js";import{D as W}from"./DarkThemeProvider-dfae648b.js";import{i as E}from"./fontFace-4f1675a0.js";import{R as m}from"./index-29d3bc65.js";import"./breakPoints-89c7d41a.js";import"./devices-1d39230d.js";import"./boxShadows-205bfb10.js";import"./palette-ce42e738.js";import"./colors-3e41a0f7.js";import"./base-c8d9f963.js";import"./Icon.constants-a768151c.js";import"./fontWeights-1d7bfb43.js";import"./zIndex-6061405c.js";import"./_commonjsHelpers-f86d8be3.js";import"./index-f7d1b020.js";import"./iframe-2327bff3.js";import"../sb-preview/runtime.js";import"./react-18-d0e6e771.js";import"./index-1aad7d92.js";import"./inheritsLoose-289c47e1.js";import"./index-2a059c61.js";import"./index-32ac9e7b.js";const Y=u([":root{",":","px;",":",";",":",";",":calc(var(",") / var(","));","}"],h,M,l,x.mobile,c,v.mobile,A,c,l,()=>G.map(e=>{const o=$[e],n=v[e],a=x[e];return S(["@media ","{",":",";",":",";}"],o,l,a,c,typeof n=="number"?`${n}px`:n)})),Z=r(e=>t.jsxs(t.Fragment,{children:[t.jsx(Y,{}),t.jsx(e,{})]}),"withGrid"),_=r(e=>t.jsxs(t.Fragment,{children:[t.jsx(e,{}),t.jsx(B,{})]}),"withIcons");_.__docgenInfo={description:"Adds icon symbols to stories",methods:[],displayName:"withIcons"};const w=S(["body{padding:0;margin:0;color:",";font-family:",";-webkit-font-smoothing:antialiased;line-height:1.2;-webkit-print-color-adjust:exact;scroll-padding-top:300px;}h1,h2{font-weight:bold;letter-spacing:0.22px;line-height:normal;}h3{line-height:21px;}p,li{font-size:19px;line-height:1.44em;}a{color:",";text-decoration:none;&:hover{color:",";}}button{overflow:visible;width:auto;padding:0;margin:0;border:none;appearance:none;background:transparent;color:inherit;cursor:pointer;font:inherit;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;line-height:normal;&::-moz-focus-inner{padding:0;border:0;}}html.freeze-body body{overflow:hidden !important;}[hidden]{display:none !important;}"],e=>e.theme.color.ink.base,e=>e.theme.fontFamily.primaryFont,e=>e.theme.color.actionBrand.base,e=>e.theme.color.actionBrand.alt),q=p.header.withConfig({componentId:"sc-oezetd-0"})(["padding:3rem 0;margin:0 0 2rem;border-radius:1rem 1rem 0 0;background:",";color:",";font:bold 4rem/1 ",";line-height:1;text-align:center;"],({theme:e})=>e.color.canvas.base,({theme:e})=>e.color.ink.base,({theme:e})=>e.fontFamily.primaryFont);p.section.withConfig({componentId:"sc-oezetd-1"})(["padding:2rem;margin-bottom:64px;border-radius:0.25rem;background-color:",";"],({theme:e})=>e.color.canvas.secondary);p.h1.withConfig({componentId:"sc-oezetd-2"})(["font:normal 32px/34px ",";text-transform:uppercase;"],({theme:e})=>e.fontFamily.secondaryFont);const J=u`
  ${E}
  ${w}
`,X=p.main.withConfig({componentId:"sc-gkr6hy-0"})(["body{font:normal 1rem/1.2rem ",";}.sbdocs-title{font:bold 2.75rem/3rem ",";}> div,> p{&:not([class]){&,p{font:normal 1rem/1.25rem ",";}}}"],({theme:e})=>e.fontFamily.secondaryFont,({theme:e})=>e.fontFamily.primaryFont,({theme:e})=>e.fontFamily.secondaryFont),F=r(({children:e,context:o})=>{var i,s;const n=o.attachedCSFFile.meta.title.split("/").slice(-1),a=(s=(i=o.attachedCSFFile.meta)==null?void 0:i.tags)==null?void 0:s.includes("stories-mdx");return t.jsx(V,{context:o,children:t.jsxs(T,{theme:d,children:[t.jsx(J,{}),t.jsxs(K,{children:[a&&t.jsx(W,{children:t.jsx(q,{children:n})}),t.jsx(X,{children:e})]})]})})},"withPreviewStyles"),Q=F;F.__docgenInfo={description:`Adds styles to preview manager

Be careful, any styles added here will also impact the components within the
Stories. This is because the preview manager is a wrapper around the stories.

Until a better solution is found ensure to properly scope these styles.`,methods:[],displayName:"withPreviewStyles"};const ee="storyshots-root",oe=r(e=>t.jsx("div",{id:ee,children:t.jsx(e,{})}),"withStoryshots"),{useParameter:te,addons:re,useEffect:Ve,useMemo:ne}=__STORYBOOK_MODULE_PREVIEW_API__;var ae=Object.defineProperty,ie=r((e,o)=>{for(var n in o)ae(e,n,{get:o[n],enumerable:!0})},"__export"),se={};ie(se,{initializeThemeState:()=>C,pluckThemeFromContext:()=>j,useThemeParameters:()=>R});var I="themes",me=`storybook/${I}}`,le="theme",ce={},de={REGISTER_THEMES:`${me}/REGISTER_THEMES`};function j({globals:e}){return e[le]||""}r(j,"pluckThemeFromContext");function R(){return te(I,ce)}r(R,"useThemeParameters");function C(e,o){re.getChannel().emit(de.REGISTER_THEMES,{defaultTheme:o,themes:e})}r(C,"initializeThemeState");var pe=r(([e,o])=>o,"pluckThemeFromKeyPairTuple"),he=r(({Provider:e,GlobalStyles:o,defaultTheme:n,themes:a={}})=>{let i=Object.keys(a),s=n||i[0];return C(i,s),(f,k)=>{let{themeOverride:g}=R(),b=j(k),P=ne(()=>{let O=g||b||s,y=Object.entries(a);return y.length===1?pe(y[0]):a[O]},[a,b,g]);return e?m.createElement(e,{theme:P},o&&m.createElement(o,null),f()):m.createElement(m.Fragment,null,o&&m.createElement(o,null),f())}},"withThemeFromJSXProvider");const ue=u([""," "," body{background:",";}"],E,w,({theme:e})=>e.color.canvas.base),fe=he({themes:N,defaultTheme:"base",Provider:T,GlobalStyles:ue}),Ke=[oe,_,fe,Z],We={options:{storySort:{method:"alphabetical",order:["Introduction","Principles",["Palette","Colours","Typography","Text Styles","Iconography","Spacing","BoxShadows"],"Layout","Scaffolding","Elements","Components","Modules","Helpers"],locales:"en-GB"}},actions:{argTypesRegex:"^on[A-Z].*"},controls:{expanded:!1,sort:"requiredFirst",hideNoControlsWarning:!0,matchers:{color:/(background|color)$/i,date:/Date$/,bool:/^(is|has)[A-Z]+/}},viewport:{viewports:{mobile:U,tablet:z,laptop:H,desktop:L},defaultViewport:"desktop"},backgrounds:{default:"base",values:[{name:"base",value:d.color.canvas.base},{name:"secondary",value:d.color.canvas.secondary},{name:"video",value:d.color.canvas.video}],grid:{disable:!0}},docs:{container:e=>Q(e),source:{format:!0,language:"tsx"}},grid:{gridOn:!1,columns:`var(${l})`,gap:`var(${h})`,gutter:`var(${h})`,maxWidth:`var(${c})`}},Ye={children:{control:!1,if:{arg:"children",exists:!0}},svg:{description:"An SVG imported via an SVGR loader",control:!1,if:{arg:"svg",exists:!0}}};export{Ye as argTypes,Ke as decorators,We as parameters};
