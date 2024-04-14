import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export const useRouteChange = (callback: () => void) => {
	const pathname = usePathname();

	const lastPathname = useRef(pathname);

	useEffect(() => {
		if (pathname !== lastPathname.current) {
			callback();

			lastPathname.current = pathname;
		}
	}, [pathname, callback]);
};
