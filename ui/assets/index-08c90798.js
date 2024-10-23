var p=Object.defineProperty;var o=(e,i)=>p(e,"name",{value:i,configurable:!0});import{g as u}from"./_commonjsHelpers-f86d8be3.js";var a={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var i={}.hasOwnProperty;function s(){for(var t="",r=0;r<arguments.length;r++){var n=arguments[r];n&&(t=f(t,c(n)))}return t}o(s,"classNames");function c(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return s.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var r="";for(var n in t)i.call(t,n)&&t[n]&&(r=f(r,n));return r}o(c,"parseValue");function f(t,r){return r?t?t+" "+r:t+r:t}o(f,"appendClass"),e.exports?(s.default=s,e.exports=s):window.classNames=s})()})(a);var l=a.exports;const v=u(l);export{v as c};
