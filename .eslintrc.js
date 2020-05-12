// ESLint 检查 .vue 文件需要单独配置编辑器：
// https://eslint.vuejs.org/user-guide/#editor-integrations
module.exports = {
  'extends': [
    "plugin:prettier/recommended",
    "prettier/vue",
    'taro/vue'
  ],
  parserOptions: { ecmaVersion: 2015, ecmaFeatures: { legacyDecorators: true } },
  rules: {
    "no-unused-vars": ["error", { "vars": "all", "args": "none" }],
    "prettier/prettier": [
      "error",
      {
        "semi": false,
        "singleQuote": true,
        "bracketSpacing": true,
        "jsxBracketSameLine": true,
        "trailingComma": "es5",
        "jsxSingleQuote": false,
        "parser": "flow",
        "endOfLine":"auto",
        "printWidth": 100
      }
    ],
  }
}
