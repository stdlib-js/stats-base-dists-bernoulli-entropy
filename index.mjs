// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";function e(e){var n;return s(e)||e<0||e>1?NaN:0===e||1===e?0:-(n=1-e)*t(n)-e*t(e)}export{e as default};
//# sourceMappingURL=index.mjs.map
