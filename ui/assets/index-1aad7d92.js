var A=Object.defineProperty;var c=(r,e)=>A(r,"name",{value:e,configurable:!0});var h=Object.create,v=Object.defineProperty,m=Object.getOwnPropertyDescriptor,x=Object.getOwnPropertyNames,P=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty,S=c((r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),"E"),U=c((r,e,i,u)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of x(e))!d.call(r,a)&&a!==i&&v(r,a,{get:()=>e[a],enumerable:!(u=m(e,a))||u.enumerable});return r},"I"),q=c((r,e,i)=>(i=r!=null?h(P(r)):{},U(e||!r||!r.__esModule?v(i,"default",{value:r,enumerable:!0}):i,r)),"k"),E=S(r=>{Object.defineProperty(r,"__esModule",{value:!0}),r.isEqual=function(){var e=Object.prototype.toString,i=Object.getPrototypeOf,u=Object.getOwnPropertySymbols?function(a){return Object.keys(a).concat(Object.getOwnPropertySymbols(a))}:Object.keys;return function(a,f){return c(function o(t,n,y){var p,s,l,O=e.call(t),j=e.call(n);if(t===n)return!0;if(t==null||n==null)return!1;if(y.indexOf(t)>-1&&y.indexOf(n)>-1)return!0;if(y.push(t,n),O!=j||(p=u(t),s=u(n),p.length!=s.length||p.some(function(b){return!o(t[b],n[b],y)})))return!1;switch(O.slice(8,-1)){case"Symbol":return t.valueOf()==n.valueOf();case"Date":case"Number":return+t==+n||+t!=+t&&+n!=+n;case"RegExp":case"Function":case"String":case"Boolean":return""+t==""+n;case"Set":case"Map":p=t.entries(),s=n.entries();do if(!o((l=p.next()).value,s.next().value,y))return!1;while(!l.done);return!0;case"ArrayBuffer":t=new Uint8Array(t),n=new Uint8Array(n);case"DataView":t=new Uint8Array(t.buffer),n=new Uint8Array(n.buffer);case"Float32Array":case"Float64Array":case"Int8Array":case"Int16Array":case"Int32Array":case"Uint8Array":case"Uint16Array":case"Uint32Array":case"Uint8ClampedArray":case"Arguments":case"Array":if(t.length!=n.length)return!1;for(l=0;l<t.length;l++)if((l in t||l in n)&&(l in t!=l in n||!o(t[l],n[l],y)))return!1;return!0;case"Object":return o(i(t),i(n),y);default:return!1}},"i")(a,f,[])}}()}),g=q(E()),w=c(r=>r.map(e=>typeof e<"u").filter(Boolean).length,"S"),I=c((r,e)=>{let{exists:i,eq:u,neq:a,truthy:f}=r;if(w([i,u,a,f])>1)throw new Error(`Invalid conditional test ${JSON.stringify({exists:i,eq:u,neq:a})}`);if(typeof u<"u")return(0,g.isEqual)(e,u);if(typeof a<"u")return!(0,g.isEqual)(e,a);if(typeof i<"u"){let o=typeof e<"u";return i?o:!o}return typeof f>"u"||f?!!e:!e},"v"),B=c((r,e,i)=>{if(!r.if)return!0;let{arg:u,global:a}=r.if;if(w([u,a])!==1)throw new Error(`Invalid conditional value ${JSON.stringify({arg:u,global:a})}`);let f=u?e[u]:i[a];return I(r.if,f)},"P"),F=c(r=>r.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"-").replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),"O");export{F as O,B as P};
