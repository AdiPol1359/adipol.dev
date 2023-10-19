import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

type PageTitleProps = Readonly<{
	border?: boolean;
	level?: 1 | 2;
	children: ReactNode;
}>;

export const PageTitle = ({
	border = true,
	level = 1,
	children,
}: PageTitleProps) => {
	const Level = `h${level}` as const;

	return (
		<Level
			className={twMerge(
				'text-white-black',
				level === 1 &&
					'pb-4 text-3xl font-extrabold sm:text-4xl md:pb-8 md:text-5xl',
				level === 2 && 'pb-2 text-2xl font-bold sm:text-3xl md:pb-4',
				border && 'border-b border-border',
			)}
		>
			{children}
		</Level>
	);
};
