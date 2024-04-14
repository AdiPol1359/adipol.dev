import { twJoin } from 'tailwind-merge';

import { MainLayout } from '@/components/common/MainLayout';
import { WhatInput } from '@/components/common/WhatInput';
import { APP_DESCRIPTION } from '@/constants';
import { poppins } from '@/lib/fonts';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import '@/assets/styles/globals.css';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: APP_DESCRIPTION,
};

export default function RootLayout({
	children,
}: {
	readonly children: ReactNode;
}) {
	return (
		<html lang="en" className={twJoin('scroll-smooth', poppins.variable)}>
			<body className="relative bg-primary">
				<MainLayout>{children}</MainLayout>
				<WhatInput />
			</body>
		</html>
	);
}
