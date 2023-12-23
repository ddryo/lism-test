// import { getMaybeCssVar } from '../../lib';

export function getClusterProps({ lismStyle = {}, itemMinW, ...props }) {
	// if (delimiterColor) {
	// 	lismStyle['--delimiter--c'] = getMaybeCssVar(delimiterColor, 'color');
	// }

	if (null != itemMinW) {
		lismStyle['--item--minW'] = itemMinW;
	}

	props.lismStyle = lismStyle;
	return props;
}

export function getSideFlexProps({ lismStyle = {}, sideW, fluidMinW, ...props }) {
	if (null != fluidMinW) {
		lismStyle['--fluid--minW'] = fluidMinW;
	}
	if (null != sideW) {
		lismStyle['--side--w'] = sideW;
	}

	props.lismStyle = lismStyle;
	return props;
}
