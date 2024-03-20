const path = require('node:path');

module.exports = {
	'*.{js,mjs,ts,mts,tsx,css,json,md}': 'pnpm format',
	'*.{ts,mts,tsx}': [
		(filenames) =>
			`pnpm lint:fix --file ${filenames
				.map((filename) => path.relative(process.cwd(), filename))
				.join(' --file ')}`,
	],
};
