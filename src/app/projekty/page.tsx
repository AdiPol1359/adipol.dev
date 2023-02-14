import { PageTitle } from '@/components/PageTitle';
import { ProjectsList } from '@/components/ProjectsList/ProjectsList';

export default function ProjectsPage() {
	return (
		<>
			<PageTitle>Moje projekty</PageTitle>
			<ProjectsList />
		</>
	);
}
