import { HeroLaptopMemojiDiscoverMore } from './HeroLaptopMemojiDiscoverMore';
import { HeroLaptopMemojiImage } from './HeroLaptopMemojiImage';

export const HeroLaptopMemoji = () => (
	<div className="hidden laptop:relative laptop:mx-12 laptop:block">
		<HeroLaptopMemojiImage />
		<HeroLaptopMemojiDiscoverMore />
	</div>
);
