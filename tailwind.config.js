const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      cyan: {
        400: '#69E1E9',
        600: '#01B8BF',
      },
      purple: {
        50: '#F5F6FF',
        100: '#CACFFF',
        200: '#A1A5FF',
        300: '#7D7EFE',
        400: '#6460FD',
        500: '#524AFA',
        600: '#4539F4',
        700: '#392CE5',
        800: '#2C1FBE',
        900: '#1A1278',
      },
      gray: colors.zinc,
    },
    extend: {
      fontFamily: {
        sans: ['var(--custom-font)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
