import { twMerge } from 'tailwind-merge';

const ITEM_BASE_STYLES =
	'h-1 rounded-full bg-white transition-all duration-200';

type HeaderMenuButtonProps = Readonly<{
	active: boolean;
	controls: string;
	onClick?: () => void;
}>;

export const HeaderMenuButton = ({
	active,
	controls,
	onClick,
}: HeaderMenuButtonProps) => (
	<button
		type="button"
		aria-controls={controls}
		aria-expanded={active}
		aria-label={`${active ? 'Zamknij' : 'Otwórz'} menu`}
		className="flex w-11 flex-col items-end gap-y-2.5 desktop:hidden"
		onClick={onClick}
	>
		<div
			className={twMerge(
				ITEM_BASE_STYLES,
				'w-9/12',
				active && 'w-full translate-y-3.5 -rotate-45',
			)}
		/>
		<div
			className={twMerge(ITEM_BASE_STYLES, 'w-full', active && 'rotate-45')}
		/>
	</button>
);
