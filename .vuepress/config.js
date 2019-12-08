const config = {
	title: 'Vuepress Theme Yuu',
	description: 'A VuePress theme that supports a dark theme, multiple color themes, and other useful features.',
	plugins: [],
	theme: 'yuu',
	themeConfig: {
		yuu: {
			defaultDarkTheme: true,
		},
		repo: 'danktuary/vuepress-theme-yuu',
		docsBranch: 'docs',
		editLinks: true,
		sidebarDepth: 3,
		lastUpdated: true,
		nav: [
			{
				text: 'Home',
				link: '/',
			},
			{
				text: 'Theme Configuration',
				link: '/theme-configuration',
			},
			{
				text: 'Default Theme Config',
				link: 'https://vuepress.vuejs.org/theme/default-theme-config.html',
			},
		],
	},
};

if (process.env.NODE_ENV === 'production') {
	config.plugins.push(['@vuepress/google-analytics', { ga: 'UA-108513187-2' }]);
}

module.exports = config;
