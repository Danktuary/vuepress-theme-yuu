<script>
import { isActive, hashRE, groupHeaders } from '../../util.js';

function renderLink(h, to, text, active) {
	return h('router-link', {
		props: {
			to,
			activeClass: '',
			exactActiveClass: '',
		},
		class: {
			active,
			'sidebar-link': true,
		},
	}, text);
}

function renderChildren(h, children, path, route, maxDepth, depth = 1) {
	if (!children || depth > maxDepth) return null;

	return h('ul', { class: 'sidebar-sub-headers' }, children.map(c => {
		const active = isActive(route, `${path}#${c.slug}`);

		return h('li', { class: 'sidebar-sub-header' }, [
			renderLink(h, `${path}#${c.slug}`, c.title, active),
			renderChildren(h, c.children, path, route, maxDepth, depth + 1),
		]);
	}));
}

export default {
	functional: true,

	props: ['item'],

	render(h, { parent: { $page, $site, $route }, props: { item } }) {
		// use custom active class matching logic
		// due to edge case of paths ending with / + hash
		const selfActive = isActive($route, item.path);

		// for sidebar: auto pages, a hash link should be active if one of its child matches
		const active = item.type === 'auto'
			? selfActive || item.children.some(c => isActive($route, `${item.basePath}#${c.slug}`))
			: selfActive;

		const link = renderLink(h, item.path, item.title || item.path, active);

		// eslint-disable-next-line no-eq-null
		const configDepth = $page.frontmatter.sidebarDepth != null
			? $page.frontmatter.sidebarDepth
			: $site.themeConfig.sidebarDepth;

		// eslint-disable-next-line no-eq-null
		const maxDepth = configDepth == null ? 1 : configDepth;
		const displayAllHeaders = Boolean($site.themeConfig.displayAllHeaders);

		if (item.type === 'auto') {
			return [link, renderChildren(h, item.children, item.basePath, $route, maxDepth)];
		}
		else if ((active || displayAllHeaders) && item.headers && !hashRE.test(item.path)) {
			const children = groupHeaders(item.headers);
			return [link, renderChildren(h, children, item.path, $route, maxDepth)];
		}

		return link;
	},
};
</script>

<style lang="stylus">
@import '../../styles/config.styl';

.sidebar .sidebar-sub-headers {
	padding-left: 1rem;
	font-size: 0.95em;
}

a.sidebar-link {
	font-weight: 400;
	display: inline-block;
	color: $textColor;
	border-left: 0.25rem solid transparent;
	padding: 0.35rem 1rem 0.35rem 1.25rem;
	line-height: 1.4;
	width: 100%;
	box-sizing: border-box;

	&:hover {
		color: $accentColor;
	}

	&.active {
		font-weight: 600;
		color: $accentColor;
		border-left-color: $accentColor;
	}

	.sidebar-group & {
		padding-left: 2rem;
	}

	.sidebar-sub-headers & {
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		border-left: none;

		&.active {
			font-weight: 500;
		}
	}
}

.dark {
	a.sidebar-link {
		color: $darkAltTextColor;

		&:hover,
		&.active {
			color: $accentColor;
		}
	}
}

.yuu-theme-blue {
	&.dark {
		a.sidebar-link {
			color: $darkAltTextColor;
		}
	}

	a.sidebar-link {
		color: $textColor;

		&:hover {
			color: $blueAccentColor;
		}

		&.active {
			color: $blueAccentColor;
			border-left-color: $blueAccentColor;
		}
	}
}

.yuu-theme-red {
	&.dark {
		a.sidebar-link {
			color: $darkAltTextColor;
		}
	}

	a.sidebar-link {
		color: $textColor;

		&:hover {
			color: $redAccentColor;
		}

		&.active {
			color: $redAccentColor;
			border-left-color: $redAccentColor;
		}
	}
}
</style>
