import { PageTitle } from '../PageTitle';
import { ExperienceSectionListItem } from './ExperienceSectionListItem';

import { experiences } from '@/data/experiences';

export const ExperienceSection = () => (
	<section className="mt-10 space-y-6">
		<PageTitle level={2}>Moje doświadczenie</PageTitle>
		<ol className="space-y-8">
			{experiences.map((experience) => (
				<ExperienceSectionListItem
					key={experience.name}
					experience={experience}
				/>
			))}
		</ol>
	</section>
);
