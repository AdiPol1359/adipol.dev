module.exports = {
	'*.{ts,tsx,css,json,md,mdx}': ['pnpm prettier --write'],
	'*.{ts,tsx}': [() => 'pnpm lint:fix'],
};
