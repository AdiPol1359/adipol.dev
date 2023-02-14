import { HeadTags } from '@/components/HeadTags';
import { getPostBySlug } from '@/lib/posts';
import type { Params } from '@/types';

export default async function Head({ params }: { params: Params<'slug'> }) {
	const post = await getPostBySlug(params.slug);

	return (
		<HeadTags title={post?.data.title} description={post?.data.introduction} />
	);
}
