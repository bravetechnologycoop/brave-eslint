module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true,
    mocha: true
  },
  extends: ["airbnb", "prettier", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "func-style": ["warn", "declaration"],
    "function-call-argument-newline": ["error", "consistent"],
    "prefer-destructuring": [
      "error",
      {
        array: false,
        object: false,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "no-await-in-loop": [0],
    "consistent-return": [0],
    camelcase: [0],
    "no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "should|expect"
      }
    ],
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        semi: false,
        arrowParens: "avoid",
        printWidth: 150,
        trailingComma: "all",
      },
    ],
  },
  "overrides": [{
    "files": [ "./test/*" ],
    "rules": {
      "no-unused-expressions": 0,
      "import/no-extraneous-dependencies": 0
    }
  }]
};
