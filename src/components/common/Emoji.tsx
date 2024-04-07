import Image from 'next/image';

import callMeHand from '@/assets/images/emojis/call-me-hand.png';
import fire from '@/assets/images/emojis/fire.png';
import gemStone from '@/assets/images/emojis/gem-stone.png';
import raisedHand from '@/assets/images/emojis/raised-hand.png';
import wavingHand from '@/assets/images/emojis/waving-hand.png';

const emojis = {
	'🔥': fire,
	'💎': gemStone,
	'🤙': callMeHand,
	'✋': raisedHand,
	'👋': wavingHand,
} as const;

type EmojiProps = Readonly<{
	type: keyof typeof emojis;
}>;

export const Emoji = ({ type }: EmojiProps) => (
	<span className="relative">
		<Image
			src={emojis[type]}
			alt={type}
			placeholder="blur"
			className="object-contain"
			fill
		/>
		<span className="invisible">{type}</span>
	</span>
);
