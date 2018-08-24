export default {
	data() {
		return {
			colorThemes: ['blue', 'red'],
		};
	},

	mounted() {
		this.enterPage();
	},

	beforeUpdate() {
		this.updatePage();
	},

	methods: {
		changeTheme(theme, persist = true) {
			const classes = document.body.classList;
			const themes = this.colorThemes.map(colorTheme => `yuu-theme-${colorTheme}`);

			if (!theme) {
				if (persist) {
					localStorage.removeItem('color-theme');
				}

				return classes.remove(...themes);
			}

			classes.remove(...themes.filter(t => t !== `yuu-theme-${theme}`));
			classes.add(`yuu-theme-${theme}`);

			if (persist) {
				localStorage.setItem('color-theme', theme);
			}
		},

		enterPage() {
			if (localStorage.getItem('ignore-forced-themes') === 'true') {
				return;
			}

			this.changeTheme(this.$page.frontmatter.forceTheme, false);
		},

		updatePage() {
			if (localStorage.getItem('ignore-forced-themes') === 'true') {
				return;
			}

			const theme = this.$page.frontmatter.forceTheme || localStorage.getItem('color-theme');
			this.changeTheme(theme, false);
		},
	},
};
