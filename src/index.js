import { fixupPluginRules } from '@eslint/compat';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';
import noOnlyTests from 'eslint-plugin-no-only-tests';
import sort from 'eslint-plugin-sort';
import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

export default defineConfig([
  sort.configs['flat/recommended'],
  tseslint.configs.recommended,
  unicorn.configs.unopinionated,
  {
    plugins: {
      '@stylistic': stylistic,
      'no-only-tests': fixupPluginRules(noOnlyTests),
      js
    },
    extends: ['js/recommended'],
    rules: {
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/arrow-spacing': ['error', { before: true, after: true }],
      '@stylistic/block-spacing': ['error', 'always'],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/computed-property-spacing': ['error', 'never'],
      '@stylistic/dot-location': ['error', 'property'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
      '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/lines-around-comment': [
        'error',
        {
          allowArrayStart: true,
          allowBlockStart: true,
          allowEnumStart: true,
          allowInterfaceStart: true,
          allowObjectStart: true,
          allowTypeStart: true,
          beforeBlockComment: true,
          beforeLineComment: true
        }
      ],
      '@stylistic/lines-between-class-members': ['error', 'always'],
      '@stylistic/max-len': ['error', { code: 100, comments: 100, ignoreUrls: true }],
      '@stylistic/max-statements-per-line': ['error', { max: 1 }],
      '@stylistic/member-delimiter-style': 'error',
      '@stylistic/multiline-ternary': ['error', 'always-multiline'],
      '@stylistic/new-parens': ['error', 'always'],
      '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/no-floating-decimal': 'error',
      '@stylistic/no-mixed-operators': 'error',
      '@stylistic/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0 }],
      '@stylistic/no-tabs': ['error', { allowIndentationTabs: false }],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-whitespace-before-property': 'error',
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
      '@stylistic/operator-linebreak': ['error', 'after', {
        overrides: { '?': 'before', ':': 'before', '|': 'before' }
      }],
      '@stylistic/padded-blocks': ['error', 'never'],
      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' }
      ],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/quotes': ['error', 'single', {
        allowTemplateLiterals: 'avoidEscape', avoidEscape: true
      }],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/semi-spacing': 'error',
      '@stylistic/semi-style': ['error', 'last'],
      '@stylistic/space-before-blocks': [
        'error',
        { classes: 'always', functions: 'always', keywords: 'always' }
      ],
      '@stylistic/space-before-function-paren': [
        'error',
        { anonymous: 'always', asyncArrow: 'always', named: 'never' }
      ],
      '@stylistic/space-in-parens': ['error', 'never'],
      '@stylistic/space-infix-ops': ['error', { int32Hint: false }],
      '@stylistic/space-unary-ops': ['error', { nonwords: false, words: true }],
      '@stylistic/spaced-comment': ['error', 'always'],
      '@stylistic/switch-colon-spacing': ['error', { before: false, after: true }],
      '@stylistic/template-curly-spacing': ['error', 'never'],
      '@stylistic/template-tag-spacing': ['error', 'never'],
      '@stylistic/type-annotation-spacing': 'error',
      '@stylistic/type-generic-spacing': 'error',
      '@stylistic/type-named-tuple-spacing': 'error',
      '@stylistic/wrap-iife': ['error', 'inside'],
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_'
      }],
      'no-only-tests/no-only-tests': ['error', { fix: true }],
      'sort/destructuring-properties': 'off',
      'sort/exports': [
        'error',
        { groups: [], typeOrder: 'preserve', caseSensitive: false, natural: true }
      ],
      'sort/export-members': ['error', { caseSensitive: false, natural: true }],
      'sort/imports': [
        'error',
        { groups: [], separator: '', typeOrder: 'preserve', caseSensitive: false, natural: true }
      ],
      'sort/import-members': ['error', { caseSensitive: false, natural: true }],
      'sort/object-properties': 'off',
      'unicorn/better-regex': ['error', { sortCharacterClasses: true }],
      'unicorn/catch-error-name': 'error',
      'unicorn/consistent-destructuring': 'error',
      'unicorn/consistent-empty-array-spread': 'error',
      'unicorn/custom-error-definition': 'error',
      'unicorn/empty-brace-spaces': 'error',
      'unicorn/expiring-todo-comments': 'off',
      'unicorn/filename-case': ['error', {
        cases: { kebabCase: true, pascalCase: true }
      }],
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-await-expression-member': 'error',
      'unicorn/no-for-loop': 'error',
      'unicorn/no-nested-ternary': 'error',
      'unicorn/no-static-only-class': 'off',
      'unicorn/no-useless-length-check': 'off',
      'unicorn/prefer-set-has': 'off',
      'unicorn/prefer-set-size': 'off',
      'unicorn/prevent-abbreviations': ['error', {
        allowList: {
          args: true, // `arguments` is a reserved word.
          pkg: true // `package` is a reserved word.
        }
      }],
      'unicorn/text-encoding-identifier-case': ['error', { withDash: true }],
      camelcase: 'error',
      eqeqeq: ['error', 'smart'],
      'no-nested-ternary': 'off',
      'no-unused-vars': 'off',
      'no-var': 'error',
      'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: false }],
      'preserve-caught-error': 'error'
    }
  }
]);

export { default as radhamGfm } from './gfm.js';
