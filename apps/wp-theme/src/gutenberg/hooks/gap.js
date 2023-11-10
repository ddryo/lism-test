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
			gap: {
				type: 'string',
			},
		},
	};

	return newSettings;
}

function addEditProps() {}

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
// addFilter( 'blocks.registerBlockType', 'lism/gap/addEditProps', addEditProps );
addFilter('editor.BlockEdit', 'lism/gap/withInspectorControls', withInspectorControls);
