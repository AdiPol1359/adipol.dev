import { FooterSocialsDivider } from './FooterSocialsDivider';

import { PageLogo } from '@/components/common/PageLogo';
import { SocialList } from '@/components/common/SocialList';

export const FooterSocials = () => (
	<div className="laptop:flex laptop:items-center">
		<div className="hidden laptop:flex laptop:items-center">
			<PageLogo />
			<FooterSocialsDivider />
		</div>
		<SocialList />
	</div>
);
