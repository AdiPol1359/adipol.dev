import { twMerge } from 'tailwind-merge';

const CLASS_NAME = 'bg-white-black h-0.5 transition-transform';

type HamburgerButtonProps = Readonly<{
	onClick?: () => void;
	expanded: boolean;
}>;

export const HamburgerButton = ({
	onClick,
	expanded,
}: HamburgerButtonProps) => (
	<button
		type="button"
		onClick={onClick}
		aria-label={`${expanded ? 'Zamknij' : 'Otwórz'} menu`}
		aria-expanded={expanded}
		aria-controls="header-navigation"
		className="ml-auto flex w-7 flex-col items-end gap-y-1.5 self-center sm:hidden"
	>
		<div
			className={twMerge(
				CLASS_NAME,
				'w-full',
				expanded && 'translate-y-2 rotate-45',
			)}
		/>
		<div className={twMerge(CLASS_NAME, 'w-3/4', expanded && 'opacity-0')} />
		<div
			className={twMerge(
				CLASS_NAME,
				'w-1/2',
				expanded && 'w-full -translate-y-2 -rotate-45',
			)}
		/>
	</button>
);
