# Garden ESLint Config [![npm version][npm version badge]][npm version link] [![Build Status][build status badge]][build status link]

[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/eslint-config
[npm version link]: https://www.npmjs.com/package/@zendeskgarden/eslint-config
[build status badge]: https://flat.badgen.net/circleci/github/zendeskgarden/eslint-config/main?label=build
[build status link]: https://circleci.com/gh/zendeskgarden/eslint-config/tree/main

> :seedling: Garden is the design system by Zendesk

This package exposes a [shareable ESLint
config](http://eslint.org/docs/developer-guide/shareable-configs) and a
selection of associated [plugins](#plugins).

## Installation

```sh
npm install eslint @zendeskgarden/eslint-config
```

## Usage

Add a `eslint.config.mjs` to your project like this:

```js
import config from '@zendeskgarden/eslint-config';

export default config;
```

Now Garden linting rules will apply to your project. See the [ESLint
Documentation](https://eslint.org/docs/latest/extend/shareable-configs#using-a-shareable-config)
for more details on using shareable configuration files.

### Plugins

The following shared plugins are also available.

#### Jest

Install the following dependency in addition to those [listed](#installation)
above.

```sh
npm install jest
```

Update the default configuration.

```js
import config from '@zendeskgarden/eslint-config';
import jestPlugin from '@zendeskgarden/eslint-config/plugins/jest.js';

export default [...config, jestPlugin];
```

In some cases, it may be useful to limit the scope of the Jest rules via
`files`.

```js
export default [
  ...config,
  {
    files: ['**/*.spec.*'],
    ...jestPlugin
  }
];
```

#### React

The React plugin bundles rules for React, React Hooks, and JSX accessibility.
Install the following dependency in addition to those [listed](#installation)
above.

```sh
npm install react
```

Update the default configuration.

```js
import config from '@zendeskgarden/eslint-config';
import reactPlugin from '@zendeskgarden/eslint-config/plugins/react.js';

export default [...config, reactPlugin];
```

#### TypeScript

Install the following dependency in addition to those [listed](#installation)
above.

```sh
npm install typescript
```

Update the default configuration.

```js
import config from '@zendeskgarden/eslint-config';
import typescriptPlugin from '@zendeskgarden/eslint-config/plugins/typescript.js';

export default [...config, typescriptPlugin];
```

For mixed JS and TS codebases, it may be useful to limit the scope of the
TypeScript rules via `files`.

```js
export default [
  ...config,
  {
    files: ['**/*.{ts, tsx}'],
    ...typescriptPlugin
  }
];
```

The `typescript` plugin covers rules for syntax checking. An additional
`typescript-type-checked` plugin provides rules based on semantics. The
`typescript-type-checked` plugin requires type information in order to execute.
Set `languageOptions.parserOptions.project` to a valid TSConfig for the project. See
[typescript-eslint documentation](https://typescript-eslint.io/getting-started/typed-linting)
for details.

```js
export default [
  ...config,
  typescriptPlugin,
  typescriptTypeCheckedPlugin,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        requireConfigFile: false
      }
    }
  }
];
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

Copyright 2024 Zendesk

Licensed under the [Apache License, Version 2.0](LICENSE.md)
