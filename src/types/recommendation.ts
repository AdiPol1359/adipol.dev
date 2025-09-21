import type { ImageMetadata } from 'astro';

export interface Recommendation {
	readonly photo: ImageMetadata;
	readonly fullName: string;
	readonly linkedInUrl: string;
	readonly position: string;
	readonly content: string;
}
