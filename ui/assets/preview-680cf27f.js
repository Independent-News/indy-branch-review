var s=Object.defineProperty;var o=(e,t)=>s(e,"name",{value:t,configurable:!0});const{global:O}=__STORYBOOK_MODULE_GLOBAL__,{addons:g}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:E}=__STORYBOOK_MODULE_CORE_EVENTS__;var d="storybook/highlight",a="storybookHighlight",H=`${d}/add`,T=`${d}/reset`,{document:_}=O,I=o((e="#FF4785",t="dashed")=>`
  outline: 2px ${t} ${e};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`,"highlightStyle"),S=o(e=>({outline:`2px dashed ${e}`,outlineOffset:2,boxShadow:"0 0 0 6px rgba(255,255,255,0.6)"}),"highlightObject"),n=g.getChannel(),p=o(e=>{let t=a;i();let h=Array.from(new Set(e.elements)),l=_.createElement("style");l.setAttribute("id",t),l.innerHTML=h.map(r=>`${r}{
          ${I(e.color,e.style)}
         }`).join(" "),_.head.appendChild(l)},"highlight"),i=o(()=>{var h;let e=a,t=_.getElementById(e);t&&((h=t.parentNode)==null||h.removeChild(t))},"resetHighlight");n.on(E,i);n.on(T,i);n.on(H,p);export{S as highlightObject,I as highlightStyle};
