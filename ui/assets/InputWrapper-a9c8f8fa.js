var p=Object.defineProperty;var l=(r,a)=>p(r,"name",{value:a,configurable:!0});import{j as e}from"./jsx-runtime-1a1b98e7.js";import{s as m}from"./index-f40e3ffd.js";import"./Icon.hoc-5c5e8f19.js";import{S as c}from"./Icon.constants-a768151c.js";import{a as t,W as h,L as f,R as y,H as g,h as x,E as I,I as q,b as v,c as b,e as j}from"./Input.styles-d7c02014.js";const w=l(({id:r,label:a,helpText:s,className:o,message:n,state:i,required:d,children:u})=>e.jsxs(h,{className:o,children:[e.jsx(f,{htmlFor:r,children:a}),d&&e.jsx(y,{"aria-hidden":!0,children:"*"}),s&&e.jsx(g,{id:x(r),children:s}),e.jsx(t,{$state:i,children:u}),e.jsx(I,{"aria-live":"assertive",children:i===q.ERROR&&n&&e.jsxs(v,{children:[e.jsx(b,{svg:m,size:c}),e.jsx("span",{id:j(r),children:n})]})})]}),"FormInputWrapper");try{t.displayName="InputWrapper",t.__docgenInfo={description:"",displayName:"InputWrapper",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"Style guide: Text fields should always have a label",name:"label",required:!0,type:{name:"string"}},helpText:{defaultValue:null,description:"Style guide: Input constraints can be displayed here e.g. for Expiry Date: MM/YY",name:"helpText",required:!1,type:{name:"string"}},message:{defaultValue:null,description:`When controlled={true}, the message that will display on error
Otherwise, the state must be manually set to InputState.ERROR`,name:"message",required:!1,type:{name:"string"}},state:{defaultValue:null,description:`The state of the input - defines border style, and whether to show
error messages`,name:"state",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"success"'},{value:'"waiting"'}]}},required:{defaultValue:null,description:`Whether to display the asterisk indicating a required field
Note: This is purely a VISUAL indicator, and does not affect validation`,name:"required",required:!1,type:{name:"boolean"}},controlled:{defaultValue:null,description:`Whether the input's validation (errors and state) are controlled by
react-hook-form (requiring use of FormProvider from
@indy /ui/Form)`,name:"controlled",required:!1,type:{name:"boolean"}}}}}catch{}export{w as F};
