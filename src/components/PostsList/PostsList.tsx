import type { Post } from '@/types';

import { PostSneakPeek } from './PostSneakPeek';

type PostsListProps = Readonly<{
	posts: Post[];
}>;

export const PostsList = ({ posts }: PostsListProps) => (
	<ol className="[&>li:last-child>article]:py-0 [&>li:last-child>article]:pt-12">
		{posts.map((post) => (
			<li key={post.slug}>
				<PostSneakPeek post={post} />
			</li>
		))}
	</ol>
);
