<template>
	<div class="theme-options">
		<div v-if="yuuConfig.extraOptions && yuuConfig.extraOptions.above" class="user-options-above">
			<component :is="yuuConfig.extraOptions.above" />
		</div>
		<ul v-if="yuuConfig.hasThemes" class="color-theme-options">
			<li>
				<a href="#" class="default-theme" @click.prevent="setTheme()"></a>
			</li>
			<li v-for="color in yuuConfig.themes" :key="color">
				<a href="#" :class="`${color}-theme`" @click.prevent="setTheme(color)"></a>
			</li>
		</ul>
		<div v-if="!yuuConfig.disableDarkTheme" class="dark-theme-options toggle-option">
			<label for="dark-theme-toggle">{{ yuuConfig.labels.darkTheme }}</label>
			<input id="dark-theme-toggle" v-model="darkTheme" type="checkbox" @change="toggleDarkTheme" />
		</div>
		<div v-if="yuuConfig.hasThemes && !yuuConfig.disableThemeIgnore" class="force-theme-options toggle-option">
			<label for="force-theme-toggle">{{ yuuConfig.labels.forcedThemes }}</label>
			<input id="force-theme-toggle" v-model="ignoreForcedThemes" type="checkbox" @change="toggleForcedThemes" />
		</div>
		<div v-if="yuuConfig.extraOptions && yuuConfig.extraOptions.below" class="user-options-below">
			<component :is="yuuConfig.extraOptions.below" />
		</div>
	</div>
</template>

<script>
import yuuConfig from '@theme/mixins/yuuConfig.js'
import themeHandler from '@theme/mixins/themeHandler.js'
import darkThemeHandler from '@theme/mixins/darkThemeHandler.js'

export default {
	name: 'ThemeOptions',
	mixins: [yuuConfig, themeHandler, darkThemeHandler],
}
</script>

<style lang="stylus">
@import '../../styles/variables.styl';

.color-theme-options {
	display: flex;
	justify-content: space-around;

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

			&.purple-theme {
				background-color: $purpleAccentColor;
			}
		}
	}
}

.toggle-option {
	display: flex;
	justify-content: space-between;
	align-items: center;

	label {
		padding-right: 0.25em;
	}
}
</style>
