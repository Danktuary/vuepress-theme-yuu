export default {
	data() {
		return {
			ignoreForcedThemes: false,
		}
	},
	mounted() {
		if (this.yuu.defaultColorTheme !== 'default' && !localStorage.getItem('color-theme')) {
			localStorage.setItem('color-theme', this.yuu.defaultColorTheme)
		}

		if (this.yuu.disableThemeIgnore !== true) {
			this.ignoreForcedThemes = localStorage.getItem('ignore-forced-themes') === 'true'
		}

		this.setPageTheme()
	},
	beforeUpdate() {
		this.setPageTheme()
	},
	methods: {
		setTheme(theme, persist = true) {
			const colorThemes = this.yuu.themes || {}

			if (!Array.isArray(colorThemes) || !colorThemes.length) return

			const classes = document.body.classList
			const themes = colorThemes.map(colorTheme => `yuu-theme-${colorTheme}`)

			if (!theme) {
				if (persist) localStorage.setItem('color-theme', 'default')
				return classes.remove(...themes)
			}

			if (theme && !colorThemes.includes(theme)) {
				const oldTheme = localStorage.getItem('color-theme')
				return this.setTheme(colorThemes.includes(oldTheme) ? oldTheme : null)
			}

			classes.remove(...themes.filter(t => t !== `yuu-theme-${theme}`))
			classes.add(`yuu-theme-${theme}`)

			if (persist) localStorage.setItem('color-theme', theme)
		},
		setPageTheme() {
			const { forceTheme } = this.$page.frontmatter
			const colorTheme = localStorage.getItem('color-theme')
			const ignoreForcedThemes = localStorage.getItem('ignore-forced-themes') === 'true'
			const theme = this.yuu.disableThemeIgnore !== true && ignoreForcedThemes ? colorTheme : forceTheme || colorTheme

			this.setTheme(theme, false)
		},
		toggleForcedThemes() {
			if (this.ignoreForcedThemes) {
				this.setTheme(localStorage.getItem('color-theme'))
				return localStorage.setItem('ignore-forced-themes', true)
			}

			localStorage.removeItem('ignore-forced-themes')
		},
	},
}
