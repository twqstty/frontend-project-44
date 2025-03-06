import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginImport from 'eslint-plugin-import';

export default [
  {
    files: ['**/*.{js,mjs,cjs}'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      ecmaVersion: 2021,
      sourceType: 'module',
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      'no-console': 'off',
      'import/no-unresolved': 'error',
      'import/order': ['error', { 'newlines-between': 'always' }],
    },
  },
];