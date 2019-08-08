export default {
	data() {
		return {
			yuu: {},
		};
	},

	mounted() {
		const { yuu = {} } = this.$site.themeConfig;

		this.yuu = {
			themes: yuu.colorThemes || ['blue', 'red'],
			disableDarkTheme: yuu.disableDarkTheme || false,
			disableThemeIgnore: yuu.disableThemeIgnore || false,
			extraOptions: yuu.extraOptions || {},
			defaultDarkTheme: yuu.defaultDarkTheme || false,
			defaultTheme: yuu.defaultTheme || 'green'
		};

		this.yuu.hasThemes = Array.isArray(this.yuu.themes) && this.yuu.themes.length > 0;
	},
};
