import SolidArrow from '@/assets/svg/solid-arrow-1.svg';
import { Emoji } from '@/components/common/Emoji';
import { SocialList } from '@/components/common/SocialList';

export const HeroIntroductionSocials = () => (
	<div className="flex flex-col items-center gap-y-3.5 laptop:items-start">
		<p className="relative text-heading">
			Znajdziesz mnie tutaj <Emoji type="🤙" />
			<SolidArrow
				className="hidden laptop:absolute laptop:-right-12 laptop:top-1/2 laptop:block"
				aria-hidden
			/>
		</p>
		<SocialList />
	</div>
);
