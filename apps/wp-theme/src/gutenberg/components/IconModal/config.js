/**
 * @WordPress dependencies
 */
import { _x } from '@wordpress/i18n';

/**
 * memo: パッケージによって変える
 */
export const ICON_NAMESPACE = '__LISM_ICONS__';

export const ICON_STYLE_LIST = {
	hr: ['fill', 'outline'],
	io: ['fill', 'outline'],
	fa: ['fill', 'outline'],
	ph: ['fill', 'regular', 'thin'],
	fi: ['regular', 'thin'],
	ls: ['regular'],
};

export const ICON_STYLE_LABELS = {
	regular: 'Regular',
	fill: 'Fill',
	solid: 'Solid',
	outline: 'Outline',
	thin: 'Thin',
	light: 'Light',
};

// prettier-ignore
export const ICON_CATEGORIES = {
	'--arrow--': _x('Arrows', 'icon-category', 'lism-blocks'),
	'--symbols--': _x('Symbols/Shapes', 'icon-category', 'lism-blocks'),
	'--communication--': _x('Communication', 'icon-category', 'lism-blocks'),
	'--media-file--': _x('Media/File', 'icon-category', 'lism-blocks'),
	'--works-study--': _x('Work/Study', 'icon-category', 'lism-blocks'),
	'--shop-money--': _x('Shopping/Money', 'icon-category', 'lism-blocks'),
	'--living--': _x('Living', 'icon-category', 'lism-blocks'),
	'--entertainment--': _x('Entertainment', 'icon-category', 'lism-blocks'),
	'--maps-transportation--': _x('Map/Transportation', 'icon-category', 'lism-blocks'),
	'--system-devices--': _x('System/Device', 'icon-category', 'lism-blocks'),
	'--design--': _x('Design', 'icon-category', 'lism-blocks'),
	'--wellness--': _x('Wellness', 'icon-category', 'lism-blocks'),
	'--nature-weather--': _x('Nature/Weather', 'icon-category', 'lism-blocks'),
	'--people--': _x('People', 'icon-category', 'lism-blocks'),
	'--logo--': _x('Logo', 'icon-category', 'lism-blocks'),
	'--tools--': _x('Tools', 'icon-category', 'lism-blocks'),
	'--others--': _x('Others', 'icon-category', 'lism-blocks'),
};
/* eslint-enable */
