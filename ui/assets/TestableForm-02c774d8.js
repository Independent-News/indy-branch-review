var N=Object.defineProperty;var k=(e,t,s)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var a=(e,t)=>N(e,"name",{value:t,configurable:!0});var c=(e,t,s)=>(k(e,typeof t!="symbol"?t+"":t,s),s);import{p as h,d as j,f as $,r as A,e as C,h as O,I as V}from"./Input.styles-d7c02014.js";import{j as b}from"./jsx-runtime-1a1b98e7.js";import{d as P}from"./styled-components.browser.esm-852d80e5.js";import{B as T,i as z}from"./Themed-b2849280.js";import{F as U}from"./Form-c2b0a4a6.js";import{a as Z,F as D}from"./index.esm-13ba97b3.js";import"./TextInput-64e27a40.js";import"./LegacyTextInput-118cf206.js";import"./PasswordInputWithValidationHints-f856ec54.js";import"./SelectInput-1f2b9b63.js";import"./LegacySelectInput-544e388d.js";import"./Checkbox-dae4ec21.js";import"./CheckboxWithDropdown-f379a249.js";import"./RadioButton-f6ab6ee3.js";import"./ValidationHint-40c6c1db.js";import{r as W}from"./index-29d3bc65.js";const d=a(({type:e,condition:t,message:s,messageBuilder:r})=>t?null:{type:e,message:s,messageBuilder:r},"handler"),Y=a(()=>({validate:e=>{const s=typeof h(e)=="string";return d({type:"isString",condition:s,message:"Field must be text only",messageBuilder:r=>`${r} must be text only`})}}),"isString"),G=a(()=>({validate:e=>{const t=!isNaN(e);return d({type:"isNumber",condition:t,message:"Field must be a number",messageBuilder:s=>`${s} must be a number`})}}),"isNumber"),w=a(()=>({validate:e=>d({type:"isBoolean",condition:typeof e=="boolean",message:"Field must be true or false",messageBuilder:s=>`${s} must be true or false`})}),"isBoolean"),J=a((e="string")=>({validate:t=>{if(e==="boolean")return w().validate(t,{});const r=h(t).length>0;return d({type:"required",condition:r,message:"Field is required",messageBuilder:i=>`${i} is required`})}}),"isNotEmpty"),K=a(()=>({validate:e=>{const t=h(e),r=/^(?=(.{1,64}@.{1,255}))([!#$%&amp;'*+\-\/=?\^_`{|}~a-zA-Z0-9}]{1,64}(\.[!#$%&amp;'*+\-\/=?\^_`{|}~a-zA-Z0-9]{0,}){0,})@((\[(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}\])|([a-zA-Z0-9-]{1,63}(\.[a-zA-Z0-9-]{2,63}){1,}))$/.test(t);return d({type:"isEmail",condition:r,message:"Please enter a valid email address",messageBuilder:()=>"Please enter a valid email address"})}}),"isEmail"),Q=a(e=>({validate:(t,s)=>{const i=h(t)===s[e];return d({type:"doesMatch",condition:i,message:"Fields must match",messageBuilder:n=>`${n} fields must match`})}}),"doesMatch"),X=a((e,t)=>({validate:s=>{const r=h(s),i=j(r,t),n={type:`hasMin${$(t||"")}`,condition:i>=e};return d(t?{...n,message:`Must contain minimum ${e} ${t}`,messageBuilder:()=>`Must contain minimum ${e} ${t}`}:{...n,message:`Minimum length is ${e} characters`,messageBuilder:()=>`Minimum length is ${e} characters`})}}),"hasMin"),L=a((e,t)=>({validate:s=>{const r=h(s),i=j(r,t),n={type:`hasMax${$(t||"")}`,condition:i<=e};return d(t?{...n,message:`Must contain maximum ${e} ${t}`,messageBuilder:()=>`Must contain maximum ${e} ${t}`}:{...n,message:`Maximum length is ${e} characters`,messageBuilder:()=>`Maximum length is ${e} characters`})}}),"hasMax"),tt=a((e,t,s)=>({validate:r=>{const i=Number(r),n={type:`hasRange${$(s||"")}`,condition:i>=e&&i<=t};return d(s?{...n,message:`Must contain a minimum value of ${e} ${s} and a maximum value of ${t} ${s}`,messageBuilder:()=>`Must contain a minimum value of ${e} ${s} and a maximum value of ${t} ${s}`}:{...n,message:`Minimum value is ${e} characters and maximum value is ${t} characters`,messageBuilder:()=>`Minimum value is ${e} characters and maximum value is ${t} characters`})}}),"hasRange"),et=a(()=>({validate:e=>{const s={type:"containsNoSpaces",condition:!h(e).includes(" ")};return d({...s,message:"Must not contain any spaces",messageBuilder:()=>"Must not contain any spaces"})}}),"containsNoSpaces"),st=a(e=>({validate:t=>{const s=h(t),r={type:"matchesRegex",condition:e.test(s)};return d({...r,message:"Field does not match the required format",messageBuilder:()=>"Field does not match the required format"})}}),"matchesRegex"),y=[],B=class B{constructor(t){c(this,"name");c(this,"primitiveType","string");c(this,"isRequired",!1);c(this,"validators",[]);this.name=t}initialise(t,s){this.primitiveType=t,this.validators=s}checkValid(){if(!this.validators.length)throw new Error("No validators set")}string(){return this.initialise("string",[[Y,y]]),this}number(){return this.initialise("number",[[G,y]]),this}boolean(){return this.initialise("boolean",[[w,y]]),this}required(){return this.isRequired=!0,this}isEmail(...t){return this.checkValid(),this.validators.push([K,t]),this}doesMatch(...t){return this.checkValid(),this.validators.push([Q,t]),this}hasMin(...t){return this.checkValid(),this.validators.push([X,t]),this}hasMax(...t){return this.checkValid(),this.validators.push([L,t]),this}hasRange(...t){return this.checkValid(),this.validators.push([tt,t]),this}containsNoSpaces(...t){return this.checkValid(),this.validators.push([et,t]),this}matchesRegex(...t){return this.checkValid(),this.validators.push([st,t]),this}};a(B,"SchemaEntry");let M=B;const H=class H{constructor(t){c(this,"self");c(this,"fields");c(this,"names");c(this,"errors",{});c(this,"validationHints");return this.self=t,this.fields=Object.keys(t),this.names=Object.entries(t).reduce((s,[r,i])=>({...s,[r]:i.name}),{}),this.validationHints={},this.initValidationHints(),this}static add(t){return new M(t)}get(t){return this.self[t]}getErrors(t){return this.errors[t]}setErrors(t,s){!s||s.length===0?delete this.errors[t]:this.errors[t]=s}getValidationHints(t){return this.validationHints[t]}setValidationHints(t,s,r,i,n){this.validationHints[t]={...this.validationHints[t],[s]:{passes:r,hint:i,errorType:n}}}initValidationHint(t){this.get(t).validators.forEach(r=>{const[i,n]=r,[u,p,v]=n;if(v){const g=typeof p=="string"?p:"",E=`${i.name}${$(g)}`;this.setValidationHints(t,[u,p].join("."),!1,v,E)}})}initValidationHints(){this.fields.forEach(t=>{this.initValidationHint(t)})}resetValidationHints(t){this.validationHints[t]&&Object.keys(this.validationHints[t]).forEach(s=>{this.validationHints[t][s].passes=!1})}async validate(t,s,r){const i=this.get(t);if(!i)return;const n=i.isRequired,u=await J(i.primitiveType).validate(s,r);if(n&&u)return this.setErrors(t,[u]),this.resetValidationHints(t),this.getErrors(t);const v=(await Promise.all(i.validators.map(async g=>{const[E,F]=g,[S,R,o]=F,l=await E(...F).validate(s,r);return o&&this.setValidationHints(t,[S,R].join("."),!l&&s!=="",o,l==null?void 0:l.type),l}))).filter(g=>g);return this.setErrors(t,v),this.getErrors(t)}};a(H,"Schema");let q=H;const rt=a((e,t={})=>{if(!e)throw new Error("No schema provided! Please provide a schema to useIndyForm");const s=Z({mode:"onTouched",resolver:A(e),...t}),{formState:r,getValues:i,setError:n}=s;W.useEffect(()=>{const o=e.fields,m=Object.keys(i()),l=o.filter(f=>!m.includes(f));if(l.length>0)throw new Error(`Fields ["${l.join('", "')}"] are included in the schema but missing or inaccessible by React Hook Form`)},[i,e.fields]);const u=a(o=>{const l=r.errors[o];if(l)return l[0].messageBuilder(e.names[o])},"getTextInputError"),p=a(o=>{const m=!!r.errors.root,l=!!r.errors[o],f=r.dirtyFields[o]&&!l;return l||m?V.ERROR:f?V.SUCCESS:V.DEFAULT},"getTextInputState");return{registerControlledInput:a((o,m)=>{var I;const l=((I=e.get(o))==null?void 0:I.isRequired)||!1,f=u(o),_=p(o);return{id:o,name:m||o,state:_,message:f,required:l,"aria-required":l,"aria-invalid":f==="error","aria-describedby":`${C(o)} ${O(o)}`}},"registerControlledInput"),methods:{...s,setFormError:a(o=>{n("root",{message:o})},"setFormError"),setFieldError:a((o,m)=>{n(o,{message:m},{shouldFocus:!0})},"setFieldError"),getFormError:a(()=>u("root"),"getFormError"),getFieldErrors:a(()=>e.fields.map(u).filter(Boolean),"getFieldErrors"),getFieldValidationHints:a(o=>e.validationHints[o],"getFieldValidationHints"),setError:n},formState:{...r,errors:r.errors}}},"useIndyForm"),it=P.div.withConfig({componentId:"sc-1svnbpo-0"})(["max-width:400px;"]),x=a(({onSubmit:e,schema:t,children:s})=>{const{methods:r,registerControlledInput:i}=rt(t),{handleSubmit:n,formState:u}=r;return b.jsx(it,{children:b.jsx(D,{...r,children:b.jsxs(U,{children:[s({registerControlledInput:i}),b.jsx(T,{type:z,disabled:!u.isValid,onClick:n(e),children:"Submit"})]})})})},"TestableForm"),Vt=x;try{x.displayName="TestableForm",x.__docgenInfo={description:`This wrapper exists to make testing easier by setting up a simple form
and accepting input elements as children to be tested.

This should not be used in production, but may be helpful reference`,displayName:"TestableForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"SubmitHandler<FormData>"}},schema:{defaultValue:null,description:"",name:"schema",required:!0,type:{name:"Schema<FormData>"}}}}}catch{}export{q as S,Vt as T};
