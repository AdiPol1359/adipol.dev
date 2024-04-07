import Image from 'next/image';

import memoji from '@/assets/images/memojis/macbook.png';
import { APP_DESCRIPTION } from '@/constants';

export const PageLogo = () => (
	<div className="flex h-16 w-16 items-end justify-center overflow-hidden rounded-full bg-secondary/50">
		<Image src={memoji} alt={APP_DESCRIPTION} width={42} height={49} />
	</div>
);
