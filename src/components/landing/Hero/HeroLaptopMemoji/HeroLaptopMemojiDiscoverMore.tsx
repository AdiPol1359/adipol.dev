import ArrowDown from '@/assets/svg/arrow-down.svg';
import { Emoji } from '@/components/common/Emoji';

export const HeroLaptopMemojiDiscoverMore = () => (
	<div className="absolute -bottom-44 left-0 flex w-full flex-col items-center gap-y-7 text-heading">
		<p className="text-lg" aria-hidden>
			<Emoji type="💎" /> Odkryj więcej na dole <Emoji type="💎" />
		</p>
		<a
			href="#recent-posts"
			aria-label="Odkryj więcej na dole"
			className="animate-bounce"
		>
			<ArrowDown aria-hidden />
		</a>
	</div>
);
