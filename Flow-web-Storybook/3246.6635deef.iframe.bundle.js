(self.webpackChunk_indy_flow_web=self.webpackChunk_indy_flow_web||[]).push([[3246],{"../node_modules/.pnpm/@brightsites+flow-core@0.11.8-2.3_@babel+core@7.25.8_@types+react-dom@18.3.1_@types+react@18._dtrebnckutlhmqlcqr5irxysze/node_modules/@brightsites/flow-core/lib/component/QueueScript.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"));exports.default=function ScriptQueue(_ref){var keyId=_ref.keyId;return _react.default.createElement("script",{dangerouslySetInnerHTML:{__html:"var _flowQueue = window._flowQueue || [];\n  _flowQueue.push(['".concat(keyId,"']);\n  ")}})}},"../node_modules/.pnpm/@brightsites+flow-core@0.11.8-2.3_@babel+core@7.25.8_@types+react-dom@18.3.1_@types+react@18._dtrebnckutlhmqlcqr5irxysze/node_modules/@brightsites/flow-core/lib/component/amp/ScoreBoard.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.A=void 0;var _extends2=_interopRequireDefault(__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/extends.js")),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_react=_interopRequireDefault(__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js")),_propTypes=_interopRequireDefault(__webpack_require__("../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js")),_QueueScript=_interopRequireDefault(__webpack_require__("../node_modules/.pnpm/@brightsites+flow-core@0.11.8-2.3_@babel+core@7.25.8_@types+react-dom@18.3.1_@types+react@18._dtrebnckutlhmqlcqr5irxysze/node_modules/@brightsites/flow-core/lib/component/QueueScript.js")),_excluded=["cleamAmp","scoreboard"],ScoreBoard=function ScoreBoard(_ref){var cleamAmp=_ref.cleamAmp,scoreboard=_ref.scoreboard,props=(0,_objectWithoutProperties2.default)(_ref,_excluded);if(!scoreboard)return null;var selectedCompetition=scoreboard.selectedCompetition,selectedSeason=scoreboard.selectedSeason,selectedMatch=scoreboard.selectedMatch;return selectedCompetition&&selectedSeason&&selectedMatch?cleamAmp?_react.default.createElement("amp-iframe",{width:"600",height:"300",layout:"responsive",sandbox:"allow-scripts allow-same-origin",resizable:"",frameborder:"0",src:"https://secure.widget.cloud.opta.net/v3/amp.html?w=widget~timeline¦competition~".concat(selectedCompetition,"¦season~").concat(selectedSeason,"¦match~").concat(selectedMatch,"¦template~normal¦live~false¦orientation~horizontal¦vertical_timebar_height~260¦group_substitutions~false¦show_match_header~true¦show_score~true¦show_crests~false¦show_assists~all¦show_team_formation~true¦show_clock~true¦show_period_dividers~true¦show_halftime_score~false¦show_date~true¦date_format~dddd D MMMM YYYY¦show_attendance~true¦show_images~false¦show_referee~true¦show_venue~true¦show_cards~all¦show_goals~true¦show_penalties_missed~true¦show_subs~true¦show_goals_combined~false¦show_shootouts~true¦show_competition_name~true¦competition_naming~full¦team_naming~full¦player_naming~full¦show_live~false¦show_logo~true¦show_title~true¦breakpoints~400, 700¦sport~football&s=7c085cc69a4c1938bf69f73e42b1be98&t=Europe%2FLondon&l=en_GB")},_react.default.createElement("p",{placeholder:""},"Loading"),_react.default.createElement("div",{overflow:"",tabIndex:"0",role:"button","aria-label":"Read more"},"Click to show more")):_react.default.createElement(_react.default.Fragment,null,_react.default.createElement(_QueueScript.default,{keyId:"scoreboard"}),_react.default.createElement("opta-widget",(0,_extends2.default)({widget:"timeline",competition:selectedCompetition,season:selectedSeason,match:selectedMatch,template:"normal",live:"false",orientation:"horizontal",vertical_timebar_height:"260",group_substitutions:"false",show_match_header:"true",show_score:"true",show_crests:"false",show_assists:"all",show_team_formation:"true",show_clock:"true",show_period_dividers:"true",show_halftime_score:"false",show_date:"true",date_format:"dddd D MMMM YYYY",show_attendance:"true",show_images:"false",show_referee:"true",show_venue:"true",show_cards:"all",show_goals:"true",show_penalties_missed:"true",show_subs:"true",show_goals_combined:"false",show_shootouts:"true",show_competition_name:"true",competition_naming:"full",team_naming:"full",player_naming:"full",show_live:"false",show_logo:"true",show_title:"true",breakpoints:"400, 700",sport:"football"},props))):(console.log("Scoreboard required props are not set"),null)};ScoreBoard.defaultProps={cleamAmp:!1,scoreboard:null},ScoreBoard.propTypes={cleamAmp:_propTypes.default.bool,scoreboard:_propTypes.default.object};exports.A=ScoreBoard},"../node_modules/.pnpm/@brightsites+flow-core@0.11.8-2.3_@babel+core@7.25.8_@types+react-dom@18.3.1_@types+react@18._dtrebnckutlhmqlcqr5irxysze/node_modules/@brightsites/flow-core/lib/component/amp/Tiktok.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.A=void 0;var _extends2=_interopRequireDefault(__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/extends.js")),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_react=_interopRequireDefault(__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js")),_propTypes=_interopRequireDefault(__webpack_require__("../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js")),_excluded=["data"],Tiktok=function Tiktok(props){var defaults=function getDefaults(props){return{layout:"responsive",width:500,height:310,"data-src":props.data.url}}(props),rest=(props.data,(0,_objectWithoutProperties2.default)(props,_excluded));return _react.default.createElement("amp-tiktok",(0,_extends2.default)({},defaults,rest))};Tiktok.propTypes={data:_propTypes.default.object.isRequired};exports.A=Tiktok},"../node_modules/.pnpm/@brightsites+flow-core@0.11.8-2.3_@babel+core@7.25.8_@types+react-dom@18.3.1_@types+react@18._dtrebnckutlhmqlcqr5irxysze/node_modules/@brightsites/flow-core/lib/constants.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var _app=__webpack_require__("../node_modules/.pnpm/@brightsites+flow-core@0.11.8-2.3_@babel+core@7.25.8_@types+react-dom@18.3.1_@types+react@18._dtrebnckutlhmqlcqr5irxysze/node_modules/@brightsites/flow-core/lib/constants/app.js");module.exports={APP_BASE_PATH:_app.APP_BASE_PATH,BUILD_PATH:_app.BUILD_PATH,PUBLIC_PATH:_app.PUBLIC_PATH,SW_FILENAME:_app.SW_FILENAME,SCRIPT_FILENAME:_app.SCRIPT_FILENAME,ENTRY_FILENAME:_app.ENTRY_FILENAME}},"../node_modules/.pnpm/@brightsites+flow-core@0.11.8-2.3_@babel+core@7.25.8_@types+react-dom@18.3.1_@types+react@18._dtrebnckutlhmqlcqr5irxysze/node_modules/@brightsites/flow-core/lib/constants/app.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SW_FILENAME=exports.SCRIPT_FILENAME=exports.PUBLIC_PATH=exports.ENTRY_FILENAME=exports.BUILD_PATH=exports.APP_BASE_PATH=void 0;exports.APP_BASE_PATH="app",exports.BUILD_PATH="_build",exports.PUBLIC_PATH="public",exports.SCRIPT_FILENAME="main.js",exports.SW_FILENAME="sw.js",exports.ENTRY_FILENAME="entry.js"},"../node_modules/.pnpm/@brightsites+flow-core@0.11.8-2.3_@babel+core@7.25.8_@types+react-dom@18.3.1_@types+react@18._dtrebnckutlhmqlcqr5irxysze/node_modules/@brightsites/flow-core/lib/utils/scoreboard.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.f=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/defineProperty.js"));function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_defineProperty2.default)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}exports.f=function scoreboardData(_ref){var extra=_ref.extra;if(!_ref.isLiveBlog)return!1;var keys=["selectedCompetition","selectedSeason","selectedMatch"];return!!keys.every(function propHasValue(data){return function(key){return!!data[key]}}(extra))&&keys.reduce((function(acc,next){return _objectSpread(_objectSpread({},acc),{},(0,_defineProperty2.default)({},next,extra[next]))}),{})}},"../node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/plugin/advancedFormat.js":function(module){module.exports=function(){"use strict";return function(e,t){var r=t.prototype,n=r.format;r.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return n.bind(this)(e);var s=this.$utils(),a=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return r.ordinal(t.$D);case"gggg":return t.weekYear();case"GGGG":return t.isoWeekYear();case"wo":return r.ordinal(t.week(),"W");case"w":case"ww":return s.s(t.week(),"w"===e?1:2,"0");case"W":case"WW":return s.s(t.isoWeek(),"W"===e?1:2,"0");case"k":case"kk":return s.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();case"z":return"["+t.offsetName()+"]";case"zzz":return"["+t.offsetName("long")+"]";default:return e}}));return n.bind(this)(a)}}}()},"../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_asciiToArray.js":module=>{module.exports=function asciiToArray(string){return string.split("")}},"../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignValue.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseAssignValue=__webpack_require__("../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignValue.js"),eq=__webpack_require__("../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js"),hasOwnProperty=Object.prototype.hasOwnProperty;module.exports=function assignValue(object,key,value){var objValue=object[key];hasOwnProperty.call(object,key)&&eq(objValue,value)&&(void 0!==value||key in object)||baseAssignValue(object,key,value)}},"../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseSet.js":(module,__unused_webpack_exports,__webpack_require__)=>{var assignValue=__webpack_require__("../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignValue.js"),castPath=__webpack_require__("../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_castPath.js"),isIndex=__webpack_require__("../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIndex.js"),isObject=__webpack_require__("../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js"),toKey=__webpack_require__("../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toKey.js");module.exports=function baseSet(object,path,value,customizer){if(!isObject(object))return object;for(var index=-1,length=(path=castPath(path,object)).length,lastIndex=length-1,nested=object;null!=nested&&++index<length;){var key=toKey(path[index]),newValue=value;if("__proto__"===key||"constructor"===key||"prototype"===key)return object;if(index!=lastIndex){var objValue=nested[key];void 0===(newValue=customizer?customizer(objValue,key,nested):void 0)&&(newValue=isObject(objValue)?objValue:isIndex(path[index+1])?[]:{})}assignValue(nested,key,newValue),nested=nested[key]}return object}},"../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseSlice.js":module=>{module.exports=function baseSlice(array,start,end){var index=-1,length=array.length;start<0&&(start=-start>length?0:length+start),(end=end>length?length:end)<0&&(end+=length),length=start>end?0:end-start>>>0,start>>>=0;for(var result=Array(length);++index<length;)result[index]=array[index+start];return result}},"../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_castSlice.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseSlice=__webpack_require__("../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseSlice.js");module.exports=function castSlice(array,start,end){var length=array.length;return end=void 0===end?length:end,!start&&end>=length?array:baseSlice(array,start,end)}},"../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createCaseFirst.js":(module,__unused_webpack_exports,__webpack_require__)=>{var castSlice=__webpack_require__("../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_castSlice.js"),hasUnicode=__webpack_require__("../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hasUnicode.js"),stringToArray=__webpack_require__("../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stringToArray.js"),toString=__webpack_require__("../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toString.js");module.exports=function createCaseFirst(methodName){return function(string){string=toString(string);var strSymbols=hasUnicode(string)?stringToArray(string):void 0,chr=strSymbols?strSymbols[0]:string.charAt(0),trailing=strSymbols?castSlice(strSymbols,1).join(""):string.slice(1);return chr[methodName]()+trailing}}},"../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hasUnicode.js":module=>{var reHasUnicode=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");module.exports=function hasUnicode(string){return reHasUnicode.test(string)}},"../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stringToArray.js":(module,__unused_webpack_exports,__webpack_require__)=>{var asciiToArray=__webpack_require__("../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_asciiToArray.js"),hasUnicode=__webpack_require__("../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hasUnicode.js"),unicodeToArray=__webpack_require__("../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_unicodeToArray.js");module.exports=function stringToArray(string){return hasUnicode(string)?unicodeToArray(string):asciiToArray(string)}},"../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_unicodeToArray.js":module=>{var rsAstral="[\\ud800-\\udfff]",rsCombo="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",rsFitz="\\ud83c[\\udffb-\\udfff]",rsNonAstral="[^\\ud800-\\udfff]",rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",reOptMod="(?:"+rsCombo+"|"+rsFitz+")"+"?",rsSeq="[\\ufe0e\\ufe0f]?"+reOptMod+("(?:\\u200d(?:"+[rsNonAstral,rsRegional,rsSurrPair].join("|")+")[\\ufe0e\\ufe0f]?"+reOptMod+")*"),rsSymbol="(?:"+[rsNonAstral+rsCombo+"?",rsCombo,rsRegional,rsSurrPair,rsAstral].join("|")+")",reUnicode=RegExp(rsFitz+"(?="+rsFitz+")|"+rsSymbol+rsSeq,"g");module.exports=function unicodeToArray(string){return string.match(reUnicode)||[]}},"../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/set.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseSet=__webpack_require__("../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseSet.js");module.exports=function set(object,path,value){return null==object?object:baseSet(object,path,value)}},"../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/upperFirst.js":(module,__unused_webpack_exports,__webpack_require__)=>{var upperFirst=__webpack_require__("../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createCaseFirst.js")("toUpperCase");module.exports=upperFirst},"../node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/is.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("../node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/internal/_curry2.js").A)((function is(Ctor,val){return val instanceof Ctor||null!=val&&(val.constructor===Ctor||"Object"===Ctor.name&&"object"==typeof val)}))},"../node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/pick.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("../node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/internal/_curry2.js").A)((function pick(names,obj){for(var result={},idx=0;idx<names.length;)names[idx]in obj&&(result[names[idx]]=obj[names[idx]]),idx+=1;return result}))}}]);