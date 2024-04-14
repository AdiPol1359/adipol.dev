import type { LinkProps } from 'next/link';

export const items: NavigationItem[] = [
	{
		title: 'Posty',
		href: '/',
	},
	{
		title: 'Tagi',
		href: '#',
	},
	{
		title: 'Projekty',
		href: '/projekty',
	},
	{
		title: 'O mnie',
		href: '#',
	},
];

interface NavigationItem {
	readonly title: string;
	readonly href: LinkProps<unknown>['href'];
}
