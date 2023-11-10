/**
 * @WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { createBlock } from '@wordpress/blocks';

const LISM_BLOCKS = [
	'lism-blocks/box',
	'lism-blocks/center',
	'lism-blocks/cluster',
	'lism-blocks/columns',
	'lism-blocks/flex',
	'lism-blocks/fluid-fix',
	'lism-blocks/ratio-grid',
	'lism-blocks/stack',
	'lism-blocks/tile-grid',
];

function addTransforms(settings) {
	if (!LISM_BLOCKS.includes(settings.name)) {
		return settings;
	}

	const transforms = {
		from: settings?.transforms?.from || [],
		to: settings?.transforms?.to || [],
	};

	const newSettings = {
		...settings,
		transforms: {
			...transforms,
			from: [
				...transforms.from,
				{
					type: 'block',
					blocks: ['core/group'],
					transform: (attributes, content) => {
						const newAttrs = {
							tagName: attributes.tagName,
						};
						return createBlock(settings.name, newAttrs, content);
					},
				},
			],
		},
	};

	return newSettings;
}

addFilter('blocks.registerBlockType', 'lism/lismProps/addTransforms', addTransforms);
