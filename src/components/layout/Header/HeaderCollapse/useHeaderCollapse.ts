import { useState } from 'react';

import { useRouteChange } from '@/hooks/useRouteChange';

export const useHeaderCollapse = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleIsActive = () => setIsActive((prev) => !prev);

	useRouteChange(() => {
		setIsActive(false);
	});

	return { isActive, toggleIsActive };
};
