import React from 'react';
import { Lism } from '../Lism';

export default function Cluster(props) {
	return <Lism useFlexProps lismClass='l--cluster' gap={20} {...props} />;
}
