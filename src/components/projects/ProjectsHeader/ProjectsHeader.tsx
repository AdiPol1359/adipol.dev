import { ProjectsHeaderStatistics } from './ProjectsHeaderStatistics';

import { PageHeader } from '@/components/common/PageHeader/PageHeader';
import { projects } from '@/data/projects';

export const ProjectsHeader = () => (
	<PageHeader
		title="Moje projekty"
		rightSection={<ProjectsHeaderStatistics projects={projects.length} />}
	/>
);
