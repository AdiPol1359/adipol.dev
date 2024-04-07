const {
	NEXT_PUBLIC_VERCEL_ENV,
	NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF,
	NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,
} = process.env;

export const FooterVercelStatus = () =>
	NEXT_PUBLIC_VERCEL_ENV && (
		<p className="break-all text-dark" aria-hidden>
			{NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF} | {NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}
		</p>
	);
