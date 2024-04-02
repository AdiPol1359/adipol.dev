import { twMerge } from 'tailwind-merge';

const BASE_ITEM_STYLES =
	'h-1 rounded-full bg-white transition-all duration-200';

type HeaderCollapseButtonProps = Readonly<{
	active: boolean;
	controls: string;
	onClick?: () => void;
}>;

export const HeaderCollapseButton = ({
	active,
	controls,
	onClick,
}: HeaderCollapseButtonProps) => (
	<button
		type="button"
		aria-expanded={active}
		aria-controls={controls}
		aria-label={`${active ? 'Zamknij' : 'Otwórz'} menu`}
		className="flex w-9 flex-col items-end gap-y-2 tablet:hidden"
		onClick={onClick}
	>
		<div
			className={twMerge(
				BASE_ITEM_STYLES,
				'w-9/12',
				active && 'w-full translate-y-3 -rotate-45',
			)}
		/>
		<div
			className={twMerge(BASE_ITEM_STYLES, 'w-full', active && 'rotate-45')}
		/>
	</button>
);
