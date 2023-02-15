'use client';

import dynamic from 'next/dynamic';

import { useThemeContext } from '@/providers/ThemeProvider';

const Giscus = dynamic(() => import('@giscus/react'), { ssr: false });

type PostCommentsProps = Readonly<{
	title: string;
}>;

export const PostComments = ({ title }: PostCommentsProps) => {
	const { theme } = useThemeContext();

	return (
		<div className="mt-10">
			<Giscus
				lang="pl"
				repo="adipol1359/adipol.dev"
				repoId="R_kgDOI9zmsA"
				category="Announcements"
				categoryId="DIC_kwDOI9zmsM4CUNhI"
				mapping="specific"
				term={title}
				theme={theme === 'dark' ? 'transparent_dark' : 'light'}
				reactionsEnabled="1"
				emitMetadata="0"
				inputPosition="top"
			/>
		</div>
	);
};
