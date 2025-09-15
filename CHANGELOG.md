Changelog
=========

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

[4.0.1]: https://github.com/jbenner-radham/eslint-config/compare/v4.0.0...v4.0.1
[4.0.0]: https://github.com/jbenner-radham/eslint-config/compare/v3.0.0...v4.0.0
[3.0.0]: https://github.com/jbenner-radham/eslint-config/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/jbenner-radham/eslint-config/compare/v1.0.1...v2.0.0
[1.0.1]: https://github.com/jbenner-radham/eslint-config/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/jbenner-radham/eslint-config/releases/tag/v1.0.0
