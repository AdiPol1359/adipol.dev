/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
				mono: ['var(--font-fira-code)', ...defaultTheme.fontFamily.mono],
			},
			colors: {
				'white-black': 'var(--white-black)',
				border: 'var(--border)',
				primary: 'var(--primary)',
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme('colors.gray.700'),
						a: {
							color: theme('colors.primary'),
						},
						code: {
							color: theme('colors.violet.600'),
							background: theme('colors.neutral.100'),
						},
						img: {
							'border-radius': theme('borderRadius.lg'),
						},
						'ul li::marker': {
							color: theme('colors.gray.300'),
						},
						'ol li::marker': {
							color: theme('colors.gray.500'),
						},
						'h1,h2,h3,h4,h5,h6': {
							color: theme('colors.gray.900'),
						},
					},
				},
				dark: {
					css: {
						color: theme('colors.gray.300'),
						code: {
							color: theme('colors.violet.500'),
							background: theme('colors.neutral.800'),
						},
						'ul li::marker': {
							color: theme('colors.gray.700'),
						},
						'ol li::marker': {
							color: theme('colors.gray.400'),
						},
						'h1,h2,h3,h4,h5,h6': {
							color: theme('colors.gray.100'),
						},
					},
				},
			}),
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
