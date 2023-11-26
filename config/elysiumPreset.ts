import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: {
    files: [],
  },
  theme: {
    extend: {
      colors: {
        thunder: {
          50: '#F5F2F3',
          100: '#EAE2E4',
          200: '#CBB1BB',
          300: '#AB808E',
          400: '#6D3C50',
          500: '#33292F', // Main Thunder Color
          600: '#2D252A',
          700: '#1F191D',
          800: '#161114',
          900: '#0F0B0C',
          950: '#080506',
          primary: '#33292F',
        },
        ectasy: {
          50: '#FFF8F4',
          100: '#FFEFE9',
          200: '#FED3C8',
          300: '#FDB7A7',
          400: '#FC7E66',
          500: '#FB8321', // Main Ectasy Color
          600: '#D9701D',
          700: '#935017',
          800: '#6F3D10',
          900: '#4A280A',
          950: '#1E0D03',
          primary: '#FB8321',
        },
        koromiko: {
          50: '#FFFDF9',
          100: '#FFF8E8',
          200: '#FFE7B5',
          300: '#FFD682',
          400: '#FFB21D',
          500: '#FFB653', // Main Koromiko Color
          600: '#D69446',
          700: '#935F2F',
          800: '#6F4B23',
          900: '#4A3618',
          950: '#1E180A',
          primary: '#FFB653',
        },
        aquamarine: {
          50: '#F3F9FA',
          100: '#E7F3F5',
          200: '#C2E1E6',
          300: '#9ED0D7',
          400: '#55AEB9',
          500: '#77FCFF', // Main Aquamarine Color
          600: '#4DA3A8',
          700: '#356C6F',
          800: '#274D4F',
          900: '#1A2E30',
          950: '#0B1618',
          primary: '#77FCFF',
        },
      },
    },
    fontFamily: {
      headline: ['Exo', ...defaultTheme.fontFamily.serif],
      sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
      mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
    },
  },
} satisfies Config
