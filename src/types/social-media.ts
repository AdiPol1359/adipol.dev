import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

export interface SocialMedia {
	readonly icon: AstroComponentFactory;
	readonly name: string;
	readonly url: string;
}
