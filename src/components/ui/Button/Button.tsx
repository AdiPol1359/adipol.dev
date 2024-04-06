import { twMerge } from 'tailwind-merge';

import { colors, rays, sizes, variants } from './Button.styles';

import type { Color, Radius, Size, Variant } from './Button.styles';
import type { ReactNode } from 'react';

type ButtonProps = Readonly<{
	color?: Color;
	radius?: Radius;
	size?: Size;
	variant?: Variant;
	type?: 'button' | 'reset' | 'submit';
	fill?: boolean;
	onClick?: () => void;
	rightSection?: ReactNode;
	children: ReactNode;
}>;

export const Button = ({
	color = 'brand',
	radius = 'md',
	size = 'md',
	type = 'button',
	variant = 'filled',
	fill,
	onClick,
	rightSection,
	children,
}: ButtonProps) => (
	<button
		type={type}
		onClick={onClick}
		className={twMerge(
			'flex w-fit items-center justify-center gap-x-5 text-nowrap text-heading transition-all duration-100 active:scale-95',
			colors[variant][color],
			rays[radius],
			sizes[size],
			variants[variant],
			fill && 'w-full',
		)}
	>
		{children}
		{rightSection && <div>{rightSection}</div>}
	</button>
);
