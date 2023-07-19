import { ActiveLink } from '@/components/ActiveLink';

const items = [
	{ href: '/posty', title: 'Posty' },
	{ href: '/tagi', title: 'Tagi' },
	{ href: '/projekty', title: 'Projekty' },
	{ href: '/o-mnie', title: 'O mnie' },
] as const;

export const HeaderNavigationList = () => (
	<ul className="flex flex-col items-center gap-y-10 sm:flex-row sm:gap-x-8">
		{items.map(({ href, title }) => (
			<li key={href}>
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
);
