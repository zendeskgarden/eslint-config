# Garden ESLint Config [![npm version](https://img.shields.io/npm/v/@zendeskgarden/eslint-config.svg)](https://www.npmjs.com/package/@zendeskgarden/eslint-config) [![Build Status](https://travis-ci.com/zendeskgarden/eslint-config.svg?token=dDt9s6smCMgz269xNbpz&branch=master)](https://travis-ci.com/zendeskgarden/eslint-config) [![Dependency Status](https://img.shields.io/david/dev/zendeskgarden/eslint-config.svg)](https://david-dm.org/zendeskgarden/eslint-config)

> :seedling: Garden is a design system for Zendesk

This package exposes a [shareable ESLint
config](http://eslint.org/docs/developer-guide/shareable-configs).

## Installation

```sh
npm install --save-dev eslint babel-eslint @zendeskgarden/eslint-config
```

## Usage

Add a `.eslintrc` to your project with an `extends` property like this:

```js
{
  extends: '@zendeskgarden'
}
```

Now Garden linting rules will apply to your project. See the [ESLint
Documentation](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more details on extending shareable configuration files.

## Resources

Shout-outs for a mostly reasonable set of lint rules go to:

* AirBnB's [JavaScript Style Guide](https://github.com/airbnb/javascript)
* Elie Rotenberg's [ES6 Coding Style](https://github.com/elierotenberg/coding-styles/blob/master/es6.md)

## Contribution

Thanks for your interest in Garden! Community involvement helps make our
design system fresh and tasty for everyone.

Got issues with what you find here? Please feel free to create an
[issue](https://github.com/zendeskgarden/eslint-config/issues/new).

If you'd like to take a crack at making some changes, please follow our
[contributing](.github/CONTRIBUTING.md) documentation for details needed
to submit a PR.

Community behavior is benevolently ruled by a [code of
conduct](.github/CODE_OF_CONDUCT.md). Please participate accordingly.

## License

Copyright 2018 Zendesk

Licensed under the [Apache License, Version 2.0](LICENSE.md)
