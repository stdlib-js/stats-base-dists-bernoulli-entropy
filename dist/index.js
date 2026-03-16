"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=u(function(v,i){
var a=require('@stdlib/math-base-assert-is-nan/dist'),t=require('@stdlib/math-base-special-ln/dist');function s(r){var e;return a(r)||r<0||r>1?NaN:r===0||r===1?0:(e=1-r,-e*t(e)-r*t(r))}i.exports=s
});var o=n();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
