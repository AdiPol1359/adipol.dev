import type { ReactNode } from 'react';

type IconButtonProps = Readonly<{
	label: string;
	children: ReactNode;
}>;

export const IconButton = ({ label, children }: IconButtonProps) => (
	<button
		type="button"
		aria-label={label}
		className="flex h-9 w-9 items-center justify-center rounded-full text-xl text-primary transition-all duration-100 hover:bg-secondary active:scale-90"
	>
		{children}
	</button>
);
