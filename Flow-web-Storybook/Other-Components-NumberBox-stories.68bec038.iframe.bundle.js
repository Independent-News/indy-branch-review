"use strict";(self.webpackChunk_indy_flow_web=self.webpackChunk_indy_flow_web||[]).push([[1433],{"./stories/Other/Components/NumberBox.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NumberBoxes:()=>NumberBoxes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../node_modules/.pnpm/styled-components@6.1.13_react-dom@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js"),_app_component_library_Article_Embeds_NumberBox__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/component/library/Article/Embeds/NumberBox.js"),_stories_helpers_components_Mocker__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/helpers/components/Mocker.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const Container=styled_components__WEBPACK_IMPORTED_MODULE_4__.styled.div.withConfig({componentId:"sc-1cl4k8z-0"})(["display:flex;flex-direction:column;padding:12px;grid-gap:24px;"]),Title=styled_components__WEBPACK_IMPORTED_MODULE_4__.styled.h1.withConfig({componentId:"sc-1cl4k8z-1"})(["font-size:24px;"]),standard={markup:"<p>Enim cupidatat sit magna ullamco sunt. Non non sint irure consequat enim Lorem amet nulla ipsum aute anim proident ut.</p>",title:"Numberbox",align:"none"},right=_objectSpread(_objectSpread({},standard),{},{align:"right"}),left=_objectSpread(_objectSpread({},standard),{},{align:"left"}),__WEBPACK_DEFAULT_EXPORT__={title:"Other/NumberBox",component:_app_component_library_Article_Embeds_NumberBox__WEBPACK_IMPORTED_MODULE_1__.Ay,parameters:{waitFor:".numberboxes"},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_stories_helpers_components_Mocker__WEBPACK_IMPORTED_MODULE_2__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Container,{className:"numberboxes",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})})]},NumberBoxes={name:"NumberBox",render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Title,{children:"This is a NumberBox with no align selected"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_app_component_library_Article_Embeds_NumberBox__WEBPACK_IMPORTED_MODULE_1__.Ay,{data:standard}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Title,{children:"This is a NumberBox with RIGHT align"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_app_component_library_Article_Embeds_NumberBox__WEBPACK_IMPORTED_MODULE_1__.Ay,{data:right}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Title,{children:"This is a NumberBox with LEFT align"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_app_component_library_Article_Embeds_NumberBox__WEBPACK_IMPORTED_MODULE_1__.Ay,{data:left})]})},__namedExportsOrder=["NumberBoxes"]},"./app/component/library/Article/Embeds/NumberBox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,Mr:()=>RightWrapper,UC:()=>Content,X4:()=>LeftWrapper,wN:()=>Number});var prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/.pnpm/styled-components@6.1.13_react-dom@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js"),_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./stories/__mocks__/@brightsites/flow-core/lib/providers/RequestProvider.js"),_app_constants_devices__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/constants/devices.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const WrapperDefaults=styled_components__WEBPACK_IMPORTED_MODULE_3__.styled.figure.withConfig({componentId:"sc-uwxkcg-0"})(["box-sizing:border-box;padding:16px;border:solid ",";border-width:0 1px;"],(({theme})=>theme.color.divider.dark)),LeftWrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.styled)(WrapperDefaults).withConfig({componentId:"sc-uwxkcg-1"})(["width:100%;margin:0;@media ","{width:224px;margin:0 16px 16px 0;float:left;}@media ","{&.subscribed,.article-premium &{margin-left:-16%;}}"],_app_constants_devices__WEBPACK_IMPORTED_MODULE_1__.n5,_app_constants_devices__WEBPACK_IMPORTED_MODULE_1__.BY),RightWrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.styled)(WrapperDefaults).withConfig({componentId:"sc-uwxkcg-2"})(["width:100%;margin:0;@media ","{width:224px;margin:0 0 16px 16px;float:right;}@media ","{&.subscribed,.article-premium &{margin-right:-16%;}}"],_app_constants_devices__WEBPACK_IMPORTED_MODULE_1__.n5,_app_constants_devices__WEBPACK_IMPORTED_MODULE_1__.BY),CentreWrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.styled)(WrapperDefaults).withConfig({componentId:"sc-uwxkcg-3"})(["@media ","{width:224px;margin:auto;}"],_app_constants_devices__WEBPACK_IMPORTED_MODULE_1__.n5),Number=styled_components__WEBPACK_IMPORTED_MODULE_3__.styled.h2.withConfig({componentId:"sc-uwxkcg-4"})(["margin:0;color:",";font-family:",";font-size:64px;font-weight:bold;line-height:1em;text-transform:lowercase;&.number-length-5,&.number-length-6{font-size:54px;}&.number-length-7,&.number-length-8{font-size:48px;}&.number-length-9,&.number-length-10{font-size:34px;}"],(props=>props.theme.color.primary.base),(props=>props.theme.fontFamily.secondaryFont)),Content=styled_components__WEBPACK_IMPORTED_MODULE_3__.styled.figcaption.withConfig({componentId:"sc-uwxkcg-5"})(["font-size:19px;font-weight:bold;line-height:1em;> *{padding:0;margin:0;font-size:19px;line-height:1em;}"]);function NumberBox(props){const{className,data:{align,title,markup},req:{cookies}}=props,Wrapper=(align=>{switch(align){case"left":return LeftWrapper;case"right":return RightWrapper;case"centre":return CentreWrapper}return LeftWrapper})(align),titleSize=title?title.length:0,titleLength=titleSize>10?10:titleSize;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Wrapper,{className:`${className||""}${cookies.subscriber?" subscribed":""}`,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Number,{className:`number-length-${titleLength}`,children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Content,{dangerouslySetInnerHTML:{__html:markup}})]})}NumberBox.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,data:prop_types__WEBPACK_IMPORTED_MODULE_4___default().any.isRequired,req:prop_types__WEBPACK_IMPORTED_MODULE_4___default().object.isRequired};const __WEBPACK_DEFAULT_EXPORT__=(0,_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_0__.ah)(NumberBox)}}]);