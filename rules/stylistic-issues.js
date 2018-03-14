/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  rules: {
    // enforce linebreaks after opening and before closing array brackets
    'array-bracket-newline': [2, 'consistent'],
    // enforce spacing inside array brackets
    'array-bracket-spacing': [2, 'never'],
    // enforce line breaks after each array element
    'array-element-newline': 0,
    // disallow or enforce spaces inside of single line blocks
    'block-spacing': [2, 'always'],
    // enforce one true brace style
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    // require camel case names
    'camelcase': [2, { properties: 'never' }],
    // enforce or disallow capitalization of the first letter of a comment
    'capitalize-comments': 0,
    // disallow or enforce trailing commas
    'comma-dangle': 2,
    // enforce spacing before and after comma
    'comma-spacing': [2, {
      before: false,
      after: true
    }],
    // enforce one true comma style
    'comma-style': [2, 'last'],
    // require or disallow padding inside computed properties
    'computed-property-spacing': [2, 'never'],
    // enforces consistent naming when capturing the current execution context
    'consistent-this': [0, 'self'],
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 2,
    // require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': 2,
    // require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': 2,
    // require function expressions to have a name
    'func-names': 1,
    // enforce use of function declarations or expressions
    'func-style': 0,
    // enforce consistent line breaks inside function parentheses
    'function-paren-newline': 2,
    // blacklist certain identifiers to prevent them being used
    'id-blacklist': 0,
    // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    'id-length': 0,
    // require identifiers to match the provided regular expression
    'id-match': 0,
    // enforce the location of arrow function bodies with implicit returns
    'implicit-arrow-linebreak': 2,
    // this option sets a specific tab width for your code
    'indent': [2, 2, { SwitchCase: 1 }],
    // specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': 0,
    // enforces spacing between keys and values in object literal properties
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true
    }],
    // enforce spacing before and after keywords
    'keyword-spacing': 2,
    // enforce position of line comments
    'line-comment-position': 0,
    // disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': 0,
    // enforces empty lines around comments
    'lines-around-comment': 0,
    // require or disallow an empty line between class members
    'lines-between-class-members': 2,
    // specify the maximum depth that blocks can be nested
    'max-depth': [0, 4],
    // specify the maximum length of a line in your program
    'max-len': [1, 80, 2, {
      ignoreComments: true,
      ignoreUrls: true
    }],
    // enforce a maximum number of lines per file
    'max-lines': 0,
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 0,
    // limits the number of parameters that can be used in the function declaration.
    'max-params': [0, 3],
    // specify the maximum number of statement allowed in a function
    'max-statements': [0, 10],
    // specify the maximum number of statements allowed per line
    'max-statements-per-line': [2, { max: 1 }],
    // enforce a particular style for multiline comments
    'multiline-comment-style': 0,
    // enforce newlines between operands of ternary expressions
    'multiline-ternary': 0,
    // require a capital letter for constructors
    'new-cap': [2, { newIsCap: true }],
    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 2,
    // enforce newline after each call when chaining the calls
    'newline-per-chained-call': 0,
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
    // disallow mixed binary operators
    'no-mixed-operators': 2,
    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 2,
    // disallow use of chained assignment expressions
    'no-multi-assign': 2,
    // disallow multiple empty lines
    'no-multiple-empty-lines': [2, { max: 2 }],
    // disallow negated conditions
    'no-negated-condition': 2,
    // disallow nested ternary expressions
    'no-nested-ternary': 2,
    // disallow use of the `Object` constructor
    'no-new-object': 2,
    // disallow use of unary operators, `++` and `--`
    'no-plusplus': 0,
    // disallow use of certain syntax in code
    'no-restricted-syntax': 0,
    // disallow all tabs
    'no-tabs': 2,
    // disallow the use of ternary operators
    'no-ternary': 0,
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 2,
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 0,
    // disallow the use of `Boolean` literals in conditional expressions
    'no-unneeded-ternary': 2,
    // disallow whitespace before properties
    'no-whitespace-before-property': 2,
    // enforce the location of single-line statements
    'nonblock-statement-body-position': 2,
    // enforce consistent line breaks inside braces
    'object-curly-newline': 0,
    // require or disallow padding inside curly braces
    'object-curly-spacing': [2, 'always'],
    // enforce placing object properties on separate lines
    'object-property-newline': 2,
    // allow just one var statement per function
    'one-var': [2, 'never'],
    // require or disallow an newline around variable declarations
    'one-var-declaration-per-line': [2, 'initializations'],
    // require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': 0,
    // enforce operators to be placed before or after line breaks
    'operator-linebreak': [2, 'after'],
    // enforce padding within blocks
    'padded-blocks': [2, { blocks: 'never' }],
    // require or disallow padding lines between statements
    'padding-line-between-statements': [1,
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*'
      },
      {
        blankLine: 'any',
        prev: 'directive',
        next: 'directive'
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*'
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }],
    // require quotes around object literal property names
    'quote-props': [2, 'consistent-as-needed'],
    // specify whether double or single quotes should be used
    'quotes': [2, 'single', 'avoid-escape'],
    // require JSDoc comment
    'require-jsdoc': [2, { require: {
      FunctionDeclaration: true,
      MethodDefinition: false,
      ClassDeclaration: false
    } }],
    // require or disallow use of semicolons instead of ASI
    'semi': [2, 'always'],
    // enforce spacing before and after semicolons
    'semi-spacing': [2, {
      before: false,
      after: true
    }],
    // enforce location of semicolons
    'semi-style': 2,
    // require object keys to be sorted
    'sort-keys': 0,
    // sort variables within the same declaration block
    'sort-vars': 0,
    // require or disallow space before blocks
    'space-before-blocks': 2,
    // require or disallow space before function opening parenthesis
    'space-before-function-paren': [2, 'never'],
    // require or disallow spaces inside parentheses
    'space-in-parens': 2,
    // require spaces around operators
    'space-infix-ops': 2,
    // Require or disallow spaces before/after unary operators
    'space-unary-ops': 0,
    // require or disallow a space immediately following the `//` or `/*` in a comment
    'spaced-comment': [2, 'always', {
      exceptions: ['-', '+'],
      markers: ['=', '!'] // space here to support sprockets directives
    }],
    // enforce spacing around colons of switch statements
    'switch-colon-spacing': 2,
    // require or disallow spacing between template tags and their literals
    'template-tag-spacing': 2,
    // require or disallow Unicode byte order mark (BOM)
    'unicode-bom': 2,
    // require regex literals to be wrapped in parentheses
    'wrap-regex': 0
  }
};
