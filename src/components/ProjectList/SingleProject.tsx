import Image from 'next/image';

import type { Project } from '@/types';

type SingleProjectProps = Readonly<{
	project: Project;
}>;

export const SingleProject = ({
	project: { thumbnail, title, description, technologies },
}: SingleProjectProps) => (
	<article className="space-y-3">
		<Image
			src={thumbnail}
			alt={title}
			placeholder="blur"
			className="rounded-xl transition-transform"
		/>
		<hgroup>
			<h2 className="text-xl font-bold text-white-black">{title}</h2>
			<p className="text-sm text-gray-600 dark:text-neutral-200">
				{description}
			</p>
		</hgroup>
		<ul className="flex flex-wrap gap-1.5">
			{technologies.map((technology) => (
				<li
					key={technology}
					className="rounded-full bg-neutral-100 px-2 py-0.5 text-sm font-medium text-neutral-800 dark:bg-neutral-800 dark:text-neutral-400"
				>
					{technology}
				</li>
			))}
		</ul>
	</article>
);
