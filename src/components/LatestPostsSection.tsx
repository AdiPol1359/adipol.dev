import { PostsList } from './PostsList/PostsList';

import type { Post } from '@/types';

type LatestPostsSectionProps = Readonly<{
	posts: Post[];
}>;

export const LatestPostsSection = ({ posts }: LatestPostsSectionProps) => (
	<section>
		<PostsList posts={posts} />
	</section>
);
