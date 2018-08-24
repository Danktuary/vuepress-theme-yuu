export default {
	mounted() {
		this.setPageTheme();
	},

	beforeUpdate() {
		this.setPageTheme();
	},

	methods: {
		setTheme(theme, persist = true) {
			const { yuu: { colorThemes } } = this.$site.themeConfig;
			const classes = document.body.classList;
			const themes = colorThemes.map(colorTheme => `yuu-theme-${colorTheme}`);

			if (!theme) {
				if (persist) localStorage.removeItem('color-theme');
				return classes.remove(...themes);
			}

			if (theme && !colorThemes.includes(theme)) {
				const oldTheme = localStorage.getItem('color-theme');
				return this.setTheme(colorThemes.includes(oldTheme) ? oldTheme : null);
			}

			classes.remove(...themes.filter(t => t !== `yuu-theme-${theme}`));
			classes.add(`yuu-theme-${theme}`);

			if (persist) {
				localStorage.setItem('color-theme', theme);
			}
		},

		setPageTheme() {
			if (localStorage.getItem('ignore-forced-themes') === 'true') {
				return;
			}

			const theme = this.$page.frontmatter.forceTheme || localStorage.getItem('color-theme');
			this.setTheme(theme, false);
		},
	},
};
