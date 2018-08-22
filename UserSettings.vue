<template>
	<div v-click-outside="hideMenu" class="user-settings">
		<a href="#" @click.prevent="showMenu = !showMenu">
			<!-- TODO: replace with a font icon -->
			Settings
		</a>
		<transition name="menu-transition" mode="out-in">
			<div v-show="showMenu" class="user-settings-menu">
				<theme-options />
			</div>
		</transition>
	</div>
</template>

<script>
import vClickOutside from 'v-click-outside';
import ThemeOptions from './ThemeOptions.vue';

export default {
	name: 'UserSettings',

	directives: {
		'click-outside': vClickOutside.directive,
	},

	components: {
		ThemeOptions,
	},

	data() {
		return {
			showMenu: false,
		};
	},

	methods: {
		hideMenu() {
			this.showMenu = false;
		},
	},
};
</script>

<style lang="stylus">
@import './styles/config.styl';

.user-settings {
	position: relative;
	margin-right: 1em;

	.user-settings-menu {
		background-color: #fff;
		position: absolute;
		top: 40px;
		left: 50%;
		margin: 0;
		padding: 1em;
		border: 1px solid $borderColor;
		border-radius: 4px;
		transform: translateX(-50%);

		&::before {
			content: '';
			position: absolute;
			top: -7px;
			left: 50%;
			border-style: solid;
			border-color: transparent transparent $borderColor;
			border-width: 0 7px 7px;
			transform: translateX(-50%);
		}

		&.menu-transition-enter-active,
		&.menu-transition-leave-active {
			transition: all 0.25s ease-in-out;
		}

		&.menu-transition-enter,
		&.menu-transition-leave-to {
			top: 50px;
			opacity: 0;
		}

		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
		}
	}
}

.dark {
	.user-settings-menu {
		background-color: $darkPrimaryBg;
		border-color: $darkBorderColor;

		&::before {
			border-bottom-color: $darkBorderColor;
		}
	}
}
</style>
