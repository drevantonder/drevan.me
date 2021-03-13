const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'media',
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      teal: colors.teal,
      white: colors.white,
      black: colors.black,
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {
      zIndex: {
        '-1': '-1',
      },
      borderRadius: {
        inherit: 'inherit',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
