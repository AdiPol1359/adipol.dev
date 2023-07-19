import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export const useRouteChange = (callback: (pathname: string) => void) => {
	const pathname = usePathname();
	const ref = useRef(pathname);

	useEffect(() => {
		if (ref.current !== pathname) {
			ref.current = pathname;

			callback(pathname);
		}
	}, [callback, pathname]);
};
