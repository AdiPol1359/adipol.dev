import { Footer } from '../layout/Footer/Footer';
import { Header } from '../layout/Header/Header';

import Lines from '@/assets/svg/lines.svg';
import MiddleWaves from '@/assets/svg/middle-waves.svg';
import TopWaves from '@/assets/svg/top-waves.svg';

import type { ReactNode } from 'react';

type MainLayoutProps = Readonly<{
	children: ReactNode;
}>;

export const MainLayout = ({ children }: MainLayoutProps) => (
	<>
		<Lines
			className="absolute left-1/2 top-0 -z-10 w-full max-w-max -translate-x-1/2"
			aria-hidden
		/>
		<TopWaves className="absolute left-0 top-0 -z-10 w-full" aria-hidden />
		<MiddleWaves
			className="absolute left-0 top-1/2 -z-10 w-full translate-y-40"
			aria-hidden
		/>
		<Header />
		<main>{children}</main>
		<Footer />
	</>
);
