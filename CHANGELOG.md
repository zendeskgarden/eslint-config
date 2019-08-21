# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
