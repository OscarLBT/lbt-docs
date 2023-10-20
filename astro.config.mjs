import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs',
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
});