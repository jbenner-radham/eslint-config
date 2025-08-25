import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import sort from 'eslint-plugin-sort';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  js.configs.recommended,
  sort.configs['flat/recommended'],
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic
    },
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
        { beforeBlockComment: true, beforeLineComment: true, allowBlockStart: true }
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
      '@stylistic/operator-linebreak': [
        'error',
        'after',
        {
          overrides: {
            '?': 'before',
            ':': 'before'
          }
        }
      ],
      '@stylistic/padded-blocks': ['error', 'never'],
      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' }
      ],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/quotes': ['error', 'single', { allowTemplateLiterals: 'always' }],
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
      '@typescript-eslint/no-unused-vars': ['error', { caughtErrorsIgnorePattern: '^_$' }],
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
      camelcase: 'error',
      eqeqeq: ['error', 'smart'],
      'no-unused-vars': 'off',
      'no-var': 'error',
      'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: false }]
    }
  }
];

export default config;
