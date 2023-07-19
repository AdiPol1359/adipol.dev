import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Fira_Code, Inter } from 'next/font/google';
import type { ReactNode } from 'react';

import { Layout } from '@/components/Layout/Layout';
import { AppProviders } from '@/providers/AppProviders';

const THEME_COLOR = '#2563eb';

export const metadata: Metadata = {
	title: {
		default: 'AdiPol',
		template: '%s | AdiPol',
	},
	description:
		'AdiPol.dev - Blog technologiczny, głownie związany ze światem stron internetowych.',
	manifest: '/manifest.json',
	themeColor: THEME_COLOR,
	openGraph: {
		type: 'website',
		siteName: 'AdiPol Dev',
		locale: 'pl_PL',
		url: 'https://adipol.dev/',
	},
};

const inter = Inter({
	weight: 'variable',
	variable: '--font-inter',
	subsets: ['latin', 'latin-ext'],
});

const firaCode = Fira_Code({
	weight: 'variable',
	variable: '--font-fira-code',
	subsets: ['latin', 'latin-ext'],
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
