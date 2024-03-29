import Link from 'next/link';

import { HeaderItems } from './HeaderItems/HeaderItems';
import { HeaderMenu } from './HeaderMenu/HeaderMenu';

import { PageLogo } from '@/components/common/PageLogo';
import { Container } from '@/components/ui/Container/Container';

export const Header = () => (
	<Container as="header" className="relative flex items-center">
		<Link href="/" className="mr-auto">
			<PageLogo />
		</Link>
		<HeaderMenu>
			<HeaderItems />
		</HeaderMenu>
	</Container>
);
