import radham from './src/index.js';
import markdown from '@eslint/markdown';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: [radham],
    languageOptions: { globals: globals.node }
  },
  {
    files: ['**/*.md'],
    plugins: { markdown },
    extends: ['markdown/recommended'],
    language: 'markdown/gfm'
  }
]);
