import type { Post } from '@/types';

import { PostsList } from './PostsList/PostsList';

type LatestPostsSectionProps = Readonly<{
	posts: Post[];
}>;

export const LatestPostsSection = ({ posts }: LatestPostsSectionProps) => (
	<section>
		<PostsList posts={posts} />
	</section>
);
