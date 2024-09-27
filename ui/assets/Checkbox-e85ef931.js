var v=Object.defineProperty;var l=(e,o)=>v(e,"name",{value:o,configurable:!0});import{j as r}from"./jsx-runtime-1a1b98e7.js";import{u as g}from"./index.esm-13ba97b3.js";import{e as x,l as k,t as y}from"./index-58d5119c.js";import{I as d}from"./Icon.hoc-5c5e8f19.js";import{d as a}from"./styled-components.browser.esm-852d80e5.js";import{S as C}from"./ScreenReaderOnly-bf6dac32.js";const L="small",w="base",I=a(C).attrs({as:"input"}).withConfig({componentId:"sc-ip7vp6-0"})([""]),p=a.label.withConfig({componentId:"sc-ip7vp6-1"})(["display:flex;align-items:center;gap:var(--check-margin);color:var(--color);cursor:",";font:",";user-select:none;"],({$disabled:e})=>e?"default":"pointer",({theme:e})=>e.textStyle.formInput.error);a(d).withConfig({componentId:"sc-ip7vp6-2"})(["position:absolute;top:0;left:0;"]);const u=a.div.withConfig({componentId:"sc-ip7vp6-3"})(["width:var(--width);height:var(--height);box-sizing:border-box;flex-shrink:0;background:var(--check-background-color);box-shadow:0px 0px 0px 1px var(--check-border-color) inset;color:var(--color);svg{display:none;}"]),_=a.div.withConfig({componentId:"sc-ip7vp6-4"})(["--width:var(--height);--height:",";--check-margin:",";--color:",";--check-border-color:",";--check-background-color:",";position:relative;padding:","px 0;background-color:var(--background-color);color:var(--color);"," &:focus,&:hover,&:active{color:var(--color);}&:focus-within ","{outline:2px solid ",";}:checked + "," svg{display:initial;}"],({$size:e})=>{switch(e){case"small":return"16px";case"base":return"24px";case"large":return"32px"}},({$size:e,theme:o})=>{switch(e){case"large":return`${o.spacing.x1_5}px`;default:return`${o.spacing.x1}px`}},({theme:e})=>e.color.ink.base,({theme:e})=>e.color.divider.black,({theme:e})=>e.color.ink.inverted,({theme:e,$isCosy:o})=>o?0:e.spacing.x1_5,({theme:e,$disabled:o})=>{if(o)return`
        --color: ${e.color.semiotic.disabled};
        --check-border-color: ${e.color.semiotic.disabled};
        --check-background-color: ${e.color.canvas.secondary};
      `},u,({theme:e})=>e.color.semiotic.info,p),q={small:x,base:k,large:y},t=l(({id:e,className:o,controlled:s=!0,disabled:i=!1,label:h,size:n=w,isCosy:m=!1,...f})=>{const c=g();if(s&&!c)throw new Error("Checkbox should be wrapped by a FormProvider from @indy/ui/Form, unless the controlled={false} prop is set");const b=s?c.register(e):{};return r.jsxs(_,{className:o,$size:n,$disabled:i,$isCosy:m,children:[r.jsx(I,{type:"checkbox",id:e,name:e,disabled:i,...f,...b}),r.jsxs(p,{htmlFor:e,$disabled:i,children:[r.jsx(u,{children:r.jsx(d,{size:n,svg:q[n]})}),r.jsx("div",{children:h})]})]})},"Checkbox"),z=t;try{t.displayName="Checkbox",t.__docgenInfo={description:"",displayName:"Checkbox",props:{size:{defaultValue:{value:"'base' as CheckboxSize"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"base"'},{value:'"large"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"any"}},isCosy:{defaultValue:{value:"false"},description:"",name:"isCosy",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},required:{defaultValue:null,description:`Whether to display the asterisk indicating a required field
Note: This is purely a VISUAL indicator, and does not affect validation`,name:"required",required:!1,type:{name:"boolean"}},controlled:{defaultValue:{value:"true"},description:`Whether the input's validation (errors and state) are controlled by
react-hook-form (requiring use of FormProvider from
@indy /ui/Form)`,name:"controlled",required:!1,type:{name:"boolean"}}}}}catch{}export{z as C,L as a};
