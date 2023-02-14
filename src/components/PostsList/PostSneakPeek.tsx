import Link from 'next/link';

import type { Post } from '@/types';
import { formatDate } from '@/utils/intl';

type PostSneakPeekProps = Readonly<{
	post: Post;
}>;

export const PostSneakPeek = ({
	post: {
		data: { date, introduction, tags, title },
		slug,
	},
}: PostSneakPeekProps) => {
	const creationDate = new Date(date);
	const href = `/posty/${slug}`;

	return (
		<article className="border-t border-border py-12">
			<time
				dateTime={creationDate.toISOString()}
				aria-label={`Artykuł dodano ${formatDate(creationDate)}`}
				className="font-medium text-gray-500 dark:text-gray-300"
			>
				{formatDate(creationDate)}
			</time>
			<div className="mt-2 leading-6">
				<Link href={href} className="inline-block">
					<h2 className="text-2xl font-bold text-white-black">{title}</h2>
				</Link>
				<ul className="flex gap-x-3">
					{tags.map((tag) => (
						<li key={tag}>
							<Link
								href={`/tagi/${tag}`}
								className="text-sm font-medium uppercase text-primary hover:text-blue-500 dark:hover:text-blue-400"
							>
								{tag}
							</Link>
						</li>
					))}
				</ul>
			</div>
			{introduction && (
				<p className="mt-4 text-gray-700 dark:text-gray-100">{introduction}</p>
			)}
			<Link
				href={href}
				className="mt-4 inline-block font-medium text-primary hover:text-blue-500 dark:hover:text-blue-400"
			>
				Czytaj więcej
			</Link>
		</article>
	);
};
