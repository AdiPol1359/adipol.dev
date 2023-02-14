import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export const useRouteChange = (handler: () => void) => {
	const pathname = usePathname();

	useEffect(handler, [pathname, handler]);
};
