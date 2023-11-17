/**
 * @External dependencies
 */
import { Core, Lism, FluidFix, Stack, TermListRow } from '@loos/lism-core';

/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
	RichText,
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
import { SelectorPreviewTip, FlowControl } from '@/gutenberg/components';

registerBlockType(metadata.name, {
	title: __('Term List Row', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: ({ attributes, setAttributes }) => {
		const {
			templateLock,
			term,
			flowGap,
			isFluidMode,
			fixedWidth,
			fluidMinWidth,
			anchor,
			className,
		} = attributes;

		const units = useCustomUnits({ availableUnits: ['px', 'em', 'rem', '%'] });

		const blockProps = useBlockProps({
			lismClass: {
				c: 'c--termList__row',
			},
			gap: 10,
			ms: 30,
			fix: isFluidMode ? 'first' : undefined,
		});

		const innerBlocksProps = useInnerBlocksProps(blockProps, {
			template: [['core/paragraph']],
			templateLock,
		});

		const { children, ref, ...innerProps } = innerBlocksProps;

		const ddProps = {
			isFlow: flowGap !== undefined ? flowGap : undefined,
		};

		const Component = isFluidMode ? FluidFix : Stack;

		return (
			<>
				<InspectorControls group='styles'>
					<PanelBody title={__('Layout', 'lism-blocks')}>
						<FlowControl
							value={flowGap}
							onChange={(value) => {
								setAttributes({ flowGap: value });
							}}
						/>
						<ToggleControl
							label={__('Enable fluid mode', 'lism-blocks')}
							checked={!!isFluidMode}
							onChange={(value) => {
								setAttributes({ isFluidMode: value });
							}}
						/>
						{isFluidMode && (
							<>
								<UnitControl
									size={'__unstable-large'}
									label={__('Description Term width', 'lism-blocks')}
									units={units}
									min={0}
									value={fixedWidth}
									onChange={(value) => {
										setAttributes({ fixedWidth: value || undefined });
									}}
								/>
								<UnitControl
									size={'__unstable-large'}
									label={__('Description Details min width', 'lism-blocks')}
									units={units}
									min={0}
									value={fluidMinWidth}
									onChange={(value) => {
										setAttributes({ fluidMinWidth: value || undefined });
									}}
								/>
							</>
						)}
					</PanelBody>
				</InspectorControls>
				<Component {...innerProps} forwardedRef={ref}>
					{/* <SelectorPreviewTip icon={icon} anchor={anchor} className={className} /> */}
					<Core tag='dt' fw='bold' className='c--termList__dt'>
						<RichText
							aria-label={__('Write Description Term…')}
							placeholder={__('Write Description Term…')}
							value={term}
							onChange={(value) => {
								setAttributes({ term: value });
							}}
						/>
					</Core>
					<Lism tag='dd' className='c--termList__dd' {...ddProps}>
						{children}
					</Lism>
				</Component>
			</>
		);
	},
	save: ({ attributes }) => {
		const { term, flowGap, isFluidMode, fixedWidth, fluidMinWidth } = attributes;

		const blockProps = useBlockProps.save({
			term,
			isFlow: flowGap !== undefined ? flowGap : undefined,
			mode: isFluidMode ? 'fluid' : undefined,
			fixW: isFluidMode ? fixedWidth : undefined,
			fluidMinW: isFluidMode ? fluidMinWidth : undefined,
		});

		return (
			<TermListRow {...blockProps}>
				<InnerBlocks.Content />
			</TermListRow>
		);
	},
});
