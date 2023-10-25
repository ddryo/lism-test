/**
 * @WordPress dependencies
 */
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * @Internal dependencies
 */

const DEFAULT_OPTIONS = [
	{ label: '<header>', value: 'header' },
	{ label: '<main>', value: 'main' },
	{ label: '<section>', value: 'section' },
	{ label: '<article>', value: 'article' },
	{ label: '<aside>', value: 'aside' },
	{ label: '<footer>', value: 'footer' },
];

export default function HTMLElementControls({ tagName, options = DEFAULT_OPTIONS, onChange }) {
	const htmlElementMessages = {
		header: __(
			'The <header> element should represent introductory content, typically a group of introductory or navigational aids.'
		),
		main: __(
			'The <main> element should be used for the primary content of your document only. '
		),
		section: __(
			"The <section> element should represent a standalone portion of the document that can't be better represented by another element."
		),
		article: __(
			'The <article> element should represent a self-contained, syndicatable portion of the document.'
		),
		aside: __(
			"The <aside> element should represent a portion of a document whose content is only indirectly related to the document's main content."
		),
		footer: __(
			'The <footer> element should represent a footer for its nearest sectioning element (e.g.: <section>, <article>, <main> etc.).'
		),
	};

	return (
		<SelectControl
			clasName='lism-htmlElementControl'
			__nextHasNoMarginBottom
			label={__('HTML element')}
			options={[{ label: __('Default (<div>)'), value: 'div' }, ...options]}
			value={tagName}
			onChange={onChange}
			help={htmlElementMessages[tagName]}
		/>
	);
}
