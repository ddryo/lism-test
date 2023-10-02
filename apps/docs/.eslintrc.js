module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'react/react-in-jsx-scope': 0,
		'react/display-name': 0,
		'react/prop-types': 0,
		'react/no-unknown-property': [
			2,
			{
				ignore: ['jsx', 'global'],
			},
		],

		// next.jsのビルドで無視したい
		'no-unused-vars': 1,
		'no-empty-pattern': 1,
	},
};
