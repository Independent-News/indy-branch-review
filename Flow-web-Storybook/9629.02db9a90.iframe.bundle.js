/*! For license information please see 9629.02db9a90.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_indy_flow_web=self.webpackChunk_indy_flow_web||[]).push([[9629],{"../node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js":module=>{"use strict";var getOwnPropertySymbols=Object.getOwnPropertySymbols,hasOwnProperty=Object.prototype.hasOwnProperty,propIsEnumerable=Object.prototype.propertyIsEnumerable;module.exports=function shouldUseNative(){try{if(!Object.assign)return!1;var test1=new String("abc");if(test1[5]="de","5"===Object.getOwnPropertyNames(test1)[0])return!1;for(var test2={},i=0;i<10;i++)test2["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(test2).map((function(n){return test2[n]})).join(""))return!1;var test3={};return"abcdefghijklmnopqrst".split("").forEach((function(letter){test3[letter]=letter})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},test3)).join("")}catch(err){return!1}}()?Object.assign:function(target,source){for(var from,symbols,to=function toObject(val){if(null==val)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(val)}(target),s=1;s<arguments.length;s++){for(var key in from=Object(arguments[s]))hasOwnProperty.call(from,key)&&(to[key]=from[key]);if(getOwnPropertySymbols){symbols=getOwnPropertySymbols(from);for(var i=0;i<symbols.length;i++)propIsEnumerable.call(from,symbols[i])&&(to[symbols[i]]=from[symbols[i]])}}return to}},"../node_modules/.pnpm/react-fast-compare@3.2.1/node_modules/react-fast-compare/index.js":module=>{var hasElementType="undefined"!=typeof Element,hasMap="function"==typeof Map,hasSet="function"==typeof Set,hasArrayBuffer="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys,it;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(hasMap&&a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(it=a.entries();!(i=it.next()).done;)if(!b.has(i.value[0]))return!1;for(it=a.entries();!(i=it.next()).done;)if(!equal(i.value[1],b.get(i.value[0])))return!1;return!0}if(hasSet&&a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(it=a.entries();!(i=it.next()).done;)if(!b.has(i.value[0]))return!1;return!0}if(hasArrayBuffer&&ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf&&"function"==typeof a.valueOf&&"function"==typeof b.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString&&"function"==typeof a.toString&&"function"==typeof b.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;if(hasElementType&&a instanceof Element)return!1;for(i=length;0!=i--;)if(("_owner"!==keys[i]&&"__v"!==keys[i]&&"__o"!==keys[i]||!a.$$typeof)&&!equal(a[keys[i]],b[keys[i]]))return!1;return!0}return a!=a&&b!=b}module.exports=function isEqual(a,b){try{return equal(a,b)}catch(error){if((error.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw error}}},"../node_modules/.pnpm/react-helmet@6.1.0_react@18.3.1/node_modules/react-helmet/es/Helmet.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Helmet:()=>HelmetExport,default:()=>__WEBPACK_DEFAULT_EXPORT__});var clock,prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),react_side_effect__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/react-side-effect@2.1.2_react@18.3.1/node_modules/react-side-effect/lib/index.js"),react_side_effect__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react_side_effect__WEBPACK_IMPORTED_MODULE_0__),react_fast_compare__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/react-fast-compare@3.2.1/node_modules/react-fast-compare/index.js"),react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),object_assign__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js"),object_assign__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_3__),ATTRIBUTE_NAMES_BODY="bodyAttributes",ATTRIBUTE_NAMES_HTML="htmlAttributes",ATTRIBUTE_NAMES_TITLE="titleAttributes",TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},TAG_PROPERTIES_CHARSET=(Object.keys(TAG_NAMES).map((function(name){return TAG_NAMES[name]})),"charset"),TAG_PROPERTIES_CSS_TEXT="cssText",TAG_PROPERTIES_HREF="href",TAG_PROPERTIES_HTTPEQUIV="http-equiv",TAG_PROPERTIES_INNER_HTML="innerHTML",TAG_PROPERTIES_ITEM_PROP="itemprop",TAG_PROPERTIES_NAME="name",TAG_PROPERTIES_PROPERTY="property",TAG_PROPERTIES_REL="rel",TAG_PROPERTIES_SRC="src",TAG_PROPERTIES_TARGET="target",REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},HELMET_PROPS_DEFAULT_TITLE="defaultTitle",HELMET_PROPS_DEFER="defer",HELMET_PROPS_ENCODE_SPECIAL_CHARACTERS="encodeSpecialCharacters",HELMET_PROPS_ON_CHANGE_CLIENT_STATE="onChangeClientState",HELMET_PROPS_TITLE_TEMPLATE="titleTemplate",HTML_TAG_MAP=Object.keys(REACT_TAG_MAP).reduce((function(obj,key){return obj[REACT_TAG_MAP[key]]=key,obj}),{}),SELF_CLOSING_TAGS=[TAG_NAMES.NOSCRIPT,TAG_NAMES.SCRIPT,TAG_NAMES.STYLE],_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},objectWithoutProperties=function(obj,keys){var target={};for(var i in obj)keys.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(obj,i)&&(target[i]=obj[i]);return target},encodeSpecialCharacters=function encodeSpecialCharacters(str){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(str):String(str).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},getTitleFromPropsList=function getTitleFromPropsList(propsList){var innermostTitle=getInnermostProperty(propsList,TAG_NAMES.TITLE),innermostTemplate=getInnermostProperty(propsList,HELMET_PROPS_TITLE_TEMPLATE);if(innermostTemplate&&innermostTitle)return innermostTemplate.replace(/%s/g,(function(){return Array.isArray(innermostTitle)?innermostTitle.join(""):innermostTitle}));var innermostDefaultTitle=getInnermostProperty(propsList,HELMET_PROPS_DEFAULT_TITLE);return innermostTitle||innermostDefaultTitle||void 0},getOnChangeClientState=function getOnChangeClientState(propsList){return getInnermostProperty(propsList,HELMET_PROPS_ON_CHANGE_CLIENT_STATE)||function(){}},getAttributesFromPropsList=function getAttributesFromPropsList(tagType,propsList){return propsList.filter((function(props){return void 0!==props[tagType]})).map((function(props){return props[tagType]})).reduce((function(tagAttrs,current){return _extends({},tagAttrs,current)}),{})},getBaseTagFromPropsList=function getBaseTagFromPropsList(primaryAttributes,propsList){return propsList.filter((function(props){return void 0!==props[TAG_NAMES.BASE]})).map((function(props){return props[TAG_NAMES.BASE]})).reverse().reduce((function(innermostBaseTag,tag){if(!innermostBaseTag.length)for(var keys=Object.keys(tag),i=0;i<keys.length;i++){var lowerCaseAttributeKey=keys[i].toLowerCase();if(-1!==primaryAttributes.indexOf(lowerCaseAttributeKey)&&tag[lowerCaseAttributeKey])return innermostBaseTag.concat(tag)}return innermostBaseTag}),[])},getTagsFromPropsList=function getTagsFromPropsList(tagName,primaryAttributes,propsList){var approvedSeenTags={};return propsList.filter((function(props){return!!Array.isArray(props[tagName])||(void 0!==props[tagName]&&warn("Helmet: "+tagName+' should be of type "Array". Instead found type "'+_typeof(props[tagName])+'"'),!1)})).map((function(props){return props[tagName]})).reverse().reduce((function(approvedTags,instanceTags){var instanceSeenTags={};instanceTags.filter((function(tag){for(var primaryAttributeKey=void 0,keys=Object.keys(tag),i=0;i<keys.length;i++){var attributeKey=keys[i],lowerCaseAttributeKey=attributeKey.toLowerCase();-1===primaryAttributes.indexOf(lowerCaseAttributeKey)||primaryAttributeKey===TAG_PROPERTIES_REL&&"canonical"===tag[primaryAttributeKey].toLowerCase()||lowerCaseAttributeKey===TAG_PROPERTIES_REL&&"stylesheet"===tag[lowerCaseAttributeKey].toLowerCase()||(primaryAttributeKey=lowerCaseAttributeKey),-1===primaryAttributes.indexOf(attributeKey)||attributeKey!==TAG_PROPERTIES_INNER_HTML&&attributeKey!==TAG_PROPERTIES_CSS_TEXT&&attributeKey!==TAG_PROPERTIES_ITEM_PROP||(primaryAttributeKey=attributeKey)}if(!primaryAttributeKey||!tag[primaryAttributeKey])return!1;var value=tag[primaryAttributeKey].toLowerCase();return approvedSeenTags[primaryAttributeKey]||(approvedSeenTags[primaryAttributeKey]={}),instanceSeenTags[primaryAttributeKey]||(instanceSeenTags[primaryAttributeKey]={}),!approvedSeenTags[primaryAttributeKey][value]&&(instanceSeenTags[primaryAttributeKey][value]=!0,!0)})).reverse().forEach((function(tag){return approvedTags.push(tag)}));for(var keys=Object.keys(instanceSeenTags),i=0;i<keys.length;i++){var attributeKey=keys[i],tagUnion=object_assign__WEBPACK_IMPORTED_MODULE_3___default()({},approvedSeenTags[attributeKey],instanceSeenTags[attributeKey]);approvedSeenTags[attributeKey]=tagUnion}return approvedTags}),[]).reverse()},getInnermostProperty=function getInnermostProperty(propsList,property){for(var i=propsList.length-1;i>=0;i--){var props=propsList[i];if(props.hasOwnProperty(property))return props[property]}return null},rafPolyfill=(clock=Date.now(),function(callback){var currentTime=Date.now();currentTime-clock>16?(clock=currentTime,callback(currentTime)):setTimeout((function(){rafPolyfill(callback)}),0)}),cafPolyfill=function cafPolyfill(id){return clearTimeout(id)},requestAnimationFrame="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||rafPolyfill:__webpack_require__.g.requestAnimationFrame||rafPolyfill,cancelAnimationFrame="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||cafPolyfill:__webpack_require__.g.cancelAnimationFrame||cafPolyfill,warn=function warn(msg){return console&&"function"==typeof console.warn&&console.warn(msg)},_helmetCallback=null,commitTagChanges=function commitTagChanges(newState,cb){var baseTag=newState.baseTag,bodyAttributes=newState.bodyAttributes,htmlAttributes=newState.htmlAttributes,linkTags=newState.linkTags,metaTags=newState.metaTags,noscriptTags=newState.noscriptTags,onChangeClientState=newState.onChangeClientState,scriptTags=newState.scriptTags,styleTags=newState.styleTags,title=newState.title,titleAttributes=newState.titleAttributes;updateAttributes(TAG_NAMES.BODY,bodyAttributes),updateAttributes(TAG_NAMES.HTML,htmlAttributes),updateTitle(title,titleAttributes);var tagUpdates={baseTag:updateTags(TAG_NAMES.BASE,baseTag),linkTags:updateTags(TAG_NAMES.LINK,linkTags),metaTags:updateTags(TAG_NAMES.META,metaTags),noscriptTags:updateTags(TAG_NAMES.NOSCRIPT,noscriptTags),scriptTags:updateTags(TAG_NAMES.SCRIPT,scriptTags),styleTags:updateTags(TAG_NAMES.STYLE,styleTags)},addedTags={},removedTags={};Object.keys(tagUpdates).forEach((function(tagType){var _tagUpdates$tagType=tagUpdates[tagType],newTags=_tagUpdates$tagType.newTags,oldTags=_tagUpdates$tagType.oldTags;newTags.length&&(addedTags[tagType]=newTags),oldTags.length&&(removedTags[tagType]=tagUpdates[tagType].oldTags)})),cb&&cb(),onChangeClientState(newState,addedTags,removedTags)},flattenArray=function flattenArray(possibleArray){return Array.isArray(possibleArray)?possibleArray.join(""):possibleArray},updateTitle=function updateTitle(title,attributes){void 0!==title&&document.title!==title&&(document.title=flattenArray(title)),updateAttributes(TAG_NAMES.TITLE,attributes)},updateAttributes=function updateAttributes(tagName,attributes){var elementTag=document.getElementsByTagName(tagName)[0];if(elementTag){for(var helmetAttributeString=elementTag.getAttribute("data-react-helmet"),helmetAttributes=helmetAttributeString?helmetAttributeString.split(","):[],attributesToRemove=[].concat(helmetAttributes),attributeKeys=Object.keys(attributes),i=0;i<attributeKeys.length;i++){var attribute=attributeKeys[i],value=attributes[attribute]||"";elementTag.getAttribute(attribute)!==value&&elementTag.setAttribute(attribute,value),-1===helmetAttributes.indexOf(attribute)&&helmetAttributes.push(attribute);var indexToSave=attributesToRemove.indexOf(attribute);-1!==indexToSave&&attributesToRemove.splice(indexToSave,1)}for(var _i=attributesToRemove.length-1;_i>=0;_i--)elementTag.removeAttribute(attributesToRemove[_i]);helmetAttributes.length===attributesToRemove.length?elementTag.removeAttribute("data-react-helmet"):elementTag.getAttribute("data-react-helmet")!==attributeKeys.join(",")&&elementTag.setAttribute("data-react-helmet",attributeKeys.join(","))}},updateTags=function updateTags(type,tags){var headElement=document.head||document.querySelector(TAG_NAMES.HEAD),tagNodes=headElement.querySelectorAll(type+"[data-react-helmet]"),oldTags=Array.prototype.slice.call(tagNodes),newTags=[],indexToDelete=void 0;return tags&&tags.length&&tags.forEach((function(tag){var newElement=document.createElement(type);for(var attribute in tag)if(tag.hasOwnProperty(attribute))if(attribute===TAG_PROPERTIES_INNER_HTML)newElement.innerHTML=tag.innerHTML;else if(attribute===TAG_PROPERTIES_CSS_TEXT)newElement.styleSheet?newElement.styleSheet.cssText=tag.cssText:newElement.appendChild(document.createTextNode(tag.cssText));else{var value=void 0===tag[attribute]?"":tag[attribute];newElement.setAttribute(attribute,value)}newElement.setAttribute("data-react-helmet","true"),oldTags.some((function(existingTag,index){return indexToDelete=index,newElement.isEqualNode(existingTag)}))?oldTags.splice(indexToDelete,1):newTags.push(newElement)})),oldTags.forEach((function(tag){return tag.parentNode.removeChild(tag)})),newTags.forEach((function(tag){return headElement.appendChild(tag)})),{oldTags,newTags}},generateElementAttributesAsString=function generateElementAttributesAsString(attributes){return Object.keys(attributes).reduce((function(str,key){var attr=void 0!==attributes[key]?key+'="'+attributes[key]+'"':""+key;return str?str+" "+attr:attr}),"")},convertElementAttributestoReactProps=function convertElementAttributestoReactProps(attributes){var initProps=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(attributes).reduce((function(obj,key){return obj[REACT_TAG_MAP[key]||key]=attributes[key],obj}),initProps)},getMethodsForTag=function getMethodsForTag(type,tags,encode){switch(type){case TAG_NAMES.TITLE:return{toComponent:function toComponent(){return function generateTitleAsReactComponent(type,title,attributes){var _initProps,initProps=((_initProps={key:title})["data-react-helmet"]=!0,_initProps),props=convertElementAttributestoReactProps(attributes,initProps);return[react__WEBPACK_IMPORTED_MODULE_2__.createElement(TAG_NAMES.TITLE,props,title)]}(0,tags.title,tags.titleAttributes)},toString:function toString(){return function generateTitleAsString(type,title,attributes,encode){var attributeString=generateElementAttributesAsString(attributes),flattenedTitle=flattenArray(title);return attributeString?"<"+type+' data-react-helmet="true" '+attributeString+">"+encodeSpecialCharacters(flattenedTitle,encode)+"</"+type+">":"<"+type+' data-react-helmet="true">'+encodeSpecialCharacters(flattenedTitle,encode)+"</"+type+">"}(type,tags.title,tags.titleAttributes,encode)}};case ATTRIBUTE_NAMES_BODY:case ATTRIBUTE_NAMES_HTML:return{toComponent:function toComponent(){return convertElementAttributestoReactProps(tags)},toString:function toString(){return generateElementAttributesAsString(tags)}};default:return{toComponent:function toComponent(){return function generateTagsAsReactComponent(type,tags){return tags.map((function(tag,i){var _mappedTag,mappedTag=((_mappedTag={key:i})["data-react-helmet"]=!0,_mappedTag);return Object.keys(tag).forEach((function(attribute){var mappedAttribute=REACT_TAG_MAP[attribute]||attribute;if(mappedAttribute===TAG_PROPERTIES_INNER_HTML||mappedAttribute===TAG_PROPERTIES_CSS_TEXT){var content=tag.innerHTML||tag.cssText;mappedTag.dangerouslySetInnerHTML={__html:content}}else mappedTag[mappedAttribute]=tag[attribute]})),react__WEBPACK_IMPORTED_MODULE_2__.createElement(type,mappedTag)}))}(type,tags)},toString:function toString(){return function generateTagsAsString(type,tags,encode){return tags.reduce((function(str,tag){var attributeHtml=Object.keys(tag).filter((function(attribute){return!(attribute===TAG_PROPERTIES_INNER_HTML||attribute===TAG_PROPERTIES_CSS_TEXT)})).reduce((function(string,attribute){var attr=void 0===tag[attribute]?attribute:attribute+'="'+encodeSpecialCharacters(tag[attribute],encode)+'"';return string?string+" "+attr:attr}),""),tagContent=tag.innerHTML||tag.cssText||"",isSelfClosing=-1===SELF_CLOSING_TAGS.indexOf(type);return str+"<"+type+' data-react-helmet="true" '+attributeHtml+(isSelfClosing?"/>":">"+tagContent+"</"+type+">")}),"")}(type,tags,encode)}}}},mapStateOnServer=function mapStateOnServer(_ref){var baseTag=_ref.baseTag,bodyAttributes=_ref.bodyAttributes,encode=_ref.encode,htmlAttributes=_ref.htmlAttributes,linkTags=_ref.linkTags,metaTags=_ref.metaTags,noscriptTags=_ref.noscriptTags,scriptTags=_ref.scriptTags,styleTags=_ref.styleTags,_ref$title=_ref.title,title=void 0===_ref$title?"":_ref$title,titleAttributes=_ref.titleAttributes;return{base:getMethodsForTag(TAG_NAMES.BASE,baseTag,encode),bodyAttributes:getMethodsForTag(ATTRIBUTE_NAMES_BODY,bodyAttributes,encode),htmlAttributes:getMethodsForTag(ATTRIBUTE_NAMES_HTML,htmlAttributes,encode),link:getMethodsForTag(TAG_NAMES.LINK,linkTags,encode),meta:getMethodsForTag(TAG_NAMES.META,metaTags,encode),noscript:getMethodsForTag(TAG_NAMES.NOSCRIPT,noscriptTags,encode),script:getMethodsForTag(TAG_NAMES.SCRIPT,scriptTags,encode),style:getMethodsForTag(TAG_NAMES.STYLE,styleTags,encode),title:getMethodsForTag(TAG_NAMES.TITLE,{title,titleAttributes},encode)}},HelmetExport=function Helmet(Component){var _class,_temp;return _temp=_class=function(_React$Component){function HelmetWrapper(){return function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,HelmetWrapper),function(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}(this,_React$Component.apply(this,arguments))}return function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}(HelmetWrapper,_React$Component),HelmetWrapper.prototype.shouldComponentUpdate=function shouldComponentUpdate(nextProps){return!react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(this.props,nextProps)},HelmetWrapper.prototype.mapNestedChildrenToProps=function mapNestedChildrenToProps(child,nestedChildren){if(!nestedChildren)return null;switch(child.type){case TAG_NAMES.SCRIPT:case TAG_NAMES.NOSCRIPT:return{innerHTML:nestedChildren};case TAG_NAMES.STYLE:return{cssText:nestedChildren}}throw new Error("<"+child.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},HelmetWrapper.prototype.flattenArrayTypeChildren=function flattenArrayTypeChildren(_ref){var _babelHelpers$extends,child=_ref.child,arrayTypeChildren=_ref.arrayTypeChildren,newChildProps=_ref.newChildProps,nestedChildren=_ref.nestedChildren;return _extends({},arrayTypeChildren,((_babelHelpers$extends={})[child.type]=[].concat(arrayTypeChildren[child.type]||[],[_extends({},newChildProps,this.mapNestedChildrenToProps(child,nestedChildren))]),_babelHelpers$extends))},HelmetWrapper.prototype.mapObjectTypeChildren=function mapObjectTypeChildren(_ref2){var _babelHelpers$extends2,_babelHelpers$extends3,child=_ref2.child,newProps=_ref2.newProps,newChildProps=_ref2.newChildProps,nestedChildren=_ref2.nestedChildren;switch(child.type){case TAG_NAMES.TITLE:return _extends({},newProps,((_babelHelpers$extends2={})[child.type]=nestedChildren,_babelHelpers$extends2.titleAttributes=_extends({},newChildProps),_babelHelpers$extends2));case TAG_NAMES.BODY:return _extends({},newProps,{bodyAttributes:_extends({},newChildProps)});case TAG_NAMES.HTML:return _extends({},newProps,{htmlAttributes:_extends({},newChildProps)})}return _extends({},newProps,((_babelHelpers$extends3={})[child.type]=_extends({},newChildProps),_babelHelpers$extends3))},HelmetWrapper.prototype.mapArrayTypeChildrenToProps=function mapArrayTypeChildrenToProps(arrayTypeChildren,newProps){var newFlattenedProps=_extends({},newProps);return Object.keys(arrayTypeChildren).forEach((function(arrayChildName){var _babelHelpers$extends4;newFlattenedProps=_extends({},newFlattenedProps,((_babelHelpers$extends4={})[arrayChildName]=arrayTypeChildren[arrayChildName],_babelHelpers$extends4))})),newFlattenedProps},HelmetWrapper.prototype.warnOnInvalidChildren=function warnOnInvalidChildren(child,nestedChildren){return!0},HelmetWrapper.prototype.mapChildrenToProps=function mapChildrenToProps(children,newProps){var _this2=this,arrayTypeChildren={};return react__WEBPACK_IMPORTED_MODULE_2__.Children.forEach(children,(function(child){if(child&&child.props){var _child$props=child.props,nestedChildren=_child$props.children,newChildProps=function convertReactPropstoHtmlAttributes(props){var initAttributes=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(props).reduce((function(obj,key){return obj[HTML_TAG_MAP[key]||key]=props[key],obj}),initAttributes)}(objectWithoutProperties(_child$props,["children"]));switch(_this2.warnOnInvalidChildren(child,nestedChildren),child.type){case TAG_NAMES.LINK:case TAG_NAMES.META:case TAG_NAMES.NOSCRIPT:case TAG_NAMES.SCRIPT:case TAG_NAMES.STYLE:arrayTypeChildren=_this2.flattenArrayTypeChildren({child,arrayTypeChildren,newChildProps,nestedChildren});break;default:newProps=_this2.mapObjectTypeChildren({child,newProps,newChildProps,nestedChildren})}}})),newProps=this.mapArrayTypeChildrenToProps(arrayTypeChildren,newProps)},HelmetWrapper.prototype.render=function render(){var _props=this.props,children=_props.children,props=objectWithoutProperties(_props,["children"]),newProps=_extends({},props);return children&&(newProps=this.mapChildrenToProps(children,newProps)),react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component,newProps)},createClass(HelmetWrapper,null,[{key:"canUseDOM",set:function set$$1(canUseDOM){Component.canUseDOM=canUseDOM}}]),HelmetWrapper}(react__WEBPACK_IMPORTED_MODULE_2__.Component),_class.propTypes={base:prop_types__WEBPACK_IMPORTED_MODULE_4___default().object,bodyAttributes:prop_types__WEBPACK_IMPORTED_MODULE_4___default().object,children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),prop_types__WEBPACK_IMPORTED_MODULE_4___default().node]),defaultTitle:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,defer:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,encodeSpecialCharacters:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,htmlAttributes:prop_types__WEBPACK_IMPORTED_MODULE_4___default().object,link:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),meta:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),noscript:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),onChangeClientState:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,script:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),style:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),title:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,titleAttributes:prop_types__WEBPACK_IMPORTED_MODULE_4___default().object,titleTemplate:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string},_class.defaultProps={defer:!0,encodeSpecialCharacters:!0},_class.peek=Component.peek,_class.rewind=function(){var mappedState=Component.rewind();return mappedState||(mappedState=mapStateOnServer({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),mappedState},_temp}(react_side_effect__WEBPACK_IMPORTED_MODULE_0___default()((function reducePropsToState(propsList){return{baseTag:getBaseTagFromPropsList([TAG_PROPERTIES_HREF,TAG_PROPERTIES_TARGET],propsList),bodyAttributes:getAttributesFromPropsList(ATTRIBUTE_NAMES_BODY,propsList),defer:getInnermostProperty(propsList,HELMET_PROPS_DEFER),encode:getInnermostProperty(propsList,HELMET_PROPS_ENCODE_SPECIAL_CHARACTERS),htmlAttributes:getAttributesFromPropsList(ATTRIBUTE_NAMES_HTML,propsList),linkTags:getTagsFromPropsList(TAG_NAMES.LINK,[TAG_PROPERTIES_REL,TAG_PROPERTIES_HREF],propsList),metaTags:getTagsFromPropsList(TAG_NAMES.META,[TAG_PROPERTIES_NAME,TAG_PROPERTIES_CHARSET,TAG_PROPERTIES_HTTPEQUIV,TAG_PROPERTIES_PROPERTY,TAG_PROPERTIES_ITEM_PROP],propsList),noscriptTags:getTagsFromPropsList(TAG_NAMES.NOSCRIPT,[TAG_PROPERTIES_INNER_HTML],propsList),onChangeClientState:getOnChangeClientState(propsList),scriptTags:getTagsFromPropsList(TAG_NAMES.SCRIPT,[TAG_PROPERTIES_SRC,TAG_PROPERTIES_INNER_HTML],propsList),styleTags:getTagsFromPropsList(TAG_NAMES.STYLE,[TAG_PROPERTIES_CSS_TEXT],propsList),title:getTitleFromPropsList(propsList),titleAttributes:getAttributesFromPropsList(ATTRIBUTE_NAMES_TITLE,propsList)}}),(function handleClientStateChange(newState){_helmetCallback&&cancelAnimationFrame(_helmetCallback),newState.defer?_helmetCallback=requestAnimationFrame((function(){commitTagChanges(newState,(function(){_helmetCallback=null}))})):(commitTagChanges(newState),_helmetCallback=null)}),mapStateOnServer)((function NullComponent(){return null})));HelmetExport.renderStatic=HelmetExport.rewind;const __WEBPACK_DEFAULT_EXPORT__=HelmetExport}}]);