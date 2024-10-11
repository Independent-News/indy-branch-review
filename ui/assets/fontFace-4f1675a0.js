var p=Object.defineProperty;var o=(n,i)=>p(n,"name",{value:i,configurable:!0});import{t,m as w,b as S}from"./fontWeights-1d7bfb43.js";const g=o(()=>{try{return!!__STORYBOOK_PREVIEW__}catch{return!1}},"isStorybook");function $({name:n,fallback:i,style:a,weight:r,ascent:c,descent:d,lineGap:l,size:s}){return`
@font-face {
  font-family: "${n}";
  font-style: ${a||"normal"};
  font-weight: ${r||"normal"};
  ascent-override: ${c||"normal"};
  descent-override: ${d||"normal"};
  line-gap-override: ${l||"0%"};
  size-adjust: ${s||"100%"};
  src: local(${i});
}`}o($,"makeFallback");function m(n,i){return i.map(({display:a,family:r,src:c,style:d,weight:l,fallback:{font:s,...y}={}})=>`
@font-face {
  font-display: ${a||"swap"};
  font-family: "${r||n}";
  font-style: ${d||"normal"};
  font-weight: ${l||"normal"};
  src: url(${c}) format('woff2');
}${s?$({name:`${n} Fallback`,fallback:s,style:d,weight:l,...y}):""}`).join(`
`)}o(m,"makeFontFace");const I=o(n=>Object.entries(n).map(([i,a])=>m(i,a)),"generateFontsFromConfig"),h=g()?"fonts/":"/fonts/",e={}.FONT_SOURCE||h,f="Georgia",b={"Indy Serif":[{src:`${e}Independent-Serif-Regular.woff2`,fallback:{font:f,lineGap:"4%",size:"101%"}},{src:`${e}Independent-Serif-Regular-Italic.woff2`,style:"italic",fallback:{font:f,lineGap:"7%",size:"98.5%"}},{src:`${e}Independent-Serif-Medium.woff2`,weight:"bold",fallback:{font:f,size:"103%",ascent:"94%",descent:"21%"}},{src:`${e}Independent-Serif-Medium-Italic.woff2`,style:"italic",weight:"bold",fallback:{font:f,lineGap:"4%",size:"101%"}}],"Indy Sans":[{src:`${e}Independent-Sans-Regular.woff2`,fallback:{font:f,size:"96%",ascent:"97%",descent:"28%"}},{src:`${e}Independent-Sans-Medium.woff2`,weight:"bold",fallback:{font:f,size:"99%",ascent:"97%",descent:"28%"}}],"Indy Sans CAPS":[{src:`${e}Independent-Sans-Medium.woff2`,weight:"bold",fallback:{font:"Arial",size:"95%",ascent:"90%",descent:"17%"}}]},u={"Indy Sans":[{src:`${e}Independent-Sans-Regular.woff2`},{src:`${e}Independent-Sans-Light.woff2`,weight:t},{src:`${e}Independent-Sans-Medium.woff2`,weight:w},{src:`${e}Independent-Sans-Bold.woff2`,weight:"bold"},{src:`${e}Independent-Sans-Black.woff2`,weight:S},{src:`${e}Independent-Hairline-Final.woff2`,family:"Indy Hairline"},{src:`${e}Independent-Sans-Heavy.woff2`,family:"Indy Sans Heavy",weight:"bolder"},{src:`${e}Independent-Edition-Sans-Light.woff2`,display:"block",family:"Indy-Sans-Light",weight:t},{src:`${e}Independent-Edition-Sans-Bold.woff2`,display:"block",family:"Indy-Sans-Bold",weight:"bold"}],"Indy Serif":[{src:`${e}Independent-Serif-Medium.woff2`,weight:w},{src:`${e}Independent-Serif-Medium-Italic.woff2`,style:"italic",weight:w},{src:`${e}Independent-Serif-Light.woff2`,weight:t},{src:`${e}Independent-Serif-Light-Italic.woff2`,style:"italic",weight:t},{src:`${e}Independent-Edition-Serif-Regular.woff2`,display:"block",family:"Indy-Serif-Regular"},{src:`${e}Independent-Edition-Serif-Light.woff2`,display:"block",family:"Indy-Serif-Light",weight:t},{src:`${e}Independent-Edition-Serif-Medium.woff2`,display:"block",family:"Indy-Serif-Medium"},{src:`${e}Independent-Edition-Serif-Light-Italic.woff2`,display:"block",family:"Indy-Serif-Light-Italic",style:"italic",weight:t},{src:`${e}Independent-Edition-Serif-Bold.woff2`,display:"block",family:"Indy-Serif-Bold",style:"italic",weight:t}]},E=I(b).join(`
`);I(u).join(`
`);export{b as f,E as i};
