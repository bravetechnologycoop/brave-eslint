module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    indent: [
      "error",
      4,
      {
        SwitchCase: 1,
      },
    ],
    "linebreak-style": ["error", "unix"],
    "func-style": ["error", "declaration"],
    quotes: [
      "error",
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
  },
}
