import defaultTheme from 'tailwindcss/defaultTheme';

import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{ts,tsx}', '.storybook/preview.tsx'],
	theme: {
		extend: {
			colors: {
				danger: '#e14343',
				primary: '#4f46e5',
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
		},
	},
	plugins: [],
} satisfies Config;
