type ProjectListCardDetailsProps = Readonly<{
	title: string;
	description: string;
}>;

export const ProjectListCardDetails = ({
	title,
	description,
}: ProjectListCardDetailsProps) => (
	<div className="space-y-1.5">
		<h2 className="text-lg font-medium text-heading">{title}</h2>
		<p className="text-primary">{description}</p>
	</div>
);
