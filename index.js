module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    './rules/arrow-functions',
    './rules/functions',
    './rules/general',
    './rules/modules',
    './rules/strings',
    './rules/style',
    './rules/variables',
    './rules/whitespace',
  ],
  plugins: [
    'import',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {},
};
