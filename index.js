module.exports = {
  extends: [
    './rules/possible-errors',
    './rules/best-practices',
    './rules/strict-mode',
    './rules/variables',
    './rules/node',
    './rules/stylistic-issues',
    './rules/es6'
  ].map(require.resolve),
  parser: 'babel-eslint',
  env: { browser: true },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      // allow `return` statements in the global scope
      globalReturn: false,
      // enable global strict mode
      impliedStrict: true,
      // enable JSX
      jsx: false,
      // enable support for the experimental object rest/spread properties
      experimentalObjectRestSpread: false
    }
  }
};
