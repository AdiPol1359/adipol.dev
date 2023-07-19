import { Error } from '@/components/Error';
import { PostComments } from '@/components/PostComments';
import { SinglePost } from '@/components/SinglePost/SinglePost';
import { getPostBySlug, getPostsParams } from '@/lib/posts';

import type { Metadata } from 'next';

import type { Params } from '@/types';

export const dynamicParams = false;

export const generateMetadata = async ({
	params,
}: SinglePostPageProps): Promise<Metadata> => {
	const post = await getPostBySlug(params.slug);

	return {
		title: post?.data.title,
		description: post?.data.introduction,
	};
};

type SinglePostPageProps = Readonly<{
	params: Params<'slug'>;
}>;

export default async function SinglePostPage({ params }: SinglePostPageProps) {
	const post = await getPostBySlug(params.slug);

	if (!post) {
		return (
			<Error
				statusCode={500}
				description="Wystąpił problem podczas pobierania artykułu."
			/>
		);
	}

	return (
		<>
			<SinglePost post={post} />
			<PostComments title={post.data.title} />
		</>
	);
}

export const generateStaticParams = () => {
	return getPostsParams();
};
