import React from 'react';
import { Lism } from '../Lism';
// import { Layer } from '../Layer';
import { getLismMainProp } from '../../lib';

// import { Center } from '../Center';
// import classnames from 'classnames';
// import { getMediaLayer, getFilterLayer } from '../helper';

const RATIO_PRESETS = ['16/9', '4/3', '3/2', '2/1', '1/1', 'golden', 'silver', 'bronze', 'ogp'];

// "Frame" (b--banner) にする
export default function Frame({ children, ratio = '16/9', isPortrait, ...props }) {
	const blockProps = {
		lismClass: 'l--frame',
		lismStyle: {},
		'data-direction': isPortrait ? 'portrait' : null,
	};

	// {_,sm,md,...} の形式に変換
	const ratios = getLismMainProp(ratio);

	// ratio = ratio.replace(':', '/');
	if (RATIO_PRESETS.includes(ratios._)) {
		blockProps['data-ratio'] = ratios._;
		delete ratios._;
	}
	// else {
	// 	blockProps.lismStyle['--ratio'] = ratio || null;
	// 	// const [d, n] = ratio.split(':');
	// 	// const [d, n] = ratio.split(':');
	// 	// blockProps.lismStyle['--d'] = d || null;
	// 	// blockProps.lismStyle['--n'] = n || null;
	// }

	return (
		<Lism {...blockProps} lismVar={ratios} {...props}>
			{/* <div className='l--frame__placeholder' aria-hidden='true'></div> */}
			{children}
		</Lism>
	);
}

export const FrameContent = ({ children, ...props }) => {
	const ContentProps = {
		// className: classnames('l--frame__content', className),
		size: 'cover',
		z: 1,
		p: 40,
		...props,
	};
	return children;
	// return <Layer {...ContentProps}>{children}</Layer>;
};
