var v=Object.defineProperty;var c=(r,o)=>v(r,"name",{value:o,configurable:!0});import{M as O}from"./chunk-HLWAVYOI-df0284dd.js";import{j as s}from"./jsx-runtime-1a1b98e7.js";import{p as d}from"./index-f7d1b020.js";import{f as _}from"./index-3b0e1f90.js";import{I}from"./Icon.hoc-5c5e8f19.js";import{C as M}from"./Copyable-d9d34364.js";import{H as w,D as P,G as $,a as D,b as E,c as G,R,d as k,e as z}from"./Table-3c9cb6d6.js";import{u as H}from"./index-ce21b0e5.js";import"./iframe-2327bff3.js";import"../sb-preview/runtime.js";import"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";import"./react-18-d0e6e771.js";import"./index-1aad7d92.js";import"./inheritsLoose-289c47e1.js";import"./index-2a059c61.js";import"./index-32ac9e7b.js";import"./Icon.constants-a768151c.js";import"./styled-components.browser.esm-852d80e5.js";import"./Symbols.hoc-c2fda652.js";import"./IconButton-ae2e48c7.js";const L="@indy/icons",g=["outline","solid"],h={12:"x-small",16:"small",24:"base",32:"large"};function F(r,o){const t=Object.entries(r).reduce((e,[a,m])=>{var f,y,b;const n="misc",l=a.match(/([A-Z][a-z]*|[0-9]+)/g),p=l.slice(0,-2).join("-").toLowerCase(),x=l.at(-2).toLowerCase(),u=parseInt(l.at(-1).toLowerCase());return!p||!u||!x?(console.error(`'${a}' is not in the correct format. Expected '{Token}{Variant}{Size}' e.g. TickSolid24`,{cause:{token:p,size:u,variant:x}}),e):{...e,[n]:{...e[n],[p]:{...(f=e[n])==null?void 0:f[p],[u]:{...(b=(y=e[n])==null?void 0:y[p])==null?void 0:b[u],[x]:{name:a,icon:s.jsx(I,{size:o[u],svg:m})}}}}}},{});return Object.entries(t).map(([e,a])=>({group:e,values:Object.entries(a).map(([m,n])=>({token:m,...n}))}))}c(F,"organiseIconFiles");const C=c(({svgs:r,variants:o})=>s.jsx(z,{children:o.map(t=>{const{name:i,icon:e}=r[t]||{};return!i||!e?(console.warn(`Missing '${t}' variant.`,{cause:r}),null):s.jsx(M,{value:`import { ${i} } from '${L}';`,children:e},t)})}),"Variants");C.propTypes={variants:d.PropTypes.arrayOf(d.PropTypes.oneOf(g)),svgs:d.PropTypes.shape(Object.fromEntries(g.map(r=>[r,d.PropTypes.shape({name:d.PropTypes.string.isRequired,icon:d.PropTypes.node.isRequired})])))};const T=c(()=>{const r=F(_,h),o=Object.entries(h);return s.jsxs(s.Fragment,{children:[s.jsx(w,{colCount:o.length,children:s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{}),o.map(([t,i],e)=>s.jsxs("th",{children:[i,s.jsx("br",{}),s.jsxs(P,{children:[t,"px"]})]},`column-${e}`))]})})}),r.map(({group:t,values:i},e)=>s.jsxs($,{children:[s.jsx(D,{children:s.jsx(E,{children:t})}),s.jsx(G,{colCount:o.length,children:s.jsx("tbody",{children:i.map(({token:a,...m},n)=>s.jsxs("tr",{children:[s.jsx(R,{children:a}),Object.keys(h).map((l,p)=>s.jsx(k,{children:m[l]&&s.jsx(C,{svgs:m[l],variants:g})},`variant-${p}`))]},`icon-${n}`))})})]},e))]})},"Icons");T.__docgenInfo={description:"",methods:[],displayName:"Icons"};function S(r={}){const{wrapper:o}=Object.assign({},H(),r.components);return o?s.jsx(o,{...r,children:s.jsx(t,{})}):t();function t(){return s.jsxs(s.Fragment,{children:[s.jsx(O,{title:"Principles/Iconography"}),`
`,s.jsx(T,{})]})}}c(S,"MDXContent");const X=c(()=>{throw new Error("Docs-only story")},"__page");X.parameters={docsOnly:!0};const j={title:"Principles/Iconography",tags:["stories-mdx"],includeStories:["__page"]};j.parameters=j.parameters||{};j.parameters.docs={...j.parameters.docs||{},page:S};const ms=["__page"];export{ms as __namedExportsOrder,X as __page,j as default};
