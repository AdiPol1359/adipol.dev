import { NextSeo } from 'next-seo';

const SUFFIX = 'AdiPol';
const THEME_COLOR = '#2563eb';

type HeadTagsProps = Readonly<{
	title?: string;
	description?: string;
}>;

export const HeadTags = ({
	title,
	description = 'AdiPol.dev - Blog technologiczny, głownie związany ze światem stron internetowych.',
}: HeadTagsProps) => (
	<>
		<NextSeo
			titleTemplate={`%s | ${SUFFIX}`}
			defaultTitle={SUFFIX}
			title={title}
			description={description}
			themeColor={THEME_COLOR}
			openGraph={{
				type: 'website',
				siteName: 'AdiPol Dev',
				locale: 'pl_PL',
				url: 'https://adipol.dev/',
			}}
			additionalMetaTags={[
				{ name: 'msapplication-TileImage', content: '/mstile-150x150.png' },
				{ name: 'msapplication-TileColor', content: THEME_COLOR },
			]}
			additionalLinkTags={[
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '16x16',
					href: '/favicon-16x16.png',
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '32x32',
					href: '/favicon-32x32.png',
				},
				{
					rel: 'apple-touch-icon',
					sizes: '57x57',
					href: '/apple-touch-icon-57x57.png',
				},
				{
					rel: 'apple-touch-icon',
					sizes: '60x60',
					href: '/apple-touch-icon-60x60.png',
				},
				{
					rel: 'apple-touch-icon',
					sizes: '72x72',
					href: '/apple-touch-icon-72x72.png',
				},
				{
					rel: 'apple-touch-icon',
					sizes: '76x76',
					href: '/apple-touch-icon-76x76.png',
				},
				{
					rel: 'apple-touch-icon',
					sizes: '114x114',
					href: '/apple-touch-icon-114x114.png',
				},
				{
					rel: 'apple-touch-icon',
					sizes: '120x120',
					href: '/apple-touch-icon-120x120.png',
				},
				{
					rel: 'apple-touch-icon',
					sizes: '144x144',
					href: '/apple-touch-icon-144x144.png',
				},
				{
					rel: 'apple-touch-icon',
					sizes: '152x152',
					href: '/apple-touch-icon-152x152.png',
				},
				{
					rel: 'apple-touch-icon',
					sizes: '180x180',
					href: '/apple-touch-icon-180x180.png',
				},
				{
					rel: 'mask-icon',
					color: THEME_COLOR,
					href: '/safari-pinned-tab.svg',
				},
				{
					rel: 'manifest',
					href: '/manifest.json',
				},
			]}
			useAppDir
		/>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</>
);
