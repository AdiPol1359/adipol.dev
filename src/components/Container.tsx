import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ContainerProps = Readonly<{
	as?: keyof HTMLElementTagNameMap;
	className?: string;
	children: ReactNode;
}>;

export const Container = ({
	as: As = 'div',
	className,
	children,
}: ContainerProps) => (
	<As className={twMerge('mx-auto max-w-4xl px-4', className)}>{children}</As>
);
