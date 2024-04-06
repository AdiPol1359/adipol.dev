import Image from 'next/image';

import memoji from '@/assets/images/wave-memoji.png';

export const RecentPostsSectionHeaderDecoration = () => (
	<div
		className="hidden laptop:flex laptop:items-center laptop:gap-x-4"
		aria-hidden
	>
		<p className="w-56 text-lg font-medium text-heading">
			Mam nadzieje, że Wam się przyda
			<span className="font-normal text-secondary"> - Adrian</span>
		</p>
		<Image src={memoji} alt="Wave" width={158} height={160} />
	</div>
);
