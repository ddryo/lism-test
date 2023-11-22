/**
 * @External dependencies
 */
import { ChatBubble } from '@loos/lism-core';

/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
	RichText,
	InspectorControls,
	InnerBlocks,
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { comment as icon } from '@wordpress/icons';

/**
 * @Internal dependencies
 */
import metadata from './block.json';
import { SelectorPreviewTip, FlowControl } from '@/gutenberg/components';

const DEFAULT_FLOW_GAP = 's';
const DEFAULT_ICON_POSITION = 'left';
const DEFAULT_TYPE = 'chat';

const TYPE_OPTIONS = [
	{
		label: __('Chat', 'lism-blocks'),
		value: 'chat',
	},
	{
		label: __('Thinking', 'lism-blocks'),
		value: 'think',
	},
	{
		label: __('Box', 'lism-blocks'),
		value: 'box',
	},
];

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

const ALLOWED_BLOCKS = ['core/paragraph', 'core/list', 'core/heading', 'core/image'];

registerBlockType(metadata.name, {
	title: __('Chat Bubble', 'lism-blocks'),
	description: __('XXXXXXXXXXXXXXXXXXXXXX', 'lism-blocks'),
	icon,
	edit: ({ attributes, setAttributes }) => {
		const {
			templateLock,
			type,
			iconPosition,
			avatarID,
			avatarURL,
			avatarName,
			flowGap = 's',
			anchor,
			className,
		} = attributes;

		function renderAvatar({ open }) {
			return (
				<Button className='__placeholder' onClick={open}>
					<img
						src={avatarURL}
						alt={avatarName}
						className={`wp-image-${avatarID}`}
						width={60}
						height={60}
					/>
				</Button>
			);
		}

		const blockProps = useBlockProps({
			type,
			direction: iconPosition,
			contentProps: {
				isFlow: flowGap !== undefined ? flowGap : DEFAULT_FLOW_GAP,
			},
		});

		const innerBlocksProps = useInnerBlocksProps(blockProps, {
			template: [['core/paragraph']],
			templateLock,
			allowedBlocks: ALLOWED_BLOCKS,
		});

		const { children, ref, ...innerProps } = innerBlocksProps;

		return (
			<>
				<InspectorControls group='styles'>
					<PanelBody title={__('Layout', 'lism-blocks')}>
						<FlowControl
							hasToggle={false}
							value={flowGap}
							onChange={(value) => {
								setAttributes({ flowGap: value });
							}}
						/>
					</PanelBody>
				</InspectorControls>
				<InspectorControls>
					<PanelBody title={__('Setting', 'lism-blocks')}>
						<ToggleGroupControl
							label={__('Type', 'lism-blocks')}
							value={type || DEFAULT_TYPE}
							isBlock
							onChange={(value) => {
								setAttributes({
									type: value !== DEFAULT_TYPE ? value : undefined,
								});
							}}
						>
							{TYPE_OPTIONS.map(({ label, value }) => (
								<ToggleGroupControlOption key={value} value={value} label={label} />
							))}
						</ToggleGroupControl>
						<ToggleGroupControl
							label={__('Icon position', 'lism-blocks')}
							value={iconPosition || DEFAULT_ICON_POSITION}
							isBlock
							onChange={(value) => {
								setAttributes({
									iconPosition:
										value !== DEFAULT_ICON_POSITION ? value : undefined,
								});
							}}
						>
							{ICON_POSITION_OPTIONS.map(({ label, value }) => (
								<ToggleGroupControlOption key={value} value={value} label={label} />
							))}
						</ToggleGroupControl>
					</PanelBody>
				</InspectorControls>
				<ChatBubble
					{...innerProps}
					forwardedRef={ref}
					iconPlaceholder={
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) => {
									const newAvatarURL = media.sizes.thumbnail
										? media.sizes.thumbnail.url
										: media.url;

									setAttributes({
										avatarURL: newAvatarURL,
										avatarID: media.id,
										avatarAlt: media.alt,
									});
								}}
								type='image'
								value={avatarID}
								render={renderAvatar}
							/>
						</MediaUploadCheck>
					}
					name={
						<RichText
							placeholder={__('Add name...')}
							value={avatarName}
							onChange={(newTerm) => {
								setAttributes({ avatarName: newTerm });
							}}
						/>
					}
				>
					<SelectorPreviewTip icon={icon} anchor={anchor} className={className} />
					{children}
				</ChatBubble>
			</>
		);
	},
	save: (props) => {
		const { attributes } = props;
		const { type, iconPosition, avatarURL, avatarName, flowGap } = attributes;

		const blockProps = useBlockProps.save({
			type,
			direction: iconPosition,
			contentProps: {
				isFlow: flowGap !== undefined ? flowGap : DEFAULT_FLOW_GAP,
			},
		});

		return (
			<ChatBubble
				{...blockProps}
				name={<RichText.Content value={avatarName} />}
				icon={avatarURL}
			>
				<InnerBlocks.Content />
			</ChatBubble>
		);
	},
});
