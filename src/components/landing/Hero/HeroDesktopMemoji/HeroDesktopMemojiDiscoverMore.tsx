import ArrowDown from '@/assets/svg/arrow-down.svg';

export const HeroDesktopMemojiDiscoverMore = () => (
	<div className="absolute -bottom-44 left-0 w-full space-y-7 text-center text-heading">
		<p className="text-lg">💎 Odkryj więcej na dole 💎</p>
		<button type="button" aria-label="Odkryj więcej na dole">
			<ArrowDown aria-hidden />
		</button>
	</div>
);
