import defaultTheme from 'tailwindcss/defaultTheme';

import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{ts,tsx}', '.storybook/preview.tsx'],
	theme: {
		extend: {
			backgroundColor: {
				primary: "theme('colors.secondary.950 / <alpha-value>')",
				secondary: "theme('colors.secondary.900 / <alpha-value>')",
			},
			borderColor: {
				primary: "theme('colors.secondary.800 / <alpha-value>')",
			},
			textColor: {
				light: "theme('colors.secondary.300 / <alpha-value>')",
				dark: "theme('colors.secondary.700 / <alpha-value>')",
				primary: "theme('colors.secondary.400 / <alpha-value>')",
				secondary: "theme('colors.secondary.500 / <alpha-value>')",
				heading: "theme('colors.secondary.50 / <alpha-value>')",
				muted: '#e0e0e0',
			},
			colors: {
				brand: '#4f46e5',
				danger: '#e14343',
				secondary: {
					50: '#f5f7fA',
					100: '#e9eef5',
					200: '#cedce9',
					300: '#a3bed6',
					400: '#729cbe',
					500: '#5080a7',
					600: '#3e668b',
					700: '#335271',
					800: '#2d475f',
					900: '#16212c',
					950: '#0e141b',
				},
			},
			fontFamily: {
				sans: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
			},
			transitionProperty: {
				'header-collapse': 'opacity, transform, visibility',
			},
			screens: {
				desktop: '768px',
			},
			spacing: {
				inherit: 'inherit',
			},
		},
	},
	plugins: [],
} satisfies Config;
