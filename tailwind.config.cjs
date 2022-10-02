const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'cyan': {
        '400': '#69E1E9'
      },
      'purple': {
        '600': '#3529BF',
				'900': '#1A1278'
      }
		},

		extend: {
			fontFamily: {
        'sans': ['Lexend Deca', ...defaultTheme.fontFamily.sans],
      },
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
