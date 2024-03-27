/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  plugins: ['n'],
  rules: {
    // enforce `return` after a callback
    'n/callback-return': 0,
    // enforce either `module.exports` or `exports`
    'n/exports-style': 0,
    // enforce the style of file extensions in `import` declarations
    'n/file-extension-in-import': 0,
    // enforce `require()` on top-level module scope
    'n/global-require': 1,
    // disallow mixing regular variable and `require` declarations
    'n/no-mixed-requires': [0, false],
    // disallow use of `process.env`
    'n/no-process-env': 0,
    // disallow specified modules when loaded by `import` declarations
    'n/no-restricted-import': 0,
    // disallow specified modules when loaded by `require`
    'n/no-restricted-require': 0,
    // disallow use of synchronous methods
    'n/no-sync': 0,
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
    // enforce either `URLSearchParams` or `require("url").URLSearchParams`
    'n/prefer-global/url-search-params': [2, 'always'],
    // enforce either `URL` or `require("url").URL`
    'n/prefer-global/url': [2, 'always'],
    // enforce `require("dns").promises`
    'n/prefer-promises/dns': 1,
    // enforce `require("fs").promises`
    'n/prefer-promises/fs': 1
  }
};
