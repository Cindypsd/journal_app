module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
    project: ['./tsconfig.json'],
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'react-refresh'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  env: { browser: true, es2020: true, node: true, jest: true, mocha: true },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['dist', 'coverage', 'build'],
  globals: {
    __base: true,
    global: true,
    isNaN: true,
  },
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/no-array-index-key': 0,
    'react/display-name': 0,
    'react/jsx-props-no-spreading': [0],
    'react/jsx-uses-react': 'off',
    'react/jsx-curly-brace-presence': [1, { props: 'never', children: 'never' }],
    'react/self-closing-comp': ['error', { component: true, html: true }],
    'react/react-in-jsx-scope': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'comma-dangle': 0,
    semi: 0,
    'object-curly-newline': 0,
    'no-prototype-builtins': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'use-isnan': 'off',
    'no-restricted-globals': ['off', 'isNaN'],
    'implicit-arrow-linebreak': [0, 'below'],
    quotes: [2, 'single', 'avoid-escape'],
    'object-curly-spacing': ['error', 'always'],
    'keyword-spacing': 'off',
    'no-empty-function': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/consistent-type-imports': 1,
    '@typescript-eslint/consistent-type-exports': 1,
    '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        arrowParens: 'always',
        trailingComma: 'all',
        useTabs: false,
        tabWidth: 2,
        semi: true,
        printWidth: 100,
      },
    ],
  },
};
