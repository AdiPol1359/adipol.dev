/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		fontLoaders: [
			{
				loader: '@next/font/google',
				options: { subsets: ['latin', 'latin-ext'] },
			},
		],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						svgoConfig: {
							plugins: [
								{
									name: 'removeViewBox',
									active: false,
								},
							],
						},
					},
				},
			],
		});

		return config;
	},
};

module.exports = nextConfig;
