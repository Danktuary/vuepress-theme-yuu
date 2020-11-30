export default {
	data() {
		return {
			yuu: {},
		};
	},
	beforeMount() {
		const { yuu = {} } = this.$site.themeConfig;
		const { labels = {} } = yuu;

		this.yuu = {
			themes: yuu.colorThemes || ['blue', 'red', 'purple'],
			defaultColorTheme: yuu.defaultColorTheme || 'default',
			defaultDarkTheme: yuu.defaultDarkTheme || false,
			disableDarkTheme: yuu.disableDarkTheme || false,
			disableThemeIgnore: yuu.disableThemeIgnore || false,
			extraOptions: yuu.extraOptions || {},
			labels: {
				darkTheme: labels.darkTheme || "Enable Dark Theme?",
				forcedThemes: labels.forcedThemes || "Ignore Forced Themes?",
			},
		};

		this.yuu.hasThemes = Array.isArray(this.yuu.themes) && this.yuu.themes.length > 0;
	},
};
