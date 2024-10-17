var V=Object.defineProperty;var i=(e,t)=>V(e,"name",{value:t,configurable:!0});import{j as y}from"./jsx-runtime-1a1b98e7.js";import{r as f}from"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";const l=i(e=>{const t=Math.floor(e/60),s=Math.floor(t/60),r=Math.floor(s/24),a=Math.floor(r/7),o=Math.floor(r/30);return{yearsAgo:Math.floor(o/12),monthsAgo:o,weeksAgo:a,daysAgo:r,hoursAgo:s,minutesAgo:t}},"getTimeUnits"),_=i(e=>{if(e===0)return"";const{yearsAgo:t,monthsAgo:s,weeksAgo:r,daysAgo:a,hoursAgo:o,minutesAgo:n}=l(e);return n===0?`${e} second${e>1?"s":""} ago`:o===0?`${n} minute${n>1?"s":""} ago`:a===0?`${o} hour${o>1?"s":""} ago`:r===0?`${a} day${a>1?"s":""} ago`:s===0?`${r} week${r>1?"s":""} ago`:t===0?`${s} month${s>1?"s":""} ago`:`${t} year${t>1?"s":""} ago`},"getFormattedTimeAgoEn"),$=i(e=>{if(e===0)return"";const{yearsAgo:t,monthsAgo:s,weeksAgo:r,daysAgo:a,hoursAgo:o,minutesAgo:n}=l(e);return n===0?`Hace ${e} segundo${e>1?"s":""}`:o===0?`Hace ${n} minuto${n>1?"s":""}`:a===0&&o===1?`${o} hora antes`:a===0?`Hace ${o} hora${o>1?"s":""}`:r===0?`Hace ${a} día${a>1?"s":""}`:s===0?`Hace ${r} semana${r>1?"s":""}`:t===0?`Hace ${s} mes${s>1?"es":""}`:`Hace ${t} año${t>1?"s":""}`},"getFormattedTimeAgoEs"),h=i(({lang:e,timestamp:t})=>{const[s,r]=f.useState(0);f.useEffect(()=>{r(Math.floor(Date.now()/1e3)-t);const n=setInterval(()=>{r(q=>q+1)},1e3);return()=>clearInterval(n)},[t]);const a=f.useMemo(()=>e==="es"?$(s):_(s),[e,s]),o=new Date(t*1e3);return y.jsx("span",{title:o.toString(),children:a})},"TimeAgo"),L=h;try{l.displayName="getTimeUnits",l.__docgenInfo={description:"",displayName:"getTimeUnits",props:{}}}catch{}try{_.displayName="getFormattedTimeAgoEn",_.__docgenInfo={description:"",displayName:"getFormattedTimeAgoEn",props:{}}}catch{}try{$.displayName="getFormattedTimeAgoEs",$.__docgenInfo={description:"",displayName:"getFormattedTimeAgoEs",props:{}}}catch{}try{h.displayName="TimeAgo",h.__docgenInfo={description:"",displayName:"TimeAgo",props:{lang:{defaultValue:null,description:"",name:"lang",required:!0,type:{name:"string"}},timestamp:{defaultValue:null,description:"",name:"timestamp",required:!0,type:{name:"number"}}}}}catch{}const Q={title:"Elements/Time Ago",component:L,tags:["storyshot:skip"],decorators:[e=>y.jsx("div",{style:{paddingLeft:"50px"},children:y.jsx(e,{})})],parameters:{docs:{description:{component:`@todo fix storyshotting of Time Ago. It is currently being skipped
due to async behaviour.`}}}},b=60,U=b*60,O=U*24,m=Math.floor(Date.now()/1e3),R=m-5,z=m-b*5,B=m-U*5,C=m-O*5,c={args:{timestamp:m}},p={args:{timestamp:R}},g={args:{timestamp:z}},d={args:{timestamp:B}},u={args:{timestamp:C}};var A,T,S;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    timestamp: timestampNow
  }
}`,...(S=(T=c.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var M,E,H;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    timestamp: timestamp5Secs
  }
}`,...(H=(E=p.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var x,D,N;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    timestamp: timestamp5Mins
  }
}`,...(N=(D=g.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var w,I,k;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    timestamp: timestamp5Hrs
  }
}`,...(k=(I=d.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var F,j,v;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    timestamp: timestamp5Days
  }
}`,...(v=(j=u.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const W=["Default","Secs","Mins","Hours","Days"];export{u as Days,c as Default,d as Hours,g as Mins,p as Secs,W as __namedExportsOrder,Q as default};
