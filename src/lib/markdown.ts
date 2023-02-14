import { serialize } from 'next-mdx-remote/serialize';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import type { VFileCompatible } from 'vfile';

export const serializeSource = (source: VFileCompatible) =>
	serialize(source, {
		parseFrontmatter: true,
		mdxOptions: {
			rehypePlugins: [rehypeCodeTitles, rehypePrism],
		},
	});
