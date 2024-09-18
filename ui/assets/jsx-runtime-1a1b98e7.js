var u=Object.defineProperty;var f=(t,r)=>u(t,"name",{value:r,configurable:!0});import{r as m}from"./index-29d3bc65.js";var i={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=m,y=Symbol.for("react.element"),a=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,c=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(t,r,p){var e,o={},s=null,_=null;p!==void 0&&(s=""+p),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(_=r.ref);for(e in r)v.call(r,e)&&!d.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:y,type:t,key:s,ref:_,props:o,_owner:c.current}}f(l,"q");n.Fragment=a;n.jsx=l;n.jsxs=l;i.exports=n;var R=i.exports;export{R as j};
