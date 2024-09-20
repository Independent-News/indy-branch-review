var M=Object.defineProperty;var s=(r,e)=>M(r,"name",{value:e,configurable:!0});import{d as h}from"./index-32ac9e7b.js";const{useMemo:$,useEffect:k}=__STORYBOOK_MODULE_PREVIEW_API__,{global:B}=__STORYBOOK_MODULE_GLOBAL__,{logger:S}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var u="backgrounds",{document:g,window:x}=B,O=s(()=>x.matchMedia("(prefers-reduced-motion: reduce)").matches,"isReduceMotionEnabled"),w=s((r,e=[],a)=>{if(r==="transparent")return"transparent";if(e.find(t=>t.value===r))return r;let n=e.find(t=>t.name===a);if(n)return n.value;if(a){let t=e.map(o=>o.name).join(", ");S.warn(h`
        Backgrounds Addon: could not find the default color "${a}".
        These are the available colors for your story based on your configuration:
        ${t}.
      `)}return"transparent"},"getBackgroundColorByName"),_=s(r=>{(Array.isArray(r)?r:[r]).forEach(A)},"clearStyles"),A=s(r=>{var a;let e=g.getElementById(r);e&&((a=e.parentElement)==null||a.removeChild(e))},"clearStyle"),L=s((r,e)=>{let a=g.getElementById(r);if(a)a.innerHTML!==e&&(a.innerHTML=e);else{let n=g.createElement("style");n.setAttribute("id",r),n.innerHTML=e,g.head.appendChild(n)}},"addGridStyle"),T=s((r,e,a)=>{var t;let n=g.getElementById(r);if(n)n.innerHTML!==e&&(n.innerHTML=e);else{let o=g.createElement("style");o.setAttribute("id",r),o.innerHTML=e;let i=`addon-backgrounds-grid${a?`-docs-${a}`:""}`,d=g.getElementById(i);d?(t=d.parentElement)==null||t.insertBefore(o,d):g.head.appendChild(o)}},"addBackgroundStyle"),C=s((r,e)=>{var m;let{globals:a,parameters:n}=e,t=(m=a[u])==null?void 0:m.value,o=n[u],i=$(()=>o.disable?"transparent":w(t,o.values,o.default),[o,t]),d=$(()=>i&&i!=="transparent",[i]),p=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",c=$(()=>{let l="transition: background-color 0.3s;";return`
      ${p} {
        background: ${i} !important;
        ${O()?"":l}
      }
    `},[i,p]);return k(()=>{let l=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!d){_(l);return}T(l,c,e.viewMode==="docs"?e.id:null)},[d,c,e]),r()},"withBackground"),I=s((r,e)=>{var v;let{globals:a,parameters:n}=e,t=n[u].grid,o=((v=a[u])==null?void 0:v.grid)===!0&&t.disable!==!0,{cellAmount:i,cellSize:d,opacity:p}=t,c=e.viewMode==="docs",m=n.layout===void 0||n.layout==="padded"?16:0,l=t.offsetX??(c?20:m),b=t.offsetY??(c?20:m),y=$(()=>{let f=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",E=[`${d*i}px ${d*i}px`,`${d*i}px ${d*i}px`,`${d}px ${d}px`,`${d}px ${d}px`].join(", ");return`
      ${f} {
        background-size: ${E} !important;
        background-position: ${l}px ${b}px, ${l}px ${b}px, ${l}px ${b}px, ${l}px ${b}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${p}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${p}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${p/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${p/2}) 1px, transparent 1px) !important;
      }
    `},[d]);return k(()=>{let f=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!o){_(f);return}L(f,y)},[o,y,e]),r()},"withGrid"),H=[I,C],Y={[u]:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},z={[u]:null};export{H as decorators,z as globals,Y as parameters};
