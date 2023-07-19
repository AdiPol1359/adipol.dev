import { socials } from '@/data/socials';

type SocialListProps = Readonly<{
	className?: string;
}>;

export const SocialList = ({ className }: SocialListProps) => (
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
