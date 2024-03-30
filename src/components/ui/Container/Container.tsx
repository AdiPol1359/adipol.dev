import { twJoin } from 'tailwind-merge';

import type { ReactNode } from 'react';

type ContainerProps = Readonly<{
	as?: keyof JSX.IntrinsicElements;
	className?: string;
	children: ReactNode;
}>;

export const Container = ({
	as: As = 'div',
	className,
	children,
}: ContainerProps) => (
	<As className={twJoin('mx-auto box-content max-w-7xl px-4', className)}>
		{children}
	</As>
);
