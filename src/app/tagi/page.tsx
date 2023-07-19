import { PageTitle } from '@/components/PageTitle';
import { PostTagList } from '@/components/PostTagList';
import { getTagsCounter } from '@/lib/posts';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Tagi',
};

export default async function TagsPage() {
	const tags = await getTagsCounter();

	return (
		<>
			<PageTitle>Tagi postów</PageTitle>
			<PostTagList tags={tags} />
		</>
	);
}
