import { SingleProject } from './SingleProject';

import { projects } from '@/data/projects';

export const ProjectList = () => (
	<ul className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
		{projects.map((project) => (
			<li key={project.title}>
				<a href={project.url} className="[&>*>img]:hover:scale-[1.02]">
					<SingleProject project={project} />
				</a>
			</li>
		))}
	</ul>
);
