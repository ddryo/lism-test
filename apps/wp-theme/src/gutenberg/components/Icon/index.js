/**
 * @External dependencies
 */
import classnames from 'classnames';

/**
 * @Internal dependencies
 */
import { ICON_NAMESPACE } from '../IconModal/config';

export default function Icon({ icon, size = '1em', className = '', returnItagIf404 = true }) {
	let iconPrefix = '';
	const ICON_DATA = window[ICON_NAMESPACE] || {};
	const ALL_ICONS = ICON_DATA.src || {};

	// アイコン名のプレフィックスからアイコン種類を判別してアイコン生成
	if (icon.startsWith('Ls')) {
		iconPrefix = 'ls';
	} else if (icon.startsWith('Io')) {
		iconPrefix = 'io';
	} else if (icon.startsWith('Fi')) {
		iconPrefix = 'fi';
	} else if (icon.startsWith('Ph')) {
		iconPrefix = 'ph';
	} else if (icon.startsWith('Fa')) {
		iconPrefix = 'fa';
	}

	if (iconPrefix) {
		const theIcons = ALL_ICONS[iconPrefix] || {};
		if (!theIcons[icon]) return null;

		const TheIconComponent = theIcons[icon];

		return (
			<TheIconComponent
				className={className || null}
				height={size}
				width={size}
				xmlns='http://www.w3.org/2000/svg'
				aria-hidden={true}
			/>
		);
	}

	// svgに変換できなければiタグで返す
	return returnItagIf404 ? <i className={classnames(icon, className)}></i> : null;
}
