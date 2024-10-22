var b=Object.defineProperty;var l=(e,t)=>b(e,"name",{value:t,configurable:!0});import{j as r}from"./jsx-runtime-1a1b98e7.js";import{r as B}from"./index-29d3bc65.js";import{d as h}from"./styled-components.browser.esm-852d80e5.js";import"./_commonjsHelpers-f86d8be3.js";const A=h.button.withConfig({componentId:"sc-9af0ww-0"})(["display:flex;box-sizing:border-box;align-items:center;gap:","px;padding:","px ","px;border:1px solid ",";border-radius:16px;background-color:",";color:",";font:",";margin-block:0;&:hover{border-color:",";color:",";}"],({theme:e})=>e.spacing.x0_5,({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.color.divider.bold,({theme:e,$active:t})=>t&&e.color.divider.bold,({theme:e,$active:t})=>t?e.color.ink.inverted:e.color.ink.base,({theme:e})=>e.textStyle.newsletterPreferences.filterButton,({$active:e,theme:t})=>!e&&t.color.actionSubtleDark.alt,({$active:e,theme:t})=>!e&&t.color.actionSubtleDark.alt);try{FilterButtonstyles.displayName="FilterButtonstyles",FilterButtonstyles.__docgenInfo={description:"",displayName:"FilterButtonstyles",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const c=l(({children:e,count:t,active:o=!1,onClick:a})=>r.jsxs(A,{$active:o,onClick:a,children:[r.jsx(r.Fragment,{children:e})," ",r.jsxs(r.Fragment,{children:["(",t,")"]})]}),"FilterButton"),_=c;try{c.displayName="FilterButton",c.__docgenInfo={description:"",displayName:"FilterButton",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}}}}}catch{}const d={count:4,active:!1,children:"Filter Button"},N={title:"Components/Newsletter Preferences/Filters/FilterButton",component:_,args:d},n={args:d},s={args:{...d,active:!0}},k=[{name:"Filter 1",count:10},{name:"Filter 2",count:20},{name:"Filter 3",count:30},{name:"Filter 4",count:40},{name:"Filter 5",count:50}],i=l(()=>{const[e,t]=B.useState(0);return r.jsx("div",{style:{display:"flex",gap:"12px"},children:k.map((o,a)=>r.jsx(_,{count:o.count,active:e===a,onClick:()=>t(a),children:o.name},o.name))})},"Grouped");var u,p,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,g,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    active: true
  }
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,y,F;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [active, setActive] = useState(0);
  return <div style={{
    display: 'flex',
    gap: '12px'
  }}>
      {filters.map((filter, index) => <FilterButton key={filter.name} count={filter.count} active={active === index} onClick={() => setActive(index)}>
          {filter.name}
        </FilterButton>)}
    </div>;
}`,...(F=(y=i.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};const V=["Default","Active","Grouped"];export{s as Active,n as Default,i as Grouped,V as __namedExportsOrder,N as default};
