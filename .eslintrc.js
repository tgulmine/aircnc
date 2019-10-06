module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ["plugin:@typescript-eslint/recommended", "prettier/@typescript-eslint", "airbnb-typescript/base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint"],
  rules: {"linebreak-style": 0, "no-console": 0, "@typescript-eslint/no-var-requires": 0, "@typescript-eslint/no-unused-vars": 1}
};
