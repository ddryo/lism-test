/**
 * @External dependencies
 */
import { Center } from '@loos/lism-core';

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
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalUnitControl as UnitControl,
	__experimentalUseCustomUnits as useCustomUnits,
} from '@wordpress/components';

/**
 * @Internal dependencies
 */
import metadata from './block.json';
import icon from './icon';
import { SelectorPreviewTip } from '@/gutenberg/components';

const SIZE_OPTIONS = [
	{
		label: __('None', 'lism-blocks'),
		value: 'none',
	},
	{
		label: __('Cover', 'lism-blocks'),
		value: 'cover',
	},
	{
		label: __('Content', 'lism-blocks'),
		value: 'content',
	},
];

registerBlockType(metadata.name, {
	title: __('Center', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: ({ attributes, setAttributes }) => {
		const { templateLock, height, size, anchor, className } = attributes;

		const units = useCustomUnits({ availableUnits: ['px', 'em', 'rem', '%'] });

		const blockProps = useBlockProps({
			h: height,
			size,
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
						<ToggleGroupControl
							label={__('Size', 'lism-blocks')}
							onChange={(nextSize) => {
								const hasSize = nextSize !== 'none';
								if (hasSize) {
									setAttributes({
										size: nextSize,
										height: undefined,
									});
								} else {
									setAttributes({ size: undefined });
								}
							}}
							isBlock
							value={size || 'none'}
						>
							{SIZE_OPTIONS.map(({ label, value }) => (
								<ToggleGroupControlOption key={value} value={value} label={label} />
							))}
						</ToggleGroupControl>
						{!size && (
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
						)}
					</PanelBody>
				</InspectorControls>
				<Center {...innerProps} forwardedRef={ref}>
					{/* <SelectorPreviewTip icon={icon} anchor={anchor} className={className} /> */}
					{children}
				</Center>
			</>
		);
	},

	save: ({ attributes }) => {
		const { height, size } = attributes;

		const blockProps = useBlockProps.save({
			h: height,
			size,
		});

		return (
			<Center {...blockProps}>
				<InnerBlocks.Content />
			</Center>
		);
	},
});
