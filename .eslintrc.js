module.exports = {
  extends: ['plugin:storybook/recommended'],
  plugins: [
    'react',
    'simple-import-sort',
    'sort-destructure-keys',
    'typescript-sort-keys',
  ],
  rules: {
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: false,
        ignoreCase: true,
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-destructure-keys/sort-destructure-keys': [
      2,
      {
        caseSensitive: false,
      },
    ],
    'typescript-sort-keys/interface': [
      'error',
      'asc',
      {
        caseSensitive: false,
        natural: true,
      },
    ],
  },
}
