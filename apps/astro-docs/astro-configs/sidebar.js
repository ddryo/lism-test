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
		label: 'Lism UI',
		// autogenerate: {
		// 	directory: 'reference',
		// },
		items: [
			// Each item here is one entry in the navigation menu.
			{
				label: 'Utility Props',
				link: '/components/props/',
			},
			{
				label: 'Core',
				link: '/components/core',
			},
			{
				label: 'Layouter',
				link: '/components/core',
			},
		],
	},
	{
		label: 'Layout Modules',
		items: [
			{
				label: 'Flex',
				link: '/layout/props/',
			},
			{
				label: 'Cluster',
				link: '/layout/core',
			},
			{
				label: 'Stack',
				link: '/layout/core',
			},

			{
				label: 'Grid',
				link: '/layout/core',
			},
		],
	},
	{
		label: 'Element Modules',
		items: [
			{
				label: 'Avatar',
				link: '/layout/props/',
			},
			{
				label: 'Icon',
				link: '/layout/core',
			},
		],
	},
	{
		label: 'Component Modules',

		items: [
			{
				label: 'Alert',
				link: '/layout/core',
			},
			{
				label: 'Accordion',
				link: '/layout/core',
			},
			{
				label: 'Button',
				link: '/layout/props/',
			},
		],
	},

	{
		label: 'Reference',
		autogenerate: {
			directory: 'reference',
		},
	},
];
