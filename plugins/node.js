/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import globals from 'globals';
import nodePlugin from 'eslint-plugin-n';

export default {
  plugins: {
    n: nodePlugin
  },
  languageOptions: {
    globals: globals.node
  },
  rules: {
    // enforce `return` after a callback
    'n/callback-return': 0,
    // enforce either `module.exports` or `exports`
    'n/exports-style': 0,
    // enforce the style of file extensions in `import` declarations
    'n/file-extension-in-import': 0,
    // enforce `require()` on top-level module scope
    'n/global-require': 1,
    // require error handling in callbacks
    'n/handle-callback-err': 0,
    // suggest correct usage of hashbang
    'n/hashbang': 0,
    // ensure Node.js-style error-first callback pattern is followed
    'n/no-callback-literal': 1,
    // disallow deprecated APIs
    'n/no-deprecated-api': 2,
    // disallow the assignment to `exports`
    'n/no-exports-assign': 2,
    // disallow `import` declarations which import extraneous modules
    'n/no-extraneous-import': 0,
    // disallow `require()` expressions which import extraneous modules
    'n/no-extraneous-require': 0,
    // disallow `import` declarations which import non-existence modules
    'n/no-missing-import': 0,
    // disallow `require()` expressions which import non-existence modules
    'n/no-missing-require': 2,
    // disallow mixing regular variable and `require` declarations
    'n/no-mixed-requires': [0, false],
    // disallow `new` operators with calls to `require`
    'n/no-new-require': 0,
    // disallow string concatenation with `__dirname` and `__filename`
    'n/no-path-concat': 2,
    // disallow use of `process.env`
    'n/no-process-env': 0,
    // disallow `process.exit()`
    'n/no-process-exit': 2,
    // disallow specified modules when loaded by `import` declarations
    'n/no-restricted-import': 0,
    // disallow specified modules when loaded by `require`
    'n/no-restricted-require': 0,
    // disallow use of synchronous methods
    'n/no-sync': 0,
    // disallow `bin` files that npm ignores
    'n/no-unpublished-bin': 2,
    // disallow `import` declarations which import private modules
    'n/no-unpublished-import': 0,
    // disallow `require()` expressions which import private modules
    'n/no-unpublished-require': 0,
    // disallow unsupported ECMAScript built-ins on the specified version
    'n/no-unsupported-features/es-builtins': 2,
    // disallow unsupported ECMAScript syntax on the specified version
    'n/no-unsupported-features/es-syntax': 0,
    // disallow unsupported Node.js built-in APIs on the specified version
    'n/no-unsupported-features/node-builtins': 2,
    // enforce either `Buffer` or `require("buffer").Buffer`
    'n/prefer-global/buffer': [2, 'always'],
    // enforce either `console` or `require("console")`
    'n/prefer-global/console': [2, 'always'],
    // enforce either `process` or `require("process")`
    'n/prefer-global/process': [2, 'always'],
    // enforce either `TextDecoder` or `require("util").TextDecoder`
    'n/prefer-global/text-decoder': [2, 'always'],
    // enforce either `TextEncoder` or `require("util").TextEncoder`
    'n/prefer-global/text-encoder': [2, 'always'],
    // enforce either `URL` or `require("url").URL`
    'n/prefer-global/url': [2, 'always'],
    // enforce either `URLSearchParams` or `require("url").URLSearchParams`
    'n/prefer-global/url-search-params': [2, 'always'],
    // enforce using the `node:` protocol when importing Node.js builtin modules
    'n/prefer-node-protocol': [2, { version: '>=16.0.0' }],
    // enforce `require("dns").promises`
    'n/prefer-promises/dns': 1,
    // enforce `require("fs").promises`
    'n/prefer-promises/fs': 1,
    // make process.exit() expressions the same code path as throw
    'n/process-exit-as-throw': 2
  }
};
