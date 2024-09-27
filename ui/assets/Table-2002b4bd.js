var g=Object.defineProperty;var i=(e,n)=>g(e,"name",{value:n,configurable:!0});import{j as r}from"./jsx-runtime-1a1b98e7.js";import{P as o}from"./index-f7d1b020.js";import{r as x}from"./index-29d3bc65.js";import{d as t}from"./styled-components.browser.esm-852d80e5.js";import{k as y,N as h}from"./index-58d5119c.js";import"./Icon.hoc-5c5e8f19.js";import{S as b}from"./Icon.constants-a768151c.js";import{I as C}from"./IconButton-ae2e48c7.js";const q=t(C).attrs({size:b}).withConfig({componentId:"sc-lp6qh9-0"})(["&:disabled{color:"," !important;}"],({theme:e})=>e.color.semiotic.success),u=i(({className:e,value:n,timeout:c=1.5,isCosy:l=!0})=>{const[p,s]=x.useState(!1);async function a(d){return await navigator.clipboard.writeText(d)}i(a,"copyTextToClipboard");const f=i(async()=>{try{await a(n),s(!0),setTimeout(()=>{s(!1)},c*1e3)}catch(d){console.error(d)}},"handleCopyClick");return r.jsx(q,{className:e,svg:p?y:h,onClick:f,isDisabled:p,isCosy:l})},"CopyButton");u.propTypes={className:o.string,value:o.string.isRequired,timeout:o.number,isCosy:o.bool};u.__docgenInfo={description:"",methods:[],displayName:"CopyButton",props:{timeout:{defaultValue:{value:"1.5",computed:!1},description:"",type:{name:"number"},required:!1},isCosy:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},className:{description:"",type:{name:"string"},required:!1},value:{description:"",type:{name:"string"},required:!0}}};const m=i(({children:e,className:n,colCount:c=1,colWidth:l=10})=>{const p=100-c*l,s=[];for(let a=0;a<c;a++)s.push(r.jsx("col",{width:`${l}%`},a));return r.jsxs("table",{className:n,children:[r.jsxs("colgroup",{children:[r.jsx("col",{width:`${p}%`}),s]}),e]})},"Table");m.propTypes={children:o.oneOfType([o.node,o.arrayOf(o.node)]).isRequired,className:o.string,colCount:o.number,colWidth:o.number};const w=t.small.withConfig({componentId:"sc-1exqy01-0"})(["color:",";font:12px/16px ",";"],({theme:e})=>e.color.ink.light,e=>e.theme.fontFamily.secondaryFont),S=t.article.withConfig({componentId:"sc-1exqy01-1"})(["--cell-padding:","px ","px;margin:","px 0;"],({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.spacing.x2),V=t.header.withConfig({componentId:"sc-1exqy01-2"})(["padding:var(--cell-padding);","{margin-left:","px;}"],w,({theme:e})=>e.spacing.x1),B=t.h1.withConfig({componentId:"sc-1exqy01-3"})(["margin:0;font:bold 14px/18px ",";"],e=>e.theme.fontFamily.secondaryFont),I=t(m).withConfig({componentId:"sc-1exqy01-4"})(["width:100%;background:",";border-collapse:collapse;table-layout:fixed;"],({theme:e})=>e.color.canvas.base),D=t(I).withConfig({componentId:"sc-1exqy01-5"})(["width:100%;border-collapse:collapse;table-layout:fixed;th{padding:0 ","px;border:1px solid transparent;font:16px/20px ",";}"],({theme:e})=>e.spacing.x1_5,({theme:e})=>e.fontFamily.secondaryFont),v=t.td.withConfig({componentId:"sc-1exqy01-6"})(["padding:var(--cell-padding);border:1px solid ",";color:",";text-align:center;&:last-child{border-right:0;}"],({theme:e})=>e.color.divider.light,({theme:e})=>e.color.ink.base),E=t.div.withConfig({componentId:"sc-1exqy01-7"})(["display:flex;align-items:center;justify-content:center;gap:","px;"],({theme:e})=>e.spacing.x2),O=t(v).attrs({as:"th"}).withConfig({componentId:"sc-1exqy01-8"})(["border-left:0;font:normal 12px/16px monospace;text-align:left;"]);m.__docgenInfo={description:"",methods:[],displayName:"Table",props:{colCount:{defaultValue:{value:"1",computed:!1},description:"",type:{name:"number"},required:!1},colWidth:{defaultValue:{value:"10",computed:!1},description:"",type:{name:"number"},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!0},className:{description:"",type:{name:"string"},required:!1}}};export{u as C,w as D,S as G,D as H,O as R,V as a,B as b,I as c,v as d,E as e};
