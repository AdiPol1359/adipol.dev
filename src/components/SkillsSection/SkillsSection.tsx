import { PageTitle } from '../PageTitle';
import { SkillsSectionListItem } from './SkillsSectionListItem';

import { skills } from '@/data/skills';

export const SkillsSection = () => (
	<section className="mt-6 space-y-3.5">
		<PageTitle level={2}>Moje umiejętności</PageTitle>
		<ul className="grid grid-cols-4 gap-4 xxs:grid-cols-5 xs:grid-cols-7 sm:grid-cols-9 md:grid-cols-11">
			{skills.map((skill) => (
				<SkillsSectionListItem key={skill.label} skill={skill} />
			))}
		</ul>
	</section>
);
