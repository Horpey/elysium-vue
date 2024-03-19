import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default module.exports = {
  content: {
    files: [],
  },
  theme: {
    extend: {
      colors: {
        codgray: {
          50: '#363636',
          100: '#2f2f2f',
          200: '#292929',
          300: '#232323',
          400: '#1e1e1e',
          500: '#1d1d1d', // Main Cod Gray
          600: '#1b1b1b',
          700: '#191919',
          800: '#171717',
          900: '#141414',
          950: '#0f0f0f',
          primary: '#1d1d1d',
          light: '#e7e7e7',
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
          light: '#f1ede9',
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
          light: '#e9eded',
        },
        rose: {
          light: '#f6e8eb',
        },
      },
      boxShadow: {
        'bottom': '0px 6px #ffffff24',
        'bottom-dark': '1px 6px #00000024',
      },
    },
    fontFamily: {
      sans: ['Chakra Petch', ...defaultTheme.fontFamily.sans],
      mono: ['Chakra Petch', ...defaultTheme.fontFamily.mono],
    },
  },
} satisfies Config
