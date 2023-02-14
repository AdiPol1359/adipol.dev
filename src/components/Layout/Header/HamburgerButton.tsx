import { twMerge } from 'tailwind-merge';

const CLASS_NAME = 'h-0.5 bg-white-black transition-transform';

type HamburgerButtonProps = Readonly<{
	active: boolean;
	onClick: () => void;
}>;

export const HamburgerButton = ({ active, onClick }: HamburgerButtonProps) => (
	<button
		type="button"
		onClick={onClick}
		aria-label={`${active ? 'Zamknij' : 'Otwórz'} menu`}
		aria-expanded={active}
		aria-controls="header-navigation"
		className="flex w-7 flex-col items-end gap-y-1.5 sm:hidden"
	>
		<div
			className={twMerge(
				CLASS_NAME,
				'w-full',
				active && 'translate-y-2 rotate-45'
			)}
		/>
		<div className={twMerge(CLASS_NAME, 'w-3/4', active && 'opacity-0')} />
		<div
			className={twMerge(
				CLASS_NAME,
				'w-1/2',
				active && 'w-full -translate-y-2 -rotate-45'
			)}
		/>
	</button>
);
