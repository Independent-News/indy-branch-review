var h=Object.defineProperty;var n=(e,a)=>h(e,"name",{value:a,configurable:!0});import{j as r}from"./jsx-runtime-1a1b98e7.js";import{r as _}from"./index-29d3bc65.js";import{y as g,T as C,U as I,D as S}from"./index-58d5119c.js";import{D}from"./Dropdown-106efe7b.js";import"./DropdownForCard-fc1d7cf0.js";import{S as d,a as V,b as q,c as x}from"./Icon.constants-a768151c.js";import{T as E,C as b}from"./DropdownWithChevron.styles-abacdf4f.js";const w={[V]:g,[d]:C,[q]:I,[x]:S},o=n(({trigger:e,children:a,iconSize:i=d,onInteract:t,isCosy:p=!1,isOpen:u,divider:O,...m})=>{const[s,c]=_.useState(u||!1),f=n(()=>{c(v=>!v),t&&t()},"onDropdownInteract"),l=r.jsx(b,{$isOpen:s,svg:w[i],size:i}),y=typeof e=="function"?e(l):r.jsxs(E,{$isCosy:p,children:[e,l]});return r.jsx(D,{...m,isOpen:s,onInteract:f,trigger:y,children:a})},"DropdownWithChevron"),$=o;try{o.displayName="DropdownWithChevron",o.__docgenInfo={description:"",displayName:"DropdownWithChevron",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onInteract:{defaultValue:null,description:"",name:"onInteract",required:!1,type:{name:"VoidFunction"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"any"}},iconSize:{defaultValue:{value:"small"},description:"",name:"iconSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"base"'},{value:'"large"'},{value:'"x-small"'}]}},isCosy:{defaultValue:{value:"false"},description:"",name:"isCosy",required:!1,type:{name:"boolean"}},divider:{defaultValue:null,description:"",name:"divider",required:!1,type:{name:"any"}}}}}catch{}export{$ as D};
