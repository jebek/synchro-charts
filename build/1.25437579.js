(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1032:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return g})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return s})),r.d(t,"e",(function(){return d})),r.d(t,"f",(function(){return l}));var n=r(65),o=r(142),a=r(1030),i=r(1034),u=r(1035),s=function(e){var t=u.a.get(e);return null==t&&console.error("provided an invalid color string, '"+e+"'"),null==t?[0,0,0]:t.value},l=function(e,t){var r=s(e.color||"black"),n=r[0],a=r[1],i=r[2];return Object(o.a)(e,t).map((function(e){return[e.x,e.y,n,a,i]}))},c=function(e){var t=e.scene,r=e.container,n=e.viewport,o=e.toClipSpace,u=e.onUpdate,s=new a.d(o(n.start.getTime()),o(n.end.getTime()),n.yMax,n.yMin,.1,1e3);return s.position.z=500,{toClipSpace:o,scene:t,container:r,id:Object(i.a)(),camera:s,dispose:function(){return function(e){e.children.forEach((function(e){try{var t=e;t.geometry.dispose(),(Array.isArray(t.material)?t.material:[t.material]).forEach((function(e){e.dispose()}))}catch(t){throw new Error("\n        scene currently does not support objects of type "+e.constructor.name+"\n        and does not know how to dispose of it.\n      ")}}))}(t)},viewportGroup:n.group,updateViewPort:function(e){var t=e.start,r=e.end,n=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["start","end"]);s.left=o(t.getTime()),s.right=o(r.getTime()),s.updateProjectionMatrix(),u&&u(Object.assign({start:t,end:r},n))}}},d=function(e){return e.map((function(e){return Object(o.a)(e,e.resolution).length})).reduce((function(e,t){return e+t}),0)},p=function(e){return e<10*n.c?1:e<n.a?n.d/10:e<7*n.a?n.d:e<n.e?n.c:e<30*n.e?30*n.c:n.a},h=function(e){var t=e.end.getTime()-e.start.getTime(),r=e.start.getTime()-.25*t,n=p(t);return function(e){return Math.floor((e-r)/n)}},f=function(e,t){return Math.abs(t(e.getTime()))>=Math.pow(10,7)},g=function(e,t){var r=f(e.start,t)||f(e.end,t),n=e.end.getTime()-e.start.getTime(),o=t(e.end.getTime())-t(e.start.getTime());return r||n>o&&o<3e3}},1034:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));for(var n=r(1031),o=Object(n.b)((function(e){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var r=new Uint8Array(16);e.exports=function(){return t(r),r}}else{var n=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),n[t]=e>>>((3&t)<<3)&255;return n}}})),a=[],i=0;i<256;++i)a[i]=(i+256).toString(16).substr(1);var u=function(e,t){var r=t||0,n=a;return[n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]]].join("")},s=function(e,t,r){var n=t&&r||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var i=0;i<16;++i)t[n+i]=a[i];return t||u(a)}},1035:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(1031),o={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},a=function(e){return!(!e||"string"==typeof e)&&(e instanceof Array||Array.isArray(e)||e.length>=0&&(e.splice instanceof Function||Object.getOwnPropertyDescriptor(e,e.length-1)&&"String"!==e.constructor.name))},i=Object(n.b)((function(e){var t=Array.prototype.concat,r=Array.prototype.slice,n=e.exports=function(e){for(var n=[],o=0,i=e.length;o<i;o++){var u=e[o];a(u)?n=t.call(n,r.call(u)):n.push(u)}return n};n.wrap=function(e){return function(){return e(n(arguments))}}})),u=Object(n.b)((function(e){var t={};for(var r in o)o.hasOwnProperty(r)&&(t[o[r]]=r);var n=e.exports={to:{},get:{}};function a(e,t,r){return Math.min(Math.max(t,e),r)}function u(e){var t=e.toString(16).toUpperCase();return t.length<2?"0"+t:t}n.get=function(e){var t,r;switch(e.substring(0,3).toLowerCase()){case"hsl":t=n.get.hsl(e),r="hsl";break;case"hwb":t=n.get.hwb(e),r="hwb";break;default:t=n.get.rgb(e),r="rgb"}return t?{model:r,value:t}:null},n.get.rgb=function(e){if(!e)return null;var t,r,n,i=[0,0,0,1];if(t=e.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(n=t[2],t=t[1],r=0;r<3;r++){var u=2*r;i[r]=parseInt(t.slice(u,u+2),16)}n&&(i[3]=parseInt(n,16)/255)}else if(t=e.match(/^#([a-f0-9]{3,4})$/i)){for(n=(t=t[1])[3],r=0;r<3;r++)i[r]=parseInt(t[r]+t[r],16);n&&(i[3]=parseInt(n+n,16)/255)}else if(t=e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)){for(r=0;r<3;r++)i[r]=parseInt(t[r+1],0);t[4]&&(i[3]=parseFloat(t[4]))}else{if(!(t=e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)))return(t=e.match(/(\D+)/))?"transparent"===t[1]?[0,0,0,0]:(i=o[t[1]])?(i[3]=1,i):null:null;for(r=0;r<3;r++)i[r]=Math.round(2.55*parseFloat(t[r+1]));t[4]&&(i[3]=parseFloat(t[4]))}for(r=0;r<3;r++)i[r]=a(i[r],0,255);return i[3]=a(i[3],0,1),i},n.get.hsl=function(e){if(!e)return null;var t=e.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?[\d\.]+)\s*)?\)$/);if(t){var r=parseFloat(t[4]);return[(parseFloat(t[1])+360)%360,a(parseFloat(t[2]),0,100),a(parseFloat(t[3]),0,100),a(isNaN(r)?1:r,0,1)]}return null},n.get.hwb=function(e){if(!e)return null;var t=e.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(t){var r=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,a(parseFloat(t[2]),0,100),a(parseFloat(t[3]),0,100),a(isNaN(r)?1:r,0,1)]}return null},n.to.hex=function(){var e=i(arguments);return"#"+u(e[0])+u(e[1])+u(e[2])+(e[3]<1?u(Math.round(255*e[3])):"")},n.to.rgb=function(){var e=i(arguments);return e.length<4||1===e[3]?"rgb("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+")":"rgba("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+", "+e[3]+")"},n.to.rgb.percent=function(){var e=i(arguments),t=Math.round(e[0]/255*100),r=Math.round(e[1]/255*100),n=Math.round(e[2]/255*100);return e.length<4||1===e[3]?"rgb("+t+"%, "+r+"%, "+n+"%)":"rgba("+t+"%, "+r+"%, "+n+"%, "+e[3]+")"},n.to.hsl=function(){var e=i(arguments);return e.length<4||1===e[3]?"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)":"hsla("+e[0]+", "+e[1]+"%, "+e[2]+"%, "+e[3]+")"},n.to.hwb=function(){var e=i(arguments),t="";return e.length>=4&&1!==e[3]&&(t=", "+e[3]),"hwb("+e[0]+", "+e[1]+"%, "+e[2]+"%"+t+")"},n.to.keyword=function(e){return t[e.slice(0,3)]}}))},1039:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return l}));var n=r(55),o=r(1030),a=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,u=a.length;i<u;i++,o++)n[o]=a[i];return n},i=function(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,left:t.left+window.scrollX,right:t.right+window.scrollX,bottom:t.bottom+window.scrollY,top:t.top+window.scrollY,x:t.x+window.scrollX,y:t.y+window.scrollY,density:window.devicePixelRatio}},u=function(){function e(e){this.rectMap={},this.canvas=e,this.updateCanvas()}return e.prototype.updateCanvas=function(){this.canvasRect=this.canvas.getBoundingClientRect()},e.prototype.updateChartScene=function(e,t){this.rectMap[e]=t},e.prototype.clipRect=function(e){return this.rectMap[e]?function(e,t){var r=window.devicePixelRatio,n=e.left,o=e.bottom,a=e.width,i=e.height,u=t.height-(o-window.scrollY);return{left:(n-window.scrollX)*r,bottom:u*r,width:a*r,height:i*r}}(this.rectMap[e],this.canvasRect):void 0},e.prototype.removeChartScene=function(e){delete this.rectMap[e]},e}(),s=Object(n.f)((function(e){return null!=e.camera}));var l=function(e){var t,r,n,a=function(){r&&(r.setScissorTest(!1),r.setClearColor(16777215,0),r.clear(),r.setScissorTest(!0),e.managers().filter(s).forEach(d))},i=function(){if(r&&n){var e="translate("+window.scrollX+"px, "+window.scrollY+"px)";r.domElement.style.transform=e,t.updateCanvas(),a()}},l=function(){c(),r&&n&&(function(e){var t=e.domElement,r=Math.floor(t.clientWidth*window.devicePixelRatio)||0,n=Math.floor(t.clientHeight*window.devicePixelRatio)||0,o=t.width!==r||t.height!==n;o&&e.setSize(r,n,!1)}(r),t.updateCanvas(),a())},c=function(){if(null==t)throw new Error("webgl context must be initialized before it can be utilized. Please refer to https://synchrocharts.com/#/Setup to learn more about how to setup Synchro Charts.")},d=function(e){c();var o=t.clipRect(e.id);r&&n&&o&&function(e,t,r){var n=t.scene,o=t.camera,a=r.left,i=r.bottom,u=r.width,s=r.height;e.setScissor(a,i,u,s),e.setViewport(a,i,u,s),e.render(n,o)}(r,e,o)};return{initRendering:function(e,a){void 0===a&&(a=function(){}),t=new u(e),n=e,a((r=new o.h({canvas:n,alpha:!0,antialias:!0,preserveDrawingBuffer:!0})).getContext()),r.setScissorTest(!0),r.setClearColor(0,0),i(),l(),window.addEventListener("scroll",i),window.addEventListener("resize",l)},dispose:function(){r&&r.dispose(),e.dispose(),window.removeEventListener("scroll",i),window.removeEventListener("resize",l)},render:d,addChartScene:function(t){var r=t.manager,n=t.chartSize,o=t.duration,a=t.shouldSync,i=void 0===a||a;return e.add({manager:r,chartSize:n,duration:o,shouldSync:i})},removeChartScene:function(r){c(),e.remove(r),t.removeChartScene(r),a()},setChartRect:function(e,r){c(),t.updateChartScene(e,r),a()},updateViewPorts:e.syncViewPortGroup,startTick:e.startTick,stopTick:e.stopTick,onResolutionChange:function(){l()}}}(new function(){var e=this;this.viewportManagers=[],this.viewportMap={},this.viewportLiveId={},this.managers=function(){return a(e.viewportManagers)},this.dispose=function(){e.viewportManagers.forEach((function(t){var r=t.id;return e.remove(r)}))},this.startTick=function(t){var r=t.manager,n=t.duration,o=t.chartSize;if(null!=o){var a=new Date((new Date).getTime()-n),i=new Date,u=null!=r.viewportGroup?r.viewportGroup:r.id,s=r.id,l=1/o.width*n;s in e.viewportLiveId||(e.viewportLiveId[s]={viewportGroup:r.viewportGroup},e.viewportLiveId[s].intervalId=setInterval((function(){var t=new Date(Date.now()-n),o=new Date;e.viewportMap[u]={start:t,end:o};var a=Boolean(n);r.updateViewPort({start:t,end:o,duration:n,shouldBlockDateRangeChangedEvent:a})}),l),e.viewportMap[u]={start:a,end:i},e.syncViewPortGroup({start:a,end:i,manager:r,duration:n}))}},this.stopTick=function(t){var r=t.manager,n=t.viewportGroup;if(null!=r||null!=n){var o=function(t){null!=e.viewportLiveId[t]&&(clearInterval(e.viewportLiveId[t].intervalId),delete e.viewportLiveId[t])};null!=n?Object.entries(e.viewportLiveId).filter((function(e){return e[1].viewportGroup===n})).forEach((function(e){var t=e[0];return o(t)})):null!=r&&o(r.id)}},this.add=function(t){var r=t.manager,n=t.chartSize,o=t.duration,i=t.shouldSync,u=void 0===i||i;e.viewportManagers=a(e.viewportManagers,[r]),r.viewportGroup&&e.viewportMap[r.viewportGroup]&&u&&r.updateViewPort(e.viewportMap[r.viewportGroup]),null!=o&&e.startTick({manager:r,duration:o,chartSize:n})},this.remove=function(t){var r=e.viewportManagers.find((function(e){return e.id===t}));r&&r.dispose&&(e.stopTick({manager:r}),r.dispose()),e.viewportManagers=e.viewportManagers.filter((function(e){return e.id!==t}))},this.syncViewPortGroup=function(t){var r=t.start,n=t.end,o=t.manager,a=t.duration,i=o.viewportGroup?o.viewportGroup:o.id;e.viewportMap[i]={start:r,end:n},null==a&&e.stopTick({manager:o,viewportGroup:o.viewportGroup});var u=function(e){e.updateViewPort({start:r,end:n,duration:a})};o.viewportGroup?e.viewportManagers.filter((function(e){var t=e.viewportGroup;return o.viewportGroup===t})).forEach(u):u(o)}})},1041:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={width:100,height:100}}}]);