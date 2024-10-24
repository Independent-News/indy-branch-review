"use strict";(self.webpackChunk_indy_flow_web=self.webpackChunk_indy_flow_web||[]).push([[3114],{"./stories/Section/Section.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdReplacementSectionStory:()=>AdReplacementSectionStory,CommercialSectionStory:()=>CommercialSectionStory,DefaultSectionStory:()=>DefaultSectionStory,DisableAllSlotsSectionStory:()=>DisableAllSlotsSectionStory,IndyBestSectionStory:()=>IndyBestSectionStory,LifestyleSectionStory:()=>LifestyleSectionStory,PremiumSectionStory:()=>PremiumSectionStory,TravelSectionStory:()=>TravelSectionStory,VoicesSectionStory:()=>VoicesSectionStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Section_stories});var cookies=__webpack_require__("./app/constants/cookies.ts"),ids=__webpack_require__("./app/constants/ids.js"),prop_types=__webpack_require__("../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),RequestProvider=__webpack_require__("./stories/__mocks__/@brightsites/flow-core/lib/providers/RequestProvider.js"),getAdFreeUserStatusFromGlobals=__webpack_require__("./app/routes/helpers/getAdFreeUserStatusFromGlobals.js"),ColumnWrapper=__webpack_require__("./app/component/library/ColumnWrapper.js"),Sidebar=__webpack_require__("./app/component/library/Sidebar.js"),StickyFooter=__webpack_require__("./app/component/library/StickyFooter.js"),SectionContent=__webpack_require__("./app/component/pages/Section/SectionContent.js"),jsx_runtime=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const SectionContentWithWrapper=({section,req:{flowPreview,cookies},res,blockAds,isBest,isCommercial,dailyEditionFrontCover,breadcrumbs})=>{const contentWrapperClassName=section.section.name.replace(/ /g,"-").toLowerCase(),isAdFreeUser=(0,getAdFreeUserStatusFromGlobals.A)(res);return(0,jsx_runtime.jsxs)(ColumnWrapper.KY,{id:ids.Au,className:`section__${contentWrapperClassName}`,children:[breadcrumbs,(0,jsx_runtime.jsx)(SectionContent.A,{isBest,isCommercial,blockAds,dailyEditionFrontCover}),section.sidebar&&(0,jsx_runtime.jsx)(Sidebar.A,{sidebar:section.sidebar,isBest,isAdFreeUser}),!flowPreview&&!blockAds&&!isBest&&!cookies.subscriber&&(0,jsx_runtime.jsx)(StickyFooter.Ay,{})]})};SectionContentWithWrapper.propTypes={section:prop_types_default().object.isRequired,req:prop_types_default().object.isRequired,res:prop_types_default().object.isRequired,blockAds:prop_types_default().bool,isBest:prop_types_default().bool,isCommercial:prop_types_default().bool,configuration:prop_types_default().object.isRequired,dailyEditionFrontCover:prop_types_default().string,breadcrumbs:prop_types_default().node};const Section_SectionContentWithWrapper=(0,RequestProvider.ah)(SectionContentWithWrapper);var taboola=__webpack_require__("./app/constants/taboola.js"),defineProperty=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),mockFAQs=__webpack_require__("./stories/__fixtures__/mockFAQs.js"),mockHeroMedia=__webpack_require__("./stories/__fixtures__/mockHeroMedia.js"),mockImagePlusList=__webpack_require__("./stories/__fixtures__/mockImagePlusList.js"),mockPriceList=__webpack_require__("./stories/__fixtures__/mockPriceList.js"),mockQuote=__webpack_require__("./stories/__fixtures__/mockQuote.js"),mockSection=__webpack_require__("./stories/__fixtures__/mockSection.js"),mockSections=__webpack_require__("./stories/__fixtures__/mockSections.js"),mockText=__webpack_require__("./stories/__fixtures__/mockText.js"),authorHighlight=__webpack_require__("./stories/__fixtures__/section-component/authorHighlight.js");var componentTypes=__webpack_require__("./app/constants/componentTypes.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const mockTravelSection_mockSection=(0,mockSection.A)(),{section}=mockTravelSection_mockSection,{extra}=section;var articleX6PlusMPU=__webpack_require__("./stories/__fixtures__/section-component/articleX6PlusMPU.js"),articleX8PlusDMPU=__webpack_require__("./stories/__fixtures__/section-component/articleX8PlusDMPU.js"),heroPlusDMPU=__webpack_require__("./stories/__fixtures__/section-component/heroPlusDMPU.js"),MockSection=__webpack_require__("./stories/helpers/components/MockSection.js");const helpers_withBanner=Story=>(0,jsx_runtime.jsx)("div",{style:{paddingBottom:`${StickyFooter.v4}px`},children:(0,jsx_runtime.jsx)(Story,{})}),configurationOverrides={taboola:{sectionValues:[{category:"All",pageType:"homepage",mode:"thumbs-feed-hero-1sc-6sc-esi-inde",container:taboola.DM,placement:"MS Hero",target_type:"mix"},{category:"All",pageType:"category",mode:"thumbs-feed-hero-1sc-6sc-esi-inde",container:taboola.DM,placement:"MS Hero",target_type:"mix"}]}},Section_stories={title:"Section/Content",component:Section_SectionContentWithWrapper,tags:["storyshot:vp:all"],parameters:{waitFor:`#${ids.Au}`,layout:"fullscreen"}},DefaultSectionStory={name:"Default section",decorators:[Story=>(0,jsx_runtime.jsx)(MockSection.A,{configurationOverrides,children:(0,jsx_runtime.jsx)(Story,{})})]},VoicesSectionStory={name:"Voices section",decorators:[Story=>(0,jsx_runtime.jsx)(MockSection.A,{reqOverrides:{path:"/voices"},sectionOverrides:{section:{name:"Voices",path:"/voices",sourceName:"Voices",sourcePath:"voices"}},articleOverrides:{path:"/voices/article.html"},children:(0,jsx_runtime.jsx)(Story,{})})]},LifestyleSectionStory={name:"Lifestyle section",decorators:[Story=>(0,jsx_runtime.jsx)(MockSection.A,{reqOverrides:{path:"/life-style"},sectionOverrides:{section:{name:"Lifestyle",path:"/life-style",sourceName:"Lifestyle",sourcePath:"life-style"}},articleOverrides:{path:"/life-style/article.html",showLead:!0,showRelatedLinks:!1,lead:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},children:(0,jsx_runtime.jsx)(Story,{})})]},IndyBestSectionStory={name:"IndyBest section",decorators:[Story=>(0,jsx_runtime.jsx)(MockSection.A,{reqOverrides:{path:"/extras/indybest"},sectionOverrides:{section:{name:"IndyBest",path:"/extras/indybest",sourcePath:"indybest"}},configurationOverrides,children:(0,jsx_runtime.jsx)(Story,{})})]},TravelSectionStory={name:"Travel section",decorators:[helpers_withBanner,Story=>(0,jsx_runtime.jsx)(MockSection.A,{reqOverrides:{path:"/travel"},localsOverrides:{jsGlobals:{pageType:"section"},featureFlags:{[cookies.gi]:!0}},sectionOverrides:_objectSpread(_objectSpread({},mockTravelSection_mockSection),{},{section:_objectSpread(_objectSpread({},section),{},{name:"Travel",path:"/travel",id:1633,uuid:"d522e73d-669f-47b8-8da4-43e6d842b3cd",sourceId:"13886",sourceName:"Travel",sourcePath:"travel",changed:"1682694541",firstLetter:"t",hierarchy:[{name:"Independent",id:"45"}],hierarchicalName:"Travel",extra:_objectSpread(_objectSpread({},extra),{},{isHideCommenting:!1,isHideNewsletterSignUp:!1,isCommercial:!1,isDisableAllSlots:!1,isDisableSponsoredCapsule:!1,field_disable_affiliates:!1,takeover:!1,commercialCampaign:!1,titleSEO:"Travel | Holiday advice, news & hotel reviews",seoDescription:"Best holiday destinations, expert travel guides, news, advice, hotel reviews and latest deals"})}),components:[(0,authorHighlight.A)(),(0,mockHeroMedia.Ay)(),(0,mockText.A)().travel,mockFAQs.A,(0,mockImagePlusList.A)(),mockQuote.Ay,{type:componentTypes.gC,labelText:"Travel Actions component",labelLink:"/travel",travelActions:[{title:"Book flights",url:"/internal/url"},{title:"Rent a car",url:"/internal/url"},{title:"Book trains",url:"/internal/url"},{title:"Travel insurance",url:"/internal/url"},{title:"Airport extras",url:"/internal/url"},{title:"Book ferries",url:"/internal/url"},{title:"Find tours",url:"/internal/url"},{title:"Book airport parking",url:"/internal/url"},{title:"Book airport transfers",url:"/internal/url"}]},(0,mockPriceList.nw)(6),{type:"Banner"},(0,authorHighlight.A)(),mockSections.Ay]}),configurationOverrides,children:(0,jsx_runtime.jsx)(Story,{})})]},PremiumSectionStory={name:"Premium section",decorators:[Story=>(0,jsx_runtime.jsx)(MockSection.A,{reqOverrides:{path:"/independentpremium"},sectionOverrides:{section:{name:"Premium",path:"/independentpremium",sourcePath:"premium"}},configurationOverrides,children:(0,jsx_runtime.jsx)(Story,{})})]},CommercialSectionStory={name:"Commercial section",decorators:[Story=>(0,jsx_runtime.jsx)(MockSection.A,{sectionOverrides:{section:{name:"News",path:"/",sourcePath:"news",extra:{isCommercial:!0}}},configurationOverrides,children:(0,jsx_runtime.jsx)(Story,{})})]},AdReplacementSectionStory={name:"Ad replacement section",decorators:[Story=>(0,jsx_runtime.jsx)(MockSection.A,{sectionOverrides:{section:{name:"News",path:"/",sourcePath:"news"},components:[(0,heroPlusDMPU.A)({},"premium-letter"),(0,heroPlusDMPU.A)({},"premium-ad"),(0,articleX8PlusDMPU.A)({},"premium-letter"),(0,articleX8PlusDMPU.A)({},"premium-ad"),(0,articleX6PlusMPU.A)({},"premium-ad")]},reqOverrides:{cookies:{subscriber:!0}},configurationOverrides,children:(0,jsx_runtime.jsx)(Story,{})})]},DisableAllSlotsSectionStory={name:"Disable all slots section",decorators:[Story=>(0,jsx_runtime.jsx)(MockSection.A,{sectionOverrides:{section:{name:"News",path:"/",sourcePath:"news",extra:{isDisableAllSlots:!0}}},configurationOverrides,children:(0,jsx_runtime.jsx)(Story,{})})]},__namedExportsOrder=["DefaultSectionStory","VoicesSectionStory","LifestyleSectionStory","IndyBestSectionStory","TravelSectionStory","PremiumSectionStory","CommercialSectionStory","AdReplacementSectionStory","DisableAllSlotsSectionStory"]},"./app/component/library/Article/Embeds/HTMLEmbed.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/.pnpm/styled-components@6.1.13_react-dom@18.3.1_react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js"),_app_constants_regexps__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./app/constants/regexps.js"),_helpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/component/library/Article/Embeds/helpers.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const Embed=styled_components__WEBPACK_IMPORTED_MODULE_2__.styled.div.withConfig({componentId:"sc-461c9u-0"})(["display:block;width:100%;max-width:100%;clear:both;> *{margin:auto;}"]),HTMLEmbed=({className,data})=>{if(null==data||!data.markup)return null;const{markup,scripts}=data;let rawHtml=markup;scripts&&Object.entries(scripts).forEach((([_,script])=>{const attrs=Object.entries(script).map(_helpers__WEBPACK_IMPORTED_MODULE_0__.Sj),scriptTag=(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.C7)(script.scriptContent,attrs);rawHtml=rawHtml.replace(_app_constants_regexps__WEBPACK_IMPORTED_MODULE_3__.WQ,scriptTag)}));const html=rawHtml.trim();return html.length&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Embed,{className,dangerouslySetInnerHTML:{__html:html}})};HTMLEmbed.propTypes={data:prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({markup:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired,scripts:prop_types__WEBPACK_IMPORTED_MODULE_4___default().object}),className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string};const __WEBPACK_DEFAULT_EXPORT__=HTMLEmbed},"./stories/__fixtures__/mockFAQs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={type:__webpack_require__("./app/constants/componentTypes.js").g2,labelText:"Mock FAQs",labelLink:null,updated:null,faqs:[{id:"1",question:"<p>Question 1</p>",answer:'<p>Answer 1</p><p>This is a <strong>paragraph</strong> with a <a href"/">link</a>.</p><p>To keep your finger on the pulse with major breaking news developing around the world sign up to our free email alerts.</p><p>List one</p><ul><li><u>Item 1</u></li><li>Item 2</li></ul><p>List two</p><ol><li><em>Item 1</em></li><li>Item 2</li></ol>'},{id:"2",question:"<p>Question 2</p>",answer:"<p>Answer 2</p>"}]}},"./stories/__fixtures__/mockHeroMedia.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A1:()=>HeroVideo,Ay:()=>__WEBPACK_DEFAULT_EXPORT__,hw:()=>HeroGallery});var _app_constants_componentTypes__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/componentTypes.js"),_helpers_createImage__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/helpers/createImage.js");const __WEBPACK_DEFAULT_EXPORT__=()=>({type:_app_constants_componentTypes__WEBPACK_IMPORTED_MODULE_0__.K5,hero:{type:"image",data:{title:"This is a hero image title",description:"This is a hero image description",caption:"This is a hero image caption",copyright:"copyright",alt:"This is the alt text",url:(0,_helpers_createImage__WEBPACK_IMPORTED_MODULE_1__.A)(100,0,0,1,[3,2]),extra:{imageSize:{width:2500,height:1640}}}}}),HeroGallery=()=>({type:_app_constants_componentTypes__WEBPACK_IMPORTED_MODULE_0__.K5,hero:{type:"gallery",data:{title:"This is a hero gallery title",gallery:[{type:"image",data:{title:"This is a hero gallery title",description:"This is a hero gallery description",caption:"This is a hero gallery caption",copyright:"copyright",alt:"This is the alt text",url:(0,_helpers_createImage__WEBPACK_IMPORTED_MODULE_1__.A)(0,100,0,1,[3,2]),extra:{imageSize:{width:4573,height:2921}}}},{type:"image",data:{title:"This is a hero gallery title",description:"This is a hero gallery description",caption:"This is a hero gallery caption",copyright:"copyright",alt:"This is the alt text",url:(0,_helpers_createImage__WEBPACK_IMPORTED_MODULE_1__.A)(0,100,0,1,[3,2]),extra:{imageSize:{width:4573,height:2921}}}},{type:"image",data:{title:"This is a hero gallery title",description:"This is a hero gallery description",caption:"This is a hero gallery caption",copyright:"copyright",alt:"This is the alt text",url:(0,_helpers_createImage__WEBPACK_IMPORTED_MODULE_1__.A)(0,100,0,1,[3,2]),extra:{imageSize:{width:4573,height:2921}}}},{type:"image",data:{title:"This is a hero gallery title",description:"This is a hero gallery description",caption:"This is a hero gallery caption",copyright:"copyright",alt:"This is the alt text",url:(0,_helpers_createImage__WEBPACK_IMPORTED_MODULE_1__.A)(0,100,0,1,[3,2]),extra:{imageSize:{width:4573,height:2921}}}}]}}}),HeroVideo=()=>({type:_app_constants_componentTypes__WEBPACK_IMPORTED_MODULE_0__.K5,hero:{image:"https://cdn.jwplayer.com/v2/media/i7eFAyt1/poster.jpg?width=720",type:"jw_player",data:{id:"i7eFAyt1",extra:{sources:[]}},json:{title:"This is the hero video title",mediaid:"i7eFAyt1",link:"https://cdn.jwplayer.com/previews/i7eFAyt1",image:"https://cdn.jwplayer.com/v2/media/i7eFAyt1/poster.jpg?width=720",images:[{src:"https://cdn.jwplayer.com/v2/media/i7eFAyt1/poster.jpg?width=320",width:320,type:"image/jpeg"},{src:"https://cdn.jwplayer.com/v2/media/i7eFAyt1/poster.jpg?width=480",width:480,type:"image/jpeg"},{src:"https://cdn.jwplayer.com/v2/media/i7eFAyt1/poster.jpg?width=640",width:640,type:"image/jpeg"},{src:"https://cdn.jwplayer.com/v2/media/i7eFAyt1/poster.jpg?width=720",width:720,type:"image/jpeg"},{src:"https://cdn.jwplayer.com/v2/media/i7eFAyt1/poster.jpg?width=1280",width:1280,type:"image/jpeg"},{src:"https://cdn.jwplayer.com/v2/media/i7eFAyt1/poster.jpg?width=1920",width:1920,type:"image/jpeg"}]}}})},"./stories/__fixtures__/mockImagePlusList.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _app_constants_componentTypes__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/componentTypes.js"),_helpers_createImage__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/helpers/createImage.js");const __WEBPACK_DEFAULT_EXPORT__=()=>({type:_app_constants_componentTypes__WEBPACK_IMPORTED_MODULE_0__.jf,labelText:"Image Plus List",labelLink:null,hero:{data:{url:(0,_helpers_createImage__WEBPACK_IMPORTED_MODULE_1__.A)(255,150,150),caption:"This is a caption"}},list:[{title:"Title One",body:'Some text content with a <a href=|"https: //www.independent.co.uk/extras/indybest/gadgets-tech/headphones-earphones/best-wireless-earbuds-b422237.html">link</a>'},{title:"Title Two",body:"Some text content"},{title:"Title Three",body:"Some text content"}]})},"./stories/__fixtures__/mockPriceList.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gl:()=>PriceListWithFiveItems,OZ:()=>PriceListWithThreeItems,Sv:()=>PriceListWithSixItems,nw:()=>generatePriceList,yl:()=>PriceListWithFourItems});var _app_constants_componentTypes__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/componentTypes.js");const generatePriceList=numItems=>{const pricelist=[{action:"Shop - Loaf of Bread ",price:"£1.26"},{action:"Hotel (Mid-range)",price:"$100.00"},{action:"Shop - Water 1L",price:"$1.00"},{action:"Petrol 1L",price:"€1.38"},{action:"Shop - Bottle of Wine 0.75L",price:"€10.00"},{action:"One-way ticket on local transport",price:"€20.00"}];return{type:_app_constants_componentTypes__WEBPACK_IMPORTED_MODULE_0__.u_,labelText:"Price List Component",labelLink:null,updated:"2023-09-18T08:57:41.175Z",pricelist:numItems?pricelist.slice(0,numItems):pricelist}},PriceListWithSixItems=generatePriceList(6),PriceListWithFiveItems=generatePriceList(5),PriceListWithFourItems=generatePriceList(4),PriceListWithThreeItems=generatePriceList(3)},"./stories/__fixtures__/mockQuote.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>quoteWithHero,FG:()=>quoteWithoutHero,Fh:()=>quoteWithHeroData});var _app_constants_componentTypes__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/componentTypes.js"),_helpers_createImage__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/helpers/createImage.js");const createQuote=(quote,hero=null)=>({type:_app_constants_componentTypes__WEBPACK_IMPORTED_MODULE_0__.BL,labelText:"Quote component",labelLink:null,hero,quote:{quote,citation:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",title:"This is a Title"}}),quoteWithHeroData=createQuote("This is a Quote with Hero Data",{data:{url:(0,_helpers_createImage__WEBPACK_IMPORTED_MODULE_1__.A)(100,0,0),caption:"Image Caption",title:"Image Title",alt:"Image Alt"}}),quoteWithHero=createQuote("This is a Quote with Hero",{url:(0,_helpers_createImage__WEBPACK_IMPORTED_MODULE_1__.A)(100,0,0),caption:"Image Caption"}),quoteWithoutHero=createQuote("This is a Quote without Hero")},"./stories/__fixtures__/mockSections.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,Q9:()=>sectionsWithThreeTiles,WN:()=>sectionsWithTwoTiles,oK:()=>sectionsWithFourTiles});var _app_constants_componentTypes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/constants/componentTypes.js"),_helpers_createImage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./stories/helpers/createImage.js");const createSectionsConfig=(labelText,labelLink,length)=>({type:_app_constants_componentTypes__WEBPACK_IMPORTED_MODULE_1__.oU,labelText,labelLink,sections:Array.from({length},((_,index)=>({name:"Section name",tid:215494,path:`/travel/europe/name${index+1}`,hero:{type:"image",data:{url:(0,_helpers_createImage__WEBPACK_IMPORTED_MODULE_0__.A)(0,150,0),alt:"This is the hero alt",extra:{imageSize:{width:7008,height:4672}}}}})))}),__WEBPACK_DEFAULT_EXPORT__=createSectionsConfig("Sections Component Title + 5 Image Tiles","https://www.independent.co.uk/travel/europe/spain",5),sectionsWithFourTiles=createSectionsConfig("Sections Component Title + 4 Image Tiles","https://www.independent.co.uk/travel/europe/spain",4),sectionsWithThreeTiles=createSectionsConfig("Sections Component Title + 3 Image Tiles","https://www.independent.co.uk/travel/europe/spain",3),sectionsWithTwoTiles=createSectionsConfig("Sections Component Title + 2 Image Tiles","https://www.independent.co.uk/travel/europe/spain",2)},"./stories/__fixtures__/mockText.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _app_constants_componentTypes__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/componentTypes.js");const __WEBPACK_DEFAULT_EXPORT__=()=>({default:{type:_app_constants_componentTypes__WEBPACK_IMPORTED_MODULE_0__.dw,labelText:"Text component",labelLink:"https://www.independent.co.uk/sport/football",updated:null,markup:'<p><strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><h2>Heading Two</h2><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <u>Duis aute irure dolor</u> in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><h3>Heading Three</h3><p>Excepteur sint occaecat cupidatat non proident, <a href="https://www.independent.co.uk/travel">sunt in culpa</a> qui officia deserunt mollit anim id est <em>laborum</em>.</p><ol><li>List item</li><li>List item</li><li>List item with <a href="/">link</a></li></ol><p><strong>NOTE:</strong><u>Underlined text is requested to be excluded.</u></p><ul><li>List item</li><li>List item</li><li>List item with <a href="/">link</a></li></ul>'},travel:{type:_app_constants_componentTypes__WEBPACK_IMPORTED_MODULE_0__.dw,labelText:"Text component",labelLink:"https://www.independent.co.uk/sport/football",updated:null,markup:'<p><strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><h2>Heading Two</h2><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <u>Duis aute irure dolor</u> in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><h3>Heading Three</h3><p>Excepteur sint occaecat cupidatat non proident, <a href="https://www.independent.co.uk/travel">sunt in culpa</a> qui officia deserunt mollit anim id est <em>laborum</em>.</p><ul><li><a href="/">Link a</a></li><li><a href="/">Link b</a></li><li><a href="/">Link c</a></li></ul><p><strong>NOTE:</strong><u>Underlined text is requested to be excluded.</u></p>'}})},"./stories/__fixtures__/section-component/authorHighlight.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _app_constants_componentTypes__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/constants/componentTypes.js");const __WEBPACK_DEFAULT_EXPORT__=()=>({type:_app_constants_componentTypes__WEBPACK_IMPORTED_MODULE_0__.H0,labelText:"",labelLink:"",biography:"Excepteur sint occaecat cupidatat non proident, sunt in culpa.",author:[{name:"Author A",path:"/author/a"},{name:"Author B",path:"/author/b"},{name:"Author C",path:"/author/c"}]})},"./stories/__fixtures__/section-component/heroPlusDMPU.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_ad_replacement__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/__fixtures__/section-component/ad-replacement/index.js"),_article__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/__fixtures__/section-component/article/index.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__=(articleOverrides,adReplacementType="none")=>_objectSpread({name:"Hero + DMPU",type:"HeroPlusDMPU",labelText:null,labelLink:null,useAuthorImage:!1,heroAlignment:"Left",contentSource:"Default",articles:[_objectSpread(_objectSpread({},(0,_article__WEBPACK_IMPORTED_MODULE_1__.A)({title:"Hero + DMPU article"})),articleOverrides)]},(0,_ad_replacement__WEBPACK_IMPORTED_MODULE_2__.A)(adReplacementType))},"./stories/helpers/components/MockSection.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/__mocks__/@brightsites/flow-core/lib/providers/RequestProvider.js"),_Mocker__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/helpers/components/Mocker.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}class MockSection extends _Mocker__WEBPACK_IMPORTED_MODULE_2__.A{setOverrides(props={}){(0,_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__._B)(),(0,_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__.Ni)(props.sectionOverrides||{},props.articleOverrides||{}),(0,_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__.AX)(props.reqOverrides||{})}}MockSection.propTypes=function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({sectionOverrides:prop_types__WEBPACK_IMPORTED_MODULE_3___default().object,reqOverrides:prop_types__WEBPACK_IMPORTED_MODULE_3___default().object},_Mocker__WEBPACK_IMPORTED_MODULE_2__.A.propTypes);const __WEBPACK_DEFAULT_EXPORT__=MockSection},"../node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/is.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("../node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/internal/_curry2.js").A)((function is(Ctor,val){return val instanceof Ctor||null!=val&&(val.constructor===Ctor||"Object"===Ctor.name&&"object"==typeof val)}))},"../node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/pick.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("../node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/internal/_curry2.js").A)((function pick(names,obj){for(var result={},idx=0;idx<names.length;)names[idx]in obj&&(result[names[idx]]=obj[names[idx]]),idx+=1;return result}))}}]);