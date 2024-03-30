import { items } from './HeaderMenuNavigation.data';

import { ActiveLink } from '@/components/common/ActiveLink';

export const HeaderMenuNavigation = () => (
	<nav>
		<ul className="flex flex-col items-center gap-y-6 desktop:flex-row desktop:gap-x-8">
			{items.map(({ title, href }) => (
				<li key={title}>
					<ActiveLink
						href={href}
						activeClassName="text-heading"
						className="text-nowrap text-light transition-colors hover:text-heading"
					>
						{title}
					</ActiveLink>
				</li>
			))}
		</ul>
	</nav>
);
