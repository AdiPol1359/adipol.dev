import '@/styles/globals.css';

import { Fira_Code, Inter } from '@next/font/google';
import type { ReactNode } from 'react';

import { Layout } from '@/components/Layout/Layout';
import { AppProviders } from '@/providers/AppProviders';

const inter = Inter({
	weight: 'variable',
	variable: '--font-inter',
});

const firaCode = Fira_Code({
	weight: 'variable',
	variable: '--font-fira-code',
});

export default function RootLayout({
	children,
}: {
	readonly children: ReactNode;
}) {
	return (
		<html lang="pl" className={`${inter.variable} ${firaCode.variable}`}>
			<body>
				<AppProviders>
					<Layout>{children}</Layout>
				</AppProviders>
			</body>
		</html>
	);
}
