module.exports = {
  // これ以上ディレクトリを遡らない
  root: true,
  // JavaScript/TypeScriptコードがどの実行環境で使われるか
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  // Airbnbの設定を使用するためコメントアウト
  // rules: {
  //   "no-console": "error",
  //   camelcase: ["error", { properties: "never" }],
  //   semi: ["error", "always"],
  // },
  extends: ["airbnb-base"],
  rules: {
    "import/prefer-default-export": "off",
    quotes: ["error", "double"],
  },
};
