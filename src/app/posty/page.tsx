import { AllPostsList } from '@/components/AllPostsList/AllPostsList';
import { PageTitle } from '@/components/PageTitle';
import { getAllPosts } from '@/lib/posts';

export default async function AllPostsPage() {
	const posts = await getAllPosts();

	return (
		<>
			<PageTitle border={false}>Wszystkie posty</PageTitle>
			<AllPostsList posts={posts} />
		</>
	);
}
