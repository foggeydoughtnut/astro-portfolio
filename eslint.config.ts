import type { Linter } from 'eslint';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  ...eslintPluginAstro.configs.recommended,
] satisfies Linter.Config<Linter.RulesRecord>[];