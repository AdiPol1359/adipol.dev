import { useState } from 'react';

export const useHeaderMenu = () => {
	const [isActive, setIsActive] = useState(false);

	const handleButtonClick = () => setIsActive((prev) => !prev);

	return { isActive, handleButtonClick };
};
