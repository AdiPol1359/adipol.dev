import { ProjectListCardDetails } from './ProjectListCardDetails';
import { ProjectListCardImage } from './ProjectListCardImage';
import { ProjectListCardTechnologies } from './ProjectListCardTechnologies';
import { ProjectListCardViewProjectButton } from './ProjectListCardViewProjectButton';

import { Card } from '@/components/ui/Card/Card';

import type { Project } from '@/types';

type ProjectListCardProps = Readonly<{
	project: Project;
}>;

export const ProjectListCard = ({
	project: { image, title, description, url, technologies },
}: ProjectListCardProps) => (
	<Card as="article" className="flex flex-col gap-y-4 laptop:h-full">
		<ProjectListCardImage src={image} alt={title} />
		<ProjectListCardDetails title={title} description={description} />
		<ProjectListCardTechnologies technologies={technologies} />
		<div className="mt-auto">
			<ProjectListCardViewProjectButton url={url} />
		</div>
	</Card>
);
