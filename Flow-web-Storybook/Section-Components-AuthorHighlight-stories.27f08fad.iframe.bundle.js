"use strict";(self.webpackChunk_indy_flow_web=self.webpackChunk_indy_flow_web||[]).push([[6005],{"./stories/Section/Components/AuthorHighlight.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ClimateAuthorStory:()=>ClimateAuthorStory,ClimateAuthorsStory:()=>ClimateAuthorsStory,DefaultAuthorStory:()=>DefaultAuthorStory,DefaultAuthorsStory:()=>DefaultAuthorsStory,PremiumAuthorStory:()=>PremiumAuthorStory,PremiumAuthorsStory:()=>PremiumAuthorsStory,SgiAuthorStory:()=>SgiAuthorStory,SgiAuthorsStory:()=>SgiAuthorsStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),styled_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../node_modules/.pnpm/styled-components@6.1.13_react-dom@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js"),_indy_ui_AuthorHighlight__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../ui/dist/AuthorHighlight.js"),_app_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/config/theme/Styles.js"),_app_component_library_ColumnWrapper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./app/component/library/ColumnWrapper.js"),_stories_fixtures_section_component_authorHighlight__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./stories/__fixtures__/section-component/authorHighlight.js"),_stories_helpers_components_MockSection__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./stories/helpers/components/MockSection.js"),_stories_helpers_mockSectionContent__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./stories/helpers/mockSectionContent.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const{biography,author}=(0,_stories_fixtures_section_component_authorHighlight__WEBPACK_IMPORTED_MODULE_7__.A)(),multipleAuthorsArgs={biography,authors:author,image:!0},singleAuthorArgs=_objectSpread(_objectSpread({},multipleAuthorsArgs),{},{authors:multipleAuthorsArgs.authors.slice(0,1)}),withTheme=theme=>function WithTheme(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_8__.ThemeProvider,{theme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Story,{})})},__WEBPACK_DEFAULT_EXPORT__={title:"Section/Components/Author Highlight",component:_indy_ui_AuthorHighlight__WEBPACK_IMPORTED_MODULE_1__.$y,parameters:{waitFor:`#${_stories_helpers_mockSectionContent__WEBPACK_IMPORTED_MODULE_5__.h}`},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_stories_helpers_components_MockSection__WEBPACK_IMPORTED_MODULE_4__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_app_component_library_ColumnWrapper__WEBPACK_IMPORTED_MODULE_3__.KY,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_stories_helpers_mockSectionContent__WEBPACK_IMPORTED_MODULE_5__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Story,{})})})})]},DefaultAuthorStory={name:"Default author",args:singleAuthorArgs},DefaultAuthorsStory={name:"Default authors",args:multipleAuthorsArgs},PremiumAuthorStory={name:"Premium author",args:singleAuthorArgs,decorators:[withTheme(_app_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__.lF)]},PremiumAuthorsStory={name:"Premium authors",args:multipleAuthorsArgs,decorators:[withTheme(_app_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__.lF)]},ClimateAuthorStory={name:"Climate author",args:singleAuthorArgs,decorators:[withTheme(_app_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__.$1)]},ClimateAuthorsStory={name:"Climate authors",args:multipleAuthorsArgs,decorators:[withTheme(_app_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__.$1)]},SgiAuthorStory={name:"Sgi author",args:singleAuthorArgs,decorators:[withTheme(_app_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__.lL)]},SgiAuthorsStory={name:"Sgi authors",args:multipleAuthorsArgs,decorators:[withTheme(_app_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__.lL)]},__namedExportsOrder=["DefaultAuthorStory","DefaultAuthorsStory","PremiumAuthorStory","PremiumAuthorsStory","ClimateAuthorStory","ClimateAuthorsStory","SgiAuthorStory","SgiAuthorsStory"]},"./app/component/library/ColumnWrapper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bo:()=>FullWidthColumnWrapper,IE:()=>ColumnWrapperSubscriberLiveBlog,KY:()=>SectionContentWrapper,Uk:()=>ColumnWrapper});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/styled-components@6.1.13_react-dom@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js"),_app_constants_devices__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/devices.js");const SectionContentWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div.withConfig({componentId:"sc-1fcmxs3-0"})(["display:flex;box-sizing:border-box;flex-direction:row;flex-wrap:wrap;gap:","px;padding:12px;background-color:",";@media ","{width:768px;margin:0 auto;}@media ","{width:1000px;padding:16px;}"],(({theme})=>theme.spacing.x4),(props=>props.theme.color.canvas.base),_app_constants_devices__WEBPACK_IMPORTED_MODULE_0__.n5,_app_constants_devices__WEBPACK_IMPORTED_MODULE_0__.BY),ColumnWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div.withConfig({componentId:"sc-1fcmxs3-1"})(["--bleed:12px;display:flex;box-sizing:border-box;flex-direction:row;gap:","px;padding:16px var(--bleed);background-color:",";.article-liveblog &{background-color:",";}@media ","{--bleed:0;max-width:1000px;margin:0 auto;}@media ","{--bleed:","px;max-width:1000px;padding:var(--bleed);}"],(({theme})=>theme.spacing.x4),(props=>props.theme.color.canvas.base),(props=>props.theme.color.canvas.secondary),_app_constants_devices__WEBPACK_IMPORTED_MODULE_0__.n5,_app_constants_devices__WEBPACK_IMPORTED_MODULE_0__.BY,(({theme})=>theme.dimension.bleed)),FullWidthColumnWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div.withConfig({componentId:"sc-1fcmxs3-2"})([".main-wrapper{max-width:100%;}"]),ColumnWrapperSubscriberLiveBlog=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.styled)(ColumnWrapper).withConfig({componentId:"sc-1fcmxs3-3"})(["padding-right:6px;padding-left:6px;@media ","{padding-right:12px;padding-left:12px;}@media ","{padding-right:0;padding-left:0;}"],_app_constants_devices__WEBPACK_IMPORTED_MODULE_0__.k4,_app_constants_devices__WEBPACK_IMPORTED_MODULE_0__.n5)},"./stories/__fixtures__/section-component/authorHighlight.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _app_constants_componentTypes__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/componentTypes.js");const __WEBPACK_DEFAULT_EXPORT__=()=>({type:_app_constants_componentTypes__WEBPACK_IMPORTED_MODULE_0__.H0,labelText:"",labelLink:"",biography:"Excepteur sint occaecat cupidatat non proident, sunt in culpa.",author:[{name:"Author A",path:"/author/a"},{name:"Author B",path:"/author/b"},{name:"Author C",path:"/author/c"}]})},"./stories/helpers/components/MockSection.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/__mocks__/@brightsites/flow-core/lib/providers/RequestProvider.js"),_Mocker__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/helpers/components/Mocker.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}class MockSection extends _Mocker__WEBPACK_IMPORTED_MODULE_2__.A{setOverrides(props={}){(0,_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__._B)(),(0,_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__.Ni)(props.sectionOverrides||{},props.articleOverrides||{}),(0,_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__.AX)(props.reqOverrides||{})}}MockSection.propTypes=function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({sectionOverrides:prop_types__WEBPACK_IMPORTED_MODULE_3___default().object,reqOverrides:prop_types__WEBPACK_IMPORTED_MODULE_3___default().object},_Mocker__WEBPACK_IMPORTED_MODULE_2__.A.propTypes);const __WEBPACK_DEFAULT_EXPORT__=MockSection},"./stories/helpers/mockSectionContent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,h:()=>ID_MOCK_SECTION_CONTENT});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/styled-components@6.1.13_react-dom@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js"),_app_component_pages_Section_SectionContent__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/component/pages/Section/SectionContent.js");const ID_MOCK_SECTION_CONTENT="mock-section-content",__WEBPACK_DEFAULT_EXPORT__=styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div.attrs((()=>({id:ID_MOCK_SECTION_CONTENT}))).withConfig({componentId:"sc-kx9e6k-0"})(["",""],_app_component_pages_Section_SectionContent__WEBPACK_IMPORTED_MODULE_0__.S)}}]);