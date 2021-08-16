const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': OFF,
    'no-only-tests/no-only-tests': ERROR,
    'react/prop-types': OFF,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARN,
    'react/button-has-type': ERROR
  },
  env: {
    browser: true /* Permits console and other browser window references without defining them */,
    jest: true /* Permits describe, it, expect, and other jest references without defining them */,
    node: true /* Permits use of module (e.g. module.exports) without defining module */,
    es6: true /* Permits use of es6 features like Promise without defining them */
  },
  plugins: ['no-only-tests', 'react-hooks'],
  settings: {
    react: {
      version: 'detect'
    }
  }
};
