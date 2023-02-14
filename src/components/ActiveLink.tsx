'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type ActiveLinkProps = Readonly<{
	activeClassName?: string;
}> &
	ComponentProps<typeof Link>;

export const ActiveLink = ({
	activeClassName,
	className,
	href,
	...props
}: ActiveLinkProps) => {
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
