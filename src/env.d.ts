interface ImportMetaEnv {
	readonly PUBLIC_VERCEL_GIT_COMMIT_REF: string;
	readonly PUBLIC_VERCEL_GIT_COMMIT_SHA: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
