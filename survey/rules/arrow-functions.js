module.exports = {
  rules: {
    // https://eslint.org/docs/latest/rules/arrow-spacing
    'arrow-spacing': 'error',

    // https://eslint.org/docs/latest/rules/arrow-parens
    'arrow-parens': 'error',

    // https://eslint.org/docs/latest/rules/no-confusing-arrow
    'no-confusing-arrow': ['error', {
      allowParens: true,
    }],

    // https://eslint.org/docs/latest/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': ['error', 'beside'],
  },
};
