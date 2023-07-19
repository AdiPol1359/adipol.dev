'use client';

import { twJoin } from 'tailwind-merge';

import { HamburgerButton } from './HamburgerButton';
import { useHeaderNavigation } from './useHeaderNavigation';

import type { ReactNode } from 'react';

type HeaderNavigationProps = Readonly<{
	children: ReactNode;
}>;

export const HeaderNavigation = ({ children }: HeaderNavigationProps) => {
	const { isExpanded, toggleIsExpanded } = useHeaderNavigation();

	return (
		<>
			<HamburgerButton expanded={isExpanded} onClick={toggleIsExpanded} />
			<nav
				id="header-navigation"
				className={twJoin(
					'col-span-2 mt-8 sm:mt-0 sm:flex',
					!isExpanded && 'hidden',
				)}
			>
				{children}
			</nav>
		</>
	);
};
