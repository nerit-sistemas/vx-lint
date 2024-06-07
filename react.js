const common = require('./common');

/** @type {import("eslint").Linter.Config} */
module.exports = {
	...common,
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:import/react',
		...common.extends,
	],
	plugins: ['react', 'react-hooks', 'jsx-a11y', ...common.plugins],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	globals: {
		JSX: true,
		React: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/parsers': {
			[require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
		},
	},
	rules: {
		...common.rules,
		'react/self-closing-comp': 'error',
		'react/react-in-jsx-scope': 'off',
		'jsx-a11y/alt-text': [
			'warn',
			{
				elements: ['img'],
				img: ['Image'],
			},
		],
		'jsx-a11y/aria-props': 'warn',
		'jsx-a11y/aria-proptypes': 'warn',
		'jsx-a11y/aria-unsupported-elements': 'warn',
		'jsx-a11y/role-has-required-aria-props': 'warn',
		'jsx-a11y/role-supports-aria-props': 'warn',
		'react/no-unknown-property': 'error',
	},
};
