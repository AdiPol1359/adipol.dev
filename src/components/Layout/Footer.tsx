import { Container } from '../Container';
import { SocialList } from '../SocialList';

import PoweredByVercel from '@/assets/svg/powered-by-vercel.svg';

const {
	NEXT_PUBLIC_VERCEL_ENV,
	NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF,
	NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,
} = process.env;

export const Footer = () => (
	<Container
		as="footer"
		className="mt-12 flex flex-col items-center gap-y-3 border-t border-border pb-4 pt-8 text-gray-800 dark:text-gray-200"
	>
		<SocialList className="flex gap-x-4 text-3xl" />
		<div className="space-y-0.5 text-center">
			<p className="text-sm">
				Copyright &copy; 2025 | Wszelkie prawa zastrzeżone.
			</p>
			{NEXT_PUBLIC_VERCEL_ENV && (
				<p className="text-xs">
					{NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF} |{' '}
					{NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}
				</p>
			)}
		</div>
		<a href="https://vercel.com/" aria-label="Vercel">
			<PoweredByVercel width={190} />
		</a>
	</Container>
);
