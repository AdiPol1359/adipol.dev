import { PageTitle } from '../PageTitle';
import { RecommendationsSectionListItem } from './RecommendationsSectionListItem';

import { recommendations } from '@/data/recommendations';

export const RecommendationsSection = () => (
	<section className="space-y-4">
		<PageTitle level={2}>Moje rekomendacje</PageTitle>
		<ul className="space-y-3">
			{recommendations.map((recommendation) => (
				<RecommendationsSectionListItem
					key={recommendation.name}
					recommendation={recommendation}
				/>
			))}
		</ul>
	</section>
);
