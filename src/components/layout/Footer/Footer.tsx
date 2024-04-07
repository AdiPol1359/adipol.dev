import { twJoin } from 'tailwind-merge';

import { FooterContainerDecoration } from './FooterContainerDecoration';
import { FooterCopyright } from './FooterCopyright';
import { FooterMemoji } from './FooterMemoji';
import { FooterPoweredByVercel } from './FooterPoweredByVercel';
import { FooterSocials } from './FooterSocials/FooterSocials';
import { FooterVercelStatus } from './FooterVercelStatus';

import { Container } from '@/components/ui/Container/Container';

const WRAPPER_STYLES =
	'flex flex-col items-center text-center laptop:items-start laptop:text-start';

export const Footer = () => (
	<footer className="relative mt-36 bg-secondary/30 before:absolute before:left-0 before:top-0 before:h-1 before:w-full before:bg-border before:bg-center before:bg-repeat-x">
		<FooterMemoji />
		<Container className="relative space-y-10 pb-12 pt-24 laptop:flex laptop:justify-between laptop:space-y-0 laptop:py-14">
			<div className={twJoin(WRAPPER_STYLES, 'gap-y-10 laptop:gap-y-8')}>
				<FooterSocials />
				<FooterCopyright />
			</div>
			<div
				className={twJoin(
					WRAPPER_STYLES,
					'gap-y-3.5 laptop:items-end laptop:gap-y-5',
				)}
			>
				<FooterVercelStatus />
				<FooterPoweredByVercel />
			</div>
			<FooterContainerDecoration />
		</Container>
	</footer>
);
