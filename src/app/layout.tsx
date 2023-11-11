import { Analytics } from '@vercel/analytics/react';
import { Fira_Code, Inter } from 'next/font/google';

import { Layout } from '@/components/Layout/Layout';
import { BASE_OPEN_GRAPH, THEME_COLOR } from '@/constants';
import { AppProviders } from '@/providers/AppProviders';

import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import '@/assets/styles/globals.css';

const { APP_URL, NEXT_PUBLIC_VERCEL_URL } = process.env;

const metadataBaseUrl = NEXT_PUBLIC_VERCEL_URL
	? `https://${NEXT_PUBLIC_VERCEL_URL}`
	: APP_URL || null;

export const metadata: Metadata = {
	title: {
		default: 'AdiPol',
		template: '%s | AdiPol',
	},
	description:
		'AdiPol.dev - Blog technologiczny, głownie związany ze światem stron internetowych.',
	manifest: '/manifest.json',
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
			color: THEME_COLOR,
		},
	},
	...(metadataBaseUrl && {
		metadataBase: new URL(metadataBaseUrl),
	}),
};

export const viewport: Viewport = {
	themeColor: THEME_COLOR,
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
				<Analytics />
			</body>
		</html>
	);
}
