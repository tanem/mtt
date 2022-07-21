// const path = require('path');

module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  // parserOptions: {
  // ecmaFeatures: {
  //   jsx: true,
  // },
  // project: path.join(__dirname, 'tsconfig.eslint.json'),
  // sourceType: 'module',
  // },
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  root: true,
  rules: {
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-imports': 'off',
    'sort-keys': 'error',
  },
  // settings: {
  //   react: {
  //     version: 'detect',
  //   },
  // },
};
