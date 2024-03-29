import { Container } from '../Container';
import { Footer } from './Footer';
import { Header } from './Header/Header';

import type { ReactNode } from 'react';

type LayoutProps = Readonly<{
	children: ReactNode;
}>;

export const Layout = ({ children }: LayoutProps) => (
	<>
		<Header />
		<Container as="main" className="mt-10">
			{children}
		</Container>
		<Footer />
	</>
);
