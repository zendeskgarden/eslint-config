/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  plugins: ['node'],
  rules: {
    // require error handling in callbacks
    'node/handle-callback-err': 0,
    // ensure Node.js-style error-first callback pattern is followed
    'node/no-callback-literal': 1,
    // disallow the assignment to `exports`
    'node/no-exports-assign': 2,
    // disallow `import` declarations which import extraneous modules
    'node/no-extraneous-import': 2,
    // disallow `require()` expressions which import extraneous modules
    'node/no-extraneous-require': 2,
    // disallow `import` declarations which import non-existence modules
    'node/no-missing-import': 2,
    // disallow `require()` expressions which import non-existence modules
    'node/no-missing-require': 2,
    // disallow `new` operators with calls to `require`
    'node/no-new-require': 0,
    // disallow string concatenation with `__dirname` and `__filename`
    'node/no-path-concat': 2,
    // disallow `process.exit()`
    'node/no-process-exit': 2,
    // disallow `bin` files that npm ignores
    'node/no-unpublished-bin': 2,
    // disallow `import` declarations which import private modules
    'node/no-unpublished-import': 2,
    // disallow `require()` expressions which import private modules
    'node/no-unpublished-require': 2,
    // disallow unsupported ECMAScript built-ins on the specified version
    'node/no-unsupported-features/es-builtins': 2,
    // disallow unsupported ECMAScript syntax on the specified version
    'node/no-unsupported-features/es-syntax': 2,
    // disallow unsupported Node.js built-in APIs on the specified version
    'node/no-unsupported-features/node-builtins': 2,
    // make process.exit() expressions the same code path as throw
    'node/process-exit-as-throw': 2,
    // suggest correct usage of shebang
    'node/shebang': 2
  }
};
