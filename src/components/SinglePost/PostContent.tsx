'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';

import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

import '@/styles/prism-theme.css';

const components = { Image, Link };

type PostContentProps = Readonly<{
	source: MDXRemoteSerializeResult;
}>;

export const PostContent = ({ source }: PostContentProps) => (
	<MDXRemote {...source} components={components} />
);
