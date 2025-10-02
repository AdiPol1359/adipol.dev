import { getCollection, getEntry, render } from 'astro:content';
import readingTime from 'reading-time';

import type { Post } from '@/types/post';

const COLLECTION_NAME = 'posts';

export const getPosts = async () => {
	const entries = await getCollection(COLLECTION_NAME);

	const sortedEntries = entries.toSorted(
		(a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
	);

	return sortedEntries.map<Post>(({ id, body, data }) => ({
		slug: id,
		readingTime: body ? Math.round(readingTime(body).minutes) : 0,
		...data,
	}));
};

export const getTags = async () => {
	const posts = await getPosts();
	const tags = posts.flatMap(({ tags }) => tags).toSorted();

	return [...new Set(tags)];
};

export const getPostContentBySlug = async (slug: string) => {
	const entry = await getEntry(COLLECTION_NAME, slug);

	if (!entry) {
		throw new Error(`Post with slug "${slug}" not found.`);
	}

	const { Content } = await render(entry);

	return Content;
};
