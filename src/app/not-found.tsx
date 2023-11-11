import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="text-center">
			<h1 className="text-6xl font-bold text-white-black">404</h1>
			<p className="mt-1 font-medium text-gray-800 dark:text-gray-200">
				Upps... Nie znaleziono strony!
			</p>
			<Link href="/" className="mt-2 inline-block text-primary underline">
				Powrót do strony głównej
			</Link>
		</div>
	);
}
