import { PostCard } from '../../PostCard/PostCard';
import { RecentPostsSectionListEmptyPostCard } from './RecentPostsSectionListEmptyPostCard';

const EMPTY_POST_CARD_LIST_ITEM_STYLES = 'hidden tablet:block';

export const RecentPostsSectionList = () => (
	<ol className="grid grid-cols-1 gap-5 tablet:grid-cols-2 laptop:grid-cols-3">
		<li>
			<PostCard
				thumbnail="/thumbnails/wydajne-providery-w-reactjs.png"
				title="Wydajne providery w React.js 🔥"
				introduction="Context API to zdecydowanie jedna z najbardziej podstawowych funkcjonalności w
				Reakcie, a dogłębne poznanie jego działania pozwoli pisać Ci bardziej
				świadomy oraz wydajny kod."
				readingTime={10}
			/>
		</li>
		<li className={EMPTY_POST_CARD_LIST_ITEM_STYLES}>
			<RecentPostsSectionListEmptyPostCard />
		</li>
		<li className={EMPTY_POST_CARD_LIST_ITEM_STYLES}>
			<RecentPostsSectionListEmptyPostCard />
		</li>
	</ol>
);
