var Ce=Object.defineProperty;var c=(e,t)=>Ce(e,"name",{value:t,configurable:!0});import{n as C,f as fe,T as $e,F as Ne,I as Oe,g as Ie}from"./chunk-HLWAVYOI-20269925.js";import{R as d,r as v}from"./index-29d3bc65.js";import{g as he}from"./_commonjsHelpers-f86d8be3.js";import{_ as Se,i as Q,a as Re}from"./index-2a059c61.js";import"./iframe-8b229a33.js";import"../sb-preview/runtime.js";import"./react-18-d0e6e771.js";import"./index-1aad7d92.js";import"./inheritsLoose-289c47e1.js";import"./index-32ac9e7b.js";function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}c(N,"u");function Z(e,t){if(e==null)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}c(Z,"c");function V(e){var t=v.useRef(e),n=v.useRef(function(r){t.current&&t.current(r)});return t.current=e,n.current}c(V,"i");var R=c(function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e<t?t:e},"s"),F=c(function(e){return"touches"in e},"f"),A=c(function(e){return e&&e.ownerDocument.defaultView||self},"v"),re=c(function(e,t,n){var r=e.getBoundingClientRect(),o=F(t)?function(a,s){for(var l=0;l<a.length;l++)if(a[l].identifier===s)return a[l];return a[0]}(t.touches,n):t;return{left:R((o.pageX-(r.left+A(e).pageXOffset))/r.width),top:R((o.pageY-(r.top+A(e).pageYOffset))/r.height)}},"d"),oe=c(function(e){!F(e)&&e.preventDefault()},"h"),ee=d.memo(function(e){var t=e.onMove,n=e.onKey,r=Z(e,["onMove","onKey"]),o=v.useRef(null),a=V(t),s=V(n),l=v.useRef(null),i=v.useRef(!1),u=v.useMemo(function(){var _=c(function(y){oe(y),(F(y)?y.touches.length>0:y.buttons>0)&&o.current?a(re(o.current,y,l.current)):E(!1)},"e"),O=c(function(){return E(!1)},"r");function E(y){var b=i.current,w=A(o.current),$=y?w.addEventListener:w.removeEventListener;$(b?"touchmove":"mousemove",_),$(b?"touchend":"mouseup",O)}return c(E,"t"),[function(y){var b=y.nativeEvent,w=o.current;if(w&&(oe(b),!function(D,T){return T&&!F(D)}(b,i.current)&&w)){if(F(b)){i.current=!0;var $=b.changedTouches||[];$.length&&(l.current=$[0].identifier)}w.focus(),a(re(w,b,l.current)),E(!0)}},function(y){var b=y.which||y.keyCode;b<37||b>40||(y.preventDefault(),s({left:b===39?.05:b===37?-.05:0,top:b===40?.05:b===38?-.05:0}))},E]},[s,a]),g=u[0],h=u[1],m=u[2];return v.useEffect(function(){return m},[m]),d.createElement("div",N({},r,{onTouchStart:g,onMouseDown:g,className:"react-colorful__interactive",ref:o,onKeyDown:h,tabIndex:0,role:"slider"}))}),H=c(function(e){return e.filter(Boolean).join(" ")},"g"),te=c(function(e){var t=e.color,n=e.left,r=e.top,o=r===void 0?.5:r,a=H(["react-colorful__pointer",e.className]);return d.createElement("div",{className:a,style:{top:100*o+"%",left:100*n+"%"}},d.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},"p"),x=c(function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n},"b"),Te={grad:.9,turn:360,rad:360/(2*Math.PI)},je=c(function(e){return me(G(e))},"x"),G=c(function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?x(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?x(parseInt(e.substring(6,8),16)/255,2):1}},"C"),Fe=c(function(e,t){return t===void 0&&(t="deg"),Number(e)*(Te[t]||1)},"E"),ze=c(function(e){var t=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?He({h:Fe(t[1],t[2]),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)}):{h:0,s:0,v:0,a:1}},"H"),He=c(function(e){var t=e.s,n=e.l;return{h:e.h,s:(t*=(n<50?n:100-n)/100)>0?2*t/(n+t)*100:0,v:n+t,a:e.a}},"N"),Pe=c(function(e){return qe(ge(e))},"w"),de=c(function(e){var t=e.s,n=e.v,r=e.a,o=(200-t)*n/100;return{h:x(e.h),s:x(o>0&&o<200?t*n/100/(o<=100?o:200-o)*100:0),l:x(o/2),a:x(r,2)}},"y"),U=c(function(e){var t=de(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},"q"),B=c(function(e){var t=de(e);return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},"k"),ge=c(function(e){var t=e.h,n=e.s,r=e.v,o=e.a;t=t/360*6,n/=100,r/=100;var a=Math.floor(t),s=r*(1-n),l=r*(1-(t-a)*n),i=r*(1-(1-t+a)*n),u=a%6;return{r:x(255*[r,l,s,s,i,r][u]),g:x(255*[i,r,r,l,s,s][u]),b:x(255*[s,s,i,r,r,l][u]),a:x(o,2)}},"I"),Le=c(function(e){var t=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?me({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):{h:0,s:0,v:0,a:1}},"z"),P=c(function(e){var t=e.toString(16);return t.length<2?"0"+t:t},"D"),qe=c(function(e){var t=e.r,n=e.g,r=e.b,o=e.a,a=o<1?P(x(255*o)):"";return"#"+P(t)+P(n)+P(r)+a},"K"),me=c(function(e){var t=e.r,n=e.g,r=e.b,o=e.a,a=Math.max(t,n,r),s=a-Math.min(t,n,r),l=s?a===t?(n-r)/s:a===n?2+(r-t)/s:4+(t-n)/s:0;return{h:x(60*(l<0?l+6:l)),s:x(a?s/a*100:0),v:x(a/255*100),a:o}},"L"),be=d.memo(function(e){var t=e.hue,n=e.onChange,r=H(["react-colorful__hue",e.className]);return d.createElement("div",{className:r},d.createElement(ee,{onMove:function(o){n({h:360*o.left})},onKey:function(o){n({h:R(t+360*o.left,0,360)})},"aria-label":"Hue","aria-valuenow":x(t),"aria-valuemax":"360","aria-valuemin":"0"},d.createElement(te,{className:"react-colorful__hue-pointer",left:t/360,color:U({h:t,s:100,v:100,a:1})})))}),ve=d.memo(function(e){var t=e.hsva,n=e.onChange,r={backgroundColor:U({h:t.h,s:100,v:100,a:1})};return d.createElement("div",{className:"react-colorful__saturation",style:r},d.createElement(ee,{onMove:function(o){n({s:100*o.left,v:100-100*o.top})},onKey:function(o){n({s:R(t.s+100*o.left,0,100),v:R(t.v-100*o.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+x(t.s)+"%, Brightness "+x(t.v)+"%"},d.createElement(te,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:U(t)})))}),pe=c(function(e,t){if(e===t)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0},"F"),ye=c(function(e,t){return e.replace(/\s/g,"")===t.replace(/\s/g,"")},"P"),Be=c(function(e,t){return e.toLowerCase()===t.toLowerCase()||pe(G(e),G(t))},"X");function xe(e,t,n){var r=V(n),o=v.useState(function(){return e.toHsva(t)}),a=o[0],s=o[1],l=v.useRef({color:t,hsva:a});v.useEffect(function(){if(!e.equal(t,l.current.color)){var u=e.toHsva(t);l.current={hsva:u,color:t},s(u)}},[t,e]),v.useEffect(function(){var u;pe(a,l.current.hsva)||e.equal(u=e.fromHsva(a),l.current.color)||(l.current={hsva:a,color:u},r(u))},[a,e,r]);var i=v.useCallback(function(u){s(function(g){return Object.assign({},g,u)})},[]);return[a,i]}c(xe,"Y");var We=typeof window<"u"?v.useLayoutEffect:v.useEffect,Xe=c(function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},"$"),ae=new Map,we=c(function(e){We(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!ae.has(t)){var n=t.createElement("style");n.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,ae.set(t,n);var r=Xe();r&&n.setAttribute("nonce",r),t.head.appendChild(n)}},[])},"Q"),De=c(function(e){var t=e.className,n=e.colorModel,r=e.color,o=r===void 0?n.defaultColor:r,a=e.onChange,s=Z(e,["className","colorModel","color","onChange"]),l=v.useRef(null);we(l);var i=xe(n,o,a),u=i[0],g=i[1],h=H(["react-colorful",t]);return d.createElement("div",N({},s,{ref:l,className:h}),d.createElement(ve,{hsva:u,onChange:g}),d.createElement(be,{hue:u.h,onChange:g,className:"react-colorful__last-control"}))},"U"),Ke={defaultColor:"000",toHsva:je,fromHsva:function(e){return Pe({h:e.h,s:e.s,v:e.v,a:1})},equal:Be},Ve=c(function(e){return d.createElement(De,N({},e,{colorModel:Ke}))},"Z"),Ae=c(function(e){var t=e.className,n=e.hsva,r=e.onChange,o={backgroundImage:"linear-gradient(90deg, "+B(Object.assign({},n,{a:0}))+", "+B(Object.assign({},n,{a:1}))+")"},a=H(["react-colorful__alpha",t]),s=x(100*n.a);return d.createElement("div",{className:a},d.createElement("div",{className:"react-colorful__alpha-gradient",style:o}),d.createElement(ee,{onMove:function(l){r({a:l.left})},onKey:function(l){r({a:R(n.a+l.left)})},"aria-label":"Alpha","aria-valuetext":s+"%","aria-valuenow":s,"aria-valuemin":"0","aria-valuemax":"100"},d.createElement(te,{className:"react-colorful__alpha-pointer",left:n.a,color:B(n)})))},"ee"),ke=c(function(e){var t=e.className,n=e.colorModel,r=e.color,o=r===void 0?n.defaultColor:r,a=e.onChange,s=Z(e,["className","colorModel","color","onChange"]),l=v.useRef(null);we(l);var i=xe(n,o,a),u=i[0],g=i[1],h=H(["react-colorful",t]);return d.createElement("div",N({},s,{ref:l,className:h}),d.createElement(ve,{hsva:u,onChange:g}),d.createElement(be,{hue:u.h,onChange:g}),d.createElement(Ae,{hsva:u,onChange:g,className:"react-colorful__last-control"}))},"re"),Ge={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:ze,fromHsva:B,equal:ye},Ue=c(function(e){return d.createElement(ke,N({},e,{colorModel:Ge}))},"ue"),Ye={defaultColor:"rgba(0, 0, 0, 1)",toHsva:Le,fromHsva:function(e){var t=ge(e);return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},equal:ye},Je=c(function(e){return d.createElement(ke,N({},e,{colorModel:Ye}))},"He"),Qe={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};const z=Qe,_e={};for(const e of Object.keys(z))_e[z[e]]=e;const f={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var Ee=f;for(const e of Object.keys(f)){if(!("channels"in f[e]))throw new Error("missing channels property: "+e);if(!("labels"in f[e]))throw new Error("missing channel labels property: "+e);if(f[e].labels.length!==f[e].channels)throw new Error("channel and label counts mismatch: "+e);const{channels:t,labels:n}=f[e];delete f[e].channels,delete f[e].labels,Object.defineProperty(f[e],"channels",{value:t}),Object.defineProperty(f[e],"labels",{value:n})}f.rgb.hsl=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(t,n,r),a=Math.max(t,n,r),s=a-o;let l,i;a===o?l=0:t===a?l=(n-r)/s:n===a?l=2+(r-t)/s:r===a&&(l=4+(t-n)/s),l=Math.min(l*60,360),l<0&&(l+=360);const u=(o+a)/2;return a===o?i=0:u<=.5?i=s/(a+o):i=s/(2-a-o),[l,i*100,u*100]};f.rgb.hsv=function(e){let t,n,r,o,a;const s=e[0]/255,l=e[1]/255,i=e[2]/255,u=Math.max(s,l,i),g=u-Math.min(s,l,i),h=c(function(m){return(u-m)/6/g+1/2},"diffc");return g===0?(o=0,a=0):(a=g/u,t=h(s),n=h(l),r=h(i),s===u?o=r-n:l===u?o=1/3+t-r:i===u&&(o=2/3+n-t),o<0?o+=1:o>1&&(o-=1)),[o*360,a*100,u*100]};f.rgb.hwb=function(e){const t=e[0],n=e[1];let r=e[2];const o=f.rgb.hsl(e)[0],a=1/255*Math.min(t,Math.min(n,r));return r=1-1/255*Math.max(t,Math.max(n,r)),[o,a*100,r*100]};f.rgb.cmyk=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(1-t,1-n,1-r),a=(1-t-o)/(1-o)||0,s=(1-n-o)/(1-o)||0,l=(1-r-o)/(1-o)||0;return[a*100,s*100,l*100,o*100]};function Ze(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]-t[2])**2}c(Ze,"comparativeDistance");f.rgb.keyword=function(e){const t=_e[e];if(t)return t;let n=1/0,r;for(const o of Object.keys(z)){const a=z[o],s=Ze(e,a);s<n&&(n=s,r=o)}return r};f.keyword.rgb=function(e){return z[e]};f.rgb.xyz=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;const o=t*.4124+n*.3576+r*.1805,a=t*.2126+n*.7152+r*.0722,s=t*.0193+n*.1192+r*.9505;return[o*100,a*100,s*100]};f.rgb.lab=function(e){const t=f.rgb.xyz(e);let n=t[0],r=t[1],o=t[2];n/=95.047,r/=100,o/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,o=o>.008856?o**(1/3):7.787*o+16/116;const a=116*r-16,s=500*(n-r),l=200*(r-o);return[a,s,l]};f.hsl.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;let o,a,s;if(n===0)return s=r*255,[s,s,s];r<.5?o=r*(1+n):o=r+n-r*n;const l=2*r-o,i=[0,0,0];for(let u=0;u<3;u++)a=t+1/3*-(u-1),a<0&&a++,a>1&&a--,6*a<1?s=l+(o-l)*6*a:2*a<1?s=o:3*a<2?s=l+(o-l)*(2/3-a)*6:s=l,i[u]=s*255;return i};f.hsl.hsv=function(e){const t=e[0];let n=e[1]/100,r=e[2]/100,o=n;const a=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,o*=a<=1?a:2-a;const s=(r+n)/2,l=r===0?2*o/(a+o):2*n/(r+n);return[t,l*100,s*100]};f.hsv.rgb=function(e){const t=e[0]/60,n=e[1]/100;let r=e[2]/100;const o=Math.floor(t)%6,a=t-Math.floor(t),s=255*r*(1-n),l=255*r*(1-n*a),i=255*r*(1-n*(1-a));switch(r*=255,o){case 0:return[r,i,s];case 1:return[l,r,s];case 2:return[s,r,i];case 3:return[s,l,r];case 4:return[i,s,r];case 5:return[r,s,l]}};f.hsv.hsl=function(e){const t=e[0],n=e[1]/100,r=e[2]/100,o=Math.max(r,.01);let a,s;s=(2-n)*r;const l=(2-n)*o;return a=n*o,a/=l<=1?l:2-l,a=a||0,s/=2,[t,a*100,s*100]};f.hwb.rgb=function(e){const t=e[0]/360;let n=e[1]/100,r=e[2]/100;const o=n+r;let a;o>1&&(n/=o,r/=o);const s=Math.floor(6*t),l=1-r;a=6*t-s,s&1&&(a=1-a);const i=n+a*(l-n);let u,g,h;switch(s){default:case 6:case 0:u=l,g=i,h=n;break;case 1:u=i,g=l,h=n;break;case 2:u=n,g=l,h=i;break;case 3:u=n,g=i,h=l;break;case 4:u=i,g=n,h=l;break;case 5:u=l,g=n,h=i;break}return[u*255,g*255,h*255]};f.cmyk.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100,o=e[3]/100,a=1-Math.min(1,t*(1-o)+o),s=1-Math.min(1,n*(1-o)+o),l=1-Math.min(1,r*(1-o)+o);return[a*255,s*255,l*255]};f.xyz.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100;let o,a,s;return o=t*3.2406+n*-1.5372+r*-.4986,a=t*-.9689+n*1.8758+r*.0415,s=t*.0557+n*-.204+r*1.057,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,a=a>.0031308?1.055*a**(1/2.4)-.055:a*12.92,s=s>.0031308?1.055*s**(1/2.4)-.055:s*12.92,o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),s=Math.min(Math.max(0,s),1),[o*255,a*255,s*255]};f.xyz.lab=function(e){let t=e[0],n=e[1],r=e[2];t/=95.047,n/=100,r/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;const o=116*n-16,a=500*(t-n),s=200*(n-r);return[o,a,s]};f.lab.xyz=function(e){const t=e[0],n=e[1],r=e[2];let o,a,s;a=(t+16)/116,o=n/500+a,s=a-r/200;const l=a**3,i=o**3,u=s**3;return a=l>.008856?l:(a-16/116)/7.787,o=i>.008856?i:(o-16/116)/7.787,s=u>.008856?u:(s-16/116)/7.787,o*=95.047,a*=100,s*=108.883,[o,a,s]};f.lab.lch=function(e){const t=e[0],n=e[1],r=e[2];let o;o=Math.atan2(r,n)*360/2/Math.PI,o<0&&(o+=360);const s=Math.sqrt(n*n+r*r);return[t,s,o]};f.lch.lab=function(e){const t=e[0],n=e[1],o=e[2]/360*2*Math.PI,a=n*Math.cos(o),s=n*Math.sin(o);return[t,a,s]};f.rgb.ansi16=function(e,t=null){const[n,r,o]=e;let a=t===null?f.rgb.hsv(e)[2]:t;if(a=Math.round(a/50),a===0)return 30;let s=30+(Math.round(o/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return a===2&&(s+=60),s};f.hsv.ansi16=function(e){return f.rgb.ansi16(f.hsv.rgb(e),e[2])};f.rgb.ansi256=function(e){const t=e[0],n=e[1],r=e[2];return t===n&&n===r?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)};f.ansi16.rgb=function(e){let t=e%10;if(t===0||t===7)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const n=(~~(e>50)+1)*.5,r=(t&1)*n*255,o=(t>>1&1)*n*255,a=(t>>2&1)*n*255;return[r,o,a]};f.ansi256.rgb=function(e){if(e>=232){const a=(e-232)*10+8;return[a,a,a]}e-=16;let t;const n=Math.floor(e/36)/5*255,r=Math.floor((t=e%36)/6)/5*255,o=t%6/5*255;return[n,r,o]};f.rgb.hex=function(e){const n=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return"000000".substring(n.length)+n};f.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let n=t[0];t[0].length===3&&(n=n.split("").map(l=>l+l).join(""));const r=parseInt(n,16),o=r>>16&255,a=r>>8&255,s=r&255;return[o,a,s]};f.rgb.hcg=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.max(Math.max(t,n),r),a=Math.min(Math.min(t,n),r),s=o-a;let l,i;return s<1?l=a/(1-s):l=0,s<=0?i=0:o===t?i=(n-r)/s%6:o===n?i=2+(r-t)/s:i=4+(t-n)/s,i/=6,i%=1,[i*360,s*100,l*100]};f.hsl.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=n<.5?2*t*n:2*t*(1-n);let o=0;return r<1&&(o=(n-.5*r)/(1-r)),[e[0],r*100,o*100]};f.hsv.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=t*n;let o=0;return r<1&&(o=(n-r)/(1-r)),[e[0],r*100,o*100]};f.hcg.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;if(n===0)return[r*255,r*255,r*255];const o=[0,0,0],a=t%1*6,s=a%1,l=1-s;let i=0;switch(Math.floor(a)){case 0:o[0]=1,o[1]=s,o[2]=0;break;case 1:o[0]=l,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=s;break;case 3:o[0]=0,o[1]=l,o[2]=1;break;case 4:o[0]=s,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=l}return i=(1-n)*r,[(n*o[0]+i)*255,(n*o[1]+i)*255,(n*o[2]+i)*255]};f.hcg.hsv=function(e){const t=e[1]/100,n=e[2]/100,r=t+n*(1-t);let o=0;return r>0&&(o=t/r),[e[0],o*100,r*100]};f.hcg.hsl=function(e){const t=e[1]/100,r=e[2]/100*(1-t)+.5*t;let o=0;return r>0&&r<.5?o=t/(2*r):r>=.5&&r<1&&(o=t/(2*(1-r))),[e[0],o*100,r*100]};f.hcg.hwb=function(e){const t=e[1]/100,n=e[2]/100,r=t+n*(1-t);return[e[0],(r-t)*100,(1-r)*100]};f.hwb.hcg=function(e){const t=e[1]/100,r=1-e[2]/100,o=r-t;let a=0;return o<1&&(a=(r-o)/(1-o)),[e[0],o*100,a*100]};f.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]};f.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]};f.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]};f.gray.hsl=function(e){return[0,0,e[0]]};f.gray.hsv=f.gray.hsl;f.gray.hwb=function(e){return[0,100,e[0]]};f.gray.cmyk=function(e){return[0,0,0,e[0]]};f.gray.lab=function(e){return[e[0],0,0]};f.gray.hex=function(e){const t=Math.round(e[0]/100*255)&255,r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r};f.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]};const W=Ee;function et(){const e={},t=Object.keys(W);for(let n=t.length,r=0;r<n;r++)e[t[r]]={distance:-1,parent:null};return e}c(et,"buildGraph");function tt(e){const t=et(),n=[e];for(t[e].distance=0;n.length;){const r=n.pop(),o=Object.keys(W[r]);for(let a=o.length,s=0;s<a;s++){const l=o[s],i=t[l];i.distance===-1&&(i.distance=t[r].distance+1,i.parent=r,n.unshift(l))}}return t}c(tt,"deriveBFS");function nt(e,t){return function(n){return t(e(n))}}c(nt,"link");function rt(e,t){const n=[t[e].parent,e];let r=W[t[e].parent][e],o=t[e].parent;for(;t[o].parent;)n.unshift(t[o].parent),r=nt(W[t[o].parent][o],r),o=t[o].parent;return r.conversion=n,r}c(rt,"wrapConversion");var ot=c(function(e){const t=tt(e),n={},r=Object.keys(t);for(let o=r.length,a=0;a<o;a++){const s=r[a];t[s].parent!==null&&(n[s]=rt(s,t))}return n},"route$1");const Y=Ee,at=ot,I={},st=Object.keys(Y);function lt(e){const t=c(function(...n){const r=n[0];return r==null?r:(r.length>1&&(n=r),e(n))},"wrappedFn");return"conversion"in e&&(t.conversion=e.conversion),t}c(lt,"wrapRaw");function it(e){const t=c(function(...n){const r=n[0];if(r==null)return r;r.length>1&&(n=r);const o=e(n);if(typeof o=="object")for(let a=o.length,s=0;s<a;s++)o[s]=Math.round(o[s]);return o},"wrappedFn");return"conversion"in e&&(t.conversion=e.conversion),t}c(it,"wrapRounded");st.forEach(e=>{I[e]={},Object.defineProperty(I[e],"channels",{value:Y[e].channels}),Object.defineProperty(I[e],"labels",{value:Y[e].labels});const t=at(e);Object.keys(t).forEach(r=>{const o=t[r];I[e][r]=it(o),I[e][r].raw=lt(o)})});var ct=I;const k=he(ct);var ut=Se,ft=c(function(){return ut.Date.now()},"now$1"),ht=ft,dt=/\s/;function gt(e){for(var t=e.length;t--&&dt.test(e.charAt(t)););return t}c(gt,"trimmedEndIndex$1");var mt=gt,bt=mt,vt=/^\s+/;function pt(e){return e&&e.slice(0,bt(e)+1).replace(vt,"")}c(pt,"baseTrim$1");var yt=pt,xt=yt,se=Q,wt=Re,le=0/0,kt=/^[-+]0x[0-9a-f]+$/i,_t=/^0b[01]+$/i,Et=/^0o[0-7]+$/i,Mt=parseInt;function Ct(e){if(typeof e=="number")return e;if(wt(e))return le;if(se(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=se(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=xt(e);var n=_t.test(e);return n||Et.test(e)?Mt(e.slice(2),n?2:8):kt.test(e)?le:+e}c(Ct,"toNumber$1");var $t=Ct,Nt=Q,K=ht,ie=$t,Ot="Expected a function",It=Math.max,St=Math.min;function Rt(e,t,n){var r,o,a,s,l,i,u=0,g=!1,h=!1,m=!0;if(typeof e!="function")throw new TypeError(Ot);t=ie(t)||0,Nt(n)&&(g=!!n.leading,h="maxWait"in n,a=h?It(ie(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m);function _(p){var M=r,j=o;return r=o=void 0,u=p,s=e.apply(j,M),s}c(_,"invokeFunc");function O(p){return u=p,l=setTimeout(b,t),g?_(p):s}c(O,"leadingEdge");function E(p){var M=p-i,j=p-u,ne=t-M;return h?St(ne,a-j):ne}c(E,"remainingWait");function y(p){var M=p-i,j=p-u;return i===void 0||M>=t||M<0||h&&j>=a}c(y,"shouldInvoke");function b(){var p=K();if(y(p))return w(p);l=setTimeout(b,E(p))}c(b,"timerExpired");function w(p){return l=void 0,m&&r?_(p):(r=o=void 0,s)}c(w,"trailingEdge");function $(){l!==void 0&&clearTimeout(l),u=0,r=i=o=l=void 0}c($,"cancel");function D(){return l===void 0?s:w(K())}c(D,"flush");function T(){var p=K(),M=y(p);if(r=arguments,o=this,i=p,M){if(l===void 0)return O(i);if(h)return clearTimeout(l),l=setTimeout(b,t),_(i)}return l===void 0&&(l=setTimeout(b,t)),s}return c(T,"debounced"),T.cancel=$,T.flush=D,T}c(Rt,"debounce$1");var Tt=Rt,jt=Tt,Ft=Q,zt="Expected a function";function Ht(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(zt);return Ft(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),jt(e,t,{leading:r,maxWait:t,trailing:o})}c(Ht,"throttle");var Pt=Ht;const Lt=he(Pt);var qt=C.div({position:"relative",maxWidth:250}),Bt=C(fe)({position:"absolute",zIndex:1,top:4,left:4}),Wt=C.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),Xt=C($e)(({theme:e})=>({fontFamily:e.typography.fonts.base})),Dt=C.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),Kt=C.div(({theme:e,active:t})=>({width:16,height:16,boxShadow:t?`${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`:`${e.appBorderColor} 0 0 0 1px inset`,borderRadius:e.appBorderRadius})),Vt=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,ce=c(({value:e,active:t,onClick:n,style:r,...o})=>{let a=`linear-gradient(${e}, ${e}), ${Vt}, linear-gradient(#fff, #fff)`;return d.createElement(Kt,{...o,active:t,onClick:n,style:{...r,backgroundImage:a}})},"Swatch"),At=C(Ne.Input)(({theme:e})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.typography.fonts.base})),Gt=C(Oe)(({theme:e})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.input.color})),Me=(e=>(e.RGB="rgb",e.HSL="hsl",e.HEX="hex",e))(Me||{}),L=Object.values(Me),Ut=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,Yt=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,Jt=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,J=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,Qt=/^\s*#?([0-9a-f]{3})\s*$/i,Zt={hex:Ve,rgb:Je,hsl:Ue},q={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},ue=c(e=>{let t=e==null?void 0:e.match(Ut);if(!t)return[0,0,0,1];let[,n,r,o,a=1]=t;return[n,r,o,a].map(Number)},"stringToArgs"),S=c(e=>{if(!e)return;let t=!0;if(Yt.test(e)){let[s,l,i,u]=ue(e),[g,h,m]=k.rgb.hsl([s,l,i])||[0,0,0];return{valid:t,value:e,keyword:k.rgb.keyword([s,l,i]),colorSpace:"rgb",rgb:e,hsl:`hsla(${g}, ${h}%, ${m}%, ${u})`,hex:`#${k.rgb.hex([s,l,i]).toLowerCase()}`}}if(Jt.test(e)){let[s,l,i,u]=ue(e),[g,h,m]=k.hsl.rgb([s,l,i])||[0,0,0];return{valid:t,value:e,keyword:k.hsl.keyword([s,l,i]),colorSpace:"hsl",rgb:`rgba(${g}, ${h}, ${m}, ${u})`,hsl:e,hex:`#${k.hsl.hex([s,l,i]).toLowerCase()}`}}let n=e.replace("#",""),r=k.keyword.rgb(n)||k.hex.rgb(n),o=k.rgb.hsl(r),a=e;if(/[^#a-f0-9]/i.test(e)?a=n:J.test(e)&&(a=`#${n}`),a.startsWith("#"))t=J.test(a);else try{k.keyword.hex(a)}catch{t=!1}return{valid:t,value:a,keyword:k.rgb.keyword(r),colorSpace:"hex",rgb:`rgba(${r[0]}, ${r[1]}, ${r[2]}, 1)`,hsl:`hsla(${o[0]}, ${o[1]}%, ${o[2]}%, 1)`,hex:a}},"parseValue"),en=c((e,t,n)=>{if(!e||!(t!=null&&t.valid))return q[n];if(n!=="hex")return(t==null?void 0:t[n])||q[n];if(!t.hex.startsWith("#"))try{return`#${k.keyword.hex(t.hex)}`}catch{return q.hex}let r=t.hex.match(Qt);if(!r)return J.test(t.hex)?t.hex:q.hex;let[o,a,s]=r[1].split("");return`#${o}${o}${a}${a}${s}${s}`},"getRealValue"),tn=c((e,t)=>{let[n,r]=v.useState(e||""),[o,a]=v.useState(()=>S(n)),[s,l]=v.useState((o==null?void 0:o.colorSpace)||"hex");v.useEffect(()=>{let h=e||"",m=S(h);r(h),a(m),l((m==null?void 0:m.colorSpace)||"hex")},[e]);let i=v.useMemo(()=>en(n,o,s).toLowerCase(),[n,o,s]),u=v.useCallback(h=>{let m=S(h),_=(m==null?void 0:m.value)||h||"";r(_),_===""&&(a(void 0),t(void 0)),m&&(a(m),l(m.colorSpace),t(m.value))},[t]),g=v.useCallback(()=>{let h=L.indexOf(s)+1;h>=L.length&&(h=0),l(L[h]);let m=(o==null?void 0:o[L[h]])||"";r(m),t(m)},[o,s,t]);return{value:n,realValue:i,updateValue:u,color:o,colorSpace:s,cycleColorSpace:g}},"useColorInput"),X=c(e=>e.replace(/\s*/,"").toLowerCase(),"id"),nn=c((e,t,n)=>{let[r,o]=v.useState(t!=null&&t.valid?[t]:[]);v.useEffect(()=>{t===void 0&&o([])},[t]);let a=v.useMemo(()=>(e||[]).map(l=>typeof l=="string"?S(l):l.title?{...S(l.color),keyword:l.title}:S(l.color)).concat(r).filter(Boolean).slice(-27),[e,r]),s=v.useCallback(l=>{l!=null&&l.valid&&(a.some(i=>X(i[n])===X(l[n]))||o(i=>i.concat(l)))},[n,a]);return{presets:a,addPreset:s}},"usePresets"),rn=c(({name:e,value:t,onChange:n,onFocus:r,onBlur:o,presetColors:a,startOpen:s=!1})=>{let l=v.useCallback(Lt(n,200),[n]),{value:i,realValue:u,updateValue:g,color:h,colorSpace:m,cycleColorSpace:_}=tn(t,l),{presets:O,addPreset:E}=nn(a,h,m),y=Zt[m];return d.createElement(qt,null,d.createElement(Bt,{startOpen:s,closeOnOutsideClick:!0,onVisibleChange:()=>E(h),tooltip:d.createElement(Wt,null,d.createElement(y,{color:u==="transparent"?"#000000":u,onChange:g,onFocus:r,onBlur:o}),O.length>0&&d.createElement(Dt,null,O.map((b,w)=>d.createElement(fe,{key:`${b.value}-${w}`,hasChrome:!1,tooltip:d.createElement(Xt,{note:b.keyword||b.value})},d.createElement(ce,{value:b[m],active:h&&X(b[m])===X(h[m]),onClick:()=>g(b.value)})))))},d.createElement(ce,{value:u,style:{margin:4}})),d.createElement(At,{id:Ie(e),value:i,onChange:b=>g(b.target.value),onFocus:b=>b.target.select(),placeholder:"Choose color..."}),i?d.createElement(Gt,{icon:"markup",onClick:_}):null)},"ColorControl"),bn=rn;export{rn as ColorControl,bn as default};