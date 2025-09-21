import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

export interface Skill {
	readonly name: string;
	readonly color: string;
	readonly icon: AstroComponentFactory;
	readonly url: string;
}
