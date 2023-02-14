'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { useCallback, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Container } from '@/components/Container';
import { useRouteChange } from '@/hooks/useRouteChange';

import { HamburgerButton } from './HamburgerButton';
import { SwitchThemeButton } from './SwitchThemeButton';

type HeaderWrapperProps = Readonly<{
	children: ReactNode;
}>;

export const HeaderWrapper = ({ children }: HeaderWrapperProps) => {
	const [isActive, setIsActive] = useState(false);

	const handleRouteChange = useCallback(() => {
		setIsActive(false);
	}, []);

	useRouteChange(handleRouteChange);

	return (
		<Container
			as="header"
			className="flex flex-col py-4 text-white-black sm:flex-row sm:justify-between sm:py-10"
		>
			<div className="flex items-center justify-between">
				<Link href="/" className="text-xl font-bold sm:text-2xl">
					AdiPol Dev
				</Link>
				<HamburgerButton
					active={isActive}
					onClick={() => setIsActive((prev) => !prev)}
				/>
			</div>
			<nav
				id="header-navigation"
				className={twMerge(
					'mt-8 flex flex-col items-center gap-y-10 gap-x-8 sm:mt-0 sm:flex-row [&>*]:gap-y-10 [&>*]:gap-x-8',
					!isActive && 'hidden sm:flex'
				)}
			>
				{children}
				<SwitchThemeButton />
			</nav>
		</Container>
	);
};
