import localRules from './eslint-local-rules.js';

/**
 * ESLint Configuration - Token-Driven Design System Enforcement
 *
 * Extends Next.js and Storybook defaults while adding custom rules
 * to enforce CSS token usage in inline styles.
 */
export default [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'storybook-static/**',
      'out/**',
      'dist/**',
      '.husky/**',
      '**/*.d.ts', // Ignore TypeScript definition files
    ],
  },
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  // Next.js core rules
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      '@next/next/no-img-element': 'off',
    },
  },
  // Custom design system enforcement
  {
    files: ['components/**/*.{js,jsx}', 'app/**/*.{js,jsx}'],
    plugins: {
      local: localRules,
    },
    rules: {
      'local/no-hardcoded-inline-styles': 'error',
    },
  },
  // Storybook files - relax rules for demo purposes
  {
    files: ['**/*.stories.{js,jsx,ts,tsx}'],
    rules: {
      'local/no-hardcoded-inline-styles': 'warn', // Allow demo colors in stories
    },
  },
];
