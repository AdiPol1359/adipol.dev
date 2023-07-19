import { AboutMeSection } from '@/components/AboutMeSection';
import { LatestPostsSection } from '@/components/LatestPostsSection';
import { getLatestPosts } from '@/lib/posts';

export default async function IndexPage() {
	const posts = await getLatestPosts();

	return (
		<div className="space-y-10">
			<AboutMeSection />
			<LatestPostsSection posts={posts} />
		</div>
	);
}
