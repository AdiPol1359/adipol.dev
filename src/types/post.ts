import type { ImageMetadata } from 'astro';

export interface PostSource {
	readonly title: string;
	readonly url: string;
}

export interface Post {
	readonly slug: string;
	readonly date: Date;
	readonly thumbnail: ImageMetadata;
	readonly title: string;
	readonly introduction: string;
	readonly sources: PostSource[];
	readonly tags: string[];
}
