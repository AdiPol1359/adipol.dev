import { HeaderItemsNavigation } from './HeaderItemsNavigation/HeaderItemsNavigation';

import { Button } from '@/components/ui/Button/Button';

export const HeaderItems = () => (
	<div className="flex flex-col items-center gap-y-7 desktop:flex-row desktop:gap-x-8">
		<HeaderItemsNavigation />
		<Button fill>Kontakt</Button>
	</div>
);
