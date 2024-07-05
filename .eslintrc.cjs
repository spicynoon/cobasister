module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
