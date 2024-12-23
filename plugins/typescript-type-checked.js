/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import eslintLayoutFormatting from '../rules/layout-formatting.js';
import eslintPossibleProblems from '../rules/possible-problems.js';
import eslintSuggestions from '../rules/suggestions.js';
import tseslint from 'typescript-eslint';

const eslintRules = {
  ...eslintLayoutFormatting.rules,
  ...eslintPossibleProblems.rules,
  ...eslintSuggestions.rules
};

export default {
  plugins: {
    '@typescript-eslint': tseslint.plugin
  },
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      project: true
    }
  },
  rules: {
    // Disable ESLint rules that are handled by TypeScript
    'consistent-return': 0,
    'dot-notation': 0,
    'no-implied-eval': 0,
    'no-throw-literal': 0,
    'prefer-destructuring': 0,
    'prefer-promise-reject-errors': 0,
    'require-await': 0,

    // disallows awaiting a value that is not a `Thenable`
    '@typescript-eslint/await-thenable': 2,
    // require `return` statements to either always or never specify values
    '@typescript-eslint/consistent-return': eslintRules['consistent-return'],
    // enforce consistent usage of type exports
    '@typescript-eslint/consistent-type-exports': 2,
    // enforce dot notation whenever possible
    '@typescript-eslint/dot-notation': eslintRules['dot-notation'],
    // enforce naming conventions for everything across a codebase
    '@typescript-eslint/naming-convention': [
      2,
      {
        selector: 'default',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I']
      },
      {
        selector: 'objectLiteralProperty',
        format: null
      }
    ],
    // disallow using the `delete` operator on array values
    '@typescript-eslint/no-array-delete': 2,
    // requires that `.toString()` is only called on objects which provide useful information when stringified
    '@typescript-eslint/no-base-to-string': 2,
    // requires expressions of type void to appear in statement position
    '@typescript-eslint/no-confusing-void-expression': 2,
    // disallow using code marked as `@deprecated`
    '@typescript-eslint/no-deprecated': 1,
    // disallows duplicate union or intersection type members
    '@typescript-eslint/no-duplicate-type-constituents': 2,
    // requires Promise-like values to be handled appropriately
    '@typescript-eslint/no-floating-promises': 2,
    // disallow iterating over an array with a for-in loop
    '@typescript-eslint/no-for-in-array': 2,
    // disallow the use of `eval()`-like methods
    '@typescript-eslint/no-implied-eval': eslintRules['no-implied-eval'],
    // disallow the `void` operator except when used to discard a value
    '@typescript-eslint/no-meaningless-void-operator': 2,
    // avoid using promises in places not designed to handle them
    '@typescript-eslint/no-misused-promises': 2,
    // disallow enums from having both number and string members
    '@typescript-eslint/no-mixed-enums': 2,
    // disallow members of unions and intersections that do nothing or override type information
    '@typescript-eslint/no-redundant-type-constituents': 2,
    // flags unnecessary equality comparisons against boolean literals
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 2,
    // prevents conditionals where the type is always truthy or always falsy
    '@typescript-eslint/no-unnecessary-condition':
      eslintRules['no-constant-condition'],
    // warns when a namespace qualifier is unnecessary
    '@typescript-eslint/no-unnecessary-qualifier': 1,
    // disallow unnecessary template expressions
    '@typescript-eslint/no-unnecessary-template-expression': 2,
    // enforces that type arguments will not be used if not required
    '@typescript-eslint/no-unnecessary-type-arguments': 2,
    // warns if a type assertion does not change the type of an expression
    '@typescript-eslint/no-unnecessary-type-assertion': 2,
    // disallow type parameters that aren't used multiple times
    '@typescript-eslint/no-unnecessary-type-parameters': 1,
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
    // disallow type assertions that narrow a type
    '@typescript-eslint/no-unsafe-type-assertion': 2,
    // require unary negation to take a number
    '@typescript-eslint/no-unsafe-unary-minus': 2,
    // prefers a non-null assertion over explicit type cast when possible
    '@typescript-eslint/non-nullable-type-assertion-style': 1,
    // disallow throwing non-`Error` values as exceptions
    '@typescript-eslint/only-throw-error': eslintRules['no-throw-literal'],
    // require destructuring from arrays and/or objects
    '@typescript-eslint/prefer-destructuring':
      eslintRules['prefer-destructuring'],
    // enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result
    '@typescript-eslint/prefer-find': 2,
    // enforce includes method over `indexOf` method
    '@typescript-eslint/prefer-includes': 2,
    // enforce the usage of the nullish coalescing operator instead of logical chaining
    '@typescript-eslint/prefer-nullish-coalescing': 0,
    // enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects
    '@typescript-eslint/prefer-optional-chain': 2,
    // require using Error objects as Promise rejection reasons
    '@typescript-eslint/prefer-promise-reject-errors':
      eslintRules['prefer-promise-reject-errors'],
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
    // enforce that `get()` types should be assignable to their equivalent `set()` type
    '@typescript-eslint/related-getter-setter-pairs': 2,
    // requires `Array#sort` calls to always provide a `compareFunction`
    '@typescript-eslint/require-array-sort-compare': 1,
    // disallow async functions which have no `await` expression
    '@typescript-eslint/require-await': eslintRules['require-await'],
    // when adding two variables, operands must both be of type number or of type string
    '@typescript-eslint/restrict-plus-operands': 2,
    // enforce template literal expressions to be of string type
    '@typescript-eslint/restrict-template-expressions': 2,
    // enforce consistent returning of awaited values
    '@typescript-eslint/return-await': 2,
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
