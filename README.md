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
import { defineConfig } from 'eslint/config';
import radham from '@radham/eslint-config';

export default defineConfig([
  {
    files: ['**/*.ts'],
    extends: [radham]
  }
]);
```

License
-------

The BSD 3-Clause License (Revised). See the [license file](LICENSE) for details.
