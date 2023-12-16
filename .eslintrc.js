module.exports = {
  extends: ['next/core-web-vitals', 'plugin:storybook/recommended'],
  plugins: ['import', 'react', 'sort-destructure-keys', 'typescript-sort-keys'],
  rules: {
    'import/order': ['error'],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: false,
        ignoreCase: true,
      },
    ],
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
