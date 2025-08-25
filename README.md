@radham/eslint-config
=====================

A shareable [ESLint](https://eslint.org/) config with [Stylistic](https://eslint.style/).

Install
-------

```shell
npm install --save-dev @radham/eslint-config @eslint/js @stylistic/eslint-plugin eslint-plugin-sort typescript-eslint
```

Usage
-----

```javascript
import radham from '@radham/eslint-config';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.ts'],
    extends: [radham],
    languageOptions: { globals: globals.node /* or `globals.browser` */ }
  }
]);
```

License
-------

The BSD 3-Clause license. See the [license file](LICENSE) for details.
