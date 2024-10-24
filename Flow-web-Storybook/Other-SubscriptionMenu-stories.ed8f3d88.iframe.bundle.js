"use strict";(self.webpackChunk_indy_flow_web=self.webpackChunk_indy_flow_web||[]).push([[7514],{"./stories/Other/SubscriptionMenu.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SubscribeMenuPremiumStory:()=>SubscribeMenuPremiumStory,SubscribeMenuStory:()=>SubscribeMenuStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _app_component_library_Menu_SubscribeMenu__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/component/library/Menu/SubscribeMenu.js"),_helpers_components_MockOther__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/helpers/components/MockOther.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Other/Subscription/Menu",component:_app_component_library_Menu_SubscribeMenu__WEBPACK_IMPORTED_MODULE_0__.A,tags:["storyshot:vp:all"]},SubscribeMenuStory={name:"Our Story",decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_helpers_components_MockOther__WEBPACK_IMPORTED_MODULE_1__.A,{reqOverrides:{url:"/our-story"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Story,{})})]},SubscribeMenuPremiumStory={name:"Premium",decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_helpers_components_MockOther__WEBPACK_IMPORTED_MODULE_1__.A,{reqOverrides:{url:""},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Story,{})})]},__namedExportsOrder=["SubscribeMenuStory","SubscribeMenuPremiumStory"]},"./app/component/library/Menu/SubscribeMenu.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../node_modules/.pnpm/styled-components@6.1.13_react-dom@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js"),_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./stories/__mocks__/@brightsites/flow-core/lib/providers/RequestProvider.js"),_app_config_theme_Styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/config/theme/Styles.js"),_app_constants_devices__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/constants/devices.js"),_app_constants_subscriberOrigin__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./app/constants/subscriberOrigin.js"),_app_util_getSubscriberOrigin__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./app/util/getSubscriberOrigin.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const MenuWrapper=styled_components__WEBPACK_IMPORTED_MODULE_6__.styled.section.withConfig({componentId:"sc-1m21nql-0"})(["box-shadow:0 1px 3px 0 ",";"],(({theme})=>theme.color.shadow.dark)),MenuList=styled_components__WEBPACK_IMPORTED_MODULE_6__.styled.ul.withConfig({componentId:"sc-1m21nql-1"})(["display:flex;justify-content:center;padding:0;margin:0;list-style:none;"]),MenuListItem=styled_components__WEBPACK_IMPORTED_MODULE_6__.styled.li.withConfig({componentId:"sc-1m21nql-2"})(["position:relative;padding:8px 7px;&.active{background:",";&.premium{background:",";}}&.premium::after{background:",";}&:hover::after{height:8px;}&::after{position:absolute;bottom:0;left:0;width:100%;height:0;background:",";content:'';transition:height 0.2s;}@media ","{padding:","px 20px;}"],(({theme})=>theme.color.actionBrand.base),(({theme})=>theme.color.premium.actionBrand.base),(({theme})=>theme.color.premium.actionBrand.base),(({theme})=>theme.color.actionBrand.base),_app_constants_devices__WEBPACK_IMPORTED_MODULE_2__.n5,(({theme})=>theme.spacing.x2)),MenuListLink=styled_components__WEBPACK_IMPORTED_MODULE_6__.styled.a.withConfig({componentId:"sc-1m21nql-3"})(["color:",";font:",";text-transform:uppercase;white-space:nowrap;.active &{color:",";&:hover{color:",";}}&:hover{color:",";}@media ","{font:",";}@media ","{font:",";}"],(({theme})=>theme.color.ink.base),(({theme})=>theme.textStyle.ourStory.menu.mobile),(({theme})=>theme.color.ink.inverted),(({theme})=>theme.color.ink.inverted),(({theme})=>theme.color.ink.base),_app_constants_devices__WEBPACK_IMPORTED_MODULE_2__.r7,(({theme})=>theme.textStyle.ourStory.menu.mobileL),_app_constants_devices__WEBPACK_IMPORTED_MODULE_2__.n5,(({theme})=>theme.textStyle.ourStory.menu.tablet)),Item=({item,path})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MenuListItem,{className:path===item.url?[`${item.class} active `]:item.class,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MenuListLink,{href:item.url,children:item.link})});Item.propTypes={item:prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({link:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,url:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,class:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string}),path:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string};const PremiumItem=({item,path})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider,{theme:_app_config_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.lF,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Item,{item,path})});PremiumItem.propTypes={item:prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({link:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,url:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,class:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string}),path:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string};const SubscribeMenu=({className,req,req:{url:currentURL}})=>{const location=(0,_app_util_getSubscriberOrigin__WEBPACK_IMPORTED_MODULE_4__.A)(req),menuItems={};Object.assign(menuItems,{premium:{link:"Premium",url:"/subscribe",class:"premium"}},location!==_app_constants_subscriberOrigin__WEBPACK_IMPORTED_MODULE_3__.Gc&&{dailyEdition:{link:"Daily Edition",url:"/subscribe/dailyedition",class:"daily-edition"}},{ourStory:{link:"Our Story",url:"/subscribe/our-story",class:"our-story"}});const path=currentURL.split("?")[0];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MenuWrapper,{className,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MenuList,{children:Object.keys(menuItems).map(((item,i)=>item===menuItems.premium?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PremiumItem,{item:menuItems[item],path:`/subscribe${path}`},i):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Item,{item:menuItems[item],path:`/subscribe${path}`},i)))})})};SubscribeMenu.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,req:prop_types__WEBPACK_IMPORTED_MODULE_7___default().object};const __WEBPACK_DEFAULT_EXPORT__=(0,_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_0__.ah)(SubscribeMenu)},"./app/constants/subscriberOrigin.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FB:()=>SUBSCRIBER_ORIGIN_UK,Gc:()=>SUBSCRIBER_ORIGIN_OTHERS,Ts:()=>SUBSCRIBER_ORIGIN_US,vV:()=>SUBSCRIBER_ORIGIN_EU});const SUBSCRIBER_ORIGIN_UK="uk",SUBSCRIBER_ORIGIN_US="us",SUBSCRIBER_ORIGIN_EU="eu",SUBSCRIBER_ORIGIN_OTHERS="others"},"./app/util/getSubscriberOrigin.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _app_constants_cookies__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/constants/cookies.ts"),_app_constants_subscriberOrigin__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/subscriberOrigin.js");const __WEBPACK_DEFAULT_EXPORT__=req=>{var _req$cookies;return(null===(_req$cookies=req.cookies)||void 0===_req$cookies?void 0:_req$cookies[_app_constants_cookies__WEBPACK_IMPORTED_MODULE_1__.vR])||_app_constants_subscriberOrigin__WEBPACK_IMPORTED_MODULE_0__.FB}},"./stories/helpers/components/MockOther.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/__mocks__/@brightsites/flow-core/lib/providers/RequestProvider.js"),_Mocker__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/helpers/components/Mocker.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}class MockOther extends _Mocker__WEBPACK_IMPORTED_MODULE_2__.A{setOverrides(props={}){(0,_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__.jq)(),(0,_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__.AX)(props.reqOverrides||{}),(0,_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__.M_)(props.localsOverrides||{})}}MockOther.propTypes=function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({reqOverrides:prop_types__WEBPACK_IMPORTED_MODULE_3___default().object},_Mocker__WEBPACK_IMPORTED_MODULE_2__.A.propTypes);const __WEBPACK_DEFAULT_EXPORT__=MockOther}}]);