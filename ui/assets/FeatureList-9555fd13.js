var m=Object.defineProperty;var i=(e,a)=>m(e,"name",{value:a,configurable:!0});import{j as t}from"./jsx-runtime-1a1b98e7.js";import{d as l}from"./styled-components.browser.esm-852d80e5.js";import{e as d}from"./index-91ae8c1a.js";import{I as u}from"./Icon.hoc-5c5e8f19.js";import{S as f}from"./Icon.constants-a768151c.js";const g=l.ul.withConfig({componentId:"sc-1m0izjv-0"})(["display:flex;flex-direction:column;gap:","px;padding:0;margin:0;list-style:none;"],({theme:e})=>e.spacing.x1),x=l.li.withConfig({componentId:"sc-hpcqcg-0"})(["display:flex;align-items:center;gap:","px;color:",";font:"," / 20px ",";"],({theme:e})=>e.spacing.x1,e=>e.theme.color.ink.base,e=>e.theme.fontSize.base,({theme:e})=>e.fontFamily.secondaryFont),y=l.div.withConfig({componentId:"sc-hpcqcg-1"})([""]),n=i(({icon:e=d,iconSize:a=f,children:s,className:r})=>t.jsxs(x,{className:r,children:[t.jsx(y,{children:t.jsx(u,{svg:e,size:a})}),s]}),"FeatureListItem");try{n.displayName="FeatureListItem",n.__docgenInfo={description:"",displayName:"FeatureListItem",props:{icon:{defaultValue:{value:'e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"193b5b1ebe76585e",viewBox:"0 0 16 16",...e},l.createElement("path",{stroke:"currentColor",strokeWidth:2,d:"m2.58 10.27 4.02 2.9M13.21 2.6 5.22 13.36"}))'},description:"",name:"icon",required:!1,type:{name:"SvgrProps"}},iconSize:{defaultValue:{value:"small"},description:"",name:"iconSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"base"'},{value:'"large"'},{value:'"x-small"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const o=i(({features:e=[],className:a})=>t.jsx(g,{className:a,children:e.map(({feature:s,icon:r,iconSize:c},p)=>t.jsx(n,{icon:r,iconSize:c,children:s},p))}),"FeatureList"),j=o;try{o.displayName="FeatureList",o.__docgenInfo={description:"",displayName:"FeatureList",props:{features:{defaultValue:{value:"[]"},description:"",name:"features",required:!1,type:{name:"Feature[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{j as F,y as I,x as W};