import { HeroAboutMe } from './HeroAboutMe';
import { HeroDesktopMemoji } from './HeroDesktopMemoji/HeroDesktopMemoji';
import { HeroIntroduction } from './HeroIntroduction/HeroIntroduction';
import { HeroMobileMemoji } from './HeroMobileMemoji';

import { Container } from '@/components/ui/Container/Container';

export const Hero = () => (
	<Container
		as="section"
		className="flex flex-col items-center gap-y-9 laptop:-mt-40 laptop:h-screen laptop:min-h-hero laptop:flex-row"
	>
		<HeroMobileMemoji />
		<HeroIntroduction />
		<HeroDesktopMemoji />
		<HeroAboutMe />
	</Container>
);
