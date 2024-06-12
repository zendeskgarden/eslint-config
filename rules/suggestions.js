/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export default {
  rules: {
    // enforces getter/setter pairs in objects
    'accessor-pairs': 2,
    // require braces in arrow function body
    'arrow-body-style': 0,
    // treat `var` statements as if they were block scoped
    'block-scoped-var': 2,
    // require camel case names
    camelcase: [2, { properties: 'never' }],
    // enforce or disallow capitalization of the first letter of a comment
    'capitalize-comments': 0,
    // enforce that class methods utilize `this`
    'class-methods-use-this': 2,
    // specify the maximum cyclomatic complexity allowed in a program
    complexity: [0, 11],
    // require `return` statements to either always or never specify values
    'consistent-return': 2,
    // enforces consistent naming when capturing the current execution context
    'consistent-this': [0, 'self'],
    // specify curly brace conventions for all control statements
    curly: [2, 'multi-line'],
    // require `default` case in `switch` statements
    'default-case': 0,
    // enforce default clauses in switch statements to be last
    'default-case-last': 2,
    // enforce default parameters to be last
    'default-param-last': 2,
    // encourages use of dot notation whenever possible
    'dot-notation': [2, { allowKeywords: true }],
    // require the use of `===` and `!==`
    eqeqeq: 2,
    // require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': 2,
    // require function expressions to have a name
    'func-names': 1,
    // enforce use of function declarations or expressions
    'func-style': 0,
    // require grouped accessor pairs in object literals and classes
    'grouped-accessor-pairs': [2, 'getBeforeSet'],
    // make sure `for-in` loops have an `if` statement
    'guard-for-in': 2,
    // disallow specified identifiers
    'id-denylist': 0,
    // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    'id-length': 0,
    // require identifiers to match the provided regular expression
    'id-match': 0,
    // enforce or disallow variable initializations at definition
    'init-declarations': 0,
    // require or disallow logical assignment logical operator shorthand
    'logical-assignment-operators': 2,
    // enforce a maximum number of classes per file
    'max-classes-per-file': 2,
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
    // require a capital letter for constructors
    'new-cap': [2, { newIsCap: true }],
    // disallow the use of `alert`, `confirm`, and `prompt`
    'no-alert': 1,
    // disallow use of the `Array` constructor
    'no-array-constructor': 2,
    // disallow use of bitwise operators
    'no-bitwise': 0,
    // disallow use of `arguments.caller` or `arguments.callee`
    'no-caller': 2,
    // disallow lexical declarations in case clauses
    'no-case-declarations': 2,
    // disallow use of `console` in the node environment
    'no-console': 1,
    // disallow use of the `continue` statement
    'no-continue': 0,
    // disallow deletion of variables
    'no-delete-var': 2,
    // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 0,
    // disallow `else` after a `return` in an `if`
    'no-else-return': 2,
    // disallow empty statements
    'no-empty': 2,
    // disallow use of empty functions
    'no-empty-function': 2,
    // disallows empty static blocks (ignores static blocks which contain a comment)
    'no-empty-static-block': 2,
    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 2,
    // disallow use of `eval()`
    'no-eval': 2,
    // disallow adding to native types
    'no-extend-native': 2,
    // disallow unnecessary function binding
    'no-extra-bind': 2,
    // disallow double-negation boolean casts in a boolean context
    'no-extra-boolean-cast': 2,
    // disallow unnecessary labels
    'no-extra-label': 2,
    // disallow assignments to native objects or read-only global variables
    'no-global-assign': 2,
    // disallow the type conversions with shorter notations
    'no-implicit-coercion': 0,
    // disallow `var` and named functions in global scope
    'no-implicit-globals': 2,
    // disallow use of `eval()`-like methods
    'no-implied-eval': 2,
    // disallow comments inline after code
    'no-inline-comments': 0,
    // disallow `this` keywords outside of classes or class-like objects
    'no-invalid-this': 2,
    // disallow usage of `__iterator__` property
    'no-iterator': 2,
    // disallow labels that share a name with a variable
    'no-label-var': 0,
    // disallow use of labeled statements
    'no-labels': 2,
    // disallow unnecessary nested blocks
    'no-lone-blocks': 2,
    // disallow `if` as the only statement in an `else` block
    'no-lonely-if': 2,
    // disallow creation of functions within loops
    'no-loop-func': 2,
    // disallow the use of magic numbers
    'no-magic-numbers': 0,
    // disallow use of chained assignment expressions
    'no-multi-assign': 2,
    // disallow use of multiline strings
    'no-multi-str': 2,
    // disallow negated conditions
    'no-negated-condition': 2,
    // disallow nested ternary expressions
    'no-nested-ternary': 2,
    // disallow use of `new` operator when not part of the assignment or comparison
    'no-new': 2,
    // disallow use of new operator for `Function` object
    'no-new-func': 2,
    // disallows creating new instances of `String`, `Number`, and `Boolean`
    'no-new-wrappers': 2,
    // disallow `\8` and `\9` escape sequences in string literals
    'no-nonoctal-decimal-escape': 2,
    // disallow calls to the `Object` constructor without an argument
    'no-object-constructor': 2,
    // disallow use of (old style) octal literals
    'no-octal': 2,
    // disallow use of octal escape sequences in string literals, such as `var foo = 'Copyright \251';`
    'no-octal-escape': 2,
    // disallow reassignment of function parameters
    'no-param-reassign': 2,
    // disallow use of unary operators, `++` and `--`
    'no-plusplus': 0,
    // disallow usage of `__proto__` property
    'no-proto': 2,
    // disallow declaring the same variable more then once
    'no-redeclare': 2,
    // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 2,
    // disallow specified names in exports
    'no-restricted-exports': 0,
    // restrict usage of specified global variables
    'no-restricted-globals': 0,
    // restrict usage of specified node imports
    'no-restricted-imports': 0,
    // disallow certain properties on certain objects
    'no-restricted-properties': 0,
    // disallow use of certain syntax in code
    'no-restricted-syntax': 0,
    // disallow use of assignment in `return` statement
    'no-return-assign': 2,
    // disallow use of `javascript:` urls.
    'no-script-url': 2,
    // disallow use of comma operator
    'no-sequences': 2,
    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 2,
    // disallow shadowing of names such as `arguments`
    'no-shadow-restricted-names': 2,
    // disallow the use of ternary operators
    'no-ternary': 0,
    // restrict what can be thrown as an exception
    'no-throw-literal': 2,
    // disallow use of undefined when initializing variables
    'no-undef-init': 0,
    // disallow use of `undefined` variable
    'no-undefined': 0,
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 0,
    // disallow the use of `Boolean` literals in conditional expressions
    'no-unneeded-ternary': 2,
    // disallow usage of expressions in statement position
    'no-unused-expressions': [2, { allowShortCircuit: true }],
    // disallow unused labels
    'no-unused-labels': 2,
    // disallow unnecessary `.call()` and `.apply()`
    'no-useless-call': 0,
    // disallow unnecessary `catch` clauses
    'no-useless-catch': 2,
    // disallow unnecessary computed property keys in object literals
    'no-useless-computed-key': 2,
    // disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': 2,
    // disallow unnecessary constructor
    'no-useless-constructor': 2,
    // disallow unnecessary usage of escape character
    'no-useless-escape': 2,
    // disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': 2,
    // disallow redundant return statements
    'no-useless-return': 2,
    // require `let` or `const` instead of `var`
    'no-var': 2,
    // disallow use of `void` operator
    'no-void': 0,
    // disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments': [
      0,
      {
        terms: ['todo', 'fixme'],
        location: 'start'
      }
    ],
    // disallow use of the `with` statement
    'no-with': 2,
    // require method and property shorthand syntax for object literals
    'object-shorthand': 2,
    // allow just one var statement per function
    'one-var': [2, 'never'],
    // require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': 0,
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': 2,
    // suggest using of `const` declaration for variables that are never modified after declared
    'prefer-const': 2,
    // require destructuring from arrays and/or objects
    'prefer-destructuring': 0,
    // disallow the use of `Math.pow` in favor of the `**` operator
    'prefer-exponentiation-operator': 1,
    // enforce using named capture group in regular expression
    'prefer-named-capture-group': 1,
    // disallow `parseInt()` in favor of binary, octal, and hexadecimal literals
    'prefer-numeric-literals': 2,
    // disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
    'prefer-object-has-own': 1,
    // prefer use of an object spread over `Object.assign`
    'prefer-object-spread': 1,
    // require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': 2,
    // disallow use of the `RegExp` constructor in favor of regular expression literals
    'prefer-regex-literals': 2,
    // suggest using the rest parameters instead of `arguments`
    'prefer-rest-params': 2,
    // suggest using the spread operator instead of `.apply()`
    'prefer-spread': 1,
    // suggest using template literals instead of strings concatenation
    'prefer-template': 2,
    // require use of the second argument for `parseInt()`
    radix: 2,
    // disallow async functions which have no `await` expression
    'require-await': 2,
    // enforce the use of u flag on RegExp
    'require-unicode-regexp': 2,
    // disallow generator functions that do not have `yield`
    'require-yield': 0,
    // sort import declarations within module
    'sort-imports': 1,
    // require object keys to be sorted
    'sort-keys': 0,
    // sort variables within the same declaration block
    'sort-vars': 0,
    // controls location of Use Strict directives (controlled by babel)
    strict: [2, 'never'],
    // require symbol descriptions
    'symbol-description': 2,
    // requires to declare all vars on top of their containing scope
    'vars-on-top': 2,
    // require or disallow Yoda conditions
    yoda: 2
  }
};
