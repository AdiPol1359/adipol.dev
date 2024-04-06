import { PostCardActionsReadMoreButton } from './PostCardActionsReadMoreButton';
import { PostCardActionsShareButton } from './PostCardActionsShareButton';

export const PostCardActions = () => (
	<div className="flex items-center justify-between">
		<PostCardActionsReadMoreButton />
		<PostCardActionsShareButton />
	</div>
);
