import { Card } from '@/components/ui/Card/Card';

export const RecentPostsSectionListEmptyPostCard = () => (
	<Card
		as="article"
		border="dashed"
		className="flex h-full flex-col justify-center gap-y-4 text-center"
	>
		<h3 className="text-lg font-medium text-heading laptop:text-xl">
			Tutaj jest miejsce na post
		</h3>
		<p className="text-primary laptop:text-lg">
			Jeszcze nic tu nie ma, ale za jakiś czas pojawi się tu nowy post.
		</p>
	</Card>
);
