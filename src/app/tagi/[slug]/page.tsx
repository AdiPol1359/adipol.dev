import type { Metadata } from 'next';

import { PageTitle } from '@/components/PageTitle';
import { PostsList } from '@/components/PostsList/PostsList';
import { getPostsByTag, getTagsParams } from '@/lib/posts';
import type { Params } from '@/types';

export const dynamicParams = false;

export const generateMetadata = ({ params }: SingleTagPageProps): Metadata => ({
	title: `Tag: ${params.slug}`,
});

type SingleTagPageProps = Readonly<{
	params: Params<'slug'>;
}>;

export default async function SingleTagPage({ params }: SingleTagPageProps) {
	const posts = await getPostsByTag(params.slug);

	return (
		<>
			<PageTitle border={false}>Artykuły z tagiem #{params.slug}</PageTitle>
			<PostsList posts={posts} />
		</>
	);
}

export const generateStaticParams = () => {
	return getTagsParams();
};
