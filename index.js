module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier-config-brave'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'func-style': ['warn', 'declaration'],
    'function-call-argument-newline': ['error', 'consistent'],
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: false,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-await-in-loop': [0],
    'consistent-return': [0],
    camelcase: [0],
  },
}
