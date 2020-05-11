/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  plugins: ['node'],
  rules: {
    // enforce `return` after a callback
    'node/callback-return': 0,
    // enforce either `module.exports` or `exports`
    'node/exports-style': 0,
    // enforce the style of file extensions in `import` declarations
    'node/file-extension-in-import': 0,
    // enforce `require()` on top-level module scope
    'node/global-require': 1,
    // disallow mixing regular variable and `require` declarations
    'node/no-mixed-requires': [0, false],
    // disallow use of `process.env`
    'node/no-process-env': 0,
    // disallow specified modules when loaded by `import` declarations
    'node/no-restricted-import': 0,
    // disallow specified modules when loaded by `require`
    'node/no-restricted-require': 0,
    // disallow use of synchronous methods
    'node/no-sync': 0,
    // enforce either `Buffer` or `require("buffer").Buffer`
    'node/prefer-global/buffer': [2, 'always'],
    // enforce either `console` or `require("console")`
    'node/prefer-global/console': [2, 'always'],
    // enforce either `process` or `require("process")`
    'node/prefer-global/process': [2, 'always'],
    // enforce either `TextDecoder` or `require("util").TextDecoder`
    'node/prefer-global/text-decoder': [2, 'always'],
    // enforce either `TextEncoder` or `require("util").TextEncoder`
    'node/prefer-global/text-encoder': [2, 'always'],
    // enforce either `URLSearchParams` or `require("url").URLSearchParams`
    'node/prefer-global/url-search-params': [2, 'always'],
    // enforce either `URL` or `require("url").URL`
    'node/prefer-global/url': [2, 'always'],
    // enforce `require("dns").promises`
    'node/prefer-promises/dns': 1,
    // enforce `require("fs").promises`
    'node/prefer-promises/fs': 1
  }
};