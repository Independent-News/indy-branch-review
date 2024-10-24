"use strict";(self.webpackChunk_indy_flow_web=self.webpackChunk_indy_flow_web||[]).push([[6003],{"./stories/Other/NewsletterPageContent.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NewsletterPageStory:()=>NewsletterPageStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>NewsletterPageContent_stories});var prop_types=__webpack_require__("../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Breadcrumb=__webpack_require__("./app/component/library/Breadcrumb.js"),styled_components_browser_esm=__webpack_require__("../node_modules/.pnpm/styled-components@6.1.13_react-dom@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js");const BreadcrumbContainer=styled_components_browser_esm.styled.div.withConfig({componentId:"sc-1hfc5ty-0"})(["padding:0 16px;"]);var Image=__webpack_require__("../ui/dist/Image.js"),NativeImage=__webpack_require__("./app/component/library/Common/NativeImage.tsx");const Author=styled_components_browser_esm.styled.div.withConfig({componentId:"sc-123kzqf-0"})(["display:inline-block;position:relative;padding-left:",";color:",";font-size:12px;line-height:16px;",""],(({$additionalAuthor})=>!$additionalAuthor&&"4px"),(({theme:{color}})=>color.ink.muted),(({$frequency,$additionalAuthor})=>!$additionalAuthor&&$frequency&&(0,styled_components_browser_esm.css)(["&::before{display:inline-block;position:absolute;top:50%;left:0;width:1px;height:80%;background-color:",";content:'';transform:translateY(-50%);}"],(({theme})=>theme.color.ink.muted))));var devices=__webpack_require__("./app/constants/devices.js");const BodyCopy=styled_components_browser_esm.styled.p.withConfig({componentId:"sc-8zwqlj-0"})(["grid-column-start:1;grid-column-end:3;grid-row-start:2;margin:0;color:",";font-size:16px;font-weight:normal;letter-spacing:normal;line-height:20px;"],(props=>props.theme.color.ink.muted)),MobileAndDesktopBodyCopy=(0,styled_components_browser_esm.styled)(BodyCopy).withConfig({componentId:"sc-8zwqlj-1"})(["@media "," and ","{display:none;}"],devices.QK,devices.$r),TabletBodyCopy=(0,styled_components_browser_esm.styled)(BodyCopy).withConfig({componentId:"sc-8zwqlj-2"})(["display:none;@media "," and ","{display:block;}"],devices.QK,devices.$r);var Icon=__webpack_require__("../ui/dist/Icon.js"),checkCircle=__webpack_require__("./app/component/icons/24/checkCircle.svg"),plusCircle=__webpack_require__("./app/component/icons/24/plusCircle.svg"),jsx_runtime=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const Checkbox_Icon=Icon.Ay.default||Icon.Ay,Unselected=(0,styled_components_browser_esm.styled)(Checkbox_Icon).attrs({svg:plusCircle.A,size:Icon.CW}).withConfig({componentId:"sc-1sxab9n-0"})(["color:",";"],(props=>props.theme.color.ink.muted)),Selected=(0,styled_components_browser_esm.styled)(Checkbox_Icon).attrs({svg:checkCircle.A,size:Icon.CW}).withConfig({componentId:"sc-1sxab9n-1"})(["color:",";"],(props=>props.theme.color.semiotic.info)),Subscribed=(0,styled_components_browser_esm.styled)(Checkbox_Icon).attrs({svg:checkCircle.A,size:Icon.CW}).withConfig({componentId:"sc-1sxab9n-2"})(["color:",";"],(props=>props.theme.color.ink.light)),_Checkbox=({className,name})=>(0,jsx_runtime.jsxs)("div",{className,children:[(0,jsx_runtime.jsx)("input",{id:`select-${name}`,name,className:"newsletter-page-select-checkbox",type:"checkbox"}),(0,jsx_runtime.jsx)("label",{className:"checkbox-unselected",htmlFor:`select-${name}`,children:(0,jsx_runtime.jsx)(Unselected,{})}),(0,jsx_runtime.jsx)("label",{className:"checkbox-selected",htmlFor:`select-${name}`,children:(0,jsx_runtime.jsx)(Selected,{})}),(0,jsx_runtime.jsx)("label",{className:"checkbox-subscribed",children:(0,jsx_runtime.jsx)(Subscribed,{})})]});_Checkbox.propTypes={className:prop_types_default().string,name:prop_types_default().string};const Checkbox=(0,styled_components_browser_esm.styled)(_Checkbox).withConfig({componentId:"sc-1sxab9n-3"})(["position:relative;width:24px;height:24px;input{position:absolute;left:-9999px;opacity:0;visibility:hidden;}label{display:block;position:absolute;top:0;left:0;width:100%;height:100%;box-sizing:border-box;border-radius:50%;background:",";cursor:pointer;}input ~ label.checkbox-unselected{opacity:1;}input:checked ~ label.checkbox-unselected{opacity:0;}input ~ label.checkbox-selected{opacity:0;}input:checked ~ label.checkbox-selected{opacity:1;}label.checkbox-subscribed{display:none;}.subscribed &{label.checkbox-selected,label.checkbox-unselected{opacity:0;}label.checkbox-subscribed{display:block;cursor:inherit;}}"],(props=>props.theme.color.canvas.secondary)),Frequency=styled_components_browser_esm.styled.div.withConfig({componentId:"sc-8w0hyr-0"})(["display:inline-block;padding-right:4px;color:",";font-size:12px;line-height:16px;"],(props=>props.theme.color.ink.base)),ImageWrapper=styled_components_browser_esm.styled.div.withConfig({componentId:"sc-jw7szw-0"})(["overflow:hidden;width:62px;height:62px;border:solid 1px ",";border-radius:4px;@media "," and ","{width:84px;height:84px;}"],(props=>props.theme.color.divider.light),devices.QK,devices.$r),Title=styled_components_browser_esm.styled.h3.withConfig({componentId:"sc-16zqb1h-0"})(["margin-top:4px;margin-bottom:0;color:",";font-family:",";font-size:18px;font-weight:bold;letter-spacing:normal;line-height:22px;@media "," and ","{margin-bottom:4px;}"],(props=>props.theme.color.ink.base),(props=>props.theme.fontFamily.primaryFont),devices.QK,devices.$r),Wrapper=styled_components_browser_esm.styled.div.withConfig({componentId:"sc-cznvv-0"})(["display:grid;width:100%;height:100%;box-sizing:border-box;grid-template-columns:62px 1fr;grid-template-rows:auto auto 1fr;padding:8px;border-radius:4px;background:",";box-shadow:0 1px 4px 0 ",";font-family:",";grid-gap:8px;.subscribed &{opacity:0.3;}.newsletter-page-select{align-self:end;grid-column-start:2;grid-row-start:3;justify-self:end;}@media "," and ","{grid-template-columns:84px 1fr;grid-template-rows:auto 1fr;padding-top:10px;.newsletter-page-select{grid-row-start:2;}}@media ","{grid-template-columns:62px 1fr;grid-template-rows:auto auto 1fr;padding-top:8px;}"],(props=>props.theme.color.canvas.base),(({theme})=>theme.color.shadow.dark),(props=>props.theme.fontFamily.secondaryFont),devices.QK,devices.$r,devices.BY),Header=styled_components_browser_esm.styled.div.withConfig({componentId:"sc-cznvv-1"})(["align-self:end;grid-column-start:2;grid-row-start:1;@media "," and ","{align-self:start;}"],devices.QK,devices.$r),Label=styled_components_browser_esm.styled.div.withConfig({componentId:"sc-cznvv-2"})(["display:flex;flex-wrap:wrap;justify-content:flex-start;"]),IconImage=(0,styled_components_browser_esm.styled)(NativeImage.A).withConfig({componentId:"sc-1tj84so-0"})(["object-fit:cover;"]),Card=({item:{key,title,desc,frequency,author,additionalAuthor,icon}})=>(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsx)(ImageWrapper,{children:(0,jsx_runtime.jsx)(IconImage,{width:1,height:1,layout:Image.nb,src:icon})}),(0,jsx_runtime.jsxs)(Header,{children:[(0,jsx_runtime.jsxs)(Label,{children:[frequency&&(0,jsx_runtime.jsx)(Frequency,{children:frequency}),author&&(0,jsx_runtime.jsx)(Author,{$frequency:frequency,children:author}),additionalAuthor&&(0,jsx_runtime.jsx)(Author,{$additionalAuthor:!0,children:additionalAuthor})]}),(0,jsx_runtime.jsx)(Title,{children:title}),(0,jsx_runtime.jsx)(TabletBodyCopy,{children:desc})]}),(0,jsx_runtime.jsx)(MobileAndDesktopBodyCopy,{children:desc}),(0,jsx_runtime.jsx)(Checkbox,{className:"newsletter-page-select",name:key})]});Card.propTypes={item:prop_types_default().shape({key:prop_types_default().string,title:prop_types_default().string,desc:prop_types_default().string,frequency:prop_types_default().string,author:prop_types_default().string,additionalAuthor:prop_types_default().string,icon:prop_types_default().string})};const CardContainer=styled_components_browser_esm.styled.ul.withConfig({componentId:"sc-1xu5mh2-0"})(["display:grid;box-sizing:border-box;padding:0;padding-bottom:",";margin:0;border-bottom:",";list-style:none;@media ","{grid-template-columns:1fr;grid-auto-rows:minmax(186px,auto);grid-gap:12px;}@media ","{grid-template-columns:1fr;grid-auto-rows:minmax(142px,auto);grid-gap:12px;}@media ","{grid-template-columns:1fr 1fr 1fr;grid-auto-rows:minmax(186px,auto);grid-gap:16px;}"],(({$heroGroup})=>$heroGroup?"24px":"28px"),(($lastGroup,$heroGroup,theme)=>$lastGroup||$heroGroup?"":`solid 2px ${theme.color.divider.light}`),devices.wG,devices.QK,devices.BY),HeroGroupContainer=styled_components_browser_esm.styled.div.withConfig({componentId:"sc-1s71747-0"})(["border-top:solid 1px ",";"],(props=>props.theme.color.divider.light)),Group=styled_components_browser_esm.styled.li.withConfig({componentId:"sc-1s71747-1"})(["box-sizing:border-box;@media ","{padding:0 12px;}@media ","{width:554px;padding:0;margin:auto;}@media ","{width:1000px;padding:0 16px;margin:auto;}"],devices.wG,devices.QK,devices.BY),GroupContainer=styled_components_browser_esm.styled.ul.withConfig({componentId:"sc-1s71747-2"})(["padding:0;margin:0;border-top:solid 1px ",";background:",";list-style:none;"],(props=>props.theme.color.divider.light),(props=>props.theme.color.canvas.secondary)),GroupTitle=styled_components_browser_esm.styled.h2.withConfig({componentId:"sc-nk1pum-0"})(["padding-top:24px;padding-bottom:8px;margin:0;color:",";font-family:",";font-size:18px;line-height:22px;@media ","{padding-bottom:16px;}"],(props=>props.theme.color.ink.base),(props=>props.theme.fontFamily.secondaryFont),devices.BY),HeroTitle=styled_components_browser_esm.styled.h2.withConfig({componentId:"sc-1rfb1vi-0"})(["padding-top:24px;padding-bottom:8px;margin:0;color:",";font-family:",";font-size:22px;line-height:26px;"],(props=>props.theme.color.ink.base),(props=>props.theme.fontFamily.secondaryFont)),HeroGroup=({className,data})=>(0,jsx_runtime.jsxs)("div",{className,children:[(0,jsx_runtime.jsx)(HeroTitle,{children:null==data?void 0:data.name}),(0,jsx_runtime.jsx)(CardContainer,{$heroGroup:!0,children:null==data?void 0:data.cards.map((item=>(0,jsx_runtime.jsx)("li",{id:item.key,children:(0,jsx_runtime.jsx)(Card,{item})},item.key)))})]});HeroGroup.propTypes={className:prop_types_default().string,data:prop_types_default().object.isRequired};const Newsletters_HeroGroup=(0,styled_components_browser_esm.styled)(HeroGroup).withConfig({componentId:"sc-h8jg1a-0"})(["box-sizing:border-box;@media ","{padding:0 12px;}@media ","{width:554px;padding:0;margin:auto;}@media ","{width:1000px;padding:0 16px;margin:auto;}"],devices.wG,devices.QK,devices.BY),MainTitle=styled_components_browser_esm.styled.h2.withConfig({componentId:"sc-1220qhe-0"})(["padding-top:12px;margin:0 0 8px 0;color:",";font-family:",";font-size:28px;line-height:32px;text-align:center;@media ","{padding-top:16px;}@media ","{padding-top:24px;font-size:32px;}"],(props=>props.theme.color.ink.base),(props=>props.theme.fontFamily.primaryFont),devices.QK,devices.BY),SubTitle=styled_components_browser_esm.styled.p.withConfig({componentId:"sc-868a3t-0"})(["box-sizing:border-box;padding:0 12px;padding-bottom:16px;margin:0 auto;color:",";font-family:",";font-size:16px;line-height:20px;text-align:center;@media ","{width:554px;}"],(props=>props.theme.color.ink.muted),(props=>props.theme.fontFamily.secondaryFont),devices.QK),NewsletterPageContent=({heroGroup,otherGroups})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(BreadcrumbContainer,{children:(0,jsx_runtime.jsx)(Breadcrumb.Q,{currentPage:"Newsletters"})}),(0,jsx_runtime.jsx)(MainTitle,{children:"Free Newsletters"}),(0,jsx_runtime.jsx)(SubTitle,{children:"Sign up to as many of our exclusive emails as you like."}),(0,jsx_runtime.jsx)(HeroGroupContainer,{children:(0,jsx_runtime.jsx)(Newsletters_HeroGroup,{data:heroGroup})}),(0,jsx_runtime.jsx)(GroupContainer,{children:null==otherGroups?void 0:otherGroups.map(((group,index)=>(0,jsx_runtime.jsxs)(Group,{children:[(0,jsx_runtime.jsx)(GroupTitle,{children:group.name}),(0,jsx_runtime.jsx)(CardContainer,{$lastGroup:index===otherGroups.length-1,children:group.cards.map((item=>(0,jsx_runtime.jsx)("li",{id:item.key,children:(0,jsx_runtime.jsx)(Card,{item})},item.key)))})]},index)))})]}),NewslettersPageContent=NewsletterPageContent;NewsletterPageContent.propTypes={otherGroups:prop_types_default().arrayOf(prop_types_default().object),heroGroup:prop_types_default().object};var createImage=__webpack_require__("./stories/helpers/createImage.js");const mockNewslettersPreferences=[{key:"receivePopularMock",type:"regular",title:"News letter title",desc:"Our free fortnightly newsletter from The Independent's Race Correspondent",author:"newsletter author",additionalAuthor:"additional author",frequency:"Frequency",icon:(0,createImage.A)(0,150,0)},{key:"receiveUnpopularMock",type:"regular",title:"News letter title",desc:"Our free fortnightly newsletter from The Independent's Race Correspondent",author:"newsletter author",additionalAuthor:"additional author",frequency:"Frequency",icon:(0,createImage.A)(0,150,0)}];var MockOther=__webpack_require__("./stories/helpers/components/MockOther.js");const groups=((preferences,signupPageConfig=[])=>signupPageConfig.map((({name,cards})=>({name,cards:cards.map((card=>preferences.find((item=>item.key===card))||{}))}))))(mockNewslettersPreferences,[{name:"Popular",cards:["receivePopularMock","receivePopularMock","receivePopularMock","receivePopularMock"]},{name:"Not so popular",cards:["receiveUnpopularMock","receiveUnpopularMock","receiveUnpopularMock","receiveUnpopularMock","receiveUnpopularMock"]}]),NewsletterPageContent_stories={title:"Other/Newsletter Page Component",component:NewslettersPageContent,tags:["storyshot:vp:all"],decorators:[Story=>(0,jsx_runtime.jsx)(MockOther.A,{children:(0,jsx_runtime.jsx)(Story,{})})]},NewsletterPageStory={name:"Logged out newsletters page",args:{heroGroup:groups[0],otherGroups:groups.slice(1)}},__namedExportsOrder=["NewsletterPageStory"]},"./app/component/icons/24/checkCircle.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=props=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",id:"01504b1fce2b76dd",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"currentColor",d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24M9.6 18l-6-6 1.7-1.7 4.3 4.3 9.1-9.1 1.7 1.7z"})))},"./app/component/icons/24/plusCircle.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _rect,_path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=props=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",id:"f2b87e38bf3b2632",viewBox:"0 0 24 24"},props),_rect||(_rect=react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{width:24,height:24,fill:"none",rx:12})),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"currentColor",d:"M20 13.14h-6.86V20h-2.28v-6.86H4v-2.28h6.86V4h2.28v6.86H20z"})))},"./app/component/library/Common/NativeImage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react_helmet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/react-helmet@6.1.0_react@18.3.1/node_modules/react-helmet/es/Helmet.js"),_indy_ui_Image__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../ui/dist/Image.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _excluded=["src","srcset","sizes","preload","fetchPriority","loading","layout","height","width"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{src,srcset,sizes,preload=!1,fetchPriority,loading="lazy",layout,height,width}=_ref,others=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__.A)(_ref,_excluded);const isDataImage=!!src&&src.startsWith("data:");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[preload&&!isDataImage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("link",{rel:"preload",as:"image",href:src,imageSrcSet:srcset,imageSizes:sizes,fetchPriority})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_indy_ui_Image__WEBPACK_IMPORTED_MODULE_2__.Ay,_objectSpread(_objectSpread({src,srcSet:srcset,sizes,fetchpriority:fetchPriority,layout:null!=layout?layout:_indy_ui_Image__WEBPACK_IMPORTED_MODULE_2__.uL,height,width},"high"!==fetchPriority&&{loading}),others))]})}},"./app/component/library/Breadcrumb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>Breadcrumb});var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/styled-components@6.1.13_react-dom@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _Breadcrumb=({className,currentPage})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"/",children:"Home"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"breadcrumb-segment-active",children:[" > ",currentPage]})]}),Breadcrumb=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.styled)(_Breadcrumb).withConfig({componentId:"sc-ea4wza-0"})(["display:flex;flex-direction:row;justify-content:flex-start;padding-top:24px;padding-bottom:12px;",";.breadcrumb-segment-active{color:",";}"],(({theme})=>theme.textStyle.breadcrumb.soloPage),(({theme:{color}})=>color.ink.base));_Breadcrumb.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,currentPage:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string}},"./stories/helpers/components/MockOther.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/__mocks__/@brightsites/flow-core/lib/providers/RequestProvider.js"),_Mocker__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/helpers/components/Mocker.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}class MockOther extends _Mocker__WEBPACK_IMPORTED_MODULE_2__.A{setOverrides(props={}){(0,_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__.jq)(),(0,_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__.AX)(props.reqOverrides||{}),(0,_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__.M_)(props.localsOverrides||{})}}MockOther.propTypes=function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({reqOverrides:prop_types__WEBPACK_IMPORTED_MODULE_3___default().object},_Mocker__WEBPACK_IMPORTED_MODULE_2__.A.propTypes);const __WEBPACK_DEFAULT_EXPORT__=MockOther},"../ui/dist/Icon-d4f7b391.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>d});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),_Icon_constants_aeed18dd_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../ui/dist/Icon.constants-aeed18dd.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../node_modules/.pnpm/styled-components@6.1.13_react-dom@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js"),_Symbols_7395c1ec_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../ui/dist/Symbols-7395c1ec.js");const _excluded=["svg","size"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var m=Object.defineProperty,s=(o,r)=>m(o,"name",{value:r,configurable:!0});const l=(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.styled)(_Symbols_7395c1ec_js__WEBPACK_IMPORTED_MODULE_3__.S).withConfig({componentId:"sc-culv3z-0"})(["display:block;color:currentColor;"]),d=s((_ref=>{let{svg:o,size:r=_Icon_constants_aeed18dd_js__WEBPACK_IMPORTED_MODULE_2__.a}=_ref,i=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__.A)(_ref,_excluded);const t=_Icon_constants_aeed18dd_js__WEBPACK_IMPORTED_MODULE_2__.e[r];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(l,_objectSpread(_objectSpread({},i),{},{svg:o,width:t,height:t}))}),"Icon");d.displayName="Icon"},"../ui/dist/Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>_Icon_d4f7b391_js__WEBPACK_IMPORTED_MODULE_1__.I,CW:()=>_Icon_constants_aeed18dd_js__WEBPACK_IMPORTED_MODULE_3__.a,Kk:()=>_Icon_constants_aeed18dd_js__WEBPACK_IMPORTED_MODULE_3__.S,Oq:()=>_Icon_constants_aeed18dd_js__WEBPACK_IMPORTED_MODULE_3__.c,Sy:()=>e,X4:()=>_Icon_constants_aeed18dd_js__WEBPACK_IMPORTED_MODULE_3__.b});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_Icon_d4f7b391_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../ui/dist/Icon-d4f7b391.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),_Icon_constants_aeed18dd_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../ui/dist/Icon.constants-aeed18dd.js");__webpack_require__("../ui/dist/Symbols-7395c1ec.js"),__webpack_require__("../node_modules/.pnpm/react-side-effect@2.1.2_react@18.3.1/node_modules/react-side-effect/lib/index.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var p=Object.defineProperty,r=(o,t)=>p(o,"name",{value:t,configurable:!0});function e(o){return r((function(a){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Icon_d4f7b391_js__WEBPACK_IMPORTED_MODULE_1__.I,_objectSpread(_objectSpread({},a),{},{svg:o}))}),"WrappedIcon")}r(e,"withIcon")},"../ui/dist/Image.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>w,nb:()=>d,uL:()=>o,wm:()=>i});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/.pnpm/styled-components@6.1.13_react-dom@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js");const _excluded=["layout","height","width"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var t=Object.defineProperty,z=(l,h)=>t(l,"name",{value:h,configurable:!0});const d="fill",i="fixed",o="responsive",f=z((({$layout:l,$width:h,$height:m})=>l===i?(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["width:","px;height:","px;"],h,m):(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["width:100%;height:100%;"])),"layoutStyles"),g=styled_components__WEBPACK_IMPORTED_MODULE_2__.styled.img.withConfig({componentId:"sc-1mc30lb-0"})(["",""],f),w=z((_ref=>{let{layout:l=o,height:h,width:m}=_ref,v=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(g,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({src:"data:image/svg+xml,%3Csvg viewBox='0 0 48 36' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='48' height='36' fill='%23222222' /%3E%3Cg transform='translate(12 6)'%3E%3Ccircle fill='%23EC1A2E' cx='12' cy='12' r='12' /%3E%3Cpath fill='%23ffffff' d='M17.9 15.8c-.2-.1-.2-.1-1.2-.7 0 0-.8.2-1.8.4 0 0 0 .1.1.1v.1h-.2v.1l-.6-.5v-.2l-.1-.4.1-.2V14l-.6.6 1.9-2.2-.6-.1h1c.1.1.3.2.5.1l-.2-.3.1-.1c.1 0 .2 0 .2.1.1.1.1.2 0 .3.1 0 .2-.1.3-.2.1-.1.1-.4 0-.5l-.3-.3c0-.3-.1-.5-.4-.6-.5-.2-.9-.4-.9-.4h-1.3l1.3-.2.4-.3 1.5-.6s.1 0 .1-.1l.1-.1c.2-.5.8-2.1.8-2.1l1.8-2.4-1.2.8.5-1-.8 1.1.1-1.1-.3 1.1-.5-1.1.3 1.3v.6l-.1-.6-.8-1.3.6 1.4v1l-.1-1-1-1.3.9 1.4.1 1.4-.9-1.3-1.2-1.2 1 1.3.1 1.7-.3-1.6-1.2-1 1 1.1.2 1.7-.4-1.6-1.2-.8 1 .9.3 1.7-.5-1.6-1.1-.6 1 .7.3 1.7-.5-1.5-1.1-.4.9.5.4 1.5-.6-1.4-1-.2.8.3.4 1.4-.7-1.1-.9-.1.7.2.5 1.1-.7-.9h-.8l.6.1.6.8-.7-.6-.8.2h.7l.5.8-.8-.4-.9.1h.8l.7.4-.7-.2-1.2.2H13l.7.3-.7.1-1.8.3 1.4.1-1.1.2h.8l-.9.2.4.5-.8-.7-2.2-3-2-1-1.7-1.3-.4-1.3.2 1.5.8 1.2-1.2-.9-.5-1 .2 1.2.5 1-1-.8-.4-.6.2.9.5.8-.9-.5-.4-.4.3.7.4.5-.5-.1.9.9H3l1.1.7h-.5l1.2.5-.4.2 3 .2H5.7v.3h2.1l-1.5.2-.1.4 2-.3-1.6.4v.5l2.1-.6-1.7.8v.4l2.1-.9-1.7.9.1.4 2.1-1-1.7 1.1.1.4 2-1.1-1.5 1 .1.5 1.6-1-1.1.8.2.4.8-.5-.3.3.1.3.2-.1.3-.1.1-.1h.2l.1-.1v-.8.8l-.1.1h-.2c-.1.1-.3.1-.4.2l-2.3.9-1.5 2.4.1.1 1.7-1.9-1 1.5.6-.1.9-1.4-.7 1.3h.6l.6-1.3-.2 1.3h.6l.4-1.2-.2 1.2.6-.1.1-1.1v1l.4-.2-.1-.8.2.7.2.1.1.3.2.1.4.3.1.1-.2-.1c-.9.2-1.7.5-2.5.7l.9.5.4.2.2.1s.1 0 .1.1c0 0 .1.1.1.2v.2-.2s0-.1-.1-.1l-.1-.1c-.1 0-.1-.1-.2-.1l-.4-.2-.3-.1-.8.2c-.3.1-.3.5 0 .6.4.2.8.3 1.2.4.1.1.3.1.4.1.2 0 .3-.1.4-.1l1.1-.5c.7-.4 1.8-1.2 1.8-1.2l-.8.8c.6-.3 1.1-.5 1.5-.6.4-.2.8-.5 1.2-.7l-.6.5c.6-.1 1.7-.2 2.3-.2.7-.1.8-.8.4-1zM16 11.3l.3.3v.1c-.2-.1-.3-.2-.3-.4zm-.7-.3s.1 0 0 0c.1 0 .1 0 0 0 .1 0 .1 0 0 0l.1-.1v.1h-.2.1c0 .1 0 .1 0 0 0 .1 0 .1 0 0zm0 .8s0-.1 0 0c0-.1 0-.1 0 0l.1-.1h.1c-.1.1-.1.1-.2.1.1 0 .1 0 0 0 .1 0 .1 0 0 0 .1 0 .1.1 0 0l.1.1v-.1h-.1zM5.4 5.4l.9 1.2 1.5.7-1.6-.6-.8-1.3zM4 6.4l1 .9 1.9.6-2-.5-.9-1zm-.5.5 1 .8 2.3.6-2.4-.4-.9-1zm.2 1.3 3.2.6-2.4-.3-.8-.3zM7 9.3l-1.6-.2-.9-.2 2.5.4zm.1-1.7L5.4 7l-.7-1 .8.9 1.6.7zm.2.6v-.4.2l.7-.4-.7.6zm.1.5v-.4.2l1-.5-1 .7zm.3.5v-.4.2l1-.6-1 .8zm.4.5v-.4.2l1-.5-1 .7zm.6.3v-.4.2l.9-.5-.9.7zm.5.4V10v.2l.8-.4-.8.6zm.6.3v-.4.2l.5-.2-.5.4zm.4.4v-.3.2l.4-.2-.4.3zm.3.3v-.3.1l.5-.2-.5.4zm.3.8V12v.1l.2-.1-.2.2zm-.1-.4v-.2.1l.3-.2-.3.3zm-1.2 2.5v-.1h-.1.3l-.2.1zm.7 0v-.1h-.1.3l-.2.1zm.2 4.1-.3-.1-.3-.1-.5-.2.5-.1-.3.1.4.2c.1 0 .2.1.2.1l.3.1zm2.7-4.5v-.1H13l.3-.1-.2.2zm-.6-.7.5-.2-.3.4v-.2h-.2zm-.2.9.2-.1-.2.2v-.1zm.1-1.7.5-.2-.3.4v-.2h-.2zm1.2.9v-.1h-.1l.3-.1-.2.2zm.4-1.2V12h-.1.3l-.2.1zm.4-1.3h.3l-.2.2-.1-.2zm-.2 1.8-.2.2v-.1h-.1l.3-.1zm0-1.4-.3.2.1-.2-.2-.1.4.1zm-.5-.6h.3l-.2.2.1-.1-.2-.1zm-.1 1.8-.2.3v-.2h-.2l.4-.1zm0-.8-.3.4.1-.2h-.2l.4-.2zm-.2-.5-.3.2.1-.2H13h.4zm-.6-.5h.3l-.2.2-.1-.2zm-.1.9-.3.4.1-.2-.2-.1.4-.1zm-.8 2.1.4-.1-.3.3.1-.2h-.2zm.2-2.7h.4l-.3.2.1-.2h-.2zm0 2-.2.3V13h-.2l.4-.1zm-.1-.7-.2.3v-.2h-.2l.4-.1zm-.5-.5.3-.1-.2.2v-.1h-.1zm-.8 2.2v-.1h-.1.3l-.2.1zm.2.5v-.1h-.1.3l-.2.1zm.3-.9v-.1h-.1.3l-.2.1zm.2.5v-.1l-.1-.1h.3l-.2.2zm.3.5v-.1h-.1.3l-.2.1zm-1.1 2.6h-.4.4c.1-.1.2-.1.2-.2h.1c.1 0 .2-.1.3-.1.1 0 .2-.1.3-.1h.5-.2l-.2.1h-.2c-.1 0-.2.1-.3.1H11l-.1.1h-.1l-.2.1zm2.7-.5-.3.1-.1.1c-.1 0-.1.1-.2.1l-.5.1-.3.1-.2.1c-.1 0-.1 0-.1.1h-.1l-.1.1h-.1c-.1 0-.1 0-.2.1h-.2.2l.2-.1.2-.1h.1l.1-.1.2-.1c.1 0 .2-.1.3-.1l.5-.2h.2l.2-.1.2-.1.1-.1-.1.1zm-1.1-.5c.1 0 .1 0 0 0 .1 0 .1 0 0 0 .1 0 .1 0 0 0h.1v.2c0-.2 0-.2-.1-.2zm.8-.2s.1 0 0 0c.1 0 .1 0 .1.1v.1l-.1-.2c0 .1 0 .1 0 0 0 .1-.1 0 0 0h-.3v.2l-.3-.4-.2-.9.7.8h.2l.6.3H13zm1-.3c.1 0 .1 0 0 0 .1 0 .1 0 0 0h.1s.1 0 .1.1v.2l-.2-.3zm.9.6h-.1c-.1 0-.2.1-.3.1-.1 0-.2 0-.3.1h-.1.1c.1 0 .2-.1.3-.1h.4v-.1zm.3-.4c.1-.1.1-.1.2-.1s.3-.1.4-.1h.6-.6c-.1.1-.3.2-.6.2zm1.8 0h-1.6 1.8-.2z' /%3E%3C/g%3E%3C/svg%3E%0A",$layout:l,$height:h,$width:m},v))}),"Image")}}]);