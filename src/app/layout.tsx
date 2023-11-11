import { Fira_Code, Inter } from 'next/font/google';

import { Layout } from '@/components/Layout/Layout';
import { BASE_OPEN_GRAPH } from '@/constants';
import { AppProviders } from '@/providers/AppProviders';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import '@/assets/styles/globals.css';

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
		...BASE_OPEN_GRAPH,
	},
	icons: {
		icon: '/favicon.ico',
		apple: '/apple-touch-icon.png',
		other: {
			rel: 'mask-icon',
			url: '/safari-pinned-tab.svg',
			// TODO: ADD COLOR: https://github.com/vercel/next.js/issues/52853
		},
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
