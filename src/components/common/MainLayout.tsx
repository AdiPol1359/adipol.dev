import { Footer } from '../layout/Footer/Footer';
import { Header } from '../layout/Header/Header';

import Lines from '@/assets/svg/lines.svg';
import TopWaves from '@/assets/svg/top-waves.svg';

import type { ReactNode } from 'react';

type MainLayoutProps = Readonly<{
	children: ReactNode;
}>;

export const MainLayout = ({ children }: MainLayoutProps) => (
	<>
		<TopWaves className="absolute left-0 top-0 -z-10 w-full" aria-hidden />
		<Lines
			className="absolute left-1/2 top-0 -z-10 w-full max-w-max -translate-x-1/2"
			aria-hidden
		/>
		<Header />
		<main>{children}</main>
		<Footer />
	</>
);
