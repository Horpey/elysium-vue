import antfu from '@antfu/eslint-config'

import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu({
  ignores: [
    '.pnpm-store',
  ],
}, ...compat.config({
  extends: ['plugin:tailwindcss/recommended'],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    'ts/consistent-type-definitions': 'off',
  },
  ignorePatterns: ['*.typegen.ts'],
}))
