export default [
	{
		label: 'Start Here',
		translations: {
			ja: 'はじめに',
		},
		items: [
			// Each item here is one entry in the navigation menu.
			{
				label: 'Overview',
				link: '/overview/',
				translations: {
					ja: '概要',
				},
			},
			{
				label: 'Consepts',
				link: '/concepts/',
				translations: {
					ja: 'コンセプト',
				},
			},
			{
				label: 'Getting Started',
				link: '/getting-started/',
			},

			// {
			// 	label: 'Example Guide',
			// 	link: '/guides/example/',
			// 	badge: '新規',
			// 	translations: {
			// 		ja: 'ここからはじめる',
			// 	},
			// },
		],
	},
	{
		label: 'Lism CSS',
		autogenerate: {
			directory: 'css',
		},
		// items: [
		// 	{
		// 		label: 'Tokens',
		// 		translations: {
		// 			ja: '概要',
		// 		},
		// 		autogenerate: {
		// 			directory: 'tokens',
		// 		},
		// 	},
		// ],
	},
	{
		label: 'Reference',
		autogenerate: {
			directory: 'reference',
		},
	},
];
