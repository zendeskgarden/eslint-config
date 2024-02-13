/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const bestPractices = require('../rules/best-practices').rules;
const es6 = require('../rules/es6').rules;
const possibleErrors = require('../rules/possible-errors').rules;
const stylisticIssues = require('../rules/stylistic-issues').rules;
const variables = require('../rules/variables').rules;

module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    // Disable ESLint rules that are handled by TypeScript
    'class-methods-use-this': 0,
    'constructor-super': 0,
    'default-param-last': 0,
    'getter-return': 0,
    'init-declarations': 0,
    'keyword-spacing': 0,
    'no-array-constructor': 0,
    'no-const-assign': 0,
    'no-dupe-args': 0,
    'no-dupe-class-members': 0,
    'no-dupe-keys': 0,
    'no-empty-function': 0,
    'no-func-assign': 0,
    'no-import-assign': 0,
    'no-invalid-this': 0,
    'no-loop-func': 0,
    'no-loss-of-precision': 0,
    'no-magic-numbers': 0,
    'no-new-symbol': 0,
    'no-obj-calls': 0,
    'no-redeclare': 0,
    'no-restricted-imports': 0,
    'no-shadow': 0,
    'no-setter-return': 0,
    'no-this-before-super': 0,
    'no-undef': 0,
    'no-use-before-define': 0,
    'no-useless-constructor': 0,
    'no-unreachable': 0,
    'no-unsafe-negation': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': 0,
    'valid-typeof': 0,

    // require that member overloads be consecutive
    '@typescript-eslint/adjacent-overload-signatures': 2,
    // requires using either `T[]` or `Array<T>` for arrays
    '@typescript-eslint/array-type': 1,
    // bans `@ts-<directive>` comments from being used or requires descriptions after directive
    '@typescript-eslint/ban-ts-comment': 2,
    // bans `// tslint:<rule-flag>` comments from being used
    '@typescript-eslint/ban-tslint-comment': 1,
    // bans specific types from being used
    '@typescript-eslint/ban-types': 2,
    // ensures that literals on classes are exposed in a consistent style
    '@typescript-eslint/class-literal-property-style': 2,
    // enforce that class methods utilize `this`
    '@typescript-eslint/class-methods-use-this':
      bestPractices['class-methods-use-this'],
    // enforce or disallow the use of the record type
    '@typescript-eslint/consistent-indexed-object-style': 2,
    // enforces consistent usage of type assertions
    '@typescript-eslint/consistent-type-assertions': 2,
    // consistent with type definition either `interface` or `type`
    '@typescript-eslint/consistent-type-definitions': 0,
    // enforces consistent usage of type imports
    '@typescript-eslint/consistent-type-imports': 0,
    // enforce default parameters to be last
    '@typescript-eslint/default-param-last':
      bestPractices['default-param-last'],
    // require explicit return types on functions and class methods
    '@typescript-eslint/explicit-function-return-type': 1,
    // require explicit accessibility modifiers on class properties and methods
    '@typescript-eslint/explicit-member-accessibility': [
      1,
      { accessibility: 'no-public' }
    ],
    // require explicit return and argument types on exported functions' and classes' public class methods
    '@typescript-eslint/explicit-module-boundary-types': 2,
    // require or disallow initialization in variable declarations
    '@typescript-eslint/init-declarations': variables['init-declarations'],
    // enforce consistent spacing before and after keywords
    '@typescript-eslint/keyword-spacing': stylisticIssues['keyword-spacing'],
    // require a specific member delimiter style for interfaces and type literals
    '@typescript-eslint/member-delimiter-style': 2,
    // require a consistent member declaration order
    '@typescript-eslint/member-ordering': 0,
    // enforces using a particular method signature syntax
    '@typescript-eslint/method-signature-style': 2,
    // enforces naming conventions for everything across a codebase
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
    // disallow generic `Array` constructors
    '@typescript-eslint/no-array-constructor':
      stylisticIssues['no-array-constructor'],
    // disallow non-null assertion in locations that may be confusing
    '@typescript-eslint/no-confusing-non-null-assertion': 2,
    // disallow duplicate class members
    '@typescript-eslint/no-dupe-class-members': es6['no-dupe-class-members'],
    // disallow the delete operator with computed key expressions
    '@typescript-eslint/no-dynamic-delete': 2,
    // disallow empty functions
    '@typescript-eslint/no-empty-function': bestPractices['no-empty-function'],
    // disallow the declaration of empty interfaces
    '@typescript-eslint/no-empty-interface': 2,
    // disallow usage of the `any` type
    '@typescript-eslint/no-explicit-any': 2,
    // disallow extra non-null assertion
    '@typescript-eslint/no-extra-non-null-assertion': 2,
    // forbids the use of classes as namespaces
    '@typescript-eslint/no-extraneous-class': 2,
    // disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
    '@typescript-eslint/no-inferrable-types': 2,
    // disallow `this` keywords outside of classes or class-like objects
    '@typescript-eslint/no-invalid-this': bestPractices['no-invalid-this'],
    // disallows usage of `void` type outside of generic or return types
    '@typescript-eslint/no-invalid-void-type': 2,
    // disallow function declarations that contain unsafe references inside loop statements
    '@typescript-eslint/no-loop-func': bestPractices['no-loop-func'],
    // disallow literal numbers that lose precision
    '@typescript-eslint/no-loss-of-precision':
      possibleErrors['no-loss-of-precision'],
    // disallow magic numbers
    '@typescript-eslint/no-magic-numbers': bestPractices['no-magic-numbers'],
    // enforce valid definition of `new` and `constructor`
    '@typescript-eslint/no-misused-new': 2,
    // disallow the use of custom TypeScript modules and namespaces
    '@typescript-eslint/no-namespace': 2,
    // disallows using a non-null assertion after an optional chain expression
    '@typescript-eslint/no-non-null-asserted-optional-chain': 2,
    // disallows using the non-null assertion on the left operand of the nullish coalescing operator
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 2,
    // disallows non-null assertions using the `!` postfix operator
    '@typescript-eslint/no-non-null-assertion': 0,
    // disallow variable redeclaration
    '@typescript-eslint/no-redeclare': bestPractices['no-redeclare'],
    // disallows invocation of `require()`
    '@typescript-eslint/no-require-imports': 2,
    // restrict usage of specified node imports
    '@typescript-eslint/no-restricted-imports': es6['no-restricted-imports'],
    // disallow variable declarations from shadowing variables declared in the outer scope
    '@typescript-eslint/no-shadow': variables['no-shadow'],
    // disallow aliasing `this`
    '@typescript-eslint/no-this-alias': 2,
    // disallow the use of type aliases
    '@typescript-eslint/no-type-alias': 0,
    // disallows unnecessary constraints on generic type
    '@typescript-eslint/no-unnecessary-type-constraint': 2,
    // disallows erging between classes and interfaces
    '@typescript-eslint/no-unsafe-declaration-merging': 2,
    // disallow unused expressions
    '@typescript-eslint/no-unused-expressions':
      bestPractices['no-unused-expressions'],
    // disallow unused variables
    '@typescript-eslint/no-unused-vars': variables['no-unused-vars'],
    // disallow the use of variables before they are defined
    '@typescript-eslint/no-use-before-define':
      variables['no-use-before-define'],
    // disallow unnecessary empty export
    '@typescript-eslint/no-useless-empty-export': 2,
    // disallow unnecessary constructors
    '@typescript-eslint/no-useless-constructor': es6['no-useless-constructor'],
    // disallows the use of require statements except in import statements
    '@typescript-eslint/no-var-requires': 2,
    // prefer usage of `as const` over literal type
    '@typescript-eslint/prefer-as-const': 2,
    // prefer initializing each enums member value
    '@typescript-eslint/prefer-enum-initializers': 2,
    // prefer `Array.find()` when finding an element in an array
    '@typescript-eslint/prefer-find': 2,
    // prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
    '@typescript-eslint/prefer-for-of': 2,
    // use function types instead of interfaces with call signatures
    '@typescript-eslint/prefer-function-type': 2,
    // require that all enum members be literal values to prevent unintended enum member name shadow issues
    '@typescript-eslint/prefer-literal-enum-member': 1,
    // require the use of the `namespace` keyword instead of the `module` keyword to declare custom TypeScript modules
    '@typescript-eslint/prefer-namespace-keyword': 2,
    // prefer using concise optional chain expressions instead of chained logical ands
    '@typescript-eslint/prefer-optional-chain': 0,
    // recommends using `@ts-expect-error` over `@ts-ignore`
    '@typescript-eslint/prefer-ts-expect-error': 2,
    // sets preference level for triple slash directives versus ES6-style import declarations
    '@typescript-eslint/triple-slash-reference': 2,
    // require consistent spacing around type annotations
    '@typescript-eslint/type-annotation-spacing': 2,
    // requires type annotations to exist
    '@typescript-eslint/typedef': 2,
    // warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
    '@typescript-eslint/unified-signatures': 2
  }
};
