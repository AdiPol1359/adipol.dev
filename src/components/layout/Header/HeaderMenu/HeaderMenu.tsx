'use client';

import { twMerge } from 'tailwind-merge';

import { HeaderMenuButton } from './HeaderMenuButton';
import { useHeaderMenu } from './useHeaderMenu';

import type { ReactNode } from 'react';

const HEADER_MENU_ID = 'header-menu';

type HeaderMenuProps = Readonly<{
	children: ReactNode;
}>;

export const HeaderMenu = ({ children }: HeaderMenuProps) => {
	const { isActive, handleButtonClick } = useHeaderMenu();

	return (
		<>
			<div
				id={HEADER_MENU_ID}
				className={twMerge(
					'invisible absolute top-full w-full translate-y-1.5 rounded-xl border-2 border-primary/40 bg-secondary p-5 opacity-0 transition-header-menu duration-200 desktop:visible desktop:relative desktop:top-0 desktop:w-fit desktop:translate-y-0 desktop:border-none desktop:bg-transparent desktop:p-0 desktop:opacity-100 desktop:transition-none',
					isActive && 'visible translate-y-3.5 opacity-100',
				)}
			>
				{children}
			</div>
			<HeaderMenuButton
				active={isActive}
				controls={HEADER_MENU_ID}
				onClick={handleButtonClick}
			/>
		</>
	);
};
