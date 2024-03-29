import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

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
	radius?: keyof typeof rays;
	size?: keyof typeof sizes;
	type?: 'button' | 'reset' | 'submit';
	fill?: boolean;
	onClick?: () => void;
	children: ReactNode;
}>;

export const Button = ({
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
			'w-fit border-2 border-brand text-heading transition-all duration-100 hover:bg-brand active:scale-95',
			rays[radius],
			sizes[size],
			fill && 'w-full',
		)}
	>
		{children}
	</button>
);
