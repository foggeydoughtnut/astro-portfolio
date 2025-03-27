import type { Linter } from 'eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
      semi: ['error'],
      indent: ['error', 2],
      quotes: ['error', 'single'],
      'vue/max-attributes-per-line': 1,
    }
  }
] satisfies Linter.Config<Linter.RulesRecord>[];