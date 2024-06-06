/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import babelParser from '@babel/eslint-parser';
import eslintLayoutFormatting from './rules/layout-formatting.js';
import eslintPossibleProblems from './rules/possible-problems.js';
import eslintSuggestions from './rules/suggestions.js';
import globals from 'globals';
import nodePlugin from './plugins/node.js';

export default [
  eslintLayoutFormatting,
  eslintPossibleProblems,
  eslintSuggestions,
  nodePlugin,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020
      },
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
