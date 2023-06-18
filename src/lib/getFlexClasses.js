import classnames from 'classnames';

// キーワードがきまっててレイアウト的によく使うものはユーティリティを用意
export default function getFlexClasses({ ai, jc, fxw, as, js }) {
	return classnames({
		'u--fxw:w': 'wrap' === fxw,
		'u--fxw:n': 'nowrap' === fxw,

		// 'u--ai:b': 'baseline' === ai,
		'u--ai:c': 'center' === ai,
		'u--ai:fs': 'flex-start' === ai,
		'u--ai:fe': 'flex-end' === ai,
		// 'u--ai:start': 'start' === ai,
		// 'u--ai:end': 'end' === ai,
		'u--ai:s': 'strech' === ai, // emmet に ai:s はあるが start とややこしい

		// justify-content:;
		'u--jc:c': 'center' === jc,
		'u--jc:fe': 'flex-end' === jc,
		'u--jc:fs': 'flex-start' === jc,
		// 'u--jc:start': 'start' === jc,
		// 'u--jc:end': 'end' === jc,
		// 'u--jc:s': 'strech' === jc,
		'u--jc:sb': 'space-between' === jc,
		// 'u--jc:sa': 'space-around' === jc,
		// u--js:se? space-evenly

		// as (align-self)
		// 'u--as:c': 'center' === as,
		// 'u--as:fs': 'flex-start' === as,
		// 'u--as:fe': 'flex-end' === as,
		// 'u--as:start': 'start' === as,
		// 'u--as:end': 'flex-end' === as,
		// 'u--as:s': 'strech' === as,

		// js (justify-self)
		// 'u--js:c': 'center' === js,
		// 'u--js:fs': 'flex-start' === js,
		// 'u--js:fe': 'flex-end' === js,
		// 'u--js:start': 'start' === js,
		// 'u--js:end': 'flex-end' === js,
		// 'u--js:s': 'strech' === js,
	});
}
