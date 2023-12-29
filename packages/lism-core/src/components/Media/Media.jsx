// import React from 'react';
import { Core } from '../Core';
import { getMediaProps } from '../../lib';

// memo: picture対応
export default function Media(props) {
	// objectFit をそのまま受け取れる
	props = getMediaProps(props);

	return <Core tag='img' {...props} />;
}
