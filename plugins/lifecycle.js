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
			themes,
		}

		const $yuu = {
			colorTheme: 'default',
			darkTheme: false,
			ignoreThemes: false,
		}

		if (yuuConfig.disableDarkTheme !== true) {
			if (yuuConfig.defaultDarkTheme === true && !localStorage.getItem('dark-theme')) {
				localStorage.setItem('dark-theme', true)
			}

			$yuu.darkTheme = localStorage.getItem('dark-theme') === 'true'
		}

		const userTheme = localStorage.getItem('color-theme')

		if (yuuConfig.defaultColorTheme !== 'default' && !userTheme) {
			$yuu.colorTheme = yuuConfig.defaultColorTheme
			localStorage.setItem('color-theme', yuuConfig.defaultColorTheme)
		} else if (userTheme) {
			$yuu.colorTheme = userTheme
		}

		$yuu.ignoreThemes = yuuConfig.disableThemeIgnore ? false : localStorage.getItem('ignore-themes') === 'true'

		this.$root.$yuu = $yuu
		this.$site.themeConfig.yuu = yuuConfig
	},
}
