'use strict';

module.exports = {
  'rules': {
    // enforces getter/setter pairs in objects
    'accessor-pairs': 2,
    // enforces return statements in callbacks of array's methods
    'array-callback-return': 2,
    // treat `var` statements as if they were block scoped
    'block-scoped-var': 2,
    // enforce that class methods utilize `this`
    'class-methods-use-this': 2,
    // specify the maximum cyclomatic complexity allowed in a program
    'complexity': [0, 11],
    // require `return` statements to either always or never specify values
    'consistent-return': 2,
    // specify curly brace conventions for all control statements
    'curly': [2, 'multi-line'],
    // require `default` case in `switch` statements
    'default-case': 0,
    // enforces consistent newlines before or after dots
    'dot-location': [2, 'property'],
    // encourages use of dot notation whenever possible
    'dot-notation': [2, { 'allowKeywords': true }],
    // require the use of `===` and `!==`
    'eqeqeq': 2,
    // make sure `for-in` loops have an `if` statement
    'guard-for-in': 2,
    // disallow the use of `alert`, `confirm`, and `prompt`
    'no-alert': 1,
    // disallow use of `arguments.caller` or `arguments.callee`
    'no-caller': 2,
    // disallow lexical declarations in case clauses
    'no-case-declarations': 2,
    // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 0,
    // disallow `else` after a `return` in an `if`
    'no-else-return': 2,
    // disallow use of empty functions
    'no-empty-function': 2,
    // disallow use of empty destructuring patterns
    'no-empty-pattern': 2,
    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 2,
    // disallow use of `eval()`
    'no-eval': 2,
    // disallow adding to native types
    'no-extend-native': 2,
    // disallow unnecessary function binding
    'no-extra-bind': 2,
    // disallow unnecessary labels
    'no-extra-label': 2,
    // disallow fallthrough of `case` statements
    'no-fallthrough': 2,
    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 2,
    // disallow assignments to native objects or read-only global variables
    'no-global-assign': 2,
    // disallow the type conversions with shorter notations
    'no-implicit-coercion': 0,
    // disallow `var` and named functions in global scope
    'no-implicit-globals': 2,
    // disallow use of `eval()`-like methods
    'no-implied-eval': 2,
    // disallow `this` keywords outside of classes or class-like objects
    'no-invalid-this': 2,
    // disallow usage of `__iterator__` property
    'no-iterator': 2,
    // disallow use of labeled statements
    'no-labels': 2,
    // disallow unnecessary nested blocks
    'no-lone-blocks': 2,
    // disallow creation of functions within loops
    'no-loop-func': 2,
    // disallow the use of magic numbers
    'no-magic-numbers': 0,
    // disallow use of multiple spaces
    'no-multi-spaces': 2,
    // disallow use of multiline strings
    'no-multi-str': 2,
    // disallow use of `new` operator when not part of the assignment or comparison
    'no-new': 2,
    // disallow use of new operator for `Function` object
    'no-new-func': 2,
    // disallows creating new instances of `String`, `Number`, and `Boolean`
    'no-new-wrappers': 2,
    // disallow use of (old style) octal literals
    'no-octal': 2,
    // disallow use of octal escape sequences in string literals, such as `var foo = 'Copyright \251';`
    'no-octal-escape': 2,
    // disallow reassignment of function parameters
    'no-param-reassign': 2,
    // disallow usage of `__proto__` property
    'no-proto': 2,
    // disallow declaring the same variable more then once
    'no-redeclare': 2,
    // disallow certain properties on certain objects
    'no-restricted-properties': 0,
    // disallow use of assignment in `return` statement
    'no-return-assign': 2,
    // disallow unnecessary `return await`
    'no-return-await': 2,
    // disallow use of `javascript:` urls.
    'no-script-url': 2,
    // disallow assignments where both sides are exactly the same
    'no-self-assign': 2,
    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 2,
    // disallow use of comma operator
    'no-sequences': 2,
    // restrict what can be thrown as an exception
    'no-throw-literal': 2,
    // disallow unmodified conditions of loops
    'no-unmodified-loop-condition': 2,
    // disallow usage of expressions in statement position
    'no-unused-expressions': 2,
    // disallow unused labels
    'no-unused-labels': 2,
    // disallow unnecessary `.call()` and `.apply()`
    'no-useless-call': 0,
    // disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': 2,
    // disallow unnecessary usage of escape character
    'no-useless-escape': 2,
    // disallow redundant return statements
    'no-useless-return': 2,
    // disallow use of `void` operator
    'no-void': 0,
    // disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments': [0, { 'terms': ['todo', 'fixme'], 'location': 'start' }],
    // disallow use of the `with` statement
    'no-with': 2,
    // require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': 2,
    // require use of the second argument for `parseInt()`
    'radix': 2,
    // disallow async functions which have no `await` expression
    'require-await': 2,
    // requires to declare all vars on top of their containing scope
    'vars-on-top': 2,
    // require immediate function invocation to be wrapped in parentheses
    'wrap-iife': [2, 'any'],
    // require or disallow Yoda conditions
    'yoda': 2
  }
};
