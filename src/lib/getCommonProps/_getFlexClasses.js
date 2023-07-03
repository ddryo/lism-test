import classnames from 'classnames';

// キーワードがきまっててレイアウト的によく使うものはユーティリティを用意
export default function getFlexClasses({ ai, jc, fxw, as, js }) {
	return classnames({
		'-fxw:w': 'wrap' === fxw,
		'-fxw:n': 'nowrap' === fxw,

		// '-ai:b': 'baseline' === ai,
		'-ai:c': 'center' === ai,
		'-ai:fs': 'flex-start' === ai,
		'-ai:fe': 'flex-end' === ai,
		// '-ai:start': 'start' === ai,
		// '-ai:end': 'end' === ai,
		'-ai:s': 'strech' === ai, // emmet に ai:s はあるが start とややこしい

		// justify-content:;
		'-jc:c': 'center' === jc,
		'-jc:fe': 'flex-end' === jc,
		'-jc:fs': 'flex-start' === jc,
		// '-jc:start': 'start' === jc,
		// '-jc:end': 'end' === jc,
		// '-jc:s': 'strech' === jc,
		'-jc:sb': 'space-between' === jc,
		// '-jc:sa': 'space-around' === jc,
		// -js:se? space-evenly

		// as (align-self)
		// '-as:c': 'center' === as,
		// '-as:fs': 'flex-start' === as,
		// '-as:fe': 'flex-end' === as,
		// '-as:start': 'start' === as,
		// '-as:end': 'flex-end' === as,
		// '-as:s': 'strech' === as,

		// js (justify-self)
		// '-js:c': 'center' === js,
		// '-js:fs': 'flex-start' === js,
		// '-js:fe': 'flex-end' === js,
		// '-js:start': 'start' === js,
		// '-js:end': 'flex-end' === js,
		// '-js:s': 'strech' === js,
	});
}
