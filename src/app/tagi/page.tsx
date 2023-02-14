import { PageTitle } from '@/components/PageTitle';
import { PostTagsList } from '@/components/PostTagsList';
import { getTagsCounter } from '@/lib/posts';

export default async function TagsPage() {
	const tags = await getTagsCounter();

	return (
		<>
			<PageTitle>Tagi postów</PageTitle>
			<PostTagsList tags={tags} />
		</>
	);
}
