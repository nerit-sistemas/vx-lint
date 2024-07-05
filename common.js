/** @type {import("eslint").Linter.Config} */
module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:import/typescript',
		'plugin:import/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'simple-import-sort', 'import', 'prettier'],
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
		'@typescript-eslint/consistent-type-imports': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'no-useless-escape': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-shadow': 'off',
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
		'no-param-reassign': 'off',
		'no-restricted-syntax': 'off',
		'no-shadow': 'off',
		'import/namespace': 'off',
		'no-underscore-dangle': 'off',
		'no-unused-vars': 'off',
		'no-use-before-define': 'off',
		'@typescript-eslint/ban-types': 'off',
		'no-useless-constructor': 'off',
		'one-var': 'off',
		'prettier/prettier': [
			'error',
			{
				arrowParens: 'always',
				endOfLine: 'auto',
				semi: false,
				singleQuote: true,
				useTabs: true,
				trailingComma: 'all',
				tabWidth: 4,
				printWidth: 155,
				bracketSpacing: true,
				quoteProps: 'as-needed',
			},
		],
		'simple-import-sort/exports': 'error',
		'simple-import-sort/imports': 'error',
	},
};
