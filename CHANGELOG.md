# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [39.0.0](https://github.com/zendeskgarden/eslint-config/compare/v38.0.0...v39.0.0) (2024-03-29)

## [38.0.0](https://github.com/zendeskgarden/eslint-config/compare/v37.0.0...v38.0.0) (2024-02-15)


### ⚠ BREAKING CHANGES

* **deps:** updated dependency requirements

- bumped `@typescript-eslint/eslint-plugin` and `@typescript-eslint/eslint-parser` minimum version requirements for ESLint, NodeJS, and TS
* **deps:** updated dependency requirements
    
- added new `@typescript-eslint/eslint-plugin` 6.21.0 rules: `prefer-find`
    

* **deps:** update all non-major dependencies ([#222](https://github.com/zendeskgarden/eslint-config/issues/222)) ([510138d](https://github.com/zendeskgarden/eslint-config/commit/510138d401367b5c9a4cadc7716b406fbc55b664))
* **deps:** update typescript-eslint monorepo to v7 ([#223](https://github.com/zendeskgarden/eslint-config/issues/223)) ([baf9c81](https://github.com/zendeskgarden/eslint-config/commit/baf9c810b230e9bec5f49c688227af79252e7b81))

## [37.0.0](https://github.com/zendeskgarden/eslint-config/compare/v36.0.0...v37.0.0) (2024-01-19)


### ⚠ BREAKING CHANGES

* **deps:** updated dependency requirements

- added new `@typescript-eslint/eslint-plugin` 6.19.0 rules: `no-array-delete` and `prefer-promise-reject-errors`

* **deps:** update all non-major dependencies ([#215](https://github.com/zendeskgarden/eslint-config/issues/215)) ([5341cb6](https://github.com/zendeskgarden/eslint-config/commit/5341cb6125f21e27e5b99af759ffe44de431b9db))

## [36.0.0](https://github.com/zendeskgarden/eslint-config/compare/v35.0.0...v36.0.0) (2023-12-21)


### ⚠ BREAKING CHANGES

* **deps:** updated peer dependency requirements

- removed deprecated `eslint` 8.56.0 formatting rules; see https://eslint.org/blog/2023/10/deprecating-formatting-rules/
- added new `@typescript-eslint/eslint-plugin` 6.15.0 rules: `no-unsafe-unary-minus`, `no-useless-template-literals`, `prefer-destructuring`

* **deps:** update all non-major dependencies ([#214](https://github.com/zendeskgarden/eslint-config/issues/214)) ([d710a79](https://github.com/zendeskgarden/eslint-config/commit/d710a793c68e6d4ff489ddd1560bd34256fd699c))

## [35.0.0](https://github.com/zendeskgarden/eslint-config/compare/v34.0.0...v35.0.0) (2023-09-26)


### ⚠ BREAKING CHANGES

* **deps:** updated peer dependency requirements

- removed deprecated and added new `no-object-constructor` `eslint` 8.50.0 rule
- added new `class-methods-use-this` `@typescript-eslint/eslint-plugin` 6.2.0 rule
- upgraded from `yarn` to `npm`

* **deps:** update all non-major dependencies ([#212](https://github.com/zendeskgarden/eslint-config/issues/212)) ([6865e54](https://github.com/zendeskgarden/eslint-config/commit/6865e54c781893ed7b85643dc9e0061f2bfdfcf8))

## [34.0.0](https://github.com/zendeskgarden/eslint-config/compare/v33.0.0...v34.0.0) (2023-07-18)


### ⚠ BREAKING CHANGES

* **deps:** previously `@typescript-eslint` deprecated rules were deleted. See https://typescript-eslint.io/blog/announcing-typescript-eslint-v6/#rule-breaking-changes

* **deps:** update typescript-eslint monorepo to v6 (major) ([#211](https://github.com/zendeskgarden/eslint-config/issues/211)) ([944909a](https://github.com/zendeskgarden/eslint-config/commit/944909ab11393652a200caf998b3e1c13438e517))

## [33.0.0](https://github.com/zendeskgarden/eslint-config/compare/v32.0.0...v33.0.0) (2023-07-12)


### ⚠ BREAKING CHANGES

* **deps:** update all non-major dependencies (#208)
- sets @typescript-eslint/no-duplicate-type-constituents to error
- sets @typescript-eslint/no-unsafe-enum-comparison to error

* **deps:** update all non-major dependencies ([#208](https://github.com/zendeskgarden/eslint-config/pull/208)) ([7fc46aa](https://github.com/zendeskgarden/eslint-config/commit/7fc46aa5627d1da0a335f93547f6b89e4f3765f2))

## [32.0.0](https://github.com/zendeskgarden/eslint-config/compare/v31.0.0...v32.0.0) (2023-02-02)


### ⚠ BREAKING CHANGES

* **rules:** adds new rules missed in v31 (#205)

* **rules:** adds new rules missed in v31 ([#205](https://github.com/zendeskgarden/eslint-config/issues/205)) ([02bba24](https://github.com/zendeskgarden/eslint-config/commit/02bba24b89bb9c7ed1d5f9bf82f82dbfdb4b7f59))

## [31.0.0](https://github.com/zendeskgarden/eslint-config/compare/v30.0.0...v31.0.0) (2023-01-31)


### ⚠ BREAKING CHANGES

* **deps:** update all non-major dependencies (#202)

* **deps:** update all non-major dependencies ([#202](https://github.com/zendeskgarden/eslint-config/issues/202)) ([8c195c3](https://github.com/zendeskgarden/eslint-config/commit/8c195c38ab24937712f9c36c150ad9467625dba6))

## [30.0.0](https://github.com/zendeskgarden/eslint-config/compare/v29.0.0...v30.0.0) (2022-12-13)


### ⚠ BREAKING CHANGES

* **deps:** deps: adds new eslint rules:
- sets no-empty-static-block to error
- sets no-new-native-nonconstructor to error

deps: adds new typescript-eslint rules:
- sets no-unsafe-declaration-merging to error

Co-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>
Co-authored-by: george treviranus <geowtrev@gmail.com>

* **deps:** update all non-major dependencies ([#201](https://github.com/zendeskgarden/eslint-config/issues/201)) ([c5da9ea](https://github.com/zendeskgarden/eslint-config/commit/c5da9ea9ccbf0366ae6920c9fc7a3778bf374ff8))

## [29.0.0](https://github.com/zendeskgarden/eslint-config/compare/v28.0.0...v29.0.0) (2022-10-05)


### ⚠ BREAKING CHANGES

* **deps:** remove jest v27.0.0 `jest/no-jest-import` rule

Co-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>
Co-authored-by: Jonathan Zempel <jzempel@gmail.com>
* **deps:** update all non-major dependencies (#198)

* **deps:** update all non-major dependencies ([#198](https://github.com/zendeskgarden/eslint-config/issues/198)) ([e870d42](https://github.com/zendeskgarden/eslint-config/commit/e870d4242aaf51d7956b5a7cac3db5c197165f30))
* **deps:** update dependency eslint-plugin-jest to v27 ([#200](https://github.com/zendeskgarden/eslint-config/issues/200)) ([9b4d0b2](https://github.com/zendeskgarden/eslint-config/commit/9b4d0b2396a31dcdb626ea01bb71d99b4bdf942e))

## [28.0.0](https://github.com/zendeskgarden/eslint-config/compare/v27.0.1...v28.0.0) (2022-04-11)


### ⚠ BREAKING CHANGES

* **deps:** update all non-major dependencies (#192)

* **deps:** update all non-major dependencies ([#192](https://github.com/zendeskgarden/eslint-config/issues/192)) ([2c9e964](https://github.com/zendeskgarden/eslint-config/commit/2c9e964e38476c4d16c721dfabe06eead6727dde))

### [27.0.1](https://github.com/zendeskgarden/eslint-config/compare/v27.0.0...v27.0.1) (2022-02-25)

## [27.0.0](https://github.com/zendeskgarden/eslint-config/compare/v26.0.0...v27.0.0) (2021-12-28)


### ⚠ BREAKING CHANGES

* **deps:** - sets `eslint` peer dependency to `^8.5.0`
- adds `prefer-object-has-own` rule set to warning

Co-authored-by: Renovate Bot <bot@renovateapp.com>
Co-authored-by: Jonathan Zempel <jzempel@gmail.com>

* **deps:** update to eslint 8.5.0 ([#182](https://github.com/zendeskgarden/eslint-config/issues/182)) ([92c84f9](https://github.com/zendeskgarden/eslint-config/commit/92c84f9136652cd6ede96385cff76c08d4cdc94d))

## [26.0.0](https://github.com/zendeskgarden/eslint-config/compare/v25.0.0...v26.0.0) (2021-11-17)


### ⚠ BREAKING CHANGES

* **deps:** add new `eslint-plugin-react` v7.27.0 rules:
- `no-unused-class-component-methods`
- `no-arrow-function-lifecycle`
- `no-invalid-html-attribute`

Plugin dependency versions:
- `@typescript-eslint/eslint-plugin` ^5.0.0
- `@typescript-eslint/parser` ^5.0.0
- `eslint-plugin-jest` ^25.2.0
- `eslint-plugin-jsx-a11y` ^6.4.0
- `eslint-plugin-react` ^7.27.0
- `eslint-plugin-react-hooks` ^4.3.0

Co-authored-by: Renovate Bot <bot@renovateapp.com>
Co-authored-by: Jonathan Zempel <jzempel@gmail.com>

* **deps:** update all non-major dependencies ([#180](https://github.com/zendeskgarden/eslint-config/issues/180)) ([ec3c4d6](https://github.com/zendeskgarden/eslint-config/commit/ec3c4d616e64e60b7b363e2c06dd02350c26a761))

## [25.0.0](https://github.com/zendeskgarden/eslint-config/compare/v24.0.0...v25.0.0) (2021-11-05)


### ⚠ BREAKING CHANGES

* **deps:** upgrade to `eslint` 8.1.0 with new `no-unused-private-class-members` rule.

Plugin dependency versions:
- `@typescript-eslint/eslint-plugin` ^5.0.0
- `@typescript-eslint/parser` ^5.0.0
- `eslint-plugin-jest` ^25.2.0
- `eslint-plugin-jsx-a11y` ^6.4.0
- `eslint-plugin-react` ^7.26.0
- `eslint-plugin-react-hooks` ^4.2.1-alpha

Co-authored-by: Renovate Bot <bot@renovateapp.com>
Co-authored-by: Jonathan Zempel <jzempel@gmail.com>

* **deps:** update all non-major dependencies ([#178](https://github.com/zendeskgarden/eslint-config/issues/178)) ([687ec87](https://github.com/zendeskgarden/eslint-config/commit/687ec87cf17986b2c60e4c9e36d4f3433470ac66))

## [24.0.0](https://github.com/zendeskgarden/eslint-config/compare/v23.0.0...v24.0.0) (2021-10-19)


### ⚠ BREAKING CHANGES

* switch from `babel-eslint` to `@babel/eslint-parser` (#176)

* switch from `babel-eslint` to `@babel/eslint-parser` ([#176](https://github.com/zendeskgarden/eslint-config/issues/176)) ([59d9042](https://github.com/zendeskgarden/eslint-config/commit/59d904289028fbd770ef8959feb09d6db9854271))

## [23.0.0](https://github.com/zendeskgarden/eslint-config/compare/v22.0.0...v23.0.0) (2021-10-16)


### ⚠ BREAKING CHANGES

* **deps:** upgrade to `eslint` v8.0.0.

Plugin dependency versions:
- `@typescript-eslint/eslint-plugin` ^5.0.0
- `@typescript-eslint/parser` ^5.0.0
- `eslint-plugin-jest` ^25.2.0
- `eslint-plugin-jsx-a11y` ^6.4.0
- `eslint-plugin-react` ^7.26.0
- `eslint-plugin-react-hooks` ^4.2.0

Co-authored-by: Renovate Bot <bot@renovateapp.com>
Co-authored-by: Jonathan Zempel <jzempel@gmail.com>
* **deps:** add `jest/require-hook` rule.

Plugin dependency versions:
- `@typescript-eslint/eslint-plugin` ^4.33.0
- `eslint-plugin-jest` ^24.7.0
- `eslint-plugin-jsx-a11y` ^6.4.0
- `eslint-plugin-react` ^7.26.0
- `eslint-plugin-react-hooks` ^4.2.0

Co-authored-by: Renovate Bot <bot@renovateapp.com>
Co-authored-by: Jonathan Zempel <jzempel@gmail.com>

* **deps:** update all non-major dependencies ([#172](https://github.com/zendeskgarden/eslint-config/issues/172)) ([daf7799](https://github.com/zendeskgarden/eslint-config/commit/daf7799e4d8e5cccfa2982e6e5005bd4e8bb4332))
* **deps:** update dependency eslint to v8 ([#173](https://github.com/zendeskgarden/eslint-config/issues/173)) ([c22840b](https://github.com/zendeskgarden/eslint-config/commit/c22840bfb61ea2f2ce295612538b19db67bcba91))

## [22.0.0](https://github.com/zendeskgarden/eslint-config/compare/v21.0.0...v22.0.0) (2021-10-07)


### ⚠ BREAKING CHANGES

* added
- @typescript-eslint/no-non-null-asserted-nullish-coalescing
- @typescript-eslint/no-restricted-imports
- jest/prefer-expect-resolves
- jest/prefer-to-be
- react/no-namespace
* add `react/prefer-exact-props` rule.

Plugin dependency versions:
    - `@typescript-eslint/eslint-plugin` ^4.30.0
    - `eslint-plugin-jsx-a11y` ^6.4.0
    - `eslint-plugin-react` ^7.25.0
    - `eslint-plugin-react-hooks` ^4.2.0

### Features

* add new rules for jest, react, and typescript ([#171](https://github.com/zendeskgarden/eslint-config/issues/171)) ([82f34e8](https://github.com/zendeskgarden/eslint-config/commit/82f34e8fb52b850244618e2b1417bacaaeae74f6))
* add react/prefer-exact-props rule ([#165](https://github.com/zendeskgarden/eslint-config/issues/165)) ([59964c6](https://github.com/zendeskgarden/eslint-config/commit/59964c684dbc2a998b194eb50fb84a56c45fde0e))

## [21.0.0](https://github.com/zendeskgarden/eslint-config/compare/v20.0.0...v21.0.0) (2021-08-17)


### ⚠ BREAKING CHANGES

* add `@typescript-eslint/prefer-return-this-type` rule.

Plugin dependency versions:
- `@typescript-eslint/eslint-plugin` ^4.29.0
- `eslint-plugin-jsx-a11y` ^6.4.0
- `eslint-plugin-react` ^7.22.0
- `eslint-plugin-react-hooks` ^4.2.0

### Features

* add @typescript-eslint/prefer-return-this-type rule ([#161](https://github.com/zendeskgarden/eslint-config/issues/161)) ([d37238f](https://github.com/zendeskgarden/eslint-config/commit/d37238f8ec241ad7a48ee74ad756e50b3b23a36c))

## [20.0.0](https://github.com/zendeskgarden/eslint-config/compare/v19.0.0...v20.0.0) (2021-04-26)


### ⚠ BREAKING CHANGES

* add `@typescript-eslint/no-unsafe-argument` rule.

Plugin dependency versions:
- `@typescript-eslint/eslint-plugin` ^4.22.0
- `eslint-plugin-jsx-a11y` ^6.4.0
- `eslint-plugin-react` ^7.22.0
- `eslint-plugin-react-hooks` ^4.2.0

### Features

* add @typescript-eslint/no-unsafe-argument rule ([#147](https://github.com/zendeskgarden/eslint-config/issues/147)) ([5255332](https://github.com/zendeskgarden/eslint-config/commit/52553326de8e0496cf66c26bf5a650a148cd038d))


### Bug Fixes

* prevent husky from running on postinstall ([#143](https://github.com/zendeskgarden/eslint-config/issues/143)) ([40d4cca](https://github.com/zendeskgarden/eslint-config/commit/40d4cca568c7cb66ab8c0042a1dfb57a86d7e4ff))

## [19.0.0](https://github.com/zendeskgarden/eslint-config/compare/v18.0.0...v19.0.0) (2021-01-20)


### ⚠ BREAKING CHANGES

* **deps:** add `@typescript-eslint/object-curly-spacing` rule.

Plugin dependency versions:
- `@typescript-eslint/eslint-plugin` ^4.14.0
- `eslint-plugin-jsx-a11y` ^6.4.0
- `eslint-plugin-react` ^7.22.0
- `eslint-plugin-react-hooks` ^4.2.0

Co-authored-by: Renovate Bot <bot@renovateapp.com>
Co-authored-by: Jonathan Zempel <jzempel@gmail.com>

* **deps:** update all non-major dependencies ([#135](https://github.com/zendeskgarden/eslint-config/issues/135)) ([48bc8b7](https://github.com/zendeskgarden/eslint-config/commit/48bc8b75b8516857fb92424cee629c90aede4a8a))

## [18.0.0](https://github.com/zendeskgarden/eslint-config/compare/v17.1.0...v18.0.0) (2021-01-06)


### ⚠ BREAKING CHANGES

* **deps:** add `react/jsx-no-constructed-context-values` and `@typescript-eslint/sort-type-union-intersection-members` rules.

Plugin dependency versions:
- `@typescript-eslint/eslint-plugin` ^4.12.0
- `eslint-plugin-jsx-a11y` ^6.4.0
- `eslint-plugin-react` ^7.22.0
- `eslint-plugin-react-hooks` ^4.2.0

Co-authored-by: Renovate Bot <bot@renovateapp.com>
Co-authored-by: Jonathan Zempel <jzempel@gmail.com>

* **deps:** update all non-major dependencies ([#134](https://github.com/zendeskgarden/eslint-config/issues/134)) ([d561d8b](https://github.com/zendeskgarden/eslint-config/commit/d561d8b934de2155461163f1aa6ebd1361445483))

## [17.1.0](https://github.com/zendeskgarden/eslint-config/compare/v17.0.0...v17.1.0) (2021-01-04)


### Features

* add TypeScript, React, and Jest plugins ([#132](https://github.com/zendeskgarden/eslint-config/issues/132)) ([8762f52](https://github.com/zendeskgarden/eslint-config/commit/8762f52d0d1eeef564671e461de19fa14b0ea8f0))

## [17.0.0](https://github.com/zendeskgarden/eslint-config/compare/v16.0.0...v17.0.0) (2020-12-22)


### ⚠ BREAKING CHANGES

* **deps:** add new `no-unsafe-optional-chaining` rule

Co-authored-by: Renovate Bot <bot@renovateapp.com>
Co-authored-by: Jonathan Zempel <jzempel@gmail.com>

* **deps:** update all non-major dependencies ([#130](https://github.com/zendeskgarden/eslint-config/issues/130)) ([8d83e36](https://github.com/zendeskgarden/eslint-config/commit/8d83e3662b68c038b8b3744d2dc0627b9f91e661))

## [16.0.0](https://github.com/zendeskgarden/eslint-config/compare/v15.0.0...v16.0.0) (2020-12-05)


### ⚠ BREAKING CHANGES

* **deps:** update dependency eslint to v7.14.0 (#128)

* **deps:** update dependency eslint to v7.14.0 ([#128](https://github.com/zendeskgarden/eslint-config/issues/128)) ([523dee3](https://github.com/zendeskgarden/eslint-config/commit/523dee3420ff26598435b1e515e5e3471e97eac5))

## [15.0.0](https://github.com/zendeskgarden/eslint-config/compare/v14.0.1...v15.0.0) (2020-07-29)


### ⚠ BREAKING CHANGES

* **deps:** update dependency eslint to v7.5.0 (#118)

* **deps:** update dependency eslint to v7.5.0 ([#118](https://github.com/zendeskgarden/eslint-config/issues/118)) ([d906672](https://github.com/zendeskgarden/eslint-config/commit/d906672bcead95f1da615dd9090155202f6b3782))

### [14.0.1](https://github.com/zendeskgarden/eslint-config/compare/v14.0.0...v14.0.1) (2020-07-15)


### Bug Fixes

* eslint peer dependency ([#115](https://github.com/zendeskgarden/eslint-config/issues/115)) ([c786abf](https://github.com/zendeskgarden/eslint-config/commit/c786abfedc9c3be05dd6214da47e96518e69dc41))

## [14.0.0](https://github.com/zendeskgarden/eslint-config/compare/v13.0.0...v14.0.0) (2020-07-07)


### ⚠ BREAKING CHANGES

* **deps:** adds rules for `no-promise-executor-return` and `no-unreachable-loop`.

Co-authored-by: Renovate Bot <bot@renovateapp.com>
Co-authored-by: Jonathan Zempel <jzempel@gmail.com>

* **deps:** update dependency eslint to 7.4.0 ([#112](https://github.com/zendeskgarden/eslint-config/issues/112)) ([1ebb3c8](https://github.com/zendeskgarden/eslint-config/commit/1ebb3c8e91f8b52dbc2b66105355eac73f2e16de))

## [13.0.0](https://github.com/zendeskgarden/eslint-config/compare/v12.0.1...v13.0.0) (2020-05-26)


### ⚠ BREAKING CHANGES

* **deps:** update dependency eslint to v7.1.0 (#108)

* **deps:** update dependency eslint to v7.1.0 ([#108](https://github.com/zendeskgarden/eslint-config/issues/108)) ([64b8b3d](https://github.com/zendeskgarden/eslint-config/commit/64b8b3dfaa7d10f5b54a71761250614bc69848c4))

### [12.0.1](https://github.com/zendeskgarden/eslint-config/compare/v12.0.0...v12.0.1) (2020-05-16)


### Bug Fixes

* dial back overly aggressive node plugin rules ([#106](https://github.com/zendeskgarden/eslint-config/issues/106)) ([d75d147](https://github.com/zendeskgarden/eslint-config/commit/d75d147a10b566c56569b02ec35856fed8cdd841))

## [12.0.0](https://github.com/zendeskgarden/eslint-config/compare/v11.0.4...v12.0.0) (2020-05-12)


### ⚠ BREAKING CHANGES

* **deps:** peer dependencies require `eslint: ^7.0.0` and `eslint-plugin-node: ^11.1.0`

* **deps:** update dependency eslint to v7 ([#104](https://github.com/zendeskgarden/eslint-config/issues/104)) ([058a414](https://github.com/zendeskgarden/eslint-config/commit/058a4147832ce5974509123f09ee8ddf8e4dc899))

### [11.0.4](https://github.com/zendeskgarden/eslint-config/compare/v11.0.3...v11.0.4) (2020-04-15)


### Bug Fixes

* `space-before-function-paren` handling for async functions ([#100](https://github.com/zendeskgarden/eslint-config/issues/100)) ([14e5b88](https://github.com/zendeskgarden/eslint-config/commit/14e5b889e062793a915e1414472989c26a44098f))
* use default CircleCI node_modules cache ([#97](https://github.com/zendeskgarden/eslint-config/issues/97)) ([d69416a](https://github.com/zendeskgarden/eslint-config/commit/d69416a3a967239a3d7aae00ee843c64c2a18908))

### [11.0.3](https://github.com/zendeskgarden/eslint-config/compare/v11.0.2...v11.0.3) (2020-03-05)

### [11.0.2](https://github.com/zendeskgarden/eslint-config/compare/v11.0.1...v11.0.2) (2020-03-05)

### [11.0.1](https://github.com/zendeskgarden/eslint-config/compare/v11.0.0...v11.0.1) (2019-12-19)


### Bug Fixes

* eslint peer dependency version ([#85](https://github.com/zendeskgarden/eslint-config/issues/85)) ([7bd188d](https://github.com/zendeskgarden/eslint-config/commit/7bd188d96712e32b9eb7d44ab6cbc8ce8c749a62))

## [11.0.0](https://github.com/zendeskgarden/eslint-config/compare/v10.0.0...v11.0.0) (2019-11-25)


### ⚠ BREAKING CHANGES

* **deps:** added
- `grouped-accessor-pairs`
- `no-constructor-return`
- `no-dupe-else-if`
- `no-setter-return`
- `prefer-exponentiation-operator`

* **deps:** update all non-major dependencies ([#82](https://github.com/zendeskgarden/eslint-config/issues/82)) ([5da6506](https://github.com/zendeskgarden/eslint-config/commit/5da6506373cabde7b5f84080ee53a1467e8c09b7))

## [10.0.0](https://github.com/zendeskgarden/eslint-config/compare/v9.0.0...v10.0.0) (2019-09-17)


### ⚠ BREAKING CHANGES

* **deps:** add new rules that require eslint 6.4.0 or greater.

* **deps:** update dependency eslint to v6.4.0 ([#75](https://github.com/zendeskgarden/eslint-config/issues/75)) ([db633aa](https://github.com/zendeskgarden/eslint-config/commit/db633aa))

## [9.0.0](https://github.com/zendeskgarden/eslint-config/compare/v8.0.0...v9.0.0) (2019-09-03)


### ⚠ BREAKING CHANGES

* **deps:** add new `reportUnusedDisableDirectives` configuration setting (warns if detected)

* **deps:** update dependency eslint to v6.3.0 ([#73](https://github.com/zendeskgarden/eslint-config/issues/73)) ([b985a80](https://github.com/zendeskgarden/eslint-config/commit/b985a80))

## [8.0.0](https://github.com/zendeskgarden/eslint-config/compare/v7.2.2...v8.0.0) (2019-08-21)


### ⚠ BREAKING CHANGES

* **deps:** peer dependency bumped to `eslint: ^6.2.0` and updated config will throw a lint error on inconsistent `function-call-argument-newline` rule.

* **deps:** update dependency eslint to v6.2.1 ([#68](https://github.com/zendeskgarden/eslint-config/issues/68)) ([c5104e1](https://github.com/zendeskgarden/eslint-config/commit/c5104e1))

### [7.2.2](https://github.com/zendeskgarden/eslint-config/compare/v7.2.1...v7.2.2) (2019-07-01)



## [7.2.1](https://github.com/zendeskgarden/eslint-config/compare/v7.2.0...v7.2.1) (2019-04-02)



# [7.2.0](https://github.com/zendeskgarden/eslint-config/compare/v7.1.2...v7.2.0) (2019-03-06)



## [7.1.2](https://github.com/zendeskgarden/eslint-config/compare/v7.1.1...v7.1.2) (2019-02-21)



<a name="7.1.1"></a>
## [7.1.1](https://github.com/zendeskgarden/eslint-config/compare/v7.1.0...v7.1.1) (2019-02-04)



<a name="7.1.0"></a>
# [7.1.0](https://github.com/zendeskgarden/eslint-config/compare/v7.0.10...v7.1.0) (2019-01-09)


### Features

* upgrade to support eslint 5.12.x ([#39](https://github.com/zendeskgarden/eslint-config/issues/39)) ([3c93aee](https://github.com/zendeskgarden/eslint-config/commit/3c93aee))



<a name="7.0.10"></a>
## [7.0.10](https://github.com/zendeskgarden/eslint-config/compare/v7.0.9...v7.0.10) (2018-12-10)



<a name="7.0.9"></a>
## [7.0.9](https://github.com/zendeskgarden/eslint-config/compare/v7.0.8...v7.0.9) (2018-11-14)



<a name="7.0.8"></a>
## [7.0.8](https://github.com/zendeskgarden/eslint-config/compare/v7.0.7...v7.0.8) (2018-10-30)



<a name="7.0.7"></a>
## [7.0.7](https://github.com/zendeskgarden/eslint-config/compare/v7.0.6...v7.0.7) (2018-10-15)



<a name="7.0.6"></a>
## [7.0.6](https://github.com/zendeskgarden/eslint-config/compare/v7.0.5...v7.0.6) (2018-09-24)



<a name="7.0.5"></a>
## [7.0.5](https://github.com/zendeskgarden/eslint-config/compare/v7.0.4...v7.0.5) (2018-09-04)



<a name="7.0.4"></a>
## [7.0.4](https://github.com/zendeskgarden/eslint-config/compare/v7.0.3...v7.0.4) (2018-08-20)



<a name="7.0.3"></a>
## [7.0.3](https://github.com/zendeskgarden/eslint-config/compare/v7.0.2...v7.0.3) (2018-08-15)


### Bug Fixes

* update the `eslint` peer dependency ([#20](https://github.com/zendeskgarden/eslint-config/issues/20)) ([1a8203f](https://github.com/zendeskgarden/eslint-config/commit/1a8203f))



<a name="7.0.2"></a>
## [7.0.2](https://github.com/zendeskgarden/eslint-config/compare/v7.0.1...v7.0.2) (2018-08-13)



<a name="7.0.1"></a>
## [7.0.1](https://github.com/zendeskgarden/eslint-config/compare/v7.0.0...v7.0.1) (2018-08-06)



<a name="7.0.0"></a>
# [7.0.0](https://github.com/zendeskgarden/eslint-config/compare/v6.0.0...v7.0.0) (2018-08-06)


### Features

* upgrade to support eslint 5.3.x ([#17](https://github.com/zendeskgarden/eslint-config/issues/17)) ([4f47f80](https://github.com/zendeskgarden/eslint-config/commit/4f47f80))


### BREAKING CHANGES

* existing code may fail with the addition of the following new rule error checking:
* `require-unicode-regexp`
* `no-async-promise-executor`
* `no-misleading-character-class`
* `require-atomic-updates`



<a name="6.0.0"></a>
# [6.0.0](https://github.com/zendeskgarden/eslint-config/compare/v5.0.2...v6.0.0) (2018-06-11)


### Features

* upgrade to support eslint 5.x ([#15](https://github.com/zendeskgarden/eslint-config/issues/15)) ([39a386f](https://github.com/zendeskgarden/eslint-config/commit/39a386f))


### BREAKING CHANGES

* upgrade eslint peer dependency from `4.18.x` to `5.x`.

* set `parserOptions: { jsx: true }`
* add `max-classes-per-file` configured to error if there is more than one
* add `prefer-object-spread` configured to warn when `Object.assign` is called using an object literal as the first argument



<a name="5.0.2"></a>
## [5.0.2](https://github.com/zendeskgarden/eslint-config/compare/v5.0.1...v5.0.2) (2018-03-21)


### Bug Fixes

* improve package metadata ([#14](https://github.com/zendeskgarden/eslint-config/issues/14)) ([a6e3e66](https://github.com/zendeskgarden/eslint-config/commit/a6e3e66))



<a name="5.0.1"></a>
## [5.0.1](https://github.com/zendeskgarden/eslint-config/compare/v5.0.0...v5.0.1) (2018-03-15)


### Bug Fixes

* add "plugins" folder to published package ([#13](https://github.com/zendeskgarden/eslint-config/issues/13)) ([edc66c0](https://github.com/zendeskgarden/eslint-config/commit/edc66c0))



<a name="5.0.0"></a>
# [5.0.0](https://github.com/zendeskgarden/eslint-config/compare/v4.1.0...v5.0.0) (2018-03-14)


### Features

* prepare for [@zendeskgarden](https://github.com/zendeskgarden) npm publish ([#12](https://github.com/zendeskgarden/eslint-config/issues/12)) ([d3130a5](https://github.com/zendeskgarden/eslint-config/commit/d3130a5))


### BREAKING CHANGES

* package location has moved to the npm registry under `@zendeskgarden/eslint-config`. See the README for installation/upgrade details.



<a name="4.1.0"></a>
# [4.1.0](https://github.com/zendeskgarden/eslint-config/compare/v4.0.0...v4.1.0) (2018-02-21)


### Features

* upgrade to support eslint 4.18.x ([#10](https://github.com/zendeskgarden/eslint-config/issues/10)) ([b38d815](https://github.com/zendeskgarden/eslint-config/commit/b38d815))



<a name="4.0.0"></a>
## [4.0.0] - 2017-11-27
### Changed (per [#9](https://github.com/zendeskgarden/eslint-config/pull/9))
- Upgrade to support eslint 4.x.

### Removed
- The `eslint-plugin-sort-class-members` and rules for class member
  sorting.

## [3.0.1] - 2017-11-10
### Fixed (per [#7](https://github.com/zendeskgarden/eslint-config/pull/7))
- Update `sort-class-members` config to be compatible with newer
  `eslint-plugin-sort-class-members` packages.

## [3.0.0] - 2017-05-26
### Changed (per [#6](https://github.com/zendeskgarden/eslint-config/pull/6))
- Prepared package for registry publish as
  `@zendesk/eslint-config-garden`. See README for updated
  installation and usage.
- Upgrade to support eslint 3.x.

## [2.1.0] - 2016-04-05
### Added (per [#3](https://github.com/zendeskgarden/eslint-config/pull/3))
- Rules for class member sorting.

### Changed
- Upgrade to support eslint 2.5.x.

## [2.0.1] - 2016-02-23
### Fixed (per [#5](https://github.com/zendeskgarden/eslint-config/pull/5))
- Update `operator-linebreak` rule to "after".

## [2.0.0] - 2016-02-22
### Changed (per [#4](https://github.com/zendeskgarden/eslint-config/pull/4))
- Upgrade to support eslint 2.2.x.

## [1.0.0] - 2016-01-04
### Changed (per [#2](https://github.com/zendeskgarden/eslint-config/pull/2))
- Upgrade to support eslint 1.10.x.

## [0.2.1] - 2015-09-05
### Fixed
- Allow short notation type conversions.

## [0.2.0] - 2015-08-31
### Changed (per [#1](https://github.com/zendeskgarden/eslint-config/pull/1))
- Require parentheses around arrow function arguments as-needed.

## 0.1.0 - 2015-08-21

[4.0.0]: https://github.com/zendeskgarden/eslint-config/compare/v3.0.1...v4.0.0
[3.0.1]: https://github.com/zendeskgarden/eslint-config/compare/v3.0.0...v3.0.1
[3.0.0]: https://github.com/zendeskgarden/eslint-config/compare/2.1.0...v3.0.0
[2.1.0]: https://github.com/zendeskgarden/eslint-config/compare/2.0.1...2.1.0
[2.0.1]: https://github.com/zendeskgarden/eslint-config/compare/2.0.0...2.0.1
[2.0.0]: https://github.com/zendeskgarden/eslint-config/compare/1.0.0...2.0.0
[1.0.0]: https://github.com/zendeskgarden/eslint-config/compare/0.2.1...1.0.0
[0.2.1]: https://github.com/zendeskgarden/eslint-config/compare/0.2.0...0.2.1
[0.2.0]: https://github.com/zendeskgarden/eslint-config/compare/0.1.0...0.2.0
