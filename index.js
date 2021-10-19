/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  extends: [
    './rules/possible-errors',
    './rules/best-practices',
    './rules/strict-mode',
    './rules/variables',
    './rules/stylistic-issues',
    './rules/es6',
    './plugins/node/possible-errors',
    './plugins/node/best-practices',
    './plugins/node/stylistic-issues'
  ].map(require.resolve),
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      // allow `return` statements in the global scope
      globalReturn: false,
      // enable global strict mode
      impliedStrict: true,
      // enable JSX
      jsx: true
    }
  },
  reportUnusedDisableDirectives: true
};
