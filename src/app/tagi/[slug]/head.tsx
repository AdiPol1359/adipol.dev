import { HeadTags } from '@/components/HeadTags';
import type { Params } from '@/types';

export default function Head({ params }: { params: Params<'slug'> }) {
	return <HeadTags title={`Tag: ${params.slug}`} />;
}
