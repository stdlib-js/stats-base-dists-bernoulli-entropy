// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";var e=s,a=t;var r=function(s){var t;return e(s)||s<0||s>1?NaN:0===s||1===s?0:-(t=1-s)*a(t)-s*a(s)};export{r as default};
//# sourceMappingURL=index.mjs.map
