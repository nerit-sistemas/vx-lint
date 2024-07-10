/**
 * ESLint UI
 * Regras de lint NATIVAS (do eslint).
 */
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint/eslint-plugin'],
	extends: ['plugin:@typescript-eslint/recommended'],

	rules: {
		'@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
		'@typescript-eslint/no-empty-function': [
			'error',
			{ allow: ['protected-constructors', 'private-constructors'] },
		],
		'@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/func-call-spacing': ['error', 'never'],
		'@typescript-eslint/quotes': ['error', 'single'],
		'@typescript-eslint/semi': ['error', 'never'],
		'@typescript-eslint/space-before-function-paren': [
			'error',
			{ anonymous: 'never', named: 'never', asyncArrow: 'always' },
		],
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-includes': 'error',
		// '@typescript-eslint/indent': ['error', 4],
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/await-thenable': 'error',
		'@typescript-eslint/consistent-type-assertions': 'error',
		'@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
		'@typescript-eslint/no-for-in-array': 'error',
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/no-this-alias': 'error',
		'@typescript-eslint/no-unnecessary-type-assertion': 'error',
		'@typescript-eslint/restrict-plus-operands': 'error',
		'@typescript-eslint/no-array-constructor': 'error',
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/prefer-readonly': 'error',
		'@typescript-eslint/prefer-string-starts-ends-with': 'error',
		'@typescript-eslint/promise-function-async': 'error',
		'@typescript-eslint/interface-name-prefix': ['error', { prefixWithI: 'always' }],
		'@typescript-eslint/explicit-function-return-type': [
			'error',
			{
				allowExpressions: true,
				allowTypedFunctionExpressions: true,
			},
		],
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				vars: 'all',
				args: 'after-used',
				ignoreRestSiblings: false,
			},
		],
		'@typescript-eslint/ban-types': [
			'error',
			{
				types: {
					Object: 'Use {} instead',
					String: {
						message: 'Use string instead',
						fixWith: 'string',
					},
					Boolean: {
						message: 'Use boolean instead',
						fixWith: 'boolean',
					},
				},
			},
		],
		'@typescript-eslint/type-annotation-spacing': [
			'error',
			{
				before: false,
				after: true,
				overrides: {
					arrow: {
						before: true,
						after: true,
					},
				},
			},
		],
		'@typescript-eslint/member-delimiter-style': ['off'],
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],

		'no-console': 'error',
		'@typescript-eslint/prefer-nullish-coalescing': 'warn',
		'@typescript-eslint/no-misused-promises': 'warn',
		'@typescript-eslint/unified-signatures': 'warn',
		'no-extra-boolean-cast': 0,
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/ban-types': [
			'error',
			{
				extendDefaults: false,
				types: {
					String: {
						message: 'Use string instead',
						fixWith: 'string',
					},
					Boolean: {
						message: 'Use boolean instead',
						fixWith: 'boolean',
					},
					Number: {
						message: 'Use number instead',
						fixWith: 'number',
					},
					Symbol: {
						message: 'Use symbol instead',
						fixWith: 'symbol',
					},
					// object typing
					Object: {
						message:
							'Avoid using this as it doesn\'t really mean anything. Some meaningful better options: "AnyObjTP", "unknown", etc.',
						fixWith: '{}',
					},
					'{}': {
						message:
							'Avoid using this as it doesn\'t really mean anything. Some meaningful better options: "AnyObjTP", "unknown", etc.',
						fixWith: '{}',
					},
					object: {
						fixWith: '{}',
						message: [
							'The `object` type is currently hard to use ([see this issue](https://github.com/microsoft/TypeScript/issues/21732)).',
							'Some meaningful better options: "AnyObjectTP", "unknown", etc.',
						].join('\n'),
					},
				},
			},
		],
		'@typescript-eslint/naming-convention': [
			'warn',
			{
				selector: 'default',
				format: ['camelCase']
			},
			{
				selector: 'function',
				format: ['camelCase', 'PascalCase'],
				leadingUnderscore: 'allow'
			},
			{
				selector: 'variable',
				format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
				leadingUnderscore: 'allow'
			},
			{
				selector: 'parameter',
				format: ['camelCase'],
				leadingUnderscore: 'allow'
			},
			{
				selector: 'class',
				format: ['PascalCase'],
				suffix: ['ResponseDTO', 'RequestDTO', 'Utils', 'Helper', 'Exception', 'Logger', 'Config', 'Validator', 'Constraint', 'CP', 'Actions', 'Requests', 'FormModel']
			},
			{
				selector: 'interface',
				format: ['PascalCase'],
				prefix: ['I']
			},
			{
				selector: 'enum',
				format: ['PascalCase'],
				suffix: ['Enum']
			},
			{
				selector: 'enumMember',
				format: ['UPPER_CASE']
			},
			{
				selector: 'memberLike',
				modifiers: ['private'],
				format: ['camelCase'],
				leadingUnderscore: 'require'
			},
			{
				selector: 'memberLike',
				modifiers: ['private', 'readonly'],
				format: ['camelCase', 'UPPER_CASE'],
				leadingUnderscore: 'require'
			},
			{
				selector: 'memberLike',
				modifiers: ['public', 'readonly'],
				format: ['camelCase', 'UPPER_CASE'],
				leadingUnderscore: 'forbid'
			},
			{
				selector: 'typeParameter',
				format: ['PascalCase'],
				suffix: ['TP']
			},
			{
				selector: 'typeAlias',
				format: ['PascalCase'],
				suffix: ['TP'],
				leadingUnderscore: 'allow'
			},
			{
				selector: 'variable',
				types: ['boolean'],
				format: ['PascalCase', 'UPPER_CASE'],
				prefix: [
					'is', 'are', 'should', 'must', 'have', 'has', 'was', 'can', 'did', 'will', 'show', 'enable', 'disable',
					'IS_', 'ARE_', 'SHOULD_', 'MUST_', 'HAVE_', 'HAS_', 'WAS_', 'CAN_', 'DID_', 'WILL_', 'SHOW_', 'ENABLE_', 'DISABLE_'
				],
				leadingUnderscore: 'allow'
			}
		],
		// '@typescript-eslint/member-ordering': [
		// 	'error',
		// 	{
		// 		'default': [
		// 			'signature',
		// 			'public-static-field',
		// 			'public-abstract-field',
		// 			'public-instance-field',
		// 			'protected-static-field',
		// 			'protected-abstract-field',
		// 			'protected-instance-field',
		// 			'private-static-field',
		// 			'private-abstract-field',
		// 			'private-instance-field',
		// 			'constructor',
		// 			'public-static-method',
		// 			'public-abstract-method',
		// 			'public-instance-method',
		// 			'protected-static-method',
		// 			'protected-abstract-method',
		// 			'protected-instance-method',
		// 			'private-static-method',
		// 			'private-abstract-method',
		// 			'private-instance-method',
		// 		]
		// 	}
		// ],
	},
};