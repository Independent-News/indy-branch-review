var m=Object.defineProperty;var i=(r,s)=>m(r,"name",{value:s,configurable:!0});import{j as e}from"./jsx-runtime-1a1b98e7.js";import{P as t}from"./index-f7d1b020.js";import{r as h}from"./index-29d3bc65.js";import{d as f}from"./styled-components.browser.esm-852d80e5.js";import{g as x}from"./colors-3e41a0f7.js";const d=i(({id:r})=>e.jsx("pattern",{id:r,width:"4",height:"4",patternTransform:"rotate(45 0 0)",patternUnits:"userSpaceOnUse",children:e.jsx("line",{x1:"0",y1:"0",x2:"0",y2:"4",stroke:"#EEEEEE",strokeWidth:"2"})}),"CrossHatch");d.propTypes={id:t.string.isRequired};const y=f.svg.withConfig({componentId:"sc-trj4bl-0"})(["display:block;"]),c=i(({className:r,fill:s="transparent",width:n=158,height:o=58,cornerRadius:a=0})=>{const p=`cross-hatch-${h.useId()}`,l=240,u=x(s)>l||s==="transparent";return e.jsxs(y,{className:r,width:n,height:o,viewBox:`0 0 ${n} ${o}`,children:[e.jsx(d,{id:p}),e.jsx("rect",{fill:`url(#${p})`,x:"0",y:"0",width:"100%",height:"100%",rx:a}),e.jsx("rect",{fill:s,x:0,y:0,width:"100%",height:"100%",rx:a}),u&&e.jsx("rect",{fill:"transparent",x:0,y:0,width:"100%",height:"100%",rx:a,stroke:"#DDDDDD",strokeWidth:"1"})]})},"Swatch");c.propTypes={className:t.string,fill:t.string.isRequired,width:t.number,height:t.number,cornerRadius:t.number};c.__docgenInfo={description:"",methods:[],displayName:"Swatch",props:{fill:{defaultValue:{value:"'transparent'",computed:!1},description:"",type:{name:"string"},required:!1},width:{defaultValue:{value:"158",computed:!1},description:"",type:{name:"number"},required:!1},height:{defaultValue:{value:"58",computed:!1},description:"",type:{name:"number"},required:!1},cornerRadius:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},className:{description:"",type:{name:"string"},required:!1}}};export{c as S};