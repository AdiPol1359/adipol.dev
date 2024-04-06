export const colors: Record<Variant, Record<Color, string>> = {
	filled: {
		brand: 'bg-brand',
		'navy.700': 'bg-navy-700',
		'navy.900': 'bg-navy-900',
	},
	outline: {
		brand: 'border-brand hover:bg-brand',
		'navy.700': 'border-navy-700 hover:bg-navy-700',
		'navy.900': 'border-navy-900 hover:bg-navy-900',
	},
};

export const rays = {
	sm: 'rounded-md',
	md: 'rounded-xl',
} as const;

export const sizes = {
	sm: 'h-9 px-3.5',
	md: 'h-12 px-10',
	lg: 'h-14 px-12',
} as const;

export const variants = {
	filled: 'hover:bg-opacity-85',
	outline: 'border-2',
} as const;

export type Color = 'brand' | 'navy.700' | 'navy.900';
export type Radius = keyof typeof rays;
export type Size = keyof typeof sizes;
export type Variant = keyof typeof variants;
