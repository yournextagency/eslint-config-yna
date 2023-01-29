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
    './rules/references',
    './rules/strings',
    './rules/whitespace',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {},
};
