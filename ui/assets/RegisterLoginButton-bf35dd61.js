var I=Object.defineProperty;var f=(e,r)=>I(e,"name",{value:r,configurable:!0});import{j as t}from"./jsx-runtime-1a1b98e7.js";import{d as a,l as h,o as g}from"./styled-components.browser.esm-852d80e5.js";import{p as y}from"./themes-62dd66f0.js";import{m as q}from"./index-9c2b6667.js";import{I as V}from"./Icon.hoc-5c5e8f19.js";import{t as A}from"./mixins-cd1fe61f.js";const i=a.a.withConfig({componentId:"sc-i9z1xm-0"})(["display:flex;align-items:center;padding:0 ","px;border-radius:0;background-color:",";color:",";transition:",";",";&:hover,&:active{background:",";color:",";}"],({theme:e})=>e.spacing.x1_5,({theme:e})=>e.color.actionBrand.base,({theme:e})=>e.color.ink.inverted,({theme:e})=>e.transition.button,({theme:e})=>e.textStyle.registerLoginButton.base,({theme:e})=>e.color.actionBrand.alt,({theme:e})=>e.color.ink.inverted),n=a.a.withConfig({componentId:"sc-i9z1xm-1"})(["display:flex;min-width:0;box-sizing:border-box;flex:1 1 100%;align-items:center;gap:","px;padding:0 ","px;background-color:",";color:",";transition:",";"," &:hover,&:active{background-color:",";color:",";}"],({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x1_5,({theme:e})=>e.color.actionTransparent.base,({theme:e})=>e.color.actionInvert.base,({theme:e})=>e.transition.button,({theme:e})=>e.textStyle.registerLoginButton.base,({theme:e})=>e.color.actionTransparent.alt,({theme:e})=>e.color.actionInvert.alt),s=a(V).attrs({svg:q,size:"base"}).withConfig({componentId:"sc-i9z1xm-2"})(["flex-grow:0;flex-shrink:0;"]),l=a.div.withConfig({componentId:"sc-i9z1xm-3"})(["--width:","px;display:flex;width:var(--width);height:var(--width);flex:0 0 var(--width);align-items:center;justify-content:center;"],({theme:e})=>e.dimension.icon.large),b=a.span.withConfig({componentId:"sc-i9z1xm-4"})(["display:block;",""],A),d=a(b).withConfig({componentId:"sc-i9z1xm-5"})(["max-width:124px;line-height:normal;"]),c=a(b).attrs({as:"small"}).withConfig({componentId:"sc-i9z1xm-6"})(["position:relative;top:-1px;",""],({theme:e})=>e.textStyle.registerLoginButton.status),u=a.div.withConfig({componentId:"sc-i9z1xm-7"})(["display:flex;height:100%;align-items:stretch;"," ",""],({theme:e,$isRegistered:r,$isSubscriber:o})=>r||o?h(["","{","}"],n,e.textStyle.registerLoginButton.loggedIn):"",({theme:e,$isSubscriber:r})=>r?h(["","{color:",";&:hover,&:active{color:",";}}","{background-color:",";color:",";",";&:hover,&:active{background:",";color:",";}}"],n,e.color.actionBrandInvert.base,e.color.actionBrandInvert.alt,i,e.color.canvas.base,e.color.actionBrand.base,e.textStyle.registerLoginButton.link,e.color.canvas.base,e.color.actionBrand.alt):"");try{i.displayName="CTA",i.__docgenInfo={description:"The call to action button which sits alongside the main button",displayName:"CTA",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{n.displayName="Button",n.__docgenInfo={description:"The main button which displays the users current status",displayName:"Button",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{s.displayName="UserIcon",s.__docgenInfo={description:"",displayName:"UserIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="IconWrapper",l.__docgenInfo={description:"",displayName:"IconWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{d.displayName="Label",d.__docgenInfo={description:"",displayName:"Label",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="Status",c.__docgenInfo={description:"",displayName:"Status",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{u.displayName="Wrapper",u.__docgenInfo={description:"",displayName:"Wrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const _=f(({id:e,href:r,status:o,isSubscriber:p=!1,isRegistered:x=!1,cta:v,children:w,...T})=>{const m=t.jsxs(u,{...T,$isRegistered:x,$isSubscriber:p,children:[t.jsxs(n,{id:e,href:r,children:[t.jsx(l,{children:t.jsx(s,{})}),t.jsxs(d,{children:[w,o&&t.jsx(c,{children:o})]})]}),t.jsx(g,{theme:y,children:v})]});return p?t.jsx(g,{theme:y,children:m}):m},"RegisterLoginButton");try{_.displayName="RegisterLoginButton",_.__docgenInfo={description:`A button which can be used to both prompt the user to log in and also display
their status once they are.`,displayName:"RegisterLoginButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The main text of the button",name:"children",required:!0,type:{name:"Children"}},status:{defaultValue:null,description:"A subtext to the main button label",name:"status",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"A href for the button to follow",name:"href",required:!0,type:{name:"string"}},isRegistered:{defaultValue:{value:"false"},description:"Whether the button is representing a user that is a registered",name:"isRegistered",required:!1,type:{name:"boolean"}},isSubscriber:{defaultValue:{value:"false"},description:"Whether the button is representing a user that is a subscriber",name:"isSubscriber",required:!1,type:{name:"boolean"}},cta:{defaultValue:null,description:"An optional `<CTA />` to sit alongside the main button.",name:"cta",required:!1,type:{name:'ReactElement<IStyledComponentBase<"web", FastOmit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, never>> & string, string | JSXElementConstructor<...>>'}}}}}catch{}export{i as C,_ as R};
