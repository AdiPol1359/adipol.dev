import { socials } from '@/data/socials';

type SocialsListProps = Readonly<{
	className?: string;
}>;

export const SocialsList = ({ className }: SocialsListProps) => (
	<ul className={className}>
		{socials.map(({ href, label, icon: Icon }) => (
			<li key={label}>
				<a href={href} aria-label={label} className="hover:text-primary">
					<Icon />
				</a>
			</li>
		))}
	</ul>
);
