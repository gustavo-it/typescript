// eslint.config.js
import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.ts'], // Aplica para todos arquivos .ts
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: {
        browser: true,
        es6: true,
        node: true,
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTs,
      prettier: prettierPlugin,
    },
    rules: {
      ...eslintPluginTs.configs.recommended.rules,
      'prettier/prettier': 'error',
      // Aqui você pode adicionar regras personalizadas, por exemplo:
      // '@typescript-eslint/no-explicit-any': 'warn',
    }
  },
];
