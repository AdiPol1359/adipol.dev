import { PostCardActions } from './PostCardActions/PostCardActions';
import { PostCardDetails } from './PostCardDetails';
import { PostCardThumbnail } from './PostCardThumbnail';

import { Card } from '@/components/ui/Card/Card';

type PostCardProps = Readonly<{
	thumbnail: string;
	title: string;
	introduction: string;
	readingTime: number;
}>;

export const PostCard = ({
	thumbnail,
	title,
	introduction,
	readingTime,
}: PostCardProps) => (
	<Card as="article" className="space-y-7">
		<PostCardThumbnail src={thumbnail} alt={title} />
		<PostCardDetails title={title} introduction={introduction} />
		<p className="text-sm text-white">⌛️ {readingTime} minut czytania</p>
		<PostCardActions />
	</Card>
);
