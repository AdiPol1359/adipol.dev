import { HeaderMenuNavigation } from './HeaderMenuNavigation/HeaderMenuNavigation';

import { Button } from '@/components/ui/Button/Button';

export const HeaderMenu = () => (
	<div className="flex flex-col gap-y-6 rounded-xl border-2 border-primary/40 bg-secondary p-5 tablet:flex tablet:flex-row tablet:items-center tablet:gap-x-8 tablet:rounded-none tablet:border-none tablet:bg-transparent tablet:p-0">
		<HeaderMenuNavigation />
		<Button variant="outline" fill>
			Kontakt
		</Button>
	</div>
);
