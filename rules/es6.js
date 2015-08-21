'use strict';

module.exports = {
  'env': {
    'es6': false
  },
  'ecmaFeatures': {
    // enable arrow functions
    'arrowFunctions': true,
    // enable binary literals
    'binaryLiterals': false,
    // enable `let` and `const` (aka block bindings)
    'blockBindings': true,
    // enable classes
    'classes': true,
    // enable default function parameters
    'defaultParams': true,
    // enable destructuring
    'destructuring': true,
    // enable `for-of` loops
    'forOf': true,
    // enable generators
    'generators': false,
    // allow `return` statements in the global scope
    'globalReturn': false,
    //  enable JSX
    'jsx': false,
    // enable modules and global strict mode
    'modules': true,
    // enable computed object literal property names
    'objectLiteralComputedProperties': true,
    // enable duplicate object literal properties in strict mode
    'objectLiteralDuplicateProperties': false,
    // enable object literal shorthand methods
    'objectLiteralShorthandMethods': true,
    // enable object literal shorthand properties
    'objectLiteralShorthandProperties': true,
    // enable octal literals
    'octalLiterals': false,
    // enable the regular expression `u` flag
    'regexUFlag': true,
    // enable the regular expression `y` flag
    'regexYFlag': true,
    // enable the rest parameters
    'restParams': true,
    // enable the spread operator for arrays
    'spread': true,
    // enable `super` references inside of functions
    'superInFunctions': true,
    // enable template strings
    'templateStrings': true,
    // enable code point escapes
    'unicodeCodePointEscapes': true
  },
  'rules': {
    // require parens in arrow function arguments
    'arrow-parens': 0,
    // require space before/after arrow function's arrow
    'arrow-spacing': 2,
    // verify calls of `super()` in constructors
    'constructor-super': 2,
    // enforce the spacing around the `*` in generator functions
    'generator-star-spacing': 0,
    // disallow modifying variables of class declarations
    'no-class-assign': 0,
    // disallow modifying variables that are declared using `const`
    'no-const-assign': 2,
    // disallow duplicate name in class members
    'no-dupe-class-members': 2,
    // disallow to use `this`/`super` before `super()` calling in constructors
    'no-this-before-super': 2,
    // require `let` or `const` instead of `var`
    'no-var': 2,
    // require method and property shorthand syntax for object literals
    'object-shorthand': 2,
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': 2,
    // suggest using of `const` declaration for variables that are never modified after declared
    'prefer-const': 2,
    // suggest using the spread operator instead of `.apply()`
    'prefer-spread': 1,
    // suggest using Reflect methods where applicable
    'prefer-reflect': 0,
    // suggest using template literals instead of strings concatenation
    'prefer-template': 2,
    // disallow generator functions that do not have `yield`
    'require-yield': 0
  }
};
