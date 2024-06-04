/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export default {
  rules: {
    // require camel case names
    camelcase: [2, { properties: 'never' }],
    // enforce or disallow capitalization of the first letter of a comment
    'capitalize-comments': 0,
    // enforces consistent naming when capturing the current execution context
    'consistent-this': [0, 'self'],
    // require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': 2,
    // require function expressions to have a name
    'func-names': 1,
    // enforce use of function declarations or expressions
    'func-style': 0,
    // disallow specified identifiers
    'id-denylist': 0,
    // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    'id-length': 0,
    // require identifiers to match the provided regular expression
    'id-match': 0,
    // enforce spacing before and after keywords
    'keyword-spacing': 2,
    // enforce position of line comments
    'line-comment-position': 0,
    // require or disallow logical assignment logical operator shorthand
    'logical-assignment-operators': 2,
    // specify the maximum depth that blocks can be nested
    'max-depth': [0, 4],
    // enforce a maximum number of lines per file
    'max-lines': 0,
    // enforce a maximum number of line of code in a function
    'max-lines-per-function': 0,
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 0,
    // limits the number of parameters that can be used in the function declaration.
    'max-params': [0, 3],
    // specify the maximum number of statement allowed in a function
    'max-statements': [0, 10],
    // enforce a particular style for multiline comments
    'multiline-comment-style': 0,
    // require a capital letter for constructors
    'new-cap': [2, { newIsCap: true }],
    // disallow use of the `Array` constructor
    'no-array-constructor': 2,
    // disallow use of bitwise operators
    'no-bitwise': 0,
    // disallow use of the `continue` statement
    'no-continue': 0,
    // disallow comments inline after code
    'no-inline-comments': 0,
    // disallow `if` as the only statement in an `else` block
    'no-lonely-if': 2,
    // disallow use of chained assignment expressions
    'no-multi-assign': 2,
    // disallow negated conditions
    'no-negated-condition': 2,
    // disallow nested ternary expressions
    'no-nested-ternary': 2,
    // disallow calls to the `Object` constructor without an argument
    'no-object-constructor': 2,
    // disallow use of unary operators, `++` and `--`
    'no-plusplus': 0,
    // disallow use of certain syntax in code
    'no-restricted-syntax': 0,
    // disallow the use of ternary operators
    'no-ternary': 0,
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 0,
    // disallow the use of `Boolean` literals in conditional expressions
    'no-unneeded-ternary': 2,
    // allow just one var statement per function
    'one-var': [2, 'never'],
    // require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': 0,
    // disallow the use of `Math.pow` in favor of the `**` operator
    'prefer-exponentiation-operator': 1,
    // disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
    'prefer-object-has-own': 1,
    // prefer use of an object spread over `Object.assign`
    'prefer-object-spread': 1,
    // require object keys to be sorted
    'sort-keys': 0,
    // sort variables within the same declaration block
    'sort-vars': 0,
    // require or disallow Unicode byte order mark (BOM)
    'unicode-bom': 2
  }
};
