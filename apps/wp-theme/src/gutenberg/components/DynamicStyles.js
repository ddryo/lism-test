/**
 * @WordPress dependencies
 */
import { BlockList } from '@wordpress/block-editor';
import { useContext, createPortal, Platform } from '@wordpress/element';

export default function DynamicStyles({ style }) {
	if (!Platform.isWeb) return null;

	const styleElement =
		typeof BlockList.__unstableElementContext !== 'undefined'
			? useContext(BlockList.__unstableElementContext)
			: document.querySelector('head');

	const TheStyle = () => {
		return <style>{style}</style>;
	};

	return style && styleElement ? createPortal(<TheStyle />, styleElement) : null;
}
