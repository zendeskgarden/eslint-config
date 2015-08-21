'use strict';

module.exports = {
  'extends': [
    'zendesk/rules/possible_errors',
    'zendesk/rules/best_practices',
    'zendesk/rules/strict_mode',
    'zendesk/rules/variables',
    'zendesk/rules/node',
    'zendesk/rules/stylistic_issues',
    'zendesk/rules/es6',
    'zendesk/rules/legacy'
  ],
  'parser': 'babel-eslint',
  'env': { 'browser': true }
};
