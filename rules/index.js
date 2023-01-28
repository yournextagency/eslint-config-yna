module.exports = {
  rules: {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'no-trailing-spaces': 'error',
    'eqeqeq': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': ['error', 'always'],
    'indent': ['error', 2],
    'max-len': ['error', { 'code': 130, 'ignoreUrls': true }],
    'object-curly-spacing': ['error', 'always'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
