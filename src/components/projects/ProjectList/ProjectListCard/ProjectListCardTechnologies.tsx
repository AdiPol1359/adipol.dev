import { Badge } from '@/components/ui/Badge/Badge';

type ProjectListCardTechnologiesProps = Readonly<{
	technologies: string[];
}>;

export const ProjectListCardTechnologies = ({
	technologies,
}: ProjectListCardTechnologiesProps) => (
	<ul aria-label="Użyte technologie" className="flex flex-wrap gap-2">
		{technologies.map((technology) => (
			<li key={technology}>
				<Badge>{technology}</Badge>
			</li>
		))}
	</ul>
);
