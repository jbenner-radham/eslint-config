Changelog
=========

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

[7.0.0] - 2025-10-16
--------------------

### Changed

- Expanded on the "Usage" section of the readme.
- The `@stylistic/quotes` option `avoidEscape` from the default value `false` to `true`.
- The `@stylistic/quotes` option `allowTemplateLiterals` from `always` to `avoidEscape`.

[6.0.0] - 2025-09-26
--------------------

### Changed

- Set the `fix` option to `true` for the `no-only-tests/no-only-tests` rule.

[5.0.0] - 2025-09-26
--------------------

### Added

- The [no-only-tests](https://github.com/levibuzolic/eslint-plugin-no-only-tests) plugin and corresponding rule.

### Changed

- Simplified the installation process by moving most of the peer dependencies to dependencies.

[4.0.1] - 2025-09-15
--------------------

### Fixed

- Update `eslint` peer dependency to compatible version.

[4.0.0] - 2025-09-15
--------------------

### Added

- Add `preserve-caught-error` rule.

[3.0.0] - 2025-09-08
--------------------

### Changed

- Set an override on the `@stylistic/operator-linebreak` rule for the `|` operator to `'before'`.

[2.0.0] - 2025-08-25
--------------------

### Added

- Set the `@typescript-eslint/no-unused-vars` options `argsIgnorePattern` and `destructuredArrayIgnorePattern` to `'^_'`.

### Changed

- Update the `@typescript-eslint/no-unused-vars` option `caughtErrorsIgnorePattern` to `'^_'` from `'^_$'`.

[1.0.1] - 2025-08-25
--------------------

### Changed

- Update the `@stylistic/quotes` option `allowTemplateLiterals` to a non-deprecated value.

### Fixed

- Disable `no-unused-vars` so as not to conflict with `@typescript-eslint/no-unused-vars`.

[1.0.0] - 2025-08-22
--------------------

### Added

- Initial release.

[7.0.0]: https://github.com/jbenner-radham/eslint-config/compare/v6.0.0...v7.0.0
[6.0.0]: https://github.com/jbenner-radham/eslint-config/compare/v5.0.0...v6.0.0
[5.0.0]: https://github.com/jbenner-radham/eslint-config/compare/v4.0.1...v5.0.0
[4.0.1]: https://github.com/jbenner-radham/eslint-config/compare/v4.0.0...v4.0.1
[4.0.0]: https://github.com/jbenner-radham/eslint-config/compare/v3.0.0...v4.0.0
[3.0.0]: https://github.com/jbenner-radham/eslint-config/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/jbenner-radham/eslint-config/compare/v1.0.1...v2.0.0
[1.0.1]: https://github.com/jbenner-radham/eslint-config/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/jbenner-radham/eslint-config/releases/tag/v1.0.0
