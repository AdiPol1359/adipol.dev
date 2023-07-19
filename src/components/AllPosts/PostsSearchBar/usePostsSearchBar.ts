import { useState } from 'react';

import type { ChangeEvent } from 'react';

import type { Post } from '@/types';

export const usePostsSearchBar = ({
	posts,
	onSearch,
}: {
	posts: Post[];
	onSearch: (posts: Post[]) => void;
}) => {
	const [value, setValue] = useState('');

	const handleInputChange = ({
		target: { value },
	}: ChangeEvent<HTMLInputElement>) => {
		const searchValue = value.trim().toLowerCase();
		const filteredPosts = posts.filter(
			({ data: { title, introduction } }) =>
				title.toLowerCase().includes(searchValue) ||
				introduction?.toLowerCase().includes(searchValue),
		);

		onSearch(filteredPosts);
		setValue(value);
	};

	return { value, handleInputChange };
};
