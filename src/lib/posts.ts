import { promises } from 'node:fs';
import path from 'node:path';

import { LATEST_POSTS_LIMIT } from '@/constants';
import type { Post, PostTag } from '@/types';
import { validatePostData } from '@/utils/validation';

import { serializeSource } from './markdown';

const postsPath = path.join(process.cwd(), 'posts');

const getPostSlugs = async () =>
	(await promises.readdir(postsPath)).map((file) => file.slice(0, -4));

const getAllTags = async () =>
	(await getAllPosts()).flatMap(({ data }) => data.tags);

const filterTags = (tags: string[]) =>
	tags.filter((tag, index) => tags.indexOf(tag) === index);

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
	const content = await promises.readFile(
		path.join(postsPath, `${slug}.mdx`),
		'utf8'
	);
	const source = await serializeSource(content);
	const postData = source.frontmatter;

	if (!validatePostData(postData)) {
		return null;
	}

	const data = {
		...postData,
		tags: postData.tags.map((tag) => tag.toLowerCase()),
	};

	return { slug, data, source };
};

export const getPostsByTag = async (tag: string) =>
	(await getAllPosts()).filter(({ data }) => data.tags.includes(tag));

export const getAllPosts = async () => {
	const slugs = await getPostSlugs();
	const posts = await Promise.all(slugs.map(getPostBySlug));

	return posts
		.flatMap((post) => (post ? [post] : []))
		.sort((a, b) =>
			Date.parse(a.data.date) > Date.parse(b.data.date) ? -1 : 1
		);
};

export const getLatestPosts = async () =>
	(await getAllPosts()).slice(0, LATEST_POSTS_LIMIT);

export const getTagsCounter = async (): Promise<PostTag[]> => {
	const tags = await getAllTags();

	return filterTags(tags).map((tag) => ({
		tag,
		length: tags.filter((t) => t === tag).length,
	}));
};

export const getPostsParams = async () =>
	(await getPostSlugs()).map((slug) => ({ slug }));

export const getTagsParams = async () => {
	const tags = await getAllTags();
	return filterTags(tags).map((slug) => ({ slug }));
};
