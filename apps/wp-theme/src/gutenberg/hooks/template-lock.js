/**
 * @WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';

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

function addAttributes(settings) {
	if (!LISM_BLOCKS.includes(settings.name)) {
		return settings;
	}

	const newSettings = {
		...settings,
		attributes: {
			...settings.attributes,
			templateLock: {
				type: ['string', 'boolean'],
				enum: ['all', 'insert', 'contentOnly', false],
			},
		},
	};

	return newSettings;
}

addFilter('blocks.registerBlockType', 'lism/templateLock/addAttributes', addAttributes);
