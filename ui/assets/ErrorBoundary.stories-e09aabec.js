var m=Object.defineProperty;var w=(e,o,n)=>o in e?m(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n;var s=(e,o)=>m(e,"name",{value:o,configurable:!0});var u=(e,o,n)=>(w(e,typeof o!="symbol"?o+"":o,n),n);import{j as r}from"./jsx-runtime-1a1b98e7.js";import{r as C}from"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";const i=class i extends C.Component{constructor(){super(...arguments);u(this,"state",{hasError:!1})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(n,B){console.error(n,B.componentStack)}render(){return this.state.hasError?r.jsx(r.Fragment,{children:"There was an error rendering this component"}):this.props.children}};s(i,"ErrorBoundary");let t=i;const d=t;try{t.displayName="ErrorBoundary",t.__docgenInfo={description:"",displayName:"ErrorBoundary",props:{}}}catch{}const N={title:"Elements/Error Boundary",component:d,decorators:[e=>r.jsx("div",{style:{paddingLeft:"50px"},children:r.jsx(e,{})})]},f=s(()=>{throw new Error("Something went horribly wrong!")},"ExceptionThrowingComponent"),H=s(()=>r.jsx(r.Fragment,{children:"Happy component"}),"HappyComponent"),a={render:()=>r.jsx(d,{children:r.jsx(f,{})})},p={render:()=>r.jsx(d,{children:r.jsx(H,{})})},c={render:()=>r.jsx(d,{children:r.jsx(f,{})})};var y,h,l;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <ErrorBoundary>
      <ExceptionThrowingComponent />
    </ErrorBoundary>
}`,...(l=(h=a.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var E,x,g;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <ErrorBoundary>
      <HappyComponent />
    </ErrorBoundary>
}`,...(g=(x=p.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var j,S,_;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <ErrorBoundary>
      <ExceptionThrowingComponent />
    </ErrorBoundary>
}`,...(_=(S=c.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const U=["Default","HappyStory","UnhappyStory"];export{a as Default,p as HappyStory,c as UnhappyStory,U as __namedExportsOrder,N as default};
