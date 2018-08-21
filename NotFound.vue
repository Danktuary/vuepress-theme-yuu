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
const messages = [
	'There\'s nothing here.',
	'How did we get here?',
	'That\'s a Four-Oh-Four.',
	'Looks like we\'ve got some broken links.',
];

export default {
	methods: {
		displayMessage() {
			return messages[Math.floor(Math.random() * messages.length)];
		},
	},
};
</script>
