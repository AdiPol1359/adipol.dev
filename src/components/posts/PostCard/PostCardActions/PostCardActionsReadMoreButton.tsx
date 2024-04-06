import { TbArrowUpRight } from 'react-icons/tb';

import { Button } from '@/components/ui/Button/Button';

export const PostCardActionsReadMoreButton = () => (
	<Button
		color="navy.900"
		radius="sm"
		size="sm"
		rightSection={<TbArrowUpRight className="text-2xl" aria-hidden />}
	>
		Przeczytaj więcej
	</Button>
);
