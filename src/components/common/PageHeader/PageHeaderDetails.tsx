import { Emoji } from '../Emoji';

type PageHeaderDetailsProps = Readonly<{
	title: string;
}>;

export const PageHeaderDetails = ({ title }: PageHeaderDetailsProps) => (
	<div className="space-y-1">
		<p className="text-secondary">
			Cześć wszystkim tutaj <Emoji type="✋" />
		</p>
		<h1 className="text-2xl font-semibold text-heading">{title}</h1>
	</div>
);
