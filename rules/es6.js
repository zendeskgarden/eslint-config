'use strict';

module.exports = {
  'env': {
    'es6': false
  },
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
  },
  'rules': {
    // require braces in arrow function body
    'arrow-body-style': 0,
    // require parens in arrow function arguments
    'arrow-parens': [2, 'as-needed'],
    // require space before/after arrow function's arrow
    'arrow-spacing': 2,
    // verify calls of `super()` in constructors
    'constructor-super': 2,
    // enforce the spacing around the `*` in generator functions
    'generator-star-spacing': 0,
    // disallow modifying variables of class declarations
    'no-class-assign': 0,
    // disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': 2,
    // disallow modifying variables that are declared using `const`
    'no-const-assign': 2,
    // disallow duplicate name in class members
    'no-dupe-class-members': 2,
    // disallow duplicate module imports
    'no-duplicate-imports': [2, { 'includeExports': true }],
    // disallow use of the `new` operator with the `Symbol` object
    'no-new-symbol': 2,
    // restrict usage of specified node imports
    'no-restricted-imports': 0,
    // disallow to use `this`/`super` before `super()` calling in constructors
    'no-this-before-super': 2,
    // disallow unnecessary constructor
    'no-useless-constructor': 2,
    // require `let` or `const` instead of `var`
    'no-var': 2,
    // require method and property shorthand syntax for object literals
    'object-shorthand': 2,
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': 2,
    // suggest using of `const` declaration for variables that are never modified after declared
    'prefer-const': 2,
    // suggest using Reflect methods where applicable
    'prefer-reflect': 0,
    // suggest using the rest parameters instead of `arguments`
    'prefer-rest-params': 2,
    // suggest using the spread operator instead of `.apply()`
    'prefer-spread': 1,
    // suggest using template literals instead of strings concatenation
    'prefer-template': 2,
    // disallow generator functions that do not have `yield`
    'require-yield': 0,
    // enforce spacing around embedded expressions of template strings
    'template-curly-spacing': [2, 'never'],
    // enforce spacing around the `*` in `yield*` expressions
    'yield-star-spacing': [2, 'after']
  }
};
