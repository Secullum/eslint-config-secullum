module.exports = {
  extends: 'eslint:recommended',

  plugins: ['import', 'flowtype', 'jsx-a11y', 'react'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },

  rules: {
    /* Best practices */
    'array-callback-return': 'error',
    'dot-location': ['error', 'property'],
    'eqeqeq': ['error', 'allow-null'],
    'no-extra-bind': 'error',
    'no-floating-decimal': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'radix': 'error',

    /* Variables */
    'no-label-var': 'error',
    'no-shadow-restricted-names': 'error',
    'no-use-before-define': ['error', 'nofunc'],

    /* Stylistic Issues */
    'array-bracket-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': 'error',
    'comma-dangle': 'error',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'indent': ['error', 2],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'jsx-quotes': 'error',
    'linebreak-style': ['error', 'unix'],
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-multiple-empty-lines': 'error',
    'no-new-object': 'error',
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'always'],
    'operator-assignment': 'error',
    'quotes': ['error', 'single', 'avoid-escape'],
    'semi': ['error', 'always'],
    'semi-spacing': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never' }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'unicode-bom': 'error',

    /* ECMAScript 6 */
    'arrow-spacing': 'error',
    'generator-star-spacing': ['error', { 'before': false, 'after': true }],
    'no-duplicate-imports': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'rest-spread-spacing': 'error',

    /* plugin:react */
    'react/display-name': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-curly-spacing': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': 'error',
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-space-before-closing': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-render-return-value': 'error',
    'react/no-string-refs': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/style-prop-object': 'error',

    /* plugin:import */
    'import/default': 'error',
    'import/export': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/no-duplicates': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-unresolved': 'error',

    /* plugin:jsx-a11y */
    'jsx-a11y/aria-role': 'error',
    'jsx-a11y/img-has-alt': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/no-access-key': 'error',

    /* plugin:flowtype */
    'flowtype/define-flow-type': 'error',
    'flowtype/require-valid-file-annotation': 'error',
    'flowtype/use-flow-type': 'error'
  }
};
