import { HeaderMenuNavigation } from './HeaderMenuNavigation/HeaderMenuNavigation';

import { Button } from '@/components/ui/Button/Button';

export const HeaderMenu = () => (
	<div className="flex flex-col gap-y-6 rounded-xl border-2 border-primary/40 bg-secondary p-5 desktop:flex desktop:flex-row desktop:items-center desktop:gap-x-10 desktop:rounded-none desktop:border-none desktop:bg-transparent desktop:p-0">
		<HeaderMenuNavigation />
		<Button fill>Kontakt</Button>
	</div>
);
