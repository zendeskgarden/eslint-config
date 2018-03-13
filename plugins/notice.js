const TEMPLATE = `/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found in the LICENSE file located in the root directory of this source tree.
 */

`;

module.exports = {
  plugins: ['notice'],
  rules: {
    // throw an error when a file doesn't have a copyright notice
    'notice/notice': [2, { template: TEMPLATE }]
  }
};
