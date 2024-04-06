import { Button } from '@/components/ui/Button/Button';

export const HeroIntroductionCTA = () => (
	<div className="flex gap-x-3.5 laptop:gap-x-4">
		<Button variant="outline">Moje portfolio</Button>
		<Button color="navy.700" variant="outline">
			Blog
		</Button>
	</div>
);
