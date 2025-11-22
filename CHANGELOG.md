Changelog
=========

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

[11.0.0] - 2025-11-21
---------------------

### Changed

- Enabled `withDash` for the `unicorn/text-encoding-identifier-case` rule.

[10.1.0] - 2025-11-19
---------------------

### Changed

- Upgraded the `@eslint/compat` dependency from `1.4.1` to `2.0.0`.
- Upgraded the `@stylistic/eslint-plugin` dependency from `5.5.0` to `5.6.1`.
- Upgraded the `typescript-eslint` dependency from `8.46.3` to `8.47.0`.

[10.0.0] - 2025-11-14
---------------------

### Changed

- Added `args` and `pkg` to the allow list of the `unicorn/prevent-abbreviations` rule.

[9.0.0] - 2025-11-06
--------------------

### Added

- The `eslint-plugin-unicorn` package with the `unopinionated` ruleset and some additional custom
  configuration.

### Changed

- Upgraded the `@eslint/compat` dependency from `1.4.0` to `1.4.1`.
- Upgraded the `@eslint/js` dependency from `9.38.0` to `9.39.1`.
- Upgraded the `@eslint/markdown` dependency from `7.5.0` to `7.5.1`.
- Upgraded the `typescript-eslint` dependency from `8.46.2` to `8.46.3`.

[8.1.0] - 2025-10-24
--------------------

### Added

- A `radhamGfm` config for [GitHub Flavored Markdown](https://github.github.com/gfm/) documents.

[8.0.0] - 2025-10-20
--------------------

### Changed

- The options on the `@stylistic/lines-around-comment` rule. Specifically added
  `allowArrayStart`, `allowEnumStart`, `allowInterfaceStart`,
  `allowObjectStart`, and `allowTypeStart` all set to `true`.
- Upgraded the `@eslint/js` dependency from `9.36.0` to `9.38.0`.
- Upgraded the `@stylistic/eslint-plugin` dependency from `5.4.0` to `5.5.0`.
- Upgraded the `typescript-eslint` dependency from `8.44.1` to `8.46.2`.

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

- The [no-only-tests](https://github.com/levibuzolic/eslint-plugin-no-only-tests) plugin and
  corresponding rule.

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

- Set the `@typescript-eslint/no-unused-vars` options `argsIgnorePattern` and
  `destructuredArrayIgnorePattern` to `'^_'`.

### Changed

- Update the `@typescript-eslint/no-unused-vars` option `caughtErrorsIgnorePattern` to `'^_'` from
  `'^_$'`.

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

[11.0.0]: https://github.com/jbenner-radham/eslint-config/compare/v10.1.0...v11.0.0
[10.1.0]: https://github.com/jbenner-radham/eslint-config/compare/v10.0.0...v10.1.0
[10.0.0]: https://github.com/jbenner-radham/eslint-config/compare/v9.0.0...v10.0.0
[9.0.0]: https://github.com/jbenner-radham/eslint-config/compare/v8.1.0...v9.0.0
[8.1.0]: https://github.com/jbenner-radham/eslint-config/compare/v8.0.0...v8.1.0
[8.0.0]: https://github.com/jbenner-radham/eslint-config/compare/v7.0.0...v8.0.0
[7.0.0]: https://github.com/jbenner-radham/eslint-config/compare/v6.0.0...v7.0.0
[6.0.0]: https://github.com/jbenner-radham/eslint-config/compare/v5.0.0...v6.0.0
[5.0.0]: https://github.com/jbenner-radham/eslint-config/compare/v4.0.1...v5.0.0
[4.0.1]: https://github.com/jbenner-radham/eslint-config/compare/v4.0.0...v4.0.1
[4.0.0]: https://github.com/jbenner-radham/eslint-config/compare/v3.0.0...v4.0.0
[3.0.0]: https://github.com/jbenner-radham/eslint-config/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/jbenner-radham/eslint-config/compare/v1.0.1...v2.0.0
[1.0.1]: https://github.com/jbenner-radham/eslint-config/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/jbenner-radham/eslint-config/releases/tag/v1.0.0
