/** @type {import("eslint").Linter.Config} */
module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:all',
		'eslint:recommended',
		'plugin:import/typescript',
		'plugin:import/recommended',
		'plugin:unicorn/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'unicorn', 'simple-import-sort', 'import', 'prettier'],
	ignorePatterns: ['.*.js', 'node_modules/', 'dist/'],
	overrides: [
		{
			files: ['**/*.spec.ts'],
			env: {
				jest: true,
			},
		},
	],
	rules: {
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports',
				fixStyle: 'inline-type-imports',
			},
		],
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-shadow': 'error',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				ignoreRestSiblings: true,
			},
		],
		'class-methods-use-this': 'off',
		'consistent-return': 'off',
		'import/export': 'off',
		'import/extensions': 'off',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		'import/no-extraneous-dependencies': 'off',
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'lines-between-class-members': 'off',
		'no-await-in-loop': 'off',
		'no-constant-condition': 'off',
		'no-continue': 'off',
		'no-dupe-class-members': 'off',
		'no-empty-function': 'off',
		'no-param-reassign': ['error', { props: false }],
		'no-restricted-syntax': 'off',
		'no-shadow': 'off',
		'no-underscore-dangle': 'off',
		'no-unused-vars': 'off',
		'no-use-before-define': 'off',
		'no-useless-constructor': 'off',
		'one-var': 'off',
		'prettier/prettier': ['error'],
		'simple-import-sort/exports': 'error',
		'simple-import-sort/imports': 'error',
		'unicorn/filename-case': 'off',
		'unicorn/no-null': 'off',
		'unicorn/no-static-only-class': 'off',
		'unicorn/no-useless-undefined': 'off',
		'unicorn/prefer-module': 'off',
		'unicorn/prefer-top-level-await': 'off',
		'unicorn/prefer-type-error': 'off',
		'unicorn/prevent-abbreviations': ['error', { checkFilenames: false }],
		'unicorn/template-indent': ['warn', { indent: '\t' }],
	},
};
