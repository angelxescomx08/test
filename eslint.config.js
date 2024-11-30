import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    rules: {
      indent: ['error', 2], // Indentación de 2 espacios
      semi: ['error', 'never'], // Sin punto y coma al final
      quotes: ['error', 'single'], // Usar comillas simples
    },
  },
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
]
