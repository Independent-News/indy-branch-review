var d=Object.defineProperty;var o=(e,t)=>d(e,"name",{value:t,configurable:!0});import{j as n}from"./jsx-runtime-1a1b98e7.js";import{G as u,_ as f,I as _}from"./index-aefe2d3f.js";import{I as g}from"./Icon.hoc-5c5e8f19.js";import{b as y}from"./Icon.constants-a768151c.js";import{d as S}from"./styled-components.browser.esm-852d80e5.js";const I="star-rating",v=S.div.withConfig({componentId:"sc-wck29k-0"})(["display:flex;gap:2px;color:",";"],({theme:e})=>e.color.primary.base),i=o(({className:e,size:t=y,value:a=0,total:r=5})=>{if(a<0||r<1||a>r)return null;const l=t,p=[[u,Math.floor(a)],[f,Math.ceil(a%1)],[_,Math.floor(r-a)]].map(([m,c])=>Array.from({length:c},(h,s)=>n.jsx(g,{"data-key":s,svg:m,size:l},s)));return n.jsx(v,{"data-testid":I,className:e,children:p})},"StarRating");try{i.displayName="StarRating",i.__docgenInfo={description:"",displayName:"StarRating",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"base"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"base"'}]}},value:{defaultValue:{value:"0"},description:"Rating value out of 'total'",name:"value",required:!1,type:{name:"number"}},total:{defaultValue:{value:"5"},description:"Total potential number of stars",name:"total",required:!1,type:{name:"number"}}}}}catch{}export{i as S};