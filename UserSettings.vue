<template>
	<div class="user-settings">
		<a v-click-outside="hideMenu" href="#" @click.prevent="showMenu = !showMenu">
			<!-- TODO: replace with a font icon -->
			Settings
		</a>
		<transition name="menu-transition" mode="out-in">
			<div v-if="showMenu" class="user-settings-menu">
				<ul>
					<li><a href="#">Some user config</a></li>
					<li><a href="#">Some user config</a></li>
					<li><a href="#">Some user config</a></li>
				</ul>
			</div>
		</transition>
	</div>
</template>

<script>
import vClickOutside from 'v-click-outside';

export default {
	name: 'UserSettings',

	directives: {
		clickOutside: vClickOutside.directive,
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
			top: -8px;
			left: 50%;
			border-style: solid;
			border-color: transparent transparent $borderColor;
			border-width: 0 6px 8px;
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
</style>
