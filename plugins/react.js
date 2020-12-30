/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: ['plugin:jsx-a11y/recommended'],
  rules: {
    // enforces consistent naming for boolean props
    'react/boolean-prop-naming': 1,
    // forbid "button" element without an explicit "type" attribute
    'react/button-has-type': 2,
    // enforce all defaultProps are defined and not "required" in propTypes
    'react/default-props-match-prop-types': 0,
    // enforce consistent usage of destructuring assignment of props, state, and context
    'react/destructuring-assignment': 1,
    // prevent missing displayName in a React component definition
    'react/display-name': 2,
    // forbid certain props on components
    'react/forbid-component-props': 0,
    // forbid certain props on DOM Nodes
    'react/forbid-dom-props': 0,
    // forbid certain elements
    'react/forbid-elements': 0,
    // forbid using another component's propTypes
    'react/forbid-foreign-prop-types': 0,
    // forbid certain propTypes
    'react/forbid-prop-types': 0,
    // standardize the way function components get defined
    'react/function-component-definition': [
      1,
      { namedComponents: 'arrow-function' }
    ],
    // enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': 1,
    // ensures inline tags are not rendered without spaces between them
    'react/jsx-child-element-spacing': 2,
    // validate closing bracket location in JSX
    'react/jsx-closing-bracket-location': 2,
    // validate closing tag location in JSX
    'react/jsx-closing-tag-location': 2,
    // disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
    'react/jsx-curly-brace-presence': 2,
    // enforce consistent line breaks inside jsx curly
    'react/jsx-curly-newline': 2,
    // enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': 2,
    // disallow or enforce spaces around equal signs in JSX
    'react/jsx-equals-spacing': 2,
    // restrict file extensions that may contain JSX
    'react/jsx-filename-extension': 0,
    // ensure proper position of the first property in JSX
    'react/jsx-first-prop-new-line': 2,
    // enforce shorthand or standard form for React fragments
    'react/jsx-fragments': 2,
    // enforce event handler naming conventions in JSX
    'react/jsx-handler-names': 1,
    // validate JSX indentation
    'react/jsx-indent': [
      2,
      2,
      {
        checkAttributes: true,
        indentLogicalExpressions: true
      }
    ],
    // validate props indentation in JSX
    'react/jsx-indent-props': [2, 2],
    // report missing `key` props in iterators/collection literals
    'react/jsx-key': 2,
    // validate JSX maximum depth
    'react/jsx-max-depth': 0,
    // limit maximum of props on a single line in JSX
    'react/jsx-max-props-per-line': 0,
    // enforce a new line after jsx elements and expressions
    'react/jsx-newline': 0,
    // prevents usage of Function.prototype.bind and arrow functions in React component props
    'react/jsx-no-bind': [2, { allowArrowFunctions: true }],
    // comments inside children section of tag should be placed inside braces
    'react/jsx-no-comment-textnodes': 2,
    // enforce no duplicate props
    'react/jsx-no-duplicate-props': 2,
    // prevent using string literals in React component definition
    'react/jsx-no-literals': 0,
    // forbid `javascript:` URLs
    'react/jsx-no-script-url': 2,
    // forbid `target="_blank"` attribute without `rel="noreferrer"`
    'react/jsx-no-target-blank': 2,
    // disallow undeclared variables in JSX
    'react/jsx-no-undef': 2,
    // disallow unnecessary fragments
    'react/jsx-no-useless-fragment': 2,
    // limit to one expression per line in JSX
    'react/jsx-one-expression-per-line': 0,
    // enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': [2, { allowAllCaps: true }],
    // disallow multiple spaces between inline JSX props
    'react/jsx-props-no-multi-spaces': 2,
    // prevent JSX prop spreading
    'react/jsx-props-no-spreading': 0,
    // enforce default props alphabetical sorting
    'react/jsx-sort-default-props': 0,
    // enforce props alphabetical sorting
    'react/jsx-sort-props': 0,
    // validate whitespace in and around the JSX opening and closing brackets
    'react/jsx-tag-spacing': 2,
    // prevent React to be marked as unused
    'react/jsx-uses-react': 2,
    // prevent variables used in JSX to be marked as unused
    'react/jsx-uses-vars': 2,
    // prevent missing parentheses around multilines JSX
    'react/jsx-wrap-multilines': 2,
    // reports when this.state is accessed within setState
    'react/no-access-state-in-setstate': 2,
    // prevent adjacent inline elements not separated by whitespace
    'react/no-adjacent-inline-elements': 2,
    // prevent usage of Array index in keys
    'react/no-array-index-key': 1,
    // prevent passing of children as props
    'react/no-children-prop': 2,
    // prevent usage of dangerous JSX props
    'react/no-danger': 2,
    // report when a DOM element is using both children and dangerouslySetInnerHTML
    'react/no-danger-with-children': 2,
    // prevent usage of deprecated methods
    'react/no-deprecated': 2,
    // prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': 2,
    // prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': 2,
    // prevent direct mutation of this.state
    'react/no-direct-mutation-state': 2,
    // prevent usage of findDOMNode
    'react/no-find-dom-node': 2,
    // prevent usage of isMounted
    'react/no-is-mounted': 2,
    // prevent multiple component definition per file
    'react/no-multi-comp': 0,
    // flag shouldComponentUpdate when extending PureComponent
    'react/no-redundant-should-component-update': 2,
    // prevent usage of the return value of React.render
    'react/no-render-return-value': 2,
    // prevent usage of setState
    'react/no-set-state': 0,
    // prevent string definitions for references and prevent referencing this.refs
    'react/no-string-refs': 2,
    // report "this" being used in stateless components
    'react/no-this-in-sfc': 2,
    // prevent common typos
    'react/no-typos': 2,
    // detect unescaped HTML entities, which might represent malformed tags
    'react/no-unescaped-entities': 2,
    // prevent usage of unknown DOM property
    'react/no-unknown-property': 2,
    // prevent usage of unsafe lifecycle methods
    'react/no-unsafe': 2,
    // prevent definitions of unused prop types
    'react/no-unused-prop-types': 2,
    // prevent definition of unused state fields
    'react/no-unused-state': 2,
    // prevent usage of setState in componentWillUpdate
    'react/no-will-update-set-state': 2,
    // enforce ES5 or ES6 class for React Components
    'react/prefer-es6-class': 2,
    // require read-only props
    'react/prefer-read-only-props': 0,
    // enforce stateless components to be written as a pure function
    'react/prefer-stateless-function': 2,
    // prevent missing props validation in a React component definition
    'react/prop-types': 2,
    // prevent missing React when using JSX
    'react/react-in-jsx-scope': 2,
    // enforce a defaultProps definition for every prop that is not a required prop
    'react/require-default-props': 0,
    // enforce React components to have a shouldComponentUpdate method
    'react/require-optimization': 0,
    // enforce ES5 or ES6 class for returning value in render function
    'react/require-render-return': 2,
    // prevent extra closing tags for components without children
    'react/self-closing-comp': 2,
    // enforce component methods order
    'react/sort-comp': 0,
    // enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': 0,
    // state initialization in an ES6 class component should be in a constructor
    'react/state-in-constructor': 0,
    // defines where React component static properties should be positioned
    'react/static-property-placement': 0,
    // enforce style prop value is an object
    'react/style-prop-object': 2,
    // prevent passing of children to void DOM elements (e.g. `<br />`)
    'react/void-dom-elements-no-children': 2,

    // checks rules of hooks
    'react-hooks/rules-of-hooks': 2,
    // checks effect dependencies
    'react-hooks/exhaustive-deps': 1
  }
};
