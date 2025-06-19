/**
 * @type {import("prettier").Config}
 */
export default {
	arrowParens: 'avoid',
	singleQuote: true,
	useTabs: true,
	importOrderSeparation: true,
	importOrderSideEffects: false,
	importOrderSortSpecifiers: true,
	tailwindStylesheet: './src/assets/styles/global.css',
	plugins: [
		'prettier-plugin-astro',
		'@trivago/prettier-plugin-sort-imports',
		'prettier-plugin-tailwindcss',
	],
	importOrder: [
		'^node:(.*)$',
		'<THIRD_PARTY_MODULES>',
		'^@/(.*)$',
		'^[./]',
		'<THIRD_PARTY_TS_TYPES>',
		'<TS_TYPES>^@/(.*)$',
		'<TS_TYPES>^[./]',
	],
	overrides: [
		{
			files: '*.astro',
			options: { parser: 'astro' },
		},
	],
};
