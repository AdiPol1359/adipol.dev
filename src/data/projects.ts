import DevFAQThumbnail from '@/assets/images/devfaq.png';
import HappyShopThumbnail from '@/assets/images/happy-shop.png';
import MobiusThumbnail from '@/assets/images/mobius.png';
import NodeJSMinecraftItemShop from '@/assets/images/nodejs-minecraft-itemshop.png';
import NoodlyThumbnail from '@/assets/images/noodly.png';
import PicstagramThumbnail from '@/assets/images/picstagram.png';

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
			'React.js',
			'Next.js',
			'Tailwind CSS',
			'Vitest',
			'Tanstack Query',
			'Storybook',
			'OpenAPI',
			'Swagger UI',
			'Fastify',
			'Docker',
			'Prisma',
			'PostgreSQL',
		],
	},
	{
		thumbnail: PicstagramThumbnail,
		title: 'Picstagram',
		description:
			'Picstagram to strona internetowa służąca do dzielenia się najlepszymi momentami ze swojego życia poprzez przesyłanie zdjęć. Pozwala na utworzenie prywatnego profilu, na którym możesz następnie zdobywać lajki oraz obserwacje.',
		url: 'https://picstagram.adipol.dev/',
		technologies: [
			'TypeScript',
			'React.js',
			'Next.js',
			'Tailwind CSS',
			'Vitest',
			'Rest Testing Library',
			'Tanstack Query',
			'React Hook Form',
			'Storybook',
			'Docker',
			'NextAuth',
			'PostgreSQL',
			'tRPC',
		],
	},
	{
		thumbnail: MobiusThumbnail,
		title: 'Mobius',
		description:
			'Aplikacja webowa służąca do zarządzania zespołem w Twojej pracy. Umożliwia utworzenie prywatnej grupy, na którą możesz zaprosić następnie członków całego zespołu. Utworzenie grupy pozwala na szybką i efektywną komunikację wraz z całym zespołem.',
		url: 'https://mobius.adipol.dev/',
		technologies: [
			'TypeScript',
			'React.js',
			'Next.js',
			'React Hook Form',
			'Storybook',
			'Tailwind CSS',
			'Tanstack Query',
			'NestJS',
			'Docker',
			'PostgreSQL',
			'OpenAPI',
			'Swagger UI',
			'Socket.io',
			'Redis',
		],
	},
	{
		thumbnail: NoodlyThumbnail,
		title: 'Noodly',
		description:
			'Strona internetowa w postaci platformy blogowej, umożliwiająca prowadzenie własnego profilu pisząc artykuły na różne tematy.',
		url: 'https://noodly.adipol.dev/',
		technologies: [
			'TypeScript',
			'React.js',
			'Next.js',
			'React Hook Form',
			'MUI',
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
