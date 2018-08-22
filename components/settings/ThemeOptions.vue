<template>
	<div class="theme-options">
		<ul class="color-options">
			<li>
				<a href="#" class="default-theme" @click.prevent="changeTheme()"></a>
			</li>
			<li v-for="color in colorThemes" :key="color">
				<a href="#" :class="`${color}-theme`" @click.prevent="changeTheme(color)"></a>
			</li>
		</ul>
		<div class="dark-theme-options">
			<label for="dark-theme-toggle">
				Enable Dark Theme ?
			</label>
			<input
				id="dark-theme-toggle"
				v-model="darkTheme"
				type="checkbox"
				@change="toggleDarkTheme"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ThemeOptions',

	data() {
		return {
			darkTheme: false,
			colorThemes: ['blue', 'red'],
		};
	},

	mounted() {
		const classes = document.body.classList;

		if (localStorage.getItem('color-scheme')) {
			classes.add(localStorage.getItem('color-scheme'));
		}

		if (localStorage.getItem('dark-theme') === 'true') {
			classes.add('dark');
			this.darkTheme = true;
		}
	},

	methods: {
		changeTheme(theme) {
			const classes = document.body.classList;
			const themes = ['blue', 'red'];

			if (!theme) {
				localStorage.removeItem('color-scheme');
				return classes.remove(...themes);
			}

			classes.remove(...themes.filter(t => t !== theme));
			classes.add(theme);

			localStorage.setItem('color-scheme', theme);
		},

		toggleDarkTheme() {
			if (this.darkTheme) {
				document.body.classList.add('dark');
				return localStorage.setItem('dark-theme', true);
			}

			document.body.classList.remove('dark');
			localStorage.removeItem('dark-theme');
		},
	},
};
</script>

<style lang="stylus">
@import '../../styles/config.styl';

.color-options {
	display: flex;

	li {
		width: 33%;
		text-align: center;

		a {
			width: 15px;
			height: 15px;
			border-radius: 2px;

			&.default-theme {
				background-color: $accentColor;
			}

			&.blue-theme {
				background-color: $blueAccentColor;
			}

			&.red-theme {
				background-color: $redAccentColor;
			}
		}
	}
}

.dark-theme-options {
	display: flex;
	justify-content: space-between;
	align-items: center;

	label {
		padding-right: 0.25em;
	}
}
</style>
