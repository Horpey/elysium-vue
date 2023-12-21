import type { Config } from 'tailwindcss'
import elysiumPreset from '@horpey/elysium-vue/elysiumPreset'
import tailwindForms from '@tailwindcss/forms'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@horpey/elysium-vue/**/*.{vue,js,ts,jsx,tsx}',
  ],
  presets: [
    elysiumPreset,
  ],
  plugins: [
    tailwindForms,
  ],
} satisfies Config
