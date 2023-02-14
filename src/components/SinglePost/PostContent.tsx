'use client';

import '@/styles/prism-theme.css';

import Image from 'next/image';
import Link from 'next/link';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXRemote } from 'next-mdx-remote';

const components = { Image, Link };

type PostContentProps = Readonly<{
	source: MDXRemoteSerializeResult;
}>;

export const PostContent = ({ source }: PostContentProps) => (
	<MDXRemote {...source} components={components} />
);
