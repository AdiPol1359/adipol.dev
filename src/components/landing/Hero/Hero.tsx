import { HeroAboutMe } from './HeroAboutMe';
import { HeroIntroduction } from './HeroIntroduction/HeroIntroduction';
import { HeroLaptopMemoji } from './HeroLaptopMemoji/HeroLaptopMemoji';
import { HeroMobileMemoji } from './HeroMobileMemoji';

import { Container } from '@/components/ui/Container/Container';

export const Hero = () => (
	<Container
		as="section"
		className="mt-8 flex flex-col items-center gap-y-9 tablet:mt-0 laptop:-mt-40 laptop:h-screen laptop:min-h-hero laptop:flex-row"
	>
		<HeroMobileMemoji />
		<HeroIntroduction />
		<HeroLaptopMemoji />
		<HeroAboutMe />
	</Container>
);
