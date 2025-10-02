import type { ImageMetadata } from 'astro';

interface PostSource {
	readonly title: string;
	readonly url: string;
}

export interface Post {
	readonly slug: string;
	readonly date: Date;
	readonly thumbnail: ImageMetadata;
	readonly title: string;
	readonly introduction: string;
	readonly readingTime: number;
	readonly sources: PostSource[];
	readonly tags: string[];
}
