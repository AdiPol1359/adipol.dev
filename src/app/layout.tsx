import { Header } from '@/components/layout/Header/Header';
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
		<html lang="en" className={poppins.variable}>
			<body className="bg-primary">
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
