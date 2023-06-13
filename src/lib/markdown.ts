import { serialize } from 'next-mdx-remote/serialize';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';

export const serializeSource = (source: string) =>
	serialize(source, {
		parseFrontmatter: true,
		mdxOptions: {
			rehypePlugins: [rehypeCodeTitles, rehypePrism],
		},
	});
