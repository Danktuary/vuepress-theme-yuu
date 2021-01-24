<template>
	<parent-layout />
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import themeHandler from '@theme/mixins/themeHandler.js'

export default {
	name: 'Layout',
	components: {
		ParentLayout,
	},
	mixins: [themeHandler],
	beforeMount() {
		if (this.$root.$yuu.darkTheme) this.setDarkTheme()
		this.setPageTheme()
	},
}
</script>

<style src="../styles/variables.styl" lang="stylus"></style>
<style src="../styles/index.styl" lang="stylus"></style>
<style src="../styles/themes/dark.styl" lang="stylus"></style>
<style src="../styles/themes/blue.styl" lang="stylus"></style>
<style src="../styles/themes/red.styl" lang="stylus"></style>
<style src="../styles/themes/purple.styl" lang="stylus"></style>
