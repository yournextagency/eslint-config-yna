module.exports = {
  rules: {
    // https://eslint.org/docs/latest/rules/prefer-const
    'prefer-const': 'error',

    // https://eslint.org/docs/latest/rules/no-var
    'no-var': 'error',

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    // https://eslint.org/docs/latest/rules/no-undef
    'no-undef': 'error',

    // https://eslint.org/docs/latest/rules/one-var
    'one-var': ['error', 'never'],

    // https://eslint.org/docs/latest/rules/no-multi-assign
    'no-multi-assign': ['error'],
  },
};
