import Image from 'next/image';

import type { StaticImageData } from 'next/image';

type ProjectListCardImageProps = Readonly<{
	alt: string;
	src: StaticImageData;
}>;

export const ProjectListCardImage = ({
	alt,
	src,
}: ProjectListCardImageProps) => (
	<div className="relative h-80 overflow-hidden rounded-md">
		<Image
			src={src}
			alt={alt}
			placeholder="blur"
			className="object-cover"
			fill
		/>
	</div>
);
