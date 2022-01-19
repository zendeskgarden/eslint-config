# Garden ESLint Config [![npm version][npm version badge]][npm version link] [![Build Status][build status badge]][build status link] [![Dependency Status][dependency status badge]][dependency status link]

[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/eslint-config
[npm version link]: https://www.npmjs.com/package/@zendeskgarden/eslint-config
[build status badge]: https://flat.badgen.net/circleci/github/zendeskgarden/eslint-config/main?label=build
[build status link]: https://circleci.com/gh/zendeskgarden/eslint-config/tree/main
[dependency status badge]: https://flat.badgen.net/david/dev/zendeskgarden/eslint-config?label=dependencies
[dependency status link]: https://david-dm.org/zendeskgarden/eslint-config?type=dev

> :seedling: Garden is the design system by Zendesk

This package exposes a [shareable ESLint
config](http://eslint.org/docs/developer-guide/shareable-configs) and a
selection of associated [plugins](#plugins).

## Installation

```sh
npm install --save-dev eslint @babel/eslint-parser eslint-plugin-node @zendeskgarden/eslint-config
```

## Usage

Add a `.eslintrc.json` to your project with an `extends` property like this:

```json
{
  "extends": "@zendeskgarden"
}
```

Now Garden linting rules will apply to your project. See the [ESLint
Documentation](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more details on extending shareable configuration files.

### Plugins

The following shared plugins are also available.

#### Jest

Install the following dependency in addition to those [listed](#installation)
above.

```sh
npm install jest eslint-plugin-jest
```

Extend the base configuration.

```json
{
  "extends": ["@zendeskgarden", "@zendeskgarden/eslint-config/plugins/jest"]
}
```

In some cases, it may be useful to limit the scope of the Jest rules via
`overrides`.

```json
{
  "extends": "@zendeskgarden",
  "overrides": [
    {
      "files": ["*.spec.*"],
      "extends": "@zendeskgarden/eslint-config/plugins/jest"
    }
  ]
}
```

#### React

The React plugin bundles rules for React, React Hooks, and JSX accessibility.
Install the following dependencies in addition to those
[listed](#installation) above.

```sh
npm install eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

Extend the base configuration.

```json
{
  "extends": ["@zendeskgarden", "@zendeskgarden/eslint-config/plugins/react"]
}
```

#### TypeScript

Install the following dependencies in addition to those
[listed](#installation) above.

```sh
npm install typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Extend the base configuration.

```json
{
  "extends": [
    "@zendeskgarden",
    "@zendeskgarden/eslint-config/plugins/typescript"
  ]
}
```

For mixed JS and TS codebases, it may be useful to limit the scope of the
TypeScript rules via `overrides`.

```json
{
  "extends": "@zendeskgarden",
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "extends": "@zendeskgarden/eslint-config/plugins/typescript"
    }
  ]
}
```

The `typescript` plugin covers rules for syntax checking. An additional
`typescript-semantics` plugin provides rules based on semantics. The
`typescript-semantics` plugin requires type information in order to execute.
Set `parserOptions.project` to a valid TSConfig for the project. See
[typescript-eslint
documentation](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md)
for details.

```json
{
  "extends": [
    "@zendeskgarden",
    "@zendeskgarden/eslint-config/plugins/typescript",
    "@zendeskgarden/eslint-config/plugins/typescript-semantics"
  ],
  "parserOptions": {
    "project": ["./tsconfig.json"]
  }
}
```

## Resources

Shout-outs for a mostly reasonable set of lint rules go to:

- AirBnB's [JavaScript Style Guide](https://github.com/airbnb/javascript)
- Elie Rotenberg's [ES6 Coding Style](https://github.com/elierotenberg/coding-styles/blob/master/es6.md)

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

Copyright 2021 Zendesk

Licensed under the [Apache License, Version 2.0](LICENSE.md)
