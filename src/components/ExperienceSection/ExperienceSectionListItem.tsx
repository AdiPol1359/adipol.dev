import { twJoin } from 'tailwind-merge';

import type { Experience } from '@/types';

type ExperienceSectionListItemProps = Readonly<{
	experience: Experience;
}>;

export const ExperienceSectionListItem = ({
	experience: { title, name, href, start, end },
}: ExperienceSectionListItemProps) => (
	<li
		className={twJoin(
			'relative pl-9',
			'before:absolute before:left-0 before:top-1/2 before:block before:h-4 before:w-4 before:-translate-y-1/2 before:rounded-full before:bg-gray-300 before:transition-colors hover:before:bg-blue-400 dark:before:bg-zinc-800 dark:hover:before:bg-blue-600',
			'after:absolute after:left-2 after:top-full after:block after:h-20 after:w-0.5 after:-translate-x-1/2 after:-translate-y-6 after:bg-gray-300 last:after:hidden dark:after:bg-zinc-800',
		)}
	>
		<a
			href={href}
			target="_blank"
			rel="norefferer"
			className="space-y-0.5 text-sm"
		>
			<h3 className="text-lg font-semibold text-white-black">{title}</h3>
			<p className="font-medium text-primary">{name}</p>
			<p className="text-gray-600 dark:text-gray-500">
				{start} - {end || 'obecnie'}
			</p>
		</a>
	</li>
);
