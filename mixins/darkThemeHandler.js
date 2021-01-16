export default {
	data() {
		return {
			darkTheme: false,
		}
	},
	mounted() {
		if (this.yuu.disableDarkTheme !== true) {
			if (this.yuu.defaultDarkTheme === true && !localStorage.getItem('dark-theme')) {
				localStorage.setItem('dark-theme', true)
			}

			this.darkTheme = localStorage.getItem('dark-theme') === 'true'
			this.toggleDarkTheme()
		}
	},
	methods: {
		toggleDarkTheme() {
			if (this.darkTheme) {
				document.body.classList.add('yuu-theme-dark')
				return localStorage.setItem('dark-theme', true)
			}

			document.body.classList.remove('yuu-theme-dark')
			localStorage.setItem('dark-theme', false)
		},
	},
}
