export default {
	data() {
		return {
			colorTheme: 'default',
			ignoreForcedThemes: false,
		}
	},
	mounted() {
		const { yuuConfig } = this

		if (yuuConfig.defaultColorTheme !== 'default' && !localStorage.getItem('color-theme')) {
			this.colorTheme = yuuConfig.defaultColorTheme
			localStorage.setItem('color-theme', yuuConfig.defaultColorTheme)
		}

		this.ignoreForcedThemes = yuuConfig.disableThemeIgnore || localStorage.getItem('ignore-forced-themes') === 'true'

		this.setPageTheme()
	},
	beforeUpdate() {
		this.setPageTheme()
	},
	methods: {
		setTheme(colorTheme = 'default', persist = true) {
			const { themes } = this.yuuConfig
			const { classList } = document.body
			const themesClasses = themes.map(theme => `yuu-theme-${theme}`)

			if (colorTheme !== 'default' && !themes.includes(colorTheme)) {
				const oldTheme = localStorage.getItem('color-theme')
				colorTheme = themes.includes(oldTheme) ? oldTheme : 'default'
			}

			this.colorTheme = colorTheme
			if (persist) localStorage.setItem('color-theme', colorTheme)

			if (colorTheme === 'default') return classList.remove(...themesClasses)
			classList.remove(...themesClasses.filter(themeClass => themeClass !== `yuu-theme-${colorTheme}`))
			classList.add(`yuu-theme-${colorTheme}`)
		},
		setPageTheme() {
			const { colorTheme, ignoreForcedThemes } = this
			const { forceTheme } = this.$page.frontmatter
			const theme = ignoreForcedThemes ? colorTheme : forceTheme || colorTheme

			this.setTheme(theme, false)
		},
		toggleForcedThemes() {
			if (this.ignoreForcedThemes) {
				this.setPageTheme()
				return localStorage.setItem('ignore-forced-themes', true)
			}

			localStorage.removeItem('ignore-forced-themes')
		},
	},
}
