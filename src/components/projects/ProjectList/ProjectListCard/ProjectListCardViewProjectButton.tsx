import { TbArrowUpRight } from 'react-icons/tb';

import { Button } from '@/components/ui/Button/Button';

type ProjectListCardViewProjectButtonProps = Readonly<{
	url: string;
}>;

export const ProjectListCardViewProjectButton = ({
	url,
}: ProjectListCardViewProjectButtonProps) => (
	<Button radius="sm" size="sm" asChild>
		<a href={url} target="_blank" rel="noreferrer">
			Zobacz projekt
			<TbArrowUpRight className="text-2xl" aria-hidden />
		</a>
	</Button>
);
