import { AboutMeSection } from '@/components/AboutMeSection';
import { ExperienceSection } from '@/components/ExperienceSection/ExperienceSection';
import { RecommendationsSection } from '@/components/RecommendationsSection/RecommendationsSection';
import { SkillsSection } from '@/components/SkillsSection/SkillsSection';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'O mnie',
};

export default function AboutMePage() {
	return (
		<div className="space-y-10">
			<AboutMeSection />
			<SkillsSection />
			<RecommendationsSection />
			<ExperienceSection />
		</div>
	);
}
