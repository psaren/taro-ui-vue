// ESLint 检查 .vue 文件需要单独配置编辑器：
// https://eslint.vuejs.org/user-guide/#editor-integrations
module.exports = {
  'extends': [
    "plugin:prettier/recommended",
    "prettier/vue",
    'taro/vue',
  ],
  "parser": "vue-eslint-parser",
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
  },
  overrides: [
    {
      files: [
        'config/*.js'
      ],
      "rules": {
        "import/no-commonjs": "off"
      }
    },
    {
      "files": [
        "**/*.ts",
        "**/*.tsx"
      ],
      parserOptions: {"parser": "@typescript-eslint/parser",},
      "plugins": [
        "@typescript-eslint"
      ],
      "extends": "plugin:prettier/recommended",
      "env": {
        "jest": true
      },
      "rules": {
        "no-undef": 0,
        "no-unused-vars": 0,
        "@typescript-eslint/class-name-casing": 2,
        "class-methods-use-this": "off",
        "prefer-rest-params": "off",
        "arrow-body-style": "warn",
        "taro/custom-component-children": "off"
      }
    },
    {
      files: [
        "**/*.d.ts",
      ],
      rules: {
        "prettier/prettier": [
          "off",
        ]
      }
    }
  ]
}
