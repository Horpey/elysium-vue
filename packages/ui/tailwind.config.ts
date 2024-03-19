import type { Config } from 'tailwindcss'
import tailwindForms from '@tailwindcss/forms'
import elysiumPreset from './src/elysiumPreset'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  presets: [
    elysiumPreset,
  ],
  plugins: [
    tailwindForms,
  ],
} satisfies Config
