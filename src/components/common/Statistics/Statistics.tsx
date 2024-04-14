import { StatisticsItem } from './StatisticsItem';

import type { ReactNode } from 'react';

type StatisticsProps = Readonly<{
	children: ReactNode;
}>;

export const Statistics = ({ children }: StatisticsProps) => (
	<dl className="flex gap-x-11">{children}</dl>
);

Statistics.Item = StatisticsItem;
