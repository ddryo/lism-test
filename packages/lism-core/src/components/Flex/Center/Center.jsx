// import React from 'react';
import Flex from '../Flex';

export default function Center({ size, ...props }) {
	return <Flex _flexName='center' data-size={size || null} {...props} />;
}
