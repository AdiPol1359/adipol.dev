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
					'invisible absolute left-0 top-full w-full -translate-y-2.5 px-inherit opacity-0 transition-header-collapse duration-200 desktop:visible desktop:static desktop:w-fit desktop:translate-y-0 desktop:px-0 desktop:opacity-100 desktop:transition-none',
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
