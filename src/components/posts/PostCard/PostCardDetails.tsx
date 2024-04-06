type PostCardDetailsProps = Readonly<{
	title: string;
	introduction: string;
}>;

export const PostCardDetails = ({
	title,
	introduction,
}: PostCardDetailsProps) => (
	<div className="space-y-2 laptop:space-y-2.5">
		<h3 className="text-lg font-medium text-heading laptop:text-xl">{title}</h3>
		<p className="text-primary laptop:text-lg">{introduction}</p>
	</div>
);
