const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      cyan: {
        400: '#69E1E9',
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
    },

    extend: {
      fontFamily: {
        sans: ['Lexend Deca', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
