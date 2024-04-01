/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const bestPractices = require('../rules/best-practices').rules;
const es6 = require('../rules/es6').rules;
const possibleErrors = require('../rules/possible-errors').rules;

module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    // Disable ESLint rules that are handled by TypeScript
    'dot-notation': 0,
    'no-implied-eval': 0,
    'no-throw-literal': 0,
    'prefer-destructuring': 0,
    'prefer-promise-reject-errors': 0,
    'require-await': 0,

    // disallows awaiting a value that is not a `Thenable`
    '@typescript-eslint/await-thenable': 2,
    // enforce dot notation whenever possible
    '@typescript-eslint/dot-notation': bestPractices['dot-notation'],
    // disallow using the `delete` operator on array values
    '@typescript-eslint/no-array-delete': 2,
    // requires that `.toString()` is only called on objects which provide useful information when stringified
    '@typescript-eslint/no-base-to-string': 2,
    // requires expressions of type void to appear in statement position
    '@typescript-eslint/no-confusing-void-expression': 2,
    // disallows duplicate union or intersection type members
    '@typescript-eslint/no-duplicate-type-constituents': 2,
    // requires Promise-like values to be handled appropriately
    '@typescript-eslint/no-floating-promises': 2,
    // disallow iterating over an array with a for-in loop
    '@typescript-eslint/no-for-in-array': 2,
    // disallow the use of `eval()`-like methods
    '@typescript-eslint/no-implied-eval': bestPractices['no-implied-eval'],
    // avoid using promises in places not designed to handle them
    '@typescript-eslint/no-misused-promises': 2,
    // disallow members of unions and intersections that do nothing or override type information
    '@typescript-eslint/no-redundant-type-constituents': 2,
    // disallow throwing literals as exceptions
    '@typescript-eslint/no-throw-literal': bestPractices['no-throw-literal'],
    // flags unnecessary equality comparisons against boolean literals
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 2,
    // prevents conditionals where the type is always truthy or always falsy
    '@typescript-eslint/no-unnecessary-condition':
      possibleErrors['no-constant-condition'],
    // warns when a namespace qualifier is unnecessary
    '@typescript-eslint/no-unnecessary-qualifier': 1,
    // enforces that type arguments will not be used if not required
    '@typescript-eslint/no-unnecessary-type-arguments': 2,
    // warns if a type assertion does not change the type of an expression
    '@typescript-eslint/no-unnecessary-type-assertion': 2,
    // disallows calling an function with an any type value
    '@typescript-eslint/no-unsafe-argument': 2,
    // disallows assigning any to variables and properties
    '@typescript-eslint/no-unsafe-assignment': 2,
    // disallows calling an any type value
    '@typescript-eslint/no-unsafe-call': 2,
    // disallow literals where enums are expected
    '@typescript-eslint/no-unsafe-enum-comparison': 2,
    // disallows member access on any typed variables
    '@typescript-eslint/no-unsafe-member-access': 2,
    // disallows returning any from a function
    '@typescript-eslint/no-unsafe-return': 2,
    // require unary negation to take a number
    '@typescript-eslint/no-unsafe-unary-minus': 2,
    // disallow unnecessary template literals
    '@typescript-eslint/no-useless-template-literals': 2,
    // prefers a non-null assertion over explicit type cast when possible
    '@typescript-eslint/non-nullable-type-assertion-style': 1,
    // require destructuring from arrays and/or objects
    '@typescript-eslint/prefer-destructuring': es6['prefer-destructuring'],
    // enforce includes method over `indexOf` method
    '@typescript-eslint/prefer-includes': 2,
    // enforce the usage of the nullish coalescing operator instead of logical chaining
    '@typescript-eslint/prefer-nullish-coalescing': 0,
    // require using Error objects as Promise rejection reasons
    '@typescript-eslint/prefer-promise-reject-errors':
      bestPractices['prefer-promise-reject-errors'],
    // requires that private members are marked as `readonly` if they're never modified outside of the constructor
    '@typescript-eslint/prefer-readonly': 2,
    // requires that function parameters are typed as readonly to prevent accidental mutation of inputs
    '@typescript-eslint/prefer-readonly-parameter-types': 0,
    // prefer using type parameter when calling `Array#reduce` instead of casting
    '@typescript-eslint/prefer-reduce-type-parameter': 2,
    // enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided
    '@typescript-eslint/prefer-regexp-exec': 1,
    // enforce that `this` is used when only `this` type is returned
    '@typescript-eslint/prefer-return-this-type': 2,
    // enforce the use of `String#startsWith` and `String#endsWith` instead of other equivalent methods of checking substrings
    '@typescript-eslint/prefer-string-starts-ends-with': 2,
    // requires any function or method that returns a Promise to be marked async
    '@typescript-eslint/promise-function-async': 2,
    // requires `Array#sort` calls to always provide a `compareFunction`
    '@typescript-eslint/require-array-sort-compare': 1,
    // disallow async functions which have no `await` expression
    '@typescript-eslint/require-await': bestPractices['require-await'],
    // when adding two variables, operands must both be of type number or of type string
    '@typescript-eslint/restrict-plus-operands': 2,
    // enforce template literal expressions to be of string type
    '@typescript-eslint/restrict-template-expressions': 2,
    // restricts the types allowed in boolean expressions
    '@typescript-eslint/strict-boolean-expressions': 1,
    // exhaustiveness checking in switch with union type
    '@typescript-eslint/switch-exhaustiveness-check': 2,
    // enforces unbound methods are called with their expected scope
    '@typescript-eslint/unbound-method': 2,
    // requires type annotation of catch() parameter remain unknown
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 2
  }
};
