import type { ImageMetadata } from 'astro';

export interface Recommendation {
	readonly photo: ImageMetadata;
	readonly name: string;
	readonly linkedIn: string;
	readonly position: string;
	readonly content: string;
}
