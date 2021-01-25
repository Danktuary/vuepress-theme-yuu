---
home: true
heroImage: https://i.imgur.com/j9bfYBy.jpg
actionText: Theme Configuration →
actionLink: /theme-configuration
description: A VuePress theme that supports a dark theme, multiple color themes, and other useful features.
footer: MIT Licensed | Copyright © 2018-present Sanctuary
---

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
};
```

Yuu is extended upon the default VuePress theme (with some adjustments), so you get all the great features it already provides!

## Upgrading

### Upgrade to v3

Yuu v3 brings bug fixes and CSS updates, as well as a few small features and breaking changes. You should also consider upgrading to `vuepress@^1.8.0`.

Features:
- Added a [`logo` option](/theme-configuration.html#custom-logo) to the Yuu theme config
- Added a [`labels` option](/theme-configuration.html#labels) to the Yuu theme config

Breaking changes:
- The `forceTheme` frontmatter option has been renamed to [`pageTheme`](/theme-configuration.html#set-color-themes-per-page)
