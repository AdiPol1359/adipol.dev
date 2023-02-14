'use client';

import { useState } from 'react';

import type { Post } from '@/types';

import { PostsList } from '../PostsList/PostsList';
import { SearchBar } from './SearchBar';

type AllPostsListProps = Readonly<{
	posts: Post[];
}>;

export const AllPostsList = ({ posts }: AllPostsListProps) => {
	const [filteredPosts, setFilteredPosts] = useState(posts);

	return (
		<>
			<SearchBar posts={posts} onChange={setFilteredPosts} />
			<PostsList posts={filteredPosts} />
		</>
	);
};
