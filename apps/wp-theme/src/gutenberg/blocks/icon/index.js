/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { BaseControl, PanelBody } from '@wordpress/components';

/**
 * @Internal dependencies
 */
import metadata from './block.json';
import icon from './icon';
import { SelectorPreviewTip, IconPicker } from '@/gutenberg/components';

registerBlockType(metadata.name, {
	title: __('Icon', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: ({ attributes, setAttributes }) => {
		const { iconSlug } = attributes;
		const blockProps = useBlockProps({});

		// const { ref, ...restBlockProps } = blockProps;

		return (
			<>
				<InspectorControls>
					<PanelBody title={__('Setting', 'lism-blocks')}>
						<BaseControl label={__('Select icon', 'lism-blocks')}>
							<IconPicker
								value={iconSlug}
								onChange={(value) => setAttributes({ iconSlug: value })}
							/>
						</BaseControl>
					</PanelBody>
				</InspectorControls>
				<div {...blockProps}>Icon Block</div>
			</>
		);
	},
});
