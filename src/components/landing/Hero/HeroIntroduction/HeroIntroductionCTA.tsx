import Link from 'next/link';

import { Button } from '@/components/ui/Button/Button';

export const HeroIntroductionCTA = () => (
	<div className="flex gap-x-3.5 laptop:gap-x-4">
		<Button variant="outline" asChild>
			<Link href="/projekty">Moje portfolio</Link>
		</Button>
		<Button color="navy.700" variant="outline" asChild>
			<Link href="#">Blog</Link>
		</Button>
	</div>
);
