var x=Object.defineProperty;var r=(e,a)=>x(e,"name",{value:a,configurable:!0});import{j as t}from"./jsx-runtime-1a1b98e7.js";import{r as b}from"./index-29d3bc65.js";import{u as q}from"./index.esm-13ba97b3.js";import{d as v}from"./styled-components.browser.esm-852d80e5.js";import{L as T}from"./LoadingEllipsis-a1f98bbd.js";import{I as u}from"./Input.styles-bb0b2ca6.js";import{F as w}from"./LegacyInputWrapper-a1137f03.js";import{I as E,a as V,u as L}from"./useInputButton-41ede04e.js";const A=v.div.withConfig({componentId:"sc-k95qg6-0"})(["position:absolute;top:50%;right:","px;transform:translateY(-50%);"],({theme:e})=>e.spacing.x2),F=r(({id:e,label:a,helpText:d,className:p,message:c,type:m="text",state:o,button:n,buttonAction:i,controlled:s=!0,required:f=!1,...h})=>{const l=q();if(s&&!l)throw new Error("FormInputs should be wrapped by a FormProvider from @indy/ui/Form, unless the controlled={false} prop is set");const y=s?l.register(e):{},g=L(r(()=>{i&&i()},"onAction")),I=r(()=>n?b.cloneElement(n,g):null,"createInputButton");return t.jsxs(w,{id:e,label:a,helpText:d,required:f,state:o,message:c,className:p,children:[t.jsx(E,{id:e,type:m,$hasButton:!!n,...h,...y}),o===u.WAITING&&t.jsx(A,{children:t.jsx(T,{})}),n&&o!==u.WAITING&&t.jsx(V,{children:I()})]})},"TextInput"),Y=F;try{LegacyTextInput.displayName="LegacyTextInput",LegacyTextInput.__docgenInfo={description:"",displayName:"LegacyTextInput",props:{button:{defaultValue:null,description:`A button that renders inside of the input. This button should not include
an onClick event - the action should be passed as a buttonAction instead`,name:"button",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},buttonAction:{defaultValue:null,description:`An action that is to be performed onClick or on Space/Enter keypress
and will be optimised for accessibility`,name:"buttonAction",required:!1,type:{name:"VoidFunction"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"Style guide: Text fields should always have a label",name:"label",required:!0,type:{name:"string"}},helpText:{defaultValue:null,description:"Style guide: Input constraints can be displayed here e.g. for Expiry Date: MM/YY",name:"helpText",required:!1,type:{name:"string"}},message:{defaultValue:null,description:`When controlled={true}, the message that will display on error
Otherwise, the state must be manually set to InputState.ERROR`,name:"message",required:!1,type:{name:"string"}},state:{defaultValue:null,description:`The state of the input - defines border style, and whether to show
error messages`,name:"state",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"success"'},{value:'"waiting"'}]}},required:{defaultValue:{value:"false"},description:`Whether to display the asterisk indicating a required field
Note: This is purely a VISUAL indicator, and does not affect validation`,name:"required",required:!1,type:{name:"boolean"}},controlled:{defaultValue:{value:"true"},description:`Whether the input's validation (errors and state) are controlled by
react-hook-form (requiring use of FormProvider from
@indy /ui/Form)`,name:"controlled",required:!1,type:{name:"boolean"}}}}}catch{}export{Y as L};
