export default [
	{
		label: 'Example',
		link: '/concepts/',
		badge: '新規',
		translations: {
			ja: 'ここからはじめる',
		},
	},
	{
		label: 'Guides',
		translations: {
			ja: 'ガイド',
		},
		items: [
			// Each item here is one entry in the navigation menu.
			{
				label: 'Example Guide',
				link: '/guides/example/',
				badge: '新規',
				translations: {
					ja: 'ここからはじめる',
				},
			},
		],
	},
	{
		label: 'Reference',
		autogenerate: {
			directory: 'reference',
			autogenerate: { directory: 'guides' },
		},
	},
];
