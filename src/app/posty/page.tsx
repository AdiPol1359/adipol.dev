import { AllPosts } from '@/components/AllPosts/AllPosts';
import { PageTitle } from '@/components/PageTitle';
import { getAllPosts } from '@/lib/posts';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Posty',
};

export default async function AllPostsPage() {
	const posts = await getAllPosts();

	return (
		<>
			<PageTitle border={false}>Wszystkie posty</PageTitle>
			<AllPosts posts={posts} />
		</>
	);
}
