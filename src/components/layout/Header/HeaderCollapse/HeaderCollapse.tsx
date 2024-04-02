'use client';

import { twMerge } from 'tailwind-merge';

import { HeaderCollapseButton } from './HeaderCollapseButton';
import { useHeaderCollapse } from './useHeaderCollapse';

import type { ReactNode } from 'react';

const HEADER_COLLAPSE_ID = 'header-collapse';

type HeaderCollapseProps = Readonly<{
	children: ReactNode;
}>;

export const HeaderCollapse = ({ children }: HeaderCollapseProps) => {
	const { isActive, toggleIsActive } = useHeaderCollapse();

	return (
		<>
			<div
				id={HEADER_COLLAPSE_ID}
				className={twMerge(
					'invisible absolute left-0 top-full z-10 w-full -translate-y-2.5 px-inherit opacity-0 transition-header-collapse duration-200 tablet:visible tablet:static tablet:w-fit tablet:translate-y-0 tablet:px-0 tablet:opacity-100 tablet:transition-none',
					isActive && 'visible translate-y-0 opacity-100',
				)}
			>
				{children}
			</div>
			<HeaderCollapseButton
				active={isActive}
				controls={HEADER_COLLAPSE_ID}
				onClick={toggleIsActive}
			/>
		</>
	);
};
