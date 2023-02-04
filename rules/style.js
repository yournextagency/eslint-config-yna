module.exports = {
  rules: {
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'error',

    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // https://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': ['error', {
      // the list of arithmetic groups disallows mixing `%` and `**`
      // with other arithmetic operators.
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['/', '*'],
        ['&', '|', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!=='],
        ['&&', '||'],
      ],
      allowSamePrecedence: false,
    }],

    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, ' +
          'which is virtually never what you want. ' +
          'Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, ' +
          'which is too heavyweight for this guide to allow them. ' +
          'Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    // https://eslint.org/docs/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

    // https://eslint.org/docs/latest/rules/brace-style
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // https://eslint.org/docs/latest/rules/no-else-return
    'no-else-return': ['error', { allowElseIf: false }],

    // https://eslint.org/docs/latest/rules/spaced-comment
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
        // space here to support sprockets directives, slash for TS /// comments
        markers: ['=', '!', '/'],
      },
      block: {
        exceptions: ['-', '+'],
        // space here to support sprockets directives and flow comment types
        markers: ['=', '!', ':', '::'],
        balanced: true,
      },
    }],

    // https://eslint.org/docs/rules/comma-style
    'comma-style': ['error', 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      },
    }],

    // https://eslint.org/docs/latest/rules/camelcase
    'camelcase': ['error', { properties: 'never', ignoreDestructuring: false }],
  },
};
