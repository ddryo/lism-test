import React from 'react';
// import { Lism } from '../Lism';
// import { Layer } from '../Layer';
import { getCommonProps, getLismMainProp } from '../../lib';

// import { Center } from '../Center';
// import classnames from 'classnames';
// import { getMediaLayer, getFilterLayer } from '../helper';

const RATIO_PRESETS = ['16/9', '4/3', '3/2', '2/1', '1/1', 'golden', 'silver', 'bronze', 'ogp'];

// "Frame" (b--banner) にする
export default function Frame({ children, as, tag, ratio = '16/9', isPortrait, ...props }) {
	const FrameTag = as || tag || 'div';

	if (typeof FrameTag === 'function' && !FrameTag.prototype?.isReactComponent) {
		console.error('Lism Frame: Invalid component passed.');
		return <p data-has-lism-error>Error@Frame: Invalid component passed.</p>;
	}

	const blockProps = {
		lismClass: 'l--frame',
		'data-direction': isPortrait ? 'portrait' : null,
	};

	// {_,sm,md,...} の形式に変換
	const ratios = getLismMainProp(ratio);

	// ratio = ratio.replace(':', '/');
	if (RATIO_PRESETS.includes(ratios._)) {
		blockProps['data-ratio'] = ratios._;
		delete ratios._;
	}
	blockProps.lismVar = ratios;

	const { className, style, attrs } = getCommonProps(props, blockProps);

	return (
		<FrameTag className={className} style={style} {...attrs}>
			{/* <div className='l--frame__placeholder' aria-hidden='true'></div> */}
			{children}
		</FrameTag>
	);
}
