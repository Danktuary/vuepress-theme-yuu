<template>
	<div v-click-outside="hideMenu" class="user-settings">
		<a href="#" @click.prevent="showMenu = !showMenu">
			<!-- TODO: replace with a font icon -->
			Settings
		</a>
		<transition name="menu-transition" mode="out-in">
			<div v-if="showMenu" class="user-settings-menu">
				<ul>
					<li>
						<ul class="theme-options">
							<li>
								<a href="#" class="default-theme" @click.prevent="changeTheme()"></a>
							</li>
							<li>
								<a href="#" class="dark-theme" @click.prevent="changeTheme('dark')"></a>
							</li>
							<li>
								<a href="#" class="blue-theme" @click.prevent="changeTheme('blue')"></a>
							</li>
							<li>
								<a href="#" class="red-theme" @click.prevent="changeTheme('red')"></a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#">Branch selector</a>
					</li>
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
		'click-outside': vClickOutside.directive,
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

		changeTheme(theme) {
			const classes = document.body.classList;
			const themes = ['dark', 'blue', 'red'];

			if (!theme) {
				localStorage.removeItem('layout-theme');
				return classes.remove(...themes);
			}

			classes.remove(...themes.filter(t => t !== theme));
			classes.add(theme);

			localStorage.setItem('layout-theme', theme);
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

		.theme-options {
			display: flex;

			li {
				width: 25%;
				text-align: center;

				a {
					width: 15px;
					height: 15px;
					border-radius: 2px;

					&.default-theme {
						background-color: $accentColor;
					}

					&.dark-theme {
						background-color: $darkAccentColor;
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
	}
}
</style>
