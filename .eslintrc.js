module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    // 'plugin:vue/essential',
    // 'standard',
    'airbnb-base',
    'plugin:vue/vue3-recommended'
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    },
    requireConfigFile: false,
    parser: '@babel/eslint-parser'
  },
  plugins: [
    'vue'
  ],
  parser: "@babel/eslint-parser",
  rules: {
    // "import/no-extraneous-dependencies": 0
  }
}
