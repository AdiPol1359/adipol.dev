import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
	loader: glob({ base: './posts', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			date: z.coerce.date(),
			thumbnail: image(),
			title: z.string(),
			introduction: z.string(),
			sources: z
				.array(
					z.object({
						title: z.string(),
						url: z.string().url(),
					}),
				)
				.default([]),
			tags: z.array(z.string()).default([]),
		}),
});

export const collections = { posts };
