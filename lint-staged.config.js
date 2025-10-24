/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*.{js,json,md}': 'eslint --fix',
  'package.json': 'sort-package-json'
};
