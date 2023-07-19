'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

import type { LinkProps } from 'next/link';

type ActiveLinkProps<T> = Readonly<{
	activeClassName?: string;
}> &
	LinkProps<T>;

export const ActiveLink = <T,>({
	activeClassName,
	className,
	href,
	...props
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	const isActive = pathname === href.toString();

	return (
		<Link
			href={href}
			className={twMerge(className, isActive && activeClassName)}
			{...props}
		/>
	);
};
