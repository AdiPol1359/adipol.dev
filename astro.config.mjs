// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
	prefetch: {
		prefetchAll: true,
	},
	markdown: {
		shikiConfig: { theme: 'nord' },
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
