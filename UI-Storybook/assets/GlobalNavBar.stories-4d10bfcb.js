var S=Object.defineProperty;var s=(e,o)=>S(e,"name",{value:o,configurable:!0});import{j as r}from"./jsx-runtime-1a1b98e7.js";import{d as t,o as W}from"./styled-components.browser.esm-852d80e5.js";import{H as E}from"./Header-b76ceefb.js";import{R as _}from"./RegisterLoginButton-c5cfa879.js";import{p as D}from"./themes-ebe3f0f9.js";import{I as G,N as q}from"./NavBar-4a78fe9a.js";import"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";import"./index-3b0e1f90.js";import"./Dropdown-c8bc362d.js";import"./mixins-cd1fe61f.js";import"./devices-1d39230d.js";import"./breakPoints-89c7d41a.js";import"./index-f7d1b020.js";import"./Icon.hoc-5c5e8f19.js";import"./Icon.constants-a768151c.js";import"./Symbols.hoc-c2fda652.js";import"./DropdownWithChevron-b4a01949.js";import"./DropdownForCard-6832d1b4.js";import"./boxShadows-205bfb10.js";import"./palette-ce42e738.js";import"./colors-3e41a0f7.js";import"./base-c8d9f963.js";import"./fontWeights-1d7bfb43.js";import"./zIndex-6061405c.js";const l=t.div.withConfig({componentId:"sc-5vp3lo-0"})(["display:flex;position:relative;height:100%;align-items:center;justify-content:center;padding:0 ","px;background-color:",";font:"," 16px/22px ",";"],({theme:e})=>e.spacing.x0_5,({theme:e})=>e.color.canvas.secondary,({theme:e})=>e.fontWeight.bold,({theme:e})=>e.fontFamily.secondaryFont),c=s(({label:e,as:o})=>r.jsx(l,{as:o,children:e}),"MockText");try{l.displayName="Wrapper",l.__docgenInfo={description:"",displayName:"Wrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="MockText",c.__docgenInfo={description:"",displayName:"MockText",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"string"}}}}}catch{}const H=t(q).withConfig({componentId:"sc-1ca6zfp-0"})(["--border:1px solid ",";","{height:","px;justify-content:end;}"],({theme:e})=>e.color.divider.standard,G,({theme:e})=>e.dimension.globalNavBar.height),w=t.div.withConfig({componentId:"sc-1ca6zfp-1"})(["height:100%;border-right:var(--border);border-left:var(--border);"]),V=t(w).withConfig({componentId:"sc-1ca6zfp-2"})(["margin-right:auto;border:0;"]),M=t(w).withConfig({componentId:"sc-1ca6zfp-3"})(["display:flex;"]),h=t.a.withConfig({componentId:"sc-1ca6zfp-4"})(["display:flex;height:100%;align-items:center;padding:0 ","px;border-right:var(--border);background:",";color:",";transition:",";",";&:hover,&:active{background:",";color:",";}"],({theme:e})=>e.spacing.x1_5,({theme:e})=>e.color.actionTransparent.base,({theme:e})=>e.color.ink.base,({theme:e})=>e.transition.button,({theme:e})=>e.textStyle.globalNavBarLink,({theme:e})=>e.color.actionTransparent.alt,({theme:e})=>e.color.ink.inverted),R=t(h).withConfig({componentId:"sc-1ca6zfp-5"})(["background:",";color:",";&:hover,&:active{background:",";color:",";}"],({theme:e})=>e.color.actionBrand.base,({theme:e})=>e.color.ink.inverted,({theme:e})=>e.color.actionBrand.alt,({theme:e})=>e.color.ink.inverted),d=s(({leftBlock:e,rightBlock:o,className:I})=>r.jsxs(H,{className:I,children:[r.jsx(V,{children:e}),r.jsx(M,{children:o})]}),"GlobalNavBar");try{d.displayName="GlobalNavBar",d.__docgenInfo={description:`Currently used as the very top bar in the Masthead.

It is a full-width bar with two blocks, one on the left and one on the right.

The inner content is centred and never exceeds the width of the page`,displayName:"GlobalNavBar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},leftBlock:{defaultValue:null,description:"The elements to be left aligned",name:"leftBlock",required:!0,type:{name:"Children"}},rightBlock:{defaultValue:null,description:"The elements to be right aligned",name:"rightBlock",required:!0,type:{name:"Children"}}}}}catch{}const j=s(e=>r.jsx("div",{style:{minHeight:110},children:r.jsx(e,{})}),"DropdownDecorator"),fe={title:"Modules/Header/Global Nav Bar",component:d,argTypes:{leftBlock:{control:!1},rightBlock:{control:!1}}},N=r.jsx(E,{currentEdition:"UK Edition",editionChoices:[{path:"#US",locale:"US",title:"American Edition"},{path:"#Asia",locale:"AS",title:"Asian Edition"}]}),z=r.jsx(_,{href:"#",children:"Log In / Register"}),n={args:{leftBlock:r.jsx(c,{label:"Left block"}),rightBlock:r.jsx(c,{label:"Right block"})}},i={name:"With links and CTAs",args:{leftBlock:N,rightBlock:r.jsxs(r.Fragment,{children:[r.jsx(h,{href:"#",children:"This is a link"}),r.jsx(R,{href:"#",children:"This is a CTA"}),r.jsx(_,{href:"#",children:"Log In / Register"})]})},decorators:[j],parameters:{docs:{source:{code:`
          <GlobalNavBar
            leftBlock={
              <EditionSwitcherHeader {...} />
            }
            rightBlock={
              <>
                <Link href="#">This is a link</Link>
                <CTA href="#">This is a CTA</CTA>
                <RegisterLoginButton href="#">Log In / Register</RegisterLoginButton>
              </>
            }
          />
        `}}}},a={name:"With themed CTA",args:{leftBlock:N,rightBlock:r.jsxs(r.Fragment,{children:[r.jsxs(W,{theme:D,children:[r.jsx(h,{href:"#",children:"This is a link"}),r.jsx(R,{href:"#",children:"This is a CTA"})]}),z]})},decorators:[j],parameters:{docs:{source:{code:`
          <GlobalNavBar
            leftBlock={
              <EditionSwitcherHeader {...} />
            }
            rightBlock={
              <>
                <ThemeProvider theme={premium}>
                  <Link href="#">This is a link</Link>
                  <CTA href="#">This is a CTA</CTA>
                </ThemeProvider>
                <RegisterLoginButton href="#">Log In / Register</RegisterLoginButton>
              </>
            }
          />
        `}}}};var p,m,g,f,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    leftBlock: <MockText label="Left block" />,
    rightBlock: <MockText label="Right block" />
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source},description:{story:"The `<GlobalNavBar />` exists at the very top of the page and and is used to\nhouse site-wide actions and links.",...(u=(f=n.parameters)==null?void 0:f.docs)==null?void 0:u.description}}};var k,T,B,b,C;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'With links and CTAs',
  args: {
    leftBlock: editionSwitcher,
    rightBlock: <>
        <Link href="#">This is a link</Link>
        <CTA href="#">This is a CTA</CTA>
        <RegisterLoginButton href="#">Log In / Register</RegisterLoginButton>
      </>
  },
  decorators: [DropdownDecorator],
  parameters: {
    docs: {
      source: {
        code: \`
          <GlobalNavBar
            leftBlock={
              <EditionSwitcherHeader {...} />
            }
            rightBlock={
              <>
                <Link href="#">This is a link</Link>
                <CTA href="#">This is a CTA</CTA>
                <RegisterLoginButton href="#">Log In / Register</RegisterLoginButton>
              </>
            }
          />
        \`
      }
    }
  }
}`,...(B=(T=i.parameters)==null?void 0:T.docs)==null?void 0:B.source},description:{story:"`<Links />` and `<CTAs />` can be used to add custom links.",...(C=(b=i.parameters)==null?void 0:b.docs)==null?void 0:C.description}}};var v,x,L,y,A;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'With themed CTA',
  args: {
    leftBlock: editionSwitcher,
    rightBlock: <>
        <ThemeProvider theme={premium}>
          <Link href="#">This is a link</Link>
          <CTA href="#">This is a CTA</CTA>
        </ThemeProvider>
        {registerLoginButton}
      </>
  },
  decorators: [DropdownDecorator],
  parameters: {
    docs: {
      source: {
        code: \`
          <GlobalNavBar
            leftBlock={
              <EditionSwitcherHeader {...} />
            }
            rightBlock={
              <>
                <ThemeProvider theme={premium}>
                  <Link href="#">This is a link</Link>
                  <CTA href="#">This is a CTA</CTA>
                </ThemeProvider>
                <RegisterLoginButton href="#">Log In / Register</RegisterLoginButton>
              </>
            }
          />
        \`
      }
    }
  }
}`,...(L=(x=a.parameters)==null?void 0:x.docs)==null?void 0:L.source},description:{story:"`<Links />` and `<CTAs />` can be themed.",...(A=(y=a.parameters)==null?void 0:y.docs)==null?void 0:A.description}}};const ue=["Default","WithLinksCTA","WithThemedCTA"];export{n as Default,i as WithLinksCTA,a as WithThemedCTA,ue as __namedExportsOrder,fe as default};
