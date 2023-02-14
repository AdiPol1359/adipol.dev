import { projects } from '@/data/projects';

import { Project } from './Project';

export const ProjectsList = () => (
	<ul className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
		{projects.map(({ url, ...project }) => (
			<li key={url}>
				<a href={url} className="[&>*>img]:hover:scale-[1.02]">
					<Project {...project} />
				</a>
			</li>
		))}
	</ul>
);
