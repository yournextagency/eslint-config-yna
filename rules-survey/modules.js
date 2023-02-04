module.exports = {
  rules: {
    // https://eslint.org/docs/latest/rules/no-duplicate-imports
    'no-duplicate-imports': ['error'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
    'import/first': ['error'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
    'import/newline-after-import': ['error'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
    'import/order': ['error', {
      groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
      alphabetize: {
        order: 'asc',
      },
    }],
  },
};
