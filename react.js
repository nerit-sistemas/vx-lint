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
	globals: {
		JSX: true,
		React: true,
	},
};
