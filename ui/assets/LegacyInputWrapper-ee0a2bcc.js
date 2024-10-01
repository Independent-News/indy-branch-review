var p=Object.defineProperty;var l=(e,r)=>p(e,"name",{value:r,configurable:!0});import{j as t}from"./jsx-runtime-1a1b98e7.js";import{W as d,a as u,E as c,I as m,b as h,e as f}from"./Input.styles-d7c02014.js";import{d as i}from"./styled-components.browser.esm-852d80e5.js";const g=i(d).withConfig({componentId:"sc-1cxkol4-0"})(["position:relative;"]),y=i.label.withConfig({componentId:"sc-1cxkol4-1"})(["position:absolute;top:-","px;left:","px;overflow:hidden;padding:0 ","px;background:linear-gradient( 0deg,"," 50%,"," 50% );color:",";font:",";pointer-events:none;text-align:left;text-overflow:ellipsis;user-select:none;white-space:nowrap;"],({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x2,({theme:e})=>e.spacing.x0_5,({theme:e})=>e.color.actionWhite.base,({theme:e})=>e.color.actionSubtleLight.alt,e=>e.theme.color.ink.base,({theme:e})=>e.textStyle.formInput.labelInset),W=l(({id:e,label:r,className:o,state:a,children:s,message:n})=>t.jsxs(g,{className:o,children:[t.jsx(u,{$state:a,children:s}),t.jsx(y,{htmlFor:e,children:r}),t.jsx(c,{"aria-live":"assertive",children:a===m.ERROR&&n&&t.jsx(h,{children:t.jsx("span",{id:f(e),children:n})})})]}),"FormInputWrapper");try{LegacyInputWrapper.displayName="LegacyInputWrapper",LegacyInputWrapper.__docgenInfo={description:"",displayName:"LegacyInputWrapper",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"Style guide: Text fields should always have a label",name:"label",required:!0,type:{name:"string"}},helpText:{defaultValue:null,description:"Style guide: Input constraints can be displayed here e.g. for Expiry Date: MM/YY",name:"helpText",required:!1,type:{name:"string"}},message:{defaultValue:null,description:`When controlled={true}, the message that will display on error
Otherwise, the state must be manually set to InputState.ERROR`,name:"message",required:!1,type:{name:"string"}},state:{defaultValue:null,description:`The state of the input - defines border style, and whether to show
error messages`,name:"state",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"success"'},{value:'"waiting"'}]}},required:{defaultValue:null,description:`Whether to display the asterisk indicating a required field
Note: This is purely a VISUAL indicator, and does not affect validation`,name:"required",required:!1,type:{name:"boolean"}},controlled:{defaultValue:null,description:`Whether the input's validation (errors and state) are controlled by
react-hook-form (requiring use of FormProvider from
@indy /ui/Form)`,name:"controlled",required:!1,type:{name:"boolean"}}}}}catch{}export{W as F};
