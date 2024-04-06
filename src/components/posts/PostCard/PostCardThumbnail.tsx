import Image from 'next/image';

type PostCardThumbnailProps = Readonly<{
	alt: string;
	src: string;
}>;

export const PostCardThumbnail = ({ alt, src }: PostCardThumbnailProps) => (
	<div className="relative h-44 overflow-hidden rounded-lg">
		<Image src={src} alt={alt} className="object-cover" fill />
	</div>
);
