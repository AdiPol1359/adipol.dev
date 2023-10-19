import CSS from '@/assets/svg/skills/css.svg';
import Cypress from '@/assets/svg/skills/cypress.svg';
import Docker from '@/assets/svg/skills/docker.svg';
import Express from '@/assets/svg/skills/express.svg';
import Fastify from '@/assets/svg/skills/fastify.svg';
import Git from '@/assets/svg/skills/git.svg';
import HTML from '@/assets/svg/skills/html.svg';
import JavaScript from '@/assets/svg/skills/javascript.svg';
import Jest from '@/assets/svg/skills/jest.svg';
import Laravel from '@/assets/svg/skills/laravel.svg';
import NestJS from '@/assets/svg/skills/nestjs.svg';
import NextJS from '@/assets/svg/skills/nextjs.svg';
import NodeJS from '@/assets/svg/skills/nodejs.svg';
import PostgreSQL from '@/assets/svg/skills/postgresql.svg';
import Prisma from '@/assets/svg/skills/prisma.svg';
import React from '@/assets/svg/skills/react.svg';
import Redis from '@/assets/svg/skills/redis.svg';
import Sass from '@/assets/svg/skills/sass.svg';
import Storybook from '@/assets/svg/skills/storybook.svg';
import TailwindCSS from '@/assets/svg/skills/tailwindcss.svg';
import TypeScript from '@/assets/svg/skills/typescript.svg';
import VueJS from '@/assets/svg/skills/vuejs.svg';

import type { Skill } from '@/types';

export const skills: Skill[] = [
	{
		color: '#e44d26',
		href: 'https://www.w3.org/html/',
		label: 'HTML 5',
		icon: HTML,
	},
	{
		color: '#1572b6',
		href: 'https://www.w3.org/Style/CSS/Overview.en.html/',
		label: 'CSS 3',
		icon: CSS,
	},
	{
		color: '#f0db4f',
		href: 'https://www.javascript.com/',
		label: 'JavaScript',
		icon: JavaScript,
	},
	{
		color: '#007acc',
		href: 'https://www.typescriptlang.org/',
		label: 'TypeScript',
		icon: TypeScript,
	},
	{
		color: '#61dafb',
		href: 'https://react.dev/',
		label: 'React',
		icon: React,
	},
	{
		color: '#000',
		href: 'https://nextjs.org/',
		label: 'Next.js',
		icon: NextJS,
	},
	{
		color: '#64b687',
		href: 'https://vuejs.org/',
		label: 'Vue.js',
		icon: VueJS,
	},
	{
		color: '#38b2ac',
		href: 'https://tailwindcss.com/',
		label: 'Tailwind CSS',
		icon: TailwindCSS,
	},
	{
		color: '#cb6699',
		href: 'https://sass-lang.com/',
		label: 'Sass',
		icon: Sass,
	},
	{
		color: '#ff4785',
		href: 'https://storybook.js.org/',
		label: 'Storybook',
		icon: Storybook,
	},
	{
		color: '#99425b',
		href: 'https://jestjs.io/',
		label: 'Jest',
		icon: Jest,
	},
	{
		color: '#000',
		href: 'https://www.cypress.io/',
		label: 'Cypress',
		icon: Cypress,
	},
	{
		color: '#ff2d20',
		href: 'https://laravel.com/',
		label: 'Laravel',
		icon: Laravel,
	},
	{
		color: '#83cd29',
		href: 'https://nodejs.org/en',
		label: 'Node.js',
		icon: NodeJS,
	},
	{
		color: '#000',
		href: 'https://expressjs.com/',
		label: 'Express',
		icon: Express,
	},
	{
		color: '#000',
		href: 'https://fastify.dev/',
		label: 'Fastify',
		icon: Fastify,
	},
	{
		color: '#df234f',
		href: 'https://nestjs.com/',
		label: 'NestJS',
		icon: NestJS,
	},
	{
		color: '#1d394e',
		href: 'https://www.prisma.io/',
		label: 'Prisma',
		icon: Prisma,
	},
	{
		color: '#019bc6',
		href: 'https://www.docker.com/',
		label: 'Docker',
		icon: Docker,
	},
	{
		color: '#336791',
		href: 'https://www.postgresql.org/',
		label: 'PostgreSQL',
		icon: PostgreSQL,
	},
	{
		color: '#d82c20',
		href: 'https://redis.io/',
		label: 'Redis',
		icon: Redis,
	},
	{
		color: '#f34f29',
		href: 'https://git-scm.com/',
		label: 'Git',
		icon: Git,
	},
];
