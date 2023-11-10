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
import { PropsControl } from '@/gutenberg/components';

// lismPropsを有効にするブロック
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

function getFilteredLismProps(props) {
	return props.reduce((acc, { key, value }) => {
		if (!key || !value) {
			return acc;
		}
		acc[key] = value;
		return acc;
	}, {});
}

// attributesにlismPropsを追加する
function addAttributes(settings) {
	if (!LISM_BLOCKS.includes(settings.name)) {
		return settings;
	}

	const newSettings = {
		...settings,
		attributes: {
			...settings.attributes,
			lismProps: {
				type: 'array',
				items: {
					type: 'object',
				},
				default: [],
			},
		},
	};

	return newSettings;
}

// エディターのブロックにlismPropsを反映させる
function addEditProps(blockType) {
	if (!LISM_BLOCKS.includes(blockType.name)) {
		return blockType;
	}

	const existingGetEditWrapperProps = blockType.getEditWrapperProps;

	blockType.getEditWrapperProps = (attributes) => {
		const wrapperProps = existingGetEditWrapperProps
			? existingGetEditWrapperProps(attributes)
			: {};
		const { lismProps = [] } = attributes;
		const filteredLismProps = getFilteredLismProps(lismProps);

		return {
			...wrapperProps,
			...filteredLismProps,
		};
	};

	return blockType;
}

// lismPropsを保存する
function addSaveProps(extraProps, blockType, attributes) {
	if (!LISM_BLOCKS.includes(blockType.name)) {
		return extraProps;
	}

	const { lismProps = [] } = attributes;
	const filteredLismProps = getFilteredLismProps(lismProps);

	return {
		...extraProps,
		...filteredLismProps,
	};
}

// UI追加
const withInspectorControls = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		if (!LISM_BLOCKS.includes(props.name)) {
			return <BlockEdit {...props} />;
		}

		const { attributes, setAttributes } = props;
		const { lismProps } = attributes;

		return (
			<>
				<BlockEdit {...props} />
				<InspectorControls group='styles'>
					<PanelBody title={__('Props', 'lism-blocks')}>
						<PropsControl
							lismProps={lismProps}
							onChange={(value) => {
								setAttributes({ lismProps: value });
							}}
						/>
					</PanelBody>
				</InspectorControls>
			</>
		);
	};
}, 'withInspectorControls');

addFilter('blocks.registerBlockType', 'lism/lismProps/addAttributes', addAttributes);
addFilter('blocks.registerBlockType', 'lism/lismProps/addEditProps', addEditProps);
addFilter('editor.BlockEdit', 'lism/lismProps/withInspectorControls', withInspectorControls);
addFilter('blocks.getSaveContent.extraProps', 'lism/lismProps/addSaveProps', addSaveProps);
