import { AboutMeSection } from '@/components/AboutMeSection';
import { ExperienceSection } from '@/components/ExperienceSection/ExperienceSection';
import { SkillsSection } from '@/components/SkillsSection/SkillsSection';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'O mnie',
};

export default function AboutMePage() {
	return (
		<>
			<AboutMeSection />
			<SkillsSection />
			<ExperienceSection />
		</>
	);
}
