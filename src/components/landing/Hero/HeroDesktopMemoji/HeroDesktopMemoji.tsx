import { HeroDesktopMemojiDiscoverMore } from './HeroDesktopMemojiDiscoverMore';
import { HeroDesktopMemojiImage } from './HeroDesktopMemojiImage';

export const HeroDesktopMemoji = () => (
	<div className="hidden laptop:relative laptop:mx-12 laptop:block">
		<HeroDesktopMemojiImage />
		<HeroDesktopMemojiDiscoverMore />
	</div>
);
