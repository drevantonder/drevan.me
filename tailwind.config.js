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
      typography: {
        DEFAULT: {
          css: {
            a: {
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              position: 'relative',
              color: 'transparent',
              background: `linear-gradient(to right, ${colors.lightBlue[500]} 0%, ${colors.teal[500]} 100%)`,
              backgroundClip: 'text',
              transition: 'color .2s',
              '&:hover': {
                color: colors.white,
              },
            },
            'a::after': {
              content: "''",
              position: 'absolute',
              left: '-0.05em',
              right: '-0.05em',
              bottom: '0',
              top: '95%',
              background: `linear-gradient(to right, ${colors.lightBlue[500]} 0%, ${colors.teal[500]} 100%)`,
              borderRadius: '4px',
              transition: 'top .2s',
              'z-index': -1,
            },
            'a:hover::after': {
              top: '0',
            },
          },
        },
      },
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
  plugins: [require('@tailwindcss/typography')],
}
