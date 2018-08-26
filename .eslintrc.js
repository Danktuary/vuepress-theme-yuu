module.exports = {
	extends: 'aqua/vue',
	rules: {
		'brace-style': ['error', 'stroustrup'],
		'comma-dangle': ['error', 'always-multiline'],
		'radix': ['error', 'as-needed'],
		'no-negated-condition': 'off',
		'operator-linebreak': ['error', 'before'],
		'quote-props': ['error', 'consistent-as-needed'],
		'vue/max-attributes-per-line': ['error', {
			singleline: 4,
			multiline: {
				max: 1,
				allowFirstline: false
			}
		}],
		'vue/html-self-closing': ['error', {
			html: {
				void: 'always',
				normal: 'never',
				component: 'always',
			},
		}],
		'vue/require-default-prop': 'off',
		'vue/require-prop-types': 'off',
	},
};
