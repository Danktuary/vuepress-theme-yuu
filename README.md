<div align="center">
	<img src="https://i.imgur.com/j9bfYBy.png" title="Yuu" alt="Yuu" />
</div>

# Yuu

A [VuePress](https://vuepress.vuejs.org/) theme that supports a dark theme, multiple color themes, and [other useful features](https://vuepress-theme-yuu.netlify.app/theme-configuration.html). Extended upon the [default VuePress theme](https://vuepress.vuejs.org/theme/default-theme-config.html) with some adjustments.

## Installation

You can add Yuu to your current VuePress project by running:

```bash
yarn add vuepress-theme-yuu
# or npm install vuepress-theme-yuu
```

And then setting it in your `docs/.vuepress/config.js` file:

```js
module.exports = {
	theme: 'yuu',
}
```
## Features and configuration

![Yuu user settings dropdown menu](https://i.imgur.com/VCDGN8n.png)

You can check out how to configure all of Yuu's features and a live demo on the [docs site](https://vuepress-theme-yuu.netlify.app/).

## Upgrading

### Upgrade to v3

Yuu v3 brings bug fixes and CSS updates, as well as a few small features and breaking changes. You should also consider upgrading to `vuepress@^1.8.0`.

Features:
- Added a `logo` option to the Yuu theme config
- Added a `labels` option to the Yuu theme config

Breaking changes:
- The `forceTheme` frontmatter option has been renamed to `pageTheme`
