"use strict";(self.webpackChunk_indy_flow_web=self.webpackChunk_indy_flow_web||[]).push([[5293],{"./stories/Section/Components/SectionStandFirst.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,WithAuthorStory:()=>WithAuthorStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SectionStandFirst_stories});var AuthorHighlight=__webpack_require__("../ui/dist/AuthorHighlight.js"),ColumnWrapper=__webpack_require__("./app/component/library/ColumnWrapper.js"),SectionStandFirst=__webpack_require__("./app/component/library/Section/components/SectionStandFirst/index.js");var MockSection=__webpack_require__("./stories/helpers/components/MockSection.js"),mockSectionContent=__webpack_require__("./stories/helpers/mockSectionContent.js"),jsx_runtime=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const data={hasFacebook:!0,url:"https://www.independent.co.uk/travel"},SectionStandFirst_stories={title:"Section/Components/Section Stand First",component:SectionStandFirst.A,parameters:{waitFor:`#${mockSectionContent.h}`},decorators:[Story=>(0,jsx_runtime.jsx)(MockSection.A,{children:(0,jsx_runtime.jsx)(ColumnWrapper.KY,{children:(0,jsx_runtime.jsx)(mockSectionContent.A,{children:(0,jsx_runtime.jsx)(Story,{})})})})]},DefaultStory={name:"Title with social",args:{title:"Travel",url:data.url,hasFacebook:data.hasFacebook}},WithAuthorStory={name:"Title with social and author",args:{title:"Travel",url:data.url,hasFacebook:data.hasFacebook,authorHighlight:(0,jsx_runtime.jsx)(AuthorHighlight.Wo,{biography:"Lorem ipsum",authors:[{name:"Author Name",path:"/"}]})}},__namedExportsOrder=["DefaultStory","WithAuthorStory"]},"./app/component/library/ColumnWrapper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bo:()=>FullWidthColumnWrapper,IE:()=>ColumnWrapperSubscriberLiveBlog,KY:()=>SectionContentWrapper,Uk:()=>ColumnWrapper});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/styled-components@6.1.13_react-dom@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js"),_app_constants_devices__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/devices.js");const SectionContentWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div.withConfig({componentId:"sc-1fcmxs3-0"})(["display:flex;box-sizing:border-box;flex-direction:row;flex-wrap:wrap;gap:","px;padding:12px;background-color:",";@media ","{width:768px;margin:0 auto;}@media ","{width:1000px;padding:16px;}"],(({theme})=>theme.spacing.x4),(props=>props.theme.color.canvas.base),_app_constants_devices__WEBPACK_IMPORTED_MODULE_0__.n5,_app_constants_devices__WEBPACK_IMPORTED_MODULE_0__.BY),ColumnWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div.withConfig({componentId:"sc-1fcmxs3-1"})(["--bleed:12px;display:flex;box-sizing:border-box;flex-direction:row;gap:","px;padding:16px var(--bleed);background-color:",";.article-liveblog &{background-color:",";}@media ","{--bleed:0;max-width:1000px;margin:0 auto;}@media ","{--bleed:","px;max-width:1000px;padding:var(--bleed);}"],(({theme})=>theme.spacing.x4),(props=>props.theme.color.canvas.base),(props=>props.theme.color.canvas.secondary),_app_constants_devices__WEBPACK_IMPORTED_MODULE_0__.n5,_app_constants_devices__WEBPACK_IMPORTED_MODULE_0__.BY,(({theme})=>theme.dimension.bleed)),FullWidthColumnWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div.withConfig({componentId:"sc-1fcmxs3-2"})([".main-wrapper{max-width:100%;}"]),ColumnWrapperSubscriberLiveBlog=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.styled)(ColumnWrapper).withConfig({componentId:"sc-1fcmxs3-3"})(["padding-right:6px;padding-left:6px;@media ","{padding-right:12px;padding-left:12px;}@media ","{padding-right:0;padding-left:0;}"],_app_constants_devices__WEBPACK_IMPORTED_MODULE_0__.k4,_app_constants_devices__WEBPACK_IMPORTED_MODULE_0__.n5)},"./stories/helpers/components/MockSection.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/__mocks__/@brightsites/flow-core/lib/providers/RequestProvider.js"),_Mocker__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/helpers/components/Mocker.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}class MockSection extends _Mocker__WEBPACK_IMPORTED_MODULE_2__.A{setOverrides(props={}){(0,_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__._B)(),(0,_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__.Ni)(props.sectionOverrides||{},props.articleOverrides||{}),(0,_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__.AX)(props.reqOverrides||{})}}MockSection.propTypes=function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({sectionOverrides:prop_types__WEBPACK_IMPORTED_MODULE_3___default().object,reqOverrides:prop_types__WEBPACK_IMPORTED_MODULE_3___default().object},_Mocker__WEBPACK_IMPORTED_MODULE_2__.A.propTypes);const __WEBPACK_DEFAULT_EXPORT__=MockSection},"./stories/helpers/mockSectionContent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,h:()=>ID_MOCK_SECTION_CONTENT});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/styled-components@6.1.13_react-dom@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js"),_app_component_pages_Section_SectionContent__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/component/pages/Section/SectionContent.js");const ID_MOCK_SECTION_CONTENT="mock-section-content",__WEBPACK_DEFAULT_EXPORT__=styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div.attrs((()=>({id:ID_MOCK_SECTION_CONTENT}))).withConfig({componentId:"sc-kx9e6k-0"})(["",""],_app_component_pages_Section_SectionContent__WEBPACK_IMPORTED_MODULE_0__.S)}}]);