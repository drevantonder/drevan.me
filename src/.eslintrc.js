module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:gridsome/recommended'
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "gridsome/format-query-block": "off",
    "vue/component-tags-order": ["error", {
      "order": ["template", "script", "style"]
    }]
  }
}