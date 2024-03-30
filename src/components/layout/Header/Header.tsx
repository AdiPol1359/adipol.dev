import Link from 'next/link';

import { HeaderCollapse } from './HeaderCollapse/HeaderCollapse';
import { HeaderMenu } from './HeaderMenu/HeaderMenu';

import { PageLogo } from '@/components/common/PageLogo';
import { Container } from '@/components/ui/Container/Container';

export const Header = () => (
	<Container
		as="header"
		className="relative flex h-16 items-center justify-between py-4 desktop:py-12"
	>
		<Link href="/">
			<PageLogo />
		</Link>
		<HeaderCollapse>
			<HeaderMenu />
		</HeaderCollapse>
	</Container>
);
