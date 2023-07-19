import { Fira_Code, Inter } from 'next/font/google';

import { Layout } from '@/components/Layout/Layout';
import { AppProviders } from '@/providers/AppProviders';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import '@/styles/globals.css';

export const metadata: Metadata = {
	title: {
		default: 'AdiPol',
		template: '%s | AdiPol',
	},
	description:
		'AdiPol.dev - Blog technologiczny, głownie związany ze światem stron internetowych.',
	manifest: '/manifest.json',
	themeColor: '#2563eb',
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
