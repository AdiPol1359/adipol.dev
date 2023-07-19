'use client';

import { MDXRemote } from 'next-mdx-remote';

import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

import '@/styles/prism-theme.css';

type PostContentProps = Readonly<{
	source: MDXRemoteSerializeResult;
}>;

export const PostContent = ({ source }: PostContentProps) => (
	<MDXRemote {...source} />
);
