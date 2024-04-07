import ArrowDown from '@/assets/svg/arrow-down.svg';
import { Emoji } from '@/components/common/Emoji';

export const HeroLaptopMemojiDiscoverMore = () => (
	<div className="absolute -bottom-44 left-0 w-full space-y-7 text-center text-heading">
		<p className="text-lg" aria-hidden>
			<Emoji type="💎" /> Odkryj więcej na dole <Emoji type="💎" />
		</p>
		<button type="button" aria-label="Odkryj więcej na dole">
			<ArrowDown aria-hidden />
		</button>
	</div>
);
