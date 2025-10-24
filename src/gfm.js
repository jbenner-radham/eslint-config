import markdown from '@eslint/markdown';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    plugins: { markdown },
    language: 'markdown/gfm',
    extends: ['markdown/recommended'],
    rules: {
      // Allow GFM Alerts. See: https://tinyurl.com/gfm-alerts
      'markdown/no-missing-label-refs': ['error', {
        allowLabels: [
          '!CAUTION',
          '!IMPORTANT',
          '!NOTE',
          '!TIP',
          '!WARNING'
        ]
      }]
    }
  }
]);
