/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import config from './index.js';
import jestPlugin from './plugins/jest.js';
import noticePlugin from './plugins/notice.js';
import reactPlugin from './plugins/react.js';
import typescriptPlugin from './plugins/typescript.js';
import typescriptTypeCheckedPlugin from './plugins/typescript-type-checked.js';

export default [
  ...config,
  jestPlugin,
  noticePlugin,
  reactPlugin,
  typescriptPlugin,
  typescriptTypeCheckedPlugin,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.mock.json'],
        requireConfigFile: false
      }
    }
  }
];
