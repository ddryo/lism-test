import React from 'react';
import { Lism } from '../Lism';

export default function Cluster(props) {
	return <Lism useFlexProps lismClass='l--cluster' gap={20} {...props} />;
}

// セパレーターを項目間に追加する
// see: https://react.dev/reference/react/Children#running-some-code-for-each-child
