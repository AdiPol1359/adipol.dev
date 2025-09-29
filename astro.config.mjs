// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
	markdown: {
		shikiConfig: { theme: 'nord' },
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
