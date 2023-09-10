module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true,
    jquery: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    '@typescript-eslint/semi': 'warn',
    'max-len': ['warn', { code: 200, tabWidth: 2 }],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/indent': ['warn', 2],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/quotes': ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    '@typescript-eslint/comma-dangle': ['warn', 'always-multiline'],
    'eol-last': ['warn', 'always'],
    'arrow-parens': ['warn', 'always'],
    '@typescript-eslint/no-constant-condition': 'off',
    '@typescript-eslint/no-empty': 'off',
    complexity: ['error', { max: 15 }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-empty': 'off',
    'jsx-quotes': ['warn', 'prefer-single'],
  },
};
