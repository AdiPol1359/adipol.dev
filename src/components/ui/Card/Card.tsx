import { twJoin } from 'tailwind-merge';

import type { ReactNode } from 'react';

const borders = {
	dashed: 'border-dashed',
	solid: 'border-solid',
} as const;

type CardProps = Readonly<{
	as?: keyof JSX.IntrinsicElements;
	border?: keyof typeof borders;
	className?: string;
	children: ReactNode;
}>;

export const Card = ({
	as: As = 'div',
	border = 'solid',
	className,
	children,
}: CardProps) => (
	<As
		className={twJoin(
			'rounded-xl border-2 border-primary/20 bg-primary p-3.5',
			borders[border],
			className,
		)}
	>
		{children}
	</As>
);
