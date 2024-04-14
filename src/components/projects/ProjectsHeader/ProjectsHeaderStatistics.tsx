import { Statistics } from '@/components/common/Statistics/Statistics';
import { pluralize } from '@/utils/intl';

const pluralizeProjects = pluralize({
	one: 'Projekt',
	few: 'Projekty',
	many: 'Projektów',
});

type ProjectsHeaderStatisticsProps = Readonly<{
	projects: number;
}>;

export const ProjectsHeaderStatistics = ({
	projects,
}: ProjectsHeaderStatisticsProps) => (
	<div className="tablet:text-end">
		<Statistics>
			<Statistics.Item name={pluralizeProjects(projects)} value={projects} />
		</Statistics>
	</div>
);
