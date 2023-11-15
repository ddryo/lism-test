/**
 * @External dependencies
 */
import { Spacer } from '@loos/lism-core';

/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { useRef} from '@wordpress/element';
import {
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { resizeCornerNE as icon } from '@wordpress/icons';

/**
 * @Internal dependencies
 */
import metadata from './block.json';
import {
	AlignItemsControl,
	JustifyItemsControl,
	SelectorPreviewTip,
	ResponsiveColumnsControl,
} from '@/gutenberg/components';

registerBlockType(metadata.name, {
	title: __('Spacer', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: (props) => {
		const { attributes, setAttributes } = props;

		const { width, height } = attributes;

		const blockProps = useBlockProps({
			w: '100%',
			h: '50',
			style: {
				backgroundColor: 'rgba(0,0,0,.1)',
			},
		});
		const {ref, ...restBlockProps } = blockProps;

		return (
			<>
				<InspectorControls>
					<PanelBody title={__('Setting', 'lism-blocks')}>
					</PanelBody>
				</InspectorControls>
				<Spacer {...restBlockProps} forwardedRef={ref} />
			</>
		);
	},

	save: ({ attributes }) => {
		const { width, height } = attributes;

		const blockProps = useBlockProps.save({
			w: width,
			h: height,
		});

		return (
			<Spacer {...blockProps} />
		);
	},
});
