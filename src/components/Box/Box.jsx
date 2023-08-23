import React from 'react';
import { Lism } from '../Lism';

// Box の as は htmlタグのみ受付可能。文字列チェックは <Lism> 側にて。
export default function Box({ ...props }) {
	return <Lism lismClass='l--box' {...props} />;
}
