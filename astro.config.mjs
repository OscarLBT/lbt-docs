import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs',
			logo: {
				light: './src/assets/lbt_logo.png',
				dark: './src/assets/lbt_logo_dark.png',
			},
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			editLink: {
				baseUrl: 'https://github.com/OscarLBT/lbt-docs/edit/main/',
			},
			sidebar: [
				{
					label: 'Start here',
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'Stock Checks',
							link: '/guides/stock_checks'
						},

						{
							label: 'Shopping',
							link: '/guides/shopping',
							badge: 'New',
						},
					],
				},

				{
					label: 'What\'s new',
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'Changelog',
							link: '/whats_new/changelog'
						},
					],
				},

			],
		}),
	],
  site: 'https://portal.lunadabaytile.com',
  base: '/docs',
});
