/**
 * @type {import('lint-staged').Configuration}
 */
export default {
	'*.{astro,ts,tsx}': ['pnpm lint:fix', 'pnpm format'],
	'*': 'pnpm format',
};
