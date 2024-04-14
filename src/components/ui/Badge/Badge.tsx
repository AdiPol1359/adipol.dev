import type { ReactNode } from 'react';

type BadgeProps = Readonly<{
	children: ReactNode;
}>;

export const Badge = ({ children }: BadgeProps) => (
	<div className="w-fit rounded-md bg-secondary px-2 py-1.5 text-sm text-muted">
		{children}
	</div>
);
