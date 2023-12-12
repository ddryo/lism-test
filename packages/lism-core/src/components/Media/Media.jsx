// import React from 'react';
import { Core } from '../Core';
import { getMediaProps } from '../../lib';

// デフォルトで img にしているだけの Core
export default function Media({ lismState = [], tag = 'img', ...props }) {
	props = getMediaProps(props);

	return <Core tag={tag} lismState={lismState} {...props} />;
}
