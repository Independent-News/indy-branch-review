var T=Object.defineProperty;var o=(t,e)=>T(t,"name",{value:e,configurable:!0});import{_ as y}from"./iframe-7187a80e.js";import"../sb-preview/runtime.js";const{global:U}=__STORYBOOK_MODULE_GLOBAL__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__;var n="storybook/a11y",g=`${n}/result`,p=`${n}/request`,w=`${n}/running`,L=`${n}/error`,d=`${n}/manual`,a={RESULT:g,REQUEST:p,RUNNING:w,ERROR:L,MANUAL:d},{document:A,window:v}=U,r=f.getChannel(),i=!1,l,h=o(async t=>{let{manual:e}=await u(t);e||await O(t)},"handleRequest"),O=o(async t=>{l=t;try{let e=await u(t);if(!i){i=!0,r.emit(a.RUNNING);let _=(await y(()=>import("./axe-9d2289b5.js").then(N=>N.a),["./axe-9d2289b5.js","./_commonjsHelpers-f86d8be3.js"],import.meta.url)).default,{element:E="#storybook-root",config:R,options:m={}}=e,s=A.querySelector(E);if(!s)return;_.reset(),R&&_.configure(R);let c=await _.run(s,m),S=JSON.parse(JSON.stringify(c));l===t?r.emit(a.RESULT,S):(i=!1,O(l))}}catch(e){r.emit(a.ERROR,e)}finally{i=!1}},"run"),u=o(async t=>{let{parameters:e}=await v.__STORYBOOK_STORY_STORE__.loadStory({storyId:t})||{};return e.a11y||{config:{},options:{}}},"getParams");r.on(a.REQUEST,h);r.on(a.MANUAL,O);
