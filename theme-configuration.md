---
sidebar: auto
---

## Theme configuration

![Yuu user settings dropdown menu](https://i.imgur.com/NsJ0evR.png)

Below is a list of the additional configurable features Yuu has to offer. All other configuration settings in VuePress's [default theme config](https://vuepress.vuejs.org/theme/default-theme-config.html) page are also available, since Yuu extends the default theme.

## Dark theme

Yuu, by default, comes with an option to allow users to switch to a dark theme. You can set this as the default theme via the `defaultDarkTheme` option.

```js
module.exports = {
	themeConfig: {
		yuu: {
			defaultDarkTheme: true,
		},
	},
};
```

### Disabling the dark theme

You can also disable it entirely via the `disableDarkTheme` option.

```js
module.exports = {
	themeConfig: {
		yuu: {
			disableDarkTheme: true,
		},
	},
};
```

## Color themes

Yuu currently supports these color themes: green (default), blue, red, and purple. By default, any additional themes will be included. If you only want to use certain themes, you'll need to be explicit about which ones.

```js
module.exports = {
	themeConfig: {
		yuu: {
			colorThemes: ['red'],
		},
	},
};
```

### Default color theme

You can also set the default color theme via the `defaultColorTheme` option.

```js
module.exports = {
	themeConfig: {
		yuu: {
			defaultColorTheme: 'blue',
		},
	},
};
```

## Forced color themes per page

You can force themes on a per page basis as well. Using YAML frontmatter on the page(s) you want to display a specific theme:

```md
---
forceTheme: blue
---
```

### Disallowing forced themes from being ignored

Users will still be able ignore forced themes via the user settings dropdown menu. You can disable this via the `disableThemeIgnore` option.

```js
module.exports = {
	themeConfig: {
		yuu: {
			disableThemeIgnore: true,
		},
	},
};
```

## Extra options

If you want to add your own options to or around the dropdown menu, you can do so via the `extraOptions` setting. The strings provided are the names of the components to use (most likely located in your `docs/.vuepress/components/` directory).

```js
module.exports = {
	themeConfig: {
		yuu: {
			extraOptions: {
				before: 'BeforeContent',
				after: 'AfterContent',
				above: 'AboveContent',
				below: 'BelowContent',
			},
		},
	},
};
```

`before` and `after` will be placed before or after the cog icon, and `above` and `below` will be placed inside the dropdown menu, above or below the default Yuu options. You can target these elements in your CSS with the selectors `.user-options-before`, `.user-options-after`, `.user-options-above`, and `.user-options-below`.
