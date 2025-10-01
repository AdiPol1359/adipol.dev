import type { ImageMetadata } from 'astro';

interface OpenGraphArticle {
	readonly type: 'article';
	readonly publishedTime: Date;
	readonly author: string;
	readonly tags: string[];
}

interface OpenGraphWebsite {
	readonly type: 'website';
}

export interface HeadOptions {
	readonly title?: string;
	readonly description?: string;
	readonly image?: ImageMetadata;
	readonly openGraph?: OpenGraphArticle | OpenGraphWebsite;
}
