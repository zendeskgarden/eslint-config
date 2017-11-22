'use strict';

module.exports = {
  'extends': [
    '@zendesk/garden/rules/possible-errors',
    '@zendesk/garden/rules/best-practices',
    '@zendesk/garden/rules/strict-mode',
    '@zendesk/garden/rules/variables',
    '@zendesk/garden/rules/node',
    '@zendesk/garden/rules/stylistic-issues',
    '@zendesk/garden/rules/es6',
    '@zendesk/garden/rules/sort-class-members'
  ],
  'parser': 'babel-eslint',
  'env': { 'browser': true },
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      // allow `return` statements in the global scope
      'globalReturn': false,
      // enable global strict mode
      'impliedStrict': true,
      // enable JSX
      'jsx': false
    }
  }
};
