import type { Metadata } from 'next';

import { PageTitle } from '@/components/PageTitle';
import { ProjectsList } from '@/components/ProjectsList/ProjectsList';

export const metadata: Metadata = {
	title: 'Projekty',
};

export default function ProjectsPage() {
	return (
		<>
			<PageTitle>Moje projekty</PageTitle>
			<ProjectsList />
		</>
	);
}
