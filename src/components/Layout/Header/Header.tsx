import { ActiveLink } from '@/components/ActiveLink';

import { HeaderWrapper } from './HeaderWrapper';

const items = [
	{ href: '/posty', title: 'Posty' },
	{ href: '/tagi', title: 'Tagi' },
	{ href: '/projekty', title: 'Projekty' },
	{ href: '/o-mnie', title: 'O mnie' },
];

export const Header = () => (
	<HeaderWrapper>
		<ul className="flex flex-col items-center sm:flex-row">
			{items.map(({ href, title }) => (
				<li key={title}>
					<ActiveLink
						href={href}
						className="font-medium hover:text-primary"
						activeClassName="underline decoration-wavy decoration-2 underline-offset-4"
					>
						{title}
					</ActiveLink>
				</li>
			))}
		</ul>
	</HeaderWrapper>
);
