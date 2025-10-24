@radham/eslint-config
=====================

A shareable [ESLint](https://eslint.org/) config with [Stylistic](https://eslint.style/).

Install
-------

```shell
npm install --save-dev @radham/eslint-config
```

Usage
-----

```javascript
import { includeIgnoreFile } from '@eslint/compat';
import radham, { radhamGfm } from '@radham/eslint-config';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const gitignorePath = path.resolve(dirname, '.gitignore');

export default defineConfig([
  includeIgnoreFile(gitignorePath),
  {
    files: ['**/*.ts'],
    extends: [radham],
    languageOptions: { globals: globals.node /* or `globals.browser` */ }
  },
  {
    files: ['**/*.md'],
    extends: [radhamGfm]
  }
]);
```

License
-------

The BSD 3-Clause License. See the [license file](LICENSE) for details.
