// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,o=r.toString,n=r.__defineGetter__,i=r.__defineSetter__,l=r.__lookupGetter__,u=r.__lookupSetter__,a=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,a){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof a||null===a||"[object Array]"===o.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((f="value"in a)&&(l.call(t,e)||u.call(t,e)?(c=t.__proto__,t.__proto__=r,delete t[e],t[e]=a.value,t.__proto__=c):t[e]=a.value),p="get"in a,y="set"in a,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&n&&n.call(t,e,a.get),y&&i&&i.call(t,e,a.set),t};function c(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"string"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",d=y()?function(t){var e,r,o,n,i;if(null==t)return b.call(t);r=t[_],i=_,e=null!=(n=t)&&s.call(n,i);try{t[_]=void 0}catch(e){return b.call(t)}return o=b.call(t),e?t[_]=r:delete t[_],o}:function(t){return b.call(t)},m=String.prototype.valueOf,g=y();function v(t){return"object"==typeof t&&(t instanceof String||(g?function(t){try{return m.call(t),!0}catch(t){return!1}}(t):"[object String]"===d(t)))}function j(t){return f(t)||v(t)}c(j,"isPrimitive",f),c(j,"isObject",v);var S=/@/;return function(t){return f(t)&&S.test(t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isEmail=e();
//# sourceMappingURL=index.js.map