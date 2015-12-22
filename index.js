'use strict';

module.exports = {
  'extends': [
    'zendesk/rules/possible-errors',
    'zendesk/rules/best-practices',
    'zendesk/rules/strict-mode',
    'zendesk/rules/variables',
    'zendesk/rules/node',
    'zendesk/rules/stylistic-issues',
    'zendesk/rules/es6'
  ],
  'parser': 'babel-eslint',
  'env': { 'browser': true }
};
