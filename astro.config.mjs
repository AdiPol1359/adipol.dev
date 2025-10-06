// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://beta.adipol.dev',
	markdown: {
		shikiConfig: { theme: 'nord' },
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
