import { useState } from 'react';

import { useRouteChange } from '@/hooks/useRouteChange';

export const useHeaderNavigation = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleIsExpanded = () => setIsExpanded((prev) => !prev);

	useRouteChange(() => {
		setIsExpanded(false);
	});

	return { isExpanded, toggleIsExpanded };
};
