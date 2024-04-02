import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

const colors = {
	brand: 'border-brand hover:bg-brand',
	navy: 'border-navy-700 hover:bg-navy-700',
} as const;

const rays = {
	sm: 'rounded-md',
	md: 'rounded-xl',
} as const;

const sizes = {
	sm: 'h-9 px-10',
	md: 'h-12 px-10',
	lg: 'h-14 px-12',
} as const;

type ButtonProps = Readonly<{
	color?: keyof typeof colors;
	radius?: keyof typeof rays;
	size?: keyof typeof sizes;
	type?: 'button' | 'reset' | 'submit';
	fill?: boolean;
	onClick?: () => void;
	children: ReactNode;
}>;

export const Button = ({
	color = 'brand',
	radius = 'md',
	size = 'md',
	type = 'button',
	fill,
	onClick,
	children,
}: ButtonProps) => (
	<button
		type={type}
		onClick={onClick}
		className={twMerge(
			'w-fit text-nowrap border-2 text-heading transition-all duration-100 active:scale-95',
			colors[color],
			rays[radius],
			sizes[size],
			fill && 'w-full',
		)}
	>
		{children}
	</button>
);
