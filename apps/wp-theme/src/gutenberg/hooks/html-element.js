/**
 * @WordPress dependencies
 */
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';
import { createHigherOrderComponent } from '@wordpress/compose';

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

const HTML_ELEMENTS = [
	{
		label: '<header>',
		value: 'header',
		description: __(
			'The <header> element should represent introductory content, typically a group of introductory or navigational aids.',
			'lism-blocks'
		),
	},
	{
		label: '<main>',
		value: 'main',
		description: __(
			'The <main> element should be used for the primary content of your document only. ',
			'lism-blocks'
		),
	},
	{
		label: '<section>',
		value: 'section',
		description: __(
			"The <section> element should represent a standalone portion of the document that can't be better represented by another element.",
			'lism-blocks'
		),
	},
	{
		label: '<article>',
		value: 'article',
		description: __(
			'The <article> element should represent a self-contained, syndicatable portion of the document.'
		),
	},
	{
		label: '<aside>',
		value: 'aside',
		description: __(
			"The <aside> element should represent a portion of a document whose content is only indirectly related to the document's main content.",
			'lism-blocks'
		),
	},
	{
		label: '<footer>',
		value: 'footer',
		description: __(
			'The <footer> element should represent a footer for its nearest sectioning element (e.g.: <section>, <article>, <main> etc.).',
			'lism-blocks'
		),
	},
];

function addAttributes(settings) {
	if (!LISM_BLOCKS.includes(settings.name)) {
		return settings;
	}

	const newSettings = {
		...settings,
		attributes: {
			...settings.attributes,
			tagName: {
				type: 'string',
				default: 'div',
			},
		},
	};

	return newSettings;
}

function addSaveProps(extraProps, blockType, attributes) {
	if (!LISM_BLOCKS.includes(blockType.name)) {
		return extraProps;
	}
	extraProps.tag = attributes.tagName;
	return extraProps;
}

export const withInspectorControls = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		if (!LISM_BLOCKS.includes(props.name)) {
			return <BlockEdit {...props} />;
		}

		const { attributes, setAttributes } = props;
		const { tagName = 'div' } = attributes;

		return (
			<>
				<InspectorControls group='advanced'>
					<SelectControl
						__nextHasNoMarginBottom
						label={__('HTML element', 'lism-blocks')}
						options={[
							{ label: __('Default (<div>)'), value: 'div' },
							...HTML_ELEMENTS.map(({ label, value }) => {
								return {
									label,
									value,
								};
							}),
						]}
						value={tagName}
						onChange={(value) => {
							setAttributes({ tagName: value });
						}}
						help={HTML_ELEMENTS?.[tagName]?.description}
					/>
				</InspectorControls>
				<BlockEdit {...props} />
			</>
		);
	};
}, 'withInspectorControls');

addFilter('blocks.registerBlockType', 'lism/htmlElement/addAttributes', addAttributes);
addFilter('editor.BlockEdit', 'lism/lismProps/htmlElement', withInspectorControls);
addFilter('blocks.getSaveContent.extraProps', 'lism/htmlElement/addSaveProps', addSaveProps);
