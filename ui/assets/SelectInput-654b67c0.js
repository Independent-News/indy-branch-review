var v=Object.defineProperty;var i=(e,r)=>v(e,"name",{value:r,configurable:!0});import{j as t}from"./jsx-runtime-1a1b98e7.js";import{u as I}from"./index.esm-13ba97b3.js";import{T as S}from"./index-aefe2d3f.js";import{I as x}from"./Input.styles-d7c02014.js";import{F as q}from"./InputWrapper-6e2d265c.js";import{S as V,I as b,D as w}from"./SelectInput.styles-bee92c9d.js";const a=i(({id:e,label:r,helpText:u,className:d,message:p,state:m=x.DEFAULT,required:c=!1,controlled:l=!0,options:f,defaultValue:n,...h})=>{const s=I();if(l&&!s)throw new Error("FormInput components should have FormProvider & Form from @indy/ui/Form as parents, unless the controlled={false} prop is set");const y=n!==void 0,g=l?s.register(e):{};return t.jsxs(q,{id:e,label:r,helpText:u,required:c,state:m,message:p,className:d,children:[t.jsxs(V,{id:e,defaultValue:n||"",...h,...g,children:[!y&&t.jsx("option",{value:"",disabled:!0,children:"Select"}),f.map(o=>t.jsx("option",{children:o.label},o.value))]}),t.jsx(b,{children:t.jsx(w,{svg:S})})]})},"SelectInput"),W=a;try{a.displayName="SelectInput",a.__docgenInfo={description:"",displayName:"SelectInput",props:{options:{defaultValue:null,description:"A list of options to display in the select",name:"options",required:!0,type:{name:"SelectOption[]"}},defaultValue:{defaultValue:null,description:`Style guide: If it is likely that pre-selecting an option will
save the majority of users time, then we should pre-select the
default option`,name:"defaultValue",required:!1,type:{name:"string | number"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"Style guide: Text fields should always have a label",name:"label",required:!0,type:{name:"string"}},helpText:{defaultValue:null,description:"Style guide: Input constraints can be displayed here e.g. for Expiry Date: MM/YY",name:"helpText",required:!1,type:{name:"string"}},message:{defaultValue:null,description:`When controlled={true}, the message that will display on error
Otherwise, the state must be manually set to InputState.ERROR`,name:"message",required:!1,type:{name:"string"}},state:{defaultValue:{value:"InputState.DEFAULT"},description:`The state of the input - defines border style, and whether to show
error messages`,name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"success"'},{value:'"waiting"'}]}},required:{defaultValue:{value:"false"},description:`Whether to display the asterisk indicating a required field
Note: This is purely a VISUAL indicator, and does not affect validation`,name:"required",required:!1,type:{name:"boolean"}},controlled:{defaultValue:{value:"true"},description:`Whether the input's validation (errors and state) are controlled by
react-hook-form (requiring use of FormProvider from
@indy /ui/Form)`,name:"controlled",required:!1,type:{name:"boolean"}}}}}catch{}export{W as S};