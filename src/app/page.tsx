import { IntroductionSection } from '@/components/IntroductionSection';
import { LatestPostsSection } from '@/components/LatestPostsSection';
import { getLatestPosts } from '@/lib/posts';

export default async function IndexPage() {
	const posts = await getLatestPosts();

	return (
		<div className="space-y-10">
			<IntroductionSection />
			<LatestPostsSection posts={posts} />
		</div>
	);
}
