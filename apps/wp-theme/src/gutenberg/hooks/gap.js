/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';
import { createHigherOrderComponent } from '@wordpress/compose';
import { PanelBody } from '@wordpress/components';

/**
 * @Internal dependencies
 */
import { ResponsiveGapControl } from '@/gutenberg/components';

// gapを有効にするブロック
const LISM_BLOCKS = [
	'lism-blocks/box',
	'lism-blocks/center',
	'lism-blocks/cluster',
	'lism-blocks/columns',
	'lism-blocks/flex',
	'lism-blocks/fluid-fix',
	'lism-blocks/gap',
	'lism-blocks/ratio-grid',
	'lism-blocks/reel',
	'lism-blocks/stack',
	'lism-blocks/switch-fix',
	'lism-blocks/tile-grid',
];

// attributesにgapを追加する
function addAttributes(settings) {
	if (!LISM_BLOCKS.includes(settings.name)) {
		return settings;
	}

	const newSettings = {
		...settings,
		attributes: {
			...settings.attributes,
			gap: {
				type: 'string',
			},
		},
	};

	return newSettings;
}

// エディターのブロックにgapを反映させる
function addEditProps(blockType) {
	if (!LISM_BLOCKS.includes(blockType.name)) {
		return blockType;
	}

	const existingGetEditWrapperProps = blockType.getEditWrapperProps;

	blockType.getEditWrapperProps = (attributes) => {
		const wrapperProps = existingGetEditWrapperProps
			? existingGetEditWrapperProps(attributes)
			: {};
		const { gap } = attributes;

		return {
			...wrapperProps,
			gap,
		};
	};

	return blockType;
}

// gapを保存する
function addSaveProps(extraProps, blockType, attributes) {
	if (!LISM_BLOCKS.includes(blockType.name)) {
		return extraProps;
	}

	const { gap } = attributes;
	return {
		...extraProps,
		gap,
	};
}

// UI追加
const withInspectorControls = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		if (!LISM_BLOCKS.includes(props.name)) {
			return <BlockEdit {...props} />;
		}

		// const { attributes, setAttributes } = props;
		// const { gap } = attributes;

		return (
			<>
				<BlockEdit {...props} />
				<InspectorControls group='styles'>
					<PanelBody title={__('Spacing', 'lism-blocks')}>
						<ResponsiveGapControl />
					</PanelBody>
				</InspectorControls>
			</>
		);
	};
}, 'withInspectorControls');

addFilter('blocks.registerBlockType', 'lism/gap/addAttributes', addAttributes);
addFilter('blocks.registerBlockType', 'lism/gap/addEditProps', addEditProps);
addFilter('editor.BlockEdit', 'lism/gap/withInspectorControls', withInspectorControls);
addFilter('blocks.getSaveContent.extraProps', 'lism/gap/addSaveProps', addSaveProps);
