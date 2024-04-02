import Image from 'next/image';
import { twJoin } from 'tailwind-merge';

import memoji from '@/assets/images/smile-memoji.png';
import DashedArrow from '@/assets/svg/dashed-arrow-3.svg';

const BASE_ARROW_STYLES = 'absolute top-1/2 translate-y-8 text-navy-300';

export const HeroMobileMemoji = () => (
	<div className="relative laptop:hidden">
		<Image src={memoji} alt="Smile" width={128} height={154} />
		<DashedArrow
			className={twJoin(BASE_ARROW_STYLES, '-left-24 -scale-x-100')}
			aria-hidden
		/>
		<DashedArrow
			className={twJoin(BASE_ARROW_STYLES, '-right-24')}
			aria-hidden
		/>
	</div>
);
