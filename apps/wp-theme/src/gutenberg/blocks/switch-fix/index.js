/**
 * @External dependencies
 */
import { SwitchFix } from '@loos/lism-core';

/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { useSelect } from '@wordpress/data';
import {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
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

const FIXED_ELEMENT_OPTIONS = [
	{
		label: __('First', 'lism-blocks'),
		value: 'first',
	},
	{
		label: __('Last', 'lism-blocks'),
		value: 'last',
	},
];

const FIXED_POSITION_OPTIONS = [
	{
		label: __('Left Up', 'lism-blocks'),
		value: 'left up',
	},
	{
		label: __('Left Down', 'lism-blocks'),
		value: 'left down',
	},
	{
		label: __('Right Up', 'lism-blocks'),
		value: 'right up',
	},
	{
		label: __('Right Down', 'lism-blocks'),
		value: 'right down',
	},
];

registerBlockType(metadata.name, {
	title: __('Switch Fix', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: ({ attributes, setAttributes, clientId }) => {
		const { fixedElementPosition, fixedWidth, anchor, className } = attributes;

		const units = useCustomUnits({ availableUnits: ['px', 'em', 'rem', '%'] });

		function onChangeFixedElement(value) {}

		const innerBlocksLength = useSelect(
			(select) => select(blockEditorStore).getBlocks(clientId).length,
			[clientId]
		);

		const blockProps = useBlockProps({
			fix: fixedElementPosition,
			fixW: fixedWidth,
		});

		const innerBlocksProps = useInnerBlocksProps(blockProps, {
			template: [['core/paragraph'], ['core/paragraph']],
			templateLock: 'all',
			renderAppender: innerBlocksLength < 2 ? InnerBlocks.ButtonBlockAppender : false,
		});

		const { children, ref, ...innerProps } = innerBlocksProps;

		return (
			<>
				<InspectorControls group='styles'>
					<PanelBody title={__('Layout', 'lism-blocks')}>
						<ToggleGroupControl
							label={__('Fixed element', 'lism-blocks')}
							onChange={onChangeFixedElement}
							isBlock
						>
							{FIXED_ELEMENT_OPTIONS.map(({ label, value }) => (
								<ToggleGroupControlOption key={value} value={value} label={label} />
							))}
						</ToggleGroupControl>
						<SelectControl
							label={__('Fixed element position', 'lism-blocks')}
							options={FIXED_POSITION_OPTIONS}
							value={fixedElementPosition}
							onChange={(value) => {
								setAttributes({fixedElementPosition: value});
							}}
						/>
						<UnitControl
							size={'__unstable-large'}
							label={__('Fluid element width', 'lism-blocks')}
							units={units}
							min={0}
							value={fixedWidth}
							onChange={(value) => {
								setAttributes({ fixedWidth: value || undefined });
							}}
						/>
					</PanelBody>
				</InspectorControls>
				<SwitchFix {...innerProps} forwardedRef={ref}>
					{/* <SelectorPreviewTip icon={icon} anchor={anchor} className={className} /> */}
					{children}
				</SwitchFix>
			</>
		);
	},
	save: ({ attributes }) => {
		const { fixedElementPosition, fixedWidth } = attributes;

		const blockProps = useBlockProps.save({
			fix: fixedElementPosition,
			fixW: fixedWidth,
		});

		return (
			<SwitchFix {...blockProps}>
				<InnerBlocks.Content />
			</SwitchFix>
		);
	},
});
