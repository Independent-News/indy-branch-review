var b=Object.defineProperty;var m=(e,t)=>b(e,"name",{value:t,configurable:!0});import{j as _}from"./jsx-runtime-1a1b98e7.js";import{r as f}from"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";const l=m(e=>{const t=Math.floor(e/60),r=Math.floor(t/60),s=Math.floor(r/24),a=Math.floor(s/7),o=Math.floor(s/30);return{yearsAgo:Math.floor(o/12),monthsAgo:o,weeksAgo:a,daysAgo:s,hoursAgo:r,minutesAgo:t}},"getTimeUnits"),A=m(e=>{if(e===0)return"";const{yearsAgo:t,monthsAgo:r,weeksAgo:s,daysAgo:a,hoursAgo:o,minutesAgo:n}=l(e);return n===0?`${e} second${e>1?"s":""} ago`:o===0?`${n} minute${n>1?"s":""} ago`:a===0?`${o} hour${o>1?"s":""} ago`:s===0?`${a} day${a>1?"s":""} ago`:r===0?`${s} week${s>1?"s":""} ago`:t===0?`${r} month${r>1?"s":""} ago`:`${t} year${t>1?"s":""} ago`},"getFormattedTimeAgoEn"),y=m(e=>{if(e===0)return"";const{yearsAgo:t,monthsAgo:r,weeksAgo:s,daysAgo:a,hoursAgo:o,minutesAgo:n}=l(e);return n===0?`Hace ${e} segundo${e>1?"s":""}`:o===0?`Hace ${n} minuto${n>1?"s":""}`:a===0&&o===1?`${o} hora antes`:a===0?`Hace ${o} hora${o>1?"s":""}`:s===0?`Hace ${a} día${a>1?"s":""}`:r===0?`Hace ${s} semana${s>1?"s":""}`:t===0?`Hace ${r} mes${r>1?"es":""}`:`Hace ${t} año${t>1?"s":""}`},"getFormattedTimeAgoEs"),$=m(({lang:e,timestamp:t})=>{const[r,s]=f.useState(0);f.useEffect(()=>{s(Math.floor(Date.now()/1e3)-t);const n=setInterval(()=>{s(V=>V+1)},1e3);return()=>clearInterval(n)},[t]);const a=f.useMemo(()=>e==="es"?y(r):A(r),[e,r]),o=new Date(t*1e3);return _.jsx("span",{title:o.toString(),children:a})},"TimeAgo"),L=$;try{l.displayName="getTimeUnits",l.__docgenInfo={description:"",displayName:"getTimeUnits",props:{}}}catch{}try{A.displayName="getFormattedTimeAgoEn",A.__docgenInfo={description:"",displayName:"getFormattedTimeAgoEn",props:{}}}catch{}try{y.displayName="getFormattedTimeAgoEs",y.__docgenInfo={description:"",displayName:"getFormattedTimeAgoEs",props:{}}}catch{}try{$.displayName="TimeAgo",$.__docgenInfo={description:"",displayName:"TimeAgo",props:{lang:{defaultValue:null,description:"",name:"lang",required:!0,type:{name:"string"}},timestamp:{defaultValue:null,description:"",name:"timestamp",required:!0,type:{name:"number"}}}}}catch{}const Q={title:"Elements/TimeAgo",component:L,decorators:[e=>_.jsx("div",{style:{paddingLeft:"50px"},children:_.jsx(e,{})})]},U=60,q=U*60,O=q*24,i=Math.floor(Date.now()/1e3),R=i-5,z=i-U*5,B=i-q*5,C=i-O*5,c={args:{timestamp:i}},p={args:{timestamp:R}},g={args:{timestamp:z}},d={args:{timestamp:B}},u={args:{timestamp:C}};var h,T,S;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    timestamp: timestampNow
  }
}`,...(S=(T=c.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var M,E,H;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    timestamp: timestamp5Secs
  }
}`,...(H=(E=p.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var D,N,w;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    timestamp: timestamp5Mins
  }
}`,...(w=(N=g.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var x,I,F;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    timestamp: timestamp5Hrs
  }
}`,...(F=(I=d.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var j,k,v;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    timestamp: timestamp5Days
  }
}`,...(v=(k=u.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const W=["Default","Ago5Secs","Ago5Mins","Ago5Hrs","Ago5Days"];export{u as Ago5Days,d as Ago5Hrs,g as Ago5Mins,p as Ago5Secs,c as Default,W as __namedExportsOrder,Q as default};
