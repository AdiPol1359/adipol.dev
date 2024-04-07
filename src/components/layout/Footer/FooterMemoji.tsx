import Image from 'next/image';

import memoji from '@/assets/images/smile-memoji.png';

export const FooterMemoji = () => (
	<Image
		src={memoji}
		alt="Smile"
		width={100}
		height={120}
		className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
		aria-hidden
	/>
);
