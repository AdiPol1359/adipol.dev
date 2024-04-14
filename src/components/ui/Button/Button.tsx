import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';

import { colors, rays, sizes, variants } from './Button.styles';

import type { Color, Radius, Size, Variant } from './Button.styles';
import type { ReactNode } from 'react';

type SlotButtonProps = Readonly<{
	asChild: true;
}>;

type OriginalButtonProps = Readonly<{
	asChild?: false;
	type?: 'button' | 'reset' | 'submit';
	rightSection?: ReactNode;
	onClick?: () => void;
}>;

type BaseButtonProps = Readonly<{
	fill?: boolean;
	color?: Color;
	radius?: Radius;
	size?: Size;
	variant?: Variant;
	children: ReactNode;
}>;

type ButtonProps = BaseButtonProps & (SlotButtonProps | OriginalButtonProps);

export const Button = ({
	color = 'brand',
	radius = 'md',
	size = 'md',
	variant = 'filled',
	fill,
	children,
	...props
}: ButtonProps) => {
	const className = twMerge(
		'flex w-fit items-center justify-center gap-x-5 text-nowrap text-heading transition-all duration-100 active:scale-95',
		fill && 'w-full',
		colors[variant][color],
		rays[radius],
		sizes[size],
		variants[variant],
	);

	if (props.asChild) {
		return <Slot className={className}>{children}</Slot>;
	}

	return (
		<button
			type={props.type ?? 'button'}
			onClick={props.onClick}
			className={className}
		>
			{children}
			{props.rightSection}
		</button>
	);
};
