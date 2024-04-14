import type { StaticImageData } from 'next/image';

export interface Project {
	readonly image: StaticImageData;
	readonly title: string;
	readonly description: string;
	readonly url: string;
	readonly technologies: string[];
}
