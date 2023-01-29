module.exports = {
  rules: {
    // https://eslint.org/docs/latest/rules/no-trailing-spaces
    'no-trailing-spaces': 'error',

    // https://eslint.org/docs/latest/rules/object-curly-spacing
    'object-curly-spacing': ['error', 'always'],

    // https://eslint.org/docs/latest/rules/eol-last
    'eol-last': ['error', 'always'],

    // https://eslint.org/docs/latest/rules/indent
    'indent': ['error', 2],

    // https://eslint.org/docs/latest/rules/space-before-blocks
    'space-before-blocks': ['error', 'always'],

    // https://eslint.org/docs/latest/rules/space-before-function-paren
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],

    // https://eslint.org/docs/latest/rules/space-infix-ops
    'space-infix-ops': 'error',

    // https://eslint.org/docs/latest/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error',

    // https://eslint.org/docs/latest/rules/padded-blocks
    'padded-blocks': ['error', {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    }, {
      allowSingleLineBlocks: true,
    }],

    // https://eslint.org/docs/rules/no-multiple-empty-lines
    // disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

    // https://eslint.org/docs/latest/rules/space-in-parens
    'space-in-parens': ['error', 'never'],

    // https://eslint.org/docs/latest/rules/array-bracket-spacing
    'array-bracket-spacing': ['error', 'never'],

    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': ['error', 'always'],

    // https://eslint.org/docs/latest/rules/comma-spacing
    'comma-spacing': ['error', { before: false, after: true }],

    // https://eslint.org/docs/latest/rules/computed-property-spacing
    'computed-property-spacing': ['error', 'never'],

    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],

    // https://eslint.org/docs/latest/rules/key-spacing
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
  },
};
