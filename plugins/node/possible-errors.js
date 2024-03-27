/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  plugins: ['n'],
  rules: {
    // require error handling in callbacks
    'n/handle-callback-err': 0,
    // ensure Node.js-style error-first callback pattern is followed
    'n/no-callback-literal': 1,
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
    // disallow `new` operators with calls to `require`
    'n/no-new-require': 0,
    // disallow string concatenation with `__dirname` and `__filename`
    'n/no-path-concat': 2,
    // disallow `process.exit()`
    'n/no-process-exit': 2,
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
    // make process.exit() expressions the same code path as throw
    'n/process-exit-as-throw': 2,
    // suggest correct usage of shebang
    'n/shebang': 0
  }
};
