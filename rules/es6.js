/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
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
    'no-duplicate-imports': [2, { includeExports: true }],
    // disallow use of the `new` operator with the `Symbol` object
    'no-new-symbol': 2,
    // disallow specified names in exports
    'no-restricted-exports': 0,
    // restrict usage of specified node imports
    'no-restricted-imports': 0,
    // disallow to use `this`/`super` before `super()` calling in constructors
    'no-this-before-super': 2,
    // disallow unnecessary computed property keys in object literals
    'no-useless-computed-key': 2,
    // disallow unnecessary constructor
    'no-useless-constructor': 2,
    // disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': 2,
    // require `let` or `const` instead of `var`
    'no-var': 2,
    // require method and property shorthand syntax for object literals
    'object-shorthand': 2,
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': 2,
    // suggest using of `const` declaration for variables that are never modified after declared
    'prefer-const': 2,
    // require destructuring from arrays and/or objects
    'prefer-destructuring': 0,
    // disallow `parseInt()` in favor of binary, octal, and hexadecimal literals
    'prefer-numeric-literals': 2,
    // suggest using the rest parameters instead of `arguments`
    'prefer-rest-params': 2,
    // suggest using the spread operator instead of `.apply()`
    'prefer-spread': 1,
    // suggest using template literals instead of strings concatenation
    'prefer-template': 2,
    // disallow generator functions that do not have `yield`
    'require-yield': 0,
    // enforce spacing between rest and spread operators and their expressions
    'rest-spread-spacing': 2,
    // sort import declarations within module
    'sort-imports': 1,
    // require symbol descriptions
    'symbol-description': 2,
    // enforce spacing around embedded expressions of template strings
    'template-curly-spacing': [2, 'never'],
    // enforce spacing around the `*` in `yield*` expressions
    'yield-star-spacing': [2, 'after']
  }
};
