var v=Object.defineProperty;var d=(e,o)=>v(e,"name",{value:o,configurable:!0});import{j as t}from"./jsx-runtime-1a1b98e7.js";import{c as h}from"./index-08c90798.js";import{r as y}from"./index-29d3bc65.js";import{d as a}from"./styled-components.browser.esm-852d80e5.js";import{c as C,B as S}from"./Themed-25447210.js";import{S as _}from"./StepCard-c643d39c.js";import{t as r,l as k,a as I}from"./devices-1d39230d.js";const i="is-active",n=a.span.attrs({"aria-current":"step"}).withConfig({componentId:"sc-1ibkg6r-0"})(["display:block;margin-bottom:var(--spacing);color:",";font:bold 14px / var(--card-step-lh) ",";letter-spacing:2px;text-transform:uppercase;."," &{color:",";}@media ","{font-size:16px;line-height:20px;}@media ","{font-size:18px;line-height:22px;}"],({theme:e})=>e.color.ink.muted,({theme:e})=>e.fontFamily.secondaryFont,i,({theme:e})=>e.color.ink.base,r,k),p=a.h2.withConfig({componentId:"sc-1ibkg6r-1"})(["margin:0 0 var(--spacing);font:bold 20px/24px ",";@media ","{font-size:22px;line-height:26px;}"],({theme:e})=>e.fontFamily.secondaryFont,r),w=a(_).withConfig({componentId:"sc-1ibkg6r-2"})(["--active-border-color:",";--active-border:2px solid var(--active-border-color);--box-shadow:0px -4px 18px 0px ",";position:relative;pointer-events:none;transition:max-height var( --card-transition,"," );",",","{opacity:0;}&.","{border-top:var(--active-border);box-shadow:var(--box-shadow);pointer-events:all;",",","{opacity:1;}@media ","{border-right:var(--active-border);border-left:var(--active-border);}}"],({theme:e})=>e.color.primary.base,({theme:e})=>e.color.shadow.dark,({theme:e})=>e.transition.onboardingJourneyWrapper,p,n,i,p,n,r),T=a.div.withConfig({componentId:"sc-1ibkg6r-3"})(["padding:","px ","px ","px;@media ","{padding-right:","px;padding-left:","px;}"],({theme:e})=>e.spacing.x2,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.spacing.x3,I,({theme:e})=>e.spacing.x2,({theme:e})=>e.spacing.x2),j=a.div.withConfig({componentId:"sc-1ibkg6r-4"})(["--spacing:","px;margin-bottom:","px;text-align:center;"],({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x3+e.spacing.x0_5),A=a.p.withConfig({componentId:"sc-1ibkg6r-5"})(["margin:0;font:normal 16px/20px ",";"],({theme:e})=>e.fontFamily.secondaryFont),z=a(S).attrs({variant:C}).withConfig({componentId:"sc-1ibkg6r-6"})(["--top-padding:","px;display:block;position:absolute;top:calc( var(--card-top-padding,","px) - var( --top-padding ) );left:50%;color:",";pointer-events:all;text-transform:capitalize;transform:translateX(-50%);white-space:nowrap;&:hover{color:",";}."," &{display:none;}@media ","{margin-top:var(--additional-inactive-card-padding-y);}"],({theme:e})=>e.spacing.x1_5,({theme:e})=>e.spacing.x2,({theme:e})=>e.color.primary.base,({theme:e})=>e.color.actionBrand.alt,i,r),l=y.forwardRef(d(function({goBackToPreviousStep:o,currentStep:s,title:m,description:c,children:g,className:x,isCardActive:u,...f},b){return t.jsx(w,{className:h(x,{[i]:u}),ref:b,...f,children:t.jsxs(T,{children:[o,t.jsxs(j,{children:[s&&t.jsx(n,{children:s}),t.jsx(p,{dangerouslySetInnerHTML:{__html:m}}),c&&t.jsx(A,{children:c})]}),g]})})},"MultiStepCard2"));try{l.displayName="MultiStepCard",l.__docgenInfo={description:"",displayName:"MultiStepCard",props:{currentStep:{defaultValue:null,description:"",name:"currentStep",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},goBackToPreviousStep:{defaultValue:null,description:"",name:"goBackToPreviousStep",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isCardActive:{defaultValue:null,description:"",name:"isCardActive",required:!1,type:{name:"boolean"}}}}}catch{}export{z as G,T as I,l as M,j as S,n as T,p as a};
