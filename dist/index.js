"use strict";var a=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var n=a(function(c,i){
var s=require('@stdlib/math-base-assert-is-nan/dist'),t=require('@stdlib/math-base-special-ln/dist');function o(r){var e;return s(r)||r<0||r>1?NaN:r===0||r===1?0:(e=1-r,-e*t(e)-r*t(r))}i.exports=o
});var q=n();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
