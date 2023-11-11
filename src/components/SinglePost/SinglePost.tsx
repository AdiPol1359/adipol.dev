import Image from 'next/image';

import { PostContent } from './PostContent';

import { formatDate } from '@/utils/intl';

import type { Post } from '@/types';

type SinglePostProps = Readonly<{
	post: Post;
}>;

export const SinglePost = ({
	post: {
		data: { date, title, thumbnail },
		source,
	},
}: SinglePostProps) => {
	const creationDate = new Date(date);

	return (
		<article>
			<header className="flex flex-col items-center border-b border-border pb-10">
				<time
					dateTime={creationDate.toISOString()}
					aria-label={`Artykuł dodano ${formatDate(creationDate)}`}
					className="font-medium text-gray-500 dark:text-gray-400"
				>
					{formatDate(creationDate)}
				</time>
				<h1 className="mt-2.5 text-center text-5xl font-extrabold text-gray-900 dark:text-gray-100">
					{title}
				</h1>
				{thumbnail && (
					<Image
						src={thumbnail.path}
						width={thumbnail.width}
						height={thumbnail.height}
						alt={`Miniaturka posta ${title}`}
						className="mt-7 rounded-lg border-2 border-gray-900 dark:border-gray-200"
					/>
				)}
			</header>
			<div className="prose mt-10 max-w-none dark:prose-dark">
				<PostContent source={source} />
			</div>
		</article>
	);
};
