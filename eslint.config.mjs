// eslint.config.mjs
import nextPlugin from '@next/eslint-plugin-next';

import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

import eslintJS from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  // Base JS config
  { ...eslintJS.configs.recommended },

  // TypeScript config
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.es2025,
        process: 'readonly',
        React: 'readonly',
      },
    },
    plugins: { '@typescript-eslint': tsPlugin },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/explicit-member-accessibility': 'error',
      '@typescript-eslint/return-await': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      'no-use-before-define': 'off',
      'no-await-in-loop': 'off',
    },
  },

  // React + Hooks config
  {
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: { react: reactPlugin, 'react-hooks': reactHooksPlugin },
    rules: {
      'react/jsx-boolean-value': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.jsx', '.tsx'] },
      ],
    },
  },

  // JSX a11y
  {
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: { 'jsx-a11y': jsxA11yPlugin },
    rules: {
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/role-has-required-aria-props': 'error',
    },
  },

  // Next.js plugin
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: { '@next/next': nextPlugin },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },

  // Import sorting
  {
    plugins: { 'simple-import-sort': simpleImportSort },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^@react', '^next', '^@next'], // React & Nextjs imports
            ['^\\w'], // Third-party libraries
            ['^@'], // Imports starting with @
            ['^\\./'], // Relative imports
            ['^.+\\.(css|scss)$'], // Style imports
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
];
