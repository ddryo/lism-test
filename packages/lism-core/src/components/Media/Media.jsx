// import React from 'react';
import { Core } from '../Core';
import { getMediaProps } from '../../lib';

export default function Media(props) {
	// objectFit をそのまま受け取れる
	props = getMediaProps(props);

	return <Core tag='img' {...props} />;
}
