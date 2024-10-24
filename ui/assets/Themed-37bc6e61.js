var k=Object.defineProperty;var l=(e,a)=>k(e,"name",{value:a,configurable:!0});import{j as t}from"./jsx-runtime-1a1b98e7.js";import{l as n,d as f,o as U}from"./styled-components.browser.esm-852d80e5.js";import{t as C}from"./themes-62dd66f0.js";import{c as L}from"./index-08c90798.js";import{r as M}from"./index-29d3bc65.js";import{x as P}from"./index-3b0e1f90.js";import{I as Y}from"./Icon.hoc-5c5e8f19.js";import{S as z}from"./Icon.constants-a768151c.js";import{t as H}from"./devices-1d39230d.js";const fe="button",o="a",Z="small",ve="large",pe="submit",ye="reset",v="primary",$="secondary",D="tertiary",G="primary-uncap",F=n(["--primary-color:",";--hover-color:",";--disabled-color:",";display:inline-flex;width:",";height:","px;box-sizing:border-box;align-items:center;justify-content:center;gap:","px;padding:0 ","px;border-radius:","px;font:",";text-align:center;text-transform:uppercase;transition:background-color ",";white-space:nowrap;&.is-disabled,&:disabled{&,&:focus,&:hover,&:active{pointer-events:none;}}"],({theme:e})=>e.color.actionBrand.base,({theme:e})=>e.color.actionBrand.alt,({theme:e})=>e.color.actionBrand.disabled,({$size:e})=>e==="large"?"100%":"auto",({theme:e})=>e.dimension.btn.height,({theme:e})=>e.dimension.btn.iconSpacing,({theme:e})=>e.spacing.x2,({theme:e})=>e.dimension.btn.borderRadius,({theme:e})=>e.textStyle.button.base,({theme:e})=>e.transition.base),c=n(["--color:",";background-color:var(--primary-color);color:var(--color);&:focus,&:hover,&:active{background-color:var(--hover-color);color:var(--color);}&.is-disabled,&:disabled{&,&:focus,&:hover,&:active{background-color:var(--disabled-color);}}"],({theme:e})=>e.color.ink.inverted),J=n(["box-shadow:inset 0 0 0 1px;color:var(--primary-color);&:focus,&:hover,&:active{color:var(--hover-color);}&.is-disabled,&:disabled{&,&:focus,&:hover,&:active{color:var(--disabled-color);}}"]),K=n(["color:var(--primary-color);font:",";text-decoration:underline;text-transform:none;&:focus,&:hover,&:active{color:var(--hover-color);}&.is-disabled,&:disabled{&,&:focus,&:hover,&:active{color:var(--disabled-color);}}"],({theme:e})=>e.textStyle.button.medium),Q=n([""," font:",";text-transform:none;@media ","{font:",";}"],c,({theme:e})=>e.textStyle.button.large,H,({theme:e})=>e.textStyle.button.xLarge),W=l(({$variant:e})=>{switch(e){case v:return c;case $:return J;case D:return K;case G:return Q;default:return c}},"variantStyles"),X=f.button.withConfig({componentId:"sc-1aus1tj-0"})([""," ",""],F,W),ee=f(Y).attrs({size:z,svg:P}).withConfig({componentId:"sc-1aus1tj-1"})(["flex-grow:0;flex-shrink:0;"]),d=M.forwardRef(l(function({forwardedAs:a,variant:s=v,size:i=Z,id:p,className:y,disabled:m=!1,children:b,icon:x,role:g,title:h,tabIndex:T,...r},_){const B=r.as===o&&r.isExternal,N=(()=>{if(r.as===o){const{href:q,target:I,rel:R,onClick:O,as:j}=r;return{href:q,target:I,rel:R,onClick:O,as:j}}const{name:u,value:V,type:A,onClick:w,as:E}=r;return{name:u,value:V,type:A,onClick:w,as:E}})(),S=Object.fromEntries(Object.entries(r).filter(([u])=>/^aria-|data-/.test(u)));return t.jsxs(X,{forwardedAs:a,$variant:s,$size:i,id:p,className:L(y,{"is-disabled":m&&(r.as===o||a===o)}),ref:_,role:g,title:h,tabIndex:T,disabled:m,...N,...S,children:[b,x||B&&t.jsx(ee,{})]})},"Button2")),ae=d;try{d.displayName="Button",d.__docgenInfo={description:"",displayName:"Button",props:{forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"a"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"base"'},{value:'"large"'}]}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"primary-uncap"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement> | MouseEventHandler<HTMLAnchorElement>"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"a"'}]}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_blank"'},{value:'"_self"'},{value:'"_parent"'},{value:'"_top"'}]}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"enum",value:[{value:'"alternate"'},{value:'"external"'},{value:'"nofollow"'},{value:'"noopener"'},{value:'"noreferrer"'},{value:'"alternate alternate"'},{value:'"alternate external"'},{value:'"alternate nofollow"'},{value:'"alternate noopener"'},{value:'"alternate noreferrer"'},{value:'"external alternate"'},{value:'"external external"'},{value:'"external nofollow"'},{value:'"external noopener"'},{value:'"external noreferrer"'},{value:'"nofollow alternate"'},{value:'"nofollow external"'},{value:'"nofollow nofollow"'},{value:'"nofollow noopener"'},{value:'"nofollow noreferrer"'},{value:'"noopener alternate"'},{value:'"noopener external"'},{value:'"noopener nofollow"'},{value:'"noopener noopener"'},{value:'"noopener noreferrer"'},{value:'"noreferrer alternate"'},{value:'"noreferrer external"'},{value:'"noreferrer nofollow"'},{value:'"noreferrer noopener"'},{value:'"noreferrer noreferrer"'}]}},isExternal:{defaultValue:null,description:"",name:"isExternal",required:!1,type:{name:"boolean"}}}}}catch{}const re=l(({theme:e,...a})=>t.jsx(U,{theme:e,children:t.jsx(ae,{...a})}),"Themed"),be=Object.entries(C).reduce((e,[a,s])=>(e[a]=i=>t.jsx(re,{theme:s,...i}),e),{});export{ae as B,v as a,$ as b,D as c,G as d,fe as e,o as f,Z as g,ve as h,pe as i,ye as j,be as t};
