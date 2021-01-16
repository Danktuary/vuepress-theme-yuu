/* eslint-env node */
module.exports = {
	'extends': ['@commitlint/config-conventional'],
	rules: {
		'subject-case': [2, 'always', 'sentence-case'],
		'type-enum': [2, 'always', [
			'chore',
			'docs',
			'feat',
			'fix',
			'refactor',
			'revert',
			'style',
			'test',
		]],
	},
}
