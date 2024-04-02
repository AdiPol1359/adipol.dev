import Image from 'next/image';

import memoji from '@/assets/images/smile-memoji.png';
import DashedArrow1 from '@/assets/svg/dashed-arrow-1.svg';
import DashedArrow2 from '@/assets/svg/dashed-arrow-2.svg';

export const HeroLaptopMemojiImage = () => (
	<>
		<Image src={memoji} alt="Smile" width={320} height={385} />
		<DashedArrow1
			className="absolute -top-16 left-1/2 translate-x-8 text-navy-300"
			aria-hidden
		/>
		<DashedArrow2
			className="absolute -bottom-20 -left-20 text-navy-800/85"
			aria-hidden
		/>
	</>
);
