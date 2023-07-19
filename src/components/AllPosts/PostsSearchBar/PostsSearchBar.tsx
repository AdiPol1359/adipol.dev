import { BiSearch } from 'react-icons/bi';

import { usePostsSearchBar } from './usePostsSearchBar';

import type { Post } from '@/types';

type PostsSearchBarProps = Readonly<{
	posts: Post[];
	onSearch: (posts: Post[]) => void;
}>;

export const PostsSearchBar = ({ posts, onSearch }: PostsSearchBarProps) => {
	const { value, handleInputChange } = usePostsSearchBar({ posts, onSearch });

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
				className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-xl text-neutral-500"
				aria-label="Wyszukaj artykuł"
			/>
		</div>
	);
};
