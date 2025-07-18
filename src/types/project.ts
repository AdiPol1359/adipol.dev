import type { ImageMetadata } from 'astro';

export interface Project {
	readonly thumbnail: ImageMetadata;
	readonly title: string;
	readonly description: string;
	readonly url: string;
}
