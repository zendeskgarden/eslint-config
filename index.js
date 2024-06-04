/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import babelParser from '@babel/eslint-parser';
import eslintBestPractices from './rules/best-practices.js';
import eslintES6 from './rules/es6.js';
import eslintPossibleErrors from './rules/possible-errors.js';
import eslintStrictMode from './rules/strict-mode.js';
import eslintStylisticIssues from './rules/stylistic-issues.js';
import eslintVariables from './rules/variables.js';
import globals from 'globals';
import nodePlugin from './plugins/node.js';

export default [
  eslintPossibleErrors,
  eslintBestPractices,
  eslintStrictMode,
  eslintVariables,
  eslintStylisticIssues,
  eslintES6,
  nodePlugin,
  {
    languageOptions: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      globals: {
        /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        ...globals.browser,
        ...globals.es2020
        /* eslint-enable @typescript-eslint/no-unsafe-member-access */
      },
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      parser: babelParser,
      parserOptions: {
        ecmaFeatures: {
          // allow `return` statements in the global scope
          globalReturn: false,
          // enable global strict mode
          impliedStrict: true,
          // enable JSX
          jsx: true
        }
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    }
  }
];
