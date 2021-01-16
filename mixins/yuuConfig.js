export default {
	data() {
		return {
			yuuConfig: {},
		}
	},
	beforeMount() {
		const { yuu = {} } = this.$site.themeConfig
		const { labels = {} } = yuu
		const themes = yuu.colorThemes || ['blue', 'red', 'purple']
		const hasThemes = Array.isArray(themes) && themes.length

		this.yuuConfig = {
			defaultColorTheme: yuu.defaultColorTheme || 'default',
			defaultDarkTheme: yuu.defaultDarkTheme || false,
			disableDarkTheme: yuu.disableDarkTheme || false,
			disableThemeIgnore: yuu.disableThemeIgnore || false,
			extraOptions: yuu.extraOptions || {},
			hasThemes,
			labels: {
				darkTheme: labels.darkTheme || 'Enable Dark Theme?',
				forcedThemes: labels.forcedThemes || 'Ignore Forced Themes?',
			},
			themes,
		}
	},
}
