import type { StaticImageData } from 'next/image';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface Project {
	readonly thumbnail: StaticImageData;
	readonly title: string;
	readonly description: string;
	readonly url: string;
	readonly technologies: string[];
}

export interface PostTag {
	readonly tag: string;
	readonly length: number;
}

export interface PostThumbnail {
	readonly path: string;
	readonly width: number;
	readonly height: number;
}

export interface PostData {
	readonly date: string;
	readonly title: string;
	readonly introduction?: string;
	readonly thumbnail?: PostThumbnail;
	readonly tags: string[];
}

export interface Post {
	readonly slug: string;
	readonly data: PostData;
	readonly source: MDXRemoteSerializeResult;
}

export type Params<T extends string> = {
	readonly [K in T]: string;
};
