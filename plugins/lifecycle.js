export default {
	created() {
		const {
			colorThemes = ['blue', 'red', 'purple'],
			defaultColorTheme = 'default',
			defaultDarkTheme = false,
			disableDarkTheme = false,
			disableThemeIgnore = false,
			extraOptions = {},
			labels = {},
			logo,
		} = this.$site.themeConfig.yuu || {}

		const themes = colorThemes || ['blue', 'red', 'purple']
		const hasThemes = Array.isArray(themes) && themes.length > 0

		const yuuConfig = {
			defaultColorTheme,
			defaultDarkTheme,
			disableDarkTheme,
			disableThemeIgnore,
			extraOptions,
			hasThemes,
			labels: {
				darkTheme: labels.darkTheme || 'Enable Dark Theme?',
				ignoreThemes: labels.ignoreThemes || 'Ignore Other Themes?',
			},
			logo,
			themes,
		}

		const $yuu = {
			colorTheme: 'default',
			userTheme: localStorage.getItem('color-theme'),
			darkTheme: false,
			ignoreThemes: yuuConfig.disableThemeIgnore ? false : localStorage.getItem('ignore-themes') === 'true',
		}

		if (yuuConfig.disableDarkTheme !== true) {
			if (yuuConfig.defaultDarkTheme === true && !localStorage.getItem('dark-theme')) {
				localStorage.setItem('dark-theme', true)
			}

			$yuu.darkTheme = localStorage.getItem('dark-theme') === 'true'
		}

		if (yuuConfig.defaultColorTheme !== 'default' && !$yuu.userTheme) {
			$yuu.userTheme = yuuConfig.defaultColorTheme
			localStorage.setItem('color-theme', yuuConfig.defaultColorTheme)
		}

		if ($yuu.userTheme) $yuu.colorTheme = $yuu.userTheme

		this.$root.$yuu = $yuu
		this.$site.themeConfig.yuu = yuuConfig
	},
}
