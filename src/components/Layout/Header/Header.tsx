import Link from 'next/link';

import { HeaderNavigation } from './HeaderNavigation/HeaderNavigation';
import { HeaderNavigationList } from './HeaderNavigationList';
import { ThemeSwitcher } from './ThemeSwitcher';

import { Container } from '@/components/Container';

export const Header = () => (
	<Container
		as="header"
		className="sticky top-0 z-50 grid grid-cols-2 border-b border-border bg-white py-4 text-white-black dark:bg-neutral-900 sm:flex sm:items-center sm:justify-between sm:py-10"
	>
		<Link href="/" className="text-xl font-bold sm:text-2xl">
			AdiPol Dev
		</Link>
		<HeaderNavigation>
			<HeaderNavigationList />
			<ThemeSwitcher />
		</HeaderNavigation>
	</Container>
);
