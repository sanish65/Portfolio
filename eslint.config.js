// eslint.config.js
import react from 'eslint-plugin-react';
import typescript from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser'; // Import parser directly

export default [
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser, // Use the parser directly
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        React: 'readonly', // Prevent React scope issues
      },
    },
    plugins: {
      react,
      '@typescript-eslint': typescript,
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Disable for React 17+
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    settings: {
      react: {
        version: 'detect', // Detect React version automatically
      },
    },
  },
];
