import { useState } from 'react';

export const useHeaderCollapse = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleIsActive = () => setIsActive((prev) => !prev);

	return { isActive, toggleIsActive };
};
