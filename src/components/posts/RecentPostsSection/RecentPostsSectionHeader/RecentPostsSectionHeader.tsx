import { RecentPostsSectionHeaderDecoration } from './RecentPostsSectionHeaderDecoration';
import { RecentPostsSectionHeaderTitle } from './RecentPostsSectionHeaderTitle';

import Scribbles from '@/assets/svg/scribbles.svg';

export const RecentPostsSectionHeader = () => (
	<header className="mb-5 laptop:mb-0 laptop:flex laptop:items-center laptop:justify-between desktop:relative">
		<RecentPostsSectionHeaderTitle />
		<Scribbles
			className="hidden desktop:absolute desktop:left-1/2 desktop:top-1/2 desktop:block desktop:-translate-x-1/2 desktop:-translate-y-1/2 desktop:text-decoration-dark"
			aria-hidden
		/>
		<RecentPostsSectionHeaderDecoration />
	</header>
);
