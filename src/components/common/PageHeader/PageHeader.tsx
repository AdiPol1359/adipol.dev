import { PageHeaderDetails } from './PageHeaderDetails';
import { PageHeaderImage } from './PageHeaderImage';

import { Container } from '@/components/ui/Container/Container';

import type { ReactNode } from 'react';

type PageHeaderProps = Readonly<{
	title: string;
	rightSection?: ReactNode;
}>;

export const PageHeader = ({ title, rightSection }: PageHeaderProps) => (
	<Container
		as="header"
		className="mb-6 mt-14 overflow-x-clip after:mt-10 after:block after:h-1 after:bg-border after:bg-center after:bg-repeat-x tablet:mb-10 tablet:mt-0 tablet:after:mt-0"
	>
		<div className="relative flex flex-col gap-10 tablet:flex-row tablet:items-center">
			<PageHeaderImage />
			<PageHeaderDetails title={title} />
			{rightSection && <div className="tablet:ml-auto">{rightSection}</div>}
		</div>
	</Container>
);
