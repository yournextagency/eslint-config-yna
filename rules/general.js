module.exports = {
  rules: {
    // https://eslint.org/docs/rules/semi
    'semi': ['error', 'always'],

    // https://eslint.org/docs/latest/rules/eqeqeq
    'eqeqeq': ['error', 'always'],

    // https://eslint.org/docs/latest/rules/comma-dangle
    'comma-dangle': ['error', 'always-multiline'],

    // https://eslint.org/docs/latest/rules/max-len
    'max-len': ['error', { 'code': 130, 'ignoreUrls': true }],

    // https://eslint.org/docs/latest/rules/no-console
    'no-console': 'warn',

    // https://eslint.org/docs/latest/rules/no-debugger
    'no-debugger': 'warn',

    // https://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 'error',
  },
};
