'use client';

import { useState } from 'react';

import { PostsList } from '../PostsList/PostsList';
import { PostsSearchBar } from './PostsSearchBar/PostsSearchBar';

import type { Post } from '@/types';

type AllPostsProps = Readonly<{
	posts: Post[];
}>;

export const AllPosts = ({ posts }: AllPostsProps) => {
	const [filteredPosts, setFilteredPosts] = useState(posts);

	return (
		<>
			<PostsSearchBar posts={posts} onSearch={setFilteredPosts} />
			<PostsList posts={filteredPosts} />
		</>
	);
};
