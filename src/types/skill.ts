import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

export interface Skill {
	readonly name: string;
	readonly icon: AstroComponentFactory;
	readonly color: string;
	readonly url: string;
}
