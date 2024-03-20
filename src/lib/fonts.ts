import { Poppins } from 'next/font/google';

export const poppins = Poppins({
	variable: '--font-poppins',
	subsets: ['latin', 'latin-ext'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
