/**
 * @External dependencies
 */
import classnames from 'classnames';

/**
 * @WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { AlignmentControl, BlockControls } from '@wordpress/block-editor';
import { createHigherOrderComponent } from '@wordpress/compose';

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
			textAlign: {
				type: 'string',
			},
		},
	};

	return newSettings;
}

export const withTextAlignStyles = createHigherOrderComponent(
	(BlockListBlock) => (props) => {
		const { name, attributes } = props;

		if (!LISM_BLOCKS.includes(name)) {
			return <BlockListBlock {...props} />;
		}

		const { textAlign } = attributes;
		const className = classnames(props?.className, {
			[`has-text-align-${textAlign}`]: textAlign,
		});

		return <BlockListBlock {...props} className={className} />;
	},
	'withPositionStyles'
);

function addSaveProps(extraProps, blockType, attributes) {
	if (!LISM_BLOCKS.includes(blockType.name)) {
		return extraProps;
	}

	const { textAlign } = attributes;

	extraProps.className = textAlign
		? classnames(extraProps.className, `has-text-align-${textAlign}`)
		: extraProps.className;

	return extraProps;
}

const withInspectorControls = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		if (!LISM_BLOCKS.includes(props.name)) {
			return <BlockEdit {...props} />;
		}

		const { attributes, setAttributes } = props;
		const { textAlign } = attributes;

		return (
			<>
				<BlockEdit {...props} />
				<BlockControls group='block'>
					<AlignmentControl
						value={textAlign}
						onChange={(value) => {
							setAttributes({ textAlign: value });
						}}
					/>
				</BlockControls>
			</>
		);
	};
}, 'withInspectorControls');

addFilter('blocks.registerBlockType', 'lism/textAlign/addAttributes', addAttributes);
addFilter('editor.BlockEdit', 'lism/textAlign/withInspectorControls', withInspectorControls);
addFilter('blocks.getSaveContent.extraProps', 'lism/textAlign/addSaveProps', addSaveProps);
addFilter('editor.BlockListBlock', 'lism/textAlign/withTextAlignStyles', withTextAlignStyles);
