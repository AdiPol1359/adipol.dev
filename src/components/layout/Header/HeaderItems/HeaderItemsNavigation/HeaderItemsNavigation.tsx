import { items } from './HeaderItemsNavigation.items';

import { ActiveLink } from '@/components/common/ActiveLink';

export const HeaderItemsNavigation = () => (
	<nav>
		<ul className="flex flex-col items-center gap-y-7 desktop:flex-row desktop:gap-x-8">
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
