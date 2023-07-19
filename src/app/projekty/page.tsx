import { PageTitle } from '@/components/PageTitle';
import { ProjectList } from '@/components/ProjectList/ProjectList';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projekty',
};

export default function ProjectsPage() {
	return (
		<>
			<PageTitle>Moje projekty</PageTitle>
			<ProjectList />
		</>
	);
}
