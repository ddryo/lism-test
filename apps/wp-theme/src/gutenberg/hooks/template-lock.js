/**
 * @WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';

// templateLockを有効にするブロック
const LISM_BLOCKS = [
	'lism-blocks/accordion',
	'lism-blocks/accordion-group',
	'lism-blocks/box',
	'lism-blocks/center',
	'lism-blocks/cluster',
	'lism-blocks/columns',
	'lism-blocks/flex',
	'lism-blocks/frame',
	'lism-blocks/ratio-grid',
	'lism-blocks/reel',
	'lism-blocks/stack',
	'lism-blocks/term-list',
	'lism-blocks/term-list-row',
	'lism-blocks/tile-grid',
];

// attributesにtemplateLockを追加する
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
