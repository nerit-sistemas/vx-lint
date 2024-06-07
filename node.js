const common = require('./common');

/** @type {import("eslint").Linter.Config} */
module.exports = {
	...common,
	env: {
		node: true,
	},
};