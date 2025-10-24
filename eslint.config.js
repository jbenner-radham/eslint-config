import radham, { radhamGfm } from './src/index.js';
import json from '@eslint/json';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.js'],
    extends: [radham],
    languageOptions: { globals: globals.node }
  },
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended']
  },
  {
    files: ['**/*.md'],
    extends: [radhamGfm]
  }
]);
