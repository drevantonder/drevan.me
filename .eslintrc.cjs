module.exports = {
  extends: ['plugin:astro/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {},
    },
  ],
}
