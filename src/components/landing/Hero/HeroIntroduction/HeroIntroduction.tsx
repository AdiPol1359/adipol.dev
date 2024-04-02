import { HeroIntroductionCTA } from './HeroIntroductionCTA';
import { HeroIntroductionHeader } from './HeroIntroductionHeader';
import { HeroIntroductionSocials } from './HeroIntroductionSocials';

export const HeroIntroduction = () => (
	<div className="flex flex-col gap-y-9 laptop:flex-1 laptop:gap-y-11">
		<HeroIntroductionHeader />
		<HeroIntroductionSocials />
		<HeroIntroductionCTA />
	</div>
);
