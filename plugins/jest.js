/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import globals from 'globals';
import jestPlugin from 'eslint-plugin-jest';

export default {
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    jest: jestPlugin
  },
  languageOptions: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    globals: globals.jest
  },
  rules: {
    // have control over `test` and `it` usages
    'jest/consistent-test-it': 0,
    // enforce assertion to be made in a test body
    'jest/expect-expect': 2,
    // disallow alias methods
    'jest/no-alias-methods': 2,
    // disallow commented out tests
    'jest/no-commented-out-tests': 2,
    // prevent calling `expect` conditionally
    'jest/no-conditional-expect': 0,
    // disallow conditionals in test
    'jest/no-conditional-in-test': 0,
    // disallow use of deprecated functions
    'jest/no-deprecated-functions': 2,
    // disallow disabled tests
    'jest/no-disabled-tests': 2,
    // avoid using a callback in asynchronous tests and hooks
    'jest/no-done-callback': 2,
    // disallow duplicate setup and teardown hooks
    'jest/no-duplicate-hooks': 2,
    // disallow using `exports` in files containing tests
    'jest/no-export': 2,
    // disallow focused tests
    'jest/no-focused-tests': 2,
    // disallow setup and teardown hooks
    'jest/no-hooks': 0,
    // disallow identical titles
    'jest/no-identical-title': 2,
    // disallow string interpolation inside snapshots
    'jest/no-interpolation-in-snapshots': 2,
    // disallow Jasmine globals
    'jest/no-jasmine-globals': 2,
    // disallow large snapshots
    'jest/no-large-snapshots': 0,
    // disallow manually importing from `__mocks__`
    'jest/no-mocks-import': 2,
    // disallow specific matchers & modifiers
    'jest/no-restricted-matchers': 0,
    // disallow using `expect` outside of `it` or `test` blocks
    'jest/no-standalone-expect': 2,
    // use `.only` and `.skip` over `f` and `x`
    'jest/no-test-prefixes': 2,
    // disallow explicitly returning from tests
    'jest/no-test-return-statement': 2,
    // Disallow untyped `jest.mock`/`jest.doMock` calls
    'jest/no-untyped-mock-factory': 2,
    // suggest using `toBeCalledWith()` or `toHaveBeenCalledWith()`
    'jest/prefer-called-with': 0,
    // prefer using `.each` rather than manual loops
    'jest/prefer-each': 2,
    // suggest using `expect.assertions()` OR `expect.hasAssertions()`
    'jest/prefer-expect-assertions': 0,
    // suggest `await expect(...).resolves` over `expect(await ...)` syntax
    'jest/prefer-expect-resolves': 2,
    // suggest having hooks before any test cases
    'jest/prefer-hooks-on-top': 0,
    // enforce lowercase test names
    'jest/prefer-lowercase-title': [1, { ignore: ['describe'] }],
    // suggest having a hint for snapshots
    'jest/prefer-snapshot-hint': 1,
    // suggest using `jest.spyOn()`
    'jest/prefer-spy-on': 0,
    // suggest using `toStrictEqual()`
    'jest/prefer-strict-equal': 1,
    // suggest using `toBe()` for primitive literals
    'jest/prefer-to-be': 2,
    // suggest using `toContain()`
    'jest/prefer-to-contain': 2,
    // suggest using `toHaveLength()`
    'jest/prefer-to-have-length': 2,
    // suggest using `test.todo`
    'jest/prefer-todo': 1,
    // require setup and teardown code to be within a hook
    'jest/require-hook': 2,
    // require a message for `toThrow()`
    'jest/require-to-throw-message': 0,
    // require test cases and hooks to be inside a `describe` block
    'jest/require-top-level-describe': 2,
    // enforce valid `describe()` callback
    'jest/valid-describe-callback': 2,
    // enforce valid `expect()` usage
    'jest/valid-expect': 2,
    // enforce having return statement when testing with promises
    'jest/valid-expect-in-promise': 2,
    // enforce valid titles
    'jest/valid-title': 2
  }
};
