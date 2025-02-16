module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    'react-native/react-native': true,
  },
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'prettier',
    'react',
    'react-native',
    '@typescript-eslint',
    'react-hooks',
    'unused-imports',
  ],
  rules: {
    'prettier/prettier': ['error'],
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    'react/prop-types': 'off', // Not needed for TypeScript
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'unused-imports/no-unused-imports': 'error', // Removes unused imports
    'react-native/no-unused-styles': 'warn',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-raw-text': 'warn',
    'react-native/split-platform-components': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
