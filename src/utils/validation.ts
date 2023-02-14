import type { PostData, PostThumbnail } from '@/types';

export const validatePostThumbnail = (data: unknown): data is PostThumbnail =>
	!!data &&
	typeof data === 'object' &&
	'path' in data &&
	'width' in data &&
	'height' in data &&
	typeof data.path === 'string' &&
	typeof data.width === 'number' &&
	typeof data.height === 'number';

export const validatePostData = (data: unknown): data is PostData =>
	!!data &&
	typeof data === 'object' &&
	'title' in data &&
	'date' in data &&
	'tags' in data &&
	(!('introduction' in data) || typeof data.introduction === 'string') &&
	(!('thumbnail' in data) || validatePostThumbnail(data.thumbnail)) &&
	typeof data.title === 'string' &&
	typeof data.date === 'string' &&
	Array.isArray(data.tags) &&
	data.tags.every((tag) => typeof tag === 'string');
