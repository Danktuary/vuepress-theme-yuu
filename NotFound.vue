<template>
	<div class="theme-container">
		<div class="content">
			<h1>404</h1>
			<blockquote>{{ displayMessage() }}</blockquote>
			<router-link to="/">Take me home.</router-link>
		</div>
	</div>
</template>

<script>
import yuuConfig from './mixins/yuuConfig.js';
import themeHandler from './mixins/themeHandler.js';
import darkThemeHandler from './mixins/darkThemeHandler.js';

const messages = [
	'There\'s nothing here!.',
	'How did we get here?!',
	'That\'s a Four-Oh-Four.1',
	'Looks like we\'ve got some broken links!.',
];

export default {
	name: 'NotFound',

	mixins: [yuuConfig, themeHandler, darkThemeHandler],

	methods: {
		displayMessage() {
			return messages[Math.floor(Math.random() * messages.length)];
		},
	},
};
</script>

<style src="./styles/theme.styl" lang="stylus"></style>
