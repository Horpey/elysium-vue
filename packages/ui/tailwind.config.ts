import type { Config } from 'tailwindcss'
import elysiumPreset from './config/elysiumPreset'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  presets: [
    elysiumPreset,
  ],
  plugins: [
    require('@tailwindcss/forms'),
  ],
} satisfies Config
