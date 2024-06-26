/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export default {
  rules: {
    // enforces return statements in callbacks of array's methods
    'array-callback-return': 2,
    // verify calls of `super()` in constructors
    'constructor-super': 2,
    // enforce “for” loop update clause moving the counter in the right direction
    'for-direction': 2,
    // enforce `return` statements in getters
    'getter-return': [2, { allowImplicit: true }],
    // disallow using an async function as a Promise executor
    'no-async-promise-executor': 2,
    // disallow `await` inside of loops
    'no-await-in-loop': 2,
    // disallow modifying variables of class declarations
    'no-class-assign': 0,
    // disallow comparing against -0
    'no-compare-neg-zero': 2,
    // disallow assignment in conditional expressions
    'no-cond-assign': [2, 'always'],
    // disallow modifying variables that are declared using `const`
    'no-const-assign': 2,
    // disallow expressions where the operation doesn't affect the value
    'no-constant-binary-expression': 2,
    // disallow use of constant expressions in conditions
    'no-constant-condition': 1,
    // disallow returning value from constructor
    'no-constructor-return': 2,
    // disallow control characters in regular expressions
    'no-control-regex': 2,
    // disallow use of `debugger`
    'no-debugger': 1,
    // disallow duplicate arguments in functions
    'no-dupe-args': 2,
    // disallow duplicate name in class members
    'no-dupe-class-members': 2,
    // disallow duplicate conditions in if-else-if chains
    'no-dupe-else-if': 2,
    // disallow duplicate keys when creating object literals
    'no-dupe-keys': 2,
    // disallow a duplicate case label
    'no-duplicate-case': 2,
    // disallow duplicate module imports
    'no-duplicate-imports': [2, { includeExports: true }],
    // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 2,
    // disallow use of empty destructuring patterns
    'no-empty-pattern': 2,
    // disallow assigning to the exception in a `catch` block
    'no-ex-assign': 2,
    // disallow fallthrough of `case` statements
    'no-fallthrough': 2,
    // disallow overwriting functions written as function declarations
    'no-func-assign': 2,
    // disallow assigning to imported bindings
    'no-import-assign': 2,
    // disallow function or variable declarations in nested blocks
    'no-inner-declarations': 2,
    // disallow invalid regular expression strings in the `RegExp` constructor
    'no-invalid-regexp': 2,
    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 2,
    // disallow literal numbers that lose precision
    'no-loss-of-precision': 1,
    // disallow characters which are made with multiple code points in character class syntax
    'no-misleading-character-class': 2,
    // disallow use of the new operator with global no constructor functions
    'no-new-native-nonconstructor': 2,
    // disallow calling global object properties as functions
    'no-obj-calls': 2,
    // disallow returning values from Promise executor functions
    'no-promise-executor-return': 2,
    // disallow calling some `Object.prototype` methods directly on objects
    'no-prototype-builtins': 2,
    // disallow assignments where both sides are exactly the same
    'no-self-assign': 2,
    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 2,
    // disallow returning values from setters
    'no-setter-return': 2,
    // disallow sparse arrays
    'no-sparse-arrays': 2,
    // disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 2,
    // disallow to use `this`/`super` before `super()` calling in constructors
    'no-this-before-super': 2,
    // disallow use of undeclared variables unless mentioned in a `/*global*/` block
    'no-undef': 2,
    // avoid code that looks like two expressions but is actually one
    'no-unexpected-multiline': 2,
    // disallow unmodified conditions of loops
    'no-unmodified-loop-condition': 2,
    // disallow unreachable statements after a return, throw, continue, or break statement
    'no-unreachable': 2,
    // disallow loops with a body that allows only one iteration
    'no-unreachable-loop': 2,
    // disallow control flow statements in `finally` blocks
    'no-unsafe-finally': 2,
    // disallow negating the left operand of relational operators
    'no-unsafe-negation': 2,
    // disallow use of optional chaining in contexts where the `undefined` value is not allowed
    'no-unsafe-optional-chaining': 2,
    // disallow unused private class members
    'no-unused-private-class-members': 2,
    // disallow declaration of variables that are not used in the code
    'no-unused-vars': [
      2,
      {
        vars: 'local',
        args: 'after-used'
      }
    ],
    // disallow use of variables before they are defined
    'no-use-before-define': 2,
    // disallow variable assignments when the value is not used
    'no-useless-assignment': 2,
    // disallow useless backreferences in regular expressions
    'no-useless-backreference': 2,
    // disallow assignments that can lead to race conditions due to usage of `await` or `yield`
    'require-atomic-updates': 2,
    // disallow comparisons with the value `NaN`
    'use-isnan': 2,
    // ensure that the results of typeof are compared against a valid string
    'valid-typeof': 2
  }
};
