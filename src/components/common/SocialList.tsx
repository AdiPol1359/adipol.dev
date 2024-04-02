import { socials } from '@/data/socials';

export const SocialList = () => (
	<ul className="flex gap-x-5 text-2xl">
		{socials.map(({ name, href, icon: Icon }) => (
			<li key={name}>
				<a
					href={href}
					aria-label={name}
					target="_blank"
					rel="noreferrer"
					className="block text-navy-700 transition-colors duration-100 hover:text-navy-500"
				>
					<Icon aria-hidden />
				</a>
			</li>
		))}
	</ul>
);
