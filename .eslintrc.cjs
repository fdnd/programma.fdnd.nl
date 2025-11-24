module.exports = {
  root: true,

  extends: [
    'eslint:recommended',
    'plugin:svelte/recommended',
    'prettier'
  ],

  plugins: ['svelte'],

  overrides: [
    {
      files: ['**/*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser', // safe even without TS
      }
    }
  ],

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },

  env: {
    browser: true,
    es2017: true,
    node: true
  }
};

