/**
 * @External dependencies
 */
import classnames from 'classnames';
import {
	AccordionHeader,
	AccordionBody,
	AccordionLabel,
	AccordionIcon as LismAccordionIcon,
	Icon as LismIcon,
} from '@loos/lism-core';

/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
	BlockControls,
	RichText,
	InspectorControls,
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import {
	BaseControl,
	Icon,
	PanelBody,
	ToggleControl,
	ToolbarDropdownMenu,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { details as icon, heading, headingLevel1, headingLevel2, headingLevel3, headingLevel4, headingLevel5, headingLevel6 } from '@wordpress/icons';

/**
 * @Internal dependencies
 */
import metadata from './block.json';
import { SelectorPreviewTip, IconPicker, Icon as InternalIcon } from '@/gutenberg/components';

const ICON_POSITION_OPTIONS = [
	{
		label: __('Left', 'lism-blocks'),
		value: 'left',
	},
	{
		label: __('Right', 'lism-blocks'),
		value: 'right',
	},
];

const HEADER_ELEMENT_OPTIONS = [
	{
		title: __('Default (Summary)', 'lism-blocks'),
		value: 'default',
		icon: heading
	},
	{
		title: __('Heading 1', 'lism-blocks'),
		value: 'h1',
		icon: headingLevel1
	},
	{
		title: __('Heading 2', 'lism-blocks'),
		value: 'h2',
		icon: headingLevel2
	},
	{
		title: __('Heading 3', 'lism-blocks'),
		value: 'h3',
		icon: headingLevel3
	},
	{
		title: __('Heading 4', 'lism-blocks'),
		value: 'h4',
		icon: headingLevel4
	},
	{
		title: __('Heading 5', 'lism-blocks'),
		value: 'h5',
		icon: headingLevel5
	},
	{
		title: __('Heading 6', 'lism-blocks'),
		value: 'h6',
		icon: headingLevel6
	},
];

function AccordionIcon({ openIconSlug, closeIconSlug, isTriggerIcon }) {
	if (openIconSlug && closeIconSlug) {
		return (
			<LismAccordionIcon isTrigger={isTriggerIcon}>
				<LismIcon icon={<InternalIcon icon={openIconSlug} />} data-to='open' />
				<LismIcon icon={<InternalIcon icon={closeIconSlug} />} data-to='close' />
			</LismAccordionIcon>
		);
	}
	if (!openIconSlug && !closeIconSlug) {
		return <LismAccordionIcon isTrigger={isTriggerIcon} />;
	}
	return (
		<LismAccordionIcon isTrigger={isTriggerIcon}>
			<LismIcon icon={<InternalIcon icon={openIconSlug || closeIconSlug} />} />
		</LismAccordionIcon>
	);
}

registerBlockType(metadata.name, {
	title: __('Accordion', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: ({ attributes, setAttributes, clientId }) => {
		const {
			templateLock,
			summaryText,
			iconPosition,
			openIconSlug,
			closeIconSlug,
			isTriggerIcon,
			headerElement,
			anchor,
			className,
		} = attributes;

		// ブロックまたは子ブロックが選択されているかどうか
		const hasSelection = useSelect(
			( select ) => {
				const { isBlockSelected, hasSelectedInnerBlock } =
					select( blockEditorStore );
				/* Sets deep to true to also find blocks inside the details content block. */
				return (
					hasSelectedInnerBlock( clientId, true ) ||
					isBlockSelected( clientId )
				);
			},
			[ clientId ]
		);

		const blockProps = useBlockProps({
			className: classnames('c--accordion', { '-opened' : hasSelection}),
		});

		const innerBlocksProps = useInnerBlocksProps(blockProps, {
			template: [['core/paragraph']],
			templateLock,
		});

		const { children, ...innerProps } = innerBlocksProps;

		const toolbarHeadingIcon = headerElement ? HEADER_ELEMENT_OPTIONS.find( ( { value } ) => value === headerElement ).icon : heading;

		return (
			<>
				<BlockControls group='block'>
					<ToolbarDropdownMenu
						icon={ toolbarHeadingIcon }
						label={ __( 'Change heading element', 'lism-blocks' ) }
						controls={ HEADER_ELEMENT_OPTIONS.map( ( {icon, title, value} ) => {
							return {
								title,
								icon: <Icon icon={ icon } isPressed />,
								isActive: headerElement ? headerElement === value : value === 'default',
								role: 'menuitemradio',
								onClick: () => {
									setAttributes({
										headerElement:
											value !== 'default'
												? value
												: undefined,
									});
								}
							};
						} ) }
					/>
				</BlockControls>
				<InspectorControls>
					<PanelBody title={__('Settings')}>
						<ToggleGroupControl
							label={__('Icon position', 'lism-blocks')}
							value={iconPosition}
							isBlock
							onChange={(value) => {
								setAttributes({
									iconPosition: value,
								});
							}}
						>
							{ICON_POSITION_OPTIONS.map(({ label, value }) => (
								<ToggleGroupControlOption key={value} value={value} label={label} />
							))}
						</ToggleGroupControl>
						<BaseControl label={__('Icon', 'lism-blocks')}>
							<IconPicker
								value={openIconSlug}
								onChange={(value) => {
									setAttributes({
										openIconSlug: value || undefined,
										closeIconSlug: value ? closeIconSlug : undefined,
									});
								}}
							/>
						</BaseControl>
						{openIconSlug && (
							<BaseControl label={__('Icon to close', 'lism-blocks')}>
								<IconPicker
									value={closeIconSlug}
									onChange={(value) => {
										setAttributes({ closeIconSlug: value || undefined });
									}}
								/>
							</BaseControl>
						)}
						<ToggleControl
							label={__('Limit trigger to icon only', 'lism-blocks')}
							checked={!!isTriggerIcon}
							onChange={(value) => {
								setAttributes({ isTriggerIcon: value });
							}}
							help={__(
								'If checked, the trigger for opening and closing the accordion will be limited to the icon.',
								'lism-blocks'
							)}
						/>
					</PanelBody>
				</InspectorControls>
				<details {...innerProps} open={hasSelection} >
					<SelectorPreviewTip icon={icon} anchor={anchor} className={className} />
					<AccordionHeader  onClick={ ( event ) => event.preventDefault() }>
						{iconPosition === 'left' && (
							<AccordionIcon
								openIconSlug={openIconSlug}
								closeIconSlug={closeIconSlug}
							/>
						)}
						<AccordionLabel tag={headerElement}>
							<RichText
								placeholder={__('Add summary text...', 'lism-blocks')}
								value={summaryText}
								onChange={(value) => {
									setAttributes({ summaryText: value });
								}}
							/>
						</AccordionLabel>
						{iconPosition === 'right' && (
							<AccordionIcon
								openIconSlug={openIconSlug}
								closeIconSlug={closeIconSlug}
							/>
						)}
					</AccordionHeader>
					<AccordionBody>{children}</AccordionBody>
				</details>
			</>
		);
	},
	save: ({ attributes }) => {
		const {
			summaryText,
			iconPosition,
			openIconSlug,
			closeIconSlug,
			isTriggerIcon,
			headerElement,
		} = attributes;

		const blockProps = useBlockProps.save({
			className: 'c--accordion',
		});

		return (
			<details {...blockProps} >
				<AccordionHeader>
					{iconPosition === 'left' && (
						<AccordionIcon
							openIconSlug={openIconSlug}
							closeIconSlug={closeIconSlug}
							isTriggerIcon={isTriggerIcon}
						/>
					)}
					<AccordionLabel tag={headerElement}>
						<RichText.Content value={summaryText} />
					</AccordionLabel>
					{iconPosition === 'right' && (
						<AccordionIcon
							openIconSlug={openIconSlug}
							closeIconSlug={closeIconSlug}
							isTriggerIcon={isTriggerIcon}
						/>
					)}
				</AccordionHeader>
				<AccordionBody>
					<InnerBlocks.Content />
				</AccordionBody>
			</details>
		);
	},
});
