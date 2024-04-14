import Image from 'next/image';

import memoji from '@/assets/images/memojis/wave.png';

export const PageHeaderImage = () => (
	<Image
		src={memoji}
		alt="Wave"
		width={120}
		height={121}
		className="absolute -right-14 -top-8 -rotate-60 tablet:relative tablet:right-0 tablet:top-0 tablet:rotate-0"
		aria-hidden
	/>
);
