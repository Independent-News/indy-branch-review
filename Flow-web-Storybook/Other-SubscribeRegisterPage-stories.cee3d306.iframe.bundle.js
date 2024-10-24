"use strict";(self.webpackChunk_indy_flow_web=self.webpackChunk_indy_flow_web||[]).push([[2550],{"./stories/Other/SubscribeRegisterPage.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdFree:()=>AdFree,Premium:()=>Premium,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SubscribeRegisterPage_stories});var subscription=__webpack_require__("./app/constants/subscription.js"),prop_types=__webpack_require__("../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Helmet=__webpack_require__("../node_modules/.pnpm/react-helmet@6.1.0_react@18.3.1/node_modules/react-helmet/es/Helmet.js"),styled_components_browser_esm=__webpack_require__("../node_modules/.pnpm/styled-components@6.1.13_react-dom@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js"),RequestProvider=__webpack_require__("./stories/__mocks__/@brightsites/flow-core/lib/providers/RequestProvider.js"),ids=__webpack_require__("./app/constants/ids.js"),Frame=__webpack_require__("./app/component/library/Frame.js"),PaymentFlow=__webpack_require__("./app/component/library/StaticPage/PaymentFlow/index.js"),IndyHydrateIsland=__webpack_require__("./app/component/library/Hydration/IndyHydrateIsland.js"),piano=__webpack_require__("./app/constants/piano.js"),doForgottenPasswordRedirectForSubscriptions=__webpack_require__("./app/public/js/doForgottenPasswordRedirectForSubscriptions.js"),Register=__webpack_require__("./app/component/library/Register/index.js"),jsx_runtime=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const SubscribeRegister=({isAdFreeOnly,offerId,termId,regSourceMethod,regSourceSection,isAdFreeSubscription})=>(0,jsx_runtime.jsx)(Register.s4,{className:"subscription-register-reg-form",alreadyHasAccountMessage:"This account already exists.<br /> Please log in to proceed to payment.",submitButtonCopy:"Confirm details",isPremium:!isAdFreeOnly,offerId,termId,regSourceMethod,regSourceSection,shouldRenderSoftOptIn:!0,onForgottenPasswordClick:evt=>{evt.preventDefault(),(0,doForgottenPasswordRedirectForSubscriptions.A)({offerIdParamName:piano.RO,termIdParamName:piano.Rb})},userFlowType:Register.qI,isAdFreeSubscription,isUsingShortRegistrationForm:!0});SubscribeRegister.propTypes={isAdFreeOnly:prop_types_default().bool,offerId:prop_types_default().string,termId:prop_types_default().string,regSourceMethod:prop_types_default().string,regSourceSection:prop_types_default().string,isAdFreeSubscription:prop_types_default().bool};const Register_SubscribeRegister=SubscribeRegister;var PaymentFlowLayoutAdFree=__webpack_require__("./app/component/library/StaticPage/PaymentFlow/PaymentFlowLayoutAdFree.js"),extractRelevantDataForSubscriptionPages=__webpack_require__("./app/component/pages/helpers/extractRelevantDataForSubscriptionPages.js");const Wrapper=styled_components_browser_esm.styled.div.withConfig({componentId:"sc-1cq8mkp-0"})([".subscription-register-reg-form{margin-top:12px;}"]),SubscriptionRegister=({termInfo,req:{path,query},configuration:{subscriptionConfig},withHelmet=!0})=>{const subscriptionTrackingName=termInfo.name,{isAdFreeOnly,name,imageSrc}=(0,extractRelevantDataForSubscriptionPages.A)(subscriptionTrackingName,subscriptionConfig),PaymentFlowComponent=isAdFreeOnly?PaymentFlowLayoutAdFree.A:PaymentFlow.dD,isAdFreeSubscription=isAdFreeOnly||subscriptionTrackingName===subscription.fJ;return(0,jsx_runtime.jsx)(Wrapper,{children:(0,jsx_runtime.jsxs)(Frame.A,{headerType:"simple",children:[withHelmet&&(0,jsx_runtime.jsx)(Helmet.Helmet,{children:(0,jsx_runtime.jsx)("title",{children:"Subscription Register | The Independent"})}),(0,jsx_runtime.jsx)(PaymentFlowComponent,{path,termInfo,packageName:name,packageImage:imageSrc,children:(0,jsx_runtime.jsx)(IndyHydrateIsland.A,{id:ids.mA,children:(0,jsx_runtime.jsx)(Register_SubscribeRegister,{isAdFreeOnly,offerId:query.offerId,termId:query.termId,regSourceMethod:query.regSourceMethod,regSourceSection:query.regSourceSection,isAdFreeSubscription})})})]})})};SubscriptionRegister.propTypes={req:prop_types_default().object,termInfo:prop_types_default().object,configuration:prop_types_default().object,withHelmet:prop_types_default().bool};const pages_SubscriptionRegister=(0,RequestProvider.ah)(SubscriptionRegister);var createImage=__webpack_require__("./stories/helpers/createImage.js"),MockOther=__webpack_require__("./stories/helpers/components/MockOther.js");const configurationOverrides={subscriptionConfig:{[subscription.Qw]:{imageSrc:(0,createImage.A)(0,151,0),name:"Independent Premium"},[subscription.XI]:{imageSrc:(0,createImage.A)(0,151,0),name:"Ad Free Only"}}},SubscribeRegisterPage_stories={title:"Other/Subscribe/Register",component:pages_SubscriptionRegister,tags:["storyshot:vp:all"],decorators:[Story=>(0,jsx_runtime.jsx)(MockOther.A,{reqOverrides:{path:"/register"},configurationOverrides,children:(0,jsx_runtime.jsx)(Story,{})})]},Premium={args:{withHelmet:!1,termInfo:{name:""}}},AdFree={args:{withHelmet:!1,termInfo:{name:subscription.sR}}},__namedExportsOrder=["Premium","AdFree"]},"./app/component/library/StaticPage/PaymentFlow/PaymentFlowLayoutAdFree.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../node_modules/.pnpm/styled-components@6.1.13_react-dom@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js"),_app_constants_classNames__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./app/constants/classNames.js"),_Header_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/component/library/StaticPage/PaymentFlow/Header/Breadcrumb.js"),_Header_Breadcrumb_constants__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./app/component/library/StaticPage/PaymentFlow/Header/Breadcrumb.constants.js"),_PaymentFlowLayout__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/component/library/StaticPage/PaymentFlow/PaymentFlowLayout.js"),_SecurePayment__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/component/library/StaticPage/PaymentFlow/SecurePayment/index.js"),_SecurePayment_Package_ChosenPackage__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./app/component/library/StaticPage/PaymentFlow/SecurePayment/Package/ChosenPackage.js"),_SecurePayment_Package_PackageName__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./app/component/library/StaticPage/PaymentFlow/SecurePayment/Package/PackageName.js"),_SecurePayment_Package_PaymentInfo__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./app/component/library/StaticPage/PaymentFlow/SecurePayment/Package/PaymentInfo.js"),_SubscriptionRegister_Package_ChosenPackage__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./app/component/library/StaticPage/PaymentFlow/SubscriptionRegister/Package/ChosenPackage.js"),_SubscriptionRegister_Package_PackageWrapper__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./app/component/library/StaticPage/PaymentFlow/SubscriptionRegister/Package/PackageWrapper.js");const __WEBPACK_DEFAULT_EXPORT__=(0,styled_components__WEBPACK_IMPORTED_MODULE_8__.styled)(_PaymentFlowLayout__WEBPACK_IMPORTED_MODULE_1__.d).withConfig({componentId:"sc-1yoi8ed-0"})(["","{--line-color:",";}",".","{background:",";}","{background:",";}","{color:",";}","{--text-color:",";background:",";","{color:var(--text-color);}","{color:var(--text-color);}","{color:var(--text-color);}.","{display:none;}}"],_Header_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__.TW,(({theme})=>theme.color.divider.light),_Header_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__.bR,_Header_Breadcrumb_constants__WEBPACK_IMPORTED_MODULE_9__.$,(({theme})=>theme.color.semiotic.success),_SubscriptionRegister_Package_PackageWrapper__WEBPACK_IMPORTED_MODULE_7__.U,(({theme})=>theme.color.canvas.secondary),_SubscriptionRegister_Package_ChosenPackage__WEBPACK_IMPORTED_MODULE_6__.h,(({theme})=>theme.color.ink.base),_SecurePayment__WEBPACK_IMPORTED_MODULE_2__.lP,(({theme})=>theme.color.ink.inverted),(({theme})=>theme.color.dark.canvas.secondary),_SecurePayment_Package_ChosenPackage__WEBPACK_IMPORTED_MODULE_3__.h,_SecurePayment_Package_PackageName__WEBPACK_IMPORTED_MODULE_4__.g,_SecurePayment_Package_PaymentInfo__WEBPACK_IMPORTED_MODULE_5__.t6,_app_constants_classNames__WEBPACK_IMPORTED_MODULE_10__.J$)},"./app/component/pages/helpers/extractRelevantDataForSubscriptionPages.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _app_constants_subscription__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/subscription.js");const __WEBPACK_DEFAULT_EXPORT__=(subscriptionTrackingName,subscriptionConfig)=>{const isAdFreeOnly=subscriptionTrackingName===_app_constants_subscription__WEBPACK_IMPORTED_MODULE_0__.sR,subscriptionConfigKey=((trackingName="")=>{switch(trackingName){case _app_constants_subscription__WEBPACK_IMPORTED_MODULE_0__.aZ:return _app_constants_subscription__WEBPACK_IMPORTED_MODULE_0__.Rq;case _app_constants_subscription__WEBPACK_IMPORTED_MODULE_0__.jl:return _app_constants_subscription__WEBPACK_IMPORTED_MODULE_0__.OH;case _app_constants_subscription__WEBPACK_IMPORTED_MODULE_0__.sR:return _app_constants_subscription__WEBPACK_IMPORTED_MODULE_0__.XI;default:return _app_constants_subscription__WEBPACK_IMPORTED_MODULE_0__.Qw}})(subscriptionTrackingName),fallbackConfig=subscriptionConfig[_app_constants_subscription__WEBPACK_IMPORTED_MODULE_0__.Qw],{name,imageSrc}=subscriptionConfig[subscriptionConfigKey]||fallbackConfig;return{isAdFreeOnly,name,imageSrc}}},"./app/public/js/doForgottenPasswordRedirectForSubscriptions.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _app_constants_localStorage__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/constants/localStorage.js"),_app_constants_piano__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/piano.js"),_modules_util__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/public/js/modules/util.ts"),_utils_redirect__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./app/public/js/utils/redirect.ts");const __WEBPACK_DEFAULT_EXPORT__=({offerIdParamName=_app_constants_piano__WEBPACK_IMPORTED_MODULE_0__.l_,termIdParamName=_app_constants_piano__WEBPACK_IMPORTED_MODULE_0__.DC}={})=>{const[offerId,termId]=(0,_modules_util__WEBPACK_IMPORTED_MODULE_1__.ow)([offerIdParamName,termIdParamName]).map((({value})=>value)),redirectUrl=new URL(window.location.pathname,window.location.origin);redirectUrl.searchParams.set(offerIdParamName,offerId),redirectUrl.searchParams.set(termIdParamName,termId),localStorage.setItem(_app_constants_localStorage__WEBPACK_IMPORTED_MODULE_2__.sU,redirectUrl.toString()),(0,_utils_redirect__WEBPACK_IMPORTED_MODULE_3__.V)("/forgotten-password")}}}]);