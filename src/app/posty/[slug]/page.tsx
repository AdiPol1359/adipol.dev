import { Error } from '@/components/Error';
import { PostComments } from '@/components/PostComments';
import { SinglePost } from '@/components/SinglePost/SinglePost';
import { BASE_OPEN_GRAPH } from '@/constants';
import { getPostBySlug, getPostsParams } from '@/lib/posts';

import type { Metadata } from 'next';

import type { Params } from '@/types';

export const dynamicParams = false;

export const generateMetadata = async ({
	params,
}: SinglePostPageProps): Promise<Metadata> => {
	const post = await getPostBySlug(params.slug);

	if (!post) return {};

	const {
		data: { introduction: description, title, date, thumbnail },
	} = post;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime: date,
			...(thumbnail && {
				images: {
					alt: title,
					url: thumbnail.path,
					width: thumbnail.width,
					height: thumbnail.height,
				},
			}),
			...BASE_OPEN_GRAPH,
		},
		twitter: {
			card: 'summary_large_image',
		},
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
