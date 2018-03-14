const TEMPLATE = `/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

`;

module.exports = {
  plugins: ['notice'],
  rules: {
    // throw an error when a file doesn't have a copyright notice
    'notice/notice': [2, {
      template: TEMPLATE,
      onNonMatchingHeader: 'replace'
    }]
  }
};
