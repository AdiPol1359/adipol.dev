import DevFAQThumbnail from '@/assets/images/devfaq.png';
import HappyShopThumbnail from '@/assets/images/happy-shop.png';
import NodeJSMinecraftItemShop from '@/assets/images/nodejs-minecraft-itemshop.png';
import NoodlyThumbnail from '@/assets/images/noodly.png';

import type { Project } from '@/types';

export const projects: Project[] = [
	{
		thumbnail: DevFAQThumbnail,
		title: 'DevFAQ',
		description:
			'Serwis internetowy służący do udostępniania i wymiany pytań rekrutacyjnych na stanowiska developerów oraz inne pokrewne.',
		url: 'https://app.devfaq.pl/',
		technologies: [
			'TypeScript',
			'Next.js',
			'Tailwind',
			'Fastify',
			'Prisma',
			'OpenAPI',
			'Docker',
			'PostgreSQL',
		],
	},
	{
		thumbnail: NoodlyThumbnail,
		title: 'Noodly',
		description:
			'Strona internetowa w postaci platformy blogowej, umożliwiająca prowadzenie własnego profilu pisząc artykuły na różne tematy.',
		url: 'https://noodly.projectcode.pl/',
		technologies: [
			'TypeScript',
			'Next.js',
			'MUI',
			'React Hook Form',
			'Fastify',
			'Prisma',
		],
	},
	{
		thumbnail: HappyShopThumbnail,
		title: 'Happy Shop',
		description: 'Prosty sklep internetowy, napisany w oparciu o React.js.',
		url: 'https://happy-shop.vercel.app/',
		technologies: [
			'JavaScript',
			'React.js',
			'React Router',
			'Styled Components',
		],
	},
	{
		thumbnail: NodeJSMinecraftItemShop,
		title: 'NodeJS Minecraft ItemShop',
		description:
			'Strona Internetowa dla serwerów minecraft. Posiada sklep z przedmiotami, oraz zaimplementowane płatności LVL UP.',
		url: 'https://github.com/AdiPol1359/NodeJS-Minecraft-ItemShop/',
		technologies: ['JavaScript', 'NodeJS', 'Express', 'Pug'],
	},
];
