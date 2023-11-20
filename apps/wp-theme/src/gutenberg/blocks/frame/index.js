/**
 * @External dependencies
 */
import { Frame } from '@loos/lism-core';

/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import {
	PanelBody,
	ToggleControl,
	__experimentalUnitControl as UnitControl,
	__experimentalUseCustomUnits as useCustomUnits,
} from '@wordpress/components';

/**
 * @Internal dependencies
 */
import metadata from './block.json';
import icon from './icon';
import { SelectorPreviewTip, AspectControl, FlowControl } from '@/gutenberg/components';

const DEFAULT_HEIGHT = '500px';

registerBlockType(metadata.name, {
	title: __('Frame', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: ({ attributes, setAttributes }) => {
		const { templateLock, flowGap, aspect, height, anchor, className } = attributes;
		const isFixedHeight = !!height;

		const units = useCustomUnits({ availableUnits: ['px', 'em', 'rem', '%'] });

		const blockProps = useBlockProps({
			isFlow: flowGap !== undefined ? flowGap : undefined,
			aspect,
			h: height,
		});

		const innerBlocksProps = useInnerBlocksProps(blockProps, {
			template: [['core/paragraph']],
			templateLock,
		});

		const { children, ref, ...innerProps } = innerBlocksProps;

		return (
			<>
				<InspectorControls group='styles'>
					<PanelBody title={__('Layout', 'lism-blocks')}>
						<ToggleControl
							label={__('Use fixed height', 'lism-blocks')}
							checked={!!isFixedHeight}
							onChange={(value) => {
								if (value) {
									setAttributes({ aspect: undefined, height: DEFAULT_HEIGHT });
								} else {
									setAttributes({ height: undefined });
								}
							}}
						/>
						{isFixedHeight ? (
							<UnitControl
								size={'__unstable-large'}
								label={__('Height', 'lism-blocks')}
								units={units}
								min={0}
								value={height}
								onChange={(value) => {
									setAttributes({ height: value || undefined });
								}}
							/>
						) : (
							<AspectControl
								value={aspect}
								onChange={(value) => {
									setAttributes({ aspect: value });
								}}
							/>
						)}
						<FlowControl
							value={flowGap}
							onChange={(value) => {
								setAttributes({ flowGap: value });
							}}
						/>
					</PanelBody>
				</InspectorControls>
				<Frame {...innerProps} forwardedRef={ref}>
					{/* <SelectorPreviewTip icon={icon} anchor={anchor} className={className} /> */}
					{children}
				</Frame>
			</>
		);
	},

	save: ({ attributes }) => {
		const { flowGap, aspect, height } = attributes;

		const blockProps = useBlockProps.save({
			isFlow: flowGap !== undefined ? flowGap : undefined,
			aspect,
			h: height,
		});

		return (
			<Frame {...blockProps}>
				<InnerBlocks.Content />
			</Frame>
		);
	},
});
