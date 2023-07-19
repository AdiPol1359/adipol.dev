import Link from 'next/link';

import type { PostTag } from '@/types';

type PostTagListProps = Readonly<{
	tags: PostTag[];
}>;

export const PostTagList = ({ tags }: PostTagListProps) => (
	<ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 md:mt-4">
		{tags.map(({ tag, length }) => (
			<li key={tag}>
				<Link href={`/tagi/${tag}`} className="font-medium text-white-black">
					<span className="text-primary hover:text-blue-500 dark:hover:text-blue-400">
						#{tag.toUpperCase()}
					</span>{' '}
					({length})
				</Link>
			</li>
		))}
	</ul>
);
