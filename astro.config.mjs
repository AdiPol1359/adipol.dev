// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://adipol.dev',
	markdown: {
		shikiConfig: { theme: 'nord' },
	},
	prefetch: {
		defaultStrategy: 'viewport',
		prefetchAll: true,
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
