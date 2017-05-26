# Zendesk Garden ESLint Config [![Build Status](https://travis-ci.com/zendeskgarden/eslint-config.svg?token=dDt9s6smCMgz269xNbpz&branch=master)](https://travis-ci.com/zendeskgarden/eslint-config)

The `garden-eslint-config` package exposes a [shareable ESLint
config](http://eslint.org/docs/developer-guide/shareable-configs).

## Installation

    npm install --save-dev eslint
    npm install --save-dev eslint-plugin-sort-class-members
    npm install --save-dev babel-eslint
    npm install --save-dev @zendesk/garden-eslint-config

See [package registry
documentation](https://github.com/zendeskgarden/LANDSCAPE/wiki/Package-Registry)
for the configuration needed to install `@zendesk`-scoped packages.

## Usage

Add a `.eslintrc` to your project with an `extends` property like this:

```javascript
{
  extends: '@zendesk/garden'
}
```

Now the Zendesk Garden rules will apply to your project. See the [ESLint
Documentation](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more details on extending shareable configuration files.

## Resources

Shout-outs for a mostly reasonable set of lint rules go to:

* AirBnB's [JavaScript Style Guide](https://github.com/airbnb/javascript)
* Elie Rotenberg's [ES6 Coding Style](https://github.com/elierotenberg/coding-styles/blob/master/es6.md)
