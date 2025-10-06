import { inView as motionInView } from 'motion';

import type {
	AnimationOptions,
	DOMSegmentWithTransition,
	ElementOrSelector,
	ObjectSegmentWithTransition,
} from 'motion';

type DOMAnimationHandler = (
	elementOrSelector: ElementOrSelector,
	options?: AnimationOptions,
) => DOMSegmentWithTransition;

type ObjectAnimationHandler = (
	{ initialValue, targetValue }: { initialValue: number; targetValue: number },
	options?: AnimationOptions,
) => ObjectSegmentWithTransition;

export const createCountingAnimation: ObjectAnimationHandler = (
	{ initialValue, targetValue },
	options,
) => [
	initialValue,
	targetValue,
	{
		ease: 'circOut',
		...options,
	},
];

export const createDrawingAnimation: DOMAnimationHandler = (
	elementOrSelector,
	options,
) => [
	elementOrSelector,
	{ opacity: 1, pathLength: [0, 1] },
	{ ease: 'anticipate', ...options },
];

export const createFadeInAnimation: DOMAnimationHandler = (
	elementOrSelector,
	options,
) => [elementOrSelector, { opacity: 1 }, { ease: 'anticipate', ...options }];

export const createPopInAnimation: DOMAnimationHandler = (
	elementOrSelector,
	options,
) => [elementOrSelector, { scale: [0.3, 1] }, { ease: 'backOut', ...options }];

export const createSlideInAnimation: DOMAnimationHandler = (
	elementOrSelector,
	options,
) => [
	elementOrSelector,
	{ filter: 'blur(0)', opacity: 1, translate: 0 },
	{ ease: 'anticipate', ...options },
];

export const inView = (
	elementOrSelector: ElementOrSelector,
	onStart: (element: Element) => void,
	{ margin }: { margin: number },
) =>
	motionInView(elementOrSelector, onStart, {
		margin: `0px 0px ${`${margin}px` as const} 0px`,
	});

export { animate } from 'motion';
