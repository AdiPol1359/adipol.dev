import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

import type { IconType } from 'react-icons';

export const socials: Social[] = [
	{
		name: 'GitHub',
		href: 'https://github.com/AdiPol1359',
		icon: FaGithub,
	},
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/polak-adrian',
		icon: FaLinkedin,
	},
	{
		name: 'Discord',
		href: 'https://discord.com/users/344359114798792705',
		icon: FaDiscord,
	},
	{
		name: 'Instagram',
		href: 'https://www.instagram.com/adipol_dev',
		icon: FaInstagram,
	},
];

interface Social {
	readonly name: string;
	readonly href: string;
	readonly icon: IconType;
}
