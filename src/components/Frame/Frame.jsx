import React from 'react';
import { Lism } from '../Lism';
import { Layer } from '../Layer';
import classnames from 'classnames';
// import { getMediaLayer, getFilterLayer } from '../helper';

const RATIO_PRESETS = ['16:9', '4:3', '3:2', '1:1', 'golden', 'silver', 'bronze', 'ogp'];

// "Frame" (b--banner) にする
export default function Frame({ children, style = {}, ratio = '16:9', isPortrait, ...props }) {
	const blockProps = {
		lismClass: 'l--frame',
		'data-direction': isPortrait ? 'portrait' : null,
		style,
		...props,
	};

	if (RATIO_PRESETS.includes(ratio)) {
		blockProps['data-ratio'] = ratio;
	} else {
		// ratioを : で分割してd,nに代入
		const [d, n] = ratio.split(':');
		blockProps.style['--d'] = d || null;
		blockProps.style['--n'] = n || null;
	}

	return (
		<Lism {...blockProps}>
			<div className='l--frame__placeholder' aria-hidden='true'></div>
			{children}
		</Lism>
	);
}

export const FrameContent = ({ children, className, ...props }) => {
	const ContentProps = {
		className: classnames('l--frame__content', className),
		position: 'cover',
		...props,
	};

	return <Layer {...ContentProps}>{children}</Layer>;
};
