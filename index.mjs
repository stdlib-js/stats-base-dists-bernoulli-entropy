// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.1.1-esm/index.mjs";function e(e){var n;return s(e)||e<0||e>1?NaN:0===e||1===e?0:-(n=1-e)*t(n)-e*t(e)}export{e as default};
//# sourceMappingURL=index.mjs.map
