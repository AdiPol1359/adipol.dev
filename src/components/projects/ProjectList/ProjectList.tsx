import { ProjectListCard } from './ProjectListCard/ProjectListCard';

import { Container } from '@/components/ui/Container/Container';
import { projects } from '@/data/projects';

export const ProjectList = () => (
	<Container
		as="ul"
		className="grid grid-cols-1 gap-y-5 laptop:grid-cols-2 laptop:gap-9"
	>
		{projects.map((project) => (
			<li key={project.title}>
				<ProjectListCard project={project} />
			</li>
		))}
	</Container>
);
