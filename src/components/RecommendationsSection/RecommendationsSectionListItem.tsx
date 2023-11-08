import Image from 'next/image';

import type { Recommendation } from '@/types';

type RecommendationsSectionListItemProps = Readonly<{
	recommendation: Recommendation;
}>;

export const RecommendationsSectionListItem = ({
	recommendation: { image, name, positions, content },
}: RecommendationsSectionListItemProps) => (
	<li>
		<blockquote className="space-y-2.5 rounded-lg border-l-4 border-blue-300/90 bg-blue-100/40 p-4 dark:border-blue-600/60 dark:bg-blue-200/5">
			<div className="flex items-center gap-x-3 text-zinc-900 dark:text-zinc-100">
				<Image src={image} alt={name} className="w-14 rounded-full" />
				<hgroup className="text-sm">
					<h3 className="font-semibold">{name}</h3>
					<p>{positions.join(' • ')}</p>
				</hgroup>
			</div>
			<p className="leading-[1.6rem] text-zinc-700 dark:text-zinc-200">
				{content}
			</p>
		</blockquote>
	</li>
);
