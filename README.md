# Garden ESLint Config [![npm version][npm version badge]][npm version link] [![Build Status][build status badge]][build status link] [![Dependency Status][dependency status badge]][dependency status link]

[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/eslint-config
[npm version link]: https://www.npmjs.com/package/@zendeskgarden/eslint-config
[build status badge]: https://flat.badgen.net/circleci/github/zendeskgarden/eslint-config/main?label=build
[build status link]: https://circleci.com/gh/zendeskgarden/eslint-config/tree/main
[dependency status badge]: https://flat.badgen.net/david/dev/zendeskgarden/eslint-config?label=dependencies
[dependency status link]: https://david-dm.org/zendeskgarden/eslint-config?type=dev

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

- AirBnB's [JavaScript Style Guide](https://github.com/airbnb/javascript)
- Elie Rotenberg's [ES6 Coding Style](https://github.com/elierotenberg/coding-styles/blob/main/es6.md)

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

Copyright 2020 Zendesk

Licensed under the [Apache License, Version 2.0](LICENSE.md)
