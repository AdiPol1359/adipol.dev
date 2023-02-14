import Link from 'next/link';

type ErrorProps = Readonly<{
	statusCode: number;
	description: string;
}>;

export const Error = ({ statusCode, description }: ErrorProps) => (
	<div className="flex flex-col items-center text-white-black">
		<hgroup className="flex flex-col items-center">
			<h1 className="text-6xl font-extrabold md:text-7xl">{statusCode}</h1>
			<p className="text-center">{description}</p>
		</hgroup>
		<Link
			href="/"
			className="mt-3.5 rounded-md border border-white-black py-3 px-5"
		>
			Powrót do strony głównej
		</Link>
	</div>
);
