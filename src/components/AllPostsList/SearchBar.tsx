'use client';

import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

import type { Post } from '@/types';

type SearchBarProps = Readonly<{
	posts: Post[];
	onChange: (posts: Post[]) => void;
}>;

export const SearchBar = ({ posts, onChange }: SearchBarProps) => {
	const [value, setValue] = useState('');

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		const searchValue = value.trim().toLowerCase();
		const filteredPosts = posts.filter(
			({ data: { title, introduction } }) =>
				title.toLowerCase().includes(searchValue) ||
				introduction?.toLowerCase().includes(searchValue)
		);

		setValue(value);
		onChange(filteredPosts);
	};

	return (
		<div className="relative mb-8">
			<input
				type="text"
				placeholder="Wyszukaj artykuł"
				value={value}
				onChange={handleInputChange}
				spellCheck={false}
				className="w-full rounded-lg border bg-white py-2.5 pl-4 pr-8 text-gray-900 focus:border-primary focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-100 dark:placeholder-neutral-500 focus:dark:border-neutral-600"
			/>
			<BiSearch
				className="absolute top-1/2 right-2.5 -translate-y-1/2 text-xl text-neutral-500"
				aria-label="Wyszukaj artykuł"
			/>
		</div>
	);
};
