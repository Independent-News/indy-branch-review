var I=Object.defineProperty;var t=(e,n)=>I(e,"name",{value:n,configurable:!0});import{j as a}from"./jsx-runtime-1a1b98e7.js";import{P as N}from"./index-f7d1b020.js";import{g as V}from"./_commonjsHelpers-f86d8be3.js";import{r as T}from"./index-29d3bc65.js";import{d as j}from"./styled-components.browser.esm-852d80e5.js";function D(e){return e&&typeof e=="object"&&"default"in e?e.default:e}t(D,"_interopDefault");var E=T,O=D(E);function v(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}t(v,"_defineProperty");function U(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n}t(U,"_inheritsLoose");var A=!!(typeof window<"u"&&window.document&&window.document.createElement);function M(e,n,r){if(typeof e!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof n!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof r<"u"&&typeof r!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function i(s){return s.displayName||s.name||"Component"}return t(i,"getDisplayName"),t(function(d){if(typeof d!="function")throw new Error("Expected WrappedComponent to be a React component.");var c=[],o;function l(){o=e(c.map(function(y){return y.props})),m.canUseDOM?n(o):r&&(o=r(o))}t(l,"emitChange");var m=function(y){U(u,y);function u(){return y.apply(this,arguments)||this}t(u,"SideEffect"),u.peek=t(function(){return o},"peek"),u.rewind=t(function(){if(u.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var w=o;return o=void 0,c=[],w},"rewind");var h=u.prototype;return h.UNSAFE_componentWillMount=t(function(){c.push(this),l()},"UNSAFE_componentWillMount"),h.componentDidUpdate=t(function(){l()},"componentDidUpdate"),h.componentWillUnmount=t(function(){var w=c.indexOf(this);c.splice(w,1),l()},"componentWillUnmount"),h.render=t(function(){return O.createElement(d,this.props)},"render"),u}(E.PureComponent);return v(m,"displayName","SideEffect("+i(d)+")"),v(m,"canUseDOM",A),m},"wrap")}t(M,"withSideEffect");var R=M;const B=V(R),_=j.svg.withConfig({componentId:"sc-eaj12q-0"})(["width:",";height:",";"],({$width:e})=>e?`${e}px`:"100%",({$height:e})=>e?`${e}px`:"100%");try{_.displayName="Wrapper",_.__docgenInfo={description:"",displayName:"Wrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const W=t(({children:e,className:n,viewBox:r,width:i,height:s,...d})=>{const c=Object.fromEntries(Object.entries(d).filter(([o])=>!["Symbol","svg","name"].includes(o)));return a.jsx(_,{className:n,viewBox:r,$width:i,$height:s,...c,children:e})},"Inline"),$=t(({className:e,id:n,width:r,height:i})=>a.jsx(_,{$width:r,$height:i,className:e,children:a.jsx("use",{href:`#${n}`})}),"Use"),g=t(({isInline:e=!0,children:n,...r})=>e?a.jsx(W,{...r,children:n}):a.jsx($,{...r}),"SVG"),S=t(({children:e,id:n,viewBox:r})=>a.jsx("symbol",{id:n,viewBox:r,children:e}),"Symbol$1");try{g.displayName="SVG",g.__docgenInfo={description:`This component is a simple abstraction which allows for the rendering of an
SVG as 'inline' or as a 'use' reference via a flag.`,displayName:"SVG",props:{isInline:{defaultValue:{value:"true"},description:"",name:"isInline",required:!1,type:{name:"boolean"}},viewBox:{defaultValue:null,description:"",name:"viewBox",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}}}}}catch{}try{S.displayName="Symbol",S.__docgenInfo={description:`This component is the symbol definition which is  included in the symbols
drop and referenced by <Use />`,displayName:"Symbol",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},viewBox:{defaultValue:null,description:"",name:"viewBox",required:!0,type:{name:"string"}}}}}catch{}let b=null;function G(e){return document?(b=Array.from(document.querySelectorAll(`.${e} symbol`),({id:n})=>n),b):null}t(G,"getSSRSymbolIDs");function C(e,n){const r=b||G(n);return Array.isArray(r)&&r.includes(e)}t(C,"existsAsSymbol");function P(e){return[...new Map(e.map(r=>[r.id,r])).values()]}t(P,"reducePropsToState");function L(e=[]){return e}t(L,"handleStateChangeOnClient");function Y(e=[]){return e}t(Y,"mapStateOnServer");const q="__INDY_UI_SYMBOLS__",f=B(P,L,Y)(g),F=t(e=>{const n=t(({svg:r,...i})=>{const{props:{children:s,id:d,viewBox:c,...o}}=r(),l=f.canUseDOM&&!C(d,q);return a.jsx(e,{...o,...i,id:d,isInline:l,viewBox:c,children:s})},"Wrapped");return n.propTypes={svg:N.func.isRequired},n},"withIconSideEffect"),k=F(f),z=t(()=>{const e=f.canUseDOM?"peek":"rewind",n=f[e]&&f[e]()||[];return(n==null?void 0:n.length)>0&&a.jsx("svg",{className:q,xmlns:"http://www.w3.org/2000/svg",hidden:!0,children:n.map(({children:r,id:i,viewBox:s})=>a.jsx(S,{id:i,viewBox:s,children:r},i))})},"Symbols");g.__docgenInfo={description:`This component is a simple abstraction which allows for the rendering of an
SVG as 'inline' or as a 'use' reference via a flag.`,methods:[],displayName:"SVG",props:{className:{required:!1,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},width:{required:!0,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},children:{required:!0,tsType:{name:"Children"},description:""},viewBox:{required:!0,tsType:{name:"string"},description:""},isInline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};z.__docgenInfo={description:`Component for 'dropping' the symbols on the page. This component currently
only really applies during SSR. @see handleStateChangeOnClient
@returns An SVG element containing a unique permutation of <use /> elements
containing the icons that have been declared using the Icon component`,methods:[],displayName:"Symbols"};function x(e){return t(function(r){return a.jsx(k,{...r,svg:e})},"LogoIcon")}t(x,"withSymbol");try{x.displayName="withSymbol",x.__docgenInfo={description:"",displayName:"withSymbol",props:{}}}catch{}export{k as S,z as a};
