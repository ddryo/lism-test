/**
 * @External dependencies
 */
import { Reel } from '@loos/lism-core';

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
import { SelectorPreviewTip, AspectControl } from '@/gutenberg/components';

const DIRECTION_OPTIONS = [
	{
		label: __('Horizontal', 'lism-blocks'),
		value: 'horizontal',
	},
	{
		label: __('Vertical', 'lism-blocks'),
		value: 'vertical',
	},
];

const SNAP_OPTIONS = [
	{
		label: __('Start', 'lism-blocks'),
		value: 'start',
	},
	{
		label: __('Center', 'lism-blocks'),
		value: 'center',
	},
];

const BREAKPOINTS = [
	{
		label: __('None', 'lism-blocks'),
		value: 'none',
	},
	{
		label: __('sm', 'lism-blocks'),
		value: 'sm',
	},
	{
		label: __('md', 'lism-blocks'),
		value: 'md',
	},
];

registerBlockType(metadata.name, {
	title: __('Reel', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: ({ attributes, setAttributes }) => {
		const { templateLock, itemWidth, snap, direction, unreel, aspect, anchor, className } = attributes;
		const units = useCustomUnits({ availableUnits: ['px', 'em', 'rem', '%'] });

		const blockProps = useBlockProps({
			itemBasis: itemWidth,
			snap,
			direction : direction === 'vertical' ? 'column' : undefined,
			unreel,
			aspect,
		});

		const innerBlocksProps = useInnerBlocksProps(blockProps, {
			template: [['lism-blocks/box']],
			allowedBlocks: ['lism-blocks/box'],
			templateLock,
		});

		const { children, ref, ...innerProps } = innerBlocksProps;

		return (
			<>
				<InspectorControls group='styles'>
					<PanelBody title={__('Layout', 'lism-blocks')}>
						<UnitControl
							size={'__unstable-large'}
							label={__('Item width', 'lism-blocks')}
							units={units}
							min={0}
							value={itemWidth}
							onChange={(value) => {
								setAttributes({ itemWidth: value || undefined });
							}}
						/>
						<ToggleGroupControl
							label={__('Snap align', 'lism-blocks')}
							value={snap}
							isBlock
							onChange={(value) => {
								setAttributes({ snap: value });
							}}
						>
							{SNAP_OPTIONS.map(({ label, value }) => (
								<ToggleGroupControlOption key={value} value={value} label={label} />
							))}
						</ToggleGroupControl>
						<ToggleGroupControl
							label={__('Direction', 'lism-blocks')}
							value={direction}
							isBlock
							onChange={(value) => {
								setAttributes({ direction: value });
							}}
						>
							{DIRECTION_OPTIONS.map(({ label, value }) => (
								<ToggleGroupControlOption key={value} value={value} label={label} />
							))}
						</ToggleGroupControl>
						<ToggleGroupControl
							label={__('Breakpoint to release reel', 'lism-blocks')}
							value={unreel || 'none'}
							isBlock
							onChange={(value) => {
								setAttributes({ unreel: value !== 'none' ? value : undefined });
							}}
						>
							{BREAKPOINTS.map(({ label, value }) => (
								<ToggleGroupControlOption key={value} value={value} label={label} />
							))}
						</ToggleGroupControl>
						<AspectControl
							value={aspect}
							onChange={(value) => {
								setAttributes({ aspect: value });
							}}
						/>
					</PanelBody>
				</InspectorControls>
				<Reel {...innerProps} forwardedRef={ref}>
					{/* <SelectorPreviewTip icon={icon} anchor={anchor} className={className} /> */}
					{children}
				</Reel>
			</>
		);
	},

	save: ({ attributes }) => {
		const { itemWidth, snap, direction, unreel, aspect } = attributes;

		const blockProps = useBlockProps.save({
			itemBasis: itemWidth,
			snap,
			direction : direction === 'vertical' ? 'column' : undefined,
			unreel,
			aspect,
		});

		return (
			<Reel {...blockProps}>
				<InnerBlocks.Content />
			</Reel>
		);
	},
});
