const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'media',
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      white: colors.white,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
