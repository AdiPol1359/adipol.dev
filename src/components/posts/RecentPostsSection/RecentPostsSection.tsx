import { RecentPostsSectionHeader } from './RecentPostsSectionHeader/RecentPostsSectionHeader';
import { RecentPostsSectionList } from './RecentPostsSectionList/RecentPostsSectionList';

import DashedLine from '@/assets/svg/dashed-line.svg';
import { Container } from '@/components/ui/Container/Container';

export const RecentPostsSection = () => (
	<section className="relative mt-8 laptop:mt-14">
		<Container>
			<RecentPostsSectionHeader />
			<RecentPostsSectionList />
		</Container>
		<DashedLine
			className="hidden laptop:absolute laptop:-top-14 laptop:right-0 laptop:block laptop:text-decoration-dark"
			aria-hidden
		/>
	</section>
);
