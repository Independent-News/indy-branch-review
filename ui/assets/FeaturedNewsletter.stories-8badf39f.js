var A=Object.defineProperty;var n=(e,r)=>A(e,"name",{value:r,configurable:!0});import{j as t}from"./jsx-runtime-1a1b98e7.js";import{V as D,E as P,P as U,U as k,S as j}from"./ExtraInfo-238d6ac5.js";import{d as a,o as W}from"./styled-components.browser.esm-852d80e5.js";import{t as R}from"./devices-1d39230d.js";import{p as B}from"./themes-2bc8cc20.js";import"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";import"./index-3b0e1f90.js";import"./Icon.hoc-5c5e8f19.js";import"./Icon.constants-a768151c.js";import"./Symbols.hoc-c2fda652.js";import"./index-f7d1b020.js";import"./Themed-b2849280.js";import"./index-08c90798.js";import"./logo-stamp-simple-plain-32-4eec5c48.js";import"./clampLines-a64b3b1f.js";import"./breakPoints-89c7d41a.js";import"./boxShadows-395cc866.js";import"./palette-273fb38f.js";import"./colors-3e41a0f7.js";import"./base-c8d9f963.js";import"./fontWeights-1d7bfb43.js";import"./zIndex-6061405c.js";const L=n((e,r,d="...")=>e.length>r?`${e.slice(0,r)}${d}`:e,"truncateString"),u=a.div.withConfig({componentId:"sc-1xvhex-0"})(["display:grid;overflow:hidden;box-sizing:border-box;grid-template-columns:1fr;border:1px solid ",";border-radius:8px;background-color:",";@media ","{grid-template-columns:1fr 1fr;}"],({theme:e})=>e.color.divider.brand,({theme:e})=>e.color.canvas.card,R),o=a.div.withConfig({componentId:"sc-1xvhex-1"})(["position:relative;width:100%;min-height:128px;background-color:",";background-image:url(",");background-position:center;background-size:cover;"],({theme:e})=>e.color.ink.light,({$image:e})=>e),c=a.div.withConfig({componentId:"sc-1xvhex-2"})(["display:flex;flex-direction:column;justify-content:space-between;gap:","px;padding:","px;"],({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x2),m=a.div.withConfig({componentId:"sc-1xvhex-3"})(["display:flex;width:100%;flex-direction:column;align-items:flex-start;justify-content:flex-start;gap:","px;"],({theme:e})=>e.spacing.x0_25),p=a.p.withConfig({componentId:"sc-1xvhex-4"})(["color:",";font:",";margin-block:0;"],({theme:e})=>e.color.ink.base.resting,({theme:e})=>e.textStyle.newsletterPreferences.featuredNewsletter.title),f=a.p.withConfig({componentId:"sc-1xvhex-5"})(["min-height:32px;color:",";font:",";margin-block:0;"],({theme:e})=>e.color.ink.base.resting,({theme:e})=>e.textStyle.newsletterPreferences.featuredNewsletter.standfirst);try{u.displayName="FeaturedNewsletterContainer",u.__docgenInfo={description:"",displayName:"FeaturedNewsletterContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{o.displayName="FeaturedNewsletterImage",o.__docgenInfo={description:"",displayName:"FeaturedNewsletterImage",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="FeaturedNewsletterContentContainer",c.__docgenInfo={description:"",displayName:"FeaturedNewsletterContentContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{m.displayName="FeaturedNewsletterTitleContainer",m.__docgenInfo={description:"",displayName:"FeaturedNewsletterTitleContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{p.displayName="FeaturedNewsletterTitle",p.__docgenInfo={description:"",displayName:"FeaturedNewsletterTitle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{f.displayName="FeaturedNewsletterStandfirst",f.__docgenInfo={description:"",displayName:"FeaturedNewsletterStandfirst",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const M="featured-newsletter-title",$="featured-newsletter-standfirst",O="featured-newsletter-image",z="featured-newsletter-subscribe-button",G="featured-newsletter-unsubscribe-button",H="featured-newsletter-premium-badge",X=70,l=n(({title:e,image:r,standfirst:d,frequency:S,author:V,onSampleClick:y,isSubscribed:E,isPremium:F,onSubscribe:I,onUnsubscribe:v})=>{const C=L(e,X);return t.jsxs(u,{children:[t.jsx(o,{$image:r,"data-testId":O,children:y&&t.jsx(D,{onClick:y,isFeatured:!0})}),t.jsxs(c,{children:[t.jsxs(m,{children:[t.jsx(p,{"data-testId":M,children:C}),t.jsx(f,{"data-testId":$,children:d})]}),t.jsxs(P,{children:[F&&t.jsx(U,{"data-testId":H}),S,V]}),E?t.jsx(k,{onClick:v,"data-testId":G}):t.jsx(j,{onClick:I,"data-testId":z})]})]})},"BaseFeaturedNewsletter");try{l.displayName="BaseFeaturedNewsletter",l.__docgenInfo={description:"",displayName:"BaseFeaturedNewsletter",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},standfirst:{defaultValue:null,description:"",name:"standfirst",required:!0,type:{name:"string"}},author:{defaultValue:null,description:"",name:"author",required:!0,type:{name:"string"}},frequency:{defaultValue:null,description:"",name:"frequency",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}},isSubscribed:{defaultValue:null,description:"",name:"isSubscribed",required:!1,type:{name:"boolean"}},isPremium:{defaultValue:null,description:"",name:"isPremium",required:!1,type:{name:"boolean"}},onSubscribe:{defaultValue:null,description:"",name:"onSubscribe",required:!0,type:{name:"() => void"}},onUnsubscribe:{defaultValue:null,description:"",name:"onUnsubscribe",required:!0,type:{name:"() => void"}},onSampleClick:{defaultValue:null,description:"",name:"onSampleClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const _=n(e=>t.jsx(W,{theme:B,children:t.jsx(l,{...e})}),"PremiumFeaturedNewsletter");try{_.displayName="PremiumFeaturedNewsletter",_.__docgenInfo={description:"",displayName:"PremiumFeaturedNewsletter",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},standfirst:{defaultValue:null,description:"",name:"standfirst",required:!0,type:{name:"string"}},author:{defaultValue:null,description:"",name:"author",required:!0,type:{name:"string"}},frequency:{defaultValue:null,description:"",name:"frequency",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}},isSubscribed:{defaultValue:null,description:"",name:"isSubscribed",required:!1,type:{name:"boolean"}},isPremium:{defaultValue:null,description:"",name:"isPremium",required:!1,type:{name:"boolean"}},onSubscribe:{defaultValue:null,description:"",name:"onSubscribe",required:!0,type:{name:"() => void"}},onUnsubscribe:{defaultValue:null,description:"",name:"onUnsubscribe",required:!0,type:{name:"() => void"}},onSampleClick:{defaultValue:null,description:"",name:"onSampleClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const g=n(e=>{const r=e.isPremium?_:l;return t.jsx(r,{...e})},"FeaturedNewsletter"),J=g;try{g.displayName="FeaturedNewsletter",g.__docgenInfo={description:"",displayName:"FeaturedNewsletter",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},standfirst:{defaultValue:null,description:"",name:"standfirst",required:!0,type:{name:"string"}},author:{defaultValue:null,description:"",name:"author",required:!0,type:{name:"string"}},frequency:{defaultValue:null,description:"",name:"frequency",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}},isSubscribed:{defaultValue:null,description:"",name:"isSubscribed",required:!1,type:{name:"boolean"}},isPremium:{defaultValue:null,description:"",name:"isPremium",required:!1,type:{name:"boolean"}},onSubscribe:{defaultValue:null,description:"",name:"onSubscribe",required:!0,type:{name:"() => void"}},onUnsubscribe:{defaultValue:null,description:"",name:"onUnsubscribe",required:!0,type:{name:"() => void"}},onSampleClick:{defaultValue:null,description:"",name:"onSampleClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const x={title:"Headline here which can be a maximum of 70 characters Headline here which can be a maximum of 70 characters",standfirst:"Standfirst here",author:"Author",frequency:"Frequency",image:"Image",isSubscribed:!1,isPremium:!1,onSubscribe:()=>{},onUnsubscribe:()=>{},onSampleClick:()=>{}},we={title:"Components/Newsletter Preferences/Featured Newsletter",component:J,tags:["storyshot:vp:all"]},i={args:x},s={args:{...x,isPremium:!0}};var b,h,w;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(w=(h=i.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var T,N,q;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    isPremium: true
  }
}`,...(q=(N=s.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};const Te=["Default","Premium"];export{i as Default,s as Premium,Te as __namedExportsOrder,we as default};
