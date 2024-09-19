var C=Object.defineProperty;var f=(n,a)=>C(n,"name",{value:a,configurable:!0});import{j as h}from"./jsx-runtime-1a1b98e7.js";import{r as e}from"./index-29d3bc65.js";import{b as P}from"./zIndex-6061405c.js";import{d as w}from"./styled-components.browser.esm-852d80e5.js";import"./_commonjsHelpers-f86d8be3.js";const V=w.div.withConfig({componentId:"sc-1ioan8g-0"})(["position:absolute;z-index:",";cursor:move;"],({zIndex:n})=>n),g={x:0,y:0},l=f(({className:n,children:a,initialPosition:b=g,zIndex:D=P})=>{const s=e.useRef(null),[o,c]=e.useState(b),[u,d]=e.useState(!1),[r,I]=e.useState(g),v=e.useCallback(t=>{d(!0),I({x:t.clientX-o.x,y:t.clientY-o.y})},[o]),_=e.useCallback(t=>{u&&c({x:t.clientX-r.x,y:t.clientY-r.y})},[u,r]),p=e.useCallback(()=>{d(!1)},[]);return e.useEffect(()=>{if(s.current){const t=s.current.offsetWidth,M=(window.innerWidth-t)/2;c({x:M,y:10})}},[]),h.jsx(V,{className:n,ref:s,onMouseDown:v,onMouseMove:_,onMouseUp:p,onMouseLeave:p,style:{left:o.x,top:o.y},zIndex:D,children:a})},"Draggable");try{l.displayName="Draggable",l.__docgenInfo={description:"",displayName:"Draggable",props:{initialPosition:{defaultValue:{value:"{ x: 0, y: 0 }"},description:"",name:"initialPosition",required:!1,type:{name:"PositionProps"}},zIndex:{defaultValue:{value:"header + 1"},description:"",name:"zIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const W={title:"Components/Draggable",component:l,argTypes:{children:{control:"text"},initialPosition:{control:"object",defaultValue:{x:0,y:0}},zIndex:{control:"number",defaultValue:1e3}}},i={args:{initialPosition:{x:0,y:0},zIndex:1e3,children:h.jsx("div",{style:{width:"200px",height:"100px",backgroundColor:"lightblue",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",flexDirection:"column"},children:"Drag me!"})}};var m,x,y;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    initialPosition: {
      x: 0,
      y: 0
    },
    zIndex: 1000,
    children: <div style={{
      width: '200px',
      height: '100px',
      backgroundColor: 'lightblue',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      flexDirection: 'column'
    }}>
        Drag me!
      </div>
  }
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const Y=["Default"];export{i as Default,Y as __namedExportsOrder,W as default};
