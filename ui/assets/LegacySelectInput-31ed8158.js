var g=Object.defineProperty;var o=(e,a)=>g(e,"name",{value:a,configurable:!0});import{j as t}from"./jsx-runtime-1a1b98e7.js";import{u as v}from"./index.esm-13ba97b3.js";import{T as I}from"./index-91ae8c1a.js";import{I as S}from"./Input.styles-d7c02014.js";import{F as x}from"./LegacyInputWrapper-ee0a2bcc.js";import{S as q,I as V,D as b}from"./SelectInput.styles-bee92c9d.js";const w=o(({id:e,label:a,helpText:i,className:u,message:d,state:p=S.DEFAULT,required:c=!1,controlled:r=!0,options:m,defaultValue:l,...f})=>{const n=v();if(r&&!n)throw new Error("FormInput components should have FormProvider & Form from @indy/ui/Form as parents, unless the controlled={false} prop is set");const h=l!==void 0,y=r?n.register(e):{};return t.jsxs(x,{id:e,label:a,helpText:i,required:c,state:p,message:d,className:u,children:[t.jsxs(q,{id:e,defaultValue:l||"",...f,...y,children:[!h&&t.jsx("option",{value:"",disabled:!0,children:"Select"}),m.map(s=>t.jsx("option",{children:s.label},s.value))]}),t.jsx(V,{children:t.jsx(b,{svg:I})})]})},"SelectInput"),R=w;try{LegacySelectInput.displayName="LegacySelectInput",LegacySelectInput.__docgenInfo={description:"",displayName:"LegacySelectInput",props:{options:{defaultValue:null,description:"A list of options to display in the select",name:"options",required:!0,type:{name:"SelectOption[]"}},defaultValue:{defaultValue:null,description:`Style guide: If it is likely that pre-selecting an option will
save the majority of users time, then we should pre-select the
default option`,name:"defaultValue",required:!1,type:{name:"string | number"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"Style guide: Text fields should always have a label",name:"label",required:!0,type:{name:"string"}},helpText:{defaultValue:null,description:"Style guide: Input constraints can be displayed here e.g. for Expiry Date: MM/YY",name:"helpText",required:!1,type:{name:"string"}},message:{defaultValue:null,description:`When controlled={true}, the message that will display on error
Otherwise, the state must be manually set to InputState.ERROR`,name:"message",required:!1,type:{name:"string"}},state:{defaultValue:{value:"InputState.DEFAULT"},description:`The state of the input - defines border style, and whether to show
error messages`,name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"success"'},{value:'"waiting"'}]}},required:{defaultValue:{value:"false"},description:`Whether to display the asterisk indicating a required field
Note: This is purely a VISUAL indicator, and does not affect validation`,name:"required",required:!1,type:{name:"boolean"}},controlled:{defaultValue:{value:"true"},description:`Whether the input's validation (errors and state) are controlled by
react-hook-form (requiring use of FormProvider from
@indy /ui/Form)`,name:"controlled",required:!1,type:{name:"boolean"}}}}}catch{}export{R as L};
