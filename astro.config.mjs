// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
	image: { layout: 'constrained' },
	markdown: {
		shikiConfig: { theme: 'nord' },
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
