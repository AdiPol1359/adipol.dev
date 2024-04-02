import defaultTheme from 'tailwindcss/defaultTheme';

import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{ts,tsx}', '.storybook/preview.tsx'],
	theme: {
		extend: {
			backgroundColor: {
				primary: "theme('colors.navy.950 / <alpha-value>')",
				secondary: "theme('colors.navy.900 / <alpha-value>')",
			},
			borderColor: {
				primary: "theme('colors.navy.800 / <alpha-value>')",
			},
			minHeight: {
				hero: '53rem',
			},
			textColor: {
				light: "theme('colors.navy.300 / <alpha-value>')",
				dark: "theme('colors.navy.700 / <alpha-value>')",
				primary: "theme('colors.navy.400 / <alpha-value>')",
				secondary: "theme('colors.navy.500 / <alpha-value>')",
				heading: "theme('colors.navy.50 / <alpha-value>')",
				muted: '#e0e0e0',
			},
			colors: {
				brand: '#4f46e5',
				danger: '#e14343',
				navy: {
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
				tablet: '768px',
				laptop: '1024px',
				desktop: '1280px',
			},
			spacing: {
				inherit: 'inherit',
			},
		},
	},
	plugins: [],
} satisfies Config;
