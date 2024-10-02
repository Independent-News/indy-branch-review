var b=Object.defineProperty;var r=(e,a)=>b(e,"name",{value:a,configurable:!0});import{j as t}from"./jsx-runtime-1a1b98e7.js";import{r as v}from"./index-29d3bc65.js";import{u as q}from"./index.esm-13ba97b3.js";import{d as T}from"./styled-components.browser.esm-852d80e5.js";import{L as w}from"./LoadingEllipsis-745b9517.js";import{I as d}from"./Input.styles-d7c02014.js";import{F as E}from"./InputWrapper-be201918.js";import{I as V,a as A,u as F}from"./useInputButton-c9dd920d.js";const _=T.div.withConfig({componentId:"sc-1lpmueu-0"})(["position:absolute;top:50%;right:","px;transform:translateY(-50%);"],({theme:e})=>e.spacing.x2),i=r(({id:e,label:a,helpText:p,className:m,message:c,type:f="text",state:o,button:n,buttonAction:s,controlled:l=!0,required:h=!1,...y})=>{const u=q();if(l&&!u)throw new Error("FormInputs should be wrapped by a FormProvider from @indy/ui/Form, unless the controlled={false} prop is set");const g=l?u.register(e):{},I=F(r(()=>{s&&s()},"onAction")),x=r(()=>n?v.cloneElement(n,I):null,"createInputButton");return t.jsxs(E,{id:e,label:a,helpText:p,required:h,state:o,message:c,className:m,children:[t.jsx(V,{id:e,type:f,$hasButton:!!n,...y,...g}),o===d.WAITING&&t.jsx(_,{children:t.jsx(w,{})}),n&&o!==d.WAITING&&t.jsx(A,{children:x()})]})},"TextInput"),Y=i;try{i.displayName="TextInput",i.__docgenInfo={description:"",displayName:"TextInput",props:{button:{defaultValue:null,description:`A button that renders inside of the input. This button should not include
an onClick event - the action should be passed as a buttonAction instead`,name:"button",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},buttonAction:{defaultValue:null,description:`An action that is to be performed onClick or on Space/Enter keypress
and will be optimised for accessibility`,name:"buttonAction",required:!1,type:{name:"VoidFunction"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"Style guide: Text fields should always have a label",name:"label",required:!0,type:{name:"string"}},helpText:{defaultValue:null,description:"Style guide: Input constraints can be displayed here e.g. for Expiry Date: MM/YY",name:"helpText",required:!1,type:{name:"string"}},message:{defaultValue:null,description:`When controlled={true}, the message that will display on error
Otherwise, the state must be manually set to InputState.ERROR`,name:"message",required:!1,type:{name:"string"}},state:{defaultValue:null,description:`The state of the input - defines border style, and whether to show
error messages`,name:"state",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"success"'},{value:'"waiting"'}]}},required:{defaultValue:{value:"false"},description:`Whether to display the asterisk indicating a required field
Note: This is purely a VISUAL indicator, and does not affect validation`,name:"required",required:!1,type:{name:"boolean"}},controlled:{defaultValue:{value:"true"},description:`Whether the input's validation (errors and state) are controlled by
react-hook-form (requiring use of FormProvider from
@indy /ui/Form)`,name:"controlled",required:!1,type:{name:"boolean"}}}}}catch{}export{Y as T};
