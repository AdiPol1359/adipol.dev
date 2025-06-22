// @ts-check
/* eslint-disable import-x/no-named-as-default-member */
import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginAstro from 'eslint-plugin-astro';
import { importX } from 'eslint-plugin-import-x';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
	eslint.configs.recommended,
	tsEslint.configs.recommendedTypeChecked,
	importX.flatConfigs.recommended,
	importX.flatConfigs.typescript,
	eslintPluginUnicorn.configs.recommended,
	eslintPluginAstro.configs.recommended,
	eslintPluginAstro.configs['jsx-a11y-recommended'],
	eslintConfigPrettier,
	{
		languageOptions: {
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		rules: {
			'require-await': 'error',
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/no-floating-promises': 'error',
			'@typescript-eslint/no-unused-vars': 'error',
			'@typescript-eslint/prefer-optional-chain': 'error',
			'import-x/first': 'error',
			'import-x/newline-after-import': 'error',
			'unicorn/prevent-abbreviations': 'off',
		},
	},
	{
		files: ['**/*.astro'],
		rules: {
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-unsafe-return': 'off',
			'import-x/no-unresolved': ['error', { ignore: ['astro:.+'] }],
		},
	},
);
