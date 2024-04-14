type StatisticsItemProps = Readonly<{
	name: string;
	value: number;
}>;

export const StatisticsItem = ({ name, value }: StatisticsItemProps) => (
	<div className="w-fit space-y-1.5">
		<dt className="text-secondary">{name}</dt>
		<dd className="text-2xl font-medium text-heading">{value}</dd>
	</div>
);
