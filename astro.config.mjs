import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs',
      customCss: [
        // Relative path to your custom CSS file
        './src/styles/custom.css',
      ],
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
							link: '/guides/shopping'
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
