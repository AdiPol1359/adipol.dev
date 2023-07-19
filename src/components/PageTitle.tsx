import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

type PageTitleProps = Readonly<{
	border?: boolean;
	children: ReactNode;
}>;

export const PageTitle = ({ border = true, children }: PageTitleProps) => (
	<h1
		className={twMerge(
			'pb-4 text-3xl font-extrabold text-white-black sm:text-4xl md:pb-8 md:text-5xl',
			border && 'border-b border-border',
		)}
	>
		{children}
	</h1>
);
