# Zendesk Garden ESLint Config

The `eslint-config` package exposes a [shareable ESLint
config](http://eslint.org/docs/developer-guide/shareable-configs).

## Installation

    $ npm install --save-dev eslint
    $ npm install --save-dev babel-eslint
    $ npm install --save-dev git+ssh://git@github.com:zendeskgarden/eslint-config-zendesk.git

## Usage

Add an `.eslintrc` to your project with an `extends` property like this:

```javascript
{
  extends: 'zendesk'
}
```

Now the Zendesk rules will apply to your project. See the [ESLint
Documentation](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more details on extending shareable configuration files.

## Resources

Shout-outs for a mostly reasonable set of lint rules go to:

* AirBnB's [JavaScript Style Guide](https://github.com/airbnb/javascript)
* Elie Rotenberg's [ES6 Coding Style](https://github.com/elierotenberg/coding-styles/blob/master/es6.md)
