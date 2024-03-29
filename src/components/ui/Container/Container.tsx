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
	<As className={twJoin('mx-auto max-w-7xl', className)}>{children}</As>
);
