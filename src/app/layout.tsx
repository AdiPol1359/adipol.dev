import { Header } from '@/components/layout/Header/Header';
import { Container } from '@/components/ui/Container/Container';
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
			<body className="bg-primary p-5 pb-0 desktop:pt-12">
				<Header />
				<Container as="main">{children}</Container>
			</body>
		</html>
	);
}
