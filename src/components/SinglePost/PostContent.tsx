'use client';

import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { ComponentProps } from 'react';

import '@/assets/styles/prism-theme.css';

const components = { Image } as ComponentProps<typeof MDXRemote>['components'];

type PostContentProps = Readonly<{
	source: MDXRemoteSerializeResult;
}>;

export const PostContent = ({ source }: PostContentProps) => (
	<MDXRemote components={components} {...source} />
);
