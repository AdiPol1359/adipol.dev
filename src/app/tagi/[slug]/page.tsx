import { PageTitle } from '@/components/PageTitle';
import { PostsList } from '@/components/PostsList/PostsList';
import { getPostsByTag, getTagsParams } from '@/lib/posts';
import type { Params } from '@/types';

export const dynamicParams = false;

export default async function SingleTagPage({
	params,
}: {
	params: Params<'slug'>;
}) {
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
