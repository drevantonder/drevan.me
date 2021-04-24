const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      teal: colors.teal,
      white: colors.white,
      black: colors.black,
      pink: colors.pink,
      emerald: colors.emerald,
      purple: colors.purple,
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
      fontFamily: {
        sans: ['KarlaVariable', ...defaultTheme.fontFamily.sans],
        system: defaultTheme.fontFamily.sans,
      },
      transitionProperty: {
        'background-color': 'background-color',
      },
    },
  },
  variants: {},
  plugins: [],
}
